import React from 'react';
import Card from './ui/Card';
import { H3, BodyText } from './ui/Typography';

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