import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { useColorMode } from '../../../../context/ThemeContext';

interface LogoProps extends Omit<BoxProps, 'component'> {
  variant?: 'desktop' | 'mobile';
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'desktop', 
  onClick,
  sx,
  ...props 
}: LogoProps) => {
  const { mode } = useColorMode();
  
  // Logo para fondo claro u oscuro
  const logoPath = mode === 'dark' 
    ? '/assets/images/ai4u-logo-for-dark-background.png'
    : '/assets/images/ai4u-logo-for-light-background.png';

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
      src={logoPath}
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