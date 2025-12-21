import React from 'react';
import { Container, Grid, Box, Stack } from '@mui/material';
import { H2, H3, BodyText, Button, GeometricIcon, SEOHead } from '../components/shared/ui/atoms';
import { HeroSection } from '../components/shared/ui/organisms';
import { Card, DiagnosticCTA, GalleryFrame, RelatedPages, ExpandableSection } from '../components/shared/ui/molecules';
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
        customTitle="¡Tu tiempo es oro!"
        customSubtitle="Mientras otros pierden el 70% de su día en tareas operativas, nuestros asistentes robóticos trabajan 24/7 para que inviertas tu tiempo en lo que realmente importa: tu familia y el crecimiento estratégico de tu empresa."
        primaryButtonText="Recupera tu tiempo familiar"
        secondaryButtonText="Calcula tu ROI"
      />

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <H2 sx={{ textAlign: 'center', mb: 6, fontWeight: 400, color: 'text.primary' }}>
            ¿El trabajo te está robando momentos irreemplazables?
          </H2>
          <Grid container spacing={4}>
            {features.map((feature, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card 
                  variant="elevated"
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <GeometricIcon 
                      type={idx === 0 ? "triangle" : idx === 1 ? "square" : "circle"} 
                      size="small" 
                      color={idx === 0 ? colors.palette.accentColors.orange : idx === 1 ? colors.palette.accentColors.green : colors.palette.info}
                      variant={idx === 0 ? "filled" : "minimal"} 
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Robot Section - Fondo oscuro con contraste automático */}
      <Box sx={{ 
        py: { xs: 6, md: 10 }, 
        bgcolor: mode === 'dark' ? 'background.default' : colors.palette.black, 
        color: mode === 'dark' ? 'text.primary' : colors.palette.white 
      }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" justifyContent="center">
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <H2 sx={{ 
                mb: 4, 
                color: mode === 'dark' ? 'text.primary' : colors.palette.white, 
                fontWeight: 300 
              }}>
                Asistentes Robóticos que Transforman tu Empresa
              </H2>
              
              {/* Lista ultra minimalista con iconos geométricos */}
              <Stack spacing={4} sx={{ mb: 6, maxWidth: 500 }}>
                {robotFeatures.map((feature, idx) => (
                  <Stack key={idx} direction="row" alignItems="center" spacing={3}>
                    <GeometricIcon 
                      type={idx === 0 ? "circle" : idx === 1 ? "triangle" : idx === 2 ? "square" : "dot"} 
                      size="small" 
                      color={idx === 0 ? colors.palette.accentColors.green : idx === 1 ? colors.palette.accentColors.orange : idx === 2 ? colors.palette.info : (mode === 'dark' ? colors.contrast.text.disabled : colors.contrast.text.secondary)} 
                      variant={idx === 0 || idx === 1 ? "filled" : "minimal"} 
                    />
                    <BodyText sx={{ 
                      color: mode === 'dark' ? (idx === 0 ? 'text.primary' : 'text.secondary') : (idx === 0 ? colors.palette.white : colors.contrast.text.secondary), 
                      fontSize: '1rem', 
                      lineHeight: 1.6 
                    }}>
                      {feature}
                    </BodyText>
                  </Stack>
                ))}
              </Stack>
              
              <ExpandableSection
                title="Descubre cómo funciona"
                variant="minimal"
                defaultExpanded={false}
              >
                <BodyText sx={{ 
                  mb: 4, 
                  color: mode === 'dark' ? 'text.secondary' : colors.contrast.text.secondary, 
                  maxWidth: 600, 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7 
                }}>
                  Imagina tener un equipo incansable que trabaja mientras tú disfrutas de lo que realmente importa. Nuestros asistentes robóticos no solo automatizan - transforman cada minuto operativo en oportunidad estratégica.
                </BodyText>
                
                <BodyText sx={{ 
                  mb: 4, 
                  color: mode === 'dark' ? 'text.disabled' : colors.contrast.text.disabled, 
                  fontSize: '0.9rem', 
                  fontStyle: 'italic' 
                }}>
                  Vista previa de nuestra galería de proyectos y casos de uso
                </BodyText>
                
                <H3 sx={{ 
                  mb: 4, 
                  color: mode === 'dark' ? 'text.primary' : colors.palette.white, 
                  fontWeight: 400, 
                  fontSize: '1.2rem' 
                }}>
                  ¿Qué los hace únicos?
                </H3>
                
                <Box sx={{ 
                  pl: 4,
                  borderLeft: `1px solid ${mode === 'dark' ? colors.contrast.divider : colors.contrast.border}`,
                  maxWidth: 500
                }}>
                  <BodyText sx={{ 
                    fontStyle: 'italic', 
                    color: mode === 'dark' ? 'text.disabled' : colors.contrast.text.disabled,
                    fontSize: '1rem',
                    fontWeight: 300,
                    lineHeight: 1.6
                  }}>
                    "Un equipo silencioso que trabaja incansablemente para multiplicar el valor de tu tiempo."
                  </BodyText>
                </Box>
              </ExpandableSection>
            </Box>
            
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <GalleryFrame
                interval={4000}
                showNavigation={false}
                showTitle={false}
                frameStyle="glass"
                size="medium"
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <H2 sx={{ textAlign: 'center', mb: 6, fontWeight: 400, color: 'text.primary' }}>
            Servicios
          </H2>
          
          {/* Mostrar las 4 categorías como un grupo armónico */}
          <Grid container spacing={4}>
            {serviceCategories.map((cat, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card 
                  variant="elevated"
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <GeometricIcon 
                      type={idx === 0 ? "triangle" : idx === 1 ? "square" : idx === 2 ? "circle" : "line"} 
                      size="medium" 
                      color={idx === 0 ? colors.palette.accentColors.orange : idx === 1 ? colors.palette.accentColors.green : idx === 2 ? colors.palette.info : colors.palette.success}
                      variant={idx === 0 ? "filled" : "minimal"} 
                    />
                  </Box>
                  <H3 sx={{ 
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: '1.1rem'
                  }}>
                    {cat.title}
                  </H3>
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
            <H2 sx={{ mb: 4, fontWeight: 400, color: 'text.primary' }}>
              ¿Listo para transformar tu empresa?
            </H2>
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
