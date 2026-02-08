import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  Avatar, 
  IconButton,
  Typography,
  alpha,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Giant, H1, H2, H3, BodyText, Button, GeometricIcon, PixelArtImage, SEOHead } from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, ServicesButton, RelatedPages, ExpandableSection } from '../components/shared/ui/molecules';
import { SurfaceProvider } from '../context';
import { useColors, usePerformanceMonitoring } from '../hooks';
import { getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';
import { clients } from '../data/clients';
import { COMPONENT_SPACING, SPACING_TOKENS } from '../components/shared/ui/tokens/spacing';
import { TEXT_VARIANTS } from '../components/shared/ui/tokens/typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const WhyAI4U = () => {
  const colors = useColors();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  usePerformanceMonitoring('why-ai4u', { lcp: 2500, fcp: 1800 });

  // Estado para el carrusel de clientes
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Obtener meta tags optimizados para la página "Por qué AI4U" (ahora fusionada con casos)
  const metaTags = getPageMetaTags('why');
  
  // Obtener enlaces contextuales para la página Why AI4U
  const relatedLinks = getRelatedLinks('/por-que-ai4u');

  // Crear array de clientes duplicados para scroll infinito
  const infiniteClients = [
    ...clients, // Clientes originales
    ...clients, // Duplicado al final
    ...clients  // Duplicado adicional para transición suave
  ];

  // Calcular el ancho de cada tarjeta
  const getCardWidth = useCallback(() => {
    if (!scrollContainerRef.current) return 0;
    const container = scrollContainerRef.current;
    return container.scrollWidth / infiniteClients.length;
  }, [infiniteClients.length]);

  // Navegar al cliente anterior
  const handlePrevious = useCallback(() => {
    if (isNavigating || !scrollContainerRef.current) return;
    
    setIsNavigating(true);
    const container = scrollContainerRef.current;
    const cardWidth = getCardWidth();
    const scrollAmount = cardWidth;
    
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });

    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      return newIndex < 0 ? clients.length - 1 : newIndex;
    });

    setTimeout(() => setIsNavigating(false), 500);
  }, [isNavigating, getCardWidth]);

  // Navegar al siguiente cliente
  const handleNext = useCallback(() => {
    if (isNavigating || !scrollContainerRef.current) return;
    
    setIsNavigating(true);
    const container = scrollContainerRef.current;
    const cardWidth = getCardWidth();
    const scrollAmount = cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      return newIndex >= clients.length ? 0 : newIndex;
    });

    setTimeout(() => setIsNavigating(false), 500);
  }, [isNavigating, getCardWidth]);

  // Efecto para inicializar el carrusel en la posición correcta
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = getCardWidth();
      container.scrollTo({
        left: cardWidth * clients.length,
        behavior: 'auto'
      });
    }
  }, [getCardWidth]);

  // Efecto para manejar el scroll infinito
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isNavigating) return;
      
      const cardWidth = getCardWidth();
      const currentPosition = container.scrollLeft;
      const totalWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
      
      if (currentPosition >= totalWidth - containerWidth - cardWidth) {
        container.scrollTo({
          left: cardWidth * clients.length,
          behavior: 'auto'
        });
      }
      
      if (currentPosition <= cardWidth) {
        container.scrollTo({
          left: cardWidth * clients.length,
          behavior: 'auto'
        });
      }

      const visibleIndex = Math.round(currentPosition / cardWidth) % clients.length;
      setCurrentIndex(visibleIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isNavigating, getCardWidth]);

  // Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext]);

  return (
    <Box sx={{ 
      bgcolor: colors.contrast.background
    }}>
      {/* SEO Head con meta tags optimizados */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co/por-que-ai4u"
      />

      {/* Mariano Section - Inspiración BLACK_MODERN */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section, 
        bgcolor: colors.palette.black, 
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          fontSize: '15rem',
          fontWeight: 400,
          color: colors.palette.white,
          opacity: 0.03,
          zIndex: 1,
          userSelect: 'none',
          pointerEvents: 'none'
        }}>
          human
        </Box>

        <SurfaceProvider surface="black">
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} md={7} sx={{ pr: { md: 10 } }}>
                <Box sx={{ textAlign: 'left' }}>
                  <H1 sx={{ 
                    mb: 6, 
                    fontWeight: 400,
                    textTransform: 'none',
                    color: colors.palette.white,
                    lineHeight: 0.85,
                    fontSize: { xs: '3.5rem', md: '7rem' },
                    letterSpacing: '-0.05em'
                  }}>
                    La parte <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>humana</Box> de la IA
                  </H1>
                  
                  <Stack spacing={6} sx={{ mb: 10 }}>
                    {[
                      'Fundador de AI4U',
                      'Cofundador de Matt Movilidad',
                      'Especialista en Automatización'
                    ].map((text, idx) => (
                      <Box key={idx} sx={{ 
                        borderLeft: `1px solid ${colors.palette.accentColors.orange}`, 
                        pl: 4,
                        transform: `translateX(${idx * 20}px)` // Escalonado asimétrico
                      }}>
                        <BodyText sx={{ 
                          fontSize: '1.5rem', 
                          fontWeight: 400, 
                          textTransform: 'none', 
                          color: colors.palette.white,
                          opacity: 0.8
                        }}>
                          {text}
                        </BodyText>
                      </Box>
                    ))}
                  </Stack>
                  
                  <Box sx={{ 
                    p: 4, 
                    bgcolor: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    maxWidth: '500px',
                    mb: 6
                  }}>
                    <BodyText sx={{ 
                      color: colors.palette.white,
                      fontSize: '1.2rem',
                      lineHeight: 1.4,
                      fontWeight: 400,
                      opacity: 0.9
                    }}>
                      Experiencia en Startups, Movilidad y Tecnología. Soluciones que funcionan.
                    </BodyText>
                  </Box>
                
                <Button 
                  variant="outline" 
                  size="large"
                  component="a"
                  href="https://www.linkedin.com/in/mariano3/"
                  sx={{
                    height: 'auto',
                    py: 3,
                    px: 8,
                    fontSize: '1.2rem',
                    borderColor: colors.palette.white,
                    color: colors.palette.white,
                    borderRadius: 0,
                    '&:hover': {
                      bgcolor: colors.palette.white,
                      color: colors.palette.black,
                      transform: 'translateY(-5px)'
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={5} sx={{ mt: { xs: 8, md: 0 } }}>
              <Box sx={{ 
                border: `1px solid ${colors.palette.white}`,
                p: 2,
                position: 'relative'
              }}>
                {/* Cuadro decorativo asimétrico */}
                <Box sx={{ 
                  position: 'absolute', 
                  top: -20, 
                  left: -20, 
                  width: 100, 
                  height: 100, 
                  borderTop: `2px solid ${colors.palette.accentColors.orange}`,
                  borderLeft: `2px solid ${colors.palette.accentColors.orange}`,
                  zIndex: 3
                }} />
                
                <PixelArtImage
                  src="/assets/images/mariano.jpeg"
                  pixelArtSrc="/assets/images/mariano-pixel-art.png"
                  alt="mariano, fundador de ai4u"
                  sx={{
                    width: '100%',
                    height: { xs: 450, md: 650 },
                    display: 'block',
                    filter: 'grayscale(100%)'
                  }}
                  transitionDuration={0.4}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        </SurfaceProvider>
      </Box>

      {/* Benefits Section - Inspiración GREEN_FRESH */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section, 
        bgcolor: colors.palette.accentColors.green,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Linea asimétrica de fondo */}
        <Box sx={{ position: 'absolute', top: '20%', left: 0, width: '100%', height: '1px', bgcolor: 'rgba(0,0,0,0.1)', transform: 'rotate(-2deg)' }} />

        <SurfaceProvider surface="green">
          <Container maxWidth="xl">
            <H1 sx={{ 
              mb: 12, 
              textAlign: 'left',
              fontWeight: 400,
              textTransform: 'none',
              color: colors.palette.black,
              fontSize: { xs: '3.5rem', md: '6.5rem' },
              lineHeight: 0.9,
              letterSpacing: '-0.04em'
            }}>
              ¿Qué nos hace <br/>
              <Box component="span" sx={{ bgcolor: colors.palette.black, color: colors.palette.accentColors.green, px: 2, display: 'inline-block', transform: 'rotate(1deg)' }}>diferentes</Box>?
            </H1>

            <Grid container spacing={4} alignItems="stretch">
              {[
                {
                  title: 'Diagnóstico gratuito',
                  description: 'Identificamos oportunidades reales sin costo.',
                },
                {
                  title: 'IA que evoluciona',
                  description: 'Aprende y mejora con tu negocio.',
                },
                {
                  title: 'ROI medible',
                  description: 'Resultados desde las primeras semanas.',
                }
              ].map((benefit, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx} sx={{ mt: { md: idx * 6 } }}>
                  <Card variant="default" sx={{ 
                    height: '100%',
                    p: 6,
                    borderRadius: 0,
                    bgcolor: idx === 1 ? colors.palette.black : colors.palette.white,
                    color: idx === 1 ? colors.palette.white : colors.palette.black,
                    border: `2px solid ${colors.palette.black}`,
                    boxShadow: idx === 1 ? `15px 15px 0px ${colors.palette.white}` : `15px 15px 0px ${colors.palette.black}`,
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: 'translate(-5px, -5px)',
                      boxShadow: idx === 1 ? `25px 25px 0px ${colors.palette.white}` : `25px 25px 0px ${colors.palette.black}`,
                    }
                  }}>
                    <Typography sx={{ ...TEXT_VARIANTS.ui.code, mb: 4, opacity: 0.5 }}>
                      // 0{idx + 1}
                    </Typography>
                    <H3 sx={{ 
                      fontSize: '2.5rem',
                      fontWeight: 400,
                      mb: 3,
                      lineHeight: 1,
                      color: 'inherit',
                      textTransform: 'none'
                    }}>
                      {benefit.title}
                    </H3>
                    <BodyText sx={{ color: 'inherit', fontSize: '1.2rem', fontWeight: 400, opacity: 0.9 }}>
                      {benefit.description}
                    </BodyText>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </SurfaceProvider>
      </Box>

      {/* Clients Carousel Section (REPLACE de UseCases) */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section,
        bgcolor: colors.palette.white,
        color: colors.palette.black,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Lineas de fondo sutiles */}
        <Box sx={{ position: 'absolute', top: 0, left: '33%', width: '1px', height: '100%', bgcolor: 'rgba(0,0,0,0.03)' }} />
        <Box sx={{ position: 'absolute', top: 0, left: '66%', width: '1px', height: '100%', bgcolor: 'rgba(0,0,0,0.03)' }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <H1 sx={{ 
            mb: 12, 
            fontWeight: 400,
            textTransform: 'none',
            color: colors.palette.black,
            fontSize: { xs: '3.5rem', md: '6.5rem' },
            lineHeight: 0.9,
            letterSpacing: '-0.04em'
          }}>
            Nuestros <br/>
            <Box component="span" sx={{ bgcolor: colors.palette.accentColors.orange, color: colors.palette.white, px: 2, display: 'inline-block', transform: 'rotate(-1deg)' }}>clientes</Box>
          </H1>

          <Box sx={{ position: 'relative', mb: 10 }}>
            <Box
              ref={scrollContainerRef}
              sx={{
                display: 'flex',
                gap: 0, // Pegadas para estilo grid
                scrollBehavior: 'smooth',
                '&::-webkit-scrollbar': { display: 'none' },
                overflow: 'hidden',
              }}
            >
              {infiniteClients.map((client, index) => (
                <Box
                  key={`${client.id}-${index}`}
                  sx={{
                    flex: '0 0 auto',
                    width: { 
                      xs: '100%', 
                      sm: '50%', 
                      md: '33.333%', 
                      lg: '25%' 
                    }
                  }}
                >
                  <Card 
                    variant="default" 
                    sx={{ 
                      height: '350px',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 6,
                      borderRadius: 0,
                      border: `1px solid ${colors.palette.gray[100]}`,
                      bgcolor: colors.palette.white,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: colors.palette.black,
                        borderColor: colors.palette.black,
                        color: colors.palette.white,
                        zIndex: 5,
                        '& img': { filter: 'brightness(0) invert(1)' }
                      }
                    }}
                  >
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box
                        component="img"
                        src={client.logo}
                        alt={client.name}
                        sx={{ 
                          maxWidth: '70%', 
                          maxHeight: '70%', 
                          objectFit: 'contain',
                          filter: 'grayscale(100%)',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </Box>
                    <BodyText sx={{ textAlign: 'center', fontSize: '1rem', opacity: 0.9, mt: 2 }}>
                      {client.sector}
                    </BodyText>
                  </Card>
                </Box>
              ))}
            </Box>

            <Stack direction="row" spacing={2} sx={{ mt: 6, justifyContent: 'flex-end' }}>
              <IconButton
                onClick={handlePrevious}
                sx={{
                  bgcolor: colors.palette.black,
                  color: colors.palette.white,
                  borderRadius: 0,
                  width: 60,
                  height: 60,
                  '&:hover': { bgcolor: colors.palette.accentColors.orange }
                }}
              >
                <ChevronLeftIcon />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  bgcolor: colors.palette.black,
                  color: colors.palette.white,
                  borderRadius: 0,
                  width: 60,
                  height: 60,
                  '&:hover': { bgcolor: colors.palette.accentColors.orange }
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Stack>
          </Box>

          <BodyText sx={{ fontSize: '1.5rem', fontWeight: 400, maxWidth: '800px', opacity: 0.8 }}>
            alianzas en innovación que perduran.
          </BodyText>
        </Container>
      </Box>

      {/* Results Section (Desde UseCases) */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section, 
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Textura de fondo sutil */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />

        <SurfaceProvider surface="black">
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={0} alignItems="stretch">
            <Grid item xs={12} md={5} sx={{ mb: { xs: 8, md: 0 } }}>
              <H1 sx={{ 
                fontWeight: 400, 
                textTransform: 'none', 
                mb: 6, 
                lineHeight: 0.85,
                fontSize: { xs: '3.5rem', md: '7.5rem' },
                letterSpacing: '-0.05em'
              }}>
                Resultados que <br/>
                <Box component="span" sx={{ bgcolor: colors.palette.white, color: colors.palette.black, px: 2, display: 'inline-block' }}>hablan</Box>
              </H1>
              <BodyText sx={{ fontSize: '2rem', fontWeight: 400, lineHeight: 1.1, opacity: 0.9 }}>
                IA que genera crecimiento real y tangible.
              </BodyText>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <Stack spacing={0}>
                {[
                  { label: 'Optimización tiempo operativo', value: 'Alta' },
                  { label: 'Incremento eficiencia', value: 'Significativo' },
                  { label: 'Disponibilidad continua', value: '24/7' }
                ].map((item, idx) => (
                  <Box key={idx} sx={{ 
                    borderBottom: idx === 2 ? 'none' : '1px solid rgba(255,255,255,0.1)', 
                    py: 6,
                    pl: { md: 10 },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: { xs: 2, md: 10 }
                  }}>
                    <H2 sx={{ fontWeight: 400, fontSize: '4rem', lineHeight: 1, color: colors.palette.accentColors.orange }}>{item.value}</H2>
                    <BodyText sx={{ fontWeight: 400, textTransform: 'none', fontSize: '1.5rem', opacity: 0.9 }}>{item.label}</BodyText>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
        </SurfaceProvider>
      </Box>

      {/* Final CTA Section - Actualizado */}
      <Box sx={{ 
        py: 25, 
        bgcolor: colors.palette.white,
        color: colors.palette.black,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <SurfaceProvider surface="theme">
          <Container maxWidth="lg">
            <Stack spacing={10} textAlign="left" alignItems="flex-start">
              <Giant sx={{ 
                color: colors.palette.black, 
                fontSize: { xs: '4rem', md: '9rem' },
                lineHeight: 0.8,
                fontWeight: 400,
                letterSpacing: '-0.05em'
              }}>
                ¿Listo para ser <br/>
                el próximo <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>éxito</Box>?
              </Giant>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={4} 
              >
                <DiagnosticCTA sx={{ 
                  height: 'auto',
                  py: 4,
                  px: 10, 
                  fontSize: '1.8rem', 
                  bgcolor: colors.palette.black, 
                  color: colors.palette.white,
                  borderRadius: 0,
                  fontWeight: 400,
                  '&:hover': {
                    bgcolor: colors.palette.accentColors.orange,
                    color: colors.palette.black,
                    transform: 'translateY(-10px)'
                  }
                }} />
                <ServicesButton
                  variant="outline"
                  sx={{ 
                    height: 'auto',
                    py: 4,
                    px: 10, 
                    fontSize: '1.8rem', 
                    borderWidth: '2px', 
                    borderColor: colors.palette.black, 
                    color: colors.palette.black,
                    borderRadius: 0,
                    fontWeight: 400,
                    '&:hover': {
                      bgcolor: colors.palette.black,
                      color: colors.palette.white
                    }
                  }}
                  text="Ver soluciones"
                />
              </Stack>
            </Stack>
          </Container>
        </SurfaceProvider>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Container maxWidth="lg">
        <RelatedPages 
          pages={relatedLinks}
          title="Conoce más sobre nuestro trabajo:"
          variant="vertical"
        />
      </Container>
    </Box>
  );
};

export default WhyAI4U;
