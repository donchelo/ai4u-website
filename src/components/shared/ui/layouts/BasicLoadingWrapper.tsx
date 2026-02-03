import React, { ReactNode } from 'react';

interface BasicLoadingWrapperProps {
  children?: ReactNode;
}

/**
 * Wrapper básico que solo renderiza los hijos sin lógica de carga
 * Simplificado para evitar problemas de renderizado infinito
 */
const BasicLoadingWrapper = ({ children }: BasicLoadingWrapperProps) => {
  return <>{children}</>;
};

export default BasicLoadingWrapper; 