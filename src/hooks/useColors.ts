import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { useColorMode, useSurface } from '../context';
import { useComponentColors, SURFACE_PRESETS, CONTRAST_PAIRS } from '../components/shared/ui/tokens/palette';

// Import palette from single source of truth
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';

// Hook principal para el sistema de colores AI4U - Optimized with memoization
export const useColors = () => {
  const theme = useTheme();
  const { mode } = useColorMode();
  const { surface } = useSurface();
  
  const contrast = useMemo(() => {
    if (surface === 'theme') {
      return CONTRAST_PAIRS[mode];
    }
    return SURFACE_PRESETS[surface];
  }, [mode, surface]);

  const effectiveMode = useMemo(() => {
    if (surface === 'theme') {
      return mode;
    }
    return SURFACE_PRESETS[surface].effectiveMode;
  }, [mode, surface]);

  const componentColors = useComponentColors(effectiveMode);

  // Memoize the entire color object to prevent recreation on every render
  return useMemo(() => ({
    // Modo actual (global)
    mode,
    // Modo efectivo para la superficie actual
    effectiveMode,
    // Superficie actual
    surface,
    
    // Colores base - use static reference
    palette: AI4U_PALETTE,
    
    // Colores con contraste automático según superficie
    contrast,
    
    // Variantes de componentes adaptadas a la superficie
    components: componentColors.components,
    
    // Helpers para uso común - memoized
    helpers: {
      // Para fondos
      background: {
        primary: contrast.background,
        secondary: contrast.surface,
        accent: effectiveMode === 'light' ? '#FFF5F0' : '#2A1A0F',
      },
      
      // Para textos - Minimalista (sin naranja como primario)
      text: {
        primary: contrast.text.primary,
        secondary: contrast.text.secondary,
        disabled: contrast.text.disabled,
        // Acentos mínimos (solo para casos excepcionales)
        accent: effectiveMode === 'light' ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        // Garantizar contraste mínimo
        highContrast: effectiveMode === 'light' ? '#000000' : '#FFFFFF',
        mediumContrast: effectiveMode === 'light' ? '#333333' : '#F0F0F0',
        // Contraste máximo para modo dark
        darkHighContrast: effectiveMode === 'dark' ? '#FFFFFF' : '#000000',
        darkMediumContrast: effectiveMode === 'dark' ? '#E8E8E8' : '#333333',
      },
      
      // Para bordes - Minimalista (sin naranja)
      border: {
        primary: contrast.border,
        secondary: contrast.divider,
        accent: effectiveMode === 'light' ? AI4U_PALETTE.gray[400] : AI4U_PALETTE.gray[600],
      },
      
      // Para estados
      state: {
        hover: effectiveMode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.25)',
        selected: effectiveMode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.35)',
        disabled: effectiveMode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
      },
    },
    
    // Acceso directo al tema MUI
    theme,
  }), [mode, effectiveMode, surface, contrast, componentColors.components, theme]);
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