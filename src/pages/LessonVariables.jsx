import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import { CheckCircle, Play } from 'lucide-react'

const LessonVariables = () => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [name, setName] = useState('')

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="animated-gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Boxes With Labels: Variables
      </h1>
      
      <div className="glass-panel lesson-card">
        <h2>What is a Variable?</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Imagine you have a magic box. You can put something inside it, and write a label on the outside so you remember what's inside. In Python, that box is called a <strong>variable</strong>!
        </p>
        
        <CodeBlock code={`# We create a box called 'player_name'
player_name = "Alex"

# We create a box called 'score'
score = 100

print(player_name)
print(score)`} />
      </div>

      <div className="glass-panel lesson-card" style={{ borderLeft: '5px solid var(--secondary)' }}>
        <h2>Try It Out!</h2>
        <p style={{ marginBottom: '15px' }}>What is your name? Let's make a variable for it!</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Type your name..."
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--background)',
              color: 'var(--text)',
              fontSize: '1rem',
              flex: 1
            }}
          />
        </div>
        
        {name && (
          <div style={{ background: 'var(--code-bg)', color: '#50fa7b', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '1.1rem' }}>
            <span style={{color: '#f8f8f2'}}>player_name = </span><span style={{color: '#f1fa8c'}}>"{name}"</span>
            <br/>
            <span style={{color: '#f8f8f2'}}>print(</span><span style={{color: '#f1fa8c'}}>"Welcome, "</span><span style={{color: '#f8f8f2'}}> + player_name)</span>
            <br/><br/>
            <span style={{color: '#8be9fd'}}>{'>'} Welcome, {name}!</span>
          </div>
        )}
      </div>

      <div className="glass-panel lesson-card">
        <h2>Quick Quiz 🚀</h2>
        <p style={{ marginBottom: '15px', fontWeight: 600 }}>Which of these is the correct way to store a score of 50?</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button 
            style={{ padding: '15px', borderRadius: '8px', background: 'var(--background)', border: '1px solid var(--border)', textAlign: 'left', fontSize: '1.1rem', color: 'var(--text)' }}
            onClick={() => setShowAnswer('wrong')}
          >
            A) 50 = score
          </button>
          <button 
            style={{ padding: '15px', borderRadius: '8px', background: 'var(--background)', border: '1px solid var(--border)', textAlign: 'left', fontSize: '1.1rem', color: 'var(--text)' }}
            onClick={() => setShowAnswer('correct')}
          >
            B) score = 50
          </button>
        </div>

        {showAnswer === 'correct' && (
          <div style={{ marginTop: '20px', padding: '15px', borderRadius: '8px', background: 'rgba(78, 205, 196, 0.2)', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle color="var(--secondary)" />
            <strong style={{ color: 'var(--secondary)' }}>Awesome!</strong> The label (variable name) always goes on the left side of the equals sign.
          </div>
        )}
        
        {showAnswer === 'wrong' && (
          <div style={{ marginTop: '20px', padding: '15px', borderRadius: '8px', background: 'rgba(255, 107, 107, 0.2)', color: 'var(--text)' }}>
            Oops! Think about how you read a book (left to right). The label comes first, then what you put inside it! Try again.
          </div>
        )}
      </div>
    </div>
  )
}

export default LessonVariables
