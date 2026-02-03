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

          {/* Header & Content */}
          <Box sx={{ 
            mb: 2,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Typography 
              sx={{ 
                color: colors.contrast.text.primary,
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                textAlign: 'left',
                textTransform: 'uppercase',
                mb: 1
              }}
            >
              {service.title}
            </Typography>
            
            <Typography sx={{ 
              fontWeight: 700,
              color: colors.palette.accentColors.orange,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              mb: 2
            }}>
              // {service.subtitle}
            </Typography>

            <BodyText sx={{ 
              lineHeight: 1.4,
              color: colors.contrast.text.primary,
              fontSize: '1.1rem',
              textAlign: 'left',
              mb: 3,
              fontWeight: 500
            }}>
              {service.description}
            </BodyText>
            
            <Box sx={{ mt: 'auto' }}>
              <List dense disablePadding>
                {service.benefits.map((benefit, index) => (
                  <ListItem key={index} disableGutters sx={{ py: 0.5, alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                      <GeometricIcon
                        type="arrow-right"
                        size="small"
                        color={colors.palette.accentColors.orange}
                        variant="minimal"
                      />
                    </ListItemIcon>
                    <ListItemText 
                      primary={benefit.toUpperCase()}
                      primaryTypographyProps={{
                        fontSize: '0.8rem',
                        color: colors.contrast.text.secondary,
                        lineHeight: 1.2,
                        fontWeight: 700,
                        letterSpacing: '0.02em'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
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