import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  // Map custom variants to MUI variants
  const getMuiVariant = (): MuiButtonProps['variant'] => {
    switch (variant) {
      case 'outline': return 'outlined';
      case 'glass': return 'text';
      default: return 'contained';
    }
  };

  // Get styles for each variant using sx prop
  const getSxStyles = () => {
    const baseStyles = {
      borderRadius: size === 'small' ? 1.5 : size === 'large' ? 2.5 : 2,
      fontWeight: 600,
      textTransform: 'none',
      fontFamily: '"Red Hat Display", sans-serif',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
      '&:active': {
        transform: 'translateY(0px)',
      },
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          background: 'linear-gradient(135deg, #FF5C00, #FF7477)',
          color: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(255, 92, 0, 0.3)',
          '&:hover': {
            ...baseStyles['&:hover'],
            background: 'linear-gradient(135deg, #FF5C00, #FF5C00)',
            boxShadow: '0 8px 25px rgba(255, 92, 0, 0.4)',
          },
        };
      
      case 'secondary':
        return {
          ...baseStyles,
          backgroundColor: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
          color: isLight ? '#0A0A0A' : '#FFFFFF',
          border: `1px solid ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)'}`,
          backdropFilter: 'blur(10px)',
          '&:hover': {
            ...baseStyles['&:hover'],
            backgroundColor: isLight ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.2)',
          },
        };
      
      case 'outline':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: '#FF5C00',
          border: '2px solid #FF5C00',
          '&:hover': {
            ...baseStyles['&:hover'],
            backgroundColor: 'rgba(255, 92, 0, 0.1)',
            borderColor: '#FF5C00',
          },
        };
      
      case 'glass':
        return {
          ...baseStyles,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: isLight ? '#0A0A0A' : '#FFFFFF',
          border: `1px solid ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)'}`,
          backdropFilter: 'blur(20px)',
          '&:hover': {
            ...baseStyles['&:hover'],
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        };
      
      default:
        return baseStyles;
    }
  };

  return (
    <MuiButton
      variant={getMuiVariant()}
      size={size}
      sx={getSxStyles()}
      disableElevation
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button; 