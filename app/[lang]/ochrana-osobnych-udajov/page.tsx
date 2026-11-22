import type { Metadata } from "next";
import { langFrom, pageMetadata, type LangParams } from "@/lib/seo";
import { PrivacySk } from "@/components/legal/PrivacySk";
import { PrivacyCz } from "@/components/legal/PrivacyCz";
import { PrivacyEn } from "@/components/legal/PrivacyEn";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  return pageMetadata(await langFrom(props), "privacy");
}

export default async function PrivacyPage(props: LangParams) {
  const lang = await langFrom(props);
  if (lang === "cz") return <PrivacyCz />;
  if (lang === "en") return <PrivacyEn />;
  return <PrivacySk />;
}
