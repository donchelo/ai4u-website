// Configuración principal del tema AI4U
import { AI4U_PALETTE, CONTRAST_PAIRS, COMPONENT_VARIANTS } from './palette';
import { TYPOGRAPHY_TOKENS, TEXT_VARIANTS } from './typography';
import { SPACING_TOKENS } from './spacing';

// Configuración de sombras
export const SHADOW_TOKENS = {
  none: '0 0 #0000',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  
  // Sombras AI4U específicas - Modernas y suaves
  ai4u: {
    card: '0 4px 20px rgba(0,0,0,0.06)',
    cardDark: '0 8px 30px rgba(0,0,0,0.3)',
    button: '0 4px 12px rgba(0, 0, 0, 0.08)',
    glow: '0 0 20px rgba(0, 0, 0, 0.05)',
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

// Configuración de transiciones
export const TRANSITION_TOKENS = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear',
  },
  
  // Transiciones comunes
  common: {
    button: 'all 200ms ease-in-out',
    card: 'all 300ms ease',
    hover: 'all 150ms ease-out',
  },
} as const;

// Breakpoints para responsive design
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
  components: COMPONENT_VARIANTS,
  typography: TYPOGRAPHY_TOKENS,
  textVariants: TEXT_VARIANTS,
  spacing: SPACING_TOKENS,
  shadows: SHADOW_TOKENS,
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
      // Primario ahora es negro (no naranja)
      main: AI4U_PALETTE.black,
      light: AI4U_PALETTE.gray[700],
      dark: AI4U_PALETTE.black,
    },
    secondary: {
      main: AI4U_PALETTE.gray[600],
      light: AI4U_PALETTE.gray[400],
      dark: AI4U_PALETTE.gray[800],
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
    surface: {
      default: CONTRAST_PAIRS[mode].surface,
      hover: mode === 'light' ? '#F0F0F0' : '#1E1E1E',
      paper: CONTRAST_PAIRS[mode].surface,
    },
  },
});

export default AI4U_DESIGN_TOKENS;