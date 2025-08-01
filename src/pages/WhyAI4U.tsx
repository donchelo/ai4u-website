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
import { H1, H2, H3, BodyText, Button, GeometricIcon, PixelArtImage } from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, ServicesButton } from '../components/shared/ui/molecules';
import { useColors } from '../hooks';
import { useLanguage } from '../hooks';

const WhyAI4U = () => {
  const colors = useColors();
  const { t } = useLanguage();

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${colors.helpers.background.primary} 0%, ${colors.helpers.background.secondary} 100%)`
    }}>
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
            color: colors.helpers.text.primary
          }}>
            ¿Por qué <Box component="span" sx={{ color: colors.palette.orange }}>AI4U</Box>?
          </H1>
          <BodyText sx={{ 
            mb: 8, 
            color: colors.helpers.text.secondary,
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
                  color: colors.helpers.text.primary
                }}>
                  {t('whyAI4U.mariano.title')}
                </H2>
                <BodyText sx={{ 
                  mb: 6, 
                  color: colors.helpers.text.secondary,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  fontWeight: 300
                }}>
                  {t('whyAI4U.mariano.description')}
                </BodyText>
                
                <Stack spacing={3} sx={{ mb: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="circle" size="small" color={colors.palette.green} variant="filled" />
                    <BodyText sx={{ fontSize: '1rem', color: colors.helpers.text.primary }}>{t('whyAI4U.mariano.credentials.0')}</BodyText>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="triangle" size="small" color={colors.helpers.text.secondary} variant="minimal" />
                    <BodyText sx={{ fontSize: '1rem', color: colors.helpers.text.primary }}>{t('whyAI4U.mariano.credentials.1')}</BodyText>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="square" size="small" color={colors.helpers.text.secondary} variant="minimal" />
                    <BodyText sx={{ fontSize: '1rem', color: colors.helpers.text.primary }}>{t('whyAI4U.mariano.credentials.2')}</BodyText>
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
            color: colors.helpers.text.primary
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
                color: colors.helpers.text.secondary
              },
              {
                title: t('whyAI4U.benefits.items.2.title'),
                description: t('whyAI4U.benefits.items.2.description'),
                icon: "square", 
                color: colors.helpers.text.secondary
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
                    color: colors.helpers.text.primary
                  }}>
                    {benefit.title}
                  </H3>
                  <BodyText sx={{ 
                    color: colors.helpers.text.secondary,
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


    </Box>
  );
};

export default WhyAI4U; 