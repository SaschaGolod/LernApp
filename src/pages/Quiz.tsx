import { useState, useMemo, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { chapters } from '../data/chapters'
import {
  sortCardsByPriority,
  processReview,
  resetProgress,
} from '../utils/spacedRepetition'

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function prepareQuestion(q: (typeof chapters)[0]['quizQuestions'][0]) {
  return {
    ...q,
    options: shuffle(
      q.options.map((opt, i) => ({ text: opt, originalIndex: i }))
    ),
  }
}

export default function Quiz() {
  const { chapterId } = useParams()
  const chapter = chapters.find((c) => c.id === chapterId)
  const [smartMode, setSmartMode] = useState(true)
  const [resetTrigger, setResetTrigger] = useState(0)

  const orderedQuestions = useMemo(() => {
    if (!chapterId || !chapter) return []
    const list = chapter.quizQuestions
    const ordered = smartMode
      ? sortCardsByPriority(chapterId, list)
      : shuffle(list)
    return ordered.map(prepareQuestion)
  }, [chapterId, chapter, smartMode, resetTrigger])

  const [questions, setQuestions] = useState<typeof orderedQuestions>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    setQuestions(orderedQuestions)
    setIndex(0)
    setSelected(null)
    setShowResult(false)
    setShowCompletion(false)
    setScore(0)
  }, [orderedQuestions])

  if (!chapter) {
    return (
      <div>
        <p>Kapitel nicht gefunden.</p>
        <Link to="/">Zurück</Link>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div>
        <Link to={`/kapitel/${chapter.id}`}>← {chapter.title}</Link>
        <p style={{ marginTop: '1rem' }}>Keine Quiz-Fragen in diesem Kapitel.</p>
      </div>
    )
  }

  const q = questions[index]
  const total = questions.length
  const correctIndex = q.options.findIndex((o) => o.originalIndex === q.correctIndex)

  const handleSelect = (i: number) => {
    if (showResult) return
    setSelected(i)
    setShowResult(true)
    const correct = i === correctIndex
    if (correct) setScore((s) => s + 1)
    if (chapterId && smartMode) {
      processReview(chapterId, q.id, correct ? 5 : 1)
    }
  }

  const next = () => {
    if (index >= total - 1) {
      setShowCompletion(true)
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
      setShowResult(false)
    }
  }

  const isFinished = showCompletion

  const resetQuiz = () => {
    setResetTrigger((t) => t + 1)
    setIndex(0)
    setSelected(null)
    setShowResult(false)
    setShowCompletion(false)
    setScore(0)
  }

  const handleResetProgress = () => {
    if (confirm('Fortschritt für dieses Kapitel zurücksetzen?')) {
      resetProgress(chapterId)
      setResetTrigger((t) => t + 1)
    }
  }

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
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          Frage {index + 1} von {total}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
            <input
              type="checkbox"
              checked={smartMode}
              onChange={(e) => setSmartMode(e.target.checked)}
            />
            Smart-Modus
          </label>
          {smartMode && (
            <button
              onClick={handleResetProgress}
              style={{
                fontSize: '0.8rem',
                padding: '0.25rem 0.5rem',
                background: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-text-muted)',
              }}
            >
              Fortschritt zurücksetzen
            </button>
          )}
        </div>
        {showResult && (
          <span style={{ fontSize: '0.9rem', color: 'var(--color-accent)' }}>
            Punkte: {score}
          </span>
        )}
      </div>

      {!isFinished ? (
        <>
          <div
            style={{
              padding: '1.5rem',
              background: 'var(--color-bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              marginBottom: '1.5rem',
            }}
          >
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>{q.question}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={showResult}
                style={{
                  padding: '1rem 1.25rem',
                  textAlign: 'left',
                  background:
                    showResult && i === correctIndex
                      ? 'rgba(124, 184, 124, 0.2)'
                      : showResult && i === selected && i !== correctIndex
                      ? 'rgba(199, 92, 92, 0.2)'
                      : 'var(--color-surface)',
                  border:
                    showResult && i === correctIndex
                      ? '1px solid var(--color-success)'
                      : showResult && i === selected && i !== correctIndex
                      ? '1px solid var(--color-error)'
                      : '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text)',
                  cursor: showResult ? 'default' : 'pointer',
                }}
              >
                {opt.text}
              </button>
            ))}
          </div>

          {q.explanation && showResult && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: 'var(--color-highlight)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
              }}
            >
              {q.explanation}
            </div>
          )}

          {showResult && (
            <button
              onClick={next}
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem 1.5rem',
                background: 'var(--color-accent)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-bg)',
                fontWeight: 500,
              }}
            >
              {index < total - 1 ? 'Nächste Frage →' : 'Ergebnis anzeigen'}
            </button>
          )}
        </>
      ) : (
        <div
          style={{
            padding: '2rem',
            background: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Quiz abgeschlossen</h2>
          <p style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-accent)' }}>
            {score} / {total}
          </p>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            {Math.round((score / total) * 100)}% richtig
          </p>
          <button
            onClick={resetQuiz}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--color-accent)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-bg)',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Nochmal versuchen
          </button>
        </div>
      )}
    </div>
  )
}
