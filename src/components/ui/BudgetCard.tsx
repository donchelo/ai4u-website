import React from 'react';

interface BudgetCategory {
  name: string;
  amount: number;
  color?: string;
}

interface BudgetCardProps {
  title: string;
  subtitle?: string;
  categories: BudgetCategory[];
  totalAmount?: number;
  onAddCategory?: () => void;
}

const BudgetCard: React.FC<BudgetCardProps> = ({
  title,
  subtitle,
  categories,
  totalAmount,
  onAddCategory
}) => {
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

      {/* Main Category */}
      <div className="mb-6">
        <div className="bg-yellow-400 rounded-xl p-4 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-800">FINANCIAL</span>
            <span className="text-xs font-medium text-gray-800">500.0</span>
          </div>
          <div className="flex items-center justify-center mb-2">
            <button 
              onClick={onAddCategory}
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold hover:bg-gray-700 transition-colors"
            >
              +
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-800">BUDGET</span>
            <span className="text-xs font-medium text-gray-800">500.0</span>
          </div>
        </div>
      </div>

      {/* Categories List */}
      <div className="space-y-3">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
          >
            <span className="text-sm font-medium text-gray-800">{category.name}</span>
            <span className="text-sm font-medium text-gray-800">{category.amount.toFixed(1)}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      {totalAmount && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-800">Total</span>
            <span className="text-lg font-bold text-gray-900">${totalAmount.toFixed(1)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetCard; 