import { useEffect, useState } from 'react'
import Header from './complements/Header.jsx'
import Footer from './complements/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Story from './sections/Story.jsx'
import Routes from './sections/Routes.jsx'
import Guides from './sections/Guides.jsx'
import MapExplorer from './sections/MapExplorer.jsx'
import Gallery from './sections/Gallery.jsx'
import Contact from './sections/Contact.jsx'
import useScrollEffects from './sections/useScrollEffects.js'
import './App.css'
import './complements/header.css'
import './sections/reveal.css'
import './sections/hero.css'
import './sections/story.css'
import './sections/routes.css'
import './sections/guides.css'
import './sections/mapExplorer.css'
import './sections/gallery.css'
import './sections/contact.css'

function App() {
  const [language, setLanguage] = useState('es')
  const [introVisible, setIntroVisible] = useState(true)
  useScrollEffects(!introVisible)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'en'
      ? 'Apu World Travel — Journeys shaped by the Andes'
      : 'Apu World Travel — Viajes con el pulso de los Andes'
  }, [language])

  useEffect(() => {
    if (!introVisible) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 1400
      : 4600
    const timer = window.setTimeout(() => setIntroVisible(false), duration)
    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [introVisible])

  return (
    <>
      {introVisible && (
        <div className="intro-screen" aria-hidden="true">
          <div className="intro-lockup">
            <img className="intro-mark" src="/favicon.svg" alt="" />
            <span className="intro-caption">APU WORLD TRAVEL</span>
          </div>
        </div>
      )}
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <Story language={language} />
        <Routes language={language} />
        <Guides language={language} />
        <MapExplorer language={language} />
        <Gallery language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  )
}

export default App
