// Tokens de espaciado AI4U
export const SPACING_TOKENS = {
  // Espaciado base (8px)
  base: 8,
  
  // Escala de espaciado
  spacing: {
    0: 0,
    1: 4,    // 0.25rem
    2: 8,    // 0.5rem  
    3: 12,   // 0.75rem
    4: 16,   // 1rem
    5: 20,   // 1.25rem
    6: 24,   // 1.5rem
    8: 32,   // 2rem
    10: 40,  // 2.5rem
    12: 48,  // 3rem
    16: 64,  // 4rem
    20: 80,  // 5rem
    24: 96,  // 6rem
    32: 128, // 8rem
    40: 160, // 10rem
    48: 192, // 12rem
    56: 224, // 14rem
    64: 256, // 16rem
  },
  
  // Radios de borde
  borderRadius: {
    none: 0,
    sm: 2,
    default: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 24,
    full: 9999,
  },
  
  // Anchos de borde
  borderWidth: {
    0: 0,
    default: 1,
    2: 2,
    4: 4,
    8: 8,
  },
  
  // Tamaños de elementos comunes
  sizes: {
    // Iconos
    iconXs: 16,
    iconSm: 20,
    iconMd: 24,
    iconLg: 32,
    iconXl: 40,
    
    // Botones
    buttonSm: 32,
    buttonMd: 40,
    buttonLg: 48,
    
    // Inputs
    inputSm: 32,
    inputMd: 40,
    inputLg: 48,
    
    // Cards
    cardSm: 200,
    cardMd: 300,
    cardLg: 400,
  },
} as const;

// Utilidades de espaciado para componentes
export const COMPONENT_SPACING = {
  // Espaciado interno de componentes
  padding: {
    button: {
      sm: `${SPACING_TOKENS.spacing[2]}px ${SPACING_TOKENS.spacing[3]}px`,
      md: `${SPACING_TOKENS.spacing[3]}px ${SPACING_TOKENS.spacing[4]}px`,
      lg: `${SPACING_TOKENS.spacing[4]}px ${SPACING_TOKENS.spacing[6]}px`,
    },
    card: {
      sm: SPACING_TOKENS.spacing[4],
      md: SPACING_TOKENS.spacing[6],
      lg: SPACING_TOKENS.spacing[8],
    },
    input: {
      sm: `${SPACING_TOKENS.spacing[2]}px ${SPACING_TOKENS.spacing[3]}px`,
      md: `${SPACING_TOKENS.spacing[3]}px ${SPACING_TOKENS.spacing[4]}px`,
      lg: `${SPACING_TOKENS.spacing[4]}px ${SPACING_TOKENS.spacing[5]}px`,
    },
  },
  
  // Márgenes comunes
  margin: {
    section: SPACING_TOKENS.spacing[12],
    subsection: SPACING_TOKENS.spacing[8],
    element: SPACING_TOKENS.spacing[4],
  },
} as const;

export type SpacingSize = keyof typeof SPACING_TOKENS.spacing;
export type BorderRadius = keyof typeof SPACING_TOKENS.borderRadius;