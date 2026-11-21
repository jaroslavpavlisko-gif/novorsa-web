"use server";

import { headers } from "next/headers";
import { checkBotId } from "botid/server";
import { checkRateLimit } from "@vercel/firewall";
import { contact, site } from "@/content/site";
import { salutation } from "@/lib/salutation";
import { LIMITS } from "@/lib/formLimits";
import { EMAIL_LOGO_PNG_BASE64 } from "@/lib/emailLogo";

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
  errors?: Partial<Record<"firstName" | "lastName" | "company" | "ico" | "email" | "phone" | "area" | "message", string>>;
  values?: Record<string, string>;
};

// Záložný limit v pamäti jednej inštancie. Hlavný spoločný limit pre všetky inštancie
// je pravidlo „Limit kontaktného formulára“ vo Vercel Firewall (5 odoslaní z IP za 10 minút).
// Jednoduchý limit požiadaviek na jednu inštanciu servera (ochrana pred zahltením).
const hits = new Map<string, number[]>();
function rateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > limit;
}

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const values = {
    firstName: get("firstName"),
    lastName: get("lastName"),
    company: get("company"),
    ico: get("ico"),
    email: get("email"),
    phone: get("phone"),
    area: get("area"),
    message: get("message"),
  };

  // Honeypot: človek toto pole nevidí, robot ho vyplní.
  if (get("website")) return { status: "ok", message: "Ďakujeme, ozveme sa do dvoch pracovných dní." };

  const errors: ContactState["errors"] = {};
  // Jednoriadkové polia: bez zalomení riadkov a riadiacich znakov, s horným limitom dĺžky.
  const singleLine = (s: string) => !/[\u0000-\u001f\u007f]/.test(s);
  const tooLong = (s: string, max: number) => s.length > max || !singleLine(s);
  if (tooLong(values.firstName, LIMITS.firstName)) errors.firstName = "Meno je príliš dlhé alebo obsahuje nepovolené znaky.";
  if (tooLong(values.lastName, LIMITS.lastName)) errors.lastName = "Priezvisko je príliš dlhé alebo obsahuje nepovolené znaky.";
  if (tooLong(values.company, LIMITS.company)) errors.company = "Názov spoločnosti je príliš dlhý alebo obsahuje nepovolené znaky.";
  if (tooLong(values.email, LIMITS.email)) errors.email = "E-mailová adresa je príliš dlhá.";
  if (tooLong(values.phone, LIMITS.phone) || (values.phone && !/^[+\d\s()/-]{6,}$/.test(values.phone)))
    errors.phone = "Skontrolujte, prosím, telefónne číslo.";
  if (!errors.firstName && values.firstName.length < 2) errors.firstName = "Napíšte, prosím, svoje meno.";
  if (!errors.lastName && values.lastName.length < 2) errors.lastName = "Napíšte, prosím, svoje priezvisko.";
  if (!errors.company && values.company.length < 2) errors.company = "Napíšte, prosím, názov spoločnosti.";
  if (values.ico && !/^\d{6,8}$/.test(values.ico.replace(/\s/g, ""))) errors.ico = "IČO má 6 až 8 číslic.";
  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errors.email = "Skontrolujte, prosím, e-mailovú adresu.";
  if (!contact.areas.includes(values.area)) errors.area = "Vyberte oblasť.";
  if (values.message.length > LIMITS.message) errors.message = "Popis je príliš dlhý (max. 4 000 znakov).";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Skontrolujte, prosím, označené polia.", errors, values };
  }

  // Vercel BotID: neviditeľné overenie, že formulár odoslal človek, nie robot.
  let botCheckOk = true;
  try {
    const started = Date.now();
    const verification = await checkBotId();
    if (verification.isBot) {
      // Bez osobných údajov: len výsledok a trvanie, aby sa dali odhaliť falošné poplachy.
      console.warn("BotID: požiadavka označená ako bot", {
        ms: Date.now() - started,
        verifiedBot: verification.isVerifiedBot ?? false,
        bypassed: verification.bypassed ?? false,
      });
      return {
        status: "error",
        message: "Správu sa nepodarilo overiť. Napíšte nám, prosím, priamo na info@novorsa.sk.",
        values,
      };
    }
  } catch (e) {
    // Ak overenie zlyhá technicky, dopyt neztratíme: interný e-mail odíde,
    // ale automatické potvrdenie na zadanú adresu sa nepošle (nedá sa zneužiť na rozosielanie).
    botCheckOk = false;
    console.error("BotID: overenie zlyhalo", e instanceof Error ? e.name : "unknown");
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return { status: "error", message: "Odoslali ste priveľa správ. Skúste to, prosím, neskôr.", values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    console.error("Kontaktný formulár: chýbajú premenné RESEND_API_KEY, CONTACT_TO alebo CONTACT_FROM.");
    return {
      status: "error",
      message: "Formulár je dočasne nedostupný. Napíšte nám, prosím, priamo na info@novorsa.sk.",
      values,
    };
  }

  const rows: [string, string][] = [
    ["Meno", `${values.firstName} ${values.lastName}`],
    ["Spoločnosť", values.company],
    ["IČO", values.ico || "–"],
    ["E-mail", values.email],
    ["Telefón", values.phone || "–"],
    ["Oblasť", values.area],
  ];
  const html = `<h2>Nový dopyt z webu Novorsa</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escape(v)}</td></tr>`)
    .join("")}</table><p><strong>Popis:</strong></p><p>${values.message ? escape(values.message).replace(/\n/g, "<br>") : "–"}</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nPopis:\n${values.message || "–"}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `Dopyt z webu: ${values.company} – ${values.area}`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Resend chyba", res.status, res.headers.get("x-request-id") ?? "");
      throw new Error("send failed");
    }
  } catch {
    return {
      status: "error",
      message: "Správu sa nepodarilo odoslať. Skúste to znova alebo nám napíšte na info@novorsa.sk.",
      values,
    };
  }

  // Potvrdenie odosielateľovi. Chyba tu už neruší odoslaný dopyt.
  // Posiela sa len po úspešnom overení BotID a najviac 2× za 10 minút na tú istú adresu
  // (pravidlo „Limit potvrdzujúcich e-mailov“ vo Vercel Firewall, spoločné pre všetky inštancie).
  if (botCheckOk && !(await confirmationLimited(values.email.toLowerCase(), h))) {
    // Text zámerne neobsahuje popis z formulára, aby sa formulár nedal zneužiť na rozosielanie cudzieho obsahu.
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: `Novorsa <${to}>`,
          to: [values.email],
          reply_to: to,
          subject: "Ďakujeme za správu | Novorsa",
          html: confirmationHtml(values.firstName, values.lastName, values.area),
          text: confirmationText(values.firstName, values.lastName, values.area),
          attachments: [
            { filename: "novorsa.png", content: EMAIL_LOGO_PNG_BASE64, content_id: "novorsa-logo", content_type: "image/png" },
          ],
        }),
      });
      if (!res.ok) console.error("Resend potvrdenie chyba", res.status, res.headers.get("x-request-id") ?? "");
    } catch (e) {
      console.error("Resend potvrdenie výnimka", e instanceof Error ? e.name : "unknown");
    }
  }

  return { status: "ok", message: "Ďakujeme! Správa dorazila a ozveme sa do dvoch pracovných dní." };
}

