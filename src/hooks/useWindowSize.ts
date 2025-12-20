import { useState, useEffect } from 'react';
import { isMobile, isTablet, isDesktop } from '../utils/helpers';

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? isMobile() : false,
    isTablet: typeof window !== 'undefined' ? isTablet() : false,
    isDesktop: typeof window !== 'undefined' ? isDesktop() : false,
  }));

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: isMobile(),
        isTablet: isTablet(),
        isDesktop: isDesktop(),
      });
    }

    // Agregar event listener
    window.addEventListener('resize', handleResize);
    
    // Llamar handler inmediatamente para establecer el tamaño inicial
    handleResize();
    
    // Remover event listener en cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Array vacío asegura que el efecto solo se ejecute en mount y unmount

  return windowSize;
} 