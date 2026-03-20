import { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import { Calculator, Play } from 'lucide-react'

const LessonMath = () => {
  const [num1, setNum1] = useState(5)
  const [num2, setNum2] = useState(3)

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="animated-gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Numbers & Words: Math is Fun!
      </h1>
      
      <div className="glass-panel lesson-card">
        <h2>Python is a Giant Calculator</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Python loves numbers! You can use it to add (+), subtract (-), multiply (*), and even divide (/). It's super fast!
        </p>
        
        <CodeBlock code={`apples = 5
bananas = 3

# Let's add them together!
total_fruit = apples + bananas

print("I have", total_fruit, "pieces of fruit!")`} />
      </div>

      <div className="glass-panel lesson-card" style={{ borderLeft: '5px solid var(--primary)' }}>
        <h2>Make Your Own Potion 🧪</h2>
        <p style={{ marginBottom: '15px' }}>Let's mix some magic ingredients together. Try changing the numbers!</p>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label>Dragon Scales</label>
            <input 
              type="number" 
              value={num1} 
              onChange={(e) => setNum1(Number(e.target.value))} 
              style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text)', width: '100px' }}
            />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>+</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label>Unicorn Hairs</label>
            <input 
              type="number" 
              value={num2} 
              onChange={(e) => setNum2(Number(e.target.value))} 
              style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text)', width: '100px' }}
            />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>=</div>
          <div style={{ 
            padding: '15px 25px', 
            borderRadius: '12px', 
            background: 'var(--code-bg)', 
            color: '#50fa7b',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'monospace'
          }}>
            {num1 + num2} Magic Power!
          </div>
        </div>
      </div>

      <div className="glass-panel lesson-card">
        <h2>Words (Strings) 🧵</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          In Python, words are called <strong>strings</strong>. They are always wrapped in quotes, like a present! You can even add them together.
        </p>
        
        <CodeBlock code={`first_word = "Super"
second_word = "Hero"

# String addition!
print(first_word + second_word)
# Outputs: SuperHero`} />
      </div>

      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Link to="/lists">
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#FF9F1C' }}>
            Next: Lists <Play size={20} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LessonMath
