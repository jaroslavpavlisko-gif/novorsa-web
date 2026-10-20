import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Web Novorsa nepoužíva sledovacie ani marketingové cookies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="container">
      <article className="prose">
        <h1>Cookies</h1>
        <p>
          Tento web nepoužíva sledovacie ani marketingové cookies. Preto vás nežiadame o súhlas cez cookie lištu.
        </p>

        <h2>Čo používame</h2>
        <ul>
          <li>
            <strong>Štatistiky návštevnosti bez cookies</strong> (Vercel Web Analytics). Neukladajú nič do vášho
            prehliadača a nevytvárajú profil návštevníka.
          </li>
          <li>
            <strong>Technicky nevyhnutné údaje</strong>, bez ktorých by web nefungoval, napríklad pri odoslaní formulára.
          </li>
        </ul>

        <h2>Ak sa to zmení</h2>
        <p>
          Ak by sme v budúcnosti pridali nástroje, ktoré cookies používajú (napr. Google Analytics alebo reklamné
          pixely), pred ich spustením vás požiadame o súhlas a túto stránku aktualizujeme.
        </p>
        <p>
          Otázky: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </article>
    </div>
  );
}
