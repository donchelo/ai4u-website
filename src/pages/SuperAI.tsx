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
  TableRow,
  Paper
} from '@mui/material';
import { 
  CheckCircle, 
  TrendingUp, 
  Psychology, 
  Settings, 
  Speed,
  Autorenew,
  RocketLaunch,
  IntegrationInstructions,
  CompareArrows,
  Bolt,
  Schedule,
  Security,
  Undo,
  AttachMoney,
  ChevronRight,
  Add
} from '@mui/icons-material';
import { Typography, Giant, H1, H2, H3, H4, BodyText, Button, SEOHead, OptimizedImage } from '@/components/shared/ui/atoms';
import { ExpandableSection } from '@/components/shared/ui/molecules';
import { useColors } from '@/hooks';
import { SurfaceProvider } from '@/context';

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
    { icon: Bolt, title: 'ejecuta', description: 'Entiende tu negocio y actúa.' },
    { icon: Autorenew, title: 'automatiza', description: 'Propuestas, reportes, seguimiento.' },
    { icon: RocketLaunch, title: 'escala', description: '10 o 1000 clientes, mismo costo.' },
    { icon: Psychology, title: 'aprende', description: 'Tu lógica, métricas y prioridades.' },
    { icon: IntegrationInstructions, title: 'seIntegra', description: 'Gmail, Drive, Sheets, APIs. Todo.' }
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
      description: 'Conectamos a tu email, calendario, docs y APIs. 24 horas, cero disrupción.'
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
    { feature: 'Entiende tu contexto', chatbot: false, copilot: 'Parcial', superai: true },
    { feature: 'Integrado a tu stack', chatbot: false, copilot: 'Parcial', superai: true },
    { feature: 'Ejecuta 24/7', chatbot: false, copilot: false, superai: true },
    { feature: 'Aprende de ti', chatbot: false, copilot: 'Parcial', superai: true },
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
      for: 'Freelancers y startups'
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
      price: 'aMedida',
      period: '',
      features: [
        'Agenda una consultoría estratégica para diseñar la infraestructura personalizada que tu operación a gran escala necesita.'
      ],
      for: 'Empresas 25+ personas',
      buttonText: 'agendarConsulta'
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
          py: isModal ? { xs: 8, md: 12 } : { xs: 12, md: 25 },
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${colors.palette.gray[900]}`
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
                border: `1px solid ${colors.palette.accentColors.orange}40`,
                bgcolor: 'rgba(0,0,0,0.5)',
                mb: 2
              }}
            >
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: colors.palette.accentColors.orange, boxShadow: `0 0 10px ${colors.palette.accentColors.orange}` }} />
              <Typography
                sx={{
                  color: colors.palette.accentColors.orange,
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  fontFamily: '"Necto Mono", monospace',
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
                lineHeight: 0.9,
                fontSize: isModal ? { xs: '2.5rem', md: '4.5rem', lg: '5rem' } : { xs: '3rem', md: '5.5rem', lg: '6.5rem' },
                '& span': {
                  color: colors.palette.accentColors.orange,
                }
              }}
            >
              Tu Agente de IA Personal que <span>Escala tu Negocio</span> Mientras Duermes
            </Giant>

            <BodyText
              sx={{
                fontSize: { xs: '1.2rem', md: '1.6rem' },
                color: colors.palette.gray[400],
                maxWidth: '850px',
                fontWeight: 300,
                lineHeight: 1.4,
              }}
            >
              Tu propio CEO de IA. Ejecuta estrategias y genera revenue.
            </BodyText>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 4 }}>
              <Button
                variant="primary"
                size="large"
                href="https://calendly.com/mgarciap333/ai4u"
                target="_blank"
                sx={{
                  px: 6,
                  height: '75px',
                  fontSize: '1.1rem',
                  fontWeight: 900,
                  bgcolor: colors.palette.white,
                  color: colors.palette.black,
                  '&:hover': {
                    bgcolor: colors.palette.accentColors.orange,
                    color: colors.palette.white,
                  },
                }}
              >
                Solicita tu SuperAI hoy
              </Button>
              <Typography sx={{ color: colors.palette.gray[500], alignSelf: 'center', fontSize: '0.9rem', fontWeight: 600 }}>
                Llamada estratégica gratuita (30 min)
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Section 1: EL PROBLEMA */}
      <Box sx={{ py: { xs: 10, md: 15 }, background: colors.palette.black }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <H1 sx={{ color: colors.palette.white, mb: 4 }}>
                Eres Inteligente. <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>Tu Sistema No.</Box>
              </H1>
              <BodyText sx={{ color: colors.palette.gray[400], fontSize: '1.2rem', mb: 4 }}>
                40+ horas/semana en tareas que la IA resuelve en minutos.
              </BodyText>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                {problems.map((prob, idx) => (
                  <Box 
                    key={idx} 
                    sx={{ 
                      p: 3, 
                      border: `1px solid ${colors.palette.gray[900]}`, 
                      bgcolor: 'rgba(255,255,255,0.02)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0.5
                    }}
                  >
                    <H4 sx={{ color: colors.palette.white, fontSize: '1.1rem' }}>- {prob.title}</H4>
                    <BodyText sx={{ color: colors.palette.gray[500], fontSize: '0.9rem', pl: 2 }}>
                      ({prob.desc})
                    </BodyText>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <H3 sx={{ color: colors.palette.white, fontWeight: 300 }}>
              No falta talento. Falta <Box component="span" sx={{ fontWeight: 800, color: colors.palette.white }}>capacidad de ejecución.</Box>
            </H3>
          </Box>
        </Container>
      </Box>

      {/* Section 2: LA SOLUCIÓN */}
      <Box sx={{ py: { xs: 10, md: 18 }, background: colors.palette.gray[900], borderTop: `1px solid ${colors.palette.gray[800]}`, borderBottom: `1px solid ${colors.palette.gray[800]}` }}>
        <Container maxWidth="lg">
          <Stack spacing={8}>
            <Box textAlign="center">
              <H1 sx={{ color: colors.palette.white, mb: 3 }}>
                Presenta SuperAI: <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>Tu Execution Partner Inteligente</Box>
              </H1>
              <BodyText sx={{ color: colors.palette.gray[400], fontSize: '1.3rem' }}>
                No es un chatbot. Es un agente que ejecuta.
              </BodyText>
            </Box>

            <Grid container spacing={3}>
              {benefits.map((benefit, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box
                    sx={{
                      bgcolor: colors.palette.black,
                      p: 4,
                      height: '100%',
                      border: `1px solid ${colors.palette.gray[800]}`,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: colors.palette.accentColors.orange,
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <benefit.icon sx={{ fontSize: 40, color: colors.palette.accentColors.orange, mb: 2 }} />
                    <H4 sx={{ mb: 1, color: colors.palette.white, letterSpacing: '0.1em' }}>
                      ✓ {benefit.title}
                    </H4>
                    <BodyText sx={{ color: colors.palette.gray[400], fontSize: '0.95rem' }}>
                      {benefit.description}
                    </BodyText>
                  </Box>
                </Grid>
              ))}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    bgcolor: colors.palette.accentColors.orange,
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <H3 sx={{ color: colors.palette.white, mb: 3, fontWeight: 900 }}>Resultados:</H3>
                  <Stack spacing={1.5}>
                    {results.map((res, idx) => (
                      <BodyText key={idx} sx={{ color: colors.palette.white, fontWeight: 700, fontSize: '0.9rem' }}>
                        • {res}
                      </BodyText>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Section 3: CÓMO FUNCIONA */}
      <Box sx={{ py: { xs: 10, md: 15 }, background: colors.palette.black }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={10}>
            <H1 sx={{ color: colors.palette.white, mb: 2 }}>
              3 Pasos Hacia tu <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>Nuevo Superpoder</Box>
            </H1>
          </Box>
          <Grid container spacing={4}>
            {steps.map((step, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box sx={{ position: 'relative', pt: 6 }}>
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      fontSize: '6rem',
                      fontWeight: 900,
                      color: colors.palette.gray[900],
                      lineHeight: 1,
                      zIndex: 0
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Box sx={{ position: 'relative', zIndex: 1, pl: 2 }}>
                    <H3 sx={{ color: colors.palette.white, mb: 1 }}>{step.title}</H3>
                    <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 800, mb: 2, fontFamily: '"Necto Mono", monospace' }}>
                      {step.subtitle}
                    </Typography>
                    <BodyText sx={{ color: colors.palette.gray[400] }}>
                      {step.description}
                    </BodyText>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 10, textAlign: 'center', p: 4, border: `1px solid ${colors.palette.gray[900]}` }}>
            <BodyText sx={{ color: colors.palette.gray[400], fontSize: '1.1rem' }}>
              Mes 1: ROI obvio. Mes 3: <Box component="span" sx={{ color: colors.palette.white, fontWeight: 800 }}>transformacional.</Box>
            </BodyText>
          </Box>
        </Container>
      </Box>

      {/* Section 4: CASOS DE USO */}
      <Box sx={{ py: { xs: 10, md: 15 }, background: colors.palette.gray[900] }}>
        <Container maxWidth="lg">
          <H1 sx={{ textAlign: 'center', mb: 8, color: colors.palette.white }}>
            Mira lo que <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>SuperAI Hace</Box> en la Práctica
          </H1>
          <Grid container spacing={4}>
            {useCases.map((useCase, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Box sx={{ bgcolor: colors.palette.black, p: 5, height: '100%', borderLeft: `5px solid ${colors.palette.accentColors.orange}` }}>
                  <H3 sx={{ color: colors.palette.white, mb: 4, textTransform: 'none' }}>Para {useCase.category}</H3>
                  <Stack spacing={2.5}>
                    {useCase.items.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                        <CheckCircle sx={{ color: colors.palette.accentColors.orange, fontSize: 20, mt: 0.5 }} />
                        <BodyText sx={{ color: colors.palette.gray[300] }}>{item}</BodyText>
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
      <Box sx={{ py: { xs: 10, md: 15 }, background: colors.palette.black }}>
        <Container maxWidth="lg">
          <Stack spacing={6} alignItems="center">
            <Box textAlign="center">
              <H2 sx={{ color: colors.palette.white, mb: 2 }}>No es un ChatBot. No es un Copilot.</H2>
              <H1 sx={{ color: colors.palette.accentColors.orange }}>Es Tu Socio Ejecutivo.</H1>
            </Box>

            <TableContainer component={Paper} sx={{ bgcolor: 'transparent', boxShadow: 'none', borderRadius: 0, border: `1px solid ${colors.palette.gray[900]}` }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ borderBottom: `2px solid ${colors.palette.gray[800]}` }}>
                    <TableCell sx={{ color: colors.palette.gray[500], fontWeight: 800, py: 3, border: 'none' }}></TableCell>
                    <TableCell align="center" sx={{ color: colors.palette.white, fontWeight: 900, fontSize: '1.1rem', py: 3, border: 'none' }}>ChatBot</TableCell>
                    <TableCell align="center" sx={{ color: colors.palette.white, fontWeight: 900, fontSize: '1.1rem', py: 3, border: 'none' }}>Copilot</TableCell>
                    <TableCell align="center" sx={{ color: colors.palette.accentColors.orange, fontWeight: 900, fontSize: '1.2rem', py: 3, border: 'none' }}>SuperAI</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comparison.map((row, idx) => (
                    <TableRow key={idx} sx={{ borderBottom: `1px solid ${colors.palette.gray[900]}`, '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' } }}>
                      <TableCell sx={{ color: colors.palette.white, fontWeight: 600, py: 2.5, border: 'none' }}>{row.feature}</TableCell>
                      <TableCell align="center" sx={{ py: 2.5, border: 'none' }}>
                        {row.chatbot === true ? <CheckCircle sx={{ color: colors.palette.gray[700] }} /> : <Typography sx={{ color: colors.palette.gray[800], fontWeight: 900 }}>✗</Typography>}
                      </TableCell>
                      <TableCell align="center" sx={{ py: 2.5, border: 'none' }}>
                        {row.copilot === true ? <CheckCircle sx={{ color: colors.palette.gray[700] }} /> : (row.copilot === 'Parcial' ? <Typography sx={{ color: colors.palette.gray[600], fontWeight: 800, fontSize: '0.8rem' }}>parcial</Typography> : <Typography sx={{ color: colors.palette.gray[800], fontWeight: 900 }}>✗</Typography>)}
                      </TableCell>
                      <TableCell align="center" sx={{ py: 2.5, border: 'none' }}>
                        {row.superai === true ? <CheckCircle sx={{ color: colors.palette.accentColors.orange }} /> : <Typography sx={{ color: colors.palette.gray[800], fontWeight: 900 }}>✗</Typography>}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <H3 sx={{ color: colors.palette.white, fontWeight: 300, lineHeight: 1.4 }}>
                SuperAI no ayuda. <Box component="span" sx={{ fontWeight: 900, color: colors.palette.accentColors.orange }}>SuperAI ejecuta.</Box>
              </H3>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Section 7: PRECIOS */}
      <Box sx={{ py: { xs: 10, md: 20 }, background: colors.palette.black }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={10}>
            <H1 sx={{ color: colors.palette.white, mb: 2 }}>Inversión Mínima. <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>Retorno Máximo.</Box></H1>
          </Box>
          <Grid container spacing={4} alignItems="stretch">
            {pricing.map((tier, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box
                  sx={{
                    bgcolor: tier.highlight ? 'rgba(255,255,255,0.03)' : 'transparent',
                    border: tier.highlight ? `2px solid ${colors.palette.accentColors.orange}` : `1px solid ${colors.palette.gray[900]}`,
                    p: 5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  {tier.highlight && (
                    <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', bgcolor: colors.palette.accentColors.orange, color: colors.palette.white, px: 3, py: 0.5, fontWeight: 900, fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                      Más popular
                    </Box>
                  )}
                  <Typography sx={{ color: colors.palette.gray[500], fontWeight: 800, mb: 1, fontFamily: '"Necto Mono", monospace', letterSpacing: '0.1em' }}>
                    SuperAI {tier.name}
                  </Typography>
                  {tier.implementation != null && (
                    <Typography sx={{ color: colors.palette.gray[400], fontSize: '0.85rem', mb: 0.5 }}>
                      Implementación: {tier.implementation} USD <Box component="span" sx={{ color: colors.palette.gray[500] }}>(una vez)</Box>
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                    <Typography sx={{ color: colors.palette.white, fontSize: '3rem', fontWeight: 900 }}>{tier.price}</Typography>
                    {tier.period && <Typography sx={{ color: colors.palette.gray[500], ml: 1, fontWeight: 600 }}>{tier.period}</Typography>}
                  </Box>
                  <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 700, mb: 4, fontSize: '0.9rem' }}>{tier.for}</Typography>
                  
                  <Stack spacing={2} sx={{ mb: 6, flexGrow: 1 }}>
                    {tier.features.map((feat, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <Add sx={{ color: colors.palette.accentColors.orange, fontSize: 16 }} />
                        <BodyText sx={{ color: colors.palette.gray[300], fontSize: '0.9rem' }}>{feat}</BodyText>
                      </Box>
                    ))}
                  </Stack>

                  <Button
                    variant={tier.highlight ? 'primary' : 'outline'}
                    fullWidth
                    href="https://calendly.com/mgarciap333/ai4u"
                    target="_blank"
                    sx={{ height: '60px', fontWeight: 900 }}
                  >
                    {tier.buttonText || 'EMPEZAR AHORA'}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Consideraciones de Operación */}
          <Box 
            sx={{ 
              mt: 12, 
              p: { xs: 4, md: 6 }, 
              border: `1px solid ${colors.palette.gray[900]}`,
              bgcolor: 'rgba(255,255,255,0.02)',
              maxWidth: '900px',
              mx: 'auto'
            }}
          >
            <H3 sx={{ color: colors.palette.white, mb: 4, fontSize: '1.5rem', fontWeight: 900 }}>
              // Consideraciones de operación
            </H3>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 800, mb: 1, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                  Consumo de LLM & APIs
                </Typography>
                <BodyText sx={{ color: colors.palette.gray[400], fontSize: '0.95rem' }}>
                  Los costos de consumo de modelos (OpenAI, Anthropic, etc.) se facturan directamente a tu tarjeta. La inversión depende de la inteligencia y el volumen de ejecución requerido.
                </BodyText>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 800, mb: 1, fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                  Hardware dedicado
                </Typography>
                <BodyText sx={{ color: colors.palette.gray[400], fontSize: '0.95rem' }}>
                  SuperAI requiere una estación de trabajo (PC/Servidor) dedicada para garantizar ejecución continua 24/7 y total soberanía sobre tus datos.
                </BodyText>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Section 8: PREGUNTAS FRECUENTES */}
      <Box sx={{ py: { xs: 10, md: 15 }, background: colors.palette.gray[900] }}>
        <Container maxWidth="md">
          <H1 sx={{ textAlign: 'center', mb: 8, color: colors.palette.white }}>Preguntas Frecuentes</H1>
          <Stack spacing={2}>
            {faqs.map((faq, idx) => (
              <ExpandableSection
                key={idx}
                title={faq.q}
                variant="card"
              >
                <BodyText sx={{ color: colors.palette.gray[400], lineHeight: 1.7 }}>
                  {faq.a}
                </BodyText>
              </ExpandableSection>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Section 9: CALL TO ACTION FINAL */}
      <Box
        sx={{
          background: colors.palette.black,
          py: { xs: 12, md: 20 },
          textAlign: 'center',
          borderTop: `1px solid ${colors.palette.gray[900]}`,
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={6} alignItems="center">
            <Giant sx={{ color: colors.palette.white }}>¿Listo para Ejecutar a Velocidad?</Giant>

            <BodyText sx={{ color: colors.palette.white, fontWeight: 800, fontSize: '1.4rem', maxWidth: '700px' }}>
              Cuesta menos que un freelancer. Trabaja 24/7.
            </BodyText>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 4 }}>
              <Button
                variant="primary"
                size="large"
                href="https://calendly.com/mgarciap333/ai4u"
                target="_blank"
                sx={{
                  px: 8,
                  height: '80px',
                  fontSize: '1.3rem',
                  fontWeight: 900,
                  bgcolor: colors.palette.accentColors.orange,
                  color: colors.palette.white,
                  '&:hover': {
                    bgcolor: colors.palette.white,
                    color: colors.palette.black,
                  }
                }}
              >
                Solicita tu demo gratuita
              </Button>
              <Button
                variant="outline"
                size="large"
                href="https://calendly.com/mgarciap333/ai4u"
                target="_blank"
                sx={{
                  px: 6,
                  height: '80px',
                  fontSize: '1.1rem',
                  fontWeight: 900,
                  borderColor: colors.palette.gray[700],
                  color: colors.palette.white,
                }}
              >
                Ver cómo funciona
              </Button>
            </Stack>

            <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
              <Typography 
                component="a" 
                href={`https://wa.me/573218175744`} 
                target="_blank"
                sx={{ color: colors.palette.gray[500], fontWeight: 800, textDecoration: 'none', '&:hover': { color: colors.palette.white } }}
              >
                Whatsapp
              </Typography>
              <Typography 
                component="a" 
                href="mailto:contacto@ai4u.com.co" 
                sx={{ color: colors.palette.gray[500], fontWeight: 800, textDecoration: 'none', '&:hover': { color: colors.palette.white } }}
              >
                Email
              </Typography>
              <Typography 
                component="a" 
                href="https://calendly.com/mgarciap333/ai4u" 
                target="_blank"
                sx={{ color: colors.palette.gray[500], fontWeight: 800, textDecoration: 'none', '&:hover': { color: colors.palette.white } }}
              >
                Calendario
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Footer Branding */}
      <Box sx={{ py: 6, background: colors.palette.black, borderTop: `1px solid ${colors.palette.gray[900]}`, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <H2 sx={{ color: colors.palette.white, opacity: 0.5, fontWeight: 900 }}>SuperAI</H2>
        </Container>
      </Box>
    </SurfaceProvider>
  );
};

export default SuperAI;
