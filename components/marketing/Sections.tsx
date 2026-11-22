import { caseStudies, faq, integrations, outcomes, pains, trust, why, workProcess } from "@/content/site";
import { Check, Globe, Key, Plus, Shield, User, outcomeIcons } from "../ui/Icons";

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

/** Čo sa zmení: hlavný prínos vo veľkej karte, ostatné body v menších kartách. */
export function Outcomes() {
  return (
    <section className="section section--dark" aria-labelledby="outcomes-title">
      <div className="container">
        <SectionHead eyebrow="Výsledok" title={outcomes.title} id="outcomes-title" />
        <ul className="ogrid">
          {outcomes.items.map((o, i) => {
            const Icon = outcomeIcons[i % outcomeIcons.length];
            return (
              <li key={o.title} className={i === 0 ? "ocard ocard--main" : "ocard"}>
                <span className="ocard__icon">
                  <Icon size={i === 0 ? 26 : 22} />
                </span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                {i === 0 && <p className="ocard__tag">{outcomes.mainTag}</p>}
              </li>
            );
          })}
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
        {!head && (
          <div className="audit-box">
            <div className="audit-box__head">
              <span className="badge badge--accent">Krok 2 · Audit</span>
              <h3>Čo dostanete z auditu</h3>
              <p>Audit je platený. Pevnú cenu si dohodneme vopred podľa rozsahu, bez prekvapení na faktúre.</p>
            </div>
            <ul className="audit-box__list">
              <li><strong>Zoznam procesov</strong><span>zoradený podľa prínosu pre vašu firmu</span></li>
              <li><strong>Odhad nákladov</strong><span>a uvoľnenej kapacity pri každej príležitosti</span></li>
              <li><strong>Návrh prvého pilotu</strong><span>s rozsahom, termínom a cenou</span></li>
            </ul>
          </div>
        )}
        <div className="human-note">
          <User />
          <p>
            <strong>Pri dôležitých krokoch rozhoduje človek.</strong> AI pripraví podklady, ale o tom, ktorý lead
            osloviť, či je dokument hotový alebo čo odíde klientovi, rozhodne vždy zodpovedná osoba. Každý krok má
            záznam.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Úspešné projekty: stručné case study bez názvu klienta. */
export function Showcases() {
  return (
    <section id="ukazky" className="section section--surface" aria-labelledby="cases-title">
      <div className="container">
        <SectionHead eyebrow="Z praxe" title={caseStudies.title} lead={caseStudies.lead} id="cases-title" />
        <ul className="cases">
          {caseStudies.items.map((c) => (
            <li key={c.title} className="case">
              <div className="case__side">
                <span className="badge badge--accent">{c.area}</span>
                <h3>{c.title}</h3>
                <dl className="case__meta">
                  <div>
                    <dt>Klient</dt>
                    <dd>{c.company}</dd>
                  </div>
                  {c.meta.map((m) => (
                    <div key={m.label}>
                      <dt>{m.label}</dt>
                      <dd>{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="case__result">
                  <span className="case__result-label">Výsledok</span>
                  <strong>{c.result.headline}</strong>
                  <p>{c.result.text}</p>
                </div>
              </div>
              <div className="case__body">
                <h4>Zadanie</h4>
                <p className="case__goal">{c.goal}</p>
                <h4>Riešenie</h4>
                <ol className="case__steps">
                  {c.steps.map((s, i) => (
                    <li key={s}>
                      <span aria-hidden="true">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
                <ul className="stack" aria-label="Použité nástroje">
                  {c.stack.map((s) => (
                    <li key={s} className="badge">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
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
        <ul className="igroups">
          {integrations.groups.map((g) => (
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
        <div className="team">
          <h2 className="team__title">{why.team.title}</h2>
          <p className="team__lead">{why.team.lead}</p>
          <div className="founder founder--wide">
            <div className="founder__photo founder__photo--initials" aria-hidden="true">
              {why.founder.initials}
            </div>
            <div>
              <strong>{why.founder.name}</strong>
              <span className="role">{why.founder.role}</span>
              <p>{why.founder.text}</p>
            </div>
            <div>
              <p className="founder__projects-title">{why.founder.projectsTitle}</p>
              <ul className="founder__projects">
                {why.founder.projects.map((p) => (
                  <li key={p}>
                    <Check /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="team__row">
            {why.team.members.map((m) => (
              <div key={m.name} className="founder">
                <div className="founder__photo founder__photo--initials" aria-hidden="true">
                  {m.initials}
                </div>
                <div>
                  <strong>{m.name}</strong>
                  <span className="role">{m.role}</span>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
            <div className="partners">
              <h3>{why.team.partners.title}</h3>
              <p>{why.team.partners.text}</p>
              <ul>
                {why.team.partners.items.map((i) => (
                  <li key={i}>
                    <Check /> {i}
                  </li>
                ))}
              </ul>
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
