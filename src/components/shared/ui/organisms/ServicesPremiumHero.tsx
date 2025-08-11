import React from 'react';
import { Box, Container, Grid, Stack, alpha, useTheme, useMediaQuery } from '@mui/material';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Destacados ordenados por prioridad
  const featuredSorted = ServiceUtils.sortByPriority([...getFeaturedServices()]);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const activeService = featuredSorted[activeIndex];

  // Se omiten textos de encabezado para dejar solo videos en sus fichas

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: colors.contrast.background,
        borderBottom: `1px solid ${alpha(colors.contrast.border, 0.4)}`,
        display: 'flex',
      }}
    >
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', py: { xs: 2, md: 3 } }}>
        {featuredSorted.length > 0 && (
          <Box>
            {/* Selector de servicios destacados */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                mb: 1.5,
                overflowX: 'auto',
                p: 1,
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
                >
                  {service.title}
                </Button>
              ))}
            </Box>

            <Grid container spacing={2} sx={{ flex: '1 1 auto' }}>
              <Grid item xs={12}>
                <Card
                  variant="glass"
                  sx={{
                    p: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    background: activeService.gradient,
                    color: '#FFFFFF',
                    maxWidth: { xs: '100%', md: 1200 },
                    mx: 'auto'
                  }}
                >
                  {/* Media destacada */}
                  <Box sx={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: { xs: 320, md: '56dvh' },
                    maxHeight: 640,
                    minHeight: 280,
                    borderRadius: 3, 
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
                        preload="metadata"
                        controls={false}
                        disablePictureInPicture
                        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block', backgroundColor: 'black' }}
                      />
                    ) : activeService.media?.gif || activeService.media?.poster ? (
                      <LazyImage
                        src={activeService.media?.gif || activeService.media?.poster}
                        alt={`${activeService.title} preview`}
                        sx={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', backgroundColor: 'black' }}
                      />
                    ) : null}

                    {/* Overlay informativo minimal */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        p: { xs: 1, md: 1.5 },
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)',
                        color: '#FFFFFF',
                        pointerEvents: 'none'
                      }}
                    >
                      <H3 sx={{ color: '#FFFFFF', fontWeight: 600, m: 0, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>{activeService.title}</H3>
                      {activeService.subtitle && (
                        <BodyText sx={{ color: 'rgba(255,255,255,0.9)', fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                          {activeService.subtitle}
                        </BodyText>
                      )}
                      <Box sx={{ mt: 1, pointerEvents: 'auto' }}>
                        <Button
                          variant="glass"
                          size="small"
                          component="a"
                          href={`#service-${activeService.id}`}
                        >
                          Ver servicio
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ServicesPremiumHero;


