import React, { useRef, useState, useEffect } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { H1, H3, BodyText, LazyImage, Button } from '../atoms';
import { Card, DiagnosticCTA } from '../molecules';
import SuperAIModal from './SuperAIModal';
import { ServiceUtils } from '../../../../data/services';
import { useColors } from '../../../../hooks';
import { useServicesContext } from '@/context';

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
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [videoInView, setVideoInView] = useState(false);

  // Lazy load video: cargar src solo cuando el contenedor entra en viewport (no compite con LCP)
  useEffect(() => {
    const el = videoContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVideoInView(true);
      },
      { rootMargin: '100px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Destacados ordenados por prioridad
  const featuredSorted = ServiceUtils.sortByPriority([...getFeaturedServices()]);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeService = featuredSorted[activeIndex];

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        borderBottom: `8px solid ${colors.palette.white}`,
        py: { xs: 15, md: 25 },
        px: { xs: 4, md: 12, lg: 20 },
        zIndex: 1,
        mb: 8,
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl" sx={{ mx: 0 }}>
        {featuredSorted.length > 0 && (
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Título GIGANTE */}
            <Box sx={{ textAlign: 'left', mb: 4 }}>
              <H1
                sx={{
                  color: colors.palette.white,
                  fontWeight: 900,
                  fontSize: { xs: '3rem', md: '5rem' },
                  textTransform: 'uppercase',
                  lineHeight: 0.85,
                  letterSpacing: '-0.02em',
                  opacity: 0.5
                }}
              >
                // {title || 'DESTACADOS'}
              </H1>
            </Box>

            {/* Selector Brutalista */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 2,
                mb: 8,
                overflowX: 'auto',
                pb: 2
              }}
            >
              {featuredSorted.map((service, idx) => (
                <Box
                  key={service.id}
                  onClick={() => setActiveIndex(idx)}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: idx === activeIndex ? colors.palette.black : colors.palette.white,
                    background: idx === activeIndex ? colors.palette.white : 'transparent',
                    border: `4px solid ${colors.palette.white}`,
                    borderRadius: 0,
                    cursor: 'pointer',
                    transition: 'all 0.1s ease',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      background: idx === activeIndex ? colors.palette.white : 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  {service.title}
                </Box>
              ))}
            </Box>

            <Grid 
              container 
              spacing={10}
            >
              {/* Columna izquierda: Video/Media */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    border: `1px solid rgba(255,255,255,0.1)`,
                    backdropFilter: 'blur(10px)',
                    minHeight: { xs: 300, md: 450 },
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box
                    ref={videoContainerRef}
                    sx={{ 
                      position: 'relative', 
                      width: '100%', 
                      height: { xs: 250, md: 400 },
                      bgcolor: colors.palette.black,
                      overflow: 'hidden',
                      border: `1px solid rgba(255,255,255,0.2)`
                    }}
                  >
                    {activeService.media?.video ? (
                      <video
                        src={videoInView ? activeService.media.video : undefined}
                        poster={activeService.media.poster}
                        preload="metadata"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      <LazyImage
                        src={activeService.media?.gif || activeService.media?.poster || ''}
                        alt={activeService.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    )}
                  </Box>
                </Box>
              </Grid>

              {/* Columna derecha: Info */}
              <Grid item xs={12} md={6}>
                <Stack spacing={4}>
                  <Box>
                    <H3 sx={{ 
                      color: colors.palette.white, 
                      fontWeight: 900, 
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      lineHeight: 0.9,
                      mb: 2,
                      textTransform: 'uppercase'
                    }}>
                      {activeService.title}
                    </H3>
                    <BodyText sx={{ 
                      color: colors.palette.white, 
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      lineHeight: 1.2,
                      fontWeight: 300,
                      opacity: 0.8
                    }}>
                      {activeService.description}
                    </BodyText>
                  </Box>

                  <Stack spacing={2}>
                    {activeService.benefits.slice(0, 3).map((benefit, index) => (
                      <Box key={index} sx={{ borderLeft: `4px solid ${colors.palette.white}`, pl: 3 }}>
                        <BodyText sx={{ fontSize: '1.1rem', fontWeight: 700, color: colors.palette.white, opacity: 0.9 }}>
                          {benefit.toUpperCase()}
                        </BodyText>
                      </Box>
                    ))}
                  </Stack>

                  {activeService.id === 'super-ai' ? (
                    <Button 
                      variant="primary"
                      size="large"
                      text="CONOCER SUPER AI"
                      onClick={() => setIsModalOpen(true)}
                      sx={{ 
                        height: '80px', 
                        fontSize: '1.2rem', 
                        fontWeight: 900, 
                        bgcolor: colors.palette.white,
                        borderColor: colors.palette.white,
                        color: colors.palette.black,
                        '&:hover': {
                          bgcolor: colors.palette.black,
                          color: colors.palette.white,
                          borderColor: colors.palette.white
                        }
                      }}
                    />
                  ) : (
                    <DiagnosticCTA 
                      variant="primary"
                      size="large"
                      text={activeService.title === 'coutureLAB' ? 'SOLICITAR ACCESO LAB' : 'SOLICITAR INFRAESTRUCTURA'}
                      sx={{ 
                        height: '80px', 
                        fontSize: '1.2rem', 
                        fontWeight: 900, 
                        bgcolor: colors.palette.white,
                        borderColor: colors.palette.white,
                        color: colors.palette.black,
                        '&:hover': {
                          bgcolor: colors.palette.black,
                          color: colors.palette.white,
                          borderColor: colors.palette.white
                        }
                      }}
                    />
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
      
      <SuperAIModal 
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Box>
  );
};

export default ServicesPremiumHero;
