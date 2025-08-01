import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Chip,
  IconButton,
  Divider
} from '@mui/material';
import { 
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon,
  Bed as BedIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import { useColors } from '../../../../hooks';
import { H1, H3, H4, BodyText, SmallText } from '../atoms';

interface SleepData {
  totalHours: number;
  totalMinutes: number;
  remStart: string;
  remEnd: string;
  temperature: number;
  hasWifi: boolean;
  hasBluetooth: boolean;
  quality?: 'excellent' | 'good' | 'fair' | 'poor';
}

interface SleepWidgetProps {
  data: SleepData;
  date: string;
  time: string;
  variant?: 'glass' | 'dark' | 'primary' | 'accent';
  onRefresh?: () => void;
}

const SleepWidget: React.FC<SleepWidgetProps> = ({
  data,
  date,
  time,
  variant = 'glass',
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

  const getQualityColor = (quality?: string) => {
    switch (quality) {
      case 'excellent':
        return colors.palette.green;
      case 'good':
        return colors.palette.orange;
      case 'fair':
        return '#D97706';
      case 'poor':
        return '#DC2626';
      default:
        return colors.palette.orange;
    }
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
            <Box sx={{ 
              width: 48,
              height: 48,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: variantStyles.surface.background,
              border: variantStyles.surface.border,
              backdropFilter: 'blur(10px)'
            }}>
              <BedIcon sx={{ 
                color: colors.helpers.text.primary,
                fontSize: 24
              }} />
            </Box>
            <Box>
              <SmallText sx={{ 
                color: colors.helpers.text.secondary,
                mb: 0.5
              }}>
                {date}
              </SmallText>
              <H3 sx={{ 
                color: colors.helpers.text.primary,
                fontWeight: 700
              }}>
                {time}
              </H3>
            </Box>
          </Box>
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

        {/* Sleep Quality */}
        {data.quality && (
          <Box sx={{ 
            mb: 3,
            p: 2,
            borderRadius: 2,
            background: variantStyles.surface.background,
            border: variantStyles.surface.border,
            backdropFilter: 'blur(10px)'
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }}>
              <SmallText sx={{ 
                color: colors.helpers.text.secondary,
                textTransform: 'uppercase',
                letterSpacing: 0.5
              }}>
                Calidad del Sueño
              </SmallText>
              <Chip
                label={data.quality.toUpperCase()}
                size="small"
                sx={{
                  backgroundColor: getQualityColor(data.quality) + '20',
                  color: getQualityColor(data.quality),
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  height: 24,
                  '& .MuiChip-label': {
                    px: 1.5,
                  },
                }}
              />
            </Box>
          </Box>
        )}

        {/* Sleep Duration */}
        <Box sx={{ 
          mb: 3,
          p: 3,
          borderRadius: 3,
          background: variantStyles.surface.background,
          border: variantStyles.surface.border,
          backdropFilter: 'blur(10px)'
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            mb: 2 
          }}>
            <H4 sx={{ 
              color: colors.helpers.text.primary,
              fontWeight: 600
            }}>
              Duración del Sueño
            </H4>
            <Chip
              label={`${data.totalHours}H ${data.totalMinutes}M`}
              sx={{
                backgroundColor: colors.palette.orange,
                color: colors.palette.white,
                fontWeight: 600,
                fontSize: '0.875rem',
                height: 32,
                '& .MuiChip-label': {
                  px: 2,
                },
              }}
            />
          </Box>

          {/* Sleep Timeline */}
          <Box sx={{ 
            height: 40,
            borderRadius: 2,
            background: colors.palette.orange,
            position: 'relative',
            overflow: 'hidden',
            mb: 2
          }}>
            {/* Timeline markers */}
            <Box sx={{ 
              position: 'absolute',
              inset: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 2
            }}>
              {Array.from({ length: 20 }, (_, i) => (
                <Box key={i} sx={{ 
                  width: 2, 
                  height: 8, 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)' 
                }} />
              ))}
            </Box>
            
            {/* REM line */}
            <Box sx={{ 
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              transform: 'translateY(-50%)'
            }} />
            
            {/* Time labels */}
            <SmallText sx={{ 
              position: 'absolute',
              top: 4,
              left: 8,
              fontWeight: 600,
              color: colors.palette.white
            }}>
              {data.remStart}
            </SmallText>
            <SmallText sx={{ 
              position: 'absolute',
              top: 4,
              right: 8,
              fontWeight: 600,
              color: colors.palette.white
            }}>
              {data.remEnd}
            </SmallText>
            
            <SmallText sx={{ 
              position: 'absolute',
              bottom: 4,
              left: 8,
              color: colors.palette.white
            }}>
              REM
            </SmallText>
            <SmallText sx={{ 
              position: 'absolute',
              bottom: 4,
              right: 8,
              color: colors.palette.white
            }}>
              REM
            </SmallText>
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          p: 2,
          borderRadius: 2,
          background: variantStyles.surface.background,
          border: variantStyles.surface.border,
          backdropFilter: 'blur(10px)'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SmallText sx={{ 
              color: colors.helpers.text.secondary,
              textTransform: 'uppercase',
              letterSpacing: 0.5
            }}>
              Temperatura:
            </SmallText>
            <H4 sx={{ 
              color: colors.helpers.text.primary,
              fontWeight: 600
            }}>
              {data.temperature}°C
            </H4>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {data.hasWifi && (
              <Box sx={{ 
                width: 32,
                height: 32,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: colors.palette.orange + '20',
                color: colors.palette.orange
              }}>
                <WifiIcon sx={{ fontSize: 16 }} />
              </Box>
            )}
            {data.hasBluetooth && (
              <Box sx={{ 
                width: 32,
                height: 32,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: colors.palette.green + '20',
                color: colors.palette.green
              }}>
                <BluetoothIcon sx={{ fontSize: 16 }} />
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SleepWidget; 