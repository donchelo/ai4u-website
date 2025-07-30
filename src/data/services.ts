import { Service, ServiceCategory, ServiceStatus } from '../types/service';

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
    priority: 1,
    featured: true,
    color: '#1976d2',
    tags: ['estrategia', 'reportes', 'ejecutivo', 'análisis'],
    status: ServiceStatus.ACTIVE,
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
    priority: 2,
    featured: true,
    color: '#388e3c',
    tags: ['chatbot', 'whatsapp', 'atención', 'automatización'],
    status: ServiceStatus.ACTIVE,
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
    priority: 3,
    featured: false,
    color: '#f57c00',
    tags: ['leads', 'marketing', 'meta ads', 'generación'],
    status: ServiceStatus.ACTIVE,
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
    priority: 4,
    featured: false,
    color: '#7b1fa2',
    tags: ['cotizaciones', 'automatización', 'voz', 'email'],
    status: ServiceStatus.ACTIVE,
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
    priority: 5,
    featured: true,
    color: '#d32f2f',
    tags: ['erp', 'pedidos', 'documentos', 'integración'],
    status: ServiceStatus.ACTIVE,
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
    priority: 6,
    featured: false,
    color: '#00796b',
    tags: ['redes sociales', 'análisis', 'competencia', 'tendencias'],
    status: ServiceStatus.ACTIVE,
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
    priority: 7,
    featured: false,
    color: '#5d4037',
    tags: ['sentimientos', 'comentarios', 'insights', 'patrones'],
    status: ServiceStatus.ACTIVE,
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
    priority: 8,
    featured: true,
    color: '#2e7d32',
    tags: ['shopify', 'ecommerce', 'tienda', 'desarrollo'],
    status: ServiceStatus.ACTIVE,
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
    priority: 9,
    featured: false,
    color: '#e91e63',
    tags: ['midjourney', 'capacitación', 'imágenes', 'prompts'],
    status: ServiceStatus.ACTIVE,
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
    priority: 10,
    featured: false,
    color: '#673ab7',
    tags: ['chatgpt', 'gpts', 'prompts', 'productividad'],
    status: ServiceStatus.ACTIVE,
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
    priority: 11,
    featured: false,
    color: '#ff5722',
    tags: ['presencial', 'grupal', 'líderes', 'intensiva'],
    status: ServiceStatus.ACTIVE,
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
    priority: 12,
    featured: true,
    color: '#607d8b',
    tags: ['consultoría', 'continua', 'actualizaciones', 'soporte'],
    status: ServiceStatus.ACTIVE,
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
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