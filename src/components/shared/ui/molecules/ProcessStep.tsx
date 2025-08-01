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

// Styled component para números gigantes en los pasos del proceso
const StepNumber = styled(Typography)<{ stepSize: string }>(({ stepSize, theme }) => ({
  fontSize: stepSize === 'small' 
    ? '1.5rem' 
    : stepSize === 'large' 
      ? '3.5rem' 
      : '2.5rem',
  fontWeight: 900,
  lineHeight: 0.8,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: '-0.02em',
  textShadow: '0 4px 8px rgba(0,0,0,0.2)',
  [theme.breakpoints.down('sm')]: {
    fontSize: stepSize === 'small' 
      ? '1.2rem' 
      : stepSize === 'large' 
        ? '2.8rem' 
        : '2rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: stepSize === 'small' 
      ? '1rem' 
      : stepSize === 'large' 
        ? '2.5rem' 
        : '1.8rem',
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
          circleSize: 48,
          fontSize: '1.5rem',
          titleSize: '0.9rem',
          descriptionSize: '0.8rem'
        };
      case 'large':
        return {
          circleSize: 100,
          fontSize: '3.5rem',
          titleSize: '1.2rem',
          descriptionSize: '1rem'
        };
      default:
        return {
          circleSize: 64,
          fontSize: '2.5rem',
          titleSize: '1rem',
          descriptionSize: '0.875rem'
        };
    }
  };

  const { circleSize, fontSize, titleSize, descriptionSize } = getSizeStyles();

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
          width: circleSize, 
          height: circleSize, 
          borderRadius: '50%', 
          background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexShrink: 0,
          mr: 3,
          position: 'relative',
          boxShadow: `0 8px 24px ${color}40`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: `0 12px 32px ${color}60`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${color} 0%, transparent 50%, ${color} 100%)`,
            zIndex: -1,
            opacity: 0.3,
          }
        }}
      >
        <StepNumber
          stepSize={size}
          sx={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 900,
          }}
        >
          {number}
        </StepNumber>
      </Box>
      <Box sx={{ flex: 1, pt: size === 'large' ? 1 : 0 }}>
        <BodyText 
          sx={{ 
            fontWeight: 600, 
            fontSize: titleSize,
            mb: 1,
            color: 'text.primary',
            lineHeight: 1.3
          }}
        >
          {title}
        </BodyText>
        <BodyText 
          color="text.secondary" 
          sx={{ 
            fontSize: descriptionSize,
            lineHeight: 1.5,
            opacity: 0.8
          }}
        >
          {description}
        </BodyText>
      </Box>
    </Box>
  );
};

export default ProcessStep; 