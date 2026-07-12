import Link from "next/link";
import { Button } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { RoessleMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SectionHead } from "@/components/Section";
import { aktionswochen, menu, mittagstisch } from "@/data/menu";
import { hours, hoursNote, site } from "@/data/site";

const signatureDishes = menu
  .flatMap((section) => section.dishes)
  .filter((dish) => dish.signature)
  .slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* Hero ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-tanne text-kalk">
        <RoessleMark className="pointer-events-none absolute -right-24 -bottom-32 size-[34rem] text-kalk/[0.05] sm:size-[44rem]" />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full text-stroh opacity-[0.05]"
        >
          <defs>
            <pattern id="hero-fw" width="96" height="96" patternUnits="userSpaceOnUse">
              <path d="M0 0H96M0 0V96M0 96 96 0" stroke="currentColor" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-fw)" />
        </svg>

        <div className="relative mx-auto flex min-h-[86svh] max-w-6xl flex-col justify-center gap-8 px-5 py-24">
          <p className="rise rise-1 eyebrow text-stroh">
            {site.claim} · seit {site.since}
          </p>
          <h1 className="rise rise-2 display max-w-4xl text-6xl sm:text-7xl lg:text-8xl">
            Ehrlich kochen.
            <br />
            <em className="text-kupfer-hell">Herzlich</em> wirten.
          </h1>
          <p className="rise rise-3 max-w-xl text-lg leading-relaxed text-kalk/75">
            Seit über 160 Jahren steht unser Fachwerkhaus mitten in{" "}
            {site.place}. Heute wie damals gibt es hier schwäbische Küche aus
            frischen, regionalen Zutaten – dazu Edelbrände aus der eigenen
            Brennerei und ein Lädele voller guter Dinge.
          </p>
          <div className="rise rise-4 flex flex-wrap items-center gap-4">
            <Button href="/speisekarte">Zur Speisekarte</Button>
            <Button href={site.phoneHref} variant="outline">
              Tisch reservieren · {site.phone}
            </Button>
          </div>
        </div>
        <div className="fachwerk-band relative text-stroh" aria-hidden="true" />
      </section>

      {/* Willkommen ----------------------------------------------------- */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-16">
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
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["160+", "Jahre Gastfreundschaft"],
              ["120", "Plätze in unseren Stuben"],
              ["2", "Tagesessen · Mo bis Fr"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col">
                <span className="display tnum text-4xl text-kupfer">{value}</span>
                <span className="mt-1 text-sm text-ink-soft">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/ueber-uns" variant="outline">
              Unsere Geschichte
            </Button>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ImageSlot
            name="hero-haus"
            alt="Das Fachwerkhaus des Landgasthofs Rössle in Seedorf"
            label="Foto · Unser Fachwerkhaus"
            className="aspect-[4/5] w-full border border-line"
          />
        </Reveal>
      </section>

      {/* Küche / Signature-Gerichte ------------------------------------- */}
      <section className="border-y border-line bg-kalk-deep/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionHead
              eyebrow="Aus unserer Küche"
              title={
                <>
                  Schwäbische Klassiker, <em>hausgemacht</em>
                </>
              }
              lead="Maultaschen, handgeschabte Spätzle, Wild aus heimischer Jagd – gekocht wird, was die Region hergibt. Dazu wechselnde Aktionswochen übers ganze Jahr."
            />
          </Reveal>
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {signatureDishes.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 90} className="bg-kalk">
                <article className="flex h-full flex-col gap-3 p-7">
                  <span className="tnum display text-2xl text-kupfer">
                    {dish.price.toFixed(2).replace(".", ",")} €
                  </span>
                  <h3 className="display text-2xl">{dish.name}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {dish.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Button href="/speisekarte">Die ganze Karte ansehen</Button>
          </Reveal>
        </div>
      </section>

      {/* Mittagstisch-Band ---------------------------------------------- */}
      <section className="bg-ochsenblut text-kalk">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.5fr_1fr]">
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
            <div className="flex flex-col items-start gap-4 border border-kalk/25 p-8">
              <span className="display tnum text-4xl">{mittagstisch.priceHint}</span>
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
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionHead
            eyebrow="Übers Jahr verteilt"
            title={
              <>
                Unsere <em>Aktionswochen</em>
              </>
            }
            lead="Von der Schlachtplatte bis zur Fischwoche – zu diesen Terminen ist das Rössle traditionell gut gebucht. Aktuelle Termine erfahren Sie bei uns im Haus und auf Instagram."
          />
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {aktionswochen.map((aktion, i) => (
            <Reveal key={aktion.title} delay={i * 80}>
              <article className="border-t-2 border-kupfer pt-5">
                <h3 className="display text-3xl">{aktion.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                  {aktion.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brennerei & sLädele --------------------------------------------- */}
      <section className="bg-tanne text-kalk">
        <div className="fachwerk-band text-stroh" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-5 py-24">
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
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <Link href="/brennerei" className="group block">
                <ImageSlot
                  name="brennerei"
                  alt="Kupferner Brennkessel der Rössle-Brennerei"
                  label="Foto · Unsere Brennerei"
                  tone="dark"
                  className="aspect-[3/2] w-full border border-line-dark"
                />
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="display text-3xl transition-colors group-hover:text-kupfer-hell">
                    Hauseigene Brennerei
                  </h3>
                  <span aria-hidden="true" className="text-kupfer-hell">→</span>
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-kalk/70">
                  Obst aus der Region, sorgsam vergoren und schonend gebrannt –
                  probieren Sie unsere Brände bei einer Verkostung.
                </p>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/slaedele" className="group block">
                <ImageSlot
                  name="slaedele"
                  alt="Regale mit Edelbränden und Hausgemachtem im sLädele"
                  label="Foto · Unser sLädele"
                  tone="dark"
                  className="aspect-[3/2] w-full border border-line-dark"
                />
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="display text-3xl transition-colors group-hover:text-kupfer-hell">
                    sLädele
                  </h3>
                  <span aria-hidden="true" className="text-kupfer-hell">→</span>
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-kalk/70">
                  Edelbrände, Liköre und Hausgemachtes – schöne Geschenke und
                  gute Vorräte, direkt vom Rössle.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Feiern & Partyservice ------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {[
            {
              href: "/feiern",
              title: "Feiern & Events",
              text: "Von der Taufe bis zur Vereinsfeier: unsere Stuben und die Event-Scheune bieten Platz für bis zu 120 Gäste – mit Menüvorschlägen nach Ihren Wünschen.",
              cta: "Jetzt planen",
            },
            {
              href: "/partyservice",
              title: "Partyservice & Lieferung",
              text: "Wir liefern täglich an Kitas, Schulen und Heime – und bringen auch Ihr Fest-Buffet oder das Essen auf Rädern zuverlässig ins Haus.",
              cta: "Mehr erfahren",
            },
          ].map((card, i) => (
            <Reveal key={card.href} delay={i * 100} className="bg-kalk">
              <Link
                href={card.href}
                className="group flex h-full flex-col gap-4 p-10"
              >
                <h3 className="display text-3xl transition-colors group-hover:text-kupfer">
                  {card.title}
                </h3>
                <p className="max-w-md leading-relaxed text-ink-soft">
                  {card.text}
                </p>
                <span className="eyebrow mt-auto pt-4 text-kupfer">
                  {card.cta} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Öffnungszeiten & Kontakt ----------------------------------------- */}
      <section className="border-t border-line bg-kalk-deep/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2">
          <Reveal>
            <SectionHead
              eyebrow="Wann Sie uns finden"
              title={
                <>
                  Unsere <em>Öffnungszeiten</em>
                </>
              }
            />
            <dl className="mt-8 max-w-md divide-y divide-line border-y border-line">
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
