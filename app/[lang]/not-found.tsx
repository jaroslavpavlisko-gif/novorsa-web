"use client";

import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/layout/Logo";
import { parsePublicPath, path } from "@/lib/i18n";

const texts = {
  sk: { heading: "Táto stránka sa stratila v procese.", text: "Adresa neexistuje alebo sa zmenila. Skúste to od začiatku.", button: "Späť na úvod" },
  cz: { heading: "Tahle stránka se ztratila v procesu.", text: "Adresa neexistuje nebo se změnila. Zkuste to od začátku.", button: "Zpět na úvod" },
  en: { heading: "This page got lost in the process.", text: "The address doesn’t exist or has changed. Try starting from the beginning.", button: "Back to home" },
};

export default function NotFound() {
  const { lang } = parsePublicPath(usePathname() ?? "/");
  const t = texts[lang];
  return (
    <div className="container notfound">
      <meta name="robots" content="noindex" />
      <div style={{ justifySelf: "center" }}>
        <LogoMark size={88} />
      </div>
      <h1>{t.heading}</h1>
      <p className="lead">{t.text}</p>
      <a className="btn btn--primary" href={path(lang, "home")}>
        {t.button}
      </a>
    </div>
  );
}
