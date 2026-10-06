import { Milestone, CertaintyCard, QuizQuestion, ReunionWish } from '../types';
import heroImage from '../assets/images/hero_distance_love_1791253583558.jpg';
import countriesImage from '../assets/images/el_salvador_peru_connection_1791253593263.jpg';
import keepsakeImage from '../assets/images/love_keepsake_envelope_1791253602933.jpg';

export const SENDER_NAME = 'Jorge';
export const PARTNER_NAME = 'Naomy';

export const APP_IMAGES = {
  hero: heroImage,
  countries: countriesImage,
  keepsake: keepsakeImage,
};

export const DISTANCE_STATS = {
  senderName: 'Jorge',
  partnerName: 'Naomy',
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
    subtitle: 'Cuando el mapa dejó de ser geografía y se volvió tu nombre: Naomy',
    date: 'Primer mes',
    theme: 'El Descubrimiento',
    symbol: '✨',
    summary: 'A miles de kilómetros, dos extraños comenzaron a hablar y, sin buscarlo, Jorge encontró en Naomy su refugio más puro.',
    letter: 'Recuerdo con cuánta timidez y emoción empezamos a hablar. Yo, Jorge, desde El Salvador, y tú, mi Naomy, allá en Perú, separados por un continente entero pero inexplicablemente conectados en cada palabra. En ese primer mes me di cuenta de algo que nunca antes me había pasado: esperar un mensaje de mi Naomy era el momento favorito de mi día. Empezaba a nacer la magia que hoy sostiene mi vida entera.',
    quote: '"No importó cuánta tierra y mar nos separara; desde el día uno con Naomy, supe que mi corazón ya no pertenecía a ningún otro lugar. — Jorge"',
  },
  {
    month: 2,
    title: 'Mes 2: Las Madrugadas y la Intimidad del Alma',
    subtitle: 'Videollamadas que hacían que la pantalla desapareciera entre nosotros',
    date: 'Segundo mes',
    theme: 'La Conexión',
    symbol: '🌙',
    summary: 'Las horas se volvían minutos. Conocí tus risas, tus silencios, tus manías y me enamoré de cada pequeño detalle de mi Naomy.',
    letter: 'Para el segundo mes ya éramos cómplices de madrugadas. La diferencia de una hora entre nuestros países no importaba: yo, Jorge, me quedaba despierto con tal de escuchar la dulce voz de Naomy antes de dormir. Empezamos a compartir no solo las sonrisas, sino también nuestras heridas, nuestros miedos y lo que somos sin filtros. Verte sonreír a través de la cámara me enseñó que la distancia física es insignificante frente a la cercanía de dos almas.',
    quote: '"Aprendí que el hogar no son cuatro paredes: mi hogar es el sonido de la respiración de Naomy cuando se queda dormida en llamada conmigo. — Jorge"',
  },
  {
    month: 3,
    title: 'Mes 3: Atravesando los Miedos Juntos',
    subtitle: 'El día en que decidimos que nuestro amor es más valiente que la duda',
    date: 'Tercer mes',
    theme: 'La Vulnerabilidad',
    symbol: '🛡️',
    summary: 'Apareció ese susurro: "¿Será Naomy suficiente para Jorge? ¿Será Jorge suficiente para Naomy?". Y entendimos que estamos hechos el uno para el otro.',
    letter: 'En este mes tuvimos momentos donde las inseguridades quisieron hablar. Sé que a veces te da miedo pensar que no eres suficiente para mí, que tal vez yo merezca más o que puedas fallar... Naomy, quiero que sepas algo desde lo más profundo del corazón de tu novio Jorge: yo también he sentido el miedo de no ser suficiente para ti, de querer darte el mundo entero y temer quedarme corto. Pero ese miedo no nos separa; nos une. Porque nos demuestra cuánto nos importamos. Jorge no quiere a nadie más. Naomy, eres todo lo que siempre le pedí a la vida, con tu luz, tus miedos y tu inmensa ternura.',
    quote: '"Naomy: No necesitas ser perfecta para ser perfecta para Jorge. Ya eres mi mayor bendición."',
  },
  {
    month: 4,
    title: 'Mes 4: Nuestra Certeza Eterna & El Porvenir',
    subtitle: 'Hoy cumplo 4 meses eligiéndote, Naomy, y Jorge quiere hacerlo por el resto de sus días',
    date: 'Hoy, 4 meses',
    theme: 'El Compromiso Eterno',
    symbol: '💍',
    summary: 'Hoy no celebramos solo el tiempo pasado, sino la convicción de que Jorge y Naomy estamos construyendo una vida juntos.',
    letter: 'Llegamos a 4 meses, Naomy, mi amor hermoso. Cuatro meses que se sienten como un suspiro y a la vez como si te hubiera amado en vidas pasadas. Hoy tu novio salvadoreño quiere mirarte a los ojos, derribar cualquier duda que quede en tu mente y prometértelo con toda su alma: Naomy, eres más que suficiente, eres la única elección de Jorge, eres la mujer con la que quiero compartir cada amanecer, cada logro, cada lágrima y cada sueño. El Salvador y Perú pronto se encontrarán en un solo abrazo, y esta distancia será solo el prólogo de la historia más hermosa que jamás se haya escrito.',
    quote: '"Te amo hoy en nuestro cuarto mes, Naomy; te amaré cuando por fin te abrace, y te amaré por todos los días que me queden en esta tierra. — Con amor eterno, Jorge"',
  },
];

