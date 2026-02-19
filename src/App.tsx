import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChapterDetail from './pages/ChapterDetail'
import Flashcards from './pages/Flashcards'
import Quiz from './pages/Quiz'
import Pruefungsmodus from './pages/Pruefungsmodus'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kapitel/:chapterId" element={<ChapterDetail />} />
        <Route path="/kapitel/:chapterId/karteikarten" element={<Flashcards />} />
        <Route path="/kapitel/:chapterId/quiz" element={<Quiz />} />
        <Route path="/kapitel/:chapterId/pruefung" element={<Pruefungsmodus />} />
      </Routes>
    </Layout>
  )
}

export default App
