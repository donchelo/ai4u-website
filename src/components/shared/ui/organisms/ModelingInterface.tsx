import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Slider,
  Grid,
  useTheme,
  styled
} from '@mui/material';

interface Tool {
  id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}

interface Form {
  id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}

interface LightSource {
  id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}

interface ModelingInterfaceProps {
  rotationAngle?: number;
  brightness?: number;
  shadowDensity?: number;
}

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.spacing(2),
  maxWidth: 1024,
  margin: '0 auto',
  boxShadow: theme.shadows[3],
}));

const IconButton = styled(Button)<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  minWidth: 32,
  width: 32,
  height: 32,
  padding: 0,
  borderRadius: theme.spacing(1),
  backgroundColor: isSelected ? theme.palette.text.primary : theme.palette.background.paper,
  color: isSelected ? theme.palette.background.paper : theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: isSelected ? theme.palette.text.primary : theme.palette.action.hover,
  },
}));

const ToolButton = styled(Button)<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  width: '100%',
  justifyContent: 'flex-start',
  padding: theme.spacing(1, 1.5),
  borderRadius: theme.spacing(1),
  backgroundColor: isSelected ? theme.palette.text.primary : theme.palette.background.paper,
  color: isSelected ? theme.palette.background.paper : theme.palette.text.secondary,
  textTransform: 'none',
  fontSize: '0.875rem',
  '&:hover': {
    backgroundColor: isSelected ? theme.palette.text.primary : theme.palette.action.hover,
  },
}));

const CanvasBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  position: 'relative',
  minHeight: 320,
}));

