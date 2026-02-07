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
  
  // Estilos base modernos y limpios
  const baseStyles = {
    borderRadius: 0, // Ángulos rectos
    fontWeight: 400, // Regular
    textTransform: 'none' as const,
    fontFamily: '"Red Hat Display", sans-serif',
    transition: theme.transitions.create(['background-color', 'border-color', 'color', 'transform', 'box-shadow'], {
      duration: '0.2s',
      easing: theme.transitions.easing.easeInOut,
    }),
    border: 'none',
  };

  // Variantes usando tokens del sistema
  switch (customVariant) {
    case 'primary':
      return {
        ...baseStyles,
        backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        boxShadow: SHADOW_TOKENS.ai4u.button,
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.gray[800] : AI4U_PALETTE.gray[100],
          boxShadow: SHADOW_TOKENS.md,
          transform: 'translateY(-2px)',
        },
      };
    
    case 'outline':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        border: `1px solid ${isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)'}`,
        '&:hover': {
          backgroundColor: isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
          borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
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