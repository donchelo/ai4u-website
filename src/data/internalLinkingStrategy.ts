// Estrategia de link building interno para SEO
// Mapeo semántico de enlaces contextuales entre páginas

export interface InternalLink {
  to: string;
  label: string;
  context?: string;
  trackingLabel?: string;
  priority: 'high' | 'medium' | 'low';
  semantic: 'related' | 'progression' | 'evidence' | 'cross-sell';
}

export interface ServiceCrossReference {
  serviceSlug: string;
  serviceName: string;
  description: string;
  relatedCases: {
    client: string;
    sector: string;
    slug: string;
  }[];
  relatedServices: string[];
}

// Mapeo principal de enlaces internos por página
export const INTERNAL_LINKS_MAP: Record<string, InternalLink[]> = {
  // Home (/) - Hub Principal
  '/': [
    {
      to: '/servicios',
      label: 'Conoce nuestros servicios',
      context: 'Descubre cómo podemos automatizar tu empresa',
      trackingLabel: 'home_to_services',
      priority: 'high',
      semantic: 'progression'
    },
    {
      to: '/casos-de-uso',
      label: 'Ver casos reales',
      context: 'Empresas que ya transformaron sus procesos',
      trackingLabel: 'home_to_cases',
      priority: 'high',
      semantic: 'evidence'
    },
    {
      to: '/por-que-ai4u',
      label: 'Nuestro diferencial',
      context: 'Por qué elegir AI4U para tu transformación',
      trackingLabel: 'home_to_why',
      priority: 'medium',
      semantic: 'related'
    }
  ],

  // Servicios (/servicios) - Conversion Focus
  '/servicios': [
    {
      to: '/casos-de-uso',
      label: 'Ver resultados reales',
      context: 'Casos de éxito con estos servicios',
      trackingLabel: 'services_to_cases',
      priority: 'high',
      semantic: 'evidence'
    },
    {
      to: '/por-que-ai4u',
      label: '¿Por qué elegir AI4U?',
      context: 'Nuestras ventajas competitivas',
      trackingLabel: 'services_to_why',
      priority: 'medium',
      semantic: 'related'
    },
    {
      to: '/',
      label: 'Volver al inicio',
      context: 'Conoce más sobre nuestra filosofía',
      trackingLabel: 'services_to_home',
      priority: 'low',
      semantic: 'related'
    }
  ],

  // Casos de Uso (/casos-de-uso) - Social Proof
  '/casos-de-uso': [
    {
      to: '/servicios',
      label: 'Servicios utilizados',
      context: 'Conoce los servicios detrás de estos resultados',
      trackingLabel: 'cases_to_services',
      priority: 'high',
      semantic: 'cross-sell'
    },
    {
      to: '/por-que-ai4u',
      label: 'Tu empresa podría ser la siguiente',
      context: 'Descubre por qué estos clientes eligieron AI4U',
      trackingLabel: 'cases_to_why',
      priority: 'medium',
      semantic: 'progression'
    },
    {
      to: '/',
      label: 'Comenzar tu transformación',
      context: 'Inicia tu proceso de automatización',
      trackingLabel: 'cases_to_home',
      priority: 'medium',
      semantic: 'progression'
    }
  ],

  // Por qué AI4U (/por-que-ai4u) - Differentiation
  '/por-que-ai4u': [
    {
      to: '/casos-de-uso',
      label: 'Resultados comprobables',
      context: 'Ve la evidencia de nuestras ventajas',
      trackingLabel: 'why_to_cases',
      priority: 'high',
      semantic: 'evidence'
    },
    {
      to: '/servicios',
      label: 'Nuestros servicios',
      context: 'Conoce qué ofrecemos exactamente',
      trackingLabel: 'why_to_services',
      priority: 'high',
      semantic: 'progression'
    },
    {
      to: '/',
      label: 'Agendar diagnóstico',
      context: 'Comienza tu proceso de transformación',
      trackingLabel: 'why_to_home',
      priority: 'medium',
      semantic: 'progression'
    }
  ]
};

