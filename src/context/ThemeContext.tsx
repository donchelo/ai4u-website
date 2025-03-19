import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, PaletteMode, Theme, Components, Shadows } from '@mui/material/styles';
import { TypographyVariantsOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Paleta de colores AI4U
const AI4U_PALETTE = {
	cream: '#FFF8E1',              // Fondo en light mode
	black: '#121212',              // Fondo en dark mode
	orange: '#FF4500',             // Llamados a la acción
	blue: '#5B92E5',               // Detalles y contraste
	gray: '#91A3B0',               // Detalles y contraste secundario
};

// Configuración de tipografía
const typography: TypographyVariantsOptions = {
	fontFamily: '"Red Hat Display", "Roboto", "Helvetica", "Arial", sans-serif',
	h1: {
		fontWeight: 700,
	},
	h2: {
		fontWeight: 600,
	},
	h3: {
		fontWeight: 600,
	},
	h4: {
		fontWeight: 600,
	},
	h5: {
		fontWeight: 500,
	},
	h6: {
		fontWeight: 500,
	},
	body1: {
		fontWeight: 400,
	},
	body2: {
		fontWeight: 400,
	},
	button: {
		fontWeight: 600,
		textTransform: 'none' as const,
	},
};

// Configuración de componentes
const getComponentsOverrides = (mode: PaletteMode): Components<Theme> => ({
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: 4,
				fontWeight: 500,
				textTransform: 'none',
				boxShadow: 'none',
			},
			// Botones primarios (naranja) para llamados a la acción
			containedPrimary: {
				backgroundColor: AI4U_PALETTE.orange,
				color: mode === 'light' ? '#FFFFFF' : AI4U_PALETTE.cream,
				'&:hover': {
					backgroundColor: mode === 'light' 
						? 'rgba(255, 69, 0, 0.9)'
						: 'rgba(255, 69, 0, 0.8)',
					boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
				},
			},
			// Botones secundarios (azul) para acciones secundarias
			containedSecondary: {
				backgroundColor: AI4U_PALETTE.blue,
				color: '#FFFFFF',
				'&:hover': {
					backgroundColor: 'rgba(91, 146, 229, 0.9)',
					boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
				},
			},
			// Botones terciarios (gris) para acciones menos importantes
			outlined: {
				borderWidth: '1px',
				borderColor: mode === 'light' ? AI4U_PALETTE.gray : '#777777',
				color: mode === 'light' ? AI4U_PALETTE.black : AI4U_PALETTE.cream,
				'&:hover': {
					borderWidth: '1px',
					backgroundColor: mode === 'light' 
						? 'rgba(145, 163, 176, 0.1)' 
						: 'rgba(145, 163, 176, 0.05)',
				},
			},
			text: {
				color: mode === 'light' ? AI4U_PALETTE.black : AI4U_PALETTE.cream,
				'&:hover': {
					backgroundColor: mode === 'light' 
						? 'rgba(0, 0, 0, 0.04)' 
						: 'rgba(255, 255, 255, 0.05)',
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
				color: mode === 'light' ? AI4U_PALETTE.black : AI4U_PALETTE.cream,
				'&:hover': {
					backgroundColor: mode === 'light' 
						? 'rgba(0, 0, 0, 0.04)' 
						: 'rgba(255, 255, 255, 0.05)',
				},
			},
			colorPrimary: {
				color: AI4U_PALETTE.orange,
				'&:hover': {
					backgroundColor: 'rgba(255, 69, 0, 0.08)',
				},
			},
			colorSecondary: {
				color: AI4U_PALETTE.blue,
				'&:hover': {
					backgroundColor: 'rgba(91, 146, 229, 0.08)',
				},
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
	MuiPaper: {
		styleOverrides: {
			root: {
				backgroundColor: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
			},
		},
	},
	MuiAppBar: {
		styleOverrides: {
			root: {
				boxShadow: mode === 'light' 
					? '0 1px 3px rgba(0,0,0,0.1)' 
					: '0 1px 3px rgba(0,0,0,0.3)',
			},
		},
	},
	MuiChip: {
		styleOverrides: {
			root: {
				borderRadius: 4,
			},
		},
	},
});

// Configuración de paleta
const getPalette = (mode: PaletteMode) => ({
	mode,
	// Colores principales
	primary: {
		main: AI4U_PALETTE.orange, // Llamados a la acción (naranja)
		contrastText: '#FFFFFF',
	},
	secondary: {
		main: AI4U_PALETTE.blue, // Detalles y contraste (azul)
		contrastText: '#FFFFFF',
	},
	// Fondos y textos
	background: {
		default: mode === 'light' ? AI4U_PALETTE.cream : AI4U_PALETTE.black, // Fondo según el modo
		paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
	},
	text: {
		primary: mode === 'light' ? AI4U_PALETTE.black : AI4U_PALETTE.cream, // Texto principal según el modo
		secondary: mode === 'light' ? AI4U_PALETTE.gray : '#A0A0A0', // Texto secundario
	},
	// Colores de acción
	action: {
		active: mode === 'light' ? AI4U_PALETTE.black : AI4U_PALETTE.cream,
		hover: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
		selected: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.16)',
		disabled: mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
		disabledBackground: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
	},
	// Colores de error/éxito/info/advertencia
	error: {
		main: '#f44336',
	},
	success: {
		main: '#4caf50',
	},
	info: {
		main: AI4U_PALETTE.blue,
	},
	warning: {
		main: '#ff9800',
	},
	// Divisores
	divider: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
});

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
	// Inicializar modo desde localStorage o preferencia del sistema
	const [mode, setMode] = useState<PaletteMode>(() => {
		if (typeof window === 'undefined') return 'light';
		
		const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
		if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
			return savedMode;
		}
		
		return window.matchMedia?.('(prefers-color-scheme: dark)').matches 
			? 'dark' 
			: 'light';
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