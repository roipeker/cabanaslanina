export type GuideStory = {
  slug: string;
  eyebrow: string;
  title: string;
  dek: string;
  image: string;
  imageAlt: string;
  imageCredit?: string;
  imageCreditUrl?: string;
  published: string;
  updated: string;
  mapUrl?: string;
  body: string[];
  facts?: { label: string; value: string }[];
  sources: { label: string; url: string }[];
};

export const guideStories: GuideStory[] = [
  {
    slug: 'pulperia-cacho-di-catarina',
    eyebrow: 'Historia viva · Mercedes',
    title: 'Cacho Di Catarina, una puerta abierta a 1830',
    dek: 'Una de las pulperías históricas de la provincia sigue contando, detrás del mostrador, casi dos siglos de vida rural bonaerense.',
    image: 'https://www.lanacion.com.ar/resizer/v2/la-pulperia-de-cacho-di-catarina-en-U4LUR2TIKRAT7PDR47XB3UO2M4.jpg?auth=8862fa6e70263dda240449bc351e9cda9fec3f81fbcd0b53a8d683758bae841a&focal=876%2C887&height=1155&quality=70&smart=false&width=770',
    imageAlt: 'Fachada histórica de la Pulpería de Cacho Di Catarina en Mercedes',
    imageCredit: 'Imagen editorial · LA NACION / Revista Lugares',
    imageCreditUrl: 'https://www.lanacion.com.ar/revista-lugares/a-dos-horas-de-buenos-aires-la-historia-de-la-familia-detras-de-una-de-una-de-las-pulperias-mas-nid20042023/',
    published: '2026-08-29',
    updated: '2026-08-29',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pulper%C3%ADa+Cacho+Di+Catarina+Mercedes+Buenos+Aires',
    facts: [
      { label: 'Origen', value: '1830' },
      { label: 'Tradición familiar', value: 'Desde 1910' },
      { label: 'Clave', value: 'Pulpería histórica' },
    ],
    body: [
      'Hay lugares que explican una ciudad mejor que cualquier resumen. La Pulpería de Cacho Di Catarina es uno de ellos: un edificio levantado en 1830, a metros del río Luján, que conserva la escala y la memoria de la vida rural bonaerense.',
      'La familia vinculada a Cacho llegó al lugar en 1910. Con los años, el almacén se volvió parte del patrimonio cultural de Mercedes y una referencia para quienes buscan entender la tradición de las pulperías, los caminos rurales y los encuentros alrededor de un mostrador.',
      'También tiene una inesperada conexión con el cine argentino. La pulpería fue utilizada como locación de Don Segundo Sombra, la película de Manuel Antín estrenada en 1969. Esa superposición de historia, literatura, paisaje y cine hace que la visita sea mucho más que una parada gastronómica.',
      'Para una escapada a Mercedes, funciona especialmente bien como parte de un recorrido más amplio por el río, el Parque Independencia y el casco histórico. La gracia no es acumular puntos en un mapa: es dejar que cada lugar cuente una parte distinta de la misma ciudad.',
    ],
    sources: [
      { label: 'Provincia de Buenos Aires · Lugares históricos de Mercedes', url: 'https://www.buenosaires.tur.ar/secc/notes/lugares-historicos-de-mercedes/' },
      { label: 'LA NACION · La historia familiar de una de las pulperías más antiguas del país', url: 'https://www.lanacion.com.ar/revista-lugares/a-dos-horas-de-buenos-aires-la-historia-de-la-familia-detras-de-una-de-una-de-las-pulperias-mas-nid20042023/' },
    ],
  },
  {
    slug: 'la-trocha-historia-ferroviaria',
    eyebrow: 'Ferrocarril & cultura',
    title: 'La Trocha: del ferrocarril a un nuevo centro cultural',
    dek: 'Una vieja estación recuperada como punto de encuentro permite leer la historia ferroviaria de Mercedes y, al mismo tiempo, verla todavía en movimiento.',
    image: 'https://nw.mercedes.gob.ar/fotos/noticias/img-1818.jpg',
    imageAlt: 'Edificio histórico del Complejo Cultural La Trocha en Mercedes',
    imageCredit: 'Municipalidad de Mercedes',
    imageCreditUrl: 'https://nw.mercedes.gob.ar/1818/llega-el-cine-movil-del-programa-recreo-a-la-trocha',
    published: '2026-08-29',
    updated: '2026-08-29',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Complejo+Cultural+La+Trocha+Mercedes+Buenos+Aires',
    facts: [
      { label: 'Memoria', value: 'Historia ferroviaria' },
      { label: 'Hoy', value: 'Cultura y encuentros' },
      { label: 'Zona', value: 'Mercedes' },
    ],
    body: [
      'El tren forma parte de la identidad de Mercedes desde el siglo XIX. La llegada del Ferrocarril del Oeste en 1865 coincidió con una etapa decisiva para la consolidación de la ciudad y dejó una infraestructura que todavía organiza parte de su memoria urbana.',
      'La Trocha es uno de los casos más interesantes de esa herencia. El antiguo predio ferroviario fue recuperado y hoy funciona como complejo cultural, educativo, artístico y comunitario. Galpones, estación, ferias, espectáculos y actividades conviven con las huellas de su uso original.',
      'En 2023 el regreso de una formación entre Mercedes y Tomás Jofré volvió a unir, aunque fuera de otro modo, el presente turístico con la historia ferroviaria. La escena resumió bien algo particular de La Trocha: no funciona como una pieza congelada de museo, sino como un lugar que Mercedes sigue usando.',
      'Para quien visita la ciudad, vale mirar la agenda antes de ir. El predio suele ser escenario de ferias, encuentros culturales y fiestas populares, y en 2025 sumó además un anfiteatro municipal.',
    ],
    sources: [
      { label: 'Municipalidad de Mercedes · 10 años de recuperación de La Trocha', url: 'https://nw.mercedes.gob.ar/4134/el-complejo-cultural-la-trocha-cumplio-10-anos-de-su-recuperacion' },
      { label: 'Municipalidad de Mercedes · Regreso del tren Mercedes–Jofré', url: 'https://nw.mercedes.gob.ar/3947/emocion-en-la-trocha-comenzo-a-funcionar-el-tren-mercedes-jofre' },
      { label: 'Municipalidad de Mercedes · Anfiteatro Municipal', url: 'https://nw.mercedes.gob.ar/4663/con-una-multitud-y-referentes-de-la-cultura-se-inauguro-el-anfiteatro-municipal' },
    ],
  },
  {
    slug: 'parque-independencia-rio-lujan',
    eyebrow: 'Naturaleza · Río Luján',
    title: 'Parque Independencia: una tarde junto al río',
    dek: 'Árboles, senderos y el río Luján atraviesan uno de los grandes espacios verdes de Mercedes, creado hace más de un siglo.',
    image: 'https://nw.mercedes.gob.ar/fotos/noticias/img-2378.jpg',
    imageAlt: 'Río Luján en el Parque Municipal Independencia de Mercedes',
    imageCredit: 'Municipalidad de Mercedes',
    imageCreditUrl: 'https://nw.mercedes.gob.ar/2378/instalan-nuevo-muelle-en-el-parque-municipal-para-actividades-deportivas',
    published: '2026-08-29',
    updated: '2026-08-29',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parque+Municipal+Independencia+Mercedes+Buenos+Aires',
    facts: [
      { label: 'Creado', value: '1914' },
      { label: 'Superficie', value: '≈54–55 ha' },
      { label: 'Paisaje', value: 'Río Luján' },
    ],
    body: [
      'El Parque Municipal Independencia nació en 1914 sobre una primera franja verde junto al río Luján. Con ampliaciones posteriores llegó a ocupar alrededor de 54 hectáreas, divididas por el propio río y conectadas como un gran pulmón recreativo de Mercedes.',
      'No es un parque ornamental para mirar de lejos. Hay caminos, espacios deportivos, sectores de descanso y una relación directa con el agua y la arboleda. La escala permite caminar sin demasiado plan y encontrar rincones más tranquilos incluso cuando hay actividad en otros sectores.',
      'El parque también concentra buena parte de las celebraciones de la ciudad. La Fiesta Nacional del Salame Quintero utiliza su sector ferial, de modo que un espacio cotidiano para los mercedinos cambia de carácter durante algunos fines de semana del año.',
      'Si la idea del viaje es bajar el ritmo, es uno de los lugares más fáciles de sumar a una tarde: mate, una caminata y tiempo sin demasiada agenda. Encaja naturalmente con una estadía de campo porque prolonga esa misma relación con el verde dentro de la ciudad.',
    ],
    sources: [
      { label: 'Provincia de Buenos Aires · Lugares históricos de Mercedes', url: 'https://www.buenosaires.tur.ar/secc/notes/lugares-historicos-de-mercedes/' },
      { label: 'Municipalidad de Mercedes · Historia y mejoras del Parque', url: 'https://nw.mercedes.gob.ar/1397/avanzan-las-mejoras-e-inversion-en-el-parque-municipal' },
      { label: 'Turismo Mercedes · Naturaleza', url: 'https://turismo.mercedes.gob.ar/' },
    ],
  },
  {
    slug: 'fiesta-salame-quintero-2026',
    eyebrow: 'Agenda · 11–13 septiembre 2026',
    title: 'Fiesta Nacional del Salame Quintero: tres días para saborear Mercedes',
    dek: 'La 51ª edición vuelve al Parque Municipal Independencia con productores, gastronomía y música en vivo. Una buena excusa para convertir la visita en fin de semana.',
    image: 'https://nw.mercedes.gob.ar/fotos/noticias/img-244.jpg',
    imageAlt: 'Fiesta Nacional del Salame Quintero en Mercedes',
    imageCredit: 'Municipalidad de Mercedes · imagen de archivo',
    imageCreditUrl: 'https://nw.mercedes.gob.ar/244/todo-listo-para-una-nueva-gran-fiesta-del-salame-quintero',
    published: '2026-08-29',
    updated: '2026-08-29',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parque+Municipal+Independencia+Mercedes+Buenos+Aires',
    facts: [
      { label: 'Cuándo', value: '11–13 Sep 2026' },
      { label: 'Edición', value: '51ª' },
      { label: 'Dónde', value: 'Parque Independencia' },
    ],
    body: [
      'Mercedes celebra en septiembre uno de sus productos más reconocibles: el salame quintero. La tradición nació de las familias inmigrantes que trabajaban en las quintas de la zona y transmitieron recetas de chacinados que terminaron convirtiéndose en parte de la identidad gastronómica local.',
      'En 2026 la Fiesta Nacional del Salame Quintero llega a su 51ª edición y se realizará del viernes 11 al domingo 13 de septiembre en el Parque Municipal Independencia. La programación oficial combina productores, patio gastronómico, artesanos, actividades familiares y música en vivo.',
      'El viernes tiene entrada libre y el sábado está anunciada la presentación de Los Palmeras en el escenario principal. Como toda agenda, horarios y entradas pueden cambiar: conviene revisar siempre el sitio oficial de la fiesta antes de viajar.',
      'Para quienes llegan desde Buenos Aires, la fiesta funciona mejor como escapada que como viaje relámpago. Quedarse permite combinar el evento con el casco histórico, alguna pulpería o bodegón y una mañana tranquila antes de volver.',
    ],
    sources: [
      { label: 'Sitio oficial · Fiesta Nacional del Salame Quintero 2026', url: 'https://fiestadelsalame.mercedes.gob.ar/' },
      { label: 'Municipalidad de Mercedes · Los Palmeras en la edición 2026', url: 'https://nw.mercedes.gob.ar/4836/los-palmeras-pondran-ritmo-a-la-fiesta-nacional-del-salame-quintero' },
      { label: 'Municipalidad de Mercedes · Historia del Salame Quintero', url: 'https://nw.mercedes.gob.ar/ciudad/turismo/fiesta-salame' },
    ],
  },
];

export const featuredStories = guideStories.slice(0, 4);
