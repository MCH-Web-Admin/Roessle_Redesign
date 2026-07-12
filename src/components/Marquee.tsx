import { specialties } from "@/data/site";

/** Laufband mit Spezialitäten – ruhig, endlos, rein CSS. */
export function Marquee() {
  const row = specialties.map((item, i) => (
    <span key={i} className="flex items-center gap-6 pr-6">
      <span className="display text-2xl whitespace-nowrap sm:text-3xl">
        {item}
      </span>
      <svg
        viewBox="0 0 16 16"
        className="size-4 shrink-0 text-gruen"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Gabel */}
        <path d="M5.2 1.2v4.1a1.6 1.6 0 0 0 1 1.5v6.9a.9.9 0 0 0 1.8 0V6.8a1.6 1.6 0 0 0 1-1.5V1.2h-1.1v3.6h-.8V1.2H6.3v3.6h-.8V1.2H5.2z" transform="translate(1.4 .4) scale(1.05)" />
      </svg>
    </span>
  ));

  return (
    <div className="overflow-hidden border-b border-line bg-kalk py-5 text-ink">
      <div className="marquee-track flex">
        <div className="flex" aria-hidden="false">
          {row}
        </div>
        <div className="flex" aria-hidden="true">
          {row}
        </div>
      </div>
    </div>
  );
}
