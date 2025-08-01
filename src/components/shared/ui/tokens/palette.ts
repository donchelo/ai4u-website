// Sistema de colores AI4U - Unificado y con garantías de contraste
export const AI4U_PALETTE = {
  // Colores base (solo estos se usan directamente)
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5', 
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  
  // Colores de marca (acentos limitados)
  orange: '#FF5C00',
  green: '#B6CA40',
  
  // Colores semánticos (para estados)
  error: '#DC2626',
  success: '#059669', 
  warning: '#D97706',
  info: '#1E3A8A',
  
  // Colores de contraste garantizado
  contrast: {
    light: {
      text: '#000000',
      background: '#FFFFFF',
    },
    dark: {
      text: '#FFFFFF',
      background: '#000000',
    },
  },
} as const;

// Sistema de contraste automático
export const CONTRAST_PAIRS = {
  // Fondos claros → Texto oscuro
  light: {
    background: AI4U_PALETTE.white,
    surface: AI4U_PALETTE.gray[50],
    text: {
      primary: AI4U_PALETTE.black,
      secondary: AI4U_PALETTE.gray[700],
      disabled: AI4U_PALETTE.gray[500],
    },
    border: AI4U_PALETTE.gray[200],
    divider: AI4U_PALETTE.gray[300],
  },
  
  // Fondos oscuros → Texto claro  
  dark: {
    background: AI4U_PALETTE.black,
    surface: AI4U_PALETTE.gray[900],
    text: {
      primary: AI4U_PALETTE.white,
      secondary: AI4U_PALETTE.gray[100],
      disabled: AI4U_PALETTE.gray[500],
    },
    border: AI4U_PALETTE.gray[800],
    divider: AI4U_PALETTE.gray[700],
  },
} as const;

// Variantes de componentes con contraste garantizado
export const COMPONENT_VARIANTS = {
  // Botones
  button: {
    primary: {
      background: AI4U_PALETTE.orange,
      text: AI4U_PALETTE.white,
      hover: '#E54A00',
    },
    secondary: {
      background: AI4U_PALETTE.gray[200],
      text: AI4U_PALETTE.black,
      hover: AI4U_PALETTE.gray[300],
    },
    outline: {
      background: 'transparent',
      text: AI4U_PALETTE.orange,
      border: AI4U_PALETTE.orange,
      hover: AI4U_PALETTE.gray[50],
    },
  },
  
  // Cards
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
    accent: {
      background: AI4U_PALETTE.orange,
      text: AI4U_PALETTE.white,
      border: AI4U_PALETTE.orange,
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