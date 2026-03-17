import React, { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps, styled, Box } from '@mui/material';
import { useColors } from '../../../../hooks';
import { AI4U_PALETTE } from '../tokens/palette';
import { TEXT_VARIANTS } from '../tokens/typography';

interface CardProps extends Omit<MuiCardProps, 'variant'> {
  children?: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'industrial';
  elevation?: number;
  showContent?: boolean;
  label?: string; // Metadata label e.g. "SECTION_01"
  sx?: any;
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'cardVariant' && prop !== 'forceMode',
})<{ cardVariant?: CardProps['variant']; forceMode?: 'light' | 'dark' }>(({ theme, cardVariant, forceMode }) => {
  const isLight = forceMode ? forceMode === 'light' : theme.palette.mode === 'light';

  const baseStyles = {
    borderRadius: 0, // Brutalist zero radius
    transition: 'all 0.2s steps(4, end)',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    backgroundColor: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
    color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
    border: `1px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
    boxShadow: 'none',
  };

  switch (cardVariant) {
    case 'elevated':
      return {
        ...baseStyles,
        border: `2px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
        '&:hover': {
          transform: 'translate(-4px, -4px)',
          boxShadow: isLight ? `8px 8px 0px ${AI4U_PALETTE.black}` : `8px 8px 0px ${AI4U_PALETTE.white}`,
        },
      };
    
    case 'outlined':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        border: `1px solid ${isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'}`,
        '&:hover': {
          borderColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
          bgcolor: isLight ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)'
        },
      };

    case 'industrial':
      return {
        ...baseStyles,
        border: `4px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '40px',
          borderBottom: `1px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
          zIndex: 0,
        }
      };
    
    default:
      return baseStyles;
  }
});

const LabelText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 4,
  left: 8,
  ...TEXT_VARIANTS.label.secondary,
  fontSize: '0.65rem',
  zIndex: 1,
  pointerEvents: 'none',
}));

export const Card = ({
  children,
  variant = 'default',
  elevation = 0,
  showContent = true,
  label,
  sx,
  ...props
}: CardProps) => {
  const colors = useColors();
  return (
    <StyledCard 
      cardVariant={variant} 
      elevation={elevation} 
      forceMode={colors.effectiveMode} 
      sx={sx}
      {...props}
    >
      {label && <LabelText>"{label}"</LabelText>}
      {showContent && (
        <CardContent sx={{ 
          padding: { xs: 3, md: 4 },
          pt: label ? 6 : { xs: 3, md: 4 }, // Add padding if label exists
          '&:last-child': { paddingBottom: { xs: 3, md: 4 } },
          position: 'relative',
          zIndex: 1
        }}>
          {children}
        </CardContent>
      )}
    </StyledCard>
  );
};

export default Card;