import { site } from "@/content/site";
import type { Dict } from "@/content";
import { htmlLang, type Lang } from "@/lib/i18n";
import { salutationFor } from "@/lib/salutation";

// Potvrdzujúci e-mail pre odosielateľa formulára (HTML a textová verzia).

/** Web v pätičke e-mailu podľa jazyka. Odkaz vedie na funkčnú adresu, kým domény .cz a .com nepresmerujeme. */
const website: Record<Lang, { label: string; href: string }> = {
  sk: { label: "novorsa.sk", href: "https://novorsa.sk" },
  cz: { label: "novorsa.cz", href: "https://novorsa.sk/cz" },
  en: { label: "novorsa.com", href: "https://novorsa.sk/en" },
};

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/** Vybraná oblasť ako samostatný riadok; pri „Zatiaľ neviem“ sa vynechá. */
function areaLine(t: Dict, area: string, html: boolean) {
  if (!area || area === t.contact.areaUnknown) return "";
  return html ? `<p style="margin:0 0 16px">${t.email.areaLabel} <strong>${escape(area)}</strong></p>` : `${t.email.areaLabel} ${area}\n\n`;
}

export function confirmationText(lang: Lang, t: Dict, firstName: string, lastName: string, area: string) {
  return `${salutationFor(lang, firstName, lastName)}

${t.email.thanks} ${t.email.reply}

${areaLine(t, area, false)}${t.email.addMore}

${t.email.regards}

${t.email.signature}

${site.email} · ${site.phone} · ${website[lang].label}
${t.email.brandOf} ${site.company.name}`;
}

export function confirmationHtml(lang: Lang, t: Dict, firstName: string, lastName: string, area: string) {
  return `<!doctype html><html lang="${htmlLang[lang]}"><body style="margin:0;background:#f3f6f5;font-family:Arial,Helvetica,sans-serif;color:#14191a">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6f5;padding:32px 12px"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden">
<tr><td style="background:#0f6e6e;padding:22px 32px"><img src="cid:novorsa-logo" width="165" height="45" alt="novorsa" style="display:block;border:0;color:#ffffff;font-size:24px;font-weight:bold"></td></tr>
<tr><td style="height:4px;background:#6fd0c7;line-height:4px;font-size:0">&nbsp;</td></tr>
<tr><td style="padding:32px;font-size:15px;line-height:1.6">
<p style="margin:0 0 16px">${escape(salutationFor(lang, firstName, lastName))}</p>
<p style="margin:0 0 16px">${t.email.thanks} <strong>${t.email.reply}</strong></p>
${areaLine(t, area, true)}
<p style="margin:0 0 24px">${t.email.addMore}</p>
<p style="margin:0 0 16px">${t.email.regards}</p>
<p style="margin:0"><strong>${t.email.signature}</strong></p>
</td></tr>
<tr><td style="padding:18px 32px;background:#e5efed;font-size:12.5px;color:#5b6264;line-height:1.6">
<a href="mailto:${site.email}" style="color:#0f6e6e">${site.email}</a> · <a href="tel:${site.phone.replace(/\s/g, "")}" style="color:#0f6e6e">${site.phone}</a> · <a href="${website[lang].href}" style="color:#0f6e6e">${website[lang].label}</a><br>
${t.email.brandOf} ${escape(site.company.name)}
</td></tr></table></td></tr></table></body></html>`;
}
