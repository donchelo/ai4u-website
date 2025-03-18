import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  // Base classes
  let baseClasses = 'font-redhat font-semibold rounded-lg transition-all focus:outline-none';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-hot-orange text-white hover:bg-hot-orange/90',
    secondary: 'bg-moderate-blue text-white hover:bg-moderate-blue/90',
    outline: 'border-2 border-hot-orange text-hot-orange hover:bg-hot-orange/10',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-small',
    md: 'px-6 py-3 text-body',
    lg: 'px-8 py-4 text-body',
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button; 