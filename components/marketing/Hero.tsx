import { getDict } from "@/content";
import { path, type Lang } from "@/lib/i18n";
import { ArrowRight } from "../ui/Icons";

export function Hero({ lang }: { lang: Lang }) {
  const { hero } = getDict(lang);
  const { flow } = hero;
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
            <a className="btn btn--primary" href={path(lang, hero.primaryCta.to)}>
              {hero.primaryCta.label} <ArrowRight />
            </a>
            <a className="btn btn--ghost" href={path(lang, hero.secondaryCta.to)}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="hero__note">{hero.note}</p>
        </div>

        <figure className="flow" aria-label={flow.aria}>
          <div className="flow__top">
            <span>{flow.top}</span>
            <span className="flow__live">{flow.live}</span>
          </div>
          <ol className="flow__steps">
            {flow.steps.map((s, i) => (
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
            {flow.stats.map((s) => (
              <span key={s.strong} className="flow__stat">
                <strong>{s.strong}</strong>
                <span>{s.text}</span>
              </span>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
