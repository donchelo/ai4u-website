import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  Avatar, 
  IconButton,
  Typography
} from '@mui/material';
import { H1, H2, H3, BodyText, Button, GeometricIcon, PixelArtImage, SEOHead } from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, ServicesButton, MetricCard, RelatedPages } from '../components/shared/ui/molecules';
import { useColors } from '../hooks';
import { useLanguage } from '../hooks';
import { getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';

const WhyAI4U = () => {
  const colors = useColors();
  const { t } = useLanguage();

  // Obtener meta tags optimizados para la página "Por qué AI4U"
  const metaTags = getPageMetaTags('why');
  
  // Obtener enlaces contextuales para la página Why AI4U
  const relatedLinks = getRelatedLinks('/por-que-ai4u');

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${colors.contrast.background} 0%, ${colors.contrast.surface} 100%)`
    }}>
      {/* SEO Head con meta tags optimizados */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co/por-que-ai4u"
      />

      {/* Hero Section minimalista */}
      <Box sx={{ 
        py: { xs: 8, md: 12 },
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <H1 sx={{ 
            mb: 6, 
            fontWeight: 300,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            letterSpacing: '-0.02em',
            color: colors.contrast.text.primary
          }}>
            ¿Por qué <Box component="span" sx={{ color: colors.palette.orange }}>AI4U</Box>?
          </H1>
          <BodyText sx={{ 
            mb: 8, 
            color: colors.contrast.text.secondary,
            fontSize: '1.2rem',
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: 700,
            mx: 'auto'
          }}>
            {t('whyAI4U.hero.description')}
          </BodyText>
        </Container>
      </Box>

      {/* Mariano Section - Destacado como la parte humana */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <H2 sx={{ 
                  mb: 4, 
                  fontWeight: 300,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: colors.contrast.text.primary
                }}>
                  {t('whyAI4U.mariano.title')}
                </H2>
                <BodyText sx={{ 
                  mb: 6, 
                  color: colors.contrast.text.secondary,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  fontWeight: 300
                }}>
                  {t('whyAI4U.mariano.description')}
                </BodyText>
                
                <Stack spacing={3} sx={{ mb: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="circle" size="small" color={colors.palette.green} variant="filled" />
                    <BodyText sx={{ fontSize: '1rem', color: colors.contrast.text.primary }}>{t('whyAI4U.mariano.credentials.0')}</BodyText>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="triangle" size="small" color={colors.contrast.text.secondary} variant="minimal" />
                    <BodyText sx={{ fontSize: '1rem', color: colors.contrast.text.primary }}>{t('whyAI4U.mariano.credentials.1')}</BodyText>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="square" size="small" color={colors.contrast.text.secondary} variant="minimal" />
                    <BodyText sx={{ fontSize: '1rem', color: colors.contrast.text.primary }}>{t('whyAI4U.mariano.credentials.2')}</BodyText>
                  </Box>
                </Stack>
                
                <Button 
                  variant="outline" 
                  size="large"
                  component="a"
                  href="https://www.linkedin.com/in/mariano3/"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'none',
                    }
                  }}
                  {...{
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  }}
                >
                  {t('whyAI4U.mariano.linkedinButton')}
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card variant="glass" sx={{ p: 0, overflow: 'hidden', position: 'relative' }}>
                <PixelArtImage
                  src="/assets/images/mariano.jpeg"
                  pixelArtSrc="/assets/images/mariano-pixel-art.png"
                  alt={t('whyAI4U.mariano.imageAlt')}
                  sx={{
                    width: '100%',
                    height: { xs: 400, md: 500 },
                  }}
                  transitionDuration={0.4}
                />
                
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: `linear-gradient(transparent, ${colors.mode === 'light' ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.8)'})`,
                    color: colors.contrast.text.primary,
                    p: 3,
                    opacity: 0,
                    transition: 'opacity 0.4s ease-in-out',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <BodyText sx={{ 
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    textAlign: 'center',
                    mb: 1,
                    color: colors.contrast.text.primary
                  }}>
                    {t('whyAI4U.mariano.hoverText')}
                  </BodyText>
                  <BodyText sx={{ 
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    textAlign: 'center',
                    opacity: 0.8,
                    color: colors.contrast.text.primary
                  }}>
                    {t('whyAI4U.mariano.hoverSubtext')}
                  </BodyText>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section - Minimalista */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 8, 
            textAlign: 'center',
            fontWeight: 300,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: colors.contrast.text.primary
          }}>
            {t('whyAI4U.benefits.title')}
          </H2>

          <Grid container spacing={6}>
            {[
              {
                title: t('whyAI4U.benefits.items.0.title'),
                description: t('whyAI4U.benefits.items.0.description'),
                icon: "circle",
                color: colors.palette.green
              },
              {
                title: t('whyAI4U.benefits.items.1.title'),
                description: t('whyAI4U.benefits.items.1.description'),
                icon: "triangle",
                color: colors.contrast.text.secondary
              },
              {
                title: t('whyAI4U.benefits.items.2.title'),
                description: t('whyAI4U.benefits.items.2.description'),
                icon: "square", 
                color: colors.contrast.text.secondary
              }
            ].map((benefit, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card variant="light" sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  p: 4
                }}>
                  <Box sx={{ mb: 3 }}>
                    <GeometricIcon
                      type={benefit.icon as any}
                      size="large"
                      color={benefit.color}
                      variant={idx === 0 ? "filled" : "minimal"}
                    />
                  </Box>
                  <H3 sx={{ 
                    mb: 2, 
                    fontSize: '1.3rem',
                    fontWeight: 500,
                    color: colors.contrast.text.primary
                  }}>
                    {benefit.title}
                  </H3>
                  <BodyText sx={{ 
                    color: colors.contrast.text.secondary,
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    {benefit.description}
                  </BodyText>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section - Nuestros Números */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 8, 
            textAlign: 'center',
            fontWeight: 300,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: colors.contrast.text.primary
          }}>
            {t('whyAI4U.stats.title')}
          </H2>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.stats.metrics.services.title')}
                  value={t('whyAI4U.stats.metrics.services.value')}
                  subtitle={t('whyAI4U.stats.metrics.services.subtitle')}
                  iconType="square"
                  variant="glass"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.stats.metrics.strategy.title')}
                  value={t('whyAI4U.stats.metrics.strategy.value')}
                  subtitle={t('whyAI4U.stats.metrics.strategy.subtitle')}
                  iconType="triangle"
                  variant="primary"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.stats.metrics.operation.title')}
                  value={t('whyAI4U.stats.metrics.operation.value')}
                  subtitle={t('whyAI4U.stats.metrics.operation.subtitle')}
                  iconType="circle"
                  variant="accent"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.stats.metrics.roi.title')}
                  value={t('whyAI4U.stats.metrics.roi.value')}
                  subtitle={t('whyAI4U.stats.metrics.roi.subtitle')}
                  iconType="arrow-up"
                  variant="glass"
                  size="large"
                  trend="up"
                />
              </Box>
            </Grid>
          </Grid>
          
          {/* Métricas adicionales */}
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title={t('whyAI4U.stats.metrics.timeSaved.title')}
                    value={t('whyAI4U.stats.metrics.timeSaved.value')}
                    subtitle={t('whyAI4U.stats.metrics.timeSaved.subtitle')}
                    iconType="arrow-up"
                    variant="glass"
                    size="large"
                    trend="up"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title={t('whyAI4U.stats.metrics.satisfiedClients.title')}
                    value={t('whyAI4U.stats.metrics.satisfiedClients.value')}
                    subtitle={t('whyAI4U.stats.metrics.satisfiedClients.subtitle')}
                    iconType="circle"
                    variant="primary"
                    size="large"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title={t('whyAI4U.stats.metrics.implementation.title')}
                    value={t('whyAI4U.stats.metrics.implementation.value')}
                    subtitle={t('whyAI4U.stats.metrics.implementation.subtitle')}
                    iconType="triangle"
                    variant="accent"
                    size="large"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Impact Section - Impacto Real */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 8, 
            textAlign: 'center',
            fontWeight: 300,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: colors.contrast.text.primary
          }}>
            {t('whyAI4U.impact.title')}
          </H2>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.impact.metrics.hoursSaved.title')}
                  value={t('whyAI4U.impact.metrics.hoursSaved.value')}
                  subtitle={t('whyAI4U.impact.metrics.hoursSaved.subtitle')}
                  iconType="arrow-up"
                  variant="glass"
                  size="large"
                  trend="up"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.impact.metrics.automatedProcesses.title')}
                  value={t('whyAI4U.impact.metrics.automatedProcesses.value')}
                  subtitle={t('whyAI4U.impact.metrics.automatedProcesses.subtitle')}
                  iconType="circle"
                  variant="primary"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.impact.metrics.responseTime.title')}
                  value={t('whyAI4U.impact.metrics.responseTime.value')}
                  subtitle={t('whyAI4U.impact.metrics.responseTime.subtitle')}
                  iconType="triangle"
                  variant="accent"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.impact.metrics.averageROI.title')}
                  value={t('whyAI4U.impact.metrics.averageROI.value')}
                  subtitle={t('whyAI4U.impact.metrics.averageROI.subtitle')}
                  iconType="arrow-up"
                  variant="glass"
                  size="large"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section - Maximizando ventas */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Card variant="dark" sx={{ textAlign: 'center', p: 6 }}>
            <Box sx={{ mb: 4 }}>
              <GeometricIcon
                type="arrow-up"
                size="large"
                color={colors.palette.green}
                variant="filled"
              />
            </Box>
            <H2 sx={{ 
              mb: 4,
              color: colors.contrast.text.primary,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 300
            }}>
              {t('whyAI4U.cta.title')}
            </H2>
            <BodyText sx={{ 
              mb: 6, 
              color: colors.mode === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: 600,
              mx: 'auto'
            }}>
              {t('whyAI4U.cta.subtitle')}
            </BodyText>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <DiagnosticCTA />
              <ServicesButton
                variant="outline"
                size="large"
                text={t('whyAI4U.cta.viewSolutionsButton')}
              />
            </Stack>
            
            <BodyText sx={{ 
              fontStyle: 'italic', 
              color: colors.mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem'
            }}>
              {t('whyAI4U.cta.disclaimer')}
            </BodyText>
          </Card>
        </Container>
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
