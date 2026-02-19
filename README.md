# LernApp – Mündliche Prüfung vorbereiten

Eine Lern-App zur Vorbereitung auf mündliche Prüfungen im Modul **Methoden der Produktentwicklung** (MPE, TUHH). Du kannst dich mit Karteikarten, Quiz und Prüfungsmodus vorbereiten.

## Kapitelübersicht (1–14)

| Nr. | Kapitel |
|-----|---------|
| 1 | Einführung + Moderationstechniken |
| 2 | Nachhaltigkeit in der Produktentwicklung |
| 3 | Historie der Konstruktionsmethodik und Projektmanagement |
| 4 | Anforderungsmanagement und MBSE in der Produktentwicklung |
| 5 | Variantengerechte Gestaltung |
| 6 | Modularisierung |
| 7 | Individualisierung |
| 8 | Konstruktionskataloge |
| 9 | Angepasste QFD |
| 10 | Technisches Supply Chain Management |
| 11 | Nutzerzentrierung |
| 12 | Systematische Werkstoffauswahl |
| 13 | Design for Manufacturing aus Sicht eines Flugzeugherstellers |
| 14 | Risikobeurteilung |

Jedes Kapitel enthält Karteikarten, Quiz-Fragen mit Erklärungen und ist im Prüfungsmodus nutzbar.

## Installation & Start

```bash
npm install
npm run dev
```

Die App läuft unter http://localhost:5173

## Weitere Kapitel hinzufügen

Neue Kapitel kannst du in `src/data/chapters.ts` ergänzen. Die Struktur:

```ts
{
  id: "kapitel-id",
  title: "Kapitel X: Titel",
  description: "Kurzbeschreibung",
  flashcards: [
    { id: "f1", question: "Frage?", answer: "Antwort", category: "Optional" }
  ],
  quizQuestions: [
    {
      id: "q1",
      question: "Frage?",
      options: ["A", "B", "C", "D"],
      correctIndex: 0,  // Index der richtigen Option
      explanation: "Optional: Erklärung"
    }
  ]
}
```

## Build für Produktion

```bash
npm run build
```

Die fertigen Dateien liegen in `dist/`.
