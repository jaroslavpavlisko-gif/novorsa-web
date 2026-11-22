import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { CaseTeaser } from "@/components/marketing/CaseTeaser";
import { Outcomes, Pains, TrustStrip } from "@/components/marketing/Sections";
import { BeforeAfter, CtaBand, ExploreLinks, SolutionsTeaser } from "@/components/marketing/Blocks";
import { langFrom, pageMetadata, type LangParams } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  return pageMetadata(await langFrom(props), "home");
}

export default async function HomePage(props: LangParams) {
  const lang = await langFrom(props);
  return (
    <>
      <Hero lang={lang} />
      <TrustStrip lang={lang} />
      <CaseTeaser lang={lang} />
      <Pains lang={lang} />
      <BeforeAfter lang={lang} />
      <Outcomes lang={lang} />
      <SolutionsTeaser lang={lang} />
      <ExploreLinks lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
