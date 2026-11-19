function Contact({ language }) {
  const isEnglish = language === 'en'

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-shell">
        <div className="contact-intro" data-reveal-stagger>
          <p className="eyebrow eyebrow-light" data-reveal="up"><span className="eyebrow-line" />{isEnglish ? 'Your next chapter' : 'Tu próximo capítulo'}</p>
          <h2 data-reveal="title">{isEnglish ? <>Let’s make room<br />for <em>wonder.</em></> : <>Hagamos espacio<br />para el <em>asombro.</em></>}</h2>
          <p data-reveal="up">
            {isEnglish
              ? 'Tell us what moves you. Our local team will help shape a trip around your pace, your people and your kind of wonder.'
              : 'Cuéntanos qué te mueve. Nuestro equipo local te ayudará a crear un viaje a tu ritmo, con tu gente y a tu manera.'}
          </p>
          <a className="button button-champagne" href="https://wa.me/51984000000" target="_blank" rel="noreferrer" data-reveal="up">
            {isEnglish ? 'Plan a free consultation' : 'Agenda una orientación gratuita'} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-details" data-reveal-stagger>
          <div className="contact-highlight" data-reveal="up">
            <span className="contact-symbol" aria-hidden="true">↗</span>
            <div>
              <small>{isEnglish ? 'THE QUICK WAY' : 'EL CAMINO MÁS DIRECTO'}</small>
              <a href="https://wa.me/51984000000" target="_blank" rel="noreferrer">WhatsApp <span>+51 984 000 000</span></a>
            </div>
          </div>
          <div className="contact-row" data-reveal="up">
            <small>{isEnglish ? 'WRITE TO US' : 'ESCRÍBENOS'}</small>
            <a href="mailto:hola@apu-world.travel">hola@apu-world.travel</a>
          </div>
          <div className="contact-row" data-reveal="up">
            <small>{isEnglish ? 'COME SAY HELLO' : 'VEN A SALUDAR'}</small>
            <p>{isEnglish ? 'Historic center, Cusco, Peru' : 'Centro Histórico, Cusco, Perú'}</p>
          </div>
          <div className="contact-row" data-reveal="up">
            <small>{isEnglish ? 'OPEN HOURS' : 'HORARIO DE ATENCIÓN'}</small>
            <p>{isEnglish ? 'Monday–Saturday · 9:00 am–6:00 pm' : 'Lunes a sábado · 9:00–18:00'}</p>
          </div>
          <p className="contact-note" data-reveal="up">
            {isEnglish
              ? 'Our contact details are sample information and should be confirmed before launch.'
              : 'Los datos de contacto son referenciales; confirmar y actualizar antes de publicar.'}
          </p>
        </div>
      </div>
      <div className="contact-bottom-line" data-reveal-stagger>
        <span data-reveal="up">{isEnglish ? 'CUSCO IS CLOSER THAN YOU THINK.' : 'CUSCO ESTÁ MÁS CERCA DE LO QUE CREES.'}</span>
        <span data-reveal="up">13°31′S / 71°58′W</span>
      </div>
    </section>
  )
}

export default Contact
