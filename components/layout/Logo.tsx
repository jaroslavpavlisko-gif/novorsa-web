type LogoMarkProps = { size?: number; onDark?: boolean; rings?: 0 | 1 | 2 };

/** Symbol Novorsa: tri prepojené body stúpajúce k cieľu, ktorý žiari. */
export function LogoMark({ size = 40, onDark = false, rings = 2 }: LogoMarkProps) {
  const line = onDark ? "#F7F6F2" : "#16181D";
  const fill = onDark ? "#16181D" : "#FFFFFF";
  const accent = onDark ? "#5CC2BB" : "#0F6E6E";
  return (
    <svg width={size} height={size * 0.8} viewBox="0 -8 120 96" aria-hidden="true">
      {rings === 2 && <circle cx="88" cy="22" r="28" fill="none" stroke={accent} strokeWidth="2" opacity="0.2" />}
      {rings >= 1 && <circle cx="88" cy="22" r="20" fill="none" stroke={accent} strokeWidth="3" opacity="0.34" />}
      <polyline points="14,72 50,46 88,22" fill="none" stroke={line} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="72" r="9" fill={fill} stroke={line} strokeWidth="6" />
      <circle cx="50" cy="46" r="9" fill={fill} stroke={line} strokeWidth="6" />
      <circle cx="88" cy="22" r="13" fill={accent} />
    </svg>
  );
}

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="/" className="logo" aria-label="Novorsa – úvodná stránka">
      <LogoMark size={44} onDark={onDark} rings={1} />
      <span className="logo__word">novorsa</span>
    </a>
  );
}
