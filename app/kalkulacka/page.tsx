import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { roi } from "@/content/site";
import { RoiCalculator } from "@/components/interactive/RoiCalculator";
import { PageHero } from "@/components/marketing/Blocks";

export const metadata: Metadata = pageMetadata({
  path: "/kalkulacka",
  title: "Kalkulačka úspory času",
  description: "Vyčíslite, koľko hodín ročne vám berie jeden opakovaný proces a akú kapacitu môže automatizácia uvoľniť.",
});

export default function CalculatorPage() {
  return (
    <>
      <PageHero eyebrow="Kalkulačka úspory času" title={roi.title} lead={roi.lead} />
      <section className="section section--flush-top" aria-label="Kalkulačka">
        <div className="container">
          <RoiCalculator />
        </div>
      </section>
    </>
  );
}
