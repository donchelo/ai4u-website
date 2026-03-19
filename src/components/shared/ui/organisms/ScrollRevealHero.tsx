import React, { useRef, useEffect, useState } from 'react';
import { Box, Container, Stack, Typography, alpha } from '@mui/material';
import { Giant, CodeText, LazyImage } from '../atoms';
import { DiagnosticCTA } from '../molecules';
import { useColors } from '../../../../hooks';
import { TEXT_VARIANTS } from '../tokens/typography';
import { AI4U_PALETTE } from '../tokens/palette';

interface ScrollRevealHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
}

const IMAGES = [
  '/assets/images/hero-image.png',
  '/assets/images/hero-image2.png',
  '/assets/images/hero-image3.png',
];

const ScrollRevealHero: React.FC<ScrollRevealHeroProps> = ({
  badge = 'strategySystemV2.0',
  title = 'compraTiempoNoSoftware',
  subtitle = 'Desplegamos el equipo de agentes de inteligencia artificial que orquesta tu libertad operativa.',
  primaryButtonText = 'Recuperar tiempo',
}) => {
  const colors = useColors();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [currentImage, setCurrentImage] = useState(0);

  const words = subtitle.split(' ');

  // Rotate background images every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-driven word highlight
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const scrollable = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const index = Math.round(progress * (words.length - 1));
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        height: '300vh',
        bgcolor: colors.contrast.background,
      }}
    >
      {/* Sticky viewport */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* ── Background image carousel ── */}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {IMAGES.map((img, idx) => (
            <Box key={idx} sx={{ position: 'absolute', inset: 0 }}>
              <LazyImage
                src={img}
                alt={`Background ${idx + 1}`}
                priority={idx === 0}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: idx === currentImage ? 0.45 : 0,
                  transition: 'opacity 1.5s ease-in-out, transform 10s ease-out',
                  filter: 'grayscale(100%) contrast(1.2)',
                  transform: idx === currentImage ? 'scale(1.08)' : 'scale(1)',
                }}
              />
            </Box>
          ))}
          {/* Dark scrim so text stays legible */}
          <Box sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: alpha(colors.contrast.background, 0.55),
          }} />
        </Box>

        {/* ── Binary noise overlay ── */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          overflow: 'hidden',
          pointerEvents: 'none',
          fontFamily: 'monospace',
          fontSize: '10px',
          lineHeight: 1,
          wordBreak: 'break-all',
          userSelect: 'none',
          color: colors.contrast.text.primary,
          zIndex: 1,
        }}>
          {Array.from({ length: 50 }).map((_, i) => (
            <Box key={i}>{(Math.random() * 1e16).toString(2)}</Box>
          ))}
        </Box>

        {/* ── Industrial metadata ── */}
        <Box sx={{
          position: 'absolute',
          bottom: 24,
          right: 40,
          textAlign: 'right',
          opacity: 0.25,
          zIndex: 3,
        }}>
          <CodeText sx={{ fontSize: '0.6rem' }}>COORD: 6.2442° N, 75.5812° W</CodeText>
          <CodeText sx={{ fontSize: '0.6rem' }}>strategySystem_v2.0</CodeText>
        </Box>

        {/* ── Orange scroll progress bar ── */}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          bgcolor: AI4U_PALETTE.accentColors.orange,
          width: `${((activeIndex + 1) / words.length) * 100}%`,
          transition: 'width 0.2s ease',
          zIndex: 4,
        }} />

        {/* ── Content ── */}
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 10, lg: 15 }, position: 'relative', zIndex: 2 }}>
          <Stack spacing={{ xs: 4, md: 5 }} alignItems="flex-start" sx={{ maxWidth: '950px' }}>

            {/* Version tag */}
            <Box sx={{
              border: `1px solid ${colors.contrast.text.primary}`,
              color: colors.contrast.text.primary,
              px: 2,
              py: 0.5,
              ...TEXT_VARIANTS.ui.code,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              opacity: 0.7,
            }}>
              {badge}
            </Box>

            {/* Hero title — large, same as original */}
            <Giant sx={{
              color: colors.contrast.text.primary,
              fontSize: { xs: '2.8rem', sm: '4rem', md: '6.5rem', lg: '9rem' },
              lineHeight: 0.88,
              letterSpacing: '-0.05em',
              fontWeight: 400,
            }}>
              {title}
            </Giant>

            {/* Scroll-animated subtitle — reel: one word per line, slides as you scroll */}
            <Box sx={{
              overflow: 'hidden',
              // window shows ~2.8 lines: active word + glimpse of prev/next
              height: { xs: '7.5rem', sm: '10rem', md: '14rem', lg: '18rem' },
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
              width: '100%',
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                // Shift list so active word sits in center of the window.
                // Each word ~1 line-height unit. Window center = 50% - 0.5 word.
                // translateY = -(activeIndex - 0.9) * lineHeightPx
                // We use a CSS custom property trick via inline style instead.
                transform: `translateY(calc(${-activeIndex} * var(--word-h) + var(--offset)))`,
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                // --word-h and --offset set per breakpoint via sx aren't possible directly,
                // so we handle with a wrapper approach below.
              }}>
                {words.map((word, i) => {
                  const isActive = i === activeIndex;
                  const dist = Math.abs(i - activeIndex);
                  return (
                    <Box
                      component="span"
                      key={i}
                      sx={{
                        display: 'block',
                        fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem', lg: '7rem' },
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        fontWeight: isActive ? 700 : 300,
                        color: isActive ? AI4U_PALETTE.accentColors.orange : colors.contrast.text.primary,
                        opacity: isActive ? 1 : dist === 1 ? 0.45 : 0.15,
                        transition: 'color 0.3s ease, opacity 0.3s ease',
                        // Fixed height per word = font-size * lineHeight to keep reel uniform
                        height: { xs: '2.8rem', sm: '4rem', md: '5.5rem', lg: '7rem' },
                        overflow: 'visible',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {word}
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* CTA */}
            <DiagnosticCTA
              variant="primary"
              text={primaryButtonText}
              size="large"
              showIcon={false}
              sx={{
                height: { xs: '55px', md: '90px' },
                px: { xs: 4, md: 8 },
                fontSize: { xs: '0.9rem', md: '1.5rem' },
                fontWeight: 400,
                borderRadius: 0,
                bgcolor: colors.contrast.text.primary,
                color: colors.contrast.background,
                border: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: AI4U_PALETTE.accentColors.orange,
                  color: '#fff',
                  transform: 'scale(1.02)',
                },
              }}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default ScrollRevealHero;
