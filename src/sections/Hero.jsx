function Hero({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-image" data-reveal="image" data-parallax="0.11" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-coordinate" data-reveal="up">13°09′47.0″S &nbsp; 72°32′44.0″W</div>
      <div className="hero-content" data-reveal-stagger>
        <p className="eyebrow hero-eyebrow" data-reveal="up">
          <span className="eyebrow-line" />
          {isEnglish ? 'Journeys shaped by the Andes' : 'Viajes con el pulso de los Andes'}
        </p>
        <h1 data-reveal="title">
          {isEnglish ? <>The Andes<br /><em>are calling.</em></> : <>Los Andes<br /><em>te llaman.</em></>}
        </h1>
        <p className="hero-copy" data-reveal="up">
          {isEnglish
            ? 'Come closer to the places, stories and people that make this land unforgettable.'
            : 'Acércate a los lugares, historias y personas que hacen de esta tierra algo inolvidable.'}
        </p>
        <a className="button button-champagne" href="#rutas" data-reveal="up">
          {isEnglish ? 'Find your route' : 'Encuentra tu ruta'}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="hero-footnote" data-reveal="up">
        <span className="hero-compass" aria-hidden="true">✳</span>
        <span>{isEnglish ? '13° south · 3,399 m above sea level' : '13° sur · 3,399 m s. n. m.'}</span>
      </div>
      <a className="hero-scroll" href="#esencia" data-reveal="up">
        <span>{isEnglish ? 'Scroll to explore' : 'Desliza para explorar'}</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}

export default Hero
