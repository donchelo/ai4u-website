import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { H1, H2, BodyText } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

const Home: React.FC = () => {
  const services = [
    {
      title: "Análisis de Datos",
      description: "Extraemos insights valiosos de tus datos para impulsar la toma de decisiones."
    },
    {
      title: "Automatización",
      description: "Optimizamos tus procesos con soluciones de IA personalizadas."
    },
    {
      title: "Machine Learning",
      description: "Desarrollamos modelos predictivos para anticipar tendencias y comportamientos."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <H1 className="mb-6">
          Bienvenido a AI4U
        </H1>
        <BodyText className="text-xl max-w-2xl mx-auto">
          Transformamos tu negocio con soluciones de inteligencia artificial a medida.
        </BodyText>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" aria-labelledby="services-title">
        <h2 id="services-title" className="sr-only">Nuestros Servicios</h2>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>

      <section className="text-center">
        <H2 className="mb-6">¿Listo para comenzar?</H2>
        <Link
          to="/contact"
          className="ai4u-button inline-block"
          aria-label="Contactar con AI4U"
        >
          Contáctanos
        </Link>
      </section>
    </div>
  );
};

export default Home; 