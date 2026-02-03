import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { H1, H3, BodyText, LazyImage } from '../atoms';
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
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        borderBottom: `8px solid ${colors.palette.accentColors.orange}`,
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
            <Box sx={{ textAlign: 'left', mb: 8 }}>
              <H1
                sx={{
                  color: colors.palette.white,
                  fontWeight: 900,
                  fontSize: { xs: '4rem', md: '8rem' },
                  textTransform: 'uppercase',
                  lineHeight: 0.85,
                  letterSpacing: '-0.05em'
                }}
              >
                // DESTACADOS
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
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    p: 4,
                    bgcolor: colors.palette.white,
                    border: `8px solid ${colors.palette.white}`,
                    boxShadow: `15px 15px 0px ${colors.palette.accentColors.orange}`,
                    minHeight: { xs: 400, md: 600 },
                    width: '100%',
                    position: 'relative'
                  }}
                >
                  <Box sx={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: { xs: 300, md: 500 },
                    bgcolor: colors.palette.black,
                    overflow: 'hidden'
                  }}>
                    {activeService.media?.video ? (
                      <video
                        src={activeService.media.video}
                        poster={activeService.media.poster}
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
              <Grid item xs={12} md={5}>
                <Stack spacing={6}>
                  <Box>
                    <H3 sx={{ 
                      color: colors.palette.white, 
                      fontWeight: 900, 
                      fontSize: '4rem',
                      lineHeight: 0.9,
                      mb: 4,
                      textTransform: 'uppercase'
                    }}>
                      {activeService.title}
                    </H3>
                    <BodyText sx={{ 
                      color: colors.palette.white, 
                      fontSize: '1.8rem',
                      lineHeight: 1.2,
                      fontWeight: 300,
                      opacity: 0.9
                    }}>
                      {activeService.description}
                    </BodyText>
                  </Box>

                  <Stack spacing={3}>
                    {activeService.benefits.slice(0, 3).map((benefit, index) => (
                      <Box key={index} sx={{ borderLeft: `6px solid ${colors.palette.accentColors.orange}`, pl: 4 }}>
                        <BodyText sx={{ fontSize: '1.5rem', fontWeight: 700, color: colors.palette.white }}>
                          {benefit.toUpperCase()}
                        </BodyText>
                      </Box>
                    ))}
                  </Stack>

                  <DiagnosticCTA 
                    variant="primary"
                    size="large"
                    text="OBTENER ESTO AHORA"
                    sx={{ 
                      height: '100px', 
                      fontSize: '1.5rem', 
                      fontWeight: 900,
                      bgcolor: colors.palette.accentColors.orange,
                      borderColor: colors.palette.accentColors.orange,
                      '&:hover': {
                        bgcolor: colors.palette.white,
                        color: colors.palette.black,
                        borderColor: colors.palette.white
                      }
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ServicesPremiumHero;
