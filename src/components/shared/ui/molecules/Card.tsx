import React, { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps, styled } from '@mui/material';
import { useColors } from '../../../../hooks';
import { AI4U_PALETTE } from '../tokens/palette';

interface CardProps extends Omit<MuiCardProps, 'variant'> {
  children?: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  elevation?: number;
  showContent?: boolean;
}

// Card minimalista usando sistema de tokens
const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'cardVariant' && prop !== 'forceMode',
})<{ cardVariant?: CardProps['variant']; forceMode?: 'light' | 'dark' }>(({ theme, cardVariant, forceMode }) => {
  const isLight = forceMode ? forceMode === 'light' : theme.palette.mode === 'light';

  // Estilos base modernos y limpios
  const baseStyles = {
    borderRadius: 16, // Rounded corners for modern look
    transition: theme.transitions.create(['box-shadow', 'border-color', 'transform', 'background-color'], {
      duration: '0.3s',
      easing: theme.transitions.easing.easeInOut,
    }),
    position: 'relative' as const,
    overflow: 'hidden' as const,
    fontFamily: theme.typography.fontFamily,
    border: 'none',
    boxShadow: 'none',
  };

  // Variantes usando tokens del sistema
  switch (cardVariant) {
    case 'elevated':
      return {
        ...baseStyles,
        backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.gray[900],
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        boxShadow: isLight ? '0 10px 30px rgba(0,0,0,0.08)' : '0 10px 30px rgba(0,0,0,0.3)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isLight ? '0 20px 40px rgba(0,0,0,0.12)' : '0 20px 40px rgba(0,0,0,0.4)',
        },
      };
    
    case 'outlined':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        border: `1px solid ${isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        '&:hover': {
          borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        },
      };
    
    default:
      return {
        ...baseStyles,
        backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.gray[900],
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.05)' : '0 4px 20px rgba(0,0,0,0.2)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isLight ? '0 12px 28px rgba(0,0,0,0.08)' : '0 12px 28px rgba(0,0,0,0.3)',
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
  const colors = useColors();
  return (
    <StyledCard cardVariant={variant} elevation={elevation} forceMode={colors.effectiveMode} {...props}>
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