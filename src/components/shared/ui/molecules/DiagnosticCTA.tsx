import React from 'react';
import { Button } from '../atoms';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CALENDLY_URL = 'https://calendly.com/mgarciap333/ai4u';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface DiagnosticCTAProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showIcon?: boolean;
  text?: string;
  className?: string;
}

export const DiagnosticCTA = ({
  variant = 'primary' as ButtonVariant,
  size = 'medium' as ButtonSize,
  showIcon = false,
  text = 'Diagnóstico gratis',
  className,
}: DiagnosticCTAProps) => {
  return (
    <Button
      variant={variant as ButtonVariant}
      size={size as ButtonSize}
      onClick={() => window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')}
      startIcon={showIcon ? <CalendarMonthIcon /> : undefined}
      className={className}
    >
      {text}
    </Button>
  );
};

export default DiagnosticCTA; 