import type { JSX } from "react";

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

/* ===== Ikony pre karty (oddelenia, problémy, prednosti) ===== */
const make = (paths: string[], circles: [number, number, number][] = []) =>
  function Icon({ size = 22 }: IconProps) {
    return (
      <svg {...base(size)}>
        {circles.map(([cx, cy, r]) => (
          <circle key={`${cx}-${cy}-${r}`} cx={cx} cy={cy} r={r} />
        ))}
        {paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    );
  };

export const IconCopy = make(["M10 8h9a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z", "M5 16V5a1 1 0 0 1 1-1h10"]);
export const IconApprove = make(["m8.5 12 2.5 2.5 5-5"], [[12, 12, 9]]);
export const IconChart = make(["M4 20h16", "M7 16v-4", "M12 16V8", "M17 16V5"]);
export const IconClock = make(["M12 7v5l3 2"], [[12, 12, 9]]);
export const IconLayers = make(["M12 3 3 8l9 5 9-5-9-5Z", "m3 13 9 5 9-5"]);
export const IconUsers = make(
  ["M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5", "M16 4.6a3.5 3.5 0 0 1 0 6.8", "M18.5 14.8c1.7.8 2.7 2.6 3 5.2"],
  [[9, 8, 3.5]]
);
export const IconTrend = make(["m3 17 6-6 4 4 8-8", "M15 7h6v6"]);
export const IconReceipt = make(["M6 3h12v18l-3-2-3 2-3-2-3 2V3Z", "M9 8h6", "M9 12h6", "M9 16h3"]);
export const IconBox = make(["M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z", "m3 7.5 9 4.5 9-4.5", "M12 12v9"]);
export const IconChat = make(["M4 5h16v11H9l-5 4V5Z", "M8 9h8", "M8 12h5"]);
export const IconGauge = make(["M4 18a8 8 0 1 1 16 0", "m12 18 4-5"]);
export const IconTarget = make([], [[12, 12, 9], [12, 12, 5], [12, 12, 1]]);
export const IconFile = make(["M7 3h7l5 5v13H7V3Z", "M14 3v5h5", "M10 13h6", "M10 17h6"]);
export const IconShuffle = make(["M16 3h5v5", "M4 20 21 3", "M21 16v5h-5", "m15 15 6 6", "m4 4 5 5"]);
export const IconRefresh = make(["M21 12a9 9 0 1 1-3-6.7L21 8", "M21 3v5h-5"]);
export const IconShieldCheck = make(["M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z", "m9 12 2 2 4-4"]);

export const solutionIcons: Record<string, (p: IconProps) => JSX.Element> = {
  obchod: IconTrend,
  hr: IconUsers,
  financie: IconReceipt,
  prevadzka: IconBox,
  servis: IconChat,
  vedenie: IconGauge,
};
export const painIcons = [IconCopy, IconApprove, IconChart, IconClock, IconLayers, IconUsers];
export const whyIcons = [IconTarget, IconChart, IconShieldCheck, IconFile, IconShuffle, IconRefresh];
