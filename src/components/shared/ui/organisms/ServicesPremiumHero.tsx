import React from 'react';
import { Box, Container, Grid, Stack, alpha } from '@mui/material';
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

  // Se omiten textos de encabezado para dejar solo videos en sus fichas

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: colors.contrast.background,
        borderBottom: `1px solid ${alpha(colors.contrast.border, 0.4)}`,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {featuredSorted.length > 0 && (
          <Box>
            {/* Selector de servicios destacados */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                mb: 2,
                overflowX: 'auto',
                p: 1,
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

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card
                  variant="glass"
                  sx={{
                    p: 0,
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: activeService.gradient,
                    color: '#FFFFFF',
                  }}
                >
                  {/* Media destacada */}
                  <Box sx={{ position: 'relative', aspectRatio: '16 / 9', width: '100%' }}>
                    {activeService.media?.video ? (
                      <video
                        src={activeService.media.video}
                        poster={activeService.media.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : activeService.media?.gif || activeService.media?.poster ? (
                      <LazyImage
                        src={activeService.media?.gif || activeService.media?.poster}
                        alt={`${activeService.title} preview`}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : null}

                    {/* Overlay informativo minimal */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        p: { xs: 2, md: 2.5 },
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)',
                        color: '#FFFFFF',
                      }}
                    >
                      <H3 sx={{ color: '#FFFFFF', fontWeight: 600, m: 0 }}>{activeService.title}</H3>
                      {activeService.subtitle && (
                        <BodyText sx={{ color: 'rgba(255,255,255,0.9)', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                          {activeService.subtitle}
                        </BodyText>
                      )}
                      <Box sx={{ mt: 1.5 }}>
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


