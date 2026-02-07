import React from 'react';
import { Container, Box, Grid, Stack, Divider, Paper, Typography as MuiTypography } from '@mui/material';
import { Giant, H1, H2, H3, H4, BodyText, SmallText, CodeText, Button, GeometricIcon, SEOHead } from '../components/shared/ui/atoms';
import { Card, MetricCard } from '../components/shared/ui/molecules';
import { useColors } from '../hooks';
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';
import { TYPOGRAPHY_TOKENS } from '../components/shared/ui/tokens/typography';
import { SHADOW_TOKENS } from '../components/shared/ui/tokens/theme';

const DesignSystem = () => {
  React.useEffect(() => {
    console.log('DesignSystem component loaded');
  }, []);
  
  const colors = useColors();

  // Tipos de iconos disponibles
  const iconTypes: Array<'arrow-up' | 'arrow-down' | 'arrow-right' | 'arrow-left' | 'plus' | 'minus' | 'circle' | 'square' | 'triangle' | 'cross' | 'line' | 'dot'> = [
    'arrow-up', 'arrow-down', 'arrow-right', 'arrow-left', 
    'plus', 'minus', 'circle', 'square', 'triangle', 'cross', 'line', 'dot'
  ];

  // Variantes de iconos
  const iconVariants: Array<'filled' | 'outline' | 'minimal'> = ['filled', 'outline', 'minimal'];

  return (
    <Box>
      <SEOHead
        title="Sistema de Diseño AI4U"
        description="Documentación completa del sistema de diseño AI4U - Colores, tipografía, componentes y guías de uso"
        keywords="diseño, sistema de diseño, componentes, UI, UX, AI4U"
      />

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 15 }, px: { xs: 4, md: 12, lg: 20 } }}>
        {/* Header */}
        <Box sx={{ mb: 12 }}>
          <Giant sx={{ mb: 4 }}>SISTEMA DE DISEÑO AI4U</Giant>
          <BodyText sx={{ mt: 2, color: colors.contrast.text.secondary, fontSize: '2rem', fontWeight: 300 }}>
            DOCUMENTACIÓN MODERNA DE COLORES, TIPOGRAFÍA Y COMPONENTES.
          </BodyText>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Sección de Colores */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 4 }}>Paleta de Colores</H2>
          
          {/* Colores Base */}
          <Box sx={{ mb: 4 }}>
            <H3 sx={{ mb: 3 }}>Colores Base</H3>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3}>
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: AI4U_PALETTE.white,
                      boxShadow: SHADOW_TOKENS.sm,
                      textAlign: 'center',
                      borderRadius: 2
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: 80,
                        backgroundColor: AI4U_PALETTE.white,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)',
                        borderRadius: 1,
                        mb: 1
                      }}
                    />
                  <SmallText sx={{ fontWeight: 400 }}>White</SmallText>
                  <CodeText>{AI4U_PALETTE.white}</CodeText>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: colors.contrast.background,
                    border: `1px solid ${colors.contrast.border}`,
                    textAlign: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 80,
                      backgroundColor: AI4U_PALETTE.black,
                      borderRadius: 1,
                      mb: 1
                    }}
                  />
                  <SmallText sx={{ fontWeight: 400 }}>Black</SmallText>
                  <CodeText>{AI4U_PALETTE.black}</CodeText>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          {/* Escala de Grises */}
          <Box sx={{ mb: 4 }}>
            <H3 sx={{ mb: 3 }}>Escala de Grises</H3>
            <Grid container spacing={2}>
              {Object.entries(AI4U_PALETTE.gray).map(([key, value]) => (
                <Grid item xs={6} sm={4} md={2} key={key}>
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: colors.contrast.background,
                      boxShadow: SHADOW_TOKENS.sm,
                      textAlign: 'center',
                      borderRadius: 2
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: 80,
                        backgroundColor: value,
                        borderRadius: 1,
                        mb: 1,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
                      }}
                    />
                    <SmallText sx={{ fontWeight: 400 }}>Gray {key}</SmallText>
                    <CodeText>{value}</CodeText>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Colores de Acento */}
          <Box sx={{ mb: 4 }}>
            <H3 sx={{ mb: 3 }}>Colores de Acento</H3>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3}>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: colors.contrast.background,
                    border: `1px solid ${colors.contrast.border}`,
                    textAlign: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 80,
                      backgroundColor: AI4U_PALETTE.accentColors.orange,
                      borderRadius: 1,
                      mb: 1
                    }}
                  />
                  <SmallText sx={{ fontWeight: 400 }}>Orange</SmallText>
                  <CodeText>{AI4U_PALETTE.accentColors.orange}</CodeText>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: colors.contrast.background,
                    border: `1px solid ${colors.contrast.border}`,
                    textAlign: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 80,
                      backgroundColor: AI4U_PALETTE.accentColors.green,
                      borderRadius: 1,
                      mb: 1
                    }}
                  />
                  <SmallText sx={{ fontWeight: 400 }}>Green</SmallText>
                  <CodeText>{AI4U_PALETTE.accentColors.green}</CodeText>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          {/* Colores Funcionales */}
          <Box>
            <H3 sx={{ mb: 3 }}>Colores Funcionales</H3>
            <Grid container spacing={2}>
              {Object.entries({
                success: AI4U_PALETTE.success,
                error: AI4U_PALETTE.error,
                warning: AI4U_PALETTE.warning,
                info: AI4U_PALETTE.info
              }).map(([key, value]) => (
                <Grid item xs={6} sm={3} key={key}>
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: colors.contrast.background,
                      boxShadow: SHADOW_TOKENS.sm,
                      textAlign: 'center',
                      borderRadius: 2
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: 80,
                        backgroundColor: value,
                        borderRadius: 1,
                        mb: 1
                      }}
                    />
                    <SmallText sx={{ fontWeight: 400, textTransform: 'capitalize' }}>{key}</SmallText>
                    <CodeText>{value}</CodeText>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Sección de Tipografía */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 4 }}>Tipografía</H2>
          
          {/* Familias de Fuentes */}
          <Box sx={{ mb: 4 }}>
            <H3 sx={{ mb: 3 }}>Familias de Fuentes</H3>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <H4 sx={{ mb: 2 }}>Red Hat Display</H4>
                  <BodyText sx={{ fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary, mb: 2 }}>
                    Fuente principal para títulos y cuerpo de texto. Diseñada para legibilidad y elegancia.
                  </BodyText>
                  <CodeText>font-family: {TYPOGRAPHY_TOKENS.fontFamily.primary}</CodeText>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <H4 sx={{ mb: 2 }}>Necto Mono</H4>
                  <BodyText sx={{ fontFamily: TYPOGRAPHY_TOKENS.fontFamily.code, mb: 2 }}>
                    Fuente monospace para código, números y caracteres especiales.
                  </BodyText>
                  <CodeText>font-family: {TYPOGRAPHY_TOKENS.fontFamily.code}</CodeText>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Jerarquía Tipográfica */}
          <Box>
            <H3 sx={{ mb: 3 }}>Jerarquía Tipográfica</H3>
            <Stack spacing={3}>
              <Box>
                <Giant>Giant Title (Giant)</Giant>
                <SmallText sx={{ color: colors.contrast.text.secondary }}>
                  Display Giant - Para títulos de máximo impacto (9rem LG)
                </SmallText>
              </Box>
              <Box>
                <H1>Heading 1 (H1)</H1>
                <SmallText sx={{ color: colors.contrast.text.secondary }}>
                  Display Large - Para títulos principales (6.5rem LG)
                </SmallText>
              </Box>
              <Box>
                <H2>Heading 2 (H2)</H2>
                <SmallText sx={{ color: colors.contrast.text.secondary }}>
                  Display Medium - Para secciones principales (4.5rem LG)
                </SmallText>
              </Box>
              <Box>
                <H3>Heading 3 (H3)</H3>
                <SmallText sx={{ color: colors.contrast.text.secondary }}>
                  Display Small - Para subsecciones (2.75rem LG)
                </SmallText>
              </Box>
              <Box>
                <H4>Heading 4 (H4)</H4>
                <SmallText sx={{ color: colors.contrast.text.secondary }}>
                  Para títulos de tarjetas y componentes
                </SmallText>
              </Box>
              <Box>
                <BodyText>
                  Body Text - Texto principal para contenido largo. Diseñado para máxima legibilidad con un line-height generoso.
                </BodyText>
                <SmallText sx={{ color: colors.contrast.text.secondary }}>
                  Body Regular - Para contenido principal
                </SmallText>
              </Box>
              <Box>
                <SmallText>
                  Small Text - Para información secundaria, captions y metadata.
                </SmallText>
                <SmallText sx={{ color: colors.contrast.text.secondary }}>
                  Body Small - Para texto secundario
                </SmallText>
              </Box>
              <Box>
                <CodeText>Code Text - Para código, comandos y valores técnicos</CodeText>
                <SmallText sx={{ color: colors.contrast.text.secondary }}>
                  UI Code - Para código y valores técnicos
                </SmallText>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Sección de Botones */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 4 }}>Botones</H2>
          
          <Box sx={{ mb: 4 }}>
            <H3 sx={{ mb: 3 }}>Variantes</H3>
            <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
              <Button variant="primary" size="small">Primary Small</Button>
              <Button variant="primary" size="medium">Primary Medium</Button>
              <Button variant="primary" size="large">Primary Large</Button>
            </Stack>
            <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
              <Button variant="secondary" size="medium">Secondary</Button>
              <Button variant="outline" size="medium">Outline</Button>
              <Button variant="text" size="medium">Text</Button>
              <Button variant="minimal" size="medium">Minimal</Button>
            </Stack>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button variant="primary" size="medium" disabled>Disabled</Button>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Sección de Iconos */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 4 }}>Iconos Geométricos</H2>
          
          {iconVariants.map((variant) => (
            <Box key={variant} sx={{ mb: 4 }}>
              <H3 sx={{ mb: 3, textTransform: 'capitalize' }}>Variante: {variant}</H3>
              <Grid container spacing={2}>
                {iconTypes.map((type) => (
                  <Grid item xs={6} sm={4} md={3} key={type}>
                    <Card variant="outlined" sx={{ textAlign: 'center', p: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                        <GeometricIcon
                          type={type}
                          size="medium"
                          variant={variant}
                          color={colors.contrast.text.primary}
                        />
                      </Box>
                      <SmallText sx={{ textTransform: 'capitalize' }}>{type.replace('-', ' ')}</SmallText>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}

          <Box sx={{ mb: 4 }}>
            <H3 sx={{ mb: 3 }}>Tamaños</H3>
            <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap">
              <Box sx={{ textAlign: 'center' }}>
                <GeometricIcon type="circle" size="small" variant="filled" color={colors.contrast.text.primary} />
                <SmallText sx={{ display: 'block', mt: 1 }}>Small (24px)</SmallText>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <GeometricIcon type="circle" size="medium" variant="filled" color={colors.contrast.text.primary} />
                <SmallText sx={{ display: 'block', mt: 1 }}>Medium (32px)</SmallText>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <GeometricIcon type="circle" size="large" variant="filled" color={colors.contrast.text.primary} />
                <SmallText sx={{ display: 'block', mt: 1 }}>Large (48px)</SmallText>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Sección de Tarjetas */}
        <Box sx={{ mb: 8 }}>
          <H2 sx={{ mb: 4 }}>Tarjetas</H2>
          
          <Box sx={{ mb: 4 }}>
            <H3 sx={{ mb: 3 }}>Variantes de Card</H3>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card variant="default">
                  <H4 sx={{ mb: 2 }}>Card Default</H4>
                  <BodyText>
                    Tarjeta con estilo por defecto. Incluye borde sutil y fondo según el tema.
                  </BodyText>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card variant="elevated">
                  <H4 sx={{ mb: 2 }}>Card Elevated</H4>
                  <BodyText>
                    Tarjeta con elevación y sombra. Ideal para destacar contenido importante.
                  </BodyText>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <H4 sx={{ mb: 2 }}>Card Outlined</H4>
                  <BodyText>
                    Tarjeta con solo borde. Estilo minimalista para contenido secundario.
                  </BodyText>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <H3 sx={{ mb: 3 }}>MetricCard</H3>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <MetricCard
                  title="Tiempo Ahorrado"
                  value="22,900"
                  subtitle="Horas recuperadas este mes"
                  iconType="arrow-up"
                  variant="elevated"
                  trend="up"
                  size="compact"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MetricCard
                  title="Eficiencia"
                  value="87%"
                  subtitle="Mejora en procesos automatizados"
                  iconType="circle"
                  variant="elevated"
                  trend="up"
                  size="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <MetricCard
                  title="ROI Mensual"
                  value="340%"
                  subtitle="Retorno de inversión promedio"
                  iconType="triangle"
                  variant="elevated"
                  trend="up"
                  size="compact"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Información del Sistema */}
        <Box sx={{ mb: 4 }}>
          <H2 sx={{ mb: 4 }}>Información del Sistema</H2>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <H4 sx={{ mb: 2 }}>Filosofía de Diseño</H4>
                <BodyText sx={{ mb: 2 }}>
                  <strong>Time is Gold:</strong> El sistema de diseño se basa en la filosofía de que el tiempo es el recurso más valioso.
                </BodyText>
                <BodyText sx={{ mb: 2 }}>
                  <strong>Automatización Cálida:</strong> Tecnología que libera tiempo sin perder humanidad.
                </BodyText>
                <BodyText>
                  <strong>Minimalismo Funcional:</strong> Diseño limpio y eficiente que prioriza la usabilidad.
                </BodyText>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <H4 sx={{ mb: 2 }}>Principios</H4>
                <Stack spacing={1}>
                  <BodyText>• Consistencia visual en todos los componentes</BodyText>
                  <BodyText>• Accesibilidad WCAG 2.1 AA compliance</BodyText>
                  <BodyText>• Responsive design mobile-first</BodyText>
                  <BodyText>• Performance optimizado</BodyText>
                  <BodyText>• Paleta minimalista (blanco, negro, gris)</BodyText>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DesignSystem;

