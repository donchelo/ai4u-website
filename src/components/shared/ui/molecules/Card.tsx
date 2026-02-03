import React, { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps, styled } from '@mui/material';
import { AI4U_PALETTE, COMPONENT_VARIANTS, CONTRAST_PAIRS } from '../tokens/palette';
import { SHADOW_TOKENS } from '../tokens/theme';

interface CardProps extends Omit<MuiCardProps, 'variant'> {
  children?: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  elevation?: number;
  showContent?: boolean;
}

// Card minimalista usando sistema de tokens
const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'cardVariant',
})<{ cardVariant?: CardProps['variant'] }>(({ theme, cardVariant }) => {
  const isLight = theme.palette.mode === 'light';
  const contrast = CONTRAST_PAIRS[isLight ? 'light' : 'dark'];
  const cardVariants = COMPONENT_VARIANTS.card;
  
  // Estilos base minimalistas/brutalistas
  const baseStyles = {
    borderRadius: 0, // Sharp edges
    transition: theme.transitions.create(['box-shadow', 'border-color', 'transform', 'background-color'], {
      duration: '0.2s',
      easing: theme.transitions.easing.easeInOut,
    }),
    position: 'relative' as const,
    overflow: 'hidden' as const,
    fontFamily: theme.typography.fontFamily,
    borderWidth: '3px',
    borderStyle: 'solid',
    boxShadow: 'none',
  };

  // Variantes usando tokens del sistema
  switch (cardVariant) {
    case 'elevated':
      return {
        ...baseStyles,
        backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        '&:hover': {
          transform: 'translate(-8px, -8px)',
          boxShadow: isLight ? '12px 12px 0px #000000' : '12px 12px 0px #FFFFFF',
        },
      };
    
    case 'outlined':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
          color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        },
      };
    
    default:
      return {
        ...baseStyles,
        backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        '&:hover': {
          transform: 'translate(-4px, -4px)',
          boxShadow: isLight ? '8px 8px 0px #000000' : '8px 8px 0px #FFFFFF',
        },
      };
  }
});

export const Card = ({
  children,
  variant = 'default',
  elevation = 0,
  showContent = true,
  ...props
}: CardProps) => {
  return (
    <StyledCard cardVariant={variant} elevation={elevation} {...props}>
      {showContent && (
        <CardContent sx={{ 
          padding: { xs: 3, md: 4 },
          '&:last-child': { paddingBottom: { xs: 3, md: 4 } }
        }}>
          {children}
        </CardContent>
      )}
    </StyledCard>
  );
};

export default Card; 