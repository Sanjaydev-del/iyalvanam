import React from 'react';
import { Shield, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustDiagram: React.FC = () => {
  const { content, language } = useLanguage();
  const gov = content.governance;

  return (
    <div className="w-full bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8 shadow-xs">
      {/* Header explanation */}
      <div className="max-w-2xl space-y-2">
        <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
          {gov.badge}
        </span>
        <h3 className={`text-xl sm:text-2xl font-bold text-[#2E4F2B] ${language === 'ta' ? 'font-tamil' : 'font-serif-heading'}`}>
          {gov.heading}
        </h3>
        <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${language === 'ta' ? 'font-tamil' : 'font-sans'}`}>
          {gov.subheading}
        </p>
      </div>

      {/* Visual Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch relative">
        
        {/* Trust 1: Iyalvanam Asset Trust */}
        <div className="bg-[#ECE6D8]/50 border-2 border-[#2E4F2B]/30 rounded-xl p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2E4F2B] text-[#FAF8F3] rounded-md text-[11px] uppercase tracking-wider font-semibold">
              <Shield className="w-3.5 h-3.5 text-[#D4C5A9]" />
              <span className={language === 'ta' ? 'font-tamil' : 'font-serif'}>{gov.assetTrustBadge}</span>
            </div>

            <h4 className={`text-lg sm:text-xl font-bold text-[#2E4F2B] ${language === 'ta' ? 'font-tamil' : 'font-serif-heading'}`}>
              {gov.assetTrustTitle}
            </h4>

            <ul className="space-y-2 text-xs text-[#241D17] pt-2">
              {gov.assetTrustPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B] mt-1.5 shrink-0" />
                  <span className={language === 'ta' ? 'font-tamil' : 'font-sans'}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-3 bg-[#FAF8F3] rounded-lg border border-[#D4C5A9]/50 text-[11px] text-[#5C5044] italic ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
            {gov.assetTrustQuote}
          </div>
        </div>

        {/* Trust 2: SEYON Nature Life Foundation */}
        <div className="bg-[#ECE6D8]/50 border-2 border-[#8B5A2B]/30 rounded-xl p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B5A2B] text-[#FAF8F3] rounded-md text-[11px] uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4C5A9]" />
              <span className={language === 'ta' ? 'font-tamil' : 'font-serif'}>{gov.operationalTrustBadge}</span>
            </div>

            <h4 className={`text-lg sm:text-xl font-bold text-[#8B5A2B] ${language === 'ta' ? 'font-tamil' : 'font-serif-heading'}`}>
              {gov.operationalTrustTitle}
            </h4>

            <ul className="space-y-2 text-xs text-[#241D17] pt-2">
              {gov.operationalTrustPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B] mt-1.5 shrink-0" />
                  <span className={language === 'ta' ? 'font-tamil' : 'font-sans'}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-3 bg-[#FAF8F3] rounded-lg border border-[#D4C5A9]/50 text-[11px] text-[#5C5044] italic ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
            {gov.operationalTrustQuote}
          </div>
        </div>

      </div>

      {/* Consensus Governance Foundation */}
      <div className="bg-[#2E4F2B] text-[#FAF8F3] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#D4C5A9]" />
            <span className={`font-bold text-sm sm:text-base ${language === 'ta' ? 'font-tamil' : 'font-serif-heading'}`}>
              {gov.consensusTitle}
            </span>
          </div>
          <p className={`text-xs text-[#F5F2EB]/80 max-w-2xl ${language === 'ta' ? 'font-tamil' : 'font-sans'}`}>
            {gov.consensusDesc}
          </p>
        </div>
        <div className={`shrink-0 text-xs font-semibold text-[#D4C5A9] border border-[#D4C5A9]/30 rounded-lg px-3 py-1.5 bg-[#1E351C] ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
          {gov.consensusBadge}
        </div>
      </div>
    </div>
  );
};
