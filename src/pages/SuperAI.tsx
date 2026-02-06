import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material';
import { 
  CheckCircle, 
  AccessTime, 
  TrendingUp, 
  BarChart, 
  Psychology, 
  Settings, 
  AutoAwesome 
} from '@mui/icons-material';
import { Giant, H1, H2, H3, H4, BodyText, Button, SEOHead } from '@/components/shared/ui/atoms';
import { useColors } from '@/hooks';
import { SurfaceProvider } from '@/context';

interface SuperAIProps {
  isModal?: boolean;
}

const SuperAI: React.FC<SuperAIProps> = ({ isModal = false }) => {
  const colors = useColors();

  const benefits = [
    {
      icon: Psychology,
      title: 'Asistente 100% Tuyo',
      description: 'Un IA dedicada solo a tu negocio, con acceso a toda tu información'
    },
    {
      icon: Settings,
      title: 'Skills Personalizables',
      description: 'Agrega, quita o modifica capacidades según tus necesidades'
    },
    {
      icon: TrendingUp,
      title: '70% Más Productivo',
      description: 'Tu equipo enfocado en estrategia, mientras tu asistente maneja lo operativo'
    },
    {
      icon: BarChart,
      title: 'ROI Inmediato',
      description: 'Rentable desde el primer mes de operación'
    },
  ];

  const capabilities = [
    'Entiende el contexto completo de tu negocio',
    'Procesa información en tiempo real',
    'Automatiza tareas repetitivas',
    'Genera reportes y análisis automáticamente',
    'Integra con tus herramientas actuales',
    'Toma decisiones inteligentes documentadas',
    'Escala con tu negocio sin esfuerzo',
    'Disponible 24/7 sin descanso',
  ];

  const useCases = [
    {
      title: 'Fashion & E-commerce',
      challenge: '6+ horas diarias en tareas operativas',
      solution: 'Tu asistente genera contenido, procesa pedidos y optimiza inventario automáticamente',
      result: '70% del tiempo liberado en la primera semana'
    },
    {
      title: 'Pymes Tradicionales',
      challenge: 'Procesos manuales que drenan tiempo del equipo',
      solution: 'Tu asistente maneja entrada de datos, auditorías y gestión administrativa',
      result: '126+ horas mensuales recuperadas para crecimiento'
    },
    {
      title: 'Educación & Servicios',
      challenge: 'Demanda 24/7 pero sin recursos para atenderla',
      solution: 'Tu asistente disponible siempre para responder, guiar y asistir',
      result: 'Clientes satisfechos sin costo operativo adicional'
    },
  ];

  return (
    <SurfaceProvider surface="black">
      <Helmet>
        <title>SuperAI - Tu Asistente Personal para Negocios | AI4U</title>
        <meta name="description" content="SuperAI: Tu asistente dedicado 24/7 personalizado con los skills que necesitas. Implementación en 3 días, resultados inmediatos." />
        <meta property="og:title" content="SuperAI - Tu Equipo Virtual" />
        <meta property="og:description" content="Un asistente IA que trabaja solo para ti, con tus reglas, tus datos" />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          background: `radial-gradient(circle at 50% 50%, ${colors.palette.accentColors.orange}10 0%, ${colors.palette.black} 100%)`,
          py: isModal ? { xs: 6, md: 10 } : { xs: 10, md: 20 },
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${colors.palette.gray[800]}`,
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={isModal ? 3 : 6} alignItems="center" textAlign="center">
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 2,
                  py: 0.5,
                  border: `1px solid ${colors.palette.accentColors.orange}40`,
                  bgcolor: 'rgba(0,0,0,0.5)',
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: colors.palette.accentColors.orange, boxShadow: `0 0 10px ${colors.palette.accentColors.orange}` }} />
                <Typography
                  sx={{
                    color: colors.palette.accentColors.orange,
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    fontFamily: '"Necto Mono", monospace',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase'
                  }}
                >
                  Infinite Potential // Model 2026
                </Typography>
              </Box>

            <Giant
              sx={{
                color: colors.palette.white,
                maxWidth: '1000px',
                lineHeight: 0.9,
                fontSize: isModal ? { xs: '2.5rem', md: '4.5rem', lg: '5.5rem' } : undefined,
                '& span': {
                  color: colors.palette.accentColors.orange,
                }
              }}
            >
              Tu Asistente <span>Autónomo</span> Sin Límites
            </Giant>

            <BodyText
              sx={{
                fontSize: isModal ? '1.1rem' : { xs: '1.2rem', md: '1.6rem' },
                color: colors.palette.gray[400],
                maxWidth: '800px',
                fontWeight: 300,
                lineHeight: 1.4,
              }}
            >
              Un motor de ejecución de élite 100% personalizado. No sugerimos soluciones, las ejecutamos.
            </BodyText>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
              <Button
                variant="primary"
                size="large"
                sx={{
                  px: 6,
                  height: '70px',
                  fontSize: '1.1rem',
                  fontWeight: 900,
                  bgcolor: colors.palette.white,
                  color: colors.palette.black,
                  '&:hover': {
                    bgcolor: colors.palette.accentColors.orange,
                    color: colors.palette.white,
                  },
                }}
              >
                AGENDAR DESPLIEGUE
              </Button>
              <Button
                variant="outline"
                size="large"
                sx={{
                  px: 6,
                  height: '70px',
                  fontSize: '1.1rem',
                  fontWeight: 900,
                  borderColor: colors.palette.gray[700],
                  color: colors.palette.white,
                  '&:hover': {
                    borderColor: colors.palette.white,
                    bgcolor: 'rgba(255,255,255,0.05)',
                  },
                }}
              >
                EXPLORAR CASOS
              </Button>
            </Stack>

            {/* Key Metrics Dashboard Style */}
            <Grid container spacing={2} sx={{ pt: isModal ? 4 : 8, maxWidth: '1000px' }}>
              {[
                { label: 'Tiempo de Setup', value: '72H', sub: 'FAST TRACK' },
                { label: 'Eficiencia Op.', value: '+70%', sub: 'MINIMUN GUARANTEE' },
                { label: 'Retorno ROI', value: '3.5X', sub: 'MONTHLY AVG' },
              ].map((metric, idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  <Box
                    sx={{
                      textAlign: 'left',
                      p: 3,
                      border: `1px solid ${colors.palette.gray[900]}`,
                      bgcolor: 'rgba(255,255,255,0.02)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '2px',
                        height: '100%',
                        bgcolor: idx === 0 ? colors.palette.accentColors.orange : colors.palette.gray[800],
                      }
                    }}
                  >
                    <Typography 
                      sx={{ 
                        fontFamily: '"Necto Mono", monospace', 
                        color: colors.palette.gray[500], 
                        fontSize: '0.7rem', 
                        mb: 1,
                        letterSpacing: '0.1em'
                      }}
                    >
                      {metric.sub}
                    </Typography>
                    <H2 sx={{ color: colors.palette.white, fontWeight: 900, mb: 0.5, fontSize: '2.5rem' }}>
                      {metric.value}
                    </H2>
                    <BodyText sx={{ color: colors.palette.gray[400], fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {metric.label}
                    </BodyText>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Benefits Section - Bento Grid */}
      <Box sx={{ py: isModal ? 8 : 15, background: colors.palette.black }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <H1 sx={{ mb: 4, color: colors.palette.white }}>
                INGENIERÍA DE <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>ELITE</Box> PARA TU OPERACIÓN
              </H1>
              <BodyText sx={{ color: colors.palette.gray[400], mb: 6, fontSize: '1.2rem', fontWeight: 300 }}>
                SuperAI no es un chatbot. Es una capa de inteligencia profunda que vive en tu infraestructura y ejecuta tareas complejas sin supervisión.
              </BodyText>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {benefits.map((benefit, idx) => {
                  const IconComponent = benefit.icon;
                  return (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Box
                        sx={{
                          bgcolor: colors.palette.gray[900],
                          p: 3,
                          height: '100%',
                          border: `1px solid ${colors.palette.gray[800]}`,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: colors.palette.accentColors.orange,
                            transform: 'translateY(-4px)',
                          },
                        }}
                      >
                        <IconComponent sx={{ fontSize: 32, color: colors.palette.accentColors.orange, mb: 2 }} />
                        <H4 sx={{ mb: 1, color: colors.palette.white, fontSize: '1.1rem' }}>
                          {benefit.title}
                        </H4>
                        <BodyText sx={{ color: colors.palette.gray[500], fontSize: '0.85rem', lineHeight: 1.4 }}>
                          {benefit.description}
                        </BodyText>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Capabilities Section */}
      <Box sx={{ py: isModal ? 8 : 18, background: colors.palette.gray[900], borderTop: `1px solid ${colors.palette.gray[800]}`, borderBottom: `1px solid ${colors.palette.gray[800]}` }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={7}>
              <H2 sx={{ mb: 6, color: colors.palette.white }}>
                CAPACIDADES <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>SIN LÍMITES</Box>
              </H2>

              <Grid container spacing={2}>
                {capabilities.map((capability, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <CheckCircle sx={{ fontSize: 18, color: colors.palette.accentColors.orange }} />
                      <BodyText sx={{ color: colors.palette.white, fontWeight: 500, fontSize: '0.95rem' }}>
                        {capability}
                      </BodyText>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  background: colors.palette.black,
                  border: `1px solid ${colors.palette.white}20`,
                  p: 5,
                  position: 'relative',
                }}
              >
                <AutoAwesome sx={{ fontSize: 40, color: colors.palette.accentColors.orange, mb: 3 }} />
                <H3 sx={{ mb: 2, color: colors.palette.white, fontSize: '1.5rem' }}>
                  ADN 100% EMPRESARIAL
                </H3>
                <BodyText sx={{ color: colors.palette.gray[400], fontSize: '1rem' }}>
                  Olvídate de los prompts manuales. SuperAI utiliza arquitecturas de agentes autónomos que entienden objetivos, no solo instrucciones.
                </BodyText>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Use Cases Section */}
      <Box sx={{ py: isModal ? 8 : 15, background: colors.palette.black }}>
        <Container maxWidth="lg">
          <H1 sx={{ textAlign: 'center', mb: 8, color: colors.palette.white }}>
            RESULTADOS <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>REALES</Box>
          </H1>

          <Grid container spacing={3}>
            {useCases.map((useCase, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box
                  sx={{
                    bgcolor: colors.palette.gray[900],
                    border: `1px solid ${colors.palette.gray[800]}`,
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: colors.palette.gray[600],
                    }
                  }}
                >
                  <H4 sx={{ color: colors.palette.white, mb: 3, fontSize: '1.2rem' }}>
                    {useCase.title}
                  </H4>
                  <Stack spacing={3} sx={{ flexGrow: 1 }}>
                    <Box>
                      <BodyText sx={{ fontFamily: '"Necto Mono", monospace', color: colors.palette.accentColors.orange, mb: 1, fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                        PRB // {useCase.challenge.substring(0, 15)}...
                      </BodyText>
                      <BodyText sx={{ color: colors.palette.gray[400], fontSize: '0.9rem', fontWeight: 300 }}>
                        {useCase.challenge}
                      </BodyText>
                    </Box>
                    <Box sx={{ mt: 'auto', pt: 3, borderTop: `1px solid ${colors.palette.gray[800]}` }}>
                      <Typography sx={{ color: colors.palette.white, fontWeight: 900, fontSize: '1.25rem', lineHeight: 1.1 }}>
                        {useCase.result}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: colors.palette.gray[900],
          py: isModal ? 8 : 15,
          textAlign: 'center',
          borderTop: `1px solid ${colors.palette.gray[800]}`,
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center">
            <H2 sx={{ color: colors.palette.white }}>
              ¿LISTO PARA TU PRIMER <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>AGENTE AUTÓNOMO</Box>?
            </H2>

            <BodyText sx={{ color: colors.palette.gray[400], maxWidth: '600px' }}>
              En 72 horas tu primer flujo de trabajo estará automatizado al 100%. No busques más empleados, busca más agentes.
            </BodyText>

            <Button
              variant="primary"
              size="large"
              href="https://calendly.com/mgarciap333/ai4u"
              target="_blank"
              sx={{
                px: 8,
                height: '80px',
                fontSize: '1.2rem',
                fontWeight: 900,
                bgcolor: colors.palette.accentColors.orange,
                color: colors.palette.white,
                '&:hover': {
                  bgcolor: colors.palette.white,
                  color: colors.palette.black,
                }
              }}
            >
              RESERVAR CONSULTA TÉCNICA
            </Button>
          </Stack>
        </Container>
      </Box>
    </SurfaceProvider>
  );
};

export default SuperAI;
