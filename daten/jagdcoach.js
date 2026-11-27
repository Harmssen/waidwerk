/* Jagdcoach Club – Merkblätter, Checklisten und Muster (PDF, liegen in dokumente/jagdcoach/).
   Private Site eines Club-Mitglieds: die PDFs gehen in die Online-Version/App mit (portabel_bauen.py)
   und sind in der Tablet-Einzeldatei eingebettet (window.JC_PDF, tablet_bauen.py).
   "lokal": false würde nur die Inhaltsübersicht ohne PDF-Links zeigen. */
window.JAGDCOACH = {
  "stand": "2026-11-27",
  "lokal": true,
  "quelle": "Jagdcoach Club",
  "ordner": "dokumente/jagdcoach/",
  "gruppen": [
    { "id": "treib", "titel": "Treibjagd · Basics", "sub": "Flinte, Niederwild, Gesellschaftsjagd – Blatt für Blatt", "farbe": "#A0CE4E" },
    { "id": "druck", "titel": "Drückjagd · Jungjäger-Serie", "sub": "Büchse, Schalenwild – Teil 1 bis 6 in der Reihenfolge des Jagdtags", "farbe": "#E7A33C" },
    { "id": "spick", "titel": "Spickzettel & Merkblätter", "sub": "Zum Ausdrucken und Mitnehmen auf den Stand", "farbe": "#5BA9D6" },
    { "id": "recht", "titel": "Recht, Verträge & Reisen", "sub": "Muster, Formulare, Waffe im Ausland", "farbe": "#C95D63" }
  ],
  "dokumente": [
    { "g": "treib", "nr": "Blatt 02", "titel": "Vorbereitung & Packliste", "seiten": 1, "datei": "Treibjagd-Basics_02_Vorbereitung-und-Packliste.pdf",
      "kurz": "Am Vorabend packen: Papiere, Ausrüstung, Kleidung – damit morgens nichts fehlt.", "phase": "Vorher", "tags": "packliste papiere jagdschein waffenbesitzkarte kleidung" },
    { "g": "treib", "nr": "Blatt 03", "titel": "Ankunft & Begrüßung", "seiten": 1, "datei": "Treibjagd-Basics_03_Ankunft-und-Begruessung.pdf",
      "kurz": "Vom Parkplatz bis zum ersten Treiben: 15 Minuten früher da, Sicherheitsbelehrung gilt für alle.", "phase": "Vorher", "tags": "ankunft begrüßung belehrung treffpunkt" },
    { "g": "treib", "nr": "Blatt 04", "titel": "Sicher mit der Flinte", "seiten": 1, "datei": "Treibjagd-Basics_04_Sicher-mit-der-Flinte.pdf",
      "kurz": "Laden erst am Platz, entladen sofort nach dem Treiben – und wie die Flinte getragen wird.", "phase": "Auf der Jagd", "tags": "flinte laden entladen sicherheit tragen" },
    { "g": "treib", "nr": "Blatt 05", "titel": "In der Linie & am Stand", "seiten": 1, "datei": "Treibjagd-Basics_05_In-der-Linie-und-am-Stand.pdf",
      "kurz": "Immer wissen, wo Nachbarn, Treiber und Hunde sind – richtig und gefährlich im Vergleich.", "phase": "Auf der Jagd", "tags": "linie stand treiber hunde nachbar abstand" },
    { "g": "treib", "nr": "Blatt 06", "titel": "Wann darf ich schießen?", "seiten": 1, "datei": "Treibjagd-Basics_06_Wann-darf-ich-schiessen.pdf",
      "kurz": "Der 5-Punkte-Check vor jedem Schuss: Treiben läuft, freigegeben, Schussrichtung frei.", "phase": "Auf der Jagd", "tags": "schuss freigabe ansprechen schussrichtung check" },
    { "g": "treib", "nr": "Blatt 07", "titel": "Jagdsignale", "seiten": 1, "datei": "Treibjagd-Basics_07_Jagdsignale.pdf",
      "kurz": "Drei Sicherheitssignale im Schlaf kennen – beginnend mit dem Anblasen des Treibens.", "phase": "Auf der Jagd", "tags": "signale horn anblasen abblasen treiben" },
    { "g": "treib", "nr": "Blatt 08", "titel": "Nach dem Schuss", "seiten": 1, "datei": "Treibjagd-Basics_08_Nach-dem-Schuss.pdf",
      "kurz": "Markieren, melden, Hunde arbeiten lassen – nicht selbst losrennen und die Linie aufreißen.", "phase": "Auf der Jagd", "tags": "schuss markieren melden hunde nachsuche" },
    { "g": "treib", "nr": "Blatt 09", "titel": "Strecke & Schüsseltreiben", "seiten": 1, "datei": "Treibjagd-Basics_09_Strecke-und-Schuesseltreiben.pdf",
      "kurz": "So wird die Strecke gelegt und verblasen – Respekt vor Wild und Helfern.", "phase": "Nachher", "tags": "strecke verblasen schüsseltreiben brauchtum" },
    { "g": "treib", "nr": "Formen 4/4", "titel": "Das Vorstehtreiben", "seiten": 1, "datei": "Treibjagd-Formen_4_Vorstehtreiben.pdf",
      "kurz": "Treiber drücken eine Deckung auf stehende Vorstehschützen zu – Aufstellung und Gefahrenbereiche.", "phase": "Auf der Jagd", "tags": "vorstehtreiben treibjagd form aufstellung remise" },

    { "g": "druck", "nr": "Teil 1", "titel": "Drückjagd & Treibjagd – der Leitfaden", "seiten": 3, "datei": "Drueckjagd_Leitfaden_Jungjaeger.pdf",
      "kurz": "Von der Einladung bis zum geladenen Gewehr auf dem Stand: Checklisten zum Abhaken.", "phase": "Vorher", "tags": "leitfaden einladung ausrüstung kleidung begrüßung jungjäger" },
    { "g": "druck", "nr": "Teil 2", "titel": "Auf dem Drückjagdstand", "seiten": 2, "datei": "Drueckjagdstand_Verhalten.pdf",
      "kurz": "Sicher auf den Stand, Gefahrenbereiche, wann laden – und leise bleiben, bis das Wild anwechselt.", "phase": "Auf der Jagd", "tags": "stand ansitz gefahrenbereich laden leise hochsitz" },
    { "g": "druck", "nr": "Teil 3", "titel": "Die Schussabgabe", "seiten": 2, "datei": "Schussabgabe.pdf",
      "kurz": "Wann schießen, worauf vorher achten, Anschuss dokumentieren, wenn unklar ist, ob das Stück liegt.", "phase": "Auf der Jagd", "tags": "schuss ansprechen anschuss dokumentieren zeichnen" },
    { "g": "druck", "nr": "Teil 4", "titel": "Gefahren bei Gesellschaftsjagden", "seiten": 2, "datei": "Gefahren_Druckjagd.pdf",
      "kurz": "Abpraller, krankes Wild, verletzte Hunde und das Abfangen.", "phase": "Auf der Jagd", "tags": "gefahr abpraller hund krankes wild abfangen sicherheit" },
    { "g": "druck", "nr": "Teil 5", "titel": "Nach der Jagd & Streckenplatz", "seiten": 2, "datei": "Nach_der_Jagd_und_Streckenplatz.pdf",
      "kurz": "Schüsse ehrlich melden, am Streckenplatz mit anpacken, Strecke verblasen, Jagdkönig.", "phase": "Nachher", "tags": "strecke streckenplatz aufbrechen verblasen jagdkönig melden" },
    { "g": "druck", "nr": "Teil 6", "titel": "Das Jagdgericht", "seiten": 1, "datei": "Jagdgericht.pdf",
      "kurz": "Was dort verhandelt wird – und was nicht. Brauchtum für den ersten Besuch.", "phase": "Nachher", "tags": "jagdgericht brauchtum verhandlung schüsseltreiben" },

    { "g": "spick", "nr": "Spickzettel", "titel": "Check am Stand – alles bekommen?", "seiten": 1, "datei": "Check-am-Stand-Jagdcoach.pdf",
      "kurz": "Hat der Jagdleiter bzw. Ansteller alles gesagt, gezeigt und übergeben? Standnummer, Freigaben, Notfall.", "phase": "Auf der Jagd", "tags": "check stand standnummer freigabe checkliste einweisung" },
    { "g": "spick", "nr": "Merkblatt", "titel": "Erstes Mal Ansteller?", "seiten": 2, "datei": "Ansteller-Merkblatt-Jagdcoach.pdf",
      "kurz": "Was Ansteller vor, während und nach dem Treiben erledigen: Stände ablaufen, Schützen einweisen, abholen.", "phase": "Auf der Jagd", "tags": "ansteller einweisen stände abholen jagdleiter" },

    { "g": "recht", "nr": "Muster", "titel": "Begehungsschein Schleswig-Holstein", "seiten": 4, "datei": "Muster_Begehungsschein_Schleswig-Holstein.pdf",
      "kurz": "Praxisnaher Vertragsentwurf für Reh-, Dam-, Rot- und Schwarzwild. Kein amtliches Formular, keine Rechtsberatung.", "phase": "Recht", "tags": "begehungsschein jagderlaubnis vertrag schleswig-holstein muster reh rot dam schwarz" },
    { "g": "recht", "nr": "Muster", "titel": "Jagderlaubnisvertrag (entgeltlich)", "seiten": 3, "datei": "Muster_Jagderlaubnisvertrag.pdf",
      "kurz": "Rechtlicher Leitfaden zur Wildbretübernahme plus Übersicht zum entgeltlichen Begehungsschein.", "phase": "Recht", "tags": "jagderlaubnis vertrag entgeltlich wildbret aneignung muster" },
    { "g": "recht", "nr": "Leitfaden", "titel": "Mit der Waffe zur Jagd ins Ausland", "seiten": 2, "datei": "Feuerwaffenpass_Jagdcoach.pdf",
      "kurz": "Der Europäische Feuerwaffenpass: was er ist, wie man ihn bekommt, was vor jeder Jagdreise zu beachten ist.", "phase": "Recht", "tags": "feuerwaffenpass ausland jagdreise waffe europa" }
  ]
};
