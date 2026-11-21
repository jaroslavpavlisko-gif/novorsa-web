// Meranie návštevnosti a marketing. ID nástrojov sa nastavujú vo Verceli
// (Settings → Environment Variables). Kým ID chýba, nástroj sa nenačíta
// a nezobrazí sa ani v lište ani na stránke Cookies.

export const tracking = {
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "", // Google Analytics 4, napr. G-XXXXXXXXXX
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "", // Google Ads, napr. AW-XXXXXXXXX
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "", // Meta (Facebook, Instagram)
  linkedinPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? "", // LinkedIn Insight Tag
};

export const hasAnalytics = Boolean(tracking.gaId);
export const hasMarketing = Boolean(tracking.googleAdsId || tracking.metaPixelId || tracking.linkedinPartnerId);
export const hasTracking = hasAnalytics || hasMarketing;

export type Consent = { v: 1; analytics: boolean; marketing: boolean; date: string };

export const CONSENT_COOKIE = "novorsa_consent";
export const CONSENT_DAYS = 180;
export const OPEN_SETTINGS_EVENT = "novorsa:cookie-settings";

export function readConsent(): Consent | null {
  try {
    const m = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]+)`));
    if (!m) return null;
    const c = JSON.parse(decodeURIComponent(m[1]));
    return c && c.v === 1 ? (c as Consent) : null;
  } catch {
    return null;
  }
}

export function writeConsent(c: Consent) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(c))}; Max-Age=${CONSENT_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;
}

export function googleConsentState(analytics: boolean, marketing: boolean) {
  const g = (on: boolean) => (on ? "granted" : "denied");
  return {
    analytics_storage: g(analytics),
    ad_storage: g(marketing),
    ad_user_data: g(marketing),
    ad_personalization: g(marketing),
  };
}

type TrackWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

/** Konverzia: odoslaný kontaktný formulár. Odošle sa len do nástrojov, ktoré návštevník povolil. */
export function trackLead() {
  const w = window as TrackWindow;
  w.gtag?.("event", "generate_lead");
  w.fbq?.("track", "Lead");
}
