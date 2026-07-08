import React, { useMemo } from 'react';
import { Box } from '@mui/material';

interface BinaryOverlayProps {
  /** Cantidad de líneas de binario a renderizar */
  lines?: number;
  /** Opacidad del overlay */
  opacity?: number;
  /** z-index del overlay */
  zIndex?: number;
}

/**
 * Overlay decorativo de líneas binarias (estética de código AI4U).
 * Oculto para lectores de pantalla (aria-hidden) — es puramente visual.
 */
const BinaryOverlay: React.FC<BinaryOverlayProps> = ({ lines = 100, opacity = 0.03, zIndex = 0 }) => {
  // Se memoiza para no regenerar el binario en cada render
  const binaryLines = useMemo(
    () => Array.from({ length: lines }, () => Math.random().toString(2).slice(2)),
    [lines]
  );

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity,
        overflow: 'hidden',
        pointerEvents: 'none',
        fontFamily: 'monospace',
        fontSize: '10px',
        lineHeight: 1,
        wordBreak: 'break-all',
        userSelect: 'none',
        zIndex
      }}
    >
      {binaryLines.map((line, i) => (
        <Box key={i}>{line}</Box>
      ))}
    </Box>
  );
};

export default BinaryOverlay;
