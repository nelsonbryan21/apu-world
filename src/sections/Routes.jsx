import { useEffect, useRef, useState } from 'react'
import { routeCategories, routes } from './routeData.js'

const categoryLabels = {
  es: { all: 'Todas las rutas', highland: 'Alta montaña', history: 'Historia', temples: 'Templos' },
  en: { all: 'All routes', highland: 'High altitude', history: 'History', temples: 'Temples' },
}

function RouteDialog({ route, language, onClose }) {
  const dialogRef = useRef(null)
  const isEnglish = language === 'en'

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined

    if (!dialog.open) dialog.showModal()
    return () => {
      if (dialog.open) dialog.close()
    }
  }, [])

  return (
    <dialog
      className="route-dialog"
      ref={dialogRef}
      onClose={(event) => {
        if (!event.currentTarget.open) onClose()
      }}
      onCancel={(event) => {
        event.preventDefault()
        event.currentTarget.close()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault()
          dialogRef.current.close()
        }
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close()
      }}
    >
      <div className="dialog-image" data-reveal="image" style={{ backgroundImage: `url("${route.image}")` }}>
        <button
          className="dialog-close"
          type="button"
          onClick={() => dialogRef.current.close()}
          aria-label={isEnglish ? 'Close itinerary' : 'Cerrar itinerario'}
        >
          ×
        </button>
        <span className="dialog-image-caption">{route.altitude} · {route.duration[language]}</span>
      </div>
      <div className="dialog-content" data-reveal-stagger>
        <p className="eyebrow"><span className="eyebrow-line" />{isEnglish ? 'The journey, step by step' : 'El recorrido, paso a paso'}</p>
        <h2 data-reveal="title">{route.title[language]}</h2>
        <p className="dialog-description" data-reveal="up">{route.description[language]}</p>
        <div className="route-facts dialog-facts">
          <span><small>{isEnglish ? 'Difficulty' : 'Dificultad'}</small>{route.difficulty[language]}</span>
          <span><small>{isEnglish ? 'Transfer' : 'Traslado'}</small>{route.transfer[language]}</span>
        </div>
        <ol className="itinerary-list">
          {route.itinerary.map((stop) => (
            <li key={`${route.id}-${stop.time}`}>
              <time>{stop.time}</time>
              <span>{stop[language]}</span>
            </li>
          ))}
        </ol>
        <a className="button button-dark dialog-cta" href={`https://wa.me/51984000000?text=${encodeURIComponent(isEnglish ? `I'd like to plan the ${route.title.en} trip.` : `Quisiera planear la ruta ${route.title.es}.`)}`} target="_blank" rel="noreferrer">
          {isEnglish ? 'Ask about this route' : 'Consultar esta ruta'} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </dialog>
  )
}

function Routes({ language }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedRoute, setSelectedRoute] = useState(null)
  const isEnglish = language === 'en'
  const visibleRoutes = activeCategory === 'all'
    ? routes
    : routes.filter((route) => route.category === activeCategory)

  return (
    <section className="routes-section section-shell" id="rutas">
      <div className="section-heading routes-heading" data-reveal-stagger>
        <div>
          <p className="eyebrow" data-reveal="up"><span className="eyebrow-line" />{isEnglish ? 'Find your way' : 'Encuentra tu camino'}</p>
          <h2 data-reveal="title">{isEnglish ? <>Routes that stay<br /><em>with you.</em></> : <>Rutas que se quedan<br /><em>contigo.</em></>}</h2>
        </div>
        <p className="section-intro" data-reveal="up">
          {isEnglish
            ? 'From ancient pathways to high mountain passes, choose a journey that feels like yours.'
            : 'De caminos ancestrales a pasos de alta montaña: elige un viaje que se sienta tuyo.'}
        </p>
      </div>
      <div className="route-filters" role="group" aria-label={isEnglish ? 'Filter routes' : 'Filtrar rutas'} data-reveal-stagger>
        {routeCategories.map((category) => (
          <button
            type="button"
            key={category}
            className={activeCategory === category ? 'filter-chip is-active' : 'filter-chip'}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {categoryLabels[language][category]}
          </button>
        ))}
        <span className="route-count" data-reveal="up">{String(visibleRoutes.length).padStart(2, '0')} {isEnglish ? 'journeys' : 'rutas'}</span>
      </div>
      <div className="routes-grid">
        {visibleRoutes.map((route, index) => (
          <article className={`route-card${index === 0 && activeCategory === 'all' ? ' route-card-featured' : ''}`} key={route.id} data-reveal-stagger>
            <div className="route-card-image" data-reveal="image">
              <img src={route.image} alt="" loading="lazy" data-parallax="0.045" />
              <span className="route-image-index">{String(routes.indexOf(route) + 1).padStart(2, '0')}</span>
              <span className="route-category-label">{categoryLabels[language][route.category]}</span>
            </div>
            <div className="route-card-body">
              <h3 data-reveal="title">{route.title[language]}</h3>
              <p data-reveal="up">{route.description[language]}</p>
              <div className="route-facts" data-reveal="up">
                <span><small>{isEnglish ? 'Altitude' : 'Altitud'}</small>{route.altitude}</span>
                <span><small>{isEnglish ? 'Duration' : 'Duración'}</small>{route.duration[language]}</span>
                <span><small>{isEnglish ? 'Level' : 'Nivel'}</small>{route.difficulty[language]}</span>
              </div>
              <button className="route-detail-button" type="button" data-reveal="up" onClick={() => setSelectedRoute(route)}>
                {isEnglish ? 'Explore itinerary' : 'Ver recorrido'} <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>
        ))}
      </div>
      {selectedRoute && (
        <RouteDialog
          key={selectedRoute.id}
          route={selectedRoute}
          language={language}
          onClose={() => setSelectedRoute(null)}
        />
      )}
    </section>
  )
}

export default Routes
