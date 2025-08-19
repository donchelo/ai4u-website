import React from 'react';
import { Container, Grid, Box, Stack, useTheme } from '@mui/material';
import { H2, H3, BodyText, Button, GeometricIcon, SEOHead } from '../components/shared/ui/atoms';
import { HeroSection } from '../components/shared/ui/organisms';
import { Card, DiagnosticCTA, GalleryFrame, RelatedPages } from '../components/shared/ui/molecules';
import { useColorMode } from '../context/ThemeContext';
import { useLanguage } from '../hooks';
import { usePerformanceMonitoring } from '../hooks/usePerformanceMonitoring';
import { useErrorTracking } from '../hooks';
import { getHomeStructuredData, getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';

const Home = () => {
  const theme = useTheme();
  const { mode } = useColorMode();
  const { t } = useLanguage();
  
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

  // Obtener traducciones para las features
  const features = [
    {
      title: t('home.features.items.0.title'),
      description: t('home.features.items.0.description')
    },
    {
      title: t('home.features.items.1.title'),
      description: t('home.features.items.1.description')
    },
    {
      title: t('home.features.items.2.title'),
      description: t('home.features.items.2.description')
    },
  ];

  // Obtener traducciones para las categorías de servicios
  const serviceCategories = [
    {
      title: t('home.services.categories.0.title'),
      description: t('home.services.categories.0.description')
    },
    {
      title: t('home.services.categories.1.title'),
      description: t('home.services.categories.1.description')
    },
    {
      title: t('home.services.categories.2.title'),
      description: t('home.services.categories.2.description')
    },
    {
      title: t('home.services.categories.3.title'),
      description: t('home.services.categories.3.description')
    },
  ];

  // Obtener traducciones para las características del robot
  const robotFeatures = [
    t('home.robot.features.0'),
    t('home.robot.features.1'),
    t('home.robot.features.2'),
    t('home.robot.features.3'),
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
        customTitle={t('hero.customTitle')}
        customSubtitle={t('hero.customSubtitle')}
        primaryButtonText={t('hero.primaryButtonText')}
        secondaryButtonText={t('hero.secondaryButtonText')}
      />

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <H2 sx={{ textAlign: 'center', mb: 2, fontWeight: 400, color: 'text.primary' }}>
            {t('home.features.title')}
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
            {t('home.features.subtitle')}
          </BodyText>
          <Grid container spacing={4}>
            {features.map((feature, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card 
                  variant="elevated"
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                    border: `1px solid ${theme.palette.divider}`,
                    '&:hover': {
                      boxShadow: theme.shadows[4],
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <GeometricIcon 
                      type={idx === 0 ? "triangle" : idx === 1 ? "square" : "circle"} 
                      size="small" 
                      color={theme.palette.text.secondary}
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

      {/* Robot Section - Fondo oscuro con contraste automático */}
      <Box sx={{ 
        py: { xs: 6, md: 10 }, 
        bgcolor: mode === 'dark' ? 'background.default' : '#1a1a1a', 
        color: mode === 'dark' ? 'text.primary' : 'white' 
      }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" justifyContent="center">
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <H2 sx={{ 
                mb: 2, 
                color: mode === 'dark' ? 'text.primary' : 'white', 
                fontWeight: 300 
              }}>
                {t('home.robot.title')}
              </H2>
              <BodyText sx={{ 
                mb: 6, 
                color: mode === 'dark' ? 'text.secondary' : 'rgba(255, 255, 255, 0.8)', 
                maxWidth: 600, 
                fontSize: '1.1rem', 
                lineHeight: 1.7 
              }}>
                {t('home.robot.subtitle')}
              </BodyText>
              
              <BodyText sx={{ 
                mb: 4, 
                color: mode === 'dark' ? 'text.disabled' : 'rgba(255, 255, 255, 0.6)', 
                fontSize: '0.9rem', 
                fontStyle: 'italic' 
              }}>
                {t('home.robot.preview')}
              </BodyText>
              
              <H3 sx={{ 
                mb: 4, 
                color: mode === 'dark' ? 'text.primary' : 'white', 
                fontWeight: 400, 
                fontSize: '1.2rem' 
              }}>
                {t('home.robot.uniqueTitle')}
              </H3>
              
              {/* Lista ultra minimalista con iconos geométricos */}
              <Stack spacing={4} sx={{ mb: 6, maxWidth: 500 }}>
                {robotFeatures.map((feature, idx) => (
                  <Stack key={idx} direction="row" alignItems="center" spacing={3}>
                    <GeometricIcon 
                      type={idx === 0 ? "circle" : "dot"} 
                      size="small" 
                      color={idx === 0 ? "#B6CA40" : (mode === 'dark' ? 'text.disabled' : 'rgba(255, 255, 255, 0.4)')} 
                      variant={idx === 0 ? "filled" : "minimal"} 
                    />
                    <BodyText sx={{ 
                      color: mode === 'dark' ? (idx === 0 ? 'text.primary' : 'text.secondary') : (idx === 0 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)'), 
                      fontSize: '1rem', 
                      lineHeight: 1.6 
                    }}>
                      {feature}
                    </BodyText>
                  </Stack>
                ))}
              </Stack>
              
              <Box sx={{ 
                pl: 4,
                borderLeft: `1px solid ${mode === 'dark' ? 'divider' : 'rgba(255, 255, 255, 0.2)'}`,
                maxWidth: 500
              }}>
                <BodyText sx={{ 
                  fontStyle: 'italic', 
                  color: mode === 'dark' ? 'text.disabled' : 'rgba(255, 255, 255, 0.6)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: 1.6
                }}>
                  "{t('home.robot.quote')}"
                </BodyText>
              </Box>
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
          <H2 sx={{ textAlign: 'center', mb: 2, fontWeight: 400, color: 'text.primary' }}>
            {t('home.services.title')}
          </H2>
          <BodyText sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 700, mb: 6, mx: 'auto', fontSize: '1rem' }}>
            {t('home.services.subtitle')}
          </BodyText>
          <Grid container spacing={4}>
            {serviceCategories.map((cat, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <Card 
                  variant="elevated"
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: idx === 1 ? 'primary.main' : 'background.paper',
                    border: `1px solid ${idx === 1 ? 'primary.main' : theme.palette.divider}`,
                    '&:hover': {
                      boxShadow: theme.shadows[4],
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <>
                    <Box sx={{ mb: 2 }}>
                      <GeometricIcon 
                        type={idx === 0 ? "triangle" : idx === 1 ? "square" : idx === 2 ? "circle" : "line"} 
                        size="medium" 
                        color={idx === 1 ? "#FFFFFF" : theme.palette.text.secondary} 
                        variant={idx === 1 ? "filled" : "minimal"} 
                      />
                    </Box>
                    <H3 sx={{ 
                      mb: 2, 
                      color: idx === 1 ? '#FFFFFF' : 'text.primary',
                      fontWeight: idx === 1 ? 600 : 500,
                      fontSize: '1.2rem'
                    }}>
                      {cat.title}
                    </H3>
                    <BodyText sx={{ 
                      color: idx === 1 ? 'rgba(255, 255, 255, 0.9)' : 'text.secondary', 
                      fontSize: '0.95rem', 
                      lineHeight: 1.5,
                      flexGrow: 1
                    }}>
                      {cat.description}
                    </BodyText>
                  </>
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
            <H2 sx={{ mb: 3, fontWeight: 400, color: 'text.primary' }}>
              {t('home.cta.title')}
            </H2>
            <BodyText sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem' }}>
              {t('home.cta.subtitle')}
            </BodyText>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
              alignItems="center"
            >
              <DiagnosticCTA />
              <Button variant="outline" size="large">
                {t('home.cta.exploreButton')}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Container maxWidth="lg">
        <RelatedPages 
          pages={relatedLinks}
          title={t('common.related.continue')}
          variant="horizontal"
        />
      </Container>
    </Box>
  );
};

export default Home; 