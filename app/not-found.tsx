import type { Metadata } from "next";
import { LogoMark } from "@/components/layout/Logo";

export const metadata: Metadata = {
  title: "Stránka sa nenašla",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="container notfound">
      <div style={{ justifySelf: "center" }}>
        <LogoMark size={88} />
      </div>
      <h1>Táto stránka sa stratila v procese.</h1>
      <p className="lead">Adresa neexistuje alebo sa zmenila. Skúste to od začiatku.</p>
      <a className="btn btn--primary" href="/">
        Späť na úvod
      </a>
    </div>
  );
}
