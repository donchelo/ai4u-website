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
    
    // Services Page
    services: {
      hero: {
        title: 'Servicios AI4U',
        subtitle: 'Construimos tu infraestructura de IA personalizada',
        description: 'En AI4U nos especializamos en crear soluciones de inteligencia artificial adaptadas específicamente a tu negocio. Automatizamos procesos, liberamos tiempo operativo y transformamos ese tiempo en libertad estratégica.'
      },
      stats: {
        title: 'Nuestros números hablan por sí solos',
        metrics: [
          {
            title: 'Servicios',
            subtitle: 'Soluciones disponibles'
          },
          {
            title: 'Estrategia',
            subtitle: 'Servicios estratégicos'
          },
          {
            title: 'Operación',
            subtitle: 'Servicios operativos'
          },
          {
            title: 'ROI promedio',
            subtitle: 'Retorno en 3 meses',
            value: '300%'
          },
          {
            title: 'Tiempo ahorrado',
            subtitle: 'Reducción de tareas manuales',
            value: '85%'
          },
          {
            title: 'Clientes satisfechos',
            subtitle: 'Tasa de retención',
            value: '100%'
          },
          {
            title: 'Implementación',
            subtitle: 'Días promedio',
            value: '30'
          }
        ]
      },
      filter: {
        title: 'Nuestros servicios',
        superCategories: [
          { label: 'Todos' },
          { label: 'Estrategia' },
          { label: 'Operación' }
        ],
        categories: [
          { label: 'Todos' },
          { label: 'Asistentes IA' },
          { label: 'Automatización' },
          { label: 'Análisis' },
          { label: 'E-commerce' },
          { label: 'Capacitación' },
          { label: 'Consultoría' }
        ],
        noResults: {
          title: 'No se encontraron servicios que coincidan con los filtros seleccionados.',
          clearButton: 'Limpiar filtros'
        },
        navigation: {
          left: 'Desplazar servicios hacia la izquierda',
          right: 'Desplazar servicios hacia la derecha'
        }
      },
      process: {
        title: 'Nuestro proceso',
        steps: [
          {
            title: 'Diagnóstico gratuito (30 minutos)',
            description: 'Identificamos todas las oportunidades de automatización en tu negocio'
          },
          {
            title: 'Definición de prioridades',
            description: 'Establecemos qué procesos automatizar primero según tu ROI'
          },
          {
            title: 'Presupuesto personalizado',
            description: 'Adaptamos las soluciones a tu capacidad de inversión'
          },
          {
            title: 'Implementación',
            description: 'Desarrollamos e integramos las soluciones en tu negocio'
          }
        ]
      },
      impact: {
        title: 'Impacto real en nuestros clientes',
        metrics: [
          {
            title: 'Horas ahorradas',
            subtitle: 'Por cliente al mes',
            value: '1200+'
          },
          {
            title: 'Procesos automatizados',
            subtitle: 'De tareas repetitivas',
            value: '95%'
          },
          {
            title: 'Tiempo de respuesta',
            subtitle: 'Soporte garantizado',
            value: '24h'
          },
          {
            title: 'Escalabilidad',
            subtitle: 'Crecimiento sin límites',
            value: '∞'
          }
        ]
      },
      cta: {
        title: '¿Listo para liberar tu tiempo estratégico?',
        subtitle: 'Agenda tu diagnóstico gratuito de 30 minutos y descubre cómo podemos transformar tu negocio con IA.',
        disclaimer: 'Sin compromiso • Personalizado a tu negocio • Resultados desde el primer mes'
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
    
    // Services Page
    services: {
      hero: {
        title: 'AI4U Services',
        subtitle: 'We build your personalized AI infrastructure',
        description: 'At AI4U we specialize in creating artificial intelligence solutions specifically adapted to your business. We automate processes, free up operational time and transform that time into strategic freedom.'
      },
      stats: {
        title: 'Our numbers speak for themselves',
        metrics: [
          {
            title: 'Services',
            subtitle: 'Available solutions'
          },
          {
            title: 'Strategy',
            subtitle: 'Strategic services'
          },
          {
            title: 'Operation',
            subtitle: 'Operational services'
          },
          {
            title: 'Average ROI',
            subtitle: 'Return in 3 months',
            value: '300%'
          },
          {
            title: 'Time saved',
            subtitle: 'Reduction in manual tasks',
            value: '85%'
          },
          {
            title: 'Satisfied clients',
            subtitle: 'Retention rate',
            value: '100%'
          },
          {
            title: 'Implementation',
            subtitle: 'Average days',
            value: '30'
          }
        ]
      },
      filter: {
        title: 'Our services',
        superCategories: [
          { label: 'All' },
          { label: 'Strategy' },
          { label: 'Operation' }
        ],
        categories: [
          { label: 'All' },
          { label: 'AI Assistants' },
          { label: 'Automation' },
          { label: 'Analytics' },
          { label: 'E-commerce' },
          { label: 'Training' },
          { label: 'Consulting' }
        ],
        noResults: {
          title: 'No services found matching the selected filters.',
          clearButton: 'Clear filters'
        },
        navigation: {
          left: 'Scroll services to the left',
          right: 'Scroll services to the right'
        }
      },
      process: {
        title: 'Our process',
        steps: [
          {
            title: 'Free diagnosis (30 minutes)',
            description: 'We identify all automation opportunities in your business'
          },
          {
            title: 'Priority definition',
            description: 'We establish which processes to automate first according to your ROI'
          },
          {
            title: 'Personalized budget',
            description: 'We adapt solutions to your investment capacity'
          },
          {
            title: 'Implementation',
            description: 'We develop and integrate solutions in your business'
          }
        ]
      },
      impact: {
        title: 'Real impact on our clients',
        metrics: [
          {
            title: 'Hours saved',
            subtitle: 'Per client per month',
            value: '1200+'
          },
          {
            title: 'Automated processes',
            subtitle: 'Of repetitive tasks',
            value: '95%'
          },
          {
            title: 'Response time',
            subtitle: 'Guaranteed support',
            value: '24h'
          },
          {
            title: 'Scalability',
            subtitle: 'Unlimited growth',
            value: '∞'
          }
        ]
      },
      cta: {
        title: 'Ready to free your strategic time?',
        subtitle: 'Schedule your free 30-minute diagnosis and discover how we can transform your business with AI.',
        disclaimer: 'No commitment • Personalized to your business • Results from the first month'
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