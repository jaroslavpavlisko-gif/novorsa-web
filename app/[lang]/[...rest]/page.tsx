import { notFound } from "next/navigation";

// Neexistujúca adresa v danom jazyku: zobrazí sa jazyková stránka 404.
export default function CatchAll() {
  notFound();
}
