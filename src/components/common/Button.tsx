import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-serif font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none tracking-wider text-xs uppercase';

  const variantStyles = {
    primary: 'bg-[#1b331b] hover:bg-[#122412] text-[#faf6eb] shadow-xs hover:shadow-sm',
    secondary: 'bg-[#6b2816] hover:bg-[#501d0f] text-[#faf6eb] shadow-xs hover:shadow-sm',
    outline: 'border border-[#6b2816]/30 text-[#261a12] hover:bg-[#6b2816]/5 hover:border-[#6b2816]/60',
    ghost: 'text-[#261a12] hover:text-[#6b2816] hover:bg-black/5',
    gold: 'bg-[#c49a38] hover:bg-[#b0872c] text-[#122412] font-bold shadow-xs hover:shadow-sm',
  };

  const sizeStyles = {
    sm: 'min-h-[38px] px-4 py-2 text-[11px] rounded-lg',
    md: 'min-h-[44px] px-5 py-2.5 text-xs rounded-xl',
    lg: 'min-h-[48px] px-7 py-3 text-xs rounded-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};
