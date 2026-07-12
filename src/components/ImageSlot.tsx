import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { RoessleMark } from "./Logo";

const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"];

/**
 * Bild-Slot mit eingebautem Platzhalter.
 *
 * Liegt unter /public/images/<name>.(webp|jpg|jpeg|png|avif) ein echtes Foto,
 * wird es automatisch gerendert – sonst erscheint ein gestalteter Platzhalter
 * mit dem Slot-Namen. So können alle Fotos der alten Website (oder neue
 * Aufnahmen) ohne Codeänderung eingepflegt werden.
 */
export function ImageSlot({
  name,
  alt,
  label,
  className = "",
  tone = "light",
}: {
  /** Dateiname ohne Endung, z. B. "hero-haus" → /public/images/hero-haus.jpg */
  name: string;
  alt: string;
  /** Beschriftung des Platzhalters, z. B. "Foto: Fachwerkhaus" */
  label: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const dir = path.join(process.cwd(), "public", "images");
  const found = EXTENSIONS.map((ext) => `${name}.${ext}`).find((file) =>
    fs.existsSync(path.join(dir, file)),
  );

  if (found) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={`/images/${found}`}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  const isDark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden ${
        isDark ? "bg-tanne-soft text-kalk/40" : "bg-kalk-deep text-ink/30"
      } ${className}`}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.22]"
      >
        <defs>
          <pattern
            id={`fw-${name}`}
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0H72M0 0V72M0 72 72 0"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#fw-${name})`} />
      </svg>
      <div className="relative flex flex-col items-center gap-3 p-6 text-center">
        <RoessleMark className="size-12" />
        <span className="eyebrow">{label}</span>
        <span className="text-xs opacity-70">
          Foto einfügen: /public/images/{name}.jpg
        </span>
      </div>
    </div>
  );
}
