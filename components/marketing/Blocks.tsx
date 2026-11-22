import { site } from "@/content/site";
import { getDict } from "@/content";
import { path, type Lang } from "@/lib/i18n";
import { ContactForm } from "../interactive/ContactForm";
import { ArrowRight, Check, Close } from "../ui/Icons";
import { SectionHead } from "./Sections";

/** Úvod podstránky: nadpis H1 a krátky popis. */
export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

/** Výzva na konzultáciu na konci stránok. */
export function CtaBand({ lang }: { lang: Lang }) {
  const { cta } = getDict(lang);
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <div>
          <h2 id="cta-title" className="cta-band__title">
            {cta.title}
          </h2>
          <p>{cta.text}</p>
        </div>
        <a className="btn btn--primary" href={path(lang, "contact")}>
          {cta.button} <ArrowRight />
        </a>
      </div>
    </section>
  );
}

/** Ukážka riešení na úvodnej stránke, každé vedie na detail. */
export function SolutionsTeaser({ lang }: { lang: Lang }) {
  const { solutions, customApps, ui } = getDict(lang);
  return (
    <section className="section" aria-labelledby="teaser-title">
      <div className="container">
        <SectionHead eyebrow={solutions.eyebrow} title={solutions.title} lead={solutions.lead} id="teaser-title" />
        <ul className="grid grid--3" style={{ listStyle: "none" }}>
          {solutions.items.map((s) => (
            <li key={s.id}>
              <a className="link-card" href={path(lang, "solutions", s.id)}>
                <span className="link-card__label">{s.label}</span>
                <span className="link-card__title">{s.title}</span>
                <span className="link-card__more">
                  {ui.howItWorks} <ArrowRight size={16} />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a className="apps-link" href={path(lang, "solutions", customApps.id)}>
          <span>
            <span className="link-card__label">{customApps.label}</span>
            <span className="apps-link__title">{customApps.teaser}</span>
          </span>
          <span className="link-card__more">
            {ui.more} <ArrowRight size={16} />
          </span>
        </a>
      </div>
    </section>
  );
}

/** Firemné aplikácie na mieru: prierezová služba pod oddeleniami. */
export function CustomApps({ lang }: { lang: Lang }) {
  const { customApps } = getDict(lang);
  return (
    <section id={customApps.id} className="section section--flush-top" aria-labelledby="apps-title">
      <div className="container">
        <div className="apps">
          <div className="apps__intro">
            <span className="badge badge--accent">{customApps.badge}</span>
            <h2 id="apps-title">{customApps.title}</h2>
            <p>{customApps.text}</p>
            <ul className="apps__points">
              {customApps.points.map((p) => (
                <li key={p}>
                  <Check /> {p}
                </li>
              ))}
            </ul>
            <a className="btn btn--primary" href={path(lang, "contact")}>
              {customApps.cta} <ArrowRight />
            </a>
          </div>
          <ul className="apps__types">
            {customApps.types.map((t) => (
              <li key={t.title}>
                <strong>{t.title}</strong>
                <span>{t.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ExploreLinks({ lang }: { lang: Lang }) {
  const { explore, ui } = getDict(lang);
  return (
    <section className="section section--surface" aria-labelledby="explore-title">
      <div className="container">
        <SectionHead eyebrow={explore.eyebrow} title={explore.title} id="explore-title" />
        <ul className="grid grid--3" style={{ listStyle: "none" }}>
          {explore.items.map((e) => (
            <li key={e.to}>
              <a className="link-card link-card--soft" href={path(lang, e.to)}>
                <span className="link-card__label">{e.label}</span>
                <span className="link-card__title">{e.title}</span>
                <span className="link-card__text">{e.text}</span>
                <span className="link-card__more">
                  {ui.open} <ArrowRight size={16} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Kontaktná stránka: informácie vľavo, formulár vpravo. */
export function ContactSection({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const { contact, form } = t;
  const register = t.site.register;
  return (
    <section className="section section--dark contact-page" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact__aside">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1 id="contact-title" className="h2">
            {contact.title}
          </h1>
          <p className="lead">{contact.lead}</p>
          <ul className="contact__points">
            {contact.points.map((p) => (
              <li key={p}>
                <Check /> {p}
              </li>
            ))}
          </ul>
          <p className="contact__direct">
            {contact.directEmail} <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.phone && (
              <>
                <br />
                {contact.phone} <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </>
            )}
          </p>
          <p className="contact__company">
            {site.company.name}
            <br />
            {site.company.street}, {site.company.city}
            {lang !== "sk" && `, ${t.site.country}`}
            <br />
            {contact.companyId} {site.company.ico}
            <br />
            {register.charAt(0).toUpperCase() + register.slice(1)}
          </p>
        </div>
        <ContactForm
          lang={lang}
          t={form}
          areas={contact.areas}
          privacyHref={path(lang, "privacy")}
          projectsHref={path(lang, "solutions", "ukazky")}
          calculatorHref={path(lang, "calculator")}
        />
      </div>
    </section>
  );
}

/** Porovnanie procesu pred a po automatizácii. */
export function BeforeAfter({ lang }: { lang: Lang }) {
  const { beforeAfter: b } = getDict(lang);
  return (
    <section className="section section--surface" aria-labelledby="ba-title">
      <div className="container">
        <SectionHead eyebrow={b.eyebrow} title={b.title} lead={b.lead} id="ba-title" />
        <div className="ba">
          <div className="ba__col ba__col--before">
            <p className="ba__label">{b.beforeLabel}</p>
            <ul>
              {b.before.map((t) => (
                <li key={t}>
                  <span className="ba__mark" aria-hidden="true">
                    <Close size={13} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="ba__foot">{b.beforeFoot}</p>
          </div>
          <div className="ba__col ba__col--after">
            <p className="ba__label">{b.afterLabel}</p>
            <ul>
              {b.after.map((t) => (
                <li key={t}>
                  <span className="ba__mark" aria-hidden="true">
                    <Check size={13} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="ba__foot">{b.afterFoot}</p>
          </div>
        </div>
        <p className="ba__note">
          {b.note} <a href={path(lang, "calculator")}>{b.noteLink}</a>.
        </p>
      </div>
    </section>
  );
}
