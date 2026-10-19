// Anbieter für Kleidung & Ausrüstung. Neue Shops einfach als weiteren Eintrag ergänzen.
// logo: Datei in bilder/shops/, logoBg: Hintergrundfarbe für helle Logos (optional)
// suche: Such-Adresse des Shops, {q} wird durch den Suchbegriff ersetzt (DJV-Shop: keine geprüfte Suche)
// kategorien: Bekleidung, Ausrüstung, Optik, Hund, Revier, Schießbedarf, Outdoor
window.AUSRUESTUNG = {
  stand: "2026-10-07",
  // Zusätzlich für Bestell-Links bei Werkzeugen (kein Jagdausstatter, daher nicht in der Shop-Liste)
  extraSuche: [{ name: "Amazon", suche: "https://www.amazon.de/s?k={q}" }],
  shops: [
    {
      name: "Frankonia",
      suche: "https://www.frankonia.de/search.html?query={q}",
      logo: "bilder/shops/frankonia.svg",
      kurz: "FR",
      url: "https://www.frankonia.de",
      beschreibung: "Großer Jagdausstatter seit 1908: Jagd, Sportschießen, Outdoor, Naturbeobachtung sowie Landhaus- und British-Mode.",
      sitz: "Rottendorf · rund 25 Filialen in Deutschland",
      extras: ["Werkstatt- und Büchsenmacher-Service", "Filialen vor Ort"],
      kategorien: ["Bekleidung", "Ausrüstung", "Optik", "Schießbedarf", "Outdoor"]
    },
    {
      name: "GRUBE",
      suche: "https://www.grube.de/search/?q={q}",
      logo: "bilder/shops/grube.svg",
      logoBg: "#004B1E",
      kurz: "GR",
      url: "https://www.grube.de",
      beschreibung: "Über 25.000 Produkte für Forst und Jagd: Jagdbekleidung, Jagdausrüstung, Outdoorbekleidung und Revierbedarf.",
      sitz: "Ladengeschäft in Hützel (Lüneburger Heide)",
      extras: ["Kostenloser Jahreskatalog", "Ladengeschäft im Norden"],
      kategorien: ["Bekleidung", "Ausrüstung", "Revier", "Outdoor"]
    },
    {
      name: "Pirscher Shop",
      suche: "https://www.pirschershop.de/search?search={q}",
      logo: "bilder/shops/pirscher.svg",
      kurz: "PS",
      url: "https://www.pirschershop.de",
      beschreibung: "Von Jägern für Jäger: Jagdbekleidung, Ausrüstung, Hundebedarf und Optik, dazu die Eigenmarke „Pirscher Gear“.",
      sitz: "Ladengeschäft in Genderkingen bei Augsburg",
      extras: ["30 Tage Rückgabe", "Beratung per Hotline"],
      kategorien: ["Bekleidung", "Ausrüstung", "Optik", "Hund"]
    },
    {
      name: "Jagdwelt24",
      suche: "https://www.jagdwelt24.de/search/?qs={q}",
      logo: "bilder/shops/jagdwelt24.png",
      kurz: "JW",
      url: "https://www.jagdwelt24.de",
      beschreibung: "Jagdbekleidung, Jagdausrüstung und Optik namhafter Marken, dazu Hundebedarf und Revierausstattung – sortiert nach Jagdart.",
      sitz: "Filialen u. a. in Fürstenau (Niedersachsen)",
      extras: ["Versandkostenfrei ab 79,95 €", "Kostenlose Retouren", "Jungjäger-Rabatte"],
      kategorien: ["Bekleidung", "Ausrüstung", "Optik", "Hund", "Revier"]
    },
    {
      name: "DJV-Shop",
      logo: "bilder/shops/djv.png",
      kurz: "DJV",
      url: "https://djv-shop.de",
      beschreibung: "Offizieller Shop des Deutschen Jagdverbands: Jagdbedarf, ausgewählte Bekleidung, Schießscheiben, Wildbret-Artikel sowie Material für Öffentlichkeitsarbeit und Lernort Natur.",
      sitz: "DJV-Service und Marketing GmbH, Bonn",
      extras: ["Bis zu 10 % Rabatt für LJV-Mitglieder"],
      kategorien: ["Bekleidung", "Ausrüstung", "Schießbedarf"]
    },
    {
      name: "Askari",
      suche: "https://www.jagd.de/index.php?cl=search&searchparam={q}",
      logo: "bilder/shops/askari.png",
      kurz: "AS",
      url: "https://www.jagd.de",
      beschreibung: "Großer Versandhändler für Jagd, Angeln und Outdoor: Bekleidung, Jagdschuhe, Hochsitze, Wildkameras, Zielfernrohre und Messer.",
      sitz: "Askari Sport GmbH, Lüdinghausen",
      extras: ["Kostenloser Katalog", "Outlet", "Jagd-App"],
      kategorien: ["Bekleidung", "Ausrüstung", "Optik", "Revier", "Outdoor"]
    },
    {
      name: "MILITARY",
      logo: "bilder/shops/military.svg",
      kurz: "MI",
      suche: "https://military.eu/de/suchen?pref_q={q}",
      url: "https://military.eu/de/",
      beschreibung: "Europäischer Versandhändler für Militär- und Outdoor-Bekleidung und -Ausrüstung, u. a. Helikon-Tex, Lowa, Leatherman, 5.11, Mil-Tec, Brandit, Petzl und Bushnell.",
      sitz: "Onlineshop mit deutscher Shopseite (military.eu)",
      extras: ["Versandkostenfrei ab 99 €", "Kostenlose Rücksendung", "Meist sofort lieferbar"],
      kategorien: ["Bekleidung", "Ausrüstung", "Optik", "Outdoor"]
    }
  ]
};
