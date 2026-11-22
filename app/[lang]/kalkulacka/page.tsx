import type { Metadata } from "next";
import { getDict } from "@/content";
import { path } from "@/lib/i18n";
import { RoiCalculator } from "@/components/interactive/RoiCalculator";
import { PageHero } from "@/components/marketing/Blocks";
import { langFrom, pageMetadata, type LangParams } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  return pageMetadata(await langFrom(props), "calculator");
}

export default async function CalculatorPage(props: LangParams) {
  const lang = await langFrom(props);
  const { roi } = getDict(lang);
  return (
    <>
      <PageHero eyebrow={roi.eyebrow} title={roi.title} lead={roi.lead} />
      <section className="section section--flush-top" aria-label={roi.aria}>
        <div className="container">
          <RoiCalculator t={roi} ctaHref={path(lang, "contact")} />
        </div>
      </section>
    </>
  );
}
