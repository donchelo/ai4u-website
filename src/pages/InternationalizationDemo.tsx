import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Card, 
  CardContent,
  Grid,
  Divider
} from '@mui/material';
import { H1, H2, BodyText, LanguageToggle } from '../components/shared/ui/atoms';
import { useLanguage, useTranslation, useTranslations, useSectionTranslations } from '../hooks';
import { useColors } from '../hooks';

const InternationalizationDemo = () => {
  const { language, setLanguage } = useLanguage();
  const colors = useColors();
  
  // Ejemplos de uso de los hooks de traducción
  const heroTitle = useTranslation('hero.title');
  const navTranslations = useTranslations(['nav.home', 'nav.services', 'nav.whyAI4U']);
  const heroSection = useSectionTranslations('hero');

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={6}>
        {/* Header */}
        <Box sx={{ textAlign: 'center' }}>
          <H1 sx={{ color: colors.contrast.text.primary, mb: 2 }}>
            Sistema de Internacionalización AI4U
          </H1>
          <BodyText sx={{ color: colors.contrast.text.secondary, mb: 4 }}>
            Demostración del sistema escalable de cambio de idiomas
          </BodyText>
          
          {/* Botón de cambio de idioma */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <LanguageToggle variant="both" size="large" />
          </Box>
          
          <Typography variant="body2" sx={{ color: colors.contrast.text.secondary }}>
            Idioma actual: <strong>{language === 'es' ? 'Español' : 'English'}</strong>
          </Typography>
        </Box>

        <Divider />

        {/* Ejemplos de uso */}
        <Grid container spacing={4}>
          {/* Ejemplo 1: useTranslation */}
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              backgroundColor: colors.contrast.surface,
              border: `1px solid ${colors.contrast.border}`,
              height: '100%'
            }}>
              <CardContent>
                <H2 sx={{ color: colors.contrast.text.primary, mb: 2 }}>
                  useTranslation Hook
                </H2>
                <BodyText sx={{ color: colors.contrast.text.secondary, mb: 2 }}>
                  Traducción individual de una clave:
                </BodyText>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: colors.palette.accent,
                    fontFamily: 'monospace',
                    backgroundColor: colors.contrast.background,
                    padding: 1,
                    borderRadius: 1,
                    mb: 2
                  }}
                >
                  {heroTitle}
                </Typography>
                <Typography variant="caption" sx={{ color: colors.contrast.text.secondary }}>
                  Clave: 'hero.title'
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Ejemplo 2: useTranslations */}
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              backgroundColor: colors.contrast.surface,
              border: `1px solid ${colors.contrast.border}`,
              height: '100%'
            }}>
              <CardContent>
                <H2 sx={{ color: colors.contrast.text.primary, mb: 2 }}>
                  useTranslations Hook
                </H2>
                <BodyText sx={{ color: colors.contrast.text.secondary, mb: 2 }}>
                  Múltiples traducciones a la vez:
                </BodyText>
                <Stack spacing={1}>
                  {Object.entries(navTranslations).map(([key, value]) => (
                    <Box key={key} sx={{ 
                      backgroundColor: colors.contrast.background,
                      padding: 1,
                      borderRadius: 1
                    }}>
                      <Typography variant="caption" sx={{ color: colors.contrast.text.secondary }}>
                        {key}:
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.palette.accent }}>
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Ejemplo 3: useSectionTranslations */}
          <Grid item xs={12}>
            <Card sx={{ 
              backgroundColor: colors.contrast.surface,
              border: `1px solid ${colors.contrast.border}`
            }}>
              <CardContent>
                <H2 sx={{ color: colors.contrast.text.primary, mb: 2 }}>
                  useSectionTranslations Hook
                </H2>
                <BodyText sx={{ color: colors.contrast.text.secondary, mb: 2 }}>
                  Todas las traducciones de una sección:
                </BodyText>
                <Grid container spacing={2}>
                  {Object.entries(heroSection).map(([key, value]) => (
                    <Grid item xs={12} sm={6} md={4} key={key}>
                      <Box sx={{ 
                        backgroundColor: colors.contrast.background,
                        padding: 2,
                        borderRadius: 1,
                        border: `1px solid ${colors.contrast.border}`
                      }}>
                        <Typography variant="caption" sx={{ color: colors.contrast.text.secondary }}>
                          {key}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.palette.accent, mt: 1 }}>
                          {value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Información del sistema */}
        <Card sx={{ 
          backgroundColor: colors.contrast.surface,
          border: `1px solid ${colors.contrast.border}`
        }}>
          <CardContent>
            <H2 sx={{ color: colors.contrast.text.primary, mb: 3 }}>
              Características del Sistema
            </H2>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.palette.accent, mb: 1 }}>
                      Escalabilidad
                    </Typography>
                    <BodyText sx={{ color: colors.contrast.text.secondary }}>
                      Fácil agregar nuevos idiomas y traducciones sin modificar componentes
                    </BodyText>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.palette.accent, mb: 1 }}>
                      Persistencia
                    </Typography>
                    <BodyText sx={{ color: colors.contrast.text.secondary }}>
                      El idioma seleccionado se guarda en localStorage
                    </BodyText>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.palette.accent, mb: 1 }}>
                      Detección Automática
                    </Typography>
                    <BodyText sx={{ color: colors.contrast.text.secondary }}>
                      Detecta el idioma del navegador al cargar por primera vez
                    </BodyText>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.palette.accent, mb: 1 }}>
                      Hooks Personalizados
                    </Typography>
                    <BodyText sx={{ color: colors.contrast.text.secondary }}>
                      useTranslation, useTranslations y useSectionTranslations para diferentes casos de uso
                    </BodyText>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.palette.accent, mb: 1 }}>
                      Context API
                    </Typography>
                    <BodyText sx={{ color: colors.contrast.text.secondary }}>
                      Estado global del idioma accesible desde cualquier componente
                    </BodyText>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.palette.accent, mb: 1 }}>
                      Fallbacks
                    </Typography>
                    <BodyText sx={{ color: colors.contrast.text.secondary }}>
                      Si no encuentra una traducción, muestra la clave como fallback
                    </BodyText>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default InternationalizationDemo; 
