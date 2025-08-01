import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, PaletteMode, Theme, Components, Shadows } from '@mui/material/styles';
import { TypographyVariantsOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AI4U_PALETTE, CONTRAST_PAIRS, COMPONENT_VARIANTS } from '../components/shared/ui/tokens/palette';

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
		textTransform: 'uppercase',
		letterSpacing: '0.08em',
	},
};

// Configuración de componentes con contraste garantizado
const getComponentsOverrides = (mode: PaletteMode): Components<Theme> => {
	const contrast = CONTRAST_PAIRS[mode];
	const buttonColors = COMPONENT_VARIANTS.button;
	
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					fontWeight: 600,
					textTransform: 'none',
					boxShadow: 'none',
					transition: 'all 0.2s ease-in-out',
				},
				// Botones primarios (naranja)
				containedPrimary: {
					backgroundColor: buttonColors.primary.background,
					color: buttonColors.primary.text,
					'&:hover': {
						backgroundColor: buttonColors.primary.hover,
						boxShadow: '0 4px 12px rgba(255, 92, 0, 0.3)',
					},
				},
				// Botones secundarios (gris)
				containedSecondary: {
					backgroundColor: mode === 'light' ? buttonColors.secondary.background : AI4U_PALETTE.gray[800],
					color: mode === 'light' ? buttonColors.secondary.text : AI4U_PALETTE.white,
					'&:hover': {
						backgroundColor: mode === 'light' ? buttonColors.secondary.hover : AI4U_PALETTE.gray[700],
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					},
				},
				// Botones outline
				outlined: {
					borderWidth: '2px',
					borderColor: buttonColors.outline.border,
					color: buttonColors.outline.text,
					backgroundColor: buttonColors.outline.background,
					'&:hover': {
						backgroundColor: buttonColors.outline.hover,
						borderWidth: '2px',
					},
				},
				// Botones de texto
				text: {
					color: contrast.text.primary,
					'&:hover': {
						backgroundColor: mode === 'light' 
							? 'rgba(0, 0, 0, 0.04)' 
							: 'rgba(255, 255, 255, 0.08)',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					backgroundColor: contrast.surface,
					border: `1px solid ${contrast.border}`,
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
					color: contrast.text.primary,
					'&:hover': {
						backgroundColor: mode === 'light' 
							? 'rgba(0, 0, 0, 0.04)' 
							: 'rgba(255, 255, 255, 0.08)',
					},
				},
				colorPrimary: {
					color: AI4U_PALETTE.orange,
					'&:hover': {
						backgroundColor: 'rgba(255, 92, 0, 0.08)',
					},
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: contrast.divider,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: contrast.surface,
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: contrast.background,
					boxShadow: mode === 'light' 
						? '0 1px 3px rgba(0,0,0,0.1)' 
						: '0 1px 3px rgba(0,0,0,0.3)',
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					backgroundColor: contrast.surface,
					border: `1px solid ${contrast.border}`,
					color: contrast.text.primary,
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: contrast.text.primary,
					'& code': {
						fontFamily: CODE_FONT_FAMILY,
						backgroundColor: mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.1)',
						padding: '2px 4px',
						borderRadius: 4,
					},
				},
			},
		},
	};
};

// Configuración de paleta con contraste automático
const getPalette = (mode: PaletteMode) => {
	const contrast = CONTRAST_PAIRS[mode];
	
	return {
		mode,
		// Colores principales
		primary: {
			main: AI4U_PALETTE.orange,
			light: '#FF7C33',
			dark: '#E54A00',
			contrastText: AI4U_PALETTE.white,
		},
		secondary: {
			main: AI4U_PALETTE.gray[600],
			light: AI4U_PALETTE.gray[400],
			dark: AI4U_PALETTE.gray[800],
			contrastText: mode === 'light' ? AI4U_PALETTE.black : AI4U_PALETTE.white,
		},
		// Fondos y textos con contraste garantizado
		background: {
			default: contrast.background,
			paper: contrast.surface,
		},
		text: {
			primary: contrast.text.primary,
			secondary: contrast.text.secondary,
			disabled: contrast.text.disabled,
		},
		// Colores de acción
		action: {
			active: contrast.text.primary,
			hover: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
			selected: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.16)',
			disabled: contrast.text.disabled,
			disabledBackground: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
		},
		// Colores semánticos
		error: {
			main: AI4U_PALETTE.error,
		},
		success: {
			main: AI4U_PALETTE.success,
		},
		info: {
			main: AI4U_PALETTE.info,
		},
		warning: {
			main: AI4U_PALETTE.warning,
		},
		// Divisores
		divider: contrast.divider,
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
			borderRadius: 8,
		},
		shadows: getCustomShadows(),
	});
};

// Interface para el contexto
interface ThemeContextType {
	toggleColorMode: () => void;
	mode: PaletteMode;
}

// Crear contexto
export const ColorModeContext = createContext<ThemeContextType>({
	toggleColorMode: () => {},
	mode: 'light',
});

// Hook personalizado para usar el modo de color
export const useColorMode = () => useContext(ColorModeContext);

// Proveedor del tema
export const ThemeProvider: React.FC<{children?: ReactNode}> = ({ children }) => {
	// Inicializar modo siempre en claro por defecto
	const [mode, setMode] = useState<PaletteMode>(() => {
		if (typeof window === 'undefined') return 'light';
		
		const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
		if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
			return savedMode;
		}
		
		// Siempre usar tema claro por defecto, sin importar la preferencia del sistema
		return 'light';
	});

	// Persistir el modo en localStorage y actualizar atributo del DOM
	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('themeMode', mode);
			document.documentElement.setAttribute('data-theme', mode);
		}
	}, [mode]);

	// Memoizar el contexto de color
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
			mode,
		}),
		[mode],
	);

	// Memoizar el tema para evitar recreaciones innecesarias
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

export default ThemeProvider; 