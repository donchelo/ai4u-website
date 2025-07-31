import React, { useState } from 'react';
import { BRAND_IDENTITY } from '../data/brandIdentity';
import BudgetCard from '../components/ui/BudgetCard';
import TransactionCard from '../components/ui/TransactionCard';
import WeatherWidget from '../components/ui/WeatherWidget';
import SleepWidget from '../components/ui/SleepWidget';
import ModelingInterface from '../components/ui/ModelingInterface';

interface ComponentSection {
  id: string;
  title: string;
  description: string;
  components: React.ReactNode[];
}

const ComponentLibrary: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('colors');

  // Componentes de colores
  const ColorSwatch: React.FC<{ color: string; name: string; description: string }> = ({ color, name, description }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div 
        className="w-16 h-16 rounded-lg mb-3 shadow-inner"
        style={{ backgroundColor: color }}
      />
      <h4 className="font-semibold text-sm text-gray-800 mb-1">{name}</h4>
      <p className="text-xs text-gray-600 text-center">{description}</p>
      <code className="text-xs text-gray-500 mt-2">{color}</code>
    </div>
  );

  // Componentes de tipografía
  const TypographyExample: React.FC<{ variant: string; text: string; className?: string }> = ({ variant, text, className = "" }) => (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <h4 className="text-sm font-semibold text-gray-600 mb-2">{variant}</h4>
      <div className={className}>{text}</div>
    </div>
  );

  // Componentes de botones
  const ButtonExample: React.FC<{ variant: string; children?: React.ReactNode; className?: string }> = ({ variant, children, className = "" }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <h4 className="text-sm font-semibold text-gray-600 mb-3">{variant}</h4>
      <button className={className}>
        {children}
      </button>
    </div>
  );

  // Componentes de tarjetas
  const CardExample: React.FC<{ title: string; description: string; icon?: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      {icon && (
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4">
          <div className="text-white">{icon}</div>
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );

  // Componentes de elementos interactivos
  const InteractiveElement: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <h4 className="text-sm font-semibold text-gray-600 mb-3">{title}</h4>
      {children}
    </div>
  );

  // Componentes de elementos futuristas
  const FuturisticElement: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">{title}</h4>
      {children}
    </div>
  );

  const sections: ComponentSection[] = [
    {
      id: 'colors',
      title: 'Paleta de Colores',
      description: 'Colores principales y secundarios de la marca AI4U',
      components: [
        <div key="colors" className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      title: 'Tipografía',
      description: 'Sistema tipográfico de la marca',
      components: [
        <div key="typography" className="space-y-4">
          <TypographyExample 
            variant="Display Large" 
            text="Te devolvemos tu tiempo"
            className="text-4xl font-bold text-gray-900"
          />
          <TypographyExample 
            variant="Display Medium" 
            text="para que lo uses en lo que verdaderamente importa"
            className="text-2xl font-semibold text-gray-800"
          />
          <TypographyExample 
            variant="Body Large" 
            text="Transformar recursos operativos en ventaja estratégica mediante arquitecturas integrales de Inteligencia Artificial"
            className="text-lg text-gray-700"
          />
          <TypographyExample 
            variant="Body Regular" 
            text="Automatización cálida y cercana, no fría ni distante"
            className="text-base text-gray-600"
          />
          <TypographyExample 
            variant="Caption" 
            text="Time is Gold"
            className="text-sm font-mono text-orange-600"
          />
        </div>
      ]
    },
    {
      id: 'buttons',
      title: 'Botones',
      description: 'Componentes de botones interactivos',
      components: [
        <div key="buttons" className="space-y-8">
          {/* Glass Primary Button */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-hot-orange/20 via-neon-cyan/30 to-neon-blaze/25"></div>
            <div className="relative">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Botón Primario Glassmorfismo</h4>
              <button className="px-8 py-4 bg-white/15 backdrop-blur-2xl border border-white/25 rounded-xl text-gray-800 font-semibold hover:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl">
            Recupera tu tiempo
              </button>
            </div>
          </div>

          {/* Glass Secondary Button */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-digital-coral/20 via-primary/30 to-neon-cyan/25"></div>
            <div className="relative">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Botón Secundario Glassmorfismo</h4>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-2xl border-2 border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300">
            Conoce más
              </button>
            </div>
          </div>

          {/* Glass Ghost Button */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-mint-cream/30 via-secondary/20 to-neon-blaze/25"></div>
            <div className="relative">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Botón Ghost Glassmorfismo</h4>
              <button className="px-8 py-4 text-gray-700 font-semibold rounded-xl hover:bg-white/20 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
            Ver casos
              </button>
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'cards',
      title: 'Tarjetas',
      description: 'Componentes de tarjetas para contenido',
      components: [
        <div key="cards" className="space-y-8">
          {/* Glass Card 1 */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blaze/20 via-secondary/30 to-neon-cyan/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blaze rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">SuperAI Empresarial</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Arquitecturas de IA que transforman operaciones empresariales con precisión y eficiencia.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Card 2 */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-digital-coral/20 via-neon-cyan/30 to-neon-blaze/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-hot-orange to-neon-cyan rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">GPT Personalizado</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Asistentes virtuales adaptados a tus necesidades específicas y contexto empresarial.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Card 3 */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-hot-orange/20 via-primary/30 to-digital-coral/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blaze to-digital-coral rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2.05v3.03c3.39.49 6 3.77 6 7.27 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
              </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Automatización Inteligente</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Procesos optimizados que liberan tu potencial humano para tareas estratégicas.</p>
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
      description: 'Componentes con animaciones y estados',
      components: [
        <div key="interactive" className="space-y-8">
          {/* Glass Progress Bar */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blaze/20 via-neon-cyan/30 to-digital-coral/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Barra de Progreso Glassmorfismo</h4>
              <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm">
                <div className="bg-gradient-to-r from-neon-cyan to-neon-blaze h-4 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
          
          {/* Glass Loading Animation */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-digital-coral/20 via-neon-blaze/30 to-deep-neural-teal/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Animación de Carga Glassmorfismo</h4>
              <div className="flex space-x-3">
                <div className="w-4 h-4 bg-deep-neural-teal rounded-full animate-bounce backdrop-blur-sm"></div>
                <div className="w-4 h-4 bg-neon-blaze rounded-full animate-bounce backdrop-blur-sm" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-4 h-4 bg-cyber-olive rounded-full animate-bounce backdrop-blur-sm" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Glass Hover Card */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-mint-cream/30 via-primary/20 to-digital-coral/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-6 hover:bg-white/25 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Hover me</h4>
              <p className="text-gray-700 text-lg">Efecto de elevación glassmorfismo al pasar el mouse</p>
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'futuristic',
      title: 'Elementos Futuristas',
      description: 'Componentes inspirados en las imágenes de referencia',
      components: [
        <div key="futuristic" className="space-y-8">
          {/* Glass Wireframe Grid */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-erie-black/40 via-secondary/20 to-neon-cyan/30"></div>
            <div className="relative bg-black/20 backdrop-blur-2xl border border-white/15 rounded-3xl p-8">
              <h4 className="text-lg font-semibold text-white mb-6">Wireframe Grid Glassmorfismo</h4>
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
          
          {/* Glass Binary Code */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blaze/20 via-secondary/30 to-neon-cyan/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Código Binario Glassmorfismo</h4>
              <div className="font-mono text-sm text-gray-700 leading-relaxed space-y-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">10101010 11001100 11110000</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">01010101 00110011 00001111</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">11111111 00000000 10101010</div>
              </div>
            </div>
          </div>
          
          {/* Glass Geometric Shapes */}
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-hot-orange/20 via-neon-cyan/30 to-neon-blaze/25"></div>
            <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Formas Geométricas Glassmorfismo</h4>
              <div className="flex space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-hot-orange to-neon-cyan rounded-2xl transform rotate-45 backdrop-blur-sm"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blaze to-digital-coral rounded-full backdrop-blur-sm"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blaze transform rotate-45 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'glassmorphism',
      title: 'Glassmorfismo Futurista',
      description: 'Componentes con efectos de vidrio, transparencias y blur futuristas inspirados en diseño moderno',
      components: [
        <div key="glassmorphism" className="space-y-8">
          {/* Glass Login Card */}
          <div className="relative">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Tarjeta de Login Glassmorfismo</h4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-mint-cream/30 via-primary/20 to-neon-cyan/25"></div>
              {/* Glass effect */}
              <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">AI4U Lab</h2>
                  <button className="text-primary font-semibold hover:text-secondary transition-colors">Sign up</button>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Log in</h1>
                
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
                      className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">🔑</div>
                    <input 
                      type="password" 
                      placeholder="password"
                      className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <button className="text-primary text-sm hover:underline">I forgot</button>
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

          {/* Glass Event Card */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Tarjeta de Evento Glassmorfismo</h4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-digital-coral/20 via-neon-cyan/30 to-neon-blaze/25"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-gray-900 mb-2">Thu 24th</div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">Grand opening</div>
                    <div className="text-lg text-gray-700 mb-4">New AI4U Store</div>
                    <div className="text-gray-600 mb-6">18 PM - Tech District 12B</div>
                    <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2">
                      <span>Join in</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 19l8-8z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-hot-orange to-neon-cyan rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-sm">AI4U</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Product Card */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Tarjeta de Producto Glassmorfismo</h4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-erie-black/40 via-secondary/20 to-neon-cyan/30"></div>
              <div className="relative bg-black/20 backdrop-blur-2xl border border-white/15 rounded-3xl p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">New in</h3>
                    <div className="text-xl text-white/90 mb-4">AI4U SuperAI</div>
                    <button className="px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                      Discover
                    </button>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blaze rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Navegación Glassmorfismo</h4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-mint-cream/30 via-primary/20 to-digital-coral/25"></div>
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

          {/* Glass Stats Card */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Tarjeta de Estadísticas Glassmorfismo</h4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-erie-black/60 via-secondary/30 to-neon-cyan/40"></div>
              <div className="relative bg-black/20 backdrop-blur-2xl border border-white/15 rounded-3xl p-8">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-deep-neural-teal mb-3">98%</div>
                    <div className="text-white/80 font-medium">Eficiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-3">24/7</div>
                    <div className="text-white/80 font-medium">Disponibilidad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-neon-blaze mb-3">5x</div>
                    <div className="text-white/80 font-medium">Más rápido</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Form */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Formulario Glassmorfismo</h4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-mint-cream/30 via-primary/20 to-digital-coral/25"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Contacto Futurista</h3>
                <div className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Tu nombre"
                      className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-lg"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Tu email"
                      className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-lg"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Tu mensaje"
                      rows={4}
                      className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-lg"
                    ></textarea>
                  </div>
                  <button className="w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 text-lg">
                    <span>Enviar Mensaje</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 19l8-8z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Progress Bar */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Barra de Progreso Glassmorfismo</h4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-digital-coral/20 via-neon-cyan/30 to-neon-blaze/25"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8">
                <div className="mb-6">
                  <div className="flex justify-between text-gray-800 font-semibold text-lg">
                    <span>Procesamiento IA</span>
                    <span>75%</span>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-neon-cyan to-neon-blaze h-4 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Notification */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Notificación Glassmorfismo</h4>
            <div className="relative p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-hot-orange/20 via-neon-cyan/30 to-neon-blaze/25"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-6 flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-hot-orange to-neon-cyan rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800">Proceso Completado</h4>
                  <p className="text-gray-700 text-lg">La automatización se ha ejecutado exitosamente</p>
                </div>
                <button className="text-gray-500 hover:text-gray-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
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
          <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Filosofía: Time is Gold</h3>
            <p className="text-gray-700 mb-4">{BRAND_IDENTITY.brandIdentity.mission}</p>
            <p className="text-sm text-gray-600">{BRAND_IDENTITY.brandIdentity.essence}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Personalidad de Marca</h4>
              <div className="flex flex-wrap gap-2">
                {BRAND_IDENTITY.brandVoice.personality.map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Segmentos Cliente</h4>
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
      description: 'Componentes inspirados en interfaces móviles modernas',
      components: [
        <div key="mobile-ui" className="space-y-8">
          {/* Budget Card */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Tarjeta de Presupuesto</h4>
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
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Tarjeta de Transacciones</h4>
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
                 },
                 {
                   id: '3',
                   merchant: 'Pinnacle',
                   category: 'EDUCATION',
                   amount: 280.0,
                   time: '09:20 AM',
                   icon: (
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12,3L1,9l4,2.18v6L12,21l7-3.82v-6l2-1.09L12,3z M17,15.99l-5,2.73l-5-2.73v-3.72L12,15l5-2.73V15.99z M17,10.99l-5,2.73l-5-2.73V7.27L12,10l5-2.73V10.99z"/>
                     </svg>
                   )
                 },
                 {
                   id: '4',
                   merchant: 'Bonds',
                   category: 'INVESTMENTS',
                   amount: 1340.0,
                   time: '08:34 PM',
                   icon: (
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M11.8,10.9c-2.27-0.59-3-1.2-3-2.15c0-1.09,1.01-1.85,2.7-1.85c1.78,0,2.44,0.85,2.5,2.1h2.21 c-0.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94,0.42-3.5,1.68-3.5,3.61c0,2.31,1.91,3.46,4.7,4.13c2.5,0.6,3.5,1.48,3.5,2.53 c0,0.69-0.49,1.79-2.7,1.79c-2.06,0-2.87-0.92-2.98-2.1h-2.2c0.12,2.19,1.76,3.42,3.68,3.83V21h3v-2.15c1.95-0.37,3.5-1.5,3.5-3.55 c0-2.84-2.43-3.81-4.7-4.4z"/>
                     </svg>
                   )
                 },
                 {
                   id: '5',
                   merchant: 'Elevate',
                   category: 'HEALTH',
                   amount: 806.0,
                   time: '06:34 PM',
                   icon: (
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"/>
                     </svg>
                   )
                 }
              ]}
              onShowMore={() => console.log('Show more clicked')}
            />
          </div>

          {/* Weather Widgets */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Widgets de Clima</h4>
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
                theme="red"
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
                theme="dark"
                showLocationIcon={true}
              />
            </div>
          </div>

          {/* Sleep Widget */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Widget de Sueño</h4>
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
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Interfaz de Modelado 3D</h4>
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Biblioteca de Componentes AI4U
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema de diseño completo para desarrolladores. Combina la identidad de marca con elementos visuales modernos y futuristas.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`${activeSection === section.id ? 'block' : 'hidden'}`}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {section.description}
              </p>
            </div>
            
            <div className="space-y-8">
              {section.components}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">AI4U Design System</h3>
            <p className="text-gray-400">
              Sistema de diseño para crear experiencias digitales que devuelven tiempo a las personas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary; 
