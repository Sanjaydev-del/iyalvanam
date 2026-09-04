import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PrinciplesAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['principle-1']);
  const { content, language } = useLanguage();

  const toggleItem = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isTamil = language === 'ta';

  return (
    <div className="w-full divide-y divide-[#D4C5A9]/60 border-y border-[#D4C5A9]/60" role="region" aria-label="Core Principles of Iyalvanam">
      {content.principles.items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="group transition-colors">
            <button
              id={`header-${item.id}`}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`content-${item.id}`}
              className="w-full py-5 sm:py-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F3]/50 transition-colors focus:outline-none focus:ring-1 focus:ring-[#2E4F2B]/40"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                <span className="font-serif font-bold text-xs sm:text-sm text-[#8B5A2B] tracking-widest min-w-[24px]">
                  {item.number}
                </span>
                <h4 className={`font-bold text-base sm:text-lg lg:text-xl text-[#2E4F2B] group-hover:text-[#1A3018] transition-colors ${
                  isTamil ? 'font-tamil' : 'font-serif-heading'
                }`}>
                  {item.title}
                </h4>
              </div>

              <div className="shrink-0 pt-1 sm:pt-0">
                <div className={`w-8 h-8 rounded-full border border-[#D4C5A9] flex items-center justify-center text-[#2E4F2B] transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-[#2E4F2B] text-[#FAF8F3] border-transparent' : 'bg-transparent'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {isOpen && (
              <div
                id={`content-${item.id}`}
                role="region"
                aria-labelledby={`header-${item.id}`}
                className="pb-6 pl-10 sm:pl-12 pr-4 text-xs sm:text-sm space-y-2.5 animate-fadeIn"
              >
                <p className={`font-semibold text-[#241D17] ${isTamil ? 'font-tamil' : 'font-sans'}`}>
                  {item.summary}
                </p>
                <p className={`leading-relaxed text-[#5C5044] max-w-3xl ${isTamil ? 'font-tamil' : 'font-sans'}`}>
                  {item.details}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
