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
  Add,
  Code,
  Terminal,
  Public,
  Home,
  Palette,
  BusinessCenter,
  Chat,
  HealthAndSafety,
  Build,
  Groups,
  PrecisionManufacturing,
  ShowChart,
  TrendingUp,
  Biotech,
  LocalShipping
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
    { title: 'Incapacidad de Escalar', desc: 'Tu operación depende de procesos manuales que no pueden crecer sin contratar más personal.' },
    { title: 'Silos de Información', desc: 'Datos dispersos en múltiples plataformas que no se comunican entre sí, causando errores.' },
    { title: 'Costos Operativos Altos', desc: 'Tareas repetitivas consumen el 70% del tiempo de tu equipo senior.' },
    { title: 'Falta de Trazabilidad', desc: 'Dificultad para auditar decisiones y acciones tomadas en procesos críticos de negocio.' }
  ];

  const benefits = [
    { icon: Bolt, title: 'Agentes Ejecutores', description: 'No solo responden dudas; tienen autonomía para operar en tus sistemas (Email, CRM, ERP).' },
    { icon: Autorenew, title: 'Optimización de Procesos', description: 'Diseñamos y refinamos el protocolo operativo de cada área de tu empresa.' },
    { icon: RocketLaunch, title: 'Integración vía Skills', description: 'Conectamos tu infraestructura actual con capacidades avanzadas de IA sin cambiar tu software.' },
    { icon: Psychology, title: 'Gobernanza de Datos', description: 'Toda la ejecución ocurre bajo protocolos de seguridad privados y auditables.' },
    { icon: IntegrationInstructions, title: 'Arquitectura a Medida', description: 'Construimos la infraestructura de IA específica para los KPIs de tu negocio.' }
  ];

  const results = [
    'Reducción del 40% en carga operativa',
    'Disponibilidad de ejecución 24/7',
    'Integración total de sistemas core',
    'Reportabilidad estratégica en tiempo real'
  ];

  const steps = [
    {
      num: '01',
      title: 'Diagnóstico & Viabilidad',
      subtitle: 'Sesión Inicial',
      description: 'Analizamos tus procesos actuales y definimos el potencial de retorno de inversión (ROI).'
    },
    {
      num: '02',
      title: 'Implementación de Protocolo',
      subtitle: 'Semanas 1-4',
      description: 'Configuramos la infraestructura y entrenamos los primeros agentes ejecutores.'
    },
    {
      num: '03',
      title: 'Escalamiento de Skills',
      subtitle: 'Recurrente',
      description: 'Auditoría mensual y despliegue de nuevas habilidades según el crecimiento del negocio.'
    }
  ];

  const useCases = [
    {
      category: 'Área: Ventas & CRM',
      items: [
        'Cualificación autónoma de leads',
        'Sincronización de datos entre sistemas',
        'Seguimiento proactivo de propuestas'
      ]
    },
    {
      category: 'Área: Operaciones',
      items: [
        'Automatización de logística y despacho',
        'Monitoreo de inventarios inteligente',
        'Gestión de proveedores automatizada'
      ]
    },
    {
      category: 'Área: Finanzas',
      items: [
        'Conciliación bancaria automática',
        'Gestión de facturación y cobros',
        'Reportes de flujo de caja en tiempo real'
      ]
    },
    {
      category: 'Área: RRHH',
      items: [
        'Filtrado inteligente de candidatos',
        'Onboarding asistido por agentes',
        'Gestión de consultas internas 24/7'
      ]
    }
  ];

  const skillsLibrary = [
    {
      category: 'Recursos Humanos',
      icon: Groups,
      skills: ['Filtro de CVs', 'Programación de Entrevistas', 'Onboarding Digital', 'Análisis de Clima', 'Gestión de Permisos', 'Payroll Assistant']
    },
    {
      category: 'Producción',
      icon: PrecisionManufacturing,
      skills: ['Control de Inventario', 'Predictivo de Mantenimiento', 'Gestión de Órdenes', 'Optimización de Rutas', 'Control de Calidad', 'IoT Monitor']
    },
    {
      category: 'Ventas',
      icon: TrendingUp,
      skills: ['Cualificación de Leads', 'Booking Automático', 'Update de CRM', 'Análisis de Pipeline', 'Personalización Outbound', 'Competitor Analysis']
    },
    {
      category: 'Mercadeo',
      icon: ShowChart,
      skills: ['Gestión de Ads', 'Social Media Triage', 'Email Marketing Flow', 'Content Personalization', 'ROI Tracker', 'Market Research']
    },
    {
      category: 'Finanzas',
      icon: BusinessCenter,
      skills: ['Conciliación Bancaria', 'OCR de Facturas', 'Control de Gastos', 'Cashflow Forecast', 'Tax Compliance Prep', 'Audit Log Assist']
    },
    {
      category: 'I+D & Delivery',
      icon: Biotech,
      skills: ['Búsqueda de Patentes', 'Resumen de Papers', 'Tracking de Envíos', 'Optimización Logística', 'Feedback Analysis', 'Fleet Management']
    }
  ];

  const marqueeSkills = [
    'salesforce-sync', 'hubspot-automation', 'sap-integration', 'oracle-data-flow', 'microsoft-365-exec',
    'logistics-tracking', 'inventory-ai', 'hr-screening', 'payroll-automation', 'financial-reconciliation',
    'compliance-check', 'leads-qualification', 'whatsapp-crm', 'slack-ops', 'bi-reporting',
    'customer-success-bot', 'ticket-triage', 'legal-review', 'market-analysis', 'competitor-watch',
    'fleet-optimization', 'warehouse-ai', 'order-processing', 'invoicing-automation', 'tax-prep'
  ];

  const comparison = [
    { feature: 'Autonomía de Ejecución', chatbot: false, copilot: 'limitada', superai: true },
    { feature: 'Conectividad Multi-Sistema', chatbot: false, copilot: 'parcial', superai: true },
    { feature: 'Aprende Procesos Únicos', chatbot: false, copilot: false, superai: true },
    { feature: 'Gobernanza y Auditoría', chatbot: false, copilot: false, superai: true },
    { feature: 'Mantenimiento Proactivo', chatbot: false, copilot: false, superai: true },
    { feature: 'Consultoría Estratégica Mensual', chatbot: false, copilot: false, superai: true },
  ];

  const pricing = [
    {
      name: 'Discovery',
      implementation: null,
      price: 'Gratis',
      period: '',
      features: [
        'Llamada diagnóstica de 30 min',
        'Roadmap de arquitectura IA personalizado',
        'Proyección de ahorro y ROI',
        'Mapa de integración con tus sistemas',
        'Plan de implementación detallado'
      ],
      for: 'Para empresas explorando IA',
      buttonText: 'Agendar diagnóstico'
    },
    {
      name: 'Starter',
      implementation: '$1,000',
      price: '$100',
      period: 'usd/mes',
      includes: 'Incluye:',
      features: [
        'Suite completo: email, drive, tasks, dashboard',
        '8 agentes + 8 skills pre-construidos',
        'Sesión de onboarding 1-a-1',
        '1 reunión mensual de seguimiento (45 min)',
        'Capacitación para entrenar tu propio asistente',
        'Soporte WhatsApp en horario de oficina',
        'Tu asistente sigue operando al terminar el contrato'
      ],
      for: 'Emprendedores y equipos de 1-10 personas',
      buttonText: 'Empezar ahora'
    },
    {
      name: 'Business',
      implementation: '$2,000',
      price: '$200',
      period: 'usd/mes',
      includes: 'Todo lo de Starter, más:',
      features: [
        '3 skills adicionales configurados a medida',
        'Reunión mensual con enfoque estratégico',
        'Capacitación para que todo tu equipo entrene el asistente'
      ],
      for: 'Empresas en crecimiento de 10-50 personas',
      highlight: true,
      buttonText: 'Empezar ahora'
    },
    {
      name: 'Enterprise',
      implementation: '$3,000',
      price: '$300',
      period: 'usd/mes',
      includes: 'Todo lo de Business, más:',
      features: [
        '2 skills adicionales a medida (5 total)',
        '2 reuniones mensuales estratégicas (45 min c/u)',
        'Workshop virtual trimestral de educación IA',
        'Consultoría estratégica: agentes con visión de negocio'
      ],
      for: 'Empresas de 50+ personas',
      buttonText: 'Consultar viabilidad'
    }
  ];

  const faqs = [
    {
      q: '¿Qué es SuperAI y cómo impacta mi negocio?',
      a: 'SuperAI es un protocolo de ejecución autónoma. A diferencia de un chatbot, este sistema realiza acciones concretas en tus herramientas (Vender, Conciliar, Filtrar, Reportar) sin intervención humana constante.'
    },
    {
      q: '¿Cómo garantizan la seguridad de mis datos?',
      a: 'Implementamos infraestructuras privadas. Tu información nunca se usa para entrenar modelos públicos y toda la ejecución es auditable mediante logs de seguridad corporativos.'
    },
    {
      q: '¿Qué tan rápido es el retorno de inversión (ROI)?',
      a: 'La mayoría de nuestros clientes recuperan la inversión inicial en los primeros 3 meses al reducir drásticamente el tiempo dedicado a tareas administrativas y operativas de bajo valor.'
    },
    {
      q: '¿Es compatible con mi software actual?',
      a: 'Sí. Nos conectamos a través de APIs, Webhooks o RPA (automatización de interfaz) a cualquier CRM, ERP o sistema propietario que utilices actualmente.'
    },
    {
      q: '¿Qué pasa cuando termina mi contrato?',
      a: 'Tu asistente sigue trabajando. No se apaga, no se bloquea, no pierde memoria. Todo lo que construimos juntos es tuyo: los agentes, los skills, la configuración. Es tu empleado digital y opera para ti, no para nosotros. El mantenimiento mensual existe para optimizar, no para mantener vivo.'
    }
  ];

  return (
    <SurfaceProvider surface="black">
      <Helmet>
        <title>SuperAI - Tu Primer Asistente IA y Protocolo Operativo | AI4U</title>
        <meta name="description" content="SuperAI: El nuevo protocolo operativo de tu empresa. Implementamos agentes autónomos que ejecutan tareas, conectan tus sistemas y automatizan tu comunicación." />
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
                SuperAI // theBusinessProtocol
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
              Tu primer <span>Protocolo Operativo IA</span>. Ejecución autónoma
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
              Infraestructura de agentes autónomos diseñada para escalar la ejecución de tu negocio sin aumentar la nómina.
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
                Activar mi Protocolo
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Section 1: EL PROBLEMA */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, background: colors.palette.black, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: '10%', right: '5%', fontSize: '15rem', fontWeight: 400, color: 'rgba(255,255,255,0.02)', zIndex: 0, pointerEvents: 'none' }}>
          manual
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
                Sin promesas vacías. <br/>
                <Box component="span" sx={{ bgcolor: colors.palette.accentColors.orange, color: colors.palette.black, px: 2, display: 'inline-block', transform: 'rotate(-1deg)' }}>Resultados reales.</Box>
              </H1>
              <BodyText sx={{ color: colors.palette.white, fontSize: '1.8rem', fontWeight: 400, mb: 6, opacity: 0.9 }}>
                No te vendemos una revolución nocturna, sino un proceso de mejora constante.
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
                El Protocolo: <br/>
                <Box component="span" sx={{ color: colors.palette.accentColors.orange, fontWeight: 500 }}>Tu infraestructura IA</Box>
              </H1>
              <BodyText sx={{ color: colors.palette.black, fontSize: '2rem', fontWeight: 400, opacity: 0.5 }}>
                Nos podemos conectar a todos los sistemas que nos dejes.
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
                      border: `1px solid ${colors.palette.gray[100]}`,
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        bgcolor: colors.palette.black,
                        color: colors.palette.white,
                        zIndex: 2,
                        transform: 'scale(1.05) translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        '& .icon': { color: colors.palette.white },
                        '& .text': { color: colors.palette.white }
                      },
                    }}
                  >
                    <benefit.icon 
                      className="icon" 
                      sx={{ 
                        fontSize: 60, 
                        color: colors.palette.accentColors.orange, 
                        mb: 4, 
                        transition: 'color 0.4s ease' 
                      }} 
                    />
                    <H4 
                      className="text"
                      sx={{ 
                        mb: 2, 
                        fontSize: '1.8rem', 
                        fontWeight: 400, 
                        letterSpacing: '-0.02em', 
                        textTransform: 'none',
                        color: colors.palette.black,
                        transition: 'color 0.4s ease'
                      }}
                    >
                      {benefit.title}
                    </H4>
                    <BodyText 
                      className="text"
                      sx={{ 
                        fontSize: '1.1rem', 
                        fontWeight: 400, 
                        opacity: 0.9,
                        color: colors.palette.black,
                        transition: 'color 0.4s ease'
                      }}
                    >
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
              Un proceso que <br/>
              <Box component="span" sx={{ color: colors.palette.accentColors.orange, fontWeight: 500 }}>inicia hoy mismo</Box>
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
      {/* ... existing content ... */}

      {/* New Section: LIBRERÍA DE SKILLS */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, background: colors.palette.black, position: 'relative', overflow: 'hidden' }}>
        {/* Marquee Background */}
        <Box sx={{ 
          position: 'absolute', 
          top: '5%', 
          whiteSpace: 'nowrap', 
          opacity: 0.03, 
          fontSize: '10rem', 
          fontWeight: 900,
          animation: 'marquee 60s linear infinite',
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' }
          }
        }}>
          {marqueeSkills.join(' • ')} • {marqueeSkills.join(' • ')}
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={8}>
            <Box>
              <Typography sx={{ color: colors.palette.accentColors.orange, ...TEXT_VARIANTS.ui.code, mb: 2 }}>
                // business skills ecosystem
              </Typography>
              <H1 sx={{ 
                color: colors.palette.white, 
                fontSize: { xs: '3.5rem', md: '6rem' },
                lineHeight: 0.9,
                fontWeight: 400,
                letterSpacing: '-0.02em'
              }}>
                Librería de Skills: <br/>
                <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>Capacidades Corporativas</Box> listas para desplegar
              </H1>
              <BodyText sx={{ color: colors.palette.white, mt: 4, opacity: 0.6, maxWidth: '700px' }}>
                Tu agente no tiene límites: si existe un proceso documentado o una interfaz digital, tu agente puede aprender el Skill para operarlo con precisión empresarial.
              </BodyText>
            </Box>

            <Grid container spacing={3}>
              {skillsLibrary.map((cat, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box sx={{ 
                    p: 4, 
                    height: '100%', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    bgcolor: 'rgba(255,255,255,0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: colors.palette.accentColors.orange,
                      bgcolor: 'rgba(255,255,255,0.05)',
                      transform: 'translateY(-5px)'
                    }
                  }}>
                    <Stack spacing={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <cat.icon sx={{ color: colors.palette.accentColors.orange, fontSize: 30 }} />
                        <H4 sx={{ color: colors.palette.white, fontSize: '1.4rem', textTransform: 'none' }}>{cat.category}</H4>
                      </Box>
                      <Stack spacing={1}>
                        {cat.skills.map((skill, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.palette.accentColors.orange }} />
                            <Typography sx={{ color: colors.palette.white, opacity: 0.7, fontSize: '0.95rem' }}>
                              {skill}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', pt: 4 }}>
              <Box sx={{ 
                display: 'inline-block', 
                p: 3, 
                border: `1px dashed ${colors.palette.accentColors.orange}60`,
                bgcolor: 'rgba(255,102,0,0.05)'
              }}>
                <Typography sx={{ color: colors.palette.white, opacity: 0.8 }}>
                  ¿Necesitas un Skill específico para tu negocio? <br/>
                  <Box component="span" sx={{ color: colors.palette.accentColors.orange, fontWeight: 600 }}>Lo desarrollamos a medida en menos de 72h.</Box>
                </Typography>
              </Box>
            </Box>
          </Stack>
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
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Box
                  sx={{
                    bgcolor: tier.highlight ? 'rgba(255,255,255,0.03)' : 'transparent',
                    border: tier.highlight ? `1px solid ${colors.palette.accentColors.orange}` : `1px solid rgba(255,255,255,0.1)`,
                    p: { xs: 4, md: 5 },
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
                    <Box sx={{ position: 'absolute', top: 0, left: 0, bgcolor: colors.palette.accentColors.orange, color: colors.palette.black, px: 2, py: 0.5, fontWeight: 400, fontSize: '0.75rem', ...TEXT_VARIANTS.ui.code }}>
                      // recomendado
                    </Box>
                  )}
                  <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400, mb: 3, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                    superai.{tier.name.toLowerCase()}
                  </Typography>
                  {tier.implementation != null && (
                    <Typography sx={{ color: colors.palette.white, opacity: 0.5, mb: 1, fontSize: '0.85rem' }}>
                      implementación: {tier.implementation} usd (una vez)
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                    <Typography sx={{ color: colors.palette.white, fontSize: { xs: '3rem', md: '3.5rem' }, fontWeight: 400, lineHeight: 1 }}>{tier.price}</Typography>
                    {tier.period && <Typography sx={{ color: 'rgba(255,255,255,0.3)', ml: 1, fontWeight: 400, fontSize: '0.9rem' }}>{tier.period}</Typography>}
                  </Box>
                  {tier.price !== 'Gratis' && (
                    <Typography sx={{ color: colors.palette.accentColors.green, fontSize: '0.75rem', mb: 2, ...TEXT_VARIANTS.ui.code }}>
                      // precio de lanzamiento
                    </Typography>
                  )}
                  <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, mb: 4, fontSize: '1rem' }}>{tier.for}</Typography>
                  
                  <Stack spacing={1.5} sx={{ mb: 6, flexGrow: 1 }}>
                    {tier.includes && (
                      <Typography sx={{ 
                        color: colors.palette.white, 
                        opacity: 0.4, 
                        fontSize: '0.8rem', 
                        ...TEXT_VARIANTS.ui.code,
                        mb: 0.5
                      }}>
                        {tier.includes.toLowerCase()}
                      </Typography>
                    )}
                    {tier.features.map((feat, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <Box sx={{ width: 6, height: 6, bgcolor: colors.palette.accentColors.orange, mt: 1, flexShrink: 0 }} />
                        <BodyText sx={{ color: colors.palette.white, opacity: 0.9, fontSize: '0.9rem', lineHeight: 1.4 }}>{feat.toLowerCase()}</BodyText>
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
                      py: 2.5,
                      fontWeight: 400, 
                      borderRadius: 0,
                      fontSize: '1rem',
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

          {/* Add-ons */}
          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ 
              p: 3, 
              border: `1px dashed ${colors.palette.accentColors.orange}40`,
              bgcolor: 'rgba(255,102,0,0.03)'
            }}>
              <Typography sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '0.95rem' }}>
                skills adicionales desde <Box component="span" sx={{ color: colors.palette.accentColors.orange, fontWeight: 600 }}>$100 usd</Box> c/u
              </Typography>
            </Box>
            <Box sx={{ 
              p: 3, 
              border: `1px dashed ${colors.palette.accentColors.orange}40`,
              bgcolor: 'rgba(255,102,0,0.03)'
            }}>
              <Typography sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '0.95rem' }}>
                reuniones adicionales <Box component="span" sx={{ color: colors.palette.accentColors.orange, fontWeight: 600 }}>$100 usd</Box> c/u
              </Typography>
            </Box>
          </Box>
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
              <Grid item xs={12} md={3}>
                <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // consumo de llm & apis
                </Typography>
                <BodyText sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  los costos de consumo de modelos (openai, anthropic, etc.) se facturan directamente a tu tarjeta. la inversión depende de la inteligencia y el volumen de ejecución requerido.
                </BodyText>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // hardware dedicado
                </Typography>
                <BodyText sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  superai requiere una estación de trabajo (pc/servidor) dedicada para garantizar ejecución continua 24/7 y total soberanía sobre tus datos.
                </BodyText>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // compromiso mínimo
                </Typography>
                <BodyText sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  el contrato mínimo es de 6 meses. este tiempo garantiza la correcta integración, aprendizaje del agente y el retorno de inversión esperado.
                </BodyText>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography sx={{ color: colors.palette.accentColors.orange, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // tu asistente es tuyo
                </Typography>
                <BodyText sx={{ color: colors.palette.white, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  cuando termina tu contrato, tu asistente no se apaga. todo lo que construimos juntos sigue funcionando. es tu empleado digital y trabaja para ti, no para nosotros.
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
              Tu futuro es <br/>
              una <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>decisión</Box> hoy.
            </Giant>

            <BodyText sx={{ color: colors.palette.white, fontWeight: 400, fontSize: '2rem', opacity: 0.9, maxWidth: '800px' }}>
              Esta es la Versión 1.0 de tu empresa inteligente.
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
                Solicitar Diagnóstico Gratuito
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
