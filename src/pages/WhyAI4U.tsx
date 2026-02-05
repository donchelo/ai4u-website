import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  Avatar, 
  IconButton,
  Typography,
  alpha
} from '@mui/material';
import { Giant, H1, H2, H3, BodyText, Button, GeometricIcon, PixelArtImage, SEOHead } from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, ServicesButton, MetricCard, RelatedPages, ExpandableSection } from '../components/shared/ui/molecules';
import { SurfaceProvider } from '../context';
import { useColors, usePerformanceMonitoring } from '../hooks';
import { getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';

const WhyAI4U = () => {
  const colors = useColors();
  usePerformanceMonitoring('why-ai4u', { lcp: 2500, fcp: 1800 });

  // Obtener meta tags optimizados para la página "Por qué AI4U"
  const metaTags = getPageMetaTags('why');
  
  // Obtener enlaces contextuales para la página Why AI4U
  const relatedLinks = getRelatedLinks('/por-que-ai4u');

  return (
    <Box sx={{ 
      bgcolor: colors.contrast.background
    }}>
      {/* SEO Head con meta tags optimizados */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co/por-que-ai4u"
      />

      {/* Mariano Section - Inspiración BLACK_MODERN */}
      <Box sx={{ 
        py: { xs: 10, md: 18 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.black, 
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <SurfaceProvider surface="black">
          <Container maxWidth="xl">
            <Grid container spacing={8} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: 'left' }}>
                  <H1 sx={{ 
                    mb: 6, 
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: colors.palette.white,
                    lineHeight: 0.9
                  }}>
                    LA PARTE <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>HUMANA</Box> DE LA IA
                  </H1>
                  
                  <Stack spacing={4} sx={{ mb: 8 }}>
                    {[
                      'FUNDADOR DE AI4U',
                      'COFUNDADOR DE MATT MOVILIDAD',
                      'ESPECIALISTA EN AUTOMATIZACIÓN'
                    ].map((text, idx) => (
                      <Box key={idx} sx={{ borderLeft: `6px solid ${colors.palette.accentColors.orange}`, pl: 4 }}>
                        <BodyText sx={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', color: colors.palette.white }}>
                          {text}
                        </BodyText>
                      </Box>
                    ))}
                  </Stack>
                  
                  <ExpandableSection
                    title="DESCUBRE MI HISTORIA"
                    variant="card"
                    defaultExpanded={false}
                  >
                  <BodyText sx={{ 
                    color: colors.palette.white,
                    fontSize: '1.5rem',
                    lineHeight: 1.4,
                    fontWeight: 300,
                    opacity: 0.9
                  }}>
                    DETRÁS DE CADA AUTOMATIZACIÓN HAY UNA MENTE HUMANA QUE ENTIENDE TU NEGOCIO. MARIANO, FUNDADOR DE AI4U, COMBINA EXPERIENCIA EN STARTUPS, MOVILIDAD Y TECNOLOGÍA PARA CREAR SOLUCIONES QUE REALMENTE FUNCIONAN.
                  </BodyText>
                </ExpandableSection>
                
                <Button 
                  variant="outline" 
                  size="large"
                  component="a"
                  href="https://www.linkedin.com/in/mariano3/"
                  sx={{
                    mt: 4,
                    height: '100px',
                    px: 8,
                    fontSize: '1.5rem',
                    borderColor: colors.palette.white,
                    color: colors.palette.white,
                    '&:hover': {
                      bgcolor: colors.palette.white,
                      color: colors.palette.black
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                border: `8px solid ${colors.palette.white}`,
                boxShadow: `15px 15px 0px ${colors.palette.gray[800]}`,
                overflow: 'hidden'
              }}>
                <PixelArtImage
                  src="/assets/images/mariano.jpeg"
                  pixelArtSrc="/assets/images/mariano-pixel-art.png"
                  alt="Mariano, Fundador de AI4U"
                  sx={{
                    width: '100%',
                    height: { xs: 400, md: 600 },
                    display: 'block'
                  }}
                  transitionDuration={0.4}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        </SurfaceProvider>
      </Box>

      {/* Benefits Section - Inspiración GREEN_FRESH */}
      <Box sx={{ 
        py: { xs: 10, md: 18 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.accentColors.green,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <SurfaceProvider surface="green">
          <Container maxWidth="xl">
            <H1 sx={{ 
              mb: 10, 
              textAlign: 'left',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: colors.palette.black
            }}>
              ¿QUÉ NOS HACE <Box component="span" sx={{ bgcolor: colors.palette.black, color: colors.palette.white, px: 2 }}>DIFERENTES</Box>?
            </H1>

            <Grid container spacing={6}>
              {[
                {
                  title: 'DIAGNÓSTICO GRATUITO',
                  description: 'EVALUAMOS TU NEGOCIO SIN COSTO PARA IDENTIFICAR OPORTUNIDADES.',
                },
                {
                  title: 'ASISTENTES QUE EVOLUCIONAN',
                  description: 'NUESTROS ASISTENTES APRENDEN Y MEJORAN CONTINUAMENTE.',
                },
                {
                  title: 'RESULTADOS GARANTIZADOS',
                  description: '72 HORAS PARA IMPLEMENTACIÓN. ROI MEDIBLE DESDE EL PRIMER MES.',
                }
              ].map((benefit, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Card variant="default" sx={{ 
                    height: '100%',
                    p: 6,
                    borderWidth: '4px',
                    '&:hover': {
                      transform: 'translate(8px, -8px)',
                      boxShadow: `12px 12px 0px ${colors.palette.black}`,
                    }
                  }}>
                    <H3 sx={{ 
                      fontSize: '2rem',
                      fontWeight: 900,
                      mb: 3,
                      lineHeight: 1,
                      color: 'inherit',
                      textTransform: 'uppercase'
                    }}>
                      {benefit.title}
                    </H3>
                    <BodyText sx={{ color: 'inherit', fontSize: '1.25rem', fontWeight: 500 }}>
                      {benefit.description}
                    </BodyText>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </SurfaceProvider>
      </Box>

            {/* Stats Section - Inspiración BLACK_MODERN */}
      <Box sx={{ 
        py: { xs: 10, md: 18 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <SurfaceProvider surface="black">
          <Container maxWidth="xl">
            <H1 sx={{ 
              mb: 10, 
              textAlign: 'left',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: colors.palette.white
            }}>
              NUESTROS <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>NÚMEROS</Box>
            </H1>
            
            <Grid container spacing={6}>
              {[
                { title: 'SERVICIOS', value: '25+' },
                { title: 'ESTRATEGIA', value: '12' },
                { title: 'OPERACIÓN', value: '13' },
                { title: 'ROI PROMEDIO', value: '300%' }
              ].map((stat, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <MetricCard
                    title={stat.title}
                    value={stat.value}
                    variant="default"
                    size="large"
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </SurfaceProvider>
      </Box>

      {/* Final CTA Section - Inspiración ORANGE_PUNCH */}
      <Box sx={{ 
        py: { xs: 15, md: 25 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <SurfaceProvider surface="white">
          <Container maxWidth="lg">
            <Stack spacing={8} textAlign="center" alignItems="center">
              <Giant sx={{ color: colors.palette.black }}>
                ¿LISTO PARA LIBERAR TU TIEMPO?
              </Giant>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={4} 
                justifyContent="center"
              >
                <DiagnosticCTA sx={{ height: '100px', px: 10, fontSize: '1.8rem', bgcolor: colors.palette.black, color: colors.palette.white }} />
                <ServicesButton
                  variant="outline"
                  sx={{ height: '100px', px: 10, fontSize: '1.8rem', borderWidth: '6px', borderColor: colors.palette.black, color: colors.palette.black }}
                  text="VER SOLUCIONES"
                />
              </Stack>
            </Stack>
          </Container>
        </SurfaceProvider>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Container maxWidth="lg">
        <RelatedPages 
          pages={relatedLinks}
          title="Conoce más sobre nuestro trabajo:"
          variant="vertical"
        />
      </Container>
    </Box>
  );
};

export default WhyAI4U;
