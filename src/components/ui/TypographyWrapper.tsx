import React, { ReactNode } from 'react';
import { H1, H2, H3, BodyText, SmallText, CodeText } from './Typography';
import Card from './Card';

interface TypographyWrapperProps {
  className?: string;
  children?: ReactNode;
}

// Estos componentes envoltorio resuelven los problemas de tipado con los componentes originales
export const WrappedH1: React.FC<TypographyWrapperProps> = (props) => {
  const { className, children } = props;
  return <H1 className={className || ''}>{children}</H1>;
};

export const WrappedH2: React.FC<TypographyWrapperProps> = (props) => {
  const { className, children } = props;
  return <H2 className={className || ''}>{children}</H2>;
};

export const WrappedH3: React.FC<TypographyWrapperProps> = (props) => {
  const { className, children } = props;
  return <H3 className={className || ''}>{children}</H3>;
};

export const WrappedBodyText: React.FC<TypographyWrapperProps> = (props) => {
  const { className, children } = props;
  return <BodyText className={className || ''}>{children}</BodyText>;
};

export const WrappedSmallText: React.FC<TypographyWrapperProps> = (props) => {
  const { className, children } = props;
  return <SmallText className={className || ''}>{children}</SmallText>;
};

export const WrappedCodeText: React.FC<TypographyWrapperProps> = (props) => {
  const { className, children } = props;
  return <CodeText className={className || ''}>{children}</CodeText>;
};

export const WrappedCard: React.FC<TypographyWrapperProps> = (props) => {
  const { className, children } = props;
  return <Card className={className || ''}>{children}</Card>;
}; 