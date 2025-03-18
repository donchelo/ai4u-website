import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  Paper, 
  Avatar, 
  Typography as MuiTypography,
} from '@mui/material';
import { H1, H2, BodyText } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

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

      {/* Testimonio Principal */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={10}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 3, md: 5 }, 
                  borderRadius: 2, 
                  border: '1px solid', 
                  borderColor: 'divider',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: 5, 
                  height: '100%', 
                  bgcolor: 'primary.main' 
                }} />

                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box 
                        component="img" 
                        src="/assets/images/cases/logo-magdalena.png" 
                        alt="Logo La Magdalena"
                        sx={{ 
                          maxWidth: '80%',
                          height: 'auto',
                          mb: 3
                        }}
                      />
                      <H2 variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Chino Romero</H2>
                      <BodyText sx={{ mb: 2 }}>Director de La Magdalena</BodyText>
                      <BodyText sx={{ fontWeight: 'medium' }}>Storytelling de Impacto Positivo</BodyText>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={8}>
                    <Box>
                      <H2 sx={{ mb: 3, fontWeight: 600 }}>Historia de Transformación Digital</H2>
                      
                      <Box sx={{ 
                        borderLeft: '3px solid', 
                        borderColor: 'primary.main', 
                        pl: 3, 
                        mb: 4 
                      }}>
                        <BodyText sx={{ 
                          fontStyle: 'italic',
                          fontSize: '1.2rem'
                        }}>
                          "La combinación de nuestra tienda Shopify y el AI Strategist 360 ha transformado nuestra operación digital. La capacidad de mantener nuestra voz de marca mientras generamos contenido de manera más eficiente nos permite enfocarnos en lo que realmente importa: crear impacto positivo en Latinoamérica."
                        </BodyText>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, bgcolor: 'background.default', textAlign: 'center' }}>
        <Container maxWidth="md">
          <H2 sx={{ mb: 3 }}>¿Listo para transformar tu presencia digital?</H2>
          <BodyText sx={{ mb: 4, fontSize: '1.1rem' }}>
            Únete a las empresas que ya están experimentando el poder de la automatización inteligente con AI4U
          </BodyText>
          
          <Button 
            variant="primary" 
            color="primary" 
            size="large"
            endIcon={<DoubleArrowIcon />}
            sx={{ px: 4, py: 1.5, borderRadius: 2 }}
          >
            Agenda tu diagnóstico gratuito
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default SuccessCases; 