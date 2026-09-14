export const site = {
  name: 'Cabañas La Niña',
  shortName: 'La Niña',
  locale: 'es-AR',
  description: 'Seis cabañas entre dos hectáreas de parque en Mercedes, Buenos Aires.',
  contact: {
    phoneDisplay: '+54 2324 51-9213',
    phoneHref: 'tel:+542324519213',
    whatsappHref: 'https://wa.me/542324519213?text=Hola%2C%20quer%C3%ADa%20consultar%20disponibilidad%20en%20La%20Ni%C3%B1a.',
  },
  location: {
    label: 'Mercedes · Provincia de Buenos Aires',
    address: 'Calle 151 entre 28 Bis y 30 Bis, Mercedes, Buenos Aires',
    mapsHref: 'https://www.google.com/maps/place/Caba%C3%B1as+La+Ni%C3%B1a/@-34.6498786,-59.3895022,17z/data=!3m1!4b1!4m9!3m8!1s0x95bc73733aa84553:0xc60530ac4920e7d0!5m2!4m1!1i2!8m2!3d-34.649883!4d-59.3869273!16s%2Fg%2F1ptw7yz37?entry=ttu',
    latitude: -34.649883,
    longitude: -59.3869273,
  },  google: {
    rating: 4.5,
    reviewCount: 261,
    lastManualRefresh: '2026-09-14',
  },
  breakfast: {
    hours: '09:00—11:00',
    note: 'Horario aproximado',
    items: [
      'Medialunas · tortas · bizcochitos',
      'Tostadas · manteca · dulce de leche',
      'Café & té',
      'Frutas · frutos secos',
      'Yogur griego · algunos días',
    ],
  },
  reviews: [
    {
      source: 'Google',
      rating: 5,
      author: 'Patricia Frasch',
      quote: 'Excelente lugar rodeado de naturaleza, paz atendido por sus dueños muy cordiales.',
    },    {
      source: 'Tripadvisor',
      rating: 5,
      author: 'Carmen E',
      quote: 'Bellísimo lugar… la piscina es hermosa, el parque muy bien cuidado.',
    },
    {
      source: 'Tripadvisor',
      rating: 5,
      author: 'Laura Hebe C',
      quote: 'Un lugar bello para descansar… y por favor el desayuno.',
    },
  ],
} as const;

export type SiteContent = typeof site;
