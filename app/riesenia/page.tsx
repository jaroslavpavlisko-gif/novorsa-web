import type { Metadata } from "next";
import { solutions } from "@/content/site";
import { SolutionTabs } from "@/components/interactive/SolutionTabs";
import { Integrations, Showcases } from "@/components/marketing/Sections";
import { CtaBand, PageHero } from "@/components/marketing/Blocks";

export const metadata: Metadata = {
  title: "Riešenia",
  description: "Automatizácia a AI pre obchod, HR, financie, prevádzku, zákaznícky servis a vedenie firmy.",
  alternates: { canonical: "/riesenia" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Riešenia" title={solutions.title} lead={solutions.lead} />
      <section className="section section--flush-top" aria-label="Riešenia podľa oddelení">
        <div className="container">
          <SolutionTabs items={solutions.items} />
        </div>
      </section>
      <Showcases />
      <Integrations />
      <CtaBand />
    </>
  );
}
