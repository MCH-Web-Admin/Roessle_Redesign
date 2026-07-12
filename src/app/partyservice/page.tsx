import type { Metadata } from "next";
import { Marker } from "@/components/Marker";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Partyservice & Lieferung",
  description:
    "Partyservice, Essen auf Rädern und tägliche Lieferung an Kitas, Schulen und Heime – zuverlässig aus der Rössle-Küche in Seedorf.",
};

const leistungen = [
  {
    title: "Partyservice",
    text: "Buffets, Menüs und Fingerfood für Ihre Feier – geliefert, aufgebaut und auf Wunsch mit Geschirr und Service. Von 10 bis weit über 100 Portionen.",
  },
  {
    title: "Essen auf Rädern",
    text: "Warmes Mittagessen, gebracht bis an die Haustür – täglich, zuverlässig und in Dunningen und Umgebung. Ideal für alle, die nicht mehr selbst kochen möchten.",
  },
  {
    title: "Kitas, Schulen & Heime",
    text: "Wir beliefern täglich Kindergärten, Schulen und Pflegeeinrichtungen der Region – kindgerecht bzw. seniorengerecht gekocht, pünktlich geliefert.",
  },
  {
    title: "Tagesessen zum Abholen",
    text: "Montag bis Freitag stehen zwei wechselnde Tagesessen auf der Karte – vorbestellen, abholen, daheim genießen.",
  },
];

export default function PartyservicePage() {
  return (
    <>
      <PageHero
        eyebrow="Partyservice & Lieferung"
        title={
          <>
            Rössle-Küche, wo Sie sie <Marker tone="hell">brauchen</Marker>
          </>
        }
        lead="Ob Fest-Buffet, warmes Mittagessen daheim oder die tägliche Verpflegung von Kita und Heim – unsere Küche kommt zu Ihnen."
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {leistungen.map((leistung, i) => (
            <Reveal key={leistung.title} delay={i * 80} className="bg-kalk">
              <article className="flex h-full flex-col gap-4 p-10">
                <h2 className="display text-3xl">{leistung.title}</h2>
                <p className="max-w-md leading-relaxed text-ink-soft">
                  {leistung.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ochsenblut text-kalk">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <SectionHead
              tone="dark"
              eyebrow="So einfach geht's"
              title={
                <>
                  Anrufen, bestellen, genießen
                </>
              }
              lead="Sagen Sie uns, was Sie brauchen und für wie viele Personen – wir machen Ihnen ein passendes Angebot. Kurzfristige Tagesessen-Bestellungen nehmen wir gerne bis vormittags entgegen."
            />
          </Reveal>
          <Reveal delay={120} className="lg:justify-self-end">
            <div className="flex flex-col items-start gap-4 border border-kalk/25 p-8">
              <span className="eyebrow text-stroh">Bestellung & Anfrage</span>
              <a href={site.phoneHref} className="display text-4xl hover:text-stroh">
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="text-sm text-kalk/80 underline underline-offset-4 hover:text-stroh"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionHead
            eyebrow="Häufige Fragen"
            title={
              <>
                Kurz <Marker>beantwortet</Marker>
              </>
            }
          />
        </Reveal>
        <dl className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            [
              "Wie weit liefern Sie?",
              "Unser Liefergebiet umfasst Dunningen, Seedorf und die umliegenden Orte – fragen Sie im Zweifel einfach kurz nach.",
            ],
            [
              "Gibt es vegetarische Optionen?",
              "Selbstverständlich. Bei Buffets und Tagesessen planen wir vegetarische Gerichte auf Wunsch fest mit ein.",
            ],
            [
              "Wie kurzfristig kann ich bestellen?",
              "Tagesessen meist noch am selben Vormittag, Buffets je nach Umfang einige Tage im Voraus – rufen Sie uns an.",
            ],
            [
              "Bekomme ich Geschirr dazu?",
              "Auf Wunsch liefern wir mit Geschirr, Warmhaltebehältern und allem, was das Buffet braucht.",
            ],
          ].map(([frage, antwort]) => (
            <Reveal key={frage}>
              <div className="border-t-2 border-kupfer pt-4">
                <dt className="font-semibold">{frage}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {antwort}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>
    </>
  );
}
