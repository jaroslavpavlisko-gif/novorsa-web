// Jazykové verzie webu a preložené adresy podstránok.
// Slovenčina je na koreni (novorsa.sk/...), čeština na /cz, angličtina na /en.
// Interne sú všetky stránky v priečinku app/[lang]/ so slovenskými názvami priečinkov;
// proxy.ts preloží verejnú adresu na internú.

export const locales = ["sk", "cz", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "sk";

export const isLang = (v: string | undefined | null): v is Lang => !!v && (locales as readonly string[]).includes(v);

/** Hodnota atribútu lang a hreflang (čeština je „cs“, adresa však /cz). */
export const htmlLang: Record<Lang, string> = { sk: "sk", cz: "cs", en: "en" };
export const ogLocale: Record<Lang, string> = { sk: "sk_SK", cz: "cs_CZ", en: "en_GB" };
export const langLabel: Record<Lang, string> = { sk: "SK", cz: "CZ", en: "EN" };
export const langName: Record<Lang, string> = { sk: "Slovensky", cz: "Česky", en: "English" };

/** Verejné adresy podstránok v jednotlivých jazykoch. Kľúč `sk` je zároveň interný priečinok. */
export const routes = {
  home: { sk: "", cz: "", en: "" },
  solutions: { sk: "riesenia", cz: "reseni", en: "solutions" },
  apps: { sk: "aplikacie", cz: "aplikace", en: "apps" },
  process: { sk: "ako-pracujeme", cz: "jak-pracujeme", en: "how-we-work" },
  calculator: { sk: "kalkulacka", cz: "kalkulacka", en: "calculator" },
  about: { sk: "o-nas", cz: "o-nas", en: "about" },
  contact: { sk: "kontakt", cz: "kontakt", en: "contact" },
  privacy: { sk: "ochrana-osobnych-udajov", cz: "ochrana-osobnich-udaju", en: "privacy" },
  cookies: { sk: "cookies", cz: "cookies", en: "cookies" },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;
export const routeKeys = Object.keys(routes) as RouteKey[];

const prefix = (lang: Lang) => (lang === defaultLang ? "" : `/${lang}`);

/** Verejná adresa stránky, napr. path("en", "solutions", "hr") → "/en/solutions#hr". */
export function path(lang: Lang, key: RouteKey, hash?: string): string {
  const slug = routes[key][lang];
  const base = slug ? `${prefix(lang)}/${slug}` : prefix(lang) || "/";
  return hash ? `${base}#${hash}` : base;
}

/** Z verejnej adresy zistí jazyk a stránku (pre prepínač jazykov a zvýraznenie menu). */
export function parsePublicPath(pathname: string): { lang: Lang; key: RouteKey | null } {
  const parts = pathname.split("/").filter(Boolean);
  let lang: Lang = defaultLang;
  if (parts[0] === "cz" || parts[0] === "en") lang = parts.shift() as Lang;
  const slug = parts[0] ?? "";
  const key = routeKeys.find((k) => routes[k][lang] === slug) ?? null;
  return { lang, key };
}

/** Interný priečinok (slovenský názov) pre verejný slug daného jazyka. */
export function internalSlug(lang: Lang, publicSlug: string): string | null {
  const key = routeKeys.find((k) => routes[k][lang] === publicSlug);
  return key ? routes[key].sk : null;
}
