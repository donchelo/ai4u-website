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
import { H1, H2, H3, BodyText, Button, GeometricIcon, PixelArtImage, SEOHead } from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, ServicesButton, MetricCard, RelatedPages, ExpandableSection } from '../components/shared/ui/molecules';
import { useColors } from '../hooks';
import { getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';

const WhyAI4U = () => {
  const colors = useColors();

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
                  La parte <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>humana</Box> detrás de la tecnología
                </H2>
                
                <Stack spacing={3} sx={{ mb: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="circle" size="small" color={colors.palette.accentColors.orange} variant="filled" />
                    <BodyText sx={{ fontSize: '1rem', color: colors.contrast.text.primary }}>Fundador de AI4U</BodyText>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="triangle" size="small" color={colors.palette.accentColors.orange} variant="filled" />
                    <BodyText sx={{ fontSize: '1rem', color: colors.contrast.text.primary }}>Cofundador de Matt Movilidad</BodyText>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="square" size="small" color={colors.palette.accentColors.orange} variant="filled" />
                    <BodyText sx={{ fontSize: '1rem', color: colors.contrast.text.primary }}>Especialista en automatización</BodyText>
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
                    Detrás de cada automatización hay una mente humana que entiende tu negocio. Mariano, fundador de AI4U, combina experiencia en startups, movilidad y tecnología para crear soluciones que realmente funcionan.
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
                  Conectar en LinkedIn
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card variant="elevated" sx={{ p: 0, overflow: 'hidden', position: 'relative' }}>
                <PixelArtImage
                  src="/assets/images/mariano.jpeg"
                  pixelArtSrc="/assets/images/mariano-pixel-art.png"
                  alt="Mariano, Fundador de AI4U"
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
                    Pasa el mouse para ver el efecto pixel art
                  </BodyText>
                  <BodyText sx={{ 
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    textAlign: 'center',
                    opacity: 0.8,
                    color: colors.contrast.text.primary
                  }}>
                    Tecnología + Creatividad
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
            ¿Qué nos hace <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>diferentes</Box>?
          </H2>

          <Grid container spacing={6}>
            {[
              {
                title: 'Diagnóstico Gratuito',
                description: 'Evaluamos tu negocio sin costo para identificar oportunidades de automatización.',
                icon: "circle",
                color: colors.palette.accentColors.orange
              },
              {
                title: 'Asistentes que Evolucionan',
                description: 'A diferencia de otros servicios, nuestros asistentes aprenden y mejoran continuamente.',
                icon: "triangle",
                color: colors.palette.accentColors.orange
              },
              {
                title: 'Resultados Garantizados',
                description: '72 horas para implementación. ROI medible desde el primer mes.',
                icon: "square", 
                color: colors.palette.accentColors.orange
              }
            ].map((benefit, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card variant="elevated" sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  p: 4,
                  cursor: 'pointer',
                  borderTop: `4px solid ${colors.palette.accentColors.orange}`,
                  '&:hover': {
                    boxShadow: `0 8px 24px ${colors.palette.accentColors.orange}30`,
                    transform: (theme) => `translateY(-${theme.spacing(0.25)})`,
                    transition: 'all 0.3s ease',
                    borderTopWidth: '6px'
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
                  <BodyText sx={{ mt: 2, color: colors.contrast.text.secondary }}>
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
            Nuestros números hablan por sí solos
          </H2>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Servicios"
                  value="25+"
                  iconType="square"
                  variant="elevated"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Estrategia"
                  value="12"
                  iconType="triangle"
                  variant="elevated"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="Operación"
                  value="13"
                  iconType="circle"
                  variant="elevated"
                  size="large"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <MetricCard
                  title="ROI promedio"
                  value="300%"
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
                    title="Tiempo ahorrado"
                    value="85%"
                    subtitle="Reducción de tareas manuales"
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
                    title="Reducción de costos"
                    value="40%"
                    subtitle="En gastos operativos"
                    iconType="triangle"
                    variant="elevated"
                    size="large"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title="Eficiencia"
                    value="3x"
                    subtitle="Multiplicador de productividad"
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
            Impacto real en nuestros clientes
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
                    title="Horas ahorradas"
                    value="1200+"
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
                    title="Procesos automatizados"
                    value="95%"
                    iconType="circle"
                    variant="elevated"
                    size="large"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title="Tiempo de respuesta"
                    value="80%"
                    iconType="triangle"
                    variant="elevated"
                    size="large"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <MetricCard
                    title="ROI promedio"
                    value="300%"
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
                color={colors.palette.accentColors.orange}
                variant="filled"
              />
            </Box>
            <H2 sx={{ 
              mb: 4,
              color: colors.contrast.text.primary,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 300
            }}>
              ¿Listo para <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>liberar</Box> tu tiempo estratégico?
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
                text="VER SOLUCIONES"
              />
            </Stack>
            
            <BodyText sx={{ 
              fontStyle: 'italic', 
              color: colors.mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem'
            }}>
              Sin compromiso • Personalizado a tu negocio • Resultados desde el primer mes
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
