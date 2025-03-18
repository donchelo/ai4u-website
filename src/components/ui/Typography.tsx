import React, { ReactNode } from 'react';

interface TypographyProps {
  children?: ReactNode;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`font-redhat font-bold text-h1 text-erie-black tracking-heading ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`font-redhat font-bold text-h2 text-erie-black tracking-heading ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`font-redhat font-semibold text-h3 text-erie-black tracking-heading ${className}`}>
    {children}
  </h3>
);

export const BodyText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`font-redhat font-normal text-body text-erie-black ${className}`}>
    {children}
  </p>
);

export const SmallText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`font-redhat font-light text-small text-erie-black ${className}`}>
    {children}
  </p>
);

export const CodeText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <code className={`font-necto text-code text-erie-black ${className}`}>
    {children}
  </code>
); 