import type React from "react";

type IconProps = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ArrowRight = ({ size = 18 }: IconProps) => (
  <svg {...base(size)} className="arrow">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Plus = ({ size = 16 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Menu = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Shield = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
  </svg>
);

export const Key = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 9-9M17 6l3 3" />
  </svg>
);

export const User = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
  </svg>
);

export const Globe = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
  </svg>
);

const line = (size: number, children: React.ReactNode) => <svg {...base(size)}>{children}</svg>;

export const IconTarget = ({ size = 22 }: IconProps) =>
  line(size, <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>);
export const IconClock = ({ size = 22 }: IconProps) =>
  line(size, <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
export const IconDatabase = ({ size = 22 }: IconProps) =>
  line(size, <><ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" /><path d="M4.5 5.5v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-6" /><path d="M4.5 11.5v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-6" /></>);
export const IconEye = ({ size = 22 }: IconProps) =>
  line(size, <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>);
export const IconTrend = ({ size = 22 }: IconProps) =>
  line(size, <><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></>);

/** Ikony pre body sekcie „Čo sa zmení“ v poradí podľa content/site.ts. */
export const outcomeIcons = [IconTarget, IconClock, IconDatabase, IconEye, IconTrend];
