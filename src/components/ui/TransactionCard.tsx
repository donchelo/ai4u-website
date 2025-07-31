import React from 'react';

interface Transaction {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  time: string;
  icon?: string;
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
    const icons: { [key: string]: string } = {
      'SHOPPING': '🛒',
      'FITNESS': '💪',
      'EDUCATION': '📚',
      'INVESTMENTS': '📈',
      'HEALTH': '❤️'
    };
    return icons[category] || '💰';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-sm">👤</span>
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
              <span className="text-lg">{transaction.icon || getCategoryIcon(transaction.category)}</span>
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