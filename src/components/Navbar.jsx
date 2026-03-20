import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Code, Menu, X } from 'lucide-react'

const Navbar = ({ toggleTheme, currentTheme }) => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home', color: 'var(--primary)' },
    { path: '/intro', label: 'Intro', color: '#9D4EDD' },
    { path: '/variables', label: 'Variables', color: 'var(--secondary)' },
    { path: '/math', label: 'Math', color: 'var(--primary)' },
    { path: '/logic', label: 'Logic', color: 'var(--accent)' },
    { path: '/lists', label: 'Lists', color: '#FF9F1C' },
    { path: '/functions', label: 'Functions', color: '#FF6B6B' },
    { path: '/madlibs', label: 'Madlibs', color: '#E85D04' },
    { path: '/exercises', label: 'Exercises', color: '#FFD700' }
  ]

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

      <div className="nav-desktop-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} style={{
            fontWeight: 600,
            color: location.pathname === link.path ? link.color : 'var(--text)',
            borderBottom: location.pathname === link.path ? `3px solid ${link.color}` : '3px solid transparent',
            paddingBottom: '5px',
            transition: 'all 0.2s',
            display: window.innerWidth > 768 ? 'block' : 'none'
          }}>{link.label}</Link>
        ))}
        
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none', color: 'var(--text)', display: 'none' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          background: 'var(--card-bg)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          gap: '15px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} style={{
              fontWeight: 600,
              color: location.pathname === link.path ? link.color : 'var(--text)',
              fontSize: '1.2rem'
            }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
