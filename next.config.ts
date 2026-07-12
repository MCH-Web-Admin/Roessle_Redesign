import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export: das Ergebnis in out/ läuft auf jedem Webspace/Hoster.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
