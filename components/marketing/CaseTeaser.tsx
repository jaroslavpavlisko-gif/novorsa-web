import { ArrowRight } from "../ui/Icons";

/** Krátka referencia na úvodnej stránke s odkazom na úspešné projekty. */
export function CaseTeaser() {
  return (
    <section className="section teaser-sec" aria-labelledby="teaser-case-title">
      <div className="container">
        <div className="teaser">
          <div className="teaser__copy">
            <span className="eyebrow">Z praxe</span>
            <h2 id="teaser-case-title" className="teaser__title">
              Automatizované spracovanie obchodných leadov
            </h2>
            <p>
              Firma v oblasti služieb so 100 zamestnancami. Nové leady sa samé zozbierajú, vyhodnotia, zapíšu do CRM a
              priradia obchodníkovi.
            </p>
            <a className="teaser__link" href="/riesenia#ukazky">
              Všetky úspešné projekty <ArrowRight size={16} />
            </a>
          </div>
          <dl className="teaser__stats">
            <div className="teaser__stat teaser__stat--main">
              <dt>ušetrí každý obchodník</dt>
              <dd>5 hodín týždenne</dd>
            </div>
            <div className="teaser__stat">
              <dt>implementácia</dt>
              <dd>2 dni</dd>
            </div>
            <div className="teaser__stat">
              <dt>zamestnancov</dt>
              <dd>100</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
