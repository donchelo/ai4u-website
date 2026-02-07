import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Stack, Typography } from '@mui/material';
import { Giant, H1, H2, H3, BodyText, Button, GeometricIcon, SEOHead } from '../components/shared/ui/atoms';
import { HeroSection } from '../components/shared/ui/organisms';
import { Card, DiagnosticCTA, RelatedPages } from '../components/shared/ui/molecules';
import { SurfaceProvider } from '../context';
import { useColors } from '../hooks';
import { usePerformanceMonitoring } from '../hooks/usePerformanceMonitoring';
import { useErrorTracking } from '../hooks';
import { getHomeStructuredData, getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';
import { ServiceSuperCategory } from '../types/service';
import { ROUTES } from '../utils/constants';
import { scrollToTop } from '../utils/helpers';

const Home = () => {
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
      title: 'Cada hora cuenta',
      description: 'Automatiza lo operativo. Enfócate en lo estratégico.'
    },
    {
      title: 'Compra tiempo, no software',
      description: 'Resultados medibles desde el primer mes.'
    },
    {
      title: 'Tu competencia ya empezó',
      description: 'Nuestros agentes trabajan mientras tú decides.'
    },
  ];

  // Categorías de servicios en español
  const serviceCategories = [
    {
      id: ServiceSuperCategory.STRATEGY,
      title: 'Estrategia',
      description: 'Decisiones basadas en datos reales.'
    },
    {
      id: ServiceSuperCategory.OPERATION,
      title: 'Automatizaciones',
      description: 'Sistemas que trabajan 24/7 por ti.'
    },
    {
      id: ServiceSuperCategory.EDUCATION,
      title: 'Educación',
      description: 'Tu equipo dominando la IA.'
    },
    {
      id: ServiceSuperCategory.TRANSFORMATION,
      title: 'Transformación Digital',
      description: 'Infraestructura inteligente y escalable.'
    },
  ];

  // Características del robot en español
  const robotFeatures = [
    'Resultados desde el mes uno',
    'Evoluciona con tu negocio',
    'Integración con tus sistemas'
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
        customTitle="¿Cuánto vale tu tiempo?"
        customSubtitle="Implementamos IA que recupera tus horas más valiosas."
        primaryButtonText="Desplegar mi agente"
      />

      {/* Features Section - Inspiración GREEN_FRESH */}
      <Box sx={{ 
        py: { xs: 10, md: 18 },
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.accentColors.green,
        color: colors.palette.black,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <SurfaceProvider surface="green">
          <Container maxWidth="xl">
            <H1 sx={{ mb: 8, fontWeight: 900, color: colors.palette.black, textTransform: 'none', maxWidth: '1200px' }}>
              ¿Cuántas horas <Box component="span" sx={{ bgcolor: colors.palette.black, color: colors.palette.white, px: 2 }}>pierdes</Box> al día?
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
                    textTransform: 'none',
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
        </SurfaceProvider>
      </Box>

      {/* Robot Section - Inspiración BLACK_MODERN / SUPER_AI_NEON */}
      <Box sx={{ 
        py: { xs: 10, md: 18 },
        px: { xs: 4, md: 8, lg: 12 },
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

        <SurfaceProvider surface="black">
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Stack direction="column" spacing={10}>
            <Giant sx={{ color: colors.palette.white, maxWidth: '1100px', lineHeight: 1.0 }}>
              // Fuerza de trabajo inteligente
            </Giant>
            
            <Grid container spacing={8}>
              <Grid item xs={12} md={7}>
                <Stack spacing={6}>
                  {robotFeatures.map((feature, idx) => (
                    <Box key={idx} sx={{ borderLeft: `8px solid ${colors.palette.accentColors.orange}`, pl: 4 }}>
                      <H2 sx={{ 
                        color: colors.palette.white,
                        fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' }, // Reducido para evitar cortes
                        fontWeight: 900,
                        textTransform: 'none',
                        lineHeight: 1.0,
                        letterSpacing: '-0.02em',
                        wordBreak: 'break-word'
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
                  border: `6px solid ${colors.palette.white}`, 
                  bgcolor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  height: 'fit-content'
                }}>
                  <BodyText sx={{ 
                    color: colors.palette.white, 
                    fontSize: '2.2rem', 
                    lineHeight: 1.2,
                    fontWeight: 300,
                    letterSpacing: '-0.04em',
                    textTransform: 'none'
                  }}>
                    "IA que ejecuta por ti."
                  </BodyText>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
        </SurfaceProvider>
      </Box>

      {/* Services Section - Inspiración WHITE_MINIMAL (Optimizado) */}
      <Box sx={{ 
        py: { xs: 10, md: 20 },
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={10}>
            {/* Título Columna Izquierda */}
            <Grid item xs={12} lg={5}>
              <Box sx={{ position: { lg: 'sticky' }, top: 100 }}>
                <H1 sx={{ 
                  fontWeight: 900, 
                  textTransform: 'none', 
                  color: colors.palette.black, 
                  fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' }, // Reducido ligeramente
                  lineHeight: 1.0,
                  mb: 4,
                  wordBreak: 'break-word'
                }}>
                  Servicios que <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>transforman</Box>
                </H1>
                <BodyText sx={{ fontSize: '1.5rem', fontWeight: 500, color: colors.palette.black, maxWidth: '500px', mb: 6 }}>
                  IA aplicada a tu negocio.
                </BodyText>
                <Button 
                  variant="primary" 
                  size="large"
                  component={Link}
                  to={ROUTES.SERVICES}
                  onClick={() => scrollToTop()}
                  sx={{ 
                    height: '80px', 
                    px: 6, 
                    fontSize: '1.2rem',
                    display: { xs: 'none', lg: 'flex' }
                  }}
                >
                  Ver todos los servicios
                </Button>
              </Box>
            </Grid>

            {/* Cards Columna Derecha - Bento Grid Style */}
            <Grid item xs={12} lg={7}>
              <Grid container spacing={4}>
                {serviceCategories.map((cat, idx) => (
                  <Grid item xs={12} md={6} key={idx}>
                    <Card 
                      variant="default"
                      sx={{ 
                        height: '100%',
                        p: 5, // Reducido ligeramente de 6
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        bgcolor: colors.palette.white,
                        borderColor: colors.palette.black,
                        borderWidth: '4px',
                        transition: 'all 0.2s ease',
                        overflow: 'visible',
                        '&:hover': {
                          bgcolor: colors.palette.black,
                          color: colors.palette.white,
                          transform: 'translate(-8px, -8px)',
                          boxShadow: `12px 12px 0px ${colors.palette.gray[800]}`,
                          '& h3, & p, & .idx': { color: colors.palette.white }
                        }
                      }}
                    >
                      <Box>
                        <Typography 
                          className="idx"
                          sx={{ 
                            fontSize: '1.5rem', 
                            fontWeight: 900, 
                            color: colors.palette.gray[400],
                            mb: 2,
                            fontFamily: '"Necto Mono", monospace'
                          }}
                        >
                          // 0{idx + 1}
                        </Typography>
                        <H3 sx={{ 
                          fontWeight: 900,
                          fontSize: { xs: '2rem', md: '2.4rem' }, // Reducido de 2.8rem para evitar cortes
                          mb: 3,
                          lineHeight: 1.0,
                          textTransform: 'none',
                          color: colors.palette.black,
                          wordBreak: 'break-word',
                          hyphens: 'auto'
                        }}>
                          {cat.title}
                        </H3>
                        <BodyText sx={{ fontSize: '1.1rem', fontWeight: 500, opacity: 0.9, mb: 4 }}>
                          {cat.description}
                        </BodyText>
                      </Box>
                      
                      <Box 
                        component={Link}
                        to={`/servicios#${cat.id}`}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 2,
                          mt: 'auto',
                          pt: 4,
                          borderTop: `1px solid ${colors.palette.gray[200]}`,
                          textDecoration: 'none',
                          color: 'inherit',
                          '&:hover': {
                            opacity: 0.8
                          }
                        }}
                      >
                        <GeometricIcon type="arrow-right" size="small" color="inherit" />
                        <Typography sx={{ fontWeight: 800, textTransform: 'none', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                          Saber más
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section - Inspiración ORANGE_PUNCH */}
      <Box sx={{ 
        py: { xs: 15, md: 25 },
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <SurfaceProvider surface="black">
          <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center' }}>
            <Giant sx={{ mb: 8, color: colors.palette.white, fontSize: { xs: '3rem', md: '7rem', lg: '9rem' }, lineHeight: 0.85 }}>
              ¿Listo para el siguiente nivel?
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
                bgcolor: colors.palette.white, 
                color: colors.palette.black,
                border: `6px solid ${colors.palette.white}`,
                '&:hover': {
                  bgcolor: colors.palette.black,
                  color: colors.palette.white
                }
              }} />
              <Button 
                variant="outline" 
                component={Link}
                to={ROUTES.SERVICES}
                onClick={() => scrollToTop()}
                sx={{ 
                  height: '120px', 
                  px: 10, 
                  fontSize: '2rem', 
                  fontWeight: 900, 
                  borderWidth: '6px',
                  borderColor: colors.palette.white,
                  color: colors.palette.white,
                  '&:hover': {
                    bgcolor: colors.palette.white,
                    color: colors.palette.black
                  }
                }}
              >
                Soluciones IA
              </Button>
            </Stack>
          </Box>
        </Container>
        </SurfaceProvider>
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
