// Tokens de tipografía AI4U - Minimalista
export const TYPOGRAPHY_TOKENS = {
  // Familias de fuentes
  fontFamily: {
    primary: '"Red Hat Display", sans-serif',
    code: '"Necto Mono", monospace',
  },
  
  // Pesos de fuente (más ligeros para minimalismo)
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  
  // Tamaños de fuente (escala más dramática)
  fontSize: {
    xs: '0.875rem',   // 14px
    sm: '1rem',       // 16px
    base: '1.125rem', // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    '3xl': '3rem',    // 48px
    '4xl': '4rem',    // 64px
    '5xl': '5rem',    // 80px
    '6xl': '6rem',    // 96px
  },
  
  // Alturas de línea (más espaciadas)
  lineHeight: {
    tight: 1.2,
    snug: 1.4,
    normal: 1.6,
    relaxed: 1.8,
    loose: 2.2,
  },
  
  // Espaciado de letras (más amplio)
  letterSpacing: {
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0em',
    wide: '0.01em',
    wider: '0.02em',
    widest: '0.05em',
  },
} as const;

// Variantes de texto minimalistas
export const TEXT_VARIANTS = {
  // Títulos principales (más dramáticos)
  display: {
    large: {
      fontSize: { xs: '3rem', md: '4.5rem', lg: '6rem' },
      fontWeight: 300,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    medium: {
      fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    small: {
      fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
      fontWeight: 500,
      lineHeight: 1.3,
    },
  },
  
  // Texto de cuerpo (más espaciado)
  body: {
    large: {
      fontSize: { xs: '1.125rem', md: '1.25rem' },
      fontWeight: 400,
      lineHeight: 1.7,
    },
    regular: {
      fontSize: { xs: '1rem', md: '1.125rem' },
      fontWeight: 400,
      lineHeight: 1.6,
    },
    small: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  
  // Texto de interfaz
  ui: {
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0.01em',
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    code: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: '"Necto Mono", monospace',
    },
  },
} as const;

// Utilidades de tipografía para componentes
export const TYPOGRAPHY_UTILITIES = {
  // Clases de texto para uso directo
  text: {
    display: 'font-light leading-tight tracking-tight',
    heading: 'font-medium leading-snug',
    body: 'font-normal leading-relaxed',
    caption: 'font-normal text-sm leading-normal',
  },
  
  // Espaciado de texto
  spacing: {
    tight: 'space-y-2',
    normal: 'space-y-4',
    relaxed: 'space-y-6',
    loose: 'space-y-8',
  },
} as const;

export type TypographySize = keyof typeof TYPOGRAPHY_TOKENS.fontSize;
export type TypographyWeight = keyof typeof TYPOGRAPHY_TOKENS.fontWeight;
export type TypographyVariant = keyof typeof TEXT_VARIANTS;