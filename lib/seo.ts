import type { Metadata } from "next";
import { site } from "@/content/site";

/** Metadáta podstránky vrátane náhľadu pri zdieľaní (LinkedIn, Facebook, WhatsApp). */
export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sk_SK",
      siteName: site.name,
      url: path,
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Novorsa – automatizácia procesov a AI pre firmy" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: ["/og.png"] },
  };
}
