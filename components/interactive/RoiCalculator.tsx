"use client";

import { useId, useState, type CSSProperties } from "react";
import { calculateRoi, formatters, type RoiInput } from "@/lib/roi";
import type { Dict } from "@/content";
import { ArrowRight } from "../ui/Icons";

type FieldDef = { key: keyof RoiInput; min: number; max: number; step: number; format: (v: number) => string };

export function RoiCalculator({ t, ctaHref }: { t: Dict["roi"]; ctaHref: string }) {
  const [values, setValues] = useState<RoiInput>({
    people: 3,
    minutesPerTask: 8,
    timesPerWeek: 40,
    hourlyCost: t.rate.initial,
    automationShare: 0.6,
  });
  const r = calculateRoi(values);
  const f = formatters(t.numberLocale, t.currency);
  const uid = useId();

  const fields: FieldDef[] = [
    { key: "people", min: 1, max: 50, step: 1, format: (v) => `${v}` },
    { key: "minutesPerTask", min: 1, max: 120, step: 1, format: (v) => `${v} min` },
    { key: "timesPerWeek", min: 1, max: 200, step: 1, format: (v) => `${v}×` },
    { key: "hourlyCost", min: t.rate.min, max: t.rate.max, step: t.rate.step, format: (v) => `${v} ${t.rate.unit}` },
    { key: "automationShare", min: 0.1, max: 0.9, step: 0.05, format: (v) => `${Math.round(v * 100)} %` },
  ];

  return (
    <div className="roi">
      <form className="roi__form" onSubmit={(e) => e.preventDefault()} aria-label={t.formAria}>
        {fields.map((fd) => {
          const id = `${uid}-${fd.key}`;
          const v = values[fd.key];
          const fill = ((v - fd.min) / (fd.max - fd.min)) * 100;
          const text = t.fields[fd.key];
          return (
            <div className="field" key={fd.key}>
              <div className="field__row">
                <label htmlFor={id}>{text.label}</label>
                <output className="field__value" htmlFor={id}>
                  {fd.format(v)}
                </output>
              </div>
              <input
                id={id}
                type="range"
                min={fd.min}
                max={fd.max}
                step={fd.step}
                value={v}
                aria-valuetext={fd.format(v)}
                aria-describedby={`${id}-hint`}
                style={{ "--fill": `${fill}%` } as CSSProperties}
                onChange={(e) => setValues((prev) => ({ ...prev, [fd.key]: Number(e.target.value) }))}
              />
              <span id={`${id}-hint`} className="field__hint">
                {text.hint}
              </span>
            </div>
          );
        })}
      </form>

      <div className="roi__result" aria-live="polite">
        <div className="roi__big">
          <span>{t.big}</span>
          <strong>{f.hours(r.automatableHours)}</strong>
        </div>
        <dl className="roi__rows">
          <div>
            <dt>{t.fte}</dt>
            <dd>{f.fte(r.fte)} FTE</dd>
          </div>
          <div>
            <dt>{t.value}</dt>
            <dd>
              {f.money(r.capacityValue)} {t.perYear}
            </dd>
          </div>
          <div>
            <dt>{t.manual}</dt>
            <dd>
              {f.hours(r.annualHours)} {t.perYear}
            </dd>
          </div>
        </dl>
        <p className="roi__disclaimer">{t.disclaimer}</p>
        <a className="btn btn--primary" href={ctaHref}>
          {t.cta} <ArrowRight />
        </a>
      </div>
    </div>
  );
}
