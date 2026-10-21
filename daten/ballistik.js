// Ballistik: Kaliber-Voreinstellungen (Richtwerte typischer bleifreier Fabrikmunition), Grundlagen und Rechtliches.
// Werte sind Anhaltspunkte – für die eigene Büchse immer die Herstellerangaben der verwendeten Laborierung eintragen.
window.BALLISTIK = {
 "stand": "2026-10-19",
 "kaliber": [
  { "name": ".222 Rem.",       "kal": 5.6, "g": 3.2,  "v0": 960, "bc": 0.20 },
  { "name": ".223 Rem.",       "kal": 5.6, "g": 3.6,  "v0": 990, "bc": 0.25 },
  { "name": ".243 Win.",       "kal": 6.2, "g": 5.2,  "v0": 990, "bc": 0.33 },
  { "name": "6,5x55 SE",       "kal": 6.5, "g": 7.8,  "v0": 850, "bc": 0.40 },
  { "name": "6,5 Creedmoor",   "kal": 6.5, "g": 8.0,  "v0": 840, "bc": 0.45 },
  { "name": "7x64",            "kal": 7.0, "g": 9.1,  "v0": 860, "bc": 0.40 },
  { "name": "7 mm Rem. Mag.",  "kal": 7.0, "g": 9.1,  "v0": 930, "bc": 0.42 },
  { "name": ".308 Win.",       "kal": 7.62, "g": 9.7, "v0": 840, "bc": 0.38 },
  { "name": ".30-06 Spr.",     "kal": 7.62, "g": 10.7, "v0": 850, "bc": 0.42 },
  { "name": ".300 Win. Mag.",  "kal": 7.62, "g": 11.7, "v0": 900, "bc": 0.45 },
  { "name": "8x57 IS",         "kal": 8.0, "g": 11.7, "v0": 790, "bc": 0.35 },
  { "name": "9,3x62",          "kal": 9.3, "g": 16.2, "v0": 760, "bc": 0.32 },
  { "name": "9,3x74 R",        "kal": 9.3, "g": 15.0, "v0": 730, "bc": 0.30 }
 ],
 "grundlagen": [
  { "titel": "Innenballistik", "kurz": "Was im Lauf passiert",
    "punkte": [
     "Vom Zünden der Treibladung bis zum Verlassen der Mündung: Gasdruck, Geschossbeschleunigung, Drall.",
     "Lauflänge, Pulversorte und Temperatur verändern die Mündungsgeschwindigkeit (v0) – die Angaben auf der Packung gelten für die Messlauflänge des Herstellers.",
     "Kürzere Läufe (z. B. 51 cm statt 60 cm) kosten je nach Kaliber grob 10–25 m/s v0."
    ] },
  { "titel": "Außenballistik", "kurz": "Flugbahn, Luftwiderstand, Wind",
    "punkte": [
     "Das Geschoss fällt ab der Mündung – die Laufachse zeigt deshalb leicht nach oben, die Flugbahn schneidet die Visierlinie zweimal.",
     "Der ballistische Koeffizient (BC) beschreibt, wie gut ein Geschoss den Luftwiderstand überwindet. Je höher, desto flacher die Bahn und desto weniger Windabdrift.",
     "Kalte, dichte Luft bremst stärker als warme – im Winter liegt der Treffpunkt auf weite Entfernung etwas tiefer.",
     "Seitenwind von 3 m/s (spürbar im Gesicht) verlegt ein .308-Geschoss auf 200 m bereits um rund 7–8 cm."
    ] },
  { "titel": "Günstigste Einschießentfernung (GEE)", "kurz": "Fleckschuss ohne Haltepunktwechsel",
    "punkte": [
     "Die Büchse wird so eingeschossen, dass die Flugbahn nie mehr als 4 cm über der Visierlinie liegt.",
     "Auf 100 m sitzt der Treffer dann etwa 4 cm hoch; bis zur GEE (je nach Kaliber ca. 160–200 m) kann ohne Haltepunktverlegung auf das Blatt gehalten werden.",
     "Der Rechner oben ermittelt die GEE für die eingestellte Laborierung – mit dem Knopf „GEE“ wird sie übernommen."
    ] },
  { "titel": "Fleck oder Weite einschießen", "kurz": "100 m, 200 m, 300 m – was passt?",
    "punkte": [
     "Fleck auf 100 m: Treffpunkt = Haltepunkt auf 100 m. Ideal für Drückjagd und Ansitz auf kurze Entfernung; weiter draußen muss man höher halten.",
     "Weite auf 200 m: Die Flugbahn liegt dazwischen deutlich über der Visierlinie (je nach Kaliber 4–7 cm auf 100 m) – für Feld- und Wiesenreviere mit weiten Schüssen.",
     "Weite auf 300 m: Nur mit sehr rasanten Patronen sinnvoll; der Hochschuss auf 100–200 m beträgt dann oft 10 cm und mehr – Gefahr eines zu hohen Treffers auf kurze Entfernung.",
     "Wer mit Absehenschnellverstellung (ASV/BDC) arbeitet, schießt auf Fleck 100 m ein und dreht für weite Schüsse den Turm – dafür gibt es unten den „Rechner“."
    ] },
  { "titel": "Zielballistik (Endballistik)", "kurz": "Wirkung im Wildkörper",
    "punkte": [
     "Entscheidend für schnelle Tötung sind Energieabgabe, Aufpilzen bzw. Splitterabgabe und ein Ausschuss für die Schweißfährte.",
     "Deformationsgeschosse (bleifrei meist Kupfer/Messing) pilzen auf und behalten ihre Masse – wenig Wildbretentwertung, sicherer Ausschuss.",
     "Teilzerleger geben Splitter ab und wirken schlagartig, entwerten aber mehr Wildbret.",
     "Bleifreie Geschosse brauchen eine Mindestgeschwindigkeit im Ziel (oft 550–600 m/s), damit sie sicher aufpilzen – Herstellerangabe beachten."
    ] },
  { "titel": "Schießen bergauf und bergab", "kurz": "Schusswinkel und Hochsitz",
    "punkte": [
     "Für den Geschossfall zählt nur die waagerechte Entfernung. Bei steilem Schuss – egal ob bergauf oder bergab – trifft man daher eher hoch.",
     "Faustregel (Rifleman’s Rule): waagerechte Entfernung = Schrägentfernung × cos(Schusswinkel). Vom normalen Hochsitz auf jagdliche Entfernungen vernachlässigbar."
    ] },
  { "titel": "Kugelfang und Gefährdungsbereich", "kurz": "Sicherheit geht vor",
    "punkte": [
     "Nur schießen, wenn ein natürlicher Kugelfang (gewachsener Boden) hinter dem Stück liegt – nie gegen den Horizont.",
     "Büchsengeschosse können mehrere Kilometer weit fliegen; bleifreie Deformationsgeschosse prallen auf hartem Untergrund leichter ab.",
     "Nicht auf Wasserflächen, gefrorenen Boden oder Steine schießen."
    ] }
 ],
 "recht": [
  { "titel": "Schalenwild (außer Rehwild)", "text": "Mindestkaliber 6,5 mm und Auftreffenergie auf 100 m (E100) von mindestens 2.000 Joule.", "wo": "§ 19 Abs. 1 Nr. 2 b BJagdG" },
  { "titel": "Rehwild", "text": "Auftreffenergie auf 200 m (E200) von mindestens 1.000 Joule.", "wo": "§ 19 Abs. 1 Nr. 2 a BJagdG" },
  { "titel": "Bleifrei in Schleswig-Holstein", "text": "Bei der Jagd auf Wild – nicht nur Schalenwild – sind in Schleswig-Holstein seit 1.4.2015 Büchsengeschosse mit Blei verboten.", "wo": "§ 29 Abs. 5 Nr. 2 LJagdG SH" },
  { "titel": "Waidgerechtigkeit", "text": "Unabhängig von Grenzwerten: nur auf Entfernungen schießen, auf die man sicher trifft, und Kaliber und Geschoss passend zur Wildart wählen.", "wo": "§ 1 Abs. 3 BJagdG" }
 ],
 "quellen": [
  { "name": "Bundesjagdgesetz § 19", "url": "https://www.gesetze-im-internet.de/bjagdg/__19.html" },
  { "name": "DEVA – Deutsche Versuchs- und Prüf-Anstalt für Jagd- und Sportwaffen", "url": "https://www.deva-institut.de/" },
  { "name": "Landesjagdverband Schleswig-Holstein", "url": "https://ljv-sh.de/" }
 ]
};
