export type Language = 'es' | 'en';

export interface Translations {
  [key: string]: string | Translations | Array<string | { [key: string]: string }>;
}

export const translations: Record<Language, Translations> = {
  es: {
    // Navegación
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      whyAI4U: '¿Por qué AI4U?',
      successCases: 'Casos de Éxito',
      gallery: 'Galería',
      contact: 'Contacto'
    },
    
    // Hero Section
    hero: {
      title: 'Te devolvemos tu tiempo',
      subtitle: 'para que lo uses en lo que verdaderamente importa',
      cta: 'Recupera tu tiempo',
      philosophy: 'Time is Gold',
      time: '30 minutos',
      no_commitment: 'Sin compromiso',
      immediate_results: 'Resultados inmediatos',
      customTitle: '¡Tu tiempo es oro!',
      customSubtitle: 'Mientras otros pierden el 70% de su día en tareas operativas, nuestros asistentes robóticos trabajan 24/7 para que inviertas tu tiempo en lo que realmente importa: tu familia y el crecimiento estratégico de tu empresa.',
      primaryButtonText: 'Recupera tu tiempo familiar',
      secondaryButtonText: 'Calcula tu ROI'
    },
    
    // Home Features
    home: {
      features: {
        title: '¿El trabajo te está robando momentos irreemplazables?',
        subtitle: 'Cada minuto atrapado en tareas operativas es un momento que no volverá. Mientras tus competidores automatizan, tú pierdes tiempo valioso que podrías estar invirtiendo en tu familia o en el crecimiento estratégico de tu empresa.',
        items: [
          {
            title: 'La automatización ya no es opcional',
            description: 'En 2025, las empresas que no automaticen quedarán atrás. Nuestros asistentes robóticos trabajan 24/7 para mantenerte a la vanguardia, mientras tu competencia sigue atrapada en lo manual.'
          },
          {
            title: 'Libera el 70% de tu tiempo operativo',
            description: 'Nuestros asistentes robóticos transforman tiempo perdido en oportunidades de crecimiento. ROI medible desde el primer mes, mientras tú te enfocas en decisiones estratégicas que multiplican el valor de tu empresa.'
          },
          {
            title: 'Asistentes que nunca descansan',
            description: 'Imagina tener un equipo incansable que trabaja mientras tú disfrutas de lo que realmente importa. Nuestros asistentes robóticos no solo automatizan - transforman cada minuto operativo en oportunidad estratégica.'
          }
        ]
      },
      robot: {
        title: 'Asistentes Robóticos que Transforman tu Empresa',
        subtitle: 'Imagina tener un equipo incansable que trabaja mientras tú disfrutas de lo que realmente importa. Nuestros asistentes robóticos no solo automatizan - transforman cada minuto operativo en oportunidad estratégica.',
        preview: 'Vista previa de nuestra galería de proyectos y casos de uso',
        uniqueTitle: '¿Qué los hace únicos?',
        features: [
          'Generan ROI desde el primer mes',
          'Aprenden y evolucionan con tu empresa',
          'Trabajan 24/7 para tu crecimiento',
          'Se integran perfectamente con tus sistemas'
        ],
        quote: 'Un equipo silencioso que trabaja incansablemente para multiplicar el valor de tu tiempo.'
      },
      services: {
        title: 'Servicios',
        subtitle: 'Nuestras megacategorías de servicio cubren todas las necesidades de automatización, estrategia y transformación digital para tu empresa.',
        categories: [
          {
            title: 'Estrategia',
            description: 'Acompañamiento estratégico continuo, diagnóstico y planificación empresarial con IA para transformar tu negocio desde la raíz.'
          },
          {
            title: 'Automatizaciones',
            description: 'Implementación de asistentes robóticos, chatbots y sistemas automáticos que trabajan 24/7 para liberar tu tiempo y potenciar tu empresa.'
          },
          {
            title: 'Educación',
            description: 'Capacitación y formación en inteligencia artificial y automatización para que tu equipo evolucione junto a la tecnología.'
          },
          {
            title: 'Transformación Digital',
            description: 'Integración de soluciones digitales y automatizadas para llevar tu empresa al siguiente nivel de eficiencia y competitividad.'
          }
        ]
      },
      cta: {
        title: '¿Listo para transformar tu empresa?',
        subtitle: 'Descubre cómo nuestros asistentes robóticos pueden liberar tu tiempo y multiplicar tu productividad.',
        exploreButton: 'Explorar soluciones'
      }
    },
    
    // Servicios
    services: {
      title: 'Nuestros Servicios',
      superAI: {
        title: 'SuperAI Empresarial',
        description: 'Arquitecturas integrales de IA para transformar operaciones'
      },
      gptCustom: {
        title: 'GPT Personalizado',
        description: 'Soluciones de IA adaptadas a tus necesidades específicas'
      },
      automation: {
        title: 'Automatización Inteligente',
        description: 'Optimiza procesos con IA avanzada'
      }
    },
    
    // Footer
    footer: {
      copyright: '© 2024 AI4U. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio'
    },
    
    // Botones
    buttons: {
      learnMore: 'Conoce más',
      getStarted: 'Comenzar',
      contactUs: 'Contáctanos',
      viewDemo: 'Ver Demo'
    },
    
    // Mensajes
    messages: {
      loading: 'Cargando...',
      error: 'Ha ocurrido un error',
      success: 'Operación exitosa'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      whyAI4U: 'Why AI4U?',
      successCases: 'Success Cases',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    
    // Hero Section
    hero: {
      title: 'We give you back your time',
      subtitle: 'so you can use it on what truly matters',
      cta: 'Recover your time',
      philosophy: 'Time is Gold',
      time: '30 minutes',
      no_commitment: 'No commitment',
      immediate_results: 'Immediate results',
      customTitle: 'Your time is gold!',
      customSubtitle: 'While others waste 70% of their day on operational tasks, our robotic assistants work 24/7 so you can invest your time in what really matters: your family and the strategic growth of your company.',
      primaryButtonText: 'Recover your family time',
      secondaryButtonText: 'Calculate your ROI'
    },
    
    // Home Features
    home: {
      features: {
        title: 'Is work stealing irreplaceable moments?',
        subtitle: 'Every minute trapped in operational tasks is a moment that won\'t return. While your competitors automate, you lose valuable time that you could be investing in your family or the strategic growth of your company.',
        items: [
          {
            title: 'Automation is no longer optional',
            description: 'In 2025, companies that don\'t automate will fall behind. Our robotic assistants work 24/7 to keep you ahead, while your competition remains stuck in manual processes.'
          },
          {
            title: 'Free up 70% of your operational time',
            description: 'Our robotic assistants transform wasted time into growth opportunities. Measurable ROI from the first month, while you focus on strategic decisions that multiply your company\'s value.'
          },
          {
            title: 'Assistants that never rest',
            description: 'Imagine having an tireless team that works while you enjoy what really matters. Our robotic assistants don\'t just automate - they transform every operational minute into strategic opportunity.'
          }
        ]
      },
      robot: {
        title: 'Robotic Assistants that Transform your Company',
        subtitle: 'Imagine having an tireless team that works while you enjoy what really matters. Our robotic assistants don\'t just automate - they transform every operational minute into strategic opportunity.',
        preview: 'Preview of our project gallery and use cases',
        uniqueTitle: 'What makes them unique?',
        features: [
          'Generate ROI from the first month',
          'Learn and evolve with your company',
          'Work 24/7 for your growth',
          'Integrate perfectly with your systems'
        ],
        quote: 'A silent team that works tirelessly to multiply the value of your time.'
      },
      services: {
        title: 'Services',
        subtitle: 'Our service megacategories cover all automation, strategy and digital transformation needs for your company.',
        categories: [
          {
            title: 'Strategy',
            description: 'Continuous strategic support, diagnosis and business planning with AI to transform your business from the ground up.'
          },
          {
            title: 'Automation',
            description: 'Implementation of robotic assistants, chatbots and automatic systems that work 24/7 to free your time and boost your company.'
          },
          {
            title: 'Education',
            description: 'Training and education in artificial intelligence and automation so your team evolves alongside technology.'
          },
          {
            title: 'Digital Transformation',
            description: 'Integration of digital and automated solutions to take your company to the next level of efficiency and competitiveness.'
          }
        ]
      },
      cta: {
        title: 'Ready to transform your company?',
        subtitle: 'Discover how our robotic assistants can free your time and multiply your productivity.',
        exploreButton: 'Explore solutions'
      }
    },
    
    // Services
    services: {
      title: 'Our Services',
      superAI: {
        title: 'Enterprise SuperAI',
        description: 'Comprehensive AI architectures to transform operations'
      },
      gptCustom: {
        title: 'Custom GPT',
        description: 'AI solutions tailored to your specific needs'
      },
      automation: {
        title: 'Intelligent Automation',
        description: 'Optimize processes with advanced AI'
      }
    },
    
    // Footer
    footer: {
      copyright: '© 2024 AI4U. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    
    // Buttons
    buttons: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      viewDemo: 'View Demo'
    },
    
    // Messages
    messages: {
      loading: 'Loading...',
      error: 'An error has occurred',
      success: 'Operation successful'
    }
  }
};

// Función helper para acceder a traducciones anidadas
export const getTranslation = (obj: any, path: string): string => {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path; // Retorna la clave si no encuentra la traducción
    }
  }
  
  return typeof result === 'string' ? result : path;
}; 