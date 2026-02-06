import React from 'react';
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { H3, BodyText, GeometricIcon, SEOHead, ServiceThumbnail } from '../atoms';
import { useColors } from '@/hooks';
import { AI4U_PALETTE } from '@/components/shared/ui/tokens/palette';
import { Service } from '@/types/service';
import { getServiceStructuredData } from '../../../../utils/seo';
import { ProgressiveContent } from './';

interface ServiceCardProps {
  service: Service;
  showPrice?: boolean;
  compact?: boolean;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  showPrice = true, 
  compact = false,
  onClick
}) => {
  const colors = useColors();

  // Generar structured data específico para este servicio
  const serviceStructuredData = getServiceStructuredData(service);

  const getSuperCategoryText = (superCategory: string) => {
    return superCategory === 'strategy' ? 'Estrategia' : 'Operación';
  };

  return (
    <>
      {/* Structured Data para este servicio específico */}
      <SEOHead
        structuredData={serviceStructuredData}
        noIndex={true}
      />
      
      <Box sx={{
        height: '100%',
        position: 'relative',
        transition: 'all 0.2s ease',
        '&:hover': {
          '& .service-card-content': {
            borderColor: service.color || colors.contrast.text.primary,
          }
        }
      }}>
        {/* Main Card Content minimalista */}
        <Box 
          className="service-card-content" 
          onClick={onClick}
          sx={{
            p: compact ? 2.5 : 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            background: AI4U_PALETTE.white, // Siempre blanco para máximo contraste "sticker"
            border: `3px solid ${AI4U_PALETTE.black}`, // Siempre borde negro
            borderRadius: 0,
            transition: 'all 0.1s ease',
            overflow: 'hidden',
            boxShadow: `4px 4px 0px ${service.color || AI4U_PALETTE.black}`,
            cursor: onClick ? 'pointer' : 'default',
            '&:hover': {
              transform: onClick ? 'translate(-2px, -2px)' : 'none',
              boxShadow: onClick ? `8px 8px 0px ${service.color || AI4U_PALETTE.black}` : `4px 4px 0px ${service.color || AI4U_PALETTE.black}`,
            }
          }}
        >

          {/* Super Category Badge minimalista */}
          <Box sx={{ 
            position: 'absolute', 
            top: 12, 
            right: 12,
            zIndex: 2
          }}>
            <Chip 
              label={getSuperCategoryText(service.superCategory)}
              size="small"
              sx={{
                background: AI4U_PALETTE.black,
                color: AI4U_PALETTE.white,
                fontWeight: 900,
                fontSize: '0.6rem',
                height: 20,
                borderRadius: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                '& .MuiChip-label': {
                  px: 1,
                }
              }}
            />
          </Box>

          {/* Header & Content */}
          <Box sx={{ 
            mb: 2,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Typography 
              sx={{ 
                color: AI4U_PALETTE.black, // Forzar negro para el título
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                textAlign: 'left',
                textTransform: 'uppercase',
                mb: 2,
                display: 'flex',
                alignItems: 'flex-start',
                '&::before': {
                  content: '"■"',
                  color: service.color || AI4U_PALETTE.black,
                  mr: 1.5,
                  fontSize: '1.2rem',
                }
              }}
            >
              {service.title}
            </Typography>

            <BodyText sx={{ 
              lineHeight: 1.4,
              color: AI4U_PALETTE.black, // Forzar negro para el cuerpo
              fontSize: '1rem',
              textAlign: 'left',
              mb: 0,
              fontWeight: 500,
              opacity: 0.9,
              pl: 4 
            }}>
              {service.description}
            </BodyText>
          </Box>

          {/* Footer minimalista */}
          <Box sx={{ 
            mt: 'auto',
            pt: 2,
            borderTop: `1px solid ${colors.contrast.divider}`
          }}>
            {showPrice && (
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 1
              }}>
                <BodyText sx={{ 
                  fontWeight: 500,
                  color: colors.contrast.text.secondary,
                  fontSize: '0.85rem'
                }}>
                  Precio:
                </BodyText>
                <Typography sx={{ 
                  fontWeight: 600,
                  color: colors.contrast.text.primary,
                  fontSize: '1.1rem'
                }}>
                  {service.price}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServiceCard;