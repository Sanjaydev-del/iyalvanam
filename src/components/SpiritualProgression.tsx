import React from 'react';
import { ArrowRight, Heart, Sparkles, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SpiritualProgression: React.FC = () => {
  const { content, language } = useLanguage();
  const isTamil = language === 'ta';

  const icons = [
    <Heart key="heart" className="w-5 h-5 text-[#8B5A2B]" />,
    <Sun key="sun" className="w-5 h-5 text-[#2E4F2B]" />,
    <Sparkles key="sparkles" className="w-5 h-5 text-[#8B5A2B]" />
  ];

  return (
    <div className="w-full relative">
      {/* Connected Line on Desktop */}
      <div className="hidden md:block absolute top-12 left-16 right-16 h-0.5 bg-[#D4C5A9]/70 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {content.spiritual.shifts.map((shift, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-4 relative"
          >
            {/* Step Node Marker */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#2E4F2B] flex items-center justify-center shadow-xs shrink-0">
                {icons[idx]}
              </div>
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-bold">
                {shift.stage}
              </span>
            </div>

            {/* Shift Stepper Card */}
            <div className="p-6 bg-[#FAF8F3] border border-[#D4C5A9]/70 rounded-xl space-y-4 hover:border-[#2E4F2B]/40 transition-colors shadow-2xs flex-1 flex flex-col justify-between">
              
              {/* Transition Indicator */}
              <div className="flex items-center justify-between pb-3 border-b border-[#D4C5A9]/40 text-xs">
                <span className={`text-[#7E7163] line-through decoration-[#8B5A2B]/60 font-medium ${isTamil ? 'font-tamil' : 'font-serif'}`}>
                  {shift.from}
                </span>
                <ArrowRight className="w-4 h-4 text-[#2E4F2B] shrink-0 mx-2" />
                <span className={`text-[#2E4F2B] font-bold ${isTamil ? 'font-tamil text-[#8B5A2B]' : 'font-serif'}`}>
                  {shift.to}
                </span>
              </div>

              {/* Description */}
              <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${isTamil ? 'font-tamil' : 'font-sans'}`}>
                {shift.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
