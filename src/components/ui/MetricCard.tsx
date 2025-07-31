import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Card from './Card';
import GeometricIcon from './GeometricIcon';

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

const MetricValue = styled(Typography)<{ metricSize?: string }>(({ theme, metricSize }) => {
  const sizeMap = {
    compact: {
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      lineHeight: 1,
    },
    normal: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      lineHeight: 0.9,
    },
    large: {
      fontSize: 'clamp(3.5rem, 6vw, 5rem)',
      lineHeight: 0.8,
    }
  };

  return {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    ...(sizeMap[metricSize as keyof typeof sizeMap] || sizeMap.normal),
  };
});

const MetricCard: React.FC<MetricCardProps> = (props) => {
  const {
    title,
    value,
    subtitle,
    icon,
    iconType = 'circle',
    variant = 'glass',
    trend = 'neutral',
    size = 'normal',
    onClick
  } = props;
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return '#B6CA40'; // cyber-olive
      case 'down':
        return '#FF7477'; // digital-coral
      default:
        return '#7D848B'; // tech-slate
    }
  };

  const getVariantTextColor = () => {
    switch (variant) {
      case 'dark':
        return '#FFFFFF';
      default:
        return '#0A0A0A';
    }
  };

  return (
    <Card 
      variant={variant}
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        minHeight: size === 'compact' ? '180px' : size === 'large' ? '280px' : '220px',
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
      }}>
        {/* Header with title and icon */}
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          mb: 2,
        }}>
          <Typography
            variant="caption"
            sx={{
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: variant === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
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

        {/* Main metric value */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <MetricValue
            metricSize={size}
            sx={{
              color: getVariantTextColor(),
            }}
          >
            {typeof value === 'number' ? value.toLocaleString() : value}
          </MetricValue>
        </Box>

        {/* Subtitle/description */}
        {subtitle && (
          <Box sx={{ mt: 'auto' }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.875rem',
                fontWeight: 400,
                color: variant === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
                fontFamily: '"Red Hat Display", sans-serif',
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        )}

        {/* Trend indicator */}
        {trend !== 'neutral' && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
            }}
          >
            <GeometricIcon
              type={trend === 'up' ? 'arrow-up' : 'arrow-down'}
              size="small"
              color={getTrendColor()}
              variant="minimal"
            />
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default MetricCard;