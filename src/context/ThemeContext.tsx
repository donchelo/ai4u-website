import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, PaletteMode, Theme, Components, Shadows } from '@mui/material/styles';
import { TypographyVariantsOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Paleta de colores AI4U - Basada en brandIdentity.ts
const AI4U_PALETTE = {
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
};

// Fuentes para código
const CODE_FONT_FAMILY = '"Necto Mono", monospace';

// Configuración de tipografía
const typography: TypographyVariantsOptions = {
	fontFamily: '"Red Hat Display", sans-serif',
	h1: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 900, // Black
		fontSize: '2.5rem',
	},
	h2: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 700, // Bold
		fontSize: '2rem',
	},
	h3: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 600, // Semibold
		fontSize: '1.75rem',
	},
	h4: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 600, // Semibold
		fontSize: '1.5rem',
	},
	h5: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 500, // Regular
		fontSize: '1.25rem',
	},
	h6: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 500, // Regular
		fontSize: '1.1rem',
	},
	body1: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 400, // Regular
		fontSize: '1rem',
	},
	body2: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 400, // Regular
		fontSize: '0.875rem',
	},
	button: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 600, // Semibold
		textTransform: 'none' as const,
	},
	caption: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 400, // Regular
		fontSize: '0.75rem',
	},
	overline: {
		fontFamily: '"Red Hat Display", sans-serif',
		fontWeight: 500, // Regular
		fontSize: '0.75rem',
		textTransform: 'uppercase',
		letterSpacing: '0.08em',
	},
	// Pesos de fuente
	fontWeightLight: 300,  // Light
	fontWeightRegular: 400, // Regular
	fontWeightMedium: 500, // Regular (un poco más pesado)
	fontWeightBold: 700,   // Bold
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
			// Botones primarios (neon blaze) para llamados a la acción
			containedPrimary: {
				backgroundColor: AI4U_PALETTE.neonBlaze,
				color: '#FFFFFF',
				'&:hover': {
					backgroundColor: '#E54A00', // Versión más oscura de neon blaze
					boxShadow: '0 4px 12px rgba(255, 92, 0, 0.3)',
				},
			},
			// Botones secundarios (quantum blue) para acciones secundarias
			containedSecondary: {
				backgroundColor: AI4U_PALETTE.quantumBlue,
				color: '#FFFFFF',
				'&:hover': {
					backgroundColor: '#1B8BD6', // Versión más oscura de quantum blue
					boxShadow: '0 4px 8px rgba(31, 169, 246, 0.3)',
				},
			},
			// Botones terciarios (tech slate) para acciones menos importantes
			outlined: {
				borderWidth: '1px',
				borderColor: mode === 'light' ? AI4U_PALETTE.techSlate : '#777777',
				color: mode === 'light' ? AI4U_PALETTE.grapheneBlack : AI4U_PALETTE.lightBackground,
				'&:hover': {
					borderWidth: '1px',
					backgroundColor: mode === 'light' 
						? 'rgba(125, 132, 139, 0.1)' 
						: 'rgba(125, 132, 139, 0.05)',
				},
			},
			text: {
				color: mode === 'light' ? AI4U_PALETTE.grapheneBlack : AI4U_PALETTE.lightBackground,
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
				color: mode === 'light' ? AI4U_PALETTE.grapheneBlack : AI4U_PALETTE.lightBackground,
				'&:hover': {
					backgroundColor: mode === 'light' 
						? 'rgba(0, 0, 0, 0.04)' 
						: 'rgba(255, 255, 255, 0.05)',
				},
			},
			colorPrimary: {
				color: AI4U_PALETTE.neonBlaze,
				'&:hover': {
					backgroundColor: 'rgba(255, 92, 0, 0.08)',
				},
			},
			colorSecondary: {
				color: AI4U_PALETTE.quantumBlue,
				'&:hover': {
					backgroundColor: 'rgba(31, 169, 246, 0.08)',
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
				backgroundColor: mode === 'light' ? AI4U_PALETTE.lightPaper : AI4U_PALETTE.darkPaper,
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
	// Garantizar que los elementos de código usen Necto Mono
	MuiTypography: {
		styleOverrides: {
			root: {
				'& code': {
					fontFamily: CODE_FONT_FAMILY,
					backgroundColor: mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.1)',
					padding: '2px 4px',
					borderRadius: 4,
				},
			},
		},
	},
});

// Configuración de paleta
const getPalette = (mode: PaletteMode) => ({
	mode,
	// Colores principales
	primary: {
		main: AI4U_PALETTE.neonBlaze, // Llamados a la acción (neon blaze)
		light: AI4U_PALETTE.digitalCoral,
		dark: '#E54A00',
		contrastText: '#FFFFFF',
	},
	secondary: {
		main: AI4U_PALETTE.quantumBlue, // Detalles y contraste (quantum blue)
		light: '#4FC3F7',
		dark: AI4U_PALETTE.deepNeuralTeal,
		contrastText: '#FFFFFF',
	},
	// Fondos y textos
	background: {
		default: mode === 'light' ? AI4U_PALETTE.lightBackground : AI4U_PALETTE.darkBackground,
		paper: mode === 'light' ? AI4U_PALETTE.lightPaper : AI4U_PALETTE.darkPaper,
	},
	text: {
		primary: mode === 'light' ? AI4U_PALETTE.grapheneBlack : AI4U_PALETTE.lightBackground,
		secondary: mode === 'light' ? AI4U_PALETTE.techSlate : '#A0A0A0',
	},
	// Colores de acción
	action: {
		active: mode === 'light' ? AI4U_PALETTE.grapheneBlack : AI4U_PALETTE.lightBackground,
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
		main: AI4U_PALETTE.quantumBlue,
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