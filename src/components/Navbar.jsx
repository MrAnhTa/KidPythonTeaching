import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Code } from 'lucide-react'

const Navbar = ({ toggleTheme, currentTheme }) => {
  const location = useLocation()

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      background: 'var(--card-bg)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
          padding: '10px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Code color="white" size={28} />
        </div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }} className="animated-gradient-text">
          PyKids
        </h1>
      </Link>

      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/" style={{
          fontWeight: 600,
          color: location.pathname === '/' ? 'var(--primary)' : 'var(--text)',
          borderBottom: location.pathname === '/' ? '3px solid var(--primary)' : '3px solid transparent',
          paddingBottom: '5px',
          transition: 'all 0.2s'
        }}>Home</Link>
        <Link to="/intro" style={{
          fontWeight: 600,
          color: location.pathname === '/intro' ? '#9D4EDD' : 'var(--text)',
          borderBottom: location.pathname === '/intro' ? '3px solid #9D4EDD' : '3px solid transparent',
          paddingBottom: '5px',
          transition: 'all 0.2s'
        }}>Intro</Link>
        <Link to="/variables" style={{
          fontWeight: 600,
          color: location.pathname === '/variables' ? 'var(--secondary)' : 'var(--text)',
          borderBottom: location.pathname === '/variables' ? '3px solid var(--secondary)' : '3px solid transparent',
          paddingBottom: '5px',
          transition: 'all 0.2s'
        }}>Variables</Link>
        <Link to="/math" style={{
          fontWeight: 600,
          color: location.pathname === '/math' ? 'var(--primary)' : 'var(--text)',
          borderBottom: location.pathname === '/math' ? '3px solid var(--primary)' : '3px solid transparent',
          paddingBottom: '5px',
          transition: 'all 0.2s'
        }}>Math</Link>
        <Link to="/logic" style={{
          fontWeight: 600,
          color: location.pathname === '/logic' ? 'var(--accent)' : 'var(--text)',
          borderBottom: location.pathname === '/logic' ? '3px solid var(--accent)' : '3px solid transparent',
          paddingBottom: '5px',
          transition: 'all 0.2s'
        }}>Logic</Link>
        <Link to="/lists" style={{
          fontWeight: 600,
          color: location.pathname === '/lists' ? '#FF9F1C' : 'var(--text)',
          borderBottom: location.pathname === '/lists' ? '3px solid #FF9F1C' : '3px solid transparent',
          paddingBottom: '5px',
          transition: 'all 0.2s'
        }}>Lists</Link>
        <Link to="/functions" style={{
          fontWeight: 600,
          color: location.pathname === '/functions' ? '#FF6B6B' : 'var(--text)',
          borderBottom: location.pathname === '/functions' ? '3px solid #FF6B6B' : '3px solid transparent',
          paddingBottom: '5px',
          transition: 'all 0.2s'
        }}>Functions</Link>
        <Link to="/madlibs" style={{
          fontWeight: 600,
          color: location.pathname === '/madlibs' ? '#E85D04' : 'var(--text)',
          borderBottom: location.pathname === '/madlibs' ? '3px solid #E85D04' : '3px solid transparent',
          paddingBottom: '5px',
          transition: 'all 0.2s'
        }}>Madlibs</Link>
        <Link to="/exercises" style={{
          fontWeight: 600,
          color: location.pathname === '/exercises' ? '#FFD700' : 'var(--text)',
          borderBottom: location.pathname === '/exercises' ? '3px solid #FFD700' : '3px solid transparent',
          paddingBottom: '5px',
          transition: 'all 0.2s'
        }}>Exercises</Link>
        
        <button 
          onClick={toggleTheme}
          style={{
            background: 'var(--border)',
            border: 'none',
            padding: '10px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text)',
            transition: 'transform 0.2s, background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
