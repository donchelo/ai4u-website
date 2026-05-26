import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, IconButton, Container, Stack, Fade, GlobalStyles } from '@mui/material';
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
    title: 'AI4U: El Futuro de la Productividad',
    subtitle: 'Potenciando el talento humano con Arquitecturas de IA',
    content: 'Mariano Garcia Posada | Rionegro, Antioquia',
    type: 'title',
    theme: 'BLACK_MODERN'
  },
  {
    title: '¿Cuánto vale el tiempo perdido?',
    subtitle: 'El costo de la ineficiencia manual',
    content: 'El 60% del tiempo operativo en una PYME se desperdicia en tareas que una máquina ya puede hacer.',
    type: 'content',
    theme: 'GRAY_MODERN',
    category: 'el gancho'
  },
  {
    title: 'La Carga de lo Manual',
    subtitle: 'Identificando el dolor del cliente',
    content: [
      'Las PYMEs colombianas destinan el 40-60% de su tiempo a tareas repetitivas.',
      'Falta de tiempo para estrategia e innovación.',
      'Brecha tecnológica creciente vs grandes corporaciones.'
    ],
    type: 'content',
    theme: 'WHITE_MINIMAL',
    category: 'el problema'
  },
  {
    title: 'Un Gigante Desatendido',
    subtitle: 'El mercado de las PYMEs en Colombia',
    content: [
      '+5.4 Millones de PYMEs buscando eficiencia.',
      'Foco inicial: Antioquia (Rionegro/Medellín).',
      'Necesidad urgente de transformación digital a precio justo.'
    ],
    type: 'content',
    theme: 'BLACK_MODERN',
    category: 'oportunidad'
  },
  {
    title: 'Arquitecturas de IA a Medida',
    subtitle: 'Nuestra Solución',
    content: 'Diseñamos e implementamos sistemas de IA que liberan hasta el 70% del tiempo operativo mediante agentes y flujos autónomos.',
    type: 'section',
    theme: 'SUPER_AI_NEON',
    category: 'solución'
  },
  {
    title: 'Automatización Inteligente',
    subtitle: 'Nuestro Producto Core',
    content: [
      'Agentes autónomos (OpenAI/Claude).',
      'Automatización de flujos operativos a medida.',
      'Chatbots omnicanal y Data Entry automático.',
      'Dashboards de control en tiempo real.'
    ],
    type: 'product',
    theme: 'WHITE_MINIMAL',
    category: 'producto'
  },
  {
    title: 'Velocidad, Precio y Cercanía',
    subtitle: 'Nuestra Propuesta de Valor',
    content: [
      'Implementación en 3 a 14 días (vs meses).',
      'Precio PYME: Desde $2.5M COP.',
      'Soporte local en Rionegro y Medellín (en español).',
      'Enfoque Humano: Potenciar, no reemplazar.'
    ],
    type: 'offer',
    theme: 'GRAY_MODERN',
    category: 'valor'
  },
  {
    title: 'De Diagnóstico a Producción',
    subtitle: 'Nuestra Metodología en 14 días',
    content: [
      'Día 1: Diagnóstico inicial (identificamos cuellos de botella).',
      'Día 2-10: Configuración e integración técnica.',
      'Día 11-13: Pruebas y validación del sistema.',
      'Día 14: Entrega y capacitación continua.'
    ],
    type: 'content',
    theme: 'WHITE_MINIMAL',
    category: 'proceso'
  },
  {
    title: 'Tracción: Resultados Reales',
    subtitle: 'Validación del Mercado',
    content: [
      '+$65.5M COP en ventas históricas.',
      '39 servicios implementados y funcionando.',
      'Modelo validado en sectores de moda, educación y logística.'
    ],
    type: 'content',
    theme: 'BLACK_MODERN',
    category: 'tracción'
  },
  {
    title: 'Líderes que confían en AI4U',
    subtitle: 'Casos de Éxito Corporativos',
    content: 'Universidad EAFIT, TRUE (Moda), Impact Hub, IHS Solutions, entre otros.',
    type: 'section',
    theme: 'GREEN_FRESH',
    category: 'validación'
  },
  {
    title: 'TRUE: Moda Inteligente',
    subtitle: 'Caso de Éxito 1',
    content: [
      'Problema: Equipo saturado con creación de contenido manual.',
      'Solución: Flujo de IA para generación de assets digitales.',
      'Resultado: 6 horas diarias liberadas para el equipo creativo.'
    ],
    type: 'content',
    theme: 'WHITE_MINIMAL',
    category: 'casos'
  },
  {
    title: 'EAFIT: IA en el Campo',
    subtitle: 'Caso de Éxito 2',
    content: [
      'Proyecto: Formación de docentes rurales en herramientas de IA.',
      'Impacto: Cerrando la brecha digital desde la base educativa.',
      'Rol: AI4U como habilitador tecnológico de vanguardia.'
    ],
    type: 'content',
    theme: 'GRAY_MODERN',
    category: 'casos'
  },
  {
    title: 'Ventaja Competitiva',
    subtitle: 'AI4U vs El Resto',
    content: [
      'Vs Freelancers: Soporte local, garantía y continuidad.',
      'Vs Agencias: Real automatización de procesos, no solo marketing.',
      'Vs Consultoras: 10x más rápido y 1/20 del precio.'
    ],
    type: 'content',
    theme: 'BLACK_MODERN',
    category: 'competencia'
  },
  {
    title: 'Estrategia Comercial',
    subtitle: 'Go-to-Market',
    content: [
      'Alianzas con Cámaras de Comercio regionales.',
      'LinkedIn Ads y Webinars B2B especializados.',
      'Marketing de referidos y alianzas con agencias de marketing.'
    ],
    type: 'content',
    theme: 'WHITE_MINIMAL',
    category: 'estrategia'
  },
  {
    title: 'Low-code / High-Impact',
    subtitle: 'Nuestra Tecnología',
    content: 'Utilizamos OpenAI y Claude para construir infraestructuras robustas, escalables y fáciles de mantener.',
    type: 'section',
    theme: 'SUPER_AI_NEON',
    category: 'tecnología'
  },
  {
    title: 'Impacto Social y Talento',
    subtitle: 'Evolución del Empleo',
    content: [
      'Creamos empleos de alto valor digital.',
      'Empoderamos a los equipos operativos con IA.',
      'Reducción de huella de carbono (operación 100% digital).'
    ],
    type: 'content',
    theme: 'GREEN_FRESH',
    category: 'impacto'
  },
  {
    title: 'El Equipo AI4U',
    subtitle: 'Pasión por la Eficiencia',
    content: [
      'Liderado por Mariano Garcia Posada.',
      'CEO & Dev Fullstack especializado en IA.',
      'Sólida red de consultores y partners tecnológicos.'
    ],
    type: 'content',
    theme: 'GRAY_MODERN',
    category: 'equipo'
  },
  {
    title: 'Proyecciones Financieras',
    subtitle: 'Crecimiento Sostenible',
    content: [
      'Año 1: $63M COP proyectados.',
      'Crecimiento base del 10% anual.',
      'Punto de equilibrio alcanzado desde el mes 1.'
    ],
    type: 'content',
    theme: 'BLACK_MODERN',
    category: 'finanzas'
  },
  {
    title: 'Nuestra Petición',
    subtitle: 'Fondo Emprender',
    content: [
      'Solicitud: $27,612,800 COP.',
      'Objetivo: Hardware de alto rendimiento y escalamiento comercial.',
      'Visión: Liderar la transformación de las 1000 PYMEs más grandes de Antioquia.'
    ],
    type: 'offer',
    theme: 'WHITE_MINIMAL',
    category: 'el pedido'
  },
  {
    title: '¿Construimos el futuro?',
    subtitle: 'AI4U: Tu Socio de Ingeniería IA',
    content: 'Hablemos sobre cómo transformar tu negocio hoy.',
    type: 'cta',
    theme: 'BLACK_MODERN',
    category: 'cierre'
  }
];

