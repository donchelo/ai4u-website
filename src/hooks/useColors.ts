import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../context/ThemeContext';
import { useContrastColors, useComponentColors } from '../components/shared/ui/tokens/palette';

// Hook principal para el sistema de colores AI4U
export const useColors = () => {
  const theme = useTheme();
  const { mode } = useColorMode();
  const contrast = useContrastColors(mode);
  const componentColors = useComponentColors(mode);

  return {
    // Modo actual
    mode,
    
    // Colores base
    palette: {
      white: '#FFFFFF',
      black: '#000000',
      orange: '#FF5C00',
      green: '#B6CA40',
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
    },
    
    // Colores con contraste automático
    contrast,
    
    // Variantes de componentes
    components: componentColors.components,
    
    // Helpers para uso común
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
      },
      
      // Para bordes
      border: {
        primary: contrast.border,
        secondary: contrast.divider,
        accent: '#FF5C00',
      },
      
      // Para estados
      state: {
        hover: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
        selected: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.16)',
        disabled: mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
      },
    },
    
    // Acceso directo al tema MUI
    theme,
  };
};

// Hook específico para componentes con variantes
export const useComponentVariant = (componentType: 'button' | 'card', variant: string) => {
  const { components } = useColors();
  
  switch (componentType) {
    case 'button':
      return components.button[variant as keyof typeof components.button];
    case 'card':
      return components.card[variant as keyof typeof components.card];
    default:
      return null;
  }
};

// Hook para obtener colores de contraste específicos
export const useContrastPair = () => {
  const { mode, contrast } = useColors();
  
  return {
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
  };
}; 