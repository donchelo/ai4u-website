import React from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SuperAI from '@/pages/SuperAI';
import { useColors } from '@/hooks';

interface SuperAIModalProps {
  open: boolean;
  onClose: () => void;
}

const SuperAIModal: React.FC<SuperAIModalProps> = ({ open, onClose }) => {
  const colors = useColors();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="lg"
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          bgcolor: colors.palette.black,
          backgroundImage: 'none',
          borderRadius: fullScreen ? 0 : 0, // Mantener estética brutalista de bordes rectos
          position: 'relative',
          border: fullScreen ? 'none' : `1px solid ${colors.palette.gray[800]}`,
        }
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: colors.palette.white,
          zIndex: 10,
          bgcolor: colors.palette.black,
          border: `1px solid ${colors.palette.gray[800]}`,
          borderRadius: 0,
          '&:hover': {
            bgcolor: colors.palette.gray[900],
            borderColor: colors.palette.white,
          }
        }}
      >
        <CloseIcon />
      </IconButton>
      
      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ bgcolor: colors.palette.black }}>
          <SuperAI isModal={true} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SuperAIModal;
