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
    'Reducción del 40% en carga administrativa',
    'Conectividad total entre ERP, CRM y Planta',
    'Toma de decisiones asistida para el CEO',
    'Orquestación de sistemas legacy y modernos'
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
      skills: ['Filtro inteligente de CVs', 'Coordinación de entrevistas', 'Onboarding de nuevos ingresos', 'Gestión de consultas internas', 'Asistente de nómina', 'Análisis de clima laboral']
    },
    {
      category: 'Producción & Planta',
      icon: PrecisionManufacturing,
      skills: ['Control de inventario en tiempo real', 'Monitoreo de máquinas (IoT)', 'Gestión de órdenes de producción', 'Optimización de rutas logísticas', 'Reportes de eficiencia (OEE)', 'Alertas de mantenimiento']
    },
    {
      category: 'Ventas & CRM',
      icon: TrendingUp,
      skills: ['Cualificación de prospectos', 'Actualización automática del CRM', 'Booking de citas comerciales', 'Seguimiento proactivo de ofertas', 'Análisis de competencia', 'Resumen de reuniones']
    },
    {
      category: 'Finanzas',
      icon: BusinessCenter,
      skills: ['Conciliación bancaria', 'Procesamiento de facturas (OCR)', 'Control de gastos y viáticos', 'Proyección de flujo de caja', 'Preparación para auditoría', 'Alertas de morosidad']
    },
    {
      category: 'Atención al Cliente',
      icon: Chat,
      skills: ['Resolución de dudas 24/7', 'Triage de tickets de soporte', 'Seguimiento de pedidos', 'Análisis de satisfacción', 'Base de conocimientos viva', 'Escalamiento inteligente']
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
    { feature: 'Empatía y Juicio Humano', chatbot: false, copilot: false, superai: 'Socio Humano' },
    { feature: 'Chatea con toda tu empresa', chatbot: 'Limitado', copilot: 'Solo Office', superai: true },
    { feature: 'Conexión a ERP / CRM / MRP', chatbot: false, copilot: 'Nativo MSFT', superai: true },
    { feature: 'Le puedes enseñar procesos', chatbot: false, copilot: false, superai: true },
    { feature: 'Acceso y Seguridad Privada', chatbot: false, copilot: 'Capa pública', superai: true },
    { feature: 'Opera 24/7 sin supervisión', chatbot: true, copilot: false, superai: true },
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
      q: '¿Qué es SuperAI y por qué es un "empleado"?',
      a: 'A diferencia de una herramienta estática, SuperAI aprende tus procesos, se conecta a tus sistemas y actúa de forma autónoma. Es el primer miembro digital de tu equipo que nunca olvida y siempre está disponible.'
    },
    {
      q: '¿Realmente le puedo enseñar lo que yo quiera?',
      a: 'Sí. Si tienes un proceso documentado o un flujo de trabajo que se realiza en un sistema digital, podemos "entrenar" al agente para que lo ejecute con precisión quirúrgica.'
    },
    {
      q: '¿Cómo chatea con mi empresa?',
      a: 'Nos conectamos a tus bases de datos y sistemas (ERP, CRM). Puedes preguntarle en lenguaje natural: "¿Cuál es el inventario real hoy?" o "¿Por qué se retrasó el pedido X?", y él consultará tus sistemas en tiempo real para responderte.'
    },
    {
      q: '¿Qué tan seguro es darle acceso a mis sistemas?',
      a: 'La seguridad es prioridad. El agente solo tiene acceso a lo que tú decidas y toda la información se procesa en una capa privada diseñada para cumplimiento empresarial.'
    }
  ];

  return (
    <SurfaceProvider surface="theme">
      <Helmet>
        <title>SuperAI - Tu Primer Empleado AI | AI4U</title>
        <meta name="description" content="SuperAI: Tu primer empleado AI que chatea con tu empresa, se conecta a tus sistemas (ERP, CRM, MRP) y aprende a ejecutar tus procesos." />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: colors.contrast.background,
          py: isModal ? COMPONENT_SPACING.layout.container : COMPONENT_SPACING.layout.section,
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${colors.contrast.text.primary}`
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
                border: `1px solid ${colors.contrast.text.primary}40`,
                bgcolor: 'transparent',
                mb: 2
              }}
            >
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: colors.contrast.text.primary }} />
              <Typography
                sx={{
                  color: colors.contrast.text.primary,
                  opacity: 0.6,
                  ...TEXT_VARIANTS.ui.code,
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'none'
                }}
              >
                  SuperAI // digitalEmployeeV1
              </Typography>
            </Box>

            <Giant
              sx={{
                color: colors.contrast.text.primary,
                maxWidth: '1100px',
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                fontSize: isModal ? { xs: '3rem', md: '5rem' } : { xs: '3.5rem', md: '8rem' },
                '& span': {
                  color: colors.contrast.text.primary,
                  opacity: 0.5,
                  display: 'inline-block',
                  transform: 'rotate(1deg)',
                  fontWeight: 500
                }
              }}
            >
              Tu primer <span>empleado AI</span> corporativo
            </Giant>

            <BodyText
              sx={{
                fontSize: '1.8rem',
                color: colors.contrast.text.primary,
                maxWidth: '850px',
                fontWeight: 400,
                lineHeight: 1.1,
                opacity: 0.9
              }}
            >
              La primera capa de inteligencia que chatea con tu empresa y orquesta tus sistemas (ERP, CRM, MRP) en una sola fuente de verdad.
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
                  bgcolor: colors.contrast.text.primary,
                  color: colors.contrast.background,
                  borderRadius: '9999px',
                  '&:hover': {
                    opacity: 0.8,
                    transform: 'translateY(-10px)'
                  },
                }}
              >
                Contratar mi Agente
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Section 1: EL PROBLEMA */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.contrast.background, borderTop: `1px solid ${colors.contrast.text.primary}`, position: 'relative' }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} md={7} sx={{ pr: { md: 10 } }}>
              <H1 sx={{
                color: colors.contrast.text.primary,
                fontSize: { xs: '3.5rem', md: '7rem' },
                lineHeight: 0.85,
                fontWeight: 400,
                letterSpacing: '-0.05em',
                mb: 6
              }}>
                Claridad absoluta. <br />
                <Box component="span" sx={{ bgcolor: colors.contrast.text.primary, color: colors.contrast.background, px: 2, display: 'inline-block', transform: 'rotate(-1deg)' }}>Cero fricción.</Box>
              </H1>
              <BodyText sx={{ color: colors.contrast.text.primary, fontSize: '1.8rem', fontWeight: 400, mb: 6, opacity: 0.9 }}>
                Deja de pelear con hojas de cálculo y sistemas que no se hablan. Dale a tu equipo la inteligencia que merece.
              </BodyText>
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack spacing={2}>
                {problems.map((prob, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      p: 4,
                      border: `1px solid ${colors.contrast.text.primary}`,
                      bgcolor: 'transparent',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      transform: `translateX(${idx * 20}px)`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: `${colors.contrast.text.primary}08`,
                      }
                    }}
                  >
                    <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.6, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                      // friccion0{idx + 1}
                    </Typography>
                    <Typography sx={{ color: colors.contrast.text.primary, fontSize: '1.5rem', fontWeight: 400, textTransform: 'none', lineHeight: 1 }}>{prob.title}</Typography>
                    <BodyText sx={{ color: colors.contrast.text.primary, opacity: 0.8, fontSize: '1rem' }}>
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
        bgcolor: colors.contrast.background,
        color: colors.contrast.text.primary,
        borderTop: `1px solid ${colors.contrast.text.primary}`,
        position: 'relative'
      }}>
        <Container maxWidth="xl">
          <Stack spacing={12}>
            <Box textAlign="left">
              <H1 sx={{
                color: colors.contrast.text.primary,
                fontSize: { xs: '3.5rem', md: '7rem' },
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                mb: 4
              }}>
                El Protocolo: <br />
                <Box component="span" sx={{ color: colors.contrast.text.primary, opacity: 0.5, fontWeight: 500 }}>Tu Empleado Digital</Box>
              </H1>
              <BodyText sx={{ color: colors.contrast.text.primary, fontSize: '2rem', fontWeight: 400, opacity: 0.5 }}>
                Le podemos enseñar a que haga lo que queramos, con acceso controlado.
              </BodyText>
            </Box>

            <Grid container spacing={0}>
              {[
                { icon: Chat, title: 'Chatea con tu Empresa', description: 'Accede a cualquier dato de tu negocio preguntándole a tu agente como si fuera un experto de tu equipo.' },
                { icon: IntegrationInstructions, title: 'Conexión Total (API)', description: 'Se integra nativamente con tu ERP, CRM, MRP y cualquier proveedor de servicios que utilices.' },
                { icon: Groups, title: 'Enseñanza Continua', description: 'Le enseñamos tus protocolos específicos. Aprende a ejecutar procesos como tú los necesitas.' },
                { icon: Psychology, title: 'Capa de Inteligencia', description: 'La primera capa de razonamiento que unifica silos de datos en acciones concretas.' },
                { icon: HealthAndSafety, title: 'Acceso Privado', description: 'Seguridad absoluta. Solo tiene acceso a lo que tú le permitas, bajo tu propia gobernanza.' },
              ].map((benefit, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box
                    sx={{
                      bgcolor: 'transparent',
                      color: colors.contrast.text.primary,
                      p: 6,
                      height: '100%',
                      border: `1px solid ${colors.contrast.text.primary}`,
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        bgcolor: colors.contrast.text.primary,
                        color: colors.contrast.background,
                        zIndex: 2,
                        transform: 'scale(1.02) translateY(-5px)',
                        '& .icon': { color: colors.contrast.background },
                        '& .text': { color: colors.contrast.background }
                      },
                    }}
                  >
                    <benefit.icon
                      className="icon"
                      sx={{
                        fontSize: 60,
                        color: colors.contrast.text.primary,
                        opacity: 0.6,
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
                        color: colors.contrast.text.primary,
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
                        color: colors.contrast.text.primary,
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
                    bgcolor: colors.contrast.text.primary,
                    color: colors.contrast.background,
                    p: 6,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    border: `1px solid ${colors.contrast.text.primary}`
                  }}
                >
                  <H3 sx={{ color: colors.contrast.background, opacity: 0.6, mb: 4, fontWeight: 400, fontSize: '2rem' }}>resultados:</H3>
                  <Stack spacing={3}>
                    {[
                      'Respuesta inmediata a cualquier duda del negocio',
                      'Integración fluida de ERP, CRM y MRP',
                      'Automatización de tareas repetitivas',
                      'Control total y privacidad de datos'
                    ].map((res, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ width: 20, height: 1, bgcolor: colors.contrast.background, opacity: 0.5 }} />
                        <BodyText sx={{ fontWeight: 400, fontSize: '1.2rem', color: colors.contrast.background }}>
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
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.contrast.background, borderTop: `1px solid ${colors.contrast.text.primary}`, position: 'relative' }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="left" mb={12}>
            <H1 sx={{
              color: colors.contrast.text.primary,
              fontSize: { xs: '3.5rem', md: '7rem' },
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              mb: 4
            }}>
              Onboarding en <br />
              <Box component="span" sx={{ color: colors.contrast.text.primary, opacity: 0.5, fontWeight: 500 }}>tiempo récord</Box>
            </H1>
          </Box>
          <Grid container spacing={0}>
            {[
              {
                num: '01',
                title: 'Entrenamiento Inicial',
                subtitle: 'Acceso y Contexto',
                description: 'Le damos acceso a tus sistemas y le enseñamos tus procesos clave de negocio.'
              },
              {
                num: '02',
                title: 'Integración de Skills',
                subtitle: 'Configuración API',
                description: 'Conectamos tu ERP, CRM o MRP para que el agente pueda leer y ejecutar acciones.'
              },
              {
                num: '03',
                title: 'Ejecución Autónoma',
                subtitle: 'Producción',
                description: 'Tu nuevo empleado empieza a chatear con tu empresa y resolver tareas 24/7.'
              }
            ].map((step, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box sx={{
                  p: 6,
                  borderLeft: `1px solid ${colors.contrast.text.primary}`,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: `${colors.contrast.text.primary}08`,
                  }
                }}>
                  <Typography
                    sx={{
                      fontSize: '4rem',
                      fontWeight: 400,
                      color: colors.contrast.text.primary,
                      opacity: 0.05,
                      lineHeight: 1,
                      mb: 4,
                      fontFamily: '"Necto Mono", monospace'
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Box sx={{ pl: 2 }}>
                    <H3 sx={{ color: colors.contrast.text.primary, mb: 2, fontSize: '2rem', fontWeight: 400, textTransform: 'none' }}>{step.title}</H3>
                    <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.6, fontWeight: 400, mb: 3, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                      // {step.subtitle.toLowerCase()}
                    </Typography>
                    <BodyText sx={{ color: colors.contrast.text.primary, opacity: 0.8, fontSize: '1.1rem', fontWeight: 400 }}>
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
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.contrast.background, borderTop: `1px solid ${colors.contrast.text.primary}`, position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={8}>
            <Box>
              <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.6, ...TEXT_VARIANTS.ui.code, mb: 2 }}>
                // businessSkillsEcosystem
              </Typography>
              <H1 sx={{
                color: colors.contrast.text.primary,
                fontSize: { xs: '3.5rem', md: '6rem' },
                lineHeight: 0.9,
                fontWeight: 400,
                letterSpacing: '-0.02em'
              }}>
                Librería de Skills: <br />
                <Box component="span" sx={{ color: colors.contrast.text.primary, opacity: 0.5 }}>Capacidades Corporativas</Box> listas para desplegar
              </H1>
              <BodyText sx={{ color: colors.contrast.text.primary, mt: 4, opacity: 0.6, maxWidth: '700px' }}>
                Tu agente no tiene límites: si existe un proceso documentado o una interfaz digital, tu agente puede aprender el Skill para operarlo con precisión empresarial.
              </BodyText>
            </Box>

            <Grid container spacing={3}>
              {skillsLibrary.map((cat, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box sx={{
                    p: 4,
                    height: '100%',
                    border: `1px solid ${colors.contrast.text.primary}`,
                    bgcolor: 'transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: `${colors.contrast.text.primary}08`,
                      transform: 'translateY(-5px)'
                    }
                  }}>
                    <Stack spacing={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <cat.icon sx={{ color: colors.contrast.text.primary, opacity: 0.6, fontSize: 30 }} />
                        <H4 sx={{ color: colors.contrast.text.primary, fontSize: '1.4rem', textTransform: 'none' }}>{cat.category}</H4>
                      </Box>
                      <Stack spacing={1}>
                        {cat.skills.map((skill, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.contrast.text.primary, opacity: 0.4 }} />
                            <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.7, fontSize: '0.95rem' }}>
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
                border: `1px dashed ${colors.contrast.text.primary}60`,
              }}>
                <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.8 }}>
                  ¿Necesitas un Skill específico para tu negocio? <br />
                  <Box component="span" sx={{ color: colors.contrast.text.primary, fontWeight: 600 }}>Lo desarrollamos a medida en menos de 72h.</Box>
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Section 5: DIFERENCIACIÓN */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.contrast.background, borderTop: `1px solid ${colors.contrast.text.primary}` }}>
        <Container maxWidth="xl">
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} md={5} sx={{ pr: { md: 10 }, mb: { xs: 8, md: 0 } }}>
              <H2 sx={{ color: colors.contrast.text.primary, mb: 4, fontSize: '3rem', fontWeight: 400, lineHeight: 1 }}>No es un chatbot. <br />No es solo un copilot.</H2>
              <H1 sx={{
                color: colors.contrast.text.primary,
                opacity: 0.5,
                fontSize: { xs: '3.5rem', md: '6rem' },
                lineHeight: 0.85,
                fontWeight: 400,
                letterSpacing: '-0.05em'
              }}>
                Es tu primer <br />empleado AI.
              </H1>
            </Grid>

            <Grid item xs={12} md={7}>
              <TableContainer component={Box} sx={{ bgcolor: 'transparent', boxShadow: 'none', borderRadius: 0 }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ borderBottom: `1px solid ${colors.contrast.text.primary}` }}>
                      <TableCell sx={{ color: colors.contrast.text.primary, opacity: 0.5, fontWeight: 400, py: 4, border: 'none', ...TEXT_VARIANTS.ui.code }}>// featureMatrix</TableCell>
                      <TableCell align="center" sx={{ color: colors.contrast.text.primary, fontWeight: 400, fontSize: '1.2rem', py: 4, border: 'none' }}>chatbot</TableCell>
                      <TableCell align="center" sx={{ color: colors.contrast.text.primary, fontWeight: 400, fontSize: '1.2rem', py: 4, border: 'none' }}>copilot</TableCell>
                      <TableCell align="center" sx={{ color: colors.contrast.text.primary, fontWeight: 400, fontSize: '1.5rem', py: 4, border: 'none' }}>superai</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparison.map((row, idx) => (
                      <TableRow key={idx} sx={{ borderBottom: `1px solid ${colors.contrast.text.primary}20`, '&:hover': { bgcolor: `${colors.contrast.text.primary}08` } }}>
                        <TableCell sx={{ color: colors.contrast.text.primary, fontWeight: 400, py: 3, border: 'none', fontSize: '1.1rem', opacity: 0.9 }}>{row.feature}</TableCell>
                        <TableCell align="center" sx={{ py: 3, border: 'none' }}>
                          {row.chatbot === true ? <Box sx={{ width: 12, height: 12, bgcolor: `${colors.contrast.text.primary}40`, mx: 'auto' }} /> : <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.2, fontWeight: 400 }}>-</Typography>}
                        </TableCell>
                        <TableCell align="center" sx={{ py: 3, border: 'none' }}>
                          {row.copilot === true ? <Box sx={{ width: 12, height: 12, bgcolor: `${colors.contrast.text.primary}40`, mx: 'auto' }} /> : (row.copilot === 'parcial' ? <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.5, fontWeight: 400, fontSize: '0.8rem' }}>parcial</Typography> : <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.2, fontWeight: 400 }}>-</Typography>)}
                        </TableCell>
                        <TableCell align="center" sx={{ py: 3, border: 'none' }}>
                          {row.superai === true ? <Box sx={{ width: 16, height: 16, bgcolor: colors.contrast.text.primary, mx: 'auto', transform: 'rotate(45deg)' }} /> : <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.05, fontWeight: 400 }}>-</Typography>}
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
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.contrast.background, borderTop: `1px solid ${colors.contrast.text.primary}` }}>
        <Container maxWidth="xl">
          <Box textAlign="left" mb={12}>
            <H1 sx={{
              color: colors.contrast.text.primary,
              fontSize: { xs: '3.5rem', md: '7rem' },
              lineHeight: 0.85,
              fontWeight: 400,
              letterSpacing: '-0.05em',
              mb: 4
            }}>
              Inversión mínima. <br />
              <Box component="span" sx={{ color: colors.contrast.text.primary, opacity: 0.5 }}>Retorno máximo.</Box>
            </H1>

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 1,
                border: `1px solid ${colors.contrast.text.primary}40`,
                bgcolor: 'transparent',
                mt: 2
              }}
            >
              <RocketLaunch sx={{ color: colors.contrast.text.primary, opacity: 0.6, fontSize: '1.2rem' }} />
              <Typography
                sx={{
                  color: colors.contrast.text.primary,
                  opacity: 0.6,
                  ...TEXT_VARIANTS.ui.code,
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                  textTransform: 'none',
                  fontWeight: 400
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
                    bgcolor: tier.highlight ? `${colors.contrast.text.primary}08` : 'transparent',
                    border: `1px solid ${colors.contrast.text.primary}`,
                    p: { xs: 4, md: 5 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    zIndex: tier.highlight ? 2 : 1,
                    '&:hover': {
                      bgcolor: `${colors.contrast.text.primary}08`,
                      transform: 'translateY(-10px)',
                      zIndex: 3
                    }
                  }}
                >
                  {tier.highlight && (
                    <Box sx={{ position: 'absolute', top: 0, left: 0, bgcolor: colors.contrast.text.primary, color: colors.contrast.background, px: 2, py: 0.5, fontWeight: 400, fontSize: '0.75rem', ...TEXT_VARIANTS.ui.code }}>
                      // recomendado
                    </Box>
                  )}
                  <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.3, fontWeight: 400, mb: 3, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                    superai.{tier.name.toLowerCase()}
                  </Typography>
                  {tier.implementation != null && (
                    <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.5, mb: 1, fontSize: '0.85rem' }}>
                      implementación: {tier.implementation} usd (una vez)
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                    <Typography sx={{ color: colors.contrast.text.primary, fontSize: { xs: '3rem', md: '3.5rem' }, fontWeight: 400, lineHeight: 1 }}>{tier.price}</Typography>
                    {tier.period && <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.3, ml: 1, fontWeight: 400, fontSize: '0.9rem' }}>{tier.period}</Typography>}
                  </Box>
                  {tier.price !== 'Gratis' && (
                    <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.4, fontSize: '0.75rem', mb: 2, ...TEXT_VARIANTS.ui.code }}>
                      // precio de lanzamiento
                    </Typography>
                  )}
                  <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.6, fontWeight: 400, mb: 4, fontSize: '1rem' }}>{tier.for}</Typography>

                  <Stack spacing={1.5} sx={{ mb: 6, flexGrow: 1 }}>
                    {tier.includes && (
                      <Typography sx={{
                        color: colors.contrast.text.primary,
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
                        <Box sx={{ width: 6, height: 6, bgcolor: colors.contrast.text.primary, opacity: 0.5, mt: 1, flexShrink: 0 }} />
                        <BodyText sx={{ color: colors.contrast.text.primary, opacity: 0.9, fontSize: '0.9rem', lineHeight: 1.4 }}>{feat.toLowerCase()}</BodyText>
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
                      borderRadius: '9999px',
                      fontSize: '1rem',
                      borderColor: colors.contrast.text.primary,
                      bgcolor: tier.highlight ? colors.contrast.text.primary : 'transparent',
                      color: tier.highlight ? colors.contrast.background : colors.contrast.text.primary,
                      '&:hover': {
                        bgcolor: colors.contrast.text.primary,
                        color: colors.contrast.background,
                        borderColor: colors.contrast.text.primary
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
              border: `1px dashed ${colors.contrast.text.primary}40`,
            }}>
              <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.8, fontSize: '0.95rem' }}>
                skills adicionales desde <Box component="span" sx={{ color: colors.contrast.text.primary, fontWeight: 600 }}>$100 usd</Box> c/u
              </Typography>
            </Box>
            <Box sx={{
              p: 3,
              border: `1px dashed ${colors.contrast.text.primary}40`,
            }}>
              <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.8, fontSize: '0.95rem' }}>
                reuniones adicionales <Box component="span" sx={{ color: colors.contrast.text.primary, fontWeight: 600 }}>$100 usd</Box> c/u
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Considerations */}
      <Box sx={{
        py: COMPONENT_SPACING.layout.section,
        bgcolor: colors.contrast.background,
        color: colors.contrast.text.primary,
        borderTop: `1px solid ${colors.contrast.text.primary}`,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              p: 8,
              border: `1px solid ${colors.contrast.text.primary}`,
              bgcolor: 'transparent',
              position: 'relative'
            }}
          >
            <H3 sx={{ color: colors.contrast.text.primary, mb: 6, fontSize: '1.8rem', fontWeight: 400 }}>
              // consideraciones de operación
            </H3>
            <Grid container spacing={8}>
              <Grid item xs={12} md={3}>
                <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.6, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // consumo de llm & apis
                </Typography>
                <BodyText sx={{ color: colors.contrast.text.primary, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  los costos de consumo de modelos (openai, anthropic, etc.) se facturan directamente a tu tarjeta. la inversión depende de la inteligencia y el volumen de ejecución requerido.
                </BodyText>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.6, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // hardware dedicado
                </Typography>
                <BodyText sx={{ color: colors.contrast.text.primary, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  superai requiere una estación de trabajo (pc/servidor) dedicada para garantizar ejecución continua 24/7 y total soberanía sobre tus datos.
                </BodyText>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.6, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // compromiso mínimo
                </Typography>
                <BodyText sx={{ color: colors.contrast.text.primary, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  el contrato mínimo es de 6 meses. este tiempo garantiza la correcta integración, aprendizaje del agente y el retorno de inversión esperado.
                </BodyText>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography sx={{ color: colors.contrast.text.primary, opacity: 0.6, fontWeight: 400, mb: 2, ...TEXT_VARIANTS.ui.code, fontSize: '0.9rem' }}>
                  // tu asistente es tuyo
                </Typography>
                <BodyText sx={{ color: colors.contrast.text.primary, opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.4 }}>
                  cuando termina tu contrato, tu asistente no se apaga. todo lo que construimos juntos sigue funcionando. es tu empleado digital y trabaja para ti, no para nosotros.
                </BodyText>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Section 8: PREGUNTAS FRECUENTES */}
      <Box sx={{ py: 12, bgcolor: colors.contrast.background, borderTop: `1px solid ${colors.contrast.text.primary}` }}>
        <Container maxWidth="lg">
          <Typography sx={{
            textAlign: 'left',
            mb: 4,
            color: colors.contrast.text.primary,
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
                <Typography component="span" sx={{ fontWeight: 400, fontSize: '1rem', color: colors.contrast.text.primary, mr: 1.5 }}>
                  {faq.q}
                </Typography>
                <Typography component="span" sx={{ color: colors.contrast.text.primary, opacity: 0.5, fontSize: '1rem', lineHeight: 1.6 }}>
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
          bgcolor: colors.contrast.background,
          borderTop: `1px solid ${colors.contrast.text.primary}`,
          py: 30,
          textAlign: 'left',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={10} alignItems="flex-start">
            <Giant sx={{
              color: colors.contrast.text.primary,
              fontSize: { xs: '3.5rem', md: '10rem' },
              lineHeight: 0.8,
              fontWeight: 400,
              letterSpacing: '-0.05em'
            }}>
              Tu futuro es <br />
              una <Box component="span" sx={{ color: colors.contrast.text.primary, opacity: 0.5 }}>decisión</Box> hoy.
            </Giant>

            <BodyText sx={{ color: colors.contrast.text.primary, fontWeight: 400, fontSize: '2rem', opacity: 0.9, maxWidth: '800px' }}>
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
                  bgcolor: colors.contrast.text.primary,
                  color: colors.contrast.background,
                  borderRadius: '9999px',
                  '&:hover': {
                    opacity: 0.8,
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
      <Box sx={{ py: 6, bgcolor: colors.contrast.background, borderTop: `1px solid ${colors.contrast.text.primary}`, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <H2 sx={{ color: colors.contrast.text.primary, opacity: 0.3, fontWeight: 400 }}>SuperAI</H2>
        </Container>
      </Box>
    </SurfaceProvider>
  );
};

export default SuperAI;
