import React, { useState } from 'react';
import { Box, BoxProps } from '@mui/material';

interface PixelArtFilterProps extends Omit<BoxProps, 'component'> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  transitionDuration?: number;
  pixelSize?: number;
}

const PixelArtFilter: React.FC<PixelArtFilterProps> = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  transitionDuration = 0.3,
  pixelSize = 8,
  sx,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        borderRadius: '8px',
        cursor: 'pointer',
        ...sx,
      }}
      {...props}
    >
              <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: `all ${transitionDuration}s ease-in-out`,
            filter: isHovered 
              ? `contrast(1.4) brightness(1.2) saturate(1.5) blur(0.3px)`
              : 'none',
            imageRendering: isHovered ? 'pixelated' : 'auto',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            '&::before': isHovered ? {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `repeating-conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(0,0,0,0.1) 1deg,
                transparent 2deg
              )`,
              backgroundSize: `${pixelSize}px ${pixelSize}px`,
              pointerEvents: 'none',
              zIndex: 2,
            } : {},
          }}
        />
      
      {/* Overlay de efecto pixel art */}
      {isHovered && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `repeating-conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(0,0,0,0.03) 1deg,
              transparent 2deg
            )`,
            backgroundSize: `${pixelSize}px ${pixelSize}px`,
            pointerEvents: 'none',
            zIndex: 3,
            transition: `opacity ${transitionDuration}s ease-in-out`,
          }}
        />
      )}
      
      {/* Overlay de brillo sutil */}
      {isHovered && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 4,
            transition: `opacity ${transitionDuration}s ease-in-out`,
          }}
        />
      )}
      
      {/* Efecto de glitch sutil */}
      {isHovered && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,255,0.02) 50%,
              transparent 100%
            )`,
            animation: 'glitch 2s infinite',
            pointerEvents: 'none',
            zIndex: 5,
            '@keyframes glitch': {
              '0%, 100%': {
                transform: 'translateX(0)',
              },
              '10%': {
                transform: 'translateX(-2px)',
              },
              '20%': {
                transform: 'translateX(2px)',
              },
              '30%': {
                transform: 'translateX(0)',
              },
              '40%': {
                transform: 'translateX(-1px)',
              },
              '50%': {
                transform: 'translateX(1px)',
              },
              '60%': {
                transform: 'translateX(0)',
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default PixelArtFilter; 