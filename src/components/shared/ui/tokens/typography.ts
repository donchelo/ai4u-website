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
    semiBold: 500,
    bold: 500,
  },
  
  // Tamaños de fuente (escala más dramática para estilo moderno/brutalista)
  fontSize: {
    xs: '0.875rem',    // 14px
    sm: '1rem',        // 16px
    base: '1.25rem',   // 20px (aumentado)
    lg: '1.5rem',      // 24px
    xl: '2rem',        // 32px
    '2xl': '3rem',     // 48px
    '3xl': '4.5rem',   // 72px
    '4xl': '6rem',     // 96px
    '5xl': '8rem',     // 128px
    '6xl': '10rem',    // 160px
    '7xl': '12rem',    // 192px (gigante)
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

// Variantes de texto minimalistas/brutalistas
export const TEXT_VARIANTS = {
  // Títulos principales (gigantes y dramáticos pero legibles en PC)
  display: {
    giant: {
      fontSize: { xs: '3.5rem', md: '6rem', lg: '9rem' }, // Reducido de 12rem
      fontWeight: 500,
      lineHeight: 0.95,
      letterSpacing: '-0.04em',
      textTransform: 'none' as const,
    },
    large: {
      fontSize: { xs: '2.5rem', md: '4.5rem', lg: '6.5rem' }, // Reducido de 8rem
      fontWeight: 500,
      lineHeight: 1.0,
      letterSpacing: '-0.03em',
    },
    medium: {
      fontSize: { xs: '2rem', md: '3.5rem', lg: '4.5rem' }, // Reducido de 5rem
      fontWeight: 500,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    small: {
      fontSize: { xs: '1.75rem', md: '2.25rem', lg: '2.75rem' }, // Reducido de 3rem
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
  },
  
  // Texto de cuerpo (espacioso y moderno)
  body: {
    large: {
      fontSize: { xs: '1.25rem', md: '1.5rem' },
      fontWeight: 400,
      lineHeight: 1.8,
      letterSpacing: '-0.01em',
    },
    regular: {
      fontSize: { xs: '1.125rem', md: '1.25rem' },
      fontWeight: 400,
      lineHeight: 1.7,
    },
    small: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },
  
  // Texto de interfaz
  ui: {
    button: {
      fontSize: '1rem',
      fontWeight: 500,
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
      fontWeight: 400,
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