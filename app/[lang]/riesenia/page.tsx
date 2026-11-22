import type { Metadata } from "next";
import { getDict } from "@/content";
import { SolutionTabs } from "@/components/interactive/SolutionTabs";
import { Integrations, Showcases } from "@/components/marketing/Sections";
import { CtaBand, CustomApps, PageHero } from "@/components/marketing/Blocks";
import { langFrom, pageMetadata, type LangParams } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  return pageMetadata(await langFrom(props), "solutions");
}

export default async function SolutionsPage(props: LangParams) {
  const lang = await langFrom(props);
  const { solutions } = getDict(lang);
  return (
    <>
      <PageHero eyebrow={solutions.eyebrow} title={solutions.title} lead={solutions.lead} />
      <section className="section section--flush-top" aria-label={solutions.title}>
        <div className="container">
          <SolutionTabs items={solutions.items} label={solutions.tabsAria} />
        </div>
      </section>
      <CustomApps lang={lang} />
      <Showcases lang={lang} />
      <Integrations lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
