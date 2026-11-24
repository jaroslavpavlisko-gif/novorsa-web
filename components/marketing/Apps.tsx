import { getDict } from "@/content";
import type { Lang } from "@/lib/i18n";
import { Plus } from "../ui/Icons";
import { SectionHead } from "./Sections";

/** Stránka Aplikácie: oblasti, postup vývoja a časté otázky. */
export function AppsAreas({ lang }: { lang: Lang }) {
  const { appsPage: a } = getDict(lang);
  return (
    <section className="section section--flush-top" aria-labelledby="apps-areas-title">
      <div className="container">
        <SectionHead eyebrow={a.areasEyebrow} title={a.areasTitle} lead={a.areasLead} id="apps-areas-title" />
        <ul className="igroups">
          {a.areas.map((g) => (
            <li key={g.title} className="igroup">
              <h3>{g.title}</h3>
              <p>{g.text}</p>
              <ul className="chips" aria-label={g.title}>
                {g.items.map((i) => (
                  <li key={i} className="chip">
                    {i}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AppsProcess({ lang }: { lang: Lang }) {
  const { appsPage: a } = getDict(lang);
  return (
    <section className="section section--dark" aria-labelledby="apps-process-title">
      <div className="container">
        <SectionHead eyebrow={a.processEyebrow} title={a.processTitle} lead={a.processLead} id="apps-process-title" />
        <ol className="steps">
          {a.steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__dot" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="step__out">→ {s.out}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AppsFaq({ lang }: { lang: Lang }) {
  const { appsPage: a, faq } = getDict(lang);
  return (
    <section className="section" aria-labelledby="apps-faq-title">
      <div className="container">
        <SectionHead eyebrow={faq.eyebrow} title={a.faqTitle} id="apps-faq-title" />
        <div className="faq">
          {a.faq.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span className="faq__icon" aria-hidden="true">
                  <Plus />
                </span>
              </summary>
              <p className="faq__answer">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
