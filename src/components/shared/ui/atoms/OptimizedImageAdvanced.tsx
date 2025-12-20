import React from 'react';
import { Box, Skeleton, useTheme, SxProps, Theme } from '@mui/material';
import { useImageOptimization } from '../../../../hooks/useImageOptimization';
import { useColors } from '../../../../hooks';

interface OptimizedImageAdvancedProps {
  imageName: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  sx?: SxProps<Theme>;
  skeletonHeight?: string | number;
  skeletonWidth?: string | number;
  priority?: boolean;
  size?: 'thumbnail' | 'small' | 'medium' | 'large' | 'original';
  format?: 'webp' | 'original';
  fallback?: string;
  preload?: boolean;
  showOptimizationInfo?: boolean;
  className?: string;
}

export const OptimizedImageAdvanced: React.FC<OptimizedImageAdvancedProps> = ({
  imageName,
  alt,
  width = '100%',
  height = 'auto',
  sx = {},
  skeletonHeight,
  skeletonWidth,
  priority = false,
  size = 'original' as const,
  format = 'webp' as const,
  fallback,
  preload = false,
  showOptimizationInfo = false,
  className
}) => {
  const theme = useTheme();
  
  const {
    src,
    isLoaded,
    error,
    format: actualFormat,
    size: actualSize,
    supportsWebP,
    isLoading
  } = useImageOptimization(imageName, {
    priority,
    size,
    format,
    fallback,
    preload
  });

  const skeletonSx = {
    bgcolor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)',
    borderRadius: 1,
  };

  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        ...sx,
      }}
    >
      {/* Skeleton mientras carga */}
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width={skeletonWidth || width}
          height={skeletonHeight || height}
          sx={skeletonSx}
        />
      )}

      {/* Imagen optimizada */}
      {!error && (
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
            imageRendering: 'auto',
            touchAction: 'manipulation',
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
            flexDirection: 'column',
            gap: 1
          }}
        >
          <Box component="span" sx={{ fontSize: '2rem' }}>🖼️</Box>
          <Box component="span">Error al cargar imagen</Box>
          {showOptimizationInfo && (
            <Box component="span" sx={{ fontSize: '0.75rem', opacity: 0.7 }}>
              {imageName}
            </Box>
          )}
        </Box>
      )}

      {/* Información de optimización (solo en desarrollo) */}
      {showOptimizationInfo && import.meta.env.MODE === 'development' && (
        <Box
          sx={{
            position: 'absolute',
            top: 4,
            right: 4,
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            zIndex: 1
          }}
        >
          <Box>📦 {actualFormat}</Box>
          <Box>📏 {actualSize}</Box>
          <Box>🌐 {supportsWebP ? 'WebP' : 'No WebP'}</Box>
        </Box>
      )}
    </Box>
  );
};

export default OptimizedImageAdvanced;
