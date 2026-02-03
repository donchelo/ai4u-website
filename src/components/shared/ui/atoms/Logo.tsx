import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface LogoProps extends Omit<BoxProps, 'component'> {
  variant?: 'desktop' | 'mobile';
  onClick?: () => void;
}

const LOGO_LIGHT_PATH = '/assets/images/ai4u-logo-for-light-background.png';

const Logo: React.FC<LogoProps> = ({ 
  variant = 'desktop', 
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
      src={LOGO_LIGHT_PATH}
      alt="AI4U Logo"
      onClick={handleClick}
      sx={{
        height: variant === 'desktop' ? 42 : 38,
        width: 'auto',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease-in-out',
        '&:hover': {
          opacity: 0.8
        },
        ...sx
      }}
      {...props}
    />
  );
};

export default Logo; 