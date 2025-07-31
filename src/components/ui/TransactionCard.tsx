import React from 'react';

interface Transaction {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  time: string;
  icon?: React.ReactNode;
}

interface TransactionCardProps {
  title: string;
  subtitle?: string;
  transactions: Transaction[];
  onShowMore?: () => void;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  subtitle,
  transactions,
  onShowMore
}) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'SHOPPING': 'bg-blue-100 text-blue-700',
      'FITNESS': 'bg-green-100 text-green-700',
      'EDUCATION': 'bg-purple-100 text-purple-700',
      'INVESTMENTS': 'bg-yellow-100 text-yellow-700',
      'HEALTH': 'bg-red-100 text-red-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'SHOPPING': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M1,2v2h2l3.6,7.59L6.25,14.04C6.11,14.32,6,14.65,6,15 c0,1.1,0.9,2,2,2h12v-2H8.42c-0.14,0-0.25-0.11-0.25-0.25l0.03-0.12L9.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03L21.7,4H5.21l-0.94-2H1z M17,18c-1.1,0-1.99,0.9-1.99,2S15.9,22,17,22s2-0.9,2-2S18.1,18,17,18z"/>
        </svg>
      ),
      'FITNESS': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57 L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86 L19.86,18.43L22,16.29L20.57,14.86z"/>
        </svg>
      ),
      'EDUCATION': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3L1,9l4,2.18v6L12,21l7-3.82v-6l2-1.09L12,3z M17,15.99l-5,2.73l-5-2.73v-3.72L12,15l5-2.73V15.99z M17,10.99l-5,2.73l-5-2.73V7.27L12,10l5-2.73V10.99z"/>
        </svg>
      ),
      'INVESTMENTS': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.5,18.49l6-6.01l4,4L22,6.92l-1.41-1.41L13.5,13.49L9.5,9.49L2,17L3.5,18.49z"/>
        </svg>
      ),
      'HEALTH': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"/>
        </svg>
      )
    };
    return icons[category] || (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8,10.9c-2.27-0.59-3-1.2-3-2.15c0-1.09,1.01-1.85,2.7-1.85c1.78,0,2.44,0.85,2.5,2.1h2.21 c-0.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94,0.42-3.5,1.68-3.5,3.61c0,2.31,1.91,3.46,4.7,4.13c2.5,0.6,3.5,1.48,3.5,2.53 c0,0.69-0.49,1.79-2.7,1.79c-2.06,0-2.87-0.92-2.98-2.1h-2.2c0.12,2.19,1.76,3.42,3.68,3.83V21h3v-2.15c1.95-0.37,3.5-1.5,3.5-3.55 c0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            {subtitle && (
              <p className="text-sm text-gray-500">{subtitle}</p>
            )}
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {/* Icon */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="text-gray-600">{transaction.icon || getCategoryIcon(transaction.category)}</div>
            </div>
            
            {/* Transaction Details */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-800">{transaction.merchant}</h4>
                <span className="font-bold text-gray-900">${transaction.amount.toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(transaction.category)}`}>
                  {transaction.category}
                </span>
                <span className="text-xs text-gray-500">{transaction.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {onShowMore && (
        <div className="mt-6 text-center">
          <button 
            onClick={onShowMore}
            className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
          >
            SHOW MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionCard; 