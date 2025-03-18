import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
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
        secondary: AI4U_COLORS.cadetGray,
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
            borderRadius: 8,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
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
  const [mode, setMode] = useState<'light' | 'dark'>('light');

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