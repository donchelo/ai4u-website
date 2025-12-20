import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { H1, H2, BodyText } from '../components/shared/ui/atoms';
import { MetricCard, Card } from '../components/shared/ui/molecules';
import { GeometricIcon } from '../components/shared/ui/atoms';
import { Button } from '../components/shared/ui/atoms';

const MetricsDemo: React.FC = () => {
  // Datos de ejemplo inspirados en las imágenes compartidas
  const businessMetrics = [
    {
      title: 'Tiempo Ahorrado',
      value: '22,900',
      subtitle: 'Horas recuperadas este mes',
      iconType: 'arrow-up' as const,
      variant: 'elevated' as const,
      trend: 'up' as const,
      size: 'large' as const,
    },
    {
      title: 'Procesos Automatizados',
      value: '158',
      subtitle: 'Sistemas activos',
      iconType: 'circle' as const,
      variant: 'elevated' as const,
      trend: 'up' as const,
      size: 'normal' as const,
    },
    {
      title: 'Eficiencia Operativa',
      value: '94.8',
      subtitle: 'Porcentaje de optimización',
      iconType: 'triangle' as const,
      variant: 'elevated' as const,
      trend: 'up' as const,
      size: 'normal' as const,
    },
    {
      title: 'Costo Reducido',
      value: '67,500',
      subtitle: 'USD ahorrados mensualmente',
      iconType: 'arrow-down' as const,
      variant: 'elevated' as const,
      trend: 'down' as const,
      size: 'compact' as const,
    },
  ];

  const dailyMetrics = [
    {
      title: 'Range',
      value: '24,000',
      subtitle: 'Transacciones procesadas',
    },
    {
      title: 'Active Users',
      value: '12,847',
      subtitle: 'Usuarios conectados',
    },
    {
      title: 'Revenue',
      value: '89,250',
      subtitle: 'Ingresos generados',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <H1 sx={{ textAlign: 'center', mb: 4 }}>
            Métricas de Impacto
          </H1>
          <BodyText sx={{ 
            textAlign: 'center', 
            maxWidth: 600, 
            mx: 'auto', 
            mb: 8,
            fontSize: '1.125rem'
          }}>
            Números que reflejan el verdadero valor de la automatización inteligente. 
            Cada cifra representa tiempo recuperado y recursos optimizados.
          </BodyText>

          {/* Main Business Metrics */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {businessMetrics.map((metric, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MetricCard
                  title={metric.title}
                  value={metric.value}
                  subtitle={metric.subtitle}
                  iconType={metric.iconType}
                  variant={metric.variant}
                  trend={metric.trend}
                  size={metric.size}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Daily Range Card - Inspired by first image */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <H2 sx={{ textAlign: 'center', mb: 6 }}>
            Panel de Control Diario
          </H2>
          
          <Grid container spacing={4} justifyContent="center">
            {/* Day Range Card */}
            <Grid item xs={12} md={8}>
              <Card 
                variant="elevated"
                sx={{ 
                  minHeight: '200px',
                  position: 'relative'
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  mb: 4
                }}>
                  <Typography variant="h4" sx={{ 
                    color: '#FFFFFF',
                    fontWeight: 300,
                    fontFamily: '"Red Hat Display", sans-serif'
                  }}>
                    Day Range
                  </Typography>
                  <GeometricIcon
                    type="arrow-up"
                    size="small"
                    color="#FFFFFF"
                    variant="outline"
                  />
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  mb: 3
                }}>
                  <Typography variant="h6" sx={{ 
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontFamily: '"Necto Mono", monospace'
                  }}>
                    22,000
                  </Typography>
                  <Typography variant="h3" sx={{ 
                    color: '#B6CA40',
                    fontWeight: 700,
                    fontFamily: '"Red Hat Display", sans-serif'
                  }}>
                    22,900.8
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontFamily: '"Necto Mono", monospace'
                  }}>
                    24,000
                  </Typography>
                </Box>

                {/* Progress bar */}
                <Box sx={{
                  height: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <Box sx={{
                    position: 'absolute',
                    left: '10%',
                    width: '70%',
                    height: '100%',
                    backgroundColor: '#FF5C00',
                    borderRadius: '4px'
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    left: '45%',
                    width: '4px',
                    height: '16px',
                    backgroundColor: '#000000',
                    borderRadius: '2px',
                    top: '-4px'
                  }} />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Notes Section - Inspired by second image */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10}>
              <Card 
                variant="elevated"
                sx={{ 
                  minHeight: '240px',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(182, 202, 64, 0.9), rgba(255, 235, 59, 0.8))'
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  mb: 4
                }}>
                  <Typography variant="h4" sx={{ 
                    color: '#000000',
                    fontWeight: 300,
                    fontFamily: '"Red Hat Display", sans-serif'
                  }}>
                    Notes
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <GeometricIcon
                      type="plus"
                      size="small"
                      color="rgba(255, 255, 255, 0.8)"
                      variant="filled"
                    />
                    <GeometricIcon
                      type="arrow-up"
                      size="small"
                      color="#FFFFFF"
                      variant="filled"
                    />
                  </Box>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card 
                      variant="elevated"
                      sx={{ 
                        minHeight: '100px',
                        borderRadius: '16px'
                      }}
                    >
                      <Typography variant="caption" sx={{ 
                        color: 'rgba(255, 255, 255, 0.6)',
                        mb: 1,
                        display: 'block'
                      }}>
                        12 Feb 2023
                      </Typography>
                      <Typography variant="h6" sx={{ 
                        color: '#FFFFFF',
                        fontWeight: 500
                      }}>
                        New Strategy
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      p: 3,
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    }}>
                      <Typography variant="caption" sx={{ 
                        color: 'rgba(0, 0, 0, 0.6)',
                        mb: 1,
                        display: 'block'
                      }}>
                        10 Feb 2023
                      </Typography>
                      <Typography variant="h6" sx={{ 
                        color: '#000000',
                        fontWeight: 500
                      }}>
                        My Things
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Additional Metrics Grid */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <H2 sx={{ textAlign: 'center', mb: 6 }}>
            Métricas en Tiempo Real
          </H2>
          
          <Grid container spacing={3}>
            {dailyMetrics.map((metric, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MetricCard
                  title={metric.title}
                  value={metric.value}
                  subtitle={metric.subtitle}
                  iconType="dot"
                  variant="elevated"
                  size="normal"
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button variant="primary" size="large">
              Ver Dashboard Completo
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MetricsDemo;