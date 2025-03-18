import React, { createContext, useContext } from 'react';

// Crear el tema AI4U
const ai4uTheme = {
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
const ThemeContext = createContext(ai4uTheme);

// Hook personalizado para usar el tema
export const useTheme = () => useContext(ThemeContext);

// Proveedor del tema
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={ai4uTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 