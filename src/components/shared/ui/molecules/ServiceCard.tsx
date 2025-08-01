import React from 'react';
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material';
import { H3, BodyText, GeometricIcon } from '../atoms';
import { useColors } from '../../../../hooks';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Service, ServiceStatus } from '../../../../types/service';

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
  const theme = useTheme();
  const colors = useColors();

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
    <Box sx={{
      height: '100%',
      position: 'relative',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-4px)',
        '& .service-card-content': {
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          borderColor: service.color,
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
        {/* Gradient Header */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${service.color}, ${service.color}dd)`,
          borderRadius: '12px 12px 0 0'
        }} />



        {/* Super Category Badge con glassmorphism */}
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
              background: `rgba(${getSuperCategoryColor(service.superCategory) === colors.palette.orange ? '255, 92, 0' : '182, 202, 64'}, 0.9)`,
              backdropFilter: 'blur(10px)',
              color: colors.palette.white,
              fontWeight: 700,
              fontSize: '0.7rem',
              height: 24,
              border: `1px solid ${getSuperCategoryColor(service.superCategory)}60`
            }}
          />
        </Box>

        {/* Header */}
        <Box sx={{ 
          mb: 3,
          textAlign: 'center',
          mt: 4
        }}>
          <H3 sx={{ 
            mb: 1.5,
            color: colors.contrast.text.primary,
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            fontWeight: 700,
            lineHeight: 1.3
          }}>
            {service.title}
          </H3>
          <BodyText sx={{ 
            mb: 2, 
            fontWeight: 600,
            color: service.color,
            fontSize: '1rem',
            lineHeight: 1.4
          }}>
            {service.subtitle}
          </BodyText>
          
          {!compact && (
            <BodyText sx={{ 
              mb: 3, 
              lineHeight: 1.6,
              color: colors.contrast.text.secondary,
              fontSize: '0.95rem'
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
                      color={service.color}
                      variant="filled"
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
                color: service.color,
                fontSize: '1.2rem',
                background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {service.price}
              </Typography>
            </Box>
          )}
          

        </Box>
      </Box>
    </Box>
  );
};

export default ServiceCard;