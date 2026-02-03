import { Service, ServiceCategory, ServiceStatus, ServiceSuperCategory } from '../types/service';

export const services: Service[] = [
  // --- EJE 1: OPERACIÓN ---
  {
    id: 'fashion-agent',
    title: 'coutureLAB',
    subtitle: 'De figurines a ecommerce real',
    description: 'Transforma diseños en fotos de producto reales con modelos IA. Ahorra 90% en costos de fotografía.',
    benefits: [
      'Fotos ecommerce en horas',
      'Modelos personalizados',
      'Cero costos de producción'
    ],
    deliveryTime: '24h',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 1,
    featured: true,
    media: {
      video: '/assets/videos/fashion-agent.mp4',
      poster: '/assets/images/fashion-agent-poster.jpg'
    },
    thumbnail: '/assets/images/services-thumbnails/fashion-agent.png',
    color: '#0ea5e9',
    tags: ['fashion', 'ecommerce', 'ai'],
    status: ServiceStatus.ACTIVE,
    metadata: { createdAt: '2025-08-11', updatedAt: '2025-02-03', version: '1.1', author: 'AI4U Team' }
  },
  {
    id: 'data-entry-automatico',
    title: 'Data Entry Automático',
    subtitle: 'Cero digitación manual',
    description: 'Extrae datos de PDF, imágenes o correos e ingrésalos en tu ERP/CRM automáticamente.',
    benefits: [
      'Elimina errores humanos',
      'Libera 20h semanales',
      'Integración inmediata'
    ],
    deliveryTime: '7 días',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 2,
    featured: false,
    media: {
      video: '/assets/videos/data-entry-automatico.mp4',
      poster: '/assets/images/data-entry-automatico-poster.jpg'
    },
    thumbnail: '/assets/images/services-thumbnails/data-entry-automatico.png',
    color: '#22c55e',
    tags: ['ocr', 'erp', 'automatización'],
    status: ServiceStatus.ACTIVE,
    metadata: { createdAt: '2025-08-09', updatedAt: '2025-02-03', version: '1.1', author: 'AI4U Team' }
  },
  {
    id: 'chatbot-inteligente',
    title: 'Chatbots WhatsApp',
    subtitle: 'Pedidos 24/7 sin humanos',
    description: 'Vende por WhatsApp automáticamente. Gestión de órdenes conectada a tu inventario.',
    benefits: [
      'Atención 24/7 real',
      'Ventas automáticas',
      'Fácil integración'
    ],
    deliveryTime: '3 días',
    category: ServiceCategory.AI_ASSISTANT,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 3,
    featured: false,
    color: '#10b981',
    tags: ['chatbot', 'whatsapp'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/chatbot-inteligente.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.2', author: 'AI4U Team' }
  },
  {
    id: 'auditoria-ia',
    title: 'Auditorías IA',
    subtitle: 'Control total operativo',
    description: 'Detección automática de errores en facturación y logística. Seguridad operativa garantizada.',
    benefits: [
      'Reportes en segundos',
      'Cero fraude/error',
      'Visibilidad total'
    ],
    deliveryTime: '5 días',
    category: ServiceCategory.ANALYTICS,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 4,
    featured: false,
    color: '#f59e0b',
    tags: ['auditoría', 'control'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/auditoria-ia.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'vision-computadora',
    title: 'Visión Artificial',
    subtitle: 'Cámaras inteligentes',
    description: 'Monitoreo de stock y control de calidad visual en tiempo real en bodegas y tiendas.',
    benefits: [
      'Control 24/7 visual',
      'Detección de mermas',
      'Seguridad proactiva'
    ],
    deliveryTime: '14 días',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 5,
    featured: false,
    color: '#8b5cf6',
    tags: ['visión', 'seguridad'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/vision-computadora.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'sitios-web-ia',
    title: 'Webs B2B con IA',
    subtitle: 'Pedidos optimizados',
    description: 'Plataformas inteligentes para pedidos web con experiencia personalizada y alta velocidad.',
    benefits: [
      'Conversión maximizada',
      'UX personalizada',
      'Velocidad extrema'
    ],
    deliveryTime: '10 días',
    category: ServiceCategory.ECOMMERCE,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 6,
    featured: false,
    color: '#ec4899',
    tags: ['web', 'b2b'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/sitios-web-ia.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'cotizador-automatico',
    title: 'Cotizador Automático',
    subtitle: 'Presupuestos al instante',
    description: 'Convierte voz o texto en cotizaciones profesionales automáticas enviadas por email.',
    benefits: [
      'Cero errores manuales',
      'Envío instantáneo',
      'Ahorro operativo'
    ],
    deliveryTime: '5 días',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 7,
    featured: false,
    color: '#8b5cf6',
    tags: ['cotizaciones', 'voz'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/cotizador-automatico.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'gestor-pedidos',
    title: 'Gestor de Pedidos',
    subtitle: 'Automatiza tus órdenes',
    description: 'Procesa automáticamente órdenes de compra desde PDFs o JPGs hacia tu ERP.',
    benefits: [
      'Elimina digitación',
      'Cero errores ERP',
      'Proceso inmediato'
    ],
    deliveryTime: '7 días',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 8,
    featured: false,
    color: '#ef4444',
    tags: ['pedidos', 'erp'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/gestor-pedidos.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.3', author: 'AI4U Team' }
  },
  {
    id: 'the-builder',
    title: 'The Builder',
    subtitle: 'Tiendas Shopify Pro',
    description: 'Creamos tu tienda online profesional en Shopify optimizada para máxima conversión.',
    benefits: [
      'Diseño profesional',
      'Pagos configurados',
      'Lista en 14 días'
    ],
    deliveryTime: '14 días',
    category: ServiceCategory.ECOMMERCE,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 9,
    featured: false,
    color: '#ec4899',
    tags: ['shopify', 'ecommerce'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-builder.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '2.0', author: 'AI4U Team' }
  },

  // --- EJE 2: ESTRATEGIA ---
  {
    id: 'estratega-ejecutivo',
    title: 'Estratega Ejecutivo',
    subtitle: 'Consultor IA en tu bolsillo',
    description: 'Analiza KPIs y genera reportes estratégicos automáticamente para toma de decisiones.',
    benefits: [
      'Data real, no instinto',
      'Reportes 24/7',
      'Análisis instantáneo'
    ],
    deliveryTime: '3 días',
    category: ServiceCategory.AI_ASSISTANT,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 1,
    featured: false,
    color: '#6366f1',
    tags: ['estrategia', 'kpis'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/estratega-ejecutivo.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'dashboards-inteligentes',
    title: 'Dashboards IA',
    subtitle: 'Tu negocio en tiempo real',
    description: 'Visualización avanzada de rentabilidad y mermas. Predice tendencias antes que pasen.',
    benefits: [
      'Visibilidad 360°',
      'Predicción IA',
      'ROI optimizado'
    ],
    deliveryTime: '7 días',
    category: ServiceCategory.ANALYTICS,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 2,
    featured: false,
    color: '#06b6d4',
    tags: ['dashboards', 'data'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/dashboards-inteligentes.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'investigacion-horeca',
    title: 'Investigación HORECA',
    subtitle: 'Expansión basada en datos',
    description: 'Mapeo exhaustivo de mercado para identificar zonas con mayor potencial de crecimiento.',
    benefits: [
      'Leads calificados',
      'Mapeo competencia',
      'Expansión guiada'
    ],
    deliveryTime: '15 días',
    category: ServiceCategory.CONSULTING,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 3,
    featured: false,
    color: '#84cc16',
    tags: ['horeca', 'expansión'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/investigacion-horeca.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'asesoria-estrategica',
    title: 'Consultoría Permanente',
    subtitle: 'Tu equipo IA dedicado',
    description: 'Acceso ilimitado a innovaciones, soporte preferencial y asesoramiento mensual constante.',
    benefits: [
      'Actualizaciones IA',
      'Soporte preferencial',
      'Innovación continua'
    ],
    deliveryTime: 'Continuo',
    category: ServiceCategory.CONSULTING,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 4,
    featured: false,
    color: '#64748b',
    tags: ['consultoría', 'innovación'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/asesoria-estrategica-continua.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'cazador-leads',
    title: 'Cazador de Leads',
    subtitle: 'Clientes calificados',
    description: 'Sistema automático de generación de prospectos usando Meta Ads optimizado con IA.',
    benefits: [
      'Pipeline siempre lleno',
      'Leads de alta calidad',
      'ROI en marketing'
    ],
    deliveryTime: '7 días',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 5,
    featured: false,
    color: '#f59e0b',
    tags: ['leads', 'marketing'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/cazador-leads.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.1', author: 'AI4U Team' }
  },
  {
    id: 'investigador-digital',
    title: 'Investigador Digital',
    subtitle: 'Monitor de tendencias',
    description: 'Monitorea redes sociales y competencia 24/7 generando reportes automáticos de mercado.',
    benefits: [
      'Análisis competencia',
      'Ahorro 15h semanales',
      'Reportes diarios'
    ],
    deliveryTime: 'Inmediato',
    category: ServiceCategory.ANALYTICS,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 6,
    featured: false,
    color: '#06b6d4',
    tags: ['redes', 'tendencias'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/investigador-digital.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'analista-comentarios',
    title: 'Analista de Comentarios',
    subtitle: 'Insights automáticos',
    description: 'Analiza sentimientos y patrones en redes sociales para ajustar tu estrategia comercial.',
    benefits: [
      'Análisis sentimientos',
      'Insights de clientes',
      'Patrones detectados'
    ],
    deliveryTime: '3 días',
    category: ServiceCategory.ANALYTICS,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 7,
    featured: false,
    color: '#84cc16',
    tags: ['sentimientos', 'insights'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/analista-comentarios.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },

  // --- EJE 3: EDUCACIÓN ---
  {
    id: 'the-master',
    title: 'The Master',
    subtitle: 'Estrategia para líderes',
    description: 'Masterclass presencial para dueños de negocio sobre IA y automatización estratégica.',
    benefits: [
      'Sesión exclusiva',
      'Roadmap real',
      'Networking top'
    ],
    deliveryTime: 'Programado',
    category: ServiceCategory.TRAINING,
    superCategory: ServiceSuperCategory.EDUCATION,
    priority: 1,
    featured: false,
    color: '#14b8a6',
    tags: ['líderes', 'masterclass'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-master.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'the-mentor',
    title: 'The Mentor',
    subtitle: 'Prompt Engineering 1a1',
    description: 'Capacitación personalizada para multiplicar tu productividad usando ChatGPT y GPTs.',
    benefits: [
      'Productividad x10',
      'GPTs personalizados',
      'Mentoría directa'
    ],
    deliveryTime: 'Sesiones',
    category: ServiceCategory.TRAINING,
    superCategory: ServiceSuperCategory.EDUCATION,
    priority: 2,
    featured: false,
    color: '#a855f7',
    tags: ['chatgpt', 'productividad'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-mentor.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.1', author: 'AI4U Team' }
  },
  {
    id: 'the-artist',
    title: 'The Artist',
    subtitle: 'Master Midjourney 1a1',
    description: 'Domina la creación de imágenes IA para marketing, diseño y conceptualización pro.',
    benefits: [
      'Control Midjourney',
      'Feedback en vivo',
      'Prompts exclusivos'
    ],
    deliveryTime: 'Sesiones',
    category: ServiceCategory.TRAINING,
    superCategory: ServiceSuperCategory.EDUCATION,
    priority: 3,
    featured: false,
    color: '#f97316',
    tags: ['midjourney', 'diseño'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-artist.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },

  // --- EJE 4: TRANSFORMACIÓN DIGITAL ---
  {
    id: 'super-ai',
    title: 'Super AI',
    subtitle: 'Autonomía Total (AIA)',
    description: 'IA que no solo sugiere, sino que ejecuta. Conectada a tus sistemas para decidir sola.',
    benefits: [
      'Ejecución autónoma',
      'Cero intervención',
      'Sustitución de flujos'
    ],
    deliveryTime: 'A medida',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.TRANSFORMATION,
    priority: 1,
    featured: true,
    color: '#00F0FF',
    tags: ['super-ai', 'autonomía'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/super-ai.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'metodologia-ai-first',
    title: 'Metodología AI-First',
    subtitle: 'Infraestructura del futuro',
    description: 'Construimos tu negocio sobre IA desde el núcleo. Escalabilidad infinita y radical.',
    benefits: [
      'Arquitectura IA',
      'Ventaja competitiva',
      'Negocio escalable'
    ],
    deliveryTime: 'Consultoría',
    category: ServiceCategory.CONSULTING,
    superCategory: ServiceSuperCategory.TRANSFORMATION,
    priority: 2,
    featured: false,
    color: '#ffffff',
    tags: ['metodología', 'futuro'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/metodologia-ai-first.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  }
];

export const defaultServiceConfig = {
  displaySettings: {
    showPrices: false,
    showDeliveryTime: true,
    cardsPerRow: 3,
    showCategories: true
  },
  filterSettings: {
    enableCategoryFilter: true,
    enablePriceFilter: false,
    enableTagFilter: false
  }
};

export const ServiceUtils = {
  getByCategory: (category: ServiceCategory) => 
    services.filter(service => service.category === category),
  
  getBySuperCategory: (superCategory: ServiceSuperCategory) =>
    services.filter(service => service.superCategory === superCategory),
  
  getFeatured: () => 
    services.filter(service => service.featured),
  
  getActive: () => 
    services.filter(service => service.status === ServiceStatus.ACTIVE),
  
  sortByPriority: (serviceList: Service[]) => 
    [...serviceList].sort((a, b) => a.priority - b.priority),
  
  searchByTags: (tags: string[]) => 
    services.filter(service => 
      tags.some(tag => service.tags.includes(tag.toLowerCase()))
    ),
  
  getCategories: () => 
    Array.from(new Set(services.map(service => service.category))),
  
  getTags: () => 
    Array.from(new Set(services.flatMap(service => service.tags)))
};
