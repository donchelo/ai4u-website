import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Divider,
  useTheme,
  styled
} from '@mui/material';
import { 
  LocationOn as LocationOnIcon 
} from '@mui/icons-material';
import { useColors } from '../../../../hooks';

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
  variant?: 'light' | 'dark' | 'red';
  showLocationIcon?: boolean;
}

// Styled components
const StyledCard = styled(Card)<{ weatherVariant?: string }>(({ theme, weatherVariant }) => {
  let backgroundColor, textColor, borderColor;
  
  switch (weatherVariant) {
    case 'red':
      backgroundColor = '#EF4444'; // red-500
      textColor = '#000000';
      borderColor = '#F87171'; // red-400
      break;
    case 'dark':
      backgroundColor = '#000000';
      textColor = '#FFFFFF';
      borderColor = theme.palette.grey[700];
      break;
    default:
      backgroundColor = theme.palette.background.paper;
      textColor = theme.palette.text.primary;
      borderColor = theme.palette.divider;
  }

  return {
    backgroundColor,
    color: textColor,
    borderRadius: theme.spacing(3),
    maxWidth: 400,
    margin: '0 auto',
    border: `1px solid ${borderColor}`,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
      backgroundColor: weatherVariant === 'dark' ? '#1a1a1a' : backgroundColor,
    },
  };
});

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  data,
  variant = 'light',
  showLocationIcon = false
}) => {
  const theme = useTheme();
  const colors = useColors();

  const getTextColor = (type: 'primary' | 'secondary') => {
    switch (variant) {
      case 'red':
        return '#000000';
      case 'dark':
        return type === 'primary' ? colors.helpers.text.highContrast : colors.helpers.text.mediumContrast;
      default:
        return type === 'primary' ? colors.helpers.text.highContrast : colors.helpers.text.mediumContrast;
    }
  };

  return (
    <StyledCard weatherVariant={variant}>
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mb: 3 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {showLocationIcon && (
                <LocationOnIcon sx={{ 
                  fontSize: 16, 
                  color: getTextColor('primary') 
                }} />
              )}
              <Typography variant="h6" sx={{ 
                fontWeight: 600,
                color: getTextColor('primary')
              }}>
                {data.location}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ 
              color: getTextColor('secondary')
            }}>
              00:37
            </Typography>
            <Box sx={{ 
              width: 8, 
              height: 8, 
              backgroundColor: 'currentColor', 
              borderRadius: '50%' 
            }} />
          </Box>
        </Box>

        {/* Current Weather */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h1" sx={{ 
            fontSize: '4rem',
            fontWeight: 700,
            color: getTextColor('primary'),
            mb: 1,
            lineHeight: 1
          }}>
            {data.temperature}°
          </Typography>
          <Typography variant="h6" sx={{ 
            color: getTextColor('secondary'),
            mb: 1
          }}>
            {data.condition}
          </Typography>
          <Typography variant="body2" sx={{ 
            color: getTextColor('secondary')
          }}>
            {data.high}°—{data.low}°
          </Typography>
        </Box>

        {/* Weather Details */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          mb: 3 
        }}>
          <Typography variant="body2" sx={{ 
            color: getTextColor('secondary')
          }}>
            Wind: {data.wind} km/h
          </Typography>
          <Typography variant="body2" sx={{ 
            color: getTextColor('secondary')
          }}>
            Precipitation: {data.precipitation}%
          </Typography>
        </Box>

        {/* Hourly Forecast */}
        <Box sx={{ pt: 2 }}>
          <Divider sx={{ 
            mb: 2,
            borderColor: variant === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
          }} />
          <Typography variant="subtitle2" sx={{ 
            fontWeight: 600,
            mb: 2,
            color: getTextColor('primary')
          }}>
            Hourly
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {data.hourlyForecast.map((forecast, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <Typography variant="body2" sx={{ 
                  color: getTextColor('secondary'),
                  minWidth: '60px'
                }}>
                  {forecast.time}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: getTextColor('secondary'),
                  flex: 1,
                  textAlign: 'center'
                }}>
                  {forecast.condition}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: getTextColor('secondary'),
                  minWidth: '40px',
                  textAlign: 'center'
                }}>
                  {forecast.precipitation}%
                </Typography>
                <Typography variant="body2" sx={{ 
                  fontWeight: 600,
                  color: getTextColor('primary'),
                  minWidth: '40px',
                  textAlign: 'right'
                }}>
                  {forecast.temperature}°
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default WeatherWidget; 