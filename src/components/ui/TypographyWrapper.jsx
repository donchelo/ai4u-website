import React from 'react';
import { H1, H2, H3, BodyText, SmallText, CodeText } from './Typography';

// Versión JSX de los wrappers para evitar problemas de tipado
export const WrappedH1 = ({ className, children }) => (
  <h1 className={`font-redhat font-bold text-h1 text-erie-black tracking-heading ${className || ''}`}>
    {children}
  </h1>
);

export const WrappedH2 = ({ className, children }) => (
  <h2 className={`font-redhat font-bold text-h2 text-erie-black tracking-heading ${className || ''}`}>
    {children}
  </h2>
);

export const WrappedH3 = ({ className, children }) => (
  <h3 className={`font-redhat font-semibold text-h3 text-erie-black tracking-heading ${className || ''}`}>
    {children}
  </h3>
);

export const WrappedBodyText = ({ className, children }) => (
  <p className={`font-redhat font-normal text-body text-erie-black ${className || ''}`}>
    {children}
  </p>
);

export const WrappedSmallText = ({ className, children }) => (
  <p className={`font-redhat font-light text-small text-erie-black ${className || ''}`}>
    {children}
  </p>
);

export const WrappedCodeText = ({ className, children }) => (
  <code className={`font-necto text-code text-erie-black ${className || ''}`}>
    {children}
  </code>
);

// Wrapper para Card
export const WrappedCard = ({ className, children }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className || ''}`}>
    {children}
  </div>
); 