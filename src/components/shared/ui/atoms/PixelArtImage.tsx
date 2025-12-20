import React, { useState } from 'react';
import { Box, BoxProps } from '@mui/material';

interface PixelArtImageProps extends Omit<BoxProps, 'component'> {
  src: string;
  pixelArtSrc: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  transitionDuration?: number;
}

const PixelArtImage: React.FC<PixelArtImageProps> = ({
  src,
  pixelArtSrc,
  alt,
  width = '100%',
  height = 'auto',
  transitionDuration = 0.3,
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
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: `opacity ${transitionDuration}s ease-in-out`,
          opacity: isHovered ? 0 : 1,
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${pixelArtSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: `opacity ${transitionDuration}s ease-in-out`,
          opacity: isHovered ? 1 : 0,
          zIndex: 2,
        },
        ...sx,
      }}
      {...props}
    >
      {/* Imagen invisible para mantener el aspect ratio */}
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default PixelArtImage; 