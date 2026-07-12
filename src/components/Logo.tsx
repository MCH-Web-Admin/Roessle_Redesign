import { site } from "@/data/site";

/** Stilisierter Rössle-Kopf (Springer-Silhouette), Fläche in currentColor. */
export function RoessleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M28 88
           C29 76 35 69 39 62
           C42 56 43 50 42 45
           L30 50
           C27 51 24 50 22 48
           L15 41
           C13 39 13 36 15 34
           L27 25
           C31 22 34 18 36 13
           L39 6
           L44 11
           L48 6
           L51 12
           C62 16 69 28 70 41
           L72 88
           Z
           M23 38.8
           a2.2 2.2 0 1 0 0 4.4
           a2.2 2.2 0 1 0 0 -4.4
           Z"
      />
    </svg>
  );
}

export function Logo({
  dark = false,
  compact = false,
}: {
  /** Für dunkle Untergründe (Footer, Hero). */
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-full ${
          dark ? "bg-kupfer text-tanne" : "bg-tanne text-kalk"
        }`}
      >
        <RoessleMark className="mt-0.5 size-6" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`display text-[1.35rem] ${dark ? "text-kalk" : "text-ink"}`}
        >
          Rössle
        </span>
        {!compact && (
          <span
            className={`eyebrow mt-1 ${dark ? "text-stroh" : "text-ink-soft"}`}
          >
            Landgasthof · {site.place}
          </span>
        )}
      </span>
    </span>
  );
}
