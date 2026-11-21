import { site, solutions } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <Logo onDark />
            <p style={{ maxWidth: 340 }}>{site.tagline}. Najprv biznis a návratnosť, potom technológia.</p>
          </div>
          <div>
            <h2>Riešenia</h2>
            <ul>
              {solutions.items.map((s) => (
                <li key={s.id}>
                  <a href={`/riesenia#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Firma</h2>
            <ul>
              <li><a href="/ako-pracujeme">Ako pracujeme</a></li>
              <li><a href="/riesenia#ukazky">Úspešné projekty</a></li>
              <li><a href="/kalkulacka">Kalkulačka návratnosti</a></li>
              <li><a href="/ako-pracujeme#otazky">Časté otázky</a></li>
              <li><a href="/o-nas">O nás</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
              {site.linkedin && (
                <li><a href={site.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
              )}
            </ul>
          </div>
          <div>
            <h2>Kontakt</h2>
            <address>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {site.phone && (
                <>
                  <br />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                </>
              )}
            </address>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} Novorsa</span>
          <span className="footer__links">
            <a href="/ochrana-osobnych-udajov">Ochrana osobných údajov</a>
            <a href="/cookies">Cookies</a>
          </span>
        </div>
        <p className="footer__legal">
          Novorsa je obchodná značka spoločnosti {site.company.name} · {site.company.street}, {site.company.city} · IČO{" "}
          {site.company.ico} · {site.company.register}
        </p>
      </div>
    </footer>
  );
}
