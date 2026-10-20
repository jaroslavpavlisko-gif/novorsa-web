import type { Metadata } from "next";
import { workProcess } from "@/content/site";
import { Faq, Process } from "@/components/marketing/Sections";
import { CtaBand, PageHero } from "@/components/marketing/Blocks";

export const metadata: Metadata = {
  title: "Ako pracujeme",
  description: "Od úvodného rozhovoru cez audit a pilot až po zavedenie. Postup v šiestich krokoch a časté otázky.",
  alternates: { canonical: "/ako-pracujeme" },
};

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
