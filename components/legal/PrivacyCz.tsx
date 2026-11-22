import { site } from "@/content/site";
import { cz } from "@/content/cz";
import { path } from "@/lib/i18n";
import { hasAnalytics, hasMarketing, tracking } from "@/lib/tracking";

/** Ochrana osobních údajů – české znění. */
export function PrivacyCz() {
  const c = site.company;
  return (
    <div className="container">
      <article className="prose">
        <h1>Ochrana osobních údajů</h1>
        <p>Platné od [datum zveřejnění]. Zde najdete, jaké osobní údaje zpracováváme, proč a jaká máte práva.</p>

        <h2>Správce</h2>
        <p>
          {c.name}, {c.street}, {c.city}, Slovenská republika, IČO {c.ico}, {cz.site.register} (dále jen „my“). Novorsa je
          naše obchodní značka. Kontakt ve věcech osobních údajů: <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Jaké údaje zpracováváme a proč</h2>
        <ul>
          <li>
            <strong>Kontaktní formulář:</strong> jméno, příjmení, společnost, e-mail, oblast a pokud je uvedete, také IČO,
            telefonní číslo a text zprávy. Účel: odpovědět na váš dotaz a připravit úvodní konzultaci.
          </li>
          <li>
            <strong>Ochrana formuláře před roboty:</strong> při odeslání formuláře se ověřují technické znaky prohlížeče a
            zařízení, aby bylo možné rozpoznat automatizované útoky a spam.
          </li>
          <li>
            <strong>Statistiky návštěvnosti bez cookies:</strong> agregované údaje o počtu zobrazení, zemi a typu
            zařízení, které nám neumožňují identifikovat konkrétní osobu.
          </li>
          {hasAnalytics && (
            <li>
              <strong>Analytické cookies (pouze s vaším souhlasem):</strong> údaje o tom, jak web používáte (navštívené
              stránky, délka návštěvy, zdroj návštěvy, přibližná poloha, typ zařízení), abychom mohli web zlepšovat.
            </li>
          )}
          {hasMarketing && (
            <li>
              <strong>Marketingové cookies (pouze s vaším souhlasem):</strong> údaje o návštěvě a interakci s webem pro
              měření účinnosti reklamy a zobrazování relevantních nabídek na jiných webech a sociálních sítích.
            </li>
          )}
          <li>
            <strong>Technické záznamy serveru:</strong> IP adresa a čas požadavku pro ochranu webu před zneužitím.
          </li>
        </ul>

        <h2>Právní základ</h2>
        <ul>
          <li>
            Údaje z formuláře: vyřízení vašeho dotazu, tedy opatření před uzavřením smlouvy na vaši žádost (čl. 6 odst. 1
            písm. b) GDPR), a pokud nás kontaktujete jako zástupce firmy, náš oprávněný zájem odpovědět na obchodní dotaz
            (čl. 6 odst. 1 písm. f) GDPR).
          </li>
          <li>
            Ochrana před roboty, statistiky bez cookies a technické záznamy: náš oprávněný zájem na bezpečnosti a
            fungování webu (čl. 6 odst. 1 písm. f) GDPR).
          </li>
          {(hasAnalytics || hasMarketing) && (
            <li>
              {hasAnalytics && hasMarketing ? "Analytické a marketingové" : hasAnalytics ? "Analytické" : "Marketingové"}{" "}
              cookies: váš souhlas (čl. 6 odst. 1 písm. a) GDPR a předpisy o elektronických komunikacích). Souhlas můžete
              kdykoli změnit přes odkaz „Nastavení cookies“ v patičce webu.
            </li>
          )}
        </ul>
        <p>
          Poskytnutí údajů je dobrovolné. Bez povinných údajů z formuláře vám však nemůžeme odpovědět. Automatizované
          rozhodování s právními účinky ani profilování s takovými účinky neprovádíme.
        </p>

        <h2>Jak dlouho údaje uchováváme</h2>
        <ul>
          <li>Údaje z dotazu: nejvýše 24 měsíců od poslední komunikace, pokud z ní nevznikne smluvní vztah.</li>
          <li>Technické záznamy: nejvýše 30 dní.</li>
          {(hasAnalytics || hasMarketing) && (
            <li>
              Údaje z cookies: podle doby platnosti uvedené na stránce <a href={path("cz", "cookies")}>Cookies</a>.
            </li>
          )}
        </ul>

        <h2>Kdo má k údajům přístup</h2>
        <p>Údaje neprodáváme. Při provozu webu využíváme tyto zpracovatele a příjemce:</p>
        <ul>
          <li>Vercel Inc. (USA) – hosting webu, ochrana formuláře před roboty a statistiky bez cookies,</li>
          <li>Resend, Inc. (USA) – doručení zprávy z formuláře do naší e-mailové schránky,</li>
          <li>WebSupport s.r.o. (Slovensko) – e-mailová schránka a uchování komunikace,</li>
          {(tracking.gaId || tracking.googleAdsId) && (
            <li>Google Ireland Limited (Irsko) – Google Analytics{tracking.googleAdsId ? " a Google Ads" : ""},</li>
          )}
          {tracking.metaPixelId && <li>Meta Platforms Ireland Limited (Irsko) – reklama na Facebooku a Instagramu,</li>}
          {tracking.linkedinPartnerId && <li>LinkedIn Ireland Unlimited Company (Irsko) – reklama na LinkedInu,</li>}
        </ul>
        <p>
          Někteří z nich mohou údaje předávat také do USA. Předání probíhá na základě rámce pro ochranu údajů mezi EU a
          USA (EU-U.S. Data Privacy Framework), pokud je příjemce certifikován, nebo na základě standardních smluvních
          doložek schválených Evropskou komisí. Kopii těchto záruk vám na požádání poskytneme.
        </p>

        <h2>Vaše práva</h2>
        <ul>
          <li>požadovat přístup ke svým údajům, jejich opravu nebo výmaz,</li>
          <li>omezit zpracování nebo vznést námitku, zejména při zpracování na základě oprávněného zájmu,</li>
          <li>na přenositelnost údajů,</li>
          <li>kdykoli odvolat souhlas, aniž by tím byla dotčena zákonnost zpracování před jeho odvoláním,</li>
          <li>
            podat stížnost u Úradu na ochranu osobných údajov SR (dataprotection.gov.sk) nebo u Úřadu pro ochranu osobních
            údajů ČR (uoou.gov.cz).
          </li>
        </ul>
        <p>
          Stačí napsat na <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </article>
    </div>
  );
}
