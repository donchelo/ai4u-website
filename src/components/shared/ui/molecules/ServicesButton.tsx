import React from 'react';
import { Button } from '../atoms';
import { useNavigate } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ServicesButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showIcon?: boolean;
  text?: string;
  className?: string;
}

export const ServicesButton = ({
  variant = 'primary' as ButtonVariant,
  size = 'medium' as ButtonSize,
  showIcon = false,
  text = 'Nuestros Servicios',
  className,
}: ServicesButtonProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/servicios');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      variant={variant as ButtonVariant}
      size={size as ButtonSize}
      onClick={handleClick}
      startIcon={showIcon ? <WorkIcon /> : undefined}
      className={className}
    >
      {text}
    </Button>
  );
};

export default ServicesButton; 