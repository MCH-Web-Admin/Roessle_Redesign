import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "sLädele",
  description:
    "Das sLädele im Rössle Seedorf: Edelbrände und Liköre aus der eigenen Brennerei, Hausgemachtes und Geschenkideen aus der Region.",
};

const sortiment = [
  {
    title: "Edelbrände & Liköre",
    text: "Obstbrände und feine Liköre aus unserer eigenen Brennerei – sortenrein gebrannt und hübsch abgefüllt.",
  },
  {
    title: "Hausgemachtes",
    text: "Maultaschen, Spätzle, eingemachte Schätze und mehr aus der Rössle-Küche – zum Mitnehmen für daheim.",
  },
  {
    title: "Geschenkkörbe",
    text: "Zusammengestellt nach Anlass und Budget: das passende Mitbringsel für Geburtstage, Jubiläen und liebe Menschen.",
  },
  {
    title: "Gutscheine",
    text: "Wenn es doch ein Essen sein soll: Rössle-Gutscheine gibt es in jeder Höhe – das Geschenk, das immer passt.",
  },
];

export default function SlaedelePage() {
  return (
    <>
      <PageHero
        eyebrow="sLädele"
        title={
          <>
            Gutes zum <em>Mitnehmen</em>
          </>
        }
        lead="Unser kleiner Laden im Gasthaus: Brände aus der eigenen Brennerei, Hausgemachtes aus der Küche und Geschenke mit Geschichte."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
        <Reveal>
          <ImageSlot
            name="slaedele-regal"
            alt="Regal mit Edelbränden und Likören im sLädele"
            variant="slaedele"
            label="Blick ins sLädele"
            className="aspect-[4/3] w-full shadow-[0_30px_60px_-30px_rgba(20,33,26,0.45)]"
          />
        </Reveal>
        <Reveal delay={120}>
          <SectionHead
            eyebrow="Stöbern & Schnuppern"
            title={
              <>
                Klein, fein und <em>voller guter Dinge</em>
              </>
            }
            lead="Das sLädele ist zu unseren Öffnungszeiten für Sie da – schauen Sie einfach im Gasthaus vorbei. Gerne stellen wir Ihnen auch telefonisch etwas zusammen und legen es zum Abholen bereit."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={site.phoneHref}>Vorbestellen · {site.phone}</Button>
            <Button href="/brennerei" variant="outline">
              Mehr zur Brennerei
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-kalk-deep/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionHead
              eyebrow="Sortiment"
              title={
                <>
                  Was im Regal <em>steht</em>
                </>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
            {sortiment.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="bg-kalk">
                <article className="flex h-full flex-col gap-3 p-10">
                  <h2 className="display text-2xl">{item.title}</h2>
                  <p className="max-w-md text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
