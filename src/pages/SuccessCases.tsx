import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  Paper, 
  Avatar, 
  Typography as MuiTypography,
  Divider,
  Link
} from '@mui/material';
import { H1, H2, H3, BodyText } from '../components/shared/ui/atoms';
import { Button } from '../components/shared/ui/atoms';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { DiagnosticCTA, ServicesButton } from '../components/shared/ui/molecules';
import { clients } from '../data/clients';

const SuccessCases = () => {
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
                Casos de <Box component="span" sx={{ color: 'primary.main' }}>Éxito</Box>
              </H1>
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* Nuestros Clientes Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <H2 sx={{ mb: 3, fontWeight: 700 }}>
              Nuestros <Box component="span" sx={{ color: 'primary.main' }}>Clientes</Box>
            </H2>
            <BodyText sx={{ fontSize: '1.1rem', maxWidth: '800px', mx: 'auto' }}>
              En <strong>AI4U</strong>, colaboramos con marcas y organizaciones que apuestan por la transformación digital mediante inteligencia artificial, automatización estratégica y diseño basado en datos.
            </BodyText>
          </Box>

          <Divider sx={{ mb: 6, bgcolor: 'primary.main', height: 2, maxWidth: '100px', mx: 'auto' }} />

          <Grid container spacing={4}>
            {clients.map((client, index) => (
              <Grid item xs={12} key={client.id}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: { xs: 3, md: 4 }, 
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={3}>
                      <Box sx={{ 
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                        <Box
                          sx={{
                            width: '140px',
                            height: '100px',
                            bgcolor: 'white',
                            borderRadius: 1,
                            border: '1px solid',
                            borderColor: 'rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 2,
                            mb: 2
                          }}
                        >
                          <Box 
                            component="img" 
                            src={client.logo} 
                            alt={`Logo ${client.name}`}
                            sx={{ 
                              maxWidth: '100%',
                              maxHeight: '100%',
                              width: 'auto',
                              height: 'auto',
                              objectFit: 'contain'
                            }}
                          />
                        </Box>
                        <Link 
                          href={client.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            color: 'primary.main',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          {client.website.replace('https://www.', '').replace('https://', '')}
                        </Link>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={9}>
                      <BodyText sx={{ 
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        color: 'text.secondary'
                      }}>
                        {client.description}
                      </BodyText>
                    </Grid>
                  </Grid>
                </Paper>
                
                {index < clients.length - 1 && (
                  <Divider sx={{ my: 4, bgcolor: 'divider' }} />
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <H2 sx={{ mb: 3 }}>¿Listo para ser nuestro próximo caso de éxito?</H2>
          <BodyText sx={{ mb: 4 }}>
            Descubre cómo podemos ayudarte a transformar tu negocio con soluciones de IA a medida.
          </BodyText>
          <Stack direction="row" spacing={3} justifyContent="center">
            <DiagnosticCTA 
              variant="primary" 
              size="large"
              text="Agenda tu diagnóstico gratuito"
              className="px-4 py-1.5 rounded-lg"
            />
            <ServicesButton
              variant="outline"
              size="large"
              text="Explorar soluciones"
              className="px-4 py-1.5 rounded-lg"
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default SuccessCases; 