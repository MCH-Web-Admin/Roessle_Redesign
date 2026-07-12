export type DishVariant =
  | "rostbraten"
  | "wildragout"
  | "kaesespaetzle"
  | "burger";

/**
 * Illustrierte Signature-Gerichte mit aufsteigendem Dampf –
 * geometrische Szenen im Marken-Stil.
 */
export function DishArt({
  variant,
  className = "",
}: {
  variant: DishVariant;
  className?: string;
}) {
  const teller = "#f7f3e8";
  const tellerRand = "#ddd2b6";
  const dunkel = "#2c3b30";
  const braten = "#8a4a26";
  const bratenHell = "#b06a3a";
  const gruen = "#7d9c3d";
  const stroh = "#e4c96a";
  const rot = "#93362e";

  return (
    <svg
      viewBox="0 0 200 150"
      className={`h-auto w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {/* Dampf */}
      <g
        className="steam"
        stroke={dunkel}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      >
        <path d="M82 46 C 78 38, 86 32, 82 24" />
        <path d="M100 44 C 96 36, 104 30, 100 20" />
        <path d="M118 46 C 114 38, 122 32, 118 24" />
      </g>

      {/* Teller */}
      <ellipse cx="100" cy="106" rx="82" ry="30" fill={tellerRand} />
      <ellipse cx="100" cy="102" rx="82" ry="30" fill={teller} />
      <ellipse cx="100" cy="103" rx="60" ry="21" fill="none" stroke={tellerRand} strokeWidth="2" />

      {variant === "rostbraten" && (
        <g>
          {/* Rostbraten */}
          <ellipse cx="88" cy="98" rx="34" ry="14" fill={braten} />
          <ellipse cx="88" cy="94" rx="34" ry="13" fill={bratenHell} />
          {/* Röstzwiebel-Ringe */}
          <circle cx="80" cy="88" r="7" fill="none" stroke={stroh} strokeWidth="3" />
          <circle cx="94" cy="86" r="6" fill="none" stroke={stroh} strokeWidth="3" />
          <circle cx="104" cy="90" r="5" fill="none" stroke={stroh} strokeWidth="2.6" />
          {/* Bratkartoffeln */}
          <g fill={stroh}>
            <ellipse cx="138" cy="102" rx="9" ry="5.5" />
            <ellipse cx="150" cy="97" rx="8" ry="5" />
            <ellipse cx="146" cy="107" rx="8" ry="5" />
          </g>
          <g fill={gruen}>
            <circle cx="139" cy="96" r="1.8" />
            <circle cx="151" cy="104" r="1.8" />
          </g>
        </g>
      )}

      {variant === "wildragout" && (
        <g>
          {/* Spätzle-Bett */}
          <g stroke={stroh} strokeWidth="4" strokeLinecap="round" fill="none">
            <path d="M52 100 q 8 -7 16 0" />
            <path d="M66 106 q 8 -7 16 0" />
            <path d="M52 110 q 8 -6 15 0" />
          </g>
          {/* Ragout */}
          <ellipse cx="112" cy="98" rx="30" ry="13" fill={braten} />
          <g fill="#6d3a1e">
            <ellipse cx="102" cy="94" rx="8" ry="5.5" />
            <ellipse cx="118" cy="92" rx="8" ry="5.5" />
            <ellipse cx="112" cy="100" rx="9" ry="6" />
          </g>
          {/* Preiselbeeren */}
          <g fill={rot}>
            <circle cx="146" cy="102" r="4.5" />
            <circle cx="154" cy="98" r="3.6" />
            <circle cx="151" cy="106" r="3.2" />
          </g>
          <path d="M60 92 q 5 -6 10 -2" stroke={gruen} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      )}

      {variant === "kaesespaetzle" && (
        <g>
          {/* Pfanne */}
          <ellipse cx="94" cy="100" rx="44" ry="16" fill={dunkel} />
          <ellipse cx="94" cy="96" rx="40" ry="14" fill="#3d4f41" />
          <rect x="136" y="94" width="34" height="7" rx="3.5" fill={dunkel} />
          {/* Spätzle */}
          <g stroke={stroh} strokeWidth="4.5" strokeLinecap="round" fill="none">
            <path d="M66 94 q 9 -8 18 0" />
            <path d="M82 90 q 9 -8 18 0" />
            <path d="M98 94 q 9 -8 18 0" />
            <path d="M74 100 q 9 -7 17 0" />
            <path d="M94 101 q 8 -7 16 0" />
          </g>
          {/* Käsefäden */}
          <path d="M78 96 q 2 8 -1 14 M96 98 q 2 7 0 13" stroke="#f0dfa0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Röstzwiebeln + Schnittlauch */}
          <g fill={bratenHell}>
            <circle cx="88" cy="88" r="2.4" />
            <circle cx="104" cy="86" r="2.2" />
            <circle cx="112" cy="92" r="2.4" />
          </g>
          <g fill={gruen}>
            <rect x="84" y="92" width="6" height="2" rx="1" transform="rotate(-20 87 93)" />
            <rect x="106" y="88" width="6" height="2" rx="1" transform="rotate(15 109 89)" />
          </g>
        </g>
      )}

      {variant === "burger" && (
        <g>
          {/* Unteres Brötchen */}
          <path d="M64 104 h72 a6 6 0 0 1 -6 8 h-60 a6 6 0 0 1 -6 -8 Z" fill={bratenHell} />
          {/* Patty */}
          <rect x="62" y="96" width="76" height="9" rx="4.5" fill="#5a3018" />
          {/* Käse läuft */}
          <path d="M60 96 h80 l-7 0 q -2 6 -6 0 h-18 q -2 7 -6 0 h-20 q -2 6 -6 0 h-10 Z" fill={stroh} />
          {/* Salat */}
          <path d="M58 94 q 6 -6 12 0 q 6 -6 12 0 q 6 -6 12 0 q 6 -6 12 0 q 6 -6 12 0 q 6 -6 12 0 v3 h-72 Z" fill={gruen} />
          {/* Tomate */}
          <rect x="66" y="88" width="68" height="5" rx="2.5" fill={rot} />
          {/* Oberes Brötchen */}
          <path d="M62 88 a38 22 0 0 1 76 0 Z" fill={bratenHell} />
          <path d="M62 88 a38 22 0 0 1 76 0" fill="none" stroke="#c98a52" strokeWidth="2" />
          {/* Sesam */}
          <g fill={teller} opacity="0.9">
            <ellipse cx="84" cy="76" rx="2.6" ry="1.6" transform="rotate(-15 84 76)" />
            <ellipse cx="100" cy="72" rx="2.6" ry="1.6" />
            <ellipse cx="116" cy="76" rx="2.6" ry="1.6" transform="rotate(15 116 76)" />
            <ellipse cx="92" cy="82" rx="2.4" ry="1.5" transform="rotate(10 92 82)" />
            <ellipse cx="108" cy="82" rx="2.4" ry="1.5" transform="rotate(-10 108 82)" />
          </g>
        </g>
      )}
    </svg>
  );
}