/** Spoločný limit potvrdení na jednu adresu cez Vercel Firewall; pri výpadku záložný limit v pamäti. */
async function confirmationLimited(email: string, h: Awaited<ReturnType<typeof headers>>): Promise<boolean> {
  try {
    const request = new Request(`${site.url}/kontakt`, { method: "POST", headers: new Headers(Array.from(h.entries())) });
    const { rateLimited: limited } = await checkRateLimit("kontakt-potvrdenie", {
      request,
      rateLimitKey: email,
      timeout: 1500,
    });
    return limited;
  } catch (e) {
    console.error("Firewall limit potvrdení: kontrola zlyhala", e instanceof Error ? e.name : "unknown");
    return rateLimited(`to:${email}`, 2, 10 * 60 * 1000);
  }
}

/** Veta o prijatí dopytu; pri „Zatiaľ neviem“ bez názvu oblasti. */
function interestSentence(area: string, html: boolean) {
  const known = area && area !== "Zatiaľ neviem";
  const a = html ? `<strong>${escape(area)}</strong>` : area;
  const end = html
    ? "evidujeme a <strong>ozveme sa Vám do dvoch pracovných dní</strong>."
    : "evidujeme a ozveme sa Vám do dvoch pracovných dní.";
  return known ? `Váš záujem o naše služby v oblasti ${a} ${end}` : `Váš záujem o naše služby ${end}`;
}

function confirmationText(firstName: string, lastName: string, area: string) {
  return `${salutation(firstName, lastName)}

ďakujeme za Vašu správu. ${interestSentence(area, false)}

Ak chcete niečo doplniť, stačí odpovedať na tento e-mail.

S pozdravom

tím Novorsa

${site.email} · ${site.phone} · novorsa.sk
Novorsa je značka spoločnosti ${site.company.name}`;
}

function confirmationHtml(firstName: string, lastName: string, area: string) {
  return `<!doctype html><html lang="sk"><body style="margin:0;background:#f3f6f5;font-family:Arial,Helvetica,sans-serif;color:#14191a">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6f5;padding:32px 12px"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden">
<tr><td style="background:#0f6e6e;padding:22px 32px"><img src="cid:novorsa-logo" width="165" height="45" alt="novorsa" style="display:block;border:0;color:#ffffff;font-size:24px;font-weight:bold"></td></tr>
<tr><td style="height:4px;background:#6fd0c7;line-height:4px;font-size:0">&nbsp;</td></tr>
<tr><td style="padding:32px;font-size:15px;line-height:1.6">
<p style="margin:0 0 16px">${escape(salutation(firstName, lastName))}</p>
<p style="margin:0 0 16px">ďakujeme za Vašu správu. ${interestSentence(area, true)}</p>
<p style="margin:0 0 24px">Ak chcete niečo doplniť, stačí odpovedať na tento e-mail.</p>
<p style="margin:0 0 16px">S pozdravom</p>
<p style="margin:0"><strong>tím Novorsa</strong></p>
</td></tr>
<tr><td style="padding:18px 32px;background:#e5efed;font-size:12.5px;color:#5b6264;line-height:1.6">
<a href="mailto:${site.email}" style="color:#0f6e6e">${site.email}</a> · <a href="tel:${site.phone.replace(/\s/g, "")}" style="color:#0f6e6e">${site.phone}</a> · <a href="https://novorsa.sk" style="color:#0f6e6e">novorsa.sk</a><br>
Novorsa je značka spoločnosti ${escape(site.company.name)}
</td></tr></table></td></tr></table></body></html>`;
}
