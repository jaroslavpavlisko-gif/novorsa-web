"use client";

import { useId, useState, type CSSProperties } from "react";
import { calculateRoi, formatEur, formatFte, formatHours, type RoiInput } from "@/lib/roi";
import { ArrowRight } from "../ui/Icons";

type FieldDef = {
  key: keyof RoiInput;
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
};

const fields: FieldDef[] = [
  { key: "people", label: "Koľko ľudí robí túto úlohu", hint: "Napríklad 3 ľudia v účtovníctve", min: 1, max: 50, step: 1, format: (v) => `${v}` },
  { key: "minutesPerTask", label: "Koľko minút trvá jedna úloha", hint: "Jedno spracovanie, napr. jedna faktúra", min: 1, max: 120, step: 1, format: (v) => `${v} min` },
  { key: "timesPerWeek", label: "Koľkokrát týždenne ju robí jeden človek", hint: "Opakovania na osobu za týždeň", min: 1, max: 200, step: 1, format: (v) => `${v}×` },
  { key: "hourlyCost", label: "Cena hodiny práce vrátane odvodov", hint: "Celková cena práce pre firmu", min: 8, max: 80, step: 1, format: (v) => `${v} €` },
  { key: "automationShare", label: "Koľko sa dá automatizovať", hint: "Konzervatívny odhad je 50 až 70 %", min: 0.1, max: 0.9, step: 0.05, format: (v) => `${Math.round(v * 100)} %` },
];

const initial: RoiInput = { people: 3, minutesPerTask: 8, timesPerWeek: 40, hourlyCost: 18, automationShare: 0.6 };

export function RoiCalculator() {
  const [values, setValues] = useState<RoiInput>(initial);
  const r = calculateRoi(values);
  const uid = useId();

  return (
    <div className="roi">
      <form className="roi__form" onSubmit={(e) => e.preventDefault()} aria-label="Vstupy kalkulačky">
        {fields.map((f) => {
          const id = `${uid}-${f.key}`;
          const v = values[f.key];
          const fill = ((v - f.min) / (f.max - f.min)) * 100;
          return (
            <div className="field" key={f.key}>
              <div className="field__row">
                <label htmlFor={id}>{f.label}</label>
                <output className="field__value" htmlFor={id}>
                  {f.format(v)}
                </output>
              </div>
              <input
                id={id}
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={v}
                aria-valuetext={f.format(v)}
                aria-describedby={`${id}-hint`}
                style={{ "--fill": `${fill}%` } as CSSProperties}
                onChange={(e) => setValues((prev) => ({ ...prev, [f.key]: Number(e.target.value) }))}
              />
              <span id={`${id}-hint`} className="field__hint">
                {f.hint}
              </span>
            </div>
          );
        })}
      </form>

      <div className="roi__result" aria-live="polite">
        <div className="roi__big">
          <span>Uvoľnená kapacita ročne</span>
          <strong>{formatHours(r.automatableHours)}</strong>
        </div>
        <dl className="roi__rows">
          <div>
            <dt>Ekvivalent úväzkov</dt>
            <dd>{formatFte(r.fte)} FTE</dd>
          </div>
          <div>
            <dt>Hodnota uvoľnenej kapacity</dt>
            <dd>{formatEur(r.capacityValue)} / rok</dd>
          </div>
          <div>
            <dt>Súčasná ručná práca</dt>
            <dd>{formatHours(r.annualHours)} / rok</dd>
          </div>
        </dl>
        <p className="roi__disclaimer">
          Orientačný odhad, nie garantovaná úspora. Počítame so 48 pracovnými týždňami a úväzkom 1 920 hodín ročne.
          Uvoľnená kapacita sa nerovná automaticky úspore nákladov.
        </p>
        <a className="btn btn--primary" href="/kontakt">
          Overiť odhad na konzultácii <ArrowRight />
        </a>
      </div>
    </div>
  );
}
