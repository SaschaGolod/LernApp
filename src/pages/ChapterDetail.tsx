import { Link, useParams } from 'react-router-dom'
import { chapters } from '../data/chapters'

export default function ChapterDetail() {
  const { chapterId } = useParams()
  const chapter = chapters.find((c) => c.id === chapterId)

  if (!chapter) {
    return (
      <div>
        <p>Kapitel nicht gefunden.</p>
        <Link to="/">Zurück zur Übersicht</Link>
      </div>
    )
  }

  const modes = [
    {
      title: 'Karteikarten',
      description: 'Lerne die Begriffe und Definitionen',
      path: `/kapitel/${chapter.id}/karteikarten`,
      icon: '📇',
    },
    {
      title: 'Quiz',
      description: 'Multiple-Choice-Fragen zum Überprüfen',
      path: `/kapitel/${chapter.id}/quiz`,
      icon: '✓',
    },
    {
      title: 'Prüfungsmodus',
      description: 'Simuliere die mündliche Prüfung',
      path: `/kapitel/${chapter.id}/pruefung`,
      icon: '🎤',
    },
  ]

  return (
    <div>
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          marginBottom: '1.5rem',
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)',
        }}
      >
        ← Zurück
      </Link>

      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
        {chapter.title}
      </h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        {chapter.description}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {modes.map((mode) => (
          <Link
            key={mode.path}
            to={mode.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem 1.5rem',
              background: 'var(--color-bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              transition: 'all 0.2s',
              textDecoration: 'none',
              color: 'inherit',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)'
              e.currentTarget.style.background = 'var(--color-surface)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.background = 'var(--color-bg-card)'
            }}
          >
            <span
              style={{
                fontSize: '1.5rem',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-highlight)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              {mode.icon}
            </span>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                {mode.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                {mode.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
