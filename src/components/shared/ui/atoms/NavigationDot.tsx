import React from 'react';
import { Box } from '@mui/material';
import { useColors } from '../../../../hooks';

interface NavigationDotProps {
  variant?: 'active' | 'inactive' | 'separator';
  size?: 'small' | 'medium';
  className?: string;
}

/**
 * NavigationDot - Indicador geométrico minimalista para navegación
 * 
 * Componente sutil para separar visualmente enlaces relacionados
 * Sigue la filosofía de geometric icons del sistema AI4U
 * 
 * @example
 * <NavigationDot variant="active" size="medium" />
 * <NavigationDot variant="separator" size="small" />
 */
const NavigationDot: React.FC<NavigationDotProps> = (props) => {
  const {
    variant = 'separator',
    size = 'small',
    className,
  } = props;
  const colors = useColors();

  const getSize = () => {
    switch (size) {
      case 'medium':
        return { width: 8, height: 8 };
      case 'small':
      default:
        return { width: 4, height: 4 };
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'active':
        return {
          backgroundColor: colors.palette.success,
          opacity: 1,
        };
      case 'inactive':
        return {
          backgroundColor: colors.contrast.text.secondary,
          opacity: 0.4,
        };
      case 'separator':
      default:
        return {
          backgroundColor: colors.contrast.text.secondary,
          opacity: 0.3,
        };
    }
  };

  return (
    <Box
      className={className}
      sx={{
        ...getSize(),
        borderRadius: '50%',
        ...getVariantStyles(),
        flexShrink: 0,
        transition: 'all 0.3s ease',
      }}
    />
  );
};

export default NavigationDot;