import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { chapters } from '../data/chapters'

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function Pruefungsmodus() {
  const { chapterId } = useParams()
  const chapter = chapters.find((c) => c.id === chapterId)
  const [cards] = useState(() => shuffle(chapter?.flashcards ?? []))
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [known, setKnown] = useState<Set<string>>(new Set())

  if (!chapter) {
    return (
      <div>
        <p>Kapitel nicht gefunden.</p>
        <Link to="/">Zurück</Link>
      </div>
    )
  }

  const card = cards[index]
  const total = cards.length
  const knownCount = known.size

  return (
    <div>
      <Link
        to={`/kapitel/${chapter.id}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          marginBottom: '1.5rem',
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)',
        }}
      >
        ← {chapter.title}
      </Link>

      <div
        style={{
          padding: '1rem',
          background: 'var(--color-bg-elevated)',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '1.5rem',
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)',
        }}
      >
        <strong>Prüfungsmodus:</strong> Stelle dir die Frage laut und beantworte sie, als ob du in der
        mündlichen Prüfung wärst. Zeige die Antwort erst danach zur Kontrolle.
      </div>

      <div
        style={{
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          Frage {index + 1} von {total}
        </span>
        <span style={{ fontSize: '0.9rem', color: 'var(--color-success)' }}>
          Gewusst: {knownCount}
        </span>
      </div>

      <div
        style={{
          minHeight: 180,
          padding: '2rem',
          background: 'var(--color-bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
        }}
      >
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
          Prüfungsfrage
        </p>
        <p style={{ fontSize: '1.15rem', fontWeight: 500, lineHeight: 1.6 }}>{card.question}</p>

        {showAnswer && (
          <div
            style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
              Musterantwort
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text)' }}>
              {card.answer}
            </p>
          </div>
        )}
      </div>

      {!showAnswer ? (
        <button
          onClick={() => setShowAnswer(true)}
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--color-accent)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--color-bg)',
            fontWeight: 500,
          }}
        >
          Antwort anzeigen
        </button>
      ) : (
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => {
              setKnown((k) => new Set(k).add(card.id))
              setIndex((i) => (i < total - 1 ? i + 1 : 0))
              setShowAnswer(false)
            }}
            style={{
              padding: '0.6rem 1.2rem',
              background: 'var(--color-success)',
              borderRadius: 'var(--radius-sm)',
              color: 'white',
              fontWeight: 500,
            }}
          >
            ✓ Gewusst
          </button>
          <button
            onClick={() => {
              setIndex((i) => (i < total - 1 ? i + 1 : 0))
              setShowAnswer(false)
            }}
            style={{
              padding: '0.6rem 1.2rem',
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
            }}
          >
            Nochmal üben
          </button>
          <button
            onClick={() => {
              setIndex((i) => (i < total - 1 ? i + 1 : 0))
              setShowAnswer(false)
            }}
            style={{
              padding: '0.6rem 1.2rem',
              background: 'var(--color-accent)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-bg)',
              fontWeight: 500,
            }}
          >
            Nächste Frage →
          </button>
        </div>
      )}
    </div>
  )
}
