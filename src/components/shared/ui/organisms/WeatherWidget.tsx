import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Divider,
  IconButton
} from '@mui/material';
import { 
  LocationOn as LocationOnIcon,
  Refresh as RefreshIcon,
  WbSunny as SunIcon,
  Cloud as CloudIcon,
  Opacity as RainIcon
} from '@mui/icons-material';
import { useColors } from '../../../../hooks';
import { H1, H3, H4, BodyText, SmallText } from '../atoms';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  high: number;
  low: number;
  wind: number;
  precipitation: number;
  hourlyForecast: Array<{
    time: string;
    condition: string;
    precipitation: number;
    temperature: number;
  }>;
}

interface WeatherWidgetProps {
  data: WeatherData;
  variant?: 'glass' | 'dark' | 'primary' | 'accent';
  showLocationIcon?: boolean;
  onRefresh?: () => void;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  data,
  variant = 'glass',
  showLocationIcon = false,
  onRefresh = undefined
}) => {
  const colors = useColors();

  // Configuración de variantes según el sistema AI4U
  const getVariantStyles = () => {
    switch (variant) {
      case 'dark':
        return {
          card: {
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: colors.helpers.text.highContrast
          },
          surface: {
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }
        };
      case 'primary':
        return {
          card: {
            background: `linear-gradient(135deg, ${colors.palette.orange}15, ${colors.palette.orange}25)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.palette.orange}30`,
            color: colors.helpers.text.highContrast
          },
          surface: {
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }
        };
      case 'accent':
        return {
          card: {
            background: `linear-gradient(135deg, ${colors.palette.green}15, ${colors.palette.green}25)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.palette.green}30`,
            color: colors.helpers.text.highContrast
          },
          surface: {
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }
        };
      default: // glass
        return {
          card: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: colors.helpers.text.highContrast
          },
          surface: {
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.25)'
          }
        };
    }
  };

  const getWeatherIcon = (condition: string) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
      return <SunIcon />;
    } else if (conditionLower.includes('cloud') || conditionLower.includes('overcast')) {
      return <CloudIcon />;
    } else if (conditionLower.includes('rain') || conditionLower.includes('precipitation')) {
      return <RainIcon />;
    }
    return <SunIcon />;
  };

  const variantStyles = getVariantStyles();

  return (
    <Card
      sx={{
        borderRadius: 4,
        maxWidth: 400,
        margin: '0 auto',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
        },
        ...variantStyles.card
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mb: 3 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {showLocationIcon && (
              <LocationOnIcon sx={{ 
                fontSize: 20, 
                color: colors.helpers.text.primary 
              }} />
            )}
            <H4 sx={{ 
              color: colors.helpers.text.primary,
              fontWeight: 600
            }}>
              {data.location}
            </H4>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SmallText sx={{ 
              color: colors.helpers.text.secondary
            }}>
              Actualizado ahora
            </SmallText>
            {onRefresh && (
              <IconButton
                size="small"
                onClick={onRefresh}
                sx={{
                  color: colors.helpers.text.secondary,
                  '&:hover': {
                    background: colors.helpers.state.hover,
                    color: colors.palette.orange
                  }
                }}
              >
                <RefreshIcon />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* Current Weather */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 4,
          p: 3,
          borderRadius: 3,
          ...variantStyles.surface,
          backdropFilter: 'blur(10px)'
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 2
          }}>
            {getWeatherIcon(data.condition)}
          </Box>
          <H1 sx={{ 
            fontSize: '3.5rem',
            fontWeight: 700,
            color: colors.helpers.text.primary,
            mb: 1,
            lineHeight: 1
          }}>
            {data.temperature}°
          </H1>
          <H4 sx={{ 
            color: colors.helpers.text.primary,
            mb: 1,
            fontWeight: 600
          }}>
            {data.condition}
          </H4>
          <BodyText sx={{ 
            color: colors.helpers.text.secondary,
            fontWeight: 500
          }}>
            Máx {data.high}° — Mín {data.low}°
          </BodyText>
        </Box>

        {/* Weather Details */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          mb: 4,
          p: 2.5,
          borderRadius: 3,
          ...variantStyles.surface,
          backdropFilter: 'blur(10px)'
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <SmallText sx={{ 
              color: colors.helpers.text.secondary,
              mb: 0.5,
              textTransform: 'uppercase',
              letterSpacing: 0.5
            }}>
              Viento
            </SmallText>
            <H4 sx={{ 
              color: colors.helpers.text.primary,
              fontWeight: 600
            }}>
              {data.wind} km/h
            </H4>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <SmallText sx={{ 
              color: colors.helpers.text.secondary,
              mb: 0.5,
              textTransform: 'uppercase',
              letterSpacing: 0.5
            }}>
              Lluvia
            </SmallText>
            <H4 sx={{ 
              color: colors.helpers.text.primary,
              fontWeight: 600
            }}>
              {data.precipitation}%
            </H4>
          </Box>
        </Box>

        {/* Hourly Forecast */}
        <Box sx={{ pt: 2 }}>
          <Divider sx={{ 
            mb: 3,
            borderColor: colors.helpers.border.secondary + '40'
          }} />
          <H4 sx={{ 
            fontWeight: 600,
            mb: 3,
            color: colors.helpers.text.primary
          }}>
            Pronóstico por Hora
          </H4>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {data.hourlyForecast.map((forecast, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                p: 2,
                borderRadius: 2,
                background: variantStyles.surface.background,
                border: variantStyles.surface.border,
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: colors.helpers.state.hover,
                  transform: 'translateX(4px)'
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {getWeatherIcon(forecast.condition)}
                  <SmallText sx={{ 
                    color: colors.helpers.text.secondary,
                    minWidth: '60px',
                    fontWeight: 500
                  }}>
                    {forecast.time}
                  </SmallText>
                </Box>
                <BodyText sx={{ 
                  color: colors.helpers.text.secondary,
                  flex: 1,
                  textAlign: 'center',
                  fontWeight: 500
                }}>
                  {forecast.condition}
                </BodyText>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <SmallText sx={{ 
                    color: colors.helpers.text.secondary,
                    minWidth: '40px',
                    textAlign: 'center'
                  }}>
                    {forecast.precipitation}%
                  </SmallText>
                  <H4 sx={{ 
                    fontWeight: 600,
                    color: colors.helpers.text.primary,
                    minWidth: '50px',
                    textAlign: 'right'
                  }}>
                    {forecast.temperature}°
                  </H4>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget; 