export const CERTAINTY_CARDS: CertaintyCard[] = [
  {
    id: 'suficiente-1',
    category: 'insecurity',
    prompt: 'Cuando Naomy sienta miedo de no ser suficiente para Jorge...',
    title: 'Naomy, tú eres el sueño hecho realidad de Jorge',
    message: 'Naomy mía, cada vez que esa voz en tu cabeza te diga que no eres suficiente, recuérdame a mí, Jorge, mirándote a los ojos y diciéndote la verdad. No busco a nadie más en este planeta. No hay otra sonrisa, otra mirada ni otro corazón que yo quiera más que el de mi Naomy. Tu sola existencia, con tus virtudes, tus días difíciles y tu sensibilidad, es todo lo que Jorge necesita para ser el hombre más feliz.',
    promise: 'Promesa de Jorge: Naomy jamás tendrá que competir por mi amor; te pertenece por completo para siempre.',
  },
  {
    id: 'suficiente-2',
    category: 'insecurity',
    prompt: 'Cuando Jorge tenga miedo de no ser suficiente para Naomy...',
    title: 'Caminamos juntos, vulnerables pero invencibles',
    message: 'Naomy, ¿sabías que Jorge también tiembla pensando si estará a la altura de tu amor? Me pregunto si sabré cuidarte como mereces, si podré darte la vida hermosa que sueñas. Pero luego recuerdo cómo me miras y cómo me hablas, y entiendo que nuestro amor no es una prueba que debamos aprobar solos: somos Naomy y Jorge, un equipo indestructible que se elige con el alma.',
    promise: 'Promesa de Jorge: Seré el refugio de Naomy cuando dudes, y tú serás mi calma cuando yo dude.',
  },
  {
    id: 'distancia-1',
    category: 'distance',
    prompt: 'Cuando la distancia entre El Salvador y Perú duela...',
    title: 'El mapa miente; mi corazón late en el pecho de Naomy',
    message: 'Son 3,150 kilómetros y un océano Pacífico de por medio, pero cada noche miramos la misma luna. San Salvador y Lima están separados por tierra, pero unidos por una promesa indestructible de Jorge hacia ti, Naomy. La distancia no debilita lo que sentimos; nos está forjando para que el día que nos abracemos, no nos soltemos jamás.',
    promise: 'Promesa de Jorge: Ningún kilómetro tiene más poder que mi decisión inquebrantable de llegar a los brazos de Naomy.',
  },
  {
    id: 'amor-1',
    category: 'love',
    prompt: 'Dime por qué te enamoraste de mí, Naomy...',
    title: 'Las mil razones de la magia de Naomy',
    message: 'Me enamoré de la ternura de Naomy, de tu forma de preocuparte por mí cuando he tenido un día pesado, de cómo te ríes cuando bromeamos, de tu acento limeño tan dulce, de tu inteligencia y de tu valentía. Pero sobre todo, me enamoré de la paz que siente el corazón de Jorge cuando está contigo. Naomy, me haces querer ser el mejor hombre del mundo.',
    promise: 'Promesa de Jorge: Le recordaré a Naomy todos los días por qué es la mujer más especial de mi universo.',
  },
  {
    id: 'futuro-1',
    category: 'future',
    prompt: '¿De verdad quieres pasar el resto de tus días con Naomy?',
    title: 'Con Naomy para siempre, sin dudar un solo segundo',
    message: 'Sí, Naomy. Con toda la fuerza de mi sangre y la verdad de mi alma: Jorge quiere pasar el resto de sus días contigo. Quiero despertar y prepararte un desayuno con café salvadoreño, aprender a cocinar tus platos peruanos favoritos, viajar juntos, comprar nuestra casa, superar cualquier obstáculo tomados de la mano y llegar a viejitos recordando que todo empezó con 4 meses a distancia.',
    promise: 'Promesa de Jorge: El futuro de Jorge lleva el nombre de Naomy grabado con tinta indeleble.',
  },
  {
    id: 'diario-1',
    category: 'love',
    prompt: 'Cuando Naomy sienta que tiene un mal día...',
    title: 'Aquí está Jorge siempre para sostenerte',
    message: 'Naomy, no tienes que ser fuerte todo el tiempo. Puedes estar cansada, puedes llorar, puedes sentirte abrumada. No tienes que fingir estar bien conmigo. Te amo en tus días brillantes y te amo todavía más en tus días grises. Jorge está aquí para escucharte, para abrazarte con sus palabras y para recordarte lo valiosa, maravillosa y amada que eres.',
    promise: 'Promesa de Jorge: La vulnerabilidad de Naomy siempre estará completamente segura y protegida con Jorge.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'En El Salvador, cuando tu novio le dice a Naomy que está "bien chiva", ¿qué significa en realidad?',
    options: [
      { text: 'Que Naomy está enojada o distante', isCorrect: false, reaction: '¡Nooo! En El Salvador chivo no es enojo 😂' },
      { text: 'Que Naomy es lo más hermoso, increíble y genial del universo', isCorrect: true, reaction: '¡Exacto! ¡Significa que Naomy es perfecta y espectacular! 🇸🇻❤️' },
      { text: 'Que Naomy tiene que comer más rápido', isCorrect: false, reaction: '¡Nada de eso! ¡Es puro halago para Naomy!' },
    ],
    explanation: 'En el hablar salvadoreño, "chivo" significa genial, bonito o perfecto. ¡Y para él, Naomy es lo más chivo y precioso de este mundo!',
    countryNote: '🇸🇻 Modismo Salvadoreño',
  },
  {
    id: 2,
    question: 'Si tuviéramos una merienda de amor para consentir a Naomy en nuestra futura casa, ¿qué comeríamos?',
    options: [
      { text: 'Pupusas salvadoreñas recién hechas acompañadas de un dulce alfajor limeño para Naomy', isCorrect: true, reaction: '¡El banquete perfecto de nuestras dos patrias para consentir a Naomy! 🇸🇻🥟 🇵🇪🍪' },
      { text: 'Solo lechuga y agua tibia', isCorrect: false, reaction: '¡Jamás! Nosotros consentiremos a Naomy como se merece.' },
      { text: 'Comida rápida fría y sin amor', isCorrect: false, reaction: '¡No! Nosotros cocinaremos con todo el cariño juntos.' },
    ],
    explanation: 'La fusión más deliciosa: la sazón guanaca de las pupusas y el toque dulce y delicado de los postres peruanos para Naomy.',
    countryNote: '🇸🇻 & 🇵🇪 Fusión Gastronómica',
  },
  {
    id: 3,
    question: 'Cuando a Naomy le entra el miedo de "¿Seré suficiente para él?", ¿cuál es la única respuesta verdadera de su novio?',
    options: [
      { text: 'Que Naomy tiene que cambiar mil cosas para agradarle', isCorrect: false, reaction: '¡Completamente falso! Naomy no tiene que cambiar nada de su esencia.' },
      { text: '"Naomy, eres más que suficiente, eres mi bendición más grande y no cambiaría ni un milímetro de ti"', isCorrect: true, reaction: '¡SÍ! Grábatelo en el corazón, Naomy: Eres más que suficiente. ❤️💍' },
      { text: 'Que lo va a pensar la próxima semana', isCorrect: false, reaction: '¡Ni un segundo lo duda! Naomy es su certeza absoluta.' },
    ],
    explanation: 'Él no busca perfección; busca el corazón de Naomy. Y en ese corazón encontró su hogar.',
    countryNote: 'Pacto del Alma',
  },
  {
    id: 4,
    question: '¿Qué distancia separa San Salvador de Lima, y cuánto tarda un "te amo, Naomy" en cruzarla?',
    options: [
      { text: '3,150 kilómetros en el mapa, pero 0.0 segundos en el corazón', isCorrect: true, reaction: '¡Así es! Ni los miles de kilómetros pueden frenar este amor por Naomy.' },
      { text: 'Diez años luz y mucha tristeza', isCorrect: false, reaction: '¡No! La distancia física no frena la cercanía del alma.' },
      { text: 'Solo 5 metros', isCorrect: false, reaction: 'Pronto serán 0 centímetros cuando se abracen.' },
    ],
    explanation: 'El Pacífico abraza las costas de El Salvador y las costas de Perú; el mismo mar que toca las playas de Naomy toca las mías.',
    countryNote: 'Geografía del Amor',
  },
  {
    id: 5,
    question: '¿Qué pasará el segundo exacto en que por fin vea a Naomy en el aeropuerto?',
    options: [
      { text: 'Darse la mano como dos desconocidos formales', isCorrect: false, reaction: '¡Para nada! ¡Eso sería imposible!' },
      { text: 'Correr a los brazos de Naomy, darle el abrazo más largo de la historia y decirle al oído: "Por fin llegué a ti, mi amor"', isCorrect: true, reaction: '¡Ese momento con Naomy va a hacer que todo valga la pena! Se detendrá el tiempo. ✈️💖' },
      { text: 'Mirar el celular a ver si hay wifi', isCorrect: false, reaction: '¡El único wifi en ese momento será la conexión de mirarse con Naomy!' },
    ],
    explanation: 'Ese primer abrazo con Naomy en persona está prometido, guardado en el destino y borrando cualquier kilómetro.',
    countryNote: 'El Gran Encuentro',
  },
  {
    id: 6,
    question: '¿Por cuánto tiempo quiere él estar al lado de Naomy y amarla?',
    options: [
      { text: 'Solo hasta que acabe el año', isCorrect: false, reaction: '¡Muy poquito! Ni de chiste.' },
      { text: 'Por el resto de sus días, hoy, mañana y para toda la vida junto a Naomy', isCorrect: true, reaction: '¡SÍ! ¡Por el resto de nuestros días juntos, mi Naomy! 👰🤵💍' },
      { text: 'Hasta el próximo partido de fútbol', isCorrect: false, reaction: '¡Jamás! Su amor por Naomy es eterno y para siempre.' },
    ],
    explanation: '4 meses han sido suficientes para tener la certeza más grande: Naomy es su persona para siempre.',
    countryNote: 'Voto de Amor Eterno',
  },
];

export const INITIAL_WISHES: ReunionWish[] = [
  { id: 'w1', text: 'El primer abrazo con Naomy en la puerta de llegadas sin importar cuánta gente nos mire', country: 'both', completed: false },
  { id: 'w2', text: 'Caminar de la mano con Naomy por el Malecón de Miraflores o Barranco viendo el atardecer limeño', country: 'pe', completed: false },
  { id: 'w3', text: 'Prepararle a Naomy pupusas calientes hechas con amor salvadoreño', country: 'sv', completed: false },
  { id: 'w4', text: 'Probar juntos un auténtico ceviche peruano y comer alfajores de maicena mirándote a los ojos, Naomy', country: 'pe', completed: false },
  { id: 'w5', text: 'Subir con Naomy a un mirador de volcanes en El Salvador y tomar café calientito bajo las estrellas', country: 'sv', completed: false },
  { id: 'w6', text: 'Dormirnos abrazados sin tener que apagar una videollamada al final de la noche', country: 'both', completed: false },
  { id: 'w7', text: 'Mirar a Naomy a centímetros de distancia y recordarle: "Te dije que eres más que suficiente"', country: 'both', completed: false },
];
