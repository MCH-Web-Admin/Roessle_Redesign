import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { Marker } from "@/components/Marker";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Brennerei",
  description:
    "Die hauseigene Brennerei des Rössle Seedorf: Edelbrände und Liköre aus regionalem Obst – mit Verkostungen und rustikalem Vesper.",
};

const schritte = [
  {
    title: "Obst aus der Region",
    text: "Äpfel, Birnen, Zwetschgen und Kirschen – sorgfältig ausgewählt, vieles davon von heimischen Streuobstwiesen.",
  },
  {
    title: "Sortenreine Vergärung",
    text: "Jede Frucht gärt für sich: langsam, sauber und schonend – die Grundlage für ein klares Aroma im Glas.",
  },
  {
    title: "Schonend gebrannt",
    text: "Im Kupferkessel destillieren wir mit Zeit und Erfahrung – so bleiben Frucht und Charakter erhalten.",
  },
];

export default function BrennereiPage() {
  return (
    <>
      <PageHero
        eyebrow="Hauseigene Brennerei"
        title={
          <>
            Vom Baum ins <Marker tone="hell">Glas</Marker>
          </>
        }
        lead="In unserer Brennerei veredeln wir das Obst der Region zu feinen Edelbränden und Likören – ehrliches Handwerk, das man schmeckt."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
        <Reveal>
          <ImageSlot
            name="brennkessel"
            alt="Kupferner Brennkessel der Rössle-Brennerei"
            variant="brennerei"
            label="Unser Brennkessel"
            className="aspect-[4/3] w-full shadow-[0_30px_60px_-30px_rgba(20,33,26,0.45)]"
          />
        </Reveal>
        <Reveal delay={120}>
          <SectionHead
            eyebrow="Unser Handwerk"
            title={
              <>
                Brennen mit <Marker>Geduld</Marker>
              </>
            }
            lead="Ein guter Brand braucht reife Früchte, saubere Arbeit und Zeit. Genau so entstehen bei uns Obstbrände und Liköre, die den Geschmack ihrer Frucht behalten – nicht mehr, nicht weniger."
          />
          <ol className="mt-10 flex flex-col gap-6">
            {schritte.map((schritt, i) => (
              <li key={schritt.title} className="flex gap-5">
                <span className="display shrink-0 text-3xl text-kupfer">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{schritt.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {schritt.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="bg-tanne text-kalk">
        <div className="fachwerk-band text-stroh" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <SectionHead
              tone="dark"
              eyebrow="Verkostung"
              title={
                <>
                  Probieren geht über Studieren
                </>
              }
              lead="Erleben Sie unsere Brände bei einer Verkostung mit rustikalem Vesper – für Gruppen, Vereine oder als besonderes Geschenk. Termine nach Vereinbarung."
            />
          </Reveal>
          <Reveal delay={120} className="lg:justify-self-end">
            <div className="flex flex-col items-start gap-4 border border-kalk/25 p-8">
              <span className="eyebrow text-stroh">Verkostung anfragen</span>
              <a href={site.phoneHref} className="display text-4xl hover:text-stroh">
                {site.phone}
              </a>
              <Button href="/slaedele" variant="light">
                Brände im sLädele kaufen
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
