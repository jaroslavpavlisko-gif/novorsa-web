import type { Metadata } from "next";
import { ContactSection } from "@/components/marketing/Blocks";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Dohodnite si úvodnú konzultáciu zadarmo. Ozveme sa do dvoch pracovných dní.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return <ContactSection />;
}
