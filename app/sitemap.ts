import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales, path, type RouteKey } from "@/lib/i18n";
import { languageAlternates } from "@/lib/seo";

const pages: { key: RouteKey; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { key: "home", priority: 1, changeFrequency: "monthly" },
  { key: "solutions", priority: 0.9, changeFrequency: "monthly" },
  { key: "apps", priority: 0.8, changeFrequency: "monthly" },
  { key: "process", priority: 0.8, changeFrequency: "monthly" },
  { key: "calculator", priority: 0.7, changeFrequency: "monthly" },
  { key: "about", priority: 0.7, changeFrequency: "monthly" },
  { key: "contact", priority: 0.8, changeFrequency: "yearly" },
  { key: "privacy", priority: 0.2, changeFrequency: "yearly" },
  { key: "cookies", priority: 0.2, changeFrequency: "yearly" },
];

/** Mapa stránok so všetkými jazykovými verziami a odkazmi medzi nimi (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (p: string) => `${site.url}${p}`;
  return pages.flatMap((p) =>
    locales.map((lang) => ({
      url: abs(path(lang, p.key)),
      changeFrequency: p.changeFrequency,
      priority: lang === "sk" ? p.priority : Math.round(Math.max(0.1, p.priority - 0.1) * 10) / 10,
      alternates: {
        languages: Object.fromEntries(Object.entries(languageAlternates(p.key)).map(([k, v]) => [k, abs(v)])),
      },
    })),
  );
}
