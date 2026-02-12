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
  AutoAwesome as MagnusIcon,
  EditNote as CopyIcon,
  Groups as CoordinationIcon,
  AttachMoney as InversionIcon,
  RocketLaunch as NextIcon,
  WhatsApp as WhatsAppIcon,
  CalendarMonth as DateIcon,
  SettingsSuggest as BaseSkillsIcon,
  Psychology as BrainIcon,
  Extension as SkillIcon,
  Handshake as CommitmentIcon,
  Assignment as DiscoveryIcon,
  Hearing as ListeningIcon
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
      {/* Decorative Background Elements - Subtle to not affect readability */}
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
        {/* Header Section */}
        <Box sx={{ pt: { xs: 6, md: 10 }, mb: 10 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 6 }}>
            <Logo variant="desktop" sx={{ height: 40 }} />
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
              fontSize: { xs: '2.8rem', md: '4rem' },
              lineHeight: 1.1,
              fontWeight: 900,
              textTransform: 'none'
            }}
          >
            El Barril: SuperAI y transformaciónOperativa
          </Typography>
          
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ width: 40, height: 2, bgcolor: AI4U_PALETTE.black }} />
            <Typography variant="h5" sx={{ color: AI4U_PALETTE.black, fontWeight: 500, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
              Preparado para: Jefe de Mercadeo — Asadores El Barril
            </Typography>
          </Stack>
        </Box>

        {/* 1. EL DIAGNÓSTICO */}
        <Box sx={{ mb: 12 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <Box sx={{ p: 1, borderRadius: 1, bgcolor: AI4U_PALETTE.black, color: AI4U_PALETTE.white, display: 'flex' }}>
              <ProblemIcon fontSize="small" />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.black, letterSpacing: -0.5 }}>1. El Diagnóstico: El Costo de la Fragmentación</Typography>
          </Stack>
          
          <Paper elevation={0} sx={{ p: 4, bgcolor: AI4U_PALETTE.gray[50], borderRadius: 4, mb: 4, borderLeft: `4px solid ${AI4U_PALETTE.accentColors.orange}`, border: `1px solid ${AI4U_PALETTE.gray[200]}` }}>
            <Typography sx={{ fontSize: '1.15rem', color: AI4U_PALETTE.black, lineHeight: 1.7, fontWeight: 600 }}>
              Hoy, El Barril tiene un producto de clase mundial, pero una operación fragmentada. El Jefe de Mercadeo actúa como una "isla tecnológica" intentando coordinar áreas que no hablan el mismo idioma.
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
                  La desconfianza en la IA nace de resultados genéricos. El Barril no necesita IA que invente, necesita un asistente que <Box component="span" sx={{ fontWeight: 900, color: AI4U_PALETTE.black }}>entienda su esencia y organice su potencial</Box>.
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
                  La falta de accountability entre áreas frena el crecimiento. Las tareas se "pierden" en la comunicación y falta un hilo conductor claro.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* 2. LA SOLUCIÓN: SUPERAI (DARK BACKGROUND) */}
        <Box sx={{ 
          mb: 12, 
          p: { xs: 4, md: 8 }, 
          bgcolor: AI4U_PALETTE.black, 
          borderRadius: 6, 
          color: AI4U_PALETTE.white,
          position: 'relative',
          boxShadow: `0 30px 60px ${alpha(AI4U_PALETTE.black, 0.4)}`
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <MagnusIcon sx={{ color: AI4U_PALETTE.accentColors.green, fontSize: 40 }} />
            <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: -1, color: AI4U_PALETTE.white }}>
              2. La Solución: Magnus
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ mb: 4, color: AI4U_PALETTE.accentColors.green, fontWeight: 800 }}>
            (El Futuro de El Barril: Escalabilidad Infinita)
          </Typography>
          
          <Typography sx={{ mb: 6, fontSize: '1.4rem', color: AI4U_PALETTE.white, lineHeight: 1.6, maxWidth: '800px', fontWeight: 400 }}>
            No estamos instalando un software; estamos <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900 }}>sembrando el futuro de tu empresa</Box>. Magnus es tu primera asistente IA, pero su arquitectura le permite aprender <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900 }}>habilidades ilimitadas</Box> y clonarse en agentes infinitos según tu operación crezca.
          </Typography>

          <Grid container spacing={4}>
            {/* Habilidades Incluidas */}
            <Grid item xs={12}>
              <Box sx={{ p: 4, borderRadius: 4, bgcolor: alpha(AI4U_PALETTE.white, 0.08), border: `1px solid ${alpha(AI4U_PALETTE.white, 0.2)}`, mb: 4 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <BaseSkillsIcon sx={{ color: AI4U_PALETTE.accentColors.green }} />
                  <Typography variant="h6" sx={{ fontWeight: 800, color: AI4U_PALETTE.white }}>Skills Identificados (Fase Inicial)</Typography>
                </Stack>
                <Grid container spacing={2}>
                  {[
                    'Orquestador de Guiones: Copys, roles y obligaciones',
                    'Social Listening: Análisis de clientes y competencia',
                    'Generación de Contenido: Multi-red y multi-formato',
                    'Capacidad de aprender Skills infinitos a futuro',
                    'Despliegue de Agentes ilimitados por área'
                  ].map((skill) => (
                    <Grid item xs={12} sm={6} key={skill}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CheckIcon sx={{ color: AI4U_PALETTE.accentColors.green, fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: AI4U_PALETTE.white, fontWeight: 500 }}>{skill}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* Skill 1 */}
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="overline" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900, letterSpacing: 2 }}>
                  SKILL 01
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900, color: AI4U_PALETTE.white, display: 'flex', alignItems: 'center', gap: 1 }}>
                  Orquestador de Guiones <BrainIcon sx={{ fontSize: 20 }} />
                </Typography>
                <Typography variant="body1" sx={{ color: alpha(AI4U_PALETTE.white, 0.9), lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 400 }}>
                  Magnus coordina a tu equipo creativo. Define <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 800 }}>encargados, copys y obligaciones</Box> por rol, asegurando que cada pieza del guion se ejecute bajo tu estándar de calidad.
                </Typography>
              </Stack>
            </Grid>

            {/* Skill 2 */}
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="overline" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900, letterSpacing: 2 }}>
                  SKILL 02
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900, color: AI4U_PALETTE.white, display: 'flex', alignItems: 'center', gap: 1 }}>
                  Social Listening <ListeningIcon sx={{ fontSize: 20 }} />
                </Typography>
                <Typography variant="body1" sx={{ color: alpha(AI4U_PALETTE.white, 0.9), lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 400 }}>
                  Magnus analiza permanentemente <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 800 }}>qué dice la competencia y qué dicen tus clientes</Box>. Transforma el ruido digital en insights accionables para ajustar tu estrategia en tiempo real.
                </Typography>
              </Stack>
            </Grid>

            {/* Skill 3 */}
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="overline" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900, letterSpacing: 2 }}>
                  SKILL 03
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900, color: AI4U_PALETTE.white, display: 'flex', alignItems: 'center', gap: 1 }}>
                  Generación de Contenido <SkillIcon sx={{ fontSize: 20 }} />
                </Typography>
                <Typography variant="body1" sx={{ color: alpha(AI4U_PALETTE.white, 0.9), lineHeight: 1.7, fontSize: '1.05rem', fontWeight: 400 }}>
                  Especializamos a Magnus en la <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 800 }}>creación para diferentes redes y formatos</Box>. Adapta el mensaje de El Barril para que sea efectivo tanto en Reels como en WhatsApp o Email Marketing.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* SECTION: ROADMAP & DISCOVERY */}
        <Box sx={{ mb: 12 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 6 }}>
            <Box sx={{ p: 1, borderRadius: 1, bgcolor: AI4U_PALETTE.black, color: AI4U_PALETTE.white, display: 'flex' }}>
              <DiscoveryIcon fontSize="small" />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.black, letterSpacing: -0.5 }}>Información y Roadmap</Typography>
          </Stack>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper variant="outlined" sx={{ p: 4, borderRadius: 4, borderColor: AI4U_PALETTE.gray[300], bgcolor: AI4U_PALETTE.white }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 800, color: AI4U_PALETTE.black }}>Fase 1: Discovery (Lo que necesitamos de ti)</Typography>
                <Typography variant="body1" sx={{ mb: 4, color: AI4U_PALETTE.black, fontWeight: 500 }}>
                  Para que Magnus empiece a trabajar, necesitamos una sesión inicial de 1 hora donde definiremos:
                </Typography>
                <Grid container spacing={2}>
                  {[
                    'Manual de identidad y voz de marca El Barril',
                    'Acceso a herramientas (WhatsApp, CRM, Email)',
                    'Plan de contenidos y guiones del mes',
                    'Roles del equipo creativo y de ventas'
                  ].map((item) => (
                    <Grid item xs={12} sm={6} key={item}>
                      <Stack direction="row" spacing={1}>
                        <CheckIcon sx={{ color: AI4U_PALETTE.accentColors.orange, fontSize: 20, mt: 0.3 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: AI4U_PALETTE.black }}>{item}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* 3. INVERSIÓN */}
        <Box sx={{ mb: 12 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 6 }}>
            <Box sx={{ p: 1, borderRadius: 1, bgcolor: AI4U_PALETTE.black, color: AI4U_PALETTE.white, display: 'flex' }}>
              <InversionIcon fontSize="small" />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.black, letterSpacing: -0.5 }}>3. Inversión: Tu Primer SuperAI (Magnus)</Typography>
          </Stack>
          
          <Box sx={{ mb: 6, p: 4, borderRadius: 4, bgcolor: alpha(AI4U_PALETTE.accentColors.orange, 0.1), border: `2px solid ${AI4U_PALETTE.accentColors.orange}` }}>
            <Typography sx={{ color: AI4U_PALETTE.black, fontSize: '1.15rem', lineHeight: 1.6, fontWeight: 600 }}>
              Magnus es un activo de SuperAI que crece con El Barril. Basados en tu estructura, el costo de la ineficiencia actual (coordinación manual de contenidos y guiones) se estima en más de <Box component="span" sx={{ color: AI4U_PALETTE.black, fontWeight: 900, textDecoration: 'underline', decorationColor: AI4U_PALETTE.accentColors.orange }}>$3,500 USD/mes</Box>.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {/* Business Plan (The Only Plan) */}
            <Grid item xs={12} md={8}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 4, md: 6 }, 
                  borderRadius: 6, 
                  bgcolor: AI4U_PALETTE.white,
                  color: AI4U_PALETTE.black,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  border: `4px solid ${AI4U_PALETTE.black}`,
                  zIndex: 2,
                  boxShadow: `0 40px 80px ${alpha(AI4U_PALETTE.black, 0.2)}`
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
                    fontSize: '0.9rem', fontWeight: 900,
                    whiteSpace: 'nowrap',
                    letterSpacing: 1
                  }}
                >
                  PLAN ESTRATÉGICO SUPERAI
                </Box>
                
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 1, color: AI4U_PALETTE.black }}>Nivel Business</Typography>
                    <Typography variant="body1" sx={{ color: AI4U_PALETTE.gray[700], mb: 4, fontWeight: 600 }}>
                      La infraestructura completa de IA para liderar el mercado de Asadores.
                    </Typography>
                    
                    <Stack spacing={0.5} sx={{ mb: 4 }}>
                      <Typography variant="overline" sx={{ color: AI4U_PALETTE.gray[600], fontWeight: 800 }}>Fee de Implementación (Único)</Typography>
                      <Typography variant="h2" sx={{ fontWeight: 900, color: AI4U_PALETTE.black }}>$2,000 <Typography component="span" variant="h5" sx={{ fontWeight: 700 }}>USD</Typography></Typography>
                    </Stack>

                    <Divider sx={{ mb: 4 }} />

                    <Stack spacing={0.5}>
                      <Typography variant="overline" sx={{ color: AI4U_PALETTE.gray[600], fontWeight: 800 }}>Mantenimiento & Evolución</Typography>
                      <Typography variant="h3" sx={{ fontWeight: 900, color: AI4U_PALETTE.black }}>$200 <Typography component="span" variant="h6" sx={{ fontWeight: 700 }}>USD/mes</Typography></Typography>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 900, mb: 2, color: AI4U_PALETTE.black }}>¿Qué incluye tu SuperAI?</Typography>
                    <List disablePadding>
                      {[
                        'Orquestador de Guiones completo (Roles y Copys)',
                        'Social Listening (Clientes y Competencia)',
                        'Generación de contenido (Multi-red y Multi-formato)',
                        'Capacidad de crear Agentes Infinitos',
                        'Entrenamiento de Skills Ilimitados',
                        '3 Skills a medida iniciales incluidos',
                        'Reunión estratégica de optimización mensual',
                        'Soporte técnico preferencial vía WhatsApp',
                        'Propiedad intelectual total de lo construido'
                      ].map((item) => (
                        <ListItem key={item} disableGutters sx={{ py: 0.8 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}><CheckIcon sx={{ color: AI4U_PALETTE.accentColors.green, fontSize: 22, fontWeight: 900 }} /></ListItemIcon>
                          <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', sx: { fontWeight: 700, color: AI4U_PALETTE.black } }} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          {/* Consideraciones Operativas (DARK) */}
          <Box sx={{ mt: 6, p: 4, borderRadius: 4, bgcolor: AI4U_PALETTE.black, color: AI4U_PALETTE.white, border: `1px solid ${AI4U_PALETTE.gray[800]}` }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 900, color: AI4U_PALETTE.accentColors.orange }}>Consideraciones de Operación</Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.accentColors.orange, fontWeight: 800, display: 'block', mb: 1 }}>// CONSUMO LLM & APIS</Typography>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.white, opacity: 0.9, fontWeight: 500 }}>Los costos de consumo de modelos (OpenAI, Anthropic, etc.) se facturan directamente a tu tarjeta según volumen de uso.</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.accentColors.orange, fontWeight: 800, display: 'block', mb: 1 }}>// HARDWARE DEDICADO</Typography>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.white, opacity: 0.9, fontWeight: 500 }}>SuperAI requiere una estación de trabajo (PC/Servidor) dedicada para garantizar ejecución 24/7 y soberanía de datos.</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.accentColors.orange, fontWeight: 800, display: 'block', mb: 1 }}>// TU ASISTENTE ES TUYO</Typography>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.white, opacity: 0.9, fontWeight: 500 }}>Al finalizar el contrato, Magnus no se apaga. Todo lo construido es propiedad de El Barril y opera para ti permanentemente.</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.accentColors.orange, fontWeight: 800, display: 'block', mb: 1 }}>// ESCALABILIDAD INFINITA</Typography>
                <Typography variant="caption" sx={{ color: AI4U_PALETTE.white, opacity: 0.9, fontWeight: 500 }}>Magnus es solo el comienzo. Puedes crear agentes adicionales ilimitados para ventas, logística o RRHH, compartiendo la misma base de conocimiento.</Typography>
              </Grid>
            </Grid>
          </Box>

          <Paper elevation={0} sx={{ mt: 6, p: 4, borderRadius: 4, bgcolor: AI4U_PALETTE.gray[100], border: `1px solid ${AI4U_PALETTE.gray[300]}` }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 900, color: AI4U_PALETTE.black }}>Modelo de Pago</Typography>
            <Grid container spacing={2}>
              {[
                { pct: '50%', label: 'Al iniciar el proyecto' },
                { pct: '25%', label: 'Fase 2 completada' },
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

          <Typography variant="body2" sx={{ mt: 8, color: AI4U_PALETTE.gray[700], fontStyle: 'italic', textAlign: 'center', maxWidth: '700px', mx: 'auto', lineHeight: 1.6, fontWeight: 600 }}>
            * Nota: Una vez realizada la implementación, la tecnología es propiedad de El Barril. La mensualidad garantiza que Magnus (tu SuperAI especializado) siga aprendiendo nuevos Skills mes a mes y se mantenga fortaleciendo tu operación.
          </Typography>
        </Box>

        {/* 4. EL PASO SIGUIENTE (DARK) */}
        <Box sx={{ 
          py: 10, 
          px: { xs: 4, md: 8 },
          borderRadius: 6,
          background: `linear-gradient(135deg, ${AI4U_PALETTE.black} 0%, ${AI4U_PALETTE.gray[900]} 100%)`,
          color: AI4U_PALETTE.white,
          textAlign: 'center',
          boxShadow: `0 40px 80px ${alpha(AI4U_PALETTE.black, 0.4)}`,
          border: `1px solid ${alpha(AI4U_PALETTE.white, 0.1)}`
        }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, letterSpacing: -1, color: AI4U_PALETTE.white }}>4. El Paso Siguiente</Typography>
          <Typography variant="h5" sx={{ mb: 8, color: AI4U_PALETTE.white, fontWeight: 400, lineHeight: 1.6, maxWidth: '750px', mx: 'auto' }}>
            Agendemos el Kickoff técnico esta semana. Empecemos por organizar la casa para demostrar el valor de Magnus desde el primer día.
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
                fontSize: '1.2rem',
                fontWeight: 900,
                textTransform: 'none',
                boxShadow: `0 20px 40px ${alpha(AI4U_PALETTE.accentColors.orange, 0.4)}`,
                '&:hover': { bgcolor: alpha(AI4U_PALETTE.accentColors.orange, 0.9), transform: 'translateY(-5px)' },
                transition: 'all 0.3s ease'
              }}
            >
              Agendar Kickoff Técnico
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              startIcon={<WhatsAppIcon />}
              href={`https://wa.me/${APP_CONFIG.CONTACT.PHONE.replace(/\s+/g, '')}`}
              target="_blank"
              sx={{ 
                borderColor: alpha(AI4U_PALETTE.white, 0.5), 
                color: AI4U_PALETTE.white,
                px: 6, py: 2.5, borderRadius: 3,
                fontSize: '1.2rem',
                fontWeight: 800,
                textTransform: 'none',
                '&:hover': { borderColor: AI4U_PALETTE.white, bgcolor: alpha(AI4U_PALETTE.white, 0.1), transform: 'translateY(-5px)' },
                transition: 'all 0.3s ease'
              }}
            >
              Hablar por WhatsApp
            </Button>
          </Stack>

          <Box sx={{ mt: 10, pt: 6, borderTop: `1px solid ${alpha(AI4U_PALETTE.white, 0.2)}` }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 0.5, color: AI4U_PALETTE.white }}>Mariano García Posada</Typography>
            <Typography variant="body2" sx={{ color: alpha(AI4U_PALETTE.white, 0.7), letterSpacing: 2, fontWeight: 800, textTransform: 'uppercase' }}>CEO Ai4U</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropuestaElBarril;
