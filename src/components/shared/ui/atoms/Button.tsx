import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

// Botón minimalista sin efectos glassmorphism
const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'customVariant',
})<{ customVariant?: ButtonProps['variant'] }>(({ theme, customVariant, size }) => {
  const isLight = theme.palette.mode === 'light';
  
  // Estilos base minimalistas
  const baseStyles = {
    borderRadius: size === 'small' ? theme.spacing(1) : size === 'large' ? theme.spacing(2) : theme.spacing(1.5),
    fontWeight: 600,
    textTransform: 'none' as const,
    fontFamily: '"Red Hat Display", sans-serif',
    transition: theme.transitions.create(['background-color', 'border-color', 'color'], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
    // Sin transformaciones dramáticas
    '&:hover': {
      transform: 'none',
    },
    '&:active': {
      transform: 'none',
    },
  };

  // Variantes simplificadas
  switch (customVariant) {
    case 'primary':
      return {
        ...baseStyles,
        backgroundColor: '#FF5C00',
        color: '#FFFFFF',
        border: '1px solid #FF5C00',
        boxShadow: 'none',
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: '#E54A00',
          borderColor: '#E54A00',
        },
      };
    
    case 'secondary':
      return {
        ...baseStyles,
        backgroundColor: isLight ? '#F5F5F5' : '#262626',
        color: isLight ? '#000000' : '#FFFFFF',
        border: `1px solid ${isLight ? '#E5E5E5' : '#404040'}`,
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: isLight ? '#E5E5E5' : '#404040',
        },
      };
    
    case 'outline':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: '#FF5C00',
        border: '1px solid #FF5C00',
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: 'rgba(255, 92, 0, 0.05)',
        },
      };
    
    case 'text':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: isLight ? '#000000' : '#FFFFFF',
        border: 'none',
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
        },
      };
    
    default:
      return baseStyles;
  }
});

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      customVariant={variant}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 