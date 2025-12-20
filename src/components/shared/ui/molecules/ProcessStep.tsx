import React from 'react';
import { Box, BoxProps, Typography, styled } from '@mui/material';
import { BodyText } from '../atoms';
import { useColors } from '../../../../hooks';

interface ProcessStepProps extends Omit<BoxProps, 'component'> {
  number: number;
  title: string;
  description: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

// Styled component para números minimalistas
const StepNumber = styled(Typography)<{ stepSize: string }>(({ stepSize, theme }) => ({
  fontSize: stepSize === 'small' 
    ? '2rem' 
    : stepSize === 'large' 
      ? '4rem' 
      : '3rem',
  fontWeight: 700,
  lineHeight: 0.9,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: '-0.02em',
  color: theme.palette.text.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: stepSize === 'small' 
      ? '1.8rem' 
      : stepSize === 'large' 
        ? '3.5rem' 
        : '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: stepSize === 'small' 
      ? '1.5rem' 
      : stepSize === 'large' 
        ? '3rem' 
        : '2.2rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: stepSize === 'small' 
      ? '1.3rem' 
      : stepSize === 'large' 
        ? '2.5rem' 
        : '2rem',
  }
}));

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  color = 'primary.main',
  size = 'medium',
  sx,
  ...props 
}: ProcessStepProps) => {
  const colors = useColors();

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          numberSize: 60,
          fontSize: '2rem',
          titleSize: '1rem',
          descriptionSize: '0.85rem'
        };
      case 'large':
        return {
          numberSize: 100,
          fontSize: '4rem',
          titleSize: '1.3rem',
          descriptionSize: '1rem'
        };
      default:
        return {
          numberSize: 80,
          fontSize: '3rem',
          titleSize: '1.1rem',
          descriptionSize: '0.9rem'
        };
    }
  };

  const { numberSize, titleSize, descriptionSize } = getSizeStyles();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        mb: 2,
        alignItems: 'flex-start',
        p: 2,
        borderRadius: 2,
        background: colors.contrast.surface,
        border: `1px solid ${colors.contrast.border}`,
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: colors.contrast.text.secondary,
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        },
        ...sx 
      }}
      {...props}
    >
      <Box 
        sx={{ 
          width: numberSize, 
          height: numberSize, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexShrink: 0,
          mr: 3,
          position: 'relative',
          borderRadius: '50%',
          background: colors.contrast.background,
          border: `2px solid ${colors.contrast.text.secondary}`,
        }}
      >
        <StepNumber
          stepSize={size}
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            color: colors.contrast.text.secondary,
          }}
        >
          {number}
        </StepNumber>
      </Box>
      <Box sx={{ flex: 1, pt: size === 'large' ? 1.5 : size === 'medium' ? 1 : 0.5 }}>
        <BodyText 
          sx={{ 
            fontWeight: 600, 
            fontSize: titleSize,
            mb: 1,
            color: colors.contrast.text.primary,
            lineHeight: 1.3,
            letterSpacing: '-0.01em'
          }}
        >
          {title}
        </BodyText>
        <BodyText 
          sx={{ 
            fontSize: descriptionSize,
            lineHeight: 1.5,
            color: colors.contrast.text.secondary,
            fontWeight: 400
          }}
        >
          {description}
        </BodyText>
      </Box>
    </Box>
  );
};

export default ProcessStep; 