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
  
  // Estilos base minimalistas usando tokens
  const baseStyles = {
    borderRadius: theme.spacing(2),
    transition: theme.transitions.create(['box-shadow', 'border-color'], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
    position: 'relative' as const,
    overflow: 'hidden' as const,
    fontFamily: theme.typography.fontFamily,
    // Sin transformaciones dramáticas
    '&:hover': {
      transform: 'none',
    },
  };

  // Variantes usando tokens del sistema
  switch (cardVariant) {
    case 'elevated':
      return {
        ...baseStyles,
        backgroundColor: isLight ? cardVariants.light.background : cardVariants.dark.background,
        border: 'none',
        boxShadow: isLight ? SHADOW_TOKENS.md : SHADOW_TOKENS.ai4u.cardDark,
        color: isLight ? cardVariants.light.text : cardVariants.dark.text,
        '&:hover': {
          ...baseStyles['&:hover'],
          boxShadow: isLight ? SHADOW_TOKENS.lg : SHADOW_TOKENS['2xl'],
        },
      };
    
    case 'outlined':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        border: `1px solid ${contrast.border}`,
        boxShadow: 'none',
        color: contrast.text.primary,
        '&:hover': {
          ...baseStyles['&:hover'],
          borderColor: contrast.divider,
        },
      };
    
    default:
      return {
        ...baseStyles,
        backgroundColor: isLight ? cardVariants.light.background : cardVariants.dark.background,
        border: `1px solid ${contrast.border}`,
        boxShadow: 'none',
        color: isLight ? cardVariants.light.text : cardVariants.dark.text,
        '&:hover': {
          ...baseStyles['&:hover'],
          borderColor: contrast.divider,
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