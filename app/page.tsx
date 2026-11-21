import { Hero } from "@/components/marketing/Hero";
import { CaseTeaser } from "@/components/marketing/CaseTeaser";
import { Outcomes, Pains, TrustStrip } from "@/components/marketing/Sections";
import { BeforeAfter, CtaBand, ExploreLinks, SolutionsTeaser } from "@/components/marketing/Blocks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CaseTeaser />
      <Pains />
      <BeforeAfter />
      <Outcomes />
      <SolutionsTeaser />
      <ExploreLinks />
      <CtaBand />
    </>
  );
}
