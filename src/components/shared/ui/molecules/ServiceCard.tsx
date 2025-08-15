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
import { useColors } from '../../../../hooks';
import { Service, ServiceStatus } from '../../../../types/service';
import { getServiceStructuredData } from '../../../../utils/seo';

interface ServiceCardProps {
  service: Service;
  showPrice?: boolean;
  compact?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  showPrice = true, 
  compact = false 
}) => {
  const colors = useColors();

  // Generar structured data específico para este servicio
  const serviceStructuredData = getServiceStructuredData(service);

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case ServiceStatus.ACTIVE: return colors.palette.green;
      case ServiceStatus.COMING_SOON: return colors.palette.orange;
      case ServiceStatus.DEPRECATED: return colors.palette.gray[500];
      default: return colors.palette.gray[400];
    }
  };

  const getStatusText = (status: ServiceStatus) => {
    switch (status) {
      case ServiceStatus.ACTIVE: return 'Disponible';
      case ServiceStatus.COMING_SOON: return 'Próximamente';
      case ServiceStatus.DEPRECATED: return 'Descontinuado';
      default: return 'Inactivo';
    }
  };

  const getSuperCategoryColor = (superCategory: string) => {
    return superCategory === 'strategy' ? colors.palette.orange : colors.palette.green;
  };

  const getSuperCategoryText = (superCategory: string) => {
    return superCategory === 'strategy' ? 'Estrategia' : 'Operación';
  };

  return (
    <>
      {/* Structured Data para este servicio específico */}
      <SEOHead
        structuredData={serviceStructuredData}
        noIndex={true} // No indexar el structured data individual para evitar duplicados
      />
      
      <Box sx={{
        height: '100%',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          '& .service-card-content': {
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
            borderColor: colors.contrast.border,
            backdropFilter: 'blur(24px)'
          }
        }
      }}>
        {/* Main Card Content con glassmorphism */}
        <Box className="service-card-content" sx={{
          p: compact ? 2.5 : 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.contrast.border}`,
          borderRadius: 3,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}>
          {/* Subtle Header */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: colors.contrast.border,
            borderRadius: '12px 12px 0 0'
          }} />

          {/* Service Thumbnail */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 3,
            mt: 2
          }}>
            <ServiceThumbnail
              serviceId={service.id}
              serviceColor={service.color}
              size="medium"
              customThumbnail={service.thumbnail}
            />
          </Box>

          {/* Super Category Badge */}
          <Box sx={{ 
            position: 'absolute', 
            top: 12, 
            left: 12,
            zIndex: 2
          }}>
            <Chip 
              label={getSuperCategoryText(service.superCategory)}
              size="small"
              sx={{
                background: colors.contrast.surface,
                backdropFilter: 'blur(10px)',
                color: colors.contrast.text.primary,
                fontWeight: 600,
                fontSize: '0.7rem',
                height: 24,
                border: `1px solid ${colors.contrast.border}`
              }}
            />
          </Box>

          {/* Header */}
          <Box sx={{ 
            mb: 3,
            mt: 1
          }}>
            <H3 sx={{ 
              mb: 1.5,
              color: colors.contrast.text.primary,
              fontSize: { xs: '1.3rem', md: '1.5rem' },
              fontWeight: 700,
              lineHeight: 1.3,
              textAlign: 'center'
            }}>
              {service.title}
            </H3>
            <BodyText sx={{ 
              mb: 2, 
              fontWeight: 600,
              color: colors.contrast.text.primary,
              fontSize: '1rem',
              lineHeight: 1.4,
              textAlign: 'center'
            }}>
              {service.subtitle}
            </BodyText>
            
            {!compact && (
              <BodyText sx={{ 
                mb: 3, 
                lineHeight: 1.6,
                color: colors.contrast.text.secondary,
                fontSize: '0.95rem',
                textAlign: 'left'
              }}>
                {service.description}
              </BodyText>
            )}
          </Box>

          {/* Benefits con iconos geométricos */}
          {!compact && (
            <Box sx={{ mb: 3, flexGrow: 1 }}>
              <BodyText sx={{ 
                fontWeight: 600, 
                mb: 2,
                color: colors.contrast.text.primary,
                fontSize: '0.95rem'
              }}>
                Beneficios:
              </BodyText>
              <List dense disablePadding>
                {service.benefits.map((benefit, index) => (
                  <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <GeometricIcon
                        type="check"
                        size="small"
                        color={colors.contrast.text.primary}
                        variant="minimal"
                      />
                    </ListItemIcon>
                    <ListItemText 
                      primary={benefit}
                      primaryTypographyProps={{
                        fontSize: '0.85rem',
                        color: colors.contrast.text.secondary,
                        lineHeight: 1.4
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Footer con números prominentes */}
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
                  fontWeight: 600,
                  color: colors.contrast.text.primary,
                  fontSize: '0.9rem'
                }}>
                  Precio:
                </BodyText>
                <Typography sx={{ 
                  fontWeight: 700,
                  color: colors.contrast.text.primary,
                  fontSize: '1.2rem'
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