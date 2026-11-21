import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { CookieSettingsButton } from "@/components/consent/ConsentManager";
import { hasTracking, tracking } from "@/lib/tracking";

export const metadata: Metadata = pageMetadata({
  path: "/cookies",
  title: "Cookies",
  description: "Aké cookies používa web Novorsa a ako môžete zmeniť svoj súhlas.",
});

type Row = { name: string; provider: string; purpose: string; duration: string };

const necessary: Row[] = [
  ...(hasTracking
    ? [{ name: "novorsa_consent", provider: "Novorsa", purpose: "Uloží vašu voľbu v cookie lište.", duration: "6 mesiacov" }]
    : []),
  {
    name: "Ochrana pred robotmi",
    provider: "Vercel",
    purpose: "Pri odoslaní formulára overí, že ho neodosiela robot. Môže v prehliadači uložiť technický údaj.",
    duration: "relácia",
  },
];

const analytics: Row[] = tracking.gaId
  ? [
      { name: "_ga", provider: "Google", purpose: "Rozlíši návštevníkov pre meranie návštevnosti.", duration: "2 roky" },
      { name: "_ga_*", provider: "Google", purpose: "Uchováva stav aktuálnej návštevy.", duration: "2 roky" },
    ]
  : [];

const marketing: Row[] = [
  ...(tracking.googleAdsId
    ? [{ name: "_gcl_au", provider: "Google", purpose: "Meranie konverzií z reklám Google Ads.", duration: "3 mesiace" }]
    : []),
  ...(tracking.metaPixelId
    ? [{ name: "_fbp", provider: "Meta", purpose: "Meranie a zobrazovanie reklamy na Facebooku a Instagrame.", duration: "3 mesiace" }]
    : []),
  ...(tracking.linkedinPartnerId
    ? [
        { name: "li_fat_id, bcookie", provider: "LinkedIn", purpose: "Meranie konverzií a zobrazovanie reklamy na LinkedIne.", duration: "až 1 rok" },
      ]
    : []),
];

function Table({ rows }: { rows: Row[] }) {
  return (
    <div className="table-wrap">
      <table className="cookie-table">
        <thead>
          <tr>
            <th>Názov</th>
            <th>Poskytovateľ</th>
            <th>Účel</th>
            <th>Platnosť</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>{r.name}</td>
              <td>{r.provider}</td>
              <td>{r.purpose}</td>
              <td>{r.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiesPage() {
  return (
    <div className="container">
      <article className="prose">
        <h1>Cookies</h1>
        <p>
          Cookies sú malé súbory, ktoré web ukladá vo vašom prehliadači. Nevyhnutné cookies používame vždy
          {analytics.length > 0 && marketing.length > 0
            ? ", analytické a marketingové len s vaším súhlasom."
            : analytics.length > 0
              ? ", analytické len s vaším súhlasom."
              : marketing.length > 0
                ? ", marketingové len s vaším súhlasom."
                : "."}
        </p>
        {hasTracking && (
          <p>
            Svoj súhlas môžete kedykoľvek zmeniť: <CookieSettingsButton />
          </p>
        )}

        <h2>Nevyhnutné</h2>
        <p>Zabezpečujú fungovanie a bezpečnosť webu. Súhlas na ne nepotrebujeme.</p>
        <Table rows={necessary} />

        <h2>Štatistiky bez cookies</h2>
        <p>
          Používame aj Vercel Web Analytics, ktoré merajú návštevnosť bez cookies a bez ukladania čohokoľvek do vášho
          prehliadača. Výsledkom sú len súhrnné čísla.
        </p>

        {analytics.length > 0 && (
          <>
            <h2>Analytické (so súhlasom)</h2>
            <p>Pomáhajú nám pochopiť, ako návštevníci web používajú, aby sme ho mohli zlepšovať.</p>
            <Table rows={analytics} />
          </>
        )}

        {marketing.length > 0 && (
          <>
            <h2>Marketingové (so súhlasom)</h2>
            <p>Merajú účinnosť reklamy a umožňujú zobrazovať relevantné ponuky na iných weboch a sociálnych sieťach.</p>
            <Table rows={marketing} />
          </>
        )}

        <h2>Viac informácií</h2>
        <p>
          Ako spracúvame osobné údaje, nájdete v časti <a href="/ochrana-osobnych-udajov">Ochrana osobných údajov</a>.
          Otázky: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </article>
    </div>
  );
}
