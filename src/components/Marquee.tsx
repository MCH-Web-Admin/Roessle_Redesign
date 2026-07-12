import { specialties } from "@/data/site";

/** Laufband mit Spezialitäten – ruhig, endlos, rein CSS. */
export function Marquee() {
  const row = specialties.map((item, i) => (
    <span key={i} className="flex items-center gap-6 pr-6">
      <span className="display text-2xl whitespace-nowrap sm:text-3xl">
        {item}
      </span>
      <span aria-hidden="true" className="text-kupfer">
        ✳
      </span>
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
