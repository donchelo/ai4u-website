import React from 'react';
import { Box, Skeleton, useTheme } from '@mui/material';
import { useLazyImage } from '../../../../hooks';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  sx?: any;
  skeletonHeight?: string | number;
  skeletonWidth?: string | number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  sx = {},
  skeletonHeight,
  skeletonWidth,
}) => {
  const theme = useTheme();
  const { imgRef, isLoaded, isInView, error } = useLazyImage(src);

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

      {/* Imagen real */}
      {isInView && (
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            display: isLoaded ? 'block' : 'none',
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