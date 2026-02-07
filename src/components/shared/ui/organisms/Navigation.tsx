import React, { useState } from 'react';
import { 
  Box, 
  Button,
  alpha,
  useTheme
} from '@mui/material';
import { useColors } from '../../../../hooks';
import { SHADOW_TOKENS } from '../tokens/theme';

interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface NavigationProps {
  items: NavigationItem[];
  activeItem?: string;
  onItemClick?: (item: NavigationItem) => void;
  variant?: 'horizontal' | 'vertical' | 'tabs';
  className?: string;
}

// Styled components eliminado - usar estilos inline con tokens

const Navigation = ({
  items,
  activeItem,
  onItemClick,
  variant = 'horizontal',
  className = ''
}: NavigationProps) => {
  const colors = useColors();
  const theme = useTheme();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemClick = (item: NavigationItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  const getButtonStyles = (item: NavigationItem) => {
    const isActive = activeItem === item.id;

    const baseStyles = {
      fontWeight: 400,
      textTransform: 'none' as const,
      transition: 'all 0.3s ease',
    };

    switch (variant) {
      case 'tabs':
        return {
          ...baseStyles,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          whiteSpace: 'nowrap' as const,
          ...(isActive ? {
            background: colors.palette.black,
            color: colors.palette.white,
            boxShadow: SHADOW_TOKENS.ai4u.button,
          } : {
            color: colors.contrast.text.secondary,
            '&:hover': {
              color: colors.contrast.text.primary,
              background: alpha(colors.palette.white, 0.1),
            },
          }),
        };
      
      case 'vertical':
        return {
          ...baseStyles,
          width: '100%',
          justifyContent: 'flex-start',
          py: 1.5,
          px: 2,
          borderRadius: 1,
          fontSize: '0.875rem',
          ...(isActive ? {
            background: colors.palette.black,
            color: colors.palette.white,
            borderLeftWidth: 2,
            borderLeftStyle: 'solid',
            borderLeftColor: colors.palette.black,
            boxShadow: SHADOW_TOKENS.ai4u.button,
          } : {
            color: colors.contrast.text.secondary,
            borderLeftWidth: 2,
            borderLeftStyle: 'solid',
            borderLeftColor: 'transparent',
            '&:hover': {
              color: colors.contrast.text.primary,
              background: colors.helpers.state.hover,
              borderLeftColor: colors.palette.black,
            },
          }),
        };
      
      default: // horizontal
        return {
          ...baseStyles,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          whiteSpace: 'nowrap' as const,
          ...(isActive ? {
            background: colors.palette.black,
            color: colors.palette.white,
            boxShadow: SHADOW_TOKENS.ai4u.button,
          } : {
            color: colors.contrast.text.secondary,
            '&:hover': {
              color: colors.contrast.text.primary,
              background: colors.helpers.state.hover,
            },
          }),
        };
    }
  };

  const getContainerStyles = () => {
    switch (variant) {
      case 'tabs':
        return {
          display: 'flex',
          gap: 1,
          p: 1,
          borderRadius: 3,
          background: alpha(colors.palette.white, 0.05),
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.contrast.border}`,
        };
      
      case 'vertical':
        return {
          display: 'flex',
          flexDirection: 'column' as const,
          gap: 0.5,
          width: '100%',
        };
      
      default: // horizontal
        return {
          display: 'flex',
          gap: 1,
          alignItems: 'center',
          flexWrap: 'wrap' as const,
        };
    }
  };

  if (variant === 'tabs') {
    return (
      <Box sx={getContainerStyles()} className={className}>
        {items.map((item) => (
          <Button
            key={item.id}
            onClick={() => handleItemClick(item)}
            sx={getButtonStyles(item)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    );
  }

  return (
    <Box sx={getContainerStyles()} className={className}>
      {items.map((item) => (
        <Button
          key={item.id}
          onClick={() => handleItemClick(item)}
          sx={getButtonStyles(item)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default Navigation; 