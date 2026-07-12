import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="prose-sm flex flex-col gap-8 leading-relaxed">
          <div>
            <h2 className="display text-2xl">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3">
              {site.name} {site.place}
              <br />
              Inhaber: Andreas Schneider
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </div>
          <div>
            <h2 className="display text-2xl">Kontakt</h2>
            <p className="mt-3">
              Telefon: {site.phone}
              <br />
              E-Mail: {site.email}
            </p>
          </div>
          <div>
            <h2 className="display text-2xl">Umsatzsteuer</h2>
            <p className="mt-3 text-ink-soft">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:
              [USt-IdNr. bitte ergänzen]
            </p>
          </div>
          <div>
            <h2 className="display text-2xl">Streitschlichtung</h2>
            <p className="mt-3 text-ink-soft">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
          <p className="border-t border-line pt-6 text-xs text-ink-soft">
            Hinweis: Platzhalter in eckigen Klammern vor Livegang ergänzen und
            das Impressum rechtlich prüfen lassen.
          </p>
        </div>
      </section>
    </>
  );
}
