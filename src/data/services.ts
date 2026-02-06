import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';
import { Service, ServiceCategory, ServiceStatus, ServiceSuperCategory } from '../types/service';

export const services: Service[] = [
  // --- EJE 1: OPERACIÓN (ORANGE) ---
  {
    id: 'fashion-agent',
    title: 'coutureLAB',
    subtitle: 'De figurines a ecommerce real',
    description: 'Fotos de producto con modelos IA. Ahorro del 90% en producción.',
    benefits: [
      'Modelos personalizados',
      'Cero costos de estudio'
    ],
    deliveryTime: '24h',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 1,
    featured: true,
    media: {
      video: '/assets/videos/fashion-agent.mp4',
      poster: '/assets/images/services-thumbnails/fashion-agent.png'
    },
    thumbnail: '/assets/images/services-thumbnails/fashion-agent.png',
    color: AI4U_PALETTE.accentColors.orange,
    tags: ['fashion', 'ecommerce', 'ai'],
    status: ServiceStatus.ACTIVE,
    metadata: { createdAt: '2025-08-11', updatedAt: '2025-02-03', version: '1.1', author: 'AI4U Team' }
  },
  {
    id: 'data-entry-automatico',
    title: 'Data Entry Automático',
    subtitle: 'Cero digitación manual',
    description: 'Extracción automática de datos desde PDF o imágenes hacia tu ERP.',
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
      poster: '/assets/images/services-thumbnails/data-entry-automatico.png'
    },
    thumbnail: '/assets/images/services-thumbnails/data-entry-automatico.png',
    color: AI4U_PALETTE.accentColors.orange,
    tags: ['ocr', 'erp', 'automatización'],
    status: ServiceStatus.ACTIVE,
    metadata: { createdAt: '2025-08-09', updatedAt: '2025-02-03', version: '1.1', author: 'AI4U Team' }
  },
  {
    id: 'chatbot-inteligente',
    title: 'Chatbots WhatsApp',
    subtitle: 'Pedidos 24/7 sin humanos',
    description: 'Ventas y atención por WhatsApp conectadas a tu inventario 24/7.',
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
    color: AI4U_PALETTE.accentColors.orange,
    tags: ['chatbot', 'whatsapp'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/chatbot-inteligente.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.2', author: 'AI4U Team' }
  },
  {
    id: 'auditoria-ia',
    title: 'Auditorías IA',
    subtitle: 'Control total operativo',
    description: 'Control automático de errores en facturación y procesos logísticos.',
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
    color: AI4U_PALETTE.accentColors.orange,
    tags: ['auditoría', 'control'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/auditoria-ia.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'vision-computadora',
    title: 'Visión Artificial',
    subtitle: 'Cámaras inteligentes',
    description: 'Monitoreo de stock y calidad visual en tiempo real para bodegas.',
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
    color: AI4U_PALETTE.accentColors.orange,
    tags: ['visión', 'seguridad'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/vision-computadora.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'sitios-web-ia',
    title: 'Webs B2B con IA',
    subtitle: 'Pedidos optimizados',
    description: 'Plataformas inteligentes de pedidos con experiencia personalizada.',
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
    color: AI4U_PALETTE.accentColors.orange,
    tags: ['web', 'b2b'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/sitios-web-ia.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'cotizador-automatico',
    title: 'Cotizador Automático',
    subtitle: 'Presupuestos al instante',
    description: 'Conversión de voz o texto en presupuestos enviados al instante.',
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
    color: AI4U_PALETTE.accentColors.orange,
    tags: ['cotizaciones', 'voz'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/cotizador-automatico.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'gestor-pedidos',
    title: 'Gestor de Pedidos',
    subtitle: 'Automatiza tus órdenes',
    description: 'Procesamiento automático de órdenes de compra desde cualquier formato.',
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
    color: AI4U_PALETTE.accentColors.orange,
    tags: ['pedidos', 'erp'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/gestor-pedidos.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.3', author: 'AI4U Team' }
  },
  {
    id: 'the-builder',
    title: 'The Builder',
    subtitle: 'Tiendas Shopify Pro',
    description: 'Tiendas Shopify profesionales optimizadas para máxima conversión.',
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
    color: AI4U_PALETTE.accentColors.orange,
    tags: ['shopify', 'ecommerce'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-builder.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '2.0', author: 'AI4U Team' }
  },

  // --- EJE 2: ESTRATEGIA (INFO/BLUE) ---
  {
    id: 'estratega-ejecutivo',
    title: 'Estratega Ejecutivo',
    subtitle: 'Consultor IA en tu bolsillo',
    description: 'Análisis de KPIs y reportes estratégicos generados automáticamente.',
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
    color: AI4U_PALETTE.info,
    tags: ['estrategia', 'kpis'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/estratega-ejecutivo.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'dashboards-inteligentes',
    title: 'Dashboards IA',
    subtitle: 'Tu negocio en tiempo real',
    description: 'Visualización de rentabilidad y predicción de tendencias en tiempo real.',
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
    color: AI4U_PALETTE.info,
    tags: ['dashboards', 'data'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/dashboards-inteligentes.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'investigacion-horeca',
    title: 'Investigación HORECA',
    subtitle: 'Expansión basada en datos',
    description: 'Mapeo de mercado con IA para identificar zonas de alto crecimiento.',
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
    color: AI4U_PALETTE.info,
    tags: ['horeca', 'expansión'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/investigacion-horeca.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'asesoria-estrategica',
    title: 'Consultoría Permanente',
    subtitle: 'Tu equipo IA dedicado',
    description: 'Acceso ilimitado a innovación IA y asesoramiento mensual dedicado.',
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
    color: AI4U_PALETTE.info,
    tags: ['consultoría', 'innovación'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/asesoria-estrategica-continua.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'cazador-leads',
    title: 'Cazador de Leads',
    subtitle: 'Clientes calificados',
    description: 'Generación automática de prospectos calificados con Meta Ads e IA.',
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
    color: AI4U_PALETTE.info,
    tags: ['leads', 'marketing'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/cazador-leads.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.1', author: 'AI4U Team' }
  },
  {
    id: 'investigador-digital',
    title: 'Investigador Digital',
    subtitle: 'Monitor de tendencias',
    description: 'Monitoreo de competencia y tendencias de mercado en tiempo real.',
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
    color: AI4U_PALETTE.info,
    tags: ['redes', 'tendencias'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/investigador-digital.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'analista-comentarios',
    title: 'Analista de Comentarios',
    subtitle: 'Insights automáticos',
    description: 'Detección de patrones y sentimientos en comentarios de clientes.',
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
    color: AI4U_PALETTE.info,
    tags: ['sentimientos', 'insights'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/analista-comentarios.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },

  // --- EJE 3: EDUCACIÓN (BLACK) ---
  {
    id: 'the-master',
    title: 'The Master',
    subtitle: 'Estrategia para líderes',
    description: 'Estrategia de IA y automatización exclusiva para dueños de negocio.',
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
    color: AI4U_PALETTE.accentColors.orange, // Naranja para contrastar sobre fondo negro
    tags: ['líderes', 'masterclass'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-master.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'the-mentor',
    title: 'The Mentor',
    subtitle: 'Prompt Engineering 1a1',
    description: 'Capacitación personalizada en productividad extrema con ChatGPT.',
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
    color: AI4U_PALETTE.accentColors.orange, // Naranja para contrastar sobre fondo negro
    tags: ['chatgpt', 'productividad'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-mentor.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.1', author: 'AI4U Team' }
  },
  {
    id: 'the-artist',
    title: 'The Artist',
    subtitle: 'Master Midjourney 1a1',
    description: 'Dominio de creación de imágenes IA para marketing y diseño pro.',
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
    color: AI4U_PALETTE.accentColors.orange, // Naranja para contrastar sobre fondo negro
    tags: ['midjourney', 'diseño'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-artist.png',
    metadata: { createdAt: '2024-01-01', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },

  // --- EJE 4: TRANSFORMACIÓN DIGITAL (GREEN) ---
  {
    id: 'super-ai',
    title: 'Super AI',
    subtitle: 'Autonomía Total (AIA)',
    description: 'IA autónoma que ejecuta decisiones conectada a tus sistemas.',
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
    media: {
      video: '/assets/videos/data-entry-automatico.mp4',
      poster: '/assets/images/services-thumbnails/data-entry-automatico.png'
    },
    color: AI4U_PALETTE.accentColors.green,
    tags: ['super-ai', 'autonomía'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/data-entry-automatico.png',
    metadata: { createdAt: '2025-02-03', updatedAt: '2025-02-03', version: '1.0', author: 'AI4U Team' }
  },
  {
    id: 'metodologia-ai-first',
    title: 'Metodología AI-First',
    subtitle: 'Infraestructura del futuro',
    description: 'Arquitectura de negocio diseñada desde el núcleo con IA.',
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
    color: AI4U_PALETTE.accentColors.green,
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
