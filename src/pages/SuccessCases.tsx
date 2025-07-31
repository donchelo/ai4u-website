import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Stack, 
  Link
} from '@mui/material';
import { H1, H2, H3, BodyText, GeometricIcon } from '../components/shared/ui/atoms';
import { Card, DiagnosticCTA, ServicesButton } from '../components/shared/ui/molecules';
import { clients } from '../data/clients';

const SuccessCases = () => {
  return (
    <Box sx={{ background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)' }}>
      {/* Hero Section - Inspirado en Virgil Abloh */}
      <Box sx={{ 
        py: { xs: 8, md: 12 },
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <H1 sx={{ 
            mb: 6, 
            fontWeight: 300,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            letterSpacing: '-0.02em'
          }}>
            Casos de <Box component="span" sx={{ color: '#FF5C00' }}>Éxito</Box>
          </H1>
          <BodyText sx={{ 
            mb: 8, 
            color: 'text.secondary',
            fontSize: '1.2rem',
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: 700,
            mx: 'auto'
          }}>
            Transformamos ideas en resultados. Cada logo representa una historia de innovación, 
            automatización y crecimiento estratégico.
          </BodyText>
        </Container>
      </Box>


                    {/* Clientes Horizontal Scroll - Glassmorphism Futurista */}
       <Box sx={{ py: { xs: 8, md: 12 } }}>
         <Container maxWidth="lg">
           <H2 sx={{ 
             mb: 8, 
             textAlign: 'center',
             fontWeight: 300,
             fontSize: { xs: '2rem', md: '2.5rem' }
           }}>
             Nuestros <Box component="span" sx={{ color: '#FF5C00' }}>Clientes</Box>
           </H2>
           
                       <Box sx={{ 
              overflow: 'hidden',
              position: 'relative',
              mx: -2,
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '60px',
                zIndex: 2,
                pointerEvents: 'none'
              },
              '&::before': {
                left: 0,
                background: 'linear-gradient(90deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%)'
              },
              '&::after': {
                right: 0,
                background: 'linear-gradient(90deg, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 1) 100%)'
              }
            }}>
              <Box sx={{ 
                display: 'flex',
                gap: 4,
                overflowX: 'auto',
                overflowY: 'hidden',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                pb: 3,
                px: 4
              }}>
                {clients.map((client, index) => (
                  <Box key={client.id} sx={{ 
                    flexShrink: 0,
                    width: '300px'
                  }}>
                                         <Card variant="glass" sx={{ 
                       height: '280px',
                       p: 4,
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: 'center',
                       textAlign: 'center',
                       position: 'relative',
                       overflow: 'hidden',
                       background: 'rgba(255, 255, 255, 0.7)',
                       backdropFilter: 'blur(20px)',
                       border: '1px solid rgba(255, 255, 255, 0.3)',
                       transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                       '&:hover': {
                         transform: 'translateY(-8px)',
                         boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                         background: 'rgba(255, 255, 255, 0.9)',
                         '& .logo': {
                           transform: 'scale(1.1)',
                         },
                         '& .url': {
                           opacity: 1,
                           transform: 'translateY(0)',
                         }
                       }
                     }}>
                                                                    {/* Logo - Prioridad máxima */}
                       <Box 
                         className="logo"
                         sx={{ 
                           mb: 3,
                           width: '100%',
                           height: '120px',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                           position: 'relative'
                         }}
                       >
                         <Box
                           component="img"
                           src={client.logo}
                           alt={`Logo ${client.name}`}
                           sx={{
                             maxWidth: '180px',
                             maxHeight: '100px',
                             width: 'auto',
                             height: 'auto',
                             objectFit: 'contain',
                             filter: 'grayscale(0.2)',
                             transition: 'all 0.3s ease'
                           }}
                         />
                       </Box>
                       
                       {/* URL visible */}
                       <Link 
                         href={client.website}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="url"
                         sx={{ 
                           color: '#FF5C00',
                           textDecoration: 'none',
                           fontSize: '1rem',
                           fontWeight: 500,
                           opacity: 1,
                           transition: 'all 0.3s ease',
                           mb: 2,
                           display: 'block',
                           '&:hover': {
                             color: '#FF5C00',
                             textDecoration: 'underline',
                             opacity: 0.8
                           }
                         }}
                       >
                         {client.website.replace('https://www.', '').replace('https://', '')}
                       </Link>
                      
                      {/* Icono geométrico */}
                      <Box sx={{ mt: 'auto' }}>
                        <GeometricIcon
                          type={index % 3 === 0 ? "circle" : index % 3 === 1 ? "triangle" : "square"}
                          size="small"
                          color="rgba(0, 0, 0, 0.15)"
                          variant="minimal"
                        />
                      </Box>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>
         </Container>
       </Box>

      {/* CTA Section - Inspirado en Virgil Abloh */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Card variant="dark" sx={{ textAlign: 'center', p: 6 }}>
            <Box sx={{ mb: 4 }}>
              <GeometricIcon
                type="arrow-up"
                size="large"
                color="#B6CA40"
                variant="filled"
              />
            </Box>
            <H2 sx={{ 
              mb: 4,
              color: '#FFFFFF',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 300
            }}>
              ¿Listo para ser nuestro próximo caso de éxito?
            </H2>
            <BodyText sx={{ 
              mb: 6, 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: 600,
              mx: 'auto'
            }}>
              Descubre cómo podemos ayudarte a transformar tu negocio con soluciones de IA a medida.
            </BodyText>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <DiagnosticCTA />
              <ServicesButton
                variant="outline"
                size="large"
                text="Explorar soluciones"
              />
            </Stack>
            
            <BodyText sx={{ 
              fontStyle: 'italic', 
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem'
            }}>
              Sin compromiso • Personalizado a tu negocio • Resultados desde el primer mes
            </BodyText>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default SuccessCases; 