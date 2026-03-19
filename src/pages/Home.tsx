import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Box, Stack, Typography } from '@mui/material';
import { Giant, H1, H2, H3, BodyText, Button, GeometricIcon, SEOHead } from '../components/shared/ui/atoms';
import { HeroSection, ScrollRevealHero } from '../components/shared/ui/organisms';
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
  // Pillars Section - Reframed for Team & Value
  const pillars = [
    {
      id: 'time',
      title: 'elTiempoEsLoÚnicoQueNoSeRecupera',
      subtitle: 'filosofia01',
      description: 'Por eso nos tomamos en serio cada hora que puedes dejar de gastar en tareas que no te necesitan a ti.',
      icon: 'clock'
    },
    {
      id: 'agents',
      title: 'tuEquipoNuncaParaDeTrabajar',
      subtitle: 'equipoAgentes02',
      description: 'Tus agentes están activos antes de que llegues, y siguen cuando te vas. Sin interrupciones, sin olvidos.',
      icon: 'groups'
    },
    {
      id: 'infrastructure',
      title: 'infraestructuraDiseñadaParaEscalarContigo',
      subtitle: 'infraestructura03',
      description: 'La base técnica que mantiene a tu equipo funcionando — y crece cuando tú lo necesitas.',
      icon: 'terminal'
    }
  ];

  // Features Section - Skills & Orchestration
  const coreFeatures = [
    {
      label: 'administracion01',
      title: 'tuEquipoEnUnSoloLugar',
      description: 'Ve qué hace cada agente, ajusta prioridades y amplía el equipo cuando lo necesites — todo desde un solo panel.'
    },
    {
      label: 'habilidades02',
      title: 'agentesQueAprendenCómoTrabajásTú',
      description: 'Cada agente se entrena con tus procesos, tu voz y tu lógica. No es tecnología genérica — es tu manera de operar, automatizada.'
    },
    {
      label: 'ejecucion03',
      title: 'operanTusHerramientas',
      description: 'Tus agentes trabajan en tu CRM, correo, reportes y flujos — como un miembro más del equipo que nunca olvida un paso.'
    }
  ];

  return (
    <Box sx={{ bgcolor: colors.contrast.background, minHeight: '100vh', color: colors.contrast.text.primary }}>
      {/* SEO Head */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co"
        structuredData={structuredData}
      />

      <Helmet>
        <link rel="preload" as="image" href="/assets/images/hero-image.png" fetchPriority="high" />
      </Helmet>

      {/* Hero Section */}
      <ScrollRevealHero
        badge="ai4u.equipo // siempre activo"
        title="más tiempo para lo que importa."
        subtitle="Somos el equipo que trabaja sin parar — en tus procesos, tu operación, tu día a día — para que tú tengas tiempo para lo que verdaderamente importa."
        primaryButtonText="hablar con el equipo"
      />

      {/* Pillars Section */}
      <Box sx={{
        py: 0,
        bgcolor: colors.contrast.background, 
        color: colors.contrast.text.primary,
        position: 'relative',
        borderTop: `1px solid ${colors.contrast.text.primary}`,
        borderBottom: `1px solid ${colors.contrast.text.primary}`,
      }}>
        <SurfaceProvider surface="theme">
          <Container maxWidth={false} sx={{ px: 0 }}>
            <Grid container spacing={0} sx={{ borderLeft: `1px solid ${colors.contrast.text.primary}` }}>
              {pillars.map((pillar, idx) => (
                <Grid item xs={12} md={4} key={idx} sx={{ 
                  borderRight: `1px solid ${colors.contrast.text.primary}`,
                  borderBottom: { xs: `1px solid ${colors.contrast.text.primary}`, md: 'none' },
                  p: 8,
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: colors.mode === 'light' ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)'
                  }
                }}>
                  <Box>
                    <Typography sx={{ 
                      ...TEXT_VARIANTS.ui.code, 
                      fontSize: '0.9rem',
                      letterSpacing: '0.1em',
                      mb: 6,
                      color: 'inherit',
                      opacity: 0.6,
                      textTransform: 'none'
                    }}>
                      {pillar.subtitle}
                    </Typography>
                    <H2 sx={{ 
                      mb: 4,
                      fontWeight: 400,
                      color: 'inherit',
                      fontSize: '3rem',
                      lineHeight: 0.9,
                      letterSpacing: '-0.04em'
                    }}>
                      {pillar.title}
                    </H2>
                  </Box>
                  <BodyText sx={{ ...TEXT_VARIANTS.body.regular, color: 'inherit', maxWidth: '300px', opacity: 0.8 }}>
                    {pillar.description}
                  </BodyText>
                </Grid>
              ))}
            </Grid>
          </Container>
        </SurfaceProvider>
      </Box>

      {/* Main Philosophy Quote */}
      <Box sx={{ py: 21, textAlign: 'center', bgcolor: colors.contrast.background, color: colors.contrast.text.primary }}>
        <Container maxWidth="lg">
          <Typography sx={{ 
            fontSize: { xs: '2.5rem', md: '5.5rem' },
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            fontWeight: 400
          }}>
            "trabaja en lo que solo{' '}
            <Box component="span" sx={{ opacity: 0.5 }}>tú</Box>{' '}
            puedes hacer.<br/>
            nosotros nos encargamos del resto."
          </Typography>
        </Container>
      </Box>

      {/* WorkForce Section */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section,
        bgcolor: colors.contrast.background,
        color: colors.contrast.text.primary,
        borderTop: `1px solid ${colors.contrast.text.primary}`,
      }}>
        <SurfaceProvider surface="theme">
          <Container maxWidth="xl">
            <Stack direction="column" spacing={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: `1px solid ${colors.contrast.text.primary}`, pb: 4 }}>
                <H1 sx={{ 
                  lineHeight: 0.8,
                  fontSize: { xs: '3.5rem', md: '7rem' },
                  fontWeight: 400,
                  letterSpacing: '-0.05em',
                  color: colors.contrast.text.primary
                }}>
                  controlEquipo
                </H1>
                <Typography sx={{ ...TEXT_VARIANTS.ui.code, mb: 1, opacity: 0.6, textTransform: 'none' }}>[ ver2.0 ]</Typography>
              </Box>
              
              <Grid container spacing={0}>
                {coreFeatures.map((feature, idx) => (
                  <Grid item xs={12} md={4} key={idx} sx={{ 
                    p: 4, 
                    borderRight: idx < 2 ? { md: `1px solid ${colors.contrast.text.primary}` } : 'none',
                    borderBottom: { xs: `1px solid ${colors.contrast.text.primary}`, md: 'none' }
                  }}>
                    <Typography sx={{ 
                      ...TEXT_VARIANTS.ui.code, 
                      mb: 4,
                      fontSize: '0.8rem',
                      opacity: 0.5,
                      color: colors.contrast.text.primary,
                      textTransform: 'none'
                    }}>
                      //{feature.label}
                    </Typography>
                    <H3 sx={{ 
                      fontSize: '2.5rem',
                      fontWeight: 400,
                      lineHeight: 0.9,
                      letterSpacing: '-0.04em',
                      mb: 3,
                      color: colors.contrast.text.primary
                    }}>
                      {feature.title}
                    </H3>
                    <BodyText sx={{ opacity: 0.8, color: colors.contrast.text.primary }}>
                      {feature.description}
                    </BodyText>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Container>
        </SurfaceProvider>
      </Box>

      {/* Final Action */}
      <Box sx={{ 
        py: 30,
        bgcolor: colors.contrast.background,
        color: colors.contrast.text.primary,
        textAlign: 'center',
        borderTop: `1px solid ${colors.contrast.text.primary}`,
      }}>
        <Container maxWidth="lg">
          <Typography sx={{ 
            ...TEXT_VARIANTS.ui.code, 
            mb: 8,
            letterSpacing: '0.1em',
            color: 'inherit',
            opacity: 0.6,
            textTransform: 'none'
          }}>
            // ¿cuántas horas a la semana podrías recuperar?
          </Typography>

          <Giant sx={{
            mb: 6,
            color: 'inherit',
            lineHeight: 0.8,
            fontSize: { xs: '4rem', md: '12rem' },
            fontWeight: 400,
            letterSpacing: '-0.06em'
          }}>
            empieza a recuperar tu tiempo hoy.
          </Giant>

          <BodyText sx={{
            opacity: 0.6,
            maxWidth: '480px',
            mx: 'auto',
            mb: 8,
            fontSize: '1.1rem',
            lineHeight: 1.5,
            color: 'inherit'
          }}>
            Hablamos 30 minutos. Te mostramos exactamente qué tareas de tu operación podemos tomar nosotros.
          </BodyText>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" alignItems="center">
            <DiagnosticCTA
              variant="primary"
              size="large"
              text="agendar 30 minutos"
              sx={{
                bgcolor: colors.contrast.text.primary,
                color: colors.contrast.background,
                borderRadius: 0,
                border: 'none',
                height: '70px',
                px: 8,
                fontSize: '1.2rem',
                fontWeight: 400,
                fontFamily: '"Red Hat Display", sans-serif',
                letterSpacing: '0.05em',
                '&:hover': {
                  bgcolor: colors.contrast.text.primary,
                  opacity: 0.9,
                  transform: 'scale(1.05)'
                }
              }}
            />
            <Button
              variant="outline"
              component={Link}
              to={ROUTES.SUPER_AI}
              onClick={() => scrollToTop()}
              sx={{
                height: '70px',
                border: `1px solid ${colors.contrast.text.primary}`,
                borderRadius: 0,
                color: colors.contrast.text.primary,
                px: 8,
                fontSize: '1.2rem',
                letterSpacing: '0.05em',
                '&:hover': {
                  bgcolor: colors.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                }
              }}
            >
              explorarSuperAI
            </Button>
          </Stack>
        </Container>
      </Box>

      {relatedLinks.length > 0 && (
        <Box sx={{ borderTop: `1px solid ${colors.contrast.divider}` }}>
          <RelatedPages pages={relatedLinks} />
        </Box>
      )}
    </Box>
  );
};

export default Home;
