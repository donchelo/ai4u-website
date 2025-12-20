import { Service, ServiceCategory, ServiceStatus, ServiceSuperCategory } from '../types/service';

export const services: Service[] = [
  {
    id: 'estratega-ejecutivo',
    title: 'Estratega Ejecutivo',
    subtitle: 'Consejero estratégico IA 24/7',
    description: 'Tu asistente ejecutivo personal que analiza datos y genera reportes automáticamente.',
    benefits: [
      'Decisiones basadas en datos reales',
      'Reportes automáticos 24/7',
      'Análisis estratégico instantáneo'
    ],
    deliveryTime: 'Listo en 3 días',
    category: ServiceCategory.AI_ASSISTANT,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 1,
    featured: false,
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    tags: ['estrategia', 'reportes', 'ejecutivo', 'análisis'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/estratega-ejecutivo.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.0',
      author: 'AI4U Team'
    }
  },
  {
    id: 'chatbot-inteligente',
    title: 'Chatbot Inteligente',
    subtitle: 'Atención al cliente automatizada',
    description: 'Chatbot personalizado que atiende a tus clientes en WhatsApp y web las 24 horas.',
    benefits: [
      'Atención 24/7 sin límites',
      'Reduce 70% el tiempo de respuesta',
      'Integración con tu marca'
    ],
    deliveryTime: 'Implementación inmediata',
    category: ServiceCategory.AI_ASSISTANT,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 2,
    featured: false,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    tags: ['chatbot', 'whatsapp', 'atención', 'automatización'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/chatbot-inteligente.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.2',
      author: 'AI4U Team'
    }
  },
  {
    id: 'cazador-leads',
    title: 'Cazador de Leads',
    subtitle: 'Generación automática de clientes potenciales',
    description: 'Sistema que genera leads calificados usando Meta Ads (Facebook e Instagram).',
    benefits: [
      'Pipeline comercial siempre lleno',
      'Leads de alta calidad',
      'Optimización diaria de campañas'
    ],
    deliveryTime: 'Setup en 7 días',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 3,
    featured: false,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    tags: ['leads', 'marketing', 'meta ads', 'generación'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/cazador-leads.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.1',
      author: 'AI4U Team'
    }
  },
  {
    id: 'cotizador-automatico',
    title: 'Cotizador Automático',
    subtitle: 'Cotizaciones al instante',
    description: 'Convierte mensajes de voz, texto o video en cotizaciones profesionales automáticamente.',
    benefits: [
      'Cotizaciones en tiempo record',
      'Elimina errores manuales',
      'Envío automático por email'
    ],
    deliveryTime: 'Funcional en 5 días',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 4,
    featured: false,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    tags: ['cotizaciones', 'automatización', 'voz', 'email'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/cotizador-automatico.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.0',
      author: 'AI4U Team'
    }
  },
  {
    id: 'gestor-pedidos',
    title: 'Gestor de Pedidos',
    subtitle: 'Automatiza tus órdenes de compra',
    description: 'Convierte correos y documentos (PDF, JPG) en órdenes automáticas para tu ERP.',
    benefits: [
      'Elimina errores de digitación',
      'Compatible con cualquier ERP',
      'Procesamiento instantáneo'
    ],
    deliveryTime: 'Integración en 7 días',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 5,
    featured: false,
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    tags: ['erp', 'pedidos', 'documentos', 'integración'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/gestor-pedidos.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.3',
      author: 'AI4U Team'
    }
  },
  {
    id: 'investigador-digital',
    title: 'Investigador Digital',
    subtitle: 'Monitor de redes sociales 24/7',
    description: 'Monitorea y analiza redes sociales automáticamente, genera reportes de tendencias.',
    benefits: [
      'Análisis de competencia automático',
      'Reportes diarios listos',
      'Ahorra 15 horas semanales'
    ],
    deliveryTime: 'Configuración inmediata',
    category: ServiceCategory.ANALYTICS,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 6,
    featured: false,
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    tags: ['redes sociales', 'análisis', 'competencia', 'tendencias'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/investigador-digital.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.0',
      author: 'AI4U Team'
    }
  },
  {
    id: 'analista-comentarios',
    title: 'Analista de Comentarios',
    subtitle: 'Análisis estratégico de redes sociales',
    description: 'Analiza automáticamente los comentarios de tus redes sociales y genera insights estratégicos.',
    benefits: [
      'Análisis de sentimientos automático',
      'Reportes semanales con insights',
      'Identifica patrones y tendencias'
    ],
    deliveryTime: 'Activo en 3 días',
    category: ServiceCategory.ANALYTICS,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 7,
    featured: false,
    color: '#84cc16',
    gradient: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)',
    tags: ['sentimientos', 'comentarios', 'insights', 'patrones'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/analista-comentarios.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.0',
      author: 'AI4U Team'
    }
  },
  {
    id: 'the-builder',
    title: 'The Builder',
    subtitle: 'Tienda Shopify completa',
    description: 'Creamos tu tienda online profesional en Shopify lista para vender.',
    benefits: [
      'Tienda profesional y responsive',
      'Pagos y envíos configurados',
      'Integración con redes sociales'
    ],
    deliveryTime: 'Tienda lista en 14 días',
    category: ServiceCategory.ECOMMERCE,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 8,
    featured: false,
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    tags: ['shopify', 'ecommerce', 'tienda', 'desarrollo'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-builder.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '2.0',
      author: 'AI4U Team'
    }
  },
  {
    id: 'the-artist',
    title: 'The Artist',
    subtitle: 'Masterclass Midjourney 1 a 1',
    description: 'Capacitación personalizada para dominar la creación de imágenes con IA.',
    benefits: [
      'Metodología práctica y aplicada',
      'Feedback personalizado',
      'Recursos y prompts exclusivos'
    ],
    deliveryTime: 'Sesiones flexibles',
    category: ServiceCategory.TRAINING,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 9,
    featured: false,
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    tags: ['midjourney', 'capacitación', 'imágenes', 'prompts'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-artist.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.0',
      author: 'AI4U Team'
    }
  },
  {
    id: 'the-mentor',
    title: 'The Mentor',
    subtitle: 'Masterclass IA Generativa 1 a 1',
    description: 'Capacitación personalizada en herramientas de IA generativa (ChatGPT, GPTs personalizados).',
    benefits: [
      'Domina ingeniería de prompts',
      'Crea GPTs personalizados',
      'Multiplica tu productividad'
    ],
    deliveryTime: 'Sesiones personalizadas',
    category: ServiceCategory.TRAINING,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 10,
    featured: false,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
    tags: ['chatgpt', 'gpts', 'prompts', 'productividad'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-mentor.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.1',
      author: 'AI4U Team'
    }
  },
  {
    id: 'the-master',
    title: 'The Master',
    subtitle: 'Masterclass grupal IA Generativa',
    description: 'Experiencia presencial intensiva para líderes empresariales sobre IA Generativa.',
    benefits: [
      'Sesión presencial exclusiva (máx. 20 participantes)',
      'Material digital incluido',
      '30 días de consultas post-evento'
    ],
    deliveryTime: 'Sesiones programadas',
    category: ServiceCategory.TRAINING,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 11,
    featured: false,
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
    tags: ['presencial', 'grupal', 'líderes', 'intensiva'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/the-master.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.0',
      author: 'AI4U Team'
    }
  },
  {
    id: 'asesoria-estrategica',
    title: 'Asesoría Estratégica Continua',
    subtitle: 'Consultoría permanente en IA',
    description: 'Servicio de consultoría continua con acceso ilimitado a innovaciones en IA.',
    benefits: [
      'Acceso a todas las actualizaciones',
      'Asesoramiento mensual personalizado',
      'Soporte preferencial'
    ],
    deliveryTime: 'Servicio continuo',
    category: ServiceCategory.CONSULTING,
    superCategory: ServiceSuperCategory.STRATEGY,
    priority: 12,
    featured: false,
    color: '#64748b',
    gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
    tags: ['consultoría', 'continua', 'actualizaciones', 'soporte'],
    status: ServiceStatus.ACTIVE,
    thumbnail: '/assets/images/services-thumbnails/asesoria-estrategica-continua.png',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      version: '1.0',
      author: 'AI4U Team'
    }
  }
  ,
  {
    id: 'data-entry-automatico',
    title: 'Data Entry Automático',
    subtitle: 'Ingreso automático de datos donde quieras',
    description: 'Recibe información en cualquier formato (PDF, imágenes, correos, Excel) y la ingresa a tu plataforma preferida. Automatización operativa completa con validaciones y trazabilidad.',
    benefits: [
      'Elimina errores de digitación',
      'Procesa PDF, imágenes (OCR), correos y Excel',
      'Integración con ERP/CRM/Sheets/Notion/HubSpot',
      'Ahorra horas operativas cada día',
      'Validaciones y trazabilidad en tiempo real'
    ],
    deliveryTime: 'Listo en 7 días',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 6,
    featured: true,
    media: {
      video: '/assets/videos/data-entry-automatico.mp4',
      poster: '/assets/images/data-entry-automatico-poster.jpg'
    },
    thumbnail: '/assets/images/services-thumbnails/data-entry-automatico.png',
    color: '#22c55e',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    tags: ['ocr', 'pdf', 'imágenes', 'correo', 'excel', 'erp', 'crm', 'integración'],
    status: ServiceStatus.ACTIVE,
    metadata: {
      createdAt: '2025-08-09',
      updatedAt: '2025-08-09',
      version: '1.0',
      author: 'AI4U Team'
    }
  }
  ,
  {
    id: 'fashion-agent',
    title: 'Fashion Agent',
    subtitle: 'De figurines a fotos reales de ecommerce con modelos personalizados',
    description: 'Convierte tus diseños o figurines en fotos de producto realistas listas para ecommerce, con modelos personalizados y variaciones de fondo. Ahorra costos de confección, fotografía y tiempos de producción.',
    benefits: [
      'Fotos listas para ecommerce en horas',
      'Ahorro en confección y fotografía',
      'Modelos personalizados y consistentes',
    ],
    deliveryTime: 'Resultados en 24-48 horas',
    category: ServiceCategory.AUTOMATION,
    superCategory: ServiceSuperCategory.OPERATION,
    priority: 2,
    featured: true,
    media: {
      video: '/assets/videos/fashion-agent.mp4',
      poster: '/assets/images/fashion-agent-poster.jpg'
    },
    thumbnail: '/assets/images/services-thumbnails/fashion-agent.png',
    color: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    tags: ['fashion', 'ecommerce', 'imágenes', 'modelos', 'generative ai'],
    status: ServiceStatus.ACTIVE,
    metadata: {
      createdAt: '2025-08-11',
      updatedAt: '2025-08-11',
      version: '1.0',
      author: 'AI4U Team'
    }
  }
];

// Configuración por defecto del sistema de servicios
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

// Utilidades para manejo de servicios
export const ServiceUtils = {
  // Obtener servicios por categoría
  getByCategory: (category: ServiceCategory) => 
    services.filter(service => service.category === category),
  
  // Obtener servicios destacados
  getFeatured: () => 
    services.filter(service => service.featured),
  
  // Obtener servicios activos
  getActive: () => 
    services.filter(service => service.status === ServiceStatus.ACTIVE),
  
  // Ordenar por prioridad
  sortByPriority: (serviceList: Service[]) => 
    serviceList.sort((a, b) => a.priority - b.priority),
  
  // Buscar por tags
  searchByTags: (tags: string[]) => 
    services.filter(service => 
      tags.some(tag => service.tags.includes(tag.toLowerCase()))
    ),
  
  // Obtener todas las categorías únicas
  getCategories: () => 
    Array.from(new Set(services.map(service => service.category))),
  
  // Obtener todos los tags únicos
  getTags: () => 
    Array.from(new Set(services.flatMap(service => service.tags)))
};