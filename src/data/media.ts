export type MediaKind = 'owned' | 'legacy' | 'guest' | 'stock';

export type MediaAsset = {
  id: string;
  path: string;
  alt: string;
  kind: MediaKind;
  sourceUrl?: string;
  credit?: string;
  replacePriority?: 'high' | 'medium' | 'low';
};

export const media = {
  hero: {
    id: 'google-guest-01',
    path: 'media/guest/google-01.jpg',
    alt: 'La Niña en una foto reciente compartida por un huésped',
    kind: 'guest',
    sourceUrl: 'https://maps.app.goo.gl/arKA1wqSkSEfw9d57?g_st=ac',
    replacePriority: 'medium',
  } satisfies MediaAsset,
  property: [
    {
      id: 'property-park',
      path: 'media/legacy/property-05.jpg',
      alt: 'El parque de Cabañas La Niña',
      kind: 'legacy',
      replacePriority: 'high',
    },    {
      id: 'property-cabins',
      path: 'media/legacy/property-25.jpg',
      alt: 'Interior de una cabaña de La Niña',
      kind: 'legacy',
      replacePriority: 'high',
    },
    {
      id: 'property-outdoors',
      path: 'media/legacy/property-12.jpg',
      alt: 'Espacios exteriores de La Niña',
      kind: 'legacy',
      replacePriority: 'medium',
    },
    {
      id: 'property-inside',
      path: 'media/legacy/property-18.jpg',
      alt: 'Interior y equipamiento de una cabaña',
      kind: 'legacy',
      replacePriority: 'medium',
    },
  ] satisfies MediaAsset[],  breakfast: [
    {
      id: 'breakfast-table',
      path: 'media/stock/pexels-25781659.jpg',
      alt: 'Mesa de desayuno con café, medialunas y flores',
      kind: 'stock',
      credit: 'Jakub Zerdzicki · Pexels',
      sourceUrl: 'https://www.pexels.com/photo/morning-breakfast-table-25781659/',
      replacePriority: 'high',
    },
    {
      id: 'breakfast-detail',
      path: 'media/stock/pexels-30359471.jpg',
      alt: 'Café y medialuna sobre una mesa de madera',
      kind: 'stock',
      credit: 'James Collington · Pexels',
      sourceUrl: 'https://www.pexels.com/photo/croissant-and-coffee-on-a-rustic-wooden-table-30359471/',
      replacePriority: 'high',
    },
  ] satisfies MediaAsset[],
  atmosphere: [    {
      id: 'buenos-aires-field',
      path: 'media/stock/pexels-13143653.jpg',
      alt: 'Paisaje rural de Buenos Aires al atardecer',
      kind: 'stock',
      credit: 'Clip It Comunicación · Pexels',
      sourceUrl: 'https://www.pexels.com/photo/view-of-an-agricultural-field-13143653/',
      replacePriority: 'medium',
    },
    {
      id: 'pool-light',
      path: 'media/stock/pexels-16708212.jpg',
      alt: 'Reflejos de luz sobre agua de pileta',
      kind: 'stock',
      credit: 'Masi · Pexels',
      sourceUrl: 'https://www.pexels.com/photo/rippling-blue-water-surface-in-swimming-pool-16708212/',
      replacePriority: 'medium',
    },
    {
      id: 'wall-shadow',
      path: 'media/stock/pexels-5312927.jpg',
      alt: 'Sombras de ramas sobre una pared cálida',
      kind: 'stock',
      credit: 'Magda Ehlers · Pexels',
      sourceUrl: 'https://www.pexels.com/photo/shadow-on-wall-5312927/',
      replacePriority: 'low',
    },    {
      id: 'weather-field',
      path: 'media/stock/pexels-13897463.jpg',
      alt: 'Nubes y luz sobre un paisaje rural',
      kind: 'stock',
      credit: 'Ludvig Hedenborg · Pexels',
      sourceUrl: 'https://www.pexels.com/photo/cloud-over-rural-field-13897463/',
      replacePriority: 'low',
    },
    {
      id: 'pampas-detail',
      path: 'media/stock/pexels-36143567.jpg',
      alt: 'Pasto de pampa iluminado por el sol',
      kind: 'stock',
      credit: 'Alexa Heinrich · Pexels',
      sourceUrl: 'https://www.pexels.com/photo/ethereal-pampas-grass-at-golden-hour-36143567/',
      replacePriority: 'low',
    },
  ] satisfies MediaAsset[],
  community: [
    {
      id: 'google-guest-01',
      path: 'media/guest/google-01.jpg',
      alt: 'Foto reciente compartida por un huésped de La Niña',
      kind: 'guest',
      sourceUrl: 'https://maps.app.goo.gl/arKA1wqSkSEfw9d57?g_st=ac',
      replacePriority: 'medium',
    },    {
      id: 'google-guest-02',
      path: 'media/guest/google-02.jpg',
      alt: 'La Niña vista por una persona que se hospedó',
      kind: 'guest',
      sourceUrl: 'https://maps.app.goo.gl/vAJo7rFezbFTBcqo7?g_st=ac',
      replacePriority: 'medium',
    },
  ] satisfies MediaAsset[],
} as const;
