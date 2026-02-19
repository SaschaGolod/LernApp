# LernApp – Mündliche Prüfung vorbereiten

Eine Lern-App zur Vorbereitung auf mündliche Prüfungen. Du kannst Folien/Kapitel hinzufügen und dich mit Karteikarten, Quiz und Prüfungsmodus vorbereiten.

## Kapitel 6: Modularisierung

Das Kapitel „Modularisierung“ aus der Vorlesung „Methoden der Produktentwicklung“ (TUHH) ist bereits eingebaut. Es umfasst:

- **29 Karteikarten** zu Grundlagen, Methoden (Stone, DSM, MFD), Lebensphasenmodularisierung
- **10 Quiz-Fragen** mit Multiple Choice und Erklärungen
- **Prüfungsmodus** zur Simulation der mündlichen Prüfung

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
