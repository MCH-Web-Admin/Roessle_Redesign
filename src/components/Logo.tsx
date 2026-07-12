/** Stilisierter Rössle-Kopf (Springer-Silhouette) – Wasserzeichen & Favicon. */
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

/** Drei Holzscheiben aus dem Original-Logo. */
export function WoodDiscs({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 76 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* dunkle Scheibe */}
      <g>
        <circle cx="12" cy="21" r="10" fill="#5c3d26" />
        <circle cx="12" cy="21" r="6.5" fill="none" stroke="#7a5433" strokeWidth="1.4" />
        <circle cx="12" cy="21" r="3" fill="none" stroke="#7a5433" strokeWidth="1.1" />
      </g>
      {/* mittlere Scheibe */}
      <g>
        <circle cx="36" cy="18" r="12" fill="#b05f2e" />
        <circle cx="36" cy="18" r="8" fill="none" stroke="#d08a55" strokeWidth="1.5" />
        <circle cx="36" cy="18" r="4" fill="none" stroke="#d08a55" strokeWidth="1.2" />
      </g>
      {/* helle Scheibe */}
      <g>
        <circle cx="62" cy="16" r="13" fill="#d9b98c" />
        <circle cx="62" cy="16" r="8.8" fill="none" stroke="#b98f5c" strokeWidth="1.5" />
        <circle cx="62" cy="16" r="4.4" fill="none" stroke="#b98f5c" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

/**
 * Logo-Lockup nach Original: Schreibschrift „Landgasthof Rössle"
 * mit drei Holzscheiben.
 */
export function Logo({
  dark = false,
  compact = false,
}: {
  /** Für dunkle Untergründe (Header transparent, Footer). */
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-end gap-2.5">
      <span
        className={`flex flex-col ${dark ? "text-kalk" : "text-ink"}`}
      >
        {!compact && (
          <span className="script -mb-0.5 -rotate-2 pl-1 text-[0.95rem] opacity-90">
            Landgasthof
          </span>
        )}
        <span className="script text-[2.1rem] leading-[0.85]">Rössle</span>
      </span>
      <WoodDiscs className="mb-1 h-6 w-auto shrink-0" />
    </span>
  );
}
