import React from 'react';
import Card from './ui/Card';
import { H3, BodyText } from './ui/Typography';
import { Box } from '@mui/material';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <Card>
      <Box sx={{ mb: 2 }}>
        <H3 sx={{ mb: 1, textAlign: 'center' }}>{title}</H3>
        <BodyText>{description}</BodyText>
      </Box>
    </Card>
  );
};

export default ServiceCard; 