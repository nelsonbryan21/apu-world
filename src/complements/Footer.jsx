function Footer({ language }) {
  const isEnglish = language === 'en'

  return (
    <footer className="site-footer">
      <div className="footer-main" data-reveal-stagger>
        <div className="footer-brand" data-reveal="up">
          <a className="brand-lockup brand-lockup-light" href="#inicio" data-reveal="up">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span className="brand-name">
              <strong>APU</strong>
              <small>WORLD TRAVEL</small>
            </span>
          </a>
          <p data-reveal="up">
            {isEnglish
              ? 'We take you closer to the Andes, with the care of those who call them home.'
              : 'Te acercamos a los Andes con el cuidado de quienes los sienten como hogar.'}
          </p>
        </div>
        <div className="footer-column" data-reveal-stagger>
          <h2 data-reveal="up">{isEnglish ? 'Explore' : 'Explora'}</h2>
          <a href="#rutas" data-reveal="up">{isEnglish ? 'Signature routes' : 'Rutas emblemáticas'}</a>
          <a href="#mapa" data-reveal="up">{isEnglish ? 'Route map' : 'Mapa de rutas'}</a>
          <a href="#galeria" data-reveal="up">{isEnglish ? 'Photo journal' : 'Galería de viaje'}</a>
        </div>
        <div className="footer-column" data-reveal-stagger>
          <h2 data-reveal="up">{isEnglish ? 'Let’s talk' : 'Conversemos'}</h2>
          <a href="mailto:hola@apu-world.travel" data-reveal="up">hola@apu-world.travel</a>
          <a href="tel:+51984000000" data-reveal="up">+51 984 000 000</a>
          <p data-reveal="up">{isEnglish ? 'Cusco, Peru · Mon–Sat, 9 am–6 pm' : 'Cusco, Perú · Lun–Sáb, 9:00–18:00'}</p>
        </div>
        <a
          className="footer-whatsapp"
          data-reveal="up"
          href="https://wa.me/51984000000"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true">↗</span>
          {isEnglish ? 'Ask us on WhatsApp' : 'Escríbenos por WhatsApp'}
        </a>
      </div>
      <div className="footer-bottom" data-reveal-stagger>
        <span data-reveal="up">© {new Date().getFullYear()} Apu World Travel</span>
        <span data-reveal="up">{isEnglish ? 'Made with care in Cusco' : 'Hecho con cariño en Cusco'}</span>
        <div className="footer-socials">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" data-reveal="up">Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" data-reveal="up">Facebook</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
