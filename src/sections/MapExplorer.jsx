import { useState } from 'react'
import { routes } from './routeData.js'

const mapPins = [
  { routeId: 'cusco-ancestral', x: 43, y: 58, label: { es: 'Cusco', en: 'Cusco' } },
  { routeId: 'valle-sagrado', x: 29, y: 36, label: { es: 'Valle Sagrado', en: 'Sacred Valley' } },
  { routeId: 'machu-picchu', x: 14, y: 53, label: { es: 'Machu Picchu', en: 'Machu Picchu' } },
  { routeId: 'vinicunca', x: 71, y: 69, label: { es: 'Vinicunca', en: 'Vinicunca' } },
  { routeId: 'salkantay', x: 25, y: 78, label: { es: 'Salkantay', en: 'Salkantay' } },
]

function MapExplorer({ language }) {
  const [selectedId, setSelectedId] = useState('machu-picchu')
  const isEnglish = language === 'en'
  const selectedRoute = routes.find((route) => route.id === selectedId) ?? routes[0]

  return (
    <section className="map-section section-shell" id="mapa">
      <div className="section-heading map-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" />{isEnglish ? 'A sense of place' : 'Ubícate en el camino'}</p>
          <h2>{isEnglish ? <>The Andes,<br /><em>at your feet.</em></> : <>Los Andes,<br /><em>a tu alcance.</em></>}</h2>
        </div>
        <p className="section-intro">
          {isEnglish
            ? 'Tap a landmark to see where each journey begins, how to get there and what the altitude feels like.'
            : 'Explora cada punto para conocer su ubicación, cómo llegar y qué esperar de la altura.'}
        </p>
      </div>
      <div className="map-explorer">
        <div className="map-canvas" aria-label={isEnglish ? 'Interactive map of routes in the Cusco region' : 'Mapa interactivo de rutas de la región de Cusco'}>
          <svg className="map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M43 58 C36 48 33 41 29 36 C25 39 19 46 14 53" />
            <path d="M43 58 C47 62 54 68 71 69" />
            <path d="M43 58 C38 63 32 71 25 78" />
            <path className="map-river" d="M7 25 C22 31 25 44 38 47 S55 52 63 64 79 78 96 75" />
          </svg>
          <div className="map-contour contour-one" aria-hidden="true" />
          <div className="map-contour contour-two" aria-hidden="true" />
          <span className="map-region-label region-north">{isEnglish ? 'THE SACRED VALLEY' : 'VALLE SAGRADO'}</span>
          <span className="map-region-label region-south">{isEnglish ? 'VILCANOTA RANGE' : 'CORDILLERA VILCANOTA'}</span>
          {mapPins.map((pin) => (
            <button
              className={`map-pin${selectedId === pin.routeId ? ' is-selected' : ''}`}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              type="button"
              key={pin.routeId}
              onClick={() => setSelectedId(pin.routeId)}
              aria-pressed={selectedId === pin.routeId}
              aria-label={pin.label[language]}
            >
              <span className="pin-dot" aria-hidden="true" />
              <span className="pin-label">{pin.label[language]}</span>
            </button>
          ))}
          <span className="map-scale">{isEnglish ? 'CUSCO REGION · NOT TO SCALE' : 'REGIÓN CUSCO · MAPA REFERENCIAL'}</span>
        </div>
        <article className="map-detail-card" aria-live="polite">
          <div className="map-detail-image">
            <img src={selectedRoute.image} alt="" />
            <span className="map-altitude">{selectedRoute.altitude}</span>
          </div>
          <div className="map-detail-copy">
            <p className="eyebrow"><span className="eyebrow-line" />{isEnglish ? 'Selected destination' : 'Destino seleccionado'}</p>
            <h3>{selectedRoute.title[language]}</h3>
            <p>{selectedRoute.description[language]}</p>
            <dl className="map-facts">
              <div><dt>{isEnglish ? 'Transfer' : 'Traslado'}</dt><dd>{selectedRoute.transfer[language]}</dd></div>
              <div><dt>{isEnglish ? 'Access' : 'Acceso'}</dt><dd>{selectedRoute.access[language]}</dd></div>
            </dl>
            <a className="text-link" href="#rutas">
              {isEnglish ? 'See itinerary' : 'Ver itinerario'} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default MapExplorer
