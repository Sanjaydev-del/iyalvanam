import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => {
  const sizeClasses = {
    narrow: 'max-w-[880px]',
    default: 'max-w-[1240px]',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 box-border ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};
