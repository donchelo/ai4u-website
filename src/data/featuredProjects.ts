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
    id: 'dream-house',
    title: 'DreamHouse AI',
    description: 'Plataforma de generación de renders arquitectónicos hiperrealistas en segundos mediante IA.',
    image: '/assets/images/cases/screenshots/dream-house.png',
    link: 'https://dream-house-liard.vercel.app/',
    category: 'Arquitectura & Diseño'
  },
  {
    id: 'flyer-studio',
    title: 'Flyer Studio',
    description: 'Generador inteligente de piezas gráficas para eventos y clubes nocturnos con estética curada.',
    image: '/assets/images/cases/screenshots/flyer-studio.png',
    link: 'https://flyer-studio-phi.vercel.app/',
    category: 'Eventos & Branding'
  },
  {
    id: 'true-vton',
    title: 'CoutureLab / True VTON',
    description: 'Infraestructura digital de moda para probadores virtuales y diseño generativo de colecciones.',
    image: '/assets/images/cases/screenshots/true-vton.png',
    link: 'https://true-vton.vercel.app/',
    category: 'Fashion Tech'
  },
  {
    id: 'gourmet-ai',
    title: 'VisualFeast / Gourmet AI',
    description: 'Solución de diseño y visualización gastronómica para menús y marketing de restaurantes.',
    image: '/assets/images/cases/screenshots/gourmet-ai.png',
    link: 'https://gourmet-ai-ten.vercel.app/',
    category: 'Gastronomía'
  },
  {
    id: 'rascal',
    title: 'RASCAL',
    description: 'Ecosistema digital para marca de movilidad eléctrica disruptiva con enfoque en libertad y diseño.',
    image: '/assets/images/cases/screenshots/rascal.png',
    link: 'https://rascal-three.vercel.app/',
    category: 'E-Mobility'
  },
  {
    id: 'ebook-apasofirme',
    title: 'A Paso Firme',
    description: 'Plataforma de coaching y neurociencia para el desarrollo de confianza y regulación emocional.',
    image: '/assets/images/cases/screenshots/ebook-apasofirme.png',
    link: 'http://ebookapasofirme.com/',
    category: 'Bienestar & Educación'
  }
];
