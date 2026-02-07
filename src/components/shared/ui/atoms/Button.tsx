import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';
import { useColors } from '../../../hooks';
import { AI4U_PALETTE, COMPONENT_VARIANTS } from '../tokens/palette';
import { SHADOW_TOKENS } from '../tokens/theme';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

// Botón minimalista usando sistema de tokens
const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'customVariant',
})<{ customVariant?: ButtonProps['variant'] }>(({ theme, customVariant, size }) => {
  const isLight = theme.palette.mode === 'light';
  const buttonVariants = COMPONENT_VARIANTS.button;
  
  // Estilos base minimalistas/brutalistas
  const baseStyles = {
    borderRadius: 0, // Sharp edges
    fontWeight: 800, // Thicker
    textTransform: 'none' as const, // Permite normal case y camelCase
    fontFamily: '"Red Hat Display", sans-serif',
    transition: theme.transitions.create(['background-color', 'border-color', 'color', 'transform', 'box-shadow'], {
      duration: '0.1s',
      easing: theme.transitions.easing.easeInOut,
    }),
    borderWidth: '3px',
    borderStyle: 'solid',
  };

  // Variantes usando tokens del sistema (alto contraste)
  switch (customVariant) {
    case 'primary':
      return {
        ...baseStyles,
        backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
          color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
          boxShadow: isLight ? '6px 6px 0px #000000' : '6px 6px 0px #FFFFFF',
          transform: 'translate(-4px, -4px)',
        },
      };
    
    case 'outline':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
          color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        },
      };
    
    case 'minimal':
      return {
        ...baseStyles,
        backgroundColor: buttonVariants.minimal.background,
        color: isLight ? buttonVariants.minimal.text : AI4U_PALETTE.white,
        border: buttonVariants.minimal.border,
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: isLight ? buttonVariants.minimal.hover : AI4U_PALETTE.gray[900],
        },
      };
    
    case 'text':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
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