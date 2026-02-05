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
              label="🎯 Tu Nuevo Miembro del Equipo"
              sx={{
                backgroundColor: `${colors.accent}20`,
                color: colors.accent,
                fontSize: '14px',
                padding: '8px 4px',
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                background: `linear-gradient(90deg, ${colors.text} 0%, ${colors.accent} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
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
                color: colors.textSecondary,
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
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentDark} 100%)`,
                  color: '#fff',
                  padding: '12px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 24px ${colors.accent}40`,
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
                  borderColor: colors.accent,
                  color: colors.accent,
                  padding: '12px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: colors.accentDark,
                    backgroundColor: `${colors.accent}10`,
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
                        background: `${colors.surface}80`,
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${colors.border}`,
                        textAlign: 'center',
                        py: 2,
                      }}
                    >
                      <IconComponent sx={{ width: 32, height: 32, marginBottom: '8px', color: colors.accent }} />
                      <Typography variant="h6" sx={{ color: colors.accent, fontWeight: 700 }}>
                        {metric.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSecondary }}>
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
      <Box sx={{ py: { xs: 8, md: 12 }, background: colors.background }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 700,
              mb: 6,
              color: colors.text,
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
                      background: `linear-gradient(135deg, ${colors.surface}80 0%, ${colors.darker}40 100%)`,
                      border: `1px solid ${colors.border}`,
                      backdropFilter: 'blur(10px)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: colors.accent,
                        boxShadow: `0 12px 32px ${colors.accent}20`,
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <IconComponent
                        sx={{
                          width: 48,
                          height: 48,
                          color: colors.accent,
                          marginBottom: '16px',
                          margin: '0 auto 16px',
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: colors.text }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.6 }}>
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
      <Box sx={{ py: { xs: 8, md: 12 }, background: colors.darker }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 4,
                  color: colors.text,
                }}
              >
                Qué Puede Hacer Tu Asistente
              </Typography>

              <List sx={{ color: colors.text }}>
                {capabilities.map((capability, idx) => (
                  <ListItem key={idx} sx={{ py: 1, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32, color: colors.accent }}>
                      <CheckCircle sx={{ fontSize: 24 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={capability}
                      sx={{ m: 0, '& .MuiTypography-root': { color: colors.text } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${colors.accent}20 0%, ${colors.accent}05 100%)`,
                  border: `2px solid ${colors.accent}40`,
                  borderRadius: '12px',
                  p: 4,
                  textAlign: 'center',
                }}
              >
                <AutoAwesome sx={{ width: 64, height: 64, color: colors.accent, margin: '0 auto 24px' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: colors.text }}>
                  100% Personalizado
                </Typography>
                <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.8 }}>
                  Tú defines qué skills necesitas. Nosotros lo configuramos en 3 días. Tu asistente aprende el contexto de tu negocio y se adapta a tus procesos.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Use Cases Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: colors.background }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 700,
              mb: 6,
              color: colors.text,
            }}
          >
            Ya Está Funcionando Para Otros
          </Typography>

          <Grid container spacing={4}>
            {useCases.map((useCase, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    background: `linear-gradient(135deg, ${colors.surface}80 0%, ${colors.darker}40 100%)`,
                    border: `1px solid ${colors.border}`,
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    p: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.accent, mb: 2 }}>
                    {useCase.title}
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textSecondary, mb: 0.5 }}>
                        El Problema:
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.text }}>
                        {useCase.challenge}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textSecondary, mb: 0.5 }}>
                        La Solución:
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.text }}>
                        {useCase.solution}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: colors.accent, mb: 0.5 }}>
                        El Resultado:
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.accent, fontWeight: 600 }}>
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
          background: `linear-gradient(135deg, ${colors.accent}20 0%, ${colors.accent}05 100%)`,
          border: `2px solid ${colors.accent}40`,
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
                color: colors.text,
              }}
            >
              ¿Listo para tu Asistente Personal?
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: colors.textSecondary,
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
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentDark} 100%)`,
                  color: '#fff',
                  padding: '14px 48px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
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
                  borderColor: colors.accent,
                  color: colors.accent,
                  padding: '14px 48px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                WhatsApp
              </Button>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: colors.textSecondary,
                pt: 2,
              }}
            >
              📞 O llámanos: +57 321 817 5744
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default SuperAI;
