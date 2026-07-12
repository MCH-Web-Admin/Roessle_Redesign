export type IllustrationVariant =
  | "haus"
  | "stube"
  | "brennerei"
  | "slaedele"
  | "scheune"
  | "feier";

/**
 * Illustrierte Platzhalter-Szenen im Marken-Stil – geometrische
 * Silhouetten in Tanne/Kupfer/Stroh, bis echte Fotos eingepflegt sind.
 */
export function Illustration({
  variant,
  tone = "light",
  className = "",
}: {
  variant: IllustrationVariant;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const bgA = dark ? "#203125" : "#eae2cd";
  const bgB = dark ? "#14211a" : "#e0d5b8";
  const silhouette = dark ? "#0e1712" : "#2c3b30";
  const glow = "#d5c393";
  const copper = "#c06a35";

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`bg-${variant}-${tone}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={bgA} />
          <stop offset="1" stopColor={bgB} />
        </linearGradient>
        <radialGradient id={`gl-${variant}-${tone}`} cx="0.5" cy="0.55" r="0.55">
          <stop offset="0" stopColor={glow} stopOpacity="0.55" />
          <stop offset="1" stopColor={glow} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#bg-${variant}-${tone})`} />

      {variant === "haus" && (
        <g>
          <circle cx="330" cy="52" r="22" fill={glow} opacity="0.7" />
          <rect x="60" y="150" width="280" height="120" fill={silhouette} />
          <polygon points="46,150 200,54 354,150" fill={silhouette} />
          <polygon points="80,150 200,75 320,150" fill={bgA} opacity="0.12" />
          {/* Fachwerk-Balken */}
          <g stroke={glow} strokeWidth="4" opacity="0.5">
            <line x1="60" y1="186" x2="340" y2="186" />
            <line x1="60" y1="234" x2="340" y2="234" />
            <line x1="104" y1="150" x2="104" y2="270" />
            <line x1="296" y1="150" x2="296" y2="270" />
            <line x1="104" y1="186" x2="152" y2="234" />
            <line x1="296" y1="186" x2="248" y2="234" />
          </g>
          {/* Fenster & Tür */}
          <g fill={glow}>
            <rect x="126" y="196" width="26" height="26" rx="2" opacity="0.95" />
            <rect x="248" y="196" width="26" height="26" rx="2" opacity="0.8" />
            <rect x="170" y="102" width="24" height="24" rx="2" opacity="0.85" />
            <rect x="206" y="102" width="24" height="24" rx="2" opacity="0.6" />
          </g>
          <rect x="182" y="206" width="36" height="64" rx="3" fill={copper} />
          <circle cx="210" cy="240" r="3" fill={glow} />
          {/* Wirtshausschild */}
          <line x1="340" y1="164" x2="368" y2="164" stroke={glow} strokeWidth="4" opacity="0.5" />
          <circle cx="372" cy="180" r="14" fill={copper} />
        </g>
      )}

      {variant === "stube" && (
        <g>
          {/* Lampe */}
          <line x1="200" y1="0" x2="200" y2="74" stroke={silhouette} strokeWidth="5" />
          <polygon points="168,110 232,110 214,74 186,74" fill={copper} />
          <ellipse cx="200" cy="128" rx="52" ry="14" fill={glow} opacity="0.5" />
          <ellipse cx="200" cy="180" rx="150" ry="60" fill={`url(#gl-${variant}-${tone})`} />
          {/* Tisch */}
          <rect x="80" y="196" width="240" height="14" rx="4" fill={silhouette} />
          <rect x="100" y="210" width="12" height="70" fill={silhouette} />
          <rect x="288" y="210" width="12" height="70" fill={silhouette} />
          {/* Gedeck */}
          <circle cx="152" cy="188" r="20" fill={bgA} stroke={silhouette} strokeWidth="4" />
          <circle cx="248" cy="188" r="20" fill={bgA} stroke={silhouette} strokeWidth="4" />
          <rect x="192" y="158" width="7" height="26" rx="3" fill={copper} />
          <rect x="204" y="164" width="6" height="20" rx="3" fill={copper} opacity="0.8" />
          {/* Stuhllehnen */}
          <rect x="30" y="150" width="14" height="130" rx="4" fill={silhouette} opacity="0.75" />
          <rect x="356" y="150" width="14" height="130" rx="4" fill={silhouette} opacity="0.75" />
        </g>
      )}

      {variant === "brennerei" && (
        <g>
          <ellipse cx="150" cy="200" rx="130" ry="80" fill={`url(#gl-${variant}-${tone})`} />
          {/* Kessel */}
          <circle cx="150" cy="198" r="66" fill={copper} />
          <circle cx="150" cy="198" r="66" fill={glow} opacity="0.12" />
          <ellipse cx="128" cy="176" rx="20" ry="30" fill={glow} opacity="0.28" />
          <path d="M96 152 A66 66 0 0 1 204 152 L188 132 A44 44 0 0 0 112 132 Z" fill={copper} opacity="0.85" />
          <rect x="132" y="96" width="36" height="30" rx="14" fill={copper} />
          {/* Geistrohr */}
          <path
            d="M162 100 C 220 66 276 96 296 150"
            fill="none"
            stroke={copper}
            strokeWidth="11"
            strokeLinecap="round"
          />
          {/* Kondensator */}
          <rect x="272" y="148" width="48" height="98" rx="8" fill={silhouette} />
          <line x1="282" y1="170" x2="310" y2="170" stroke={glow} strokeWidth="4" opacity="0.4" />
          <line x1="282" y1="190" x2="310" y2="190" stroke={glow} strokeWidth="4" opacity="0.4" />
          {/* Sockel + Flamme */}
          <rect x="96" y="258" width="108" height="16" rx="4" fill={silhouette} />
          <path d="M142 258 C 138 244 150 240 148 228 C 158 236 162 248 156 258 Z" fill={glow} opacity="0.8" />
          {/* Dampf */}
          <path d="M310 128 C 322 116 310 104 322 92" fill="none" stroke={glow} strokeWidth="6" strokeLinecap="round" opacity="0.55" />
        </g>
      )}

      {variant === "slaedele" && (
        <g>
          <ellipse cx="200" cy="150" rx="170" ry="90" fill={`url(#gl-${variant}-${tone})`} />
          {/* Regalbretter */}
          <rect x="46" y="128" width="308" height="10" rx="3" fill={silhouette} />
          <rect x="46" y="232" width="308" height="10" rx="3" fill={silhouette} />
          {/* Obere Reihe: Flaschen */}
          <g fill={silhouette}>
            <path d="M84 128 L84 84 Q84 74 92 70 L92 58 L104 58 L104 70 Q112 74 112 84 L112 128 Z" />
            <path d="M136 128 L136 92 Q136 82 144 78 L144 66 L156 66 L156 78 Q164 82 164 92 L164 128 Z" fill={copper} />
            <path d="M188 128 L188 88 Q188 78 196 74 L196 60 L208 60 L208 74 Q216 78 216 88 L216 128 Z" />
            <rect x="240" y="86" width="40" height="42" rx="5" fill={copper} opacity="0.9" />
            <rect x="240" y="78" width="40" height="10" rx="3" />
            <path d="M304 128 L304 90 Q304 80 312 76 L312 64 L324 64 L324 76 Q332 80 332 90 L332 128 Z" />
          </g>
          {/* Untere Reihe: Gläser & Korb */}
          <g fill={silhouette}>
            <rect x="80" y="192" width="36" height="40" rx="5" />
            <rect x="80" y="184" width="36" height="10" rx="3" fill={copper} />
            <rect x="132" y="196" width="32" height="36" rx="5" opacity="0.85" />
            <path d="M196 232 L204 200 L260 200 L268 232 Z" fill={copper} opacity="0.9" />
            <path d="M204 200 Q232 178 260 200" fill="none" stroke={silhouette} strokeWidth="6" />
            <path d="M292 232 L292 204 Q292 194 300 190 L300 180 L310 180 L310 190 Q318 194 318 204 L318 232 Z" />
          </g>
          {/* Preisschildchen */}
          <circle cx="150" cy="150" r="3" fill={glow} />
          <circle cx="258" cy="150" r="3" fill={glow} />
        </g>
      )}

      {variant === "scheune" && (
        <g>
          <circle cx="60" cy="48" r="18" fill={glow} opacity="0.6" />
          {/* Scheune */}
          <polygon points="70,132 200,58 330,132" fill={silhouette} />
          <rect x="82" y="132" width="236" height="140" fill={silhouette} />
          {/* Tor mit Streben */}
          <rect x="150" y="164" width="100" height="108" rx="4" fill={bgA} opacity="0.16" />
          <g stroke={glow} strokeWidth="5" opacity="0.55">
            <rect x="150" y="164" width="100" height="108" rx="4" fill="none" />
            <line x1="150" y1="164" x2="250" y2="272" />
            <line x1="250" y1="164" x2="150" y2="272" />
          </g>
          {/* Giebelfenster */}
          <circle cx="200" cy="112" r="14" fill={glow} opacity="0.85" />
          {/* Wimpelkette */}
          <path d="M40 84 Q200 148 360 84" fill="none" stroke={glow} strokeWidth="3" opacity="0.6" />
          <g>
            <polygon points="96,104 112,106 100,122" fill={copper} />
            <polygon points="168,124 184,124 176,142" fill={glow} />
            <polygon points="240,122 256,120 250,138" fill={copper} />
            <polygon points="308,102 322,98 316,118" fill={glow} />
          </g>
        </g>
      )}

      {variant === "feier" && (
        <g>
          <ellipse cx="200" cy="170" rx="170" ry="80" fill={`url(#gl-${variant}-${tone})`} />
          {/* Wimpel */}
          <path d="M20 44 Q200 96 380 44" fill="none" stroke={silhouette} strokeWidth="4" opacity="0.7" />
          <g>
            <polygon points="72,58 92,60 78,82" fill={copper} />
            <polygon points="144,74 164,76 152,98" fill={glow} />
            <polygon points="228,76 248,74 238,98" fill={copper} />
            <polygon points="304,60 324,56 314,80" fill={glow} />
          </g>
          {/* Tafel */}
          <rect x="70" y="188" width="260" height="14" rx="5" fill={silhouette} />
          <rect x="92" y="202" width="12" height="72" fill={silhouette} />
          <rect x="296" y="202" width="12" height="72" fill={silhouette} />
          {/* Gläser */}
          <g fill={silhouette}>
            <path d="M140 188 L140 168 Q140 156 152 152 Q164 156 164 168 L164 188 Z" opacity="0.9" />
            <path d="M188 188 L188 162 Q188 148 202 144 Q216 148 216 162 L216 188 Z" fill={copper} />
            <path d="M240 188 L240 168 Q240 156 252 152 Q264 156 264 168 L264 188 Z" opacity="0.9" />
          </g>
          {/* Konfetti */}
          <g fill={glow}>
            <circle cx="110" cy="128" r="4" />
            <circle cx="330" cy="120" r="4" opacity="0.7" />
            <circle cx="200" cy="112" r="3" />
            <circle cx="284" cy="140" r="3" opacity="0.7" />
          </g>
        </g>
      )}
    </svg>
  );
}
