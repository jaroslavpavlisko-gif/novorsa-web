"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Solution } from "@/content";
import { Check } from "../ui/Icons";

export function SolutionTabs({ items, label }: { items: Solution[]; label: string }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);

  // Odkaz typu /riesenia#hr otvorí rovno správnu záložku.
  useEffect(() => {
    const fromHash = () => {
      const i = items.findIndex((it) => it.id === window.location.hash.slice(1));
      if (i >= 0) {
        setActive(i);
        rootRef.current?.scrollIntoView({ block: "start" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [items]);

  const focusTab = (i: number) => {
    const next = (i + items.length) % items.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab(i + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(i - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(items.length - 1);
    }
  };

  const current = items[active];

  return (
    <div ref={rootRef} className="tabs">
      <div role="tablist" aria-label={label} className="tabs__list">
        {items.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`tab-${item.id}`}
            className="tab"
            aria-selected={i === active}
            aria-controls={`panel-${item.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        key={current.id}
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="tab-panel"
        tabIndex={0}
      >
        <div>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
        <ul className="checklist">
          {current.examples.map((ex) => (
            <li key={ex}>
              <Check />
              {ex}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