const getThemeStyles = (themeName: SlideTheme) => {
  switch (themeName) {
    case 'GRAY_MODERN':
      return { bg: AI4U_PALETTE.gray[100], text: AI4U_PALETTE.black, accent: AI4U_PALETTE.black, logoMode: 'light' as const };
    case 'BLACK_MODERN':
      return { bg: AI4U_PALETTE.black, text: AI4U_PALETTE.white, accent: AI4U_PALETTE.white, logoMode: 'dark' as const };
    case 'WHITE_MINIMAL':
      return { bg: AI4U_PALETTE.white, text: AI4U_PALETTE.black, accent: AI4U_PALETTE.black, logoMode: 'light' as const };
    case 'GREEN_FRESH':
      return { bg: AI4U_PALETTE.accentColors.mint, text: AI4U_PALETTE.black, accent: AI4U_PALETTE.black, logoMode: 'light' as const };
    case 'SUPER_AI_NEON':
      return { bg: AI4U_PALETTE.black, text: AI4U_PALETTE.white, accent: AI4U_PALETTE.white, logoMode: 'dark' as const, glow: true };
    default:
      return { bg: AI4U_PALETTE.white, text: AI4U_PALETTE.black, accent: AI4U_PALETTE.black, logoMode: 'light' as const };
  }
};

