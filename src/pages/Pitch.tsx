import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, IconButton, LinearProgress, Container, Paper, Stack, Fade, useTheme, GlobalStyles } from '@mui/material';
import { 
  ArrowBackIosNew as PrevIcon, 
  ArrowForwardIos as NextIcon,
  Home as HomeIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Launch as LaunchIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';
import { SPACING_TOKENS } from '../components/shared/ui/tokens/spacing';
import { TEXT_VARIANTS } from '../components/shared/ui/tokens/typography';
import { ROUTES, APP_CONFIG } from '../utils/constants';
import Logo from '../components/shared/ui/atoms/Logo';

// Definición de Temas Visuales
type SlideTheme = 'GRAY_MODERN' | 'BLACK_MODERN' | 'WHITE_MINIMAL' | 'GREEN_FRESH' | 'SUPER_AI_NEON';

interface Slide {
  title: string;
  subtitle?: string;
  content: string | string[];
  type: 'title' | 'content' | 'section' | 'product' | 'offer' | 'cta';
  theme: SlideTheme;
  category?: string;
}

const slides: Slide[] = [
  {
    title: 'Transformación Inteligente',
    subtitle: 'AI4U + Alimentos Corona',
    content: 'Elevando la distribución de proteínas al siguiente nivel con Infraestructura de IA.',
    type: 'title',
    theme: 'BLACK_MODERN'
  },
  {
    title: 'Investigación: Alimentos Corona',
    subtitle: 'Líder en Distribución de Proteínas',
    content: [
      'Operación masiva de Pollo, Pescado y Cerdo en Antioquia.',
      'Canales críticos: Minimercados, Tienda a Tienda (TAT) y HORECA.',
      'Modelo de negocio basado en frescura y logística capilar.'
    ],
    type: 'content',
    theme: 'WHITE_MINIMAL'
  },
  {
    title: 'Dolores Operativos',
    subtitle: 'Identificando barreras de crecimiento',
    content: [
      'Cuellos de botella por procesos manuales y digitación lenta.',
      'Falta de visibilidad en tiempo real de la operación nacional.',
      'Dependencia de personal para tareas repetitivas de bajo valor.'
    ],
    type: 'content',
    theme: 'GRAY_MODERN'
  },
  {
    title: 'Automatizaciones',
    subtitle: 'Lo Operativo: Eficiencia 24/7',
    content: 'Transformamos tareas repetitivas en procesos autónomos e infalibles.',
    type: 'section',
    theme: 'BLACK_MODERN',
    category: 'operativo'
  },
  {
    title: 'Chatbots Inteligentes',
    subtitle: 'Pedidos Omnicanal WhatsApp',
    content: [
      'Gestión automática de órdenes de compra sin intervención humana.',
      'Atención 24/7 para el canal TAT y Minimercados.',
      'Sincronización instantánea con el inventario y CRM.'
    ],
    type: 'product',
    theme: 'WHITE_MINIMAL',
    category: 'operativo'
  },
  {
    title: 'Data Entry Automático',
    subtitle: 'Cero Errores de Digitación',
    content: [
      'Extracción inteligente de datos de facturas y documentos (OCR).',
      'Ingreso automático a ERP y sistemas contables.',
      'Liberación de +20 horas semanales de carga administrativa.'
    ],
    type: 'product',
    theme: 'BLACK_MODERN',
    category: 'operativo'
  },
  {
    title: 'Auditorías Internas con IA',
    subtitle: 'Control y Calidad Garantizada',
    content: [
      'Validación automática de procesos operativos y cumplimiento.',
      'Detección de anomalías en facturación y logística.',
      'Reportes de auditoría generados en segundos, no semanas.'
    ],
    type: 'product',
    theme: 'GREEN_FRESH',
    category: 'operativo'
  },
  {
    title: 'Visión por Computadora',
    subtitle: 'Cámaras Inteligentes en Bodegas',
    content: [
      'Monitoreo automático de stock y movimiento de mercancía.',
      'Control de calidad visual de proteínas y empaques.',
      'Seguridad proactiva y detección de riesgos en tiempo real.'
    ],
    type: 'product',
    theme: 'WHITE_MINIMAL',
    category: 'operativo'
  },
  {
    title: 'Sitios Web con IA',
    subtitle: 'Optimización para Conversión',
    content: [
      'Diseño de plataformas B2B inteligentes para pedidos web.',
      'Experiencia de usuario personalizada según el perfil del cliente.',
      'Arquitectura optimizada para máxima velocidad y fiabilidad.'
    ],
    type: 'product',
    theme: 'GRAY_MODERN',
    category: 'operativo'
  },
  {
    title: 'Data Analysis',
    subtitle: 'Lo Estratégico: El Poder de los Datos',
    content: 'Convierte la información de tu operación en tu mayor ventaja competitiva.',
    type: 'section',
    theme: 'BLACK_MODERN',
    category: 'estratégico'
  },
  {
    title: 'Dashboards Inteligentes',
    subtitle: 'Visibilidad Total del Negocio',
    content: [
      'Análisis avanzado de ventas, mermas y rentabilidad por zona.',
      'Visualización clara para la toma de decisiones ejecutivas.',
      'Predicción sutil de tendencias basada en datos históricos.'
    ],
    type: 'product',
    theme: 'WHITE_MINIMAL',
    category: 'estratégico'
  },
  {
    title: 'Investigación HORECA',
    subtitle: 'Expansión Nacional Nacional',
    content: [
      'Mapeo exhaustivo de Hoteles y Restaurantes en todo el país.',
      'Identificación de zonas con mayor potencial de crecimiento.',
      'Estrategia de penetración de mercado basada en datos geográficos.'
    ],
    type: 'product',
    theme: 'GREEN_FRESH',
    category: 'estratégico'
  },
  {
    title: 'El Siguiente Nivel',
    subtitle: 'Super AI Infrastructure',
    content: 'La cúspide de la autonomía: una IA que no solo sugiere, sino que ejecuta.',
    type: 'section',
    theme: 'SUPER_AI_NEON',
    category: 'superAi'
  },
  {
    title: 'Super AI',
    subtitle: 'Tu Empleado Digital Autónomo',
    content: [
      'IA conectada directamente a todos tus sistemas operativos.',
      'Capacidad de actuar y decidir con base en objetivos de negocio.',
      'Integración profunda que sustituye procesos complejos.'
    ],
    type: 'product',
    theme: 'SUPER_AI_NEON',
    category: 'superAi'
  },
  {
    title: 'Autonomía Total',
    subtitle: 'Control de Sistemas y Objetivos',
    content: [
      'La IA opera el computador y los sistemas como un humano experto.',
      'Ejecución autónoma de tareas administrativas y logísticas.',
      'Enfoque total en resultados y cumplimiento de KPIs.'
    ],
    type: 'product',
    theme: 'SUPER_AI_NEON',
    category: 'superAi'
  },
  {
    title: 'Metodología AI-First',
    subtitle: 'Transformación Real desde el Núcleo',
    content: 'No adaptamos la IA a tu negocio; construimos tu infraestructura personalizada.',
    type: 'content',
    theme: 'BLACK_MODERN'
  },
  {
    title: 'Casos de Éxito',
    subtitle: 'Líderes que ya confían en AI4U',
    content: 'Empresas que han transformado su operación mediante nuestra infraestructura de IA.',
    type: 'content',
    theme: 'WHITE_MINIMAL'
  },
  {
    title: '¿Por qué AI4U?',
    subtitle: 'Tu Socio de Ingeniería Dedicado',
    content: 'No somos un proveedor de software; somos tu equipo de ingeniería de IA personalizado.',
    type: 'content',
    theme: 'GRAY_MODERN'
  },
  {
    title: 'Diagnóstico Gratuito',
    subtitle: 'Inicia tu Transformación',
    content: [
      'Evaluación profunda de tu operación actual sin costo.',
      'Identificación de Quick Wins con IA para Alimentos Corona.',
      'Entrega de un Roadmap estratégico de implementación.'
    ],
    type: 'offer',
    theme: 'GRAY_MODERN'
  },
  {
    title: 'Agendemos Ahora',
    subtitle: 'El Futuro es Hoy',
    content: 'Conversemos sobre cómo potenciar Alimentos Corona con Inteligencia Artificial.',
    type: 'cta',
    theme: 'BLACK_MODERN'
  }
];

const clientLogos = [
  '/assets/images/cases/logo-true.png',
  '/assets/images/cases/logo-eafit.png',
  '/assets/images/cases/logo-tamaprint.png',
  '/assets/images/cases/logo-flexoimpresos.png',
  '/assets/images/cases/logo-magdalena.png',
  '/assets/images/cases/logo-hua-naturals.png'
];

const getThemeStyles = (themeName: SlideTheme) => {
  switch (themeName) {
    case 'GRAY_MODERN':
      return {
        bg: AI4U_PALETTE.gray[100],
        text: AI4U_PALETTE.black,
        accent: AI4U_PALETTE.black,
        logoMode: 'light' as const
      };
    case 'BLACK_MODERN':
      return {
        bg: AI4U_PALETTE.black,
        text: AI4U_PALETTE.white,
        accent: AI4U_PALETTE.white,
        logoMode: 'dark' as const
      };
    case 'WHITE_MINIMAL':
      return {
        bg: AI4U_PALETTE.white,
        text: AI4U_PALETTE.black,
        accent: AI4U_PALETTE.black,
        logoMode: 'light' as const
      };
    case 'GREEN_FRESH':
      return {
        bg: AI4U_PALETTE.accentColors.green,
        text: AI4U_PALETTE.black,
        accent: AI4U_PALETTE.black,
        logoMode: 'light' as const
      };
    case 'SUPER_AI_NEON':
      return {
        bg: AI4U_PALETTE.black,
        text: AI4U_PALETTE.white,
        accent: AI4U_PALETTE.white,
        logoMode: 'dark' as const,
        glow: true
      };
    default:
      return {
        bg: AI4U_PALETTE.white,
        text: AI4U_PALETTE.black,
        accent: AI4U_PALETTE.black,
        logoMode: 'light' as const
      };
  }
};

const Pitch: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const navigate = useNavigate();
  const current = slides[currentSlide];
  const styles = getThemeStyles(current.theme);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') navigate(ROUTES.HOME);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, navigate]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isPaused) {
      timer = setInterval(nextSlide, 8000);
    }
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <Box 
      sx={{ 
        minHeight: 'calc(100vh - 64px)', 
        bgcolor: AI4U_PALETTE.black, 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        transition: 'background-color 0.8s ease'
      }}
    >
      <GlobalStyles styles={{
        body: { overflowX: 'hidden' }
      }} />

      {/* Premium Progress Bar */}
      <Box sx={{ height: '8px', width: '100%', bgcolor: 'rgba(255,255,255,0.1)', position: 'relative', zIndex: 10 }}>
        <Box 
          sx={{ 
            height: '100%', 
            width: `${progress}%`, 
            bgcolor: styles.accent,
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.8s ease',
            boxShadow: styles.glow ? `0 0 20px ${styles.accent}` : 'none'
          }} 
        />
      </Box>

      {/* Main Slide Stage */}
      <Box 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          bgcolor: styles.bg,
          transition: 'background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          py: { xs: 4, md: 8 } // Margen para que respire verticalmente
        }}
      >
        <Fade in={true} key={currentSlide} timeout={800}>
          <Container maxWidth="lg" sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', py: { xs: 4, md: 6 }, position: 'relative', zIndex: 2 }}>
              
              {/* Category Tag */}
              {current.category && (
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: styles.accent, 
                    fontWeight: 400, 
                    letterSpacing: 4,
                    fontSize: TEXT_VARIANTS.ui.caption.fontSize,
                    mb: 1,
                    display: 'block',
                    textShadow: styles.glow ? `0 0 10px ${styles.accent}` : 'none',
                    ...TEXT_VARIANTS.ui.code
                  }}
                >
                  // {current.category}
                </Typography>
              )}

              {/* Title Section - GIGANTE PERO CONTROLADO */}
              <Typography 
                sx={{ 
                  color: styles.text,
                  fontWeight: 400,
                  ...TEXT_VARIANTS.display.medium,
                  fontSize: { xs: '2.2rem', md: '3.5rem', lg: '4.8rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  textTransform: 'none',
                  mb: { xs: 4, md: 6 },
                  maxWidth: '1000px'
                }}
              >
                {current.title}
              </Typography>

              {/* Subtitle & Content Split */}
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 8 }} alignItems="flex-start">
                <Box sx={{ flex: 1, width: '100%' }}>
                  {current.subtitle && (
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        color: styles.text,
                        opacity: 0.8,
                        fontWeight: 300,
                        ...TEXT_VARIANTS.display.small,
                        fontSize: { xs: '1.1rem', md: '1.8rem', lg: '2.4rem' },
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {current.subtitle}
                    </Typography>
                  )}
                </Box>
                
                <Box sx={{ flex: 1.5, width: '100%' }}>
                  {current.title === 'Casos de Éxito' ? (
                    <Box sx={{ mt: 1 }}>
                      <Typography 
                        sx={{ 
                          color: styles.text,
                          ...TEXT_VARIANTS.body.large,
                          fontSize: { xs: '0.9rem', md: '1.2rem', lg: '1.5rem' },
                          fontWeight: 400,
                          mb: 3,
                          opacity: 0.9,
                          lineHeight: 1.6
                        }}
                      >
                        {Array.isArray(current.content) ? current.content[0] : current.content}
                      </Typography>
                      <Stack 
                        direction="row" 
                        spacing={3} 
                        flexWrap="wrap" 
                        alignItems="center"
                        sx={{ gap: 3, mt: 2 }}
                      >
                        {clientLogos.map((logo, idx) => (
                          <Box 
                            key={idx}
                            component="img"
                            src={logo}
                            sx={{ 
                              height: { xs: 30, md: 45, lg: 55 },
                              width: 'auto',
                              filter: styles.bg === AI4U_PALETTE.white ? 'grayscale(1) contrast(1.2)' : 'brightness(0) invert(1)',
                              opacity: 0.8,
                              transition: 'all 0.3s ease',
                              '&:hover': { 
                                transform: 'scale(1.1)',
                                opacity: 1,
                                filter: styles.bg === AI4U_PALETTE.white ? 'none' : 'brightness(0) invert(1)'
                              }
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  ) : Array.isArray(current.content) ? (
                    <Stack spacing={3}>
                      {current.content.map((line, i) => (
                        <Box key={i} sx={{ borderLeft: `${SPACING_TOKENS.borderWidth[2]}px solid ${styles.accent}`, pl: 3 }}>
                          <Typography 
                            sx={{ 
                              color: styles.text,
                              ...TEXT_VARIANTS.body.regular,
                              fontSize: { xs: '0.9rem', md: '1.2rem', lg: '1.6rem' },
                              fontWeight: 400,
                              lineHeight: 1.5
                            }}
                          >
                            {line}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  ) : (
                    <Typography 
                      sx={{ 
                        color: styles.text,
                        ...TEXT_VARIANTS.body.large,
                        fontSize: { xs: '1.1rem', md: '1.6rem', lg: '2rem' },
                        fontWeight: 400,
                        lineHeight: 1.5,
                        opacity: 0.9
                      }}
                    >
                      {current.content}
                    </Typography>
                  )}
                </Box>
              </Stack>
            </Box>
          </Container>
        </Fade>

        {/* Floating Logo - Más discreto */}
        <Box sx={{ position: 'absolute', top: 3, right: 4, zIndex: 5, opacity: 0.6 }}>
          <Logo variant="desktop" sx={{ height: 28, filter: styles.logoMode === 'dark' ? 'invert(1)' : 'none' }} />
        </Box>

        {/* Big Background Number */}
        <Typography 
          sx={{ 
            position: 'absolute', 
            bottom: -2.5, 
            left: 2.5, 
            fontSize: { xs: '15rem', md: '25rem' }, 
            fontWeight: 400, 
            color: styles.text, 
            opacity: 0.02,
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            lineHeight: 0.8
          }}
        >
          {String(currentSlide + 1).padStart(2, '0')}
        </Typography>
      </Box>

      {/* Floating Glass Controls - Rediseñados para no obstruir */}
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          display: 'flex', 
          alignItems: 'center',
          gap: 1.5,
          bgcolor: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(10px)',
          p: 1,
          px: 2,
          borderRadius: 4,
          border: '1px solid rgba(255,255,255,0.05)',
          zIndex: 100,
          opacity: { xs: 0.8, md: 0.4 }, // Más visible en móvil por defecto
          transition: 'all 0.3s ease',
          '&:hover': {
            opacity: 1,
            bgcolor: 'rgba(0,0,0,0.6)',
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }
        }}
      >
        <IconButton 
          onClick={() => navigate(ROUTES.HOME)} 
          size="small"
          sx={{ color: 'white', p: 0.5 }}
        >
          <HomeIcon fontSize="small" />
        </IconButton>

        <Box sx={{ width: 1, height: 16, bgcolor: 'rgba(255,255,255,0.2)', mx: 0.5 }} />

        <Stack direction="row" spacing={0.5}>
          <IconButton onClick={prevSlide} size="small" sx={{ color: 'white', p: 0.5 }}>
            <PrevIcon fontSize="small" />
          </IconButton>
          
          <IconButton 
            onClick={() => setIsPaused(!isPaused)} 
            size="small"
            sx={{ 
              color: isPaused ? 'white' : styles.accent,
              p: 0.5,
              transition: 'all 0.3s ease'
            }}
          >
            {isPaused ? <PlayIcon fontSize="small" /> : <PauseIcon fontSize="small" />}
          </IconButton>

          <IconButton onClick={nextSlide} size="small" sx={{ color: 'white', p: 0.5 }}>
            <NextIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Box sx={{ width: 1, height: 16, bgcolor: 'rgba(255,255,255,0.2)', mx: 0.5 }} />

        <Typography sx={{ color: 'white', fontWeight: 400, fontSize: '0.75rem', opacity: 0.8, minWidth: 40, textAlign: 'center' }}>
          {currentSlide + 1}/{slides.length}
        </Typography>

        {current.type === 'cta' && (
          <IconButton 
            href={`https://${APP_CONFIG.CONTACT.CALENDLY}`}
            target="_blank"
            size="small"
            sx={{ 
              bgcolor: styles.accent, 
              color: styles.bg,
              p: 0.5,
              '&:hover': { opacity: 0.8, bgcolor: styles.accent }
            }}
          >
            <LaunchIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Pitch;
