import React, { useEffect, useState } from 'react';
import { useImagePreloader } from '../../../../hooks/useImageOptimization';
import { useLoading } from '../../../../context';

interface IntelligentImagePreloaderProps {
  criticalImages: string[]; // Imágenes que deben cargarse inmediatamente
  importantImages: string[]; // Imágenes importantes pero no críticas
  backgroundImages: string[]; // Imágenes que se pueden cargar en segundo plano
  onCriticalLoaded?: () => void;
  onImportantLoaded?: () => void;
  onAllLoaded?: () => void;
  showProgress?: boolean;
}

export const IntelligentImagePreloader: React.FC<IntelligentImagePreloaderProps> = ({
  criticalImages,
  importantImages,
  backgroundImages,
  onCriticalLoaded,
  onImportantLoaded,
  onAllLoaded,
  showProgress = false
}) => {
  const { setCriticalImagesLoaded } = useLoading();
  const [phase, setPhase] = useState<'critical' | 'important' | 'background' | 'complete'>('critical');
  
  // Precarga de imágenes críticas
  const criticalPreloader = useImagePreloader(criticalImages);
  
  // Precarga de imágenes importantes
  const importantPreloader = useImagePreloader(importantImages);
  
  // Precarga de imágenes de fondo
  const backgroundPreloader = useImagePreloader(backgroundImages);

  // Manejar fase crítica
  useEffect(() => {
    if (criticalPreloader.isComplete) {
      setCriticalImagesLoaded(true);
      onCriticalLoaded?.();
      setPhase('important');
    }
  }, [criticalPreloader.isComplete, setCriticalImagesLoaded, onCriticalLoaded]);

  // Manejar fase importante
  useEffect(() => {
    if (phase === 'important' && importantPreloader.isComplete) {
      onImportantLoaded?.();
      setPhase('background');
    }
  }, [phase, importantPreloader.isComplete, onImportantLoaded]);

  // Manejar fase de fondo
  useEffect(() => {
    if (phase === 'background' && backgroundPreloader.isComplete) {
      onAllLoaded?.();
      setPhase('complete');
    }
  }, [phase, backgroundPreloader.isComplete, onAllLoaded]);

  // Calcular progreso total
  const totalImages = criticalImages.length + importantImages.length + backgroundImages.length;
  const loadedImages = criticalPreloader.loadedImages.length + 
                      importantPreloader.loadedImages.length + 
                      backgroundPreloader.loadedImages.length;
  const totalProgress = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

  if (!showProgress) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      color: 'white',
      fontFamily: 'monospace'
    }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Cargando imágenes...
      </div>
      
      <div style={{ width: '300px', marginBottom: '1rem' }}>
        <div style={{ 
          width: '100%', 
          height: '20px', 
          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
          borderRadius: '10px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${totalProgress}%`,
            height: '100%',
            backgroundColor: '#4CAF50',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>
      
      <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
        Fase: {phase === 'critical' ? 'Críticas' : 
               phase === 'important' ? 'Importantes' : 
               phase === 'background' ? 'Fondo' : 'Completado'}
      </div>
      
      <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
        {loadedImages} / {totalImages} imágenes cargadas
      </div>
      
      <div style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '1rem' }}>
        <div>Críticas: {criticalPreloader.loadedImages.length}/{criticalImages.length}</div>
        <div>Importantes: {importantPreloader.loadedImages.length}/{importantImages.length}</div>
        <div>Fondo: {backgroundPreloader.loadedImages.length}/{backgroundImages.length}</div>
      </div>
    </div>
  );
};

export default IntelligentImagePreloader;
