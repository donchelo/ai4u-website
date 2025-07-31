import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Tabs, 
  Tab, 
  useTheme, 
  styled 
} from '@mui/material';
import { H4, BodyText } from '../atoms';

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
            background: '#FF5C00',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(255, 92, 0, 0.3)',
          } : {
            color: 'text.secondary',
            '&:hover': {
              color: 'text.primary',
              background: 'rgba(255, 255, 255, 0.2)',
            },
          }),
        };
      
      case 'vertical':
        return {
          ...baseStyles,
          py: 1.5,
          px: 2,
          borderRadius: 1,
          fontSize: '0.875rem',
          justifyContent: 'flex-start',
          width: '100%',
          ...(isActive ? {
            background: 'rgba(255, 92, 0, 0.1)',
            color: '#FF5C00',
            borderLeft: `4px solid #FF5C00`,
          } : {
            color: 'text.secondary',
            '&:hover': {
              color: 'text.primary',
              background: 'rgba(255, 255, 255, 0.1)',
            },
          }),
        };
      
      default: // horizontal
        return {
          ...baseStyles,
          py: 1,
          px: 2,
          borderRadius: 1,
          fontSize: '0.875rem',
          ...(isActive ? {
            background: '#FF5C00',
            color: '#FFFFFF',
          } : {
            color: 'text.secondary',
            '&:hover': {
              color: 'text.primary',
              background: 'rgba(255, 255, 255, 0.1)',
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
          gap: 2,
          overflowX: 'auto',
          py: 2,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        };
      case 'vertical':
        return {
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        };
      default: // horizontal
        return {
          display: 'flex',
          gap: 2,
        };
    }
  };

  return (
    <Box sx={getContainerStyles()} className={className}>
      {variant === 'tabs' ? (
        <Tabs 
          value={activeItem || false} 
          onChange={(_, newValue) => {
            const item = items.find(i => i.id === newValue);
            if (item) handleItemClick(item);
          }}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#FF5C00',
            },
            '& .MuiTab-root': {
              color: 'text.secondary',
              fontWeight: 600,
              textTransform: 'none',
              minWidth: 'auto',
              '&.Mui-selected': {
                color: '#FF5C00',
              },
            },
          }}
        >
          {items.map((item) => (
            <Tab 
              key={item.id} 
              label={item.label} 
              value={item.id}
            />
          ))}
        </Tabs>
      ) : (
        items.map((item) => (
          <Button
            key={item.id}
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            sx={getButtonStyles(item)}
          >
            {item.label}
          </Button>
        ))
      )}
    </Box>
  );
};

export default Navigation; 