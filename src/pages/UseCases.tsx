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
import { useColors } from '../hooks';

const UseCases = () => {
  const colors = useColors();

  return (
    <Box sx={{ 
      background: `linear-gradient(135deg, ${colors.helpers.background.primary} 0%, ${colors.helpers.background.secondary} 100%)`
    }}>
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
            letterSpacing: '-0.02em',
            color: colors.helpers.text.primary
          }}>
            Casos de <Box component="span" sx={{ color: colors.palette.orange }}>Uso</Box>
          </H1>
          <BodyText sx={{ 
            mb: 8, 
            color: colors.helpers.text.secondary,
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

      

             {/* Sección de Métricas y Clientes - Inspirada en Virgil Abloh */}
       <Box sx={{ py: { xs: 8, md: 12 } }}>
         <Container maxWidth="lg">
           <Grid container spacing={6}>
             <Grid item xs={12} md={6}>
               <Box sx={{ 
                 textAlign: { xs: 'center', md: 'left' },
                 mb: { xs: 6, md: 0 }
               }}>
                 <H2 sx={{ 
                   mb: 4,
                   fontWeight: 300,
                   fontSize: { xs: '2rem', md: '2.5rem' },
                   color: colors.helpers.text.primary
                 }}>
                   Resultados que <Box component="span" sx={{ color: colors.palette.orange }}>Hablan</Box>
                 </H2>
                 <BodyText sx={{ 
                   mb: 6,
                   color: colors.helpers.text.secondary,
                   fontSize: '1.1rem',
                   lineHeight: 1.6,
                   fontWeight: 300
                 }}>
                   Nuestras soluciones de IA han transformado empresas de todos los tamaños, 
                   generando resultados medibles y crecimiento sostenible.
                 </BodyText>
               </Box>
             </Grid>
             
             <Grid item xs={12} md={6}>
               <Stack spacing={4}>
                 <Card variant="glass" sx={{ p: 4 }}>
                   <Stack direction="row" alignItems="center" spacing={3}>
                     <GeometricIcon 
                       type="circle" 
                       size="medium" 
                       color={colors.palette.orange} 
                       variant="filled" 
                     />
                     <Box>
                       <H3 sx={{ 
                         mb: 1,
                         fontWeight: 400,
                         fontSize: '1.5rem',
                         color: colors.helpers.text.primary
                       }}>
                         95%
                       </H3>
                       <BodyText sx={{ 
                         color: colors.helpers.text.secondary,
                         fontSize: '0.9rem',
                         fontWeight: 300
                       }}>
                         Reducción en tiempo de procesamiento
                       </BodyText>
                     </Box>
                   </Stack>
                 </Card>
                 
                 <Card variant="glass" sx={{ p: 4 }}>
                   <Stack direction="row" alignItems="center" spacing={3}>
                     <GeometricIcon 
                       type="square" 
                       size="medium" 
                       color={colors.palette.green} 
                       variant="filled" 
                     />
                     <Box>
                       <H3 sx={{ 
                         mb: 1,
                         fontWeight: 400,
                         fontSize: '1.5rem',
                         color: colors.helpers.text.primary
                       }}>
                         300%
                       </H3>
                       <BodyText sx={{ 
                         color: colors.helpers.text.secondary,
                         fontSize: '0.9rem',
                         fontWeight: 300
                       }}>
                         Incremento en productividad
                       </BodyText>
                     </Box>
                   </Stack>
                 </Card>
                 
                 <Card variant="glass" sx={{ p: 4 }}>
                   <Stack direction="row" alignItems="center" spacing={3}>
                     <GeometricIcon 
                       type="triangle" 
                       size="medium" 
                       color={colors.palette.green}  
                       variant="filled" 
                     />
                     <Box>
                       <H3 sx={{ 
                         mb: 1,
                         fontWeight: 400,
                         fontSize: '1.5rem',
                         color: colors.helpers.text.primary
                       }}>
                         24/7
                       </H3>
                       <BodyText sx={{ 
                         color: colors.helpers.text.secondary,
                         fontSize: '0.9rem',
                         fontWeight: 300
                       }}>
                         Operación continua sin interrupciones
                       </BodyText>
                     </Box>
                   </Stack>
                 </Card>
               </Stack>
             </Grid>
           </Grid>
         </Container>
       </Box>

       {/* Sección de Clientes con Enlaces */}
       <Box sx={{ py: { xs: 8, md: 12 } }}>
         <Container maxWidth="lg">
           <H2 sx={{ 
             mb: 8, 
             textAlign: 'center',
             fontWeight: 300,
             fontSize: { xs: '2rem', md: '2.5rem' },
             color: colors.helpers.text.primary
           }}>
             Casos de <Box component="span" sx={{ color: colors.palette.orange }}>Uso</Box> Reales
           </H2>
           
           <Grid container spacing={4}>
             {clients.map((client) => (
                               <Grid item xs={12} sm={6} md={3} key={client.id}>
                  <Card 
                    variant="glass" 
                    sx={{ 
                      p: 3, 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 24px rgba(0,0,0,0.15)`,
                        borderColor: colors.palette.orange,
                      }
                    }}
                  >
                    <Box
                      component="a"
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        mb: 3,
                        height: 80
                      }}>
                        <Box
                          component="img"
                          src={client.logo}
                          alt={`Logo de ${client.name}`}
                          sx={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            filter: 'grayscale(100%)',
                            opacity: 0.8,
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              filter: 'grayscale(0%)',
                              opacity: 1
                            }
                          }}
                        />
                      </Box>
                      
                      <H3 sx={{ 
                        mb: 2,
                        fontWeight: 400,
                        fontSize: '1.2rem',
                        color: colors.helpers.text.primary,
                        textAlign: 'center'
                      }}>
                        {client.name}
                      </H3>
                      
                      <BodyText sx={{ 
                        color: colors.helpers.text.secondary,
                        fontSize: '0.9rem',
                        fontWeight: 300,
                        lineHeight: 1.5,
                        flex: 1
                      }}>
                        {client.description}
                      </BodyText>
                      
                      <Box sx={{ 
                        mt: 2, 
                        textAlign: 'center',
                        color: colors.palette.orange,
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}>
                        Visitar sitio →
                      </Box>
                    </Box>
                  </Card>
                </Grid>
             ))}
           </Grid>
         </Container>
       </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <DiagnosticCTA />
        </Container>
      </Box>
    </Box>
  );
};

export default UseCases; 