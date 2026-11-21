"use client";

import { useActionState, useEffect } from "react";
import { trackLead } from "@/lib/tracking";
import { sendContact, type ContactState } from "@/app/actions";
import { contact } from "@/content/site";
import { LIMITS } from "@/lib/formLimits";
import { ArrowRight } from "../ui/Icons";

const initial: ContactState = { status: "idle" };

/** Ak server alebo firewall odpoveď odmietne (napr. limit 429), ukážeme zrozumiteľnú chybu namiesto pádu stránky. */
async function submit(prev: ContactState, formData: FormData): Promise<ContactState> {
  try {
    return await sendContact(prev, formData);
  } catch {
    const values = Object.fromEntries(
      ["firstName", "lastName", "company", "ico", "email", "phone", "area", "message"].map((k) => [k, String(formData.get(k) ?? "")]),
    );
    return {
      status: "error",
      message: "Správu sa teraz nepodarilo odoslať. Skúste to o pár minút alebo nám napíšte na info@novorsa.sk.",
      values,
    };
  }
}

export function ContactForm() {
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
          Medzitým si môžete prejsť <a href="/riesenia#ukazky">úspešné projekty</a> alebo{" "}
          <a href="/kalkulacka">vyčísliť ďalší proces</a>.
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
      {state.status === "error" && state.message && (
        <p className="form__status form__status--err" role="alert">
          {state.message}
        </p>
      )}

      <div className="form__grid">
        <div className="input-wrap">
          <label htmlFor="firstName">Meno</label>
          <input id="firstName" name="firstName" maxLength={LIMITS.firstName} className="input" autoComplete="given-name" required defaultValue={v.firstName} {...field("firstName")} />
          {err.firstName && <span id="firstName-error" className="error">{err.firstName}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="lastName">Priezvisko</label>
          <input id="lastName" name="lastName" maxLength={LIMITS.lastName} className="input" autoComplete="family-name" required defaultValue={v.lastName} {...field("lastName")} />
          {err.lastName && <span id="lastName-error" className="error">{err.lastName}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="company">Spoločnosť</label>
          <input id="company" name="company" maxLength={LIMITS.company} className="input" autoComplete="organization" required defaultValue={v.company} {...field("company")} />
          {err.company && <span id="company-error" className="error">{err.company}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="ico">
            IČO <span className="opt">(nepovinné)</span>
          </label>
          <input id="ico" name="ico" maxLength={LIMITS.ico} className="input" inputMode="numeric" autoComplete="off" defaultValue={v.ico} {...field("ico")} />
          {err.ico && <span id="ico-error" className="error">{err.ico}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" maxLength={LIMITS.email} type="email" className="input" autoComplete="email" required defaultValue={v.email} {...field("email")} />
          {err.email && <span id="email-error" className="error">{err.email}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="phone">
            Telefónne číslo <span className="opt">(nepovinné)</span>
          </label>
          <input id="phone" name="phone" maxLength={LIMITS.phone} type="tel" className="input" autoComplete="tel" defaultValue={v.phone} {...field("phone")} />
          {err.phone && <span id="phone-error" className="error">{err.phone}</span>}
        </div>
      </div>

      <div className="input-wrap">
        <label htmlFor="area">Čo chcete zlepšiť?</label>
        <select key={`area-${v.area ?? ""}`} id="area" name="area" className="select" required defaultValue={v.area ?? ""} {...field("area")}>
          <option value="" disabled>
            Vyberte oblasť
          </option>
          {contact.areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        {err.area && <span id="area-error" className="error">{err.area}</span>}
      </div>

      <div className="input-wrap">
        <label htmlFor="message">
          Čo vášmu tímu berie najviac času? <span className="opt">(nepovinné)</span>
        </label>
        <textarea
          id="message"
          name="message"
          maxLength={LIMITS.message}
          className="textarea"
          placeholder="Napr. faktúry prepisujeme ručne do účtovníctva, trvá to dvom ľuďom pol dňa týždenne."
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
        Údaje použijeme na vybavenie vášho dopytu. Podrobnosti nájdete v{" "}
        <a href="/ochrana-osobnych-udajov" target="_blank" rel="noopener">
          zásadách ochrany osobných údajov
        </a>
        .
      </p>

      <button className="btn btn--primary" type="submit" disabled={pending}>
        {pending ? "Odosielam…" : (
          <>
            Odoslať a dohodnúť konzultáciu <ArrowRight />
          </>
        )}
      </button>
    </form>
  );
}
