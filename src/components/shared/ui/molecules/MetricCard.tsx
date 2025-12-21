import React from 'react';
import { Card, Box, Typography, styled, useTheme } from '@mui/material';
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
const MetricValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'metricSize' && prop !== 'isDarkMode',
})<{ metricSize: string; isDarkMode?: boolean }>(({ metricSize, isDarkMode, theme }) => ({
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
    ? `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${theme.palette.grey[100]} 100%)`
    : `linear-gradient(135deg, ${theme.palette.common.black} 0%, ${theme.palette.grey[800]} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    fontSize: metricSize === 'compact' 
      ? theme.typography.h3.fontSize
      : metricSize === 'large' 
        ? theme.typography.h1.fontSize
        : theme.typography.h2.fontSize,
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: metricSize === 'compact' 
      ? theme.typography.h4.fontSize
      : metricSize === 'large' 
        ? theme.typography.h2.fontSize
        : theme.typography.h3.fontSize,
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
  const theme = useTheme();
  const isDarkMode = colors.mode === 'dark';

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return colors.palette.success;
      case 'down':
        return colors.palette.black;
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
        minHeight: (theme) => size === 'compact' ? theme.spacing(25) : size === 'large' ? theme.spacing(50) : theme.spacing(30),
        minWidth: (theme) => size === 'compact' ? theme.spacing(40) : size === 'large' ? theme.spacing(50) : theme.spacing(43.75),
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
            ? `linear-gradient(135deg, ${alpha(colors.palette.accentColors.green, 0.05)} 0%, ${alpha(colors.palette.white, 0.02)} 100%)`
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
                ? (theme) => `0 ${theme.spacing(1.5)} ${theme.spacing(3)} ${alpha(colors.palette.white, 0.1)}, 0 ${theme.spacing(0.5)} ${theme.spacing(1)} ${alpha(colors.palette.accentColors.green, 0.2)}`
                : (theme) => `0 ${theme.spacing(1.5)} ${theme.spacing(3)} ${alpha(colors.palette.black, 0.2)}, 0 ${theme.spacing(0.5)} ${theme.spacing(1)} ${alpha(colors.palette.accentColors.green, 0.3)}`
              : isDarkMode
                ? (theme) => `0 ${theme.spacing(0.75)} ${theme.spacing(1.5)} ${alpha(colors.palette.white, 0.08)}`
                : (theme) => `0 ${theme.spacing(0.75)} ${theme.spacing(1.5)} ${alpha(colors.palette.black, 0.15)}`,
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
              bottom: (theme) => `-${theme.spacing(1)}`,
              left: '50%',
              transform: 'translateX(-50%)',
              width: size === 'large' ? '80%' : '60%',
              height: (theme) => theme.spacing(0.25),
              background: (theme) => `linear-gradient(90deg, transparent, ${colors.palette.accentColors.green}, transparent)`,
              opacity: 0.6,
            },
            '&:hover': {
              transform: size === 'large' ? 'scale(1.15)' : 'scale(1.05)',
              textShadow: size === 'large' 
                ? isDarkMode
                  ? (theme) => `0 ${theme.spacing(2)} ${theme.spacing(4)} ${alpha(colors.palette.white, 0.15)}, 0 ${theme.spacing(1)} ${theme.spacing(2)} ${alpha(colors.palette.accentColors.green, 0.3)}`
                  : (theme) => `0 ${theme.spacing(2)} ${theme.spacing(4)} ${alpha(colors.palette.black, 0.25)}, 0 ${theme.spacing(1)} ${theme.spacing(2)} ${alpha(colors.palette.accentColors.green, 0.4)}`
                : isDarkMode
                  ? (theme) => `0 ${theme.spacing(1)} ${theme.spacing(2)} ${alpha(colors.palette.white, 0.12)}`
                  : (theme) => `0 ${theme.spacing(1)} ${theme.spacing(2)} ${alpha(colors.palette.black, 0.2)}`,
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