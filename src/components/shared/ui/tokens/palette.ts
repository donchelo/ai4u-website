// Paleta de colores AI4U - Tokens de diseño
export const AI4U_PALETTE = {
  // Colores primarios
  neonBlaze: '#FF5C00',          // Más ácido, más intenso. Ideal para dark UI y botones activos
  // Colores secundarios
  digitalCoral: '#FF7477',       // Más limpio y vibrante. Ideal para dashboards humanos o wellness
  frostSignal: '#DFF7EB',        // Más frío y sintético. Ideal para fondos con estética futurista
  grapheneBlack: '#0A0A0A',      // Negro profundo, absoluto. Para interfaces con estética cyber
  quantumBlue: '#0D47A1',        // Azul más oscuro y saturado para mejor contraste con texto blanco
  // Colores de acento
  techSlate: '#7D848B',          // Gris técnico con tinte metálico. Para bordes, sliders, skeletons
  cyberOlive: '#B6CA40',         // Verde lima metálico. Para resaltar naturalezas en tecnología verde
  deepNeuralTeal: '#2B7A78',     // Más saturado, inspirado en UI de sistemas autónomos
  // Fondos optimizados para contraste
  lightBackground: '#FFFFFF',
  darkBackground: '#0A0A0A',
  lightPaper: '#F8F9FA',
  darkPaper: '#1A1A1A',
  // Nuevos colores para mejor contraste en dark theme
  darkTextPrimary: '#FFFFFF',    // Blanco puro para texto principal en dark
  darkTextSecondary: '#E0E0E0',  // Gris claro para texto secundario en dark
  darkTextDisabled: '#9E9E9E',   // Gris medio para texto deshabilitado en dark
  darkDivider: '#424242',        // Gris oscuro para divisores en dark
  darkSurface: '#121212',        // Superficie oscura para cards y elementos
  darkSurfaceHover: '#1E1E1E',   // Superficie oscura para hover states
  // Colores optimizados para accesibilidad (daltonismo)
  accessibleBlue: '#1E3A8A',      // Azul oscuro con mejor contraste para daltonicos
  accessibleGreen: '#059669',     // Verde oscuro para daltonicos
  accessibleRed: '#DC2626',       // Rojo oscuro para daltonicos
  accessibleYellow: '#D97706',    // Amarillo oscuro para daltonicos
  highContrastText: '#000000',    // Texto negro para máximo contraste
  highContrastBackground: '#FFFFFF', // Fondo blanco para máximo contraste
} as const;

// Colores derivados
export const PALETTE_VARIANTS = {
  neonBlaze: {
    light: '#FF7C33',
    main: AI4U_PALETTE.neonBlaze,
    dark: '#E54A00',
  },
  quantumBlue: {
    light: '#1976D2', 
    main: AI4U_PALETTE.quantumBlue,
    dark: '#0D47A1',
  },
  digitalCoral: {
    light: '#FF9499',
    main: AI4U_PALETTE.digitalCoral,
    dark: '#FF5458',
  },
} as const;

export type PaletteColor = keyof typeof AI4U_PALETTE;
export type PaletteVariant = keyof typeof PALETTE_VARIANTS;