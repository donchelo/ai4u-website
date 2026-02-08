import React from 'react';
import { Container, Box, Grid, Stack, Typography as MuiTypography } from '@mui/material';
import { Giant, H1, H2, H3, H4, BodyText, SmallText, CodeText, Button, GeometricIcon, SEOHead } from '../components/shared/ui/atoms';
import { Card } from '../components/shared/ui/molecules';
import { useColors } from '../hooks';
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';
import { TYPOGRAPHY_TOKENS, TEXT_VARIANTS } from '../components/shared/ui/tokens/typography';
import { SPACING_TOKENS, COMPONENT_SPACING } from '../components/shared/ui/tokens/spacing';

const DesignSystem = () => {
  const colors = useColors();

  const principles = [
    {
      num: '01',
      title: 'Énfasis',
      description: 'Guía el ojo hacia lo importante. Usamos tamaño dramático y el acento naranja para señalar prioridad.',
    },
    {
      num: '02',
      title: 'Balance',
      description: 'Distribución del peso visual. Combinamos bloques asimétricos para transmitir dinamismo sin perder estabilidad.',
    },
    {
      num: '03',
      title: 'Contraste',
      description: 'Diferencia evidente para crear interés. Negro sobre blanco, grande sobre pequeño, lleno sobre vacío.',
    },
    {
      num: '04',
      title: 'Repetición',
      description: 'Unifica el diseño. Los iconos geométricos, las tarjetas y la tipografía crean un ritmo reconocible.',
    },
    {
      num: '05',
      title: 'Alineación',
      description: 'Todo elemento tiene una conexión visual con otro. Eliminamos la arbitrariedad con una rejilla rígida.',
    },
    {
      num: '06',
      title: 'Aire',
      description: 'El espacio no es vacío, es un elemento activo. Define jerarquía y permite que el diseño respire.',
    },
    {
      num: '07',
      title: 'Unidad',
      description: 'El objetivo final. Todos los elementos trabajan como un todo coherente para representar a AI4U.',
    },
  ];

  const grayScale = [
    { name: '50', value: AI4U_PALETTE.gray[50] },
    { name: '100', value: AI4U_PALETTE.gray[100] },
    { name: '200', value: AI4U_PALETTE.gray[200] },
    { name: '300', value: AI4U_PALETTE.gray[300] },
    { name: '400', value: AI4U_PALETTE.gray[400] },
    { name: '500', value: AI4U_PALETTE.gray[500] },
    { name: '600', value: AI4U_PALETTE.gray[600] },
    { name: '700', value: AI4U_PALETTE.gray[700] },
    { name: '800', value: AI4U_PALETTE.gray[800] },
    { name: '900', value: AI4U_PALETTE.gray[900] },
  ];

  return (
    <Box>
      <SEOHead
        title="Sistema de Diseño AI4U"
        description="Los 7 principios universales del buen diseño aplicados a la identidad visual de AI4U."
        keywords="diseño, sistema de diseño, componentes, UI, UX, AI4U"
      />

      {/* ─── Hero ─── */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.palette.black, color: colors.palette.white }}>
        <Container maxWidth="lg" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <SmallText sx={{ color: colors.palette.gray[500], mb: 2, ...TEXT_VARIANTS.ui.code }}>
            // Design System
          </SmallText>
          <H1 sx={{ color: colors.palette.white, fontWeight: 400, mb: 3, maxWidth: 700 }}>
            7 Principios. Una identidad.
          </H1>
          <BodyText sx={{ color: colors.palette.gray[400], maxWidth: 520, ...TEXT_VARIANTS.body.regular }}>
            Cada decisión visual en AI4U responde a un principio de diseño. Esta guía documenta cómo y por qué.
          </BodyText>
        </Container>
      </Box>

      {/* ─── Principios: lista compacta ─── */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.palette.white }}>
        <Container maxWidth="lg" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <Stack spacing={0}>
            {principles.map((p, idx) => (
              <Box
                key={p.num}
                sx={{
                  py: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] },
                  borderBottom: idx < principles.length - 1 ? `1px solid ${colors.palette.gray[200]}` : 'none',
                }}
              >
                <Grid container spacing={{ xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }} alignItems="baseline">
                  <Grid item xs={12} sm={2} md={1}>
                    <MuiTypography sx={{ ...TEXT_VARIANTS.ui.code, color: colors.palette.gray[400] }}>
                      {p.num}
                    </MuiTypography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <H3 sx={{ fontWeight: 400, lineHeight: 1.2 }}>{p.title}</H3>
                  </Grid>
                  <Grid item xs={12} sm={6} md={8}>
                    <BodyText sx={{ color: colors.palette.gray[600], ...TEXT_VARIANTS.body.regular }}>
                      {p.description}
                    </BodyText>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ─── Demostración visual: Énfasis + Contraste ─── */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.palette.gray[50] }}>
        <Container maxWidth="lg" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <SmallText sx={{ color: colors.palette.gray[500], mb: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }, ...TEXT_VARIANTS.ui.code }}>
            // Énfasis + Contraste
          </SmallText>

          <Stack spacing={{ xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }}>
            {/* Jerarquía tipográfica */}
            <Box sx={{ p: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] }, bgcolor: colors.palette.white, border: `1px solid ${colors.palette.gray[200]}` }}>
              <Stack spacing={2}>
                <Giant sx={{ lineHeight: 0.95 }}>Giant</Giant>
                <H1>Heading 1</H1>
                <H2>Heading 2</H2>
                <H3>Heading 3</H3>
                <H4>Heading 4</H4>
                <BodyText>Body — Texto de lectura continua para párrafos y descripciones.</BodyText>
                <SmallText sx={{ color: colors.palette.gray[500] }}>Small — Etiquetas, captions, metadata.</SmallText>
                <CodeText>Code — Fragmentos técnicos y tokens.</CodeText>
              </Stack>
            </Box>

            {/* Contraste blanco/negro */}
            <Grid container spacing={{ xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] }, bgcolor: colors.palette.black, color: colors.palette.white, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 3 }}>
                  <H3 sx={{ color: colors.palette.white, fontWeight: 400 }}>Fondo oscuro</H3>
                  <BodyText sx={{ color: colors.palette.gray[400] }}>
                    Texto claro sobre superficie negra. Máximo contraste para secciones de impacto.
                  </BodyText>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] }, bgcolor: colors.palette.white, border: `1px solid ${colors.palette.gray[200]}`, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 3 }}>
                  <H3 sx={{ fontWeight: 400 }}>Fondo claro</H3>
                  <BodyText sx={{ color: colors.palette.gray[600] }}>
                    Texto oscuro sobre superficie blanca. Máxima legibilidad para contenido extenso.
                  </BodyText>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* ─── Balance + Alineación ─── */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.palette.white }}>
        <Container maxWidth="lg" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <SmallText sx={{ color: colors.palette.gray[500], mb: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }, ...TEXT_VARIANTS.ui.code }}>
            // Balance + Alineación
          </SmallText>

          <Grid container spacing={{ xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }}>
            {/* Bloque pesado */}
            <Grid item xs={12} md={7}>
              <Box sx={{
                p: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] },
                bgcolor: colors.palette.black,
                color: colors.palette.white,
                minHeight: { xs: 240, md: 280 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
                <SmallText sx={{ color: colors.palette.gray[500], ...TEXT_VARIANTS.ui.code, mb: 1 }}>peso mayor</SmallText>
                <H2 sx={{ color: colors.palette.white, fontWeight: 400 }}>Asimetría controlada</H2>
              </Box>
            </Grid>

            {/* Dos bloques ligeros apilados */}
            <Grid item xs={12} md={5}>
              <Stack spacing={{ xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }} sx={{ minHeight: { xs: 240, md: 280 } }}>
                <Box sx={{
                  p: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] },
                  border: `1px solid ${colors.palette.gray[200]}`,
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <BodyText sx={{ color: colors.palette.gray[600] }}>Equilibrio visual</BodyText>
                </Box>
                <Box sx={{
                  p: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] },
                  bgcolor: colors.palette.gray[100],
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <BodyText sx={{ color: colors.palette.gray[600] }}>Contrapeso ligero</BodyText>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── Repetición + Ritmo ─── */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.palette.gray[50] }}>
        <Container maxWidth="lg" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <SmallText sx={{ color: colors.palette.gray[500], mb: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }, ...TEXT_VARIANTS.ui.code }}>
            // Repetición
          </SmallText>

          <Grid container spacing={{ xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }}>
            {['circle', 'square', 'triangle', 'cross', 'dot', 'plus'].map((type) => (
              <Grid item xs={4} sm={2} key={type}>
                <Box sx={{
                  p: SPACING_TOKENS.spacing[2],
                  border: `1px solid ${colors.palette.gray[200]}`,
                  bgcolor: colors.palette.white,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}>
                  <GeometricIcon
                    type={type as any}
                    variant="filled"
                    size="medium"
                    color={colors.palette.black}
                  />
                  <SmallText sx={{ color: colors.palette.gray[500], ...TEXT_VARIANTS.ui.code }}>{type}</SmallText>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Variantes de icono */}
          <Box sx={{ mt: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] } }}>
            <Grid container spacing={{ xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }}>
              {(['filled', 'outline', 'minimal'] as const).map((variant) => (
                <Grid item xs={4} key={variant}>
                  <Box sx={{ p: SPACING_TOKENS.spacing[2], border: `1px solid ${colors.palette.gray[200]}`, bgcolor: colors.palette.white, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <GeometricIcon type="circle" variant={variant} size="medium" color={colors.palette.black} />
                    <SmallText sx={{ color: colors.palette.gray[500], ...TEXT_VARIANTS.ui.code }}>{variant}</SmallText>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ─── Aire (Espacio negativo) ─── */}
      <Box sx={{ py: { xs: SPACING_TOKENS.spacing[8], md: SPACING_TOKENS.spacing[12] }, bgcolor: colors.palette.white }}>
        <Container maxWidth="sm" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <SmallText sx={{ color: colors.palette.gray[400], ...TEXT_VARIANTS.ui.code, mb: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] } }}>
            // Aire
          </SmallText>
          <H2 sx={{ fontWeight: 400, mb: 3, textAlign: 'center' }}>El espacio dice tanto como el contenido.</H2>
          <BodyText sx={{ color: colors.palette.gray[500], ...TEXT_VARIANTS.body.regular, textAlign: 'center' }}>
            Esta sección demuestra el principio con su propio layout: contenedor estrecho, márgenes generosos, nada que sobre.
          </BodyText>
        </Container>
      </Box>

      {/* ─── Unidad: Componentes ─── */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.palette.black, color: colors.palette.white }}>
        <Container maxWidth="lg" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <SmallText sx={{ color: colors.palette.gray[500], mb: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }, ...TEXT_VARIANTS.ui.code }}>
            // Unidad — Componentes
          </SmallText>

          <Grid container spacing={{ xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }}>
            {/* Botones */}
            <Grid item xs={12} md={6}>
              <Box sx={{ p: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] }, border: `1px solid ${colors.palette.gray[800]}`, height: '100%' }}>
                <SmallText sx={{ color: colors.palette.gray[500], mb: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }, ...TEXT_VARIANTS.ui.code }}>Botones</SmallText>
                <Stack spacing={2}>
                  <Button variant="primary">Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="text">Text</Button>
                  <Button variant="minimal">Minimal</Button>
                </Stack>
              </Box>
            </Grid>

            {/* Cards */}
            <Grid item xs={12} md={6}>
              <Box sx={{ p: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] }, border: `1px solid ${colors.palette.gray[800]}`, height: '100%' }}>
                <SmallText sx={{ color: colors.palette.gray[500], mb: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }, ...TEXT_VARIANTS.ui.code }}>Tarjetas</SmallText>
                <Stack spacing={2}>
                  <Card variant="default" sx={{ p: 3 }}>
                    <SmallText>Default</SmallText>
                  </Card>
                  <Card variant="outlined" sx={{ p: 3 }}>
                    <SmallText>Outlined</SmallText>
                  </Card>
                  <Card variant="elevated" sx={{ p: 3 }}>
                    <SmallText>Elevated</SmallText>
                  </Card>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── Tokens: Paleta ─── */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.palette.white }}>
        <Container maxWidth="lg" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <SmallText sx={{ color: colors.palette.gray[500], mb: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }, ...TEXT_VARIANTS.ui.code }}>
            // Tokens — Paleta
          </SmallText>

          {/* Colores principales */}
          <Grid container spacing={{ xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }} sx={{ mb: { xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] } }}>
            <Grid item xs={6} sm={3}>
              <Box sx={{ height: 80, bgcolor: AI4U_PALETTE.black, mb: 1 }} />
              <SmallText sx={{ ...TEXT_VARIANTS.ui.code, color: colors.palette.gray[500] }}>black · {AI4U_PALETTE.black}</SmallText>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ height: 80, bgcolor: AI4U_PALETTE.white, border: `1px solid ${colors.palette.gray[200]}`, mb: 1 }} />
              <SmallText sx={{ ...TEXT_VARIANTS.ui.code, color: colors.palette.gray[500] }}>white · {AI4U_PALETTE.white}</SmallText>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ height: 80, bgcolor: AI4U_PALETTE.accentColors.orange, mb: 1 }} />
              <SmallText sx={{ ...TEXT_VARIANTS.ui.code, color: colors.palette.gray[500] }}>orange · {AI4U_PALETTE.accentColors.orange}</SmallText>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ height: 80, bgcolor: AI4U_PALETTE.accentColors.green, mb: 1 }} />
              <SmallText sx={{ ...TEXT_VARIANTS.ui.code, color: colors.palette.gray[500] }}>green · {AI4U_PALETTE.accentColors.green}</SmallText>
            </Grid>
          </Grid>

          {/* Escala de grises */}
          <SmallText sx={{ color: colors.palette.gray[500], mb: 2, ...TEXT_VARIANTS.ui.code }}>Escala de grises</SmallText>
          <Stack direction="row" sx={{ width: '100%' }}>
            {grayScale.map((g) => (
              <Box
                key={g.name}
                sx={{
                  flex: 1,
                  height: 48,
                  bgcolor: g.value,
                  position: 'relative',
                  '&:hover::after': {
                    content: `"${g.name}"`,
                    position: 'absolute',
                    bottom: -24,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.7rem',
                    color: colors.palette.gray[500],
                    whiteSpace: 'nowrap',
                  },
                }}
              />
            ))}
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
            <SmallText sx={{ ...TEXT_VARIANTS.ui.code, color: colors.palette.gray[400] }}>50</SmallText>
            <SmallText sx={{ ...TEXT_VARIANTS.ui.code, color: colors.palette.gray[400] }}>900</SmallText>
          </Stack>
        </Container>
      </Box>

      {/* ─── Tokens: Tipografía ─── */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.palette.gray[50] }}>
        <Container maxWidth="lg" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <SmallText sx={{ color: colors.palette.gray[500], mb: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }, ...TEXT_VARIANTS.ui.code }}>
            // Tokens — Tipografía
          </SmallText>

          <Grid container spacing={{ xs: SPACING_TOKENS.spacing[3], md: SPACING_TOKENS.spacing[4] }}>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box>
                  <SmallText sx={{ color: colors.palette.gray[400], ...TEXT_VARIANTS.ui.code, mb: 1 }}>Familia primaria</SmallText>
                  <H3 sx={{ fontWeight: 400 }}>Red Hat Display</H3>
                  <BodyText sx={{ color: colors.palette.gray[500], mt: 1 }}>
                    Peso 300 · 400 · 500
                  </BodyText>
                </Box>
                <Box>
                  <SmallText sx={{ color: colors.palette.gray[400], ...TEXT_VARIANTS.ui.code, mb: 1 }}>Familia monoespaciada</SmallText>
                  <H3 sx={{ fontFamily: TYPOGRAPHY_TOKENS.fontFamily.code, fontWeight: 400 }}>Necto Mono</H3>
                  <BodyText sx={{ color: colors.palette.gray[500], fontFamily: TYPOGRAPHY_TOKENS.fontFamily.code, mt: 1 }}>
                    Código, tokens, etiquetas técnicas
                  </BodyText>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                {([
                  { label: 'display.giant', size: TEXT_VARIANTS.display.giant.fontSize },
                  { label: 'display.large', size: TEXT_VARIANTS.display.large.fontSize },
                  { label: 'display.medium', size: TEXT_VARIANTS.display.medium.fontSize },
                  { label: 'display.small', size: TEXT_VARIANTS.display.small.fontSize },
                  { label: 'body.large', size: TEXT_VARIANTS.body.large.fontSize },
                  { label: 'body.regular', size: TEXT_VARIANTS.body.regular.fontSize },
                  { label: 'ui.caption', size: TEXT_VARIANTS.ui.caption.fontSize },
                ] as const).map((item) => (
                  <Stack key={item.label} direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 1, borderBottom: `1px solid ${colors.palette.gray[200]}` }}>
                    <CodeText>{item.label}</CodeText>
                    <SmallText sx={{ color: colors.palette.gray[500] }}>
                      {typeof item.size === 'object' ? `${(item.size as any).xs} → ${(item.size as any).lg || (item.size as any).md}` : String(item.size)}
                    </SmallText>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── Tokens: Espaciado ─── */}
      <Box sx={{ py: COMPONENT_SPACING.layout.section, bgcolor: colors.palette.white }}>
        <Container maxWidth="lg" sx={{ px: COMPONENT_SPACING.layout.container }}>
          <SmallText sx={{ color: colors.palette.gray[500], mb: { xs: SPACING_TOKENS.spacing[2], md: SPACING_TOKENS.spacing[3] }, ...TEXT_VARIANTS.ui.code }}>
            // Tokens — Espaciado
          </SmallText>

          <Stack spacing={1}>
            {([1, 2, 3, 4, 6, 8, 10, 12, 16] as const).map((key) => (
              <Stack key={key} direction="row" alignItems="center" spacing={2}>
                <CodeText sx={{ minWidth: 40, textAlign: 'right' }}>{key}</CodeText>
                <Box sx={{ width: SPACING_TOKENS.spacing[key], height: 16, bgcolor: colors.palette.black }} />
                <SmallText sx={{ color: colors.palette.gray[400], ...TEXT_VARIANTS.ui.code }}>{SPACING_TOKENS.spacing[key]}px</SmallText>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default DesignSystem;
