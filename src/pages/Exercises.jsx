import { useState } from 'react'
import { Award, CheckCircle } from 'lucide-react'

const Exercises = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' })
  const [feedback, setFeedback] = useState({ q1: null, q2: null, q3: null })

  const checkQ1 = () => setFeedback({ ...feedback, q1: answers.q1.trim() === '100' })
  const checkQ2 = () => setFeedback({ ...feedback, q2: answers.q2.trim().toLowerCase().includes('print') })
  const checkQ3 = () => setFeedback({ ...feedback, q3: answers.q3.trim().toLowerCase() === 'append' })

  const allCorrect = feedback.q1 && feedback.q2 && feedback.q3

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="animated-gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Final Exercises 🏆
      </h1>
      
      <div className="glass-panel lesson-card">
        <h2>Challenge 1: Math Variables</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          If <code>health = 50</code> and <code>potion = 50</code>, what is <code>health + potion</code>?
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <input 
            type="text" 
            value={answers.q1} 
            onChange={(e) => setAnswers({ ...answers, q1: e.target.value })} 
            placeholder="Type your answer..."
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text)' }}
          />
          <button onClick={checkQ1} className="btn-primary" style={{ padding: '10px 20px' }}>Check</button>
        </div>
        {feedback.q1 === true && <div style={{ color: 'var(--secondary)', marginTop: '10px', fontWeight: 'bold' }}>Correct! 🌟</div>}
        {feedback.q1 === false && <div style={{ color: 'var(--primary)', marginTop: '10px' }}>Try again!</div>}
      </div>

      <div className="glass-panel lesson-card">
        <h2>Challenge 2: Say Hello</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          What function do we use to make the computer write something on the screen?
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <input 
            type="text" 
            value={answers.q2} 
            onChange={(e) => setAnswers({ ...answers, q2: e.target.value })} 
            placeholder="Hint: p_ _ _ t ( )"
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text)' }}
          />
          <button onClick={checkQ2} className="btn-primary" style={{ padding: '10px 20px' }}>Check</button>
        </div>
        {feedback.q2 === true && <div style={{ color: 'var(--secondary)', marginTop: '10px', fontWeight: 'bold' }}>Correct! 🌟</div>}
        {feedback.q2 === false && <div style={{ color: 'var(--primary)', marginTop: '10px' }}>Try again!</div>}
      </div>

      <div className="glass-panel lesson-card">
        <h2>Challenge 3: List Commands</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          What command do we use to add a new item to the end of a List backpack?
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <input 
            type="text" 
            value={answers.q3} 
            onChange={(e) => setAnswers({ ...answers, q3: e.target.value })} 
            placeholder="Hint: a _ _ _ n d"
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text)' }}
          />
          <button onClick={checkQ3} className="btn-primary" style={{ padding: '10px 20px' }}>Check</button>
        </div>
        {feedback.q3 === true && <div style={{ color: 'var(--secondary)', marginTop: '10px', fontWeight: 'bold' }}>Correct! 🌟</div>}
        {feedback.q3 === false && <div style={{ color: 'var(--primary)', marginTop: '10px' }}>Try again!</div>}
      </div>

      {allCorrect && (
        <div style={{ textAlign: 'center', marginTop: '40px', animation: 'shine 2s infinite linear' }}>
          <Award size={100} color="#FFD700" />
          <h2 style={{ fontSize: '2.5rem', color: '#FFD700', textShadow: '0 2px 10px rgba(255, 215, 0, 0.4)' }}>
            PYTHON MASTER AWARD
          </h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>You have completed all basic training!</p>
        </div>
      )}
    </div>
  )
}

export default Exercises
