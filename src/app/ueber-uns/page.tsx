import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Seit 1862 bewirtet das Rössle Gäste in Seedorf: die Geschichte unseres Fachwerkhauses, unsere Familie und das, wofür unsere Küche steht.",
};

const werte = [
  {
    title: "Regional & saisonal",
    text: "Fleisch, Obst und Gemüse kommen so weit wie möglich aus der Region – gekocht wird, was die Jahreszeit hergibt.",
  },
  {
    title: "Alles hausgemacht",
    text: "Spätzle, Maultaschen, Saucen und Desserts entstehen bei uns in der Küche – nicht im Großhandel.",
  },
  {
    title: "Herzlich & familiär",
    text: "Wirtsleute, die selbst am Herd und am Tisch stehen: Bei uns sind Sie Gast im Haus, nicht Nummer auf dem Bon.",
  },
];

const stationen = [
  {
    jahr: "1862",
    text: "Das Fachwerkhaus an der Freudenstädter Straße öffnet erstmals als Gasthaus seine Türen.",
  },
  {
    jahr: "im 20. Jh.",
    text: "Das Rössle wächst mit Seedorf: Aus der Dorfwirtschaft wird ein Landgasthof mit Küche für die ganze Region.",
  },
  {
    jahr: "heute",
    text: `${site.owner} führt das Haus mit renovierten Stuben für bis zu 120 Gäste, eigener Brennerei, sLädele und täglichem Lieferservice.`,
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title={
          <>
            Seit {site.since} <em>im Dorf daheim</em>
          </>
        }
        lead="Über 160 Jahre Wirtshausgeschichte stecken in unseren Balken – und jede Generation hat das Rössle ein Stück weitergebaut."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
        <Reveal>
          <SectionHead
            eyebrow="Unser Haus"
            title={
              <>
                Ein Fachwerkhaus voller <em>Leben</em>
              </>
            }
            lead="Was 1862 als Dorfwirtschaft begann, ist heute Landgasthof, Brennerei und Treffpunkt in einem. Die liebevoll renovierten Stuben verbinden alte Balken mit heutigem Komfort – und bieten Platz für bis zu 120 Gäste."
          />
          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
            Ob Stammtisch, Familienessen oder Vereinsfeier: Im Rössle sitzt
            man zusammen, isst gut und bleibt gern noch auf ein Gläsle aus der
            eigenen Brennerei.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ImageSlot
            name="stube"
            alt="Blick in die renovierte Gaststube des Rössle"
            variant="stube"
            label="Unsere Stube"
            className="aspect-[4/3] w-full shadow-[0_30px_60px_-30px_rgba(20,33,26,0.45)]"
          />
        </Reveal>
      </section>

      {/* Zeitleiste -------------------------------------------------------- */}
      <section className="border-y border-line bg-kalk-deep/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionHead
              eyebrow="Chronik"
              title={
                <>
                  Drei Kapitel <em>Rössle</em>
                </>
              }
            />
          </Reveal>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {stationen.map((station, i) => (
              <Reveal key={station.jahr} delay={i * 100}>
                <li className="border-t-2 border-kupfer pt-5">
                  <span className="display text-4xl text-kupfer">
                    {station.jahr}
                  </span>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {station.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Werte -------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionHead
            eyebrow="Wofür wir stehen"
            title={
              <>
                Gut gekocht ist <em>halb gewonnen</em>
              </>
            }
          />
        </Reveal>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {werte.map((wert, i) => (
            <Reveal key={wert.title} delay={i * 90} className="bg-kalk">
              <article className="flex h-full flex-col gap-3 p-8">
                <h3 className="display text-2xl">{wert.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {wert.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <div className="flex flex-wrap gap-4">
            <Button href="/speisekarte">Zur Speisekarte</Button>
            <Button href="/kontakt" variant="outline">
              Besuchen Sie uns
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
