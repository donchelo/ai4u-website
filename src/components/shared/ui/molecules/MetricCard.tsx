import React from 'react';
import { Card, Box, Typography, styled } from '@mui/material';
import { GeometricIcon } from '../atoms';
import { useColors } from '../../../../hooks';
import { alpha } from '@mui/material/styles';

type IconType = 'arrow-up' | 'arrow-down' | 'arrow-right' | 'arrow-left' | 'plus' | 'minus' | 'circle' | 'square' | 'triangle' | 'cross' | 'line' | 'dot';
type CardVariant = 'glass' | 'dark' | 'light' | 'primary' | 'accent';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  iconType?: IconType;
  variant?: CardVariant;
  trend?: 'up' | 'down' | 'neutral';
  size?: 'compact' | 'normal' | 'large';
  onClick?: () => void;
}

// Styled component para el valor de la métrica
const MetricValue = styled(Typography)<{ metricSize: string }>(({ metricSize }) => ({
  fontSize: metricSize === 'compact' ? '2.5rem' : metricSize === 'large' ? '4.5rem' : '3.5rem',
  fontWeight: 700,
  lineHeight: 1,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: '-0.02em',
  margin: 0,
  padding: 0,
}));

const MetricCard: React.FC<MetricCardProps> = (props) => {
  const {
    title,
    value,
    subtitle,
    icon,
    iconType = 'circle',
    variant = 'light',
    trend = 'neutral',
    size = 'normal',
    onClick
  } = props;
  const colors = useColors();

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return colors.palette.green;
      case 'down':
        return colors.palette.orange;
      default:
        return colors.contrast.text.secondary;
    }
  };

  const getVariantTextColor = () => {
    switch (variant) {
      case 'dark':
        return colors.palette.white;
      default:
        return colors.contrast.text.primary;
    }
  };

  return (
    <Card 
      variant={variant}
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        minHeight: size === 'compact' ? '200px' : size === 'large' ? '400px' : '240px',
        minWidth: size === 'compact' ? '320px' : size === 'large' ? '400px' : '350px',
        width: size === 'large' ? '100%' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: size === 'compact' ? 3 : size === 'large' ? 5 : 4,
      }}
    >
      {/* Main metric value - GIANT AND PROMINENT */}
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mb: 2
      }}>
        <MetricValue
          metricSize={size}
          sx={{
            color: getVariantTextColor(),
            textShadow: size === 'large' ? '0 8px 16px rgba(0,0,0,0.15)' : '0 4px 8px rgba(0,0,0,0.1)',
            filter: size === 'large' ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' : 'none',
            transform: size === 'large' ? 'scale(1.05)' : 'scale(1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: size === 'large' ? 'scale(1.1)' : 'scale(1.02)',
              textShadow: size === 'large' ? '0 12px 24px rgba(0,0,0,0.2)' : '0 6px 12px rgba(0,0,0,0.15)',
            }
          }}
        >
          {typeof value === 'number' ? value.toLocaleString() : value}
        </MetricValue>
      </Box>

      {/* Title and icon in smaller section */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        mb: 1,
      }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: size === 'compact' ? '0.75rem' : '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: variant === 'dark' ? alpha(colors.palette.white, 0.8) : alpha(colors.contrast.text.primary, 0.7),
            fontFamily: '"Red Hat Display", sans-serif',
          }}
        >
          {title}
        </Typography>
        
        {icon || (
          <GeometricIcon
            type={iconType}
            size="small"
            color={getTrendColor()}
            variant="filled"
          />
        )}
      </Box>

      {/* Subtitle/description */}
      {subtitle && (
        <Typography
          variant="body2"
          sx={{
            fontSize: size === 'compact' ? '0.75rem' : '0.875rem',
            color: variant === 'dark' ? alpha(colors.palette.white, 0.6) : colors.contrast.text.secondary,
            lineHeight: 1.4,
            maxWidth: '80%',
            textAlign: 'center',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Card>
  );
};

export default MetricCard;