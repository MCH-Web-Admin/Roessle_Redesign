import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { menu, mittagstisch } from "@/data/menu";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Speisekarte",
  description:
    "Schwäbische Klassiker, Wild aus der Region, Vegetarisches und hausgemachte Desserts – die Speisekarte des Landgasthofs Rössle in Seedorf.",
};

function Price({ value }: { value: number }) {
  return (
    <span className="tnum display shrink-0 text-xl text-kupfer">
      {value.toFixed(2).replace(".", ",")} €
    </span>
  );
}

export default function SpeisekartePage() {
  return (
    <>
      <PageHero
        eyebrow="Speisekarte"
        title={
          <>
            Was auf den <em>Tisch</em> kommt
          </>
        }
        lead="Hausgemacht, regional und ehrlich – von schwäbischen Klassikern bis zum süßen Abschluss. Dazu Montag bis Freitag unser wechselnder Mittagstisch."
      />

      {/* Mittagstisch-Hinweis -------------------------------------------- */}
      <section className="border-b border-line bg-kalk-deep/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="display text-2xl">{mittagstisch.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {mittagstisch.text}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <span className="display tnum text-2xl text-kupfer">
              {mittagstisch.priceHint}
            </span>
            <a
              href={site.phoneHref}
              className="text-sm font-semibold text-ink underline underline-offset-4 hover:text-kupfer"
            >
              Wochenkarte erfragen · {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Karte ------------------------------------------------------------ */}
      <div className="mx-auto max-w-4xl px-5 py-20">
        {/* Sprungnavigation */}
        <nav aria-label="Kategorien" className="mb-16">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {menu.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="eyebrow text-ink-soft transition-colors hover:text-kupfer"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-20">
          {menu.map((section) => (
            <Reveal key={section.id}>
              <section id={section.id} className="scroll-mt-28">
                <div className="flex items-baseline gap-6">
                  <h2 className="display text-4xl">{section.title}</h2>
                  <div className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                {section.intro && (
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                    {section.intro}
                  </p>
                )}
                <ul className="mt-8 flex flex-col gap-7">
                  {section.dishes.map((dish) => (
                    <li key={dish.name} className="flex items-baseline gap-4">
                      <div className="max-w-xl">
                        <h3 className="text-lg leading-snug font-semibold">
                          {dish.name}
                          {dish.vegetarian && (
                            <span
                              className="ml-2 align-middle text-xs font-semibold tracking-wide text-tanne-soft/70 uppercase"
                              title="Vegetarisch"
                            >
                              Veg
                            </span>
                          )}
                        </h3>
                        {dish.description && (
                          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                            {dish.description}
                          </p>
                        )}
                      </div>
                      <div
                        className="mb-1.5 min-w-8 flex-1 border-b border-dotted border-ink/25"
                        aria-hidden="true"
                      />
                      <Price value={dish.price} />
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-line pt-8 text-sm leading-relaxed text-ink-soft">
          <p>
            Alle Gerichte gibt es auch zum Mitnehmen – bestellen Sie einfach
            telefonisch vor. Angaben zu Allergenen und Zusatzstoffen nennen wir
            Ihnen gerne persönlich. Küchenzeiten können von den
            Öffnungszeiten abweichen.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={site.phoneHref}>Vorbestellen · {site.phone}</Button>
            <Button href="/kontakt" variant="outline">
              Öffnungszeiten ansehen
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
