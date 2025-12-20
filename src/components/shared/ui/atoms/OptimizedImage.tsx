import React, { useState, useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';
import { useColors } from '../../../../hooks';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  sx?: any;
  priority?: boolean;
  fallback?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  sx,
  priority = false,
  fallback
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const colors = useColors();

  // Función para verificar soporte de WebP
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  // Función para generar URL WebP
  const getWebPUrl = (originalSrc: string) => {
    if (!originalSrc.includes('/assets/images/')) return originalSrc;
    
    const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpSrc;
  };

  useEffect(() => {
    // Si el navegador soporta WebP y no es una imagen externa, usar WebP
    if (supportsWebP() && src.includes('/assets/images/')) {
      setCurrentSrc(getWebPUrl(src));
    } else {
      setCurrentSrc(src);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    if (currentSrc !== src && !hasError) {
      // Si falla WebP, intentar con el original
      setCurrentSrc(src);
      setHasError(true);
    } else if (fallback) {
      // Si falla el original, usar fallback
      setCurrentSrc(fallback);
      setHasError(true);
    }
  };

  return (
    <Box sx={{ position: 'relative', width, height }}>
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          width={width}
          height={height}
          sx={{
            borderRadius: 1,
            bgcolor: colors.contrast.surface,
            ...sx
          }}
        />
      )}
      
      <img
        src={currentSrc}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          ...sx
        }}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />
    </Box>
  );
};

export default OptimizedImage; 