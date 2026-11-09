import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Vorschau auf GitHub Pages: alles sperren. Der Build für die eigene Domain bleibt offen.
  if (process.env.GITHUB_PAGES === "true") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
