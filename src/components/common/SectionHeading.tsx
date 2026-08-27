import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleTamil?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  titleTamil,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl text-left'} ${className}`}>
      {badge && (
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6b2816] font-serif block">
          {badge}
        </span>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-[#261a12] tracking-tight leading-[1.15] break-words">
        {title}
      </h2>

      {titleTamil && (
        <p className="text-xs sm:text-sm font-tamil text-[#6b2816] font-medium break-words">
          {titleTamil}
        </p>
      )}

      {subtitle && (
        <p className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed break-words pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};
