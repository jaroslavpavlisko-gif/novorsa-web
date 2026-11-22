import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { getDict } from "@/content";
import { htmlLang, isLang, locales, ogLocale, path, type Lang, type RouteKey } from "./i18n";

export type LangParams = { params: Promise<{ lang: string }> };

/** Jazyk z adresy; neznámy jazyk = stránka 404. */
export async function langFrom({ params }: LangParams): Promise<Lang> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return lang;
}

/** Odkazy na rovnakú stránku v ostatných jazykoch (hreflang) pre Google. */
export function languageAlternates(key: RouteKey): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of locales) out[htmlLang[l]] = path(l, key);
  out["x-default"] = path("sk", key);
  return out;
}

/** Metadáta podstránky vrátane náhľadu pri zdieľaní (LinkedIn, Facebook, WhatsApp) a jazykových verzií. */
export function pageMetadata(lang: Lang, key: RouteKey): Metadata {
  const t = getDict(lang);
  const m = t.meta[key as keyof typeof t.meta];
  const title = m.title;
  const description = m.description || t.site.description;
  const url = path(lang, key);
  const fullTitle = key === "home" ? `${title} | ${site.name}` : `${title} | ${site.name}`;
  return {
    title: key === "home" ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(key) },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      siteName: site.name,
      url,
      title: fullTitle,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: t.site.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/og.png"] },
  };
}
