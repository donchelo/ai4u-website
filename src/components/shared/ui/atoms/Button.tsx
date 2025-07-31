import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

// Botón personalizado con estilos glassmorphism consistentes con AI4U
const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '16px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '12px 28px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: 'none',
  fontFamily: '"Red Hat Display", sans-serif',
  position: 'relative',
  overflow: 'hidden',
  
  // Estilos para variante primaria - Glassmorphism con Neon Blaze
  '&.MuiButton-containedPrimary': {
    background: 'linear-gradient(135deg, rgba(255, 92, 0, 0.9), rgba(255, 116, 119, 0.8))',
    color: '#FFFFFF',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
    fontWeight: 600,
    boxShadow: '0 8px 32px rgba(255, 92, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    '&:hover': {
      background: 'linear-gradient(135deg, rgba(255, 92, 0, 1), rgba(255, 116, 119, 0.9))',
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 40px rgba(255, 92, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    },
    '&:active': {
      transform: 'translateY(0px)',
    },
  },
  
  // Estilos para variante secundaria - Glassmorphism suave
  '&.MuiButton-containedSecondary': {
    background: 'rgba(255, 255, 255, 0.15)',
    color: '#0A0A0A',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.25)',
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
    },
    '&:active': {
      transform: 'translateY(0px)',
    },
  },
  
  // Estilos para variante outline - Borde glassmorphism
  '&.MuiButton-outlined': {
    background: 'rgba(255, 255, 255, 0.08)',
    color: '#FF5C00',
    border: '1px solid rgba(255, 92, 0, 0.3)',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      background: 'rgba(255, 92, 0, 0.1)',
      borderColor: 'rgba(255, 92, 0, 0.5)',
      transform: 'translateY(-1px)',
      boxShadow: '0 8px 24px rgba(255, 92, 0, 0.15)',
    },
    '&:active': {
      transform: 'translateY(0px)',
    },
  },
  
  // Nueva variante glass - Glassmorphism puro
  '&.MuiButton-text': {
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#0A0A0A',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(24px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
    },
    '&:active': {
      transform: 'translateY(0px)',
    },
  },
  
  // Estilos para tamaños
  '&.MuiButton-sizeSmall': {
    padding: '8px 20px',
    fontSize: '0.875rem',
    borderRadius: '12px',
  },
  '&.MuiButton-sizeMedium': {
    padding: '12px 28px',
    fontSize: '1rem',
    borderRadius: '16px',
  },
  '&.MuiButton-sizeLarge': {
    padding: '16px 36px',
    fontSize: '1.125rem',
    borderRadius: '20px',
  },
  
  // Estilos para estado deshabilitado
  '&.Mui-disabled': {
    background: 'rgba(125, 132, 139, 0.1)',
    color: 'rgba(125, 132, 139, 0.6)',
    border: '1px solid rgba(125, 132, 139, 0.2)',
    backdropFilter: 'blur(8px)',
    transform: 'none',
    boxShadow: 'none',
    '&:hover': {
      transform: 'none',
    },
  },
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
    case 'glass':
      muiVariant = 'text';
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