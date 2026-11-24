import type { Metadata } from "next";
import { getDict } from "@/content";
import { AppsAreas, AppsFaq, AppsProcess } from "@/components/marketing/Apps";
import { CtaBand, CustomApps, PageHero } from "@/components/marketing/Blocks";
import { langFrom, pageMetadata, type LangParams } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  return pageMetadata(await langFrom(props), "apps");
}

export default async function AppsPage(props: LangParams) {
  const lang = await langFrom(props);
  const { appsPage: a } = getDict(lang);
  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} lead={a.lead} />
      <CustomApps lang={lang} />
      <AppsAreas lang={lang} />
      <AppsProcess lang={lang} />
      <AppsFaq lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
