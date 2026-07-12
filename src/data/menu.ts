/**
 * Speisekarte – Datenpflege an einer Stelle.
 *
 * WICHTIG: Die Gerichte orientieren sich an der recherchierten Küche des
 * Rössle (schwäbische Klassiker, Wild, Vegetarisches, Pasta; Preisspanne
 * ca. 9–22 €). Konkrete Positionen und Preise sind Beispieldaten und
 * müssen vor Livegang anhand der aktuellen Karte gepflegt werden.
 */
export type Dish = {
  name: string;
  description?: string;
  price: number;
  vegetarian?: boolean;
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
    id: "vorspeisen",
    title: "Zum Anfang",
    intro: "Suppen und Salate – hausgemacht, wie es sich gehört.",
    dishes: [
      {
        name: "Flädlesuppe",
        description: "Kräftige Rinderbrühe mit hausgemachten Flädle",
        price: 5.9,
      },
      {
        name: "Maultasche in der Brühe",
        description: "Hausgemachte Maultasche in Rinderbrühe mit Schnittlauch",
        price: 6.9,
      },
      {
        name: "Gemischter Salat",
        description: "Blatt- und Rohkostsalate mit Hausdressing",
        price: 6.5,
        vegetarian: true,
      },
      {
        name: "Großer Salatteller",
        description:
          "Bunte Salate mit gebratenen Putenstreifen oder Käse, dazu Bauernbrot",
        price: 14.5,
      },
    ],
  },
  {
    id: "klassiker",
    title: "Schwäbische Klassiker",
    intro: "Aus der Rössle-Küche – regional, ehrlich, mit Liebe gekocht.",
    dishes: [
      {
        name: "Hausgemachte Maultaschen",
        description: "Geschmälzt mit Zwiebeln, dazu Kartoffelsalat",
        price: 13.9,
        signature: true,
      },
      {
        name: "Käsespätzle",
        description:
          "Handgeschabte Spätzle mit würzigem Bergkäse und Röstzwiebeln, dazu kleiner Salat",
        price: 12.9,
        vegetarian: true,
        signature: true,
      },
      {
        name: "Zwiebelrostbraten",
        description:
          "Vom heimischen Rind, mit Spätzle, Bratensauce und Röstzwiebeln",
        price: 21.9,
        signature: true,
      },
      {
        name: "Schweinemedaillons in Champignonrahm",
        description: "Zarte Medaillons mit Rahmchampignons, Spätzle und Salat",
        price: 17.9,
      },
      {
        name: "Schnitzel „Wiener Art“",
        description: "Vom Schwein, mit Pommes frites und Salatbeilage",
        price: 14.9,
      },
      {
        name: "Rahmschnitzel",
        description: "Mit Champignonrahmsauce, Spätzle und Salat",
        price: 16.5,
      },
      {
        name: "Cordon bleu",
        description: "Gefüllt mit Schinken und Käse, dazu Pommes frites und Salat",
        price: 17.5,
      },
    ],
  },
  {
    id: "wald-und-weide",
    title: "Aus Wald & Weide",
    intro: "Saisonales aus der Region – je nach Jagd und Jahreszeit.",
    dishes: [
      {
        name: "Hausgemachtes Wildragout",
        description:
          "Zartes Wildfleisch mit Preiselbeeren, Spätzle und gemischtem Salat",
        price: 18.9,
        signature: true,
      },
      {
        name: "Wildbratwürste",
        description: "Mit Sauerkraut und Kartoffelpüree",
        price: 14.5,
      },
    ],
  },
  {
    id: "vegetarisch",
    title: "Vegetarisch & Pasta",
    intro: "Auch ohne Fleisch wird bei uns niemand hungrig.",
    dishes: [
      {
        name: "Gemüse-Maultaschen",
        description: "Gebraten, mit Ei und kleinem Salat",
        price: 12.5,
        vegetarian: true,
      },
      {
        name: "Spaghetti al Pomodoro",
        description: "Fruchtige Tomatensauce, Parmesan und Basilikum",
        price: 10.9,
        vegetarian: true,
      },
      {
        name: "Pasta mit Pilzrahm",
        description: "Bandnudeln mit frischen Champignons in Rahmsauce",
        price: 12.9,
        vegetarian: true,
      },
    ],
  },
  {
    id: "kinder",
    title: "Für die Kleinen",
    dishes: [
      {
        name: "Kinderschnitzel",
        description: "Mit Pommes frites und Ketchup",
        price: 8.5,
      },
      {
        name: "Spätzle mit Sauce",
        description: "Kleine Portion mit Bratensauce",
        price: 6.5,
        vegetarian: true,
      },
    ],
  },
  {
    id: "dessert",
    title: "Süßer Abschluss",
    dishes: [
      {
        name: "Apfelküchle",
        description: "In Zimtzucker gewendet, mit Vanilleeis",
        price: 7.5,
        vegetarian: true,
      },
      {
        name: "Ofenschlupfer",
        description: "Schwäbischer Brotauflauf mit Vanillesauce",
        price: 7.9,
        vegetarian: true,
      },
      {
        name: "Gemischtes Eis mit Sahne",
        price: 6.5,
        vegetarian: true,
      },
    ],
  },
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
