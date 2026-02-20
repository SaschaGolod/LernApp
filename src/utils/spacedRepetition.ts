/**
 * Spaced Repetition (SM-2) für Karteikarten
 * Speichert Zustand in localStorage – funktioniert mit GitHub Pages (kein Backend nötig)
 */

const STORAGE_KEY = 'lernapp-srs'

export type Quality = 0 | 1 | 2 | 3 | 4 | 5
// 0–2: falsch/schwer, 3: ok, 4–5: gut/perfekt

export interface CardState {
  interval: number      // Tage bis zur nächsten Wiederholung
  easeFactor: number
  repetitions: number   // Anzahl erfolgreicher Wiederholungen
  lastReview: number    // Timestamp
  nextReview: number    // Timestamp
}

export interface StoredState {
  [cardKey: string]: CardState
}

function getCardKey(chapterId: string, cardId: string): string {
  return `${chapterId}::${cardId}`
}

function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveState(state: StoredState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // localStorage voll oder blockiert
  }
}

/**
 * SM-2 Algorithmus: berechnet neues Intervall und Ease-Factor nach Bewertung
 */
export function processReview(
  chapterId: string,
  cardId: string,
  quality: Quality
): CardState {
  const key = getCardKey(chapterId, cardId)
  const state = loadState()
  const current = state[key] ?? {
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0,
    lastReview: 0,
    nextReview: 0,
  }

  const now = Date.now()
  const oneDayMs = 24 * 60 * 60 * 1000

  let newInterval = current.interval
  let newEaseFactor = current.easeFactor
  let newRepetitions = current.repetitions

  if (quality >= 3) {
    // Richtig beantwortet
    newRepetitions = current.repetitions + 1

    if (newRepetitions === 1) {
      newInterval = 1
    } else if (newRepetitions === 2) {
      newInterval = 6
    } else {
      newInterval = Math.round(current.interval * current.easeFactor)
    }

    // Ease Factor anpassen (SM-2 Formel)
    const q = quality
    newEaseFactor = current.easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    newEaseFactor = Math.max(1.3, newEaseFactor)
  } else {
    // Falsch oder schwer – zurücksetzen
    newRepetitions = 0
    newInterval = 1
    // Ease Factor bleibt oder wird leicht reduziert
    newEaseFactor = Math.max(1.3, current.easeFactor - 0.2)
  }

  const nextReview = now + newInterval * oneDayMs

  const newState: CardState = {
    interval: newInterval,
    easeFactor: newEaseFactor,
    repetitions: newRepetitions,
    lastReview: now,
    nextReview,
  }

  state[key] = newState
  saveState(state)

  return newState
}

/**
 * Sortiert Karten für Smart-Modus: zuerst fällige/schwierige, dann neue, dann gelernte
 */
export function sortCardsByPriority<T extends { id: string }>(
  chapterId: string,
  cards: T[]
): T[] {
  const state = loadState()
  const now = Date.now()

  return [...cards].sort((a, b) => {
    const keyA = getCardKey(chapterId, a.id)
    const keyB = getCardKey(chapterId, b.id)
    const stateA = state[keyA]
    const stateB = state[keyB]

    const scoreA = getPriorityScore(stateA, now)
    const scoreB = getPriorityScore(stateB, now)

    // Niedrigerer Score = höhere Priorität (zuerst anzeigen)
    return scoreA - scoreB
  })
}

/**
 * Prioritäts-Score: niedriger = sollte eher gezeigt werden
 * - Nie gesehen: 0 (höchste Priorität)
 * - Fällig (nextReview <= now): 1
 * - Schwierig (niedriger easeFactor, wenige repetitions): 2
 * - Gelernt (hoher easeFactor, viele repetitions): 3+
 */
function getPriorityScore(cardState: CardState | undefined, now: number): number {
  if (!cardState || cardState.repetitions === 0) {
    return 0 // Neue Karte
  }

  if (cardState.nextReview <= now) {
    return 1 // Fällig
  }

  // Schwierige Karten: niedriger Ease-Factor, wenige Wiederholungen
  const difficultyScore = 2 + (2.5 - cardState.easeFactor) + (5 - cardState.repetitions) * 0.5
  const dueInDays = (cardState.nextReview - now) / (24 * 60 * 60 * 1000)

  // Fällig in naher Zukunft oder schwierig → höhere Priorität
  return difficultyScore + dueInDays * 0.1
}

export function getCardState(chapterId: string, cardId: string): CardState | undefined {
  return loadState()[getCardKey(chapterId, cardId)]
}

export function resetProgress(chapterId?: string): void {
  const state = loadState()
  if (chapterId) {
    const prefix = chapterId + '::'
    Object.keys(state).forEach((key) => {
      if (key.startsWith(prefix)) delete state[key]
    })
  } else {
    Object.keys(state).forEach((key) => delete state[key])
  }
  saveState(state)
}
