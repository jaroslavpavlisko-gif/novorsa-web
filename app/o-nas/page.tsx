import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { why } from "@/content/site";
import { Why } from "@/components/marketing/Sections";
import { CtaBand, PageHero } from "@/components/marketing/Blocks";

export const metadata: Metadata = pageMetadata({
  path: "/o-nas",
  title: "O nás",
  description: "Novorsa spája prax v ekonomickom a HR poradenstve s automatizáciou procesov a AI.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="O nás" title={why.title} lead={why.lead} />
      <Why head={false} />
      <CtaBand />
    </>
  );
}
