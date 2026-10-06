import { Milestone, CertaintyCard, QuizQuestion, ReunionWish } from '../types';

export const APP_IMAGES = {
  hero: '/src/assets/images/hero_distance_love_1791253583558.jpg',
  countries: '/src/assets/images/el_salvador_peru_connection_1791253593263.jpg',
  keepsake: '/src/assets/images/love_keepsake_envelope_1791253602933.jpg',
};

export const DISTANCE_STATS = {
  distanceKm: 3150,
  monthsCount: 4,
  daysCount: 122,
  hoursCount: 2928,
  salvadorTimezone: 'America/El_Salvador',
  peruTimezone: 'America/Lima',
  flightHours: '4h 15m de vuelo directo imaginario',
  timeDifference: '1 hora (Perú GMT-5 / El Salvador GMT-6)',
};

export const MILESTONES: Milestone[] = [
  {
    month: 1,
    title: 'Mes 1: El Destino y la Primera Chispa',
    subtitle: 'Cuando el mapa dejó de ser geografía y se volvió tu nombre',
    date: 'Primer mes',
    theme: 'El Descubrimiento',
    symbol: '✨',
    summary: 'A miles de kilómetros, dos extraños comenzaron a hablar y, sin buscarlo, encontramos el refugio más puro.',
    letter: 'Recuerdo con cuánta timidez y emoción empezamos a hablar. Yo desde El Salvador, tú allá en Perú, separados por un continente entero pero inexplicablemente conectados en cada palabra. En ese primer mes me di cuenta de algo que nunca antes me había pasado: esperar un mensaje tuyo era el momento favorito de mi día. Empezaba a nacer la magia que hoy sostiene mi vida entera.',
    quote: '"No importó cuánta tierra y mar nos separara; desde el día uno, supe que mi corazón ya no pertenecía a ningún otro lugar."',
  },
  {
    month: 2,
    title: 'Mes 2: Las Madrugadas y la Intimidad del Alma',
    subtitle: 'Videollamadas que hacían que la pantalla desapareciera',
    date: 'Segundo mes',
    theme: 'La Conexión',
    symbol: '🌙',
    summary: 'Las horas se volvían minutos. Conocí tus risas, tus silencios, tus manías y me enamoré de cada pequeño detalle.',
    letter: 'Para el segundo mes ya éramos cómplices de madrugadas. La diferencia de una hora entre nuestros países no importaba: me quedaba despierto con tal de escuchar tu voz antes de dormir. Empezamos a compartir no solo las sonrisas, sino también nuestras heridas, nuestros miedos y lo que somos sin filtros. Verte sonreír a través de la cámara me enseñó que la distancia física es insignificante frente a la cercanía de dos almas.',
    quote: '"Aprendí que el hogar no son cuatro paredes: mi hogar es el sonido de tu respiración cuando te quedas dormida en llamada."',
  },
  {
    month: 3,
    title: 'Mes 3: Atravesando los Miedos Juntos',
    subtitle: 'El día en que decidimos que el amor es más valiente que la duda',
    date: 'Tercer mes',
    theme: 'La Vulnerabilidad',
    symbol: '🛡️',
    summary: 'Apareció ese susurro: "¿Seré suficiente para él? ¿Seré suficiente para ella?". Y nos dimos cuenta de que somos el uno para el otro.',
    letter: 'En este mes tuvimos momentos donde las inseguridades quisieron hablar. Sé que a veces te da miedo pensar que no eres suficiente para mí, que tal vez yo merezca más o que puedas fallar... Quiero que sepas algo desde lo más profundo de mi ser: yo también he sentido el miedo de no ser suficiente para ti, de querer darte el mundo entero y temer quedarme corto. Pero ese miedo no nos separa; nos une. Porque nos demuestra cuánto nos importamos. No quiero a nadie más. Eres todo lo que siempre le pedí a la vida, con tu luz, tus miedos y tu inmensa ternura.',
    quote: '"No necesitas ser perfecta para ser perfecta para mí. Ya eres mi mayor bendición."',
  },
  {
    month: 4,
    title: 'Mes 4: Nuestra Certeza Eterna & El Porvenir',
    subtitle: 'Hoy cumplo 4 meses eligiéndote, y quiero hacerlo por el resto de mis días',
    date: 'Hoy, 4 meses',
    theme: 'El Compromiso Eterno',
    symbol: '💍',
    summary: 'Hoy no celebramos solo el tiempo pasado, sino la convicción de que estamos construyendo una vida juntos.',
    letter: 'Llegamos a 4 meses, mi amor hermoso. Cuatro meses que se sienten como un suspiro y a la vez como si te hubiera amado en vidas pasadas. Hoy quiero mirarte a los ojos, derribar cualquier duda que quede en tu mente y prometértelo con toda mi alma: eres más que suficiente, eres mi única elección, eres la mujer con la que quiero compartir cada amanecer, cada logro, cada lágrima y cada sueño. El Salvador y Perú pronto se encontrarán en un solo abrazo, y esta distancia será solo el prólogo de la historia más hermosa que jamás se haya escrito.',
    quote: '"Te amo hoy en nuestro cuarto mes, te amaré cuando por fin te abrace, y te amaré por todos los días que me queden en esta tierra."',
  },
];

