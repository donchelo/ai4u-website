import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Box, alpha } from '@mui/material';
import { CodeText, LazyImage } from '../atoms';
import { DiagnosticCTA } from '../molecules';
import { useColors } from '../../../../hooks';
import { AI4U_PALETTE } from '../tokens/palette';

interface ScrollRevealHeroProps {
  badge?: string;
  lines?: string[];
  primaryButtonText?: string;
}

const IMAGES = [
  '/assets/images/hero-image.png',
  '/assets/images/hero-image2.png',
  '/assets/images/hero-image3.png',
];

const DEFAULT_LINES = [
  'agentes.',
  'orquestación',
  'de agentes.',
  'empleados ia.',
  'automatizaciones.',
  'conexión con',
  'tus sistemas.',
];

const ScrollRevealHero: React.FC<ScrollRevealHeroProps> = ({
  badge = 'ai4u // siempre activo',
  lines = DEFAULT_LINES,
  primaryButtonText = 'hablar con el equipo',
}) => {
  const colors = useColors();
  const [seenLines, setSeenLines] = useState<Set<number>>(new Set());
  const [currentImage, setCurrentImage] = useState(0);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Rotate background images every 5s
  useEffect(() => {
    const interval = setInterval(() => setCurrentImage(p => (p + 1) % IMAGES.length), 5000);
    return () => clearInterval(interval);
  }, []);

  // IntersectionObserver — mark each line as seen when it enters viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    lineRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSeenLines(prev => new Set(prev).add(idx));
          }
        },
        { threshold: 0.3 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [lines.length]);

  const setLineRef = useCallback((el: HTMLDivElement | null, idx: number) => {
    lineRefs.current[idx] = el;
  }, []);

  const lastSeenIdx = seenLines.size > 0 ? Math.max(...seenLines) : -1;
  const progress = (seenLines.size / lines.length) * 100;

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── BACKGROUND — covers full section height ── */}
      <Box sx={{ position: 'absolute', inset: 0, height: '100%', zIndex: 0 }}>
        {IMAGES.map((img, idx) => (
          <Box key={idx} sx={{ position: 'absolute', inset: 0, height: '100%' }}>
            <LazyImage
              src={img}
              alt=""
              priority={idx === 0}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: idx === currentImage ? 0.35 : 0,
                transition: 'opacity 2s ease-in-out, transform 12s ease-out',
                filter: 'grayscale(100%) contrast(1.1)',
                transform: idx === currentImage ? 'scale(1.06)' : 'scale(1)',
              }}
            />
          </Box>
        ))}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          backgroundColor: alpha(colors.contrast.background, 0.55),
        }} />
      </Box>

      {/* ── CONTENT ── */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        px: { xs: 3, md: 8, lg: 12 },
        pt: { xs: 10, md: 12 },
        pb: 0,
      }}>

        {/* Top row: badge | coordinates */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: { xs: 10, md: 16 } }}>
          <Box sx={{
            border: `1px solid ${colors.contrast.text.primary}`,
            color: colors.contrast.text.primary,
            px: 1.5,
            py: 0.4,
            fontFamily: 'monospace',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            opacity: 0.65,
          }}>
            {badge}
          </Box>
          <Box sx={{ textAlign: 'right', opacity: 0.35 }}>
            <CodeText sx={{ fontSize: '0.65rem', display: 'block' }}>
              6.2442° N, 75.5812° W
            </CodeText>
          </Box>
        </Box>

        {/* Small intro label */}
        <Box sx={{
          fontFamily: 'monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          opacity: 0.4,
          mb: { xs: 3, md: 4 },
        }}>
          // lo que hacemos
        </Box>

        {/* ── GIANT STACKED LINES ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0, md: 0 } }}>
          {lines.map((line, idx) => {
            const isSeen = seenLines.has(idx);
            const isActive = idx === lastSeenIdx;
            const opacity = !isSeen ? 0.12 : isActive ? 1 : 0.55;
            const color = isActive
              ? AI4U_PALETTE.accentColors.orange
              : colors.contrast.text.primary;

            return (
              <Box
                key={idx}
                ref={el => setLineRef(el as HTMLDivElement | null, idx)}
                component="h1"
                sx={{
                  m: 0,
                  fontSize: 'clamp(3.5rem, 13vw, 16rem)',
                  lineHeight: 0.88,
                  letterSpacing: '-0.05em',
                  fontWeight: 300,
                  fontFamily: '"Red Hat Display", sans-serif',
                  color,
                  opacity,
                  transition: 'opacity 0.5s ease, color 0.5s ease',
                }}
              >
                {line}
              </Box>
            );
          })}
        </Box>

        {/* ── BOTTOM CTA ── */}
        <Box sx={{ mt: { xs: 10, md: 14 } }}>
          <Box sx={{ borderTop: `1px solid ${alpha(colors.contrast.text.primary, 0.2)}`, mb: { xs: 4, md: 5 } }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', pb: { xs: 6, md: 8 } }}>
            <DiagnosticCTA
              variant="primary"
              text={primaryButtonText}
              size="large"
              showIcon={false}
              sx={{
                height: { xs: '48px', md: '52px' },
                px: { xs: 4, md: 6 },
                fontSize: { xs: '0.8rem', md: '0.85rem' },
                fontWeight: 400,
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
                borderRadius: 0,
                bgcolor: 'transparent',
                color: colors.contrast.text.primary,
                border: `1px solid ${colors.contrast.text.primary}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: AI4U_PALETTE.accentColors.orange,
                  borderColor: AI4U_PALETTE.accentColors.orange,
                  color: '#fff',
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* ── PROGRESS BAR — sticky to viewport bottom while in section ── */}
      <Box sx={{ position: 'sticky', bottom: 0, zIndex: 6 }}>
        <Box sx={{ height: '1px', bgcolor: alpha(colors.contrast.text.primary, 0.1) }}>
          <Box sx={{
            height: '100%',
            bgcolor: AI4U_PALETTE.accentColors.orange,
            width: `${progress}%`,
            transition: 'width 0.4s ease',
          }} />
        </Box>
      </Box>

    </Box>
  );
};

export default ScrollRevealHero;
