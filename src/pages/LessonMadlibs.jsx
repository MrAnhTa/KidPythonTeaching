import { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import { Play } from 'lucide-react'

const LessonMadlibs = () => {
  const [words, setWords] = useState({
    animal: 'dragon',
    color: 'purple',
    action: 'dancing',
    place: 'the moon'
  })

  const [story, setStory] = useState('')

  const handleChange = (e) => {
    setWords({ ...words, [e.target.name]: e.target.value })
  }

  const generateStory = () => {
    setStory(`One day, a giant ${words.color} ${words.animal} was ${words.action} all over ${words.place}. It was the funniest thing ever!`)
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="animated-gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Madlibs Project! 🎭
      </h1>
      
      <div className="glass-panel lesson-card">
        <h2>Putting It All Together!</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          You've learned about <strong>Variables</strong> and <strong>Strings</strong> (words). Let's use them to build a funny story generator, also known as a Madlib!
        </p>
        
        <CodeBlock code={`animal = "dragon"
color = "purple"
action = "dancing"
place = "the moon"

# We use the variable names to mix code with strings using 'f-strings'!
story = f"One day, a \\{color\\} \\{animal\\} was \\{action\\} all over \\{place\\}."
print(story)`} />
      </div>

      <div className="glass-panel lesson-card" style={{ borderLeft: '5px solid #E85D04' }}>
        <h2>Create Your Story ✏️</h2>
        <p style={{ marginBottom: '15px' }}>Fill in the blanks with silly words, then generate your Python string!</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
          {Object.keys(words).map(key => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <label style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{key}</label>
              <input 
                name={key}
                type="text" 
                value={words[key]} 
                onChange={handleChange} 
                style={{
                  padding: '10px 15px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--background)',
                  color: 'var(--text)'
                }}
              />
            </div>
          ))}
        </div>
        
        <button onClick={generateStory} className="btn-primary" style={{ marginBottom: '20px', background: '#E85D04', boxShadow: '0 4px 15px rgba(232, 93, 4, 0.4)' }}>
          Generate Story
        </button>

        {story && (
          <div style={{ background: 'var(--code-bg)', color: '#f8f8f2', padding: '20px', borderRadius: '12px', fontSize: '1.2rem', fontFamily: 'monospace' }}>
            <span style={{color: '#8be9fd'}}>story</span> = f"<span style={{color: '#f1fa8c'}}>{story}</span>"
            <br/><br/>
            {'>'} {story}
          </div>
        )}
      </div>

      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Link to="/exercises">
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#FFD700', color: '#000', border: 'none' }}>
            Next: Final Exercises <Play size={20} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LessonMadlibs
