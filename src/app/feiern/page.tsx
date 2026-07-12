import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Feiern & Events",
  description:
    "Familienfeiern, Vereinsabende und Feste bis 120 Personen: renovierte Stuben, Event-Scheune und Menüvorschläge nach Wunsch im Rössle Seedorf.",
};

const anlaesse = [
  "Hochzeiten & Polterabende",
  "Taufen, Kommunion & Konfirmation",
  "Geburtstage & Jubiläen",
  "Vereins- & Firmenfeiern",
  "Trauerkaffee",
  "Weihnachtsfeiern",
];

const raeume = [
  {
    name: "Unsere Stuben",
    text: "Die renovierten Gasträume lassen sich flexibel stellen – vom Familientisch bis zur geschlossenen Gesellschaft mit bis zu 120 Personen.",
    slot: "stube-feier",
    variant: "feier" as const,
    label: "Festlich gedeckte Stube",
  },
  {
    name: "Die Event-Scheune",
    text: "Rustikales Gebälk, viel Platz und eine besondere Atmosphäre: Unsere Scheune ist die Location für Feste, die in Erinnerung bleiben.",
    slot: "scheune",
    variant: "scheune" as const,
    label: "Event-Scheune",
  },
];

export default function FeiernPage() {
  return (
    <>
      <PageHero
        eyebrow="Feiern & Events"
        title={
          <>
            Feste feiern, <em>wie sie fallen</em>
          </>
        }
        lead="Ob 20 oder 120 Gäste: Bei uns finden Sie den passenden Rahmen, ein Menü nach Ihren Wünschen – und Wirtsleute, die mitdenken."
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {raeume.map((raum, i) => (
            <Reveal key={raum.name} delay={i * 100}>
              <article>
                <div className="card-lift rounded-md">
                  <ImageSlot
                    name={raum.slot}
                    alt={raum.label}
                    variant={raum.variant}
                    label={raum.label}
                    className="aspect-[3/2] w-full border border-line"
                  />
                </div>
                <h2 className="display mt-6 text-3xl">{raum.name}</h2>
                <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                  {raum.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-kalk-deep/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2">
          <Reveal>
            <SectionHead
              eyebrow="Anlässe"
              title={
                <>
                  Wir richten <em>aus</em>
                </>
              }
              lead="Sagen Sie uns, was Sie feiern – wir kümmern uns um den Rest. Gerne machen wir Ihnen Menüvorschläge passend zu Anlass und Budget."
            />
            <ul className="mt-8 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
              {anlaesse.map((anlass) => (
                <li key={anlass} className="flex items-start gap-3 text-sm">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-2 shrink-0 bg-kupfer"
                  />
                  {anlass}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <SectionHead
              eyebrow="Extras"
              title={
                <>
                  Themenabende & <em>mehr</em>
                </>
              }
              lead="Bayrischer Abend, mexikanische Nacht oder Verkostung in der Brennerei: Auf Wunsch geben wir Ihrer Feier ein Motto – inklusive passender Küche."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={site.phoneHref}>
                Feier anfragen · {site.phone}
              </Button>
              <Button href={site.emailHref} variant="outline">
                E-Mail schreiben
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="border border-line bg-kalk p-10 sm:p-14">
            <SectionHead
              eyebrow="Gut zu wissen"
              title={
                <>
                  So planen wir <em>gemeinsam</em>
                </>
              }
            />
            <ol className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                ["1", "Anrufen oder schreiben", "Termin, Personenzahl und Anlass – mehr brauchen wir für den Anfang nicht."],
                ["2", "Menü abstimmen", "Wir schlagen Menüs oder Buffets vor, Sie entscheiden – auch vegetarische Wünsche sind kein Problem."],
                ["3", "Entspannt feiern", "Am Tag selbst kümmern wir uns um Küche, Service und Ablauf – Sie sich um Ihre Gäste."],
              ].map(([nr, titel, text]) => (
                <li key={nr} className="flex flex-col gap-2">
                  <span className="display text-4xl text-kupfer">{nr}</span>
                  <h3 className="font-semibold">{titel}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>
    </>
  );
}
