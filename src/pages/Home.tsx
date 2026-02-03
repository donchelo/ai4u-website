import React from 'react';
import { Container, Grid, Box, Stack, Typography } from '@mui/material';
import { Giant, H1, H2, H3, BodyText, Button, GeometricIcon, SEOHead } from '../components/shared/ui/atoms';
import { HeroSection } from '../components/shared/ui/organisms';
import { Card, DiagnosticCTA, RelatedPages, ExpandableSection } from '../components/shared/ui/molecules';
import { useColorMode } from '../context/ThemeContext';
import { useColors } from '../hooks';
import { usePerformanceMonitoring } from '../hooks/usePerformanceMonitoring';
import { useErrorTracking } from '../hooks';
import { getHomeStructuredData, getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';

const Home = () => {
  const { mode } = useColorMode();
  const colors = useColors();
  
  // Monitoreo automático de performance para la página de inicio
  usePerformanceMonitoring('home', {
    lcp: 2000, // Home debe cargar rápido (2s)
    fcp: 1500  // First paint crítico (1.5s)
  });

  // Error tracking para componentes críticos
  const { captureError, addContext } = useErrorTracking();
  
  // Agregar contexto útil para debugging
  React.useEffect(() => {
    addContext('page', 'home');
    addContext('userAgent', navigator.userAgent.substring(0, 100));
  }, [addContext]);

  // Obtener meta tags optimizados para la página de inicio
  const metaTags = getPageMetaTags('home');
  const structuredData = getHomeStructuredData();
  
  // Obtener enlaces contextuales para la página Home
  const relatedLinks = getRelatedLinks('/');

  // Features estáticas en español
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

  // Categorías de servicios en español
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

  // Características del robot en español
  const robotFeatures = [
    'Generan ROI desde el primer mes',
    'Aprenden y evolucionan con tu empresa',
    'Trabajan 24/7 para tu crecimiento',
    'Se integran perfectamente con tus sistemas'
  ];

  return (
    <Box>
      {/* SEO Head con meta tags optimizados */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <HeroSection 
        customTitle="TU TIEMPO ES ORO"
        customSubtitle="Mientras otros pierden el 70% de su día en tareas operativas, nuestros asistentes robóticos trabajan 24/7 para que inviertas tu tiempo en lo que realmente importa."
        primaryButtonText="RECUPERA TU TIEMPO"
      />

      {/* Features Section - Inspiración GREEN_FRESH */}
      <Box sx={{ 
        py: { xs: 10, md: 18 }, // Reducido de 15/25
        px: { xs: 4, md: 8, lg: 12 }, // Ajustado
        bgcolor: colors.palette.accentColors.green,
        color: colors.palette.black,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <H1 sx={{ mb: 8, fontWeight: 900, color: colors.palette.black, textTransform: 'uppercase', maxWidth: '1200px' }}>
            ¿EL TRABAJO TE ESTÁ ROBANDO <Box component="span" sx={{ bgcolor: colors.palette.black, color: colors.palette.white, px: 2 }}>MOMENTOS IRREEMPLAZABLES</Box>?
          </H1>
          <Grid container spacing={6}>
            {features.map((feature, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card 
                  variant="default"
                  sx={{ 
                    height: '100%',
                    p: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: colors.palette.white,
                    borderColor: colors.palette.black,
                    borderWidth: '4px',
                    '&:hover': {
                      transform: 'translate(8px, -8px)',
                      boxShadow: `12px 12px 0px ${colors.palette.black}`,
                    }
                  }}
                >
                  <H3 sx={{ 
                    mb: 3,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: colors.palette.black,
                    fontSize: '2.25rem',
                    lineHeight: 1
                  }}>
                    {feature.title}
                  </H3>
                  <BodyText sx={{ fontSize: '1.25rem', color: colors.palette.black, fontWeight: 500, lineHeight: 1.4 }}>
                    {feature.description}
                  </BodyText>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Robot Section - Inspiración BLACK_MODERN / SUPER_AI_NEON */}
      <Box sx={{ 
        py: { xs: 10, md: 18 }, // Reducido de 15/25
        px: { xs: 4, md: 8, lg: 12 }, // Ajustado
        bgcolor: colors.palette.black, 
        color: colors.palette.white,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {/* Big Background Number inspired by Pitch.tsx */}
        <Typography 
          sx={{ 
            position: 'absolute', 
            bottom: -100, 
            right: -20, 
            fontSize: '35rem', 
            fontWeight: 900, 
            color: colors.palette.white, 
            opacity: 0.03,
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          02
        </Typography>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Stack direction="column" spacing={10}>
            <Giant sx={{ color: colors.palette.white, maxWidth: '1100px', lineHeight: 0.9 }}>
              // ASISTENTES ROBÓTICOS AUTÓNOMOS
            </Giant>
            
            <Grid container spacing={8}>
              <Grid item xs={12} md={7}>
                <Stack spacing={6}>
                  {robotFeatures.map((feature, idx) => (
                    <Box key={idx} sx={{ borderLeft: `8px solid ${colors.palette.accentColors.orange}`, pl: 4 }}>
                      <H2 sx={{ 
                        color: colors.palette.white,
                        fontSize: { xs: '2.25rem', md: '3.5rem', lg: '4rem' },
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        lineHeight: 0.95,
                        letterSpacing: '-0.03em'
                      }}>
                        {feature}
                      </H2>
                    </Box>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box sx={{ 
                  p: 6, 
                  border: `6px solid ${colors.palette.accentColors.orange}`, 
                  bgcolor: 'rgba(255,92,0,0.03)',
                  backdropFilter: 'blur(20px)',
                  height: 'fit-content'
                }}>
                  <BodyText sx={{ 
                    color: colors.palette.white, 
                    fontSize: '2.2rem', 
                    lineHeight: 1.2,
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase'
                  }}>
                    "LA CÚSPIDE DE LA AUTONOMÍA: UNA IA QUE NO SOLO SUGIERE, SINO QUE EJECUTA Y MULTIPLICA TU TIEMPO."
                  </BodyText>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Services Section - Inspiración WHITE_MINIMAL */}
      <Box sx={{ 
        py: { xs: 10, md: 18 }, // Reducido de 15/25
        px: { xs: 4, md: 8, lg: 12 }, // Ajustado
        bgcolor: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <H1 sx={{ mb: 10, fontWeight: 900, textTransform: 'uppercase', color: colors.palette.black, fontSize: { xs: '2.5rem', md: '5rem' } }}>
            SERVICIOS QUE <Box component="span" sx={{ bgcolor: colors.palette.accentColors.orange, color: colors.palette.white, px: 2 }}>TRANSFORMAN</Box>
          </H1>
          
          <Grid container spacing={6}>
            {serviceCategories.map((cat, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card 
                  variant="default"
                  sx={{ 
                    height: '100%',
                    p: 6,
                    textAlign: 'left',
                    borderColor: colors.palette.black,
                    borderWidth: '4px',
                    '&:hover': {
                      bgcolor: colors.palette.black,
                      color: colors.palette.white,
                      transform: 'translateY(-10px)',
                      '& h3': { color: colors.palette.white }
                    }
                  }}
                >
                  <H3 sx={{ 
                    fontWeight: 900,
                    fontSize: '2.5rem',
                    mb: 3,
                    lineHeight: 0.9,
                    textTransform: 'uppercase'
                  }}>
                    {cat.title}
                  </H3>
                  <BodyText sx={{ fontSize: '1.25rem', fontWeight: 500, opacity: 0.8 }}>
                    {cat.description}
                  </BodyText>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section - Inspiración ORANGE_PUNCH */}
      <Box sx={{ 
        py: { xs: 15, md: 25 }, // Reducido de 20/40
        px: { xs: 4, md: 8, lg: 12 }, // Ajustado
        bgcolor: colors.palette.accentColors.orange,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center' }}>
            <Giant sx={{ mb: 8, color: colors.palette.black, fontSize: { xs: '3rem', md: '7rem', lg: '9rem' }, lineHeight: 0.85 }}>
              ¿LISTO PARA EL SIGUIENTE NIVEL?
            </Giant>
            <Stack 
              direction={{ xs: 'column', lg: 'row' }} 
              spacing={6} 
              justifyContent="center"
              alignItems="center"
            >
              <DiagnosticCTA sx={{ 
                height: '120px', 
                px: 10, 
                fontSize: '2rem', 
                fontWeight: 900,
                bgcolor: colors.palette.black, 
                color: colors.palette.white,
                border: `6px solid ${colors.palette.black}`,
                '&:hover': {
                  bgcolor: colors.palette.white,
                  color: colors.palette.black
                }
              }} />
              <Button 
                variant="outline" 
                sx={{ 
                  height: '120px', 
                  px: 10, 
                  fontSize: '2rem', 
                  fontWeight: 900, 
                  borderWidth: '6px',
                  borderColor: colors.palette.black,
                  color: colors.palette.black,
                  '&:hover': {
                    bgcolor: colors.palette.black,
                    color: colors.palette.white
                  }
                }}
              >
                SOLUCIONES IA
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Container maxWidth="lg">
        <RelatedPages 
          pages={relatedLinks}
          variant="horizontal"
        />
      </Container>
    </Box>
  );
};

export default Home;
