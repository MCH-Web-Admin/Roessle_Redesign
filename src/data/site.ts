/**
 * Zentrale Stammdaten des Landgasthofs.
 * Quelle: Recherche roessle-seedorf.de + Verzeichniseinträge (Stand Juli 2026).
 * Öffnungszeiten bitte vor Livegang mit der Familie Schneider abgleichen.
 */
export const site = {
  name: "Landgasthof Rössle",
  place: "Seedorf",
  claim: "Landgasthof · Brennerei · sLädele",
  since: 1862,
  owner: "Familie Schneider",
  address: {
    street: "Freudenstädter Straße 20",
    zip: "78655",
    city: "Dunningen-Seedorf",
    region: "Baden-Württemberg",
  },
  phone: "07402 281",
  phoneHref: "tel:+497402281",
  email: "info@roessle-seedorf.de",
  emailHref: "mailto:info@roessle-seedorf.de",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Landgasthof+R%C3%B6ssle+Freudenst%C3%A4dter+Stra%C3%9Fe+20+78655+Dunningen-Seedorf",
  instagram: "https://www.instagram.com/roessle_seedorf/",
  facebook: "https://www.facebook.com/landgasthof.seedorf/",
  url: "https://www.roessle-seedorf.de",
} as const;

export const hours: { day: string; times: string }[] = [
  { day: "Montag", times: "08:30 – 13:30" },
  { day: "Dienstag", times: "08:30 – 13:30" },
  { day: "Mittwoch", times: "08:30 – 24:00" },
  { day: "Donnerstag", times: "08:30 – 13:30" },
  { day: "Freitag", times: "08:30 – 13:30 · 17:00 – 24:00" },
  { day: "Samstag", times: "17:00 – 24:00" },
  { day: "Sonntag", times: "09:30 – 24:00" },
];

/** Öffnungszeiten maschinenlesbar (Minuten seit 0 Uhr), Index 0 = Sonntag. */
export const openRanges: Record<number, [number, number][]> = {
  0: [[570, 1440]],
  1: [[510, 810]],
  2: [[510, 810]],
  3: [[510, 1440]],
  4: [[510, 810]],
  5: [
    [510, 810],
    [1020, 1440],
  ],
  6: [[1020, 1440]],
};

export const hoursNote =
  "Für Gruppen, Familienfeiern und Vereine öffnen wir gerne auch nach Vereinbarung – rufen Sie uns einfach kurz an.";

/** Hauptnavigation (Desktop) – bewusst kompakt gehalten. */
export const nav = [
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/feiern", label: "Feiern & Events" },
  { href: "/partyservice", label: "Partyservice" },
  { href: "/brennerei", label: "Brennerei & sLädele" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Alle Seiten (Mobile-Menü & Footer). */
export const navAll = [
  { href: "/", label: "Start" },
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/feiern", label: "Feiern & Events" },
  { href: "/partyservice", label: "Partyservice" },
  { href: "/brennerei", label: "Brennerei" },
  { href: "/slaedele", label: "sLädele" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Laufband auf der Startseite – Gerichte von der echten Karte. */
export const specialties = [
  "Zwiebelrostbraten",
  "Wildragout mit Spätzle",
  "Schwäbische Käsespätzle",
  "Schwäbischer Sauerbraten",
  "Lenis’ Cheesburger",
  "Edelbrände aus eigener Brennerei",
  "Mittagstisch Mo – Fr",
];
