import React from 'react';
import { Box, styled } from '@mui/material';

interface GeometricIconProps {
  type: 'arrow-up' | 'arrow-down' | 'arrow-right' | 'arrow-left' | 'plus' | 'minus' | 'circle' | 'square' | 'triangle' | 'cross' | 'line' | 'dot';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  variant?: 'filled' | 'outline' | 'minimal';
  onClick?: () => void;
}

const IconContainer = styled(Box)<{ 
  iconSize?: string;
  isClickable?: boolean;
}>(({ theme, iconSize, isClickable }) => {
  const sizeMap = {
    small: '32px',
    medium: '48px',
    large: '64px'
  };
  
  const size = sizeMap[iconSize as keyof typeof sizeMap] || sizeMap.medium;
  
  return {
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: isClickable ? 'pointer' : 'default',
    userSelect: 'none',
    ...(isClickable && {
      '&:hover': {
        transform: 'scale(1.05)',
      },
      '&:active': {
        transform: 'scale(0.95)',
      },
    }),
  };
});

const GeometricIcon: React.FC<GeometricIconProps> = (props) => {
  const {
    type,
    size = 'medium',
    color = '#000000',
    variant = 'filled',
    onClick
  } = props;
  
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
          border: `2px solid ${color}`,
          color: color,
        };
      case 'minimal':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: color,
        };
      default: // filled
        return {
          ...baseStyles,
          backgroundColor: color,
          color: color === '#FFFFFF' ? '#000000' : '#FFFFFF',
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