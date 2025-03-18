import React from 'react';
import { H1, H2, H3, BodyText, SmallText, CodeText } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import Card from '../components/ui/Card';

const ThemeDemo: React.FC = () => {
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

          <div>
            <p className="numeric">0123456789</p>
            <p className="text-cadet-gray">Números monoespaciados</p>
          </div>
        </div>
      </section>

      {/* Colores */}
      <section className="mb-12">
        <H2 className="mb-6">Paleta de Colores</H2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <div className="h-24 w-full bg-mint-cream rounded-lg border shadow-sm"></div>
            <p className="mt-2 font-semibold">Mint Cream</p>
            <p className="text-sm text-cadet-gray">#EAF4EB</p>
          </div>
          
          <div>
            <div className="h-24 w-full bg-hot-orange rounded-lg border shadow-sm"></div>
            <p className="mt-2 font-semibold">Hot Orange</p>
            <p className="text-sm text-cadet-gray">#FF6E00</p>
          </div>
          
          <div>
            <div className="h-24 w-full bg-erie-black rounded-lg border shadow-sm"></div>
            <p className="mt-2 font-semibold">Erie Black</p>
            <p className="text-sm text-cadet-gray">#171717</p>
          </div>
          
          <div>
            <div className="h-24 w-full bg-moderate-blue rounded-lg border shadow-sm"></div>
            <p className="mt-2 font-semibold">Moderate Blue</p>
            <p className="text-sm text-cadet-gray">#3DAED1</p>
          </div>
          
          <div>
            <div className="h-24 w-full bg-cadet-gray rounded-lg border shadow-sm"></div>
            <p className="mt-2 font-semibold">Cadet Gray</p>
            <p className="text-sm text-cadet-gray">#94989B</p>
          </div>
        </div>
      </section>

      {/* Botones */}
      <section className="mb-12">
        <H2 className="mb-6">Botones</H2>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <div>
              <Button variant="primary">Botón Primario</Button>
              <p className="mt-2 text-sm text-cadet-gray">Acción principal</p>
            </div>
            
            <div>
              <Button variant="secondary">Botón Secundario</Button>
              <p className="mt-2 text-sm text-cadet-gray">Acción secundaria</p>
            </div>
            
            <div>
              <Button variant="outline">Botón Outline</Button>
              <p className="mt-2 text-sm text-cadet-gray">Acción alternativa</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div>
              <Button variant="primary" size="sm">Botón Pequeño</Button>
            </div>
            
            <div>
              <Button variant="primary" size="md">Botón Mediano</Button>
            </div>
            
            <div>
              <Button variant="primary" size="lg">Botón Grande</Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="ai4u-button">Botón con clase CSS</button>
            <button className="ai4u-button-secondary">Botón secundario</button>
            <button className="ai4u-button-outline">Botón outline</button>
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
            <h3 className="ai4u-h3 mb-3">Tarjeta con clases</h3>
            <p className="ai4u-body">Esta tarjeta utiliza las clases CSS predefinidas.</p>
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