export const CERTAINTY_CARDS: CertaintyCard[] = [
  {
    id: 'suficiente-1',
    category: 'insecurity',
    prompt: 'Cuando sientas miedo de no ser suficiente para mí...',
    title: 'Tú eres mi sueño hecho realidad',
    message: 'Amor mío, cada vez que esa voz en tu cabeza te diga que no eres suficiente, recuérdame a mí mirándote a los ojos y diciéndote la verdad. No busco a nadie más en este planeta. No hay otra sonrisa, otra mirada ni otro corazón que yo quiera. Tu sola existencia, con tus virtudes, tus días difíciles y tu sensibilidad, es todo lo que necesito para ser el hombre más feliz.',
    promise: 'Promesa: Jamás tendrás que competir por mi amor; te pertenece por completo.',
  },
  {
    id: 'suficiente-2',
    category: 'insecurity',
    prompt: 'Cuando yo tengo miedo de no ser suficiente para ti...',
    title: 'Caminamos juntos, vulnerables pero invencibles',
    message: '¿Sabías que yo también tiemblo pensando si estaré a la altura de tu amor? Me pregunto si sabré cuidarte como mereces, si podré darte la vida hermosa que sueñas. Pero luego recuerdo cómo me miras y cómo me hablas, y entiendo que nuestro amor no es una prueba que debamos aprobar solos: es un equipo de dos que se eligen con el alma.',
    promise: 'Promesa: Seré tu refugio cuando dudes, y tú serás mi calma cuando yo dude.',
  },
  {
    id: 'distancia-1',
    category: 'distance',
    prompt: 'Cuando la distancia entre El Salvador y Perú duela...',
    title: 'El mapa miente; nuestros corazones laten juntos',
    message: 'Son 3,150 kilómetros y un océano Pacífico de por medio, pero cada noche miramos la misma luna. San Salvador y Lima están separados por tierra, pero unidos por una promesa indestructible. La distancia no debilita lo que sentimos; nos está forjando para que el día que nos abracemos, no nos soltemos jamás.',
    promise: 'Promesa: Ningún kilómetro tiene más poder que mi decisión de llegar a tus brazos.',
  },
  {
    id: 'amor-1',
    category: 'love',
    prompt: 'Dime por qué te enamoraste de mí...',
    title: 'Las mil razones de tu magia',
    message: 'Me enamoré de tu ternura, de tu forma de preocuparte por mí cuando he tenido un día pesado, de cómo te ríes cuando bromeamos, de tu acento limeño tan dulce, de tu inteligencia y de tu valentía. Pero sobre todo, me enamoré de la paz que siente mi corazón cuando estoy contigo. Me haces querer ser la mejor versión de mí mismo.',
    promise: 'Promesa: Te recordaré todos los días por qué eres la mujer más especial de mi universo.',
  },
  {
    id: 'futuro-1',
    category: 'future',
    prompt: '¿De verdad quieres pasar el resto de tus días conmigo?',
    title: 'Para siempre, sin dudar un solo segundo',
    message: 'Sí. Con toda la fuerza de mi sangre y la verdad de mi alma: quiero pasar el resto de mis días contigo. Quiero despertar y prepararte un desayuno con café salvadoreño, aprender a cocinar tus platos peruanos favoritos, viajar juntos, comprar nuestra casa, superar cualquier obstáculo tomados de la mano y llegar a viejitos recordando que todo empezó con 4 meses a distancia.',
    promise: 'Promesa: Mi futuro lleva tu nombre grabado con tinta indeleble.',
  },
  {
    id: 'diario-1',
    category: 'love',
    prompt: 'Cuando sientas que tienes un mal día...',
    title: 'Aquí estoy para sostenerte',
    message: 'No tienes que ser fuerte todo el tiempo. Puedes estar cansada, puedes llorar, puedes sentirte abrumada. No tienes que fingir estar bien conmigo. Te amo en tus días brillantes y te amo todavía más en tus días grises. Estoy aquí para escucharte, para abrazarte con mis palabras y para recordarte lo valiosa y amada que eres.',
    promise: 'Promesa: Tu vulnerabilidad siempre estará a salvo en mis manos.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'En El Salvador, cuando tu novio te dice que estás "bien chiva", ¿qué significa en realidad?',
    options: [
      { text: 'Que estás enojada o distante', isCorrect: false, reaction: '¡Nooo! En El Salvador chivo no es enojo 😂' },
      { text: 'Que eres lo más hermoso, increíble y genial del universo', isCorrect: true, reaction: '¡Exacto! ¡Significa que eres perfecta y espectacular! 🇸🇻❤️' },
      { text: 'Que tienes que comer más rápido', isCorrect: false, reaction: '¡Nada de eso! ¡Es puro halago!' },
    ],
    explanation: 'En el hablar salvadoreño, "chivo" significa genial, bonito o perfecto. ¡Y para él, tú eres lo más chivo de este mundo!',
    countryNote: '🇸🇻 Modismo Salvadoreño',
  },
  {
    id: 2,
    question: 'Si tuviéramos una merienda de amor combinando Perú y El Salvador en nuestra futura casa, ¿qué comeríamos?',
    options: [
      { text: 'Pupusas salvadoreñas recién hechas acompañadas de un dulce alfajor limeño', isCorrect: true, reaction: '¡El banquete perfecto de nuestras dos patrias! 🇸🇻🥟 🇵🇪🍪' },
      { text: 'Solo lechuga y agua tibia', isCorrect: false, reaction: '¡Jamás! Nosotros amamos la buena comida.' },
      { text: 'Comida rápida aburrida sin amor', isCorrect: false, reaction: '¡No! Nosotros cocinaremos con todo el cariño juntos.' },
    ],
    explanation: 'La fusión más deliciosa: la sazón guanaca de las pupusas y el toque dulce y delicado de los postres peruanos.',
    countryNote: '🇸🇻 & 🇵🇪 Fusión Gastronómica',
  },
  {
    id: 3,
    question: 'Cuando a ella le entra el miedo de "¿Seré suficiente para él?", ¿cuál es la única respuesta verdadera de su novio?',
    options: [
      { text: 'Que tiene que cambiar mil cosas para agradarle', isCorrect: false, reaction: '¡Completamente falso! No tienes que cambiar nada de tu esencia.' },
      { text: '"Eres más que suficiente, eres mi bendición más grande y no cambiaría ni un milímetro de ti"', isCorrect: true, reaction: '¡SÍ! Grábatelo en el corazón para siempre: Eres más que suficiente. ❤️💍' },
      { text: 'Que lo va a pensar la próxima semana', isCorrect: false, reaction: '¡Ni un segundo lo duda! Eres su certeza absoluta.' },
    ],
    explanation: 'Él no busca perfección; busca tu corazón. Y tu corazón es exactamente donde él encontró su hogar.',
    countryNote: 'Pacto del Alma',
  },
  {
    id: 4,
    question: '¿Qué distancia separa San Salvador de Lima, y cuánto tarda un "te amo" en cruzarla?',
    options: [
      { text: '3,150 kilómetros en el mapa, pero 0.0 segundos en el corazón', isCorrect: true, reaction: '¡Así es! Ni los miles de kilómetros pueden frenar este amor.' },
      { text: 'Diez años luz y mucha tristeza', isCorrect: false, reaction: '¡No! La distancia física no frena la cercanía del alma.' },
      { text: 'Solo 5 metros', isCorrect: false, reaction: 'Pronto serán 0 centímetros cuando se abracen.' },
    ],
    explanation: 'El Pacífico abraza las costas de El Salvador y las costas de Perú; el mismo mar que toca tus playas toca las mías.',
    countryNote: 'Geografía del Amor',
  },
  {
    id: 5,
    question: '¿Qué pasará el segundo exacto en que por fin nos veamos en el aeropuerto?',
    options: [
      { text: 'Nos daremos la mano como dos empresarios formales', isCorrect: false, reaction: '¡Para nada! ¡Eso sería un crimen!' },
      { text: 'Correr a tus brazos, darte el abrazo más largo de la historia y decirte al oído: "Por fin llegué a ti"', isCorrect: true, reaction: '¡Ese momento va a hacer que todo valga la pena! Se detendrá el tiempo. ✈️💖' },
      { text: 'Mirar el celular a ver si hay wifi', isCorrect: false, reaction: '¡El único wifi en ese momento será la conexión de nuestras miradas!' },
    ],
    explanation: 'Ese primer abrazo en persona está prometido, guardado en el destino y borrando cualquier kilómetro.',
    countryNote: 'El Gran Encuentro',
  },
  {
    id: 6,
    question: '¿Por cuánto tiempo quiere él estar a tu lado y amarte?',
    options: [
      { text: 'Solo hasta que acabe el año', isCorrect: false, reaction: '¡Muy poquito! Ni de chiste.' },
      { text: 'Por el resto de sus días, hoy, mañana y para toda la vida', isCorrect: true, reaction: '¡SÍ! ¡Por el resto de nuestros días juntos! 👰🤵💍' },
      { text: 'Hasta el próximo partido de fútbol', isCorrect: false, reaction: '¡Jamás! Su amor es eterno y para siempre.' },
    ],
    explanation: '4 meses han sido suficientes para tener la certeza más grande: tú eres su persona para siempre.',
    countryNote: 'Voto de Amor Eterno',
  },
];

export const INITIAL_WISHES: ReunionWish[] = [
  { id: 'w1', text: 'El primer abrazo en la puerta de llegadas sin importar cuánta gente nos mire', country: 'both', completed: false },
  { id: 'w2', text: 'Caminar juntos por el Malecón de Miraflores o Barranco viendo el atardecer limeño', country: 'pe', completed: false },
  { id: 'w3', text: 'Prepararte y servirte pupusas calientes hechas por mí con amor salvadoreño', country: 'sv', completed: false },
  { id: 'w4', text: 'Probar juntos un auténtico ceviche peruano y comer alfajores de maicena mirándote a los ojos', country: 'pe', completed: false },
  { id: 'w5', text: 'Subir a un mirador de volcanes en El Salvador y tomar café calientito bajo las estrellas', country: 'sv', completed: false },
  { id: 'w6', text: 'Dormirnos abrazados sin tener que apagar una videollamada al final de la noche', country: 'both', completed: false },
  { id: 'w7', text: 'Mirarte a centímetros de distancia y recordarte: "Te dije que eras más que suficiente"', country: 'both', completed: false },
];
