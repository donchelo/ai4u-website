import React, { createContext, useContext, ReactNode } from 'react';
import { SurfaceType } from '../components/shared/ui/tokens/palette';

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

  return (
    <SurfaceContext.Provider value={{ surface: currentSurface }}>
      {children}
    </SurfaceContext.Provider>
  );
};

export const useSurface = () => useContext(SurfaceContext);
