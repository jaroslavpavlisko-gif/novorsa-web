import { hero } from "@/content/site";
import { ArrowRight } from "../ui/Icons";

const steps = [
  { title: "Faktúra prijatá e-mailom", meta: "dodavatel_0425.pdf", tag: "automaticky", kind: "auto" },
  { title: "Údaje vyťažené a priradené", meta: "IČO · suma · stredisko", tag: "AI", kind: "ai" },
  { title: "Schválenie vedúcim", meta: "jedno kliknutie v Teams", tag: "človek", kind: "human" },
  { title: "Zapísané do účtovníctva", meta: "report pre vedenie aktualizovaný", tag: "hotovo", kind: "done" },
] as const;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.title}
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

        <figure className="flow" aria-label="Príklad automatizovaného procesu: spracovanie faktúry od e-mailu po účtovníctvo">
          <div className="flow__top">
            <span>Automatizovaný proces · faktúry</span>
            <span className="flow__live">beží</span>
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
              <strong>Bez prepisovania</strong>
              <span>údaje idú samé</span>
            </span>
            <span className="flow__stat">
              <strong>Človek rozhoduje</strong>
              <span>pri dôležitých krokoch</span>
            </span>
            <span className="flow__stat">
              <strong>Záznam o všetkom</strong>
              <span>kto, čo a kedy</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
