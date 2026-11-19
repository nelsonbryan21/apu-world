import cuscoImage from '../assets/cusco-stone.jpg'
import mountainImage from '../assets/rainbow-mountain.jpg'
import valleyImage from '../assets/sacred-valley.jpg'
import heroImage from '../assets/andes-hero.jpg'

export const routeCategories = ['all', 'highland', 'history', 'temples']

export const routes = [
  {
    id: 'machu-picchu',
    category: 'history',
    image: heroImage,
    title: { es: 'Machu Picchu', en: 'Machu Picchu' },
    description: {
      es: 'Un encuentro íntimo con la ciudad que los Andes guardaron entre nubes.',
      en: 'An intimate encounter with the city the Andes kept among the clouds.',
    },
    altitude: '2,430 m',
    duration: { es: 'Día completo', en: 'Full day' },
    difficulty: { es: 'Moderada', en: 'Moderate' },
    transfer: { es: 'Tren desde Ollantaytambo · 1 h 40 min', en: 'Train from Ollantaytambo · 1 hr 40 min' },
    access: { es: 'Tren + bus de montaña', en: 'Train + mountain bus' },
    itinerary: [
      { time: '04:30', es: 'Salida desde Cusco hacia la estación de tren.', en: 'Depart Cusco for the train station.' },
      { time: '07:00', es: 'Tren panorámico hasta Aguas Calientes.', en: 'Scenic train to Aguas Calientes.' },
      { time: '09:00', es: 'Visita guiada por los circuitos arqueológicos.', en: 'Guided visit through the archaeological circuits.' },
      { time: '15:30', es: 'Regreso en tren y traslado a Cusco.', en: 'Return by train and transfer to Cusco.' },
    ],
  },
  {
    id: 'vinicunca',
    category: 'highland',
    image: mountainImage,
    title: { es: 'Montaña de 7 Colores', en: 'Rainbow Mountain' },
    description: {
      es: 'Capas minerales y horizonte abierto en el corazón de la cordillera.',
      en: 'Mineral-colored slopes and open horizons in the heart of the range.',
    },
    altitude: '5,036 m',
    duration: { es: '14 horas', en: '14 hours' },
    difficulty: { es: 'Alta', en: 'Challenging' },
    transfer: { es: 'Cusco – Cusipata · 3 h', en: 'Cusco – Cusipata · 3 hrs' },
    access: { es: 'Traslado + caminata de altura', en: 'Transfer + high-altitude hike' },
    itinerary: [
      { time: '03:30', es: 'Recojo en Cusco y viaje hacia Cusipata.', en: 'Pickup in Cusco and drive to Cusipata.' },
      { time: '06:30', es: 'Desayuno andino y briefing de aclimatación.', en: 'Andean breakfast and acclimatization briefing.' },
      { time: '08:00', es: 'Caminata guiada hasta el mirador de Vinicunca.', en: 'Guided hike to the Vinicunca viewpoint.' },
      { time: '13:00', es: 'Almuerzo local y retorno a Cusco.', en: 'Local lunch and return to Cusco.' },
    ],
  },
  {
    id: 'cusco-ancestral',
    category: 'history',
    image: cuscoImage,
    title: { es: 'Cusco ancestral', en: 'Ancestral Cusco' },
    description: {
      es: 'Piedra inca, balcones coloniales y relatos vivos en cada esquina.',
      en: 'Inca stonework, colonial balconies and living stories around every corner.',
    },
    altitude: '3,399 m',
    duration: { es: '4 horas', en: '4 hours' },
    difficulty: { es: 'Fácil', en: 'Easy' },
    transfer: { es: 'A pie por el centro histórico', en: 'On foot through the historic center' },
    access: { es: 'Caminata urbana', en: 'Urban walking tour' },
    itinerary: [
      { time: '09:00', es: 'Encuentro en la Plaza de Armas.', en: 'Meet at the Plaza de Armas.' },
      { time: '09:30', es: 'Templo del Sol y callejones incas.', en: 'Temple of the Sun and Inca lanes.' },
      { time: '11:00', es: 'San Blas, talleres y mirador de la ciudad.', en: 'San Blas, local workshops and city lookout.' },
      { time: '13:00', es: 'Cierre con recomendaciones para descubrir Cusco.', en: 'Finish with local tips for exploring Cusco.' },
    ],
  },
  {
    id: 'valle-sagrado',
    category: 'temples',
    image: valleyImage,
    title: { es: 'Valle Sagrado', en: 'Sacred Valley' },
    description: {
      es: 'Terrazas, mercados y templos entre ríos y montañas tutelares.',
      en: 'Terraces, markets and temples between rivers and guardian peaks.',
    },
    altitude: '2,792 m',
    duration: { es: 'Día completo', en: 'Full day' },
    difficulty: { es: 'Fácil', en: 'Easy' },
    transfer: { es: 'Cusco – Pisac · 1 h', en: 'Cusco – Pisac · 1 hr' },
    access: { es: 'Traslado privado + caminatas cortas', en: 'Private transfer + short walks' },
    itinerary: [
      { time: '08:00', es: 'Salida hacia el mirador del Valle Sagrado.', en: 'Depart for the Sacred Valley viewpoint.' },
      { time: '09:30', es: 'Andenes y mercado tradicional de Pisac.', en: 'Pisac terraces and traditional market.' },
      { time: '13:00', es: 'Almuerzo de temporada junto al río.', en: 'Seasonal lunch by the river.' },
      { time: '15:00', es: 'Templo y terrazas de Ollantaytambo.', en: 'Ollantaytambo temple and terraces.' },
    ],
  },
  {
    id: 'salkantay',
    category: 'highland',
    image: mountainImage,
    title: { es: 'Camino Salkantay', en: 'Salkantay Trek' },
    description: {
      es: 'Una travesía de montaña desde glaciares hasta la ceja de selva.',
      en: 'A mountain crossing from glacier country to the edge of the rainforest.',
    },
    altitude: '4,630 m',
    duration: { es: '5 días / 4 noches', en: '5 days / 4 nights' },
    difficulty: { es: 'Exigente', en: 'Strenuous' },
    transfer: { es: 'Cusco – Soraypampa · 3 h', en: 'Cusco – Soraypampa · 3 hrs' },
    access: { es: 'Trekking de varios días', en: 'Multi-day trek' },
    itinerary: [
      { time: 'Día 1', es: 'Soraypampa y laguna Humantay.', en: 'Soraypampa and Humantay Lake.' },
      { time: 'Día 2', es: 'Paso Salkantay y campamento de altura.', en: 'Salkantay Pass and high-altitude camp.' },
      { time: 'Día 3', es: 'Descenso por bosques nubosos.', en: 'Descend through cloud forest.' },
      { time: 'Día 4–5', es: 'Aguas Calientes y visita a Machu Picchu.', en: 'Aguas Calientes and a visit to Machu Picchu.' },
    ],
  },
]
