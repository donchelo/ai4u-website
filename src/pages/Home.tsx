import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import { SHADOW_TOKENS } from '../components/shared/ui/tokens/theme';
import { COMPONENT_SPACING, SPACING_TOKENS } from '../components/shared/ui/tokens/spacing';
import { TEXT_VARIANTS } from '../components/shared/ui/tokens/typography';

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
      id: ServiceSuperCategory.OPERATION,
      title: 'Operación',
      description: 'Sistemas que trabajan 24/7 por ti.'
    },
    {
      id: ServiceSuperCategory.STRATEGY,
      title: 'Estrategia',
      description: 'Decisiones basadas en datos reales.'
    },
    {
      id: ServiceSuperCategory.EDUCATION,
      title: 'Educación',
      description: 'Tu equipo dominando la IA.'
    },
    {
      id: ServiceSuperCategory.TRANSFORMATION,
      title: 'Transformación',
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

      <Helmet>
        <link rel="preload" as="image" href="/assets/images/hero-image.png" fetchpriority="high" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection 
        customTitle="¿Cuánto vale tu tiempo?"
        customSubtitle="Implementamos IA que recupera tus horas más valiosas."
        primaryButtonText="Desplegar mi agente"
      />

      {/* Features Section - Inspiración GREEN_FRESH */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section,
        bgcolor: colors.palette.accentColors.green,
        color: colors.palette.black,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <SurfaceProvider surface="green">
          <Container maxWidth="xl">
            <Grid container spacing={4} sx={{ position: 'relative', zIndex: 2 }}>
              <Grid item xs={12} lg={8}>
                <H1 sx={{ 
                  mb: 8, 
                  fontWeight: 400, 
                  color: colors.palette.black, 
                  textTransform: 'none', 
                  fontSize: { xs: '3rem', md: '5.5rem' },
                  lineHeight: 0.9,
                  letterSpacing: '-0.05em'
                }}>
                  ¿Cuántas horas <Box component="span" sx={{ bgcolor: colors.palette.black, color: colors.palette.accentColors.green, px: 2, display: 'inline-block', transform: 'rotate(1deg)' }}>pierdes</Box> al día?
                </H1>
              </Grid>
              
              <Grid item xs={12}>
                <Grid container spacing={4} alignItems="stretch">
                  {features.map((feature, idx) => (
                    <Grid item xs={12} md={idx === 1 ? 5 : 3.5} key={idx} sx={{ 
                      mt: { md: idx * 8 }, // Offset vertical asimétrico
                      mb: { md: idx === 1 ? -8 : 0 }
                    }}>
                      <Card 
                        variant="default"
                        sx={{ 
                          height: '100%',
                          p: 6,
                          display: 'flex',
                          flexDirection: 'column',
                          bgcolor: idx === 1 ? colors.palette.black : colors.palette.white,
                          color: idx === 1 ? colors.palette.white : colors.palette.black,
                          borderRadius: 0,
                          border: `2px solid ${colors.palette.black}`,
                          boxShadow: idx === 1 ? `15px 15px 0px ${colors.palette.white}` : `15px 15px 0px ${colors.palette.black}`,
                          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          '&:hover': {
                            transform: 'translate(-5px, -5px)',
                            boxShadow: idx === 1 ? `25px 25px 0px ${colors.palette.white}` : `25px 25px 0px ${colors.palette.black}`,
                          }
                        }}
                      >
                        <Typography sx={{ 
                          ...TEXT_VARIANTS.ui.code, 
                          mb: 4, 
                          fontSize: '1.2rem',
                          opacity: 0.5
                        }}>
                          // 0{idx + 1}
                        </Typography>
                        <H3 sx={{ 
                          mb: 3,
                          fontWeight: 400,
                          textTransform: 'none',
                          color: 'inherit',
                          fontSize: '2.5rem',
                          lineHeight: 1
                        }}>
                          {feature.title}
                        </H3>
                        <BodyText sx={{ ...TEXT_VARIANTS.body.large, color: 'inherit', fontWeight: 400 }}>
                          {feature.description}
                        </BodyText>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </SurfaceProvider>
        
        {/* Elemento decorativo asimétrico */}
        <Box sx={{
          position: 'absolute',
          bottom: -50,
          left: '10%',
          width: '40%',
          height: '2px',
          bgcolor: colors.palette.black,
          transform: 'rotate(-5deg)',
          opacity: 0.2
        }} />
      </Box>

      {/* Robot Section - Inspiración BLACK_MODERN / SUPER_AI_NEON */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section,
        bgcolor: colors.palette.black, 
        color: colors.palette.white,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        borderTop: `10px solid ${colors.palette.black}`,
        borderBottom: `10px solid ${colors.palette.black}`
      }}>
        {/* Big Background Number inspired by Pitch.tsx */}
        <Typography 
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            fontSize: { xs: '20rem', md: '50rem' }, 
            fontWeight: 400, 
            color: colors.palette.white, 
            opacity: 0.02,
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            lineHeight: 1
          }}
        >
          Force
        </Typography>

        <SurfaceProvider surface="black">
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Stack direction="column" spacing={10}>
            <Giant sx={{ 
              color: colors.palette.white, 
              maxWidth: '1200px', 
              lineHeight: 0.85,
              fontSize: { xs: '3.5rem', md: '8rem' },
              fontWeight: 400,
              textTransform: 'none',
              letterSpacing: '-0.06em'
            }}>
              Fuerza de trabajo <br/>
              <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>inteligente</Box>
            </Giant>
            
            <Grid container spacing={0}>
              <Grid item xs={12} md={8} sx={{ borderLeft: `1px solid rgba(255,255,255,0.1)`, pl: { md: 8 } }}>
                <Stack spacing={8}>
                  {robotFeatures.map((feature, idx) => (
                    <Box key={idx} sx={{ position: 'relative' }}>
                      <Typography sx={{ 
                        position: 'absolute', 
                        left: -40, 
                        top: 0, 
                        ...TEXT_VARIANTS.ui.code, 
                        color: colors.palette.accentColors.orange,
                        display: { xs: 'none', md: 'block' }
                      }}>
                        [{idx + 1}]
                      </Typography>
                      <H2 sx={{ 
                        color: colors.palette.white,
                        fontSize: { xs: '2.5rem', md: '4.5rem' },
                        fontWeight: 400,
                        textTransform: 'none',
                        lineHeight: 0.9,
                        letterSpacing: '-0.04em',
                      }}>
                        {feature}
                      </H2>
                    </Box>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} sx={{ mt: { xs: 8, md: 0 } }}>
                <Box sx={{ 
                  p: 6, 
                  bgcolor: colors.palette.accentColors.orange,
                  color: colors.palette.black,
                  height: 'fit-content',
                  transform: { md: 'translateY(100px) rotate(2deg)' }, // Offset asimétrico
                }}>
                    <BodyText sx={{ 
                    color: colors.palette.black, 
                    fontSize: '1.8rem',
                    lineHeight: 1.1,
                    fontWeight: 400,
                    letterSpacing: '-0.04em',
                    textTransform: 'none'
                  }}>
                    "IA que ejecuta por ti."
                  </BodyText>
                  <Box sx={{ mt: 4, width: 40, height: 4, bgcolor: colors.palette.black }} />
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
        </SurfaceProvider>
      </Box>

      {/* Services Section - Inspiración WHITE_MINIMAL (Optimizado) */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section,
        bgcolor: colors.palette.white,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Lineas de fondo brutalistas */}
        <Box sx={{ position: 'absolute', top: 0, left: '33.33%', width: '1px', height: '100%', bgcolor: colors.palette.gray[100] }} />
        <Box sx={{ position: 'absolute', top: 0, left: '66.66%', width: '1px', height: '100%', bgcolor: colors.palette.gray[100] }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={0}>
            {/* Título Columna Izquierda */}
            <Grid item xs={12} lg={4} sx={{ mb: { xs: 8, lg: 0 } }}>
              <Box sx={{ position: { lg: 'sticky' }, top: 150, pr: { lg: 8 } }}>
                <H1 sx={{ 
                  fontWeight: 400, 
                  textTransform: 'none', 
                  color: colors.palette.black, 
                  fontSize: { xs: '3.5rem', md: '5rem' },
                  lineHeight: 0.85,
                  mb: 4,
                  letterSpacing: '-0.05em'
                }}>
                  Servicios que <br/>
                  <Box component="span" sx={{ 
                    color: colors.palette.white, 
                    bgcolor: colors.palette.black,
                    px: 1,
                    display: 'inline-block',
                    mt: 1
                  }}>transforman</Box>
                </H1>
                <BodyText sx={{ fontSize: '1.2rem', fontWeight: 400, color: colors.palette.black, maxWidth: '350px', mb: 6, opacity: 0.7 }}>
                  Sistemas inteligentes diseñados para escalar tu operación sin aumentar tu nómina.
                </BodyText>
                <Button 
                  variant="primary" 
                  size="large"
                  component={Link}
                  to={ROUTES.SERVICES}
                  onClick={() => scrollToTop()}
                  sx={{ 
                    height: 'auto',
                    py: 3, 
                    px: 6, 
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    textTransform: 'none',
                    borderRadius: 0,
                    border: `2px solid ${colors.palette.black}`,
                    boxShadow: `8px 8px 0px ${colors.palette.gray[200]}`,
                    '&:hover': {
                      transform: 'translate(-2px, -2px)',
                      boxShadow: `12px 12px 0px ${colors.palette.black}`,
                    }
                  }}
                >
                  Explorar catálogo
                </Button>
              </Box>
            </Grid>

            {/* Cards Columna Derecha - Bento Grid Style Asimétrico */}
            <Grid item xs={12} lg={8}>
              <Grid container spacing={2}>
                {serviceCategories.map((cat, idx) => (
                  <Grid item xs={12} md={idx % 3 === 0 ? 12 : 6} key={idx}>
                    <Card 
                      variant="default"
                      sx={{ 
                        height: '100%',
                        p: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        bgcolor: colors.palette.white,
                        color: colors.palette.black,
                        borderRadius: 0,
                        border: `1px solid ${colors.palette.gray[200]}`,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          bgcolor: colors.palette.black,
                          color: colors.palette.white,
                          borderColor: colors.palette.black,
                          zIndex: 10,
                          transform: 'scale(1.02)',
                          '& .arrow': { transform: 'translateX(10px)', color: colors.palette.accentColors.orange }
                        }
                      }}
                    >
                      <Box>
                        <Typography 
                          sx={{ 
                            ...TEXT_VARIANTS.ui.code,
                            fontSize: '1rem', 
                            fontWeight: 400, 
                            color: colors.palette.accentColors.orange,
                            mb: 2,
                          }}
                        >
                          // 0{idx + 1}
                        </Typography>
                        <H3 sx={{ 
                          fontWeight: 400,
                          fontSize: idx % 3 === 0 ? '3.5rem' : '2.2rem',
                          mb: 3,
                          lineHeight: 1,
                          textTransform: 'none',
                          letterSpacing: '-0.02em'
                        }}>
                          {cat.title}
                        </H3>
                        <BodyText sx={{ fontSize: '1.1rem', opacity: 0.8, mb: 4, maxWidth: '500px' }}>
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
                          mt: 4,
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <Box className="arrow" sx={{ transition: 'transform 0.3s ease' }}>
                          <GeometricIcon type="arrow-right" size="medium" color="inherit" />
                        </Box>
                        <Typography sx={{ ...TEXT_VARIANTS.ui.caption, fontWeight: 400, textTransform: 'none', letterSpacing: '0.2em' }}>
                          Detalles
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

      {/* CTA Section - Brutalista */}
      <Box sx={{ 
        py: 20,
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        
        <SurfaceProvider surface="black">
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ textAlign: 'left' }}>
            <Giant sx={{ 
              mb: 10, 
              color: colors.palette.white, 
              lineHeight: 0.8,
              fontSize: { xs: '4rem', md: '10rem' },
              fontWeight: 400,
              textTransform: 'none',
              letterSpacing: '-0.05em'
            }}>
              ¿Listo para el <br/>
              <Box component="span" sx={{ 
                color: colors.palette.black, 
                bgcolor: colors.palette.accentColors.orange,
                px: 2,
                display: 'inline-block',
                transform: 'rotate(-1deg)'
              }}>futuro?</Box>
            </Giant>
            
            <Stack 
              direction={{ xs: 'column', md: 'row' }} 
              spacing={4} 
              alignItems="flex-start"
            >
              <DiagnosticCTA sx={{ 
                height: 'auto',
                py: 4, 
                px: 10, 
                fontSize: '1.8rem', 
                fontWeight: 400, 
                bgcolor: colors.palette.white, 
                color: colors.palette.black,
                borderRadius: 0,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: colors.palette.accentColors.orange,
                  color: colors.palette.black,
                  transform: 'translateY(-10px)'
                }
              }} />
              <Button 
                variant="outline" 
                component={Link}
                to={ROUTES.SERVICES}
                onClick={() => scrollToTop()}
                sx={{ 
                  height: 'auto',
                  py: 4, 
                  px: 10, 
                  fontSize: '1.8rem', 
                  fontWeight: 400, 
                  borderRadius: 0,
                  borderColor: colors.palette.white,
                  color: colors.palette.white,
                  borderWidth: '2px',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: colors.palette.white,
                    color: colors.palette.black,
                    borderColor: colors.palette.white
                  }
                }}
              >
                Soluciones
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
