import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Card from './Card';
import { GeometricIcon } from '../atoms';

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
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      lineHeight: 0.8,
      fontWeight: 900,
    },
    normal: {
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      lineHeight: 0.9,
      fontWeight: 800,
    },
    large: {
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      lineHeight: 0.7,
      fontWeight: 900,
    }
  };

  return {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 900,
    letterSpacing: '-0.03em',
    textAlign: 'center',
    width: '100%',
    wordBreak: 'break-word',
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
            color: variant === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
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
            fontSize: size === 'compact' ? '0.8rem' : '0.875rem',
            fontWeight: 400,
            color: variant === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
            fontFamily: '"Red Hat Display", sans-serif',
            textAlign: 'center',
          }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Trend indicator */}
      {trend !== 'neutral' && (
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
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
    </Card>
  );
};

export default MetricCard;