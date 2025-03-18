import React from 'react';
import { WrappedCard as Card } from './ui/TypographyWrapper';
import { WrappedH3 as H3, WrappedBodyText as BodyText } from './ui/TypographyWrapper';

const ServiceCard = ({ title, description }) => {
  return (
    <Card>
      <H3 className="mb-3">{title}</H3>
      <BodyText>{description}</BodyText>
    </Card>
  );
};

export default ServiceCard; 