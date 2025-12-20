import React from 'react';
import { Box, Skeleton, useTheme, SxProps, Theme } from '@mui/material';
import { useLazyImage } from '../../../../hooks';
import { usePWA } from '../../../../hooks/usePWA';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  sx?: SxProps<Theme>;
  skeletonHeight?: string | number;
  skeletonWidth?: string | number;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  sx = {},
  skeletonHeight,
  skeletonWidth,
  priority = false,
}) => {
  const theme = useTheme();
  const { isPWA } = usePWA();
  const { imgRef, isLoaded, isInView, error } = useLazyImage(src, { priority });

  const skeletonSx = {
    bgcolor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)',
    borderRadius: 1,
  };

  return (
    <Box
      ref={imgRef}
      sx={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        ...sx,
      }}
    >
      {/* Skeleton mientras carga */}
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          width={skeletonWidth || width}
          height={skeletonHeight || height}
          sx={skeletonSx}
        />
      )}

      {/* Imagen optimizada */}
      {isInView && (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            display: isLoaded ? 'block' : 'none',
            // Optimizaciones específicas para PWA
            ...(isPWA && {
              imageRendering: 'auto',
              touchAction: 'manipulation',
            }),
          }}
          onLoad={() => {
            // El hook maneja el estado de carga
          }}
        />
      )}

      {/* Fallback para errores */}
      {error && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(0, 0, 0, 0.05)',
            color: theme.palette.text.secondary,
            fontSize: '0.875rem',
          }}
        >
          Error al cargar imagen
        </Box>
      )}
    </Box>
  );
};

export default LazyImage; 