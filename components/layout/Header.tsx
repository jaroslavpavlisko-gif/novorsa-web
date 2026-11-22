"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { langLabel, langName, locales, parsePublicPath, path, type Lang } from "@/lib/i18n";
import { Logo } from "./Logo";
import { ArrowRight, Close, Menu } from "../ui/Icons";

type HeaderProps = {
  lang: Lang;
  nav: { label: string; href: string }[];
  ctaHref: string;
  homeHref: string;
  ui: { logoAria: string; navAria: string; mobileNavAria: string; menuOpen: string; menuClose: string; headerCta: string; langSwitchAria: string };
};

/** Prepínač jazykov: vedie na tú istú stránku v inom jazyku. */
function LangSwitch({ lang, pathname, label, className }: { lang: Lang; pathname: string; label: string; className: string }) {
  const { key } = parsePublicPath(pathname);
  return (
    <ul className={className} aria-label={label}>
      {locales.map((l) => (
        <li key={l}>
          <a
            href={path(l, key ?? "home")}
            hrefLang={l === "cz" ? "cs" : l}
            lang={l === "cz" ? "cs" : l}
            title={langName[l]}
            aria-current={l === lang ? "true" : undefined}
          >
            {langLabel[l]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Header({ lang, nav, ctaHref, homeHref, ui }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) => href !== homeHref && (pathname === href || pathname.startsWith(`${href}/`));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header" data-scrolled={scrolled || open}>
      <div className="container header__inner">
        <Logo onDark href={homeHref} label={ui.logoAria} />
        <nav className="nav" aria-label={ui.navAria}>
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="nav__link" href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LangSwitch lang={lang} pathname={pathname} label={ui.langSwitchAria} className="lang-switch" />
        <a className="btn btn--primary btn--sm header__cta" href={ctaHref}>
          {ui.headerCta} <ArrowRight size={16} />
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? ui.menuClose : ui.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label={ui.mobileNavAria}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LangSwitch lang={lang} pathname={pathname} label={ui.langSwitchAria} className="lang-switch lang-switch--mobile" />
          <a className="btn btn--primary" href={ctaHref} onClick={() => setOpen(false)}>
            {ui.headerCta} <ArrowRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
