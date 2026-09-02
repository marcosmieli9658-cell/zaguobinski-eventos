export const BASE = '/zaguobinski-eventos';
export const PHONE = '5541996292306';
export const accompaniments = [
  'Arroz branco',
  'Feijão tropeiro',
  'Maionese de batata',
  'Vinagrete',
  'Salada colorida',
  'Mix de folhas verdes',
];
export const starters = [
  'Pão de alho',
  'Choripán',
  'Queijo coalho com mel',
  'Coração de frango',
];
export const pastas = ['Lasanha', 'Rondelli', 'Nhoque'];
export const menus = [
  {
    slug: 'tradicional',
    name: 'Tradicional',
    tag: 'O SABOR DE REUNIR',
    description:
      'O encontro dos clássicos que todo mundo gosta. Carnes na brasa e acompanhamentos para uma mesa farta, do primeiro ao último prato.',
    meats: ['Contra filé', 'Fraldinha', 'Pernil suíno', 'Meio de asa'],
    starters,
    accompaniments,
    desserts: ['Abacaxi assado com canela e leite condensado'],
  },
  {
    slug: 'igreja',
    name: 'Churrasco de Igreja',
    tag: 'SABOR CASEIRO, TRADIÇÃO E UNIÃO',
    description:
      'Aquele sabor que traz boas lembranças. Carne bovina marinada com temperos e assada lentamente na brasa, em um cardápio feito para compartilhar.',
    meats: [
      'Tradicional churrasco de igreja',
      'Linguiça toscana',
      'Pernil suíno marinado',
      'Costelinha suína',
      'Meio da asa temperado',
    ],
    starters: ['Pão de alho artesanal', ...starters.slice(1)],
    accompaniments,
    desserts: [
      'Abacaxi assado com canela e leite condensado',
      'Salada de frutas',
    ],
  },
  {
    slug: 'especial',
    name: 'Especial',
    tag: 'MAIS SABOR EM CADA DETALHE',
    description:
      'Uma seleção que faz o momento ganhar novos sabores. Cortes e marinadas que combinam com celebrações cheias de personalidade.',
    meats: [
      'Entrecot',
      'Maminha na marinada',
      'Fraldinha na mostarda',
      'Costelinha suína',
      'Meio da asa',
    ],
    starters,
    accompaniments,
    desserts: ['Abacaxi assado com canela e leite condensado'],
  },
  {
    slug: 'premium',
    name: 'Premium',
    tag: 'UMA CELEBRAÇÃO À ALTURA',
    description:
      'Cortes selecionados, sabores marcantes e o prazer de receber bem. Uma composição para quem quer fazer da gastronomia parte da memória do evento.',
    meats: [
      'Picanha premium',
      'Entrecot (bife ancho)',
      'Maminha',
      'Fraldinha Angus',
      'Costelinha suína BBQ',
      'Sobrecoxa desossada marinada',
    ],
    starters: ['Pão de alho artesanal', ...starters.slice(1)],
    accompaniments: [
      'Arroz branco',
      'Feijão tropeiro mineiro',
      ...accompaniments.slice(2),
    ],
    desserts: ['Abacaxi assado na brasa com canela e leite condensado'],
  },
  {
    slug: 'fogo-de-chao',
    name: 'Fogo de Chão',
    tag: 'O FOGO TAMBÉM FAZ PARTE DA FESTA',
    description:
      'O preparo vira parte da experiência. Brasa, tempo e tradição em uma apresentação que desperta o apetite antes mesmo de chegar à mesa.',
    meats: [
      'Costela fogo de chão',
      'Churrascão de igreja',
      'Leitão no fogo de chão',
    ],
    starters,
    accompaniments,
    desserts: ['Abacaxi assado com canela e leite condensado'],
  },
];
export function whatsapp(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
