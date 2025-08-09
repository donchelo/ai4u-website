import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack
} from '@mui/material';
import { H1, H2, H3, BodyText, GeometricIcon, SEOHead } from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, RelatedPages } from '../components/shared/ui/molecules';
import { clients } from '../data/clients';
import { useColors } from '../hooks';
import { useLanguage } from '../hooks';
import { getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';

const UseCases = () => {
  const colors = useColors();
  const { t } = useLanguage();
  const metaTags = getPageMetaTags('cases');
  
  // Obtener enlaces contextuales para la página Cases
  const relatedLinks = getRelatedLinks('/casos-de-uso');

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${colors.contrast.background} 0%, ${colors.contrast.surface} 100%)`
    }}>
      {/* SEO Head */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co/casos-de-uso"
      />

      {/* Hero Section with Client Logos */}
      <Box sx={{ 
        py: { xs: 10, md: 16 },
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <H1 sx={{ 
            mb: 4, 
            fontWeight: 300,
            fontSize: { xs: '2.5rem', md: '4rem' },
            letterSpacing: '-0.02em',
            color: colors.contrast.text.primary
          }}>
            {t('successCases.hero.title')}
          </H1>
          <BodyText sx={{ 
            mb: 10, 
            color: colors.contrast.text.secondary,
            fontSize: '1.2rem',
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: 800,
            mx: 'auto'
          }}>
            {t('successCases.hero.description')}
          </BodyText>

          {/* Logos Protagonistas Grid */}
          <Grid container spacing={6} justifyContent="center" alignItems="center">
            {clients.map((client, index) => (
              <Grid item xs={6} md={3} key={client.id}>
                <Box
                  component="a"
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.05)',
                    }
                  }}
                >
                  <Card 
                    variant="glass" 
                    sx={{ 
                      p: { xs: 4, md: 6 },
                      height: { xs: 180, md: 220 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      backdropFilter: 'blur(10px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '&:hover': {
                        boxShadow: `0 20px 40px rgba(${colors.palette.orange.slice(1)}, 0.2)`,
                        borderColor: colors.palette.orange,
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      }
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      height: { xs: 100, md: 120 },
                      width: '100%',
                      mb: 2
                    }}>
                      <Box
                        component="img"
                        src={client.logo}
                        alt={`Logo de ${client.name}`}
                        sx={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          filter: 'grayscale(20%)',
                          opacity: 0.9,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            filter: 'grayscale(0%)',
                            opacity: 1,
                            transform: 'scale(1.1)'
                          }
                        }}
                      />
                    </Box>
                    
                    <BodyText sx={{ 
                      color: colors.contrast.text.secondary,
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textAlign: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '.MuiCard-root:hover &': {
                        opacity: 1
                      }
                    }}>
                      {client.sector}
                    </BodyText>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Metrics Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 6, md: 0 }
              }}>
                <H2 sx={{ 
                  mb: 4,
                  fontWeight: 300,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: colors.contrast.text.primary
                }}>
                  {t('successCases.metrics.title')}
                </H2>
                <BodyText sx={{ 
                  mb: 6,
                  color: colors.contrast.text.secondary,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  fontWeight: 300
                }}>
                  {t('successCases.metrics.description')}
                </BodyText>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                {[0, 1, 2].map((index) => (
                  <Card key={index} variant="glass" sx={{ p: 4 }}>
                    <Stack direction="row" alignItems="center" spacing={3}>
                      <GeometricIcon 
                        type={index === 0 ? "circle" : index === 1 ? "square" : "triangle"} 
                        size="medium" 
                        color={index <= 1 ? colors.palette.orange : colors.palette.green} 
                        variant="filled" 
                      />
                      <Box>
                        <H3 sx={{ 
                          mb: 1,
                          fontWeight: 700,
                          fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                          lineHeight: 0.9,
                          color: colors.contrast.text.primary,
                          letterSpacing: '-0.02em'
                        }}>
                          {t(`successCases.metrics.items.${index}.value`)}
                        </H3>
                        <BodyText sx={{ 
                          color: colors.contrast.text.secondary,
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          fontWeight: 300
                        }}>
                          {t(`successCases.metrics.items.${index}.description`)}
                        </BodyText>
                      </Box>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <H2 sx={{ 
              mb: 3,
              fontWeight: 300,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: colors.contrast.text.primary
            }}>
              ¿Listo para ser nuestro próximo <Box component="span" sx={{ color: colors.palette.orange }}>caso de éxito</Box>?
            </H2>
            <BodyText sx={{ 
              color: colors.contrast.text.secondary,
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: 600,
              mx: 'auto'
            }}>
              Únete a las empresas que ya transformaron sus procesos con IA. Tu logo podría ser el próximo en esta galería.
            </BodyText>
          </Box>
          <DiagnosticCTA />
        </Container>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Container maxWidth="lg">
        <RelatedPages 
          pages={relatedLinks}
          title="Explora más sobre nuestro trabajo:"
          variant="horizontal"
        />
      </Container>
    </Box>
  );
};

export default UseCases; 
