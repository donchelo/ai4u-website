import React, { useState, useEffect, useCallback } from 'react';
import {
    Box, Typography, IconButton, Container, Stack, Fade, GlobalStyles,
    Menu, MenuItem, Tooltip, TextField
} from '@mui/material';
import {
    ArrowBackIosNew as PrevIcon,
    ArrowForwardIos as NextIcon,
    Home as HomeIcon,
    PlayArrow as PlayIcon,
    Pause as PauseIcon,
    Edit as EditIcon,
    Save as SaveIcon,
    LibraryBooks as PitchIcon,
    VolumeUp as VolumeOnIcon,
    VolumeOff as VolumeOffIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AI4U_PALETTE } from '../components/shared/ui/tokens/palette';
import { ROUTES } from '../utils/constants';
import Logo from '../components/shared/ui/atoms/Logo';
import { PITCHES, getThemeStyles, Slide } from '../data/pitches';

const PitchBancolombia: React.FC = () => {
    const navigate = useNavigate();

    // State for Pitch Data
    const [selectedPitchId, setSelectedPitchId] = useState<'bancolombia' | 'corona'>('bancolombia');
    const [slides, setSlides] = useState<Slide[]>(PITCHES[selectedPitchId].slides);

    // Presentation State
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isFocusMode, setIsFocusMode] = useState(false);

    // Edit Mode State
    const [isEditMode, setIsEditMode] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const current = slides[currentSlideIndex];
    const styles = getThemeStyles(current.theme);

    // Reset focus mode on slide change
    useEffect(() => {
        setIsFocusMode(false);
    }, [currentSlideIndex]);

    // Sync slides when selectedPitchId changes
    useEffect(() => {
        setSlides(PITCHES[selectedPitchId].slides);
        setCurrentSlideIndex(0);
    }, [selectedPitchId]);

    const nextSlide = useCallback(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isEditMode) return; // Disable keys while editing
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') navigate(ROUTES.HOME);
            if (e.key === 'f') setIsFocusMode(prev => !prev);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, navigate, isEditMode]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (!isPaused && !isEditMode && !isFocusMode) {
            timer = setInterval(nextSlide, 8000);
        }
        return () => clearInterval(timer);
    }, [isPaused, nextSlide, isEditMode, isFocusMode]);

    const handlePitchChange = (id: 'bancolombia' | 'corona') => {
        setSelectedPitchId(id);
        setAnchorEl(null);
    };

    const handleTextChange = (field: keyof Slide, value: string | string[], index: number = -1) => {
        const newSlides = [...slides];
        if (index !== -1 && Array.isArray(newSlides[currentSlideIndex].content)) {
            const newContent = [...(newSlides[currentSlideIndex].content as string[])];
            newContent[index] = value as string;
            newSlides[currentSlideIndex] = { ...newSlides[currentSlideIndex], content: newContent };
        } else {
            newSlides[currentSlideIndex] = { ...newSlides[currentSlideIndex], [field]: value };
        }
        setSlides(newSlides);
    };

    const progress = ((currentSlideIndex + 1) / slides.length) * 100;
    const isTitleOnly = current.content === '';

    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 64px)',
                bgcolor: AI4U_PALETTE.black,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'background-color 0.8s ease',
                cursor: isFocusMode ? 'none' : 'default'
            }}
        >
            <GlobalStyles styles={{
                body: { overflow: 'hidden' }
            }} />

            {/* Premium Progress Bar */}
            <Box sx={{
                height: 8,
                width: '100%',
                bgcolor: 'rgba(255,255,255,0.1)',
                position: 'relative',
                zIndex: 10,
                transition: 'transform 0.5s ease',
                transform: isFocusMode ? 'translateY(-100%)' : 'none'
            }}>
                <Box
                    sx={{
                        height: '100%',
                        width: `${progress}%`,
                        bgcolor: styles.accent,
                        transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.8s ease',
                        boxShadow: styles.glow ? `0 0 20px ${styles.accent}` : 'none'
                    }}
                />
            </Box>

            {/* Main Slide Stage */}
            <Box
                onClick={() => {
                    if (current.video && current.imageLayout === 'background') {
                        setIsFocusMode(!isFocusMode);
                    }
                }}
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: styles.bg,
                    transition: 'background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    py: { xs: 4, md: 8 },
                    overflow: 'hidden',
                    cursor: (current.video && current.imageLayout === 'background') ? 'pointer' : 'default'
                }}
            >
                {/* Background Asset Layer (Image or Video) */}
                {current.video && current.imageLayout === 'background' ? (
                    <Box
                        component="video"
                        autoPlay
                        muted={isMuted}
                        loop
                        playsInline
                        src={current.video}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 0,
                            opacity: isFocusMode ? 1 : 0.6,
                            filter: isFocusMode ? 'none' : 'brightness(0.5)',
                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    />
                ) : current.image && current.imageLayout === 'background' && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url(${current.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 0,
                            opacity: 0.4,
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `linear-gradient(to bottom, rgba(0,0,0,0.4), ${styles.bg})`
                            }
                        }}
                    />
                )}

                <Fade in={!isFocusMode} timeout={800} key={`${selectedPitchId}-${currentSlideIndex}`}>
                    <Container maxWidth="xl" sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                        <Stack
                            direction={{ xs: 'column', lg: 'row' }}
                            spacing={8}
                            alignItems="center"
                            sx={{ width: '100%' }}
                        >
                            {/* Text Content Column */}
                            <Box sx={{ flex: 1, width: '100%', py: { xs: 4, md: 6 } }}>

                                {/* Category Tag */}
                                {current.category && (
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color: styles.accent,
                                            fontWeight: 900,
                                            letterSpacing: 4,
                                            fontSize: { xs: '0.75rem', md: '0.85rem' },
                                            mb: 1,
                                            display: 'block',
                                            textAlign: isTitleOnly ? 'center' : 'left'
                                        }}
                                    >
                    // {current.category}
                                    </Typography>
                                )}

                                {/* Title Section */}
                                {isEditMode ? (
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        value={current.title}
                                        onChange={(e) => handleTextChange('title', e.target.value)}
                                        InputProps={{
                                            sx: {
                                                color: styles.text,
                                                fontWeight: 900,
                                                fontSize: isTitleOnly ? { xs: '3rem', md: '6rem', lg: '8rem' } : { xs: '2.2rem', md: '3.5rem', lg: '4.8rem' },
                                                textTransform: 'uppercase',
                                                textAlign: isTitleOnly ? 'center' : 'left',
                                                mb: isTitleOnly ? 0 : { xs: 4, md: 6 },
                                            }
                                        }}
                                    />
                                ) : (
                                    <Typography
                                        sx={{
                                            color: styles.text,
                                            fontWeight: 900,
                                            fontSize: isTitleOnly ? { xs: '3.5rem', md: '7rem', lg: '10rem' } : { xs: '2.2rem', md: '3.5rem', lg: '4.8rem' },
                                            lineHeight: 1,
                                            letterSpacing: '-0.04em',
                                            textTransform: 'uppercase',
                                            mb: isTitleOnly ? 0 : { xs: 4, md: 6 },
                                            maxWidth: isTitleOnly ? 'none' : '1000px',
                                            textAlign: isTitleOnly ? 'center' : 'left',
                                            width: '100%'
                                        }}
                                    >
                                        {current.title}
                                    </Typography>
                                )}

                                {/* Subtitle & Content Split */}
                                {!isTitleOnly && (
                                    <Stack
                                        direction={{ xs: 'column', md: 'row' }}
                                        spacing={{ xs: 3, md: 4 }}
                                        alignItems="flex-start"
                                    >
                                        <Box sx={{ flex: 1, width: '100%' }}>
                                            {isEditMode ? (
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    variant="standard"
                                                    value={current.subtitle || ''}
                                                    onChange={(e) => handleTextChange('subtitle', e.target.value)}
                                                    InputProps={{
                                                        sx: {
                                                            color: styles.text,
                                                            opacity: 0.8,
                                                            fontWeight: 300,
                                                            fontSize: { xs: '1.1rem', md: '1.8rem' },
                                                        }
                                                    }}
                                                />
                                            ) : current.subtitle && (
                                                <Typography
                                                    variant="h2"
                                                    sx={{
                                                        color: styles.text,
                                                        opacity: 0.8,
                                                        fontWeight: 300,
                                                        fontSize: { xs: '1.1rem', md: '1.8rem' },
                                                        lineHeight: 1.2,
                                                        letterSpacing: '-0.01em'
                                                    }}
                                                >
                                                    {current.subtitle}
                                                </Typography>
                                            )}
                                        </Box>

                                        <Box sx={{ flex: 1.5, width: '100%' }}>
                                            {Array.isArray(current.content) ? (
                                                <Stack spacing={2}>
                                                    {current.content.map((line, i) => (
                                                        <Box key={i} sx={{ borderLeft: `2px solid ${styles.accent}`, pl: 3 }}>
                                                            {isEditMode ? (
                                                                <TextField
                                                                    fullWidth
                                                                    multiline
                                                                    variant="standard"
                                                                    value={line}
                                                                    onChange={(e) => handleTextChange('content', e.target.value, i)}
                                                                    InputProps={{
                                                                        sx: {
                                                                            color: styles.text,
                                                                            fontSize: { xs: '0.9rem', md: '1.1rem' },
                                                                        }
                                                                    }}
                                                                />
                                                            ) : (
                                                                <Typography
                                                                    sx={{
                                                                        color: styles.text,
                                                                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                                                                        fontWeight: 400,
                                                                        lineHeight: 1.5
                                                                    }}
                                                                >
                                                                    {line}
                                                                </Typography>
                                                            )}
                                                        </Box>
                                                    ))}
                                                </Stack>
                                            ) : (
                                                <Box>
                                                    {isEditMode ? (
                                                        <TextField
                                                            fullWidth
                                                            multiline
                                                            variant="standard"
                                                            value={current.content}
                                                            onChange={(e) => handleTextChange('content', e.target.value)}
                                                            InputProps={{
                                                                sx: {
                                                                    color: styles.text,
                                                                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                                                                }
                                                            }}
                                                        />
                                                    ) : (
                                                        <Typography
                                                            sx={{
                                                                color: styles.text,
                                                                fontSize: { xs: '1.1rem', md: '1.4rem' },
                                                                fontWeight: 400,
                                                                lineHeight: 1.5,
                                                                opacity: 0.9
                                                            }}
                                                        >
                                                            {current.content}
                                                        </Typography>
                                                    )}
                                                </Box>
                                            )}
                                        </Box>
                                    </Stack>
                                )}
                            </Box>

                            {/* Side Asset Column (Image or Video) */}
                            {(current.image || current.video) && current.imageLayout === 'side' && (
                                <Box
                                    sx={{
                                        flex: 1,
                                        width: '100%',
                                        height: { xs: '300px', lg: '600px' },
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        position: 'relative',
                                        bgcolor: 'rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {/* Blurred Backdrop for mismatched aspect ratios */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0, left: 0, right: 0, bottom: 0,
                                            backgroundImage: current.image ? `url(${current.image})` : 'none',
                                            bgcolor: 'black',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'blur(30px) brightness(0.4)',
                                            transform: 'scale(1.1)',
                                            zIndex: 1
                                        }}
                                    />

                                    {current.video ? (
                                        <>
                                            <Box
                                                component="video"
                                                autoPlay
                                                muted={isMuted}
                                                loop
                                                playsInline
                                                src={current.video}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    position: 'relative',
                                                    zIndex: 2,
                                                    display: 'block'
                                                }}
                                            />
                                            {/* Mute Toggle Button */}
                                            <IconButton
                                                onClick={() => setIsMuted(!isMuted)}
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: 16,
                                                    right: 16,
                                                    bgcolor: 'rgba(0,0,0,0.5)',
                                                    color: 'white',
                                                    zIndex: 4,
                                                    '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                                                }}
                                                size="small"
                                            >
                                                {isMuted ? <VolumeOffIcon fontSize="small" /> : <VolumeOnIcon fontSize="small" />}
                                            </IconButton>
                                        </>
                                    ) : (
                                        <Box
                                            component="img"
                                            src={current.image}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                position: 'relative',
                                                zIndex: 2,
                                                display: 'block'
                                            }}
                                        />
                                    )}

                                    {/* Subtle Overlay Reflection */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 0, left: 0, right: 0, bottom: 0,
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
                                        zIndex: 3,
                                        pointerEvents: 'none'
                                    }} />
                                </Box>
                            )}
                        </Stack>
                    </Container>
                </Fade>

                {/* Floating Logo */}
                <Box sx={{ position: 'absolute', top: 24, right: 32, zIndex: 5, opacity: 0.6 }}>
                    <Logo variant="desktop" sx={{ height: 28, filter: styles.logoMode === 'dark' ? 'invert(1)' : 'none' }} />
                </Box>

                {/* Big Background Number */}
                <Typography
                    sx={{
                        position: 'absolute',
                        bottom: -20,
                        left: 20,
                        fontSize: { xs: '15rem', md: '25rem' },
                        fontWeight: 900,
                        color: styles.text,
                        opacity: 0.02,
                        zIndex: 1,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        lineHeight: 0.8
                    }}
                >
                    {String(currentSlideIndex + 1).padStart(2, '0')}
                </Typography>
            </Box>

            {/* Floating Glass Controls */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: { xs: 20, md: 30 },
                    right: { xs: 20, md: 30 },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    bgcolor: 'rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(10px)',
                    p: 1,
                    px: 2,
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.05)',
                    zIndex: 100,
                    opacity: { xs: 0.8, md: 0.4 },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        opacity: 1,
                        bgcolor: 'rgba(0,0,0,0.6)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }
                }}
            >
                <Tooltip title="Cambiar Pitch">
                    <IconButton
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                        size="small"
                        sx={{ color: 'white', p: 0.5 }}
                    >
                        <PitchIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                <Box sx={{ width: 1, height: 16, bgcolor: 'rgba(255,255,255,0.2)', mx: 0.5 }} />

                <Tooltip title={isEditMode ? "Guardar Cambios" : "Editar Pitch"}>
                    <IconButton
                        onClick={() => setIsEditMode(!isEditMode)}
                        size="small"
                        sx={{ color: isEditMode ? styles.accent : 'white', p: 0.5 }}
                    >
                        {isEditMode ? <SaveIcon fontSize="small" /> : <EditIcon fontSize="small" />}
                    </IconButton>
                </Tooltip>

                <Box sx={{ width: 1, height: 16, bgcolor: 'rgba(255,255,255,0.2)', mx: 0.5 }} />

                <Stack direction="row" spacing={0.5}>
                    <IconButton onClick={prevSlide} size="small" sx={{ color: 'white', p: 0.5 }}>
                        <PrevIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        onClick={() => setIsPaused(!isPaused)}
                        size="small"
                        sx={{
                            color: isPaused ? 'white' : styles.accent,
                            p: 0.5,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {isPaused ? <PlayIcon fontSize="small" /> : <PauseIcon fontSize="small" />}
                    </IconButton>

                    <IconButton onClick={nextSlide} size="small" sx={{ color: 'white', p: 0.5 }}>
                        <NextIcon fontSize="small" />
                    </IconButton>
                </Stack>

                <Box sx={{ width: 1, height: 16, bgcolor: 'rgba(255,255,255,0.2)', mx: 0.5 }} />

                <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.75rem', opacity: 0.8, minWidth: 40, textAlign: 'center' }}>
                    {currentSlideIndex + 1}/{slides.length}
                </Typography>

                <IconButton
                    onClick={() => navigate(ROUTES.HOME)}
                    size="small"
                    sx={{ color: 'white', p: 0.5 }}
                >
                    <HomeIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* Pitch Selector Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                PaperProps={{
                    sx: {
                        bgcolor: 'rgba(18,18,18,0.95)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.1)',
                        minWidth: 200
                    }
                }}
            >
                <MenuItem onClick={() => handlePitchChange('bancolombia')}>Bancolombia</MenuItem>
                <MenuItem onClick={() => handlePitchChange('corona')}>Alimentos Corona</MenuItem>
            </Menu>
        </Box>
    );
};

export default PitchBancolombia;
