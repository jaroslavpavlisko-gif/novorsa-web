"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import { contact } from "@/content/site";
import { ArrowRight } from "../ui/Icons";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const err: NonNullable<ContactState["errors"]> = state.errors ?? {};
  const v: Record<string, string> = state.values ?? {};

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
          <label htmlFor="name">Meno a priezvisko</label>
          <input id="name" name="name" className="input" autoComplete="name" required defaultValue={v.name} {...field("name")} />
          {err.name && <span id="name-error" className="error">{err.name}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="company">Firma</label>
          <input id="company" name="company" className="input" autoComplete="organization" required defaultValue={v.company} {...field("company")} />
          {err.company && <span id="company-error" className="error">{err.company}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="email">Pracovný e-mail</label>
          <input id="email" name="email" type="email" className="input" autoComplete="email" required defaultValue={v.email} {...field("email")} />
          {err.email && <span id="email-error" className="error">{err.email}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="phone">
            Telefón <span className="opt">(nepovinné)</span>
          </label>
          <input id="phone" name="phone" type="tel" className="input" autoComplete="tel" defaultValue={v.phone} />
        </div>
        <div className="input-wrap">
          <label htmlFor="size">Veľkosť firmy</label>
          <select key={`size-${v.size ?? ""}`} id="size" name="size" className="select" required defaultValue={v.size ?? ""} {...field("size")}>
            <option value="" disabled>
              Vyberte
            </option>
            {contact.sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {err.size && <span id="size-error" className="error">{err.size}</span>}
        </div>
        <div className="input-wrap">
          <label htmlFor="area">Čo chcete zlepšiť</label>
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
      </div>

      <div className="input-wrap">
        <label htmlFor="message">Čo vášmu tímu berie najviac času?</label>
        <textarea
          id="message"
          name="message"
          className="textarea"
          required
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

      <div className="input-wrap">
        <label className="consent">
          <input type="checkbox" name="consent" required {...field("consent")} />
          <span>
            Súhlasím so spracovaním osobných údajov na účel odpovede na môj dopyt podľa{" "}
            <a href="/ochrana-osobnych-udajov" target="_blank" rel="noopener">
              zásad ochrany osobných údajov
            </a>
            .
          </span>
        </label>
        {err.consent && <span id="consent-error" className="error">{err.consent}</span>}
      </div>

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
