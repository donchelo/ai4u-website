import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border border-mint-cream hover:shadow-lg transition-all ${className}`}>
      {children}
    </div>
  );
};

export default Card; 