export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'la-magdalena',
    title: 'La Magdalena',
    description: 'Storytelling multimedia del Río Magdalena.',
    image: '/assets/images/cases/screenshots/la-magdalena.png',
    link: 'https://donchelo.github.io/www.lamagdalena.com/#inicio',
    category: 'Impact Storytelling'
  },
  {
    id: 'rascal',
    title: 'Rascal',
    description: 'Ecosistema digital de movilidad eléctrica.',
    image: '/assets/images/cases/screenshots/rascal.png',
    link: 'https://rascal-three.vercel.app/',
    category: 'E-Mobility'
  },
  {
    id: 'ebook-apasofirme',
    title: 'A Paso Firme',
    description: 'Coaching y neurociencia para desarrollo personal.',
    image: '/assets/images/cases/screenshots/ebook-apasofirme.png',
    link: 'http://ebookapasofirme.com/',
    category: 'Bienestar & Educación'
  },
  {
    id: 'dream-house',
    title: 'DreamHouse AI',
    description: 'Renders arquitectónicos con IA en segundos.',
    image: '/assets/images/cases/screenshots/dream-house.png',
    link: 'https://dream-house-liard.vercel.app/',
    category: 'Arquitectura & Diseño'
  },
  {
    id: 'true-vton',
    title: 'CoutureLab / True VTON',
    description: 'Probadores virtuales y diseño generativo de moda.',
    image: '/assets/images/cases/screenshots/true-vton.png',
    link: 'https://true-vton.vercel.app/',
    category: 'Fashion Tech'
  },
  {
    id: 'flyer-studio',
    title: 'Flyer Studio',
    description: 'Piezas gráficas para eventos con IA.',
    image: '/assets/images/cases/screenshots/flyer-studio.png',
    link: 'https://flyer-studio-phi.vercel.app/',
    category: 'Eventos & Branding'
  },
  {
    id: 'gourmet-ai',
    title: 'VisualFeast / Gourmet AI',
    description: 'Visualización gastronómica con IA.',
    image: '/assets/images/cases/screenshots/gourmet-ai.png',
    link: 'https://gourmet-ai-ten.vercel.app/',
    category: 'Gastronomía'
  }
];