const PitchFondoEmprender: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const navigate = useNavigate();
  const current = slides[currentSlide];
  const styles = getThemeStyles(current.theme);

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % slides.length), []);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length), []);

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
    if (!isPaused) timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <Box sx={{ minHeight: 'calc(100vh - 64px)', bgcolor: AI4U_PALETTE.black, display: 'flex', flexDirection: 'column', position: 'relative', transition: 'background-color 0.8s ease' }}>
      <GlobalStyles styles={{ body: { overflowX: 'hidden' } }} />
      <Box sx={{ height: '8px', width: '100%', bgcolor: 'rgba(255,255,255,0.1)', position: 'relative', zIndex: 10 }}>
        <Box sx={{ height: '100%', width: `${progress}%`, bgcolor: styles.accent, transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.8s ease', boxShadow: styles.glow ? `0 0 20px ${styles.accent}` : 'none' }} />
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: styles.bg, transition: 'background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', py: { xs: 4, md: 8 } }}>
        <Fade in={true} key={currentSlide} timeout={800}>
          <Container maxWidth="lg" sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', py: { xs: 4, md: 6 }, position: 'relative', zIndex: 2 }}>
              {current.category && (
                <Typography variant="overline" sx={{ color: styles.accent, fontWeight: 400, letterSpacing: 4, fontSize: TEXT_VARIANTS.ui.caption.fontSize, mb: 1, display: 'block', textShadow: styles.glow ? `0 0 10px ${styles.accent}` : 'none', ...TEXT_VARIANTS.ui.code }}>
                  // {current.category}
                </Typography>
              )}
              <Typography sx={{ color: styles.text, fontWeight: 400, ...TEXT_VARIANTS.display.medium, fontSize: { xs: '2.2rem', md: '3.5rem', lg: '4.8rem' }, lineHeight: 1.1, letterSpacing: '-0.02em', mb: { xs: 4, md: 6 }, maxWidth: '1000px' }}>
                {current.title}
              </Typography>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 8 }} alignItems="flex-start">
                <Box sx={{ flex: 1, width: '100%' }}>
                  {current.subtitle && (
                    <Typography variant="h2" sx={{ color: styles.text, opacity: 0.8, fontWeight: 300, ...TEXT_VARIANTS.display.small, fontSize: { xs: '1.1rem', md: '1.8rem', lg: '2.4rem' }, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                      {current.subtitle}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ flex: 1.5, width: '100%' }}>
                  {Array.isArray(current.content) ? (
                    <Stack spacing={3}>
                      {current.content.map((line, i) => (
                        <Box key={i} sx={{ borderLeft: `${SPACING_TOKENS.borderWidth[2]}px solid ${styles.accent}`, pl: 3 }}>
                          <Typography sx={{ color: styles.text, ...TEXT_VARIANTS.body.regular, fontSize: { xs: '0.9rem', md: '1.2rem', lg: '1.6rem' }, fontWeight: 400, lineHeight: 1.5 }}>
                            {line}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  ) : (
                    <Typography sx={{ color: styles.text, ...TEXT_VARIANTS.body.large, fontSize: { xs: '1.1rem', md: '1.6rem', lg: '2rem' }, fontWeight: 400, lineHeight: 1.5, opacity: 0.9 }}>
                      {current.content}
                    </Typography>
                  )}
                </Box>
              </Stack>
            </Box>
          </Container>
        </Fade>
        <Box sx={{ position: 'absolute', top: 30, right: 40, zIndex: 5, opacity: 0.6 }}>
          <Logo variant="desktop" sx={{ height: 28, filter: styles.logoMode === 'dark' ? 'invert(1)' : 'none' }} />
        </Box>
        <Typography sx={{ position: 'absolute', bottom: -20, left: 20, fontSize: { xs: '15rem', md: '25rem' }, fontWeight: 400, color: styles.text, opacity: 0.02, zIndex: 1, pointerEvents: 'none', userSelect: 'none', lineHeight: 0.8 }}>
          {String(currentSlide + 1).padStart(2, '0')}
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', bottom: { xs: 20, md: 30 }, right: { xs: 20, md: 30 }, display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)', p: 1, px: 2, borderRadius: 4, border: '1px solid rgba(255,255,255,0.05)', zIndex: 100, opacity: { xs: 0.8, md: 0.4 }, transition: 'all 0.3s ease', '&:hover': { opacity: 1, bgcolor: 'rgba(0,0,0,0.6)', transform: 'translateY(-5px)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' } }}>
        <IconButton onClick={() => navigate(ROUTES.HOME)} size="small" sx={{ color: 'white', p: 0.5 }}><HomeIcon fontSize="small" /></IconButton>
        <Box sx={{ width: 1, height: 16, bgcolor: 'rgba(255,255,255,0.2)', mx: 0.5 }} />
        <Stack direction="row" spacing={0.5}>
          <IconButton onClick={prevSlide} size="small" sx={{ color: 'white', p: 0.5 }}><PrevIcon fontSize="small" /></IconButton>
          <IconButton onClick={() => setIsPaused(!isPaused)} size="small" sx={{ color: isPaused ? 'white' : styles.accent, p: 0.5, transition: 'all 0.3s ease' }}>{isPaused ? <PlayIcon fontSize="small" /> : <PauseIcon fontSize="small" />}</IconButton>
          <IconButton onClick={nextSlide} size="small" sx={{ color: 'white', p: 0.5 }}><NextIcon fontSize="small" /></IconButton>
        </Stack>
        <Box sx={{ width: 1, height: 16, bgcolor: 'rgba(255,255,255,0.2)', mx: 0.5 }} />
        <Typography sx={{ color: 'white', fontWeight: 400, fontSize: '0.75rem', opacity: 0.8, minWidth: 40, textAlign: 'center' }}>{currentSlide + 1}/{slides.length}</Typography>
        {current.type === 'cta' && (<IconButton href={`https://${APP_CONFIG.CONTACT.CALENDLY}`} target="_blank" size="small" sx={{ bgcolor: styles.accent, color: styles.bg, p: 0.5, '&:hover': { opacity: 0.8, bgcolor: styles.accent } }}><LaunchIcon fontSize="small" /></IconButton>)}
      </Box>
    </Box>
  );
};

export default PitchFondoEmprender;
