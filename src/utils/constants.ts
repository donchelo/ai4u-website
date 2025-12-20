// Rutas de la aplicación
export const ROUTES = {
  HOME: '/',
  SERVICES: '/servicios',
  WHY_AI4U: '/por-que-ai4u',
  SUCCESS_CASES: '/casos-de-uso',
  TIENDA_AI: '/tienda-ai',
  GALLERY: '/Gallery'
} as const;

// Configuración de la aplicación
export const APP_CONFIG = {
  NAME: 'AI4U',
  DESCRIPTION: 'Construimos tu infraestructura de IA personalizada',
  CONTACT: {
    EMAIL: 'contacto@ai4u.com.co',
    PHONE: '+57 321 817 5744',
    CALENDLY: 'calendly.com/mgarciap333/ai4u-automatizacion-inteligente'
  },
  SOCIAL: {
    LINKEDIN: 'https://linkedin.com/company/ai4u',
    TWITTER: 'https://twitter.com/ai4u_co',
    INSTAGRAM: 'https://instagram.com/ai4u_co'
  }
} as const;

// Configuración de servicios
export const SERVICE_CONFIG = {
  DIAGNOSTIC_DURATION: 30, // minutos
  MAX_FEATURED_SERVICES: 6,
  CARDS_PER_ROW: {
    MOBILE: 1,
    TABLET: 2,
    DESKTOP: 3
  }
} as const;

// Colores de la marca
export const BRAND_COLORS = {
  PRIMARY: '#FF4500', // Orange
  SECONDARY: '#5B92E5', // Blue
  SUCCESS: '#4CAF50',
  WARNING: '#FF9800',
  ERROR: '#F44336',
  INFO: '#2196F3'
} as const;

// Breakpoints para responsive design
export const BREAKPOINTS = {
  MOBILE: 600,
  TABLET: 960,
  DESKTOP: 1280
} as const; 