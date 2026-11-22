import type { Metadata } from "next";
import { ContactSection } from "@/components/marketing/Blocks";
import { langFrom, pageMetadata, type LangParams } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  return pageMetadata(await langFrom(props), "contact");
}

export default async function ContactPage(props: LangParams) {
  return <ContactSection lang={await langFrom(props)} />;
}
