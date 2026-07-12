import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { hours, hoursNote, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "So erreichen Sie den Landgasthof Rössle in Seedorf: Öffnungszeiten, Telefon, E-Mail und Anfahrt – Freudenstädter Straße 20, 78655 Dunningen-Seedorf.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt & Anfahrt"
        title={
          <>
            Wir freuen uns <em>auf Sie</em>
          </>
        }
        lead="Reservierung, Feier, Partyservice oder einfach ein Tisch zum Mittagessen – rufen Sie an oder schauen Sie vorbei."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2">
        <Reveal>
          <SectionHead
            eyebrow="Kontakt"
            title={
              <>
                Ein Anruf <em>genügt</em>
              </>
            }
          />
          <div className="mt-8 flex flex-col gap-6">
            <div>
              <p className="eyebrow text-ink-soft">Telefon</p>
              <a
                href={site.phoneHref}
                className="display mt-1 inline-block text-4xl hover:text-kupfer"
              >
                {site.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow text-ink-soft">E-Mail</p>
              <a
                href={site.emailHref}
                className="mt-1 inline-block text-lg font-semibold underline underline-offset-4 hover:text-kupfer"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-ink-soft">Adresse</p>
              <address className="mt-1 text-lg not-italic">
                {site.name} {site.place}
                <br />
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </address>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href={site.mapsUrl} external>
                Route in Google Maps
              </Button>
            </div>
            <div className="flex gap-5 pt-2 text-sm font-semibold">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kupfer underline-offset-4 hover:underline"
              >
                Instagram
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kupfer underline-offset-4 hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHead
            eyebrow="Öffnungszeiten"
            title={
              <>
                Wann wir <em>da sind</em>
              </>
            }
          />
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {hours.map((row) => (
              <div key={row.day} className="flex justify-between gap-6 py-3">
                <dt className="font-semibold">{row.day}</dt>
                <dd className="tnum text-right text-ink-soft">{row.times}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            {hoursNote}
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line bg-kalk-deep/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionHead
              eyebrow="Anfahrt"
              title={
                <>
                  Gut zu <em>finden</em>
                </>
              }
              lead="Das Rössle liegt direkt an der Freudenstädter Straße, der Ortsdurchfahrt von Seedorf – zwischen Rottweil und dem Schwarzwald. Parkplätze finden Sie direkt am Haus."
            />
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-line bg-tanne"
              aria-label="Karte in Google Maps öffnen"
            >
              <div className="relative flex aspect-[21/9] items-center justify-center overflow-hidden text-kalk/50">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full text-stroh opacity-10"
                >
                  <defs>
                    <pattern
                      id="map-fw"
                      width="72"
                      height="72"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M0 0H72M0 0V72M0 72 72 0"
                        stroke="currentColor"
                        fill="none"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-fw)" />
                </svg>
                <div className="relative flex flex-col items-center gap-2 p-6 text-center">
                  <span className="display text-3xl text-kalk group-hover:text-stroh">
                    Karte öffnen ↗
                  </span>
                  <span className="text-sm">
                    {site.address.street}, {site.address.zip} {site.address.city}
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
