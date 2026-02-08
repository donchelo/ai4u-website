import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import { H1, H2, BodyText, SEOHead } from '../components/shared/ui/atoms';
import { Card, RelatedPages } from '../components/shared/ui/molecules';
import { SurfaceProvider } from '../context';
import { useColors } from '../hooks';
import { getPageMetaTags } from '../utils/seo';
import { getRelatedLinks } from '../data/internalLinkingStrategy';
import { featuredProjects } from '../data/featuredProjects';
import { COMPONENT_SPACING } from '../components/shared/ui/tokens/spacing';
import { TEXT_VARIANTS } from '../components/shared/ui/tokens/typography';

const Portfolio = () => {
  const colors = useColors();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Obtener meta tags optimizados para la página de portafolio
  const metaTags = getPageMetaTags('portfolio');
  
  // Obtener enlaces contextuales para la página de portafolio
  const relatedLinks = getRelatedLinks('/portafolio');

  return (
    <Box sx={{ 
      bgcolor: colors.contrast.background
    }}>
      {/* SEO Head con meta tags optimizados */}
      <SEOHead
        title={metaTags.title}
        description={metaTags.description}
        keywords={metaTags.keywords}
        canonical="https://ai4u.com.co/portafolio"
      />

      {/* Portafolio de Innovación Section */}
      <Box sx={{ 
        py: COMPONENT_SPACING.layout.section, 
        bgcolor: colors.palette.black,
        color: colors.palette.white,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        minHeight: '100vh'
      }}>
        {/* Grilla de fondo brutalista */}
        <Box sx={{ position: 'absolute', top: 0, left: '25%', width: '1px', height: '100%', bgcolor: 'rgba(255,255,255,0.05)' }} />
        <Box sx={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', bgcolor: 'rgba(255,255,255,0.05)' }} />
        <Box sx={{ position: 'absolute', top: 0, left: '75%', width: '1px', height: '100%', bgcolor: 'rgba(255,255,255,0.05)' }} />

        <SurfaceProvider surface="black">
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ mb: 12 }}>
              <H1 sx={{ 
                fontWeight: 400, 
                textTransform: 'none', 
                color: colors.palette.white, 
                fontSize: { xs: '3.5rem', md: '7rem' },
                lineHeight: 0.85,
                letterSpacing: '-0.05em',
                mb: 4
              }}>
                Portafolio de <br/>
                <Box component="span" sx={{ color: colors.palette.accentColors.orange }}>innovación</Box>
              </H1>
              <BodyText sx={{ 
                fontSize: { xs: '1.2rem', md: '1.8rem' }, 
                maxWidth: '800px',
                opacity: 0.7,
                lineHeight: 1.4
              }}>
                Explora cómo la Inteligencia Artificial está transformando industrias reales hoy.
              </BodyText>
            </Box>

            <Grid container spacing={4}>
              {featuredProjects.map((project) => (
                <Grid item xs={12} key={project.id}>
                  <Card 
                    variant="default" 
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      height: { xs: '450px', md: '80vh' },
                      display: 'flex',
                      flexDirection: 'column',
                      p: 0,
                      borderRadius: 0,
                      border: `1px solid rgba(255,255,255,0.05)`,
                      bgcolor: colors.palette.black,
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      '&:hover': {
                        borderColor: colors.palette.accentColors.orange,
                        '& .project-image': {
                          transform: 'scale(1.05)',
                          filter: 'grayscale(0%) brightness(0.4)'
                        },
                        '& .project-info': {
                          opacity: 1,
                          transform: 'translate(-50%, -50%)'
                        }
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      sx={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        filter: 'grayscale(100%)',
                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    />
                    
                    {/* Información del proyecto - Solo visible en hover o siempre en móvil */}
                    <Box 
                      className="project-info"
                      sx={{ 
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: { xs: 'translate(-50%, -50%)', md: 'translate(-50%, -40%)' },
                        width: '90%',
                        textAlign: 'center',
                        opacity: { xs: 1, md: 0 },
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 2,
                        pointerEvents: 'none'
                      }}
                    >
                      <H2 sx={{ 
                        fontSize: { xs: '3rem', md: '6rem' },
                        fontWeight: 400, 
                        textTransform: 'none', 
                        color: colors.palette.white,
                        lineHeight: 1,
                        mb: 2,
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                      }}>
                        {project.title}
                      </H2>
                      <BodyText sx={{ 
                        color: colors.palette.accentColors.orange,
                        fontSize: { xs: '1.2rem', md: '2rem' },
                        ...TEXT_VARIANTS.ui.code,
                        textTransform: 'lowercase'
                      }}>
                        {project.category}
                      </BodyText>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </SurfaceProvider>
      </Box>

      {/* Enlaces Relacionados - SEO Internal Linking */}
      <Box sx={{ py: 10, bgcolor: colors.contrast.background }}>
        <Container maxWidth="lg">
          <RelatedPages 
            pages={relatedLinks}
            title="Sigue explorando:"
            variant="vertical"
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;
