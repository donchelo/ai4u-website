import React from 'react';
import { Box, Container, Grid, Stack, alpha, Typography } from '@mui/material';
import { H3, BodyText, LazyImage, Button } from '../atoms';
import { Card } from '../molecules';
import { ServiceUtils } from '../../../../data/services';
import { useColors } from '../../../../hooks';
import { useLanguage } from '../../../../context';
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
  const { t } = useLanguage();
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
        borderBottom: `1px solid ${alpha(colors.contrast.border, 0.4)}`,
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 0 },
        zIndex: 1,
        mb: 4,
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {featuredSorted.length > 0 && (
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Título minimalista de servicios destacados */}
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
                {t('services.premiumHero.title')}
              </Typography>
            </Box>

            {/* Selector minimalista de servicios destacados */}
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
                <Button
                  key={service.id}
                  variant={idx === activeIndex ? 'primary' : 'glass'}
                  size="small"
                  onClick={() => setActiveIndex(idx)}
                  sx={{
                    minWidth: 'auto',
                    px: 2,
                    py: 1,
                    fontSize: '0.875rem'
                  }}
                >
                  {service.title}
                </Button>
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
                  variant="glass"
                  sx={{
                    p: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    background: activeService.gradient,
                    color: '#FFFFFF',
                    minHeight: { xs: 400, md: 550 },
                    borderRadius: 4,
                    width: '100%',
                    position: 'relative',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    border: `2px solid ${activeService.color}`,
                    zIndex: 1
                  }}
                >
                  {/* Media destacada con padding interno */}
                  <Box sx={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: { xs: 280, md: 380 },
                    borderRadius: 3, 
                    overflow: 'hidden',
                    mb: 3,
                    border: '1px solid rgba(255,255,255,0.2)'
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
                          backgroundColor: 'black' 
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
                          backgroundColor: 'black' 
                        }}
                      />
                    ) : null}
                  </Box>

                  {/* Contenido de texto debajo del video */}
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <H3 sx={{ 
                      color: '#FFFFFF', 
                      fontWeight: 700, 
                      mb: 2,
                      fontSize: { xs: '1.4rem', md: '1.6rem' } 
                    }}>
                      {activeService.title}
                    </H3>
                    {activeService.subtitle && (
                      <BodyText sx={{ 
                        color: 'rgba(255,255,255,0.9)', 
                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                        mb: 3,
                        lineHeight: 1.5
                      }}>
                        {activeService.subtitle}
                      </BodyText>
                    )}
                    <Box sx={{ mt: 'auto' }}>
                      <Button
                        variant="glass"
                        size="medium"
                        component="a"
                        href={`#service-${activeService.id}`}
                        sx={{ 
                          px: 3, 
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600
                        }}
                      >
                        Ver servicio
                      </Button>
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
                      color: 'text.primary', 
                      fontWeight: 700, 
                      mb: 2,
                      fontSize: { xs: '1.5rem', md: '1.7rem' }
                    }}>
                      Beneficios de {activeService.title}
                    </H3>
                    <BodyText sx={{ 
                      color: 'text.secondary', 
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
                        color: 'text.primary', 
                        fontWeight: 700, 
                        mb: 3,
                        fontSize: { xs: '1.1rem', md: '1.2rem' }
                      }}
                    >
                      ¿Qué obtienes?
                    </Typography>
                    
                    <Stack 
                      spacing={2.5}
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
                            p: 3,
                            borderRadius: 3,
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: `1px solid ${alpha(colors.contrast.border, 0.2)}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.06)',
                              borderColor: activeService.color,
                              transform: 'translateX(6px)',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                            }
                          }}
                        >
                          {/* Icono de check */}
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              background: activeService.color,
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
                                fontSize: '0.875rem',
                                fontWeight: 700,
                                lineHeight: 1
                              }}
                            >
                              ✓
                            </Typography>
                          </Box>
                          
                          <Typography
                            sx={{
                              color: 'text.primary',
                              fontSize: { xs: '0.95rem', md: '1rem' },
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

                  {/* Tiempo de entrega */}
                  {activeService.deliveryTime && (
                    <Box sx={{ 
                      mt: 4, 
                      p: 3, 
                      borderRadius: 3,
                      background: alpha(activeService.color, 0.08),
                      border: `2px solid ${alpha(activeService.color, 0.3)}`,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <Typography
                        sx={{
                          color: activeService.color,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                          fontWeight: 700,
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


