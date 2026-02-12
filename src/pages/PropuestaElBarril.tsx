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
  TrendingUp as GrowthIcon,
  Shield as ShieldIcon,
  Speed as SpeedIcon,
  AccessTime as TimeIcon
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
            </Stack>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="overline" sx={{ color: AI4U_PALETTE.accentColors.orange, fontWeight: 800, letterSpacing: 2, display: 'block' }}>
                Ai4U // Cotización SuperAI
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
            Asadores El Barril ya tiene el mejor producto.
            <br />
            <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.orange }}>Ahora necesita la mejor operación.</Box>
          </Typography>
          
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 4 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: AI4U_PALETTE.black }} />
            <Typography variant="h6" sx={{ color: AI4U_PALETTE.gray[700], fontWeight: 500 }}>
              Preparado para: Jefe de Mercadeo — Asadores El Barril
            </Typography>
          </Stack>
        </Box>

        {/* ═══════════════════════════════════════════ */}
        {/* 1. EL PROBLEMA (DOLOR)                      */}
        {/* ═══════════════════════════════════════════ */}
        <Box sx={{ mb: 12 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <Box sx={{ p: 1, borderRadius: 1, bgcolor: AI4U_PALETTE.black, color: AI4U_PALETTE.white, display: 'flex' }}>
              <ProblemIcon fontSize="small" />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.black, letterSpacing: -0.5 }}>1. Lo que encontramos</Typography>
          </Stack>
          
          <Paper elevation={0} sx={{ p: 4, bgcolor: AI4U_PALETTE.gray[50], borderRadius: 4, mb: 4, borderLeft: `4px solid ${AI4U_PALETTE.accentColors.orange}`, border: `1px solid ${AI4U_PALETTE.gray[200]}` }}>
            <Typography sx={{ fontSize: '1.15rem', color: AI4U_PALETTE.black, lineHeight: 1.7, fontWeight: 600 }}>
              Hoy, Asadores El Barril tiene un producto de clase mundial, pero una operación fragmentada. El Jefe de Mercadeo actúa como una "isla tecnológica" intentando coordinar áreas que no hablan el mismo idioma.
            </Typography>
          </Paper>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, height: '100%', borderRadius: 4, border: `1.5px solid ${AI4U_PALETTE.gray[300]}`, position: 'relative', overflow: 'hidden', bgcolor: AI4U_PALETTE.white }}>
                <Box sx={{ position: 'absolute', top: 0, right: 0, p: 2, opacity: 0.1 }}>
                  <CopyIcon sx={{ fontSize: 60, color: AI4U_PALETTE.black }} />
                </Box>
                <Typography variant="h6" sx={{ mb: 2, color: AI4U_PALETTE.accentColors.orange, fontWeight: 800 }}>
                  Problema 01: El "Copy" sin alma
                </Typography>
                <Typography variant="body1" sx={{ color: AI4U_PALETTE.black, lineHeight: 1.6, fontWeight: 500 }}>
                  La desconfianza en la IA nace de resultados genéricos. Asadores El Barril no necesita IA que invente, necesita un asistente que <Box component="span" sx={{ fontWeight: 900 }}>entienda su esencia y organice su potencial</Box>.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, height: '100%', borderRadius: 4, border: `1.5px solid ${AI4U_PALETTE.gray[300]}`, position: 'relative', overflow: 'hidden', bgcolor: AI4U_PALETTE.white }}>
                <Box sx={{ position: 'absolute', top: 0, right: 0, p: 2, opacity: 0.1 }}>
                  <CoordinationIcon sx={{ fontSize: 60, color: AI4U_PALETTE.black }} />
                </Box>
                <Typography variant="h6" sx={{ mb: 2, color: AI4U_PALETTE.accentColors.orange, fontWeight: 800 }}>
                  Problema 02: El Caos de Coordinación
                </Typography>
                <Typography variant="body1" sx={{ color: AI4U_PALETTE.black, lineHeight: 1.6, fontWeight: 500 }}>
                  La falta de accountability entre áreas frena el crecimiento. Las tareas se "pierden" en la comunicación y no hay un hilo conductor claro.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Costo de la inacción — Ancla psicológica */}
          <Box sx={{ mt: 4, p: 3, borderRadius: 3, bgcolor: alpha(AI4U_PALETTE.accentColors.orange, 0.08), border: `1px dashed ${AI4U_PALETTE.accentColors.orange}` }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <TimeIcon sx={{ color: AI4U_PALETTE.accentColors.orange, fontSize: 28 }} />
              <Typography sx={{ color: AI4U_PALETTE.black, fontSize: '1rem', fontWeight: 600, lineHeight: 1.5 }}>
                Estimamos que la coordinación manual, los reprocesos de contenido y la falta de visibilidad le cuestan a Asadores El Barril entre <Box component="span" sx={{ fontWeight: 900, color: AI4U_PALETTE.accentColors.orange }}>$3,000 y $5,000 USD al mes</Box> en tiempo perdido, oportunidades no capturadas y sobrecarga del equipo.
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* ═══════════════════════════════════════════ */}
        {/* 2. LA VISIÓN: Asadores El Barril EN 90 DÍAS          */}
        {/* ═══════════════════════════════════════════ */}
        <Box sx={{ mb: 12 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <Box sx={{ p: 1, borderRadius: 1, bgcolor: AI4U_PALETTE.accentColors.green, color: AI4U_PALETTE.black, display: 'flex' }}>
              <GrowthIcon fontSize="small" />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.black, letterSpacing: -0.5 }}>2. Imagina Asadores El Barril en 90 días</Typography>
          </Stack>

          <Grid container spacing={3}>
            {[
              { icon: <BrainIcon />, title: 'Guiones coordinados sin reuniones extras', desc: 'Cada persona de tu equipo sabe exactamente qué entregar, cuándo y en qué formato. Sin perseguir a nadie.' },
              { icon: <ListeningIcon />, title: 'Sabes qué dice tu cliente (y tu competencia)', desc: 'Recibes reportes accionables sobre lo que funciona en redes, lo que se comenta de Asadores El Barril y las oportunidades que tu competencia está dejando pasar.' },
              { icon: <SkillIcon />, title: 'Contenido listo para cada red, cada semana', desc: 'Instagram, WhatsApp, Email — super AI adapta tu mensaje al formato correcto. Tu equipo solo valida y publica.' },
              { icon: <SpeedIcon />, title: 'Un equipo que opera como reloj', desc: 'La operación de mercadeo deja de depender de una sola persona. super AI es el hilo conductor que conecta todas las áreas.' }
            ].map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box sx={{ p: 3, height: '100%', borderRadius: 4, bgcolor: AI4U_PALETTE.gray[50], border: `1px solid ${AI4U_PALETTE.gray[200]}` }}>
                  <Box sx={{ color: AI4U_PALETTE.accentColors.green, mb: 2 }}>{item.icon}</Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, color: AI4U_PALETTE.black, mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: AI4U_PALETTE.gray[800], lineHeight: 1.6, fontWeight: 500 }}>{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ═══════════════════════════════════════════ */}
        {/* 3. LA SOLUCIÓN: MAGNUS (DARK)               */}
        {/* ═══════════════════════════════════════════ */}
        <Box sx={{ 
          mb: 12, 
          p: { xs: 4, md: 8 }, 
          bgcolor: AI4U_PALETTE.black, 
          borderRadius: 6, 
          color: AI4U_PALETTE.white,
          position: 'relative',
          boxShadow: `0 30px 60px ${alpha(AI4U_PALETTE.black, 0.4)}`
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <SuperAIIcon sx={{ color: AI4U_PALETTE.accentColors.green, fontSize: 40 }} />
            <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: -1, color: AI4U_PALETTE.white }}>
              3. Cómo lo logramos: super AI
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ mb: 5, color: AI4U_PALETTE.accentColors.green, fontWeight: 700 }}>
            Tu primera asistente IA — el inicio de una infraestructura que escala sin límites
          </Typography>
          
          <Typography sx={{ mb: 6, fontSize: '1.25rem', color: AI4U_PALETTE.white, lineHeight: 1.7, maxWidth: '800px', fontWeight: 400 }}>
            super AI es la primera empleada IA de Asadores El Barril. Arranca con los skills que identificamos juntos en la reunión inicial, pero su arquitectura permite <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900 }}>enseñarle habilidades ilimitadas</Box> y crear <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900 }}>agentes infinitos</Box> a medida que la operación crezca. Hoy es una. Mañana puede ser un equipo entero de IA.
          </Typography>

          {/* Skills Iniciales */}
          <Typography variant="overline" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900, letterSpacing: 3, display: 'block', mb: 3 }}>
            Skills iniciales (identificados en la reunión)
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {[
              { num: '01', icon: <BrainIcon sx={{ fontSize: 22 }} />, title: 'Orquestador de Guiones', desc: 'Coordina al equipo creativo. Define encargados, copys y obligaciones por rol. Cada pieza del guion se ejecuta bajo el estándar de Asadores El Barril.' },
              { num: '02', icon: <ListeningIcon sx={{ fontSize: 22 }} />, title: 'Social Listening', desc: 'Monitorea qué dicen tus clientes y qué hace la competencia. Convierte el ruido digital en decisiones estratégicas concretas.' },
              { num: '03', icon: <SkillIcon sx={{ fontSize: 22 }} />, title: 'Generación de Contenido', desc: 'Crea y adapta el mensaje de Asadores El Barril para cada red y formato: Reels, WhatsApp, Email Marketing, TikTok y más.' }
            ].map((skill) => (
              <Grid item xs={12} md={4} key={skill.num}>
                <Box sx={{ p: 3, borderRadius: 4, bgcolor: alpha(AI4U_PALETTE.white, 0.06), border: `1px solid ${alpha(AI4U_PALETTE.white, 0.12)}`, height: '100%' }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                    <Typography variant="caption" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900, fontSize: '0.7rem' }}>SKILL {skill.num}</Typography>
                    <Box sx={{ color: AI4U_PALETTE.accentColors.green }}>{skill.icon}</Box>
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, color: AI4U_PALETTE.white, mb: 1.5 }}>{skill.title}</Typography>
                  <Typography variant="body2" sx={{ color: alpha(AI4U_PALETTE.white, 0.85), lineHeight: 1.7, fontWeight: 400 }}>{skill.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Escalabilidad */}
          <Box sx={{ p: 4, borderRadius: 4, bgcolor: alpha(AI4U_PALETTE.accentColors.green, 0.1), border: `1px solid ${alpha(AI4U_PALETTE.accentColors.green, 0.3)}` }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <GrowthIcon sx={{ color: AI4U_PALETTE.accentColors.green, fontSize: 28, mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 900, color: AI4U_PALETTE.white, mb: 1 }}>¿Y después de estos 3 skills?</Typography>
                <Typography variant="body2" sx={{ color: alpha(AI4U_PALETTE.white, 0.9), lineHeight: 1.7 }}>
                  Le enseñas los que necesites: atención al cliente, gestión de proveedores, análisis financiero, entrenamiento de personal — lo que sea. Además, puedes crear nuevos agentes especializados por área (Ventas, Logística, RRHH) que comparten el conocimiento central de Asadores El Barril. <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 800 }}>Este es el futuro de cómo operan las empresas.</Box>
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* ═══════════════════════════════════════════ */}
        {/* 4. INVERSIÓN                                */}
        {/* ═══════════════════════════════════════════ */}
        <Box sx={{ mb: 12 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 6 }}>
            <Box sx={{ p: 1, borderRadius: 1, bgcolor: AI4U_PALETTE.black, color: AI4U_PALETTE.white, display: 'flex' }}>
              <InversionIcon fontSize="small" />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.black, letterSpacing: -0.5 }}>4. Inversión</Typography>
          </Stack>

          {/* Comparación de costo — Ancla */}
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ p: 3, borderRadius: 4, bgcolor: AI4U_PALETTE.gray[100], border: `1px solid ${AI4U_PALETTE.gray[300]}`, height: '100%' }}>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.gray[600], fontWeight: 800, display: 'block', mb: 1 }}>Contratar un empleado junior de marketing</Typography>
                <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.gray[500], textDecoration: 'line-through' }}>~$800 USD/mes</Typography>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.gray[500], fontWeight: 600 }}>Horario limitado, una sola habilidad, se va y se lleva el conocimiento.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ p: 3, borderRadius: 4, bgcolor: alpha(AI4U_PALETTE.accentColors.green, 0.08), border: `2px solid ${AI4U_PALETTE.accentColors.green}`, height: '100%' }}>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 800, display: 'block', mb: 1 }}>super AI: tu SuperAI que no renuncia</Typography>
                <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.black }}>$200 USD/mes</Typography>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.gray[700], fontWeight: 600 }}>Disponible 24/7, skills ilimitados, agentes infinitos y es propiedad de Asadores El Barril.</Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Tarjeta de Inversión Principal */}
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 4, md: 6 }, 
              borderRadius: 6, 
              bgcolor: AI4U_PALETTE.white,
              color: AI4U_PALETTE.black,
              position: 'relative',
              border: `4px solid ${AI4U_PALETTE.black}`,
              boxShadow: `0 40px 80px ${alpha(AI4U_PALETTE.black, 0.15)}`
            }}
          >
            <Box 
              sx={{ 
                position: 'absolute', 
                top: -16, 
                left: '50%', 
                transform: 'translateX(-50%)',
                bgcolor: AI4U_PALETTE.black, 
                color: AI4U_PALETTE.white,
                px: 4, py: 1, borderRadius: 100,
                fontSize: '0.85rem', fontWeight: 900,
                whiteSpace: 'nowrap',
                letterSpacing: 1
              }}
            >
              SuperAI para Asadores El Barril
            </Box>
            
            <Grid container spacing={4} sx={{ pt: 2 }}>
              <Grid item xs={12} md={5}>
                <Stack spacing={0.5} sx={{ mb: 4 }}>
                  <Typography variant="overline" sx={{ color: AI4U_PALETTE.gray[600], fontWeight: 800 }}>Implementación (único pago)</Typography>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: AI4U_PALETTE.black }}>$2,000 <Typography component="span" variant="h6" sx={{ fontWeight: 700 }}>USD</Typography></Typography>
                </Stack>

                <Divider sx={{ mb: 4 }} />

                <Stack spacing={0.5} sx={{ mb: 4 }}>
                  <Typography variant="overline" sx={{ color: AI4U_PALETTE.gray[600], fontWeight: 800 }}>Evolución mensual</Typography>
                  <Typography variant="h3" sx={{ fontWeight: 900, color: AI4U_PALETTE.black }}>$200 <Typography component="span" variant="body1" sx={{ fontWeight: 700 }}>USD/mes</Typography></Typography>
                </Stack>

                <Box sx={{ p: 2, borderRadius: 2, bgcolor: AI4U_PALETTE.gray[50], border: `1px solid ${AI4U_PALETTE.gray[200]}` }}>
                  <Typography variant="caption" sx={{ color: AI4U_PALETTE.gray[700], fontWeight: 600, lineHeight: 1.5 }}>
                    La mensualidad garantiza que super AI siga aprendiendo nuevos skills, se mantenga conectada a tus sistemas y reciba mejoras continuas.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={7}>
                <Typography variant="subtitle1" sx={{ fontWeight: 900, mb: 2, color: AI4U_PALETTE.black }}>¿Qué incluye?</Typography>
                <Grid container spacing={0}>
                  {[
                    { text: 'Skill: Orquestador de Guiones (roles, copys, entregas)', highlight: true },
                    { text: 'Skill: Social Listening (clientes y competencia)', highlight: true },
                    { text: 'Skill: Generación de contenido multi-red', highlight: true },
                    { text: 'Arquitectura para agentes y skills ilimitados', highlight: false },
                    { text: 'Integración con WhatsApp, Email y CRM', highlight: false },
                    { text: 'Reunión estratégica de optimización mensual', highlight: false },
                    { text: 'Soporte técnico preferencial vía WhatsApp', highlight: false },
                    { text: 'super AI es propiedad 100% de Asadores El Barril', highlight: false },
                  ].map((item) => (
                    <Grid item xs={12} key={item.text}>
                      <ListItem disableGutters sx={{ py: 0.6 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckIcon sx={{ color: item.highlight ? AI4U_PALETTE.accentColors.green : AI4U_PALETTE.gray[500], fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item.text} 
                          primaryTypographyProps={{ 
                            variant: 'body2', 
                            sx: { fontWeight: item.highlight ? 800 : 600, color: AI4U_PALETTE.black } 
                          }} 
                        />
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Paper>

          {/* Modelo de pago */}
          <Paper elevation={0} sx={{ mt: 4, p: 4, borderRadius: 4, bgcolor: AI4U_PALETTE.gray[50], border: `1px solid ${AI4U_PALETTE.gray[200]}` }}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 900, color: AI4U_PALETTE.black }}>Modelo de pago de la implementación</Typography>
            <Grid container spacing={2}>
              {[
                { pct: '50%', label: 'Al iniciar el proyecto' },
                { pct: '25%', label: 'Al completar fase 2' },
                { pct: '25%', label: 'Al entregar producto terminado' }
              ].map((step) => (
                <Grid item xs={12} sm={4} key={step.pct}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="h4" sx={{ color: AI4U_PALETTE.accentColors.orange, fontWeight: 900 }}>{step.pct}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: AI4U_PALETTE.black }}>{step.label}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Consideraciones — Reframed as benefits */}
          <Box sx={{ mt: 4, p: 4, borderRadius: 4, bgcolor: AI4U_PALETTE.black, color: AI4U_PALETTE.white }}>
            <Typography variant="subtitle2" sx={{ mb: 3, fontWeight: 900, color: AI4U_PALETTE.accentColors.orange }}>Importante saber</Typography>
            <Grid container spacing={3}>
              {[
                { label: 'Tu IA es tuya', desc: 'Al terminar, super AI no se apaga. Todo lo construido es propiedad permanente de Asadores El Barril.' },
                { label: 'Consumo por uso', desc: 'Los modelos de IA (OpenAI, etc.) se facturan según volumen de uso real. Sin sorpresas.' },
                { label: 'Hardware dedicado', desc: 'SuperAI opera en una estación dedicada que garantiza disponibilidad 24/7 y soberanía total de tus datos.' },
                { label: 'Crece sin techo', desc: 'Nuevos skills desde $100 USD. Nuevos agentes por área cuando los necesites. Sin límite.' }
              ].map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.label}>
                  <Typography variant="caption" sx={{ color: AI4U_PALETTE.accentColors.orange, fontWeight: 800, display: 'block', mb: 0.5 }}>{item.label}</Typography>
                  <Typography variant="caption" sx={{ color: alpha(AI4U_PALETTE.white, 0.85), fontWeight: 500, lineHeight: 1.5 }}>{item.desc}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* ═══════════════════════════════════════════ */}
        {/* 5. GARANTÍA + PRIMER PASO (CTA)             */}
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
          {/* Garantía — Risk Reversal */}
          <Box sx={{ mb: 8, p: 4, borderRadius: 4, bgcolor: alpha(AI4U_PALETTE.accentColors.green, 0.1), border: `1px solid ${alpha(AI4U_PALETTE.accentColors.green, 0.3)}`, maxWidth: 600, mx: 'auto' }}>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
              <ShieldIcon sx={{ color: AI4U_PALETTE.accentColors.green }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 900, color: AI4U_PALETTE.accentColors.green }}>Nuestro compromiso</Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: alpha(AI4U_PALETTE.white, 0.9), lineHeight: 1.7, fontWeight: 500 }}>
              Si en los primeros 30 días super AI no demuestra un impacto tangible en la operación de Asadores El Barril, ajustamos el enfoque sin costo adicional hasta que lo haga. No estamos vendiendo un producto — estamos construyendo un resultado.
            </Typography>
          </Box>

          <Typography variant="h3" sx={{ fontWeight: 900, mb: 3, letterSpacing: -1, color: AI4U_PALETTE.white }}>5. El paso siguiente</Typography>
          <Typography variant="h6" sx={{ mb: 2, color: alpha(AI4U_PALETTE.white, 0.8), fontWeight: 400, maxWidth: '650px', mx: 'auto', lineHeight: 1.6 }}>
            Agendamos una sesión de Discovery de 1 hora donde definimos:
          </Typography>
          
          <Grid container spacing={2} justifyContent="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
            {[
              'Voz de marca y estilo de Asadores El Barril',
              'Acceso a herramientas actuales',
              'Plan de contenidos del mes',
              'Roles del equipo creativo'
            ].map((item) => (
              <Grid item xs={12} sm={6} key={item}>
                <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                  <CheckIcon sx={{ color: AI4U_PALETTE.accentColors.green, fontSize: 18 }} />
                  <Typography variant="body2" sx={{ color: AI4U_PALETTE.white, fontWeight: 600 }}>{item}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

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
              Agendar sesión de Discovery
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
              Hablar por WhatsApp
            </Button>
          </Stack>

          <Box sx={{ mt: 10, pt: 6, borderTop: `1px solid ${alpha(AI4U_PALETTE.white, 0.15)}` }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 0.5, color: AI4U_PALETTE.white }}>Mariano García Posada</Typography>
            <Typography variant="body2" sx={{ color: alpha(AI4U_PALETTE.white, 0.6), letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>CEO Ai4U</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropuestaElBarril;
