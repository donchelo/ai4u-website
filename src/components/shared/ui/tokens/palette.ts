// Sistema de colores AI4U - Minimalista
// Paleta principal: blanco, negro y gris (sin naranja como primario)
export const AI4U_PALETTE = {
  // Colores base (paleta minimalista)
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
  
  // Acentos mínimos (solo para casos excepcionales)
  // El naranja ya no es el color primario - usar solo cuando sea absolutamente necesario
  accentColors: {
    // Mantener disponible pero no como primario
    orange: '#FF5C00',  // Uso mínimo - solo para casos excepcionales
    green: '#B6CA40',   // Uso mínimo - solo para casos excepcionales
  },
  
  // Compatibilidad hacia atrás: mantener accent como string para componentes existentes
  // NOTA: Este es un valor legacy. Nuevos componentes NO deben usar esto.
  // Usar accentColors.orange o accentColors.green explícitamente, o mejor aún, usar la paleta minimalista
  accent: '#FF5C00' as const,
  
  // Estados funcionales
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
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

// Presets de superficie para bloques de marca con colores fijos
export const SURFACE_PRESETS = {
  black: {
    background: AI4U_PALETTE.black,
    text: {
      primary: AI4U_PALETTE.white,
      secondary: AI4U_PALETTE.gray[300],
      disabled: AI4U_PALETTE.gray[500],
    },
    border: AI4U_PALETTE.white,
    divider: AI4U_PALETTE.gray[800],
    effectiveMode: 'dark' as const,
  },
  green: {
    background: AI4U_PALETTE.accentColors.green,
    text: {
      primary: AI4U_PALETTE.black,
      secondary: AI4U_PALETTE.gray[800],
      disabled: AI4U_PALETTE.gray[600],
    },
    border: AI4U_PALETTE.black,
    divider: 'rgba(0,0,0,0.1)',
    effectiveMode: 'light' as const,
  },
  orange: {
    background: AI4U_PALETTE.accentColors.orange,
    text: {
      primary: AI4U_PALETTE.black,
      secondary: AI4U_PALETTE.gray[800],
      disabled: AI4U_PALETTE.gray[600],
    },
    border: AI4U_PALETTE.black,
    divider: 'rgba(0,0,0,0.1)',
    effectiveMode: 'light' as const,
  },
} as const;

export type SurfaceType = 'theme' | keyof typeof SURFACE_PRESETS;

// Variantes de componentes simplificadas - Minimalista (sin naranja como primario)
export const COMPONENT_VARIANTS = {
  // Botones minimalistas - Usar gris/negro como primario
  button: {
    primary: {
      // Primario ahora es negro/gris oscuro (no naranja)
      background: AI4U_PALETTE.black,
      text: AI4U_PALETTE.white,
      hover: AI4U_PALETTE.gray[800],
    },
    secondary: {
      background: AI4U_PALETTE.gray[100],
      text: AI4U_PALETTE.black,
      hover: AI4U_PALETTE.gray[200],
    },
    outline: {
      // Outline usa borde negro/gris (no naranja)
      background: 'transparent',
      text: AI4U_PALETTE.black,
      border: AI4U_PALETTE.gray[400],
      hover: AI4U_PALETTE.gray[50],
    },
    // Variante minimalista adicional
    minimal: {
      background: 'transparent',
      text: AI4U_PALETTE.black,
      border: 'none',
      hover: AI4U_PALETTE.gray[100],
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