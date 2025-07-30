import React from 'react';
import {
  Paper,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { H3, BodyText } from './ui/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Service, ServiceStatus } from '../types/service';

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

  return (
    <Paper 
      elevation={service.featured ? 4 : 2}
      sx={{ 
        p: compact ? 2 : 3, 
        borderRadius: 3, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        borderLeft: service.featured ? `4px solid ${service.color}` : 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
        }
      }}
    >
      {/* Status Badge */}
      <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
        <Chip 
          label={getStatusText(service.status)}
          size="small"
          color={getStatusColor(service.status)}
          variant={service.status === ServiceStatus.ACTIVE ? 'filled' : 'outlined'}
        />
      </Box>

      {/* Featured Badge */}
      {service.featured && (
        <Box sx={{ position: 'absolute', top: -8, left: 16 }}>
          <Chip 
            label="Destacado"
            size="small"
            sx={{ 
              bgcolor: service.color,
              color: 'white',
              fontWeight: 'bold'
            }}
          />
        </Box>
      )}

      {/* Header */}
      <Box sx={{ mb: 2, mt: service.featured ? 1 : 0 }}>
        <H3 
          sx={{ 
            mb: 1, 
            textAlign: 'center',
            color: service.color || 'primary.main'
          }}
        >
          {service.title}
        </H3>
        <BodyText 
          sx={{ 
            mb: 2, 
            fontWeight: 600, 
            textAlign: 'center',
            color: 'text.secondary'
          }}
        >
          {service.subtitle}
        </BodyText>
        
        {!compact && (
          <BodyText sx={{ mb: 2, lineHeight: 1.6 }}>
            {service.description}
          </BodyText>
        )}
      </Box>

      {/* Benefits */}
      {!compact && (
        <Box sx={{ mb: 2, flexGrow: 1 }}>
          <BodyText sx={{ fontWeight: 600, mb: 1 }}>Beneficios:</BodyText>
          <List dense disablePadding>
            {service.benefits.map((benefit, index) => (
              <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleOutlineIcon 
                    sx={{ color: service.color || 'primary.main' }}
                    fontSize="small" 
                  />
                </ListItemIcon>
                <ListItemText 
                  primary={benefit}
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    lineHeight: 1.4
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Tags */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {service.tags.slice(0, compact ? 2 : 4).map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ 
                fontSize: '0.75rem',
                height: 24,
                '& .MuiChip-label': { px: 1 }
              }}
            />
          ))}
          {service.tags.length > (compact ? 2 : 4) && (
            <Chip
              label={`+${service.tags.length - (compact ? 2 : 4)}`}
              size="small"
              variant="filled"
              sx={{ 
                fontSize: '0.75rem',
                height: 24,
                bgcolor: 'grey.300',
                color: 'grey.700'
              }}
            />
          )}
        </Box>
      </Box>

      {/* Price and Time */}
      <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
        {showPrice && (
          <Typography 
            variant="body2" 
            sx={{ 
              fontWeight: 'bold',
              color: service.color || 'primary.main',
              fontSize: '1.1rem'
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
              mt: 0.5
            }}
          >
            ⏱️ {service.deliveryTime}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default ServiceCard;