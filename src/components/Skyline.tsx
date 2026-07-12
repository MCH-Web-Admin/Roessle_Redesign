/** Seedorf-Silhouette am Fuß des Heros: Giebel, Kirchturm, Tannen. */
export function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 150"
      preserveAspectRatio="xMidYMax slice"
      className={`block h-24 w-full sm:h-32 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="#203125">
        {/* Tannen links */}
        <polygon points="30,150 60,80 90,150" />
        <polygon points="70,150 105,60 140,150" />
        <polygon points="115,150 145,90 175,150" />
        {/* Haus 1 */}
        <rect x="185" y="92" width="110" height="58" />
        <polygon points="175,92 240,52 305,92" />
        {/* Haus 2 (klein) */}
        <rect x="320" y="106" width="80" height="44" />
        <polygon points="312,106 360,74 408,106" />
        {/* Kirchturm */}
        <rect x="440" y="58" width="46" height="92" />
        <polygon points="436,58 463,8 490,58" />
        {/* Kirchenschiff */}
        <rect x="486" y="96" width="120" height="54" />
        <polygon points="480,96 546,62 612,96" />
        {/* Haus 3 */}
        <rect x="640" y="88" width="130" height="62" />
        <polygon points="630,88 705,44 780,88" />
        {/* Haus 4 (Rössle – mit Schild) */}
        <rect x="810" y="78" width="150" height="72" />
        <polygon points="798,78 885,28 972,78" />
        {/* Haus 5 */}
        <rect x="1000" y="100" width="95" height="50" />
        <polygon points="992,100 1047,66 1102,100" />
        {/* Scheune */}
        <rect x="1130" y="94" width="120" height="56" />
        <polygon points="1122,94 1190,56 1258,94" />
        {/* Tannen rechts */}
        <polygon points="1270,150 1300,84 1330,150" />
        <polygon points="1315,150 1350,62 1385,150" />
        <polygon points="1365,150 1395,92 1425,150" />
      </g>
      {/* Fenster */}
      <g fill="#d5c393">
        <rect x="215" y="108" width="12" height="14" opacity="0.85" />
        <rect x="252" y="108" width="12" height="14" opacity="0.5" />
        <rect x="345" y="118" width="10" height="12" opacity="0.7" />
        <circle cx="463" cy="72" r="6" opacity="0.8" />
        <rect x="672" y="104" width="12" height="14" opacity="0.6" />
        <rect x="712" y="104" width="12" height="14" opacity="0.85" />
        <rect x="840" y="96" width="13" height="15" opacity="0.9" />
        <rect x="878" y="96" width="13" height="15" opacity="0.75" />
        <rect x="916" y="96" width="13" height="15" opacity="0.9" />
        <rect x="1030" y="114" width="10" height="12" opacity="0.6" />
      </g>
      {/* Wirtshausschild am Rössle */}
      <g>
        <line x1="960" y1="90" x2="984" y2="90" stroke="#d5c393" strokeWidth="3" opacity="0.7" />
        <circle cx="988" cy="102" r="9" fill="#c06a35" />
      </g>
    </svg>
  );
}
