import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../context/ThemeContext';
import { useContrastColors, useComponentColors } from '../components/shared/ui/tokens/palette';

// Import palette from single source of truth
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';

// Hook principal para el sistema de colores AI4U - Optimized with memoization
export const useColors = () => {
  const theme = useTheme();
  const { mode } = useColorMode();
  const contrast = useContrastColors(mode);
  const componentColors = useComponentColors(mode);

  // Memoize the entire color object to prevent recreation on every render
  return useMemo(() => ({
    // Modo actual
    mode,
    
    // Colores base - use static reference
    palette: AI4U_PALETTE,
    
    // Colores con contraste automático
    contrast,
    
    // Variantes de componentes
    components: componentColors.components,
    
    // Helpers para uso común - memoized
    helpers: {
      // Para fondos
      background: {
        primary: contrast.background,
        secondary: contrast.surface,
        accent: mode === 'light' ? '#FFF5F0' : '#2A1A0F',
      },
      
      // Para textos
      text: {
        primary: contrast.text.primary,
        secondary: contrast.text.secondary,
        disabled: contrast.text.disabled,
        accent: '#FF5C00',
        // Garantizar contraste mínimo
        highContrast: mode === 'light' ? '#000000' : '#FFFFFF',
        mediumContrast: mode === 'light' ? '#333333' : '#F0F0F0',
        // Contraste máximo para modo dark
        darkHighContrast: mode === 'dark' ? '#FFFFFF' : '#000000',
        darkMediumContrast: mode === 'dark' ? '#E8E8E8' : '#333333',
      },
      
      // Para bordes
      border: {
        primary: contrast.border,
        secondary: contrast.divider,
        accent: '#FF5C00',
      },
      
      // Para estados
      state: {
        hover: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.25)',
        selected: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.35)',
        disabled: mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
      },
    },
    
    // Acceso directo al tema MUI
    theme,
  }), [mode, contrast, componentColors.components, theme]);
};

// Hook específico para componentes con variantes - Optimized with memoization
export const useComponentVariant = (componentType: 'button' | 'card', variant: string) => {
  const { components } = useColors();
  
  return useMemo(() => {
    switch (componentType) {
      case 'button':
        return components.button[variant as keyof typeof components.button];
      case 'card':
        return components.card[variant as keyof typeof components.card];
      default:
        return null;
    }
  }, [components, componentType, variant]);
};

// Hook para obtener colores de contraste específicos - Optimized with memoization
export const useContrastPair = () => {
  const { mode, contrast } = useColors();
  
  return useMemo(() => ({
    mode,
    // Fondo claro → Texto oscuro
    light: {
      background: contrast.background,
      text: contrast.text.primary,
    },
    // Fondo oscuro → Texto claro
    dark: {
      background: mode === 'dark' ? contrast.background : '#000000',
      text: mode === 'dark' ? contrast.text.primary : '#FFFFFF',
    },
  }), [mode, contrast]);
}; 