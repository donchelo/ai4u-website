import React from 'react';
import { Card, Box, Typography, styled } from '@mui/material';
import { GeometricIcon } from '../atoms';
import { useColors } from '../../../../hooks';
import { alpha } from '@mui/material/styles';

type IconType = 'arrow-up' | 'arrow-down' | 'arrow-right' | 'arrow-left' | 'plus' | 'minus' | 'circle' | 'square' | 'triangle' | 'cross' | 'line' | 'dot';
type CardVariant = 'default' | 'elevated' | 'outlined';

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

// Styled component para el valor de la métrica - NÚMEROS GIGANTES
const MetricValue = styled(Typography)<{ metricSize: string; isDarkMode?: boolean }>(({ metricSize, isDarkMode, theme }) => ({
  fontSize: metricSize === 'compact' 
    ? '3.5rem' 
    : metricSize === 'large' 
      ? '6rem' 
      : '4.5rem',
  fontWeight: 900,
  lineHeight: 0.8,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: '-0.03em',
  margin: 0,
  padding: 0,
  background: isDarkMode 
    ? 'linear-gradient(135deg, #FFFFFF 0%, #E8E8E8 100%)'
    : 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    fontSize: metricSize === 'compact' 
      ? '2.5rem' 
      : metricSize === 'large' 
        ? '4rem' 
        : '3.5rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: metricSize === 'compact' 
      ? '2rem' 
      : metricSize === 'large' 
        ? '3.5rem' 
        : '3rem',
  }
}));

const MetricCard: React.FC<MetricCardProps> = (props) => {
  const {
    title,
    value,
    subtitle,
    icon,
    iconType = 'circle',
    variant = 'elevated',
    trend = 'neutral',
    size = 'normal',
    onClick
  } = props;
  const colors = useColors();
  const isDarkMode = colors.mode === 'dark';

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return colors.palette.success;
      case 'down':
        return colors.palette.accent;
      default:
        return colors.contrast.text.secondary;
    }
  };

  const getVariantTextColor = () => {
    return colors.contrast.text.primary;
  };

  // Convertir variant personalizado a variant de MUI
  const muiVariant = variant === 'outlined' ? 'outlined' : 'elevation';
  
  return (
    <Card 
      variant={muiVariant}
      elevation={variant === 'elevated' ? 4 : variant === 'default' ? 2 : 0}
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
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: size === 'large' 
            ? 'linear-gradient(135deg, rgba(182, 202, 64, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
            : 'none',
          zIndex: 0,
        }
      }}
    >
      {/* Main metric value - NÚMEROS GIGANTES Y PROMINENTES */}
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mb: 2,
        position: 'relative',
        zIndex: 1,
        width: '100%'
      }}>
        <MetricValue
          metricSize={size}
          isDarkMode={isDarkMode}
          sx={{
            color: getVariantTextColor(),
            textShadow: size === 'large' 
              ? isDarkMode
                ? '0 12px 24px rgba(255,255,255,0.1), 0 4px 8px rgba(182, 202, 64, 0.2)' 
                : '0 12px 24px rgba(0,0,0,0.2), 0 4px 8px rgba(182, 202, 64, 0.3)' 
              : isDarkMode
                ? '0 6px 12px rgba(255,255,255,0.08)' 
                : '0 6px 12px rgba(0,0,0,0.15)',
            filter: size === 'large' 
              ? isDarkMode 
                ? 'drop-shadow(0 8px 16px rgba(255,255,255,0.1))' 
                : 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))' 
              : 'none',
            transform: size === 'large' ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: size === 'large' ? '80%' : '60%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #B6CA40, transparent)',
              opacity: 0.6,
            },
            '&:hover': {
              transform: size === 'large' ? 'scale(1.15)' : 'scale(1.05)',
              textShadow: size === 'large' 
                ? isDarkMode
                  ? '0 16px 32px rgba(255,255,255,0.15), 0 8px 16px rgba(182, 202, 64, 0.3)' 
                  : '0 16px 32px rgba(0,0,0,0.25), 0 8px 16px rgba(182, 202, 64, 0.4)' 
                : isDarkMode
                  ? '0 8px 16px rgba(255,255,255,0.12)' 
                  : '0 8px 16px rgba(0,0,0,0.2)',
              '&::after': {
                opacity: 1,
                width: size === 'large' ? '90%' : '70%',
              }
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
        position: 'relative',
        zIndex: 1,
      }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: size === 'compact' ? '0.75rem' : '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: alpha(colors.contrast.text.primary, 0.7),
            fontFamily: '"Red Hat Display", sans-serif',
          }}
        >
          {title}
        </Typography>
        {iconType && (
          <GeometricIcon
            type={iconType}
            size="small"
            color={getTrendColor()}
            variant="minimal"
          />
        )}
      </Box>

      {/* Subtitle - solo si existe */}
      {subtitle && (
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.75rem',
            color: alpha(colors.contrast.text.secondary, 0.8),
            textAlign: 'center',
            lineHeight: 1.4,
            maxWidth: '90%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Card>
  );
};

export default MetricCard;