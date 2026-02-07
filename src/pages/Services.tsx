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
import { ServicesPremiumHero, SuperAIModal } from '@/components/shared/ui/organisms';
import { AI4U_PALETTE } from '@/components/shared/ui/tokens/palette';
import { useServicesContext } from '@/context';
import { useColors, usePerformanceMonitoring } from '@/hooks';
import { ServiceSuperCategory } from '@/types/service';
import { getServicesStructuredData, getPageMetaTags } from '@/utils/seo';
import { getRelatedLinks } from '@/data/internalLinkingStrategy';

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
      title: 'OPERACIÓN',
      subtitle: 'EFICIENCIA CONTINUA',
      description: 'OPTIMIZA TIEMPO Y RECURSOS.',
      color: colors.palette.black,
      bgColor: colors.palette.accentColors.orange,
      textColor: colors.palette.black,
      accentColor: colors.palette.black
    },
    {
      id: ServiceSuperCategory.STRATEGY,
      title: 'ESTRATEGIA',
      subtitle: 'DATA REAL',
      description: 'DECISIONES CON VENTAJA COMPETITIVA.',
      color: colors.palette.black,
      bgColor: colors.palette.info,
      textColor: colors.palette.black,
      accentColor: colors.palette.black
    },
    {
      id: ServiceSuperCategory.EDUCATION,
      title: 'EDUCACIÓN',
      subtitle: 'EVOLUCIÓN HUMANA',
      description: 'TU EQUIPO DOMINANDO LA IA.',
      color: colors.palette.white,
      bgColor: colors.palette.black,
      textColor: colors.palette.white,
      accentColor: colors.palette.accentColors.orange
    },
    {
      id: ServiceSuperCategory.TRANSFORMATION,
      title: 'TRANSFORMACIÓN',
      subtitle: 'INFRAESTRUCTURA IA',
      description: 'DISEÑADA PARA ESCALAR.',
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

      {/* Lab Hero - Inspirado en CoutureLab / Fashion Agent */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <ServicesPremiumHero 
          title="AI4U LAB // 2026"
          maxItems={2}
        />
      </Box>

      {/* Secciones de los 4 Ejes */}
      {axes.map((axis, index) => {
        const axisServices = getServicesBySuperCategory(axis.id);
        
        return (
          <Box 
            key={axis.id}
            id={axis.id}
            sx={{ 
              py: { xs: 12, md: 20 }, 
              px: { xs: 4, md: 8, lg: 12 },
              bgcolor: axis.bgColor,
              color: axis.textColor,
              borderBottom: `2px solid ${axis.accentColor}`,
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
                top: -50, 
                right: 20, 
                fontSize: { xs: '15rem', md: '25rem' }, 
                fontWeight: 900, 
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
                        fontWeight: 900, 
                        letterSpacing: 4,
                        fontSize: '1.2rem',
                        mb: 2,
                        display: 'block'
                      }}
                    >
                      // {axis.subtitle}
                    </Typography>
                    <H1 sx={{ 
                      fontWeight: 900, 
                      textTransform: 'uppercase', 
                      fontSize: { xs: '3.5rem', md: '5rem', lg: '6.5rem' },
                      lineHeight: 0.9,
                      mb: 4,
                      color: 'inherit'
                    }}>
                      {axis.title}
                    </H1>
                    <BodyText sx={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 600, 
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
                        height: '70px',
                        px: 6,
                        fontSize: '1.1rem',
                        bgcolor: expandedAxes[axis.id] ? axis.textColor : (axis.bgColor === colors.palette.accentColors.orange || axis.bgColor === colors.palette.accentColors.green ? 'transparent' : undefined),
                        color: expandedAxes[axis.id] ? axis.bgColor : axis.textColor,
                        borderWidth: '3px',
                        '&:hover': {
                          bgcolor: axis.textColor,
                          color: axis.bgColor,
                          transform: 'translate(-4px, -4px)',
                          boxShadow: `8px 8px 0px ${axis.accentColor}`
                        },
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}
                      onClick={() => toggleAxis(axis.id)}
                    >
                      {expandedAxes[axis.id] ? 'CERRAR EJE' : 'EXPLORAR EJE'}
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
                      <Typography sx={{ fontWeight: 900, letterSpacing: 2, fontSize: '0.8rem' }}>
                        // CLICK PARA DESPLEGAR SOLUCIONES
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
        py: { xs: 10, md: 18 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <Stack spacing={10}>
            <H1 sx={{ 
              fontWeight: 900, 
              textTransform: 'uppercase', 
              mb: 4, 
              fontSize: { xs: '3rem', md: '6rem' },
              color: colors.palette.white // Asegurar que sea blanco
            }}>
              MÉTODO <Box component="span" sx={{ bgcolor: colors.palette.white, color: colors.palette.black, px: 2 }}>DIRECTO</Box>
            </H1>
            <Grid container spacing={6}>
              {[
                { n: '01', t: 'DIAGNÓSTICO', d: 'OPORTUNIDADES REALES.' },
                { n: '02', t: 'PRIORIZACIÓN', d: 'FOCO EN RESULTADOS.' },
                { n: '03', t: 'DESARROLLO', d: 'IA A TU MEDIDA.' },
                { n: '04', t: 'DESPLIEGUE', d: 'INTEGRACIÓN + SOPORTE.' }
              ].map((step, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Box sx={{ borderLeft: `8px solid ${colors.palette.accentColors.orange}`, pl: 3 }}>
                    <H2 sx={{ fontSize: '2.5rem', fontWeight: 900, mb: 1, color: colors.palette.white }}>{step.n}</H2>
                    <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', mb: 1, color: colors.palette.white }}>{step.t}</Typography>
                    <BodyText sx={{ fontWeight: 500, color: colors.palette.white, opacity: 0.8 }}>{step.d}</BodyText>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Final */}
      <Box sx={{ 
        py: { xs: 15, md: 25 }, 
        bgcolor: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="lg">
          <Stack spacing={6} alignItems="center" textAlign="center">
            <Giant sx={{ color: colors.palette.black, fontSize: { xs: '3rem', md: '8rem' } }}>
              ¿EMPEZAMOS?
            </Giant>
            <DiagnosticCTA 
              variant="primary"
              size="large"
              text="AGENDAR CONSULTA GRATUITA"
              sx={{ 
                height: '100px', 
                px: 10, 
                fontSize: '1.8rem',
                bgcolor: colors.palette.black,
                color: colors.palette.white
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
