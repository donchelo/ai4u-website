import React from 'react';
import { 
  WrappedH1 as H1, 
  WrappedH2 as H2, 
  WrappedH3 as H3, 
  WrappedBodyText as BodyText, 
  WrappedSmallText as SmallText,
  WrappedCodeText as CodeText,
  WrappedCard as Card
} from '../components/ui/TypographyWrapper';
import { Button } from '../components/ui/Button';

const ThemeDemo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <H1 className="mb-4">AI4U Theme Demo</H1>
        <BodyText>Esta página muestra todos los elementos del tema de AI4U.</BodyText>
      </div>

      {/* Tipografía */}
      <section className="mb-12">
        <H2 className="mb-6">Tipografía</H2>
        
        <div className="space-y-4">
          <div>
            <H1>Encabezado H1</H1>
            <p className="text-cadet-gray">Red Hat Display Bold, 48-64px</p>
          </div>
          
          <div>
            <H2>Encabezado H2</H2>
            <p className="text-cadet-gray">Red Hat Display Bold, 36-48px</p>
          </div>
          
          <div>
            <H3>Encabezado H3</H3>
            <p className="text-cadet-gray">Red Hat Display Semibold, 24-36px</p>
          </div>
          
          <div>
            <BodyText>Texto de cuerpo. Este es el estilo que se utiliza para la mayoría del contenido en la aplicación.</BodyText>
            <p className="text-cadet-gray">Red Hat Display Regular, 16-18px</p>
          </div>
          
          <div>
            <SmallText>Texto pequeño. Utilizado para pies de foto, notas al pie y contenido secundario.</SmallText>
            <p className="text-cadet-gray">Red Hat Display Light, 14px</p>
          </div>
          
          <div>
            <CodeText>const code = "Texto para código";</CodeText>
            <p className="text-cadet-gray">Fira Mono, 14-16px</p>
          </div>
        </div>
      </section>

      {/* Colores */}
      <section className="mb-12">
        <H2 className="mb-6">Paleta de Colores</H2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <div className="h-24 bg-hot-orange rounded-t-lg"></div>
            <div className="p-3 border border-t-0 rounded-b-lg">
              <p className="font-semibold">Hot Orange</p>
              <p className="text-sm text-cadet-gray">#FF4500</p>
            </div>
          </div>
          
          <div>
            <div className="h-24 bg-moderate-blue rounded-t-lg"></div>
            <div className="p-3 border border-t-0 rounded-b-lg">
              <p className="font-semibold">Moderate Blue</p>
              <p className="text-sm text-cadet-gray">#5271FF</p>
            </div>
          </div>
          
          <div>
            <div className="h-24 bg-erie-black rounded-t-lg"></div>
            <div className="p-3 border border-t-0 rounded-b-lg">
              <p className="font-semibold">Erie Black</p>
              <p className="text-sm text-cadet-gray">#1B1B1B</p>
            </div>
          </div>
          
          <div>
            <div className="h-24 bg-mint-cream rounded-t-lg"></div>
            <div className="p-3 border border-t-0 rounded-b-lg">
              <p className="font-semibold">Mint Cream</p>
              <p className="text-sm text-cadet-gray">#F5FFFA</p>
            </div>
          </div>
          
          <div>
            <div className="h-24 bg-cadet-gray rounded-t-lg"></div>
            <div className="p-3 border border-t-0 rounded-b-lg">
              <p className="font-semibold">Cadet Gray</p>
              <p className="text-sm text-cadet-gray">#91A3B0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Botones */}
      <section className="mb-12">
        <H2 className="mb-6">Botones</H2>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primario</Button>
            <Button variant="secondary">Secundario</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Pequeño</Button>
            <Button variant="primary">Mediano</Button>
            <Button variant="primary" size="lg">Grande</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>Deshabilitado</Button>
            <Button variant="secondary" disabled>Deshabilitado</Button>
            <Button variant="outline" disabled>Deshabilitado</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              className="bg-moderate-blue hover:bg-moderate-blue/80"
            >
              Personalizado
            </Button>
          </div>
        </div>
      </section>

      {/* Tarjetas */}
      <section className="mb-12">
        <H2 className="mb-6">Tarjetas</H2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <H3 className="mb-3">Tarjeta con componente</H3>
            <BodyText>Esta tarjeta utiliza el componente Card de UI.</BodyText>
          </Card>
          
          <div className="ai4u-card">
            <H3 className="mb-3">Tarjeta con clase</H3>
            <BodyText>Esta tarjeta utiliza la clase ai4u-card.</BodyText>
          </div>
          
          <Card className="bg-moderate-blue/10">
            <H3 className="mb-3">Tarjeta personalizada</H3>
            <BodyText>Se pueden añadir clases personalizadas para modificar el estilo.</BodyText>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ThemeDemo; 