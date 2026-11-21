"use server";

import { headers } from "next/headers";
import { checkBotId } from "botid/server";
import { contact } from "@/content/site";

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
  errors?: Partial<Record<"firstName" | "lastName" | "company" | "ico" | "email" | "area" | "message", string>>;
  values?: Record<string, string>;
};

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
  if (values.firstName.length < 2) errors.firstName = "Napíšte, prosím, svoje meno.";
  if (values.lastName.length < 2) errors.lastName = "Napíšte, prosím, svoje priezvisko.";
  if (values.company.length < 2) errors.company = "Napíšte, prosím, názov spoločnosti.";
  if (values.ico && !/^\d{6,8}$/.test(values.ico.replace(/\s/g, ""))) errors.ico = "IČO má 6 až 8 číslic.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errors.email = "Skontrolujte, prosím, e-mailovú adresu.";
  if (!contact.areas.includes(values.area)) errors.area = "Vyberte oblasť.";
  if (values.message.length > 4000) errors.message = "Popis je príliš dlhý (max. 4 000 znakov).";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Skontrolujte, prosím, označené polia.", errors, values };
  }

  // Vercel BotID: neviditeľné overenie, že formulár odoslal človek, nie robot.
  try {
    const verification = await checkBotId();
    if (verification.isBot) {
      return {
        status: "error",
        message: "Správu sa nepodarilo overiť. Napíšte nám, prosím, priamo na info@novorsa.sk.",
        values,
      };
    }
  } catch (e) {
    // Ak overenie zlyhá technicky, formulár nezablokujeme a chybu zapíšeme do logu.
    console.error("BotID: overenie zlyhalo", e);
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
      console.error("Resend chyba", res.status, await res.text());
      throw new Error("send failed");
    }
  } catch {
    return {
      status: "error",
      message: "Správu sa nepodarilo odoslať. Skúste to znova alebo nám napíšte na info@novorsa.sk.",
      values,
    };
  }

  return { status: "ok", message: "Ďakujeme! Správa dorazila a ozveme sa do dvoch pracovných dní." };
}
