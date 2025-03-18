import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { WrappedH1 as H1, WrappedH2 as H2, WrappedBodyText as BodyText } from '../components/ui/TypographyWrapper';
import { Button } from '../components/ui/Button';

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Desarrollo de Chatbots",
      description: "Creamos chatbots personalizados que mejoran la experiencia del cliente y optimizan procesos."
    },
    {
      id: 2,
      title: "Análisis Predictivo",
      description: "Utilizamos técnicas de machine learning para predecir tendencias y comportamientos futuros."
    },
    {
      id: 3,
      title: "Procesamiento de Lenguaje Natural",
      description: "Implementamos soluciones que permiten a las máquinas entender y generar lenguaje humano."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-mint-cream py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <H1 className="mb-6">
                Soluciones de IA 
                <span className="text-hot-orange"> para el futuro</span>
              </H1>
              <BodyText className="mb-8 text-cadet-gray max-w-md">
                En AI4U creamos soluciones innovadoras utilizando inteligencia artificial 
                para transformar tu negocio y mejorar la experiencia de tus clientes.
              </BodyText>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Nuestros Servicios</Button>
                <Button variant="outline">Contactar</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* Aquí iría una imagen o ilustración */}
              <div className="bg-moderate-blue/10 h-96 rounded-lg flex items-center justify-center">
                <p className="text-moderate-blue font-semibold">Imagen de IA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <H2 className="mb-4">Nuestros Servicios</H2>
            <BodyText className="text-cadet-gray max-w-2xl mx-auto">
              Ofrecemos un conjunto completo de soluciones de inteligencia artificial 
              adaptadas a las necesidades específicas de tu empresa.
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-erie-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <H2 className="mb-6 text-mint-cream">¿Listo para transformar tu negocio?</H2>
          <BodyText className="mb-8 text-cadet-gray max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones de inteligencia artificial pueden 
            ayudarte a alcanzar tus objetivos de negocio.
          </BodyText>
          <Button 
            variant="primary" 
            size="lg"
          >
            Solicita una demostración
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home; 