import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import { Bot, Zap } from 'lucide-react'

const LessonFunctions = () => {
  const [robotName, setRobotName] = useState('BeepBoop')
  const [robotAction, setRobotAction] = useState('')

  const runRobot = () => {
    setRobotAction(`beep boop! ${robotName} is jumping up and down! 🤖`)
    setTimeout(() => setRobotAction(''), 3000)
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="animated-gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Mini-Robots: Functions
      </h1>
      
      <div className="glass-panel lesson-card">
        <h2>What is a Function?</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          A <strong>Function</strong> is like building a tiny robot that knows how to do one specific job. You give the robot a name, teach it what to do, and then you can call its name whenever you want it to work!
        </p>
        
        <CodeBlock code={`# We build our robot (define the function)
def say_hello():
    print("Hello there, friend!")
    print("Nice to meet you!")

# We call the robot's name to make it run
say_hello()
say_hello() # We can use it as many times as we want!`} />
      </div>

      <div className="glass-panel lesson-card" style={{ borderLeft: '5px solid #FF6B6B' }}>
        <h2>Build Your Own Robot 🤖</h2>
        <p style={{ marginBottom: '15px' }}>Give your robot a name and then press the button to call its function!</p>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input 
            type="text" 
            value={robotName} 
            onChange={(e) => setRobotName(e.target.value)} 
            placeholder="Name your robot..."
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
          <button onClick={runRobot} className="btn-primary" style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '5px', background: '#FF6B6B' }}>
            <Zap size={20} /> Call Robot()
          </button>
        </div>

        <div style={{ background: 'var(--code-bg)', padding: '20px', borderRadius: '12px', fontFamily: 'monospace', fontSize: '1.1rem' }}>
          <div style={{ color: '#ff79c6', marginBottom: '10px' }}>def <span style={{ color: '#50fa7b' }}>{robotName.replace(/\s+/g, '_').toLowerCase()}</span>():</div>
          <div style={{ paddingLeft: '30px', color: '#f8f8f2' }}>
            print(<span style={{ color: '#f1fa8c' }}>"beep boop! {robotName} is jumping up and down! 🤖"</span>)
          </div>
          <br />
          <div style={{ color: '#8be9fd' }}>
            {'>'} {robotAction || 'Waiting for function call...'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonFunctions
