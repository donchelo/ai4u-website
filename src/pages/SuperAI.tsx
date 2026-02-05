import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle,
  ElectricBolt,
  AccessTime,
  TrendingUp,
  Psychology,
  Settings,
  BarChart,
  AutoAwesome,
} from '@mui/icons-material';
import { useColors } from '@/hooks';

const SuperAI: React.FC = () => {
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
    <>
      <Helmet>
        <title>SuperAI - Tu Asistente Personal para Negocios | AI4U</title>
        <meta name="description" content="SuperAI: Tu asistente dedicado 24/7 personalizado con los skills que necesitas. Implementación en 3 días, resultados inmediatos." />
        <meta property="og:title" content="SuperAI - Tu Equipo Virtual" />
        <meta property="og:description" content="Un asistente IA que trabaja solo para ti, con tus reglas, tus datos" />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.darker} 100%)`,
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: `radial-gradient(circle, ${colors.accent}15 0%, transparent 70%)`,
            borderRadius: '50%',
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Chip
              label="Tu Nuevo Miembro del Equipo"
              sx={{
                backgroundColor: colors.contrast.background,
                color: colors.contrast.text.primary,
                border: `2px solid ${colors.palette.accentColors.orange}`,
                fontSize: '14px',
                fontWeight: 700,
                padding: '8px 4px',
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                color: colors.contrast.text.primary,
                maxWidth: '800px',
                lineHeight: 1.2,
              }}
            >
              Tu Asistente Dedicado que Trabaja 24/7
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: colors.contrast.text.secondary,
                maxWidth: '700px',
                lineHeight: 1.6,
              }}
            >
              Un IA 100% personalizado con los skills exactos que necesitas. Sin distracciones, sin limitaciones. Solo resultado.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 3 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: colors.contrast.text.primary,
                  color: colors.contrast.background,
                  padding: '12px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 0,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    bgcolor: colors.contrast.text.secondary,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Ver Demostración
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: colors.contrast.text.primary,
                  color: colors.contrast.text.primary,
                  padding: '12px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 0,
                  '&:hover': {
                    borderColor: colors.contrast.text.primary,
                    backgroundColor: colors.contrast.divider,
                  },
                }}
              >
                Casos de Éxito
              </Button>
            </Stack>

            {/* Key Metrics */}
            <Grid container spacing={3} sx={{ pt: 4, maxWidth: '800px' }}>
              {[
                { label: 'En Vivo', value: '3 Días', icon: AccessTime },
                { label: 'Productividad', value: '+70%', icon: TrendingUp },
                { label: 'ROI', value: '300%', icon: BarChart },
              ].map((metric, idx) => {
                const IconComponent = metric.icon;
                return (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card
                      sx={{
                        background: colors.contrast.surface,
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${colors.contrast.border}`,
                        textAlign: 'center',
                        py: 2,
                        borderRadius: 0,
                      }}
                    >
                      <IconComponent sx={{ width: 32, height: 32, marginBottom: '8px', color: colors.palette.accentColors.orange }} />
                      <Typography variant="h6" sx={{ color: colors.contrast.text.primary, fontWeight: 700 }}>
                        {metric.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
                        {metric.label}
                      </Typography>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: colors.contrast.background }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 700,
              mb: 6,
              color: colors.contrast.text.primary,
            }}
          >
            ¿Por qué SuperAI es Diferente?
          </Typography>

          <Grid container spacing={4}>
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <Grid item xs={12} sm={6} md={6} lg={3} key={idx}>
                  <Card
                    sx={{
                      background: colors.contrast.surface,
                      border: `1px solid ${colors.contrast.border}`,
                      backdropFilter: 'blur(10px)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      borderRadius: 0,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: colors.contrast.text.primary,
                        boxShadow: `0 12px 32px rgba(0,0,0,0.1)`,
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <IconComponent
                        sx={{
                          width: 48,
                          height: 48,
                          color: colors.palette.accentColors.orange,
                          marginBottom: '16px',
                          margin: '0 auto 16px',
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: colors.contrast.text.primary }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.contrast.text.secondary, lineHeight: 1.6 }}>
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Capabilities Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: colors.contrast.surface }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 4,
                  color: colors.contrast.text.primary,
                }}
              >
                Qué Puede Hacer Tu Asistente
              </Typography>

              <List sx={{ color: colors.contrast.text.primary }}>
                {capabilities.map((capability, idx) => (
                  <ListItem key={idx} sx={{ py: 1, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32, color: colors.contrast.text.primary }}>
                      <CheckCircle sx={{ fontSize: 24 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={capability}
                      sx={{ m: 0, '& .MuiTypography-root': { color: colors.contrast.text.primary } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: colors.contrast.background,
                  border: `2px solid ${colors.contrast.border}`,
                  borderRadius: 0,
                  p: 4,
                  textAlign: 'center',
                }}
              >
                <AutoAwesome sx={{ width: 64, height: 64, color: colors.contrast.text.primary, margin: '0 auto 24px' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colors.contrast.text.primary }}>
                  100% Personalizado
                </Typography>
                <Typography variant="body2" sx={{ color: colors.contrast.text.secondary, lineHeight: 1.8 }}>
                  Tú defines qué skills necesitas. Nosotros lo configuramos en 3 días. Tu asistente aprende el contexto de tu negocio y se adapta a tus procesos.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Use Cases Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: colors.contrast.background }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 700,
              mb: 6,
              color: colors.contrast.text.primary,
            }}
          >
            Ya Está Funcionando Para Otros
          </Typography>

          <Grid container spacing={4}>
            {useCases.map((useCase, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    background: colors.contrast.surface,
                    border: `1px solid ${colors.contrast.border}`,
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    p: 3,
                    borderRadius: 0,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.contrast.text.primary, mb: 2 }}>
                    {useCase.title}
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: colors.contrast.text.secondary, mb: 0.5 }}>
                        El Problema:
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.contrast.text.primary }}>
                        {useCase.challenge}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: colors.contrast.text.secondary, mb: 0.5 }}>
                        La Solución:
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.contrast.text.primary }}>
                        {useCase.solution}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: colors.contrast.text.primary, mb: 0.5 }}>
                        El Resultado:
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.contrast.text.primary, fontWeight: 600 }}>
                        {useCase.result}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: colors.contrast.surface,
          border: `2px solid ${colors.contrast.border}`,
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: colors.contrast.text.primary,
              }}
            >
              ¿Listo para tu Asistente Personal?
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: colors.contrast.text.secondary,
                fontWeight: 400,
              }}
            >
              Una conversación de 30 minutos es suficiente para entender qué necesitas. Luego, 3 días para que tu nuevo asistente esté en vivo.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                href="https://calendly.com/mgarciap333/ai4u"
                target="_blank"
                sx={{
                  bgcolor: colors.contrast.text.primary,
                  color: colors.contrast.background,
                  padding: '14px 48px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 0,
                  '&:hover': {
                    bgcolor: colors.contrast.text.secondary,
                  }
                }}
              >
                Agendar Conversación
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="https://wa.me/573218175744"
                target="_blank"
                sx={{
                  borderColor: colors.contrast.text.primary,
                  color: colors.contrast.text.primary,
                  padding: '14px 48px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 0,
                  '&:hover': {
                    bgcolor: colors.contrast.divider,
                  }
                }}
              >
                WhatsApp
              </Button>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: colors.contrast.text.secondary,
                pt: 2,
              }}
            >
              Llámanos: +57 321 817 5744
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default SuperAI;
