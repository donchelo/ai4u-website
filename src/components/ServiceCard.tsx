import React from 'react';
import { WrappedCard as Card, WrappedH3 as H3, WrappedBodyText as BodyText } from './ui/TypographyWrapper';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <Card>
      <H3 className="mb-3">{title}</H3>
      <BodyText>{description}</BodyText>
    </Card>
  );
};

export default ServiceCard; 