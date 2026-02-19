import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'

const STORAGE_KEY = 'lernapp-favorites'
const DEFAULT_FAVORITES = ['einfuehrung-moderation', 'modularisierung', 'nutzerzentrierung', 'werkstoffauswahl']

function loadFavorites(): Set<string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as string[]
      return new Set(parsed)
    }
  } catch {
    // ignore
  }
  return new Set(DEFAULT_FAVORITES)
}

function saveFavorites(fav: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...fav]))
}

export default function Home() {
  const [favorites, setFavorites] = useState<Set<string>>(loadFavorites)

  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites])

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const chapterNumber = (title: string) => {
    const m = title.match(/Kapitel (\d+)/)
    return m ? parseInt(m[1], 10) : 999
  }
  const byChapterOrder = (a: (typeof chapters)[0], b: (typeof chapters)[0]) =>
    chapterNumber(a.title) - chapterNumber(b.title)

  const favoriteChapters = chapters
    .filter((c) => favorites.has(c.id))
    .sort(byChapterOrder)
  const otherChapters = chapters
    .filter((c) => !favorites.has(c.id))
    .sort(byChapterOrder)

  const ChapterCard = ({ chapter }: { chapter: (typeof chapters)[0] }) => {
    const isFavorite = favorites.has(chapter.id)
    return (
      <Link
        key={chapter.id}
        to={`/kapitel/${chapter.id}`}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
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
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.35rem' }}>
            {chapter.title}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            {chapter.description}
          </p>
          <div
            style={{
              marginTop: '0.75rem',
              display: 'flex',
              gap: '1rem',
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <span>{chapter.flashcards.length} Karteikarten</span>
            <span>{chapter.quizQuestions.length} Quiz-Fragen</span>
          </div>
        </div>
        <button
          onClick={(e) => toggleFavorite(e, chapter.id)}
          title={isFavorite ? 'Von Favoriten entfernen' : 'Als Favorit markieren'}
          style={{
            flexShrink: 0,
            padding: '0.35rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.25rem',
            lineHeight: 1,
            color: isFavorite ? 'var(--color-accent)' : 'var(--color-text-muted)',
            opacity: isFavorite ? 1 : 0.5,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.opacity = isFavorite ? '1' : '0.5'
          }}
        >
          ★
        </button>
      </Link>
    )
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          Mündliche Prüfung vorbereiten
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          Wähle ein Kapitel und lerne mit Karteikarten, Quiz oder im Prüfungsmodus.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {favoriteChapters.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-accent)',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Favoriten
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {favoriteChapters.map((chapter) => (
                <ChapterCard key={chapter.id} chapter={chapter} />
              ))}
            </div>
          </section>
        )}
        {otherChapters.length > 0 && (
          <section>
            <h2
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Weitere Kapitel
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {otherChapters.map((chapter) => (
                <ChapterCard key={chapter.id} chapter={chapter} />
              ))}
            </div>
          </section>
        )}
        {chapters.length === 0 && (
          <p style={{ color: 'var(--color-text-muted)' }}>Noch keine Kapitel vorhanden.</p>
        )}
      </div>
    </div>
  )
}
