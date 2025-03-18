import React, { createContext, useContext, ReactNode } from 'react';

// Definir la interfaz del tema
interface Theme {
  colors: {
    background: string;
    action: string;
    text: string;
    tech: string;
    neutral: string;
  };
  fonts: {
    heading: string;
    body: string;
    code: string;
  };
}

// Crear el tema AI4U
const ai4uTheme: Theme = {
  colors: {
    background: 'mint-cream',  // Fondo principal
    action: 'hot-orange',      // CTAs y acciones
    text: 'erie-black',        // Textos
    tech: 'moderate-blue',     // Elementos tecnológicos
    neutral: 'cadet-gray',     // Elementos secundarios
  },
  fonts: {
    heading: 'redhat',
    body: 'redhat',
    code: 'necto',
  },
};

// Crear el contexto
const ThemeContext = createContext<Theme>(ai4uTheme);

// Hook personalizado para usar el tema
export const useTheme = () => useContext(ThemeContext);

// Proveedor del tema
export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  return (
    <ThemeContext.Provider value={ai4uTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 