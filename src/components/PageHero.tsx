import type { ReactNode } from "react";
import { RoessleMark } from "./Logo";
import { Eyebrow } from "./Section";

/** Atmosphärischer Seitenkopf für Unterseiten. */
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
    <section className="grain glow relative overflow-hidden bg-tanne text-kalk">
      <RoessleMark className="pointer-events-none absolute -right-16 -bottom-24 size-[24rem] rotate-6 text-kalk/[0.045] sm:size-[30rem]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-5 pt-36 pb-16 sm:pt-44 sm:pb-20">
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
      <div className="fachwerk-band relative text-stroh" aria-hidden="true" />
    </section>
  );
}
