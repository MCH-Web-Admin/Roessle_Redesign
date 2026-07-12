import Link from "next/link";
import { Button } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { RoessleMark } from "@/components/Logo";
import { Marquee } from "@/components/Marquee";
import { OpenToday } from "@/components/OpenToday";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SectionHead } from "@/components/Section";
import { Skyline } from "@/components/Skyline";
import { aktionswochen, menu, mittagstisch } from "@/data/menu";
import { hours, hoursNote, site } from "@/data/site";

const signatureDishes = menu
  .flatMap((section) => section.dishes)
  .filter((dish) => dish.signature)
  .slice(0, 4);

const stimmen = [
  "Schön eingerichtete Stuben, freundliches Personal – und das Essen richtig lecker.",
  "Das Mittagsmenü holen wir uns mehrmals die Woche. Immer heiß, immer gut, immer fair.",
  "Ehrliche schwäbische Küche, dazu ein Gläsle aus der eigenen Brennerei – man fühlt sich sofort daheim.",
];

export default function HomePage() {
  return (
    <>
      {/* Hero ---------------------------------------------------------- */}
      <section className="grain glow relative flex min-h-[100svh] flex-col overflow-hidden bg-tanne text-kalk">
        <RoessleMark className="pointer-events-none absolute -right-20 top-24 size-[26rem] rotate-6 text-kalk/[0.05] sm:size-[36rem]" />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full text-stroh opacity-[0.04]"
        >
          <defs>
            <pattern id="hero-fw" width="96" height="96" patternUnits="userSpaceOnUse">
              <path d="M0 0H96M0 0V96M0 96 96 0" stroke="currentColor" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-fw)" />
        </svg>

        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-7 px-5 pt-32 pb-10">
          <div className="rise rise-1 flex flex-wrap items-center gap-3">
            <Eyebrow tone="stroh">
              {site.claim} · seit {site.since}
            </Eyebrow>
          </div>
          <h1 className="rise rise-2 display max-w-4xl text-[3.4rem] leading-[0.95] sm:text-7xl lg:text-[6.5rem]">
            Ehrlich kochen.
            <br />
            <em className="text-kupfer-hell">Herzlich</em> wirten.
          </h1>
          <p className="rise rise-3 max-w-xl text-lg leading-relaxed text-kalk/75">
            Seit über 160 Jahren steht unser Fachwerkhaus mitten in{" "}
            {site.place} – mit schwäbischer Küche aus frischen, regionalen
            Zutaten, Edelbränden aus der eigenen Brennerei und einem Lädele
            voller guter Dinge.
          </p>
          <div className="rise rise-4 flex flex-wrap items-center gap-4">
            <Button href="/speisekarte" size="lg">
              Zur Speisekarte
            </Button>
            <Button href={site.phoneHref} variant="outline" size="lg">
              Reservieren
            </Button>
          </div>
          <div className="rise rise-5">
            <OpenToday />
          </div>
        </div>

        <div className="relative">
          <Skyline />
          <div className="fachwerk-band text-stroh" aria-hidden="true" />
        </div>
      </section>

      {/* Laufband ------------------------------------------------------- */}
      <Marquee />

      {/* Willkommen ----------------------------------------------------- */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHead
            eyebrow="Willkommen im Rössle"
            title={
              <>
                Ein Haus mit <em>Geschichte</em>, eine Küche mit Charakter
              </>
            }
            lead={`Seit ${site.since} bewirtet unser Landgasthof Gäste aus Seedorf und der ganzen Region. In den liebevoll renovierten Stuben finden bis zu 120 Personen Platz – vom Mittagstisch unter der Woche bis zur großen Familienfeier.`}
          />
          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-line py-6">
            {[
              ["160+", "Jahre Gastfreundschaft"],
              ["120", "Plätze in den Stuben"],
              ["2", "Tagesessen Mo – Fr"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col">
                <span className="display tnum text-4xl text-kupfer sm:text-5xl">
                  {value}
                </span>
                <span className="mt-1.5 text-xs leading-snug text-ink-soft sm:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/ueber-uns" variant="dark">
              Unsere Geschichte
            </Button>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative">
          <ImageSlot
            name="hero-haus"
            alt="Das Fachwerkhaus des Landgasthofs Rössle in Seedorf"
            variant="haus"
            label="Unser Fachwerkhaus"
            className="aspect-[4/5] w-full shadow-[0_30px_60px_-30px_rgba(20,33,26,0.45)]"
          />
          <div className="absolute -top-5 -right-3 grid size-24 rotate-6 place-items-center rounded-full bg-ochsenblut text-center text-kalk shadow-lg sm:-right-6 sm:size-28">
            <span className="display text-sm leading-tight sm:text-base">
              seit
              <br />
              <span className="text-2xl sm:text-3xl">1862</span>
            </span>
          </div>
        </Reveal>
      </section>

      {/* Küche / Signature-Gerichte ------------------------------------- */}
      <section className="border-y border-line bg-kalk-deep/60">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Aus unserer Küche"
              title={
                <>
                  Schwäbische Klassiker, <em>hausgemacht</em>
                </>
              }
              lead="Vom Zwiebelrostbraten über Wildragout mit Spätzle bis zu Lenis’ Cheesburger – gekocht wird, was die Region hergibt. Alles auch zum Abholen."
            />
            <Button href="/speisekarte" variant="dark">
              Ganze Karte ansehen
            </Button>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {signatureDishes.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 90}>
                <article className="card-lift flex h-full flex-col gap-3 rounded-md border border-line bg-kalk p-7">
                  <span className="tnum display text-3xl text-kupfer">
                    {dish.price.toFixed(2).replace(".", ",")} €
                  </span>
                  <h3 className="display text-2xl leading-tight">{dish.name}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {dish.description}
                  </p>
                  {(dish.vegetarian || dish.vegan) && (
                    <span className="eyebrow mt-auto pt-2 text-[0.62rem] text-tanne-soft/80">
                      {dish.vegan ? "Vegan" : "Vegetarisch"}
                    </span>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mittagstisch-Band ---------------------------------------------- */}
      <section className="grain relative overflow-hidden bg-ochsenblut text-kalk">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:py-24 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <Eyebrow tone="stroh">{mittagstisch.title}</Eyebrow>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Mittags gut essen – <em>im Haus oder daheim</em>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-kalk/80">
              {mittagstisch.text}
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:justify-self-end">
            <div className="card-lift flex flex-col items-start gap-4 rounded-md border border-kalk/25 bg-kalk/5 p-8">
              <span className="display tnum text-4xl sm:text-5xl">
                {mittagstisch.priceHint}
              </span>
              <span className="text-sm text-kalk/70">
                Beide Tagesessen auch zum Abholen – einfach anrufen.
              </span>
              <Button href={site.phoneHref} variant="light">
                {site.phone}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Aktionswochen --------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
        <Reveal>
          <SectionHead
            eyebrow="Übers Jahr verteilt"
            title={
              <>
                Unsere <em>Aktionswochen</em>
              </>
            }
            lead="Von der Schlachtplatte bis zur Fischwoche – zu diesen Terminen ist das Rössle traditionell gut gebucht. Termine erfahren Sie im Haus und auf Instagram."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {aktionswochen.map((aktion, i) => (
            <Reveal key={aktion.title} delay={i * 80}>
              <article className="card-lift h-full rounded-md border border-line bg-kalk p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="display text-3xl">{aktion.title}</h3>
                  <span aria-hidden="true" className="text-2xl text-kupfer">
                    ✳
                  </span>
                </div>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                  {aktion.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brennerei & sLädele --------------------------------------------- */}
      <section className="grain relative overflow-hidden bg-tanne text-kalk">
        <div className="fachwerk-band text-stroh" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-28">
          <Reveal>
            <SectionHead
              tone="dark"
              eyebrow="Aus eigener Hand"
              title={
                <>
                  Brennerei & <em>sLädele</em>
                </>
              }
              lead="Was bei uns wächst, wird bei uns veredelt: In der hauseigenen Brennerei entstehen feine Edelbrände und Liköre – im sLädele gibt es sie zum Mitnehmen und Verschenken."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                href: "/brennerei",
                slot: "brennerei",
                variant: "brennerei" as const,
                title: "Hauseigene Brennerei",
                text: "Obst aus der Region, sorgsam vergoren und schonend gebrannt – probieren Sie unsere Brände bei einer Verkostung.",
              },
              {
                href: "/slaedele",
                slot: "slaedele",
                variant: "slaedele" as const,
                title: "sLädele",
                text: "Edelbrände, Liköre und Hausgemachtes – schöne Geschenke und gute Vorräte, direkt vom Rössle.",
              },
            ].map((card, i) => (
              <Reveal key={card.href} delay={i * 120}>
                <Link href={card.href} className="group block">
                  <div className="card-lift rounded-md">
                    <ImageSlot
                      name={card.slot}
                      alt={card.title}
                      variant={card.variant}
                      tone="dark"
                      className="aspect-[3/2] w-full border border-line-dark"
                    />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="display text-3xl transition-colors group-hover:text-kupfer-hell">
                      {card.title}
                    </h3>
                    <span aria-hidden="true" className="arrow-slide text-xl text-kupfer-hell">
                      →
                    </span>
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-kalk/70">
                    {card.text}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gäste-Stimmen ---------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
        <Reveal>
          <SectionHead
            eyebrow="Das sagen unsere Gäste"
            title={
              <>
                Kommen als Gast, <em>gehen als Freund</em>
              </>
            }
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stimmen.map((zitat, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="card-lift flex h-full flex-col gap-4 rounded-md border border-line bg-kalk p-8">
                <span aria-hidden="true" className="display text-5xl leading-none text-kupfer">
                  „
                </span>
                <blockquote className="display text-xl leading-snug text-ink">
                  {zitat}
                </blockquote>
                <figcaption className="eyebrow mt-auto pt-2 text-[0.62rem] text-ink-soft">
                  Gästestimme
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Feiern & Partyservice ------------------------------------------- */}
      <section className="border-t border-line bg-kalk-deep/60">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                href: "/feiern",
                slot: "stube-feier",
                variant: "feier" as const,
                title: "Feiern & Events",
                text: "Von der Taufe bis zur Vereinsfeier: unsere Stuben und die Event-Scheune bieten Platz für bis zu 120 Gäste – mit Menüvorschlägen nach Ihren Wünschen.",
                cta: "Jetzt planen",
              },
              {
                href: "/partyservice",
                slot: "partyservice",
                variant: "stube" as const,
                title: "Partyservice & Lieferung",
                text: "Wir liefern täglich an Kitas, Schulen und Heime – und bringen auch Ihr Fest-Buffet oder das Essen auf Rädern zuverlässig ins Haus.",
                cta: "Mehr erfahren",
              },
            ].map((card, i) => (
              <Reveal key={card.href} delay={i * 100}>
                <Link
                  href={card.href}
                  className="group card-lift flex h-full flex-col overflow-hidden rounded-md border border-line bg-kalk"
                >
                  <ImageSlot
                    name={card.slot}
                    alt={card.title}
                    variant={card.variant}
                    className="aspect-[5/2] w-full rounded-none border-b border-line"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-8">
                    <h3 className="display text-3xl transition-colors group-hover:text-kupfer">
                      {card.title}
                    </h3>
                    <p className="max-w-md leading-relaxed text-ink-soft">
                      {card.text}
                    </p>
                    <span className="eyebrow mt-auto pt-4 text-kupfer">
                      {card.cta} <span className="arrow-slide">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Öffnungszeiten & Kontakt ----------------------------------------- */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <SectionHead
              eyebrow="Wann Sie uns finden"
              title={
                <>
                  Unsere <em>Öffnungszeiten</em>
                </>
              }
            />
            <div className="mt-6">
              <OpenToday tone="light" />
            </div>
            <dl className="mt-6 max-w-md divide-y divide-line border-y border-line">
              {hours.map((row) => (
                <div key={row.day} className="flex justify-between gap-6 py-3">
                  <dt className="font-semibold">{row.day}</dt>
                  <dd className="tnum text-right text-ink-soft">{row.times}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
              {hoursNote}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <SectionHead
              eyebrow="Mitten in Seedorf"
              title={
                <>
                  Kommen Sie <em>vorbei</em>
                </>
              }
              lead={`${site.address.street}, ${site.address.zip} ${site.address.city} – direkt an der Ortsdurchfahrt, mit Parkplätzen am Haus.`}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={site.phoneHref}>Anrufen · {site.phone}</Button>
              <Button href="/kontakt" variant="outline">
                Kontakt & Anfahrt
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
