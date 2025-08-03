import React, { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps, styled } from '@mui/material';

interface CardProps extends Omit<MuiCardProps, 'variant'> {
  children?: ReactNode;
  variant?: 'glass' | 'dark' | 'light' | 'primary' | 'accent';
  elevation?: number;
  showContent?: boolean;
}

// Optimized Card component with consolidated styling logic and proper theme integration
const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'cardVariant',
})<{ cardVariant?: CardProps['variant'] }>(({ theme, cardVariant }) => {
  const isLight = theme.palette.mode === 'light';
  
  // Base styles using theme tokens for consistency
  const baseStyles = {
    borderRadius: theme.spacing(3), // 24px with theme consistency
    transition: theme.transitions.create(['transform', 'box-shadow', 'background'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    position: 'relative' as const,
    overflow: 'hidden' as const,
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  };

  // Consolidated variant logic using theme palette
  switch (cardVariant) {
    case 'glass':
      return {
        ...baseStyles,
        background: `${theme.palette.common.white}15`,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${theme.palette.common.white}25`,
        boxShadow: `0 8px 32px ${theme.palette.common.black}12, inset 0 1px 0 ${theme.palette.common.white}40`,
        color: theme.palette.common.white,
        fontWeight: 600,
        '&:hover': {
          ...baseStyles['&:hover'],
          background: `${theme.palette.common.white}35`,
          boxShadow: `0 12px 40px ${theme.palette.common.black}25, inset 0 1px 0 ${theme.palette.common.white}70`,
        },
      };
    
    case 'dark':
      return {
        ...baseStyles,
        background: isLight 
          ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.95), rgba(30, 30, 30, 0.9))'
          : theme.palette.background.paper,
        backdropFilter: 'blur(16px)',
        border: `1px solid ${isLight ? `${theme.palette.common.white}15` : theme.palette.divider}`,
        color: isLight ? theme.palette.common.white : theme.palette.text.primary,
        fontWeight: 600,
        boxShadow: `0 8px 32px ${theme.palette.common.black}40, inset 0 1px 0 ${theme.palette.common.white}10`,
        '&:hover': {
          ...baseStyles['&:hover'],
          background: isLight 
            ? 'linear-gradient(135deg, rgba(60, 60, 60, 0.95), rgba(75, 75, 75, 0.9))'
            : theme.palette.action.hover,
          boxShadow: `0 12px 40px ${theme.palette.common.black}80, inset 0 1px 0 ${theme.palette.common.white}45`,
        },
      };
    
    case 'primary':
      return {
        ...baseStyles,
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.primary.main}10)`,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${theme.palette.primary.main}20`,
        boxShadow: `0 8px 32px ${theme.palette.primary.main}15, inset 0 1px 0 ${theme.palette.common.white}20`,
        color: theme.palette.text.primary,
        fontWeight: 600,
        '&:hover': {
          ...baseStyles['&:hover'],
          background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.primary.main}15)`,
          boxShadow: `0 12px 40px ${theme.palette.primary.main}25, inset 0 1px 0 ${theme.palette.common.white}30`,
        },
      };
    
    case 'accent':
      return {
        ...baseStyles,
        background: `linear-gradient(135deg, ${theme.palette.success.main}15, ${theme.palette.info.main}10)`,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${theme.palette.success.main}30`,
        boxShadow: `0 8px 32px ${theme.palette.success.main}15, inset 0 1px 0 ${theme.palette.common.white}20`,
        color: theme.palette.text.primary,
        fontWeight: 500,
        '&:hover': {
          ...baseStyles['&:hover'],
          background: `linear-gradient(135deg, ${theme.palette.success.main}20, ${theme.palette.info.main}15)`,
          boxShadow: `0 12px 40px ${theme.palette.success.main}25, inset 0 1px 0 ${theme.palette.common.white}30`,
        },
      };
    
    default: // light
      return {
        ...baseStyles,
        background: isLight 
          ? `${theme.palette.common.white}90`
          : theme.palette.background.paper,
        backdropFilter: 'blur(16px)',
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: `0 8px 32px ${theme.palette.common.black}08, inset 0 1px 0 ${theme.palette.common.white}60`,
        color: theme.palette.text.primary,
        fontWeight: 500,
        '&:hover': {
          ...baseStyles['&:hover'],
          background: isLight 
            ? theme.palette.common.white
            : theme.palette.action.hover,
          boxShadow: `0 12px 40px ${theme.palette.common.black}12, inset 0 1px 0 ${theme.palette.common.white}80`,
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
    >
      {showContent ? (
        <CardContent sx={{
          padding: 3, // Use theme spacing instead of hardcoded values
          '&:last-child': {
            paddingBottom: 3
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