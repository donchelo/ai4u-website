import React, { ReactNode } from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps } from '@mui/material';

interface CardProps extends Omit<MuiCardProps, 'variant'> {
  children?: ReactNode;
}

const Card = ({ children, ...props }: CardProps) => {
  return (
    <MuiCard {...props}>
      <CardContent>
        {children}
      </CardContent>
    </MuiCard>
  );
};

export default Card; 