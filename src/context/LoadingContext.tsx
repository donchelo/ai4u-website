import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  criticalImagesLoaded: boolean;
  setCriticalImagesLoaded: (loaded: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [criticalImagesLoaded, setCriticalImagesLoaded] = useState(false);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const setCriticalImagesLoadedState = (loaded: boolean) => {
    setCriticalImagesLoaded(loaded);
  };

  // Cuando las imágenes críticas están cargadas, ocultar el loading
  useEffect(() => {
    if (criticalImagesLoaded) {
      // Pequeño delay para transición suave
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [criticalImagesLoaded]);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
        criticalImagesLoaded,
        setCriticalImagesLoaded: setCriticalImagesLoadedState,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}; 