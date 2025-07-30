import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { BodyText } from './Typography';

interface ProcessStepProps extends Omit<BoxProps, 'component'> {
  number: number;
  title: string;
  description: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

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
          circleSize: 32,
          fontSize: '1rem',
          titleSize: '0.9rem',
          descriptionSize: '0.8rem'
        };
      case 'large':
        return {
          circleSize: 60,
          fontSize: '1.5rem',
          titleSize: '1.1rem',
          descriptionSize: '0.9rem'
        };
      default:
        return {
          circleSize: 40,
          fontSize: '1.2rem',
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
        mb: 2,
        ...sx 
      }}
      {...props}
    >
      <Box 
        sx={{ 
          width: circleSize, 
          height: circleSize, 
          borderRadius: '50%', 
          bgcolor: color, 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexShrink: 0,
          mr: 2,
          fontSize,
          fontWeight: 'bold'
        }}
      >
        {number}
      </Box>
      <Box sx={{ flex: 1 }}>
        <BodyText 
          sx={{ 
            fontWeight: 600, 
            fontSize: titleSize,
            mb: 0.5
          }}
        >
          {title}
        </BodyText>
        <BodyText 
          color="text.secondary" 
          sx={{ fontSize: descriptionSize }}
        >
          {description}
        </BodyText>
      </Box>
    </Box>
  );
};

export default ProcessStep; 