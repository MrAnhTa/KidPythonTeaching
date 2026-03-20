import { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import { Play } from 'lucide-react'

const LessonLogic = () => {
  const [password, setPassword] = useState('')

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="animated-gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Making Decisions: If Statements
      </h1>
      
      <div className="glass-panel lesson-card">
        <h2>Teaching Computers How to Think</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Normally, computers just read code from top to bottom. But what if we only want something to happen <strong>sometimes</strong>? We use an <strong>if statement</strong>!
        </p>
        
        <CodeBlock code={`secret_password = "python_rocks"
user_guess = "pizza"

if user_guess == secret_password:
    print("Welcome to the secret club!")
else:
    print("Wrong password! Try again.")`} />
      </div>

      <div className="glass-panel lesson-card" style={{ borderLeft: '5px solid var(--accent)' }}>
        <h2>Secret Door Mini-Game 🚪</h2>
        <p style={{ marginBottom: '15px' }}>Try to guess the secret password to open the door!</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input 
            type="text" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Hint: it's a sneaky reptile..."
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
        
        {password !== '' && (
          <div style={{ 
            padding: '20px', 
            borderRadius: '12px', 
            background: password.toLowerCase() === 'snake' || password.toLowerCase() === 'python' ? 'rgba(78, 205, 196, 0.2)' : 'rgba(255, 107, 107, 0.2)',
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginTop: '20px'
          }}>
            {password.toLowerCase() === 'snake' || password.toLowerCase() === 'python' ? '🎉 DOOR UNLOCKED! Welcome! 🎉' : '🔒 Door is locked.'}
          </div>
        )}
      </div>

      <div className="glass-panel lesson-card">
        <h2>Repeating Actions: Loops 🔁</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Programmers are lazy. If we want to do something 5 times, we don't write it 5 times. We use a loop!
        </p>
        
        <CodeBlock code={`# Print something 5 times!
for i in range(5):
    print("I love coding!")`} />
      </div>

      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Link to="/math">
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--primary)' }}>
            Next: Math & Words <Play size={20} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LessonLogic
