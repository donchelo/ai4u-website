import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  styled 
} from '@mui/material';
import { useColors } from '../../../../hooks';

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

// Styled components para glassmorfismo
const GlassmorphismButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: theme.spacing(2),
  color: theme.palette.text.primary,
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-1px)',
  },
  '&.Mui-selected': {
    background: '#FF5C00',
    color: '#FFFFFF',
    boxShadow: '0 4px 12px rgba(255, 92, 0, 0.3)',
  },
}));

const Navigation = ({
  items,
  activeItem,
  onItemClick,
  variant = 'horizontal',
  className = ''
}: NavigationProps) => {
  const colors = useColors();
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
    const isHovered = hoveredItem === item.id;

    const baseStyles = {
      fontWeight: 600,
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
            background: colors.palette.accent,
            color: colors.palette.white,
            boxShadow: '0 4px 12px rgba(255, 92, 0, 0.3)',
          } : {
            color: colors.contrast.text.secondary,
            '&:hover': {
              color: colors.contrast.text.primary,
              background: 'rgba(255, 255, 255, 0.2)',
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
            background: colors.palette.accent,
            color: colors.palette.white,
            borderLeft: `4px solid ${colors.palette.accent}`,
            boxShadow: '0 4px 12px rgba(255, 92, 0, 0.3)',
          } : {
            color: colors.contrast.text.secondary,
            borderLeft: `4px solid transparent`,
            '&:hover': {
              color: colors.contrast.text.primary,
              background: colors.helpers.state.hover,
              borderLeft: `4px solid ${colors.palette.accent}`,
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
            background: colors.palette.accent,
            color: colors.palette.white,
            boxShadow: '0 4px 12px rgba(255, 92, 0, 0.3)',
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
          background: 'rgba(255, 255, 255, 0.05)',
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