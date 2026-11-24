import { site } from "@/content/site";
import { getDict } from "@/content";
import { path, type Lang } from "@/lib/i18n";
import { Logo } from "./Logo";
import { CookieSettingsButton } from "../consent/ConsentManager";

export function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <Logo onDark href={path(lang, "home")} label={t.ui.logoAria} />
            <p style={{ maxWidth: 340 }}>{t.footer.tagline}</p>
          </div>
          <div>
            <h2>{t.footer.solutions}</h2>
            <ul>
              {t.solutions.items.map((s) => (
                <li key={s.id}>
                  <a href={path(lang, "solutions", s.id)}>{s.label}</a>
                </li>
              ))}
              <li>
                <a href={path(lang, "apps")}>{t.customApps.label}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>{t.footer.company}</h2>
            <ul>
              {t.footer.links.map((l) => (
                <li key={l.label}>
                  <a href={path(lang, l.to, l.hash)}>{l.label}</a>
                </li>
              ))}
              {site.linkedin && (
                <li><a href={site.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
              )}
            </ul>
          </div>
          <div>
            <h2>{t.footer.contact}</h2>
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
          <span>
            © {year} Novorsa · {site.company.name}
          </span>
          <span className="footer__links">
            <a href={path(lang, "privacy")}>{t.footer.privacy}</a>
            <a href={path(lang, "cookies")}>{t.footer.cookies}</a>
            <CookieSettingsButton label={t.consent.footerButton} />
          </span>
        </div>
      </div>
    </footer>
  );
}
