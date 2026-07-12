import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "kupfer",
}: {
  children: ReactNode;
  tone?: "kupfer" | "stroh";
}) {
  return (
    <p className={`eyebrow ${tone === "kupfer" ? "text-kupfer" : "text-stroh"}`}>
      {children}
    </p>
  );
}

/** Überschriftenblock mit Eyebrow – Herzstück der Sektionen. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex max-w-2xl flex-col gap-4 ${
        align === "center" ? "mx-auto items-center text-center" : ""
      }`}
    >
      <Eyebrow tone={tone === "dark" ? "stroh" : "kupfer"}>{eyebrow}</Eyebrow>
      <h2
        className={`display text-4xl sm:text-5xl ${
          tone === "dark" ? "text-kalk" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-kalk/70" : "text-ink-soft"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
