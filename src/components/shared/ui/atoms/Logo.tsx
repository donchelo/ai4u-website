import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface LogoProps extends Omit<BoxProps, 'component'> {
  variant?: 'desktop' | 'mobile';
  light?: boolean;
  onClick?: () => void;
}

const LOGO_LIGHT_BG_PATH = '/assets/images/ai4u-logo-for-light-background.png';
const LOGO_DARK_BG_PATH = '/assets/images/ai4u-logo-for-dark-background.png';

const Logo: React.FC<LogoProps> = ({ 
  variant = 'desktop', 
  light = false,
  onClick,
  sx,
  ...props 
}: LogoProps) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Comportamiento por defecto: scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      component="img"
      src={light ? LOGO_DARK_BG_PATH : LOGO_LIGHT_BG_PATH}
      alt="AI4U Logo"
      onClick={handleClick}
      sx={{
        height: variant === 'desktop' ? 48 : 42,
        width: 'auto',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)'
        },
        ...sx
      }}
      {...props}
    />
  );
};

export default Logo; 