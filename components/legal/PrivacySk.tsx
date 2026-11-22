import { site } from "@/content/site";
import { sk } from "@/content/sk";
import { path } from "@/lib/i18n";
import { hasAnalytics, hasMarketing, tracking } from "@/lib/tracking";

/** Ochrana osobných údajov – slovenské znenie. */
export function PrivacySk() {
  const c = site.company;
  return (
    <div className="container">
      <article className="prose">
        <h1>Ochrana osobných údajov</h1>
        <p>Platné od [dátum zverejnenia]. Tu nájdete, aké osobné údaje spracúvame, prečo a aké máte práva.</p>

        <h2>Prevádzkovateľ</h2>
        <p>
          {c.name}, {c.street}, {c.city}, IČO {c.ico}, {sk.site.register} (ďalej „my“). Novorsa je naša obchodná značka. Kontakt
          vo veciach osobných údajov: <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Aké údaje spracúvame a prečo</h2>
        <ul>
          <li>
            <strong>Kontaktný formulár:</strong> meno, priezvisko, spoločnosť, e-mail, oblasť a ak ich uvediete, aj IČO,
            telefónne číslo a text správy. Účel: odpovedať na váš dopyt a pripraviť úvodnú konzultáciu.
          </li>
          <li>
            <strong>Ochrana formulára pred robotmi:</strong> pri odoslaní formulára sa overujú technické znaky prehliadača
            a zariadenia, aby sa rozpoznali automatizované útoky a spam.
          </li>
          <li>
            <strong>Štatistiky návštevnosti bez cookies:</strong> agregované údaje o počte zobrazení, krajine a type
            zariadenia, ktoré nám neumožňujú identifikovať konkrétnu osobu.
          </li>
          {hasAnalytics && (
            <li>
              <strong>Analytické cookies (len s vaším súhlasom):</strong> údaje o tom, ako web používate (navštívené
              stránky, dĺžka návštevy, zdroj návštevy, približná poloha, typ zariadenia), aby sme mohli web zlepšovať.
            </li>
          )}
          {hasMarketing && (
            <li>
              <strong>Marketingové cookies (len s vaším súhlasom):</strong> údaje o návšteve a interakcii s webom na meranie
              účinnosti reklamy a zobrazovanie relevantných ponúk na iných weboch a sociálnych sieťach.
            </li>
          )}
          <li>
            <strong>Technické záznamy servera:</strong> IP adresa a čas požiadavky na ochranu webu pred zneužitím.
          </li>
        </ul>

        <h2>Právny základ</h2>
        <ul>
          <li>
            Údaje z formulára: vybavenie vášho dopytu, teda opatrenia pred uzavretím zmluvy na vašu žiadosť (čl. 6 ods. 1
            písm. b) GDPR), a ak nás kontaktujete ako zástupca firmy, náš oprávnený záujem odpovedať na obchodný dopyt
            (čl. 6 ods. 1 písm. f) GDPR).
          </li>
          <li>
            Ochrana pred robotmi, štatistiky bez cookies a technické záznamy: náš oprávnený záujem na bezpečnosti a
            fungovaní webu (čl. 6 ods. 1 písm. f) GDPR).
          </li>
          {(hasAnalytics || hasMarketing) && (
            <li>
              {hasAnalytics && hasMarketing ? "Analytické a marketingové" : hasAnalytics ? "Analytické" : "Marketingové"}{" "}
              cookies: váš súhlas (čl. 6 ods. 1 písm. a) GDPR a zákon o elektronických
              komunikáciách). Súhlas môžete kedykoľvek zmeniť cez odkaz „Nastavenia cookies“ v päte webu.
            </li>
          )}
        </ul>
        <p>
          Poskytnutie údajov je dobrovoľné. Bez povinných údajov z formulára vám však nevieme odpovedať. Automatizované
          rozhodovanie s právnymi účinkami ani profilovanie s takýmito účinkami nevykonávame.
        </p>

        <h2>Ako dlho údaje uchovávame</h2>
        <ul>
          <li>Údaje z dopytu: najviac 24 mesiacov od poslednej komunikácie, ak z nej nevznikne zmluvný vzťah.</li>
          <li>Technické záznamy: najviac 30 dní.</li>
          {(hasAnalytics || hasMarketing) && (
            <li>Údaje z cookies: podľa doby platnosti uvedenej na stránke <a href={path("sk", "cookies")}>Cookies</a>.</li>
          )}
        </ul>

        <h2>Kto má k údajom prístup</h2>
        <p>Údaje nepredávame. Pri prevádzke webu využívame týchto sprostredkovateľov a príjemcov:</p>
        <ul>
          <li>Vercel Inc. (USA) – hosting webu, ochrana formulára pred robotmi a štatistiky bez cookies,</li>
          <li>Resend, Inc. (USA) – doručenie správy z formulára do našej e-mailovej schránky,</li>
          <li>WebSupport s.r.o. (Slovensko) – e-mailová schránka a uchovanie komunikácie,</li>
          {(tracking.gaId || tracking.googleAdsId) && (
            <li>Google Ireland Limited (Írsko) – Google Analytics{tracking.googleAdsId ? " a Google Ads" : ""},</li>
          )}
          {tracking.metaPixelId && <li>Meta Platforms Ireland Limited (Írsko) – reklama na Facebooku a Instagrame,</li>}
          {tracking.linkedinPartnerId && <li>LinkedIn Ireland Unlimited Company (Írsko) – reklama na LinkedIne,</li>}
        </ul>
        <p>
          Niektorí z nich môžu údaje prenášať aj do USA. Prenos prebieha na základe rámca ochrany údajov medzi EÚ a USA
          (EU-U.S. Data Privacy Framework), ak je príjemca certifikovaný, alebo na základe štandardných zmluvných doložiek
          schválených Európskou komisiou. Kópiu týchto záruk vám na požiadanie poskytneme.
        </p>

        <h2>Vaše práva</h2>
        <ul>
          <li>požadovať prístup k svojim údajom, ich opravu alebo vymazanie,</li>
          <li>obmedziť spracúvanie alebo namietať proti nemu, najmä pri spracúvaní na základe oprávneného záujmu,</li>
          <li>na prenosnosť údajov,</li>
          <li>kedykoľvek odvolať súhlas, bez vplyvu na zákonnosť spracúvania pred jeho odvolaním,</li>
          <li>podať sťažnosť Úradu na ochranu osobných údajov SR (dataprotection.gov.sk).</li>
        </ul>
        <p>
          Stačí napísať na <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </article>
    </div>
  );
}
