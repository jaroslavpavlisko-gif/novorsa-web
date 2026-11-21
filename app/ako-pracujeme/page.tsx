import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { workProcess } from "@/content/site";
import { Faq, Process } from "@/components/marketing/Sections";
import { CtaBand, PageHero } from "@/components/marketing/Blocks";

export const metadata: Metadata = pageMetadata({
  path: "/ako-pracujeme",
  title: "Ako pracujeme",
  description: "Od úvodného rozhovoru cez audit a pilot až po zavedenie. Postup v šiestich krokoch a časté otázky.",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="Postup" title={workProcess.title} lead={workProcess.lead} />
      <Process head={false} />
      <Faq />
      <CtaBand />
    </>
  );
}
