import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { H3, BodyText, LazyImage } from '../atoms';
import { Card, DiagnosticCTA } from '../molecules';
import { ServiceUtils } from '../../../../data/services';
import { useColors } from '../../../../hooks';
import { useServicesContext } from '../../../../context/ServicesContext';

interface ServicesPremiumHeroProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
}

const ServicesPremiumHero: React.FC<ServicesPremiumHeroProps> = ({
  title,
  subtitle,
  maxItems = 3,
}) => {
  const colors = useColors();
  const { getFeaturedServices } = useServicesContext();

  // Destacados ordenados por prioridad
  const featuredSorted = ServiceUtils.sortByPriority([...getFeaturedServices()]);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const activeService = featuredSorted[activeIndex];

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: colors.contrast.background,
        borderBottom: `1px solid ${colors.contrast.border}`,
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 0 },
        zIndex: 1,
        mb: 4,
      }}
    >
      <Container maxWidth="lg">
        {featuredSorted.length > 0 && (
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Título minimalista */}
            <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
              <Typography
                variant="h3"
                sx={{
                  color: colors.contrast.text.primary,
                  fontWeight: 600,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontFamily: '"Red Hat Display", sans-serif',
                  letterSpacing: '-0.01em'
                }}
              >
                Destacados
              </Typography>
            </Box>

            {/* Selector minimalista */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                mb: { xs: 3, md: 4 },
                overflowX: 'auto',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {featuredSorted.map((service, idx) => (
                <Box
                  key={service.id}
                  onClick={() => setActiveIndex(idx)}
                  sx={{
                    px: 2,
                    py: 1,
                    fontSize: '0.875rem',
                    fontWeight: idx === activeIndex ? 600 : 500,
                    color: idx === activeIndex ? colors.contrast.text.primary : colors.contrast.text.secondary,
                    background: idx === activeIndex ? colors.contrast.surface : 'transparent',
                    border: `1px solid ${idx === activeIndex ? colors.contrast.border : 'transparent'}`,
                    borderRadius: 1,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: colors.contrast.surface,
                      borderColor: colors.contrast.border,
                    }
                  }}
                >
                  {service.title}
                </Box>
              ))}
            </Box>

            <Grid 
              container 
              spacing={4}
              sx={{ mb: 2 }}
            >
              {/* Columna izquierda: Video/Tarjeta */}
              <Grid item xs={12} md={7}>
                <Card
                  variant="elevated"
                  sx={{
                    p: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    background: colors.contrast.surface,
                    color: colors.contrast.text.primary,
                    minHeight: { xs: 400, md: 550 },
                    borderRadius: 2,
                    width: '100%',
                    position: 'relative',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    border: `1px solid ${colors.contrast.border}`,
                    zIndex: 1
                  }}
                >
                  {/* Media destacada */}
                  <Box sx={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: { xs: 280, md: 380 },
                    borderRadius: 2, 
                    overflow: 'hidden',
                    mb: 3,
                    border: `1px solid ${colors.contrast.border}`,
                    background: colors.contrast.background
                  }}>
                    {activeService.media?.video ? (
                      <video
                        src={activeService.media.video}
                        poster={activeService.media.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        controls={false}
                        disablePictureInPicture
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'contain', 
                          objectPosition: 'center', 
                          display: 'block', 
                          backgroundColor: colors.contrast.background
                        }}
                      />
                    ) : activeService.media?.gif || activeService.media?.poster ? (
                      <LazyImage
                        src={activeService.media?.gif || activeService.media?.poster}
                        alt={`${activeService.title} preview`}
                        sx={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'contain', 
                          objectPosition: 'center', 
                          backgroundColor: colors.contrast.background
                        }}
                      />
                    ) : null}
                  </Box>

                  {/* Contenido de texto */}
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <H3 sx={{ 
                      color: colors.contrast.text.primary, 
                      fontWeight: 600, 
                      mb: 2,
                      fontSize: { xs: '1.3rem', md: '1.5rem' } 
                    }}>
                      {activeService.title}
                    </H3>
                    {activeService.subtitle && (
                      <BodyText sx={{ 
                        color: colors.contrast.text.secondary, 
                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                        mb: 3,
                        lineHeight: 1.5
                      }}>
                        {activeService.subtitle}
                      </BodyText>
                    )}
                    <Box sx={{ mt: 'auto' }}>
                      <DiagnosticCTA 
                        variant="primary"
                        size="medium"
                        showIcon={true}
                        text="Agendar un diagnóstico gratis"
                      />
                    </Box>
                  </Box>
                </Card>
              </Grid>

              {/* Columna derecha: Beneficios */}
              <Grid item xs={12} md={5}>
                <Box sx={{ 
                  width: '100%',
                  display: 'flex', 
                  flexDirection: 'column',
                  height: { xs: 'auto', md: 550 },
                  minHeight: { xs: 'auto', md: 550 },
                  position: 'relative',
                  zIndex: 1
                }}>
                  {/* Título y descripción */}
                  <Box sx={{ mb: 4 }}>
                    <H3 sx={{ 
                      color: colors.contrast.text.primary, 
                      fontWeight: 600, 
                      mb: 2,
                      fontSize: { xs: '1.4rem', md: '1.6rem' }
                    }}>
                      Beneficios de {activeService.title}
                    </H3>
                    <BodyText sx={{ 
                      color: colors.contrast.text.secondary, 
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.7,
                      mb: 0
                    }}>
                      {activeService.description}
                    </BodyText>
                  </Box>

                  {/* Lista de beneficios */}
                  <Box sx={{ 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: colors.contrast.text.primary, 
                        fontWeight: 600, 
                        mb: 3,
                        fontSize: { xs: '1.1rem', md: '1.2rem' }
                      }}
                    >
                      ¿Qué obtienes?
                    </Typography>
                    
                    <Stack 
                      spacing={2}
                      sx={{ 
                        flex: 1
                      }}
                    >
                      {activeService.benefits.map((benefit, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 2,
                            p: 2.5,
                            borderRadius: 2,
                            background: colors.contrast.surface,
                            border: `1px solid ${colors.contrast.border}`,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              borderColor: colors.contrast.text.secondary,
                              transform: 'translateX(4px)',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                            }
                          }}
                        >
                          {/* Icono de check minimalista */}
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: '50%',
                              background: colors.contrast.text.secondary,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              mt: 0.25
                            }}
                          >
                            <Typography
                              sx={{
                                color: '#FFFFFF',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                lineHeight: 1
                              }}
                            >
                              ✓
                            </Typography>
                          </Box>
                          
                          <Typography
                            sx={{
                              color: colors.contrast.text.primary,
                              fontSize: { xs: '0.9rem', md: '0.95rem' },
                              lineHeight: 1.6,
                              fontWeight: 500,
                              flex: 1
                            }}
                          >
                            {benefit}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>

                  {/* Tiempo de entrega minimalista */}
                  {activeService.deliveryTime && (
                    <Box sx={{ 
                      mt: 4, 
                      p: 2.5, 
                      borderRadius: 2,
                      background: colors.contrast.surface,
                      border: `1px solid ${colors.contrast.text.secondary}`,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <Typography
                        sx={{
                          color: colors.contrast.text.secondary,
                          fontSize: { xs: '0.9rem', md: '0.95rem' },
                          fontWeight: 600,
                          textAlign: 'center'
                        }}
                      >
                        ⏱️ {activeService.deliveryTime}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ServicesPremiumHero;
