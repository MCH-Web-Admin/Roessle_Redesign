import { Button } from "@/components/Button";
import { RoessleMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="grain glow bg-tanne text-kalk">
      <div className="mx-auto flex min-h-[80svh] max-w-6xl flex-col items-start justify-center gap-6 px-5 pt-36 pb-24">
        <RoessleMark className="size-16 text-kupfer-hell" />
        <p className="eyebrow text-stroh">Fehler 404</p>
        <h1 className="display max-w-2xl text-5xl sm:text-6xl">
          Dieser Tisch ist <em>nicht gedeckt</em>
        </h1>
        <p className="max-w-md leading-relaxed text-kalk/75">
          Die gewünschte Seite gibt es nicht – aber in der Stube ist immer ein
          Platz frei.
        </p>
        <Button href="/">Zur Startseite</Button>
      </div>
      <div className="fachwerk-band text-stroh" aria-hidden="true" />
    </section>
  );
}
