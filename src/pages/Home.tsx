import React from 'react';
import { Container, Grid, Box, Stack } from '@mui/material';
import { H2, H3, BodyText } from '../components/ui/Typography';
import HeroSection from '../components/HeroSection';
import Card from '../components/ui/Card';
import { DiagnosticCTA } from '../components/ui/DiagnosticCTA';

const features = [
  {
    icon: '⚡',
    title: 'La automatización ya no es opcional',
    description: 'En 2025, las empresas que no automaticen quedarán atrás. Nuestros asistentes robóticos trabajan 24/7 para mantenerte a la vanguardia, mientras tu competencia sigue atrapada en lo manual.',
    button: 'Mantente competitivo',
  },
  {
    icon: '📈',
    title: 'Libera el 70% de tu tiempo operativo',
    description: 'Nuestros asistentes robóticos transforman tiempo perdido en oportunidades de crecimiento. ROI medible desde el primer mes, mientras tú te enfocas en decisiones estratégicas que multiplican el valor de tu empresa.',
    button: 'Calcula tu ROI',
  },
  {
    icon: '🤖',
    title: 'Asistentes que nunca descansan',
    description: 'Imagina tener un equipo incansable que trabaja mientras tú disfrutas de lo que realmente importa. Nuestros asistentes robóticos no solo automatizan - transforman cada minuto operativo en oportunidad estratégica.',
    button: 'Conoce más',
  },
];

const serviceCategories = [
  {
    title: 'Estrategia',
    description: 'Acompañamiento estratégico continuo, diagnóstico y planificación empresarial con IA para transformar tu negocio desde la raíz.'
  },
  {
    title: 'Automatizaciones',
    description: 'Implementación de asistentes robóticos, chatbots y sistemas automáticos que trabajan 24/7 para liberar tu tiempo y potenciar tu empresa.'
  },
  {
    title: 'Educación',
    description: 'Capacitación y formación en inteligencia artificial y automatización para que tu equipo evolucione junto a la tecnología.'
  },
  {
    title: 'Transformación Digital',
    description: 'Integración de soluciones digitales y automatizadas para llevar tu empresa al siguiente nivel de eficiencia y competitividad.'
  },
];

const robotBenefits = [
  'Generan ROI desde el primer mes',
  'Aprenden y evolucionan con tu empresa',
  'Trabajan 24/7 para tu crecimiento',
  'Se integran perfectamente con tus sistemas',
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection 
        customTitle="¡Tu tiempo es oro!"
        customSubtitle="Mientras otros pierden el 70% de su día en tareas operativas, nuestros asistentes robóticos trabajan 24/7 para que inviertas tu tiempo en lo que realmente importa: tu familia y el crecimiento estratégico de tu empresa."
        primaryButtonText="Recupera tu tiempo familiar"
        secondaryButtonText="Calcula tu ROI"
      />

      {/* Features Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <H2 sx={{ textAlign: 'center', mb: 2 }}>¿El trabajo te está robando momentos irreemplazables?</H2>
          <BodyText sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 6 }}>
            Cada minuto atrapado en tareas operativas es un momento que no volverá. Mientras tus competidores automatizan, tú pierdes tiempo valioso que podrías estar invirtiendo en tu familia o en el crecimiento estratégico de tu empresa.
          </BodyText>
          <Grid container spacing={4}>
            {features.map((feature, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card sx={{ textAlign: 'center', py: 4, px: 2, minHeight: 340 }}>
                  <Box sx={{ fontSize: 48, mb: 2 }}>{feature.icon}</Box>
                  <H3 sx={{ mb: 1 }}>{feature.title}</H3>
                  <BodyText sx={{ color: 'text.secondary', mb: 2 }}>{feature.description}</BodyText>
                  <DiagnosticCTA variant="primary" size="medium" text={feature.button} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Robot Section */}
      <Box sx={{ py: 10, bgcolor: 'primary.dark', color: 'background.paper' }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" justifyContent="center">
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <H2 sx={{ mb: 2, color: 'background.paper' }}>Asistentes Robóticos que Transforman tu Empresa</H2>
              <BodyText sx={{ mb: 4, color: 'background.paper', maxWidth: 600 }}>
                Imagina tener un equipo incansable que trabaja mientras tú disfrutas de lo que realmente importa. Nuestros asistentes robóticos no solo automatizan - transforman cada minuto operativo en oportunidad estratégica.
              </BodyText>
              <H3 sx={{ mb: 2, color: 'background.paper' }}>¿Qué los hace únicos?</H3>
              <Box component="ul" sx={{ pl: 3, mb: 2, color: 'background.paper' }}>
                {robotBenefits.map((benefit, idx) => (
                  <li key={idx} style={{ marginBottom: 8, fontSize: 18 }}>✓ {benefit}</li>
                ))}
              </Box>
              <BodyText sx={{ fontStyle: 'italic', color: 'background.paper' }}>
                "Un equipo silencioso que trabaja incansablemente para multiplicar el valor de tu tiempo."
              </BodyText>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/images/robot-assistant.png"
                alt="Robot AI4U"
                sx={{ width: 300, height: 400, borderRadius: 8, boxShadow: 6, objectFit: 'cover', bgcolor: 'background.paper' }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <H2 sx={{ textAlign: 'center', mb: 2 }}>Servicios</H2>
          <BodyText sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 6 }}>
            Nuestras megacategorías de servicio cubren todas las necesidades de automatización, estrategia y transformación digital para tu empresa.
          </BodyText>
          <Grid container spacing={4}>
            {serviceCategories.map((cat, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <Card sx={{ textAlign: 'center', py: 4, px: 2, minHeight: 220 }}>
                  <H3 sx={{ mb: 1 }}>{cat.title}</H3>
                  <BodyText sx={{ color: 'text.secondary' }}>{cat.description}</BodyText>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 