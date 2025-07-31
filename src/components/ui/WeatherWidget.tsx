import React from 'react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  high: number;
  low: number;
  wind: number;
  precipitation: number;
  hourlyForecast: Array<{
    time: string;
    condition: string;
    precipitation: number;
    temperature: number;
  }>;
}

interface WeatherWidgetProps {
  data: WeatherData;
  theme?: 'light' | 'dark' | 'red';
  showLocationIcon?: boolean;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  data,
  theme = 'light',
  showLocationIcon = false
}) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'red':
        return {
          bg: 'bg-red-500',
          text: 'text-black',
          secondaryText: 'text-black',
          border: 'border-red-400'
        };
      case 'dark':
        return {
          bg: 'bg-black',
          text: 'text-white',
          secondaryText: 'text-gray-300',
          border: 'border-gray-700'
        };
      default:
        return {
          bg: 'bg-white',
          text: 'text-gray-900',
          secondaryText: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`${themeClasses.bg} rounded-2xl shadow-lg p-6 max-w-sm mx-auto ${themeClasses.border} border`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            {showLocationIcon && (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            )}
            <h3 className={`text-lg font-semibold ${themeClasses.text}`}>{data.location}</h3>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-sm ${themeClasses.secondaryText}`}>00:37</span>
          <div className="w-2 h-2 bg-current rounded-full"></div>
        </div>
      </div>

      {/* Current Weather */}
      <div className="text-center mb-6">
        <div className={`text-6xl font-bold ${themeClasses.text} mb-2`}>
          {data.temperature}°
        </div>
        <div className={`text-lg ${themeClasses.secondaryText} mb-2`}>
          {data.condition}
        </div>
        <div className={`text-sm ${themeClasses.secondaryText}`}>
          {data.high}°—{data.low}°
        </div>
      </div>

      {/* Weather Details */}
      <div className="flex justify-between mb-6">
        <div className={`text-sm ${themeClasses.secondaryText}`}>
          Wind: {data.wind} km/h
        </div>
        <div className={`text-sm ${themeClasses.secondaryText}`}>
          Precipitation: {data.precipitation}%
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="border-t border-current border-opacity-20 pt-4">
        <h4 className={`text-sm font-semibold mb-3 ${themeClasses.text}`}>Hourly</h4>
        <div className="space-y-2">
          {data.hourlyForecast.map((forecast, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className={`text-sm ${themeClasses.secondaryText}`}>{forecast.time}</span>
              <span className={`text-sm ${themeClasses.secondaryText}`}>{forecast.condition}</span>
              <span className={`text-sm ${themeClasses.secondaryText}`}>{forecast.precipitation}%</span>
              <span className={`text-sm font-semibold ${themeClasses.text}`}>{forecast.temperature}°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget; 