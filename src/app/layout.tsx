import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { hours, site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} ${site.place} · Landgasthof, Brennerei & sLädele seit ${site.since}`,
    template: `%s · ${site.name} ${site.place}`,
  },
  description:
    "Schwäbische Küche im Fachwerkhaus seit 1862: Mittagstisch, Speisekarte, Feiern bis 120 Personen, Partyservice, hauseigene Brennerei und sLädele in Dunningen-Seedorf.",
  openGraph: {
    title: `${site.name} ${site.place}`,
    description:
      "Regionale Küche, hauseigene Brennerei und ein Lädele voller guter Dinge – seit 1862 in Dunningen-Seedorf.",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: `${site.name} ${site.place}`,
  servesCuisine: ["Schwäbisch", "Regional", "Deutsch"],
  telephone: "+497402281",
  email: site.email,
  url: site.url,
  foundingDate: String(site.since),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: "DE",
  },
  openingHours: hours.map((h) => `${h.day.slice(0, 2)} ${h.times}`),
  sameAs: [site.instagram, site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
