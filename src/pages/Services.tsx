import React from 'react';
import { Container, Grid, Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { H1, H2, H3, BodyText } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import Card from '../components/ui/Card';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Industry service case component
interface IndustryServiceProps {
  title: string;
  items: string[];
}

const IndustryService: React.FC<IndustryServiceProps> = ({ title, items }) => (
  <Box sx={{ mb: 4 }}>
    <H3 sx={{ mb: 2, textAlign: 'center' }}>{title}</H3>
    <List dense>
      {items.map((item, index) => (
        <ListItem key={index} disableGutters>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Box>
);

// Service card with title, description and use cases
interface ServiceCardProps {
  title: string;
  description: string;
  useCases: string[];
}

const ServiceDetailCard: React.FC<ServiceCardProps> = ({ title, description, useCases }) => (
  <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <H3 color="primary" sx={{ mb: 2, textAlign: 'center' }}>{title}</H3>
    <BodyText sx={{ mb: 2 }}>{description}</BodyText>
    
    <Box sx={{ mt: 'auto' }}>
      <BodyText sx={{ fontWeight: 600, mb: 1 }}>Casos de uso:</BodyText>
      <List dense disablePadding>
        {useCases.map((useCase, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckCircleOutlineIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={useCase} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Paper>
);

// Process step component
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <Box sx={{ display: 'flex', mb: 2 }}>
    <Box 
      sx={{ 
        width: 40, 
        height: 40, 
        borderRadius: '50%', 
        bgcolor: 'primary.main', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexShrink: 0,
        mr: 2
      }}
    >
      {number}
    </Box>
    <Box>
      <BodyText sx={{ fontWeight: 600 }}>{title}</BodyText>
      <BodyText color="text.secondary">{description}</BodyText>
    </Box>
  </Box>
);

const Services: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Hero Section */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ textAlign: 'center' }}>
          <H1 sx={{ mb: 2 }}>Servicios AI4U</H1>
          <H2 sx={{ mb: 3, fontWeight: 500 }}>Construimos tu infraestructura de IA personalizada</H2>
        </Box>
        <BodyText sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
          En AI4U nos especializamos en crear soluciones de inteligencia artificial adaptadas específicamente a tu negocio. 
          Automatizamos procesos, liberamos tiempo operativo y transformamos ese tiempo en libertad estratégica.
        </BodyText>
      </Box>

      {/* Our Process Section */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 4, textAlign: 'center' }}>Nuestro proceso</H2>
        
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
              <ProcessStep 
                number={1} 
                title="Diagnóstico gratuito (30 minutos)" 
                description="Identificamos todas las oportunidades de automatización en tu negocio"
              />
              <ProcessStep 
                number={2} 
                title="Definición de prioridades" 
                description="Establecemos qué procesos automatizar primero según tu ROI"
              />
              <ProcessStep 
                number={3} 
                title="Presupuesto personalizado" 
                description="Adaptamos las soluciones a tu capacidad de inversión"
              />
              <ProcessStep 
                number={4} 
                title="Implementación" 
                description="Desarrollamos e integramos las soluciones en tu negocio"
              />
            </Box>
            
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <BodyText variant="h6" sx={{ fontWeight: 500, mb: 2 }}>Soluciones desde $350.000 COP</BodyText>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Our Services Section */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 5, textAlign: 'center' }}>Nuestros servicios</H2>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ServiceDetailCard 
              title="AI Strategist 360"
              description="Automatización estratégica integral. Analizamos tu negocio 24/7, optimizamos procesos continuamente y generamos dashboards en tiempo real para que tomes decisiones estratégicas basadas en datos."
              useCases={[
                "Generación automática de reportes ejecutivos",
                "Monitoreo continuo de KPIs de negocio",
                "Identificación proactiva de oportunidades de mejora",
                "Integración con tus sistemas existentes"
              ]}
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <ServiceDetailCard 
              title="Lead Booster Meta"
              description="Potencia tu generación de leads. Automatizamos tus campañas de adquisición de clientes, optimizamos la conversión y hacemos seguimiento automático para que te enfoques solo en cerrar las ventas."
              useCases={[
                "Generación automática de campañas en redes sociales",
                "Seguimiento personalizado de prospectos",
                "Calificación de leads por potencial de compra",
                "Optimización continua de embudos de conversión"
              ]}
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <ServiceDetailCard 
              title="AI 360 Mensual"
              description="Solución integral de automatización. Implementamos una estrategia completa con soporte prioritario y evolución continua de tus sistemas automatizados."
              useCases={[
                "Automatización end-to-end de procesos de negocio",
                "Integración entre sistemas y plataformas",
                "Análisis predictivo de tendencias de mercado",
                "Optimización continua de procesos internos"
              ]}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Industry Services Section */}
      <Box sx={{ mb: 8 }}>
        <H2 sx={{ mb: 5, textAlign: 'center' }}>Automatización por industria</H2>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <IndustryService 
              title="E-commerce"
              items={[
                "Gestión automática de inventario",
                "Personalización de recomendaciones",
                "Atención al cliente 24/7 con IA",
                "Optimización de precios en tiempo real"
              ]}
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <IndustryService 
              title="Servicios profesionales"
              items={[
                "Automatización de agendamiento",
                "Generación de propuestas comerciales",
                "Seguimiento post-servicio",
                "Análisis de satisfacción de clientes"
              ]}
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <IndustryService 
              title="Manufactura"
              items={[
                "Predicción de mantenimiento",
                "Optimización de cadenas de suministro",
                "Control de calidad automatizado",
                "Planificación de producción inteligente"
              ]}
            />
          </Grid>
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 6, bgcolor: 'background.paper', borderRadius: 3, boxShadow: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <H2 sx={{ mb: 2 }}>¿Listo para liberar tu tiempo estratégico?</H2>
        </Box>
        <BodyText sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          Agenda tu diagnóstico gratuito de 30 minutos y descubre cómo podemos transformar tu negocio con IA.
        </BodyText>
        
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="primary" size="large">
            AGENDAR DIAGNÓSTICO GRATUITO
          </Button>
          
          <BodyText sx={{ mt: 3, fontStyle: 'italic', color: 'text.secondary' }}>
            Sin compromiso • Personalizado a tu negocio • Resultados desde el primer mes
          </BodyText>
        </Box>
      </Box>
    </Container>
  );
};

export default Services; 