import { Link } from 'react-router-dom'
import { Monitor, WifiOff, Globe, Lightbulb, Play } from 'lucide-react'

const Intro = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="animated-gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        What is Programming?
      </h1>
      
      <div className="glass-panel lesson-card">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Lightbulb color="var(--accent)" /> Speaking Robot Language</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Computers are incredibly fast, but they aren't very smart on their own. They need someone to tell them exactly what to do step-by-step. <strong>Programming (or coding)</strong> is simply giving instructions to a computer using a language it understands!
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        <div className="glass-panel lesson-card" style={{ borderTop: '5px solid var(--primary)', marginBottom: 0 }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem' }}><Globe color="var(--primary)" /> A World WITH Code</h2>
          <ul style={{ marginTop: '15px', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px' }}>
            <li>Self-driving cars navigating traffic safely 🚗</li>
            <li>Video games with entirely new worlds to explore 🎮</li>
            <li>Space rovers driving around on Mars 🚀</li>
            <li>Talking to friends on the other side of the planet 📱</li>
          </ul>
        </div>

        <div className="glass-panel lesson-card" style={{ borderTop: '5px solid var(--text)', marginBottom: 0, opacity: 0.8 }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem' }}><WifiOff color="var(--text)" /> A World WITHOUT Code</h2>
          <ul style={{ marginTop: '15px', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px' }}>
            <li>No smartphones, internet, or Netflix 📺</li>
            <li>Microwaves wouldn't know when to stop heating ⏱️</li>
            <li>Airplanes would be entirely manually flown ✈️</li>
            <li>Calculations would only be done on paper 📝</li>
          </ul>
        </div>
      </div>

      <div className="glass-panel lesson-card" style={{ textAlign: 'center' }}>
        <h2>Why Python? 🐍</h2>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '20px' }}>
          Python is a great first coding language because it looks a lot like normal English! It was literally named after a comedy show ("Monty Python"), so it's designed to be fun to use.
        </p>
        
        <Link to="/variables">
          <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
            Start Learning <Play size={20} />
          </button>
        </Link>
        
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <Link to="/variables">
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--secondary)' }}>
              Next: Variables <Play size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Intro
