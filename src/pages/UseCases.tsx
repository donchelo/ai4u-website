import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { 
  Giant,
  H1, 
  H2, 
  H3, 
  BodyText, 
  GeometricIcon, 
  SEOHead,
  Button,
  OptimizedImage 
} from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, RelatedPages } from '../components/shared/ui/molecules';
import { SurfaceProvider } from '../context';
import { clients } from '../data/clients';
import { featuredProjects } from '../data/featuredProjects';
import { useColors, usePerformanceMonitoring } from '../hooks';
import { getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const UseCases = () => {
  const colors = useColors();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  usePerformanceMonitoring('use-cases', { lcp: 2500, fcp: 1800 });
  const metaTags = getPageMetaTags('cases');
  
  // Estado para el carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Obtener enlaces contextuales para la página Cases
  const relatedLinks = getRelatedLinks('/casos-de-uso');

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
  }, []);

  // Calcular cuántas tarjetas son visibles
  const getVisibleCards = useCallback(() => {
    if (isMobile) return 1;
    if (theme.breakpoints.down('sm')) return 2;
    if (theme.breakpoints.down('md')) return 3;
    return 4; // Siempre mostrar 4 en desktop
  }, [isMobile, theme]);

  // Navegar al cliente anterior
  const handlePrevious = useCallback(() => {
    if (isNavigating || !scrollContainerRef.current) return;
    
    setIsNavigating(true);
    const container = scrollContainerRef.current;
    const cardWidth = getCardWidth();
    const scrollAmount = cardWidth; // Navegar de 1 en 1 para mostrar cliente nuevo
    
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });

    // Actualizar el índice actual
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      return newIndex < 0 ? clients.length - 1 : newIndex;
    });

    // Resetear el estado de navegación después de la animación
    setTimeout(() => setIsNavigating(false), 500);
  }, [isNavigating, getCardWidth]);

  // Navegar al siguiente cliente
  const handleNext = useCallback(() => {
    if (isNavigating || !scrollContainerRef.current) return;
    
    setIsNavigating(true);
    const container = scrollContainerRef.current;
    const cardWidth = getCardWidth();
    const scrollAmount = cardWidth; // Navegar de 1 en 1 para mostrar cliente nuevo
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

    // Actualizar el índice actual
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      return newIndex >= clients.length ? 0 : newIndex;
    });

    // Resetear el estado de navegación después de la animación
    setTimeout(() => setIsNavigating(false), 500);
  }, [isNavigating, getCardWidth]);

  // Navegar a un cliente específico
  const scrollToClient = useCallback((index: number) => {
    if (isNavigating || !scrollContainerRef.current) return;
    
    setIsNavigating(true);
    setCurrentIndex(index);
    const container = scrollContainerRef.current;
    const cardWidth = getCardWidth();
    
    // Scroll a la posición en la primera copia de los clientes
    container.scrollTo({
      left: (index + clients.length) * cardWidth,
      behavior: 'smooth'
    });

    setTimeout(() => setIsNavigating(false), 500);
  }, [isNavigating, getCardWidth]);

  // Efecto para inicializar el carrusel en la posición correcta
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = getCardWidth();
      // Inicializar en la primera copia de los clientes
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
      
      // Si llegamos al final (tercera copia), saltar al inicio (primera copia)
      if (currentPosition >= totalWidth - containerWidth - cardWidth) {
        container.scrollTo({
          left: cardWidth * clients.length,
          behavior: 'auto'
        });
      }
      
      // Si llegamos al inicio (antes de la primera copia), saltar al final (segunda copia)
      if (currentPosition <= cardWidth) {
        container.scrollTo({
          left: cardWidth * clients.length,
          behavior: 'auto'
        });
      }

      // Actualizar el índice actual basado en la posición del scroll
      const visibleIndex = Math.round(currentPosition / cardWidth) % clients.length;
      setCurrentIndex(visibleIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isNavigating, getCardWidth]);

  // Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Solo manejar si no estamos en un input o textarea
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
      {/* SEO Head */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co/casos-de-uso"
      />

      {/* Clients Carousel Section - Inspiración WHITE_MINIMAL */}
      <Box sx={{ 
        py: { xs: 10, md: 18 },
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.white,
        color: colors.palette.black,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <H1 sx={{ 
            mb: 10, 
            fontWeight: 900,
            textTransform: 'uppercase',
            color: colors.palette.black,
            fontSize: { xs: '3rem', md: '6rem' }
          }}>
            NUESTROS <Box component="span" sx={{ bgcolor: colors.palette.accentColors.orange, color: colors.palette.white, px: 2 }}>CLIENTES</Box>
          </H1>

          <Box sx={{ position: 'relative', mb: 8 }}>
            <Box
              ref={scrollContainerRef}
              sx={{
                display: 'flex',
                gap: 4,
                scrollBehavior: 'smooth',
                '&::-webkit-scrollbar': { display: 'none' },
                overflow: 'hidden',
                px: 2
              }}
            >
              {infiniteClients.map((client, index) => (
                <Box
                  key={`${client.id}-${index}`}
                  sx={{
                    flex: '0 0 auto',
                    width: { 
                      xs: '100%', 
                      sm: 'calc(50% - 16px)', 
                      md: 'calc(33.333% - 24px)', 
                      lg: 'calc(25% - 24px)' 
                    }
                  }}
                >
                  <Card 
                    variant="default" 
                    sx={{ 
                      height: '300px',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 4,
                      borderWidth: '4px',
                      '&:hover': {
                        transform: 'translate(8px, -8px)',
                        boxShadow: `12px 12px 0px ${colors.contrast.text.primary}`,
                      }
                    }}
                  >
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box
                        component="img"
                        src={client.logo}
                        alt={client.name}
                        sx={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
                      />
                    </Box>
                    <BodyText sx={{ textAlign: 'center', fontWeight: 800, textTransform: 'uppercase', mt: 2 }}>
                      {client.sector}
                    </BodyText>
                  </Card>
                </Box>
              ))}
            </Box>

            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                left: -20,
                top: '50%',
                bgcolor: colors.palette.black,
                color: colors.palette.white,
                '&:hover': { bgcolor: colors.palette.gray[800] }
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: -20,
                top: '50%',
                bgcolor: colors.palette.black,
                color: colors.palette.white,
                '&:hover': { bgcolor: colors.palette.gray[800] }
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>

          <BodyText sx={{ fontSize: '1.5rem', fontWeight: 500, maxWidth: '800px' }}>
            ALIANZAS EN INNOVACIÓN.
          </BodyText>
        </Container>
      </Box>

      {/* Portafolio de Innovación - Proyectos Destacados */}
      <Box sx={{ 
        py: { xs: 15, md: 25 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <SurfaceProvider surface="black">
          <Container maxWidth="xl">
            <H1 sx={{ 
              mb: 10, 
              fontWeight: 900,
              textTransform: 'uppercase',
              color: colors.palette.white,
              fontSize: { xs: '3rem', md: '6rem' },
              lineHeight: 0.9
            }}>
              PORTAFOLIO DE <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>INNOVACIÓN</Box>
            </H1>

            <Grid container spacing={8}>
              {featuredProjects.map((project) => (
                <Grid item xs={12} md={6} key={project.id}>
                  <Card 
                    variant="default" 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 0,
                      borderWidth: '4px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translate(12px, -12px)',
                        boxShadow: `-12px 12px 0px ${colors.palette.white}`,
                        '& .project-image': {
                          transform: 'scale(1.05)',
                        }
                      }
                    }}
                  >
                    <Box sx={{ 
                      width: '100%', 
                      aspectRatio: '16/9', 
                      overflow: 'hidden',
                      borderBottom: `4px solid ${colors.palette.white}`,
                      bgcolor: alpha(colors.palette.white, 0.05)
                    }}>
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      sx={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: 'top',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ 
                      display: 'inline-block', 
                      bgcolor: colors.palette.white, 
                      color: colors.palette.black,
                      px: 2,
                      py: 0.5,
                      mb: 2,
                      alignSelf: 'flex-start',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      textTransform: 'uppercase'
                    }}>
                      {project.category}
                    </Box>
                    <H3 sx={{ 
                      fontWeight: 900, 
                      textTransform: 'uppercase', 
                      mb: 2,
                      color: colors.palette.white
                    }}>
                      {project.title}
                    </H3>
                    <BodyText sx={{ 
                      mb: 4, 
                      color: alpha(colors.palette.white, 0.7),
                      flex: 1
                    }}>
                      {project.description}
                    </BodyText>
                    <Button 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      sx={{ 
                        alignSelf: 'flex-start',
                        borderColor: colors.palette.white,
                        color: colors.palette.white,
                        borderWidth: '3px',
                        fontWeight: 900,
                        '&:hover': {
                          bgcolor: colors.palette.white,
                          color: colors.palette.black,
                          borderColor: colors.palette.white
                        }
                      }}
                    >
                      VER PROYECTO EN VIVO
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </SurfaceProvider>
      </Box>

      {/* Results Section - Inspiración ORANGE_PUNCH */}
      <Box sx={{ 
        py: { xs: 15, md: 25 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.white,
        color: colors.palette.black,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <SurfaceProvider surface="white">
          <Container maxWidth="xl">
            <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={6}>
              <H1 sx={{ fontWeight: 900, textTransform: 'uppercase', mb: 6, lineHeight: 0.9 }}>
                RESULTADOS QUE <Box component="span" sx={{ bgcolor: colors.palette.black, color: colors.palette.white, px: 2 }}>HABLAN</Box>
              </H1>
              <BodyText sx={{ fontSize: '2rem', fontWeight: 600, lineHeight: 1.2 }}>
                IA QUE GENERA CRECIMIENTO REAL.
              </BodyText>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                {[
                  { label: 'OPTIMIZACIÓN TIEMPO OPERATIVO', value: 'ALTA' },
                  { label: 'INCREMENTO EFICIENCIA', value: 'SIGNIFICATIVO' },
                  { label: 'DISPONIBILIDAD CONTINUA', value: '24/7' }
                ].map((item, idx) => (
                  <Box key={idx} sx={{ borderLeft: `12px solid ${colors.palette.accentColors.orange}`, pl: 4 }}>
                    <H2 sx={{ fontWeight: 900, fontSize: '5rem', lineHeight: 1 }}>{item.value}</H2>
                    <BodyText sx={{ fontWeight: 800, textTransform: 'uppercase' }}>{item.label}</BodyText>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
        </SurfaceProvider>
      </Box>

      {/* CTA Section - Inspiración GREEN_FRESH */}
      <Box sx={{ 
        py: { xs: 15, md: 25 }, 
        px: { xs: 4, md: 8, lg: 12 },
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <SurfaceProvider surface="black">
          <Container maxWidth="lg">
            <Stack spacing={8} textAlign="center" alignItems="center">
              <Giant sx={{ color: colors.palette.white }}>
                ¿LISTO PARA SER EL PRÓXIMO ÉXITO?
              </Giant>
              <DiagnosticCTA sx={{ height: '100px', px: 10, fontSize: '1.8rem', bgcolor: colors.palette.white, color: colors.palette.black }} />
            </Stack>
          </Container>
        </SurfaceProvider>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Container maxWidth="lg">
        <RelatedPages 
          pages={relatedLinks}
          title="También podrías estar interesado en:"
          variant="horizontal"
        />
      </Container>
    </Box>
  );
};

export default UseCases;
