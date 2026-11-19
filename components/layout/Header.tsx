"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { Logo } from "./Logo";
import { ArrowRight, Close, Menu } from "../ui/Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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
        <Logo onDark />
        <nav className="nav" aria-label="Hlavná navigácia">
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
        <a className="btn btn--primary btn--sm header__cta" href="/kontakt">
          Konzultácia zadarmo <ArrowRight size={16} />
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobilná navigácia">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary" href="/kontakt" onClick={() => setOpen(false)}>
            Konzultácia zadarmo <ArrowRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
