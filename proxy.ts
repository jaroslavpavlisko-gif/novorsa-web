import { NextResponse, type NextRequest } from "next/server";
import { defaultLang, internalSlug, path, routeKeys, routes, type Lang } from "@/lib/i18n";

// Preklad verejných adries na interné stránky v app/[lang]/:
//   /riesenia          → /sk/riesenia
//   /cz/reseni         → /cz/riesenia
//   /en/solutions      → /en/riesenia
// Interné alebo nesprávne jazykové adresy presmeruje na správnu verejnú adresu.
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const parts = pathname.split("/").filter(Boolean);

  // /sk/... sa verejne nepoužíva, slovenčina je na koreni.
  if (parts[0] === defaultLang) {
    return redirect(request, `/${parts.slice(1).join("/")}`, search);
  }

  let lang: Lang = defaultLang;
  if (parts[0] === "cz" || parts[0] === "en") lang = parts.shift() as Lang;

  const [slug, ...rest] = parts;
  const tail = rest.length ? `/${rest.join("/")}` : "";

  if (!slug) return rewrite(request, `/${lang}`, search);

  const internal = internalSlug(lang, slug);
  if (internal) return rewrite(request, `/${lang}/${internal}${tail}`, search);

  // Slug z iného jazyka (napr. /en/riesenia) → správna adresa v aktuálnom jazyku.
  const key = routeKeys.find((k) => Object.values(routes[k]).includes(slug as never));
  if (key && routes[key][lang]) return redirect(request, `${path(lang, key)}${tail}`, search);

  // Neexistujúca stránka: zobrazí sa 404 v danom jazyku.
  return rewrite(request, `/${lang}/${parts.join("/")}`, search);
}

function rewrite(request: NextRequest, to: string, search: string) {
  return NextResponse.rewrite(new URL(`${to}${search}`, request.url));
}

function redirect(request: NextRequest, to: string, search: string) {
  return NextResponse.redirect(new URL(`${to || "/"}${search}`, request.url), 308);
}

export const config = {
  // Bez statických súborov, interných ciest Next.js a API.
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
