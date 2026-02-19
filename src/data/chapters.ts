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
    id: "historie-km-pm",
    title: "Kapitel 3: Historie der Konstruktionsmethodik und Projektmanagement",
    description: "Konstruktionsmethodik (Begriffe, Evolution, VDI 2221), Projektmanagement (Aufgaben PL, Berichtswesen), Krisenbewältigung (LoP)",
    flashcards: [
      {
        id: "km1",
        question: "Was ist Konstruktionsmethodik?",
        answer: "Gesamtheit abgestimmter Methoden zur Unterstützung der Konstruktion technischer Systeme. Umfasst Konstruktionsmethoden, -prinzipien, -techniken und -werkzeuge.",
        category: "Definition"
      },
      {
        id: "km2",
        question: "Wie grenzen sich Konstruktionsmethoden, -prinzipien, -techniken und -werkzeuge ab?",
        answer: "Methoden: planmäßiges Vorgehen zum Ziel (allgemein/pragmatisch). Prinzipien: Grundsätze zur Umsetzung (z.B. Top-down). Techniken: feingranulare Arbeitsanweisungen. Werkzeuge: Hilfsmittel (z.B. CAD, Kreativitätsmethoden).",
        category: "Begriffe"
      },
      {
        id: "km3",
        question: "Welche Merkmale hat die klassische Konstruktionsmethodik?",
        answer: "Theoretisch/abstrakt, generisch, starr, Fokus Konzeptphase, Fokus Neukonstruktion, Fokus eine Person, keine Rechnerunterstützung. >80% der Konstruktionen sind Anpassungs-/Variantenkonstruktionen.",
        category: "Klassische KM"
      },
      {
        id: "km4",
        question: "Welche Merkmale hat die rechnerunterstützte Konstruktionsmethodik?",
        answer: "Pragmatisch/konkret, flexibel, Fokus späte Phasen, Fokus Varianten-/Anpassungskonstruktion, IT-getrieben, kollaborativ. Keine Berücksichtigung früher Phasen und Konstruktionsmethoden.",
        category: "Rechnerunterstützt"
      },
      {
        id: "km5",
        question: "Welche Kritik gibt es an der VDI 2221?",
        answer: "Sequentieller Prozess, Wasserfall-Modell; Schwerpunkt mechanischer Maschinenbau; kaum in Industrie angewendet – nur Lehre; nur für Neuentwicklungen; keine Validierung; viele andere Methodiken mit anderen Paradigmen.",
        category: "VDI 2221"
      },
      {
        id: "km6",
        question: "Welche Methoden werden in der Industrie häufig eingesetzt?",
        answer: "Methoden zur Steigerung der operativen Effizienz: FMEA, Benchmarking, Wertanalyse, Bewertungsmethoden, Design for Assembly. Selten: langfristige Methoden wie Szenario-Technik, Conjoint-Analyse.",
        category: "Industrielle Anwendung"
      },
      {
        id: "km7",
        question: "Warum brauchen wir Konstruktionsmethodik?",
        answer: "Komplexität nimmt zu; Effizienzpotentiale nicht ausgeschöpft; Konstrukteure fehlen, lange Einarbeitung; Einschränkungen des Denkapparates; Konstruktion muss lehrbar bleiben.",
        category: "Begründung"
      },
      {
        id: "km8",
        question: "Welche VDI-Richtlinien sind relevant für die Konstruktionsmethodik?",
        answer: "VDI 2221 (Entwicklung und Konstruktion), VDI 2222 (Methoden zur Konzipierung), VDI 2206 (Entwicklung mechatronischer Systeme), VDI 2223 (Überarbeitung).",
        category: "VDI"
      },
      {
        id: "pm1",
        question: "Welche Hauptaufgaben hat der Projektleiter?",
        answer: "Planung, Überwachung und Steuerung des Projektablaufs; Budgetplan; Vergabe und Klärung von Detailaufträgen; Prüfung und Abnahme; Dokumentation; Information der Beteiligten; Vorbereitung Besprechungen; Berichterstattung; Zusammenarbeit mit Fachabteilungen.",
        category: "Projektleiter"
      },
      {
        id: "pm2",
        question: "Was bedeutet Projektleitung?",
        answer: "Führungsaufgabe auf Zeit (für die Dauer des Projekts). Der Projektleiter ist Hauptverantwortlicher für den Projekterfolg. Führen heißt: andere für ein Ziel gewinnen und dafür sorgen, dass das Ziel erreicht wird.",
        category: "Projektleiter"
      },
      {
        id: "pm3",
        question: "Welche Grundsätze gelten für erfolgreiches Projektmanagement?",
        answer: "Zielklarheit des Managements; Identifikation aller Beteiligten; qualifizierte und motivierte Mitarbeiter; klare Aufgabenzuweisung; systematische Vorgehensweise; projektgerechte Führung; brauchbare Instrumente und Techniken.",
        category: "Grundsätze"
      },
      {
        id: "pm4",
        question: "Was ist das Ziel des formalen Berichtswesens?",
        answer: "Rasch Konsens über den Projektstand herstellen; 'Lage-Palaver' vermeiden; Fokus auf IST/SOLL-Vergleich, Ursachen und Abweichungen, Maßnahmen zur Gegensteuerung; Referenz (SOLL) vorhanden; bei mehreren Projekten formal gleich berichten.",
        category: "Berichtswesen"
      },
      {
        id: "pm5",
        question: "Welche Berichtsformen gibt es im Projektmanagement?",
        answer: "Projektbericht, Projektstatusbericht, Budgetplan/-bericht, Besuchsbericht. Leitfaden für kurzen Projektstatusbericht an Geschäftsleitung (ca. 10 min).",
        category: "Berichtswesen"
      },
      {
        id: "pm6",
        question: "Welche Punkte hat der Leitfaden für einen kurzen Projektstatusbericht?",
        answer: "1. Allgemeine Angaben (Ziel, Auftraggeber, Besonderes). 2. Vorgehenssystematik (Phasen, Meilensteine). 3. Aktuelle Planung (IST vs. SOLL). 4. Erforderliche Entscheidungen. 5. Ausblick (Risiken, Handlungsoptionen). Persönliches Commitment.",
        category: "Berichtswesen"
      },
      {
        id: "kr1",
        question: "Wie geht man bei Krisen nach Inbetriebnahme vor?",
        answer: "Schnell zum Kunden, mit Fachebene Mängel aufnehmen. Krise auf Sachebene bringen. Nicht streiten – Mängel aufnehmen, Termin für Lösungskonzept nennen. Lösungskonzept vorlegen mit Liste der offenen Punkte (LoP).",
        category: "Krisenbewältigung"
      },
      {
        id: "kr2",
        question: "Was ist die Liste der offenen Punkte (LoP)?",
        answer: "Jeder Punkt mit Vorschlag: a) sofort unentgeltlich beheben, b) zum bestimmten Termin unentgeltlich beheben, c) weitere Klärungen erforderlich (abschmettern/Nachforderungen). Kunde muss LoP als primäre Grundlage anerkennen. Nicht bei c) festbeißen.",
        category: "Krisenbewältigung"
      },
      {
        id: "kr3",
        question: "Welche Verhaltensregeln gelten bei Krisenbewältigung?",
        answer: "Äußerst schnell reagieren. Vereinbarungen einhalten – Verbindlichkeit schafft Vertrauen. Transparenz in die Sachlage bringen. Juristische Rückendeckung verschaffen. Verbesserungsprozess professionell durchführen. Projekt konsequent zum sachlichen und juristischen Abschluss bringen.",
        category: "Krisenbewältigung"
      }
    ],
    quizQuestions: [
      {
        id: "kmq1",
        question: "Welches Merkmal trifft auf die klassische Konstruktionsmethodik zu?",
        options: ["Fokus auf späte Konstruktionsphasen", "Fokus auf Konzeptphase", "Fokus auf Variantenkonstruktion", "IT-getrieben"],
        correctIndex: 1,
        explanation: "Klassische KM: Fokus auf Konzeptphase. Rechnerunterstützt: Fokus auf späte Phasen, Variantenkonstruktion, IT-getrieben."
      },
      {
        id: "kmq2",
        question: "Welche Methode wird in der Industrie häufig eingesetzt?",
        options: ["Conjoint-Analyse", "Szenario-Technik", "FMEA", "Delphi-Umfrage"],
        correctIndex: 2,
        explanation: "FMEA, Benchmarking, Wertanalyse, Design for Assembly werden häufig eingesetzt. Conjoint-Analyse, Szenario-Technik, Delphi werden selten genutzt."
      },
      {
        id: "kmq3",
        question: "Welche Kritik gibt es an der VDI 2221?",
        options: ["Zu agil", "Sequentieller Prozess, Wasserfall-Modell", "Zu praxisnah", "Nur für Variantenkonstruktion"],
        correctIndex: 1,
        explanation: "VDI 2221 wird kritisiert: sequentiell, Wasserfall, Schwerpunkt mechanischer Maschinenbau, kaum in Industrie, nur für Neuentwicklungen."
      },
      {
        id: "kmq4",
        question: "Was sind Konstruktionswerkzeuge?",
        options: ["Grundsätze zur Umsetzung", "Hilfsmittel wie CAD, Kreativitätsmethoden", "Planmäßiges Vorgehen", "Feingranulare Arbeitsanweisungen"],
        correctIndex: 1,
        explanation: "Werkzeuge: Hilfsmittel zur Unterstützung (CAD, CAE, Kreativitätsmethoden). Prinzipien = Grundsätze. Methoden = planmäßiges Vorgehen. Techniken = Arbeitsanweisungen."
      },
      {
        id: "pmq1",
        question: "Was bedeutet Projektleitung?",
        options: ["Dauerhafte Führungsposition", "Führungsaufgabe auf Zeit für die Dauer des Projekts", "Nur Budgetverantwortung", "Delegation an Fachabteilungen"],
        correctIndex: 1,
        explanation: "Projektleitung ist eine Führungsaufgabe auf Zeit – für die Dauer des Projekts. Der Projektleiter ist Hauptverantwortlicher für den Projekterfolg."
      },
      {
        id: "pmq2",
        question: "Welches Dokument gehört zum Projektberichtswesen?",
        options: ["Marketingplan", "Budgetplan/-bericht", "Vertriebsstrategie", "Produktkatalog"],
        correctIndex: 1,
        explanation: "Projektberichtswesen: Projektbericht, Projektstatusbericht, Budgetplan/-bericht, Besuchsbericht. Ziel: IST/SOLL-Vergleich, Ursachen, Maßnahmen."
      },
      {
        id: "pmq3",
        question: "Welcher Punkt gehört zum Leitfaden für den Projektstatusbericht?",
        options: ["Wettbewerbsanalyse", "Erforderliche Entscheidungen der Geschäftsleitung", "Kundenzufriedenheit", "Marktanteil"],
        correctIndex: 1,
        explanation: "Leitfaden: 1. Allgemeine Angaben, 2. Vorgehenssystematik, 3. Aktuelle Planung, 4. Erforderliche Entscheidungen, 5. Ausblick (Risiken, Handlungsoptionen)."
      },
      {
        id: "krq1",
        question: "Was bedeutet LoP bei der Krisenbewältigung?",
        options: ["Liste der offenen Punkte", "Leitfaden für Optimierung", "Lastenheft für Projekt", "Logistik- und Produktionsplan"],
        correctIndex: 0,
        explanation: "LoP = Liste der offenen Punkte. Jeder Punkt mit Vorschlag: a) sofort beheben, b) zum Termin beheben, c) weitere Klärungen. Kunde muss LoP als Grundlage anerkennen."
      },
      {
        id: "krq2",
        question: "Welche Kategorie in der LoP bedeutet 'abschmettern bzw. Nachforderungen stellen'?",
        options: ["a) sofort unentgeltlich beheben", "b) zum Termin unentgeltlich beheben", "c) weitere Klärungen erforderlich", "Alle Kategorien"],
        correctIndex: 2,
        explanation: "Kategorie c): weitere Klärungen erforderlich – im Klartext abschmettern oder Nachforderungen stellen. Wichtig: Auf keinen Fall sich bei c) festbeißen."
      },
      {
        id: "krq3",
        question: "Was schafft Vertrauen bei der Krisenbewältigung?",
        options: ["Schnelle Schuldzuweisung", "Vereinbarungen einhalten und Verbindlichkeit", "Vermeidung von Transparenz", "Verzögerung der Lösung"],
        correctIndex: 1,
        explanation: "Verbindlichkeit schafft Vertrauen. Außerdem: äußerst schnell reagieren, Vereinbarungen einhalten, Transparenz in die Sachlage bringen, juristische Rückendeckung."
      }
    ]
  },
  {
    id: "anforderungsmanagement-mbse",
    title: "Kapitel 4: Anforderungsmanagement und MBSE in der Produktentwicklung",
    description: "Requirements-based Engineering (Lasten-/Pflichtenheft), Anforderungstypen, MBSE, SysML, System- und Stakeholderkontext",
    flashcards: [
      {
        id: "am1",
        question: "Was ist der Unterschied zwischen Lastenheft und Pflichtenheft?",
        answer: "Lastenheft: 'Was und wofür' – Nutzungsanforderungen, vom Auftraggeber. Pflichtenheft: 'Wie und womit' – Lösungsspezifikation, Produkteigenschaften, vom Auftragnehmer.",
        category: "RBE"
      },
      {
        id: "am2",
        question: "Was ist eine Anforderung (Requirement)?",
        answer: "Definition für eine Systemeigenschaft, die von einem Stakeholder benötigt oder gewünscht wird. Beschreibt Nutzen/Bedürfnis, nicht die Lösung. Besteht immer aufgrund eines Anwendungsfalls. Jede Aktivität muss auf eine Anforderung zurückführbar sein.",
        category: "Anforderungen"
      },
      {
        id: "am3",
        question: "Welche Typen von Anforderungen gibt es?",
        answer: "Business Requirement: High-Level, von Anwendungsfall getrieben. Functional Requirement: WAS das System leisten soll. Non-functional Requirement: WIE GUT (Constraint, qualitativ).",
        category: "Anforderungen"
      },
      {
        id: "am4",
        question: "Welche Merkmale sollen Anforderungen haben?",
        answer: "Clearly identified (eindeutige ID, Pflicht vs. Nice-to-have). Clear and consistent (eindeutig, Verbkonstrukt, nicht lösungsspezifisch). Validatable/verifiable (quantitativ mit Toleranzen). Traceable (Herkunft, Rückverfolgbarkeit). Owned (Eigentümer verantwortlich).",
        category: "Anforderungen"
      },
      {
        id: "am5",
        question: "Welche Modalverben werden bei Anforderungen verwendet?",
        answer: "shall = verpflichtend (soll). must = gesetzlich/Behörde (muss). will = Zusicherung. may = zulässig. can = Möglichkeit/Vermögen. should = Empfehlung.",
        category: "Formulierung"
      },
      {
        id: "am6",
        question: "Welche typischen Bestandteile hat eine Anforderung?",
        answer: "ID (Identifikator), Beschreibung, Rationale (Problembeschreibung), Abnahmekriterium (Validation criteria), Quelle (Origin), Eigentümer (Ownership).",
        category: "Anforderungen"
      },
      {
        id: "am7",
        question: "Was sind die Baselines im V-Modell?",
        answer: "Requirements Baseline, Functional Baseline (nach Funktionsanalyse), Design-to Baseline (nach High-Level Design), Build-to Baseline (nach Low-Level Design).",
        category: "RBE"
      },
      {
        id: "mbse1",
        question: "Was ist MBSE?",
        answer: "Model-based Systems Engineering: Formale Anwendung von Modellierung zur Unterstützung von Requirements, Design, Analysis, Verification, Validation – von der Konzeptphase durch den gesamten Lebenszyklus.",
        category: "MBSE"
      },
      {
        id: "mbse2",
        question: "Was ist ein Modell?",
        answer: "Abstrakte Beschreibung der Realität. Bei Abstraktion werden aus einer Sicht die wesentlichen Merkmale ausgesondert. Eine Sicht ist eine Projektion des Modells aus einer bestimmten Perspektive.",
        category: "MBSE"
      },
      {
        id: "mbse3",
        question: "Wann RBE, wann MBRE/MBSE?",
        answer: "RBE: einfache Projekte, Lasten-/Pflichtenheft, natürliche Sprache. MBRE: höhere Systemkomplexität, (semi-)formale Sprachen, verschiedene Betrachtungswinkel in einem Modell. Wahl abhängig von Entwicklungsaufwand und Systemkomplexität.",
        category: "MBSE"
      },
      {
        id: "mbse4",
        question: "Was ist die Executable Specification?",
        answer: "Ausführbares Modell – Übergang von textbasierter Spezifikation zum ausführbaren Modell. Ermöglicht frühe Verifikation durch Simulation. Modelle können in ausführbare SW gewandelt werden.",
        category: "MBSE"
      },
      {
        id: "mbse5",
        question: "Welche Modellierungssprachen gibt es?",
        answer: "UML: hauptsächlich Softwaremodellierung. SysML: Spezifikation, Design, Verifikation komplexer Systeme (ab 2007). SysML hat z.B. Anforderungsdiagramm. Beide ähnlich, Schnittmenge = UML4SysML.",
        category: "SysML"
      },
      {
        id: "mbse6",
        question: "Was beschreibt der Stakeholderkontext?",
        answer: "Sichtweisen auf Anwendungsfälle und abzuleitende Anforderungen. Stakeholder = Person/Organisation mit Interesse am System. Modellierung: Anwendungsfalldiagramm (uc), Blockdefinitionsdiagramm (bdd). Akteure mit System verknüpft.",
        category: "SysML"
      },
      {
        id: "mbse7",
        question: "Was beschreibt der Systemkontext?",
        answer: "Umgebung des Systems, Kommunikation mit Umgebung. Fragen: Wer gehört zum System? Wer interagiert? Welche Information wird ausgetauscht? Externe Systeme als <<externalSystem>>, Umwelteinflüsse, Nutzersysteme. Festlegung der Systemgrenze.",
        category: "SysML"
      },
      {
        id: "mbse8",
        question: "Was ist die Produktstruktur?",
        answer: "Physische, hierarchische Zusammensetzung eines Produkts aus Komponenten und deren physischen Beziehungen. Baugruppen enthalten Einzelteile und Unter-Baugruppen. Produktarchitektur = Produktstruktur + Funktionsstruktur.",
        category: "SysML"
      },
      {
        id: "mbse9",
        question: "Welche XiL-Verfahren gibt es zur Verifikation?",
        answer: "Model-in-the-Loop (MiL), Software-in-the-Loop (SiL), Processor-in-the-Loop (PiL) – frühe Verifikation. Hardware-in-the-Loop (HiL) – Integrationsphase. Rapid Prototyping zur Validierung/Verifikation.",
        category: "MBSE"
      },
      {
        id: "mbse10",
        question: "Welche Werkzeuge gibt es für MBSE?",
        answer: "Anforderungsmanagement: IBM DOORS (UUID, Baselines). Modellierung: Cameo Systems Modeler, Enterprise Architect, Rhapsody; Open Source: Papyrus, Modelio.",
        category: "Werkzeuge"
      }
    ],
    quizQuestions: [
      {
        id: "amq1",
        question: "Wer unterhält das Lastenheft?",
        options: ["Auftragnehmer", "Auftraggeber", "Beide gemeinsam", "Externe Berater"],
        correctIndex: 1,
        explanation: "Lastenheft = Nutzungsanforderungen, 'was und wofür' – vom Auftraggeber. Pflichtenheft = Lösungsspezifikation – vom Auftragnehmer."
      },
      {
        id: "amq2",
        question: "Welcher Anforderungstyp definiert WIE GUT etwas geleistet werden soll?",
        options: ["Business Requirement", "Functional Requirement", "Non-functional Requirement", "Technical Requirement"],
        correctIndex: 2,
        explanation: "Non-functional Requirement: Constraint, qualitativ – z.B. Staubaufnahme 75%. Functional = WAS. Business = High-Level vom Anwendungsfall."
      },
      {
        id: "amq3",
        question: "Welches Modalverb bedeutet eine verpflichtende Anforderung?",
        options: ["may", "can", "shall", "should"],
        correctIndex: 2,
        explanation: "shall = verpflichtend (soll). must = gesetzlich. may = zulässig. can = Möglichkeit. should = Empfehlung."
      },
      {
        id: "amq4",
        question: "Welche Baseline folgt nach der Funktionsanalyse?",
        options: ["Requirements Baseline", "Functional Baseline", "Design-to Baseline", "Build-to Baseline"],
        correctIndex: 1,
        explanation: "Reihenfolge: Requirements → Functional (nach Funktionsanalyse) → Design-to (nach High-Level Design) → Build-to (nach Low-Level Design)."
      },
      {
        id: "mbseq1",
        question: "Was bedeutet MBSE?",
        options: ["Model-based Software Engineering", "Model-based Systems Engineering", "Method-based Systems Engineering", "Modular-based Systems Engineering"],
        correctIndex: 1,
        explanation: "MBSE = Model-based Systems Engineering – formale Anwendung von Modellierung für Requirements, Design, Analysis, Verification, Validation."
      },
      {
        id: "mbseq2",
        question: "Für was ist SysML im Gegensatz zu UML besser geeignet?",
        options: ["Nur Software", "Komplexe Systeme (Spezifikation, Design, Verifikation)", "Datenbanken", "Webanwendungen"],
        correctIndex: 1,
        explanation: "SysML: komplexe Systeme, Spezifikation, Design, Verifikation. UML: hauptsächlich Software. SysML hat z.B. Anforderungsdiagramm."
      },
      {
        id: "mbseq3",
        question: "Was beschreibt der Stakeholderkontext?",
        options: ["Hardware-Schnittstellen", "Sichtweisen auf Anwendungsfälle und Anforderungen", "Produktstruktur", "Testfälle"],
        correctIndex: 1,
        explanation: "Stakeholderkontext: Sichtweisen auf Anwendungsfälle und abzuleitende Anforderungen. Stakeholder = Person/Organisation mit Interesse. Modellierung mit Anwendungsfalldiagramm."
      },
      {
        id: "mbseq4",
        question: "Welches XiL-Verfahren ermöglicht frühe Verifikation in der Designphase?",
        options: ["HiL", "MiL", "Nur manuelle Tests", "Keines"],
        correctIndex: 1,
        explanation: "MiL (Model-in-the-Loop), SiL, PiL ermöglichen frühe Verifikation. HiL = Hardware-in-the-Loop, erst in Integrationsphase."
      },
      {
        id: "mbseq5",
        question: "Was ist die Produktarchitektur?",
        options: ["Nur die Funktionsstruktur", "Produktstruktur + Funktionsstruktur", "Nur die physische Struktur", "Die Softwarearchitektur"],
        correctIndex: 1,
        explanation: "Produktarchitektur = Produktstruktur (physischer Aufbau) + Funktionsstruktur (funktionale Beschreibung), Elemente in Beziehung."
      }
    ]
  },
  {
    id: "variantengerechte-gestaltung",
    title: "Kapitel 5: Variantengerechte Gestaltung",
    description: "Teufelskreis Diversifizierung, Strategien (Modularität, Plattform), VAM, TeV, PFS, MIG, Methode nach Kipp",
    flashcards: [
      {
        id: "vg1",
        question: "Was ist die Kernidee der variantengerechten Gestaltung?",
        answer: "Bereitstellung der nötigen Angebotsvielfalt mit möglichst geringer interner Vielfalt an Komponenten und Prozessen.",
        category: "Relevanz"
      },
      {
        id: "vg2",
        question: "Was ist der Teufelskreis der Diversifizierungsstrategie?",
        answer: "Individuelle Nachfrage → Erweiterung Angebotsvielfalt → neue Produktvarianten → erhöhte Komponentenvielfalt → Komplexität → Prozessvielfalt → steigende Stückkosten → sinkende Wettbewerbsfähigkeit.",
        category: "Relevanz"
      },
      {
        id: "vg3",
        question: "Welche Strategien zur Beherrschung varianzinduzierter Komplexität gibt es?",
        answer: "Produktbasiert: Modularität, Plattform, Modulbaukasten, Gleichmodul. Prozessbasiert: Postponement (Variantenbildung ans Prozessende), Prozesskommunalität (gleiche Prozessschritte für Varianten).",
        category: "Strategien"
      },
      {
        id: "vg4",
        question: "Was ist die Plattformstrategie?",
        answer: "Plattform = Ansammlung von Komponenten, Prozessen, Wissen, Personen und Beziehungen, die von mehreren Produkten genutzt werden. Von dieser Plattform können unterschiedliche Produkte abgeleitet werden.",
        category: "Strategien"
      },
      {
        id: "vg5",
        question: "Welche Kriterien hat die ideale variantengerechte Produktstruktur?",
        answer: "Differenzierung in Standard- und Variantenkomponenten. Reduzierung zum Träger einer varianten Produkteigenschaft. Eins-zu-eins-Zuordnung von Produkteigenschaften zu Variantenkomponenten. Entkopplung der Variantenkomponenten. Einfache und standardisierte Schnittstellen.",
        category: "Idealbild"
      },
      {
        id: "vg6",
        question: "Welche vier Ebenen hat das Variety Allocation Model (VAM)?",
        answer: "1. Variante Produkteigenschaften (externe Vielfalt). 2. Variante Funktionen. 3. Variante Wirkprinzipien und -geometrien. 4. Variante Komponenten (interne Vielfalt).",
        category: "VAM"
      },
      {
        id: "vg7",
        question: "Was ist der Unterschied zwischen externer und interner Vielfalt?",
        answer: "Externe: Produkteigenschaften aus Kundensicht (Eigenschaften), meist nicht direkt beeinflussbar. Interne: technische Merkmale (Funktionen, Wirkprinzipien, Komponenten), direkt vom Entwickler beeinflussbar.",
        category: "VAM"
      },
      {
        id: "vg8",
        question: "Welche Partialmodelle sind die Datenquellen für das VAM?",
        answer: "Vielfaltsbaum (TeV) = externe Vielfalt. Produktfamilien-Funktionsstruktur (PFS) = varianten Funktionen. Module Interface Graph (MIG) = varianten Komponenten, Flüsse, Struktur.",
        category: "Modelle"
      },
      {
        id: "vg9",
        question: "Was ist der Module Interface Graph (MIG)?",
        answer: "Darstellung aller Varianten einer Produktfamilie und ihrer internen Vielfalt. Komponenten (standard, variant, optional), Flüsse (Struktur, Elektrik, Präparat, Material). Interdisziplinär kommunizierbar.",
        category: "MIG"
      },
      {
        id: "vg10",
        question: "Welche Vorgehensschritte hat die Methode nach Kipp?",
        answer: "1. Definition der Ziele. 2. Erfassung der externen Vielfalt (TeV). 3. Erfassung der internen Vielfalt (PFS, MIG). 4. Konzeptfindung, 5. Konzeptauswahl. 6.+7. Reduzieren der internen Vielfalt, variantengerechte Komponenten.",
        category: "Methode"
      },
      {
        id: "vg11",
        question: "Welche Lösungsansätze gibt es auf Ebene der Komponenten?",
        answer: "Eliminieren der technischen Varianz. Abtrennen von Standardanteilen der varianten Komponenten. Zerlegen von Komponenten mit Bezug zu mehreren Unterscheidungsmerkmalen. Überdimensionieren. Integrieren von Komponenten mit Bezug zum gleichen Unterscheidungsmerkmal.",
        category: "Lösungsfindung"
      },
      {
        id: "vg12",
        question: "Welche Lösungsansätze gibt es auf Ebene der Wirkprinzipien?",
        answer: "Variante Wirkprinzipien auf variante Wirkgeometrien beschränken. Verlagerung der Varianz in Softwareanteile. Suche nach alternativen, einfacheren Prinzipien.",
        category: "Lösungsfindung"
      },
      {
        id: "vg13",
        question: "Welche Lösungsansätze gibt es auf Ebene der Funktionen?",
        answer: "Standardisieren von Eingängen. Aufschieben der Variantenbildung entlang des Umsatzes nach hinten. Reduzieren der Vernetzung.",
        category: "Lösungsfindung"
      },
      {
        id: "vg14",
        question: "Was ist Cut-to-fit-Modularität?",
        answer: "Geometrische Varianten durch Zuweisung (z.B. variante Länge einer Welle). Nutzung von Adaptern. Variante Geometrie bei gleichem Wirkprinzip.",
        category: "Richtlinien"
      },
      {
        id: "vg15",
        question: "Welche Richtlinien gelten für die Entwicklung neuer Produktvarianten?",
        answer: "Neue Varianten eigenständig entwickeln. Neue Version einer Variante vor komplett neuer Variante. Postponement: Varianten erst am Ende des Montageprozesses. Prozesskommunalität: keine varianten Arbeitsschritte.",
        category: "Richtlinien"
      }
    ],
    quizQuestions: [
      {
        id: "vgq1",
        question: "Was ist die Kernidee der variantengerechten Gestaltung?",
        options: ["Maximale interne Vielfalt", "Angebotsvielfalt mit möglichst geringer interner Vielfalt", "Minimale Angebotsvielfalt", "Standardisierung aller Komponenten"],
        correctIndex: 1,
        explanation: "Kernidee: Bereitstellung der nötigen Angebotsvielfalt mit möglichst geringer interner Vielfalt an Komponenten und Prozessen."
      },
      {
        id: "vgq2",
        question: "Welche Strategie ist prozessbasiert?",
        options: ["Modularität", "Plattform", "Postponement", "Modulbaukasten"],
        correctIndex: 2,
        explanation: "Postponement und Prozesskommunalität sind prozessbasierte Strategien. Modularität, Plattform, Modulbaukasten sind produktbasiert."
      },
      {
        id: "vgq3",
        question: "Welche Ebene des VAM steht für die externe Vielfalt?",
        options: ["Variante Funktionen", "Variante Komponenten", "Variante Produkteigenschaften", "Variante Wirkprinzipien"],
        correctIndex: 2,
        explanation: "Ebene 1: Variante Produkteigenschaften = externe Vielfalt (Kundensicht). Ebenen 2–4 = interne Vielfalt."
      },
      {
        id: "vgq4",
        question: "Welches Modell liefert die varianten Produkteigenschaften für das VAM?",
        options: ["MIG", "PFS", "Vielfaltsbaum (TeV)", "DSM"],
        correctIndex: 2,
        explanation: "Vielfaltsbaum (TeV) = Tree of external Variety – erfasst die externe Vielfalt. PFS = Funktionen. MIG = Komponenten."
      },
      {
        id: "vgq5",
        question: "Was bedeutet Postponement?",
        options: ["Frühe Variantenbildung", "Variantenbildung ans Ende des Prozesses", "Keine Varianten", "Parallele Entwicklung"],
        correctIndex: 1,
        explanation: "Postponement: Verlagerung der Prozessschritte, die Varianten differenzieren, ans Ende des Prozesses."
      },
      {
        id: "vgq6",
        question: "Welches Kriterium des Idealbilds bedeutet 'eine Produkteigenschaft → eine Variantenkomponente'?",
        options: ["Entkopplung", "Eins-zu-eins-Zuordnung", "Schnittstellenstandardisierung", "Überdimensionierung"],
        correctIndex: 1,
        explanation: "Eins-zu-eins-Zuordnung: Jede variante Produkteigenschaft wird von genau einer Variantenkomponente getragen."
      },
      {
        id: "vgq7",
        question: "Welcher Lösungsansatz gehört zur Ebene der Komponenten?",
        options: ["Standardisieren von Eingängen", "Überdimensionieren von varianten Komponenten", "Verlagerung in Software", "Aufschieben der Variantenbildung"],
        correctIndex: 1,
        explanation: "Komponentenebene: eliminieren, abtrennen, zerlegen, überdimensionieren, integrieren. Funktionen: standardisieren, aufschieben. Wirkprinzipien: Software, Wirkgeometrien."
      },
      {
        id: "vgq8",
        question: "Was zeigt der Module Interface Graph (MIG)?",
        options: ["Nur Kosten", "Komponenten, Flüsse, Struktur aller Varianten", "Nur externe Vielfalt", "Nur Funktionen"],
        correctIndex: 1,
        explanation: "MIG: Darstellung aller Varianten und interner Vielfalt – Komponenten (standard/variant/optional), Flüsse (Struktur, Elektrik, Material)."
      },
      {
        id: "vgq9",
        question: "Was ist die Plattformstrategie?",
        options: ["Einzelproduktentwicklung", "Ansammlung von Komponenten/Prozessen/Wissen für mehrere Produkte", "Nur Software-Plattform", "Outsourcing-Strategie"],
        correctIndex: 1,
        explanation: "Plattform: Ansammlung von Komponenten, Prozessen, Wissen, Personen – von mehreren Produkten genutzt. Von dieser Plattform werden Produkte abgeleitet."
      },
      {
        id: "vgq10",
        question: "Welche Richtlinie empfiehlt 'Varianten erst am Ende des Montageprozesses erzeugen'?",
        options: ["Prozesskommunalität", "Postponement", "Cut-to-fit", "1-zu-1-Zuordnung"],
        correctIndex: 1,
        explanation: "Postponement: Produktvarianten sollten erst am Ende des Montageprozesses erzeugt werden. Prozesskommunalität = gleiche Arbeitsschritte für Varianten."
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
    id: "individualisierung",
    title: "Kapitel 7: Individualisierung",
    description: "Mass Customization, DfMAd, Soft/Hard Customization, selbstindividualisierungsgerechte Produktstrukturplanung",
    flashcards: [
      {
        id: "i1",
        question: "Was ist Mass Customization?",
        answer: "Kundenindividuelle Massenproduktion – Verbindung von Massenproduktion mit individualisierten Produkten nach Kundenwunsch. Hybride Wettbewerbsstrategie: Kosteneffizienz und Differenzierung gleichzeitig. Ziel: individuelle Produkte nur geringfügig teurer als Standardprodukte.",
        category: "Definition"
      },
      {
        id: "i2",
        question: "Was bedeutet DfMAd?",
        answer: "Design for Mass Adaptation – Gestaltung von Produkten für individuelle Kundenanforderungen im Massenproduktionskontext. Verbindet Vorteile der Massenproduktion (Skaleneffekte, Automatisierung) mit kundenindividuellen Produktanpassungen.",
        category: "Definition"
      },
      {
        id: "i3",
        question: "Was ist Selbstindividualisierung?",
        answer: "Produkte, die Kunden vor dem Kauf eigenständig an ihre individuellen Bedürfnisse anpassen können. Erfordert strukturelle Entkopplung von Produktkomponenten und Balance zwischen Kundenfreiheitsgraden und Unternehmenskomplexität.",
        category: "Definition"
      },
      {
        id: "i4",
        question: "Was ist Soft Customization?",
        answer: "Individualisierung außerhalb der Fertigung: explizite/implizite Personalisierung, individuelle Endfertigung im Vertrieb (z.B. Catering, Service-Anpassungen), Serviceindividualisierung (z.B. individuelle Musikprogramme, Website-Baukästen).",
        category: "Strategien"
      },
      {
        id: "i5",
        question: "Was ist Hard Customization?",
        answer: "Individualisierung in der Fertigung: standardisierte Vorproduktion mit individueller Endproduktion, individuelle Kombination standardisierter Module (z.B. Fahrzeugkonfiguratoren), massenhafte Fertigung von Unikaten.",
        category: "Strategien"
      },
      {
        id: "i6",
        question: "Welche Treiber führen zu Individualisierungsbedarf?",
        answer: "Gesellschaftliches Streben nach Individualität, Globalisierung, verändernde Massenmärkte, zunehmend individuelle Kundenanforderungen, Digitalisierung und Industrie 4.0.",
        category: "Treiber"
      },
      {
        id: "i7",
        question: "Was ist die selbstindividualisierungsgerechte Produktstrukturplanung?",
        answer: "Integriertes Vorgehen: Analyse kundenseitiger Individualisierungsbedarfe, Festlegung der zur Individualisierung bestimmten Produktkomponenten, strukturelle Entkopplung relevanter Beziehungen zur Maximierung von Individualisierungsfreiheitsgraden.",
        category: "Methoden"
      },
      {
        id: "i8",
        question: "Welche Vorteile bietet Mass Customization als Point of Differentiation?",
        answer: "Vermeidung von Preiskampf durch Erfüllung individueller Kundenwünsche, Positionierung als Innovationsführer, Gewinnung von Kundendaten für Marktforschung, dauernde Kundenbindung.",
        category: "Vorteile"
      },
      {
        id: "i9",
        question: "Welche technologischen Enabler unterstützen Individualisierung?",
        answer: "Internetbasierte Konfiguratoren, flexible Automatisierung, digitale Vernetzung (Industrie 4.0), moderne Informations- und Kommunikationstechnik. Ermöglichen Kunden-Selbstgestaltung bei hochautomatisierter Produktion.",
        category: "Technologie"
      },
      {
        id: "i10",
        question: "Was bedeutet strukturelle Entkopplung in der Individualisierung?",
        answer: "Relevante Beziehungen zwischen Produktkomponenten werden so gestaltet, dass Individualisierung möglich wird. Komponenten können unabhängig voneinander variiert werden. Voraussetzung für selbstindividualisierbare Produktstrukturen.",
        category: "Methoden"
      },
      {
        id: "i11",
        question: "Welches Spannungsfeld besteht bei Selbstindividualisierung?",
        answer: "Balance zwischen Kundenfreiheitsgraden (wie viel darf der Kunde anpassen?) und Unternehmenskomplexität (Kosten, Variantenvielfalt, Fertigungsaufwand). Zu viel Freiheit erhöht Komplexität, zu wenig reduziert Kundennutzen.",
        category: "Herausforderungen"
      },
      {
        id: "i12",
        question: "Wie unterscheiden sich Soft und Hard Customization hinsichtlich der Fertigung?",
        answer: "Soft: Individualisierung außerhalb/ohne Änderung der Fertigung (Service, Personalisierung). Hard: Individualisierung erfolgt in der Fertigung selbst (modulare Kombination, individuelle Endfertigung, Unikate).",
        category: "Strategien"
      },
      {
        id: "i13",
        question: "Welche Rolle spielt Modularisierung für Individualisierung?",
        answer: "Modulare Produktstrukturen sind Grundlage für Hard Customization. Module ermöglichen individuelle Kombination standardisierter Komponenten. Modularisierung und Individualisierung ergänzen sich – modulare Baukästen ermöglichen Konfiguratoren.",
        category: "Zusammenhang"
      },
      {
        id: "i14",
        question: "Was ist das Ziel der selbstindividualisierungsgerechten Produktstrukturplanung?",
        answer: "Durchgängiges Vorgehen von der Identifikation der Individualisierungsbedarfe über die Festlegung selbstindividualisierbarer Komponenten bis zu deren struktureller Entkopplung. Maximierung von Individualisierungsfreiheitsgraden bei kontrollierter Komplexität.",
        category: "Methoden"
      },
      {
        id: "i15",
        question: "Welche Ansätze umfasst ein integriertes Vorgehen zur Individualisierung?",
        answer: "Organisatorische Maßnahmen (Prozesse, Rollen), methodische Maßnahmen (Analyse, Festlegung, Entkopplung), technische Maßnahmen (Konfiguratoren, flexible Fertigung). Kombination aller drei Ebenen.",
        category: "Methoden"
      }
    ],
    quizQuestions: [
      {
        id: "iq1",
        question: "Was bedeutet DfMAd?",
        options: ["Design for Mass Production", "Design for Mass Adaptation", "Design for Modular Architecture", "Design for Mass Assembly"],
        correctIndex: 1,
        explanation: "DfMAd = Design for Mass Adaptation. Gestaltung von Produkten für individuelle Kundenanforderungen im Massenproduktionskontext. Verbindet Skaleneffekte der Massenproduktion mit kundenindividuellen Anpassungen."
      },
      {
        id: "iq2",
        question: "Bei welcher Customization-Art erfolgt die Individualisierung in der Fertigung?",
        options: ["Soft Customization", "Hard Customization", "Service Customization", "Personalisierung"],
        correctIndex: 1,
        explanation: "Hard Customization: Individualisierung in der Fertigung (modulare Kombination, individuelle Endfertigung, Unikate). Soft Customization: außerhalb der Fertigung (Personalisierung, Service)."
      },
      {
        id: "iq3",
        question: "Was ist Selbstindividualisierung?",
        options: ["Anpassung durch Hersteller", "Kunde passt Produkt vor dem Kauf selbst an", "Serienproduktion ohne Varianten", "Nachträgliche Modifikation im Service"],
        correctIndex: 1,
        explanation: "Selbstindividualisierung: Kunden können Produkte vor dem Kauf eigenständig an ihre Bedürfnisse anpassen. Erfordert strukturelle Entkopplung und geeignete Produktstruktur."
      },
      {
        id: "iq4",
        question: "Welches Spannungsfeld besteht bei der Selbstindividualisierung?",
        options: ["Qualität vs. Preis", "Kundenfreiheitsgrade vs. Unternehmenskomplexität", "Innovation vs. Tradition", "Global vs. Lokal"],
        correctIndex: 1,
        explanation: "Balance zwischen Kundenfreiheitsgraden (wie viel darf der Kunde anpassen?) und Unternehmenskomplexität (Kosten, Variantenvielfalt). Zu viel Freiheit = hohe Komplexität, zu wenig = geringer Kundennutzen."
      },
      {
        id: "iq5",
        question: "Welche Technologie ermöglicht Kunden-Selbstgestaltung von Produkten?",
        options: ["ERP-Systeme", "Internetbasierte Konfiguratoren", "CAD-Software", "Lagerverwaltungssysteme"],
        correctIndex: 1,
        explanation: "Internetbasierte Konfiguratoren ermöglichen Kunden, Produkte selbst zu gestalten. Dahinter arbeiten hochautomatisierte, flexible Produktionssysteme. Teil von Industrie 4.0 und Digitalisierung."
      },
      {
        id: "iq6",
        question: "Welcher Vorteil von Mass Customization hilft, Preiskampf zu vermeiden?",
        options: ["Skaleneffekte", "Erfüllung individueller Kundenwünsche", "Standardisierung", "Outsourcing"],
        correctIndex: 1,
        explanation: "Point of Differentiation: Durch Erfüllung individueller Kundenwünsche positioniert sich das Unternehmen differenziert – weniger Preiskampf, Kundenbindung, Innovationsführerschaft."
      },
      {
        id: "iq7",
        question: "Was ist der erste Schritt der selbstindividualisierungsgerechten Produktstrukturplanung?",
        options: ["Strukturelle Entkopplung", "Analyse kundenseitiger Individualisierungsbedarfe", "Implementierung Konfigurator", "Festlegung Modulanzahl"],
        correctIndex: 1,
        explanation: "Integriertes Vorgehen: 1. Analyse kundenseitiger Individualisierungsbedarfe, 2. Festlegung der zur Individualisierung bestimmten Komponenten, 3. Strukturelle Entkopplung zur Maximierung der Freiheitsgrade."
      },
      {
        id: "iq8",
        question: "Welche Customization-Art umfasst Serviceindividualisierung?",
        options: ["Hard Customization", "Soft Customization", "Modular Customization", "Unikatfertigung"],
        correctIndex: 1,
        explanation: "Soft Customization: Individualisierung außerhalb der Fertigung – z.B. Serviceindividualisierung (individuelle Musikprogramme, Website-Baukästen), Personalisierung, Endfertigung im Vertrieb."
      },
      {
        id: "iq9",
        question: "Warum ist Modularisierung wichtig für Individualisierung?",
        options: ["Reduziert Qualität", "Module ermöglichen individuelle Kombination standardisierter Komponenten", "Eliminiert Varianten", "Vereinfacht nur die Fertigung"],
        correctIndex: 1,
        explanation: "Modulare Produktstrukturen sind Grundlage für Hard Customization. Module ermöglichen individuelle Kombination – z.B. Fahrzeugkonfiguratoren. Modularisierung und Individualisierung ergänzen sich."
      },
      {
        id: "iq10",
        question: "Was bedeutet strukturelle Entkopplung in der Individualisierung?",
        options: ["Verkauf von Komponenten einzeln", "Beziehungen zwischen Komponenten so gestalten, dass unabhängige Variation möglich ist", "Reduktion der Schnittstellen", "Outsourcing von Modulen"],
        correctIndex: 1,
        explanation: "Strukturelle Entkopplung: Relevante Beziehungen zwischen Komponenten werden so gestaltet, dass Individualisierung möglich wird. Komponenten können unabhängig variiert werden – Voraussetzung für selbstindividualisierbare Strukturen."
      }
    ]
  },
  {
    id: "konstruktionskataloge",
    title: "Kapitel 8: Konstruktionskataloge",
    description: "Grundlagen, Katalogarten (Objekt-, Operations-, Lösungskatalog), Aufbau, Vorgehen bei der Anwendung",
    flashcards: [
      {
        id: "kk1",
        question: "Was ist der Unterschied zwischen Problem und Aufgabe (VDI 2221)?",
        answer: "Problem: Zwischen unerwünschtem Anfangszustand und gewünschtem Endzustand besteht eine Barriere. Aufgabe: Anfangs- und Endzustand sowie Hilfsmittel und Vorgehen zum Erreichen des Endzustands sind bekannt.",
        category: "Grundlagen"
      },
      {
        id: "kk2",
        question: "Welche Aktivitäten umfasst der grundlegende Problemlösungsprozess (VDI 2221)?",
        answer: "a) Unbekannte lösen, b) Problem präzisieren, c) Lösungen sammeln (Lösungsraum aufspannen), d) Lösungsalternativen analysieren, e) Eigenschaften bewerten, f) Festlegung auf Lösung(en). Konstruktionskataloge unterstützen vor allem c).",
        category: "Grundlagen"
      },
      {
        id: "kk3",
        question: "Welche Methoden der Lösungsfindung gibt es?",
        answer: "Diskursiv betonte (systematische Untersuchung, Ordnungsschemata, Konstruktionskataloge), intuitiv betonte (Brainstorming, Methode 635, Galeriemethode), konventionelle (Literaturrecherche, Analyse technischer/natürlicher Systeme, Bionik, Analogiebetrachtung).",
        category: "Methoden"
      },
      {
        id: "kk4",
        question: "Welche Vorteile bieten Konstruktionskataloge?",
        answer: "Lösungsraum vergrößern, Auswahl erleichtern, systematisches Vorgehen unterstützen, wenig bekannte Wissensquellen ausschöpfen, Konstruktionsablauf rationalisieren, neue Anregungen, Konstruktionssynthese erleichtern.",
        category: "Vorteile"
      },
      {
        id: "kk5",
        question: "Wie definiert VDI 2222 Blatt 2 Konstruktionskataloge?",
        answer: "Informationsspeicher: abgestimmt auf Konstruktionsprozess, weitestgehend vollständig, widerspruchsfrei in sich und untereinander, klar gegliedert, nach Möglichkeit eindeutige Zugriffsmerkmale. Abgrenzung zur Lösungssammlung: nicht unbedingt vollständig/durchstrukturiert.",
        category: "Definition"
      },
      {
        id: "kk6",
        question: "Welche drei Katalogarten gibt es nach Roth?",
        answer: "Objektkatalog (aufgabenunabhängig, physikalische/geometrische Sachverhalte), Operationskatalog (Verfahren und Regeln), Lösungskatalog (Lösungen für spezifische Aufgabenstellungen, nach Funktionen geordnet).",
        category: "Katalogarten"
      },
      {
        id: "kk7",
        question: "Was enthält ein Objektkatalog?",
        answer: "Aufgabenunabhängige, grundlegende Sachverhalte: Fertigungsverfahren, Oberflächen, Volumina, Schwerpunkte, Trägheitsmomente, Lieferformen von Profilen, spezifische Konstruktionselemente (z.B. Kugellager).",
        category: "Objektkatalog"
      },
      {
        id: "kk8",
        question: "Was enthält ein Operationskatalog?",
        answer: "Verfahren und Verfahrensschritte, Regeln: für Variantenerzeugung, zur Erzeugung von Funktionsstrukturen, zur Erzeugung gestaltlicher Lösungsvarianten, zur Lösungsauswahl, zur Festigkeitsberechnung. Beziehen sich auf Objekte.",
        category: "Operationskatalog"
      },
      {
        id: "kk9",
        question: "Was enthält ein Lösungskatalog?",
        answer: "Lösungen für spezifische Aufgabenstellungen, nach Funktionen geordnet. Verschiedene Konkretisierungsstufen: Blockschaltbilder, elektrische Schaltpläne, skizzenhafte Lösungsprinzipien (z.B. Kraft erzeugen, Druck regeln).",
        category: "Lösungskatalog"
      },
      {
        id: "kk10",
        question: "Welche vier Teile hat der Aufbau von Konstruktionskatalogen?",
        answer: "1. Gliederungsteil: systematisch aufgebaute Ordnungskriterien. 2. Hauptteil: eigentlicher Kern (Objekte/Verfahren/Lösungen). 3. Zugriffsteil: Eigenschaften, an Verwendungszweck angepasst. 4. Anhang: ergänzende Informationen, Kommentare.",
        category: "Aufbau"
      },
      {
        id: "kk11",
        question: "Welche 7 Vorgehensschritte gibt es bei einem Lösungskatalog (VDI 2222)?",
        answer: "1. Problem abstrahieren und Aufgabe definieren. 2. Orientierung gewinnen und passenden Katalog aussuchen. 3. Anforderungen und Zugriffsteile mappen. 4. Weitere Randbedingungen berücksichtigen. 5. Sieben. 6. Verbleibende Lösungen vergleichen. 7. Beste Lösung auswählen und skizzieren.",
        category: "Anwendung"
      },
      {
        id: "kk12",
        question: "Was bedeutet 'Sieben' beim Umgang mit Konstruktionskatalogen?",
        answer: "Katalog mithilfe der gefundenen Merkmale und Randbedingungen durchmustern/durchsieben. Ausschließende Zugriffsmerkmale identifizieren. Unpassende Lösungen eliminieren, bis verbleibende Lösungen verglichen werden können.",
        category: "Anwendung"
      },
      {
        id: "kk13",
        question: "Wie unterscheidet sich die Handhabung von Objekt- und Lösungskatalogen?",
        answer: "Im Wesentlichen gleich (VDI 2222). Beide: Problem abstrahieren, passenden Katalog aussuchen, Anforderungen mappen, Randbedingungen berücksichtigen, sieben, vergleichen, auswählen. Objektkatalog: z.B. Handnietmaschine → Kniehebel für Rotation→Translation.",
        category: "Anwendung"
      },
      {
        id: "kk14",
        question: "Wie funktioniert die Anwendung eines Operationskatalogs?",
        answer: "1. Liste der Operationen der Reihe nach durchgehen. 2. Prüfen: Führen Änderungen (Funktionsstrukturen, Prinzipkombinationen, Entwürfe) zu erwünschten Wirkungen? 3. Abschätzung durch beschreibende Merkmale – Zugriff über Merkmale meist nicht möglich.",
        category: "Anwendung"
      },
      {
        id: "kk15",
        question: "Welche Quellen für Konstruktionskataloge gibt es?",
        answer: "Roth Band 1 & 2 (Grundlagen, Funktions-/Prinziplösungen, Handhabung, Erstellung), Roth Band 3 (Verbindungen, Bedeutung, Systematik), VDI 2222 Blatt 2 (Vorgehen, exemplarische Kataloge, Übersicht wo welche Kataloge zu finden sind).",
        category: "Quellen"
      },
      {
        id: "kk16",
        question: "Was ist ein Beispiel für die Anwendung von Lösungskatalogen?",
        answer: "Absetzkipper: Teilfunktion 'Große Kräfte durch Kraftvervielfachung erzeugen' → Katalog 'Einstufige Kraftmultiplikation'. Anforderungen mappen (z.B. kontinuierliche Kraftübertragung, Faktor 8) → Sieben → Druckausbreitung (Wagenheber) gewählt.",
        category: "Beispiele"
      },
      {
        id: "kk17",
        question: "Welche Zugriffsmerkmale hat der Katalog 'Einstufige Kraftmultiplikation'?",
        answer: "Systemklasse, Effekt (Kraftzerlegung, Kräftesummierung, Druckausbreitung), Richtung der Kräfte, Art der Kraftübertragung, übliche Größenordnung der Kraftvervielfachung (χ), Bedingungen, konstruktive Voraussetzungen.",
        category: "Beispiele"
      },
      {
        id: "kk18",
        question: "Können Konstruktionskataloge auch außerhalb der klassischen Konstruktion angewendet werden?",
        answer: "Ja. Beispiel: Material Design Catalogue für medizinische Phantome (Wegner, PKT). Katalog beschreibt Abbildungseigenschaften von Surrogaten für CT/MRI/US. Systematische Unterstützung statt trial-and-error bei Materialauswahl.",
        category: "Anwendung"
      }
    ],
    quizQuestions: [
      {
        id: "kkq1",
        question: "Welche Katalogart enthält Lösungen für spezifische Aufgabenstellungen, nach Funktionen geordnet?",
        options: ["Objektkatalog", "Operationskatalog", "Lösungskatalog", "Materialkatalog"],
        correctIndex: 2,
        explanation: "Lösungskatalog: Lösungen für spezifische Aufgabenstellungen, nach Funktionen geordnet (z.B. Kraft erzeugen, Druck regeln). Objektkatalog = aufgabenunabhängige Sachverhalte. Operationskatalog = Verfahren und Regeln."
      },
      {
        id: "kkq2",
        question: "Was ist der erste Schritt beim Umgang mit einem Lösungskatalog?",
        options: ["Sieben", "Problem abstrahieren und Aufgabe definieren", "Beste Lösung skizzieren", "Orientierung gewinnen"],
        correctIndex: 1,
        explanation: "Schritt 1: Problem abstrahieren und Aufgabe definieren – elementare Hauptfunktion ermitteln, abstrahieren und verallgemeinern. Dann: Orientierung, Anforderungen mappen, Randbedingungen, Sieben, Vergleichen, Auswählen."
      },
      {
        id: "kkq3",
        question: "Welche Katalogart enthält Fertigungsverfahren, Volumina und Trägheitsmomente?",
        options: ["Lösungskatalog", "Operationskatalog", "Objektkatalog", "Funktionskatalog"],
        correctIndex: 2,
        explanation: "Objektkatalog: aufgabenunabhängig, grundlegende physikalische, geometrische, technologische Sachverhalte – z.B. Fertigungsverfahren, Oberflächen, Volumina, Schwerpunkte, Trägheitsmomente, Lieferformen."
      },
      {
        id: "kkq4",
        question: "Welcher Teil eines Konstruktionskatalogs enthält die Eigenschaften der Objekte/Verfahren/Lösungen?",
        options: ["Gliederungsteil", "Hauptteil", "Zugriffsteil", "Anhang"],
        correctIndex: 2,
        explanation: "Zugriffsteil: Eigenschaften der einzelnen Objekte/Verfahren/Lösungen, an Verwendungszweck angepasst. Gliederungsteil = Ordnungskriterien. Hauptteil = eigentlicher Kern. Anhang = ergänzende Infos."
      },
      {
        id: "kkq5",
        question: "In welcher Aktivität des Problemlösungsprozesses unterstützen Konstruktionskataloge besonders?",
        options: ["Problem präzisieren", "Lösungen sammeln (Lösungsraum aufspannen)", "Eigenschaften bewerten", "Festlegung auf Lösung"],
        correctIndex: 1,
        explanation: "Konstruktionskataloge unterstützen vor allem das Sammeln konkreter Lösungen und das Aufspannen des Lösungsraums (Aktivität c). Sie vergrößern den Lösungssraum und erleichtern die Auswahl."
      },
      {
        id: "kkq6",
        question: "Was bedeutet 'Anforderungen und Zugriffsteile mappen'?",
        options: ["Zeichnungen erstellen", "Zusammenpassendes identifizieren, ausschließende Zugriffsmerkmale finden", "Katalog neu ordnen", "Randbedingungen ignorieren"],
        correctIndex: 1,
        explanation: "Anforderungen der Aufgabe den Zugriffsmerkmalen des Katalogs zuordnen. Zusammenpassendes identifizieren oder passend ableiten. Vor allem ausschließende Zugriffsmerkmale identifizieren für das Sieben."
      },
      {
        id: "kkq7",
        question: "Welche Katalogart enthält Regeln für Variantenerzeugung und Funktionsstrukturen?",
        options: ["Objektkatalog", "Operationskatalog", "Lösungskatalog", "Gestaltungskatalog"],
        correctIndex: 1,
        explanation: "Operationskatalog: Verfahren und Regeln – für Variantenerzeugung, zur Erzeugung von Funktionsstrukturen, zur Erzeugung gestaltlicher Lösungsvarianten, zur Lösungsauswahl, zur Festigkeitsberechnung."
      },
      {
        id: "kkq8",
        question: "Wo findet man eine Übersicht, wo welche Konstruktionskataloge zu finden sind?",
        options: ["Roth Band 1", "VDI 2222 Blatt 2", "VDI 2221", "ISO 9001"],
        correctIndex: 1,
        explanation: "VDI 2222 Blatt 2 enthält Vorgehen, exemplarische Kataloge sowie eine Übersicht darüber, wo welche Kataloge zu finden sind. Roth Bände 1–3 enthalten die eigentlichen Kataloginhalte."
      },
      {
        id: "kkq9",
        question: "Was unterscheidet Konstruktionskataloge von Lösungssammlungen?",
        options: ["Kataloge sind kürzer", "Kataloge: vollständig, durchstrukturiert, widerspruchsfrei, eindeutige Zugriffsmerkmale", "Lösungssammlungen sind teurer", "Kein Unterschied"],
        correctIndex: 1,
        explanation: "Konstruktionskataloge: abgestimmt auf Konstruktionsprozess, weitestgehend vollständig, widerspruchsfrei, klar gegliedert, eindeutige Zugriffsmerkmale. Lösungssammlungen: nicht unbedingt vollständig, nicht durchstrukturiert."
      },
      {
        id: "kkq10",
        question: "Beim Operationskatalog: Wie erfolgt der Zugriff auf passende Operationen?",
        options: ["Über Zugriffsmerkmale wie beim Lösungskatalog", "Liste der Reihe nach durchgehen, Merkmale unterstützen nur die Abschätzung", "Nur über Gliederungsteil", "Zufällige Auswahl"],
        correctIndex: 1,
        explanation: "Operationskatalog: Liste der Operationen der Reihe nach durchgehen. Prüfen ob Änderungen zu erwünschten Wirkungen führen. Abschätzung durch beschreibende Merkmale – Zugriff über Merkmale meist nicht möglich!"
      }
    ]
  },
  {
    id: "angepasste-qfd",
    title: "Kapitel 9: Angepasste QFD",
    description: "Quality Function Deployment, House of Quality, Abhängigkeitsmatrix, Kundenanforderungen und Produktfunktionen",
    flashcards: [
      {
        id: "qfd1",
        question: "Was ist QFD (Quality Function Deployment)?",
        answer: "Methode zur systematischen und ganzheitlichen Produkt- und Qualitätsplanung. Wesentliches Ziel: konsequente Umsetzung von Kundenanforderungen in Produktmerkmale bzw. Produktfunktionen. Matrixbasiertes Kommunikationstool zur Verbindung unterschiedlicher Fachbereiche.",
        category: "Definition"
      },
      {
        id: "qfd2",
        question: "Wie lautet die Qualitätsdefinition nach DIN EN ISO 8402?",
        answer: "Qualität ist die Gesamtheit von Merkmalen einer Einheit, bezüglich ihrer Eignung, festgelegte und vorausgesetzte Erfordernisse zu erfüllen.",
        category: "Definition"
      },
      {
        id: "qfd3",
        question: "Was ist die Grundsystematik von QFD?",
        answer: "WAS (Kundenanforderungen) – WIE (Produktmerkmale/Produktfunktionen) – Beziehungs-/Abhängigkeitsmatrix. Verknüpfung und Quantifizierung der Einflüsse zwischen Anforderungen und Merkmalen.",
        category: "Grundlagen"
      },
      {
        id: "qfd4",
        question: "Was ist das House of Quality (HoQ)?",
        answer: "Schematischer Aufbau der QFD mit Abhängigkeitsmatrix. Bestandteile: Gewichtung, Marktbewertung, Abhängigkeitsmatrix, Technische Bedeutung, Technischer Konkurrenzvergleich, Schwierigkeitsbewertung, Korrelationsmatrix.",
        category: "House of Quality"
      },
      {
        id: "qfd5",
        question: "Welche Bewertungskoeffizienten werden in der Abhängigkeitsmatrix verwendet?",
        answer: "Exponentiell gestaffelt: leer = keine Beziehung, 1 = schwache Beziehung, 3 = mittlere Beziehung, 9 = starke Beziehung. Deutlichkeit der Wichtigkeiten soll zunehmend sichtbar werden.",
        category: "Abhängigkeitsmatrix"
      },
      {
        id: "qfd6",
        question: "Welche Wichtigkeiten werden aus der Abhängigkeitsmatrix berechnet?",
        answer: "Absolute Wichtigkeit (Wa), relative Wichtigkeit (Wr), prozentuale Wichtigkeit (Wp) der Produktmerkmale. Formel: Wa = Σ(Gewichtung × Beziehungswert) pro Merkmal.",
        category: "Berechnung"
      },
      {
        id: "qfd7",
        question: "Wie erfolgt die Gewichtung der Kundenanforderungen?",
        answer: "Skala 0–10 oder paarweiser Vergleich: wenn A wichtiger als B dann 1, sonst 0. Einfache Zuordnung ideal. Möglichkeit zur Anpassung für verschiedene Kundengruppen.",
        category: "Gewichtung"
      },
      {
        id: "qfd8",
        question: "Was ist die Angepasste QFD und wodurch unterscheidet sie sich?",
        answer: "Angepasste QFD verwendet Produktfunktionen statt Produktmerkmale im WIE-Teil. WAS = Kundenanforderungen, WIE = Produktfunktionen (z.B. aus FPS). Bewahrt Lösungsneutralität in früher Entwicklungsphase.",
        category: "Angepasste QFD"
      },
      {
        id: "qfd9",
        question: "Welche Vorteile hat die Angepasste QFD?",
        answer: "Erfordert Denken in Funktionen, Identifizierung widersprüchlicher Funktionen, Bewahrung der Lösungsneutralität in früher Phase, Beschränkung auf das Wesentliche.",
        category: "Angepasste QFD"
      },
      {
        id: "qfd10",
        question: "Was ist die Korrelationsmatrix im House of Quality?",
        answer: "Technische Wechselbeziehung zwischen den Merkmalen: stark positiv, positiv, negativ, stark negativ. Zielgröße/Optimierungsrichtung muss bekannt sein und kann in Spalte ergänzt werden.",
        category: "House of Quality"
      },
      {
        id: "qfd11",
        question: "Was ist die Schwierigkeitsbewertung?",
        answer: "Schwierigkeitsmatrix verknüpft Merkmale mit Faktoren wie neue Stoffe, niedrige Kosten, kurzer Termin, zu erwartende Risiken. Absolute/relative Schwierigkeit. Alternativ: Skala 1–10 pro Merkmal.",
        category: "House of Quality"
      },
      {
        id: "qfd12",
        question: "Wie werden Kundenanforderungen ermittelt?",
        answer: "Primärdaten: Kundenbefragung, -beobachtung, Zusammenarbeit mit Schlüsselkunden, Expertengespräch, Ideenwettbewerb. Sekundärdaten: Reklamationen, Wettbewerber, Normen, Statistiken.",
        category: "Anforderungserfassung"
      },
      {
        id: "qfd13",
        question: "Welche Anforderungstypen kennt das Kano-Modell?",
        answer: "Grundanforderungen (selbstverständlich, nicht ausgesprochen), Leistungsanforderungen (spezifiziert, bewusst), Begeisterungsanforderungen (nicht erwartet, nicht bewusst).",
        category: "Kano-Modell"
      },
      {
        id: "qfd14",
        question: "In welcher Phase der Produktentwicklung wird QFD hauptsächlich angewendet?",
        answer: "Frühe Phasen nach VDI 2221 – Projektierung, Aufgabenerfassung, Aufgabenklärung. Vor der eigentlichen Lösungsfindung und Konstruktion.",
        category: "Anwendung"
      },
      {
        id: "qfd15",
        question: "Warum ist QFD ein teamorientierter Prozess?",
        answer: "Interdisziplinäre Aufstellung der Beteiligten erforderlich für valides Ergebnis. Diskursive Dominanz einzelner Parteien kann auf Wertfindung einwirken. Erstellen der Matrix und Gewichtung im Team.",
        category: "Prozess"
      },
      {
        id: "qfd16",
        question: "Was ist der 4-Phasen-Ansatz von QFD (Makabe)?",
        answer: "1. Produktplanung (Kundenanforderungen → Produktmerkmale), 2. Bauteilentwicklung (Produktmerkmale → Bauteilmerkmale), 3. Prozessplanung (Bauteilmerkmale → Prozessmerkmale), 4. Produktionsplanung (Prozessmerkmale → Kontrollmethode).",
        category: "QFD-Ansätze"
      },
      {
        id: "qfd17",
        question: "Welchen Nutzen bietet QFD?",
        answer: "Durchgängigkeit der Anforderungen vom Kunden bis zum Werker, bewusstes Planen der Qualität, minimale Schnittstellenverluste durch Kooperation, bessere Verkaufsergebnisse, geringere Entwicklungskosten durch weniger Änderungen, verbesserte Kommunikation.",
        category: "Nutzen"
      },
      {
        id: "qfd18",
        question: "Welche Methode wird zur Festlegung der Produktfunktionen in der Angepassten QFD eingesetzt?",
        answer: "Funktionale Produktstruktur (FPS). Lösungsneutrale Abbildung der Anforderungen durch Produktfunktionen. Anforderung + Abstraktion + Wissen/Kreativität → Produktfunktion.",
        category: "Angepasste QFD"
      }
    ],
    quizQuestions: [
      {
        id: "qfdq1",
        question: "Welche Bewertungswerte werden in der QFD-Abhängigkeitsmatrix für die Beziehungsstärke verwendet?",
        options: ["1, 2, 3", "1, 3, 9", "0, 5, 10", "schwach, mittel, stark"],
        correctIndex: 1,
        explanation: "Exponentiell gestaffelt: 1 = schwache Beziehung, 3 = mittlere Beziehung, 9 = starke Beziehung. Leer = keine Beziehung. Deutlichkeit der zunehmenden Wichtigkeit."
      },
      {
        id: "qfdq2",
        question: "Wodurch unterscheidet sich die Angepasste QFD von der klassischen QFD?",
        options: ["Keine Gewichtung", "Produktfunktionen statt Produktmerkmale im WIE-Teil", "Keine Korrelationsmatrix", "Nur 2 Phasen"],
        correctIndex: 1,
        explanation: "Angepasste QFD: WIE = Produktfunktionen (aus FPS), nicht Produktmerkmale. Bewahrt Lösungsneutralität in früher Entwicklungsphase. Erfordert Denken in Funktionen."
      },
      {
        id: "qfdq3",
        question: "Was beschreibt die Korrelationsmatrix im House of Quality?",
        options: ["Beziehung Anforderungen–Merkmale", "Technische Wechselbeziehung zwischen Merkmalen", "Gewichtung der Kunden", "Marktbewertung"],
        correctIndex: 1,
        explanation: "Korrelationsmatrix: technische Wechselbeziehung zwischen den Merkmalen – stark positiv, positiv, negativ, stark negativ. Zielgröße/Optimierungsrichtung muss bekannt sein."
      },
      {
        id: "qfdq4",
        question: "Welche Anforderungstypen kennt das Kano-Modell?",
        options: ["Primär, Sekundär, Tertiär", "Grund-, Leistungs-, Begeisterungsanforderungen", "Technisch, wirtschaftlich, sozial", "Kunden-, Lieferanten-, interne"],
        correctIndex: 1,
        explanation: "Kano-Modell: Grundanforderungen (selbstverständlich), Leistungsanforderungen (spezifiziert, bewusst), Begeisterungsanforderungen (nicht erwartet, überraschend)."
      },
      {
        id: "qfdq5",
        question: "Wie wird die absolute Wichtigkeit (Wa) eines Produktmerkmals berechnet?",
        options: ["Summe aller Beziehungswerte", "Gewichtung × Beziehungswert, summiert über alle Anforderungen", "Durchschnitt der Gewichtungen", "Maximaler Beziehungswert"],
        correctIndex: 1,
        explanation: "Wa = Σ(Gewichtung der Anforderung × Beziehungswert) für jede Anforderung, die das Merkmal beeinflusst. Daraus dann relative und prozentuale Wichtigkeit."
      },
      {
        id: "qfdq6",
        question: "Warum ist QFD ein teamorientierter Prozess?",
        options: ["Schneller als Einzelarbeit", "Interdisziplinäre Aufstellung für valides Ergebnis erforderlich", "Pflicht in ISO 9001", "Kostengünstiger"],
        correctIndex: 1,
        explanation: "Möglichst interdisziplinäre Aufstellung der Beteiligten erforderlich für valides Ergebnis. Erstellen der Abhängigkeitsmatrix und Gewichtung im Team. Diskursive Dominanz kann einwirken."
      },
      {
        id: "qfdq7",
        question: "In welcher Phase der Produktentwicklung wird QFD hauptsächlich angewendet?",
        options: ["Fertigung", "Frühe Phasen (Projektierung, Aufgabenerfassung)", "Instandhaltung", "Recycling"],
        correctIndex: 1,
        explanation: "QFD findet hauptsächliche Anwendung in den Anfangsphasen der Produktentwicklung nach VDI 2221 – vor Lösungsfindung und Konstruktion."
      },
      {
        id: "qfdq8",
        question: "Welche Methode wird zur Festlegung der Produktfunktionen in der Angepassten QFD eingesetzt?",
        options: ["DSM", "MFD", "Funktionale Produktstruktur (FPS)", "Konstruktionskatalog"],
        correctIndex: 2,
        explanation: "Funktionale Produktstruktur (FPS) – lösungsneutrale Abbildung der Anforderungen durch Produktfunktionen. Anforderung + Abstraktion + Wissen/Kreativität → Produktfunktion."
      },
      {
        id: "qfdq9",
        question: "Was ist das Hauptziel der QFD-Methode?",
        options: ["Kosten minimieren", "Systematische Priorisierung der Produktfunktionen/Merkmale", "Fertigungszeit reduzieren", "Dokumentation vereinfachen"],
        correctIndex: 1,
        explanation: "Systematische Priorisierung der Produktfunktionen und damit Festlegung der primär zu betrachtenden Funktionen. Festlegung der aus Kundensicht wichtigsten Schlüsselfunktionen."
      },
      {
        id: "qfdq10",
        question: "Wie erfolgt die Gewichtung bei paarweisem Vergleich?",
        options: ["1–10 Skala", "Wenn A wichtiger als B dann 1, sonst 0", "Prozentanteile verteilen", "Ranking 1–n"],
        correctIndex: 1,
        explanation: "Paarweiser Vergleich: wenn A wichtiger als B dann 1, sonst 0. In Matrix dargestellt. Einfache Zuordnung ideal. Aus Anzahl gleicher Nennungen entstehen Wertungspunkte."
      }
    ]
  },
  {
    id: "technisches-supply-chain-management",
    title: "Kapitel 10: Technisches Supply Chain Management",
    description: "Supply Chain gerechte Produktgestaltung, Lieferkette, Produkttypologien (XTO), HUB-Struktur, dezentrale vs. zentrale Wertschöpfung",
    flashcards: [
      {
        id: "scm1",
        question: "Was ist die Lieferkette?",
        answer: "Netzwerk von Organisationen, die über vor- und nachgelagerte Verbindungen an den Prozessen der Wertschöpfung (Produkte und Dienstleistungen) für den Endkunden beteiligt sind. Umfasst: Unternehmen, Zulieferer (und deren Zulieferer), Kunden (bis Endkunde). Endkunde ist Teil der Lieferkette.",
        category: "Definition"
      },
      {
        id: "scm2",
        question: "Was ist Supply Chain Management (SCM)?",
        answer: "Planung und Management aller Aufgaben bei Lieferantenwahl, Beschaffung, Umwandlung und Logistik. Koordination und Zusammenarbeit der Partner (Lieferanten, Händler, Logistikdienstleister, Kunden). Integration innerhalb und über Unternehmensgrenzen. Vernetzte Lieferketten konkurrieren – nicht Einzelunternehmen.",
        category: "Definition"
      },
      {
        id: "scm3",
        question: "Was ist Supply Chain gerechte Produktgestaltung?",
        answer: "Frühzeitige Implementierung aller relevanten SCM-Anforderungen in den Entwicklungsprozess neuer Produkte. Ziel: Komplexität beherrschen durch Anforderungs- und Wissensmanagement, Tools, Guidelines. Brücke zwischen Produktentwicklung und Supply Chain.",
        category: "Definition"
      },
      {
        id: "scm4",
        question: "Welche Komplexitätstreiber gibt es auf Produktebene?",
        answer: "Erhöhung der Teilevielzahl, Komponentenanzahl, Dokumentationsaufwand. Externe Produktvielfalt durch kundenindividuelle Anpassungen. Verlust der Transparenz.",
        category: "Komplexität"
      },
      {
        id: "scm5",
        question: "Welche Komplexitätstreiber gibt es auf Supply-Chain-Ebene?",
        answer: "Neue/weitere Zulieferer, neue Anforderungen ans Anforderungsmanagement, neue Produktionsprozesse, erweiterte Logistik, erhöhte lokale Lagerhaltung. Getrieben durch Globalisierung, kürzere Produktlebenszyklen, dynamische Anforderungen.",
        category: "Komplexität"
      },
      {
        id: "scm6",
        question: "Was ist dezentrale Produktanpassung?",
        answer: "Lokale/regionale Anpassungen außerhalb der zentralen Produktion: Kalibrier- und Herstellerzertifikate, lokale Gesetzgebung, Gefahrgutkennzeichnung, Dokumentation und Hilfsmittel, Portfolioerweiterung, Zertifizierung (z.B. PED). Erhöht Komplexität und Kosten.",
        category: "Wertschöpfung"
      },
      {
        id: "scm7",
        question: "Was ist die HUB-Vertriebsstruktur?",
        answer: "Zentrale Knotenpunkte (HUBs), an denen Plants und Supplier verbunden sind. Komponenten werden an HUBs geliefert, fertige Produkte über Sales an Endkunden. Einstufige Distributionsstruktur via HUBs (z.B. Europe, NAFTA, Asia/Pacific). Soll-Zustand: nachvollziehbar, einheitlich, rückverfolgbar.",
        category: "Struktur"
      },
      {
        id: "scm8",
        question: "Was ist MTS (Make-to-Stock)?",
        answer: "Standardisierte Produkte, Lagerfertigung. Kurze Lead Times (<1 Tag), niedriger Auftragswert, hohe Auftrags-/Liefermenge. ABC-Lager, hohe Automatisierung, CEP (Parcel/Express). Produkt vordefiniert, sofort verfügbar.",
        category: "Produkttypologien"
      },
      {
        id: "scm9",
        question: "Was ist CTO (Configure-to-Order)?",
        answer: "Produkt aus Standardkomponenten assembliert/konfiguriert (kein Produktionsinhalt pro Auftrag). Mittlere Auftragsmengen, individuelle Steuerung, produktbezogene Verpackung, Direktlieferung. Hohe Produktvielfalt bei geringer Lead Time.",
        category: "Produkttypologien"
      },
      {
        id: "scm10",
        question: "Was ist MTO (Make-to-Order)?",
        answer: "Kundenauftragsbezogene Produktion, Inhouse-Fertigung. Standardlieferzeit, hoher Auftragswert, mittlere Mengen. Produktbezogene Verpackung, Direktlieferung mit Fokus-Speditionen.",
        category: "Produkttypologien"
      },
      {
        id: "scm11",
        question: "Was ist ETO (Engineer-to-Order)?",
        answer: "Konstruktion/Engineering nach Auftragseingang. Lange Lead Times, präzise Liefertermine, hoher Aufwand, hoher Logistikkostenanteil. Spezialverpackung, Direktlieferung zur Baustelle, Sondertransport, Spezialausrüstung vor Ort. Zero Defect FOA.",
        category: "Produkttypologien"
      },
      {
        id: "scm12",
        question: "Welche Methoden werden im SCM zur Optimierung eingesetzt?",
        answer: "Lean und 6-Sigma. Identifizieren und Eliminieren von Verschwendung (TIMWOOD). Steuerung und Synchronisation aller Wertschöpfungsinhalte und Netzwerkknoten. Ziel: Resilienz, Flexibilität, Effizienz.",
        category: "Methoden"
      },
      {
        id: "scm13",
        question: "Was bedeutet End-to-End (E2E) in der Lieferkette?",
        answer: "Sichtweise vom ursprünglichen Zulieferer über das eigene Unternehmen bis zum Endkunden. Gesamter Material- und Informationsfluss von der Produktionsstätte zum Kunden. Grundlage für Supply Chain gerechte Produktgestaltung.",
        category: "Konzepte"
      },
      {
        id: "scm14",
        question: "Was ist der Unterschied zwischen offener und geschlossener Konfiguration?",
        answer: "Offen: Neben angebotenen Konfigurationen weitere Wünsche möglich (z.B. spezielle Farbe, Aufschrift). Geschlossen: Nur Auswahl aus dem Konfigurator. Offene Konfiguration kann zu nicht vorgesehenen lokalen Anpassungen und höheren Kosten führen.",
        category: "Konfiguration"
      },
      {
        id: "scm15",
        question: "Welche Ordnungskriterien können für regionale Anforderungsprofile genutzt werden?",
        answer: "Ergonomie, Style, Handhabung, Lieferfähigkeit und Transport, Gesetze und Vorschriften, Zertifikate/Konformitätserklärungen. Basis für produktbasiertes Lastenheft bei Markterschließung.",
        category: "Anforderungen"
      },
      {
        id: "scm16",
        question: "Was ist Design for Order Fulfillment?",
        answer: "Projekt zur Optimierung der Wertschöpfung in der Supply Chain. Teil der Supply Chain gerechten Produktgestaltung. Ziel: Wertschöpfung an richtiger Stelle platzieren, Prozesse rechtlich absichern.",
        category: "Projekte"
      },
      {
        id: "scm17",
        question: "Warum ist lokale Wertschöpfungsanalyse wichtig?",
        answer: "Identifiziert dezentrale Produktionsschritte, die in der Supply Chain nicht vorgesehen waren. Zeigt Produkte mit vielzähligen dezentralen Anpassungen (z.B. Portable Gas Detection MTO+CTO [Make-to-Order + Configure-to-Order], Helmets CTO [Configure-to-Order]). Basis für Transformation zu zentraler Wertschöpfung.",
        category: "Analyse"
      }
    ],
    quizQuestions: [
      {
        id: "scmq1",
        question: "Welche Produkttypologie hat die kürzeste Lead Time?",
        options: ["ETO (Engineer-to-Order)", "MTO (Make-to-Order)", "CTO (Configure-to-Order)", "MTS (Make-to-Stock)"],
        correctIndex: 3,
        explanation: "Richtig: MTS (Make-to-Stock) – Standardisierte Produkte auf Lager, Lead Time <1 Tag, sofort verfügbar. ETO (Engineer-to-Order) = längste Lead Time, Engineering erst nach Auftrag. MTO (Make-to-Order) = Fertigung nach Auftrag, mittlere Lead Time. CTO (Configure-to-Order) = Konfiguration aus Standardkomponenten, ebenfalls mittlere Lead Time."
      },
      {
        id: "scmq2",
        question: "Was kennzeichnet die HUB-Vertriebsstruktur?",
        options: ["Punkt-zu-Punkt-Verbindungen", "Zentrale Knotenpunkte, an denen Plants und Supplier verbunden sind", "Keine Zulieferer", "Nur ein Standort"],
        correctIndex: 1,
        explanation: "Richtig: Zentrale Knotenpunkte (HUBs) – Plants und Supplier liefern an HUBs, fertige Produkte über Sales an Endkunden. Punkt-zu-Punkt = IST-Zustand bei Dräger, diffuse Distribution. Keine Zulieferer/Nur ein Standort = widerspricht der HUB-Konzeption (mehrere Plants, Supplier, HUBs)."
      },
      {
        id: "scmq3",
        question: "Welche Produkttypologie beschreibt die Fertigung nach Auftragseingang mit standardisierten Komponenten?",
        options: ["MTS (Make-to-Stock)", "CTO (Configure-to-Order)", "MTO (Make-to-Order)", "ETO (Engineer-to-Order)"],
        correctIndex: 1,
        explanation: "Richtig: CTO (Configure-to-Order) – Produkt aus Standardkomponenten assembliert/konfiguriert nach Kundenwunsch. MTS (Make-to-Stock) = Lagerfertigung, kein Auftrag nötig. MTO (Make-to-Order) = Fertigung nach Auftrag, aber ohne Fokus auf Standardkomponenten. ETO (Engineer-to-Order) = Engineering nach Auftrag, Produkt wird erst entwickelt."
      },
      {
        id: "scmq4",
        question: "Was ist dezentrale Produktanpassung?",
        options: ["Zentrale Fertigung aller Varianten", "Lokale Anpassungen außerhalb der zentralen Produktion (Zertifikate, Gesetze, Kennzeichnung)", "Keine Anpassungen", "Nur Verpackung"],
        correctIndex: 1,
        explanation: "Richtig: Lokale Anpassungen – Kalibrierzertifikate, lokale Gesetzgebung, Gefahrgutkennzeichnung, PED-Zertifizierung. Zentrale Fertigung = Gegenteil, keine dezentralen Anpassungen. Keine Anpassungen/Nur Verpackung = zu eingeschränkt, dezentrale Anpassung umfasst mehr."
      },
      {
        id: "scmq5",
        question: "Welches Paradigma kennzeichnet das moderne SCM?",
        options: ["Einzelunternehmen konkurrieren", "Vernetzte Lieferketten konkurrieren miteinander", "Keine Koordination nötig", "Nur Zulieferer sind relevant"],
        correctIndex: 1,
        explanation: "Richtig: Vernetzte Lieferketten konkurrieren – nicht mehr Einzelunternehmen. Einzelunternehmen = veraltetes Paradigma. Keine Koordination = falsch, SCM ist Koordination. Nur Zulieferer = zu einseitig, Kunden, Händler, Logistikdienstleister gehören dazu."
      },
      {
        id: "scmq6",
        question: "Was bedeutet E2E (End-to-End) in der Lieferkette?",
        options: ["Nur Endkunde", "Sichtweise vom Zulieferer über Unternehmen bis Endkunden", "Nur Produktion", "Nur Logistik"],
        correctIndex: 1,
        explanation: "Richtig: Gesamter Fluss vom Zulieferer über Unternehmen bis Endkunden. Nur Endkunde = zu eng, E2E umfasst die ganze Kette. Nur Produktion/Nur Logistik = Teilaspekte, E2E betrachtet den gesamten Wertschöpfungsfluss."
      },
      {
        id: "scmq7",
        question: "Welche Methoden werden im SCM zur Verschwendungsreduktion eingesetzt?",
        options: ["QFD", "Konstruktionskataloge", "Lean und 6-Sigma, TIMWOOD", "Brainstorming"],
        correctIndex: 2,
        explanation: "Richtig: Lean und 6-Sigma, TIMWOOD (Verschwendung identifizieren/eliminieren). QFD = Quality Function Deployment, für Anforderungsübertragung. Konstruktionskataloge = Lösungsfindung in Produktentwicklung. Brainstorming = Kreativitätsmethode, nicht SCM-spezifisch."
      },
      {
        id: "scmq8",
        question: "Was ist das Ziel der Supply Chain gerechten Produktgestaltung?",
        options: ["Nur Kosten senken", "Frühe Implementierung aller relevanten SCM-Anforderungen in den Entwicklungsprozess", "Nur Logistik optimieren", "Keine Produktvarianten"],
        correctIndex: 1,
        explanation: "Richtig: Frühe Implementierung aller SCM-Anforderungen – Komplexität in der Entwicklung beherrschen. Nur Kosten/Nur Logistik = Teilaspekte, Ziel ist umfassender. Keine Produktvarianten = falsch, Supply Chain gerechte Gestaltung ermöglicht Variantenvielfalt."
      },
      {
        id: "scmq9",
        question: "Welche Produkttypologie hat die längste Lead Time und den höchsten Aufwand?",
        options: ["MTS (Make-to-Stock)", "CTO (Configure-to-Order)", "MTO (Make-to-Order)", "ETO (Engineer-to-Order)"],
        correctIndex: 3,
        explanation: "Richtig: ETO (Engineer-to-Order) – Konstruktion erst nach Auftrag, längste Lead Times, höchster Aufwand. MTS (Make-to-Stock) = kürzeste Lead Time, Lagerfertigung. CTO (Configure-to-Order) = mittlere Lead Time, Konfiguration. MTO (Make-to-Order) = Fertigung nach Auftrag, mittlere Lead Time, weniger Aufwand als ETO."
      },
      {
        id: "scmq10",
        question: "Was versteht man unter offener vs. geschlossener Konfiguration?",
        options: ["Offen = nur Konfigurator, geschlossen = alle Wünsche", "Offen = weitere Wünsche möglich (z.B. Aufschrift), geschlossen = nur Konfigurator-Auswahl", "Kein Unterschied", "Offen = teurer"],
        correctIndex: 1,
        explanation: "Richtig: Offen = weitere Wünsche möglich (z.B. Aufschrift), geschlossen = nur Konfigurator. Offen=nur Konfigurator wäre vertauscht. Kein Unterschied = falsch, offen ermöglicht lokale Anpassungen. Offen=teurer = nur Nebeneffekt, nicht die Definition."
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
  },
  {
    id: "design-for-manufacturing",
    title: "Kapitel 13: Design for Manufacturing aus Sicht eines Flugzeugherstellers",
    description: "Fertigungsgerechtes Design, DFM-Kernkonzepte, Design Flow, vier Pfeiler in der Luftfahrt",
    flashcards: [
      {
        id: "dfm1",
        question: "Was ist Design for Manufacturing (DFM)?",
        answer: "Fertigungsgerechtes Design. Auslegung des Designs auf fertigungsbedingte Anforderungen: Machbarkeit, Realisierbarkeit, geringstmögliche Kosten/Material/Energie, Qualität, Zuverlässigkeit, Durchlaufzeit, Time-to-Market, Funktionalität. DFM ist kein separater Prozess, sondern eine Denkweise durch den gesamten Produktentwicklungszyklus.",
        category: "Definition"
      },
      {
        id: "dfm2",
        question: "Welche fünf Kernkonzepte hat DFM?",
        answer: "1. Vereinfachung: Reduzierung von Komplexität und Komponentenanzahl, kürzere Montagezeit, weniger Fehlerquellen. 2. Standardisierung: Standardkomponenten und -prozesse. 3. Materialwahl: Kosten, Verfügbarkeit, Verarbeitbarkeit. 4. Montage-Optimierung: Minimierung der Montageschritte, Teile nur korrekt zusammenfügbar. 5. Qualitätskontrolle: Merkmale für einfache Inspektion, Fehler vermeiden.",
        category: "Kernkonzepte"
      },
      {
        id: "dfm3",
        question: "Welche vier Pfeiler hat DFM in der Luftfahrt?",
        answer: "I. Teilereduzierung und Funktionsintegration. II. Standardisierung zur Vereinfachung. III. Zugänglichkeit und Werkzeugfreiräume. IV. Toleranzmanagement (The Golden Mean).",
        category: "Luftfahrt"
      },
      {
        id: "dfm4",
        question: "Was umfasst der DFM Design Flow – Schritt 1 (Function)?",
        answer: "Funktionsanalyse: Kundenanforderungen/Lastenheft, Funktionalität, Performance, optische Anforderungen, Quantifizierbarkeit. Quantifizierbares Anforderungsprofil als Grundlage für den nachfolgenden Prozess.",
        category: "Design Flow"
      },
      {
        id: "dfm5",
        question: "Was umfasst der DFM Design Flow – Schritt 2 (Manufacturing Methods)?",
        answer: "Detailliertes Wissen über Fertigungsmethoden: Wie wird gefertigt? Was ist möglich? Welche Schwierigkeiten? Vor- und Nachteile? Hersteller/Konstruktionsberater von Anfang an einbeziehen.",
        category: "Design Flow"
      },
      {
        id: "dfm6",
        question: "Was umfasst der DFM Design Flow – Schritt 2 (Materials)?",
        answer: "Entscheidung über Material: geeignetes Material, Kosten, Gewicht, Rohmaterial, Verfügbarkeit, gesundheitliche und umwelttechnische Aspekte, Langlebigkeit, Anfälligkeit (z.B. Korrosion).",
        category: "Design Flow"
      },
      {
        id: "dfm7",
        question: "Was umfasst der DFM Design Flow – Schritt 2 (Form)?",
        answer: "Schlechtes und teures Design vermeiden. Welche Details notwendig, welche optional? Fertigungskosten betrachten, Standardisierbarkeit erreichen, Varianten reduzieren, Fehleranfälligkeit in der Fertigung vermeiden.",
        category: "Design Flow"
      },
      {
        id: "dfm8",
        question: "Was ist Design for Assembly (DFA)?",
        answer: "Zusammenbau während des Part-Designs beachten: Einzelteile reduzieren, möglichst viele Funktionen in einem Part integrieren, schnellen und kostengünstigen Zusammenbau ermöglichen, Fehleranfälligkeit reduzieren, Fertigungstoleranzen und Zugänglichkeiten beachten.",
        category: "DFA"
      },
      {
        id: "dfm9",
        question: "Was ist die Shop Floor First Philosophie?",
        answer: "Das wichtigste Werkzeug im DFM ist Empathie. Vor dem ersten Entwurf die Einschränkungen derer verstehen, die die Vision umsetzen. Mindestens einen Tag im Monat in der Montage verbringen, Zusammenbau beobachten. Teile existieren in der Fabrik – greifbar, wendbar, beweglich. Ohne natürliche Greifpunkte wird Fertigung zum Albtraum.",
        category: "Philosophie"
      },
      {
        id: "dfm10",
        question: "Was ist der Outcome des DFM Design Flow (Schritt 3)?",
        answer: "Produkt mit gewünschter Qualität, zu geringstmöglichen Kosten, hohe Kundenzufriedenheit, geringe Time-to-Market, wenig Scrap.",
        category: "Design Flow"
      },
      {
        id: "dfm11",
        question: "Welche Stakeholder müssen für DFM-konforme Entwicklung zusammenarbeiten?",
        answer: "Design (Konstruktion): Erstellt Teil, Assembly, Zeichnung – verantwortlich für Konformität. Manufacturing Engineering (ME): Definiert Fertigungsmethoden, prüft Machbarkeit (Werkzeugfreiräume, Pick-up Points). Stress (Strukturberechnung): Validiert Lastanforderungen. Erfolgreiches Produkt entsteht im Dialog.",
        category: "Praxis"
      },
      {
        id: "dfm12",
        question: "Welche Fertigungsmethoden wurden im DFM-Beispiel (Shear Tie) diskutiert?",
        answer: "Thermoset-CFRP Automated Fiber Placement, Thermoplast-CFRP Thermoforming, Metall-Fräsen, Metall-Biegen. Jede Methode hat spezifische Anforderungen, Vor- und Nachteile sowie Schwierigkeiten.",
        category: "Beispiele"
      },
      {
        id: "dfm13",
        question: "Was kennzeichnet den iterativen Design-Prozess im DFM?",
        answer: "Initiales Design → DFM-Analyse → Design-Modifikationen → Erneute Analyse und Validierung. Schritte wiederholen bis optimales Design erreicht ist. Der Prozess ist nicht linear.",
        category: "Prozess"
      },
      {
        id: "dfm14",
        question: "Warum ist die dreidimensionale Realität bei DFM wichtig?",
        answer: "Teile existieren in der Fabrik, nicht im Vakuum. Sie müssen greifbar, wendbar und beweglich sein. Ohne natürliche Greifpunkte wird die Fertigung zum Albtraum. CAD-Modelle zeigen nicht die Montage- und Fertigungsrealität.",
        category: "Praxis"
      }
    ],
    quizQuestions: [
      {
        id: "dfmq1",
        question: "Was ist DFM?",
        options: ["Design for Marketing", "Fertigungsgerechtes Design, Denkweise durch den gesamten Produktentwicklungszyklus", "Nur ein separater Prozess in der Konstruktion", "Design for Maintenance"],
        correctIndex: 1,
        explanation: "DFM = Design for Manufacturing = Fertigungsgerechtes Design. Auslegung auf fertigungsbedingte Anforderungen. Kein separater Prozess, sondern eine Denkweise, die sich durch den gesamten Produktentwicklungszyklus zieht."
      },
      {
        id: "dfmq2",
        question: "Welcher Pfeiler von DFM in der Luftfahrt betrifft Werkzeugfreiräume?",
        options: ["Teilereduzierung", "Standardisierung", "Zugänglichkeit und Werkzeugfreiräume", "Toleranzmanagement"],
        correctIndex: 2,
        explanation: "Pfeiler III: Zugänglichkeit und Werkzeugfreiräume. Manufacturing Engineering prüft z.B. ob Werkzeugfreiräume und Pick-up Points vorhanden sind. Wichtig für Montage und Fertigung."
      },
      {
        id: "dfmq3",
        question: "Was ist der erste Schritt im DFM Design Flow?",
        options: ["Materialwahl", "Funktionsanalyse", "Formgestaltung", "Fertigungsmethoden"],
        correctIndex: 1,
        explanation: "Schritt 1: Function – Funktionsanalyse. Kundenanforderungen, Lastenheft, Funktionalität, Performance, optische Anforderungen, Quantifizierbarkeit. Grundlage für alle weiteren Schritte."
      },
      {
        id: "dfmq4",
        question: "Was ist die Shop Floor First Philosophie?",
        options: ["Design zuerst am Reißbrett", "Empathie – Einschränkungen der Fertiger verstehen, Zeit in der Montage verbringen", "Nur Software nutzen", "Qualitätskontrolle zuerst"],
        correctIndex: 1,
        explanation: "Wichtigstes Werkzeug im DFM ist Empathie. Vor dem ersten Entwurf die Einschränkungen derer verstehen, die die Vision umsetzen. Mindestens einen Tag im Monat in der Montage verbringen."
      },
      {
        id: "dfmq5",
        question: "Welches Kernkonzept von DFM reduziert Komplexität und Fehlerquellen?",
        options: ["Materialwahl", "Vereinfachung", "Qualitätskontrolle", "Standardisierung"],
        correctIndex: 1,
        explanation: "Vereinfachung: Reduzierung der Komplexität und der Anzahl der Komponenten. Verkürzt Montagezeit, minimiert Fehlerquellen. Standardisierung = Standardkomponenten. Qualitätskontrolle = Inspektion."
      },
      {
        id: "dfmq6",
        question: "Was ist Design for Assembly (DFA)?",
        options: ["Nur Montageplanung", "Zusammenbau während Part-Design beachten: Einzelteile reduzieren, Funktionen integrieren, Zugänglichkeiten", "Qualitätsprüfung", "Werkstoffauswahl"],
        correctIndex: 1,
        explanation: "DFA: Zusammenbau während des Part-Designs beachten. Einzelteile reduzieren, Funktionen in einem Part integrieren, schnellen Zusammenbau ermöglichen, Toleranzen und Zugänglichkeiten beachten."
      },
      {
        id: "dfmq7",
        question: "Welche Rolle hat Manufacturing Engineering (ME) im DFM-Prozess?",
        options: ["Nur Zeichnungen erstellen", "Fertigungsmethoden definieren, Machbarkeit prüfen (Werkzeugfreiräume, Pick-up Points)", "Nur Marketing", "Nur Qualitätskontrolle"],
        correctIndex: 1,
        explanation: "ME definiert die Fertigungsmethoden, prüft die Machbarkeit – z.B. ob Werkzeugfreiräume und Pick-up Points vorhanden sind. Design erstellt Teil/Zeichnung, Stress validiert Lastanforderungen."
      },
      {
        id: "dfmq8",
        question: "Was kennzeichnet den DFM Design-Prozess?",
        options: ["Nur linear", "Iterativ: Design → DFM-Analyse → Modifikation → erneute Analyse", "Ohne Validierung", "Nur am Anfang"],
        correctIndex: 1,
        explanation: "Iterativer Prozess: Initiales Design → DFM-Analyse → Design-Modifikationen → Erneute Analyse und Validierung. Schritte wiederholen bis optimales Design erreicht ist."
      },
      {
        id: "dfmq9",
        question: "Welcher Schritt im Design Flow betrifft 'Schlechtes und teures Design vermeiden'?",
        options: ["Function", "Manufacturing Methods", "Form", "Products"],
        correctIndex: 2,
        explanation: "Schritt 2.C Form: Schlechtes und teures Design vermeiden. Welche Details notwendig, welche optional? Fertigungskosten betrachten, Standardisierbarkeit, Varianten reduzieren, Fehleranfälligkeit vermeiden."
      },
      {
        id: "dfmq10",
        question: "Was ist die Bedeutung von 'Teile existieren in der Fabrik, nicht im Vakuum'?",
        options: ["Nur CAD relevant", "Teile müssen greifbar, wendbar und beweglich sein – natürliche Greifpunkte für Fertigung", "Keine Montage nötig", "Nur Lagerung wichtig"],
        correctIndex: 1,
        explanation: "Dreidimensionale Realität beachten. Teile müssen in der Fabrik greifbar, wendbar und beweglich sein. Ohne natürliche Greifpunkte wird die Fertigung zum Albtraum. CAD-Modelle zeigen nicht die Montagerealität."
      }
    ]
  },
  {
    id: "risikobeurteilung",
    title: "Kapitel 14: Risikobeurteilung",
    description: "CE-Kennzeichnung, Maschinenrichtlinie, Risikobeurteilung, Lebensphasen, Risikoberechnung",
    flashcards: [
      {
        id: "rb1",
        question: "Was bedeutet die CE-Kennzeichnung?",
        answer: "Konformitätserklärung: Hersteller garantiert, dass sein Produkt den geltenden Anforderungen (Sicherheit, Umweltschutz) entspricht. Gesetzlich verpflichtend für festgelegte Produkte im EWR. Selbsterklärung – im Gegensatz zum GS-Zeichen keine unabhängige Prüfstelle erforderlich.",
        category: "CE-Kennzeichnung"
      },
      {
        id: "rb2",
        question: "Was ist die Risikobeurteilung?",
        answer: "Strukturierte und nachvollziehbare Dokumentation sämtlicher Gefahrenpotenziale, die von einem Produkt über dessen gesamte Lebensdauer ausgehen. Teil der CE-Konformitätserklärung. Umfasst mechanische, thermische, elektrische Verletzungsgefahren sowie vorsätzliche Manipulation von Schutzeinrichtungen.",
        category: "Definition"
      },
      {
        id: "rb3",
        question: "Wer trägt die Verantwortung für die Risikobeurteilung?",
        answer: "Immer der Hersteller des Produkts. Bei Maschinen: der erste Wirtschaftsakteur, der sich klar für die Maschine festlegen lässt (konstruiert, baut, in Verkehr bringt, in Betrieb nimmt). Verantwortung lässt sich nicht an nachfolgende Instanzen weitergeben.",
        category: "Verantwortung"
      },
      {
        id: "rb4",
        question: "Was ist eine Maschine nach der Maschinenrichtlinie?",
        answer: "Besteht aus mehreren Teilen, besitzt mindestens ein bewegliches Teil, hat einen Antrieb oder ist für Antrieb vorgesehen, setzt keine unmittelbare menschliche oder tierische Kraft ein, ist für eine bestimmte Anwendung vorgesehen. Ausnahmen z.B. für Elektromotoren, Haushaltsgeräte, Medizintechnik.",
        category: "Maschinenrichtlinie"
      },
      {
        id: "rb5",
        question: "Welche 13 Lebensphasen werden bei der Risikobeurteilung betrachtet?",
        answer: "1. Verpackung, 2. Lagerung, 3. Transport, 4. Montage, 5. Inbetriebnahme, 6. Teaching/Rüsten, 7. Betrieb, 8. Stillsetzen, 9. Reinigung, 10. Wartung, 11. Störungsbeseitigung, 12. Demontage, 13. Entsorgung. Verschiedene Zielgruppen in verschiedenen Phasen.",
        category: "Lebensphasen"
      },
      {
        id: "rb6",
        question: "Wie lautet die Risikoberechnungsformel?",
        answer: "R = S × (F × O) × A ≤ 130. S = Schwere des eintretenden Schadens, F = Häufigkeit der Gefahrenaussetzung, O = Eintrittswahrscheinlichkeit des Schadens, A = Möglichkeit die Gefahr zu vermeiden. Maximal 130 = annehmbares Risiko. Sonst Maßnahmen zur Reduzierung erforderlich.",
        category: "Risikoberechnung"
      },
      {
        id: "rb7",
        question: "Welche Kategorien von Anforderungen für sichere Verwendung gibt es?",
        answer: "Räumliche (z.B. nicht zugänglich für Kinder aufbewahren, sauber und trocken lagern), zeitliche (z.B. Zündkerze alle 100 Betriebsstunden tauschen, wöchentlich Kette prüfen), sonstige (z.B. Kettenschutz und Kettenbremse einlegen). Aus Bedienungsanleitungen ableitbar.",
        category: "Anforderungen"
      },
      {
        id: "rb8",
        question: "Welche Produktkategorien unterliegen der CE-Kennzeichnung?",
        answer: "Maschinen, Spielzeug, Medizinprodukte und weitere festgelegte Produktkategorien. Anforderungen in Verordnungen der Europäischen Kommission definiert. Geltung im gesamten Europäischen Wirtschaftsraum (EWR).",
        category: "CE-Kennzeichnung"
      },
      {
        id: "rb9",
        question: "Was passiert, wenn das berechnete Risiko R > 130 ist?",
        answer: "Das Risiko ist nicht annehmbar. Maßnahmen zur Reduzierung der Gefahr müssen vorgenommen werden. Danach erneute Risikoberechnung bis R ≤ 130.",
        category: "Risikoberechnung"
      },
      {
        id: "rb10",
        question: "Warum werden unterschiedliche Zielgruppen bei der Risikobeurteilung betrachtet?",
        answer: "Nicht nur Nutzung durch Kunden, sondern auch vorgeschaltete Lebensphasen betrachtet. Personengruppen aus Logistik, Transport, Montage, Wartung, Entsorgung etc. können Gefahren ausgesetzt sein. Risikobeurteilung über gesamte Lebensdauer.",
        category: "Lebensphasen"
      },
      {
        id: "rb11",
        question: "Wer gilt als Hersteller einer Maschine?",
        answer: "Natürliche oder juristische Person, die die (unvollständige) Maschine konstruiert (geistiges Eigentum), baut (Umbau, Zusammenbau, auch Eigengebrauch), in Verkehr bringt (Quasihersteller, Händler, Importeur) oder in Betrieb nimmt.",
        category: "Verantwortung"
      }
    ],
    quizQuestions: [
      {
        id: "rbq1",
        question: "Welche Formel wird zur Risikoberechnung verwendet?",
        options: ["R = S + F + O + A", "R = S × (F × O) × A ≤ 130", "R = S / (F × O × A)", "R = S × F × O"],
        correctIndex: 1,
        explanation: "R = S × (F × O) × A ≤ 130. S = Schwere des Schadens, F = Häufigkeit Gefahrenaussetzung, O = Eintrittswahrscheinlichkeit, A = Vermeidbarkeit. Faktoren aus Tabellen der Richtlinien. Max. 130 = annehmbar."
      },
      {
        id: "rbq2",
        question: "Wer trägt die Verantwortung für die Risikobeurteilung?",
        options: ["Händler", "Hersteller", "Kunde", "Prüfstelle"],
        correctIndex: 1,
        explanation: "Immer der Hersteller. Bei Maschinen: der erste Wirtschaftsakteur, der sich klar für die Maschine festlegen lässt. Verantwortung lässt sich nicht weitergeben."
      },
      {
        id: "rbq3",
        question: "Was unterscheidet die CE-Kennzeichnung vom GS-Zeichen?",
        options: ["CE ist teurer", "CE ist Selbsterklärung, GS erfordert unabhängige Prüfstelle", "GS gilt nur in Deutschland", "Kein Unterschied"],
        correctIndex: 1,
        explanation: "CE = Selbsterklärung des Herstellers, keine unabhängige Prüfstelle erforderlich. GS-Zeichen = Prüfung durch zugelassene Prüfstelle (z.B. TÜV). Beide betreffen Sicherheit."
      },
      {
        id: "rbq4",
        question: "Welche Anforderung erfüllt eine Maschine nach der Maschinenrichtlinie NICHT?",
        options: ["Besteht aus mehreren Teilen", "Mindestens ein bewegliches Teil", "Setzt menschliche Kraft ein", "Für bestimmte Anwendung vorgesehen"],
        correctIndex: 2,
        explanation: "Maschine setzt keine unmittelbare menschliche oder tierische Kraft ein – hat Antrieb oder ist dafür vorgesehen. Menschliche Kraft = z.B. Handkurbel, keine Maschine im Sinne der Richtlinie."
      },
      {
        id: "rbq5",
        question: "In welcher Lebensphase ist die Wartung einzuordnen?",
        options: ["Phase 4", "Phase 7", "Phase 10", "Phase 13"],
        correctIndex: 2,
        explanation: "Lebensphasen: 1. Verpackung, 2. Lagerung, 3. Transport, 4. Montage, 5. Inbetriebnahme, 6. Teaching/Rüsten, 7. Betrieb, 8. Stillsetzen, 9. Reinigung, 10. Wartung, 11. Störungsbeseitigung, 12. Demontage, 13. Entsorgung."
      },
      {
        id: "rbq6",
        question: "Was bedeutet S in der Risikoberechnung?",
        options: ["Häufigkeit der Gefahrenaussetzung", "Schwere des eintretenden Schadens", "Eintrittswahrscheinlichkeit", "Vermeidbarkeit"],
        correctIndex: 1,
        explanation: "S = Schwere des eintretenden Schadens (z.B. mäßig = oberflächliche Schnittwunden, S=5). F = Häufigkeit, O = Eintrittswahrscheinlichkeit, A = Vermeidbarkeit."
      },
      {
        id: "rbq7",
        question: "Welche Anforderungskategorie betrifft 'Zündkerze alle 100 Betriebsstunden tauschen'?",
        options: ["Räumlich", "Zeitlich", "Sonstige", "Technisch"],
        correctIndex: 1,
        explanation: "Zeitliche Anforderungen: Wartungsintervalle, Zeitangaben. Räumlich = z.B. Ort der Aufbewahrung. Sonstige = z.B. Kettenschutz einlegen."
      },
      {
        id: "rbq8",
        question: "Wo gilt die CE-Kennzeichnung?",
        options: ["Nur Deutschland", "Europäischer Wirtschaftsraum (EWR)", "Weltweit", "Nur EU"],
        correctIndex: 1,
        explanation: "CE-Kennzeichnung gilt im gesamten Europäischen Wirtschaftsraum (EWR). Anforderungen in Verordnungen der Europäischen Kommission definiert."
      },
      {
        id: "rbq9",
        question: "Was ist zu tun, wenn R > 130?",
        options: ["Nichts", "Maßnahmen zur Reduzierung der Gefahr, erneute Berechnung", "Nur dokumentieren", "Produkt vom Markt nehmen"],
        correctIndex: 1,
        explanation: "Risiko nicht annehmbar. Maßnahmen zur Reduzierung der Gefahr müssen vorgenommen werden. Danach erneute Risikoberechnung bis R ≤ 130."
      },
      {
        id: "rbq10",
        question: "Was umfasst die Risikobeurteilung?",
        options: ["Nur Betrieb", "Gefahrenpotenziale über die gesamte Lebensdauer des Produkts", "Nur Konstruktion", "Nur Herstellung"],
        correctIndex: 1,
        explanation: "Strukturierte Dokumentation sämtlicher Gefahrenpotenziale über die gesamte Lebensdauer – von Verpackung bis Entsorgung. Verschiedene Zielgruppen in verschiedenen Phasen."
      }
    ]
  }
];
