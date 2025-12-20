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
import { Card, DiagnosticCTA, ServicesButton, MetricCard, RelatedPages, ExpandableSection } from '../components/shared/ui/molecules';
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
                
                <Stack spacing={3} sx={{ mb: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="circle" size="small" color={colors.palette.success} variant="filled" />
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
                
                <ExpandableSection
                  title="Descubre mi historia"
                  variant="minimal"
                  defaultExpanded={false}
                >
                  <BodyText sx={{ 
                    mb: 6, 
                    color: colors.contrast.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    fontWeight: 300
                  }}>
                    {t('whyAI4U.mariano.description')}
                  </BodyText>
                </ExpandableSection>
                
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
              <Card variant="elevated" sx={{ p: 0, overflow: 'hidden', position: 'relative' }}>
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
                color: colors.palette.success
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
                <Card variant="elevated" sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  p: 4,
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
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
                    fontSize: '1.3rem',
                    fontWeight: 500,
                    color: colors.contrast.text.primary
                  }}>
                    {benefit.title}
                  </H3>
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
                  iconType="square"
                  variant="elevated"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.stats.metrics.strategy.title')}
                  value={t('whyAI4U.stats.metrics.strategy.value')}
                  iconType="triangle"
                  variant="elevated"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.stats.metrics.operation.title')}
                  value={t('whyAI4U.stats.metrics.operation.value')}
                  iconType="circle"
                  variant="elevated"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title={t('whyAI4U.stats.metrics.roi.title')}
                  value={t('whyAI4U.stats.metrics.roi.value')}
                  iconType="arrow-up"
                  variant="elevated"
                  size="large"
                  trend="up"
                />
              </Box>
            </Grid>
          </Grid>
          
          {/* Métricas adicionales con información progresiva */}
          <ExpandableSection
            title="Explorar métricas detalladas"
            variant="minimal"
            defaultExpanded={false}
          >
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title={t('whyAI4U.stats.metrics.timeSaved.title')}
                    value={t('whyAI4U.stats.metrics.timeSaved.value')}
                    subtitle={t('whyAI4U.stats.metrics.timeSaved.subtitle')}
                    iconType="arrow-up"
                    variant="elevated"
                    size="large"
                    trend="up"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title={t('whyAI4U.stats.metrics.costReduction.title')}
                    value={t('whyAI4U.stats.metrics.costReduction.value')}
                    subtitle={t('whyAI4U.stats.metrics.costReduction.subtitle')}
                    iconType="triangle"
                    variant="elevated"
                    size="large"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title={t('whyAI4U.stats.metrics.efficiency.title')}
                    value={t('whyAI4U.stats.metrics.efficiency.value')}
                    subtitle={t('whyAI4U.stats.metrics.efficiency.subtitle')}
                    iconType="circle"
                    variant="elevated"
                    size="large"
                  />
                </Box>
              </Grid>
            </Grid>
          </ExpandableSection>
        </Container>
      </Box>

      {/* Impact Section - Métricas de Impacto */}
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
          
          <ExpandableSection
            title="Ver impacto real"
            variant="minimal"
            defaultExpanded={false}
          >
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title={t('whyAI4U.impact.metrics.hoursSaved.title')}
                    value={t('whyAI4U.impact.metrics.hoursSaved.value')}
                    iconType="arrow-up"
                    variant="elevated"
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
                    iconType="circle"
                    variant="elevated"
                    size="large"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title={t('whyAI4U.impact.metrics.responseTime.title')}
                    value={t('whyAI4U.impact.metrics.responseTime.value')}
                    iconType="triangle"
                    variant="elevated"
                    size="large"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title={t('whyAI4U.impact.metrics.averageROI.title')}
                    value={t('whyAI4U.impact.metrics.averageROI.value')}
                    iconType="arrow-up"
                    variant="elevated"
                    size="large"
                  />
                </Box>
              </Grid>
            </Grid>
          </ExpandableSection>
        </Container>
      </Box>

      {/* Final CTA Section - Maximizando ventas */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Card variant="elevated" sx={{ textAlign: 'center', p: 6 }}>
            <Box sx={{ mb: 4 }}>
              <GeometricIcon
                type="arrow-up"
                size="large"
                color={colors.palette.success}
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
