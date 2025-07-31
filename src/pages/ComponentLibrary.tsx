import React, { useState } from 'react';
import { BRAND_IDENTITY } from '../data/brandIdentity';
import { BudgetCard, TransactionCard } from '../components/shared/ui/molecules';
import { WeatherWidget, SleepWidget, ModelingInterface, Navigation } from '../components/shared/ui/organisms';
import { Button } from '../components/shared/ui/atoms';
import { Card } from '../components/shared/ui/molecules';
import { Typography, H1, H2, H3, H4, BodyText, SmallText } from '../components/shared/ui/atoms';
import { PageLayout, Section, Container, Grid, Stack } from '../components/shared/ui/layouts/LayoutUtils';
import { useColorMode } from '../context/ThemeContext';

interface ComponentSection {
  id: string;
  title: string;
  description: string;
  components: React.ReactNode[];
}

const ComponentLibrary: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('colors');
  const { mode } = useColorMode();

  // Componente de muestra de color mejorado con glassmorfismo
  const ColorSwatch: React.FC<{ color: string; name: string; description: string }> = ({ color, name, description }) => (
    <div className="relative p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col items-center">
        <div 
          className="w-20 h-20 rounded-2xl mb-4 shadow-lg border border-white/30"
          style={{ backgroundColor: color }}
        />
        <H4 className="text-center mb-2">{name}</H4>
        <SmallText className="text-center text-gray-600 mb-3">{description}</SmallText>
        <code className="text-xs bg-black/20 text-white px-3 py-1 rounded-lg backdrop-blur-sm">{color}</code>
      </div>
    </div>
  );

  // Componente de tipografía mejorado
  const TypographyExample: React.FC<{ variant: string; text: string; className?: string }> = ({ variant, text, className = "" }) => (
    <div className="relative p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
      <H4 className="text-gray-600 mb-3">{variant}</H4>
      <div className={className}>{text}</div>
    </div>
  );

  // Componente de botón mejorado
  const ButtonExample: React.FC<{ variant: string; children?: React.ReactNode; className?: string }> = ({ variant, children, className = "" }) => (
    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
      <H4 className="text-gray-600 mb-4">{variant}</H4>
      <Button variant="primary" className={className}>
        {children}
      </Button>
    </div>
  );

  // Componente de tarjeta mejorado
  const CardExample: React.FC<{ title: string; description: string; icon?: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="relative p-8 bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
      {icon && (
        <div className="w-16 h-16 bg-gradient-to-br from-neon-blaze to-digital-coral rounded-2xl flex items-center justify-center mb-6">
          <div className="text-white text-2xl">{icon}</div>
        </div>
      )}
      <H3 className="mb-4">{title}</H3>
      <BodyText className="text-gray-700">{description}</BodyText>
    </div>
  );

  // Componente de elemento interactivo mejorado
  const InteractiveElement: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
    <div className="relative p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
      <H4 className="text-gray-600 mb-4">{title}</H4>
      {children}
    </div>
  );

  // Componente de elemento futurista mejorado
  const FuturisticElement: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
    <div className="relative p-8 bg-gradient-to-br from-gray-50/50 to-gray-100/50 backdrop-blur-xl border border-white/30 rounded-3xl">
      <H4 className="text-gray-700 mb-4">{title}</H4>
      {children}
    </div>
  );

  const sections: ComponentSection[] = [
    {
      id: 'colors',
      title: 'Paleta de Colores AI4U',
      description: 'Sistema de colores principal y secundarios de la marca',
      components: [
        <div key="colors" className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorSwatch 
            color={BRAND_IDENTITY.visualIdentity.colors.primary.neonBlaze} 
            name="Neon Blaze" 
            description={BRAND_IDENTITY.visualIdentity.colors.usage.neonBlaze}
          />
          <ColorSwatch 
            color={BRAND_IDENTITY.visualIdentity.colors.secondary.digitalCoral} 
            name="Digital Coral" 
            description={BRAND_IDENTITY.visualIdentity.colors.usage.digitalCoral}
          />
          <ColorSwatch 
            color={BRAND_IDENTITY.visualIdentity.colors.secondary.frostSignal} 
            name="Frost Signal" 
            description={BRAND_IDENTITY.visualIdentity.colors.usage.frostSignal}
          />
          <ColorSwatch 
            color={BRAND_IDENTITY.visualIdentity.colors.secondary.grapheneBlack} 
            name="Graphene Black" 
            description={BRAND_IDENTITY.visualIdentity.colors.usage.grapheneBlack}
          />
          <ColorSwatch 
            color={BRAND_IDENTITY.visualIdentity.colors.secondary.quantumBlue} 
            name="Quantum Blue" 
            description={BRAND_IDENTITY.visualIdentity.colors.usage.quantumBlue}
          />
          <ColorSwatch 
            color={BRAND_IDENTITY.visualIdentity.colors.accent.techSlate} 
            name="Tech Slate" 
            description={BRAND_IDENTITY.visualIdentity.colors.usage.techSlate}
          />
          <ColorSwatch 
            color={BRAND_IDENTITY.visualIdentity.colors.accent.cyberOlive} 
            name="Cyber Olive" 
            description={BRAND_IDENTITY.visualIdentity.colors.usage.cyberOlive}
          />
          <ColorSwatch 
            color={BRAND_IDENTITY.visualIdentity.colors.accent.deepNeuralTeal} 
            name="Deep Neural Teal" 
            description={BRAND_IDENTITY.visualIdentity.colors.usage.deepNeuralTeal}
          />
        </div>
      ]
    },
    {
      id: 'typography',
      title: 'Sistema Tipográfico',
      description: 'Jerarquía tipográfica usando Red Hat Display y Necto Mono',
      components: [
        <div key="typography" className="space-y-6">
          <TypographyExample 
            variant="Display Large (H1)" 
            text="Te devolvemos tu tiempo"
            className="text-4xl font-black text-gray-900"
          />
          <TypographyExample 
            variant="Display Medium (H2)" 
            text="para que lo uses en lo que verdaderamente importa"
            className="text-2xl font-bold text-gray-800"
          />
          <TypographyExample 
            variant="Heading Large (H3)" 
            text="Transformar recursos operativos en ventaja estratégica"
            className="text-xl font-semibold text-gray-700"
          />
          <TypographyExample 
            variant="Body Large" 
            text="Automatización cálida y cercana, no fría ni distante"
            className="text-lg text-gray-600"
          />
          <TypographyExample 
            variant="Body Regular" 
            text="Arquitecturas de IA que devuelven tiempo"
            className="text-base text-gray-600"
          />
          <TypographyExample 
            variant="Caption (Code)" 
            text="Time is Gold"
            className="text-sm font-mono text-neon-blaze"
          />
        </div>
      ]
    },
    {
      id: 'buttons',
      title: 'Sistema de Botones',
      description: 'Componentes de botones con variantes y estados',
      components: [
        <div key="buttons" className="space-y-8">
          {/* Botones del sistema */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ButtonExample variant="Primary Button">
              <Button variant="primary" size="large">
                Recupera tu tiempo
              </Button>
            </ButtonExample>
            
            <ButtonExample variant="Secondary Button">
              <Button variant="secondary" size="large">
                Conoce más
              </Button>
            </ButtonExample>
            
            <ButtonExample variant="Outline Button">
              <Button variant="outline" size="large">
                Ver casos
              </Button>
            </ButtonExample>
          </div>

          {/* Botones con glassmorfismo */}
          <div className="space-y-6">
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blaze/20 via-digital-coral/30 to-quantum-blue/25"></div>
              <div className="relative">
                <H4 className="text-gray-800 mb-4">Botón Glassmorfismo Primario</H4>
                <button className="px-8 py-4 bg-white/15 backdrop-blur-2xl border border-white/25 rounded-xl text-gray-800 font-semibold hover:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Recupera tu tiempo
                </button>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-digital-coral/20 via-neon-blaze/30 to-cyber-olive/25"></div>
              <div className="relative">
                <H4 className="text-gray-800 mb-4">Botón Glassmorfismo Secundario</H4>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-2xl border-2 border-neon-blaze/50 text-neon-blaze font-semibold rounded-xl hover:bg-neon-blaze/10 transition-all duration-300">
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'cards',
      title: 'Sistema de Tarjetas',
      description: 'Componentes de tarjetas con glassmorfismo y efectos',
      components: [
        <div key="cards" className="space-y-8">
          {/* Tarjetas del sistema */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CardExample 
              title="SuperAI Empresarial"
              description="Arquitecturas de IA que transforman operaciones empresariales con precisión y eficiencia."
              icon="■"
            />
            <CardExample 
              title="GPT Personalizado"
              description="Asistentes virtuales adaptados a tus necesidades específicas y contexto empresarial."
              icon="●"
            />
            <CardExample 
              title="Automatización Inteligente"
              description="Procesos optimizados que liberan tu potencial humano para tareas estratégicas."
              icon="▲"
            />
          </div>

          {/* Tarjetas con glassmorfismo */}
          <div className="space-y-6">
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blaze/20 via-digital-coral/30 to-quantum-blue/25"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blaze rounded-2xl flex items-center justify-center">
                    <div className="text-white text-2xl">■</div>
                  </div>
                  <div className="flex-1">
                    <H3 className="mb-3">SuperAI Empresarial</H3>
                    <BodyText className="leading-relaxed">Arquitecturas de IA que transforman operaciones empresariales con precisión y eficiencia.</BodyText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'interactive',
      title: 'Elementos Interactivos',
      description: 'Componentes con animaciones y estados interactivos',
      components: [
        <div key="interactive" className="space-y-8">
          {/* Barra de progreso glassmorfismo */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blaze/20 via-digital-coral/30 to-quantum-blue/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
              <H4 className="text-gray-800 mb-6">Barra de Progreso Glassmorfismo</H4>
              <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm">
                <div className="bg-gradient-to-r from-neon-cyan to-neon-blaze h-4 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
          
          {/* Animación de carga */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-digital-coral/20 via-neon-blaze/30 to-deep-neural-teal/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
              <H4 className="text-gray-800 mb-6">Animación de Carga Glassmorfismo</H4>
              <div className="flex space-x-3">
                <div className="w-4 h-4 bg-deep-neural-teal rounded-full animate-bounce backdrop-blur-sm"></div>
                <div className="w-4 h-4 bg-neon-blaze rounded-full animate-bounce backdrop-blur-sm" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-4 h-4 bg-cyber-olive rounded-full animate-bounce backdrop-blur-sm" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Tarjeta con hover */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-frost-signal/30 via-neon-blaze/20 to-digital-coral/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-6 hover:bg-white/25 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <H4 className="mb-3">Hover me</H4>
              <BodyText>Efecto de elevación glassmorfismo al pasar el mouse</BodyText>
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'futuristic',
      title: 'Elementos Futuristas',
      description: 'Componentes inspirados en diseño futurista y tecnológico',
      components: [
        <div key="futuristic" className="space-y-8">
          {/* Grid wireframe */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-graphene-black/40 via-quantum-blue/20 to-neon-cyan/30"></div>
            <div className="relative bg-black/20 backdrop-blur-2xl border border-white/15 rounded-3xl p-8">
              <H4 className="text-white mb-6">Wireframe Grid Glassmorfismo</H4>
              <div className="relative w-full h-40 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-5 gap-1 p-3">
                  {Array.from({ length: 40 }, (_, i) => (
                    <div key={i} className="bg-white/20 rounded-sm backdrop-blur-sm"></div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-deep-neural-teal/50 rounded-2xl backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Código binario */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blaze/20 via-digital-coral/30 to-quantum-blue/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
              <H4 className="text-gray-800 mb-6">Código Binario Glassmorfismo</H4>
              <div className="font-mono text-sm text-gray-700 leading-relaxed space-y-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">10101010 11001100 11110000</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">01010101 00110011 00001111</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">11111111 00000000 10101010</div>
              </div>
            </div>
          </div>
          
          {/* Formas geométricas */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blaze/20 via-digital-coral/30 to-quantum-blue/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
              <H4 className="text-gray-800 mb-6">Formas Geométricas Glassmorfismo</H4>
              <div className="flex space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blaze to-digital-coral rounded-2xl transform rotate-45 backdrop-blur-sm"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-quantum-blue to-cyber-olive rounded-full backdrop-blur-sm"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-deep-neural-teal to-neon-blaze transform rotate-45 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'glassmorphism',
      title: 'Glassmorfismo Futurista',
      description: 'Componentes con efectos de vidrio, transparencias y blur futuristas',
      components: [
        <div key="glassmorphism" className="space-y-8">
          {/* Login Card */}
          <div className="relative">
            <H4 className="text-gray-800 mb-4">Tarjeta de Login Glassmorfismo</H4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-frost-signal/30 via-neon-blaze/20 to-quantum-blue/25"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <H2 className="text-gray-800">AI4U Lab</H2>
                  <button className="text-neon-blaze font-semibold hover:text-digital-coral transition-colors">Sign up</button>
                </div>
                
                <H1 className="mb-8">Log in</H1>
                
                <button className="w-full mb-6 px-6 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3">
                  <span className="text-xl">f</span>
                  <span>Facebook</span>
                </button>
                
                <div className="space-y-4 mb-6">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">@</div>
                    <input 
                      type="email" 
                      placeholder="e-mail address"
                      className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blaze/50 focus:border-neon-blaze/50"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">🔑</div>
                    <input 
                      type="password" 
                      placeholder="password"
                      className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blaze/50 focus:border-neon-blaze/50"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <button className="text-neon-blaze text-sm hover:underline">I forgot</button>
                </div>
                
                <button className="w-full px-6 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3">
                  <span>Log in</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 19l8-8z"/>
                  </svg>
                </button>
                
                <div className="mt-6 text-xs text-gray-600 space-y-2">
                  <p>For use by professionals only. Keep out of reach of unauthorized users.</p>
                  <p>Please use responsibly!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div>
            <H4 className="text-gray-800 mb-4">Tarjeta de Estadísticas Glassmorfismo</H4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-graphene-black/60 via-quantum-blue/30 to-neon-cyan/40"></div>
              <div className="relative bg-black/20 backdrop-blur-2xl border border-white/15 rounded-3xl p-8">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-deep-neural-teal mb-3">98%</div>
                    <div className="text-white/80 font-medium">Eficiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-neon-blaze mb-3">24/7</div>
                    <div className="text-white/80 font-medium">Disponibilidad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-digital-coral mb-3">5x</div>
                    <div className="text-white/80 font-medium">Más rápido</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <H4 className="text-gray-800 mb-4">Navegación Glassmorfismo</H4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-frost-signal/30 via-neon-blaze/20 to-digital-coral/25"></div>
              <nav className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-6 flex justify-center space-x-8">
                <button className="px-6 py-3 bg-white/20 rounded-xl text-gray-800 font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  Inicio
                </button>
                <button className="px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 hover:bg-white/10 rounded-xl transition-all duration-300">
                  Servicios
                </button>
                <button className="px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 hover:bg-white/10 rounded-xl transition-all duration-300">
                  Casos
                </button>
                <button className="px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 hover:bg-white/10 rounded-xl transition-all duration-300">
                  Contacto
                </button>
              </nav>
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'brand',
      title: 'Identidad de Marca',
      description: 'Elementos clave de la identidad de AI4U',
      components: [
        <div key="brand" className="space-y-6">
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blaze/20 via-digital-coral/30 to-quantum-blue/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
              <H3 className="mb-4">Filosofía: Time is Gold</H3>
              <BodyText className="mb-4">{BRAND_IDENTITY.brandIdentity.mission}</BodyText>
              <SmallText className="text-gray-600">{BRAND_IDENTITY.brandIdentity.essence}</SmallText>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
              <H4 className="mb-4">Personalidad de Marca</H4>
              <div className="flex flex-wrap gap-2">
                {BRAND_IDENTITY.brandVoice.personality.map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-neon-blaze/20 text-neon-blaze rounded-full text-sm backdrop-blur-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
              <H4 className="mb-4">Segmentos Cliente</H4>
              <div className="space-y-2">
                {Object.entries(BRAND_IDENTITY.customerSegments.messaging).map(([segment, message]) => (
                  <div key={segment} className="text-sm">
                    <span className="font-medium text-gray-700 capitalize">{segment}:</span>
                    <span className="text-gray-600 ml-2">{message}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'mobile-ui',
      title: 'Componentes Mobile UI',
      description: 'Componentes especializados para interfaces móviles',
      components: [
        <div key="mobile-ui" className="space-y-8">
          {/* Budget Card */}
          <div>
            <H4 className="text-gray-800 mb-4">Tarjeta de Presupuesto</H4>
            <BudgetCard
              title="Add your Budget Category"
              categories={[
                { name: 'SHOPPING', amount: 500.0 },
                { name: 'EDUCATION', amount: 500.0 },
                { name: 'HEALTH', amount: 500.0 }
              ]}
              totalAmount={1500.0}
              onAddCategory={() => console.log('Add category clicked')}
            />
          </div>

          {/* Transaction Card */}
          <div>
            <H4 className="text-gray-800 mb-4">Tarjeta de Transacciones</H4>
            <TransactionCard
              title="All Recent Transactions"
              transactions={[
                {
                  id: '1',
                  merchant: 'Gamestop',
                  category: 'SHOPPING',
                  amount: 456.0,
                  time: '09:18 AM',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                    </svg>
                  )
                },
                {
                  id: '2',
                  merchant: 'Force Club',
                  category: 'FITNESS',
                  amount: 1260.0,
                  time: '07:40 PM',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M15,6.5l-3,3l-3-3L7.5,9l3,3l-3,3L9,16.5l3-3l3,3l1.5-1.5l-3-3l3-3L15,6.5z"/>
                    </svg>
                  )
                }
              ]}
              onShowMore={() => console.log('Show more clicked')}
            />
          </div>

          {/* Weather Widgets */}
          <div>
            <H4 className="text-gray-800 mb-4">Widgets de Clima</H4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <WeatherWidget
                data={{
                  location: 'Dubai',
                  temperature: 37,
                  condition: 'The floor is lava.',
                  high: 39,
                  low: 29,
                  wind: 14,
                  precipitation: 0,
                  hourlyForecast: [
                    { time: '6 PM', condition: 'Clear', precipitation: 0, temperature: 37 },
                    { time: '9 PM', condition: 'Clear', precipitation: 0, temperature: 33 },
                    { time: '12 AM', condition: 'Clear', precipitation: 0, temperature: 32 }
                  ]
                }}
                variant="red"
              />
              <WeatherWidget
                data={{
                  location: 'Cape Town',
                  temperature: 19,
                  condition: 'Clear night sky.',
                  high: 20,
                  low: 15,
                  wind: 10,
                  precipitation: 0,
                  hourlyForecast: [
                    { time: '7 PM', condition: 'Clear', precipitation: 0, temperature: 19 },
                    { time: '10 PM', condition: 'Cloudy', precipitation: 0, temperature: 17 },
                    { time: '1 AM', condition: 'Clear', precipitation: 2, temperature: 14 }
                  ]
                }}
                variant="dark"
                showLocationIcon={true}
              />
            </div>
          </div>

          {/* Sleep Widget */}
          <div>
            <H4 className="text-gray-800 mb-4">Widget de Sueño</H4>
            <SleepWidget
              data={{
                totalHours: 8,
                totalMinutes: 32,
                remStart: '10:32',
                remEnd: '03:32',
                temperature: 25,
                hasWifi: true,
                hasBluetooth: true
              }}
              date="Tuesday 17"
              time="08:26"
            />
          </div>

          {/* 3D Modeling Interface */}
          <div>
            <H4 className="text-gray-800 mb-4">Interfaz de Modelado 3D</H4>
            <ModelingInterface
              rotationAngle={35}
              brightness={30}
              shadowDensity={25}
            />
          </div>
        </div>
      ]
    }
  ];

  const navigationItems = sections.map(section => ({
    id: section.id,
    label: section.title,
    onClick: () => setActiveSection(section.id)
  }));

  return (
    <PageLayout 
      title="Biblioteca de Componentes AI4U"
      subtitle="Sistema de diseño completo para desarrolladores. Combina la identidad de marca con elementos visuales modernos y futuristas."
      variant="glassmorphism"
    >
      <>
        {/* Navigation con glassmorfismo */}
        <div className="relative bg-white/20 backdrop-blur-xl border-b border-white/30 sticky top-0 z-10">
          <Container>
            <Navigation 
              items={navigationItems}
              activeItem={activeSection}
              variant="tabs"
            />
          </Container>
        </div>

        {/* Content con glassmorfismo */}
        <Container padding="xl">
          <Stack spacing="xl" children={
            <>
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`${activeSection === section.id ? 'block' : 'hidden'}`}
                >
                  <Section
                    title={section.title}
                    description={section.description}
                    variant="glassmorphism"
                    children={
                      <Stack spacing="xl" children={
                        <>
                          {section.components.map((component, index) => (
                            <div key={index}>{component}</div>
                          ))}
                        </>
                      } />
                    }
                  />
                </div>
              ))}
            </>
          } />
        </Container>

        {/* Footer con glassmorfismo */}
        <div className="relative bg-gradient-to-br from-graphene-black to-gray-900 text-white py-16">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xl"></div>
          <Container>
            <div className="text-center">
              <H3 className="mb-6">AI4U Design System</H3>
              <BodyText className="text-gray-400">
                Sistema de diseño para crear experiencias digitales que devuelven tiempo a las personas.
              </BodyText>
            </div>
          </Container>
        </div>
      </>
    </PageLayout>
  );
};

export default ComponentLibrary;