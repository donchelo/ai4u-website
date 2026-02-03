import React from 'react';
import { Card, Box, Typography, styled } from '@mui/material';
import { GeometricIcon } from '../atoms';
import { useColors } from '../../../../hooks';

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
  colorMode?: 'light' | 'dark';
}

const MetricValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'metricSize' && prop !== 'isDarkMode',
})<{ metricSize: string; isDarkMode?: boolean }>(({ metricSize, theme }) => ({
  fontSize: metricSize === 'compact'
    ? '4rem'
    : metricSize === 'large'
      ? '8rem'
      : '6rem',
  fontWeight: 900,
  lineHeight: 0.8,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: '-0.05em',
  margin: 0,
  padding: 0,
  color: 'inherit',
  [theme.breakpoints.down('sm')]: {
    fontSize: metricSize === 'compact'
      ? '3rem'
      : metricSize === 'large'
        ? '5rem'
        : '4rem',
  },
}));

const MetricCard: React.FC<MetricCardProps> = (props) => {
  const {
    title,
    value,
    subtitle,
    iconType = 'circle',
    variant = 'elevated',
    trend = 'neutral',
    size = 'normal',
    onClick,
    colorMode
  } = props;
  const colors = useColors();
  const isDarkMode = (colorMode || colors.mode) === 'dark';

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return colors.palette.accentColors.orange;
      case 'down':
        return isDarkMode ? colors.palette.white : colors.palette.black;
      default:
        return isDarkMode ? colors.palette.white : colors.palette.black;
    }
  };
  
  return (
    <Card 
      variant={variant}
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        minHeight: (theme) => size === 'compact' ? theme.spacing(25) : size === 'large' ? theme.spacing(45) : theme.spacing(30),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: size === 'compact' ? 4 : size === 'large' ? 8 : 6,
        position: 'relative',
        overflow: 'hidden',
        border: `4px solid ${isDarkMode ? colors.palette.white : colors.palette.black}`,
        bgcolor: isDarkMode ? colors.palette.black : colors.palette.white,
        color: isDarkMode ? colors.palette.white : colors.palette.black,
        '&:hover': {
          transform: 'translate(-8px, -8px)',
          boxShadow: isDarkMode ? '12px 12px 0px #FFFFFF' : '12px 12px 0px #000000',
        }
      }}
    >
      {/* Main metric value */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mb: 3,
        width: '100%'
      }}>
        <MetricValue
          metricSize={size}
          isDarkMode={isDarkMode}
        >
          {typeof value === 'number' ? value.toLocaleString() : value}
        </MetricValue>
      </Box>

      {/* Title and icon */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        mb: 2,
      }}>
        <Typography
          sx={{
            fontSize: size === 'compact' ? '0.875rem' : '1.125rem',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'inherit',
          }}
        >
          {title}
        </Typography>
        {iconType && (
          <GeometricIcon
            type={iconType}
            size="small"
            color={getTrendColor()}
            variant="filled"
          />
        )}
      </Box>

      {/* Subtitle */}
      {subtitle && (
        <Typography
          sx={{
            fontSize: '1rem',
            color: 'inherit',
            opacity: 0.7,
            textAlign: 'center',
            lineHeight: 1.4,
            fontWeight: 500,
            maxWidth: '90%',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Card>
  );
};

export default MetricCard;