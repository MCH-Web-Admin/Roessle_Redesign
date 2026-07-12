import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="flex flex-col gap-8 leading-relaxed">
          <div>
            <h2 className="display text-2xl">Verantwortlicher</h2>
            <p className="mt-3">
              {site.name} {site.place}, Inhaber Andreas Schneider,{" "}
              {site.address.street}, {site.address.zip} {site.address.city},
              E-Mail: {site.email}, Telefon: {site.phone}.
            </p>
          </div>
          <div>
            <h2 className="display text-2xl">Hosting & Server-Logs</h2>
            <p className="mt-3 text-ink-soft">
              Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter
              technisch notwendige Daten (z.&nbsp;B. IP-Adresse, Zeitpunkt des
              Zugriffs, aufgerufene Seite) auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO, um die Website sicher bereitzustellen.
              [Hosting-Anbieter bitte ergänzen.]
            </p>
          </div>
          <div>
            <h2 className="display text-2xl">Keine Cookies, kein Tracking</h2>
            <p className="mt-3 text-ink-soft">
              Diese Website verwendet keine Cookies, keine Analyse-Tools und
              bindet keine externen Dienste ein. Kontaktieren Sie uns per
              Telefon oder E-Mail, verarbeiten wir Ihre Angaben ausschließlich
              zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
          </div>
          <div>
            <h2 className="display text-2xl">Externe Links</h2>
            <p className="mt-3 text-ink-soft">
              Links zu Google Maps, Instagram und Facebook öffnen die
              jeweiligen Angebote erst nach Ihrem Klick; ab dann gelten die
              Datenschutzbestimmungen der Anbieter.
            </p>
          </div>
          <div>
            <h2 className="display text-2xl">Ihre Rechte</h2>
            <p className="mt-3 text-ink-soft">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
              Widerspruch (Art. 15–21 DSGVO) und können sich bei einer
              Aufsichtsbehörde beschweren – in Baden-Württemberg beim LfDI
              Baden-Württemberg.
            </p>
          </div>
          <p className="border-t border-line pt-6 text-xs text-ink-soft">
            Hinweis: Platzhalter ergänzen und die Erklärung vor Livegang
            rechtlich prüfen lassen.
          </p>
        </div>
      </section>
    </>
  );
}
