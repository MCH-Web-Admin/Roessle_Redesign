import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export: das Ergebnis in out/ läuft auf jedem Webspace/Hoster.
  output: "export",
  images: { unoptimized: true },
  // Jede Route als Ordner (…/speisekarte/index.html) – funktioniert auf
  // jedem statischen Host ohne Rewrite-Regeln, inkl. GitHub Pages.
  trailingSlash: true,
  // Für GitHub Pages (Projektseite unter /Roessle_Redesign/):
  // GITHUB_PAGES=true npm run build
  basePath: process.env.GITHUB_PAGES === "true" ? "/Roessle_Redesign" : undefined,
};

export default nextConfig;
