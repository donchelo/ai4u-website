import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography,
  Stack,
  Divider,
  useTheme
} from '@mui/material';
import { Giant, H1, H2, BodyText, Button, SEOHead, GeometricIcon } from '../components/shared/ui/atoms';
import { ServiceCard, DiagnosticCTA, RelatedPages } from '../components/shared/ui/molecules';
import { ServicesPremiumHero } from '../components/shared/ui/organisms';
import { useServicesContext } from '../context';
import { useColors, usePerformanceMonitoring } from '../hooks';
import { ServiceSuperCategory } from '../types/service';
import { getServicesStructuredData, getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';

const Services: React.FC = () => {
  const colors = useColors();
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
      subtitle: 'EFICIENCIA 24/7',
      description: 'TRANSFORMAMOS TAREAS REPETITIVAS EN PROCESOS AUTÓNOMOS E INFALIBLES. LIBERA EL 70% DE TU TIEMPO OPERATIVO.',
      color: colors.palette.black,
      bgColor: colors.palette.white,
      textColor: colors.palette.black,
      accentColor: colors.palette.accentColors.orange
    },
    {
      id: ServiceSuperCategory.STRATEGY,
      title: 'ESTRATEGIA',
      subtitle: 'EL PODER DE LOS DATOS',
      description: 'CONVIERTE LA INFORMACIÓN DE TU OPERACIÓN EN TU MAYOR VENTAJA COMPETITIVA. DECISIONES BASADAS EN DATA REAL.',
      color: colors.palette.white,
      bgColor: colors.palette.black,
      textColor: colors.palette.white,
      accentColor: colors.palette.accentColors.orange
    },
    {
      id: ServiceSuperCategory.EDUCATION,
      title: 'EDUCACIÓN',
      subtitle: 'EVOLUCIÓN HUMANA',
      description: 'CAPACITAMOS A TU EQUIPO PARA DOMINAR LAS HERRAMIENTAS QUE ESTÁN REDEFINIENDO EL MERCADO GLOBAL.',
      color: colors.palette.black,
      bgColor: colors.palette.accentColors.green,
      textColor: colors.palette.black,
      accentColor: colors.palette.black
    },
    {
      id: ServiceSuperCategory.TRANSFORMATION,
      title: 'TRANSFORMACIÓN',
      subtitle: 'SUPER AI INFRASTRUCTURE',
      description: 'LA CÚSPIDE DE LA AUTONOMÍA: CONSTRUIMOS LA INFRAESTRUCTURA DONDE LA IA ES EL MOTOR PRINCIPAL.',
      color: colors.palette.white,
      bgColor: colors.palette.accentColors.orange,
      textColor: colors.palette.white,
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
              borderBottom: `1px solid ${colors.palette.black}`,
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
                color: axis.textColor, 
                opacity: 0.05,
                zIndex: 0,
                pointerEvents: 'none',
                userSelect: 'none'
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
                      variant={axis.bgColor === colors.palette.black ? 'outline' : 'primary'}
                      sx={{ 
                        borderColor: axis.textColor, 
                        color: axis.textColor,
                        height: '70px',
                        px: 6,
                        fontSize: '1.1rem',
                        '&:hover': {
                          bgcolor: axis.textColor,
                          color: axis.bgColor
                        }
                      }}
                      onClick={() => {
                        const nextAxis = axes[index + 1];
                        if (nextAxis) {
                          document.getElementById(nextAxis.id)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      EXPLORAR EJE
                    </Button>
                  </Box>
                </Grid>

                {/* Grid de Servicios del Eje */}
                <Grid item xs={12} lg={8}>
                  <Grid container spacing={4}>
                    {axisServices.map((service) => (
                      <Grid item xs={12} sm={6} key={service.id}>
                        <ServiceCard 
                          service={service}
                          showPrice={false}
                        />
                      </Grid>
                    ))}
                  </Grid>
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
        bgcolor: colors.palette.accentColors.orange,
        color: colors.palette.black,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <Stack spacing={10}>
            <H1 sx={{ fontWeight: 900, textTransform: 'uppercase', mb: 4, fontSize: { xs: '3rem', md: '6rem' } }}>
              MÉTODO <Box component="span" sx={{ bgcolor: colors.palette.black, color: colors.palette.white, px: 2 }}>DIRECTO</Box>
            </H1>
            <Grid container spacing={6}>
              {[
                { n: '01', t: 'DIAGNÓSTICO', d: 'IDENTIFICAMOS OPORTUNIDADES REALES.' },
                { n: '02', t: 'PRIORIZACIÓN', d: 'FOCO EN EL MÁXIMO ROI.' },
                { n: '03', t: 'DESARROLLO', d: 'INGENIERÍA DE IA A MEDIDA.' },
                { n: '04', t: 'DESPLIEGUE', d: 'INTEGRACIÓN TOTAL 24/7.' }
              ].map((step, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Box sx={{ borderLeft: `8px solid ${colors.palette.black}`, pl: 3 }}>
                    <H2 sx={{ fontSize: '2.5rem', fontWeight: 900, mb: 1 }}>{step.n}</H2>
                    <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>{step.t}</Typography>
                    <BodyText sx={{ fontWeight: 500 }}>{step.d}</BodyText>
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
        bgcolor: colors.palette.accentColors.green,
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
    </Box>
  );
};

export default Services;
