import React from 'react';
import { Box, Stack } from '@mui/material';
import { SmallText, ContextualLink, NavigationDot } from '../atoms';
import { useColors } from '../../../../hooks';
import { useLanguage } from '../../../../context';

interface RelatedPageItem {
  to: string;
  label: string;
  context?: string;
  trackingLabel?: string;
}

interface RelatedPagesProps {
  pages: RelatedPageItem[];
  title?: string;
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * RelatedPages - Widget sutil de páginas relacionadas
 * 
 * Máximo 3 enlaces con contexto semántico claro
 * Diseño hipermegaminimalista con spacing generoso
 * Optimizado para SEO y distribución de link juice
 * 
 * @example
 * <RelatedPages 
 *   title="También podrías estar interesado en:"
 *   pages={[
 *     { to: '/servicios', label: 'Nuestros servicios', context: 'Conoce qué ofrecemos' },
 *     { to: '/casos-de-uso', label: 'Casos reales', context: 'Ve resultados comprobables' }
 *   ]}
 * />
 */
const RelatedPages: React.FC<RelatedPagesProps> = (props) => {
  const {
    pages,
    title,
    variant = 'vertical',
    className,
  } = props;
  const colors = useColors();
  const { t } = useLanguage();
  const defaultTitle = t('common.related.title');
  
  // Limitar a máximo 3 enlaces para mantener minimalismo
  const limitedPages = pages.slice(0, 3);

  if (limitedPages.length === 0) return null;

  const renderPages = () => {
    if (variant === 'horizontal') {
      return (
        <Stack 
          direction="row" 
          spacing={3}
          alignItems="center"
          flexWrap="wrap"
          sx={{ gap: 2 }}
        >
          {limitedPages.map((page, index) => (
            <Box key={page.to} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box>
                <ContextualLink
                  to={page.to}
                  variant="subtle"
                  trackingLabel={page.trackingLabel || `related_${page.to.replace('/', '')}`}
                  ariaLabel={page.context || page.label}
                >
                  <SmallText sx={{ fontWeight: 500, fontSize: '0.875rem' }}>
                    {page.label}
                  </SmallText>
                </ContextualLink>
                {page.context && (
                  <SmallText 
                    sx={{ 
                      color: colors.contrast.text.secondary, 
                      fontSize: '0.75rem',
                      mt: 0.5,
                      display: 'block'
                    }}
                  >
                    {page.context}
                  </SmallText>
                )}
              </Box>
              {index < limitedPages.length - 1 && (
                <NavigationDot variant="separator" size="small" />
              )}
            </Box>
          ))}
        </Stack>
      );
    }

    return (
      <Stack spacing={3}>
        {limitedPages.map((page) => (
          <Box key={page.to}>
            <ContextualLink
              to={page.to}
              variant="subtle"
              trackingLabel={page.trackingLabel || `related_${page.to.replace('/', '')}`}
              ariaLabel={page.context || page.label}
            >
              <SmallText sx={{ fontWeight: 500, fontSize: '0.875rem' }}>
                {page.label}
              </SmallText>
            </ContextualLink>
            {page.context && (
              <SmallText 
                sx={{ 
                  color: colors.contrast.text.secondary, 
                  fontSize: '0.75rem',
                  mt: 0.5,
                  display: 'block'
                }}
              >
                {page.context}
              </SmallText>
            )}
          </Box>
        ))}
      </Stack>
    );
  };

  return (
    <Box 
      className={className}
      sx={{ 
        py: 4,
        borderTop: `1px solid ${colors.contrast.divider}`,
        borderBottom: `1px solid ${colors.contrast.divider}`,
        backgroundColor: colors.contrast.surface,
      }}
    >
      <SmallText 
        sx={{ 
          color: colors.contrast.text.secondary,
          fontWeight: 600,
          mb: 3,
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
      >
        {title || defaultTitle}
      </SmallText>
      
      {renderPages()}
    </Box>
  );
};

export default RelatedPages;