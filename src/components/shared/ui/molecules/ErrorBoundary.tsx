import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Button, Container, Alert, AlertTitle } from '@mui/material';
import { H2, BodyText } from '../atoms';
import { RefreshOutlined as RefreshIcon } from '@mui/icons-material';
import { errorTracker } from '../../../../utils/errorTracking';

interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing.
 * 
 * @example
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true, 
      error 
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Update state with error info
    this.setState({ errorInfo });
    
    // Send error to our tracking system
    errorTracker.captureError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: true,
      timestamp: new Date().toISOString()
    });
    
    // Call optional error callback
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default professional error UI
      return (
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Alert 
              severity="error" 
              sx={{ 
                width: '100%', 
                borderRadius: 2,
                '& .MuiAlert-message': {
                  width: '100%'
                }
              }}
            >
              <AlertTitle>
                <H2 component="span">Oops! Algo salió mal</H2>
              </AlertTitle>
              <BodyText sx={{ mt: 1, mb: 2 }}>
                Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado 
                y estamos trabajando para solucionarlo.
              </BodyText>
              
              {import.meta.env.MODE === 'development' && this.state.error && (
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    borderRadius: 1,
                    textAlign: 'left',
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                    whiteSpace: 'pre-wrap',
                    overflow: 'auto',
                    maxHeight: '200px',
                  }}
                >
                  <strong>Error Details (Development Only):</strong>
                  <br />
                  {this.state.error.message}
                  {this.state.errorInfo && (
                    <>
                      <br />
                      <br />
                      <strong>Component Stack:</strong>
                      <br />
                      {this.state.errorInfo.componentStack}
                    </>
                  )}
                </Box>
              )}
            </Alert>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                startIcon={<RefreshIcon />}
                onClick={this.handleRetry}
                sx={{ minWidth: 120 }}
              >
                Reintentar
              </Button>
              
              <Button
                variant="outlined"
                onClick={() => window.location.reload()}
                sx={{ minWidth: 120 }}
              >
                Recargar Página
              </Button>
              
              <Button
                variant="text"
                onClick={() => window.location.href = '/'}
                sx={{ minWidth: 120 }}
              >
                Ir al Inicio
              </Button>
            </Box>
            
            <BodyText sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              Si el problema persiste, por favor contacta nuestro soporte técnico.
            </BodyText>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;