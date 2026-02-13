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
    PrecisionManufacturing as FactoryIcon,
    Hub as IntegrationIcon,
    TrendingUp as GrowthIcon,
    Shield as ShieldIcon,
    Insights as InsightsIcon,
    Speed as SpeedIcon,
    WhatsApp as WhatsAppIcon,
    RocketLaunch as NextIcon,
    DateRange as DateIcon,
    AccountTree as SystemsIcon
} from '@mui/icons-material';
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';
import { TEXT_VARIANTS } from '../components/shared/ui/tokens/typography';
import { APP_CONFIG, ROUTES } from '../utils/constants';
import Logo from '../components/shared/ui/atoms/Logo';

const PropuestaManufactura: React.FC = () => {
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
                width: 600,
                height: 600,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${alpha(AI4U_PALETTE.gray[900], 0.03)} 0%, transparent 70%)`,
                zIndex: 0
            }} />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>

                {/* HEADER */}
                <Box sx={{ pt: { xs: 6, md: 10 }, mb: 10 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 6 }}>
                        <Logo variant="desktop" sx={{ height: 40 }} />
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="overline" sx={{ color: AI4U_PALETTE.black, fontWeight: 800, letterSpacing: 2, display: 'block' }}>
                                Ai4U // Executive Orchestration
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
                        Su fábrica produce datos masivos.
                        <br />
                        <Box component="span" sx={{ color: AI4U_PALETTE.accentColors.green, filter: 'brightness(0.7)' }}>Super AI los convierte en decisiones ejecutivas.</Box>
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 4 }}>
                        <Box sx={{ width: 40, height: 2, bgcolor: AI4U_PALETTE.black }} />
                        <Typography variant="h6" sx={{ color: AI4U_PALETTE.gray[700], fontWeight: 500 }}>
                            Preparado para: CEO — Dirección de Operaciones Industriales
                        </Typography>
                    </Stack>
                </Box>

                {/* 1. EL PROBLEMA: SISTEMAS FRAGMENTADOS */}
                <Box sx={{ mb: 12 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                        <Box sx={{ p: 1, borderRadius: 1, bgcolor: AI4U_PALETTE.black, color: AI4U_PALETTE.white, display: 'flex' }}>
                            <SystemsIcon fontSize="small" />
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.black, letterSpacing: -0.5 }}>1. El Techo de Vidrio Digital</Typography>
                    </Stack>

                    <Paper elevation={0} sx={{ p: 4, bgcolor: AI4U_PALETTE.gray[50], borderRadius: 4, mb: 4, borderLeft: `4px solid ${AI4U_PALETTE.black}`, border: `1px solid ${AI4U_PALETTE.gray[200]}` }}>
                        <Typography sx={{ fontSize: '1.25rem', color: AI4U_PALETTE.black, lineHeight: 1.7, fontWeight: 700, mb: 2 }}>
                            ¿Por qué las fábricas se detienen aunque los datos fluyan?
                        </Typography>
                        <Typography sx={{ fontSize: '1.05rem', color: AI4U_PALETTE.gray[800], lineHeight: 1.7, fontWeight: 500 }}>
                            La manufactura moderna sufre de una <Box component="span" sx={{ fontWeight: 900, color: AI4U_PALETTE.black }}>Parálisis por Fragmentación</Box>. Tiene sistemas para todo (ERP, MES, IoT, CRM), pero para responder una pregunta estratégica sencilla, usted depende de reportes manuales que tardan días en consolidarse. Ese tiempo entre el evento y la decisión es donde se pierde el margen.
                        </Typography>
                    </Paper>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: 3, height: '100%', borderRadius: 4, border: `1.5px solid ${AI4U_PALETTE.gray[300]}`, bgcolor: AI4U_PALETTE.white }}>
                                <Typography variant="h6" sx={{ mb: 2, color: AI4U_PALETTE.black, fontWeight: 800 }}>
                                    El Costo del "Lag" de Decisión
                                </Typography>
                                <Typography variant="body2" sx={{ color: AI4U_PALETTE.black, lineHeight: 1.6, fontWeight: 500 }}>
                                    Un cuello de botella en la Línea A detectado 4 horas tarde significa toneladas de producción perdida. La falta de un <Box component="span" sx={{ fontWeight: 900 }}>vínculo en tiempo real</Box> entre planta y gerencia castiga su EBITDA.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: 3, height: '100%', borderRadius: 4, border: `1.5px solid ${AI4U_PALETTE.gray[300]}`, bgcolor: AI4U_PALETTE.white }}>
                                <Typography variant="h6" sx={{ mb: 2, color: AI4U_PALETTE.black, fontWeight: 800 }}>
                                    Silos de Información Legacy
                                </Typography>
                                <Typography variant="body2" sx={{ color: AI4U_PALETTE.black, lineHeight: 1.6, fontWeight: 500 }}>
                                    Datos que están en el ERP nunca hablan con los del CRM. Super AI actúa como el orquestador que <Box component="span" sx={{ fontWeight: 900 }}>automatiza los flujos</Box> entre plataformas para que no haya burocracia digital.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: 3, height: '100%', borderRadius: 4, border: `1.5px solid ${AI4U_PALETTE.gray[300]}`, bgcolor: AI4U_PALETTE.white }}>
                                <Typography variant="h6" sx={{ mb: 2, color: AI4U_PALETTE.black, fontWeight: 800 }}>
                                    Dependencia de Persona Clave
                                </Typography>
                                <Typography variant="body2" sx={{ color: AI4U_PALETTE.black, lineHeight: 1.6, fontWeight: 500 }}>
                                    Si el analista de datos no está, el CEO no tiene visibilidad. Super AI democratiza el acceso a la inteligencia operativa corporativa <Box component="span" sx={{ fontWeight: 900 }}>sin depender de terceros</Box>.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* 2. LA SOLUCIÓN: SUPER AI EXECUTIVE */}
                <Box sx={{
                    mb: 12,
                    p: { xs: 4, md: 8 },
                    bgcolor: AI4U_PALETTE.black,
                    borderRadius: 6,
                    color: AI4U_PALETTE.white,
                    position: 'relative'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <SuperAIIcon sx={{ color: AI4U_PALETTE.accentColors.green, fontSize: 40 }} />
                        <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: -1, color: AI4U_PALETTE.white }}>
                            2. Super AI: Executive Orchestrator
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ mb: 5, color: AI4U_PALETTE.accentColors.green, fontWeight: 700 }}>
                        No es un software más; es la capa de inteligencia que orquesta su infraestructura actual.
                    </Typography>

                    <Grid container spacing={4} sx={{ mb: 6 }}>
                        {[
                            { icon: <IntegrationIcon sx={{ fontSize: 24 }} />, title: 'Orquestación de Sistemas', desc: 'Conecta ERPs (SAP, Oracle, Odoo) con sus canales de comunicación y sistemas de planta. Super AI maneja la data para que usted maneje el negocio.' },
                            { icon: <InsightsIcon sx={{ fontSize: 24 }} />, title: 'Inteligencia Operativa', desc: 'Reportes ejecutivos automáticos. Super AI analiza tendencias en tiempo real y alerta sobre desviaciones críticas antes de que afecten el P&L.' },
                            { icon: <FactoryIcon sx={{ fontSize: 24 }} />, title: 'Visibilidad de Planta 360°', desc: 'Interrogue a su fábrica en lenguaje natural. "¿Cuál es el cuello de botella actual en la línea 3?" Super AI responde basándose en data real.' }
                        ].map((skill, i) => (
                            <Grid item xs={12} key={i}>
                                <Box sx={{ p: 4, borderRadius: 4, bgcolor: alpha(AI4U_PALETTE.white, 0.05), border: `1px solid ${alpha(AI4U_PALETTE.white, 0.1)}` }}>
                                    <Stack direction="row" spacing={3} alignItems="flex-start">
                                        <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: alpha(AI4U_PALETTE.accentColors.green, 0.1), color: AI4U_PALETTE.accentColors.green }}>
                                            {skill.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>{skill.title}</Typography>
                                            <Typography variant="body1" sx={{ color: alpha(AI4U_PALETTE.white, 0.7), lineHeight: 1.6 }}>{skill.desc}</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ p: 4, borderRadius: 4, bgcolor: alpha(AI4U_PALETTE.accentColors.green, 0.1), border: `1px solid ${alpha(AI4U_PALETTE.accentColors.green, 0.3)}` }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 900, color: AI4U_PALETTE.white, mb: 2 }}>Métrica Clave para el CEO: El ROI de la Atención</Typography>
                        <Grid container spacing={3}>
                            {[
                                { label: 'Tiempo de Respuesta', val: '-85%', desc: 'De horas a segundos en consultas operativas.' },
                                { label: 'Carga Administrativa', val: '-40%', desc: 'Liberación de mandos medios para tareas de valor.' },
                                { label: 'Precisión de Data', val: '99.9%', desc: 'Eliminación del error humano en la captura y reporte.' }
                            ].map((m, i) => (
                                <Grid item xs={12} sm={4} key={i}>
                                    <Typography variant="h4" sx={{ color: AI4U_PALETTE.accentColors.green, fontWeight: 900, mb: 0.5 }}>{m.val}</Typography>
                                    <Typography variant="caption" sx={{ color: AI4U_PALETTE.white, fontWeight: 700, display: 'block', mb: 0.5 }}>{m.label}</Typography>
                                    <Typography variant="caption" sx={{ color: alpha(AI4U_PALETTE.white, 0.6), lineHeight: 1.2 }}>{m.desc}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

                {/* 3. INVERSIÓN ESTRATÉGICA */}
                <Box sx={{ mb: 12 }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 6 }}>
                        <Box sx={{ p: 1, borderRadius: 1, bgcolor: AI4U_PALETTE.black, color: AI4U_PALETTE.white, display: 'flex' }}>
                            <GrowthIcon fontSize="small" />
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 900, color: AI4U_PALETTE.black, letterSpacing: -0.5 }}>3. Inversión Estratégica</Typography>
                    </Stack>

                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 4, md: 6 },
                            borderRadius: 6,
                            border: `3px solid ${AI4U_PALETTE.black}`,
                            boxShadow: `0 40px 80px ${alpha(AI4U_PALETTE.black, 0.1)}`
                        }}
                    >
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="overline" sx={{ color: AI4U_PALETTE.gray[600], fontWeight: 800 }}>Orquestador Industrial (Setup)</Typography>
                                <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>$2,500 <Typography component="span" variant="h5">USD</Typography></Typography>
                                <Typography variant="body2" sx={{ color: AI4U_PALETTE.gray[700], mb: 4 }}>
                                    Incluye mapeo de arquitectura de datos, integración con 2 sistemas core (ERP/CRM) y entrenamiento del orquestador ejecutivo.
                                </Typography>

                                <Divider sx={{ mb: 4 }} />

                                <Typography variant="overline" sx={{ color: AI4U_PALETTE.gray[600], fontWeight: 800 }}>Acompañamiento Estratégico</Typography>
                                <Typography variant="h4" sx={{ fontWeight: 900 }}>$350 <Typography component="span" variant="body1">USD/mes</Typography></Typography>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" sx={{ fontWeight: 900, mb: 3 }}>Lo que usted recibe:</Typography>
                                <List>
                                    {[
                                        'Propiedad total de la infraestructura de IA',
                                        'Integración de data feeds en tiempo real',
                                        'Asistente de decisión vía WhatsApp/Web',
                                        'Mejoras continuas y nuevos conectores',
                                        'Soberanía total de datos (SaaS privado)'
                                    ].map((item) => (
                                        <ListItem key={item} disableGutters sx={{ py: 0.5 }}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <CheckIcon sx={{ color: AI4U_PALETTE.accentColors.green }} />
                                            </ListItemIcon>
                                            <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>

                {/* 4. SIGUIENTE PASO */}
                <Box sx={{
                    py: 8, px: 4,
                    borderRadius: 6,
                    background: AI4U_PALETTE.black,
                    color: AI4U_PALETTE.white,
                    textAlign: 'center'
                }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>Transforme su Operación</Typography>
                    <Typography variant="h6" sx={{ mb: 6, color: alpha(AI4U_PALETTE.white, 0.7), fontWeight: 400, maxWidth: 600, mx: 'auto' }}>
                        Agendemos una revisión de arquitectura técnica y objetivos ejecutivos para diseñar su hoja de ruta de orquestación.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                        <Button
                            variant="contained"
                            endIcon={<NextIcon />}
                            href={`https://${APP_CONFIG.CONTACT.CALENDLY}`}
                            target="_blank"
                            sx={{
                                bgcolor: AI4U_PALETTE.accentColors.green,
                                color: AI4U_PALETTE.black,
                                px: 6, py: 2, borderRadius: 3,
                                fontWeight: 900,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                '&:hover': { bgcolor: alpha(AI4U_PALETTE.accentColors.green, 0.8) }
                            }}
                        >
                            Agendar Sesión Ejecutiva
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<WhatsAppIcon />}
                            href={`https://wa.me/${APP_CONFIG.CONTACT.PHONE.replace(/\s+/g, '')}`}
                            target="_blank"
                            sx={{
                                borderColor: alpha(AI4U_PALETTE.white, 0.3),
                                color: AI4U_PALETTE.white,
                                px: 6, py: 2, borderRadius: 3,
                                fontWeight: 700,
                                textTransform: 'none',
                                '&:hover': { borderColor: AI4U_PALETTE.white, bgcolor: alpha(AI4U_PALETTE.white, 0.05) }
                            }}
                        >
                            Consultoría Directa
                        </Button>
                    </Stack>
                </Box>

            </Container>
        </Box>
    );
};

export default PropuestaManufactura;
