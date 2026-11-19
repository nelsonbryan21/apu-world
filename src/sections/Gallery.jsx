import heroImage from '../assets/andes-hero.jpg'
import cuscoImage from '../assets/cusco-stone.jpg'
import mountainImage from '../assets/rainbow-mountain.jpg'
import valleyImage from '../assets/sacred-valley.jpg'

const moments = [
  { image: heroImage, title: { es: 'Entre nubes', en: 'Among clouds' }, className: 'gallery-tall' },
  { image: valleyImage, title: { es: 'El valle despierta', en: 'The valley wakes' }, className: 'gallery-wide' },
  { image: cuscoImage, title: { es: 'Piedra que cuenta', en: 'Stories in stone' }, className: '' },
  { image: mountainImage, title: { es: 'A paso de montaña', en: 'At mountain pace' }, className: '' },
]

function Gallery({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="gallery-section section-shell" id="galeria">
      <div className="section-heading gallery-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" />{isEnglish ? 'Field notes' : 'Notas de viaje'}</p>
          <h2>{isEnglish ? <>A little closer<br />to <em>the feeling.</em></> : <>Un poco más cerca<br />de <em>sentirlo.</em></>}</h2>
        </div>
        <p className="section-intro">
          {isEnglish
            ? 'Some moments are hard to describe. We’ll let these do the talking.'
            : 'Hay momentos difíciles de explicar. Dejamos que las imágenes hablen.'}
        </p>
      </div>
      <div className="gallery-grid">
        {moments.map((moment, index) => (
          <figure className={`gallery-tile ${moment.className}`} key={moment.title.es} tabIndex="0">
            <img src={moment.image} alt={moment.title[language]} loading="lazy" />
            <figcaption>
              <span>0{index + 1} / {moment.title[language]}</span>
              <span aria-hidden="true">↗</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
