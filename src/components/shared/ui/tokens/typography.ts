// Tokens de tipografía AI4U - Radical Industrial (Inspired by Abloh)
export const TYPOGRAPHY_TOKENS = {
  // Familias de fuentes
  fontFamily: {
    primary: '"Red Hat Display", sans-serif',
    code: '"Necto Mono", monospace',
  },
  
  // Pesos de fuente - Bold & Minimal
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 700,
    bold: 900, // Extra bold for impact
  },
  
  // Tamaños de fuente - Dramatic Scale
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.25rem',     // 20px
    xl: '1.5rem',      // 24px
    '2xl': '2.25rem',  // 36px
    '3xl': '3.5rem',   // 56px
    '4xl': '5rem',     // 80px
    '5xl': '7rem',     // 112px
    '6xl': '9rem',     // 144px
    '7xl': '11rem',    // 176px
  },
  
  // Alturas de línea - Functional
  lineHeight: {
    tight: 0.9,
    snug: 1.1,
    normal: 1.5,
    relaxed: 1.8,
  },
  
  // Espaciado de letras - Aggressive
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.02em',
    normal: '0em',
    wide: '0.05em',
    wider: '0.1em',
    widest: '0.2em',
  },
} as const;

// Variantes de texto Industrial/Abloh
export const TEXT_VARIANTS = {
  // Títulos "DECONSTRUCTED"
  display: {
    giant: {
      fontSize: { xs: '3rem', md: '7rem', lg: '10rem' },
      fontWeight: 900,
      lineHeight: 0.85,
      letterSpacing: '-0.05em',
    },
    large: {
      fontSize: { xs: '2.5rem', md: '5rem', lg: '7rem' },
      fontWeight: 700,
      lineHeight: 0.9,
      letterSpacing: '-0.04em',
    },
    medium: {
      fontSize: { xs: '2rem', md: '3.5rem', lg: '5rem' },
      fontWeight: 700,
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
    },
    number: {
      fontSize: { xs: '5rem', md: '12rem', lg: '18rem' },
      fontWeight: 900,
      lineHeight: 0.8,
      letterSpacing: '-0.06em',
      fontFamily: TYPOGRAPHY_TOKENS.fontFamily.code, // Monospace for numbers
    },
  },
  
  // Etiquetas industriales (Abloh Signature)
  label: {
    main: {
      fontFamily: TYPOGRAPHY_TOKENS.fontFamily.code,
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '0.1em',
      opacity: 0.8,
    },
    secondary: {
      fontFamily: TYPOGRAPHY_TOKENS.fontFamily.code,
      fontSize: '0.75rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
      textTransform: 'lowercase' as const,
      opacity: 0.6,
    },
  },

  // Texto de cuerpo
  body: {
    regular: {
      fontSize: { xs: '1rem', md: '1.125rem' },
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '-0.01em',
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
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '0.15em',
    },
    caption: {
      fontSize: TYPOGRAPHY_TOKENS.fontSize.xs,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    code: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: TYPOGRAPHY_TOKENS.fontFamily.code,
    },
  },
} as const;

// Utilidades de tipografía para componentes
export const TYPOGRAPHY_UTILITIES = {
  // Clases de texto para uso directo
  text: {
    display: 'font-black leading-none tracking-tighter',
    heading: 'font-bold leading-tight',
    body: 'font-normal leading-relaxed',
    label: 'font-mono text-sm leading-normal tracking-widest',
  },
} as const;

export type TypographySize = keyof typeof TYPOGRAPHY_TOKENS.fontSize;
export type TypographyWeight = keyof typeof TYPOGRAPHY_TOKENS.fontWeight;
export type TypographyVariant = keyof typeof TEXT_VARIANTS;