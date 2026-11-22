"use client";

import { useActionState, useEffect } from "react";
import { trackLead } from "@/lib/tracking";
import { sendContact, type ContactState } from "@/app/actions";
import type { Dict } from "@/content";
import type { Lang } from "@/lib/i18n";
import { LIMITS } from "@/lib/formLimits";
import { ArrowRight } from "../ui/Icons";

const initial: ContactState = { status: "idle" };

type FormProps = {
  lang: Lang;
  t: Dict["form"];
  areas: string[];
  privacyHref: string;
  projectsHref: string;
  calculatorHref: string;
};

export function ContactForm({ lang, t, areas, privacyHref, projectsHref, calculatorHref }: FormProps) {
  /** Ak server alebo firewall odpoveď odmietne (napr. limit 429), ukážeme zrozumiteľnú chybu namiesto pádu stránky. */
  const submit = async (prev: ContactState, formData: FormData): Promise<ContactState> => {
    try {
      return await sendContact(prev, formData);
    } catch {
      const values = Object.fromEntries(
        ["firstName", "lastName", "company", "ico", "email", "phone", "area", "message"].map((k) => [k, String(formData.get(k) ?? "")]),
      );
      return { status: "error", message: t.errors.network, values };
    }
  };
  const [state, action, pending] = useActionState(submit, initial);
  const err: NonNullable<ContactState["errors"]> = state.errors ?? {};
  const v: Record<string, string> = state.values ?? {};

  useEffect(() => {
    if (state.status === "ok") trackLead();
  }, [state]);

  if (state.status === "ok") {
    return (
      <div className="form" role="status">
        <p className="form__status form__status--ok">{state.message}</p>
        <p style={{ color: "var(--muted)" }}>
          {t.successMore} <a href={projectsHref}>{t.successProjects}</a> {t.successOr}{" "}
          <a href={calculatorHref}>{t.successCalc}</a>.
        </p>
      </div>
    );
  }

  const field = (name: keyof NonNullable<ContactState["errors"]>) => ({
    "aria-invalid": err[name] ? true : undefined,
    "aria-describedby": err[name] ? `${name}-error` : undefined,
  });

  return (
    <form className="form" action={action} noValidate>
      <input type="hidden" name="lang" value={lang} />
      {state.status === "error" && state.message && (
        <p className="form__status form__status--err" role="alert">
          {state.message}
        </p>
      )}

      <div className="form__grid">
        <div className="input-wrap">
          <label htmlFor="firstName">{t.firstName}</label>
          <input id="firstName" name="firstName" maxLength={LIMITS.firstName} className="input" autoComplete="given-name" required defaultValue={v.firstName} {...field("firstName")} />
          {err.firstName && <span id="firstName-error" className="error">{err.firstName}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="lastName">{t.lastName}</label>
          <input id="lastName" name="lastName" maxLength={LIMITS.lastName} className="input" autoComplete="family-name" required defaultValue={v.lastName} {...field("lastName")} />
          {err.lastName && <span id="lastName-error" className="error">{err.lastName}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="company">{t.company}</label>
          <input id="company" name="company" maxLength={LIMITS.company} className="input" autoComplete="organization" required defaultValue={v.company} {...field("company")} />
          {err.company && <span id="company-error" className="error">{err.company}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="ico">
            {t.ico} <span className="opt">{t.optional}</span>
          </label>
          <input id="ico" name="ico" maxLength={LIMITS.ico} className="input" inputMode="numeric" autoComplete="off" defaultValue={v.ico} {...field("ico")} />
          {err.ico && <span id="ico-error" className="error">{err.ico}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="email">{t.email}</label>
          <input id="email" name="email" maxLength={LIMITS.email} type="email" className="input" autoComplete="email" required defaultValue={v.email} {...field("email")} />
          {err.email && <span id="email-error" className="error">{err.email}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="phone">
            {t.phone} <span className="opt">{t.optional}</span>
          </label>
          <input id="phone" name="phone" maxLength={LIMITS.phone} type="tel" className="input" autoComplete="tel" defaultValue={v.phone} {...field("phone")} />
          {err.phone && <span id="phone-error" className="error">{err.phone}</span>}
        </div>
      </div>

      <div className="input-wrap">
        <label htmlFor="area">{t.area}</label>
        <select key={`area-${v.area ?? ""}`} id="area" name="area" className="select" required defaultValue={v.area ?? ""} {...field("area")}>
          <option value="" disabled>
            {t.areaPlaceholder}
          </option>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        {err.area && <span id="area-error" className="error">{err.area}</span>}
      </div>

      <div className="input-wrap">
        <label htmlFor="message">
          {t.message} <span className="opt">{t.optional}</span>
        </label>
        <textarea
          id="message"
          name="message"
          maxLength={LIMITS.message}
          className="textarea"
          placeholder={t.messagePlaceholder}
          defaultValue={v.message}
          {...field("message")}
        />
        {err.message && <span id="message-error" className="error">{err.message}</span>}
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Web</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="form__note">
        {t.notePrefix}{" "}
        <a href={privacyHref} target="_blank" rel="noopener">
          {t.noteLink}
        </a>
        .
      </p>

      <button className="btn btn--primary" type="submit" disabled={pending}>
        {pending ? t.sending : (
          <>
            {t.submit} <ArrowRight />
          </>
        )}
      </button>
    </form>
  );
}
