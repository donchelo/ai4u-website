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
import { Service } from '../../../../types/service';
import { getServiceStructuredData } from '../../../../utils/seo';
import { ProgressiveContent } from './';

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
            borderColor: colors.contrast.text.primary,
          }
        }
      }}>
        {/* Main Card Content minimalista */}
        <Box className="service-card-content" sx={{
          p: compact ? 2.5 : 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: colors.contrast.surface,
          border: `3px solid ${colors.contrast.text.primary}`,
          borderRadius: 0,
          transition: 'all 0.1s ease',
          overflow: 'hidden',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translate(-4px, -4px)',
            boxShadow: `8px 8px 0px ${colors.contrast.text.primary}`,
          }
        }}>
          {/* Service Thumbnail */}
          <Box sx={{ 
            width: '100%',
            mb: 3,
          }}>
            <ServiceThumbnail
              serviceId={service.id}
              serviceColor={service.color}
              size="full-width"
              customThumbnail={service.thumbnail}
            />
          </Box>

          {/* Super Category Badge minimalista */}
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
                background: colors.contrast.background,
                color: colors.contrast.text.primary,
                fontWeight: 500,
                fontSize: '0.7rem',
                height: 24,
                border: `1px solid ${colors.contrast.border}`,
                '& .MuiChip-label': {
                  px: 1,
                }
              }}
            />
          </Box>

          {/* Header */}
          <Box sx={{ 
            mb: 3,
          }}>
            <H3 sx={{ 
              color: colors.contrast.text.primary,
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              fontWeight: 600,
              lineHeight: 1.3,
              textAlign: 'center',
              mb: 2
            }}>
              {service.title}
            </H3>
            
            {!compact && (
              <ProgressiveContent
                summary={
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mt: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.2s ease'
                    }
                  }}>
                    <Box sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: colors.contrast.background,
                      border: `1px solid ${colors.contrast.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: colors.contrast.text.secondary,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }
                    }} />
                  </Box>
                }
                details={
                  <Box sx={{ mt: 2 }}>
                    <BodyText sx={{ 
                      mb: 2, 
                      fontWeight: 500,
                      color: colors.contrast.text.primary,
                      fontSize: '0.95rem',
                      lineHeight: 1.4,
                      textAlign: 'center'
                    }}>
                      {service.subtitle}
                    </BodyText>
                    <BodyText sx={{ 
                      lineHeight: 1.6,
                      color: colors.contrast.text.secondary,
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      mb: 3
                    }}>
                      {service.description}
                    </BodyText>
                    
                    <Box>
                      <BodyText sx={{ 
                        fontWeight: 600, 
                        mb: 1,
                        color: colors.contrast.text.primary,
                        fontSize: '0.9rem'
                      }}>
                        Beneficios:
                      </BodyText>
                      <List dense disablePadding>
                        {service.benefits.map((benefit, index) => (
                          <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                              <GeometricIcon
                                type="check"
                                size="small"
                                color={colors.contrast.text.secondary}
                                variant="minimal"
                              />
                            </ListItemIcon>
                            <ListItemText 
                              primary={benefit}
                              primaryTypographyProps={{
                                fontSize: '0.8rem',
                                color: colors.contrast.text.secondary,
                                lineHeight: 1.4
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Box>
                }
                variant="inline"
              />
            )}
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