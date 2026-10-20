import { Hero } from "@/components/marketing/Hero";
import { Outcomes, Pains, TrustStrip } from "@/components/marketing/Sections";
import { BeforeAfter, CtaBand, ExploreLinks, SolutionsTeaser } from "@/components/marketing/Blocks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Pains />
      <BeforeAfter />
      <Outcomes />
      <SolutionsTeaser />
      <ExploreLinks />
      <CtaBand />
    </>
  );
}
