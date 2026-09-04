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

  return (
    <div className="w-full space-y-3" role="region" aria-label="Core Principles of Iyalvanam">
      {content.principles.items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className="border border-[#D4C5A9]/70 rounded-xl overflow-hidden bg-[#FAF8F3] transition-colors"
          >
            <button
              id={`header-${item.id}`}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`content-${item.id}`}
              className="w-full px-5 py-4 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#ECE6D8]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E4F2B]/40"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <span className="font-serif font-bold text-xs sm:text-sm text-[#8B5A2B] px-2 py-0.5 rounded bg-[#ECE6D8] border border-[#D4C5A9]">
                  {item.number}
                </span>
                <div>
                  <h4 className={`font-bold text-sm sm:text-base text-[#2E4F2B] ${language === 'ta' ? 'font-tamil' : 'font-serif-heading'}`}>
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="shrink-0 pt-1 sm:pt-0">
                <div className={`w-7 h-7 rounded-full bg-[#ECE6D8] flex items-center justify-center text-[#2E4F2B] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#2E4F2B] text-[#FAF8F3]' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {isOpen && (
              <div
                id={`content-${item.id}`}
                role="region"
                aria-labelledby={`header-${item.id}`}
                className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C5044] border-t border-[#D4C5A9]/40 space-y-2 bg-[#FAF8F3]"
              >
                <p className={`font-medium text-[#241D17] ${language === 'ta' ? 'font-tamil' : 'font-sans'}`}>
                  {item.summary}
                </p>
                <p className={`leading-relaxed text-[#5C5044] ${language === 'ta' ? 'font-tamil' : 'font-sans'}`}>
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
