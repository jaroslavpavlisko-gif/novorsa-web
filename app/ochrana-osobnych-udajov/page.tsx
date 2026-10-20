import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description: "Ako Novorsa spracúva osobné údaje z kontaktného formulára a webu.",
  alternates: { canonical: "/ochrana-osobnych-udajov" },
};

export default function PrivacyPage() {
  const c = site.company;
  return (
    <div className="container">
      <article className="prose">
        <h1>Ochrana osobných údajov</h1>
        <p>Platné od [dátum zverejnenia]. Tu nájdete, aké osobné údaje spracúvame, prečo a aké máte práva.</p>
        <p className="note">Návrh textu. Pred spustením webu ho, prosím, nechajte skontrolovať odborníkom na GDPR.</p>

        <h2>Prevádzkovateľ</h2>
        <p>
          {c.name}, {c.street}, {c.city}, IČO {c.ico} (ďalej „my“). Novorsa je naša obchodná značka. Kontakt vo veciach
          osobných údajov: <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Aké údaje spracúvame a prečo</h2>
        <ul>
          <li>
            <strong>Kontaktný formulár:</strong> meno, firma, pracovný e-mail, telefón (ak ho uvediete), veľkosť firmy,
            oblasť a text správy. Účel: odpovedať na váš dopyt a pripraviť úvodnú konzultáciu.
          </li>
          <li>
            <strong>Návštevnosť webu:</strong> anonymné štatistiky bez cookies (počet zobrazení, krajina, typ zariadenia),
            ktoré nám neumožňujú identifikovať konkrétnu osobu.
          </li>
          <li>
            <strong>Technické záznamy servera:</strong> IP adresa a čas požiadavky na ochranu webu pred zneužitím.
          </li>
        </ul>

        <h2>Právny základ</h2>
        <p>
          Údaje z formulára spracúvame na základe vášho súhlasu a na vykonanie opatrení pred uzavretím zmluvy na vašu
          žiadosť (čl. 6 ods. 1 písm. a) a b) GDPR). Technické záznamy a štatistiky na základe oprávneného záujmu na
          bezpečnosti a fungovaní webu (čl. 6 ods. 1 písm. f) GDPR).
        </p>

        <h2>Ako dlho údaje uchovávame</h2>
        <p>
          Údaje z dopytu uchovávame najviac 24 mesiacov od poslednej komunikácie, ak z nej nevznikne zmluvný vzťah.
          Technické záznamy uchovávame najviac 30 dní.
        </p>

        <h2>Kto má k údajom prístup</h2>
        <p>Údaje nepredávame. Pri prevádzke webu využívame týchto sprostredkovateľov:</p>
        <ul>
          <li>Vercel Inc. – hosting webu a anonymné štatistiky,</li>
          <li>Resend, Inc. – doručenie správy z formulára do našej e-mailovej schránky,</li>
          <li>[poskytovateľ e-mailovej schránky] – uchovanie komunikácie.</li>
        </ul>
        <p>
          Niektorí sprostredkovatelia môžu údaje spracúvať aj mimo EÚ. V takom prípade na základe štandardných zmluvných
          doložiek alebo iných záruk podľa GDPR.
        </p>

        <h2>Vaše práva</h2>
        <ul>
          <li>požadovať prístup k svojim údajom, ich opravu alebo vymazanie,</li>
          <li>obmedziť spracúvanie alebo namietať proti nemu,</li>
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
