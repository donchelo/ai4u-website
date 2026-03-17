import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled, Box } from '@mui/material';
import { useColors } from '../../../../hooks';
import { AI4U_PALETTE } from '../tokens/palette';
import { TEXT_VARIANTS } from '../tokens/typography';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'minimal' | 'industrial';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  label?: string; // Metadata label like "ACTION" or "PRESS"
  href?: string;
  target?: string;
  component?: any;
  to?: any;
  className?: string;
  sx?: any;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'customVariant',
})<{ customVariant?: ButtonProps['variant'] }>(({ theme, customVariant }) => {
  const isLight = theme.palette.mode === 'light';
  
  const baseStyles = {
    borderRadius: 0, // Heavy Industrial Sharp Edges
    fontWeight: 700,
    letterSpacing: '0.15em',
    fontSize: '0.875rem',
    fontFamily: '"Red Hat Display", sans-serif',
    transition: 'all 0.2s steps(4, end)', // Industrial "Snap" transition
    border: 'none',
    padding: '12px 24px',
    boxShadow: 'none',
    position: 'relative' as const,
    overflow: 'hidden',
  };

  switch (customVariant) {
    case 'primary':
      return {
        ...baseStyles,
        backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.gray[800] : AI4U_PALETTE.gray[200],
          transform: 'translate(-2px, -2px)',
          boxShadow: `4px 4px 0px 0px ${isLight ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'}`,
        },
      };
    
    case 'industrial':
      return {
        ...baseStyles,
        backgroundColor: AI4U_PALETTE.accentColors.mint, // Safety Green
        color: AI4U_PALETTE.black,
        border: `2px solid ${AI4U_PALETTE.black}`,
        '&:hover': {
          backgroundColor: AI4U_PALETTE.accentColors.orange, // Warning Orange
          transform: 'translate(-4px, -4px)',
          boxShadow: `8px 8px 0px 0px ${AI4U_PALETTE.black}`,
        },
      };
    
    case 'outline':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        border: `2px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
          color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        },
      };

    case 'minimal':
      return {
        ...baseStyles,
        backgroundColor: isLight ? AI4U_PALETTE.gray[100] : AI4U_PALETTE.gray[900],
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.gray[200] : AI4U_PALETTE.gray[800],
        },
      };
    
    default:
      return baseStyles;
  }
});

const LabelText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 2,
  right: 6,
  ...TEXT_VARIANTS.label.secondary,
  fontSize: '0.65rem',
  pointerEvents: 'none',
}));

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  label,
  className,
  sx,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      customVariant={variant}
      size={size}
      className={className}
      sx={sx}
      {...props}
    >
      {label && <LabelText>{label}</LabelText>}
      {children}
    </StyledButton>
  );
};

export default Button;