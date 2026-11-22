import type { Metadata } from "next";
import { getDict } from "@/content";
import { Faq, Process } from "@/components/marketing/Sections";
import { CtaBand, PageHero } from "@/components/marketing/Blocks";
import { langFrom, pageMetadata, type LangParams } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  return pageMetadata(await langFrom(props), "process");
}

export default async function ProcessPage(props: LangParams) {
  const lang = await langFrom(props);
  const { workProcess } = getDict(lang);
  return (
    <>
      <PageHero eyebrow={workProcess.eyebrow} title={workProcess.title} lead={workProcess.lead} />
      <Process lang={lang} head={false} />
      <Faq lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
