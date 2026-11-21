import { hero } from "@/content/site";
import { ArrowRight } from "../ui/Icons";

const steps = [
  { title: "Vyhľadanie potenciálnych klientov", meta: "registre · weby · databázy podľa vašich kritérií", tag: "AI", kind: "ai" },
  { title: "Analýza spoločnosti", meta: "finančné zdravie · história · plánované aktivity", tag: "AI", kind: "ai" },
  { title: "Schválenie obchodníkom", meta: "vyhodnotenie leadu jedným kliknutím", tag: "človek", kind: "human" },
  { title: "Príprava podkladov a postupu", meta: "profil firmy · návrh oslovenia", tag: "AI", kind: "ai" },
  { title: "Zápis do CRM", meta: "kompletná história a tracking", tag: "hotovo", kind: "done" },
] as const;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.title}{" "}
            <em>{hero.titleAccent}</em>
          </h1>
          <p className="hero__lead">{hero.lead}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label} <ArrowRight />
            </a>
            <a className="btn btn--ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="hero__note">{hero.note}</p>
        </div>

        <figure className="flow" aria-label="Príklad automatizovaného procesu: generovanie obchodných leadov od vyhľadania firmy po zápis do CRM">
          <div className="flow__top">
            <span>Automatizovaný proces · obchodné leady</span>
            <span className="flow__live">Ukážka procesu</span>
          </div>
          <ol className="flow__steps">
            {steps.map((s, i) => (
              <li key={s.title} className={`flow__step flow__step--${s.kind}`} style={{ animationDelay: `${i * 0.12}s` }}>
                <span className="flow__node" aria-hidden="true">
                  {s.kind === "done" && <span className="flow__ring" />}
                </span>
                <span className="flow__card">
                  <span className="flow__title">{s.title}</span>
                  <span className="flow__meta">{s.meta}</span>
                </span>
                <span className={`flow__tag flow__tag--${s.kind}`}>{s.tag}</span>
              </li>
            ))}
            <span className="flow__packet" aria-hidden="true" />
          </ol>
          <figcaption className="flow__caption">
            <span className="flow__stat">
              <strong>Beží nonstop</strong>
              <span>bez potreby zásahov</span>
            </span>
            <span className="flow__stat">
              <strong>Človek rozhoduje</strong>
              <span>o finálnom leade</span>
            </span>
            <span className="flow__stat">
              <strong>Kompletný tracking</strong>
              <span>minimum administratívy</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
