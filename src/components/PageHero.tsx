import type { ReactNode } from "react";
import { Eyebrow } from "./Section";

/** Kompakter Seitenkopf für Unterseiten – dunkler Tanne-Grund mit Fachwerk-Band. */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <section className="bg-tanne text-kalk">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 pt-20 pb-16">
        <div className="rise rise-1">
          <Eyebrow tone="stroh">{eyebrow}</Eyebrow>
        </div>
        <h1 className="rise rise-2 display max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lead && (
          <p className="rise rise-3 max-w-2xl text-lg leading-relaxed text-kalk/75">
            {lead}
          </p>
        )}
      </div>
      <div className="fachwerk-band text-stroh" aria-hidden="true" />
    </section>
  );
}
