import React, { useState } from 'react';
import { Button } from './Button';
import { H4, BodyText } from './Typography';

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

const Navigation = ({
  items,
  activeItem,
  onItemClick,
  variant = 'horizontal',
  className = ''
}: NavigationProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemClick = (item: NavigationItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  const baseClasses = "transition-all duration-300 font-semibold";
  
  const getItemClasses = (item: NavigationItem) => {
    const isActive = activeItem === item.id;
    const isHovered = hoveredItem === item.id;

    switch (variant) {
      case 'tabs':
        return `${baseClasses} py-2 px-4 rounded-xl text-sm whitespace-nowrap ${
          isActive
            ? 'bg-neon-blaze text-white shadow-lg'
            : 'text-gray-600 hover:text-gray-800 hover:bg-white/20'
        }`;
      
      case 'vertical':
        return `${baseClasses} py-3 px-4 rounded-lg text-sm ${
          isActive
            ? 'bg-neon-blaze/10 text-neon-blaze border-l-4 border-neon-blaze'
            : 'text-gray-600 hover:text-gray-800 hover:bg-white/10'
        }`;
      
      default: // horizontal
        return `${baseClasses} py-2 px-4 rounded-lg text-sm ${
          isActive
            ? 'bg-neon-blaze text-white'
            : 'text-gray-600 hover:text-gray-800 hover:bg-white/10'
        }`;
    }
  };

  const getContainerClasses = () => {
    switch (variant) {
      case 'tabs':
        return "flex space-x-8 overflow-x-auto py-4";
      case 'vertical':
        return "flex flex-col space-y-2";
      default: // horizontal
        return "flex space-x-4";
    }
  };

  return (
    <nav className={`${getContainerClasses()} ${className}`}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          className={getItemClasses(item)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation; 