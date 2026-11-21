"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  OPEN_SETTINGS_EVENT,
  googleConsentState,
  hasAnalytics,
  hasMarketing,
  hasTracking,
  readConsent,
  tracking,
  writeConsent,
  type Consent,
} from "@/lib/tracking";

/** Zmaže cookies daného nástroja na tejto doméne aj na nadradených doménach (napr. .novorsa.sk). */
function deleteCookies(prefixes: string[]) {
  const names = document.cookie
    .split("; ")
    .map((c) => c.split("=")[0])
    .filter((n) => prefixes.some((p) => n.startsWith(p)));
  const parts = location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) domains.push(`; domain=.${parts.slice(i).join(".")}`);
  for (const name of names) {
    for (const d of domains) document.cookie = `${name}=; Max-Age=0; Path=/${d}`;
  }
}

/** Cookie lišta so súhlasom a načítanie meracích a marketingových nástrojov až po súhlase. */
export function ConsentManager() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    if (!hasTracking) return;
    const stored = readConsent();
    setConsent(stored);
    if (!stored) setOpen(true);
    const onOpen = () => {
      const c = readConsent();
      setDraft({ analytics: Boolean(c?.analytics), marketing: Boolean(c?.marketing) });
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
  }, []);

  if (!hasTracking) return null;

  const save = (analytics: boolean, marketing: boolean) => {
    const prev = consent;
    const next: Consent = { v: 1, analytics: analytics && hasAnalytics, marketing: marketing && hasMarketing, date: new Date().toISOString() };
    writeConsent(next);
    setConsent(next);
    setOpen(false);
    setDetails(false);
    // Odvolaný súhlas: už načítané nástroje sa dajú vypnúť len znovunačítaním stránky.
    if (prev && ((prev.analytics && !next.analytics) || (prev.marketing && !next.marketing))) {
      if (prev.analytics && !next.analytics) deleteCookies(["_ga", "_gid"]);
      if (prev.marketing && !next.marketing) deleteCookies(["_gcl", "_fbp", "_fbc", "li_", "bcookie", "lidc"]);
      window.location.reload();
    }
  };

  const a = Boolean(consent?.analytics);
  const m = Boolean(consent?.marketing);
  const useGoogle = (a && tracking.gaId) || (m && tracking.googleAdsId);

  return (
    <>
      {useGoogle && (
        <>
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;` +
              `gtag('consent','default',${JSON.stringify(googleConsentState(a, m))});gtag('js',new Date());` +
              (a && tracking.gaId ? `gtag('config','${tracking.gaId}');` : "") +
              (m && tracking.googleAdsId ? `gtag('config','${tracking.googleAdsId}');` : "")}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${a && tracking.gaId ? tracking.gaId : tracking.googleAdsId}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {m && tracking.metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};` +
            `if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;` +
            `s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');` +
            `fbq('init','${tracking.metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}

      {m && tracking.linkedinPartnerId && (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push('${tracking.linkedinPartnerId}');` +
            `(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName('script')[0];` +
            `var b=document.createElement('script');b.type='text/javascript';b.async=true;b.src='https://snap.licdn.com/li.lms-analytics/insight.min.js';` +
            `s.parentNode.insertBefore(b,s)})(window.lintrk);`}
        </Script>
      )}

      {open && (
        <div className="consent" role="dialog" aria-modal="false" aria-labelledby="consent-title">
          <h2 id="consent-title" className="consent__title">
            Cookies a meranie návštevnosti
          </h2>
          <p className="consent__text">
            Nevyhnutné cookies zabezpečujú fungovanie webu. S vaším súhlasom použijeme aj
            {hasAnalytics && " analytické cookies na meranie návštevnosti"}
            {hasAnalytics && hasMarketing && " a"}
            {hasMarketing && " marketingové cookies na meranie a zobrazovanie reklamy"}. Súhlas môžete kedykoľvek zmeniť.{" "}
            <a href="/cookies">Viac o cookies</a>
          </p>

          {details && (
            <ul className="consent__options">
              <li>
                <label>
                  <input type="checkbox" checked disabled />
                  <span>
                    <strong>Nevyhnutné</strong> Fungovanie a bezpečnosť webu. Vždy zapnuté.
                  </span>
                </label>
              </li>
              {hasAnalytics && (
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={draft.analytics}
                      onChange={(e) => setDraft((d) => ({ ...d, analytics: e.target.checked }))}
                    />
                    <span>
                      <strong>Analytické</strong> Meranie návštevnosti, aby sme vedeli web zlepšovať.
                    </span>
                  </label>
                </li>
              )}
              {hasMarketing && (
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={draft.marketing}
                      onChange={(e) => setDraft((d) => ({ ...d, marketing: e.target.checked }))}
                    />
                    <span>
                      <strong>Marketingové</strong> Meranie účinnosti reklamy a zobrazovanie relevantných ponúk.
                    </span>
                  </label>
                </li>
              )}
            </ul>
          )}

          <div className="consent__actions">
            {details ? (
              <button type="button" className="btn btn--primary btn--sm" onClick={() => save(draft.analytics, draft.marketing)}>
                Uložiť výber
              </button>
            ) : (
              <button type="button" className="btn btn--ghost btn--sm" onClick={() => setDetails(true)}>
                Nastavenia
              </button>
            )}
            <button type="button" className="btn btn--primary btn--sm" onClick={() => save(false, false)}>
              Odmietnuť
            </button>
            <button type="button" className="btn btn--primary btn--sm" onClick={() => save(true, true)}>
              Prijať všetko
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Odkaz v päte, ktorým návštevník kedykoľvek zmení súhlas. */
export function CookieSettingsButton() {
  if (!hasTracking) return null;
  return (
    <button type="button" className="footer__btn" onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}>
      Nastavenia cookies
    </button>
  );
}
