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
import { 
  H1, 
  H2, 
  H3, 
  BodyText, 
  GeometricIcon, 
  SEOHead 
} from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, RelatedPages } from '../components/shared/ui/molecules';
import { clients } from '../data/clients';
import { useColors } from '../hooks';
import { useLanguage } from '../hooks';
import { getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const UseCases = () => {
  const colors = useColors();
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

  // Auto-play del carrusel (opcional - descomenta si quieres activarlo)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isNavigating) {
  //       handleNext();
  //     }
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [handleNext, isNavigating]);

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${colors.contrast.background} 0%, ${colors.contrast.surface} 100%)`
    }}>
      {/* SEO Head */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co/casos-de-uso"
      />

      {/* Hero Section with Client Logos */}
      <Box sx={{ 
        py: { xs: 6, md: 12 },
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          {/* Carrusel de Logos Protagonistas */}
          <Box sx={{ 
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            borderRadius: 4,
            mb: 6,
            maxWidth: '100%'
          }}>
            {/* Contenedor del carrusel */}
            <Box
              ref={scrollContainerRef}
              sx={{
                display: 'flex',
                gap: { xs: 2, sm: 2, md: 2, lg: 2 },
                scrollBehavior: 'smooth',
                scrollSnapType: 'x mandatory',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                px: { xs: 2, sm: 2, md: 3, lg: 2 },
                width: '100%',
                overflow: 'hidden'
              }}
            >
              {infiniteClients.map((client, index) => (
                <Box
                  key={`${client.id}-${index}`}
                  sx={{
                    flex: '0 0 calc(25% - 6px)', // Exactamente 4 clientes por fila en desktop
                    minWidth: { 
                      xs: 'calc(100% - 8px)', // 1 cliente en móvil
                      sm: 'calc(50% - 8px)',   // 2 clientes en tablet pequeño
                      md: 'calc(33.333% - 10px)', // 3 clientes en tablet
                      lg: 'calc(25% - 6px)'   // 4 clientes en desktop
                    },
                    scrollSnapAlign: 'start',
                    position: 'relative',
                    height: { xs: '200px', sm: '250px', md: '300px', lg: '280px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box
                    component="a"
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      textDecoration: 'none',
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    <Card 
                      variant="elevated" 
                      sx={{ 
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        backdropFilter: 'blur(20px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: `2px solid rgba(255, 255, 255, 0.1)`,
                        p: { xs: 2, sm: 2.5, md: 3, lg: 3 },
                        '&:hover': {
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                          borderColor: colors.contrast.text.primary,
                          backgroundColor: 'rgba(255, 255, 255, 0.12)',
                          transform: 'translateY(-8px) scale(1.02)'
                        }
                      }}
                    >
                      {/* Logo Principal */}
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        height: { xs: '85%', sm: '90%', md: '95%', lg: '95%' },
                        width: '100%',
                        mb: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5 }
                      }}>
                        <Box
                          component="img"
                          src={client.logo}
                          alt={`Logo de ${client.name}`}
                          sx={{
                            maxWidth: '95%',
                            maxHeight: '95%',
                            objectFit: 'contain',
                            filter: 'grayscale(0%)',
                            opacity: 1,
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                              filter: 'grayscale(0%)',
                              opacity: 1,
                              transform: 'scale(1.15)'
                            }
                          }}
                        />
                      </Box>
                      
                      {/* Información del cliente */}
                      <Box sx={{ textAlign: 'center' }}>
                        <BodyText sx={{ 
                          color: colors.contrast.text.secondary,
                          fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem', lg: '0.7rem' },
                          fontWeight: 400,
                          opacity: 0.8
                        }}>
                          {client.sector}
                        </BodyText>
                      </Box>
                    </Card>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Botones de navegación */}
            <IconButton
              onClick={handlePrevious}
              disabled={isNavigating}
              aria-label="Cliente anterior"
              sx={{
                position: 'absolute',
                left: { xs: 8, md: 16 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: colors.contrast.text.primary,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                '&:disabled': {
                  opacity: 0.5,
                  cursor: 'not-allowed'
                },
                zIndex: 2
              }}
            >
              <ChevronLeftIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
            </IconButton>

            <IconButton
              onClick={handleNext}
              disabled={isNavigating}
              aria-label="Siguiente cliente"
              sx={{
                position: 'absolute',
                right: { xs: 8, md: 16 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: colors.contrast.text.primary,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                '&:disabled': {
                  opacity: 0.5,
                  cursor: 'not-allowed'
                },
                zIndex: 2
              }}
            >
              <ChevronRightIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
            </IconButton>

            {/* Indicadores de posición */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                zIndex: 2
              }}
            >
              {/* Puntos indicadores */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {clients.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => scrollToClient(index)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: currentIndex === index 
                        ? colors.contrast.text.primary 
                        : 'rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: colors.contrast.text.primary,
                        transform: 'scale(1.2)'
                      }
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          {/* Título más pequeño */}
          <H1 sx={{ 
            mb: 4, 
            fontWeight: 300,
            fontSize: { xs: '2rem', md: '3rem' },
            letterSpacing: '-0.02em',
            color: colors.contrast.text.primary
          }}>
            {t('successCases.hero.title')}
          </H1>
          <BodyText sx={{ 
            mb: 8, 
            color: colors.contrast.text.secondary,
            fontSize: '1.1rem',
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: 700,
            mx: 'auto'
          }}>
            {t('successCases.hero.description')}
          </BodyText>
        </Container>
      </Box>

      {/* Metrics Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 6, md: 0 }
              }}>
                <H2 sx={{ 
                  mb: 4,
                  fontWeight: 300,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: colors.contrast.text.primary
                }}>
                  {t('successCases.metrics.title')}
                </H2>
                <BodyText sx={{ 
                  mb: 6,
                  color: colors.contrast.text.secondary,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  fontWeight: 300
                }}>
                  {t('successCases.metrics.description')}
                </BodyText>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                {[0, 1, 2].map((index) => (
                  <Card key={index} variant="elevated" sx={{ p: 4 }}>
                    <Stack direction="row" alignItems="center" spacing={3}>
                      <GeometricIcon 
                        type={index === 0 ? "circle" : index === 1 ? "square" : "triangle"} 
                        size="medium" 
                        color={index <= 1 ? colors.palette.accent : colors.palette.success} 
                        variant="filled" 
                      />
                      <Box>
                        <H3 sx={{ 
                          mb: 1,
                          fontWeight: 700,
                          fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                          lineHeight: 0.9,
                          color: colors.contrast.text.primary,
                          letterSpacing: '-0.02em'
                        }}>
                          {t(`successCases.metrics.items.${index}.value`)}
                        </H3>
                        <BodyText sx={{ 
                          color: colors.contrast.text.secondary,
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          fontWeight: 300
                        }}>
                          {t(`successCases.metrics.items.${index}.description`)}
                        </BodyText>
                      </Box>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <H2 sx={{ 
              mb: 3,
              fontWeight: 300,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: colors.contrast.text.primary
            }}>
              ¿Listo para ser nuestro próximo <Box component="span" sx={{ color: colors.palette.accent }}>caso de éxito</Box>?
            </H2>
            <BodyText sx={{ 
              color: colors.contrast.text.secondary,
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: 600,
              mx: 'auto'
            }}>
              Únete a las empresas que ya transformaron sus procesos con IA. Tu logo podría ser el próximo en esta galería.
            </BodyText>
          </Box>
          <DiagnosticCTA />
        </Container>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Container maxWidth="lg">
        <RelatedPages 
          pages={relatedLinks}
          title={t('common.related.title')}
          variant="horizontal"
        />
      </Container>
    </Box>
  );
};

export default UseCases; 
