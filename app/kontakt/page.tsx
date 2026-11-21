import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactSection } from "@/components/marketing/Blocks";

export const metadata: Metadata = pageMetadata({
  path: "/kontakt",
  title: "Kontakt",
  description: "Dohodnite si úvodnú konzultáciu zadarmo. Ozveme sa do dvoch pracovných dní.",
});

export default function ContactPage() {
  return <ContactSection />;
}
