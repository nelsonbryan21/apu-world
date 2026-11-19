import storyImage from '../assets/cusco-stone.jpg'

function Story({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="story-section section-shell" id="esencia">
      <div className="story-image-wrap">
        <img src={storyImage} alt={isEnglish ? 'Ancient stonework in the Andes' : 'Piedra ancestral en los Andes'} />
        <div className="image-caption">
          <span className="caption-mark" aria-hidden="true">✳</span>
          <span>{isEnglish ? 'A land of many layers' : 'Una tierra de muchas capas'}</span>
        </div>
      </div>
      <div className="story-copy">
        <p className="eyebrow"><span className="eyebrow-line" />{isEnglish ? 'Our spirit' : 'Nuestra esencia'}</p>
        <h2>
          {isEnglish
            ? <>We travel with<br />our <em>roots showing.</em></>
            : <>Viajamos con<br />las raíces <em>a la vista.</em></>}
        </h2>
        <p className="story-intro">
          {isEnglish
            ? 'Apu means mountain spirit. It is also our promise: to guide you with respect, curiosity and the warmth of a local welcome.'
            : 'Apu significa espíritu de la montaña. También es nuestra promesa: acompañarte con respeto, curiosidad y la calidez de quien te recibe en casa.'}
        </p>
        <div className="mission-vision">
          <article>
            <span className="small-index">01 / {isEnglish ? 'PURPOSE' : 'PROPÓSITO'}</span>
            <h3>{isEnglish ? 'Our mission' : 'Nuestra misión'}</h3>
            <p>
              {isEnglish
                ? 'Create thoughtful journeys that connect people with Andean culture and the communities who keep it alive.'
                : 'Crear viajes conscientes que conecten a las personas con la cultura andina y las comunidades que la mantienen viva.'}
            </p>
          </article>
          <article>
            <span className="small-index">02 / {isEnglish ? 'HORIZON' : 'HORIZONTE'}</span>
            <h3>{isEnglish ? 'Our vision' : 'Nuestra visión'}</h3>
            <p>
              {isEnglish
                ? 'Be a trusted bridge to the Andes, where every trip leaves a meaningful memory and a lighter footprint.'
                : 'Ser un puente de confianza hacia los Andes, donde cada viaje deje un recuerdo significativo y una huella ligera.'}
            </p>
          </article>
        </div>
        <a className="text-link" href="#contacto">
          {isEnglish ? 'Get to know us' : 'Conversemos'} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default Story
