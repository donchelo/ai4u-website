import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Definir los colores personalizados de AI4U
const AI4U_COLORS = {
  mintCream: '#F5FFFA',
  hotOrange: '#FF4500',
  erieBlack: '#1A1A1A',
  moderateBlue: '#5B92E5',
  cadetGray: '#91A3B0',
};

// Crear el tema de Material UI para AI4U
const createAI4UTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: AI4U_COLORS.hotOrange,
      },
      secondary: {
        main: AI4U_COLORS.moderateBlue,
      },
      background: {
        default: mode === 'light' ? AI4U_COLORS.mintCream : AI4U_COLORS.erieBlack,
        paper: mode === 'light' ? '#ffffff' : '#242424',
      },
      text: {
        primary: mode === 'light' ? AI4U_COLORS.erieBlack : '#ffffff',
        secondary: mode === 'light' ? AI4U_COLORS.cadetGray : '#a0a0a0',
      },
    },
    typography: {
      fontFamily: '"Red Hat Display", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
      body1: {
        fontWeight: 400,
      },
      button: {
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 2,
            fontWeight: 500,
            textTransform: 'none',
            boxShadow: 'none',
          },
          containedPrimary: {
            backgroundColor: 'transparent',
            color: AI4U_COLORS.hotOrange,
            border: `1px solid ${AI4U_COLORS.hotOrange}`,
            '&:hover': {
              backgroundColor: 'rgba(255, 69, 0, 0.08)',
              boxShadow: 'none',
            },
          },
          containedSecondary: {
            backgroundColor: 'transparent',
            color: AI4U_COLORS.moderateBlue,
            border: `1px solid ${AI4U_COLORS.moderateBlue}`,
            '&:hover': {
              backgroundColor: 'rgba(91, 146, 229, 0.08)',
              boxShadow: 'none',
            },
          },
          outlined: {
            borderWidth: '1px',
            '&:hover': {
              borderWidth: '1px',
              boxShadow: 'none',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: mode === 'light' 
              ? '0 4px 12px rgba(0,0,0,0.05)' 
              : '0 4px 12px rgba(0,0,0,0.2)',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s ease-in-out',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: mode === 'light' 
              ? 'rgba(0,0,0,0.1)' 
              : 'rgba(255,255,255,0.1)',
          },
        },
      },
    },
  });
};

// Crear contexto para el modo de tema (claro/oscuro)
interface ThemeContextType {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

export const ColorModeContext = createContext<ThemeContextType>({
  toggleColorMode: () => {},
  mode: 'light',
});

// Proveedor del tema
export const ThemeProvider: React.FC<{children?: ReactNode}> = ({ children }) => {
  // Inicializa el modo del tema desde localStorage o preferencia del sistema
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    // Revisar si hay preferencia guardada
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      return savedMode as 'light' | 'dark';
    }
    
    // Si no hay preferencia guardada, detectar preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  // Persistir el modo de tema en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
    
    // Actualizar atributo data-theme en el elemento raíz para acceso desde CSS
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode],
  );

  const theme = useMemo(() => createAI4UTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

// Hook personalizado para usar el modo de color
export const useColorMode = () => useContext(ColorModeContext);

export default ThemeProvider; 