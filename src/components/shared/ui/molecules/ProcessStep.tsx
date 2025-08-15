import React from 'react';
import { Box, BoxProps, Typography, styled } from '@mui/material';
import { BodyText } from '../atoms';

interface ProcessStepProps extends Omit<BoxProps, 'component'> {
  number: number;
  title: string;
  description: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

// Styled component para números gigantes minimalistas
const StepNumber = styled(Typography)<{ stepSize: string }>(({ stepSize, theme }) => ({
  fontSize: stepSize === 'small' 
    ? '3rem' 
    : stepSize === 'large' 
      ? '8rem' 
      : '5rem',
  fontWeight: 900,
  lineHeight: 0.8,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: '-0.05em',
  color: theme.palette.text.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: stepSize === 'small' 
      ? '2.5rem' 
      : stepSize === 'large' 
        ? '6rem' 
        : '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: stepSize === 'small' 
      ? '2rem' 
      : stepSize === 'large' 
        ? '5rem' 
        : '3.5rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: stepSize === 'small' 
      ? '1.8rem' 
      : stepSize === 'large' 
        ? '4rem' 
        : '3rem',
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
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          numberSize: 80,
          fontSize: '3rem',
          titleSize: '1.1rem',
          descriptionSize: '0.9rem'
        };
      case 'large':
        return {
          numberSize: 160,
          fontSize: '8rem',
          titleSize: '1.6rem',
          descriptionSize: '1.2rem'
        };
      default:
        return {
          numberSize: 120,
          fontSize: '5rem',
          titleSize: '1.3rem',
          descriptionSize: '1rem'
        };
    }
  };

  const { numberSize, titleSize, descriptionSize } = getSizeStyles();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        mb: 3,
        alignItems: 'flex-start',
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
          mr: 4,
          position: 'relative',
        }}
      >
        <StepNumber
          stepSize={size}
          sx={{
            textAlign: 'center',
            fontWeight: 900,
          }}
        >
          {number}
        </StepNumber>
      </Box>
      <Box sx={{ flex: 1, pt: size === 'large' ? 3 : size === 'medium' ? 2 : 1 }}>
        <BodyText 
          sx={{ 
            fontWeight: 700, 
            fontSize: titleSize,
            mb: 1.5,
            color: 'text.primary',
            lineHeight: 1.2,
            letterSpacing: '-0.01em'
          }}
        >
          {title}
        </BodyText>
        <BodyText 
          color="text.secondary" 
          sx={{ 
            fontSize: descriptionSize,
            lineHeight: 1.6,
            opacity: 0.85,
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