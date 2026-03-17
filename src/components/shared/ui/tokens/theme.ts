// Configuración principal del tema AI4U - Industrial / Brutalist
import { AI4U_PALETTE, CONTRAST_PAIRS } from './palette';
import { TYPOGRAPHY_TOKENS, TEXT_VARIANTS } from './typography';
import { SPACING_TOKENS } from './spacing';

// Configuración de sombras - "Hard" & Industrial
export const SHADOW_TOKENS = {
  none: '0 0 #0000',
  // Sombras duras estilo brutalista
  sm: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
  default: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
  md: '8px 8px 0px 0px rgba(0, 0, 0, 1)',
  lg: '12px 12px 0px 0px rgba(0, 0, 0, 1)',
  
  // Variantes para modo oscuro (sombras blancas)
  dark: {
    sm: '2px 2px 0px 0px rgba(255, 255, 255, 1)',
    default: '4px 4px 0px 0px rgba(255, 255, 255, 1)',
    md: '8px 8px 0px 0px rgba(255, 255, 255, 1)',
  },

  ai4u: {
    card: '0px 0px 0px 1px rgba(0,0,0,1)', // Solo borde como sombra
    button: '4px 4px 0px 0px rgba(0,0,0,1)',
    glow: '0 0 40px rgba(224, 255, 0, 0.3)', // Glow volt
  },
} as const;

// Configuración de bordes - Industrial
export const BORDER_TOKENS = {
  width: {
    none: '0',
    thin: '1px',
    medium: '2px',
    thick: '4px',
  },
  radius: {
    none: '0px', // Radical sharp edges
    sm: '0px',
    md: '0px',
    lg: '0px',
    full: '9999px', // Solo para elementos circulares específicos
  },
} as const;

// Configuración de z-index
export const Z_INDEX_TOKENS = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

// Configuración de transiciones - Snappy
export const TRANSITION_TOKENS = {
  duration: {
    fast: '100ms',
    normal: '200ms',
    slow: '400ms',
  },
  easing: {
    linear: 'linear',
    step: 'steps(4, end)', // Industrial step feel
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Breakpoints
export const BREAKPOINT_TOKENS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
} as const;

// Tema completo de tokens
export const AI4U_DESIGN_TOKENS = {
  palette: AI4U_PALETTE,
  contrast: CONTRAST_PAIRS,
  typography: TYPOGRAPHY_TOKENS,
  textVariants: TEXT_VARIANTS,
  spacing: SPACING_TOKENS,
  shadows: SHADOW_TOKENS,
  borders: BORDER_TOKENS,
  zIndex: Z_INDEX_TOKENS,
  transitions: TRANSITION_TOKENS,
  breakpoints: BREAKPOINT_TOKENS,
} as const;

// Tema para modo claro/oscuro
export const createAI4UTokens = (mode: 'light' | 'dark') => ({
  ...AI4U_DESIGN_TOKENS,
  colors: {
    mode,
    primary: {
      main: AI4U_PALETTE.black,
      contrastText: AI4U_PALETTE.white,
    },
    background: {
      default: CONTRAST_PAIRS[mode].background,
      paper: CONTRAST_PAIRS[mode].surface,
    },
    text: {
      primary: CONTRAST_PAIRS[mode].text.primary,
      secondary: CONTRAST_PAIRS[mode].text.secondary,
      disabled: CONTRAST_PAIRS[mode].text.disabled,
    },
    divider: CONTRAST_PAIRS[mode].divider,
    border: CONTRAST_PAIRS[mode].border,
  },
  // Helpers para acceso rápido
  helpers: {
    border: {
      primary: CONTRAST_PAIRS[mode].border,
      secondary: CONTRAST_PAIRS[mode].divider,
    },
    background: {
      primary: CONTRAST_PAIRS[mode].background,
      secondary: mode === 'light' ? AI4U_PALETTE.gray[50] : AI4U_PALETTE.gray[900],
    },
    text: {
      primary: CONTRAST_PAIRS[mode].text.primary,
      secondary: CONTRAST_PAIRS[mode].text.secondary,
    }
  }
});

export default AI4U_DESIGN_TOKENS;