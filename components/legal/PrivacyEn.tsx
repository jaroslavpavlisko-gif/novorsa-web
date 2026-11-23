import { site } from "@/content/site";
import { en } from "@/content/en";
import { path } from "@/lib/i18n";
import { hasAnalytics, hasMarketing, tracking } from "@/lib/tracking";

/** Privacy policy – English version. */
export function PrivacyEn() {
  const c = site.company;
  return (
    <div className="container">
      <article className="prose">
        <h1>Privacy policy</h1>
        <p>Effective from [publication date]. Here you can find out which personal data we process, why, and what rights you have.</p>

        <h2>Controller</h2>
        <p>
          {c.name}, {c.street}, {c.city}, Slovak Republic, company ID (IČO) {c.ico}, {en.site.register} (“we”). Novorsa is
          a brand of {c.name}. Contact for personal data matters: <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>What data we process and why</h2>
        <ul>
          <li>
            <strong>Contact form:</strong> first name, last name, company, email, area of interest and, if you provide
            them, company ID, phone number and message text. Purpose: to reply to your enquiry and prepare an initial
            consultation.
          </li>
          <li>
            <strong>Protecting the form against bots:</strong> when the form is submitted, technical characteristics of
            the browser and device are checked to detect automated attacks and spam.
          </li>
          <li>
            <strong>Cookieless visitor statistics:</strong> aggregated data on page views, country and device type that
            do not allow us to identify a specific person.
          </li>
          {hasAnalytics && (
            <li>
              <strong>Analytics cookies (only with your consent):</strong> data on how you use the website (pages visited,
              visit duration, traffic source, approximate location, device type) so that we can improve it.
            </li>
          )}
          {hasMarketing && (
            <li>
              <strong>Marketing cookies (only with your consent):</strong> data on your visit and interaction with the
              website to measure the effectiveness of advertising and show relevant offers on other websites and social
              networks.
            </li>
          )}
          <li>
            <strong>Technical server logs:</strong> IP address and time of the request, to protect the website against
            misuse.
          </li>
        </ul>

        <h2>Legal basis</h2>
        <ul>
          <li>
            Form data: handling your enquiry, i.e. steps taken at your request prior to entering into a contract (Art. 6(1)(b)
            GDPR) and, if you contact us on behalf of a company, our legitimate interest in replying to a business enquiry
            (Art. 6(1)(f) GDPR).
          </li>
          <li>
            Bot protection, cookieless statistics and technical logs: our legitimate interest in the security and
            operation of the website (Art. 6(1)(f) GDPR).
          </li>
          {(hasAnalytics || hasMarketing) && (
            <li>
              {hasAnalytics && hasMarketing ? "Analytics and marketing" : hasAnalytics ? "Analytics" : "Marketing"} cookies:
              your consent (Art. 6(1)(a) GDPR and electronic communications law). You can change your consent at any time
              via the “Cookie settings” link in the website footer.
            </li>
          )}
        </ul>
        <p>
          Providing data is voluntary. However, without the required form fields we cannot reply to you. We do not carry
          out automated decision-making or profiling with legal effects.
        </p>

        <h2>How long we keep data</h2>
        <ul>
          <li>Enquiry data: no longer than 24 months from the last communication, unless a contractual relationship arises.</li>
          <li>Technical logs: no longer than 30 days.</li>
          {(hasAnalytics || hasMarketing) && (
            <li>
              Cookie data: for the period stated on the <a href={path("en", "cookies")}>Cookies</a> page.
            </li>
          )}
        </ul>

        <h2>Who has access to the data</h2>
        <p>We do not sell data. To run the website we use the following processors and recipients:</p>
        <ul>
          <li>Vercel Inc. (USA) – website hosting, bot protection for the form and cookieless statistics,</li>
          <li>Resend, Inc. (USA) – delivery of form messages to our mailbox,</li>
          <li>WebSupport s.r.o. (Slovakia) – email mailbox and storage of communication,</li>
          {(tracking.gaId || tracking.googleAdsId) && (
            <li>Google Ireland Limited (Ireland) – Google Analytics{tracking.googleAdsId ? " and Google Ads" : ""},</li>
          )}
          {tracking.metaPixelId && <li>Meta Platforms Ireland Limited (Ireland) – advertising on Facebook and Instagram,</li>}
          {tracking.linkedinPartnerId && <li>LinkedIn Ireland Unlimited Company (Ireland) – advertising on LinkedIn,</li>}
        </ul>
        <p>
          Some of them may also transfer data to the USA. Transfers take place under the EU-U.S. Data Privacy Framework
          where the recipient is certified, or on the basis of standard contractual clauses approved by the European
          Commission. We will provide a copy of these safeguards on request.
        </p>

        <h2>Your rights</h2>
        <ul>
          <li>to request access to your data, its rectification or erasure,</li>
          <li>to restrict processing or object to it, in particular where processing is based on legitimate interest,</li>
          <li>to data portability,</li>
          <li>to withdraw your consent at any time, without affecting the lawfulness of processing before withdrawal,</li>
          <li>
            to lodge a complaint with the Office for Personal Data Protection of the Slovak Republic (dataprotection.gov.sk)
            or with the supervisory authority in your EU country of residence.
          </li>
        </ul>
        <p>
          Just write to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </article>
    </div>
  );
}
