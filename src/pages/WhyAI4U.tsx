import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  Paper, 
  Avatar, 
  Typography as MuiTypography, 
  Card, 
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  IconButton
} from '@mui/material';
import { H1, H2, H3, BodyText } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BarChartIcon from '@mui/icons-material/BarChart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const WhyAI4U = () => {
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
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box 
                    sx={{ 
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Avatar 
                      sx={{ 
                        bgcolor: 'primary.main',
                        width: 60,
                        height: 60,
                        mb: 2
                      }}
                    >
                      <TimelineIcon fontSize="large" />
                    </Avatar>
                  </Box>
                  <H3 sx={{ mb: 2, textAlign: 'center' }}>Diagnóstico Gratuito</H3>
                  <Divider sx={{ my: 2 }} />
                  <BodyText sx={{ color: 'text.secondary', textAlign: 'center' }}>
                    Evaluamos tu negocio sin costo para identificar oportunidades de automatización.
                  </BodyText>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box 
                    sx={{ 
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Avatar 
                      sx={{ 
                        bgcolor: 'secondary.main',
                        width: 60,
                        height: 60,
                        mb: 2
                      }}
                    >
                      <EmojiObjectsIcon fontSize="large" />
                    </Avatar>
                  </Box>
                  <H3 sx={{ mb: 2, textAlign: 'center' }}>Asistentes que Evolucionan</H3>
                  <Divider sx={{ my: 2 }} />
                  <BodyText sx={{ color: 'text.secondary', textAlign: 'center' }}>
                    A diferencia de otros servicios de automatización, nuestros asistentes aprenden y 
                    mejoran continuamente. No son simples robots, son tu equipo silencioso 24/7.
                  </BodyText>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box 
                    sx={{ 
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Avatar 
                      sx={{ 
                        bgcolor: 'primary.main',
                        width: 60,
                        height: 60,
                        mb: 2
                      }}
                    >
                      <VerifiedIcon fontSize="large" />
                    </Avatar>
                  </Box>
                  <H3 sx={{ mb: 2, textAlign: 'center' }}>Resultados Garantizados</H3>
                  <Divider sx={{ my: 2 }} />
                  <BodyText sx={{ color: 'text.secondary', textAlign: 'center' }}>
                    72 horas para implementación. ROI medible desde el primer mes. Si no ves resultados, 
                    te devolvemos tu inversión. Así de seguros estamos.
                  </BodyText>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} mt={4}>
              <Card sx={{ 
                boxShadow: 3,
                p: 4,
                bgcolor: 'secondary.light',
                borderLeft: 6,
                borderColor: 'secondary.main',
              }}>
                <CardContent>
                  <H3 sx={{ mb: 2 }}>Enfoque Estratégico</H3>
                  <BodyText sx={{ color: 'text.secondary' }}>
                    Mientras otros venden automatización, nosotros entregamos libertad estratégica. 
                    Liberamos el 70% de tu tiempo operativo para que te enfoques en lo que realmente importa.
                  </BodyText>
                </CardContent>
              </Card>
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
                        bgcolor: item.color,
                        mr: 3
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <MuiTypography 
                          variant="h6" 
                          component="span"
                          sx={{ 
                            fontWeight: 600,
                            mr: 1,
                          }}
                        >
                          {item.step}
                        </MuiTypography>
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
            <Button 
              variant="primary" 
              size="large"
              sx={{ 
                py: 1.5,
                px: 4,
                fontSize: 18
              }}
            >
              Comienza Tu Transformación
            </Button>
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
                  bgcolor: 'secondary.light',
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
              <MuiTypography 
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
              </MuiTypography>
              
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
              
              <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                {['Startups', 'Movilidad', 'Tecnología', 'Ajedrez', 'Diseño'].map((tag, index) => (
                  <Chip 
                    key={index}
                    label={tag}
                    sx={{ 
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider'
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
                    color: '#0077B5',
                    bgcolor: 'rgba(0, 119, 181, 0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(0, 119, 181, 0.2)'
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
    </Box>
  );
};

export default WhyAI4U; 