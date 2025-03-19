import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  Paper, 
  Avatar, 
  Divider,
  useTheme,
  IconButton
} from '@mui/material';
import { H1, H2, H3, BodyText } from '../components/ui/Typography';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { DiagnosticCTA } from '../components/ui/DiagnosticCTA';
import { ServicesButton } from '../components/ui/ServicesButton';
import { useColorMode } from '../context/ThemeContext';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BarChartIcon from '@mui/icons-material/BarChart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Chip from '@mui/material/Chip';

const WhyAI4U = () => {
  const theme = useTheme();
  const { mode } = useColorMode();

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'background.default', 
        py: { xs: 6, md: 10 },
        borderBottom: '1px solid',
        borderColor: 'divider' 
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <H1 sx={{ 
                mb: 4, 
                textAlign: 'center',
                fontWeight: 700
              }}>
                ¿Por qué <Box component="span" sx={{ color: 'primary.main' }}>AI4U</Box>?
              </H1>
              <BodyText sx={{ 
                mb: 4, 
                textAlign: 'center',
                color: 'text.secondary',
                maxWidth: 900,
                mx: 'auto',
                fontSize: { xs: 18, md: 20 },
                lineHeight: 1.5
              }}>
                Somos el único servicio de automatización que combina asistentes robóticos evolutivos 
                con resultados garantizados en 72 horas. No solo automatizamos tareas - transformamos 
                el tiempo perdido en libertad estratégica.
              </BodyText>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Diagnóstico Gratuito */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
                '& .MuiCardContent-root': {
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }
              }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'white',
                    width: 60,
                    height: 60,
                    mb: 2,
                    color: 'black',
                    boxShadow: 1
                  }}
                >
                  <TimelineIcon fontSize="large" />
                </Avatar>
                <H3 sx={{ mb: 2, textAlign: 'center' }}>Diagnóstico Gratuito</H3>
                <Divider sx={{ my: 2, width: '100%' }} />
                <BodyText sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  Evaluamos tu negocio sin costo para identificar oportunidades de automatización.
                </BodyText>
              </Card>
            </Grid>

            {/* Asistentes que Evolucionan */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
                '& .MuiCardContent-root': {
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }
              }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'white',
                    width: 60,
                    height: 60,
                    mb: 2,
                    color: 'black',
                    boxShadow: 1
                  }}
                >
                  <EmojiObjectsIcon fontSize="large" />
                </Avatar>
                <H3 sx={{ mb: 2, textAlign: 'center' }}>Asistentes que Evolucionan</H3>
                <Divider sx={{ my: 2, width: '100%' }} />
                <BodyText sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  A diferencia de otros servicios de automatización, nuestros asistentes aprenden y 
                  mejoran continuamente. No son simples robots, son tu equipo silencioso 24/7.
                </BodyText>
              </Card>
            </Grid>

            {/* Resultados Garantizados */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
                '& .MuiCardContent-root': {
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }
              }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'white',
                    width: 60,
                    height: 60,
                    mb: 2,
                    color: 'black',
                    boxShadow: 1
                  }}
                >
                  <VerifiedIcon fontSize="large" />
                </Avatar>
                <H3 sx={{ mb: 2, textAlign: 'center' }}>Resultados Garantizados</H3>
                <Divider sx={{ my: 2, width: '100%' }} />
                <BodyText sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  72 horas para implementación. ROI medible desde el primer mes. Si no ves resultados, 
                  te devolvemos tu inversión. Así de seguros estamos.
                </BodyText>
              </Card>
            </Grid>

            {/* Enfoque Estratégico */}
            <Grid item xs={12} mt={4}>
              <Paper sx={{ 
                boxShadow: 3,
                p: 4,
                bgcolor: mode === 'light' ? 'rgba(91, 146, 229, 0.08)' : 'rgba(91, 146, 229, 0.05)',
                borderLeft: 6,
                borderColor: 'secondary.main',
              }}>
                <H3 sx={{ mb: 2 }}>Enfoque Estratégico</H3>
                <BodyText sx={{ color: 'text.secondary' }}>
                  Mientras otros venden automatización, nosotros entregamos libertad estratégica. 
                  Liberamos el 70% de tu tiempo operativo para que te enfoques en lo que realmente importa.
                </BodyText>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Timeline Section */}
      <Box sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: 'background.paper',
        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)'
      }}>
        <Container maxWidth="lg">
          <H2 sx={{ 
            mb: 6, 
            textAlign: 'center',
            fontWeight: 600
          }}>
            Tu camino hacia la libertad estratégica
          </H2>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} md={10}>
              <Stack spacing={4}>
                {[
                  {
                    step: '01',
                    title: 'Diagnóstico Gratuito',
                    duration: '30 minutos',
                    icon: <ScheduleIcon />,
                    color: 'primary.main'
                  },
                  {
                    step: '02',
                    title: 'Plan Personalizado',
                    duration: '24 horas',
                    icon: <EmojiObjectsIcon />,
                    color: 'secondary.main'
                  },
                  {
                    step: '03',
                    title: 'Implementación Express',
                    duration: '72 horas',
                    icon: <RocketLaunchIcon />,
                    color: 'primary.main'
                  },
                  {
                    step: '04',
                    title: 'Resultados Inmediatos',
                    duration: 'Desde el primer mes',
                    icon: <BarChartIcon />,
                    color: 'secondary.main'
                  }
                ].map((item, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      borderLeft: 6,
                      borderColor: item.color,
                      boxShadow: 2,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateX(5px)',
                        boxShadow: 3,
                      }
                    }}
                  >
                    <Avatar 
                      sx={{ 
                        bgcolor: 'white',
                        color: 'black',
                        boxShadow: 1,
                        mr: 3
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <BodyText 
                          variant="h6" 
                          component="span"
                          sx={{ 
                            fontWeight: 600,
                            mr: 1,
                          }}
                        >
                          {item.step}
                        </BodyText>
                        <H3>{item.title}</H3>
                      </Box>
                      <BodyText sx={{ color: 'text.secondary' }}>
                        {item.duration}
                      </BodyText>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <ServicesButton 
              variant="primary" 
              size="large"
              text="Conoce Nuestras Soluciones"
            />
          </Box>
        </Container>
      </Box>

      {/* Founder Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Paper 
                sx={{ 
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  height: { xs: 350, md: 450 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: mode === 'light' ? 'rgba(91, 146, 229, 0.08)' : 'rgba(91, 146, 229, 0.05)',
                  mb: { xs: 3, md: 0 }
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/mariano.jpeg"
                  alt="Mariano, Fundador de AI4U"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <H2 sx={{ mb: 2 }}>Mariano</H2>
              <BodyText 
                variant="subtitle1" 
                sx={{ 
                  mb: 3, 
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: 18
                }}
              >
                마리아노<br />
                Fundador de AI4U<br />
                Cofundador de Matt Movilidad
              </BodyText>
              
              <BodyText sx={{ 
                mb: 4, 
                color: 'text.secondary',
                lineHeight: 1.8
              }}>
                Apasionado por la innovación, la tecnología y el diseño. Con un enfoque claro en transformar 
                ideas en soluciones tangibles, lidero proyectos que impulsan el desarrollo de empresas y 
                mejoran la calidad de vida de las personas. Desde la movilidad sostenible hasta la 
                automatización empresarial, mi propósito es generar impacto positivo a través de la 
                tecnología y la creatividad.
              </BodyText>
              
              <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                {['Startups', 'Movilidad', 'Tecnología', 'Ajedrez', 'Diseño'].map((tag, index) => (
                  <Chip 
                    key={index}
                    label={tag}
                    sx={{ 
                      bgcolor: mode === 'light' ? 'rgba(91, 146, 229, 0.05)' : 'rgba(91, 146, 229, 0.1)',
                      border: '1px solid',
                      borderColor: 'divider',
                      mb: 1
                    }}
                  />
                ))}
              </Stack>
              
              <Box>
                <IconButton 
                  aria-label="LinkedIn" 
                  component="a"
                  href="https://www.linkedin.com/in/mariano3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: mode === 'light' ? 'rgba(255, 69, 0, 0.08)' : 'rgba(255, 69, 0, 0.05)'
                    },
                    mr: 2
                  }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box sx={{ 
        py: 8, 
        bgcolor: mode === 'light' ? 'rgba(91, 146, 229, 0.05)' : 'rgba(0, 0, 0, 0.2)',
        textAlign: 'center' 
      }}>
        <Container maxWidth="md">
          <H2 sx={{ mb: 3 }}>¿Listo para descubrir cómo AI4U puede transformar tu negocio?</H2>
          <BodyText sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
            Agenda ahora tu diagnóstico gratuito de 30 minutos y descubre oportunidades de automatización que liberarán tu tiempo estratégico.
          </BodyText>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <DiagnosticCTA 
              variant="primary" 
              size="large" 
              text="AGENDA TU DIAGNÓSTICO GRATUITO" 
            />
            <ServicesButton
              variant="outline"
              size="large"
              text="VER SOLUCIONES"
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default WhyAI4U; 