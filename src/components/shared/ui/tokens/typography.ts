// Tokens de tipografía AI4U
export const TYPOGRAPHY_TOKENS = {
  // Familias de fuentes
  fontFamily: {
    primary: '"Red Hat Display", sans-serif',
    code: '"Necto Mono", monospace',
  },
  
  // Pesos de fuente
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  
  // Tamaños de fuente (escala modular)
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '4rem',    // 64px
  },
  
  // Alturas de línea
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Espaciado de letras
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// Variantes de texto predefinidas
export const TEXT_VARIANTS = {
  h1: {
    fontSize: TYPOGRAPHY_TOKENS.fontSize['5xl'],
    fontWeight: TYPOGRAPHY_TOKENS.fontWeight.bold,
    lineHeight: TYPOGRAPHY_TOKENS.lineHeight.tight,
    letterSpacing: TYPOGRAPHY_TOKENS.letterSpacing.tight,
  },
  h2: {
    fontSize: TYPOGRAPHY_TOKENS.fontSize['4xl'],
    fontWeight: TYPOGRAPHY_TOKENS.fontWeight.bold,
    lineHeight: TYPOGRAPHY_TOKENS.lineHeight.tight,
    letterSpacing: TYPOGRAPHY_TOKENS.letterSpacing.tight,
  },
  h3: {
    fontSize: TYPOGRAPHY_TOKENS.fontSize['3xl'],
    fontWeight: TYPOGRAPHY_TOKENS.fontWeight.semiBold,
    lineHeight: TYPOGRAPHY_TOKENS.lineHeight.snug,
  },
  body1: {
    fontSize: TYPOGRAPHY_TOKENS.fontSize.base,
    fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
    lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
  },
  body2: {
    fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
    fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
    lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
  },
  caption: {
    fontSize: TYPOGRAPHY_TOKENS.fontSize.xs,
    fontWeight: TYPOGRAPHY_TOKENS.fontWeight.regular,
    lineHeight: TYPOGRAPHY_TOKENS.lineHeight.snug,    
  },
  code: {
    fontFamily: TYPOGRAPHY_TOKENS.fontFamily.code,
    fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
    fontWeight: TYPOGRAPHY_TOKENS.fontWeight.medium,
  },
} as const;

export type TypographyVariant = keyof typeof TEXT_VARIANTS;