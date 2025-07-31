import React, { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps, useTheme, styled } from '@mui/material';

interface CardProps extends Omit<MuiCardProps, 'variant'> {
  children?: ReactNode;
  variant?: 'glass' | 'dark' | 'light' | 'primary' | 'accent';
  elevation?: number;
  showContent?: boolean;
}

// Componente Card rediseñado con glassmorphism y estilos minimalistas
const StyledCard = styled(MuiCard)<{ cardVariant?: string }>(({ theme, cardVariant }) => {
  const baseStyles = {
    borderRadius: '24px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    fontFamily: '"Red Hat Display", sans-serif',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  };

  switch (cardVariant) {
    case 'glass':
      return {
        ...baseStyles,
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        '&:hover': {
          ...baseStyles['&:hover'],
          background: 'rgba(255, 255, 255, 0.18)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        },
      };
    
    case 'dark':
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95), rgba(45, 45, 45, 0.9))',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#FFFFFF',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        '&:hover': {
          ...baseStyles['&:hover'],
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        },
      };
    
    case 'primary':
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, rgba(255, 92, 0, 0.15), rgba(255, 116, 119, 0.1))',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 92, 0, 0.2)',
        boxShadow: '0 8px 32px rgba(255, 92, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        '&:hover': {
          ...baseStyles['&:hover'],
          background: 'linear-gradient(135deg, rgba(255, 92, 0, 0.2), rgba(255, 116, 119, 0.15))',
          boxShadow: '0 12px 40px rgba(255, 92, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        },
      };
    
    case 'accent':
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, rgba(182, 202, 64, 0.15), rgba(31, 169, 246, 0.1))',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(182, 202, 64, 0.3)',
        boxShadow: '0 8px 32px rgba(182, 202, 64, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        '&:hover': {
          ...baseStyles['&:hover'],
          background: 'linear-gradient(135deg, rgba(182, 202, 64, 0.2), rgba(31, 169, 246, 0.15))',
          boxShadow: '0 12px 40px rgba(182, 202, 64, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        },
      };
    
    default: // light
      return {
        ...baseStyles,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        '&:hover': {
          ...baseStyles['&:hover'],
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        },
      };
  }
});

const Card = ({ 
  children, 
  variant = 'light', 
  elevation = 0, 
  showContent = true,
  ...props 
}: CardProps) => {
  return (
    <StyledCard 
      cardVariant={variant}
      elevation={0}
      {...props}
      sx={{ 
        ...props.sx 
      }}
    >
      {showContent ? (
        <CardContent sx={{
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px'
          }
        }}>
          {children}
        </CardContent>
      ) : (
        children
      )}
    </StyledCard>
  );
};

export default Card; 