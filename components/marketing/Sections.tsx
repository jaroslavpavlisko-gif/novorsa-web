import { faq, integrations, outcomes, pains, showcases, trust, why, workProcess } from "@/content/site";
import { Check, Globe, Key, Plus, Shield, User } from "../ui/Icons";

export function SectionHead({ eyebrow, title, lead, id }: { eyebrow: string; title: string; lead?: string; id: string }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="h2">
        {title}
      </h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

const trustIcons = [Shield, Key, User, Globe];

export function TrustStrip() {
  return (
    <section className="trust" aria-label="Na čom si zakladáme">
      <div className="container">
        <ul className="trust__list">
          {trust.map((t, i) => {
            const Icon = trustIcons[i % trustIcons.length];
            return (
              <li key={t.title} className="trust__item">
                <span className="trust__icon">
                  <Icon />
                </span>
                <span>
                  <strong>{t.title}</strong>
                  <p>{t.text}</p>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Pains() {
  return (
    <section className="section" aria-labelledby="pains-title">
      <div className="container">
        <SectionHead eyebrow="Kde sa stráca čas" title={pains.title} lead={pains.lead} id="pains-title" />
        <ul className="grid grid--3" style={{ listStyle: "none" }}>
          {pains.items.map((p, i) => (
            <li key={p.title} className="card">
              <span className="card__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Outcomes() {
  return (
    <section className="section section--surface" aria-labelledby="outcomes-title">
      <div className="container outcomes-wrap">
        <SectionHead eyebrow="Výsledok" title={outcomes.title} lead={outcomes.lead} id="outcomes-title" />
        <ul className="outcomes">
          {outcomes.items.map((o) => (
            <li key={o.title} className="outcome">
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process({ head = true }: { head?: boolean }) {
  return (
    <section id="ako-pracujeme" className="section section--dark" aria-labelledby="process-title">
      <div className="container">
        {head ? (
          <SectionHead eyebrow="Postup" title={workProcess.title} lead={workProcess.lead} id="process-title" />
        ) : (
          <h2 id="process-title" className="sr-only">
            Postup v šiestich krokoch
          </h2>
        )}
        <ol className="steps">
          {workProcess.steps.map((s, i) => (
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
        <div className="human-note">
          <User />
          <p>
            <strong>Pri dôležitých krokoch rozhoduje človek.</strong> Schvaľovanie platieb, odpovede klientom či výber
            kandidátov nastavíme tak, aby posledné slovo mala zodpovedná osoba a všetko malo záznam.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Showcases() {
  return (
    <section id="ukazky" className="section section--surface" aria-labelledby="showcase-title">
      <div className="container">
        <SectionHead eyebrow="Príklady" title={showcases.title} lead={showcases.lead} id="showcase-title" />
        <ul className="grid grid--3" style={{ listStyle: "none" }}>
          {showcases.items.map((c) => (
            <li key={c.title} className="showcase" style={{ background: "var(--bg)" }}>
              <div className="showcase__top">
                <span className="badge badge--accent">{c.area}</span>
                <span className="badge">Ilustračný príklad</span>
              </div>
              <h3>{c.title}</h3>
              <dl>
                <div>
                  <dt>Problém</dt>
                  <dd>{c.problem}</dd>
                </div>
                <div>
                  <dt>Riešenie</dt>
                  <dd>{c.solution}</dd>
                </div>
                <div>
                  <dt>Očakávaný výsledok</dt>
                  <dd className="result">{c.result}</dd>
                </div>
              </dl>
              <ul className="stack" aria-label="Použité nástroje">
                {c.stack.map((s) => (
                  <li key={s} className="badge">
                    {s}
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

export function Integrations() {
  return (
    <section className="section" aria-labelledby="integrations-title">
      <div className="container">
        <SectionHead eyebrow="Integrácie" title={integrations.title} lead={integrations.lead} id="integrations-title" />
        <ul className="chips">
          {integrations.items.map((i) => (
            <li key={i} className="chip">
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Why({ head = true }: { head?: boolean }) {
  return (
    <section className="section section--surface" aria-labelledby="why-title">
      <div className="container">
        {head ? (
          <SectionHead eyebrow="Prečo my" title={why.title} lead={why.lead} id="why-title" />
        ) : (
          <h2 id="why-title" className="sr-only">
            Na čom si zakladáme
          </h2>
        )}
        <ul className="grid grid--3" style={{ listStyle: "none", marginBottom: 20 }}>
          {why.items.map((w) => (
            <li key={w.title} className="card" style={{ background: "var(--bg)" }}>
              <h3 style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "var(--accent)" }}>
                  <Check />
                </span>
                {w.title}
              </h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ul>
        <div className="why">
          <div className="founder">
            <div className="founder__photo">Fotka</div>
            <div>
              <strong>{why.founder.name}</strong>
              <span className="role">{why.founder.role}</span>
              <p>{why.founder.text}</p>
            </div>
          </div>
          <div className="notfit">
            <h3>{why.notFit.title}</h3>
            <ul>
              {why.notFit.items.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p>{why.notFit.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="otazky" className="section" aria-labelledby="faq-title">
      <div className="container">
        <SectionHead eyebrow="Otázky" title={faq.title} id="faq-title" />
        <div className="faq">
          {faq.items.map((f) => (
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
