import React from 'react';
import { ArrowRight, Heart, Sparkles, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SpiritualProgression: React.FC = () => {
  const { content, language } = useLanguage();

  const icons = [
    <Heart key="heart" className="w-5 h-5 text-[#8B5A2B]" />,
    <Sun key="sun" className="w-5 h-5 text-[#2E4F2B]" />,
    <Sparkles key="sparkles" className="w-5 h-5 text-[#8B5A2B]" />
  ];

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {content.spiritual.shifts.map((shift, idx) => (
          <div
            key={idx}
            className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-xs hover:border-[#2E4F2B]/50 transition-colors"
          >
            {/* Visual Shift Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#8B5A2B] bg-[#ECE6D8] px-2.5 py-1 rounded-md border border-[#D4C5A9]">
                  {shift.stage}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#ECE6D8] flex items-center justify-center">
                  {icons[idx]}
                </div>
              </div>

              {/* Visual From -> To pill */}
              <div className="p-3 bg-[#ECE6D8]/50 rounded-xl border border-[#D4C5A9]/60 flex items-center justify-between text-xs">
                <div className={`text-[#5C5044] line-through decoration-[#8B5A2B]/60 font-semibold ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
                  {shift.from}
                </div>

                <div className="px-2">
                  <ArrowRight className="w-4 h-4 text-[#2E4F2B]" />
                </div>

                <div className={`text-[#2E4F2B] text-right font-bold ${language === 'ta' ? 'font-tamil text-[#8B5A2B]' : 'font-serif'}`}>
                  {shift.to}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5 text-xs text-[#5C5044]">
              <p className={`leading-relaxed text-[#241D17] ${language === 'ta' ? 'font-tamil' : 'font-sans'}`}>
                {shift.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
