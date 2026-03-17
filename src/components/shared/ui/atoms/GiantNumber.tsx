import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { TEXT_VARIANTS } from '../tokens/typography';

interface GiantNumberProps extends BoxProps {
  children: React.ReactNode;
  numberVariant?: 'primary' | 'outline';
}

export const GiantNumber = ({ 
  children, 
  numberVariant = 'primary', 
  sx, 
  ...props 
}: GiantNumberProps) => {
  return (
    <Box
      {...props}
      sx={{
        ...TEXT_VARIANTS.display.number,
        display: 'inline-block',
        ...(numberVariant === 'outline' && {
          color: 'transparent',
          WebkitTextStroke: (theme) => `2px ${theme.palette.mode === 'light' ? '#000' : '#fff'}`,
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default GiantNumber;
