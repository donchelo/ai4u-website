import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  alpha
} from '@mui/material';
import {
  CheckCircleOutline as CheckIcon,
  WarningAmber as ProblemIcon,
  AutoAwesome as SuperAIIcon,
  EditNote as CopyIcon,
  Groups as CoordinationIcon,
  AttachMoney as InversionIcon,
  RocketLaunch as NextIcon,
  WhatsApp as WhatsAppIcon,
  CalendarMonth as DateIcon,
  SettingsSuggest as BaseSkillsIcon,
  Psychology as BrainIcon,
  Extension as SkillIcon,
  Hearing as ListeningIcon,
  TrendingDown as GrowthIcon,
  Shield as ShieldIcon,
  Speed as SpeedIcon,
  AccessTime as TimeIcon,
  SmartToy as AvatarIcon,
  School as EducationIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';
import { TEXT_VARIANTS } from '../components/shared/ui/tokens/typography';
import { APP_CONFIG } from '../utils/constants';
import Logo from '../components/shared/ui/atoms/Logo';

const PropuestaElBarril: React.FC = () => {
  return (
    <Box sx={{
      bgcolor: AI4U_PALETTE.white,
      minHeight: '100vh',
      pb: { xs: 8, md: 12 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <Box sx={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${alpha(AI4U_PALETTE.accentColors.orange, 0.05)} 0%, transparent 70%)`,
        zIndex: 0
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '20%',
        left: -150,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${alpha(AI4U_PALETTE.accentColors.green, 0.05)} 0%, transparent 70%)`,
        zIndex: 0
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>

        {/* ═══════════════════════════════════════════ */}
        {/* HEADER                                      */}
        {/* ═══════════════════════════════════════════ */}
        <Box sx={{ pt: { xs: 6, md: 10 }, mb: 10 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 6 }}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Logo variant="desktop" sx={{ height: 40 }} />
              <Box sx={{ width: 1, height: 30, bgcolor: AI4U_PALETTE.gray[300] }} />
              <Box
                component="img"
                src="/assets/images/LOGO chumi.png"
                alt="Casa de David Producciones"
                sx={{ height: 50, objectFit: 'contain' }}
              />
              <Box sx={{ width: 1, height: 30, bgcolor: AI4U_PALETTE.gray[300] }} />
              <Box
                sx={{
                  bgcolor: AI4U_PALETTE.black,
                  p: 1.5,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: `0 4px 12px ${alpha(AI4U_PALETTE.black, 0.1)}`
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/soloBlanco_Mesadetrabajo1-ezgif.com-png-to-webp-converter_110x@2x.avif"
                  alt="El Barril Logo"
                  sx={{ height: 35, objectFit: 'contain' }}
                />
              </Box>
            </Stack>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="overline" sx={{ color: AI4U_PALETTE.accentColors.orange, fontWeight: 800, letterSpacing: 2, display: 'block' }}>
                Ai4U // Cotización Consultoría IA
              </Typography>
              <Typography variant="caption" sx={{ color: AI4U_PALETTE.gray[600], display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5, fontWeight: 600 }}>
                <DateIcon sx={{ fontSize: 14 }} /> Febrero 2026
              </Typography>
            </Box>
          </Stack>

          <Typography
            variant="h1"
            sx={{
              ...TEXT_VARIANTS.display.medium,
              color: AI4U_PALETTE.black,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.8rem' },
              lineHeight: 1.1,
              fontWeight: 900,
              textTransform: 'none'
            }}
          >
            Asadores El Barril: Consultoría AI-First.
            <br />
            <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.orange }}>Infraestructura que escala en 6 meses.</Box>
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 4 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: AI4U_PALETTE.black }} />
            <Typography variant="h6" sx={{ color: AI4U_PALETTE.gray[700], fontWeight: 500 }}>
              Preparado para: Equipo Directivo — Asadores El Barril
            </Typography>
          </Stack>
        </Box>

        {/* ═══════════════════════════════════════════ */}
        {/* ESTRUCTURA CONSULTORÍA                     */}
        {/* ═══════════════════════════════════════════ */}
        <Box sx={{ mb: 12 }}>
          <Paper elevation={0} sx={{ p: 4, bgcolor: AI4U_PALETTE.gray[50], borderRadius: 4, mb: 6, borderLeft: `6px solid ${AI4U_PALETTE.accentColors.orange}`, border: `1px solid ${AI4U_PALETTE.gray[200]}` }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, color: AI4U_PALETTE.black }}>Modelo de Consultoría Modular</Typography>
            <Typography sx={{ fontSize: '1.1rem', color: AI4U_PALETTE.black, lineHeight: 1.6, fontWeight: 500 }}>
              Esta propuesta está diseñada como un plan integral de 6 meses para transformar a Asadores El Barril en una compañía AI-First.
              <br /><br />
              <Box component="span" sx={{ fontWeight: 800 }}>Nota:</Box> Aunque se recomienda el ciclo completo para asegurar la integración, cada servicio se puede contratar de forma independiente según las prioridades del negocio.
            </Typography>
          </Paper>

          {/* ═══════════════════════════════════════════ */}
          {/* SERVICIOS                                   */}
          {/* ═══════════════════════════════════════════ */}
          <Stack spacing={4}>
            {[
              {
                id: '1',
                title: 'Diagnóstico',
                price: '$0',
                question: '¿Dónde está tu equipo hoy con la IA y qué se puede automatizar?',
                desc: 'Evaluamos el estado real de automatización del negocio: atención al cliente por WhatsApp, gestión de pedidos, creación de contenido para redes, catering y cursos online. Se evalúa un grupo de hasta 10 personas y se entrega un mapa priorizado de oportunidades.',
                duration: '1 semana',
                icon: <SearchIcon />,
                color: AI4U_PALETTE.accentColors.orange
              },
              {
                id: '2',
                title: 'Sprint Inicial',
                price: '$4.758.000',
                question: '4 días para salir con un prototipo real, construido por tu propio equipo.',
                desc: 'Taller intensivo en vivo, 6 horas/día durante 4 días. Con hasta 8 líderes, priorizamos qué automatizar primero —WhatsApp, e-commerce, o contenido— y construimos juntos el prototipo V0.1. El equipo aprende haciendo.',
                duration: '4 días',
                icon: <SpeedIcon />,
                color: AI4U_PALETTE.accentColors.orange
              },
              {
                id: '3',
                title: 'SuperAI v1.0 — Tu Primer Empleado IA',
                price: '$5.856.000',
                question: 'Un empleado que trabaja 24/7, conoce tu marca y nunca se cansa.',
                desc: 'Diseñamos tu primer agente entrenado con la voz de Asadores El Barril. Genera guiones, copy, storyboards e ideas de recetas. Incluye acceso básico (Correo, WhatsApp, Calendar, Drive) y 10 horas de vibe coding para enseñarte a entrenarlo. Las posibilidades son ilimitadas: asesor de catering, community manager, vendedor o coordinador.',
                duration: 'Implementación + Entrenamiento',
                icon: <SuperAIIcon />,
                color: AI4U_PALETTE.accentColors.green
              },
              {
                id: '4',
                title: 'Avatar Digital',
                price: '$1.464.000',
                question: 'La cara de tu marca en el mundo digital.',
                desc: 'Creación del avatar personalizado de Asadores El Barril para contenido, cursos y comunicaciones. Se entrega un lookbook completo de 50 fotos de referencia visual, listo para producción.',
                duration: 'Producción de activos',
                icon: <AvatarIcon />,
                color: AI4U_PALETTE.accentColors.orange
              },
              {
                id: '5',
                title: 'Social Listening',
                price: '$2.196.000',
                question: 'Saber en tiempo real qué dice el mundo de tu marca.',
                desc: 'Automatización activa que monitorea 24/7 las redes de Asadores El Barril o de la competencia —tú decides. Alertas, reportes y tendencias en tiempo real para capturar cada oportunidad.',
                duration: 'Monitoreo 24/7',
                icon: <ListeningIcon />,
                color: AI4U_PALETTE.accentColors.orange
              },
              {
                id: '6',
                title: 'Educación IA',
                price: '$8.800.000',
                question: 'Llevar a tu equipo al siguiente nivel.',
                desc: '4 grupos de 8 personas. Pensum co-diseñado: Framework 5D (Fluency, Delegation, Description, Diligence, Discernment). Enfocado en flujos inteligentes para e-commerce, catering y cursos. Clases virtuales personalizadas.',
                duration: '40 horas totales ($220.000/h)',
                icon: <EducationIcon />,
                color: AI4U_PALETTE.accentColors.orange
              }
            ].map((service) => (
              <Paper
                key={service.id}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: `1px solid ${AI4U_PALETTE.gray[200]}`,
                  bgcolor: service.id === '3' ? alpha(AI4U_PALETTE.black, 0.02) : AI4U_PALETTE.white,
                  position: 'relative',
                  '&:hover': {
                    borderColor: service.color,
                    boxShadow: `0 10px 30px ${alpha(service.color, 0.1)}`
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: service.color, color: service.id === '3' ? AI4U_PALETTE.black : AI4U_PALETTE.white, display: 'flex' }}>
                        {React.cloneElement(service.icon as React.ReactElement, { fontSize: 'small' })}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: AI4U_PALETTE.black }}>
                        {service.id}. {service.title}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle1" sx={{ color: service.color, fontWeight: 800, mb: 2, fontStyle: 'italic' }}>
                      "{service.question}"
                    </Typography>
                    <Typography variant="body1" sx={{ color: AI4U_PALETTE.gray[800], lineHeight: 1.7, fontWeight: 500, mb: 3 }}>
                      {service.desc}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ px: 2, py: 0.5, borderRadius: 10, bgcolor: AI4U_PALETTE.gray[100], border: `1px solid ${AI4U_PALETTE.gray[300]}` }}>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: AI4U_PALETTE.gray[700] }}>
                          DURACIÓN: {service.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ px: 2, py: 0.5, borderRadius: 10, bgcolor: alpha(AI4U_PALETTE.accentColors.orange, 0.1), border: `1px solid ${alpha(AI4U_PALETTE.accentColors.orange, 0.2)}` }}>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: AI4U_PALETTE.accentColors.orange }}>
                          CONTRATACIÓN INDEPENDIENTE
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="overline" sx={{ color: AI4U_PALETTE.gray[600], fontWeight: 800 }}>Inversión</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: AI4U_PALETTE.black }}>
                      {service.price}
                    </Typography>
                    <Typography variant="caption" sx={{ color: AI4U_PALETTE.gray[500], fontWeight: 600 }}>COP</Typography>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* ═══════════════════════════════════════════ */}
        {/* TOTAL INVERSION                             */}
        {/* ═══════════════════════════════════════════ */}
        <Box sx={{
          mb: 12,
          p: { xs: 4, md: 6 },
          bgcolor: AI4U_PALETTE.black,
          borderRadius: 6,
          color: AI4U_PALETTE.white,
          boxShadow: `0 30px 60px ${alpha(AI4U_PALETTE.black, 0.4)}`,
          textAlign: 'center'
        }}>
          <Typography variant="overline" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900, letterSpacing: 2 }}>Inversión Semestral Sugerida</Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, color: AI4U_PALETTE.white }}>$23.074.000 <Typography component="span" variant="h4" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 800 }}>COP</Typography></Typography>
          <Typography variant="h6" sx={{ color: alpha(AI4U_PALETTE.white, 0.7), fontWeight: 400, maxWidth: 600, mx: 'auto' }}>
            Un equipo completo de IA y una cultura de automatización operando por menos de lo que cuesta un solo empleado senior.
          </Typography>
        </Box>

        {/* ═══════════════════════════════════════════ */}
        {/* GARANTÍA + CTA                              */}
        {/* ═══════════════════════════════════════════ */}
        <Box sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 4, md: 8 },
          borderRadius: 6,
          background: `linear-gradient(135deg, ${AI4U_PALETTE.black} 0%, ${AI4U_PALETTE.gray[900]} 100%)`,
          color: AI4U_PALETTE.white,
          textAlign: 'center',
          boxShadow: `0 40px 80px ${alpha(AI4U_PALETTE.black, 0.4)}`,
          border: `1px solid ${alpha(AI4U_PALETTE.white, 0.1)}`
        }}>
          <Box sx={{ mb: 8, p: 4, borderRadius: 4, bgcolor: alpha(AI4U_PALETTE.accentColors.green, 0.1), border: `1px solid ${alpha(AI4U_PALETTE.accentColors.green, 0.3)}`, maxWidth: 600, mx: 'auto' }}>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
              <ShieldIcon sx={{ color: AI4U_PALETTE.accentColors.green }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 900, color: AI4U_PALETTE.accentColors.green }}>Garantía AI4U</Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: alpha(AI4U_PALETTE.white, 0.9), lineHeight: 1.7, fontWeight: 500 }}>
              Si en los primeros 30 días del Sprint Inicial no demostramos un impacto tangible en la agilidad de tu equipo, ajustamos el enfoque sin costo adicional. No entregamos código, entregamos resultados.
            </Typography>
          </Box>

          <Typography variant="h3" sx={{ fontWeight: 900, mb: 3, letterSpacing: -1 }}>¿Empezamos con el Diagnóstico?</Typography>
          <Typography variant="h6" sx={{ mb: 6, color: alpha(AI4U_PALETTE.white, 0.8), fontWeight: 400, maxWidth: '650px', mx: 'auto' }}>
            El primer paso no tiene costo ni compromiso. Solo necesitamos 1 hora de tu tiempo para mapear el futuro de Asadores El Barril.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              endIcon={<NextIcon />}
              href={`https://${APP_CONFIG.CONTACT.CALENDLY}`}
              target="_blank"
              sx={{
                bgcolor: AI4U_PALETTE.accentColors.orange,
                color: AI4U_PALETTE.white,
                px: 6, py: 2.5, borderRadius: 3,
                fontSize: '1.15rem',
                fontWeight: 900,
                textTransform: 'none',
                boxShadow: `0 20px 40px ${alpha(AI4U_PALETTE.accentColors.orange, 0.4)}`,
                '&:hover': { bgcolor: alpha(AI4U_PALETTE.accentColors.orange, 0.9), transform: 'translateY(-4px)' },
                transition: 'all 0.3s ease'
              }}
            >
              Agendar Diagnóstico ($0)
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={`https://wa.me/${APP_CONFIG.CONTACT.PHONE.replace(/\s+/g, '')}`}
              target="_blank"
              sx={{
                borderColor: alpha(AI4U_PALETTE.white, 0.4),
                color: AI4U_PALETTE.white,
                px: 6, py: 2.5, borderRadius: 3,
                fontSize: '1.15rem',
                fontWeight: 800,
                textTransform: 'none',
                '&:hover': { borderColor: AI4U_PALETTE.white, bgcolor: alpha(AI4U_PALETTE.white, 0.1), transform: 'translateY(-4px)' },
                transition: 'all 0.3s ease'
              }}
            >
              Consultar por WhatsApp
            </Button>
          </Stack>

          <Box sx={{ mt: 10, pt: 6, borderTop: `1px solid ${alpha(AI4U_PALETTE.white, 0.15)}` }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 0.5, color: AI4U_PALETTE.white }}>Mariano García Posada</Typography>
            <Typography variant="body2" sx={{ color: alpha(AI4U_PALETTE.white, 0.6), letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>CEO Ai4U // Consultoría Estratégica</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropuestaElBarril;
