export type RoiInput = {
  people: number;
  minutesPerTask: number;
  timesPerWeek: number;
  hourlyCost: number;
  automationShare: number; // 0–1
};

export const WEEKS_PER_YEAR = 48;
export const FTE_HOURS_PER_YEAR = 1920; // 40 h × 48 týždňov

export function calculateRoi(i: RoiInput) {
  const weeklyHours = (i.people * i.minutesPerTask * i.timesPerWeek) / 60;
  const annualHours = weeklyHours * WEEKS_PER_YEAR;
  const automatableHours = annualHours * i.automationShare;
  const fte = automatableHours / FTE_HOURS_PER_YEAR;
  const capacityValue = automatableHours * i.hourlyCost;
  return { weeklyHours, annualHours, automatableHours, fte, capacityValue };
}

/** Formátovanie čísel podľa jazyka (sk-SK, cs-CZ, en-GB) a meny (EUR, CZK). */
export function formatters(locale: string, currency: string) {
  const nf = (digits: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: digits, minimumFractionDigits: digits });
  const round = currency === "CZK" ? 100 : 10;
  return {
    hours: (h: number) => `${nf(0).format(Math.round(h))} h`,
    fte: (f: number) => nf(1).format(f),
    rate: (v: number) => new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(v),
    money: (v: number) =>
      new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(Math.round(v / round) * round),
  };
}
