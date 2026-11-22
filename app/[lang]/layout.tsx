import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ConsentManager } from "@/components/consent/ConsentManager";
import { site } from "@/content/site";
import { getDict } from "@/content";
import { htmlLang, locales, path } from "@/lib/i18n";
import { langFrom, type LangParams } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";
import "../subpages.css";
import "../theme.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Všetky jazykové verzie sa vygenerujú vopred; iný jazyk v adrese = 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  const lang = await langFrom(props);
  const t = getDict(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: `${t.site.tagline} | ${site.name}`, template: `%s | ${site.name}` },
    description: t.site.description,
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0C1D1E",
};

export default async function RootLayout({ children, params }: { children: ReactNode } & LangParams) {
  const lang = await langFrom({ params });
  const t = getDict(lang);
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.company.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: t.site.description,
    logo: `${site.url}/icon.svg`,
    identifier: { "@type": "PropertyValue", propertyID: "IČO", value: site.company.ico },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.company.street,
      addressLocality: "Chorvátsky Grob",
      postalCode: "900 25",
      addressCountry: "SK",
    },
    areaServed: ["SK", "CZ"],
    ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
  };

  return (
    <html lang={htmlLang[lang]} className={dmSans.variable}>
      <body>
        <a className="skip-link" href="#obsah">
          {t.ui.skipLink}
        </a>
        <Header
          lang={lang}
          nav={t.nav.map((n) => ({ label: n.label, href: path(lang, n.to) }))}
          ctaHref={path(lang, "contact")}
          homeHref={path(lang, "home")}
          ui={t.ui}
        />
        <main id="obsah">{children}</main>
        <Footer lang={lang} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Analytics />
        <ConsentManager t={t.consent} cookiesHref={path(lang, "cookies")} />
      </body>
    </html>
  );
}
