import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

// Optimized styled component with proper memoization and performance
const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'customVariant',
})<{ customVariant?: ButtonProps['variant'] }>(({ theme, customVariant, size }) => {
  const isLight = theme.palette.mode === 'light';
  
  // Base styles - memoized through styled components
  const baseStyles = {
    borderRadius: size === 'small' ? theme.spacing(1.5) : size === 'large' ? theme.spacing(2.5) : theme.spacing(2),
    fontWeight: 600,
    textTransform: 'none' as const,
    fontFamily: '"Red Hat Display", sans-serif',
    transition: theme.transitions.create(['transform', 'box-shadow', 'background-color'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover': {
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(0px)',
    },
  };

  // Variant-specific styles using theme tokens
  switch (customVariant) {
    case 'primary':
      return {
        ...baseStyles,
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, #FF7477)`,
        color: theme.palette.primary.contrastText,
        boxShadow: `0 4px 20px ${theme.palette.primary.main}30`,
        '&:hover': {
          ...baseStyles['&:hover'],
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
          boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
        },
      };
    
    case 'secondary':
      return {
        ...baseStyles,
        backgroundColor: isLight 
          ? theme.palette.background.paper 
          : `${theme.palette.common.white}10`,
        color: theme.palette.text.primary,
        border: `1px solid ${isLight ? theme.palette.divider : `${theme.palette.common.white}20`}`,
        backdropFilter: 'blur(10px)',
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: isLight 
            ? theme.palette.common.white 
            : `${theme.palette.common.white}20`,
        },
      };
    
    case 'outline':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`,
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: `${theme.palette.primary.main}10`,
          borderColor: theme.palette.primary.main,
        },
      };
    
    case 'glass':
      return {
        ...baseStyles,
        backgroundColor: `${theme.palette.common.white}10`,
        color: theme.palette.text.primary,
        border: `1px solid ${isLight ? theme.palette.divider : `${theme.palette.common.white}20`}`,
        backdropFilter: 'blur(20px)',
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: `${theme.palette.common.white}20`,
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
  // Map custom variants to MUI variants
  const getMuiVariant = (): MuiButtonProps['variant'] => {
    switch (variant) {
      case 'outline': return 'outlined';
      case 'glass': return 'text';
      default: return 'contained';
    }
  };

  return (
    <StyledButton
      variant={getMuiVariant()}
      size={size}
      customVariant={variant}
      disableElevation
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 