import React, { useState } from 'react';
import { Box } from '@mui/material';
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
  category: string;
  components: React.ReactNode[];
}

interface DemoPage {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
}

const ComponentLibrary: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { mode } = useColorMode();

  // Componente de muestra de color mejorado con glassmorfismo
  const ColorSwatch: React.FC<{ color: string; name: string; description: string }> = ({ color, name, description }) => (
    <Box
      sx={{
        position: 'relative',
        p: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: 2,
          mb: 2,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          backgroundColor: color
        }}
      />
      <H4 sx={{ textAlign: 'center', mb: 1 }}>{name}</H4>
      <SmallText sx={{ textAlign: 'center', color: 'text.secondary', mb: 2 }}>{description}</SmallText>
      <Box
        component="code"
        sx={{
          fontSize: '0.75rem',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          color: 'white',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          backdropFilter: 'blur(4px)'
        }}
      >
        {color}
      </Box>
    </Box>
  );

  // Componente de tipografía mejorado
  const TypographyExample: React.FC<{ variant: string; text: string; className?: string }> = ({ variant, text, className = "" }) => (
    <Box
      sx={{
        position: 'relative',
        p: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 2
      }}
    >
      <H4 sx={{ color: 'text.secondary', mb: 2 }}>{variant}</H4>
      <Box className={className}>{text}</Box>
    </Box>
  );

  // Componente de botón mejorado
  const ButtonExample: React.FC<{ variant: string; children?: React.ReactNode; className?: string }> = ({ variant, children, className = "" }) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 2
      }}
    >
      <H4 sx={{ color: 'text.secondary', mb: 2 }}>{variant}</H4>
      <Button variant="primary" className={className}>
        {children}
      </Button>
    </Box>
  );

  // Componente de tarjeta mejorado
  const CardExample: React.FC<{ title: string; description: string; icon?: React.ReactNode }> = ({ title, description, icon }) => (
    <Box
      sx={{
        position: 'relative',
        p: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        borderRadius: 3,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-8px)'
        }
      }}
    >
      {icon && (
        <Box
          sx={{
            width: 64,
            height: 64,
            background: 'linear-gradient(135deg, #FF5C00, #FF7477)',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
            color: 'white',
            fontSize: '1.5rem'
          }}
        >
          {icon}
        </Box>
      )}
      <H3 sx={{ mb: 2 }}>{title}</H3>
      <BodyText sx={{ color: 'text.secondary' }}>{description}</BodyText>
    </Box>
  );

  // Páginas de demo disponibles
  const demoPages: DemoPage[] = [
    {
      id: 'color-system',
      title: 'Sistema de Colores',
      description: 'Demo del sistema de colores unificado con contraste automático',
      path: '/color-system-demo',
      category: 'design-system'
    },
    {
      id: 'theme-demo',
      title: 'Tema AI4U',
      description: 'Demo completo del tema refactorizado de AI4U',
      path: '/theme-demo',
      category: 'design-system'
    },
    {
      id: 'metrics-demo',
      title: 'Métricas y Estadísticas',
      description: 'Demo de componentes de métricas y estadísticas',
      path: '/metrics-demo',
      category: 'components'
    },
    {
      id: 'migration-demo',
      title: 'Migración de Colores',
      description: 'Demo del proceso de migración del sistema de colores',
      path: '/migration-demo',
      category: 'design-system'
    },
    {
      id: 'fase3-demo',
      title: 'Fase 3 - Nuevas Funcionalidades',
      description: 'Demo de las nuevas funcionalidades de la fase 3',
      path: '/fase3-demo',
      category: 'features'
    }
  ];

  // Categorías disponibles
  const categories = [
    { id: 'all', name: 'Todos', count: demoPages.length },
    { id: 'design-system', name: 'Sistema de Diseño', count: demoPages.filter(p => p.category === 'design-system').length },
    { id: 'components', name: 'Componentes', count: demoPages.filter(p => p.category === 'components').length },
    { id: 'features', name: 'Funcionalidades', count: demoPages.filter(p => p.category === 'features').length }
  ];

  const sections: ComponentSection[] = [
    {
      id: 'overview',
      title: 'Vista General',
      description: 'Acceso rápido a todas las demos y componentes disponibles',
      category: 'overview',
      components: [
        <div key="overview" className="space-y-8">
          {/* Navegación por categorías */}
          <div className="space-y-6">
            <H3 className="text-gray-800">Categorías de Demos</H3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-white/25 border-white/30 shadow-xl'
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <H4 className="text-gray-800 mb-2">{category.name}</H4>
                  <SmallText className="text-gray-600">{category.count} demos</SmallText>
                </button>
              ))}
            </div>
          </div>

          {/* Lista de demos filtradas */}
          <div className="space-y-6">
            <H3 className="text-gray-800">Demos Disponibles</H3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoPages
                .filter(page => activeCategory === 'all' || page.category === activeCategory)
                .map((page) => (
                  <div
                    key={page.id}
                    className="relative p-6 bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    onClick={() => window.location.href = page.path}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-blaze to-digital-coral rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg">▶</span>
                      </div>
                      <span className="text-xs px-2 py-1 bg-white/20 rounded-full text-gray-600">
                        {page.category}
                      </span>
                    </div>
                    <H4 className="mb-3 text-gray-800">{page.title}</H4>
                    <BodyText className="text-gray-600 mb-4">{page.description}</BodyText>
                    <div className="flex items-center text-neon-blaze text-sm font-medium">
                      Ver demo →
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ]
    },
    {
      id: 'colors',
      title: 'Paleta de Colores AI4U',
      description: 'Sistema de colores principal y secundarios de la marca',
      category: 'design-system',
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
      category: 'design-system',
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
      category: 'components',
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
      category: 'components',
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
      id: 'mobile-ui',
      title: 'Componentes Mobile UI',
      description: 'Componentes especializados para interfaces móviles',
      category: 'components',
      components: [
        <div key="mobile-ui" className="space-y-8">
          {/* Budget Card */}
          <div>
            <H4 className="text-gray-800 mb-4">Tarjeta de Presupuesto</H4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BudgetCard
                title="Add your Budget Category"
                categories={[
                  { name: 'SHOPPING', amount: 500.0 },
                  { name: 'EDUCATION', amount: 500.0 },
                  { name: 'HEALTH', amount: 500.0 }
                ]}
                totalAmount={1500.0}
                onAddCategory={() => console.log('Add category clicked')}
                variant="elevated"
              />
              <BudgetCard
                title="Presupuesto Personal"
                categories={[
                  { name: 'ENTRETENIMIENTO', amount: 300.0 },
                  { name: 'TRANSPORTE', amount: 200.0 },
                  { name: 'ALIMENTACIÓN', amount: 400.0 }
                ]}
                totalAmount={900.0}
                onAddCategory={() => console.log('Add category clicked')}
                variant="elevated"
              />
            </div>
          </div>

          {/* Transaction Card */}
          <div>
            <H4 className="text-gray-800 mb-4">Tarjeta de Transacciones</H4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TransactionCard
                title="All Recent Transactions"
                transactions={[
                  {
                    id: '1',
                    merchant: 'Gamestop',
                    category: 'SHOPPING',
                    amount: 456.0,
                    time: '09:18 AM',
                    status: 'completed',
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
                    status: 'pending',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M15,6.5l-3,3l-3-3L7.5,9l3,3l-3,3L9,16.5l3-3l3,3l1.5-1.5l-3-3l3-3L15,6.5z"/>
                      </svg>
                    )
                  }
                ]}
                onShowMore={() => console.log('Show more clicked')}
                variant="elevated"
              />
              <TransactionCard
                title="Transacciones Recientes"
                transactions={[
                  {
                    id: '3',
                    merchant: 'Netflix',
                    category: 'ENTRETENIMIENTO',
                    amount: 15.99,
                    time: '10:30 AM',
                    status: 'completed'
                  },
                  {
                    id: '4',
                    merchant: 'Uber',
                    category: 'TRANSPORTE',
                    amount: 25.50,
                    time: '11:45 AM',
                    status: 'completed'
                  }
                ]}
                onShowMore={() => console.log('Show more clicked')}
                variant="elevated"
              />
            </div>
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
                variant="elevated"
                showLocationIcon={true}
                onRefresh={() => console.log('Refresh weather')}
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
                variant="elevated"
                showLocationIcon={true}
                onRefresh={() => console.log('Refresh weather')}
              />
            </div>
          </div>

          {/* Sleep Widget */}
          <div>
            <H4 className="text-gray-800 mb-4">Widget de Sueño</H4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SleepWidget
                data={{
                  totalHours: 8,
                  totalMinutes: 32,
                  remStart: '10:32',
                  remEnd: '03:32',
                  temperature: 25,
                  hasWifi: true,
                  hasBluetooth: true,
                  quality: 'excellent'
                }}
                date="Tuesday 17"
                time="08:26"
                variant="elevated"
                onRefresh={() => console.log('Refresh sleep data')}
              />
              <SleepWidget
                data={{
                  totalHours: 6,
                  totalMinutes: 15,
                  remStart: '11:15',
                  remEnd: '02:15',
                  temperature: 22,
                  hasWifi: true,
                  hasBluetooth: false,
                  quality: 'good'
                }}
                date="Wednesday 18"
                time="07:30"
                variant="elevated"
                onRefresh={() => console.log('Refresh sleep data')}
              />
            </div>
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

  const navigationItems = [
    { id: 'overview', label: 'Vista General', onClick: () => setActiveSection('overview') },
    { id: 'design-system', label: 'Sistema de Diseño', onClick: () => setActiveSection('design-system') },
    { id: 'components', label: 'Componentes', onClick: () => setActiveSection('components') }
  ];

  const filteredSections = sections.filter(section => {
    if (activeSection === 'overview') return section.id === 'overview';
    if (activeSection === 'design-system') return section.category === 'design-system';
    if (activeSection === 'components') return section.category === 'components';
    return true;
  });

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
              {filteredSections.map((section) => (
                <div
                  key={section.id}
                  className={`${activeSection === section.id || (activeSection === 'design-system' && section.category === 'design-system') || (activeSection === 'components' && section.category === 'components') ? 'block' : 'hidden'}`}
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
