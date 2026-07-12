/**
 * Speisekarte – übernommen von der gedruckten Abholkarte des Rössle
 * (Foto, Stand Juli 2026). Preise sind Abholpreise.
 * Datenpflege an einer Stelle: Gericht ändern = hier ändern.
 */
export type Dish = {
  name: string;
  description?: string;
  price: number;
  vegetarian?: boolean;
  vegan?: boolean;
  /** Zusatzstoff-Nummern laut Karte, z. B. "2,4" */
  zusatz?: string;
  signature?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  intro?: string;
  dishes: Dish[];
};

export const menu: MenuSection[] = [
  {
    id: "suppen",
    title: "Suppen",
    dishes: [
      {
        name: "Rinderkraftbrühe mit Flädle",
        price: 5.0,
      },
    ],
  },
  {
    id: "salate",
    title: "Salate",
    dishes: [
      {
        name: "Beilagensalat",
        price: 5.0,
        zusatz: "4,2",
        vegetarian: true,
      },
      {
        name: "Großer gemischter Salat",
        price: 8.5,
        zusatz: "4,2",
        vegetarian: true,
      },
      {
        name: "Joggingteller",
        description:
          "Alles, was die Salatküche hergibt, mit würzig panierten Putenbruststreifen",
        price: 14.0,
        zusatz: "4,2",
      },
    ],
  },
  {
    id: "vegetarisch",
    title: "Vegetarisch & Vegan",
    dishes: [
      {
        name: "Vitamin-Teller",
        description:
          "Bunt gemischtes Gemüse mit Buttersoße (vegan = ohne Soße) und Kartoffelrösti",
        price: 13.0,
        vegetarian: true,
      },
      {
        name: "Thai-Curry-Gemüse",
        description: "Mit Basmatireis – vegan",
        price: 13.0,
        vegan: true,
      },
      {
        name: "Schwäbische Käsespätzle",
        description: "Mit Röstzwiebeln",
        price: 9.0,
        zusatz: "4,2",
        vegetarian: true,
        signature: true,
      },
    ],
  },
  {
    id: "vesper",
    title: "Vesper",
    dishes: [
      {
        name: "Wurstsalat",
        price: 10.0,
        zusatz: "2,4",
      },
      {
        name: "Strassburger",
        price: 10.0,
        zusatz: "2,4",
      },
      {
        name: "Chefsalat „mit allem drin“",
        description:
          "Lyoner, Emmentaler, Schwarzwurst, Zwiebeln und Essiggurke, dazu Brot",
        price: 11.0,
        zusatz: "2,4",
      },
    ],
  },
  {
    id: "hauptgerichte",
    title: "Hauptgerichte",
    dishes: [
      {
        name: "Paniertes Schweineschnitzel",
        description: "Mit Pommes frites",
        price: 12.0,
      },
      {
        name: "Wildragout",
        description: "Mit Spätzle und Preiselbeeren",
        price: 17.0,
        signature: true,
      },
      {
        name: "Rinderzunge",
        description: "An Madeirasoße mit Kroketten und Gemüse",
        price: 20.0,
        zusatz: "3",
      },
      {
        name: "Schweinemedaillons",
        description: "Mit Rahmchampignons und Eierspätzle",
        price: 16.5,
      },
      {
        name: "Zwiebelrostbraten",
        description: "Mit Bratkartoffeln",
        price: 21.0,
        signature: true,
      },
      {
        name: "Schwäbischer Sauerbraten",
        description: "Mit Eierspätzle",
        price: 15.0,
        zusatz: "2",
      },
      {
        name: "Gebratenes Lachsfilet",
        description: "An Rieslingsoße mit Basmatireis",
        price: 18.5,
      },
      {
        name: "Beilagensalat zum Hauptgericht",
        price: 5.0,
        zusatz: "2,4",
        vegetarian: true,
      },
    ],
  },
  {
    id: "burger",
    title: "Burger",
    dishes: [
      {
        name: "Lenis’ Cheesburger",
        description:
          "Mit Spezialsoße, Essiggurke, Balsamico-Zwiebeln, Cheddar und Pommes",
        price: 15.0,
        zusatz: "2,4,7",
        signature: true,
      },
    ],
  },
];

export const abholNote =
  "Alle Preise sind Abholpreise. Lieferung je nach Kapazität möglich.";

export const allergyNote =
  "Haben Sie eine Allergie? Wir geben Ihnen gerne persönlich Auskunft!";

export const zusatzstoffe: [string, string][] = [
  ["1", "Geschmacksverstärker"],
  ["2", "Antioxidationsmittel"],
  ["3", "Nitritpökelsalz"],
  ["4", "Konservierungsstoff"],
  ["5", "Süßungsmittel"],
  ["6", "Phosphat"],
  ["7", "Farbstoff"],
];

export const mittagstisch = {
  title: "Mittagstisch & Tagesessen",
  text: "Montag bis Freitag kochen wir mittags zwei wechselnde Tagesessen – bodenständig, frisch und fair im Preis. Beide Gerichte gibt es auch zum Abholen; die aktuelle Wochenkarte erfahren Sie telefonisch oder direkt im Haus.",
  priceHint: "Tagesessen ab ca. 9 €",
};

export const aktionswochen = [
  {
    title: "Schlachtplatte",
    text: "Deftige Schlachtplatte nach Hausmacher Art – ein Klassiker, auf den sich das ganze Dorf freut.",
  },
  {
    title: "Schnitzelwochen",
    text: "Schnitzel in allen Variationen – von klassisch bis kreativ, immer mit hausgemachten Beilagen.",
  },
  {
    title: "Fischwochen",
    text: "Frischer Fisch, fein zubereitet – die maritime Abwechslung im Landgasthof.",
  },
  {
    title: "Themenabende",
    text: "Bayrischer Abend, mexikanische Nacht und mehr – Genuss über den Tellerrand hinaus.",
  },
];
