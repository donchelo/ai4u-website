import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography,
  Stack,
  Divider,
  useTheme,
  Collapse
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
      textColor: colors.palette.black,
      accentColor: colors.palette.black
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
        borderBottom: `${SPACING_TOKENS.spacing[1]}px solid ${colors.palette.white}`,
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
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} lg={7}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: colors.palette.accentColors.orange, 
                  fontWeight: 400, 
                  letterSpacing: 4,
                  fontSize: TEXT_VARIANTS.body.regular.fontSize,
                  mb: 2,
                  display: 'block',
                  ...TEXT_VARIANTS.ui.code
                }}
              >
                // AI4U LAB // 2026
              </Typography>
              <Giant sx={{ 
                color: colors.palette.white, 
                mb: 4,
                lineHeight: 0.85,
                ...TEXT_VARIANTS.display.giant,
                maxWidth: '900px'
              }}>
                Nuestros 4 <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>ejes</Box> de servicio
              </Giant>
              <BodyText sx={{ 
                ...TEXT_VARIANTS.body.large, 
                fontWeight: 400, 
                color: colors.palette.white,
                maxWidth: '700px',
                mb: 8,
                lineHeight: 1.2,
                opacity: 0.9
              }}>
                En AI4U, abordamos la inteligencia artificial desde cuatro frentes clave para transformar tu operación, potenciar tu estrategia, educar a tu equipo y escalar tu infraestructura.
              </BodyText>

              {/* Quick Links to Axes */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: { xs: 8, lg: 0 } }}>
                {axes.map((axis) => (
                  <Button 
                    key={axis.id}
                    variant="outline"
                    onClick={() => toggleAxis(axis.id)}
                    sx={{ 
                      borderColor: 'rgba(255,255,255,0.3)',
                      color: colors.palette.white,
                      borderRadius: 0,
                      px: 3,
                      height: 7,
                      '&:hover': {
                        borderColor: axis.bgColor,
                        bgcolor: axis.bgColor,
                        color: axis.textColor
                      }
                    }}
                  >
                    {axis.title}
                  </Button>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} lg={5}>
              <Box sx={{ 
                p: 6, 
                bgcolor: 'rgba(255,255,255,0.03)', 
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <Stack spacing={4}>
                  {axes.map((axis, idx) => (
                    <Box 
                      key={axis.id} 
                      onClick={() => toggleAxis(axis.id)}
                      sx={{ 
                        display: 'flex', 
                        gap: 3, 
                        alignItems: 'flex-start',
                        cursor: 'pointer',
                        p: 1,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.05)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      <Typography sx={{ 
                        fontWeight: 400, 
                        color: axis.accentColor === colors.palette.white ? colors.palette.accentColors.orange : axis.accentColor,
                        fontFamily: '"Necto Mono", monospace',
                        mt: 0.5
                      }}>
                        0{idx + 1}
                      </Typography>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 400, color: colors.palette.white, textTransform: 'none', mb: 0.5 }}>
                          {axis.title}
                        </Typography>
                        <Typography sx={{ color: colors.palette.white, opacity: 0.7, fontWeight: 400 }}>
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
              <Grid container spacing={10}>
                {/* Header del Eje */}
                <Grid item xs={12} lg={4}>
                  <Box sx={{ position: { lg: 'sticky' }, top: 120 }}>
                    <Typography 
                      variant="overline" 
                      sx={{ 
                        color: axis.accentColor, 
                        fontWeight: 400, 
                        letterSpacing: 4,
                        fontSize: TEXT_VARIANTS.body.regular.fontSize,
                        mb: 2,
                        display: 'block'
                      }}
                    >
                      // {axis.subtitle}
                    </Typography>
                    <H1 sx={{ 
                      fontWeight: 400, 
                      textTransform: 'none', 
                      ...TEXT_VARIANTS.display.large,
                      lineHeight: 0.9,
                      mb: 4,
                      color: 'inherit'
                    }}>
                      {axis.title}
                    </H1>
                    <BodyText sx={{ 
                      ...TEXT_VARIANTS.body.large, 
                      fontWeight: 400, 
                      lineHeight: 1.2,
                      maxWidth: '400px',
                      mb: 6,
                      color: 'inherit',
                      opacity: 0.9
                    }}>
                      {axis.description}
                    </BodyText>
                    <Button 
                      variant={axis.bgColor === colors.palette.black || axis.bgColor === colors.palette.info ? 'outline' : 'primary'}
                      sx={{ 
                        borderColor: axis.textColor, 
                        height: 9,
                        px: 6,
                        fontSize: TEXT_VARIANTS.ui.button.fontSize,
                        bgcolor: expandedAxes[axis.id] ? axis.textColor : (axis.bgColor === colors.palette.accentColors.orange || axis.bgColor === colors.palette.accentColors.green ? 'transparent' : undefined),
                        color: expandedAxes[axis.id] ? axis.bgColor : axis.textColor,
                        borderRadius: 0,
                        border: 'none',
                        '&:hover': {
                          bgcolor: axis.textColor,
                          color: axis.bgColor,
                          transform: 'translateY(-4px)',
                          boxShadow: SHADOW_TOKENS.md
                        },
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}
                      onClick={() => toggleAxis(axis.id)}
                    >
                      {expandedAxes[axis.id] ? 'Cerrar eje' : 'Explorar eje'}
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
                        <Grid item xs={12} sm={6} key={service.id}>
                          <Box sx={{ 
                            animation: expandedAxes[axis.id] ? `fadeInUp 0.6s ease forwards ${sIdx * 0.1}s` : 'none',
                            opacity: 0,
                            '@keyframes fadeInUp': {
                              from: { opacity: 0, transform: 'translateY(20px)' },
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
                      height: '300px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      border: `2px dashed ${axis.accentColor}`,
                      opacity: 0.3,
                      cursor: 'pointer',
                      '&:hover': {
                        opacity: 0.6,
                        bgcolor: 'rgba(0,0,0,0.02)'
                      }
                    }}
                    onClick={() => toggleAxis(axis.id)}
                    >
                      <Typography sx={{ fontWeight: 400, letterSpacing: 2, fontSize: '0.8rem' }}>
                        // Click para desplegar soluciones
                      </Typography>
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
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <Stack spacing={10}>
            <H1 sx={{ 
              fontWeight: 400, 
              textTransform: 'none', 
              mb: 4, 
              ...TEXT_VARIANTS.display.large,
              color: colors.palette.white
            }}>
              Método <Box component="span" sx={{ bgcolor: colors.palette.white, color: colors.palette.black, px: 2 }}>directo</Box>
            </H1>
            <Grid container spacing={6}>
              {[
                { n: '01', t: 'diagnóstico', d: 'Oportunidades reales.' },
                { n: '02', t: 'priorización', d: 'Foco en resultados.' },
                { n: '03', t: 'desarrollo', d: 'IA a tu medida.' },
                { n: '04', t: 'despliegue', d: 'Integración + soporte.' }
              ].map((step, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Box sx={{ borderLeft: `${SPACING_TOKENS.borderWidth.thick}px solid ${colors.palette.accentColors.orange}`, pl: 3 }}>
                    <H2 sx={{ ...TEXT_VARIANTS.display.small, fontWeight: 400, mb: 1, color: colors.palette.white }}>{step.n}</H2>
                    <Typography sx={{ fontWeight: 400, ...TEXT_VARIANTS.body.large, mb: 1, color: colors.palette.white }}>{step.t}</Typography>
                    <BodyText sx={{ fontWeight: 400, color: colors.palette.white, opacity: 0.8 }}>{step.d}</BodyText>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Final */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section, 
        bgcolor: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="lg">
          <Stack spacing={6} alignItems="center" textAlign="center">
            <Giant sx={{ color: colors.palette.black }}>
              ¿Empezamos?
            </Giant>
            <DiagnosticCTA 
              variant="primary"
              size="large"
              text="Agendar consulta gratuita"
              sx={{ 
                height: 13, 
                px: 6, 
                fontSize: TEXT_VARIANTS.display.small.fontSize,
                borderRadius: 0,
                bgcolor: colors.palette.black,
                color: colors.palette.white,
                border: 'none'
              }}
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
