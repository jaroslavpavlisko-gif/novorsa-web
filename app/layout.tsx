import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ConsentManager } from "@/components/consent/ConsentManager";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import "./subpages.css";
import "./theme.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Automatizácia procesov a AI pre firmy | Novorsa",
    template: "%s | Novorsa",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: site.url,
    siteName: site.name,
    title: "Automatizácia procesov a AI pre firmy | Novorsa",
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Novorsa – automatizácia procesov a AI pre firmy" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0C1D1E",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.company.name,
  url: site.url,
  email: site.email,
  description: site.description,
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sk" className={dmSans.variable}>
      <body>
        <a className="skip-link" href="#obsah">
          Preskočiť na obsah
        </a>
        <Header />
        <main id="obsah">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Analytics />
        <ConsentManager />
      </body>
    </html>
  );
}
