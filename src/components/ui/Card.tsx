import React, { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps, useTheme } from '@mui/material';

interface CardProps extends Omit<MuiCardProps, 'variant'> {
  children?: ReactNode;
  elevation?: number;
}

const Card = ({ children, elevation = 1, ...props }: CardProps) => {
  const theme = useTheme();
  
  return (
    <MuiCard 
      elevation={elevation}
      {...props}
      sx={{ 
        borderRadius: 2,
        transition: 'all 0.2s ease-in-out',
        backgroundColor: 'background.paper',
        borderColor: 'divider',
        ...props.sx 
      }}
    >
      <CardContent>
        {children}
      </CardContent>
    </MuiCard>
  );
};

export default Card; 