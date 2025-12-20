import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import { H1, H2, H3, BodyText, ServiceThumbnail } from '../components/shared/ui/atoms';
import { useColors } from '../hooks';
import { services } from '../data/services';

const ServiceThumbnailsDemo: React.FC = () => {
  const colors = useColors();

  return (
    <Box sx={{ py: 6, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <H1 sx={{ textAlign: 'center', mb: 2, color: 'text.primary' }}>
          Demostración de Thumbnails de Servicios
        </H1>
        <BodyText sx={{ textAlign: 'center', mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
          Esta página muestra cómo se ven los thumbnails en las tarjetas de servicios. 
          Los servicios con thumbnails personalizados se muestran con imágenes reales, 
          mientras que los demás usan thumbnails generativos automáticos.
        </BodyText>

        <Divider sx={{ mb: 6 }} />

        {/* Sección de Thumbnails Generativos */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 4, color: 'text.primary' }}>
            Thumbnails Generativos (Automáticos)
          </H2>
          <BodyText sx={{ mb: 4, color: 'text.secondary' }}>
            Estos servicios usan thumbnails generados automáticamente basados en su color y ID único.
          </BodyText>
          
          <Grid container spacing={3}>
            {services.filter(service => !service.thumbnail).slice(0, 6).map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card sx={{ 
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.contrast.border}`,
                  borderRadius: 3
                }}>
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                      <ServiceThumbnail
                        serviceId={service.id}
                        serviceColor={service.color}
                        size="medium"
                      />
                    </Box>
                    <H3 sx={{ mb: 1, fontSize: '1.2rem', color: 'text.primary' }}>
                      {service.title}
                    </H3>
                    <BodyText sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                      {service.subtitle}
                    </BodyText>
                    <Box sx={{ 
                      mt: 2, 
                      p: 1, 
                      bgcolor: `${service.color}10`, 
                      borderRadius: 1,
                      display: 'inline-block'
                    }}>
                      <Typography sx={{ 
                        fontSize: '0.7rem', 
                        color: service.color, 
                        fontWeight: 600 
                      }}>
                        ID: {service.id}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Sección de Thumbnails Personalizados */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 4, color: 'text.primary' }}>
            Thumbnails Personalizados
          </H2>
          <BodyText sx={{ mb: 4, color: 'text.secondary' }}>
            Estos servicios tienen thumbnails personalizados diseñados específicamente.
          </BodyText>
          
          <Grid container spacing={3}>
            {services.filter(service => service.thumbnail).map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card sx={{ 
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.contrast.border}`,
                  borderRadius: 3
                }}>
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                      <ServiceThumbnail
                        serviceId={service.id}
                        serviceColor={service.color}
                        size="medium"
                        customThumbnail={service.thumbnail}
                      />
                    </Box>
                    <H3 sx={{ mb: 1, fontSize: '1.2rem', color: 'text.primary' }}>
                      {service.title}
                    </H3>
                    <BodyText sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                      {service.subtitle}
                    </BodyText>
                    <Box sx={{ 
                      mt: 2, 
                      p: 1, 
                      bgcolor: `${service.color}10`, 
                      borderRadius: 1,
                      display: 'inline-block'
                    }}>
                      <Typography sx={{ 
                        fontSize: '0.7rem', 
                        color: service.color, 
                        fontWeight: 600 
                      }}>
                        Thumbnail personalizado
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Información del Sistema */}
        <Box sx={{ 
          p: 4, 
          bgcolor: 'background.paper', 
          borderRadius: 3,
          border: `1px solid ${colors.contrast.border}`
        }}>
          <H3 sx={{ mb: 3, color: 'text.primary' }}>
            Información del Sistema de Thumbnails
          </H3>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                  Thumbnails Generativos
                </Typography>
                <BodyText sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                  • Se generan automáticamente basados en el ID del servicio<br/>
                  • Usan el color principal del servicio<br/>
                  • Patrones geométricos únicos para cada servicio<br/>
                  • Tamaño: 120x120 píxeles
                </BodyText>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                  Thumbnails Personalizados
                </Typography>
                <BodyText sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                  • Imágenes diseñadas específicamente para cada servicio<br/>
                  • Se almacenan en /public/assets/images/services-thumbnails/<br/>
                  • Formato: JPG o PNG, 240x240 píxeles<br/>
                  • Se especifican en el campo thumbnail del servicio
                </BodyText>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ 
            mt: 3, 
            p: 2, 
            bgcolor: `${colors.palette.accent}10`, 
borderRadius: 2,
border: `1px solid ${colors.palette.accent}20`
          }}>
            <Typography sx={{ fontWeight: 600, mb: 1, color: colors.palette.accent }}>
              Cómo Agregar Thumbnails Personalizados
            </Typography>
            <BodyText sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
              1. Crea una imagen de 240x240 píxeles para el servicio<br/>
              2. Guárdala como JPG en public/assets/images/services-thumbnails/<br/>
              3. Usa el nombre del service-id como nombre de archivo<br/>
              4. Agrega el campo thumbnail en src/data/services.ts
            </BodyText>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceThumbnailsDemo;
