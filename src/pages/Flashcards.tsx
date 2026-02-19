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

export default function Flashcards() {
  const { chapterId } = useParams()
  const chapter = chapters.find((c) => c.id === chapterId)
  const [cards] = useState(() => shuffle(chapter?.flashcards ?? []))
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

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
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          {index + 1} / {total}
        </span>
      </div>

      <div
        onClick={() => setFlipped((f) => !f)}
        style={{
          minHeight: 200,
          padding: '2rem',
          background: 'var(--color-bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          cursor: 'pointer',
          transition: 'transform 0.3s',
        }}
      >
        {flipped ? (
          <div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
              Antwort
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>{card.answer}</p>
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              Frage
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.6 }}>{card.question}</p>
          </div>
        )}
      </div>

      <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
        Klicken zum Umdrehen
      </p>

      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={() => {
            setIndex((i) => (i > 0 ? i - 1 : total - 1))
            setFlipped(false)
          }}
          style={{
            padding: '0.6rem 1.2rem',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
          }}
        >
          ← Zurück
        </button>
        <button
          onClick={() => {
            setIndex((i) => (i < total - 1 ? i + 1 : 0))
            setFlipped(false)
          }}
          style={{
            padding: '0.6rem 1.2rem',
            background: 'var(--color-accent)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--color-bg)',
            fontWeight: 500,
          }}
        >
          Weiter →
        </button>
      </div>
    </div>
  )
}
