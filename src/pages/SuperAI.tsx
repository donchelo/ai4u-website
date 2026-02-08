import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Container, 
  Grid, 
  Box, 
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { 
  Psychology, 
  Autorenew, 
  RocketLaunch, 
  IntegrationInstructions, 
  Bolt,
  Add
} from '@mui/icons-material';
import Typography, { Giant, H1, H2, H3, H4, BodyText } from '@/components/shared/ui/atoms/Typography';
import { Button, SEOHead, OptimizedImage } from '@/components/shared/ui/atoms';
import { useColors } from '@/hooks';
import { SurfaceProvider } from '@/context';
import { COMPONENT_SPACING, SPACING_TOKENS } from '@/components/shared/ui/tokens/spacing';
import { TEXT_VARIANTS } from '@/components/shared/ui/tokens/typography';

interface SuperAIProps {
  isModal?: boolean;
}

const SuperAI: React.FC<SuperAIProps> = ({ isModal = false }) => {
  const colors = useColors();

  const problems = [
    { title: 'Generando propuestas', desc: 'Podrían ser automáticas' },
    { title: 'Respondiendo emails', desc: 'Podrían fluir solos' },
    { title: 'Persiguiendo clientes', desc: 'Podrían escalar sin ti' },
    { title: 'Ejecutando workflows', desc: 'Podrían correr 24/7' }
  ];

  const benefits = [
    { icon: Bolt, title: 'Ejecuta', description: 'Entiende tu negocio y actúa.' },
    { icon: Autorenew, title: 'Automatiza', description: 'Propuestas, reportes, seguimiento.' },
    { icon: RocketLaunch, title: 'Escala', description: '10 o 1000 clientes, mismo costo.' },
    { icon: Psychology, title: 'Aprende', description: 'Tu lógica, métricas y prioridades.' },
    { icon: IntegrationInstructions, title: 'Se integra', description: 'Gmail, Drive, Sheets, APIs. Todo.' }
  ];

  const results = [
    '+15 horas/semana recuperadas',
    'Propuestas 90% más rápido',
    'Prospecting automatizado',
    'Reportes sin intervención'
  ];

  const steps = [
    {
      num: '01',
      title: 'Integración',
      subtitle: 'Semana 1',
      description: 'Conectamos a tu email, calendario, docs y apis. 24 horas, cero disrupción.'
    },
    {
      num: '02',
      title: 'Aprendizaje',
      subtitle: 'Semana 2-3',
      description: 'Observa tus prioridades, métricas y decisiones. Aprende tu lógica.'
    },
    {
      num: '03',
      title: 'Ejecución',
      subtitle: 'Día 1 en adelante',
      description: 'Propuestas, reportes, oportunidades y workflows. 24/7.'
    }
  ];

  const useCases = [
    {
      category: 'Tech / IA',
      items: [
        'Propuestas técnicas en 3 min',
        'Prospecting automatizado',
        'Reportes en tiempo real'
      ]
    },
    {
      category: 'Consultoría',
      items: [
        'Propuestas personalizadas automáticas',
        'Seguimiento sin intervención',
        'ROI que se actualiza solo'
      ]
    },
    {
      category: 'E-commerce / SaaS',
      items: [
        'Análisis de clientes en tiempo real',
        'Comunicación personalizada',
        'Prospecting escalado'
      ]
    },
    {
      category: 'Servicios',
      items: [
        'Agendamiento automático',
        'Contratos y propuestas al instante',
        'Pipeline management autónomo'
      ]
    }
  ];

  const comparison = [
    { feature: 'Pregunta qué hacer', chatbot: true, copilot: true, superai: false },
    { feature: 'Entiende tu contexto', chatbot: false, copilot: 'parcial', superai: true },
    { feature: 'Integrado a tu stack', chatbot: false, copilot: 'parcial', superai: true },
    { feature: 'Ejecuta 24/7', chatbot: false, copilot: false, superai: true },
    { feature: 'Aprende de ti', chatbot: false, copilot: 'parcial', superai: true },
    { feature: 'ROI visible en 30 días', chatbot: false, copilot: false, superai: true },
  ];

  const pricing = [
    {
      name: 'Starter',
      implementation: '$1,000',
      price: '$100',
      period: 'USD/mes',
      features: [
        '3-5 herramientas integradas',
        'Propuestas + emails automáticos',
        'Reportes semanales'
      ],
      for: 'Freelancers y Startups'
    },
    {
      name: 'Professional',
      implementation: '$2,000',
      price: '$200',
      period: 'USD/mes',
      features: [
        '10+ herramientas integradas',
        'Operaciones automatizadas',
        'Prospecting + insights',
        'Reportes diarios + alertas'
      ],
      for: 'Empresas 5-24 personas',
      highlight: true
    },
    {
      name: 'Enterprise',
      implementation: null,
      price: 'A medida',
      period: '',
      features: [
        'Agenda una consultoría estratégica para diseñar la infraestructura personalizada que tu operación a gran escala necesita.'
      ],
      for: 'Empresas 25+ personas',
      buttonText: 'Agendar consulta'
    }
  ];

  const faqs = [
    {
      q: '¿Cuánto tiempo de implementación?',
      a: '1-2 semanas. ROI visible en 30 días.'
    },
    {
      q: '¿Procesos muy únicos?',
      a: 'Justamente. Si se automatiza una vez, es automático para siempre.'
    },
    {
      q: '¿Seguridad de datos?',
      a: 'Enterprise-grade. Encriptación end-to-end. GDPR, CCPA.'
    },
    {
      q: '¿Puedo cancelar?',
      a: 'Sí, cuando quieras. Sin contratos de permanencia.'
    },
    {
      q: '¿Cuál es el ROI real?',
      a: '15 horas/semana recuperadas × tu costo/hora = ROI 9.75x en el plan Starter.'
    }
  ];

  return (
    <SurfaceProvider surface="black">
      <Helmet>
        <title>SuperAI - Tu Agente de IA Personal que Escala tu Negocio | AI4U</title>
        <meta name="description" content="SuperAI: Tu socio ejecutivo de IA que entiende tu negocio y ejecuta tus estrategias mientras duermes. Automatiza propuestas, emails y workflows." />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          background: colors.palette.black,
          py: isModal ? COMPONENT_SPACING.layout.container : COMPONENT_SPACING.layout.section,
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `${SPACING_TOKENS.borderWidth.default}px solid ${colors.palette.gray[900]}`
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Box
              sx={{
                width: { xs: 180, md: 280, lg: 350 },
                height: { xs: 180, md: 280, lg: 350 },
                position: 'relative',
                mb: 2,
                filter: 'drop-shadow(0 0 50px rgba(255,255,255,0.15))',
                animation: 'float 10s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0) scale(1)' },
                  '50%': { transform: 'translateY(-20px) scale(1.02)' },
                }
              }}
            >
              <OptimizedImage 
                src="/assets/images/bancolombia/AI4U 4rt (19).png" 
                alt="SuperAI Protagonist"
                priority
                sx={{ 
                  filter: 'invert(1)', 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 0.5,
                border: `${SPACING_TOKENS.borderWidth.default}px solid ${colors.palette.accentColors.orange}40`,
                bgcolor: 'rgba(0,0,0,0.5)',
                mb: 2
              }}
            >
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: colors.palette.accentColors.orange, boxShadow: `0 0 10px ${colors.palette.accentColors.orange}` }} />
              <Typography
                sx={{
                  color: colors.palette.accentColors.orange,
                  ...TEXT_VARIANTS.ui.code,
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'none'
                }}
              >
                SuperAI // theExecutionPartner
              </Typography>
            </Box>

            <Giant
              sx={{
                color: colors.palette.white,
                maxWidth: '1100px',
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                fontSize: isModal ? { xs: '3rem', md: '5rem' } : { xs: '3.5rem', md: '8rem' },
                '& span': {
                  color: colors.palette.accentColors.orange,
                  display: 'inline-block',
                  transform: 'rotate(1deg)',
                  fontWeight: 500
                }
              }}
            >
              Tu agente de IA personal que <span>escala tu negocio</span> mientras duermes
            </Giant>

            <BodyText
              sx={{
                fontSize: '1.8rem',
                color: colors.palette.white,
                maxWidth: '850px',
                fontWeight: 400,
                lineHeight: 1.1,
                opacity: 0.9
              }}
            >
              Tu propio CEO de IA. Ejecuta estrategias y genera revenue.
            </BodyText>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{ pt: 6 }}>
              <Button
                variant="primary"
                size="large"
                href="https://calendly.com/mgarciap333/ai4u"
                target="_blank"
                sx={{
                  px: 8,
                  py: 4,
                  height: 'auto',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  bgcolor: colors.palette.white,
                  color: colors.palette.black,
                  borderRadius: 0,
                  '&:hover': {
                    bgcolor: colors.palette.accentColors.orange,
                    color: colors.palette.black,
                    transform: 'translateY(-10px)'
                  },
                }}
              >
                Solicita tu SuperAI hoy
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Section 1: EL PROBLEMA */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, background: colors.palette.black, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: '10%', right: '5%', fontSize: '15rem', fontWeight: 400, color: 'rgba(255,255,255,0.02)', zIndex: 0, pointerEvents: 'none' }}>
          fail
        </Box>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} md={7} sx={{ pr: { md: 10 } }}>
              <H1 sx={{ 
                color: colors.palette.white, 
                fontSize: { xs: '3.5rem', md: '7rem' },
                lineHeight: 0.85,
                fontWeight: 400,
                letterSpacing: '-0.05em',
                mb: 6 
              }}>
                Eres inteligente. <br/>
                <Box component="span" sx={{ bgcolor: colors.palette.accentColors.orange, color: colors.palette.black, px: 2, display: 'inline-block', transform: 'rotate(-1deg)' }}>Tu sistema no.</Box>
              </H1>
              <BodyText sx={{ color: colors.palette.white, fontSize: '1.8rem', fontWeight: 400, mb: 6, opacity: 0.9 }}>
                40+ horas/semana en tareas que la IA resuelve en minutos.
              </BodyText>
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack spacing={2}>
                {problems.map((prob, idx) => (
                  <Box 
                    key={idx} 
                    sx={{ 
                      p: 4, 
                      border: `1px solid rgba(255,255,255,0.1)`, 
                      bgcolor: 'transparent',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      transform: `translateX(${idx * 20}px)`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.05)',
                        borderColor: colors.palette.accentColors.orange
                      }
                    }}
                  >
                    <Typography sx={{ color: colors.palette.accentColors.orange, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                      // problem.0{idx + 1}
                    </Typography>
                    <Typography sx={{ color: colors.palette.white, fontSize: '1.5rem', fontWeight: 400, textTransform: 'none', lineHeight: 1 }}>{prob.title}</Typography>
                    <BodyText sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '1rem' }}>
                      {prob.desc}
                    </BodyText>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 2: LA SOLUCIÓN */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section, 
        background: colors.palette.white, 
        color: colors.palette.black,
        position: 'relative'
      }}>
        <Container maxWidth="xl">
          <Stack spacing={12}>
            <Box textAlign="left">
              <H1 sx={{ 
                color: colors.palette.black, 
                fontSize: { xs: '3.5rem', md: '7rem' },
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                mb: 4 
              }}>
                SuperAI: <br/>
                <Box component="span" sx={{ color: colors.palette.accentColors.orange, fontWeight: 500 }}>Tu partner de ejecución</Box>
              </H1>
              <BodyText sx={{ color: colors.palette.black, fontSize: '2rem', fontWeight: 400, opacity: 0.5 }}>
                No es un chatbot. Es un agente que ejecuta.
              </BodyText>
            </Box>

            <Grid container spacing={0}>
              {benefits.map((benefit, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box
                    sx={{
                      bgcolor: colors.palette.white,
                      color: colors.palette.black,
                      p: 6,
                      height: '100%',
                      border: `1px solid rgba(0,0,0,0.05)`,
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      '&:hover': {
                        bgcolor: colors.palette.black,
                        color: colors.palette.white,
                        zIndex: 2,
                        transform: 'scale(1.05) translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                        '& .icon': { color: colors.palette.white }
                      },
                    }}
                  >
                    <benefit.icon className="icon" sx={{ fontSize: 60, color: colors.palette.accentColors.orange, mb: 4, transition: 'color 0.4s ease' }} />
                    <H4 sx={{ mb: 2, fontSize: '1.8rem', fontWeight: 400, letterSpacing: '-0.02em', textTransform: 'none' }}>
                      {benefit.title}
                    </H4>
                    <BodyText sx={{ fontSize: '1.1rem', fontWeight: 400, opacity: 0.9 }}>
                      {benefit.description}
                    </BodyText>
                  </Box>
                </Grid>
              ))}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    bgcolor: colors.palette.black,
                    color: colors.palette.white,
                    p: 6,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    border: `1px solid ${colors.palette.black}`
                  }}
                >
                  <H3 sx={{ color: colors.palette.accentColors.orange, mb: 4, fontWeight: 400, fontSize: '2rem' }}>resultados:</H3>
                  <Stack spacing={3}>
                    {results.map((res, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ width: 20, height: 1, bgcolor: colors.palette.accentColors.orange }} />
                        <BodyText sx={{ fontWeight: 400, fontSize: '1.2rem' }}>
                          {res}
                        </BodyText>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Section 3: CÓMO FUNCIONA */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, background: colors.palette.black, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', bgcolor: 'rgba(255,255,255,0.05)' }} />
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="left" mb={12}>
            <H1 sx={{ 
              color: colors.palette.white, 
              fontSize: { xs: '3.5rem', md: '7rem' },
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              mb: 4 
            }}>
              3 pasos hacia tu <br/>
              <Box component="span" sx={{ color: colors.palette.accentColors.orange, fontWeight: 500 }}>nuevo superpoder</Box>
            </H1>
          </Box>
          <Grid container spacing={0}>
            {steps.map((step, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box sx={{ 
                  p: 6, 
                  borderLeft: `1px solid rgba(255,255,255,0.1)`,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.02)',
                    borderColor: colors.palette.accentColors.orange
                  }
                }}>
                  <Typography
                    sx={{
                      fontSize: '4rem',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.05)',
                      lineHeight: 1,
                      mb: 4,
                      fontFamily: '"Necto Mono", monospace'
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Box sx={{ pl: 2 }}>
                    <H3 sx={{ color: colors.palette.white, mb: 2, fontSize: '2rem', fontWeight: 400, textTransform: 'none' }}>{step.title}</H3>
                    <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, mb: 3, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                      // {step.subtitle.toLowerCase()}
                    </Typography>
                    <BodyText sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '1.1rem', fontWeight: 400 }}>
                      {step.description.toLowerCase()}
                    </BodyText>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Section 4: CASOS DE USO */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, background: colors.palette.accentColors.green, color: colors.palette.black }}>
        <Container maxWidth="xl">
          <H1 sx={{ 
            textAlign: 'left', 
            mb: 12, 
            color: colors.palette.black,
            fontSize: { xs: '3.5rem', md: '6.5rem' },
            lineHeight: 1.0,
            fontWeight: 400,
            letterSpacing: '-0.02em'
          }}>
            Mira lo que <br/>
            <Box component="span" sx={{ bgcolor: colors.palette.black, color: colors.palette.white, px: 2, display: 'inline-block' }}>SuperAI hace</Box> en la práctica
          </H1>
          <Grid container spacing={4}>
            {useCases.map((useCase, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box sx={{ 
                  bgcolor: colors.palette.white, 
                  p: 6, 
                  height: '100%', 
                  border: `2px solid ${colors.palette.black}`,
                  boxShadow: `15px 15px 0px ${colors.palette.black}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translate(-5px, -5px)',
                    boxShadow: `25px 25px 0px ${colors.palette.black}`,
                  }
                }}>
                  <H3 sx={{ color: colors.palette.black, mb: 4, textTransform: 'none', fontSize: '2rem', fontWeight: 400 }}>para {useCase.category}</H3>
                  <Stack spacing={3}>
                    {useCase.items.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Box sx={{ width: 10, height: 10, bgcolor: colors.palette.black, mt: 1.5 }} />
                        <BodyText sx={{ color: colors.palette.black, fontSize: '1.2rem', fontWeight: 400, opacity: 0.8 }}>{item.toLowerCase()}</BodyText>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Section 5: DIFERENCIACIÓN */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, background: colors.palette.black }}>
        <Container maxWidth="xl">
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} md={5} sx={{ pr: { md: 10 }, mb: { xs: 8, md: 0 } }}>
              <H2 sx={{ color: colors.palette.white, mb: 4, fontSize: '3rem', fontWeight: 400, lineHeight: 1 }}>No es un chatbot. <br/>No es un copilot.</H2>
              <H1 sx={{ 
                color: colors.palette.accentColors.orange,
                fontSize: { xs: '3.5rem', md: '6rem' },
                lineHeight: 0.85,
                fontWeight: 400,
                letterSpacing: '-0.05em'
              }}>
                Es tu socio <br/>ejecutivo.
              </H1>
            </Grid>

            <Grid item xs={12} md={7}>
              <TableContainer component={Box} sx={{ bgcolor: 'transparent', boxShadow: 'none', borderRadius: 0 }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ borderBottom: `1px solid rgba(255,255,255,0.2)` }}>
                      <TableCell sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400, py: 4, border: 'none', ...TEXT_VARIANTS.ui.code }}>// feature</TableCell>
                      <TableCell align="center" sx={{ color: colors.palette.white, fontWeight: 400, fontSize: '1.2rem', py: 4, border: 'none' }}>chatbot</TableCell>
                      <TableCell align="center" sx={{ color: colors.palette.white, fontWeight: 400, fontSize: '1.2rem', py: 4, border: 'none' }}>copilot</TableCell>
                      <TableCell align="center" sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, fontSize: '1.5rem', py: 4, border: 'none' }}>superai</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparison.map((row, idx) => (
                      <TableRow key={idx} sx={{ borderBottom: `1px solid rgba(255,255,255,0.1)`, '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' } }}>
                        <TableCell sx={{ color: colors.palette.white, fontWeight: 400, py: 3, border: 'none', fontSize: '1.1rem', opacity: 0.9 }}>{row.feature}</TableCell>
                        <TableCell align="center" sx={{ py: 3, border: 'none' }}>
                          {row.chatbot === true ? <Box sx={{ width: 12, height: 12, bgcolor: 'rgba(255,255,255,0.4)', mx: 'auto' }} /> : <Typography sx={{ color: 'rgba(255,255,255,0.2)', fontWeight: 400 }}>-</Typography>}
                        </TableCell>
                        <TableCell align="center" sx={{ py: 3, border: 'none' }}>
                          {row.copilot === true ? <Box sx={{ width: 12, height: 12, bgcolor: 'rgba(255,255,255,0.4)', mx: 'auto' }} /> : (row.copilot === 'parcial' ? <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400, fontSize: '0.8rem' }}>parcial</Typography> : <Typography sx={{ color: 'rgba(255,255,255,0.2)', fontWeight: 400 }}>-</Typography>)}
                        </TableCell>
                        <TableCell align="center" sx={{ py: 3, border: 'none' }}>
                          {row.superai === true ? <Box sx={{ width: 16, height: 16, bgcolor: colors.palette.accentColors.orange, mx: 'auto', transform: 'rotate(45deg)' }} /> : <Typography sx={{ color: 'rgba(255,255,255,0.05)', fontWeight: 400 }}>-</Typography>}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 7: PRECIOS */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, background: colors.palette.black }}>
        <Container maxWidth="xl">
          <Box textAlign="left" mb={12}>
            <H1 sx={{ 
              color: colors.palette.white, 
              fontSize: { xs: '3.5rem', md: '7rem' },
              lineHeight: 0.85,
              fontWeight: 400,
              letterSpacing: '-0.05em',
              mb: 4 
            }}>
              Inversión mínima. <br/>
              <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>Retorno máximo.</Box>
            </H1>
            
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 1,
                border: `1px solid ${colors.palette.accentColors.orange}40`,
                bgcolor: 'rgba(255,102,0,0.05)',
                mt: 2
              }}
            >
              <RocketLaunch sx={{ color: colors.palette.accentColors.orange, fontSize: '1.2rem' }} />
              <Typography
                sx={{
                  color: colors.palette.accentColors.orange,
                  ...TEXT_VARIANTS.ui.code,
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                  textTransform: 'none',
                  fontWeight: 600
                }}
              >
                // precio de lanzamiento por tiempo limitado
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={0} alignItems="stretch">
            {pricing.map((tier, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box
                  sx={{
                    bgcolor: tier.highlight ? 'rgba(255,255,255,0.03)' : 'transparent',
                    border: tier.highlight ? `1px solid ${colors.palette.accentColors.orange}` : `1px solid rgba(255,255,255,0.1)`,
                    p: 6,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    zIndex: tier.highlight ? 2 : 1,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.05)',
                      transform: 'translateY(-10px)',
                      zIndex: 3
                    }
                  }}
                >
                  {tier.highlight && (
                    <Box sx={{ position: 'absolute', top: 0, left: 0, bgcolor: colors.palette.accentColors.orange, color: colors.palette.black, px: 2, py: 0.5, fontWeight: 400, fontSize: '0.8rem', ...TEXT_VARIANTS.ui.code }}>
                      // más popular
                    </Box>
                  )}
                  <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400, mb: 4, ...TEXT_VARIANTS.ui.code, fontSize: '1rem' }}>
                    superai {tier.name}
                  </Typography>
                  {tier.implementation != null && (
                    <Typography sx={{ color: colors.palette.white, opacity: 0.5, mb: 1, fontSize: '0.9rem' }}>
                      implementación: {tier.implementation} usd (una vez)
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                    <Typography sx={{ color: colors.palette.white, fontSize: '4rem', fontWeight: 400, lineHeight: 1 }}>{tier.price}</Typography>
                    {tier.period && <Typography sx={{ color: 'rgba(255,255,255,0.3)', ml: 1, fontWeight: 400 }}>{tier.period}</Typography>}
                  </Box>
                  {tier.price !== 'A medida' && (
                    <Typography sx={{ color: colors.palette.accentColors.green, fontSize: '0.8rem', mb: 2, ...TEXT_VARIANTS.ui.code }}>
                      // precio de lanzamiento
                    </Typography>
                  )}
                  <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, mb: 6, fontSize: '1.2rem' }}>{tier.for}</Typography>
                  
                  <Stack spacing={2} sx={{ mb: 8, flexGrow: 1 }}>
                    {tier.features.map((feat, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Box sx={{ width: 8, height: 8, bgcolor: colors.palette.accentColors.orange, mt: 1 }} />
                        <BodyText sx={{ color: colors.palette.white, opacity: 0.9, fontSize: '1rem' }}>{feat.toLowerCase()}</BodyText>
                      </Box>
                    ))}
                  </Stack>

                  <Button
                    variant={tier.highlight ? 'primary' : 'outline'}
                    fullWidth
                    href="https://calendly.com/mgarciap333/ai4u"
                    target="_blank"
                    sx={{ 
                      height: 'auto', 
                      py: 3,
                      fontWeight: 400, 
                      borderRadius: 0,
                      fontSize: '1.2rem',
                      borderColor: tier.highlight ? colors.palette.accentColors.orange : 'rgba(255,255,255,0.3)',
                      bgcolor: tier.highlight ? colors.palette.accentColors.orange : 'transparent',
                      color: tier.highlight ? colors.palette.black : colors.palette.white,
                      '&:hover': {
                        bgcolor: colors.palette.white,
                        color: colors.palette.black,
                        borderColor: colors.palette.white
                      }
                    }}
                  >
                    {tier.buttonText || 'empezar ahora'}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Considerations */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section, 
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <Box 
            sx={{ 
              p: 8, 
              border: `1px solid rgba(255,255,255,0.1)`,
              bgcolor: 'rgba(255,255,255,0.02)',
              position: 'relative'
            }}
          >
            <Box sx={{ position: 'absolute', top: -1, right: -1, width: 60, height: 60, borderTop: '1px solid orange', borderRight: '1px solid orange' }} />
            <H3 sx={{ color: colors.palette.white, mb: 6, fontSize: '1.8rem', fontWeight: 400 }}>
              // consideraciones de operación
            </H3>
            <Grid container spacing={8}>
              <Grid item xs={12} md={6}>
                <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // consumo de llm & apis
                </Typography>
                <BodyText sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  los costos de consumo de modelos (openai, anthropic, etc.) se facturan directamente a tu tarjeta. la inversión depende de la inteligencia y el volumen de ejecución requerido.
                </BodyText>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // hardware dedicado
                </Typography>
                <BodyText sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  superai requiere una estación de trabajo (pc/servidor) dedicada para garantizar ejecución continua 24/7 y total soberanía sobre tus datos.
                </BodyText>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Section 8: PREGUNTAS FRECUENTES */}
      <Box sx={{ py: 12, background: colors.palette.white }}>
        <Container maxWidth="lg">
          <Typography sx={{ 
            textAlign: 'left', 
            mb: 4, 
            color: colors.palette.black,
            fontSize: '0.9rem',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            opacity: 0.5
          }}>
            Preguntas frecuentes
          </Typography>
          <Box sx={{ maxWidth: '900px' }}>
            {faqs.map((faq, idx) => (
              <Box key={idx} sx={{ mb: 2 }}>
                <Typography component="span" sx={{ fontWeight: 400, fontSize: '1rem', color: colors.palette.black, mr: 1.5 }}>
                  {faq.q}
                </Typography>
                <Typography component="span" sx={{ color: colors.palette.black, opacity: 0.5, fontSize: '1rem', lineHeight: 1.6 }}>
                  {faq.a}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Section 9: CALL TO ACTION FINAL */}
      <Box
        sx={{
          background: colors.palette.black,
          py: 30,
          textAlign: 'left',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={10} alignItems="flex-start">
            <Giant sx={{ 
              color: colors.palette.white,
              fontSize: { xs: '3.5rem', md: '10rem' },
              lineHeight: 0.8,
              fontWeight: 400,
              letterSpacing: '-0.05em'
            }}>
              ¿Listo para <br/>
              ejecutar a <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>velocidad</Box>?
            </Giant>

            <BodyText sx={{ color: colors.palette.white, fontWeight: 400, fontSize: '2rem', opacity: 0.9, maxWidth: '800px' }}>
              Cuesta menos que un freelancer. Trabaja 24/7.
            </BodyText>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{ pt: 4 }}>
              <Button
                variant="primary"
                size="large"
                href="https://calendly.com/mgarciap333/ai4u"
                target="_blank"
                sx={{
                  px: 10,
                  py: 4,
                  height: 'auto',
                  fontSize: '1.8rem',
                  fontWeight: 400,
                  bgcolor: colors.palette.accentColors.orange,
                  color: colors.palette.black,
                  borderRadius: 0,
                  '&:hover': {
                    bgcolor: colors.palette.white,
                    color: colors.palette.black,
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                Solicita tu demo gratuita
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Footer Branding */}
      <Box sx={{ py: 6, background: colors.palette.black, borderTop: `${SPACING_TOKENS.borderWidth.default}px solid ${colors.palette.gray[900]}`, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <H2 sx={{ color: colors.palette.white, opacity: 0.8, fontWeight: 400 }}>SuperAI</H2>
        </Container>
      </Box>
    </SurfaceProvider>
  );
};

export default SuperAI;
