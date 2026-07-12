import type { ReactNode } from "react";

/** Handgemalter grüner Unterstrich für Schlüsselwörter in Überschriften. */
export function Marker({
  children,
  tone = "gruen",
}: {
  children: ReactNode;
  tone?: "gruen" | "hell";
}) {
  return (
    <span
      className="marker"
      style={tone === "hell" ? { ["--gruen" as string]: "var(--gruen-hell)" } : undefined}
    >
      {children}
      <svg viewBox="0 0 120 10" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M2 7 C 20 3.5, 45 3, 62 5 C 82 7.5, 102 6.5, 118 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </span>
  );
}
