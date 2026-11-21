import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { solutions } from "@/content/site";
import { SolutionTabs } from "@/components/interactive/SolutionTabs";
import { Integrations, Showcases } from "@/components/marketing/Sections";
import { CtaBand, CustomApps, PageHero } from "@/components/marketing/Blocks";

export const metadata: Metadata = pageMetadata({
  path: "/riesenia",
  title: "Riešenia",
  description: "Automatizácia a AI pre obchod, HR, financie, prevádzku, nákup a vedenie firmy. Firemné aplikácie na mieru.",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Riešenia" title={solutions.title} lead={solutions.lead} />
      <section className="section section--flush-top" aria-label="Riešenia podľa oddelení">
        <div className="container">
          <SolutionTabs items={solutions.items} />
        </div>
      </section>
      <CustomApps />
      <Showcases />
      <Integrations />
      <CtaBand />
    </>
  );
}
