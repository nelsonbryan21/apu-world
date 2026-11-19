import { useState } from 'react'

const navigation = {
  es: [
    ['Inicio', '#inicio'],
    ['Nuestra esencia', '#esencia'],
    ['Rutas', '#rutas'],
    ['Guías', '#guias'],
    ['Contacto', '#contacto'],
  ],
  en: [
    ['Home', '#inicio'],
    ['Our spirit', '#esencia'],
    ['Routes', '#rutas'],
    ['Guides', '#guias'],
    ['Contact', '#contacto'],
  ],
}

function Header({ language, onLanguageChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isEnglish = language === 'en'

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="utility-inner" data-reveal-stagger>
          <a href="tel:+51984000000" data-reveal="up">
            <span aria-hidden="true">↗</span> +51 984 000 000
          </a>
          <a href="mailto:hola@apu-world.travel" data-reveal="up">hola@apu-world.travel</a>
          <span className="utility-note" data-reveal="up">
            {isEnglish ? 'Based in Cusco · Peru' : 'Desde Cusco · Perú'}
          </span>
          <div className="language-switch" aria-label={isEnglish ? 'Language' : 'Idioma'} data-reveal="up">
            <button
              type="button"
              onClick={() => onLanguageChange('es')}
              aria-pressed={!isEnglish}
            >
              <img src="/src/assets/peru.svg" alt="" aria-hidden="true" className={isEnglish ? 'none-flag' : 'flag'} />
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={isEnglish}
            >
              <img src="/src/assets/london.svg" alt="" aria-hidden="true" className={isEnglish ? 'flag' : 'none-flag'} />
            </button>
          </div>
        </div>
      </div>
      <div className={`navigation-wrap${menuOpen ? ' menu-is-open' : ''}`}>
        <a className="brand-lockup" href="#inicio" aria-label="Apu World Travel, inicio" data-reveal="up">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-name">
            <strong>APU</strong>
            <small>WORLD TRAVEL</small>
          </span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          data-reveal="up"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? (isEnglish ? 'Close' : 'Cerrar') : (isEnglish ? 'Menu' : 'Menú')}</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label={isEnglish ? 'Main navigation' : 'Navegación principal'}
          data-reveal-stagger
        >
          {navigation[language].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} data-reveal="up">{label}</a>
          ))}
          <a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)} data-reveal="up">
            {isEnglish ? 'Plan my trip' : 'Planea mi viaje'} <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
