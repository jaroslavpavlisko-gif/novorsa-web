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

const nf = (digits: number) =>
  new Intl.NumberFormat("sk-SK", { maximumFractionDigits: digits, minimumFractionDigits: digits });

export const formatHours = (h: number) => `${nf(0).format(Math.round(h))} h`;
export const formatFte = (f: number) => nf(1).format(f);
export const formatEur = (v: number) =>
  new Intl.NumberFormat("sk-SK", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(Math.round(v / 10) * 10);
