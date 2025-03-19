import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

// Botón personalizado con estilos consistentes
const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '2px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '8px 24px',
  transition: 'all 0.3s ease',
  boxShadow: 'none',
  
  // Estilos para variante primaria
  '&.MuiButton-containedPrimary': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      boxShadow: 'none',
    },
  },
  
  // Estilos para variante secundaria
  '&.MuiButton-containedSecondary': {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      boxShadow: 'none',
    },
  },
  
  // Estilos para variante outline
  '&.MuiButton-outlined': {
    backgroundColor: 'transparent',
    borderWidth: '1px',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      borderWidth: '1px',
      boxShadow: 'none',
    },
  },
  
  // Estilos para tamaños
  '&.MuiButton-sizeSmall': {
    padding: '6px 16px',
    fontSize: '0.875rem',
  },
  '&.MuiButton-sizeMedium': {
    padding: '8px 24px',
    fontSize: '1rem',
  },
  '&.MuiButton-sizeLarge': {
    padding: '10px 32px',
    fontSize: '1.125rem',
  },
  
  // Estilos para estado deshabilitado
  '&.Mui-disabled': {
    color: theme.palette.action.disabled,
    borderColor: theme.palette.action.disabledBackground,
  }
}));

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
    <StyledButton
      variant={muiVariant}
      color={color || muiColor}
      size={size}
      disableElevation
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 