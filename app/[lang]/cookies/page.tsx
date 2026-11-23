import type { Metadata } from "next";
import { site } from "@/content/site";
import { getDict } from "@/content";
import { path } from "@/lib/i18n";
import { langFrom, pageMetadata, type LangParams } from "@/lib/seo";
import { CookieSettingsButton } from "@/components/consent/ConsentManager";
import { hasTracking, tracking } from "@/lib/tracking";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  return pageMetadata(await langFrom(props), "cookies");
}

type Row = { name: string; provider: string; purpose: string; duration: string };
type Cols = { name: string; provider: string; purpose: string; duration: string };

function Table({ rows, cols }: { rows: Row[]; cols: Cols }) {
  return (
    <div className="table-wrap">
      <table className="cookie-table">
        <thead>
          <tr>
            <th>{cols.name}</th>
            <th>{cols.provider}</th>
            <th>{cols.purpose}</th>
            <th>{cols.duration}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td data-label={cols.name}>{r.name}</td>
              <td data-label={cols.provider}>{r.provider}</td>
              <td data-label={cols.purpose}>{r.purpose}</td>
              <td data-label={cols.duration}>{r.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function CookiesPage(props: LangParams) {
  const lang = await langFrom(props);
  const t = getDict(lang);
  const c = t.cookiesPage;
  const r = c.rows;

  const necessary: Row[] = [
    ...(hasTracking ? [{ ...r.consent, provider: "Novorsa" }] : []),
    { ...r.bot, provider: "Vercel" },
  ];
  const analytics: Row[] = tracking.gaId
    ? [
        { name: "_ga", provider: "Google", ...r.ga },
        { name: "_ga_*", provider: "Google", ...r.gaSession },
      ]
    : [];
  const marketing: Row[] = [
    ...(tracking.googleAdsId ? [{ name: "_gcl_au", provider: "Google", ...r.gads }] : []),
    ...(tracking.metaPixelId ? [{ name: "_fbp", provider: "Meta", ...r.meta }] : []),
    ...(tracking.linkedinPartnerId ? [{ name: "li_fat_id, bcookie", provider: "LinkedIn", ...r.linkedin }] : []),
  ];

  return (
    <div className="container">
      <article className="prose">
        <h1>{c.title}</h1>
        <p>
          {c.intro}
          {analytics.length > 0 && marketing.length > 0
            ? c.introBoth
            : analytics.length > 0
              ? c.introAnalytics
              : marketing.length > 0
                ? c.introMarketing
                : "."}
        </p>
        {hasTracking && (
          <p>
            {c.change} <CookieSettingsButton label={t.consent.footerButton} />
          </p>
        )}

        <h2>{c.necessaryTitle}</h2>
        <p>{c.necessaryText}</p>
        <Table rows={necessary} cols={c.cols} />

        <h2>{c.statsTitle}</h2>
        <p>{c.statsText}</p>

        {analytics.length > 0 && (
          <>
            <h2>{c.analyticsTitle}</h2>
            <p>{c.analyticsText}</p>
            <Table rows={analytics} cols={c.cols} />
          </>
        )}

        {marketing.length > 0 && (
          <>
            <h2>{c.marketingTitle}</h2>
            <p>{c.marketingText}</p>
            <Table rows={marketing} cols={c.cols} />
          </>
        )}

        <h2>{c.moreTitle}</h2>
        <p>
          {c.moreText} <a href={path(lang, "privacy")}>{t.meta.privacy.title}</a>. {c.questions}{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </article>
    </div>
  );
}
