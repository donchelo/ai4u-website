import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { SurfaceType, SURFACE_PRESETS, AI4U_PALETTE } from '../components/shared/ui/tokens/palette';
import { SHADOW_TOKENS } from '../components/shared/ui/tokens/theme';
import { TYPOGRAPHY_TOKENS } from '../components/shared/ui/tokens/typography';

// Import createAI4UTheme logic or just create a local version to avoid circular deps
// Since createAI4UTheme is in ThemeContext.tsx which might import this context, 
// let's define a helper here or move it to a separate file.

interface SurfaceContextType {
  surface: SurfaceType;
}

const SurfaceContext = createContext<SurfaceContextType>({
  surface: 'theme',
});

interface SurfaceProviderProps {
  children: ReactNode;
  surface?: SurfaceType;
}

export const SurfaceProvider: React.FC<SurfaceProviderProps> = ({ children, surface }) => {
  const parentContext = useContext(SurfaceContext);
  
  // Si no se proporciona una superficie, se hereda la del padre
  const currentSurface = surface || parentContext.surface;

  // Determinar el modo efectivo para esta superficie
  const effectiveMode = useMemo(() => {
    if (currentSurface === 'theme') return 'light'; // Por defecto global es light
    return SURFACE_PRESETS[currentSurface].effectiveMode;
  }, [currentSurface]);

  // Crear un sub-tema MUI que refleje el modo de la superficie
  // Esto permite que componentes estándar de MUI y nuestros atoms que usan theme.palette.mode
  // respondan correctamente al contraste de la superficie.
  const theme = useMemo(() => {
    const isLight = effectiveMode === 'light';
    
    return createTheme({
      palette: {
        mode: effectiveMode,
        primary: {
          main: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
          contrastText: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        },
        background: {
          default: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
          paper: isLight ? AI4U_PALETTE.gray[50] : AI4U_PALETTE.gray[900],
        },
        text: {
          primary: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
          secondary: isLight ? AI4U_PALETTE.gray[600] : AI4U_PALETTE.gray[300],
        },
      },
      // Heredar tipografía y otros ajustes si es necesario, 
      // pero lo más importante es la paleta para el contraste.
      typography: {
        fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              textTransform: 'none',
            },
            containedPrimary: {
              backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
              color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
            },
            outlined: {
              borderColor: isLight ? 'rgba(0,0,0,0.23)' : 'rgba(255,255,255,0.23)',
              color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
            }
          }
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
            }
          }
        }
      }
    });
  }, [effectiveMode]);

  return (
    <SurfaceContext.Provider value={{ surface: currentSurface }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </SurfaceContext.Provider>
  );
};

export const useSurface = () => useContext(SurfaceContext);
