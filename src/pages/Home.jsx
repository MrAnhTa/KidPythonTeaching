import { Link } from 'react-router-dom'
import { Rocket, Star, Code, Play, Calculator, Backpack, Bot, Lightbulb, PenTool, Award } from 'lucide-react'

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '40px' }}>
      <header style={{ marginTop: '40px', maxWidth: '800px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--card-bg)', padding: '10px 20px', borderRadius: '50px', marginBottom: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <Star color="var(--accent)" fill="var(--accent)" size={20} />
          <span style={{ fontWeight: 600 }}>Welcome to Your Coding Adventure!</span>
        </div>
        <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>
          Learn <span className="animated-gradient-text">Python</span>,<br />Build the Future
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text)', opacity: 0.8, marginBottom: '40px', lineHeight: 1.6 }}>
          Coding is like having a superpower. With Python, you can build games, websites, control robots, and do almost anything you can imagine!
        </p>
        <Link to="/intro">
          <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', padding: '16px 32px' }}>
            <Rocket size={24} />
            Start Journey
          </button>
        </Link>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%', marginTop: '40px' }}>
        <div className="glass-panel" style={{ padding: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'rgba(78, 205, 196, 0.2)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Code color="var(--secondary)" size={28} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Lesson 1: Variables</h2>
          <p style={{ opacity: 0.8, lineHeight: 1.5 }}>Learn how to store information using variables, just like boxes with labels!</p>
          <Link to="/variables" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: 'auto' }}>
            Start Lesson <Play size={16} />
          </Link>
        </div>

        <div className="glass-panel" style={{ padding: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'rgba(255, 230, 109, 0.2)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Star color="var(--accent)" size={28} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Lesson 2: Logic</h2>
          <p style={{ opacity: 0.8, lineHeight: 1.5 }}>Make your code smart! Teach it how to make decisions and repeat actions.</p>
          <Link to="/logic" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: 'auto' }}>
            Start Lesson <Play size={16} />
          </Link>
        </div>

        <div className="glass-panel" style={{ padding: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'rgba(255, 107, 107, 0.2)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Calculator color="var(--primary)" size={28} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Lesson 3: Math & Words</h2>
          <p style={{ opacity: 0.8, lineHeight: 1.5 }}>Python is a giant calculator that also loves words! Learn to mix them.</p>
          <Link to="/math" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: 'auto' }}>
            Start Lesson <Play size={16} />
          </Link>
        </div>

        <div className="glass-panel" style={{ padding: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'rgba(255, 159, 28, 0.2)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Backpack color="#FF9F1C" size={28} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Lesson 4: Lists</h2>
          <p style={{ opacity: 0.8, lineHeight: 1.5 }}>Pack your digital backpack! Store multiple things in one big box.</p>
          <Link to="/lists" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: 'auto' }}>
            Start Lesson <Play size={16} />
          </Link>
        </div>

        <div className="glass-panel" style={{ padding: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'rgba(78, 205, 196, 0.2)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bot color="var(--secondary)" size={28} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Lesson 5: Functions</h2>
          <p style={{ opacity: 0.8, lineHeight: 1.5 }}>Build mini-robots that do specific jobs whenever you call them!</p>
          <Link to="/functions" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: 'auto' }}>
            Start Lesson <Play size={16} />
          </Link>
        </div>

        <div className="glass-panel" style={{ padding: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'rgba(232, 93, 4, 0.2)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PenTool color="#E85D04" size={28} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Project: Madlibs!</h2>
          <p style={{ opacity: 0.8, lineHeight: 1.5 }}>Put your skills to the test and build a funny story generator!</p>
          <Link to="/madlibs" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: 'auto' }}>
            Start Project <Play size={16} />
          </Link>
        </div>

        <div className="glass-panel" style={{ padding: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px', border: '2px solid #FFD700', boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)' }}>
          <div style={{ background: 'rgba(255, 215, 0, 0.2)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Award color="#FFD700" size={28} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Final Exercises</h2>
          <p style={{ opacity: 0.8, lineHeight: 1.5 }}>Test your Python knowledge to earn the Python Master Award!</p>
          <Link to="/exercises" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: 'auto' }}>
            Start Challenges <Play size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
