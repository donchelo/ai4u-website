import React, { useState } from 'react';

interface Tool {
  id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}

interface Form {
  id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}

interface LightSource {
  id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}

interface ModelingInterfaceProps {
  rotationAngle?: number;
  brightness?: number;
  shadowDensity?: number;
}

const ModelingInterface: React.FC<ModelingInterfaceProps> = ({
  rotationAngle = 35,
  brightness = 30,
  shadowDensity = 25
}) => {
  const [selectedTool, setSelectedTool] = useState('rotation');
  const [selectedForm, setSelectedForm] = useState('cube');
  const [selectedLight, setSelectedLight] = useState('spot');

  const forms: Form[] = [
    { id: 'cube', name: 'Cube', icon: '⬜', isSelected: true },
    { id: 'sphere', name: 'Sphere', icon: '⭕' },
    { id: 'cone', name: 'Cone', icon: '🔺' },
    { id: 'cylinder', name: 'Cylinder', icon: '🔵' },
    { id: 'more', name: 'More', icon: '⋯' }
  ];

  const tools: Tool[] = [
    { id: 'render', name: 'Render', icon: '🎨' },
    { id: 'rotation', name: 'Rotation', icon: '🔄', isSelected: true },
    { id: 'texture', name: 'Texture', icon: '🎭' },
    { id: 'polygons', name: 'Polygons', icon: '📐' },
    { id: 'points', name: 'Points', icon: '🔵' },
    { id: 'intrude', name: 'Intrude', icon: '⬇️' }
  ];

  const lightSources: LightSource[] = [
    { id: 'spot', name: 'Spot', icon: '💡', isSelected: true },
    { id: 'area', name: 'Area', icon: '🔲' },
    { id: 'target', name: 'Target', icon: '🎯' },
    { id: 'sun', name: 'Sun', icon: '☀️' }
  ];

  return (
    <div className="bg-gray-100 rounded-lg p-6 max-w-4xl mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
        <div>Sat—19 January</div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded"></div>
          <div className="w-3 h-3 bg-gray-400 rounded"></div>
          <div className="w-3 h-3 bg-red-400 rounded"></div>
        </div>
        <div>2019</div>
      </div>

      <div className="flex space-x-6">
        {/* Left Sidebar */}
        <div className="w-48 space-y-6">
          {/* Forms */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Forms</h3>
            <div className="flex space-x-2">
              {forms.map((form) => (
                <button
                  key={form.id}
                  onClick={() => setSelectedForm(form.id)}
                  className={`w-8 h-8 rounded flex items-center justify-center text-sm ${
                    form.isSelected 
                      ? 'bg-black text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {form.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Tools</h3>
            <div className="space-y-2">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded text-sm ${
                    tool.isSelected 
                      ? 'bg-black text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{tool.icon}</span>
                  <span>{tool.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center Canvas */}
        <div className="flex-1 bg-white rounded-lg p-6 relative">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-8 h-full">
                {Array.from({ length: 96 }, (_, i) => (
                  <div key={i} className="border border-gray-200"></div>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Object */}
          <div className="relative z-10 flex flex-col items-center justify-center h-64">
            <div className="w-24 h-24 border-2 border-gray-800 relative transform rotate-45">
              <div className="absolute inset-0 border-l border-gray-600"></div>
              <div className="absolute inset-0 border-t border-gray-600"></div>
            </div>
            
            {/* Rotation Control */}
            <div className="mt-8 flex flex-col items-center">
              <div className="w-32 h-8 border-2 border-gray-400 rounded-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-sm text-gray-600">Rotation</div>
                <div className="text-2xl font-bold text-gray-800">{rotationAngle}°</div>
              </div>
            </div>

            {/* Axis Indicator */}
            <div className="absolute top-4 left-4">
              <div className="flex items-center space-x-1 text-xs">
                <span className="text-red-600">X</span>
                <span className="text-green-600">Y</span>
                <span className="text-blue-600">Z</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-48 space-y-6">
          {/* Lightning */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Lightning</h3>
            <div className="grid grid-cols-2 gap-2">
              {lightSources.map((light) => (
                <button
                  key={light.id}
                  onClick={() => setSelectedLight(light.id)}
                  className={`w-12 h-12 rounded flex items-center justify-center text-sm ${
                    light.isSelected 
                      ? 'bg-black text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {light.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-2">
                <span>Brightness</span>
                <span>{brightness}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-black h-2 rounded-full transition-all duration-300"
                  style={{ width: `${brightness}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-2">
                <span>Shadow Density</span>
                <span>{shadowDensity}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-black h-2 rounded-full transition-all duration-300"
                  style={{ width: `${shadowDensity}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Elements */}
      <div className="flex justify-between items-center mt-6 text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border border-gray-400 rounded"></div>
          <div className="flex flex-col">
            <span>END IS UI</span>
            <div className="flex items-center space-x-1">
              <span>UI</span>
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <div>013</div>
      </div>
    </div>
  );
};

export default ModelingInterface; 