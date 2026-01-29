import React from 'react'
import logo from '../../assets/logo1.png'
import { LANGUAGES } from '../../data/translations'
import './Navbar.css'

const Navbar = ({ language, setLanguage, onNavigate, labels }) => {
  const handleLangClick = (code) => {
    setLanguage(code)
  }

  return (
    <nav className="nav-root">
      <div className="nav-inner">
        <button className="nav-left" onClick={() => onNavigate('hero')} type="button">
          <img src={logo} alt="VO.MARKET logo" className="nav-logo" />
          <h1 className='nav-title'>MARKET</h1>
        </button>

        <div className="nav-center">
          <button className="nav-link" onClick={() => onNavigate('hero')}>
            <span>{labels.hero}</span>
            <span className="nav-link-underline" />
          </button>
          <button className="nav-link" onClick={() => onNavigate('advantages')}>
            <span>{labels.advantages}</span>
            <span className="nav-link-underline" />
          </button>
          <button className="nav-link" onClick={() => onNavigate('how-it-works')}>
            <span>{labels.howItWorks}</span>
            <span className="nav-link-underline" />
          </button>
          <button className="nav-link" onClick={() => onNavigate('location')}>
            <span>{labels.location}</span>
            <span className="nav-link-underline" />
          </button>
          <button className="nav-link" onClick={() => onNavigate('faq')}>
            <span>{labels.faq}</span>
            <span className="nav-link-underline" />
          </button>
          <button className="nav-link" onClick={() => onNavigate('contact')}>
            <span>{labels.contact}</span>
            <span className="nav-link-underline" />
          </button>
        </div>

        <div className="nav-right">
          <div className="nav-lang-switcher" aria-label="Tilni tanlash">
            {Object.values(LANGUAGES).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => handleLangClick(code)}
                className={`nav-lang-pill ${language === code ? 'active' : ''}`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

