import React from 'react';
import { Button } from '../atoms';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { analytics } from '../../../../utils/analytics';
import { APP_CONFIG } from '../../../../utils/constants';

const WHATSAPP_URL = `https://wa.me/${APP_CONFIG.CONTACT.WHATSAPP}?text=${encodeURIComponent(
  APP_CONFIG.CONTACT.WHATSAPP_MESSAGE
)}`;

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
  const defaultText = 'hablemos por WhatsApp';
  return (
    <Button
      variant={variant as ButtonVariant}
      size={size as ButtonSize}
      onClick={() => {
        analytics.trackConsultationRequest('whatsapp', 'diagnostic');
        window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
      }}
      startIcon={showIcon ? <WhatsAppIcon /> : undefined}
      className={className}
      sx={sx}
    >
      {text || defaultText}
    </Button>
  );
};

export default DiagnosticCTA;
