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
import { ROUTES, APP_CONFIG } from '../utils/constants';
import Logo from '../components/shared/ui/atoms/Logo';

// Definición de Temas Visuales
type SlideTheme = 'ORANGE_PUNCH' | 'BLACK_MODERN' | 'WHITE_MINIMAL' | 'GREEN_FRESH' | 'SUPER_AI_NEON';

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
    theme: 'ORANGE_PUNCH'
  },
  {
    title: 'Automatizaciones',
    subtitle: 'Lo Operativo: Eficiencia 24/7',
    content: 'Transformamos tareas repetitivas en procesos autónomos e infalibles.',
    type: 'section',
    theme: 'BLACK_MODERN',
    category: 'OPERATIVO'
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
    category: 'OPERATIVO'
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
    category: 'OPERATIVO'
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
    category: 'OPERATIVO'
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
    category: 'OPERATIVO'
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
    theme: 'ORANGE_PUNCH',
    category: 'OPERATIVO'
  },
  {
    title: 'Data Analysis',
    subtitle: 'Lo Estratégico: El Poder de los Datos',
    content: 'Convierte la información de tu operación en tu mayor ventaja competitiva.',
    type: 'section',
    theme: 'BLACK_MODERN',
    category: 'ESTRATÉGICO'
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
    category: 'ESTRATÉGICO'
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
    category: 'ESTRATÉGICO'
  },
  {
    title: 'El Siguiente Nivel',
    subtitle: 'Super AI Infrastructure',
    content: 'La cúspide de la autonomía: una IA que no solo sugiere, sino que ejecuta.',
    type: 'section',
    theme: 'SUPER_AI_NEON',
    category: 'SUPER AI'
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
    category: 'SUPER AI'
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
    category: 'SUPER AI'
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
    theme: 'ORANGE_PUNCH'
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
    theme: 'ORANGE_PUNCH'
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
    case 'ORANGE_PUNCH':
      return {
        bg: AI4U_PALETTE.accentColors.orange,
        text: AI4U_PALETTE.white,
        accent: AI4U_PALETTE.black,
        logoMode: 'dark' as const
      };
    case 'BLACK_MODERN':
      return {
        bg: AI4U_PALETTE.black,
        text: AI4U_PALETTE.white,
        accent: AI4U_PALETTE.accentColors.orange,
        logoMode: 'dark' as const
      };
    case 'WHITE_MINIMAL':
      return {
        bg: AI4U_PALETTE.white,
        text: AI4U_PALETTE.black,
        accent: AI4U_PALETTE.accentColors.orange,
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
        bg: AI4U_PALETTE.gray[900],
        text: AI4U_PALETTE.white,
        accent: '#00F0FF', // Neon Blue
        logoMode: 'dark' as const,
        glow: true
      };
    default:
      return {
        bg: AI4U_PALETTE.white,
        text: AI4U_PALETTE.black,
        accent: AI4U_PALETTE.accentColors.orange,
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
        height: 'calc(100vh - 64px)', 
        bgcolor: AI4U_PALETTE.black, 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background-color 0.8s ease'
      }}
    >
      <GlobalStyles styles={{
        body: { overflow: 'hidden' }
      }} />

      {/* Premium Progress Bar */}
      <Box sx={{ height: 8, width: '100%', bgcolor: 'rgba(255,255,255,0.1)', position: 'relative', zIndex: 10 }}>
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
          position: 'relative'
        }}
      >
        <Fade in={true} key={currentSlide} timeout={800}>
          <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', py: 4, position: 'relative', zIndex: 2 }}>
              
              {/* Category Tag */}
              {current.category && (
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: styles.accent, 
                    fontWeight: 900, 
                    letterSpacing: 4,
                    fontSize: '1.2rem',
                    mb: 2,
                    display: 'block',
                    textShadow: styles.glow ? `0 0 10px ${styles.accent}` : 'none'
                  }}
                >
                  // {current.category}
                </Typography>
              )}

              {/* Title Section - GIGANTE */}
              <Typography 
                sx={{ 
                  color: styles.text,
                  fontWeight: 900,
                  fontSize: { xs: '3.5rem', md: '5.5rem', lg: '7.5rem' },
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  mb: 4,
                  maxWidth: '1200px'
                }}
              >
                {current.title}
              </Typography>

              {/* Subtitle & Content Split */}
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="flex-start">
                <Box sx={{ flex: 1 }}>
                  {current.subtitle && (
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        color: styles.text,
                        opacity: 0.8,
                        fontWeight: 300,
                        fontSize: { xs: '1.5rem', md: '2.5rem', lg: '3.5rem' },
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {current.subtitle}
                    </Typography>
                  )}
                </Box>
                
                <Box sx={{ flex: 1.2 }}>
                  {current.title === 'Casos de Éxito' ? (
                    <Box sx={{ mt: 2 }}>
                      <Typography 
                        sx={{ 
                          color: styles.text,
                          fontSize: { xs: '1.2rem', md: '1.8rem', lg: '2.2rem' },
                          fontWeight: 400,
                          mb: 4,
                          opacity: 0.9
                        }}
                      >
                        {Array.isArray(current.content) ? current.content[0] : current.content}
                      </Typography>
                      <Stack 
                        direction="row" 
                        spacing={4} 
                        flexWrap="wrap" 
                        alignItems="center"
                        sx={{ gap: 4, mt: 4 }}
                      >
                        {clientLogos.map((logo, idx) => (
                          <Box 
                            key={idx}
                            component="img"
                            src={logo}
                            sx={{ 
                              height: { xs: 40, md: 60, lg: 80 },
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
                        <Box key={i} sx={{ borderLeft: `4px solid ${styles.accent}`, pl: 3 }}>
                          <Typography 
                            sx={{ 
                              color: styles.text,
                              fontSize: { xs: '1.2rem', md: '1.8rem', lg: '2.2rem' },
                              fontWeight: 400,
                              lineHeight: 1.3
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
                        fontSize: { xs: '1.5rem', md: '2.2rem', lg: '2.8rem' },
                        fontWeight: 400,
                        lineHeight: 1.4,
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

        {/* Floating Logo */}
        <Box sx={{ position: 'absolute', top: 48, right: 64, zIndex: 5 }}>
          <Logo variant="desktop" sx={{ height: 48, filter: styles.logoMode === 'dark' ? 'invert(1)' : 'none' }} />
        </Box>

        {/* Big Background Number */}
        <Typography 
          sx={{ 
            position: 'absolute', 
            bottom: -50, 
            left: 20, 
            fontSize: '30rem', 
            fontWeight: 900, 
            color: styles.text, 
            opacity: 0.03,
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          {String(currentSlide + 1).padStart(2, '0')}
        </Typography>
      </Box>

      {/* Floating Glass Controls */}
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', 
          alignItems: 'center',
          gap: 2,
          bgcolor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(20px)',
          p: 1,
          px: 3,
          borderRadius: 10,
          border: '1px solid rgba(255,255,255,0.1)',
          zIndex: 100
        }}
      >
        <IconButton onClick={() => navigate(ROUTES.HOME)} sx={{ color: 'white' }}>
          <HomeIcon fontSize="small" />
        </IconButton>

        <Box sx={{ width: 1, height: 24, bgcolor: 'rgba(255,255,255,0.2)', mx: 1 }} />

        <Stack direction="row" spacing={1}>
          <IconButton onClick={prevSlide} sx={{ color: 'white' }}>
            <PrevIcon fontSize="small" />
          </IconButton>
          
          <IconButton 
            onClick={() => setIsPaused(!isPaused)} 
            sx={{ 
              color: isPaused ? 'white' : styles.accent,
              transition: 'all 0.3s ease'
            }}
          >
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </IconButton>

          <IconButton onClick={nextSlide} sx={{ color: 'white' }}>
            <NextIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Box sx={{ width: 1, height: 24, bgcolor: 'rgba(255,255,255,0.2)', mx: 1 }} />

        <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.8rem', opacity: 0.8, minWidth: 40 }}>
          {currentSlide + 1} / {slides.length}
        </Typography>

        {current.type === 'cta' && (
          <IconButton 
            href={`https://${APP_CONFIG.CONTACT.CALENDLY}`}
            target="_blank"
            sx={{ 
              bgcolor: styles.accent, 
              color: styles.bg,
              ml: 2,
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
