import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Illustration, type IllustrationVariant } from "./Illustration";

const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"];

/**
 * Bild-Slot mit illustriertem Platzhalter.
 *
 * Liegt unter /public/images/<name>.(webp|jpg|jpeg|png|avif) ein echtes Foto,
 * wird es automatisch gerendert – sonst erscheint eine illustrierte Szene im
 * Marken-Stil. So können die Fotos der alten Website (oder neue Aufnahmen)
 * ohne Codeänderung eingepflegt werden.
 */
export function ImageSlot({
  name,
  alt,
  variant,
  label,
  className = "",
  tone = "light",
}: {
  /** Dateiname ohne Endung, z. B. "hero-haus" → /public/images/hero-haus.jpg */
  name: string;
  alt: string;
  /** Illustrations-Motiv für den Platzhalter. */
  variant: IllustrationVariant;
  /** Optionale Beschriftung, z. B. "Unser Fachwerkhaus". */
  label?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const dir = path.join(process.cwd(), "public", "images");
  const found = EXTENSIONS.map((ext) => `${name}.${ext}`).find((file) =>
    fs.existsSync(path.join(dir, file)),
  );

  return (
    <div
      className={`relative overflow-hidden rounded-md ${className}`}
      title={found ? undefined : `Foto einfügen: /public/images/${name}.jpg`}
    >
      {found ? (
        <Image
          src={`/images/${found}`}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0">
          <Illustration variant={variant} tone={tone} />
        </div>
      )}
      {label && (
        <span className="eyebrow absolute bottom-3 left-3 rounded-full bg-tanne/85 px-3.5 py-2 text-[0.62rem] text-kalk backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
