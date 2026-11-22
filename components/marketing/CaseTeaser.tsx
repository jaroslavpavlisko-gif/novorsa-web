import { getDict } from "@/content";
import { path, type Lang } from "@/lib/i18n";
import { ArrowRight } from "../ui/Icons";

/** Krátka referencia na úvodnej stránke s odkazom na úspešné projekty. */
export function CaseTeaser({ lang }: { lang: Lang }) {
  const { caseTeaser: c } = getDict(lang);
  return (
    <section className="section teaser-sec" aria-labelledby="teaser-case-title">
      <div className="container">
        <div className="teaser">
          <div className="teaser__copy">
            <span className="eyebrow">{c.eyebrow}</span>
            <h2 id="teaser-case-title" className="teaser__title">
              {c.title}
            </h2>
            <p>{c.text}</p>
            <a className="teaser__link" href={path(lang, "solutions", "ukazky")}>
              {c.link} <ArrowRight size={16} />
            </a>
          </div>
          <dl className="teaser__stats">
            {c.stats.map((s, i) => (
              <div key={s.dt} className={i === 0 ? "teaser__stat teaser__stat--main" : "teaser__stat"}>
                <dt>{s.dt}</dt>
                <dd>{s.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
