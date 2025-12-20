import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Box, 
  Fab, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField, 
  Typography, 
  IconButton, 
  Paper,
  useTheme,
  useMediaQuery,
  alpha,
  CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

import { sendMessageToMake, getFallbackResponse, generateSessionId, ChatMessage } from '../../../../utils/api';

// Usar la interfaz ChatMessage de la API
type Message = ChatMessage;

const ChatButton: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [open, setOpen] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?',
      isUser: false,
      timestamp: new Date(),
      sessionId
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastSentMessage, setLastSentMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  // Función para hacer scroll al final de los mensajes
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Scroll al final cuando se agregan nuevos mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = useCallback(async () => {
    const trimmedInput = inputText.trim();
    if (!trimmedInput || isLoading || trimmedInput === lastSentMessage) return;
    
    // Validación de entrada
    if (trimmedInput.length > 500) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: 'El mensaje es demasiado largo. Por favor, mantén tu mensaje bajo 500 caracteres.',
        isUser: false,
        timestamp: new Date(),
        sessionId
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date(),
      sessionId
    };

    setMessages(prev => [...prev, userMessage]);
    setLastSentMessage(trimmedInput);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await sendMessageToMake(trimmedInput, sessionId);
      
      let botResponse: string;
      
      if (response.success && response.data?.message) {
        botResponse = response.data.message;
      } else if (response.success && response.data && typeof response.data === 'string') {
        botResponse = response.data;
      } else if (response.error === 'rate_limit') {
        botResponse = getFallbackResponse(trimmedInput);
      } else {
        botResponse = getFallbackResponse(trimmedInput);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
        sessionId
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorText = 'Lo siento, estoy teniendo problemas técnicos. Por favor, intenta de nuevo en unos momentos.';
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        isUser: false,
        timestamp: new Date(),
        sessionId
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputText, isLoading, sessionId, lastSentMessage]);

  const handleKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey && !isLoading) {
      event.preventDefault();
      sendMessage();
    }
  }, [sendMessage, isLoading]);

  return (
    <>
      {/* Botón flotante */}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          width: 60,
          height: 60,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          boxShadow: '0 4px 20px rgba(255, 69, 0, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(255, 69, 0, 0.9)',
            boxShadow: '0 6px 25px rgba(255, 69, 0, 0.4)',
            transform: 'scale(1.05)',
          },
          transition: 'all 0.3s ease',
          p: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/assets/images/robot-assistant.png"
          alt="AI4U Assistant"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'brightness(0) invert(1)', // Hace el logo blanco
          }}
        />
      </Fab>

      {/* Diálogo del chat */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, sm: 2 }, // Use theme breakpoint instead of isMobile
            height: { xs: '100%', sm: '70vh' },
            maxHeight: { xs: '100%', sm: '600px' }, // Use responsive sx instead of conditional logic
          }
        }}
      >
        {/* Header del chat */}
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            pb: 2,
            mb: 0,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="img"
              src="/assets/images/robot-assistant.png"
              alt="AI4U Assistant"
              sx={{
                width: 40,
                height: 40,
                objectFit: 'contain',
              }}
            />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Asistente AI4U
              </Typography>
              <Typography variant="caption" color="text.secondary">
                En línea
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* Contenido del chat */}
        <DialogContent
          sx={{
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {/* Área de mensajes */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {messages.map((message) => (
              <Box
                key={message.id}
                sx={{
                  display: 'flex',
                  justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                }}
              >
                <Paper
                  sx={{
                    p: 2,
                    maxWidth: '80%',
                    backgroundColor: message.isUser 
                      ? theme.palette.primary.main 
                      : alpha(theme.palette.background.paper, 0.8),
                    color: message.isUser 
                      ? theme.palette.primary.contrastText 
                      : theme.palette.text.primary,
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography variant="body2">
                    {message.text}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      opacity: 0.7,
                      display: 'block',
                      mt: 0.5,
                    }}
                  >
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </Typography>
                </Paper>
              </Box>
            ))}
            
            {isLoading && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: alpha(theme.palette.background.paper, 0.8),
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CircularProgress size={16} />
                    <Typography variant="body2" color="text.secondary">
                      Escribiendo...
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            )}
            
            {/* Elemento de referencia para scroll automático */}
            <div ref={messagesEndRef} />
          </Box>

          {/* Área de entrada */}
          <Box
            sx={{
              p: 2,
              borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            }}
          >
            {/* Contador de caracteres */}
            {inputText.length > 400 && (
              <Typography 
                variant="caption" 
                color={inputText.length > 500 ? "error" : "warning.main"}
                sx={{ mb: 1, display: 'block', textAlign: 'right' }}
              >
                {inputText.length}/500
              </Typography>
            )}
            
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'flex-end',
              }}
            >
            <TextField
              fullWidth
              multiline
              maxRows={4}
              placeholder={isLoading ? "Esperando respuesta..." : "Escribe tu mensaje..."}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              variant="outlined"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
            <IconButton
              onClick={sendMessage}
              disabled={!inputText.trim() || isLoading}
              color="primary"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  backgroundColor: 'rgba(255, 69, 0, 0.9)',
                },
                '&:disabled': {
                  backgroundColor: alpha(theme.palette.action.disabled, 0.12),
                  color: theme.palette.action.disabled,
                },
              }}
            >
              <SendIcon />
            </IconButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatButton; 