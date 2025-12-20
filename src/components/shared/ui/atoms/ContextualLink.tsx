import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { useColors } from '../../../../hooks';
import { analytics } from '../../../../utils/analytics';

interface ContextualLinkProps {
  to: string;
  variant?: 'subtle' | 'accent' | 'inline';
  trackingLabel?: string;
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/**
 * ContextualLink - Componente para enlaces internos contextuales sutiles
 * 
 * Optimizado para SEO con anchor text semántico y tracking automático
 * Diseño hipermegaminimalista que respeta el sistema de colores AI4U
 * 
 * @example
 * <ContextualLink to="/servicios" variant="accent" trackingLabel="home_to_services">
 *   Conoce nuestros servicios de IA
 * </ContextualLink>
 */
const ContextualLink: React.FC<ContextualLinkProps> = (props) => {
  const {
    to,
    variant = 'subtle',
    trackingLabel,
    children,
    className,
    ariaLabel,
  } = props;
  const colors = useColors();

  const handleClick = () => {
    if (trackingLabel) {
      analytics.trackEvent({
        action: 'internal_link_click',
        category: 'navigation',
        label: trackingLabel,
        custom_parameters: {
          from_page: window.location.pathname,
          to_page: to,
          link_variant: variant
        }
      });
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'accent':
        return {
          color: colors.palette.accent,
          fontWeight: 500,
          textDecoration: 'none',
          borderBottom: `1px solid ${colors.palette.accent}`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: colors.palette.success,
            borderBottomColor: colors.palette.success,
            transform: 'translateY(-1px)',
          }
        };
      case 'inline':
        return {
          color: 'inherit',
          textDecoration: 'underline',
          textDecorationColor: colors.contrast.text.secondary,
          transition: 'all 0.3s ease',
                  '&:hover': {
          color: colors.palette.accent,
          textDecorationColor: colors.palette.accent,
        }
        };
      case 'subtle':
      default:
        return {
          color: colors.contrast.text.secondary,
          textDecoration: 'none',
          borderBottom: `1px solid transparent`,
          transition: 'all 0.3s ease',
                  '&:hover': {
          color: colors.palette.accent,
          borderBottomColor: colors.palette.accent,
        }
        };
    }
  };

  return (
    <Link
      component={RouterLink as React.ElementType}
      to={to}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
      sx={getVariantStyles()}
    >
      {children}
    </Link>
  );
};

export default ContextualLink;