// Servicios y sus casos relacionados
export const SERVICE_CROSS_REFERENCES: Record<string, ServiceCrossReference> = {
  'superai-empresarial': {
    serviceSlug: 'superai-empresarial',
    serviceName: 'SuperAI Empresarial',
    description: 'Arquitectura integral de IA que transforma recursos operativos en ventaja estratégica',
    relatedCases: [
      { client: 'TRUE', sector: 'Fashion', slug: 'fashion' },
      { client: 'HUA Naturals', sector: 'Wellness', slug: 'wellness' }
    ],
    relatedServices: ['gpt-personalizado', 'automatizacion-inteligente']
  },
  'gpt-personalizado': {
    serviceSlug: 'gpt-personalizado',
    serviceName: 'GPT Personalizado',
    description: 'Modelos de lenguaje entrenados específicamente para tu industria y procesos',
    relatedCases: [
      { client: 'EAFIT', sector: 'Educación Superior', slug: 'educacion-superior' },
      { client: 'HUA Naturals', sector: 'Wellness', slug: 'wellness' }
    ],
    relatedServices: ['superai-empresarial', 'chatbots-avanzados']
  },
  'automatizacion-inteligente': {
    serviceSlug: 'automatizacion-inteligente',
    serviceName: 'Automatización Inteligente',
    description: 'Procesos automatizados que se adaptan y aprenden de tu operación',
    relatedCases: [
      { client: 'La Magdalena', sector: 'Impact Storytelling', slug: 'impact-storytelling' },
      { client: 'TRUE', sector: 'Fashion', slug: 'fashion' }
    ],
    relatedServices: ['superai-empresarial', 'machine-learning']
  },
  'chatbots-avanzados': {
    serviceSlug: 'chatbots-avanzados',
    serviceName: 'Chatbots Avanzados',
    description: 'Asistentes conversacionales que entienden contexto y generan valor real',
    relatedCases: [
      { client: 'HUA Naturals', sector: 'Wellness', slug: 'wellness' }
    ],
    relatedServices: ['gpt-personalizado', 'automatizacion-inteligente']
  }
};

// Enlaces contextuales específicos por sección
export const CONTEXTUAL_CTA_LINKS = {
  heroSection: {
    primary: { to: '/servicios', label: 'Conoce nuestros servicios' },
    secondary: { to: '/casos-de-uso', label: 'Ver casos reales' }
  },
  featuresSection: {
    automation: { to: '/servicios#automatizacion-inteligente', label: 'Automatización Inteligente' },
    ai: { to: '/servicios#superai-empresarial', label: 'SuperAI Empresarial' },
    personalization: { to: '/servicios#gpt-personalizado', label: 'GPT Personalizado' }
  },
  socialProof: {
    cases: { to: '/casos-de-uso', label: 'Ver todos los casos' },
    why: { to: '/por-que-ai4u', label: '¿Por qué nos eligen?' }
  }
};

// Función para obtener enlaces relacionados por página
export const getRelatedLinks = (currentPath: string): InternalLink[] => {
  return INTERNAL_LINKS_MAP[currentPath] || [];
};

// Función para obtener referencias cruzadas de servicios
export const getServiceCrossReference = (serviceSlug: string): ServiceCrossReference | null => {
  return SERVICE_CROSS_REFERENCES[serviceSlug] || null;
};

// Función para generar enlaces contextuales basados en contenido
export const generateContextualLinks = (
  currentPage: string, 
  contentContext: string[]
): InternalLink[] => {
  const baseLinks = getRelatedLinks(currentPage);
  
  // Filtrar y priorizar basado en contexto
  return baseLinks
    .filter(link => 
      contentContext.some(context => 
        link.semantic === context || 
        link.trackingLabel?.includes(context)
      )
    )
    .slice(0, 3); // Máximo 3 enlaces para mantener minimalismo
};