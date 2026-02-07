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
    thick: 4,
    heavy: 6,
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
  // Espaciado interno de componentes (más generoso) - UNIDADES MUI (x8px)
  padding: {
    button: {
      sm: '1.25 2.5', // Aproximado para usar con theme.spacing
      md: '1.5 3',
      lg: '2 4',
    },
    card: {
      sm: 6,
      md: 8,
      lg: 12,
    },
    input: {
      sm: '1.25 2',
      md: '1.5 2.5',
      lg: '2 3',
    },
  },
  
  // Márgenes (más generosos) - UNIDADES MUI (x8px)
  margin: {
    section: 12,    // 96px
    subsection: 8,  // 64px
    element: 4,     // 32px
  },
  
  // Espaciado de layout - valores RESPONSIVOS para usar directamente en sx
  layout: {
    container: {
      xs: 2,  // 16px en móvil
      sm: 3,  // 24px en tablet
      md: 4,  // 32px en desktop pequeño
      lg: 6,  // 48px en desktop grande
    },
    section: {
      xs: 6,  // 48px en móvil
      sm: 8,  // 64px en tablet
      md: 10, // 80px en desktop
      lg: 12, // 96px en desktop grande
    },
  },
} as const;

export type SpacingSize = keyof typeof SPACING_TOKENS.spacing;