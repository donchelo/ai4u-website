// Sistema de colores AI4U - Minimalista
export const AI4U_PALETTE = {
  // Colores base (solo 3 colores esenciales)
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Solo 1 acento (naranja AI4U)
  accent: '#FF5C00',
  
  // Estados mínimos
  success: '#10B981',
  error: '#EF4444',
} as const;

// Sistema de contraste simplificado
export const CONTRAST_PAIRS = {
  // Modo claro - Texto oscuro sobre fondo claro
  light: {
    background: AI4U_PALETTE.white,
    surface: AI4U_PALETTE.gray[50],
    text: {
      primary: AI4U_PALETTE.black,
      secondary: AI4U_PALETTE.gray[600],
      disabled: AI4U_PALETTE.gray[400],
    },
    border: AI4U_PALETTE.gray[200],
    divider: AI4U_PALETTE.gray[300],
  },
  
  // Modo oscuro - Texto claro sobre fondo oscuro
  dark: {
    background: AI4U_PALETTE.black,
    surface: AI4U_PALETTE.gray[900],
    text: {
      primary: AI4U_PALETTE.white,
      secondary: AI4U_PALETTE.gray[300],
      disabled: AI4U_PALETTE.gray[500],
    },
    border: AI4U_PALETTE.gray[800],
    divider: AI4U_PALETTE.gray[700],
  },
} as const;

// Variantes de componentes simplificadas
export const COMPONENT_VARIANTS = {
  // Botones minimalistas
  button: {
    primary: {
      background: AI4U_PALETTE.accent,
      text: AI4U_PALETTE.white,
      hover: '#E54A00',
    },
    secondary: {
      background: AI4U_PALETTE.gray[100],
      text: AI4U_PALETTE.black,
      hover: AI4U_PALETTE.gray[200],
    },
    outline: {
      background: 'transparent',
      text: AI4U_PALETTE.accent,
      border: AI4U_PALETTE.accent,
      hover: AI4U_PALETTE.gray[50],
    },
  },
  
  // Cards minimalistas
  card: {
    light: {
      background: AI4U_PALETTE.white,
      text: AI4U_PALETTE.black,
      border: AI4U_PALETTE.gray[200],
    },
    dark: {
      background: AI4U_PALETTE.gray[900],
      text: AI4U_PALETTE.white,
      border: AI4U_PALETTE.gray[800],
    },
  },
} as const;

// Hook para obtener colores con contraste automático
export const useContrastColors = (mode: 'light' | 'dark') => {
  return CONTRAST_PAIRS[mode];
};

// Hook para obtener variantes de componentes
export const useComponentColors = (mode: 'light' | 'dark') => {
  const contrast = useContrastColors(mode);
  
  return {
    ...contrast,
    components: {
      button: {
        ...COMPONENT_VARIANTS.button,
        // Ajustar botones secundarios según el modo
        secondary: mode === 'light' 
          ? COMPONENT_VARIANTS.button.secondary
          : {
              background: AI4U_PALETTE.gray[800],
              text: AI4U_PALETTE.white,
              hover: AI4U_PALETTE.gray[700],
            },
      },
      card: {
        ...COMPONENT_VARIANTS.card,
        default: mode === 'light' 
          ? COMPONENT_VARIANTS.card.light
          : COMPONENT_VARIANTS.card.dark,
      },
    },
  };
};

export type PaletteColor = keyof typeof AI4U_PALETTE;
export type ContrastMode = keyof typeof CONTRAST_PAIRS;