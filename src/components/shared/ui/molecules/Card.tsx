import React, { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps, styled } from '@mui/material';

interface CardProps extends Omit<MuiCardProps, 'variant'> {
  children?: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  elevation?: number;
  showContent?: boolean;
}

// Card minimalista sin efectos glassmorphism complejos
const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'cardVariant',
})<{ cardVariant?: CardProps['variant'] }>(({ theme, cardVariant }) => {
  const isLight = theme.palette.mode === 'light';
  
  // Estilos base minimalistas
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

  // Variantes simplificadas
  switch (cardVariant) {
    case 'elevated':
      return {
        ...baseStyles,
        backgroundColor: isLight ? '#FFFFFF' : '#171717',
        border: 'none',
        boxShadow: isLight 
          ? '0 1px 3px rgba(0, 0, 0, 0.1)' 
          : '0 1px 3px rgba(0, 0, 0, 0.3)',
        color: isLight ? '#000000' : '#FFFFFF',
        '&:hover': {
          ...baseStyles['&:hover'],
          boxShadow: isLight 
            ? '0 4px 12px rgba(0, 0, 0, 0.15)' 
            : '0 4px 12px rgba(0, 0, 0, 0.4)',
        },
      };
    
    case 'outlined':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        border: `1px solid ${isLight ? '#E5E5E5' : '#404040'}`,
        boxShadow: 'none',
        color: isLight ? '#000000' : '#FFFFFF',
        '&:hover': {
          ...baseStyles['&:hover'],
          borderColor: isLight ? '#D4D4D4' : '#525252',
        },
      };
    
    default:
      return {
        ...baseStyles,
        backgroundColor: isLight ? '#FFFFFF' : '#171717',
        border: `1px solid ${isLight ? '#F5F5F5' : '#262626'}`,
        boxShadow: 'none',
        color: isLight ? '#000000' : '#FFFFFF',
        '&:hover': {
          ...baseStyles['&:hover'],
          borderColor: isLight ? '#E5E5E5' : '#404040',
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