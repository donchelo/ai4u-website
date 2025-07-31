import React from 'react';
import { Container, Grid, Box, Stack } from '@mui/material';
import { H2, H3, BodyText, Button, GeometricIcon } from '../components/shared/ui/atoms';
import { HeroSection } from '../components/shared/ui/organisms';
import { Card, DiagnosticCTA } from '../components/shared/ui/molecules';

const features = [
  {
    title: 'La automatización ya no es opcional',
    description: 'En 2025, las empresas que no automaticen quedarán atrás. Nuestros asistentes robóticos trabajan 24/7 para mantenerte a la vanguardia, mientras tu competencia sigue atrapada en lo manual.'
  },
  {
    title: 'Libera el 70% de tu tiempo operativo',
    description: 'Nuestros asistentes robóticos transforman tiempo perdido en oportunidades de crecimiento. ROI medible desde el primer mes, mientras tú te enfocas en decisiones estratégicas que multiplican el valor de tu empresa.'
  },
  {
    title: 'Asistentes que nunca descansan',
    description: 'Imagina tener un equipo incansable que trabaja mientras tú disfrutas de lo que realmente importa. Nuestros asistentes robóticos no solo automatizan - transforman cada minuto operativo en oportunidad estratégica.'
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
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <H2 sx={{ textAlign: 'center', mb: 2, fontWeight: 400 }}>
            ¿El trabajo te está robando momentos irreemplazables?
          </H2>
          <BodyText sx={{ 
            color: 'text.secondary', 
            textAlign: 'center', 
            maxWidth: 700, 
            mb: 6,
            mx: 'auto',
            fontSize: '1rem',
            lineHeight: 1.6
          }}>
            Cada minuto atrapado en tareas operativas es un momento que no volverá. Mientras tus competidores automatizan, tú pierdes tiempo valioso que podrías estar invirtiendo en tu familia o en el crecimiento estratégico de tu empresa.
          </BodyText>
          <Grid container spacing={4}>
            {features.map((feature, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card 
                  variant="light"
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <GeometricIcon 
                      type={idx === 0 ? "triangle" : idx === 1 ? "square" : "circle"} 
                      size="small" 
                      color="rgba(0, 0, 0, 0.3)" 
                      variant="minimal" 
                    />
                    <H3 sx={{ 
                      ml: 2,
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: 'text.primary',
                      fontSize: '1.1rem'
                    }}>
                      {feature.title}
                    </H3>
                  </Box>
                  <BodyText sx={{ 
                    color: 'text.secondary', 
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                    flexGrow: 1
                  }}>
                    {feature.description}
                  </BodyText>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Robot Section - Fondo gris oscuro minimalista */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#1a1a1a', color: 'white' }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" justifyContent="center">
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <H2 sx={{ mb: 2, color: 'white', fontWeight: 300 }}>Asistentes Robóticos que Transforman tu Empresa</H2>
              <BodyText sx={{ mb: 6, color: 'rgba(255, 255, 255, 0.8)', maxWidth: 600, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Imagina tener un equipo incansable que trabaja mientras tú disfrutas de lo que realmente importa. Nuestros asistentes robóticos no solo automatizan - transforman cada minuto operativo en oportunidad estratégica.
              </BodyText>
              
              <H3 sx={{ mb: 4, color: 'white', fontWeight: 400, fontSize: '1.2rem' }}>¿Qué los hace únicos?</H3>
              
              {/* Lista ultra minimalista con iconos geométricos */}
              <Stack spacing={4} sx={{ mb: 6, maxWidth: 500 }}>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <GeometricIcon 
                    type="circle" 
                    size="small" 
                    color="#B6CA40" 
                    variant="filled" 
                  />
                  <BodyText sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: 1.6 }}>
                    Generan ROI desde el primer mes
                  </BodyText>
                </Stack>
                
                <Stack direction="row" alignItems="center" spacing={3}>
                  <GeometricIcon 
                    type="dot" 
                    size="small" 
                    color="rgba(255, 255, 255, 0.4)" 
                    variant="minimal" 
                  />
                  <BodyText sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
                    Aprenden y evolucionan con tu empresa
                  </BodyText>
                </Stack>
                
                <Stack direction="row" alignItems="center" spacing={3}>
                  <GeometricIcon 
                    type="dot" 
                    size="small" 
                    color="rgba(255, 255, 255, 0.4)" 
                    variant="minimal" 
                  />
                  <BodyText sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
                    Trabajan 24/7 para tu crecimiento
                  </BodyText>
                </Stack>
                
                <Stack direction="row" alignItems="center" spacing={3}>
                  <GeometricIcon 
                    type="dot" 
                    size="small" 
                    color="rgba(255, 255, 255, 0.4)" 
                    variant="minimal" 
                  />
                  <BodyText sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
                    Se integran perfectamente con tus sistemas
                  </BodyText>
                </Stack>
              </Stack>
              
              <Box sx={{ 
                pl: 4,
                borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                maxWidth: 500
              }}>
                <BodyText sx={{ 
                  fontStyle: 'italic', 
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: 1.6
                }}>
                  "Un equipo silencioso que trabaja incansablemente para multiplicar el valor de tu tiempo."
                </BodyText>
              </Box>
            </Box>
            
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/images/robot.png"
                alt="Robot AI4U"
                sx={{ 
                  width: { xs: 250, sm: 300, md: 300 }, 
                  height: { xs: 333, sm: 400, md: 400 }, 
                  borderRadius: '4px', 
                  filter: 'grayscale(0.2)',
                  objectFit: 'cover'
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <H2 sx={{ textAlign: 'center', mb: 2, fontWeight: 400, color: 'text.primary' }}>Servicios</H2>
          <BodyText sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 700, mb: 6, mx: 'auto', fontSize: '1rem' }}>
            Nuestras megacategorías de servicio cubren todas las necesidades de automatización, estrategia y transformación digital para tu empresa.
          </BodyText>
          <Grid container spacing={4}>
            {serviceCategories.map((cat, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <Card 
                  variant={idx === 1 ? "primary" : "light"}
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <GeometricIcon 
                      type={idx === 0 ? "triangle" : idx === 1 ? "square" : idx === 2 ? "circle" : "line"} 
                      size="medium" 
                      color={idx === 1 ? "#FF5C00" : "rgba(0, 0, 0, 0.4)"} 
                      variant={idx === 1 ? "filled" : "minimal"} 
                    />
                  </Box>
                  <H3 sx={{ 
                    mb: 2, 
                    color: idx === 1 ? '#FF5C00' : 'text.primary',
                    fontWeight: idx === 1 ? 600 : 500,
                    fontSize: '1.2rem'
                  }}>
                    {cat.title}
                  </H3>
                  <BodyText sx={{ 
                    color: 'text.secondary', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.5,
                    flexGrow: 1
                  }}>
                    {cat.description}
                  </BodyText>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <H2 sx={{ mb: 3, fontWeight: 400 }}>
              ¿Listo para transformar tu empresa?
            </H2>
            <BodyText sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem' }}>
              Descubre cómo nuestros asistentes robóticos pueden liberar tu tiempo y multiplicar tu productividad.
            </BodyText>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
              alignItems="center"
            >
              <DiagnosticCTA />
              <Button variant="outline" size="large">
                Explorar soluciones
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 