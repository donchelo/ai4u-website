import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

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
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Bienvenido a AI4U
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transformamos tu negocio con soluciones de inteligencia artificial a medida.
        </p>
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
        <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
        <Link
          to="/contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          aria-label="Contactar con AI4U"
        >
          Contáctanos
        </Link>
      </section>
    </div>
  );
};

export default Home; 