const ModelingInterface: React.FC<ModelingInterfaceProps> = ({
  rotationAngle = 35,
  brightness = 30,
  shadowDensity = 25
}) => {
  const theme = useTheme();
  const [selectedTool, setSelectedTool] = useState('rotation');
  const [selectedForm, setSelectedForm] = useState('cube');
  const [selectedLight, setSelectedLight] = useState('spot');

  const forms: Form[] = [
    { id: 'cube', name: 'Cube', icon: '□', isSelected: true },
    { id: 'sphere', name: 'Sphere', icon: '○' },
    { id: 'cone', name: 'Cone', icon: '△' },
    { id: 'cylinder', name: 'Cylinder', icon: '●' },
    { id: 'more', name: 'More', icon: '⋯' }
  ];

  const tools: Tool[] = [
    { id: 'render', name: 'Render', icon: '◉' },
    { id: 'rotation', name: 'Rotation', icon: '⟲', isSelected: true },
    { id: 'texture', name: 'Texture', icon: '◐' },
    { id: 'polygons', name: 'Polygons', icon: '◢' },
    { id: 'points', name: 'Points', icon: '●' },
    { id: 'intrude', name: 'Intrude', icon: '↓' }
  ];

  const lightSources: LightSource[] = [
    { id: 'spot', name: 'Spot', icon: '⊙', isSelected: true },
    { id: 'area', name: 'Area', icon: '◼' },
    { id: 'target', name: 'Target', icon: '◎' },
    { id: 'sun', name: 'Sun', icon: '◉' }
  ];

  return (
    <StyledCard>
      <CardContent sx={{ p: 3 }}>
        {/* Top Bar */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mb: 3 
        }}>
          <Typography variant="body2" sx={{ 
            color: theme.palette.text.secondary 
          }}>
            Sat—19 January
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ 
              width: 12, 
              height: 12, 
              backgroundColor: theme.palette.grey[400], 
              borderRadius: '50%' 
            }} />
            <Box sx={{ 
              width: 12, 
              height: 12, 
              backgroundColor: theme.palette.grey[400], 
              borderRadius: '50%' 
            }} />
            <Box sx={{ 
              width: 12, 
              height: 12, 
              backgroundColor: theme.palette.error.main, 
              borderRadius: '50%' 
            }} />
          </Box>
          <Typography variant="body2" sx={{ 
            color: theme.palette.text.secondary 
          }}>
            2019
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Forms */}
              <Box>
                <Typography variant="subtitle2" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 1.5
                }}>
                  Forms
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {forms.map((form) => (
                    <IconButton
                      key={form.id}
                      isSelected={selectedForm === form.id}
                      onClick={() => setSelectedForm(form.id)}
                    >
                      {form.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>

              {/* Tools */}
              <Box>
                <Typography variant="subtitle2" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 1.5
                }}>
                  Tools
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {tools.map((tool) => (
                    <ToolButton
                      key={tool.id}
                      isSelected={selectedTool === tool.id}
                      onClick={() => setSelectedTool(tool.id)}
                      startIcon={<span>{tool.icon}</span>}
                    >
                      {tool.name}
                    </ToolButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Center Canvas */}
          <Grid item xs={12} md={6}>
            <CanvasBox>
              {/* Grid Background */}
              <Box sx={{ 
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                borderRadius: 2,
                overflow: 'hidden'
              }}>
                <Box sx={{ 
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.2,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gridTemplateRows: 'repeat(8, 1fr)',
                  height: '100%'
                }}>
                  {Array.from({ length: 96 }, (_, i) => (
                    <Box key={i} sx={{ 
                      border: `1px solid ${theme.palette.grey[300]}` 
                    }} />
                  ))}
                </Box>
              </Box>

              {/* 3D Object */}
              <Box sx={{ 
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 256
              }}>
                <Box sx={{ 
                  width: 96,
                  height: 96,
                  border: `2px solid ${theme.palette.text.primary}`,
                  position: 'relative',
                  transform: 'rotate(45deg)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderLeft: `1px solid ${theme.palette.grey[600]}`,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderTop: `1px solid ${theme.palette.grey[600]}`,
                  }
                }} />
                
                {/* Rotation Control */}
                <Box sx={{ 
                  mt: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Box sx={{ 
                    width: 128,
                    height: 32,
                    border: `2px solid ${theme.palette.grey[400]}`,
                    borderRadius: '16px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Box sx={{ 
                      width: 8,
                      height: 8,
                      backgroundColor: theme.palette.grey[600],
                      borderRadius: '50%'
                    }} />
                  </Box>
                  <Box sx={{ mt: 1, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ 
                      color: theme.palette.text.secondary 
                    }}>
                      Rotation
                    </Typography>
                    <Typography variant="h4" sx={{ 
                      fontWeight: 700,
                      color: theme.palette.text.primary
                    }}>
                      {rotationAngle}°
                    </Typography>
                  </Box>
                </Box>

                {/* Axis Indicator */}
                <Box sx={{ 
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  fontSize: '0.75rem'
                }}>
                  <Typography variant="caption" sx={{ color: theme.palette.error.main }}>
                    X
                  </Typography>
                  <Typography variant="caption" sx={{ color: theme.palette.success.main }}>
                    Y
                  </Typography>
                  <Typography variant="caption" sx={{ color: theme.palette.info.main }}>
                    Z
                  </Typography>
                </Box>
              </Box>
            </CanvasBox>
          </Grid>

          {/* Right Panel */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Lightning */}
              <Box>
                <Typography variant="subtitle2" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 1.5
                }}>
                  Lightning
                </Typography>
                <Grid container spacing={1}>
                  {lightSources.map((light) => (
                    <Grid item xs={6} key={light.id}>
                      <IconButton
                        isSelected={selectedLight === light.id}
                        onClick={() => setSelectedLight(light.id)}
                        sx={{ width: 48, height: 48 }}
                      >
                        {light.icon}
                      </IconButton>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Sliders */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: 1
                  }}>
                    <Typography variant="caption" sx={{ 
                      color: theme.palette.text.secondary 
                    }}>
                      Brightness
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: theme.palette.text.secondary 
                    }}>
                      {brightness}%
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    width: '100%',
                    height: 8,
                    backgroundColor: theme.palette.grey[300],
                    borderRadius: 1,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <Box sx={{ 
                      height: '100%',
                      width: `${brightness}%`,
                      backgroundColor: theme.palette.text.primary,
                      borderRadius: 1,
                      transition: 'width 0.3s ease'
                    }} />
                  </Box>
                </Box>

                <Box>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: 1
                  }}>
                    <Typography variant="caption" sx={{ 
                      color: theme.palette.text.secondary 
                    }}>
                      Shadow Density
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: theme.palette.text.secondary 
                    }}>
                      {shadowDensity}%
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    width: '100%',
                    height: 8,
                    backgroundColor: theme.palette.grey[300],
                    borderRadius: 1,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <Box sx={{ 
                      height: '100%',
                      width: `${shadowDensity}%`,
                      backgroundColor: theme.palette.text.primary,
                      borderRadius: 1,
                      transition: 'width 0.3s ease'
                    }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Elements */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mt: 3,
          pt: 2,
          borderTop: `1px solid ${theme.palette.divider}`
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ 
              width: 16,
              height: 16,
              border: `1px solid ${theme.palette.grey[400]}`,
              borderRadius: 1
            }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="caption" sx={{ 
                color: theme.palette.text.secondary,
                fontSize: '0.75rem'
              }}>
                END IS UI
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="caption" sx={{ 
                  color: theme.palette.text.secondary,
                  fontSize: '0.75rem'
                }}>
                  UI
                </Typography>
                <Box sx={{ 
                  width: 4,
                  height: 4,
                  backgroundColor: theme.palette.text.primary,
                  borderRadius: '50%'
                }} />
              </Box>
            </Box>
          </Box>
          <Typography variant="caption" sx={{ 
            color: theme.palette.text.secondary,
            fontSize: '0.75rem'
          }}>
            013
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ModelingInterface; 