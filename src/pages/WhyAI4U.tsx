import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  Avatar, 
  IconButton,
  Typography
} from '@mui/material';
import { H1, H2, H3, BodyText, Button, GeometricIcon, PixelArtImage } from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, ServicesButton } from '../components/shared/ui/molecules';

const WhyAI4U = () => {
  return (
    <Box sx={{ background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)' }}>
      {/* Hero Section minimalista */}
      <Box sx={{ 
        py: { xs: 8, md: 12 },
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <H1 sx={{ 
            mb: 6, 
            fontWeight: 300,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            letterSpacing: '-0.02em'
          }}>
            ¿Por qué <Box component="span" sx={{ color: '#FF5C00' }}>AI4U</Box>?
          </H1>
          <BodyText sx={{ 
            mb: 8, 
            color: 'text.secondary',
            fontSize: '1.2rem',
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: 700,
            mx: 'auto'
          }}>
            Somos el único servicio de automatización que combina asistentes robóticos evolutivos 
            con resultados garantizados en 72 horas. No solo automatizamos tareas - transformamos 
            el tiempo perdido en libertad estratégica.
          </BodyText>
        </Container>
      </Box>

      {/* Mariano Section - Destacado como la parte humana */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <H2 sx={{ 
                  mb: 4, 
                  fontWeight: 300,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}>
                  La parte humana detrás de la tecnología
                </H2>
                <BodyText sx={{ 
                  mb: 6, 
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  fontWeight: 300
                }}>
                  Detrás de cada automatización hay una mente humana que entiende tu negocio. 
                  Mariano, fundador de AI4U, combina experiencia en startups, movilidad y tecnología 
                  para crear soluciones que realmente funcionan.
                </BodyText>
                
                <Stack spacing={3} sx={{ mb: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="circle" size="small" color="#B6CA40" variant="filled" />
                    <BodyText sx={{ fontSize: '1rem' }}>Fundador de AI4U</BodyText>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="triangle" size="small" color="rgba(0,0,0,0.3)" variant="minimal" />
                    <BodyText sx={{ fontSize: '1rem' }}>Cofundador de Matt Movilidad</BodyText>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="square" size="small" color="rgba(0,0,0,0.3)" variant="minimal" />
                    <BodyText sx={{ fontSize: '1rem' }}>Especialista en automatización</BodyText>
                  </Box>
                </Stack>
                
                <Button 
                  variant="outline" 
                  size="large"
                  component="a"
                  href="https://www.linkedin.com/in/mariano3/"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'none',
                    }
                  }}
                  {...{
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  }}
                >
                  Conectar en LinkedIn
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card variant="glass" sx={{ p: 0, overflow: 'hidden', position: 'relative' }}>
                <PixelArtImage
                  src="/assets/images/mariano.jpeg"
                  pixelArtSrc="/assets/images/mariano-pixel-art.png"
                  alt="Mariano, Fundador de AI4U"
                  sx={{
                    width: '100%',
                    height: { xs: 400, md: 500 },
                  }}
                  transitionDuration={0.4}
                />
                
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: 'white',
                    p: 3,
                    opacity: 0,
                    transition: 'opacity 0.4s ease-in-out',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <BodyText sx={{ 
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    textAlign: 'center',
                    mb: 1
                  }}>
                    Pasa el mouse para ver el efecto pixel art
                  </BodyText>
                  <BodyText sx={{ 
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    textAlign: 'center',
                    opacity: 0.8
                  }}>
                    Tecnología + Creatividad
                  </BodyText>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section - Minimalista */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 8, 
            textAlign: 'center',
            fontWeight: 300,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}>
            ¿Qué nos hace diferentes?
          </H2>

          <Grid container spacing={6}>
            {[
              {
                title: "Diagnóstico Gratuito",
                description: "Evaluamos tu negocio sin costo para identificar oportunidades de automatización.",
                icon: "circle",
                color: "#B6CA40"
              },
              {
                title: "Asistentes que Evolucionan", 
                description: "A diferencia de otros servicios, nuestros asistentes aprenden y mejoran continuamente.",
                icon: "triangle",
                color: "rgba(0,0,0,0.3)"
              },
              {
                title: "Resultados Garantizados",
                description: "72 horas para implementación. ROI medible desde el primer mes.",
                icon: "square", 
                color: "rgba(0,0,0,0.3)"
              }
            ].map((benefit, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card variant="light" sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  p: 4
                }}>
                  <Box sx={{ mb: 3 }}>
                    <GeometricIcon
                      type={benefit.icon as any}
                      size="large"
                      color={benefit.color}
                      variant={idx === 0 ? "filled" : "minimal"}
                    />
                  </Box>
                  <H3 sx={{ 
                    mb: 2, 
                    fontSize: '1.3rem',
                    fontWeight: 500
                  }}>
                    {benefit.title}
                  </H3>
                  <BodyText sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    {benefit.description}
                  </BodyText>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section - Maximizando ventas */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Card variant="dark" sx={{ textAlign: 'center', p: 6 }}>
            <Box sx={{ mb: 4 }}>
              <GeometricIcon
                type="arrow-up"
                size="large"
                color="#B6CA40"
                variant="filled"
              />
            </Box>
            <H2 sx={{ 
              mb: 4,
              color: '#FFFFFF',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 300
            }}>
              ¿Listo para liberar tu tiempo estratégico?
            </H2>
            <BodyText sx={{ 
              mb: 6, 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: 600,
              mx: 'auto'
            }}>
              Agenda tu diagnóstico gratuito de 30 minutos y descubre oportunidades de automatización 
              que liberarán tu tiempo estratégico. Sin compromiso, personalizado a tu negocio.
            </BodyText>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <DiagnosticCTA />
              <ServicesButton
                variant="outline"
                size="large"
                text="VER SOLUCIONES"
              />
            </Stack>
            
            <BodyText sx={{ 
              fontStyle: 'italic', 
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem'
            }}>
              Sin compromiso • Personalizado a tu negocio • Resultados desde el primer mes
            </BodyText>
          </Card>
        </Container>
      </Box>


    </Box>
  );
};

export default WhyAI4U; 