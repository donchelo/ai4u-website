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
  ListItemText
} from '@mui/material';
import { 
  CheckCircleOutline as CheckIcon,
  Timeline as DiagnosticIcon,
  Psychology as SolucionIcon,
  AttachMoney as InversionIcon,
  ArrowForward as NextIcon,
  Chat as WhatsAppIcon
} from '@mui/icons-material';
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';
import { TEXT_VARIANTS } from '../components/shared/ui/tokens/typography';
import { APP_CONFIG } from '../utils/constants';
import Logo from '../components/shared/ui/atoms/Logo';

const PropuestaElBarril: React.FC = () => {
  return (
    <Box sx={{ bgcolor: AI4U_PALETTE.white, minHeight: '100vh', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        {/* Header */}
        <Stack spacing={4} sx={{ mb: 8 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Logo variant="desktop" sx={{ height: 32 }} />
            <Typography variant="overline" sx={{ color: AI4U_PALETTE.gray[400], letterSpacing: 2, textTransform: 'none' }}>
              propuestaEstratégica // 2026
            </Typography>
          </Stack>
          
          <Box>
            <Typography 
              variant="h1" 
              sx={{ 
                ...TEXT_VARIANTS.display.medium,
                color: AI4U_PALETTE.black,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textTransform: 'none'
              }}
            >
              El Barril: transformaciónOperativa y mercadeoInteligente
            </Typography>
            <Typography variant="h5" sx={{ color: AI4U_PALETTE.gray[500], fontWeight: 300 }}>
              Preparado para: jefe de mercadeo — asadores El Barril
            </Typography>
          </Box>
        </Stack>

        {/* 1. Diagnóstico */}
        <Box sx={{ mb: 8 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <DiagnosticIcon sx={{ color: AI4U_PALETTE.black }} />
            <Typography variant="h4" sx={{ fontWeight: 600, textTransform: 'none' }}>1. El diagnóstico: el costo de la fragmentación</Typography>
          </Stack>
          
          <Typography sx={{ mb: 4, fontSize: '1.1rem', color: AI4U_PALETTE.gray[700], lineHeight: 1.6 }}>
            Hoy, El Barril tiene un producto de clase mundial, pero una operación fragmentada. El jefe de mercadeo actúa como una "isla tecnológica" intentando coordinar áreas que no hablan el mismo idioma.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper variant="outlined" sx={{ p: 3, height: '100%', borderColor: AI4U_PALETTE.gray[200] }}>
                <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1, textTransform: 'none' }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: AI4U_PALETTE.accentColors.orange }} />
                  Problema 01: el "copy" sin alma
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  La desconfianza en la IA nace de resultados genéricos. El Barril no necesita IA que invente, necesita IA que <Box component="span" sx={{ fontWeight: 600, color: AI4U_PALETTE.black }}>clone su voz de marca</Box>.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper variant="outlined" sx={{ p: 3, height: '100%', borderColor: AI4U_PALETTE.gray[200] }}>
                <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1, textTransform: 'none' }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: AI4U_PALETTE.accentColors.orange }} />
                  Problema 02: el caos de coordinación
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  La falta de accountability entre áreas frena el crecimiento. Las tareas se "pierden" en la comunicación y falta un hilo conductor operativo.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* 2. La Solución */}
        <Box sx={{ mb: 8, p: { xs: 4, md: 6 }, bgcolor: AI4U_PALETTE.black, borderRadius: 4, color: AI4U_PALETTE.white }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <SolucionIcon sx={{ color: AI4U_PALETTE.white }} />
            <Typography variant="h4" sx={{ fontWeight: 600, textTransform: 'none' }}>2. La solución: Magnus (tu primer empleadoIA)</Typography>
          </Stack>
          
          <Typography sx={{ mb: 6, fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.6 }}>
            No es un software. Es un asistente personalizado que integra tus herramientas actuales (WhatsApp, Email, CRM) para asegurar que el equipo trabaje al mismo ritmo.
          </Typography>

          <Stack spacing={4}>
            <Box>
              <Typography variant="h6" sx={{ color: AI4U_PALETTE.accentColors.green, mb: 1, textTransform: 'none', letterSpacing: 0.5 }}>
                Módulo A: coordinaciónInteligente (el "pegante" operativo)
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Magnus rastrea compromisos entre áreas, genera minutas automáticas de reuniones y alerta sobre cuellos de botella antes de que afecten la venta.
              </Typography>
            </Box>
            
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
            
            <Box>
              <Typography variant="h6" sx={{ color: AI4U_PALETTE.accentColors.green, mb: 1, textTransform: 'none', letterSpacing: 0.5 }}>
                Módulo B: contenido con vozDeMarca (el espejo)
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Clonamos el estilo de redacción de El Barril. Magnus genera copys de alta conversión que el equipo de mercadeo solo debe validar. <Box component="span" sx={{ color: AI4U_PALETTE.white, fontWeight: 600 }}>Ahorro de 15+ horas/semana.</Box>
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* 3. Inversión */}
        <Box sx={{ mb: 8 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <InversionIcon sx={{ color: AI4U_PALETTE.black }} />
            <Typography variant="h4" sx={{ fontWeight: 600, textTransform: 'none' }}>3. Inversión: tu primer empleadoIA (Magnus)</Typography>
          </Stack>
          
          <Typography sx={{ mb: 4, color: AI4U_PALETTE.gray[600] }}>
            A diferencia de un software tradicional, Magnus es un activo que crece con El Barril. El costo de la ineficiencia actual se estima en más de <Box component="span" sx={{ color: AI4U_PALETTE.black, fontWeight: 600 }}>$3,500 USD/mes</Box>.
          </Typography>

          <Grid container spacing={4}>
            {/* Professional */}
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  borderRadius: 4, 
                  border: `2px solid ${AI4U_PALETTE.black}`,
                  position: 'relative',
                  height: '100%'
                }}
              >
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: -12, 
                    right: 20, 
                    bgcolor: AI4U_PALETTE.black, 
                    color: AI4U_PALETTE.white,
                    px: 2, py: 0.5, borderRadius: 1,
                    fontSize: '0.75rem', fontWeight: 600
                  }}
                >
                  RECOMENDADO
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textTransform: 'none' }}>Nivel professional</Typography>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 800 }}>$2,500 <Typography component="span" variant="body2">USD fee</Typography></Typography>
                
                <List sx={{ mb: 3 }}>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckIcon fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Clonación de vozDeMarca" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckIcon fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Módulo de coordinación inter-áreas" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckIcon fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Seguimiento de tareas" />
                  </ListItem>
                </List>
                
                <Divider sx={{ mb: 3 }} />
                <Typography variant="body2" color="text.secondary">
                  + $200 USD/mes (soporte, evolución y hosting)
                </Typography>
              </Paper>
            </Grid>

            {/* Starter */}
            <Grid item xs={12} md={6}>
              <Paper 
                variant="outlined"
                sx={{ 
                  p: 4, 
                  borderRadius: 4, 
                  borderColor: AI4U_PALETTE.gray[200],
                  height: '100%'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textTransform: 'none' }}>Nivel starter</Typography>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 800 }}>$1,500 <Typography component="span" variant="body2">USD fee</Typography></Typography>
                
                <List sx={{ mb: 3 }}>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckIcon fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Módulo de contenido automatizado" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckIcon fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Instagram / WhatsApp focus" />
                  </ListItem>
                </List>
                
                <Divider sx={{ mb: 3 }} />
                <Typography variant="body2" color="text.secondary">
                  + $200 USD/mes (soporte y hosting)
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Typography variant="body2" sx={{ mt: 4, color: AI4U_PALETTE.gray[500], fontStyle: 'italic' }}>
            * nota: una vez realizada la implementación, la tecnología es propiedad de El Barril. La mensualidad garantiza que Magnus siga aprendiendo nuevos skills mes a mes.
          </Typography>
        </Box>

        {/* 4. Paso Siguiente */}
        <Box sx={{ py: 6, borderTop: `1px solid ${AI4U_PALETTE.gray[200]}` }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textTransform: 'none' }}>4. El paso siguiente</Typography>
          <Typography sx={{ mb: 4, fontSize: '1.1rem' }}>
            Agendemos el Kickoff técnico esta semana. ¿Parece justo empezar por clonar tu voz de marca para demostrar el poder de la herramienta?
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button 
              variant="contained" 
              size="large"
              endIcon={<NextIcon />}
              href={`https://${APP_CONFIG.CONTACT.CALENDLY}`}
              target="_blank"
              sx={{ 
                bgcolor: AI4U_PALETTE.black, 
                color: AI4U_PALETTE.white,
                px: 4, py: 2, borderRadius: 2,
                textTransform: 'none',
                '&:hover': { bgcolor: AI4U_PALETTE.gray[900] }
              }}
            >
              agendarKickoff técnico
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              startIcon={<WhatsAppIcon />}
              href={`https://wa.me/${APP_CONFIG.CONTACT.PHONE.replace(/\s+/g, '')}`}
              target="_blank"
              sx={{ 
                borderColor: AI4U_PALETTE.black, 
                color: AI4U_PALETTE.black,
                px: 4, py: 2, borderRadius: 2,
                textTransform: 'none',
                '&:hover': { borderColor: AI4U_PALETTE.gray[700], bgcolor: 'rgba(0,0,0,0.02)' }
              }}
            >
              hablarPor WhatsApp
            </Button>
          </Stack>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Mariano García Posada</Typography>
            <Typography variant="body2" color="text.secondary">CEO Ai4U</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PropuestaElBarril;
