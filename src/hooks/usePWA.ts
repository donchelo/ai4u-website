import { useState, useEffect } from 'react';

export const usePWA = () => {
  const [isPWA, setIsPWA] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detectar si la app está instalada como PWA
    const checkPWA = () => {
      const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
      const isInStandalone = (window.navigator as any).standalone;
      
      setIsStandalone(isStandaloneMode || isInStandalone);
      setIsPWA(isStandaloneMode || isInStandalone);
    };

    checkPWA();
    
    // Escuchar cambios en el modo de visualización
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    mediaQuery.addListener(checkPWA);

    return () => {
      mediaQuery.removeListener(checkPWA);
    };
  }, []);

  return { isPWA, isStandalone };
}; 