import React from 'react';

interface SleepData {
  totalHours: number;
  totalMinutes: number;
  remStart: string;
  remEnd: string;
  temperature: number;
  hasWifi: boolean;
  hasBluetooth: boolean;
}

interface SleepWidgetProps {
  data: SleepData;
  date: string;
  time: string;
}

const SleepWidget: React.FC<SleepWidgetProps> = ({
  data,
  date,
  time
}) => {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 max-w-sm mx-auto text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-sm text-gray-400">{date}</div>
          <div className="text-2xl font-bold">{time}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">43</div>
        </div>
      </div>

      {/* Sleep Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">Sleep</span>
          <div className="bg-orange-500 px-3 py-1 rounded-lg">
            <span className="text-sm font-semibold">
              {data.totalHours}H {data.totalMinutes}M
            </span>
          </div>
        </div>

        {/* Sleep Timeline */}
        <div className="relative">
          <div className="bg-orange-500 h-8 rounded-lg relative overflow-hidden">
            {/* Timeline markers */}
            <div className="absolute inset-0 flex justify-between items-center px-2">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="w-0.5 h-2 bg-white opacity-30"></div>
              ))}
            </div>
            
            {/* REM line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white opacity-50 transform -translate-y-1/2"></div>
            
            {/* Time labels */}
            <div className="absolute top-0 left-2 text-xs font-semibold">
              {data.remStart}
            </div>
            <div className="absolute top-0 right-2 text-xs font-semibold">
              {data.remEnd}
            </div>
            
            <div className="absolute bottom-0 left-2 text-xs">
              REM
            </div>
            <div className="absolute bottom-0 right-2 text-xs">
              REM
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-sm">
          {data.temperature}°C
        </div>
        <div className="flex items-center space-x-2">
          {data.hasWifi && (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M17.778 9.243a1 1 0 01-1.414 0L12 4.828l-4.364 4.364a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 010 1.414zM5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
          {data.hasBluetooth && (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default SleepWidget; 