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
  
  // Estilos base minimalistas usando tokens
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

  // Variantes usando tokens del sistema (sin naranja como primario)
  switch (customVariant) {
    case 'primary':
      return {
        ...baseStyles,
        backgroundColor: buttonVariants.primary.background,
        color: buttonVariants.primary.text,
        border: `1px solid ${buttonVariants.primary.background}`,
        boxShadow: 'none',
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: buttonVariants.primary.hover,
          borderColor: buttonVariants.primary.hover,
        },
      };
    
    case 'secondary':
      return {
        ...baseStyles,
        backgroundColor: isLight ? buttonVariants.secondary.background : AI4U_PALETTE.gray[800],
        color: isLight ? buttonVariants.secondary.text : AI4U_PALETTE.white,
        border: `1px solid ${isLight ? AI4U_PALETTE.gray[200] : AI4U_PALETTE.gray[700]}`,
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: isLight ? buttonVariants.secondary.hover : AI4U_PALETTE.gray[700],
        },
      };
    
    case 'outline':
      return {
        ...baseStyles,
        backgroundColor: buttonVariants.outline.background,
        color: isLight ? buttonVariants.outline.text : AI4U_PALETTE.white,
        border: `1px solid ${isLight ? buttonVariants.outline.border : AI4U_PALETTE.gray[600]}`,
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: isLight ? buttonVariants.outline.hover : AI4U_PALETTE.gray[900],
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