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
import './App.css'

function App() {
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'en'
      ? 'Apu World Travel — Journeys shaped by the Andes'
      : 'Apu World Travel — Viajes con el pulso de los Andes'
  }, [language])

  return (
    <>
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
