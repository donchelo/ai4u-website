import React from 'react';
import { Box, Stack } from '@mui/material';
import { SmallText, ContextualLink, GeometricIcon } from '../atoms';
import { useColors } from '../../../../hooks';

interface ServiceCrossLinkProps {
  serviceName: string;
  serviceSlug: string;
  description?: string;
  caseStudy?: {
    client: string;
    sector: string;
    slug: string;
  };
  variant?: 'minimal' | 'detailed';
  className?: string;
}

/**
 * ServiceCrossLink - Enlaces cruzados entre servicios y casos
 * 
 * Conecta servicios con casos de uso de forma contextual
 * Optimizado para SEO y distribución semántica de enlaces
 * 
 * @example
 * <ServiceCrossLink 
 *   serviceName="SuperAI Empresarial"
 *   serviceSlug="superai-empresarial"
 *   caseStudy={{ client: "True", sector: "Fashion", slug: "fashion" }}
 * />
 */
const ServiceCrossLink: React.FC<ServiceCrossLinkProps> = (props) => {
  const {
    serviceName,
    serviceSlug,
    description,
    caseStudy,
    variant = 'minimal',
    className,
  } = props;
  const colors = useColors();

  if (variant === 'minimal') {
    return (
      <Box className={className} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
        <ContextualLink
          to={`/servicios#${serviceSlug}`}
          variant="inline"
          trackingLabel={`service_cross_link_${serviceSlug}`}
          ariaLabel={`Conoce más sobre ${serviceName}`}
        >
          <SmallText sx={{ fontWeight: 500 }}>
            {serviceName}
          </SmallText>
        </ContextualLink>
        <GeometricIcon 
          type="circle" 
          size="small" 
          color={colors.contrast.text.disabled} 
          variant="minimal" 
        />
      </Box>
    );
  }

  return (
    <Box 
      className={className}
      sx={{ 
        p: 3,
        borderRadius: 2,
        backgroundColor: colors.contrast.surface,
        border: `1px solid ${colors.contrast.divider}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: colors.palette.accent,
          backgroundColor: colors.palette.white,
        }
      }}
    >
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <GeometricIcon 
            type="square" 
            size="small" 
            color={colors.palette.accent} 
            variant="filled" 
          />
          <ContextualLink
            to={`/servicios#${serviceSlug}`}
            variant="accent"
            trackingLabel={`service_detailed_${serviceSlug}`}
            ariaLabel={`Conoce el servicio ${serviceName}`}
          >
            <SmallText sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
              {serviceName}
            </SmallText>
          </ContextualLink>
        </Box>

        {description && (
          <SmallText 
            sx={{ 
              color: colors.contrast.text.secondary,
              fontSize: '0.8rem',
              lineHeight: 1.5
            }}
          >
            {description}
          </SmallText>
        )}

        {caseStudy && (
          <Box sx={{ pt: 1, borderTop: `1px solid ${colors.contrast.divider}` }}>
            <SmallText 
              sx={{ 
                color: colors.contrast.text.secondary,
                fontSize: '0.75rem',
                mb: 1
              }}
            >
              Caso real:
            </SmallText>
            <ContextualLink
              to={`/casos-de-uso#${caseStudy.slug}`}
              variant="subtle"
              trackingLabel={`case_from_service_${serviceSlug}_to_${caseStudy.slug}`}
              ariaLabel={`Ver caso de uso en ${caseStudy.sector} con ${caseStudy.client}`}
            >
              <SmallText sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
                {caseStudy.client} - {caseStudy.sector}
              </SmallText>
            </ContextualLink>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default ServiceCrossLink;