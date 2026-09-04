import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', size = 'sm' }) => {
  const { language, setLanguage } = useLanguage();

  const isSmall = size === 'sm';

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center bg-[#ECE6D8] border border-[#D4C5A9] rounded-lg p-0.5 select-none shadow-2xs ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`${
          isSmall ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs'
        } font-serif font-bold rounded-md transition-all duration-150 cursor-pointer ${
          language === 'en'
            ? 'bg-[#2E4F2B] text-[#FAF8F3] shadow-xs'
            : 'text-[#5C5044] hover:text-[#2E4F2B] hover:bg-[#FAF8F3]/60'
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('ta')}
        aria-pressed={language === 'ta'}
        className={`${
          isSmall ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs'
        } font-tamil font-bold rounded-md transition-all duration-150 cursor-pointer ${
          language === 'ta'
            ? 'bg-[#2E4F2B] text-[#FAF8F3] shadow-xs'
            : 'text-[#5C5044] hover:text-[#2E4F2B] hover:bg-[#FAF8F3]/60'
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
};
