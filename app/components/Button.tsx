import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-lg font-semibold text-white transition-all hover:scale-105 ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-[#1BB69B] to-[#31B979]'
          : 'bg-[#EE4A62]'
      } ${className}`}
    >
      {children}
    </button>
  );
}
