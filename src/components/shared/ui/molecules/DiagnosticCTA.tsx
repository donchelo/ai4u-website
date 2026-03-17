import React from 'react';
import { Button } from '../atoms';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { analytics } from '../../../../utils/analytics';
import { APP_CONFIG } from '../../../../utils/constants';

const CALENDLY_URL = `https://${APP_CONFIG.CONTACT.CALENDLY}`;

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface DiagnosticCTAProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showIcon?: boolean;
  text?: string;
  className?: string;
  sx?: any;
}

export const DiagnosticCTA = ({
  variant = 'primary' as ButtonVariant,
  size = 'medium' as ButtonSize,
  showIcon = false,
  text,
  className,
  sx,
}: DiagnosticCTAProps) => {
  const defaultText = 'Diagnóstico gratis';
  return (
    <Button
      variant={variant as ButtonVariant}
      size={size as ButtonSize}
      onClick={() => {
        analytics.trackConsultationRequest('calendly', 'diagnostic');
        window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
      }}
      startIcon={showIcon ? <CalendarMonthIcon /> : undefined}
      className={className}
      sx={sx}
    >
      {text || defaultText}
    </Button>
  );
};

export default DiagnosticCTA;
