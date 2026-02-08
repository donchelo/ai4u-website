import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography,
  Stack,
  Divider,
  useTheme,
  Collapse,
  alpha
} from '@mui/material';
import { Giant, H1, H2, BodyText, Button, SEOHead, GeometricIcon } from '@/components/shared/ui/atoms';
import { ServiceCard, DiagnosticCTA, RelatedPages } from '@/components/shared/ui/molecules';
import { SuperAIModal } from '@/components/shared/ui/organisms';
import { AI4U_PALETTE } from '@/components/shared/ui/tokens/palette';
import { useServicesContext } from '@/context';
import { useColors, usePerformanceMonitoring } from '@/hooks';
import { ServiceSuperCategory } from '@/types/service';
import { getServicesStructuredData, getPageMetaTags } from '@/utils/seo';
import { getRelatedLinks } from '@/data/internalLinkingStrategy';
import { SHADOW_TOKENS } from '@/components/shared/ui/tokens/theme';
import { COMPONENT_SPACING, SPACING_TOKENS } from '@/components/shared/ui/tokens/spacing';
import { TEXT_VARIANTS } from '@/components/shared/ui/tokens/typography';

const Services: React.FC = () => {
  const colors = useColors();
  const [isSuperAIModalOpen, setIsSuperAIModalOpen] = useState(false);
  const [expandedAxes, setExpandedAxes] = useState<Record<string, boolean>>({});

  const toggleAxis = (axisId: string) => {
    const isExpanding = !expandedAxes[axisId];
    setExpandedAxes(prev => ({
      ...prev,
      [axisId]: isExpanding
    }));

    if (isExpanding) {
      // Pequeño delay para dejar que la animación de Collapse comience
      setTimeout(() => {
        const element = document.getElementById(axisId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const { 
    getFilteredServices,
    getServicesBySuperCategory
  } = useServicesContext();

  usePerformanceMonitoring('services', { lcp: 2500, fcp: 1800 });

  const metaTags = getPageMetaTags('services');
  const structuredData = getServicesStructuredData();
  const relatedLinks = getRelatedLinks('/servicios');

  // Definición de los 4 ejes con su estilo y contenido del Pitch
  const axes = [
    {
      id: ServiceSuperCategory.OPERATION,
      title: 'Operación',
      subtitle: 'Eficiencia continua',
      description: 'Optimiza tiempo y recursos.',
      color: colors.palette.black,
      bgColor: colors.palette.accentColors.orange,
      textColor: colors.palette.black,
      accentColor: colors.palette.black
    },
    {
      id: ServiceSuperCategory.STRATEGY,
      title: 'Estrategia',
      subtitle: 'Data real',
      description: 'Decisiones con ventaja competitiva.',
      color: colors.palette.black,
      bgColor: colors.palette.info,
      textColor: colors.palette.white,
      accentColor: colors.palette.white
    },
    {
      id: ServiceSuperCategory.EDUCATION,
      title: 'Educación',
      subtitle: 'Evolución humana',
      description: 'Tu equipo dominando la IA.',
      color: colors.palette.white,
      bgColor: colors.palette.black,
      textColor: colors.palette.white,
      accentColor: colors.palette.accentColors.orange
    },
    {
      id: ServiceSuperCategory.TRANSFORMATION,
      title: 'Transformación',
      subtitle: 'Infraestructura IA',
      description: 'Diseñada para escalar.',
      color: colors.palette.black,
      bgColor: colors.palette.accentColors.green,
      textColor: colors.palette.black,
      accentColor: colors.palette.black
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: colors.contrast.background,
      position: 'relative'
    }}>
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co/servicios"
        structuredData={structuredData}
      />

      {/* Hero Section - Los 4 Ejes de AI4U */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section, 
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative Element */}
        <Typography 
          sx={{ 
            position: 'absolute', 
            top: -12, 
            right: -6, 
            fontSize: { xs: '20rem', md: '35rem' }, 
            fontWeight: 400, 
            color: colors.palette.white, 
            opacity: 0.03,
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          04
        </Typography>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} lg={8} sx={{ pr: { lg: 10 } }}>
              <Typography 
                sx={{ 
                  color: colors.palette.accentColors.orange, 
                  fontWeight: 400, 
                  letterSpacing: 4,
                  fontSize: '1.2rem',
                  mb: 4,
                  display: 'block',
                  ...TEXT_VARIANTS.ui.code
                }}
              >
                // ai4u lab // 2026
              </Typography>
              <Giant sx={{ 
                color: colors.palette.white, 
                mb: 6,
                lineHeight: 0.85,
                fontSize: { xs: '3.5rem', md: '8rem' },
                letterSpacing: '-0.05em',
                fontWeight: 400,
                maxWidth: '1000px'
              }}>
                Nuestros 4 <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>ejes</Box> de servicio
              </Giant>
              <BodyText sx={{ 
                fontSize: '1.8rem', 
                fontWeight: 400, 
                color: colors.palette.white,
                maxWidth: '800px',
                mb: 10,
                lineHeight: 1.1,
                opacity: 0.9
              }}>
                En AI4U, abordamos la Inteligencia Artificial desde cuatro frentes clave para transformar tu operación, potenciar tu estrategia, educar a tu equipo y escalar tu infraestructura.
              </BodyText>

              {/* Quick Links to Axes */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: { xs: 8, lg: 0 } }}>
                {axes.map((axis) => (
                  <Button 
                    key={axis.id}
                    variant="outline"
                    onClick={() => toggleAxis(axis.id)}
                    sx={{ 
                      borderColor: 'rgba(255,255,255,0.2)',
                      color: colors.palette.white,
                      borderRadius: 0,
                      px: 4,
                      py: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: axis.bgColor,
                        bgcolor: axis.bgColor,
                        color: axis.textColor,
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    {axis.title}
                  </Button>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} lg={4} sx={{ mt: { xs: 8, lg: 0 } }}>
              <Box sx={{ 
                p: 6, 
                bgcolor: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative'
              }}>
                <Box sx={{ position: 'absolute', top: -1, left: -1, width: 40, height: 40, borderTop: '1px solid orange', borderLeft: '1px solid orange' }} />
                <Stack spacing={6}>
                  {axes.map((axis, idx) => (
                    <Box 
                      key={axis.id} 
                      onClick={() => toggleAxis(axis.id)}
                      sx={{ 
                        display: 'flex', 
                        gap: 4, 
                        alignItems: 'flex-start',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(15px)',
                          '& .idx': { color: colors.palette.accentColors.orange }
                        }
                      }}
                    >
                      <Typography className="idx" sx={{ 
                        fontWeight: 400, 
                        fontSize: '1.2rem', 
                        color: 'rgba(255,255,255,0.7)',
                        fontFamily: '"Necto Mono", monospace',
                        mt: 0.5,
                        transition: 'color 0.3s ease'
                      }}>
                        0{idx + 1}
                      </Typography>
                      <Box>
                        <Typography sx={{ fontSize: '1.5rem', fontWeight: 400, color: colors.palette.white, textTransform: 'none', mb: 1, lineHeight: 1 }}>
                          {axis.title}
                        </Typography>
                        <Typography sx={{ color: colors.palette.white, opacity: 0.95, fontWeight: 400, fontSize: '1rem' }}>
                          {axis.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Secciones de los 4 Ejes */}
      {axes.map((axis, index) => {
        const axisServices = getServicesBySuperCategory(axis.id);
        
        return (
          <Box 
            key={axis.id}
            id={axis.id}
            sx={{ 
              py: COMPONENT_SPACING.layout.section, 
              bgcolor: axis.bgColor,
              color: axis.textColor,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Number */}
            <Typography 
              sx={{ 
                position: 'absolute', 
                top: -6, 
                right: 2.5, 
                fontSize: { xs: '15rem', md: '25rem' }, 
                fontWeight: 400, 
                color: axis.accentColor, 
                opacity: expandedAxes[axis.id] ? 0.2 : 0.1,
                zIndex: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                transition: 'all 0.4s ease'
              }}
            >
              0{index + 1}
            </Typography>

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
              <Grid container spacing={0} alignItems="flex-start">
                {/* Header del Eje */}
                <Grid item xs={12} lg={4} sx={{ pr: { lg: 10 }, mb: { xs: 8, lg: 0 } }}>
                  <Box sx={{ position: { lg: 'sticky' }, top: 150 }}>
                    <Typography 
                      sx={{ 
                        color: axis.accentColor, 
                        fontWeight: 400, 
                        letterSpacing: 4,
                        fontSize: '1rem',
                        mb: 4,
                        display: 'block',
                        ...TEXT_VARIANTS.ui.code
                      }}
                    >
                      // {axis.subtitle}
                    </Typography>
                    <H1 sx={{ 
                      fontWeight: 400, 
                      textTransform: 'none', 
                      fontSize: { xs: '3.5rem', md: '6.5rem' },
                      lineHeight: 0.85,
                      letterSpacing: '-0.05em',
                      mb: 6,
                      color: 'inherit'
                    }}>
                      {axis.title}
                    </H1>
                    <BodyText sx={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 400, 
                      lineHeight: 1.1,
                      maxWidth: '500px',
                      mb: 8,
                      color: 'inherit',
                      opacity: 0.9
                    }}>
                      {axis.description}
                    </BodyText>
                    <Button 
                      variant="outline"
                      sx={{ 
                        borderColor: axis.textColor, 
                        color: axis.textColor,
                        borderRadius: 0,
                        px: 6,
                        py: 3,
                        fontSize: '1.2rem',
                        borderWidth: '2px',
                        '&:hover': {
                          bgcolor: axis.textColor,
                          color: axis.bgColor,
                          transform: 'translateY(-5px)',
                          borderColor: axis.textColor
                        },
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}
                      onClick={() => toggleAxis(axis.id)}
                    >
                      {expandedAxes[axis.id] ? 'Cerrar eje' : 'Explorar soluciones'}
                      <Box sx={{ 
                        display: 'flex', 
                        transform: expandedAxes[axis.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s ease'
                      }}>
                        <GeometricIcon type="arrow-right" size="small" color="inherit" />
                      </Box>
                    </Button>
                  </Box>
                </Grid>

                {/* Grid de Servicios del Eje */}
                <Grid item xs={12} lg={8}>
                  <Collapse in={expandedAxes[axis.id]} timeout={600}>
                    <Grid container spacing={4}>
                      {axisServices.map((service, sIdx) => (
                        <Grid item xs={12} sm={6} key={service.id} sx={{ mt: { md: sIdx % 2 !== 0 ? 10 : 0 } }}>
                          <Box sx={{ 
                            animation: expandedAxes[axis.id] ? `fadeInUp 0.6s ease forwards ${sIdx * 0.1}s` : 'none',
                            opacity: 0,
                            '@keyframes fadeInUp': {
                              from: { opacity: 0, transform: 'translateY(40px)' },
                              to: { opacity: 1, transform: 'translateY(0)' }
                            }
                          }}>
                            <ServiceCard 
                              service={service}
                              showPrice={false}
                              onClick={service.id === 'super-ai' ? () => setIsSuperAIModalOpen(true) : undefined}
                            />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Collapse>
                  
                  {!expandedAxes[axis.id] && (
                    <Box sx={{ 
                      height: '400px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      border: `1px solid ${alpha(axis.textColor, 0.1)}`,
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        '& .bg-text': { opacity: 0.1, transform: 'scale(1.1)' },
                        '& .btn-explore': { opacity: 1, transform: 'translateY(0)' }
                      }
                    }}
                    onClick={() => toggleAxis(axis.id)}
                    >
                      <Typography className="bg-text" sx={{ 
                        fontWeight: 400, 
                        fontSize: '12rem', 
                        color: axis.textColor, 
                        opacity: 0.05,
                        transition: 'all 0.5s ease',
                        userSelect: 'none'
                      }}>
                        {axis.title.substring(0, 3)}
                      </Typography>
                      <Box className="btn-explore" sx={{ 
                        position: 'absolute', 
                        opacity: 0.5, 
                        transform: 'translateY(20px)',
                        transition: 'all 0.5s ease',
                        textAlign: 'center'
                      }}>
                        <Typography sx={{ fontWeight: 400, letterSpacing: 4, fontSize: '0.9rem', ...TEXT_VARIANTS.ui.code }}>
                          // CLICK PARA EXPLORAR //
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Container>
          </Box>
        );
      })}

      {/* Proceso Section (Mantenida pero adaptada) */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section, 
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative */}
        <Box sx={{ 
          position: 'absolute', 
          bottom: '10%', 
          left: '5%', 
          fontSize: '12rem', 
          fontWeight: 400, 
          color: 'rgba(255,255,255,0.03)',
          zIndex: 0,
          userSelect: 'none',
          pointerEvents: 'none'
        }}>
          método
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={12}>
            <H1 sx={{ 
              fontWeight: 400, 
              textTransform: 'none', 
              fontSize: { xs: '3.5rem', md: '7rem' },
              lineHeight: 0.85,
              letterSpacing: '-0.05em',
              color: colors.palette.white
            }}>
              Método <Box component="span" sx={{ bgcolor: colors.palette.white, color: colors.palette.black, px: 2, display: 'inline-block', transform: 'rotate(1deg)' }}>directo</Box>
            </H1>
            <Grid container spacing={0}>
              {[
                { n: '01', t: 'Diagnóstico', d: 'Oportunidades reales.' },
                { n: '02', t: 'Priorización', d: 'Foco en resultados.' },
                { n: '03', t: 'Desarrollo', d: 'IA a tu medida.' },
                { n: '04', t: 'Despliegue', d: 'Integración + Soporte.' }
              ].map((step, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Box sx={{ 
                    borderLeft: `1px solid rgba(255,255,255,0.1)`, 
                    p: 6,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.02)',
                      borderColor: colors.palette.accentColors.orange
                    }
                  }}>
                    <Typography sx={{ color: colors.palette.accentColors.orange, fontSize: '1.2rem', mb: 4, ...TEXT_VARIANTS.ui.code }}>
                      // {step.n}
                    </Typography>
                    <Typography sx={{ fontSize: '2rem', fontWeight: 400, mb: 2, color: colors.palette.white, textTransform: 'none', lineHeight: 1 }}>
                      {step.t}
                    </Typography>
                    <BodyText sx={{ fontWeight: 400, color: colors.palette.white, opacity: 0.8, fontSize: '1.1rem' }}>
                      {step.d}
                    </BodyText>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Final */}
      <Box sx={{ 
        py: 30, 
        bgcolor: colors.palette.accentColors.orange,
        color: colors.palette.black,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decoration */}
        <Box sx={{ position: 'absolute', top: '10%', right: '10%', width: 300, height: 300, border: '1px solid rgba(0,0,0,0.1)', transform: 'rotate(15deg)' }} />
        <Box sx={{ position: 'absolute', bottom: '10%', left: '10%', width: 200, height: 200, border: '1px solid rgba(0,0,0,0.1)', transform: 'rotate(-10deg)' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={10} alignItems="center" textAlign="center">
            <Giant sx={{ 
              color: colors.palette.black,
              fontSize: { xs: '4rem', md: '10rem' },
              lineHeight: 0.8,
              fontWeight: 400,
              letterSpacing: '-0.05em'
            }}>
              ¿Empezamos?
            </Giant>
            <DiagnosticCTA 
              sx={{ 
                height: 'auto',
                py: 4,
                px: 12, 
                fontSize: '2rem',
                borderRadius: 0,
                bgcolor: colors.palette.black,
                color: colors.palette.white,
                border: 'none',
                fontWeight: 400,
                '&:hover': {
                  transform: 'scale(1.05) translateY(-10px)',
                  boxShadow: `0px 20px 40px rgba(0,0,0,0.2)`
                }
              }}
              text="Agendar consulta gratuita"
            />
          </Stack>
        </Container>
      </Box>

      {/* SEO Internal Linking */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <RelatedPages 
          pages={relatedLinks}
          title="Sigue explorando:"
          variant="horizontal"
        />
      </Container>

      <SuperAIModal 
        open={isSuperAIModalOpen}
        onClose={() => setIsSuperAIModalOpen(false)}
      />
    </Box>
  );
};

export default Services;
