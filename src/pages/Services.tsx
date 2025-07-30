import React from 'react';
import { Container, Grid, Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { H1, H2, H3, BodyText } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import Card from '../components/ui/Card';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { DiagnosticCTA } from '../components/ui/DiagnosticCTA';
import { serviciosAI4U } from '../data/services';

// Industry service case component
interface IndustryServiceProps {
  title: string;
  items: string[];
}

const IndustryService: React.FC<IndustryServiceProps> = ({ title, items }) => (
  <Box sx={{ mb: 4 }}>
    <H3 sx={{ mb: 2, textAlign: 'center' }}>{title}</H3>
    <List dense>
      {items.map((item, index) => (
        <ListItem key={index} disableGutters>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Box>
);

// Service card with title, description and use cases
interface ServiceCardProps {
  title: string;
  description: string;
  useCases: string[];
}

const ServiceDetailCard: React.FC<ServiceCardProps> = ({ title, description, useCases }) => (
  <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <H3 color="primary" sx={{ mb: 2, textAlign: 'center' }}>{title}</H3>
    <BodyText sx={{ mb: 2 }}>{description}</BodyText>
    
    <Box sx={{ mt: 'auto' }}>
      <BodyText sx={{ fontWeight: 600, mb: 1 }}>Casos de uso:</BodyText>
      <List dense disablePadding>
        {useCases.map((useCase, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckCircleOutlineIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={useCase} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Paper>
);

// Process step component
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <Box sx={{ display: 'flex', mb: 2 }}>
    <Box 
      sx={{ 
        width: 40, 
        height: 40, 
        borderRadius: '50%', 
        bgcolor: 'primary.main', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexShrink: 0,
        mr: 2
      }}
    >
      {number}
    </Box>
    <Box>
      <BodyText sx={{ fontWeight: 600 }}>{title}</BodyText>
      <BodyText color="text.secondary">{description}</BodyText>
    </Box>
  </Box>
);

const Services: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Hero Section */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ textAlign: 'center' }}>
          <H1 sx={{ mb: 2 }}>Servicios AI4U</H1>
          <H2 sx={{ mb: 3, fontWeight: 500 }}>Construimos tu infraestructura de IA personalizada</H2>
        </Box>
        <BodyText sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
          En AI4U nos especializamos en crear soluciones de inteligencia artificial adaptadas específicamente a tu negocio. 
          Automatizamos procesos, liberamos tiempo operativo y transformamos ese tiempo en libertad estratégica.
        </BodyText>
      </Box>

      {/* Our Process Section */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4, textAlign: 'center' }}>Nuestro proceso</H2>
        
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
              <ProcessStep 
                number={1} 
                title="Diagnóstico gratuito (30 minutos)" 
                description="Identificamos todas las oportunidades de automatización en tu negocio"
              />
              <ProcessStep 
                number={2} 
                title="Definición de prioridades" 
                description="Establecemos qué procesos automatizar primero según tu ROI"
              />
              <ProcessStep 
                number={3} 
                title="Presupuesto personalizado" 
                description="Adaptamos las soluciones a tu capacidad de inversión"
              />
              <ProcessStep 
                number={4} 
                title="Implementación" 
                description="Desarrollamos e integramos las soluciones en tu negocio"
              />
            </Box>
            
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <DiagnosticCTA 
                variant="primary" 
                size="medium" 
                text="Iniciar con diagnóstico gratuito" 
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Our Services Section */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 5, textAlign: 'center' }}>Nuestros servicios</H2>
        <Grid container spacing={4}>
          {serviciosAI4U.map((servicio, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <H3 color="primary" sx={{ mb: 2, textAlign: 'center' }}>{servicio.titulo}</H3>
                <BodyText sx={{ mb: 1, fontWeight: 600, textAlign: 'center' }}>{servicio.subtitulo}</BodyText>
                <BodyText sx={{ mb: 2 }}>{servicio.descripcion}</BodyText>
                <BodyText sx={{ fontWeight: 600, mb: 1 }}>Beneficios:</BodyText>
                <List dense disablePadding>
                  {servicio.beneficios.map((b, i) => (
                    <ListItem disableGutters key={i}><ListItemText primary={b} /></ListItem>
                  ))}
                </List>
                <BodyText sx={{ mt: 2 }}>
                  <b>Tiempo:</b> {servicio.tiempo}
                </BodyText>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ¿Cómo empezar? - Enhanced Version */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 6, textAlign: 'center' }}>Tu Transformación Digital en 4 Pasos</H2>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center', 
                    borderRadius: 3,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    1
                  </Box>
                  <H3 sx={{ mb: 1, fontSize: '1.1rem' }}>Diagnóstico Gratuito</H3>
                  <BodyText sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>30 minutos</BodyText>
                  <BodyText sx={{ fontSize: '0.9rem' }}>
                    Identificamos oportunidades de automatización y calculamos tu ROI potencial
                  </BodyText>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center', 
                    borderRadius: 3,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: '50%', 
                      bgcolor: 'secondary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    2
                  </Box>
                  <H3 sx={{ mb: 1, fontSize: '1.1rem' }}>Estrategia Personalizada</H3>
                  <BodyText sx={{ color: 'secondary.main', fontWeight: 600, mb: 1 }}>24 horas</BodyText>
                  <BodyText sx={{ fontSize: '0.9rem' }}>
                    Diseñamos tu hoja de ruta de automatización con prioridades claras
                  </BodyText>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center', 
                    borderRadius: 3,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: '50%', 
                      bgcolor: 'success.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    3
                  </Box>
                  <H3 sx={{ mb: 1, fontSize: '1.1rem' }}>Implementación Express</H3>
                  <BodyText sx={{ color: 'success.main', fontWeight: 600, mb: 1 }}>72 horas</BodyText>
                  <BodyText sx={{ fontSize: '0.9rem' }}>
                    Desplegamos e integramos las soluciones en tu operación actual
                  </BodyText>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center', 
                    borderRadius: 3,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: '50%', 
                      bgcolor: 'warning.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    4
                  </Box>
                  <H3 sx={{ mb: 1, fontSize: '1.1rem' }}>Libertad Estratégica</H3>
                  <BodyText sx={{ color: 'warning.main', fontWeight: 600, mb: 1 }}>Primer mes</BodyText>
                  <BodyText sx={{ fontSize: '0.9rem' }}>
                    Disfrutas de más tiempo para decisiones estratégicas y crecimiento
                  </BodyText>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 4, 
              maxWidth: 600, 
              mx: 'auto', 
              borderRadius: 3,
              bgcolor: 'primary.main',
              color: 'white'
            }}
          >
            <H3 sx={{ mb: 2, color: 'white' }}>¡Comienza Tu Transformación Hoy!</H3>
            <BodyText sx={{ mb: 3, color: 'rgba(255,255,255,0.9)' }}>
              Agenda tu diagnóstico gratuito y descubre cómo liberar tu tiempo estratégico
            </BodyText>
            <DiagnosticCTA 
              variant="secondary" 
              size="large" 
              text="AGENDAR DIAGNÓSTICO GRATUITO" 
            />
            <BodyText sx={{ mt: 2, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              calendly.com/mgarciap333/ai4u-automatizacion-inteligente
            </BodyText>
          </Paper>
        </Box>
      </Box>

      {/* Garantía y soporte - Enhanced */}
      <Box sx={{ mb: 8 }}>
        <Paper 
          elevation={1} 
          sx={{ 
            p: 3, 
            bgcolor: 'background.default', 
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <BodyText sx={{ textAlign: 'center', fontWeight: 500, color: 'text.primary' }}>
            🛡️ <strong>Garantía Total:</strong> Todos nuestros servicios incluyen garantía de satisfacción y soporte técnico especializado las 24 horas.
          </BodyText>
        </Paper>
      </Box>


      {/* CTA Section */}
      <Box sx={{ py: 6, bgcolor: 'background.paper', borderRadius: 3, boxShadow: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <H2 sx={{ mb: 2 }}>¿Listo para liberar tu tiempo estratégico?</H2>
        </Box>
        <BodyText sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          Agenda tu diagnóstico gratuito de 30 minutos y descubre cómo podemos transformar tu negocio con IA.
        </BodyText>
        
        <Box sx={{ textAlign: 'center' }}>
          <DiagnosticCTA variant="primary" size="large" text="AGENDAR DIAGNÓSTICO GRATUITO" />
          
          <BodyText sx={{ mt: 3, fontStyle: 'italic', color: 'text.secondary' }}>
            Sin compromiso • Personalizado a tu negocio • Resultados desde el primer mes
          </BodyText>
        </Box>
      </Box>
    </Container>
  );
};

export default Services; 