import type { Metadata } from "next";
import { getDict } from "@/content";
import { Why } from "@/components/marketing/Sections";
import { CtaBand, PageHero } from "@/components/marketing/Blocks";
import { langFrom, pageMetadata, type LangParams } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  return pageMetadata(await langFrom(props), "about");
}

export default async function AboutPage(props: LangParams) {
  const lang = await langFrom(props);
  const { why, meta } = getDict(lang);
  return (
    <>
      <PageHero eyebrow={meta.about.title} title={why.title} lead={why.lead} />
      <Why lang={lang} head={false} />
      <CtaBand lang={lang} />
    </>
  );
}
