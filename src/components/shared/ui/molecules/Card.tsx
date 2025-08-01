import React, { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps, styled } from '@mui/material';
import { useColors } from '../../../../hooks';

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
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        color: '#FFFFFF', // Texto blanco para máximo contraste en glass
        '&:hover': {
          ...baseStyles['&:hover'],
          background: 'rgba(255, 255, 255, 0.22)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
        },
      };
    
    case 'dark':
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, rgba(18, 18, 18, 0.95), rgba(30, 30, 30, 0.9))',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        color: '#FFFFFF',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        '&:hover': {
          ...baseStyles['&:hover'],
          background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.95), rgba(45, 45, 45, 0.9))',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        },
      };
    
    case 'primary':
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, rgba(255, 92, 0, 0.15), rgba(255, 116, 119, 0.1))',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 92, 0, 0.2)',
        boxShadow: '0 8px 32px rgba(255, 92, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        color: '#000000', // Texto negro para máximo contraste en primary
        fontWeight: '600', // Texto más grueso para mejor legibilidad
        '&:hover': {
          ...baseStyles['&:hover'],
          background: 'linear-gradient(135deg, rgba(255, 92, 0, 0.2), rgba(255, 116, 119, 0.15))',
          boxShadow: '0 12px 40px rgba(255, 92, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        },
      };
    
    case 'accent':
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15), rgba(30, 58, 138, 0.1))',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(5, 150, 105, 0.3)',
        boxShadow: '0 8px 32px rgba(5, 150, 105, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        color: '#000000', // Texto negro para máximo contraste en accent
        fontWeight: '500', // Texto medio para mejor legibilidad
        '&:hover': {
          ...baseStyles['&:hover'],
          background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.2), rgba(30, 58, 138, 0.15))',
          boxShadow: '0 12px 40px rgba(5, 150, 105, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        },
      };
    
    default: // light
      return {
        ...baseStyles,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        color: '#000000', // Texto negro para máximo contraste en cards claras
        fontWeight: '500', // Texto medio para mejor legibilidad
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
  const colors = useColors();

  // Aplicar colores del sistema según el modo
  const getCardStyles = () => {
    switch (variant) {
      case 'glass':
        return {
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          color: colors.palette.white,
        };
      case 'dark':
        return {
          background: colors.mode === 'dark' ? colors.contrast.surface : 'linear-gradient(135deg, rgba(18, 18, 18, 0.95), rgba(30, 30, 30, 0.9))',
          color: colors.contrast.text.primary,
          border: `1px solid ${colors.contrast.border}`,
        };
      case 'primary':
        return {
          background: `linear-gradient(135deg, ${colors.palette.orange}15, ${colors.palette.orange}10)`,
          color: colors.contrast.text.primary,
          border: `1px solid ${colors.palette.orange}30`,
        };
      case 'accent':
        return {
          background: `linear-gradient(135deg, ${colors.palette.green}15, ${colors.palette.green}10)`,
          color: colors.contrast.text.primary,
          border: `1px solid ${colors.palette.green}30`,
        };
      default: // light
        return {
          background: colors.contrast.surface,
          color: colors.contrast.text.primary,
          border: `1px solid ${colors.contrast.border}`,
        };
    }
  };

  return (
    <StyledCard 
      cardVariant={variant}
      elevation={0}
      {...props}
      sx={{ 
        ...getCardStyles(),
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