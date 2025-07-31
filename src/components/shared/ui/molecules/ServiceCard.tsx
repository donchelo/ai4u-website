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
import { H3, BodyText } from '../atoms';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Service, ServiceStatus } from '../../../../types/service';

interface ServiceCardProps {
  service: Service;
  showPrice?: boolean;
  showDeliveryTime?: boolean;
  compact?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  showPrice = true, 
  showDeliveryTime = true,
  compact = false 
}) => {
  const theme = useTheme();

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case ServiceStatus.ACTIVE: return 'success';
      case ServiceStatus.COMING_SOON: return 'info';
      case ServiceStatus.DEPRECATED: return 'error';
      default: return 'default';
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
    return superCategory === 'strategy' ? '#6366f1' : '#10b981';
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
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          borderColor: service.color
        }
      }
    }}>
      {/* Main Card Content */}
      <Box className="service-card-content" sx={{
        p: compact ? 2.5 : 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: '#FFFFFF',
        border: '2px solid #E5E5E5',
        borderRadius: 3,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden'
      }}>
        {/* Gradient Header */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: service.gradient || service.color,
          borderRadius: '12px 12px 0 0'
        }} />

        {/* Status Badge */}
        <Box sx={{ 
          position: 'absolute', 
          top: 12, 
          right: 12,
          zIndex: 2
        }}>
          <Chip 
            label={getStatusText(service.status)}
            size="small"
            color={getStatusColor(service.status)}
            variant={service.status === ServiceStatus.ACTIVE ? 'filled' : 'outlined'}
            sx={{
              background: service.status === ServiceStatus.ACTIVE 
                ? '#F0F0F0' 
                : '#FFFFFF',
              border: '1px solid #E5E5E5',
              color: '#666666',
              fontWeight: 500,
              fontSize: '0.75rem'
            }}
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
              background: getSuperCategoryColor(service.superCategory),
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.7rem',
              height: 24
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
            color: '#000000',
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
              color: 'text.secondary',
              fontSize: '0.95rem'
            }}>
              {service.description}
            </BodyText>
          )}
        </Box>

        {/* Benefits */}
        {!compact && (
          <Box sx={{ mb: 3, flexGrow: 1 }}>
            <BodyText sx={{ 
              fontWeight: 600, 
              mb: 2,
              color: 'text.primary',
              fontSize: '0.95rem'
            }}>
              Beneficios:
            </BodyText>
            <List dense disablePadding>
              {service.benefits.map((benefit, index) => (
                <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleOutlineIcon 
                      sx={{ 
                        color: service.color,
                        fontSize: '1.1rem'
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText 
                    primary={benefit}
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      color: 'text.secondary'
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {/* Tags */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {service.tags.slice(0, compact ? 2 : 4).map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                variant="outlined"
                sx={{ 
                  fontSize: '0.7rem',
                  height: 24,
                  background: `${service.color}10`,
                  border: `1px solid ${service.color}30`,
                  color: service.color,
                  '& .MuiChip-label': { px: 1 },
                  '&:hover': {
                    background: `${service.color}20`,
                    borderColor: service.color
                  }
                }}
              />
            ))}
            {service.tags.length > (compact ? 2 : 4) && (
              <Chip
                label={`+${service.tags.length - (compact ? 2 : 4)}`}
                size="small"
                variant="filled"
                sx={{ 
                  fontSize: '0.7rem',
                  height: 24,
                  background: '#E5E5E5',
                  color: '#666666'
                }}
              />
            )}
          </Box>
        </Box>

        {/* Price and Time */}
        <Box sx={{ 
          mt: 'auto', 
          pt: 2, 
          borderTop: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.08)'
        }}>
          {showPrice && (
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 'bold',
                color: '#000000',
                fontSize: '1.1rem',
                mb: 0.5
              }}
            >
              {service.price}
            </Typography>
          )}
          {showDeliveryTime && (
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                fontSize: '0.85rem'
              }}
            >
              {service.deliveryTime}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceCard;