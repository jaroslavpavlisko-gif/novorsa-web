import { contact, site, solutions } from "@/content/site";
import { ContactForm } from "../interactive/ContactForm";
import { ArrowRight, Check, Close, solutionIcons } from "../ui/Icons";
import { SectionHead } from "./Sections";

/** Úvod podstránky: nadpis H1 a krátky popis. */
export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="page-hero">
      <HeroMotif />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

/** Výzva na konzultáciu na konci stránok. */
export function CtaBand({
  title = "Zistite, čo sa dá vo vašej firme automatizovať",
  text = "Úvodná konzultácia trvá 30 minút, je zadarmo a nezáväzná.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <div>
          <h2 id="cta-title" className="cta-band__title">
            {title}
          </h2>
          <p>{text}</p>
        </div>
        <a className="btn btn--primary" href="/kontakt">
          Dohodnúť konzultáciu <ArrowRight />
        </a>
      </div>
    </section>
  );
}

/** Ukážka riešení na úvodnej stránke, každé vedie na detail. */
export function SolutionsTeaser() {
  return (
    <section className="section" aria-labelledby="teaser-title">
      <div className="container">
        <SectionHead eyebrow="Riešenia" title={solutions.title} lead={solutions.lead} id="teaser-title" />
        <ul className="grid grid--3" style={{ listStyle: "none" }}>
          {solutions.items.map((s) => {
            const Icon = solutionIcons[s.id];
            return (
            <li key={s.id}>
              <a className="link-card" href={`/riesenia#${s.id}`}>
                <span className="link-card__head">
                  {Icon && (
                    <span className="icon-tile">
                      <Icon />
                    </span>
                  )}
                  <span className="link-card__label">{s.label}</span>
                </span>
                <span className="link-card__title">{s.title}</span>
                <span className="link-card__more">
                  Ako to funguje <ArrowRight size={16} />
                </span>
              </a>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const explore = [
  {
    href: "/ako-pracujeme",
    label: "Ako pracujeme",
    title: "Od rozhovoru po riešenie v 6 krokoch",
    text: "Začíname malým pilotom a pokračujeme, len keď prináša výsledok.",
  },
  {
    href: "/kalkulacka",
    label: "Kalkulačka",
    title: "Koľko času vám berie ručná práca?",
    text: "Vyčíslite jeden proces za minútu a uvidíte, akú kapacitu môžete uvoľniť.",
  },
  {
    href: "/o-nas",
    label: "O nás",
    title: "Najprv biznis, potom technológia",
    text: "Kto za Novorsou stojí a kedy pre vás naopak nie sme vhodní.",
  },
];

export function ExploreLinks() {
  return (
    <section className="section section--surface" aria-labelledby="explore-title">
      <div className="container">
        <SectionHead eyebrow="Ďalej" title="Čo vás zaujíma?" id="explore-title" />
        <ul className="grid grid--3" style={{ listStyle: "none" }}>
          {explore.map((e) => (
            <li key={e.href}>
              <a className="link-card link-card--soft" href={e.href}>
                <span className="link-card__label">{e.label}</span>
                <span className="link-card__title">{e.title}</span>
                <span className="link-card__text">{e.text}</span>
                <span className="link-card__more">
                  Otvoriť <ArrowRight size={16} />
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
export function ContactSection() {
  return (
    <section className="section section--dark contact-page" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact__aside">
          <p className="eyebrow">Konzultácia zadarmo</p>
          <h1 id="contact-title" className="h2">
            {contact.title}
          </h1>
          <p className="lead">{contact.lead}</p>
          <ul className="contact__points">
            <li>
              <Check /> 30 minút, online alebo osobne
            </li>
            <li>
              <Check /> Bez záväzkov a predajného tlaku
            </li>
            <li>
              <Check /> Odídete s prvým odhadom, čo sa oplatí automatizovať
            </li>
          </ul>
          <p className="contact__direct">
            Radšej e-mail? <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.phone && (
              <>
                <br />
                Telefón: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </>
            )}
          </p>
          <p className="contact__company">
            {site.company.name}
            <br />
            {site.company.street}, {site.company.city}
            <br />
            IČO {site.company.ico}
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

/** Dekorácia v úvode podstránok: motív prepojených bodov z loga. */
function HeroMotif() {
  const pts: [number, number][] = [
    [40, 250], [120, 190], [200, 214], [280, 140], [360, 160], [440, 80],
  ];
  return (
    <svg className="page-hero__motif" viewBox="0 0 520 300" aria-hidden="true">
      <defs>
        <pattern id="motif-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" className="page-hero__dot" />
        </pattern>
      </defs>
      <rect className="page-hero__dots" width="520" height="300" fill="url(#motif-dots)" />
      <polyline points={pts.map((p) => p.join(",")).join(" ")} className="page-hero__line" />
      {pts.slice(0, -1).map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="7" className="page-hero__node" />
      ))}
      <circle cx="440" cy="80" r="38" className="page-hero__ring page-hero__ring--outer" />
      <circle cx="440" cy="80" r="26" className="page-hero__ring" />
      <circle cx="440" cy="80" r="13" className="page-hero__goal" />
    </svg>
  );
}

const before = [
  "Faktúra príde e-mailom a niekto ju ručne prepíše",
  "Schválenie putuje cez preposielané e-maily",
  "Údaje sa znova zapisujú do účtovníctva",
  "Report pre vedenie sa skladá na konci mesiaca",
];
const after = [
  "Údaje z faktúry sa vyťažia a priradia samé",
  "Vedúci schváli jedným kliknutím",
  "Zápis do účtovníctva prebehne automaticky",
  "Report je vždy aktuálny",
];

/** Porovnanie procesu pred a po automatizácii. */
export function BeforeAfter() {
  return (
    <section className="section section--tint" aria-labelledby="ba-title">
      <div className="container">
        <SectionHead
          eyebrow="Pred a po"
          title="Ten istý proces, dva spôsoby"
          lead="Na príklade spracovania faktúr: rovnaký výsledok, ale bez prepisovania a čakania."
          id="ba-title"
        />
        <div className="ba">
          <div className="ba__col ba__col--before">
            <p className="ba__label">Dnes</p>
            <ul>
              {before.map((t) => (
                <li key={t}>
                  <span className="ba__mark">
                    <Close size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="ba__foot">Hodiny ručnej práce každý týždeň</p>
          </div>
          <div className="ba__arrow" aria-hidden="true">
            <ArrowRight size={22} />
          </div>
          <div className="ba__col ba__col--after">
            <p className="ba__label">S automatizáciou</p>
            <ul>
              {after.map((t) => (
                <li key={t}>
                  <span className="ba__mark">
                    <Check size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="ba__foot">Človek rieši len výnimky</p>
          </div>
        </div>
        <p className="ba__note">
          Ilustračný príklad. Koľko by ste ušetrili vy, si orientačne vyčíslite v{" "}
          <a href="/kalkulacka">kalkulačke</a>.
        </p>
      </div>
    </section>
  );
}
