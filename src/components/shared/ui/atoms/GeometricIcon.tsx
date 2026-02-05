import React from 'react';
import { Box, styled } from '@mui/material';
import { useColors } from '../../../../hooks';

interface GeometricIconProps {
  type: 'arrow-up' | 'arrow-down' | 'arrow-right' | 'arrow-left' | 'plus' | 'minus' | 'circle' | 'square' | 'triangle' | 'cross' | 'line' | 'dot' | 'search' | 'clear' | 'check';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  variant?: 'filled' | 'outline' | 'minimal';
  onClick?: () => void;
}

const IconContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'iconSize' && prop !== 'isClickable',
})<{ iconSize: string; isClickable: boolean }>(({ theme, iconSize, isClickable }) => {
  const sizeMap = {
    small: {
      width: 24,
      height: 24,
      borderRadius: 4,
    },
    medium: {
      width: 32,
      height: 32,
      borderRadius: 6,
    },
    large: {
      width: 48,
      height: 48,
      borderRadius: 8,
    },
  };

  return {
    ...sizeMap[iconSize as keyof typeof sizeMap],
    cursor: isClickable ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    userSelect: 'none',
    '&:hover': isClickable ? {
      transform: 'scale(1.1)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    } : {},
    '&:active': {
      transform: 'scale(0.95)',
    },
  };
});

const GeometricIcon: React.FC<GeometricIconProps> = (props) => {
  const {
    type,
    size = 'medium',
    color,
    variant = 'filled',
    onClick
  } = props;
  
  const colors = useColors();
  const iconColor = color || colors.contrast.text.primary;
  
  const getIconStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size === 'small' ? '14px' : size === 'large' ? '24px' : '18px',
      fontWeight: 500,
      fontFamily: '"Red Hat Display", sans-serif',
    };

    switch (variant) {
      case 'outline':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          border: `2px solid ${iconColor}`,
          color: iconColor,
        };
      case 'minimal':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: iconColor,
        };
      default: // filled
        return {
          ...baseStyles,
          backgroundColor: iconColor,
          color: iconColor === colors.palette.white ? colors.palette.black : colors.palette.white,
          border: 'none',
        };
    }
  };

  const renderIcon = () => {
    const iconProps = {
      style: {
        fontSize: 'inherit',
      }
    };

    switch (type) {
      case 'arrow-up':
        return <span {...iconProps}>↑</span>;
      case 'arrow-down':
        return <span {...iconProps}>↓</span>;
      case 'arrow-right':
        return <span {...iconProps}>→</span>;
      case 'arrow-left':
        return <span {...iconProps}>←</span>;
      case 'plus':
        return <span {...iconProps}>+</span>;
      case 'minus':
        return <span {...iconProps}>−</span>;
      case 'circle':
        return <span {...iconProps}>●</span>;
      case 'square':
        return <span {...iconProps}>■</span>;
      case 'triangle':
        return <span {...iconProps}>▲</span>;
      case 'cross':
        return <span {...iconProps}>✕</span>;
      case 'line':
        return <span {...iconProps}>—</span>;
      case 'dot':
        return <span {...iconProps}>•</span>;
      case 'search':
        return <span {...iconProps}>[?]</span>;
      case 'clear':
        return <span {...iconProps}>✕</span>;
      case 'check':
        return <span {...iconProps}>✓</span>;
      default:
        return <span {...iconProps}>○</span>;
    }
  };

  return (
    <IconContainer 
      iconSize={size}
      isClickable={!!onClick}
      onClick={onClick}
      sx={getIconStyles()}
    >
      {renderIcon()}
    </IconContainer>
  );
};

export default GeometricIcon;