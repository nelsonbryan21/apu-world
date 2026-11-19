import mariaPhoto from '../assets/guide-maria.jpg'
import diegoPhoto from '../assets/guide-diego.jpg'

const guides = [
  {
    id: 'maria',
    name: 'María Quispe',
    role: { es: 'Guía cultural · Cusco', en: 'Cultural guide · Cusco' },
    photo: mariaPhoto,
    bio: {
      es: 'Cusqueña, caminante y narradora de historias. Te lleva más allá de las fechas para encontrar las voces que aún habitan cada piedra.',
      en: 'Cusqueña, walker and storyteller. She goes beyond dates to find the voices that still live in every stone.',
    },
    traits: { es: ['Quechua nativo', 'Arqueología viva', '8 años guiando'], en: ['Native Quechua', 'Living archaeology', '8 years guiding'] },
    number: '01',
  },
  {
    id: 'diego',
    name: 'Diego Huamán',
    role: { es: 'Guía de montaña · Andes', en: 'Mountain guide · Andes' },
    photo: diegoPhoto,
    bio: {
      es: 'Montañista de corazón y experto en altura. Conoce los ritmos de la cordillera y sabe cuándo parar para escuchar el silencio.',
      en: 'A mountaineer at heart and high-altitude expert. He knows the rhythm of the range and when to pause and listen to the silence.',
    },
    traits: { es: ['Primeros auxilios', 'Especialista en altura', '7 años en ruta'], en: ['First aid certified', 'High-altitude expert', '7 years on trail'] },
    number: '02',
  },
]

function Guides({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="guides-section" id="guias">
      <div className="guides-shell">
        <div className="guides-heading">
          <div>
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" />{isEnglish ? 'People of the mountains' : 'Gente de montaña'}</p>
            <h2>{isEnglish ? <>The best stories<br />have <em>a guide.</em></> : <>Las mejores historias<br />tienen <em>guía.</em></>}</h2>
          </div>
          <p>
            {isEnglish
              ? 'Our guides are not just leading the way. They are sharing the place they call home.'
              : 'Nuestros guías no solo conocen el camino: comparten el lugar que llaman hogar.'}
          </p>
        </div>
        <div className="guides-grid">
          {guides.map((guide) => (
            <article className="guide-card" key={guide.id}>
              <div className="guide-photo-wrap">
                <img src={guide.photo} alt={isEnglish ? `${guide.name}, Apu World Travel guide` : `${guide.name}, guía de Apu World Travel`} loading="lazy" />
                <span className="guide-number">{guide.number} / {isEnglish ? 'GUIDE' : 'GUÍA'}</span>
              </div>
              <div className="guide-details">
                <p className="guide-role">{guide.role[language]}</p>
                <h3>{guide.name}</h3>
                <p className="guide-bio">{guide.bio[language]}</p>
                <ul className="guide-traits">
                  {guide.traits[language].map((trait) => <li key={trait}>{trait}</li>)}
                </ul>
              </div>
            </article>
          ))}
          <aside className="guide-note">
            <span aria-hidden="true">✳</span>
            <p>{isEnglish ? 'A good guide doesn’t just show you the way. They help you feel you belong.' : 'Un buen guía no solo te muestra el camino. Te ayuda a sentir que perteneces.'}</p>
            <small>{isEnglish ? 'THE APU PROMISE' : 'EL COMPROMISO APU'}</small>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Guides
