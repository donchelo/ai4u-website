import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  color,
  ...props
}: ButtonProps) => {
  // Mapeo de variantes personalizadas a variantes de Material UI
  let muiVariant: MuiButtonProps['variant'] = 'contained';
  let muiColor: MuiButtonProps['color'] = 'primary';

  switch (variant) {
    case 'primary':
      muiVariant = 'contained';
      muiColor = 'primary';
      break;
    case 'secondary':
      muiVariant = 'contained';
      muiColor = 'secondary';
      break;
    case 'outline':
      muiVariant = 'outlined';
      muiColor = 'primary';
      break;
  }

  return (
    <MuiButton
      variant={muiVariant}
      color={color || muiColor}
      size={size}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button; 