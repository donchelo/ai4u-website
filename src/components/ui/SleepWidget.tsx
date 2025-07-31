import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Chip,
  useTheme,
  styled
} from '@mui/material';
import { 
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon
} from '@mui/icons-material';

interface SleepData {
  totalHours: number;
  totalMinutes: number;
  remStart: string;
  remEnd: string;
  temperature: number;
  hasWifi: boolean;
  hasBluetooth: boolean;
}

interface SleepWidgetProps {
  data: SleepData;
  date: string;
  time: string;
}

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1F2937', // gray-800
  color: '#FFFFFF',
  borderRadius: theme.spacing(3),
  maxWidth: 400,
  margin: '0 auto',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  },
}));

const SleepTimeline = styled(Box)(({ theme }) => ({
  backgroundColor: '#FF5C00', // neon-blaze
  height: 32,
  borderRadius: theme.spacing(1),
  position: 'relative',
  overflow: 'hidden',
}));

const SleepWidget: React.FC<SleepWidgetProps> = ({
  data,
  date,
  time
}) => {
  const theme = useTheme();

  return (
    <StyledCard>
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mb: 3 
        }}>
          <Box>
            <Typography variant="body2" sx={{ 
              color: '#9CA3AF', // gray-400
              mb: 0.5
            }}>
              {date}
            </Typography>
            <Typography variant="h4" sx={{ 
              fontWeight: 700,
              color: '#FFFFFF'
            }}>
              {time}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" sx={{ 
              color: '#9CA3AF' // gray-400
            }}>
              43
            </Typography>
          </Box>
        </Box>

        {/* Sleep Section */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            mb: 2 
          }}>
            <Typography variant="h6" sx={{ 
              color: '#FFFFFF'
            }}>
              Sleep
            </Typography>
            <Chip
              label={`${data.totalHours}H ${data.totalMinutes}M`}
              sx={{
                backgroundColor: '#FF5C00', // neon-blaze
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
            />
          </Box>

          {/* Sleep Timeline */}
          <SleepTimeline>
            {/* Timeline markers */}
            <Box sx={{ 
              position: 'absolute',
              inset: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 1
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
            <Typography variant="caption" sx={{ 
              position: 'absolute',
              top: 2,
              left: 8,
              fontWeight: 600,
              color: '#FFFFFF'
            }}>
              {data.remStart}
            </Typography>
            <Typography variant="caption" sx={{ 
              position: 'absolute',
              top: 2,
              right: 8,
              fontWeight: 600,
              color: '#FFFFFF'
            }}>
              {data.remEnd}
            </Typography>
            
            <Typography variant="caption" sx={{ 
              position: 'absolute',
              bottom: 2,
              left: 8,
              color: '#FFFFFF'
            }}>
              REM
            </Typography>
            <Typography variant="caption" sx={{ 
              position: 'absolute',
              bottom: 2,
              right: 8,
              color: '#FFFFFF'
            }}>
              REM
            </Typography>
          </SleepTimeline>
        </Box>

        {/* Footer */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <Typography variant="body2" sx={{ 
            color: '#FFFFFF'
          }}>
            {data.temperature}°C
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {data.hasWifi && (
              <WifiIcon sx={{ 
                fontSize: 16, 
                color: '#FFFFFF' 
              }} />
            )}
            {data.hasBluetooth && (
              <BluetoothIcon sx={{ 
                fontSize: 16, 
                color: '#FFFFFF' 
              }} />
            )}
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default SleepWidget; 