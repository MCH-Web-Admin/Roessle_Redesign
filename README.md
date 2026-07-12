# Landgasthof Rössle Seedorf – Website-Redesign

Komplettes Redesign von [roessle-seedorf.de](https://www.roessle-seedorf.de)
als moderne Next.js-Website: schwäbischer Landgasthof seit 1862 mit
Speisekarte, Mittagstisch, Feiern & Events, Partyservice, hauseigener
Brennerei und sLädele.

## Stack

- **Next.js 16** (App Router, TypeScript) · **Tailwind CSS 4**
- Schriften lokal über Fontsource: *Instrument Serif* (Display) &
  *Hanken Grotesk* (Text) – kein Google-Fonts-CDN, DSGVO-freundlich
- Keine Cookies, kein Tracking, keine externen Einbindungen

## Design „Wirtshaus-Moderne"

| Token | Farbe | Herkunft |
| --- | --- | --- |
| `tanne` | `#16241c` | Schwarzwald-Tanne (dunkler Grund) |
| `kalk` | `#f4efe2` | Kalkputz des Fachwerkhauses (Grundfläche) |
| `kupfer` | `#b05f2e` | Brennkessel der Hausbrennerei (Akzent) |
| `ochsenblut` | `#7c2d28` | Traditionelle Fachwerk-Balkenfarbe |
| `stroh` | `#d5c393` | Strohgelb (Sekundärakzent auf Dunkel) |

Das Logo ist eine stilisierte Springer-Silhouette („Rössle“), das
wiederkehrende Linienmotiv zitiert Fachwerk-Streben.

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Produktionsbuild
```

## Inhalte pflegen

- **Stammdaten & Öffnungszeiten:** `src/data/site.ts`
- **Speisekarte, Mittagstisch, Aktionswochen:** `src/data/menu.ts`
- **Fotos:** in `public/images/` ablegen – Slot-Namen siehe
  `public/images/README.md`. Ohne Foto erscheint automatisch ein
  gestalteter Platzhalter.

## Vor dem Livegang prüfen

- [ ] **Speisekarte & Preise**: Die Gerichte in `src/data/menu.ts` sind
      recherchierte Beispieldaten (Preisspanne lt. Recherche 9–22 €) und
      müssen anhand der aktuellen Karte gepflegt werden.
- [ ] **Öffnungszeiten** in `src/data/site.ts` mit der Familie Schneider
      abgleichen (Recherche-Stand Juli 2026).
- [ ] **Fotos** der bisherigen Website in `public/images/` einpflegen.
- [ ] **Impressum/Datenschutz**: Platzhalter (USt-IdNr., Hoster) ergänzen
      und rechtlich prüfen lassen.
