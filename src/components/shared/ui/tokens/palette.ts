// Sistema de colores AI4U - Brand Manual
// Paleta principal: Erie black, mint cream, orange, moderate blue
export const AI4U_PALETTE = {
  // Colores base
  white: '#FFFFFF',
  black: '#1B1B1B',  // Eerie black
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
  
  // Colores de marca AI4U (Brand Manual)
  accentColors: {
    orange: '#ff6e00',      // orange (minimized)
    mint: '#D1FFDC',        // Virgil Mint (modern and clean)
    blue: '#3daed1',        
    cadetGray: '#94989b',   
  },

  // Compatibilidad hacia atrás
  accent: '#ff6e00' as const,
  
  // Estados funcionales
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
} as const;

// Sistema de contraste simplificado - Inversión Estricta
export const CONTRAST_PAIRS = {
  // Modo claro - Mint de fondo, Black de texto
  light: {
    background: AI4U_PALETTE.accentColors.mint,
    surface: AI4U_PALETTE.accentColors.mint,
    text: {
      primary: AI4U_PALETTE.black,
      secondary: AI4U_PALETTE.gray[700],
      disabled: AI4U_PALETTE.gray[400],
    },
    border: AI4U_PALETTE.black,
    divider: 'rgba(27, 27, 27, 0.1)',
  },
  
  // Modo oscuro - Black de fondo, Mint de texto
  dark: {
    background: AI4U_PALETTE.black,
    surface: AI4U_PALETTE.black,
    text: {
      primary: AI4U_PALETTE.accentColors.mint,
      secondary: AI4U_PALETTE.gray[400],
      disabled: AI4U_PALETTE.gray[600],
    },
    border: AI4U_PALETTE.accentColors.mint,
    divider: 'rgba(209, 255, 220, 0.2)',
  },
} as const;

// Presets de superficie para bloques de marca con colores fijos
export const SURFACE_PRESETS = {
  black: {
    background: AI4U_PALETTE.black,
    surface: AI4U_PALETTE.black,
    text: {
      primary: AI4U_PALETTE.accentColors.mint,
      secondary: AI4U_PALETTE.gray[400],
      disabled: AI4U_PALETTE.gray[600],
    },
    border: AI4U_PALETTE.accentColors.mint,
    divider: 'rgba(209, 255, 220, 0.1)',
    effectiveMode: 'dark' as const,
  },
  mint: {
    background: AI4U_PALETTE.accentColors.mint,
    surface: AI4U_PALETTE.accentColors.mint,
    text: {
      primary: AI4U_PALETTE.black,
      secondary: AI4U_PALETTE.gray[700],
      disabled: AI4U_PALETTE.gray[400],
    },
    border: AI4U_PALETTE.black,
    divider: 'rgba(0,0,0,0.06)',
    effectiveMode: 'light' as const,
  },
  green: {
    background: AI4U_PALETTE.accentColors.mint,
    surface: AI4U_PALETTE.accentColors.mint,
    text: {
      primary: AI4U_PALETTE.black,
      secondary: AI4U_PALETTE.gray[800],
      disabled: AI4U_PALETTE.gray[600],
    },
    border: 'none',
    divider: 'rgba(0,0,0,0.06)',
    effectiveMode: 'light' as const,
  },
  orange: {
    background: AI4U_PALETTE.accentColors.mint,
    surface: AI4U_PALETTE.accentColors.mint,
    text: {
      primary: AI4U_PALETTE.black,
      secondary: AI4U_PALETTE.gray[800],
      disabled: AI4U_PALETTE.gray[600],
    },
    border: 'none',
    divider: 'rgba(0,0,0,0.06)',
    effectiveMode: 'light' as const,
  },
} as const;

export type SurfaceType = 'theme' | keyof typeof SURFACE_PRESETS;

// Variantes de componentes simplificadas - Minimalista (sin naranja como primario)
export const COMPONENT_VARIANTS = {
  // Botones modernos - Sin bordes marcados
  button: {
    primary: {
      background: AI4U_PALETTE.black,
      text: AI4U_PALETTE.white,
      hover: AI4U_PALETTE.gray[900],
    },
    secondary: {
      background: AI4U_PALETTE.gray[100],
      text: AI4U_PALETTE.black,
      hover: AI4U_PALETTE.gray[200],
    },
    outline: {
      background: 'transparent',
      text: AI4U_PALETTE.black,
      border: AI4U_PALETTE.gray[300],
      hover: 'rgba(0,0,0,0.04)',
    },
    minimal: {
      background: 'transparent',
      text: AI4U_PALETTE.black,
      border: 'none',
      hover: AI4U_PALETTE.gray[100],
    },
  },
  
  // Cards modernas
  card: {
    light: {
      background: AI4U_PALETTE.white,
      text: AI4U_PALETTE.black,
      border: 'none',
    },
    dark: {
      background: AI4U_PALETTE.gray[900],
      text: AI4U_PALETTE.white,
      border: 'none',
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