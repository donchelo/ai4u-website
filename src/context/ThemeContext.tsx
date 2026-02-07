import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, PaletteMode, Theme, Components, Shadows } from '@mui/material/styles';
import { TypographyVariantsOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import consolidated color system from single source of truth
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';

// Fuentes para código
const CODE_FONT_FAMILY = '"Necto Mono", monospace';

// Configuración de tipografía
const typography: TypographyVariantsOptions = {
	fontFamily: '"Red Hat Display", sans-serif',
	h1: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 900,
		fontSize: '2.5rem',
	},
	h2: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 700,
		fontSize: '2rem',
	},
	h3: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 600,
		fontSize: '1.75rem',
	},
	h4: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 600,
		fontSize: '1.5rem',
	},
	h5: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 500,
		fontSize: '1.25rem',
	},
	h6: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 500,
		fontSize: '1.1rem',
	},
	body1: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 400,
		fontSize: '1rem',
	},
	body2: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 400,
		fontSize: '0.875rem',
	},
	button: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 600,
		textTransform: 'none' as const,
	},
	caption: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 400,
		fontSize: '0.75rem',
	},
	overline: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 500,
		fontSize: '0.75rem',
		textTransform: 'none',
		letterSpacing: '0.08em',
	},
};

// Configuración de componentes simplificada
const getComponentsOverrides = (mode: PaletteMode): Components<Theme> => {
	const isLight = mode === 'light';
	
	return {
			MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 0, // Sharp edges
					fontWeight: 800, // Thicker font
					textTransform: 'none', // Brutalist style
					boxShadow: 'none',
					padding: '12px 24px',
					transition: 'all 0.1s ease-in-out',
					border: `2px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
				},
				containedPrimary: {
					backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
					'&:hover': {
						backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
						color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
						boxShadow: isLight ? '4px 4px 0px #000000' : '4px 4px 0px #FFFFFF',
					},
				},
				containedSecondary: {
					backgroundColor: 'transparent',
					color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					border: `2px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
					'&:hover': {
						backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
						color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
					},
				},
				outlined: {
					borderWidth: '2px',
					borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					'&:hover': {
						backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
						color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
						borderWidth: '2px',
					},
				},
				text: {
					color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					fontWeight: 700,
					textDecoration: 'underline',
					'&:hover': {
						backgroundColor: 'transparent',
						opacity: 0.8,
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 0, // Sharp edges
					backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
					border: `2px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
					boxShadow: 'none',
					'&:hover': {
						boxShadow: isLight ? '8px 8px 0px #000000' : '8px 8px 0px #FFFFFF',
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					transition: 'all 0.2s ease-in-out',
					color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					'&:hover': {
						backgroundColor: isLight 
							? 'rgba(0, 0, 0, 0.04)' 
							: 'rgba(255, 255, 255, 0.08)',
					},
				},
				colorPrimary: {
					// IconButton primario minimalista: negro/gris
					color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					'&:hover': {
						backgroundColor: isLight 
							? 'rgba(0, 0, 0, 0.08)' 
							: 'rgba(255, 255, 255, 0.12)',
					},
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					borderBottomWidth: '2px',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.gray[900],
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
					boxShadow: 'none',
					borderBottom: `2px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 0,
					backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
					border: `2px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
					color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					fontWeight: 700,
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
					'& code': {
						fontFamily: CODE_FONT_FAMILY,
						backgroundColor: isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.1)',
						padding: '2px 4px',
						borderRadius: 4,
					},
				},
			},
		},
	};
};

// Configuración de paleta minimalista
const getPalette = (mode: PaletteMode) => {
	const isLight = mode === 'light';
	
	return {
		mode,
		primary: {
			// Color primario minimalista: negro en modo claro, blanco en modo oscuro
			main: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
			light: isLight ? AI4U_PALETTE.gray[800] : AI4U_PALETTE.gray[200],
			dark: isLight ? AI4U_PALETTE.gray[900] : AI4U_PALETTE.gray[100],
			contrastText: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
		},
		secondary: {
			main: AI4U_PALETTE.gray[600],
			light: AI4U_PALETTE.gray[400],
			dark: AI4U_PALETTE.gray[800],
			contrastText: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
		},
		background: {
			default: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
			paper: isLight ? AI4U_PALETTE.gray[50] : AI4U_PALETTE.gray[900],
		},
		text: {
			primary: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
			secondary: isLight ? AI4U_PALETTE.gray[600] : AI4U_PALETTE.gray[300],
			disabled: AI4U_PALETTE.gray[400],
		},
		action: {
			active: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
			hover: isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
			selected: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.16)',
			disabled: AI4U_PALETTE.gray[400],
			disabledBackground: isLight ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
		},
		error: { main: AI4U_PALETTE.error },
		success: { main: AI4U_PALETTE.success },
		warning: { main: AI4U_PALETTE.warning },
		info: { main: AI4U_PALETTE.info },
		divider: isLight ? AI4U_PALETTE.gray[200] : AI4U_PALETTE.gray[800],
	};
};

// Sombras personalizadas
const getCustomShadows = (): Shadows => {
	const customShadows: Shadows = [
		'none',
		'0px 2px 4px rgba(0,0,0,0.05)',
		'0px 4px 8px rgba(0,0,0,0.05)',
		'0px 6px 12px rgba(0,0,0,0.08)',
		'0px 8px 16px rgba(0,0,0,0.08)',
		'0px 10px 20px rgba(0,0,0,0.1)',
		'0px 12px 24px rgba(0,0,0,0.1)',
		'0px 14px 28px rgba(0,0,0,0.12)',
		'0px 16px 32px rgba(0,0,0,0.12)',
		'0px 18px 36px rgba(0,0,0,0.14)',
		'0px 20px 40px rgba(0,0,0,0.14)',
		'0px 22px 44px rgba(0,0,0,0.16)',
		'0px 24px 48px rgba(0,0,0,0.16)',
		'0px 26px 52px rgba(0,0,0,0.18)',
		'0px 28px 56px rgba(0,0,0,0.18)',
		'0px 30px 60px rgba(0,0,0,0.2)',
		'0px 32px 64px rgba(0,0,0,0.2)',
		'0px 34px 68px rgba(0,0,0,0.22)',
		'0px 36px 72px rgba(0,0,0,0.22)',
		'0px 38px 76px rgba(0,0,0,0.24)',
		'0px 40px 80px rgba(0,0,0,0.24)',
		'0px 42px 84px rgba(0,0,0,0.25)',
		'0px 44px 88px rgba(0,0,0,0.25)',
		'0px 46px 92px rgba(0,0,0,0.26)',
		'0px 48px 96px rgba(0,0,0,0.26)',
	] as Shadows;
	
	return customShadows;
};

// Crear el tema de AI4U
const createAI4UTheme = (mode: PaletteMode): Theme => {
	return createTheme({
		palette: getPalette(mode),
		typography,
		components: getComponentsOverrides(mode),
		shape: {
			borderRadius: 0, // Bordes afilados para un look moderno/brutalista
		},
		shadows: getCustomShadows(),
	});
};

// Interface para el contexto (solo light mode)
interface ThemeContextType {
	mode: PaletteMode;
}

// Crear contexto
export const ColorModeContext = createContext<ThemeContextType>({
	mode: 'light',
});

// Hook personalizado para usar el modo de color (siempre 'light')
export const useColorMode = () => useContext(ColorModeContext);

// Proveedor del tema - siempre light mode
export const ThemeProvider: React.FC<{children?: ReactNode}> = ({ children }) => {
	const mode: PaletteMode = 'light';
	const colorMode = useMemo(() => ({ mode }), []);
	const theme = useMemo(() => createAI4UTheme('light'), []);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default ThemeProvider; 