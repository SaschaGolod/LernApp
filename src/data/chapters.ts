export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  flashcards: Flashcard[];
  quizQuestions: QuizQuestion[];
}

export const chapters: Chapter[] = [
  {
    id: "nachhaltigkeit",
    title: "Kapitel 2: Nachhaltigkeit in der Produktentwicklung",
    description: "Grundlagen, Kreislaufwirtschaft, Bewertung (LCA), regulatorische Rahmenbedingungen, Gestaltungsrichtlinien",
    flashcards: [
      {
        id: "nh1",
        question: "Was bedeutet Nachhaltigkeit? (Definition BMZ)",
        answer: "Die Bedürfnisse der Gegenwart so zu befriedigen, dass die Möglichkeiten zukünftiger Generationen nicht eingeschränkt werden.",
        category: "Definition"
      },
      {
        id: "nh2",
        question: "Welche drei klassischen Dimensionen der Nachhaltigkeit gibt es?",
        answer: "Ökologie (Erhalt der Umwelt), Ökonomie (nachhaltiges Wirtschaften), Soziales (lebenswerte Gesellschaft). Plus vierte Dimension: Kultur/Mensch.",
        category: "Dimensionen"
      },
      {
        id: "nh3",
        question: "Was umfasst die ökologische Dimension?",
        answer: "Kein Raubbau an der Umwelt, Schonung von Ressourcen, Biodiversität, Reduktion von Emissionen, regenerative Energie.",
        category: "Dimensionen"
      },
      {
        id: "nh4",
        question: "Was sind die drei Prinzipien der Kreislaufwirtschaft (Ellen MacArthur)?",
        answer: "1. Abfall und Verschmutzung eliminieren, 2. Produkte und Materialien bei höchstmöglichem Wert in Umlauf halten, 3. Natur regenerieren.",
        category: "Kreislaufwirtschaft"
      },
      {
        id: "nh5",
        question: "Welche Circular Strategies gibt es?",
        answer: "Narrowing (effiziente Ressourcennutzung), Regenerating (erneuerbare Materialien), Slowing (Lebenszyklus verlängern), Closing (Lücke Nachnutzung-Produktion schließen), Informing (IT-Unterstützung).",
        category: "Kreislaufwirtschaft"
      },
      {
        id: "nh6",
        question: "Welche Arten von Obsoleszenz gibt es?",
        answer: "Funktionale (gestiegene Anforderungen), Emotionale/Psychologische (Kundenwunsch nach Neuem), Technologische (externe Entwicklungen), Ökonomische (unwirtschaftliche Reparaturkosten).",
        category: "Obsoleszenz"
      },
      {
        id: "nh7",
        question: "Warum ist längste Lebensdauer nicht immer die nachhaltigste Lösung?",
        answer: "Initiale Emissionen (Herstellung) vs. kontinuierliche Emissionen in Nutzungsphase. Ablösung durch effizienteres Produkt kann insgesamt weniger Emissionen bedeuten.",
        category: "Lebensdauer"
      },
      {
        id: "nh8",
        question: "Welche Bewertungsmethoden gibt es für Nachhaltigkeit?",
        answer: "LCA (Life Cycle Assessment - Umwelt), LCC (Life Cycle Costing - Ökonomie), SLCA (Social LCA - Soziales), PROSA (Product Sustainability Assessment - integriert).",
        category: "Bewertung"
      },
      {
        id: "nh9",
        question: "Was sind die Bestandteile einer Ökobilanz (ISO 14040/44)?",
        answer: "Rahmen & Zielsetzung, Aufstellung Sachbilanzen, Wirkungsabschätzungen, Interpretation (Vollständigkeits- und Sensitivitätsprüfung, Schlussfolgerungen).",
        category: "LCA"
      },
      {
        id: "nh10",
        question: "Welche Systemgrenzen gibt es bei Ökobilanzen?",
        answer: "Cradle-to-Gate (Rohstoff bis Produktion), Cradle-to-Grave (Rohstoff bis End-of-Life), Cradle-to-Cradle (geschlossene Kreisläufe).",
        category: "LCA"
      },
      {
        id: "nh11",
        question: "Was ist die Sachbilanz?",
        answer: "Aufstellung/Modellierung aller Stoff- und Energieflüsse des Betrachtungsrahmens. Inputs (Stoffe, Energie, Services), Outputs (Emissionen, Abfälle). Softwarebasiert mit aggregierten Datenbankwerten.",
        category: "LCA"
      },
      {
        id: "nh12",
        question: "Welche GWP-Werte haben CH4 und N2O im Vergleich zu CO2?",
        answer: "Methan (CH4): 28x CO2. Lachgas (N2O): 265x CO2. Global Warming Potential.",
        category: "Wirkungsabschätzung"
      },
      {
        id: "nh13",
        question: "Was sind die Luttropp Ten Golden Rules? (Auswahl)",
        answer: "1. Toxizität vermeiden, 2. Ressourcen minimieren, 3. Gewicht reduzieren, 4. Energie in Nutzung minimieren, 5. Reparierbarkeit, 6. Lebensdauer, 7. Wartung, 8. Information/Modularisierung, 9. Materialreinheit, 10. Struktur/Verbindungen.",
        category: "Strategien"
      },
      {
        id: "nh14",
        question: "Was ist die Circular Product Design Maturity Matrix?",
        answer: "Instrument zur Bewertung des Reifegrads der CE-Anwendung im Produktentwicklungsprozess. Dimensionen: Design for X (Narrowing, Regenerating, Slowing, Closing, Informing), Managerial Aspects. Reifegrade 1-5.",
        category: "Strategien"
      },
      {
        id: "nh15",
        question: "Welche regulatorischen Rahmenbedingungen gibt es?",
        answer: "European Green Deal, Ökodesign-Verordnung, Right-to-Repair, Lieferkettengesetz, CSRD (Corporate Sustainability Reporting), Net-Zero Industry Act. GHG-Protocol für Carbon Accounting.",
        category: "Regulatorik"
      },
      {
        id: "nh16",
        question: "Was besagt SDG 12?",
        answer: "Nachhaltige Konsum- und Produktionsmuster. Unterziele: Ressourceneffizienz, Abfallreduzierung, Recyclingquote, Nachhaltigkeitsberichte, nachhaltige Beschaffung.",
        category: "SDG"
      },
      {
        id: "nh17",
        question: "Welche R-Strategien der Kreislaufwirtschaft gibt es?",
        answer: "Repair (Reparierbarkeit), Resell/Reuse (Wiederverwendung), Refurbish (Aufarbeitung), Remanufacture (Aufbereitung), Recycle (Stoffliches Recycling).",
        category: "Kreislaufwirtschaft"
      },
      {
        id: "nh18",
        question: "Warum ist die Produktentwicklung zentral für Nachhaltigkeit?",
        answer: "VDI ZRE: Festlegung von ca. 80% der Umweltauswirkungen durch Produktentwicklung. Produktentwicklung als Enabler für Kreislaufwirtschaft.",
        category: "Produktentwicklung"
      }
    ],
    quizQuestions: [
      {
        id: "nhq1",
        question: "Welche Dimension gehört NICHT zu den klassischen drei der Nachhaltigkeit?",
        options: ["Ökologie", "Ökonomie", "Soziales", "Kultur"],
        correctIndex: 3,
        explanation: "Die drei klassischen Dimensionen sind Ökologie (Umweltschutz), Ökonomie (nachhaltiges Wirtschaften) und Soziales (lebenswerte Gesellschaft). Kultur/Mensch ist die vierte Dimension – umfasst Werte, Lebensstile, Konsumentenbewusstsein. Sie ergänzt das klassische Drei-Säulen-Modell."
      },
      {
        id: "nhq2",
        question: "Welches Prinzip der Kreislaufwirtschaft bedeutet 'Produkte bei höchstem Wert halten'?",
        options: ["Abfall eliminieren", "Produkte und Materialien in Umlauf halten", "Natur regenerieren", "Ressourcen schonen"],
        correctIndex: 1,
        explanation: "Prinzip 2 (Ellen MacArthur): Produkte und Materialien bei höchstmöglichem Wert in Umlauf halten – durch Wiederverwendung, Reparatur, Refurbishing, Remanufacturing. Prinzip 1 = Abfall eliminieren. Prinzip 3 = Natur regenerieren. 'Ressourcen schonen' ist eher Narrowing (Effizienz)."
      },
      {
        id: "nhq3",
        question: "Welche Obsoleszenz entsteht durch unwirtschaftliche Reparaturkosten?",
        options: ["Funktionale", "Emotionale", "Technologische", "Ökonomische"],
        correctIndex: 3,
        explanation: "Ökonomische Obsoleszenz: unwirtschaftliche Betriebs-, Reparatur- und Instandhaltungskosten – Reparatur lohnt sich nicht mehr. Funktionale = gestiegene Anforderungen. Emotionale = Kundenwunsch nach Neuem. Technologische = externe Entwicklungen machen Produkt überholt."
      },
      {
        id: "nhq4",
        question: "Welche Systemgrenze umfasst alle Lebensphasen bis End-of-Life?",
        options: ["Cradle-to-Gate", "Cradle-to-Grave", "Gate-to-Gate", "Cradle-to-Cradle"],
        correctIndex: 1,
        explanation: "Cradle-to-Grave: von Rohstoff bis End-of-Life – umfasst Rohstoffgewinnung, Produktion, Nutzung, Entsorgung. Cradle-to-Gate = nur bis Produktion. Cradle-to-Cradle = geschlossene Kreisläufe. Gate-to-Gate = nur Produktionsphase."
      },
      {
        id: "nhq5",
        question: "Welche Methode bewertet die ökologischen Aspekte eines Produkts?",
        options: ["LCC", "LCA", "SLCA", "PROSA"],
        correctIndex: 1,
        explanation: "LCA (Life Cycle Assessment): Ökobilanz, bewertet Umweltauswirkungen über den Lebenszyklus (GWP, Ressourcen etc.). LCC = Life Cycle Costing (ökonomisch). SLCA = Social LCA (soziale Aspekte). PROSA = integrierte Bewertung aller drei Dimensionen."
      },
      {
        id: "nhq6",
        question: "Welche Circular Strategy verlängert den Lebenszyklus?",
        options: ["Narrowing", "Regenerating", "Slowing", "Closing"],
        correctIndex: 2,
        explanation: "Slowing: Lebenszyklus verlängern – z.B. durch Reparatur, Wiederverwendung, Langlebigkeit. Narrowing = effizientere Ressourcennutzung. Regenerating = erneuerbare Materialien. Closing = Lücke zwischen Nachnutzung und Produktion schließen (Recycling)."
      },
      {
        id: "nhq7",
        question: "Wie viel CO2-Äquivalent hat Methan (CH4) im Vergleich zu CO2?",
        options: ["1x", "28x", "265x", "100x"],
        correctIndex: 1,
        explanation: "CH4 (Methan) hat ein GWP (Global Warming Potential) von 28 – über 100 Jahre 28x stärker als CO2. N2O (Lachgas) hat 265x. GWP-Werte werden in der Wirkungsabschätzung von Ökobilanzen verwendet."
      },
      {
        id: "nhq8",
        question: "Welcher Anteil der Umweltauswirkungen wird durch die Produktentwicklung festgelegt?",
        options: ["20%", "50%", "80%", "100%"],
        correctIndex: 2,
        explanation: "VDI ZRE: Ca. 80% der Umweltauswirkungen werden durch Produktentwicklung festgelegt – Materialwahl, Konstruktion, Lebensdauer etc. Produktentwicklung ist zentraler Hebel für Kreislaufwirtschaft und Nachhaltigkeit."
      },
      {
        id: "nhq9",
        question: "Was ist das GHG-Protocol?",
        options: ["EU-Verordnung", "Private Initiative für Carbon Accounting", "LCA-Software", "Kreislaufwirtschaftsgesetz"],
        correctIndex: 1,
        explanation: "GHG-Protocol: Private Initiative von WRI (World Resources Institute) und WBCSD, definiert internationale Standards für Carbon Accounting (Scope 1–3). Kein Gesetz – wird aber von vielen Unternehmen und der EU als Referenz genutzt."
      },
      {
        id: "nhq10",
        question: "Welche Luttropp-Regel fördert Reparierbarkeit und Upgradebarkeit?",
        options: ["Regel 3 Gewicht", "Regel 5 Reparierbarkeit", "Regel 9 Materialreinheit", "Regel 10 Struktur"],
        correctIndex: 1,
        explanation: "Regel 5: Förderung von Reparierbarkeit und Upgradebarkeit – besonders bei systemabhängigen Produkten. Regel 3 = Gewicht reduzieren. Regel 9 = Materialreinheit (Recycling). Regel 10 = Struktur/Verbindungen für Demontage."
      }
    ]
  },
  {
    id: "einfuehrung-moderation",
    title: "Kapitel 1: Einführung + Moderationstechniken",
    description: "MPE-Grundlagen, Rollenkonzept, Moderation vs. Gruppenleitung, Moderationsmethoden und Werkzeuge",
    flashcards: [
      {
        id: "e1",
        question: "Was ist Moderation? (Definition)",
        answer: "Moderation ist eine Methode, mit der eine Aufgabe zielgerichtet, effizient, eigenverantwortlich, praxisnah, gemeinsam und in zeitlichem Rahmen gelöst werden kann.",
        category: "Grundlagen"
      },
      {
        id: "e2",
        question: "Warum wenden wir Moderation an?",
        answer: "Kompetenz und Wissen aller Teilnehmer wird genutzt; hierarchiefreies Arbeiten; Störungen und Konflikte können versachlicht werden; Ergebnisse können von allen Gruppenmitgliedern getragen werden.",
        category: "Grundlagen"
      },
      {
        id: "e3",
        question: "Ab wann wird ein Moderator benötigt?",
        answer: "Wenn gemeinsame Ergebnisse gleichberechtigt erarbeitet werden sollen. Explizite Moderation ab ca. 5 Personen. Implizite Moderation: ohne klare Rollenverteilung, oft unklar wer der Spielleiter ist.",
        category: "Grundlagen"
      },
      {
        id: "e4",
        question: "Was sollte der Moderator dabei haben?",
        answer: "Etwas zum Schreiben: Notizblock, Tafel, Flipchart oder Metaplanwand. Der Moderator sollte die Diskussion visualisieren und stichwortartig zusammenfassen.",
        category: "Grundlagen"
      },
      {
        id: "e5",
        question: "Was ist der zentrale Unterschied zwischen Moderation und Gruppenleitung?",
        answer: "Leitung = Ergebnisorientierung, inhaltlich beteiligt. Moderation = Prozessorientierung, inhaltlich unparteiisch. Der Moderator fördert den Willensbildungsprozess, die Gruppenleitung will ihren Willen durchsetzen.",
        category: "Abgrenzung"
      },
      {
        id: "e6",
        question: "Wer ist inhaltlich beteiligt – Moderator oder Gruppenleitung?",
        answer: "Gruppenleitung. Der Moderator ist inhaltlich unparteiisch und hat inhaltlich keine eigene Meinung.",
        category: "Abgrenzung"
      },
      {
        id: "e7",
        question: "Wie werden Störungen bei Moderation vs. Gruppenleitung behandelt?",
        answer: "Moderation: Störungen werden in die Gruppe zurückgespiegelt und gemeinsam gelöst. Gruppenleitung: Störungen werden autoritär beseitigt.",
        category: "Abgrenzung"
      },
      {
        id: "e8",
        question: "Wer protokolliert simultan und sichtbar für alle?",
        answer: "Der Moderator. Die Gruppenleitung delegiert oft das Protokoll oder macht ein nachträgliches Protokoll.",
        category: "Abgrenzung"
      },
      {
        id: "e9",
        question: "Welche drei Phasen hat die Moderation?",
        answer: "1. Vorbereitung und Start (Atmosphäre, Thema, Ziel, Zeitlicher Rahmen), 2. Kernzeit der Diskussion (Beiträge ordnen, Ergebnisse dokumentieren, Zeitmanagement, Spielregeln, Neutralität), 3. Schlussphase (Schluss- und Landepunkte, Ergebnissicherung, emotionaler Schlusspunkt).",
        category: "Aufgaben"
      },
      {
        id: "e10",
        question: "Was sind die Aufgaben des Moderators vor der Moderation?",
        answer: "Rahmenbedingungen/Atmosphäre (Sitzordnung), Thema als Arbeitsfrage aufschreiben, Ziel klären (Meinungsaustausch oder konkrete Ergebnisse, ggf. WWW-Tabelle), Zeitlichen Rahmen mit der Gruppe festlegen.",
        category: "Aufgaben"
      },
      {
        id: "e11",
        question: "Was ist die WWW-Tabelle?",
        answer: "Maßnahmenplan: Wer macht Was bis Wann. Wird bei Zielvorgaben vorbereitet. Grundlage für erfolgreiches Projektmanagement.",
        category: "Aufgaben"
      },
      {
        id: "e12",
        question: "Welche Aufgaben hat der Moderator während der Kernzeit?",
        answer: "Beiträge zusammenfassen und ordnen, Ergebnisse dokumentieren, Zeitmanagement (5 min vor Ende auf Zeitproblem hinweisen), Spielregeln durchsetzen, Neutralität wahren (keine eigenen inhaltlichen Beiträge).",
        category: "Aufgaben"
      },
      {
        id: "e13",
        question: "Warum muss der Moderator neutral sein?",
        answer: "Wenn der Moderator der Gruppe seine Ideen aufdrängt, gibt es meist heftigen Widerstand. Wer inhaltlich mitarbeiten will, sollte jemand anderes moderieren.",
        category: "Aufgaben"
      },
      {
        id: "e14",
        question: "Was sind die Aufgaben zum Ende der Diskussion?",
        answer: "Schluss- und Landepunkte anpeilen, Ergebnissicherung (Ergebnisse festhalten, offene Punkte dokumentieren, Folgeaktivitäten), emotionalen Schlusspunkt setzen (würdigen, bedanken, Blitzlicht als Feedback).",
        category: "Aufgaben"
      },
      {
        id: "e15",
        question: "Problem: Gruppe hat den roten Faden verloren – Lösungsansätze?",
        answer: "Abfrage ob Ausgangsfrage und Ziel noch aktuell; Neustart mit neuer Zielrichtung; Rednerliste, Redezeitbegrenzung einführen.",
        category: "Probleme"
      },
      {
        id: "e16",
        question: "Problem: Teilnehmer streiten sich inhaltlich – Lösungsansätze?",
        answer: "Gegensätze offen ansprechen, stichpunktartig festhalten, strittige Punkte markieren (dokumentiert, kann später ausdiskutiert werden). Schwieriger bei persönlichen Konflikten.",
        category: "Probleme"
      },
      {
        id: "e17",
        question: "Problem: Persönliche Angriffe – Lösungsansätze?",
        answer: "Sofort unterbinden, zur Sachebene zurückkommen, Wahrung der Form einfordern. Keine psychologischen Kommentare – ggf. inhaltliche Zusammenfassung zur Deeskalation und zum nächsten Thema überleiten.",
        category: "Probleme"
      },
      {
        id: "e18",
        question: "Wie geht man mit dem Scheitern einer Diskussion um?",
        answer: "Gemeinsam feststellen, Ursachen und Lösungen suchen. Scheitern kann Basis für Neuanfang mit präziserem Thema sein. Visualisieren, Fragen stellen (Was haben wir erarbeitet? Wie weitermachen?), Feedback einholen.",
        category: "Probleme"
      },
      {
        id: "e19",
        question: "Wofür eignet sich das Blitzlicht?",
        answer: "Einfangen momentaner Stimmungen, Wünsche, Gefühle. Jeder äußert sich kurz (1-3 Sätze), keine Diskussion. Geeignet als Feedback, bei spannungsgeladenen Diskussionen für Ruhe sorgen.",
        category: "Werkzeuge"
      },
      {
        id: "e20",
        question: "Was ist das Karten-Antwort-Verfahren?",
        answer: "Anonymes schriftliches Sammeln und gemeinschaftliches Sortieren von Ideen auf Karten. Vorteile: jeder kann gleichberechtigt einbringen, viele Ideen. Nachteil: stark formalisiert, mind. 30 min.",
        category: "Werkzeuge"
      },
      {
        id: "e21",
        question: "Was ist das Zuruf-Antwort-Verfahren?",
        answer: "Ideen werden Schreibern zugerufen und gleich an Pinnwand/Flipchart notiert. Kaum Einführung nötig, Teilnehmer regen sich gegenseitig an. Nachteil: Dominanz einzelner möglich – Regeln aufstellen!",
        category: "Werkzeuge"
      },
      {
        id: "e22",
        question: "Was ist der Fragenspeicher?",
        answer: "Fragen, die während der Moderation auftauchen und die Diskussion sprengen würden, werden auf einem Flipchart notiert. Teilnehmer fühlen sich nicht vergessen. Muss später bearbeitet werden!",
        category: "Werkzeuge"
      },
      {
        id: "e23",
        question: "Was ist die Pro-Kontra-Diskussion?",
        answer: "Teilgruppen übernehmen Pro- bzw. Kontra-Einstellung zu einem Thema. Teilnehmer müssen sich in andere Meinungen hineinversetzen, auch vergessene Gegenargumente werden gesammelt. Mind. 30 min.",
        category: "Werkzeuge"
      },
      {
        id: "e24",
        question: "Wann ist Leitung vs. Moderation eher geeignet?",
        answer: "Leitung: bei begrenzter Zeit und geringem Gestaltungsspielraum. Moderation: bei offenen Fragestellungen und partizipativer Gruppenarbeit, wenn mehr Zeit und Gestaltungsspielraum vorhanden.",
        category: "Zusammenfassung"
      },
      {
        id: "e25",
        question: "Was sind die Top 3 Tipps für gute Moderation?",
        answer: "1. Präzise Aufgabenbeschreibung mit klaren Aufträgen, 2. Gute Vorbereitung (Abstimmung mit Dozierenden, Gruppeneinteilung vorher), 3. Visualisieren – gemeinsame Ergebnisse transparent dokumentieren.",
        category: "Tipps"
      },
      {
        id: "e26",
        question: "Welche Rollen gibt es im MPE-Rollenkonzept?",
        answer: "1. Moderation (2 Studierende) – moderieren Veranstaltung, 2. Feedback (1 Student) – Feedbackrunde, Evaluationsbogen, Dokumentation, 3. Moderation + Präsentation in Übungsgruppen – moderieren und Ergebnisse präsentieren.",
        category: "MPE"
      },
      {
        id: "e27",
        question: "Warum wird der Moderator als Spielleiter bezeichnet?",
        answer: "Er einigt sich mit der Gruppe auf Spielregeln, kümmert sich um deren Einhaltung. Er kann nicht gleichzeitig Spieler, Gegenspieler oder Mitspieler sein – muss neutral bleiben.",
        category: "Aufgaben"
      }
    ],
    quizQuestions: [
      {
        id: "eq1",
        question: "Ab welcher Gruppengröße wird explizite Moderation empfohlen?",
        options: ["3 Personen", "5 Personen", "7 Personen", "10 Personen"],
        correctIndex: 1,
        explanation: "Explizite Moderation ab ca. 5 Personen – wenn gemeinsame Ergebnisse gleichberechtigt erarbeitet werden sollen. Bei weniger: implizite Moderation möglich (ohne klare Rollenverteilung). Bei mehr: Moderation wird zunehmend wichtig für Struktur und Zeitmanagement."
      },
      {
        id: "eq2",
        question: "Wer ist inhaltlich beteiligt und will seinen Willen durchsetzen?",
        options: ["Moderator", "Gruppenleitung", "Beide", "Keiner"],
        correctIndex: 1,
        explanation: "Gruppenleitung: ergebnisorientiert, inhaltlich beteiligt, will ihren Willen durchsetzen. Moderator: prozessorientiert, inhaltlich unparteiisch, fördert den Willensbildungsprozess der Gruppe. Der Moderator darf keine eigene inhaltliche Meinung vertreten."
      },
      {
        id: "eq3",
        question: "Wie werden Störungen bei der Moderation behandelt?",
        options: ["Autoritär beseitigt", "In die Gruppe zurückgespiegelt und gemeinsam gelöst", "Ignoriert", "An die Leitung delegiert"],
        correctIndex: 1,
        explanation: "Moderation: Störungen werden in die Gruppe zurückgespiegelt und gemeinsam gelöst – versachlicht, partizipativ. Gruppenleitung: Störungen werden autoritär beseitigt. Ignorieren oder Delegieren wäre ungeeignet."
      },
      {
        id: "eq4",
        question: "Was bedeutet die WWW-Tabelle?",
        options: ["Wer, Wie, Warum", "Wer macht Was bis Wann", "Was, Wann, Wo", "Werkzeuge, Wege, Wirkung"],
        correctIndex: 1,
        explanation: "WWW = Wer macht Was bis Wann – Maßnahmenplan für die weitere Vorgehensweise. Wird bei Zielvorgaben vorbereitet, Grundlage für Projektmanagement. Die anderen Optionen sind typische Verwechslungen."
      },
      {
        id: "eq5",
        question: "Welche Moderationsmethode eignet sich für anonymes Sammeln vieler Ideen?",
        options: ["Blitzlicht", "Karten-Antwort-Verfahren", "Pro-Kontra", "Zuruf-Antwort"],
        correctIndex: 1,
        explanation: "Karten-Antwort: anonymes schriftliches Sammeln auf Karten, gemeinschaftliches Sortieren. Jeder kann gleichberechtigt einbringen, viele Ideen. Blitzlicht = Stimmungen/Feedback, nicht anonym. Pro-Kontra = Pro/Kontra-Diskussion. Zuruf = mündlich, nicht anonym."
      },
      {
        id: "eq6",
        question: "Wann ist Leitung eher geeignet als Moderation?",
        options: ["Bei offenen Fragestellungen", "Bei begrenzter Zeit und geringem Gestaltungsspielraum", "Bei partizipativer Gruppenarbeit", "Bei großer Gruppe"],
        correctIndex: 1,
        explanation: "Leitung: bei begrenzter Zeit und geringem Gestaltungsspielraum – schnelle Entscheidungen nötig. Moderation: bei offenen Fragestellungen, partizipativer Gruppenarbeit, mehr Zeit und Spielraum. Große Gruppe spricht eher für Moderation."
      },
      {
        id: "eq7",
        question: "Was soll der Moderator 5 Minuten vor Ende der Diskussion tun?",
        options: ["Thema wechseln", "Auf Zeitproblem hinweisen und mit Gruppe Lösung suchen", "Diskussion beenden", "Blitzlicht durchführen"],
        correctIndex: 1,
        explanation: "Zeitmanagement: 5 min vor vereinbartem Ende auf Zeitproblem hinweisen, mit Gruppe Lösung suchen – z.B. überziehen, abbrechen oder priorisieren. Nicht eigenmächtig beenden. Blitzlicht kommt typischerweise am Schluss."
      },
      {
        id: "eq8",
        question: "Welches Werkzeug eignet sich für Feedback und um bei Spannungen Ruhe zu schaffen?",
        options: ["Maßnahmenplan", "Blitzlicht", "Pro-Kontra", "Fragenspeicher"],
        correctIndex: 1,
        explanation: "Blitzlicht: jeder äußert sich kurz (1–3 Sätze), keine Diskussion. Geeignet als Feedback und bei spannungsgeladenen Diskussionen – bringt Ruhe, alle kommen zu Wort. Maßnahmenplan = WWW. Pro-Kontra = kontroverse Diskussion. Fragenspeicher = offene Fragen sammeln."
      },
      {
        id: "eq9",
        question: "Warum darf der Moderator keine eigenen inhaltlichen Beiträge geben?",
        options: ["Es ist in den Regeln verboten", "Es führt zu heftigem Widerstand der Gruppe", "Nur der Dozent darf Inhalte liefern", "Um Zeit zu sparen"],
        correctIndex: 1,
        explanation: "Wenn der Moderator der Gruppe seine Ideen aufdrängt, gibt es meist heftigen Widerstand – die Gruppe fühlt sich manipuliert. Wer inhaltlich mitarbeiten will, sollte jemand anderes moderieren. Neutralität ist zentral für Akzeptanz."
      },
      {
        id: "eq10",
        question: "Was gehört in den Moderationskoffer?",
        options: ["Nur Stifte", "Stifte, Metaplan-Karten, Scheren, Kleber", "Laptop und Beamer", "Protokollvorlagen"],
        correctIndex: 1,
        explanation: "Moderationskoffer: Stifte, Whiteboard-Marker, Metaplan-Karten in verschiedenen Farben, Scheren, Kleber – für Karten-Antwort, Visualisierung, Pinnwand. Laptop/Beamer können ergänzen, sind aber nicht Kern. Protokollvorlagen separat."
      }
    ]
  },
  {
    id: "modularisierung",
    title: "Kapitel 6: Modularisierung",
    description: "Methoden der Produktentwicklung - Grundlagen, Methoden und Lebensphasenmodularisierung",
    flashcards: [
      {
        id: "m1",
        question: "Was ist die Definition der Modulbauweise nach Pahl/Beitz?",
        answer: "Die Modulbauweise beschreibt das Konstruktionsprinzip, Produkte in Module zu gliedern, die untereinander funktional oder physisch entkoppelt sind, während die Komponenten innerhalb der einzelnen Module starke Beziehungen aufweisen. Durch die Kombination der Module wird eine effiziente Bildung von Produktvarianten ermöglicht.",
        category: "Grundlagen"
      },
      {
        id: "m2",
        question: "Welche zwei Eigenschaften der Modularität gibt es?",
        answer: "1. Kombinierbarkeit - Module können zu verschiedenen Produkten kombiniert werden. 2. Kommunale Verwendung - Module können in mehreren Produkten wiederverwendet werden.",
        category: "Grundlagen"
      },
      {
        id: "m3",
        question: "Welche Merkmale ermöglichen die Eigenschaften der Modularität?",
        answer: "Funktionsbindung, Entkopplung, Schnittstellenstandardisierung und Überdimensionierung.",
        category: "Grundlagen"
      },
      {
        id: "m4",
        question: "Was ist der Teufelskreis der Diversifizierungsstrategie?",
        answer: "Individuelle Nachfrage → neue Produktvarianten → erhöhte Komponentenvielfalt → Erhöhung der Komplexität → erhöhte Prozessvielfalt → steigende Stückkosten → sinkende Wettbewerbsfähigkeit. Modulare Produktstrukturen ermöglichen es, diesen Teufelskreis aufzubrechen.",
        category: "Grundlagen"
      },
      {
        id: "m5",
        question: "Welche Megatrends führen zu Herausforderungen für Unternehmen?",
        answer: "Globalisierung, Individualisierung, Technologiekonvergenz und neue Konsummuster. Diese führen zu starkem Kostendruck, individueller Nachfrage und dynamischen Anforderungen.",
        category: "Grundlagen"
      },
      {
        id: "m6",
        question: "Was beschreibt die Produktstruktur?",
        answer: "Die Produktstruktur beschreibt die strukturierte Zusammensetzung eines Produkts aus seinen Komponenten. Baugruppen und Einzelteile bilden Strukturstufen (Produkt → Baugruppe → Teil).",
        category: "Grundlagen"
      },
      {
        id: "m7",
        question: "Was sind Komponenten in der Modularisierung?",
        answer: "Relativer Begriff - bilden die Betrachtungsebene des Modularisierungsprojektes. Abhängig von der Dekomposition kann es Baugruppe(n) oder Bauteil sein.",
        category: "Grundlagen"
      },
      {
        id: "m8",
        question: "Welche Vorteile hat Modularisierung in der Produktentwicklung?",
        answer: "Komplexitätsreduktion, Parallelisierung der Entwicklung, Wiederverwendung entwickelter Module, Kapselung von Produktmodifikationen, Vereinfachung der Dokumentation.",
        category: "Potentiale"
      },
      {
        id: "m9",
        question: "Welche Nachteile/Grenzen hat eine modulare Produktstruktur?",
        answer: "Aufwändige Konstruktion und Spezifikation, Überdimensionierung, späte Entdeckung von Fehlfunktionen, Erstellung von Baukästen aufwändig, höhere Montagezeiten durch mehr Schnittstellen, suboptimale Funktionalität, Reparatur nur durch Modulaustausch.",
        category: "Potentiale"
      },
      {
        id: "m10",
        question: "Was ist das Ziel von Modularisierungsmethoden?",
        answer: "Die Entwicklung einer modularen Struktur zu unterstützen, indem modulare Eigenschaften so ausgeprägt werden, dass sie die Nutzung der angestrebten Potenziale der Modularisierung ermöglichen.",
        category: "Methoden"
      },
      {
        id: "m11",
        question: "Welche 4 Schritte umfasst das allgemeine Vorgehen der Modularisierungsmethoden?",
        answer: "1. Dekomposition der bestehenden Produktstruktur, 2. Analyse der Komponenten nach Modultreibern, 3. Modularisierung in der gewählten Betrachtungsebene, 4. Überführung in eine modularisierte Produktstruktur.",
        category: "Methoden"
      },
      {
        id: "m12",
        question: "Welche drei Heuristiken gibt es nach Stone?",
        answer: "1. Dominanter Fluss - Funktionen, die von einem dominanten Fluss durchflossen werden. 2. Verzweigung - parallele Funktionsketten. 3. Umwandlung und Übertragung - Funktionen, die einen Fluss umwandeln (z.B. elektrisch → mechanisch).",
        category: "Stone"
      },
      {
        id: "m13",
        question: "Was ist eine Heuristik?",
        answer: "Die Kunst, mit begrenztem Wissen und wenig Zeit zu guten Lösungen zu kommen. Ein analytisches Vorgehen, bei dem mit begrenztem Wissen über ein System Aussagen getroffen werden - die Aussagen können von der optimalen Lösung abweichen.",
        category: "Stone"
      },
      {
        id: "m14",
        question: "Welche Kopplungsarten gibt es in der Design Structure Matrix (DSM)?",
        answer: "R - Räumlich (Angrenzen, Orientierung), E - Energie (Energietransfer), I - Information (Signal-/Informationsaustausch), M - Material (Materialaustausch).",
        category: "DSM"
      },
      {
        id: "m15",
        question: "Welche Bewertungsskala wird in der DSM für Kopplungen verwendet?",
        answer: "+2 erforderlich, +1 vorteilhaft, 0 kein Einfluss, -1 nachteilig, -2 verhindert Funktion. Je stärker die Kopplung zwischen zwei Komponenten, desto eher sollten diese dem selben Modul angehören.",
        category: "DSM"
      },
      {
        id: "m16",
        question: "Was ist das Vorgehen bei der DSM?",
        answer: "1. Wahl einer primären Kopplung und Erstellung einer vereinfachten DSM, 2. Gruppierung der Komponenten zu Modulen durch Umbau/Neuanordnung mit Vertauschungsalgorithmus, 3. Diskussion und Abgleich des Ergebnisses.",
        category: "DSM"
      },
      {
        id: "m17",
        question: "Was ist das Modular Function Deployment (MFD)?",
        answer: "Strategische Methode von Erixon 1998. Modulbildung auf Basis von Modultreibern. Ähnliche Modultreiberprofile zweier Komponenten sprechen für Zugehörigkeit zum selben Modul. Anlehnung an Quality Function Deployment.",
        category: "MFD"
      },
      {
        id: "m18",
        question: "Nenne die Modultreiber des MFD (Design & Entwicklung, Varianz, Produktion, Einkauf, Qualität, After Sales)",
        answer: "Carry-Over, Technology Push, Planned Design Changes / Technical Specification, Styling / Common Unit / Process/Organization / Separate Testing / Black-Box-Engineering / Service-Maintenance / Upgrading / Recycling.",
        category: "MFD"
      },
      {
        id: "m19",
        question: "Was besagt die Module Indication Matrix (MIM)?",
        answer: "Optimale Modulanzahl = Quadratwurzel der Komponenten. Komponenten mit höchstem kumulierten Modultreiberwert sind Modulkandidaten. Modultreiberwerte: starker Treiber=9, mittlerer=3, schwacher=1.",
        category: "MFD"
      },
      {
        id: "m20",
        question: "Was ist das Ziel der Lebensphasenmodularisierung?",
        answer: "Ermitteln einer modularen Struktur, von der alle Lebensphasen wichtige Vorteile haben. Kombination technischer und strategischer Methoden.",
        category: "Lebensphasen"
      },
      {
        id: "m21",
        question: "Welche 4 Schritte umfasst die Lebensphasenmodularisierung?",
        answer: "1. Aufnahme der Ist-Situation, 2. Technisch-funktionale Modularisierung, 3. Produktstrategische Modularisierungen der Lebensphasen (Netzpläne), 4. Zusammenführung und Abstimmung im Module Process Chart (MPC).",
        category: "Lebensphasen"
      },
      {
        id: "m22",
        question: "Was ist der Module Interface Graph (MIG)?",
        answer: "Bildet die technische Produktstruktur ab. Komponenten mit Form und Lage sowie Flüsse zwischen ihnen (Stoff, Medien, Energie). Basis für variantengerechte Produktgestaltung.",
        category: "Lebensphasen"
      },
      {
        id: "m23",
        question: "Welche Modultreiber gibt es in der Lebensphase Produktion?",
        answer: "Separates Testen (z.B. Druck-/Saugtest), Organisation (Vormontageeinheiten), Prozess (z.B. Lackieren, antistatische Fertigung).",
        category: "Lebensphasen"
      },
      {
        id: "m24",
        question: "Welche Modultreiber gibt es in der Lebensphase Einkauf?",
        answer: "Modular Sourcing - Modul soll aus betriebswirtschaftlichen, technischen oder strategischen Gründen fremdbezogen werden (z.B. Zulieferer für Spritzguss, Elektronik).",
        category: "Lebensphasen"
      },
      {
        id: "m25",
        question: "Welche Modultreiber gibt es in der Lebensphase Nutzung?",
        answer: "Service/Instandhaltung (Reinigung, Wartung), Anpassung/Erweiterung (Upgrade, z.B. Akkupack).",
        category: "Lebensphasen"
      },
      {
        id: "m26",
        question: "Was ist das Module Process Chart (MPC)?",
        answer: "Werkzeug zur Zusammenführung der lebensphasenspezifischen Modularisierungen. Arbeit bedeutet: Abstimmungen, Verhandlungen, Kompromisse, kreative Lösungen. Grundprämissen: Module sollen größer werden, Module dürfen ab Einkauf nicht wieder getrennt werden.",
        category: "Lebensphasen"
      },
      {
        id: "m27",
        question: "Welche produktbasierten Strategien gibt es (Krause/Gebhardt)?",
        answer: "Gleichmodulstrategie (produktprogrammorientiert), Plattformstrategie (produktfamilienorientiert), Modulbaukastenstrategie (variantenorientiert). Unterscheidung: Standardmodul vs. Variantenmodul, in Produktfamilie vs. Produktprogramm.",
        category: "Strategien"
      },
      {
        id: "m28",
        question: "Welche Modultreiber gibt es in der Produktentwicklung?",
        answer: "Technisch-funktionale Modultreiber (aus DSM), Übernahmeteile (aus anderen Produktfamilien), Zeitliche Varianz (z.B. Facelift, Designteile).",
        category: "Lebensphasen"
      },
      {
        id: "m29",
        question: "Welche Modultreiber gibt es in Recycling/Entsorgung?",
        answer: "Produktrecycling (Wiederverwendung), Stoffrecycling (z.B. Akku, Metall), Thermische Verwertung, Beseitigung.",
        category: "Lebensphasen"
      }
    ],
    quizQuestions: [
      {
        id: "q1",
        question: "Welche Eigenschaft der Modularität ermöglicht, dass Module in mehreren Produkten eingesetzt werden können?",
        options: ["Kombinierbarkeit", "Kommunale Verwendung", "Entkopplung", "Funktionsbindung"],
        correctIndex: 1,
        explanation: "Kommunale Verwendung: Module können in mehreren Produkten wiederverwendet werden (z.B. gleicher Motor in verschiedenen Fahrzeugen). Kombinierbarkeit = Module zu verschiedenen Produkten kombinieren. Entkopplung und Funktionsbindung sind Merkmale, die Modularität ermöglichen."
      },
      {
        id: "q2",
        question: "Welche Heuristik nach Stone identifiziert Komponenten, die einen Fluss umwandeln (z.B. elektrisch → mechanisch)?",
        options: ["Dominanter Fluss", "Verzweigung", "Umwandlung und Übertragung", "Funktionsbindung"],
        correctIndex: 2,
        explanation: "Umwandlung und Übertragung: Funktionen, die einen Fluss umwandeln – z.B. Elektromotor (elektrisch → mechanisch), Pumpe (mechanisch → Fluid). Dominanter Fluss = ein Fluss durchfließt viele Funktionen. Verzweigung = parallele Funktionsketten. Funktionsbindung = Merkmal der Modularität."
      },
      {
        id: "q3",
        question: "Welche Kopplungsart in der DSM beschreibt den Materialaustausch zwischen Komponenten?",
        options: ["Räumlich", "Energie", "Information", "Material"],
        correctIndex: 3,
        explanation: "M = Material: Notwendigkeit eines Materialaustausches zwischen zwei Komponenten (z.B. Kraftstoff, Kühlmittel). R = Räumlich (Angrenzen, Orientierung). E = Energie. I = Information (Signal-/Informationsaustausch)."
      },
      {
        id: "q4",
        question: "Wie berechnet man die optimale Modulanzahl im MFD?",
        options: ["Anzahl Komponenten / 2", "Quadratwurzel der Komponenten", "Doppelte Komponentenanzahl", "Logarithmus der Komponenten"],
        correctIndex: 1,
        explanation: "Optimale Modulanzahl = √(Anzahl der Komponenten) – aus der Module Indication Matrix (MIM). Heuristische Faustregel: nicht zu viele kleine Module (Komplexität), nicht zu wenige große (wenig Flexibilität)."
      },
      {
        id: "q5",
        question: "Welche Prämisse gilt im Module Process Chart (MPC)?",
        options: ["Module sollen kleiner werden", "Module dürfen ab Einkauf nicht mehr getrennt werden", "Jede Lebensphase hat eigene Module", "Technische Methoden haben Vorrang"],
        correctIndex: 1,
        explanation: "Module dürfen ab Einkauf nicht wieder getrennt werden – sie sollen entlang des Prozesses größer werden (von Komponenten zu Baugruppen). MPC führt lebensphasenspezifische Modularisierungen zusammen. Technische und strategische Methoden werden kombiniert."
      },
      {
        id: "q6",
        question: "Welches Merkmal der Modularität ermöglicht die Kombinierbarkeit?",
        options: ["Überdimensionierung", "Schnittstellenstandardisierung", "Funktionsbindung", "Entkopplung"],
        correctIndex: 1,
        explanation: "Schnittstellenstandardisierung: einheitliche Schnittstellen ermöglichen, dass Module zu verschiedenen Produkten kombiniert werden können. Funktionsbindung = Funktionen in Modulen gebündelt. Entkopplung = Module untereinander entkoppelt. Überdimensionierung = Reserve für Varianten."
      },
      {
        id: "q7",
        question: "Der Modultreiber 'Carry-Over' im MFD bedeutet:",
        options: ["Komponente wird von Technologiewechsel betroffen", "Komponente soll unverändert in nächster Generation eingesetzt werden", "Komponente trägt zur Designvarianz bei", "Komponente kann separat getestet werden"],
        correctIndex: 1,
        explanation: "Carry-Over: Komponente soll unverändert in der nächsten Produktgeneration eingesetzt werden – bewährte Teile übernehmen. Technology Push = von Technologiewechsel betroffen. Styling/Common Unit = Designvarianz. Separate Testing = separat testbar."
      },
      {
        id: "q8",
        question: "Welcher Wert in der DSM bedeutet 'Kopplung ist erforderlich für die Funktion'?",
        options: ["-2", "0", "+1", "+2"],
        correctIndex: 3,
        explanation: "+2 = Kopplung erforderlich für die Funktion. +1 = vorteilhaft. 0 = kein Einfluss. -1 = nachteilig. -2 = verhindert Funktion. Starke Kopplung (+2) spricht dafür, Komponenten im selben Modul zu gruppieren."
      },
      {
        id: "q9",
        question: "Wer hat die Lebensphasenmodularisierung vorgestellt?",
        options: ["Erixon 1998", "Stone", "Blees 2010 (PKT-TUHH)", "Pimmler/Eppinger 1994"],
        correctIndex: 2,
        explanation: "Blees 2010 am PKT der TU Hamburg – integriert in den Integrierten PKT-Ansatz. Erixon = MFD. Stone = Heuristiken. Pimmler/Eppinger = DSM. Lebensphasenmodularisierung kombiniert technische und lebensphasenspezifische Methoden."
      },
      {
        id: "q10",
        question: "Was ist der erste Schritt in der Lebensphasenmodularisierung?",
        options: ["Technisch-funktionale Modularisierung", "Aufnahme der Ist-Situation", "Zusammenführung im MPC", "Netzpläne erstellen"],
        correctIndex: 1,
        explanation: "Schritt 1: Aufnahme der Ist-Situation – z.B. mit MIG (Module Interface Graph), der Produktstruktur und Flüsse abbildet. Dann: technisch-funktionale Modularisierung, lebensphasenspezifische Netzpläne, Zusammenführung im MPC."
      }
    ]
  },
  {
    id: "nutzerzentrierung",
    title: "Kapitel 11: Nutzerzentrierung",
    description: "User-Centered Design, Nutzungskontext, Nutzertypen, Methoden und Qualitätsziele",
    flashcards: [
      {
        id: "n1",
        question: "Was ist Nutzerzentrierung?",
        answer: "Wörtlich: Den Nutzer in den Fokus der Betrachtung stellen. Als Philosophie: Grundhaltung, dass Nutzer Experten ihrer Erfahrungen sind. Als Entwicklungsansatz: Sammlung von Methoden zur Bereitstellung von Informationen zu Nutzern und Nutzungskontext.",
        category: "Definition"
      },
      {
        id: "n2",
        question: "Welche Grundhaltung braucht Nutzerzentrierung als Mindset?",
        answer: "Nutzer sind Experten ihrer eigenen Erfahrungen und Wünsche. Ausgangspunkt jeder Innovation ist ein Nutzerbedarf. Mit dem Nutzer für den Nutzer entwickeln. Entwicklung stützt sich zunehmend auf Empirie.",
        category: "Definition"
      },
      {
        id: "n3",
        question: "Wann sollte man nutzerzentriert arbeiten?",
        answer: "Wann immer es tatsächlich einen Nutzer für das zu entwickelnde Produkt gibt.",
        category: "Definition"
      },
      {
        id: "n4",
        question: "Welche Grade der Nutzerzentrierung gibt es (Pyramide)?",
        answer: "0: Analyse ohne Interaktion. 1: Analyse durch Interaktion. M: Nutzerintegration (Nutzer teilen Infos mit Entwicklung). P: Nutzerpartizipation (Nutzer arbeiten mit Entwicklern an Ideen). I: Nutzermitbestimmung (direkte Mitsprache). Z: Nutzer als Entscheidungsträger.",
        category: "Grade"
      },
      {
        id: "n5",
        question: "Was ist der Unterschied zwischen nutzerintegrativ und nutzerzentriert?",
        answer: "Nutzerintegrativ: direkte Interaktion zwischen Nutzern und Entwicklern. Nutzerzentriert (nicht-integrativ): Informationssammlung über Nutzer ohne direkte Beteiligung.",
        category: "Grade"
      },
      {
        id: "n6",
        question: "Warum ist Nutzerzentrierung aus Produktentwicklungssicht wichtig?",
        answer: "Mass Customization, Modularisierung, Wettbewerbsdruck, Marktzersplitterung. Vorteile: leichtere Bedienung, bessere Qualität, höhere Verkäufe, geringeres Scheiterrisiko, bessere Kundenbindung, Kano-Modell.",
        category: "Bedeutung"
      },
      {
        id: "n7",
        question: "Warum ist Nutzerzentrierung aus gesellschaftlicher Sicht wichtig?",
        answer: "Demografischer Wandel (mehr ältere Menschen mit anderen Bedürfnissen), Inklusion aller Menschen, bessere Unterstützungsgeräte, geringere Gesundheitskosten.",
        category: "Bedeutung"
      },
      {
        id: "n8",
        question: "Was ist das Henry-Ford-Dilemma?",
        answer: "Wissen ist oft latent und nicht verbalisierbar. Henry Ford: 'Hätte ich Kunden gefragt, hätten sie ein schnelleres Pferd gewollt.' Verschiedene und tiefgehendere Analysen mit offenen Fragestellungen nötig.",
        category: "Grenzen"
      },
      {
        id: "n9",
        question: "Welche Grenzen und Risiken hat Nutzerzentrierung?",
        answer: "Personas können Stereotypen/Vorurteile widerspiegeln. Latentes Wissen nicht verbalisierbar. Zeitaufwand. Methoden zum Selbstzweck. Nutzerintegrative Tätigkeiten haben Außenwirkung (auch Werbezwecke).",
        category: "Grenzen"
      },
      {
        id: "n10",
        question: "Warum scheitert Nutzerintegration?",
        answer: "Falscher Methodeneinsatz, fehlerhafte Durchführung und fehlende Methodenexpertise. Missverständnisse, falsche Nutzer, kritische Haltung ('Nutzer wissen nicht was sie wollen'), Angst vor Know-how-Verlust, Angst vor Rollenverlust.",
        category: "Grenzen"
      },
      {
        id: "n11",
        question: "Welche Begriffe: Stakeholder, Kunde, Käufer, Nutzer?",
        answer: "Stakeholder: beeinflussen Entscheidung/Aktivität. Kunde: zahlt für Produkt (B2B). Käufer: entscheidet über Kauf, wird Eigentümer (B2C). Nutzer: interagiert mit Produkt (Verwendung, Kontakt).",
        category: "Begriffe"
      },
      {
        id: "n12",
        question: "Welche Bestandteile hat der Nutzungskontext (ISO 9241)?",
        answer: "Nutzer:innen, (persönliche) Ziele & Aufgaben, Arbeitsmittel & Ressourcen, Umgebung & Situation, System/Produkt/Dienstleistung. Interaktion findet immer im Nutzungskontext statt.",
        category: "Nutzungskontext"
      },
      {
        id: "n13",
        question: "Was ist der Unterschied zwischen Primär-, Sekundär- und Tertiärnutzer?",
        answer: "Primär: direkte, beabsichtigte, notwendige Interaktion für Hauptfunktionen (Zielgruppe). Sekundär: direkte, sporadische Interaktion für Nebenfunktionen (z.B. Monteur). Tertiär: indirekte, unbeabsichtigte Interaktion, meist negativ betroffen (z.B. Personen in Umgebung).",
        category: "Nutzertypen"
      },
      {
        id: "n14",
        question: "Was bedeutet Gebrauchstauglichkeit/Usability (ISO 9241-11)?",
        answer: "Das Ausmaß, in dem ein Produkt von bestimmten Nutzern in einem bestimmten Kontext genutzt werden kann, um Ziele effektiv, effizient und zufriedenstellend zu erreichen. Synonyme: Bedienerfreundlichkeit, Benutzerfreundlichkeit.",
        category: "Qualitätsziele"
      },
      {
        id: "n15",
        question: "Welche drei Dimensionen hat Usability?",
        answer: "Effektivität (Grad der Aufgabenerfüllung, Fehleranzahl), Effizienz (Kosten, Durchführungszeit), Zufriedenstellung (Zufriedenheit, Wiederverwendungswahrscheinlichkeit).",
        category: "Qualitätsziele"
      },
      {
        id: "n16",
        question: "Was bedeutet Zugänglichkeit/Barrierefreiheit (EN 17161)?",
        answer: "Produkte sollen von möglichst allen Menschen (unabhängig von Alter, Fähigkeiten, Behinderung) ohne Barrieren genutzt werden können – möglichst ohne fremde Hilfe und ohne Anpassungen. Synonym: Design-for-All.",
        category: "Qualitätsziele"
      },
      {
        id: "n17",
        question: "Was ist User Experience (UX) im Unterschied zu Usability?",
        answer: "UX umfasst alle Emotionen, Ansichten, Vorlieben, Wahrnehmungen, Reaktionen vor, während und nach der Nutzung. Usability fokussiert auf effektive, effiziente Aufgabenerledigung. UX hat Schwerpunkt auf emotionaler Ebene und zeitlicher Komponente.",
        category: "Qualitätsziele"
      },
      {
        id: "n18",
        question: "Was ist der menschenzentrierte Entwicklungsprozess (ISO 9241-220)?",
        answer: "Iterativer Ablauf: Planung → Nutzungskontext aufnehmen → Anforderungen → Gestaltung → Bewerten → ggf. Iteration. Basis ist der Nutzungskontext. Nutzerzentrierte Methoden überführen Kontext in den PEP.",
        category: "Prozess"
      },
      {
        id: "n19",
        question: "Wofür eignet sich die User Experience/Usability-Test-Methode?",
        answer: "Nutzer erhalten konkrete Aufgabenstellung, bearbeiten mit Produkt. Dokumentation und Bewertung von Nutzungsprozess und -ergebnis. 5-30 Teilnehmer, mittlerer Aufwand, spezifischer Kontext.",
        category: "Methoden"
      },
      {
        id: "n20",
        question: "Wofür eignet sich Contextual Inquiry?",
        answer: "Untersuchung/Befragung der Nutzer in ihrer natürlichen Arbeitsumgebung, meist strukturierte Befragung parallel zur Produktnutzung. 3-20 Teilnehmer, spezifischer Kontext, umfangreiche Informationen.",
        category: "Methoden"
      },
      {
        id: "n21",
        question: "Wofür eignet sich die Kano-Methode?",
        answer: "Strukturierte Fragebogen zur Kategorisierung von Anforderungen in Basis-, Leistungs- und Begeisterungsanforderungen. 30-300+ Teilnehmer, kontextfrei, spezielle Auswertungstechnik.",
        category: "Methoden"
      },
      {
        id: "n22",
        question: "Was ist Netnographie?",
        answer: "Sammlung von Kunden- und Nutzerdaten aus dem Internet (Foren, Blogs, Social Media, Rezensionen). Ableiten von Bedürfnissen und Anforderungen. Keine direkte Teilnehmerinteraktion – nur online existierende Daten.",
        category: "Methoden"
      },
      {
        id: "n23",
        question: "Welche Kriterien hat der Methodenauswahlkatalog?",
        answer: "Entwicklungstätigkeit (Analyse, Synthese, Evaluation), Nutzerzentrierungsgrad, Teilnehmeranzahl, Kontextbezug, Zeitaufwand, Ressourcen, Offenheit der Fragestellung, Risiko des Methodenscheiterns.",
        category: "Methoden"
      },
      {
        id: "n24",
        question: "Wie definiert man Nutzergruppen für die Produktentwicklung?",
        answer: "Nicht: Alter, Geschlecht. Sondern: spezifische Einschränkungen (physiologisch, kognitiv, sensorisch), Hobbies/Interessen, Fähigkeiten, Nutzungsintensität. Stellvertreter-Person für homogene Gruppe integrieren.",
        category: "Nutzergruppen"
      }
    ],
    quizQuestions: [
      {
        id: "nq1",
        question: "Ab welchem Grad der Nutzerzentrierung arbeiten Nutzer mit Entwicklern an neuen Ideen?",
        options: ["Nutzerintegration", "Nutzerpartizipation", "Nutzermitbestimmung", "Analyse durch Interaktion"],
        correctIndex: 1,
        explanation: "Nutzerpartizipation (P): Nutzer sind aktiver Teil des PEP und arbeiten zusammen mit Entwicklern an neuen Ideen. Nutzerintegration (M) ist falsch: Dort teilen Nutzer nur Infos mit der Entwicklung, entwickeln aber noch nicht gemeinsam Ideen. Nutzerintegration passt, wenn Nutzer z.B. Feedback, Erfahrungen oder Anforderungen liefern – die Ideenfindung bleibt bei den Entwicklern."
      },
      {
        id: "nq2",
        question: "Wer interagiert direkt mit dem Produkt?",
        options: ["Stakeholder", "Kunde", "Nutzer", "Käufer"],
        correctIndex: 2,
        explanation: "Nutzer/User: Person, die mit dem Produkt interagiert – Verwendung, Kontakt, Bedienung. Stakeholder = beeinflussen Entscheidung. Kunde = zahlt (B2B). Käufer = entscheidet über Kauf, wird Eigentümer (B2C). Nutzer kann von Käufer/Kunde abweichen."
      },
      {
        id: "nq3",
        question: "Welche drei Dimensionen hat Usability?",
        options: ["Kosten, Zeit, Qualität", "Effektivität, Effizienz, Zufriedenstellung", "Nutzer, Kontext, Aufgabe", "Vorher, Während, Nachher"],
        correctIndex: 1,
        explanation: "Usability (ISO 9241-11): Effektivität (Grad der Aufgabenerfüllung, Fehleranzahl), Effizienz (Kosten, Durchführungszeit), Zufriedenstellung (Zufriedenheit, Wiederverwendungswahrscheinlichkeit). Nutzer, Kontext, Aufgabe = Bestandteile des Nutzungskontexts."
      },
      {
        id: "nq4",
        question: "Was ist das Henry-Ford-Dilemma?",
        options: ["Kunden können nicht zahlen", "Kunden wissen nicht was sie wollen", "Nutzerwissen ist latent und nicht verbalisierbar", "Ford hat keine Nutzer befragt"],
        correctIndex: 2,
        explanation: "Nutzerwissen ist oft latent und nicht verbalisierbar – besonders bei direkter Befragung. Henry Ford: 'Hätte ich Kunden gefragt, hätten sie ein schnelleres Pferd gewollt.' Folge: tiefgehendere Analysen, offene Fragestellungen, Beobachtung statt nur Befragung nötig."
      },
      {
        id: "nq5",
        question: "Wer ist primär für die Hauptfunktionen des Produkts zuständig?",
        options: ["Sekundärnutzer", "Tertiärnutzer", "Primärnutzer", "Stakeholder"],
        correctIndex: 2,
        explanation: "Primärnutzer: direkte, beabsichtigte, notwendige Interaktion für Hauptfunktionen – die Zielgruppe. Sekundärnutzer = sporadische Interaktion für Nebenfunktionen (z.B. Monteur). Tertiärnutzer = indirekt, unbeabsichtigt betroffen (z.B. Umgebung)."
      },
      {
        id: "nq6",
        question: "Welche Methode sammelt Daten aus Online-Foren und Social Media?",
        options: ["Fokusgruppen", "Netnographie", "Contextual Inquiry", "Usability-Test"],
        correctIndex: 1,
        explanation: "Netnographie: Sammlung von Kunden- und Nutzerdaten aus dem Internet (Foren, Blogs, Social Media, Rezensionen). Keine direkte Teilnehmerinteraktion – nur online existierende Daten. Fokusgruppen = moderierte Gruppendiskussion. Contextual Inquiry = vor Ort. Usability-Test = Aufgaben mit Produkt."
      },
      {
        id: "nq7",
        question: "Was unterscheidet UX von Usability?",
        options: ["UX ist schneller", "UX umfasst Emotionen vor, während und nach der Nutzung", "Usability ist nur für Software", "Es gibt keinen Unterschied"],
        correctIndex: 1,
        explanation: "UX (User Experience): umfasst alle Emotionen, Ansichten, Vorlieben, Wahrnehmungen vor, während und nach der Nutzung – Schwerpunkt emotional, zeitlich. Usability: fokussiert auf effektive, effiziente Aufgabenerledigung. Beide gelten für physische und digitale Produkte."
      },
      {
        id: "nq8",
        question: "Welcher Bestandteil gehört zum Nutzungskontext?",
        options: ["Marketing-Mix", "Nutzer:innen, Ziele, Aufgaben, Ressourcen, Umgebung", "Produktionskosten", "Wettbewerbsanalyse"],
        correctIndex: 1,
        explanation: "Nutzungskontext (ISO 9241): Nutzer:innen, (persönliche) Ziele & Aufgaben, Arbeitsmittel & Ressourcen, Umgebung & Situation, System/Produkt. Interaktion findet immer im Nutzungskontext statt. Marketing, Kosten, Wettbewerb gehören nicht dazu."
      },
      {
        id: "nq9",
        question: "Warum scheitert Nutzerintegration oft?",
        options: ["Nutzer haben keine Zeit", "Falscher Methodeneinsatz und fehlende Methodenexpertise", "Produkte sind zu teuer", "Kunden wollen nicht mitmachen"],
        correctIndex: 1,
        explanation: "Ursachen: falscher Methodeneinsatz, fehlerhafte Durchführung, fehlende Methodenexpertise. Zusätzlich: Missverständnisse, falsche Nutzer, kritische Haltung ('Nutzer wissen nicht was sie wollen'), Angst vor Know-how-Verlust oder Rollenverlust. Zeit oder Preis sind selten die Hauptgründe."
      },
      {
        id: "nq10",
        question: "Wofür eignet sich die Kano-Methode?",
        options: ["Usability-Testing", "Kategorisierung von Anforderungen in Basis-, Leistungs-, Begeisterungsanforderungen", "Feldstudien", "Nutzerinterviews"],
        correctIndex: 1,
        explanation: "Kano: strukturierte Fragebogen zur Kategorisierung von Anforderungen in Basis-, Leistungs- und Begeisterungsanforderungen. 30–300+ Teilnehmer, kontextfrei, spezielle Auswertungstechnik. — Usability-Testing: Nutzer bearbeiten konkrete Aufgaben mit dem Produkt; Nutzungsprozess und -ergebnis werden bewertet (Effektivität, Effizienz, Zufriedenstellung). 5–30 Teilnehmer, spezifischer Kontext. Dient der Bewertung eines bestehenden Produkts, nicht der Anforderungskategorisierung. — Feldstudien: Untersuchungen im natürlichen Umfeld der Nutzer (z.B. Contextual Inquiry). Nutzer werden in ihrer Arbeitsumgebung beobachtet/befragt. Kontextgebunden, liefert tiefe Einblicke, aber keine strukturierte Kategorisierung wie Kano. — Nutzerinterviews: qualitative, offene Befragung. Kano nutzt dagegen strukturierte Fragebogen mit spezieller Auswertung."
      }
    ]
  },
  {
    id: "werkstoffauswahl",
    title: "Kapitel 12: Systematische Werkstoffauswahl",
    description: "Werkstofffamilien, Ashby-Methode, Materialindizes, Werkstoffkostenmodell",
    flashcards: [
      {
        id: "w1",
        question: "Welche Werkstofffamilien gibt es?",
        answer: "Natürliche Werkstoffe, Metalle und -legierungen, Verbundwerkstoffe, Technische Keramiken, Nichttechnische Keramiken, Polymere, Elastomere, Schäume.",
        category: "Grundlagen"
      },
      {
        id: "w2",
        question: "Was sind Werkstoffgruppen? (Beispiel Metalle)",
        answer: "Unterteilung von Werkstofffamilien. Bei Metallen z.B.: Stähle, Cu-Legierungen, Al-Legierungen, Ti-Legierungen, Ni-Legierungen, Zn-Legierungen.",
        category: "Grundlagen"
      },
      {
        id: "w3",
        question: "Welche drei Arten der Werkstoffauswahl gibt es?",
        answer: "1. Willkürliche Materialauswahl, 2. Auswahl nach Spannungsniveau, E-Modul, Streckgrenze, Zugfestigkeit, 3. Systematische Werkstoffauswahl nach Ashby (Vorauswahl, Zielkonflikt, graphische Feinauswahl).",
        category: "Auswahl"
      },
      {
        id: "w4",
        question: "Warum ist eine systematische Werkstoffauswahl notwendig?",
        answer: "Steigende Anzahl verfügbarer Werkstoffe. Gleichzeitig Ziele wie Gewichts- und Kostensenkung. Anforderungen wie Multifunktionalität. Intuitive Auswahl reicht nicht aus.",
        category: "Motivation"
      },
      {
        id: "w5",
        question: "Welche drei Schritte umfasst die systematische Werkstoffauswahl nach Ashby?",
        answer: "1. Vorauswahl mithilfe von Randbedingungen, 2. Formulierung des Zielkonfliktes (Zielfunktion, Versagenskriterium, Materialindex), 3. Graphische Feinauswahl mithilfe der Materialindizes (Werkstoffdiagramm).",
        category: "Ashby"
      },
      {
        id: "w6",
        question: "Was gehört zu Aufgabenblock 1 der Ashby-Methode?",
        answer: "Übersetzen der Bauteilanforderungen in Werkstoffanforderungen. Belastungssituation und Bauraum ermitteln. Werkstoffanforderungen in Materialanforderungsliste. Kritischen Versagensfall definieren.",
        category: "Ashby"
      },
      {
        id: "w7",
        question: "Was gehört zu Aufgabenblock 2 der Ashby-Methode?",
        answer: "Vorauswahl mit Randbedingungen (Diagramm einschränken). Materialindex für Ziel (z.B. Massenreduzierung) aufstellen. Logarithmische Geradengleichung. Gerade in Diagramm einzeichnen, in Optimierungsrichtung verschieben. Finale Werkstoffentscheidung.",
        category: "Ashby"
      },
      {
        id: "w8",
        question: "Wie lautet der Materialindex bei Knickung (Massenminimierung)?",
        answer: "M_m = E^(1/2) / ρ. Aus kritischer Knicklast F_k = π²·E·I/L² und I = π·r⁴/4 folgt: Masse minimieren wenn E^(1/2)/ρ maximiert wird.",
        category: "Materialindex"
      },
      {
        id: "w9",
        question: "Wie lautet der Materialindex bei Durchbiegung (Massenminimierung)?",
        answer: "M_m = E^(1/3) / ρ. Aus max. Durchbiegung w_max = F·L³/(3·E·I) mit I = b·h³/12.",
        category: "Materialindex"
      },
      {
        id: "w10",
        question: "Was ist die Optimierungsrichtung im Werkstoffdiagramm?",
        answer: "Bei Massenminimierung: Gerade in Richtung höherer Materialindex verschieben (z.B. E^(1/2)/ρ nach oben links). Der Werkstoff mit höchstem M_m auf der Geraden ist optimal.",
        category: "Diagramm"
      },
      {
        id: "w11",
        question: "Welche Steigung hat die Optimierungsgerade bei M = E^(1/2)/ρ?",
        answer: "Steigung 2. Aus log(c) = log(E^(1/2)/ρ) folgt log(E) = 2·(log(ρ) + log(c)). Im Diagramm log(E) vs. log(ρ) ergibt das Steigung 2.",
        category: "Diagramm"
      },
      {
        id: "w12",
        question: "Was ist der Materialkostenindex bei Knickung?",
        answer: "M_c = E^(1/2) / (ρ · c). Ziel: Minimierung der Werkstoffkosten. c = Preis pro kg. Masse m = ρ · (L · A), Kosten = m · c.",
        category: "Kosten"
      },
      {
        id: "w13",
        question: "Welche Kritik gibt es am einfachen Werkstoffkostenmodell?",
        answer: "Kosten = Gewicht × Werkstoffpreis. Lediglich Materialpreis wird berücksichtigt. Prozesskosten (Schneiden, Biegen, Schweißen) werden nicht berücksichtigt.",
        category: "Kosten"
      },
      {
        id: "w14",
        question: "Wie funktioniert das Kostenvergleichsmodell?",
        answer: "Eingrenzung durch Kostentreiber (Einkaufen, Schneiden, Biegen, Schweißen). Ausschluss werkstoffunabhängiger Kosten. Aufteilung in variable und fixe Kosten. Break-Even-Analyse.",
        category: "Kosten"
      },
      {
        id: "w15",
        question: "Wann sollte die systematische Werkstoffauswahl im PEP durchgeführt werden?",
        answer: "Früh im Produktentwicklungsprozess (VDI 2221). Bei der Konzeptphase, wenn Bauteilanforderungen und Belastungssituation bekannt sind.",
        category: "Einordnung"
      },
      {
        id: "w16",
        question: "Was ist der CES Selector?",
        answer: "Software (CES EduPack) zur computerunterstützten systematischen Werkstoffauswahl. Randbedingungen definieren, Ashby-Charts, Vergleich von Werkstoffalternativen. Unterstützt Ashby-Methode.",
        category: "Software"
      },
      {
        id: "w17",
        question: "Was sind freie Variablen beim Zielkonflikt?",
        answer: "Konstruktionsparameter, die frei wählbar sind (z.B. Radius r, Breite b, Höhe h). Werden genutzt um Zielfunktion mit Versagenskriterium zu verknüpfen und Materialindex abzuleiten.",
        category: "Zielkonflikt"
      }
    ],
    quizQuestions: [
      {
        id: "wq1",
        question: "Welche Werkstofffamilie gehört NICHT zu den Hauptfamilien?",
        options: ["Metalle", "Polymere", "Verbundwerkstoffe", "Legierungen"],
        correctIndex: 3,
        explanation: "Legierungen sind Werkstoffgruppen innerhalb der Familie Metalle (z.B. Stähle, Al-Legierungen, Cu-Legierungen), keine eigene Familie. Hauptfamilien: Metalle, Polymere, Keramiken, Verbundwerkstoffe, Elastomere, Schäume, natürliche Werkstoffe."
      },
      {
        id: "wq2",
        question: "Welcher Schritt kommt zuerst in der Ashby-Methode?",
        options: ["Graphische Feinauswahl", "Vorauswahl mit Randbedingungen", "Werkstoffentscheidung", "Zielkonflikt formulieren"],
        correctIndex: 1,
        explanation: "Reihenfolge: 1. Vorauswahl mit Randbedingungen (Diagramm einschränken), 2. Zielkonflikt formulieren (Zielfunktion, Versagenskriterium, Materialindex), 3. Graphische Feinauswahl (Werkstoffdiagramm), 4. Werkstoffentscheidung."
      },
      {
        id: "wq3",
        question: "Bei Knickung lautet der Materialindex für Massenminimierung:",
        options: ["E/ρ", "E^(1/2)/ρ", "E/ρ²", "ρ/E"],
        correctIndex: 1,
        explanation: "M_m = E^(1/2)/ρ. Aus kritischer Knicklast F_k = π²·E·I/L² und I = π·r⁴/4 abgeleitet. Masse minimieren, wenn E^(1/2)/ρ maximiert wird. Bei Durchbiegung: E^(1/3)/ρ."
      },
      {
        id: "wq4",
        question: "Im Werkstoffdiagramm (log E vs. log ρ) hat die Gerade für M = E^(1/2)/ρ die Steigung:",
        options: ["1", "2", "1/2", "3"],
        correctIndex: 1,
        explanation: "Aus log(c) = log(E^(1/2)/ρ) folgt log(E) = 2·(log(ρ) + log(c)) – im log-log-Diagramm (log E vs. log ρ) ergibt das Steigung 2. Bei E^(1/3)/ρ wäre Steigung 3."
      },
      {
        id: "wq5",
        question: "Was berücksichtigt das einfache Werkstoffkostenmodell NICHT?",
        options: ["Materialpreis", "Prozesskosten", "Gewicht", "Dichte"],
        correctIndex: 1,
        explanation: "Einfaches Modell: Kosten = Gewicht × Werkstoffpreis. Nur Materialpreis wird berücksichtigt. Prozesskosten (Schneiden, Biegen, Schweißen, Oberflächenbehandlung) fehlen. Kostenvergleichsmodell berücksichtigt Kostentreiber."
      },
      {
        id: "wq6",
        question: "Der Materialkostenindex bei Knickung lautet:",
        options: ["E^(1/2)/ρ", "E^(1/2)/(ρ·c)", "ρ·c/E", "E/(ρ·c)"],
        correctIndex: 1,
        explanation: "M_c = E^(1/2)/(ρ·c) – Ziel: Minimierung der Werkstoffkosten. c = Preis pro kg. Aus Masse m = ρ·(L·A) und Kosten = m·c abgeleitet. Massenindex E^(1/2)/ρ wird um Faktor 1/c erweitert."
      },
      {
        id: "wq7",
        question: "Welche Software unterstützt die Ashby-Methode?",
        options: ["SolidWorks", "CES Selector / CES EduPack", "MATLAB", "Excel"],
        correctIndex: 1,
        explanation: "CES Selector (CES EduPack) von Granta Design: computerunterstützte Werkstoffauswahl mit Ashby-Charts, Randbedingungen, Vergleich von Werkstoffalternativen. SolidWorks = CAD. MATLAB/Excel = allgemein, nicht speziell für Ashby."
      },
      {
        id: "wq8",
        question: "Was sind freie Variablen beim Zielkonflikt?",
        options: ["Festgelegte Abmessungen", "Konstruktionsparameter die frei wählbar sind", "Werkstoffeigenschaften", "Randbedingungen"],
        correctIndex: 1,
        explanation: "Freie Variablen: Konstruktionsparameter, die frei wählbar sind (z.B. Radius r, Breite b, Höhe h). Werden genutzt, um Zielfunktion mit Versagenskriterium zu verknüpfen und Materialindex abzuleiten. Werkstoffeigenschaften und Randbedingungen sind vorgegeben."
      },
      {
        id: "wq9",
        question: "Bei Durchbiegung (Biegebalken) lautet der Materialindex für Massenminimierung:",
        options: ["E/ρ", "E^(1/2)/ρ", "E^(1/3)/ρ", "E^(2)/ρ"],
        correctIndex: 2,
        explanation: "M_m = E^(1/3)/ρ. Aus max. Durchbiegung w_max = F·L³/(3·E·I) mit I = b·h³/12 abgeleitet. Knickung: E^(1/2)/ρ. Zug: E/ρ. Exponent hängt vom Versagensfall ab."
      },
      {
        id: "wq10",
        question: "In welche Richtung verschiebt man die Optimierungsgerade bei Massenminimierung?",
        options: ["Nach unten rechts", "In Richtung höherer Materialindex (z.B. oben links)", "Nach unten links", "Horizontal"],
        correctIndex: 1,
        explanation: "Optimierungsrichtung: Gerade in Richtung höherer Materialindex verschieben (z.B. im E-ρ-Diagramm nach oben links). Der Werkstoff mit höchstem M auf der Geraden innerhalb der Randbedingungen ist optimal. Höherer M = geringere Masse bei gleicher Funktion."
      }
    ]
  }
];
