import { useCallback, useState } from 'react';

interface ErrorState {
  error: Error | null;
  hasError: boolean;
}

interface UseErrorHandlerReturn {
  error: Error | null;
  hasError: boolean;
  clearError: () => void;
  handleError: (error: Error) => void;
  captureAsyncError: <T>(
    asyncFn: () => Promise<T>
  ) => Promise<T | undefined>;
}

/**
 * Custom hook for handling errors in functional components
 * 
 * Provides utilities for error handling in async operations,
 * event handlers, and other scenarios where ErrorBoundary cannot catch errors.
 * 
 * @example
 * const { error, hasError, clearError, captureAsyncError } = useErrorHandler();
 * 
 * const handleSubmit = async () => {
 *   await captureAsyncError(async () => {
 *     await submitForm();
 *   });
 * };
 */
export const useErrorHandler = (): UseErrorHandlerReturn => {
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    hasError: false,
  });

  const handleError = useCallback((error: Error) => {
    console.error('Error handled by useErrorHandler:', error);
    
    // Log to external service in production
    if (import.meta.env.MODE === 'production') {
      // Example: Sentry.captureException(error);
    }
    
    setErrorState({
      error,
      hasError: true,
    });
  }, []);

  const clearError = useCallback(() => {
    setErrorState({
      error: null,
      hasError: false,
    });
  }, []);

  const captureAsyncError = useCallback(
    async <T>(asyncFn: () => Promise<T>): Promise<T | undefined> => {
      try {
        const result = await asyncFn();
        // Clear any previous errors on successful execution
        if (errorState.hasError) {
          clearError();
        }
        return result;
      } catch (error) {
        handleError(error as Error);
        return undefined;
      }
    },
    [errorState.hasError, clearError, handleError]
  );

  return {
    error: errorState.error,
    hasError: errorState.hasError,
    clearError,
    handleError,
    captureAsyncError,
  };
};

export default useErrorHandler;