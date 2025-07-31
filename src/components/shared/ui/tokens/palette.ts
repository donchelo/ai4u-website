// Paleta de colores AI4U - Tokens de diseño
export const AI4U_PALETTE = {
  // Colores primarios
  neonBlaze: '#FF5C00',          // Más ácido, más intenso. Ideal para dark UI y botones activos
  // Colores secundarios
  digitalCoral: '#FF7477',       // Más limpio y vibrante. Ideal para dashboards humanos o wellness
  frostSignal: '#DFF7EB',        // Más frío y sintético. Ideal para fondos con estética futurista
  grapheneBlack: '#0A0A0A',      // Negro profundo, absoluto. Para interfaces con estética cyber
  quantumBlue: '#1FA9F6',        // Azul eléctrico, más saturado. Transmite data y conectividad
  // Colores de acento
  techSlate: '#7D848B',          // Gris técnico con tinte metálico. Para bordes, sliders, skeletons
  cyberOlive: '#B6CA40',         // Verde lima metálico. Para resaltar naturalezas en tecnología verde
  deepNeuralTeal: '#2B7A78',     // Más saturado, inspirado en UI de sistemas autónomos
  // Fondos
  lightBackground: '#FFFFFF',
  darkBackground: '#0A0A0A',
  lightPaper: '#F8F9FA',
  darkPaper: '#1A1A1A',
} as const;

// Colores derivados
export const PALETTE_VARIANTS = {
  neonBlaze: {
    light: '#FF7C33',
    main: AI4U_PALETTE.neonBlaze,
    dark: '#E54A00',
  },
  quantumBlue: {
    light: '#4FC3F7', 
    main: AI4U_PALETTE.quantumBlue,
    dark: '#1B8BD6',
  },
  digitalCoral: {
    light: '#FF9499',
    main: AI4U_PALETTE.digitalCoral,
    dark: '#FF5458',
  },
} as const;

export type PaletteColor = keyof typeof AI4U_PALETTE;
export type PaletteVariant = keyof typeof PALETTE_VARIANTS;