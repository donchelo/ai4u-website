// Tokens de espaciado AI4U - Minimalista
export const SPACING_TOKENS = {
  // Espaciado base (8px)
  base: 8,
  
  // Escala de espaciado (más generosa)
  spacing: {
    0: 0,
    1: 8,     // 0.5rem
    2: 16,    // 1rem
    3: 24,    // 1.5rem
    4: 32,    // 2rem
    5: 40,    // 2.5rem
    6: 48,    // 3rem
    8: 64,    // 4rem
    10: 80,   // 5rem
    12: 96,   // 6rem
    16: 128,  // 8rem
    20: 160,  // 10rem
    24: 192,  // 12rem
    32: 256,  // 16rem
    40: 320,  // 20rem
    48: 384,  // 24rem
    56: 448,  // 28rem
    64: 512,  // 32rem
  },
  
  // Radios de borde (más sutiles)
  borderRadius: {
    none: 0,
    sm: 4,
    default: 8,
    md: 12,
    lg: 16,
    xl: 24,
    '2xl': 32,
    full: 9999,
  },
  
  // Anchos de borde (más finos)
  borderWidth: {
    0: 0,
    default: 1,
    2: 2,
  },
  
  // Tamaños de elementos (más espaciados)
  sizes: {
    // Iconos
    iconXs: 16,
    iconSm: 20,
    iconMd: 24,
    iconLg: 32,
    iconXl: 40,
    
    // Botones (más altos)
    buttonSm: 40,
    buttonMd: 48,
    buttonLg: 56,
    
    // Inputs (más altos)
    inputSm: 40,
    inputMd: 48,
    inputLg: 56,
    
    // Cards (más espaciadas)
    cardSm: 240,
    cardMd: 320,
    cardLg: 400,
  },
} as const;

// Utilidades de espaciado minimalistas
export const COMPONENT_SPACING = {
  // Espaciado interno de componentes (más generoso)
  padding: {
    button: {
      sm: `${SPACING_TOKENS.spacing[2]}px ${SPACING_TOKENS.spacing[3]}px`,
      md: `${SPACING_TOKENS.spacing[3]}px ${SPACING_TOKENS.spacing[4]}px`,
      lg: `${SPACING_TOKENS.spacing[4]}px ${SPACING_TOKENS.spacing[6]}px`,
    },
    card: {
      sm: SPACING_TOKENS.spacing[6],
      md: SPACING_TOKENS.spacing[8],
      lg: SPACING_TOKENS.spacing[12],
    },
    input: {
      sm: `${SPACING_TOKENS.spacing[2]}px ${SPACING_TOKENS.spacing[3]}px`,
      md: `${SPACING_TOKENS.spacing[3]}px ${SPACING_TOKENS.spacing[4]}px`,
      lg: `${SPACING_TOKENS.spacing[4]}px ${SPACING_TOKENS.spacing[5]}px`,
    },
  },
  
  // Márgenes (más generosos)
  margin: {
    section: SPACING_TOKENS.spacing[16],    // 8rem
    subsection: SPACING_TOKENS.spacing[12], // 6rem
    element: SPACING_TOKENS.spacing[6],     // 3rem
  },
  
  // Espaciado de layout
  layout: {
    container: {
      xs: SPACING_TOKENS.spacing[3],  // 1.5rem
      md: SPACING_TOKENS.spacing[6],  // 3rem
      lg: SPACING_TOKENS.spacing[8],  // 4rem
    },
    section: {
      xs: SPACING_TOKENS.spacing[12], // 6rem
      md: SPACING_TOKENS.spacing[16], // 8rem
      lg: SPACING_TOKENS.spacing[20], // 10rem
    },
  },
} as const;

export type SpacingSize = keyof typeof SPACING_TOKENS.spacing;