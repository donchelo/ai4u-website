import React from 'react';
import { 
  Box, 
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
import Card from '../molecules/Card';

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
  variant?: 'default' | 'elevated' | 'outlined';
  showLocationIcon?: boolean;
  onRefresh?: () => void;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  data,
  variant = 'elevated',
  showLocationIcon = false,
  onRefresh = undefined
}) => {
  const colors = useColors();

  // Configuración de variantes según el sistema AI4U minimalista
  const getVariantStyles = () => {
    switch (variant) {
      case 'outlined':
        return {
          card: {
            background: 'transparent',
            border: `1px solid ${colors.contrast.divider}`,
            color: colors.contrast.text.primary
          },
          surface: {
            background: colors.contrast.surface,
            border: `1px solid ${colors.contrast.divider}`
          }
        };
      case 'elevated':
        return {
          card: {
            background: colors.contrast.surface,
            border: 'none',
            color: colors.contrast.text.primary
          },
          surface: {
            background: colors.contrast.background,
            border: `1px solid ${colors.contrast.divider}`
          }
        };
      default: // default
        return {
          card: {
            background: colors.contrast.surface,
            border: `1px solid ${colors.contrast.divider}`,
            color: colors.contrast.text.primary
          },
          surface: {
            background: colors.contrast.background,
            border: `1px solid ${colors.contrast.divider}`
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
      variant={variant as 'default' | 'elevated' | 'outlined'}
      sx={{
        borderRadius: 4,
        maxWidth: 400,
        margin: '0 auto',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
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
              fontWeight: 400
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
                    color: colors.palette.accent
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
            fontWeight: 400,
            color: colors.helpers.text.primary,
            mb: 1,
            lineHeight: 1
          }}>
            {data.temperature}°
          </H1>
          <H4 sx={{ 
            color: colors.helpers.text.primary,
            mb: 1,
            fontWeight: 400
          }}>
            {data.condition}
          </H4>
          <BodyText sx={{ 
            color: colors.helpers.text.secondary,
            fontWeight: 400
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
              textTransform: 'none',
              letterSpacing: 0.5
            }}>
              Viento
            </SmallText>
            <H4 sx={{ 
              color: colors.helpers.text.primary,
              fontWeight: 400
            }}>
              {data.wind} km/h
            </H4>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <SmallText sx={{ 
              color: colors.helpers.text.secondary,
              mb: 0.5,
              textTransform: 'none',
              letterSpacing: 0.5
            }}>
              Lluvia
            </SmallText>
            <H4 sx={{ 
              color: colors.helpers.text.primary,
              fontWeight: 400
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
            fontWeight: 400,
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
                    fontWeight: 400
                  }}>
                    {forecast.time}
                  </SmallText>
                </Box>
                <BodyText sx={{ 
                  color: colors.helpers.text.secondary,
                  flex: 1,
                  textAlign: 'center',
                  fontWeight: 400
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
                    fontWeight: 400,
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