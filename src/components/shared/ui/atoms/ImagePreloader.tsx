import React, { useEffect } from 'react';
import { useLoading } from '../../../../context';

interface ImagePreloaderProps {
  images: string[];
  onAllLoaded?: () => void;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images, onAllLoaded }) => {
  const { setCriticalImagesLoaded } = useLoading();

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setCriticalImagesLoaded(true);
        onAllLoaded?.();
      }
    };

    const handleImageError = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setCriticalImagesLoaded(true);
        onAllLoaded?.();
      }
    };

    // Precargar todas las imágenes
    images.forEach((src) => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
      img.src = src;
    });

    // Fallback: si no hay imágenes, marcar como cargadas
    if (totalImages === 0) {
      setCriticalImagesLoaded(true);
      onAllLoaded?.();
    }
  }, [images, setCriticalImagesLoaded, onAllLoaded]);

  return null; // Este componente no renderiza nada visual
};

export default ImagePreloader; 