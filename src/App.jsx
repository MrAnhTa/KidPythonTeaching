import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LessonVariables from './pages/LessonVariables'
import LessonLogic from './pages/LessonLogic'
import LessonMath from './pages/LessonMath'
import LessonLists from './pages/LessonLists'
import LessonFunctions from './pages/LessonFunctions'
import Intro from './pages/Intro'
import LessonMadlibs from './pages/LessonMadlibs'
import Exercises from './pages/Exercises'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <main className="container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/variables" element={<LessonVariables />} />
            <Route path="/math" element={<LessonMath />} />
            <Route path="/logic" element={<LessonLogic />} />
            <Route path="/lists" element={<LessonLists />} />
            <Route path="/functions" element={<LessonFunctions />} />
            <Route path="/madlibs" element={<LessonMadlibs />} />
            <Route path="/exercises" element={<Exercises />} />
          </Routes>
        </main>
        <footer style={{
          position: 'fixed',
          bottom: '10px',
          right: '20px',
          fontStyle: 'italic',
          opacity: 0.7,
          fontSize: '0.9rem',
          zIndex: 1000,
          pointerEvents: 'none'
        }}>
          By Adam Ta with love for my son ChipChip - Jeremy
        </footer>
      </div>
    </Router>
  )
}

export default App
