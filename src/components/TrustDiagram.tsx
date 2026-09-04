import React from 'react';
import { Shield, Sparkles, Users, ArrowDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustDiagram: React.FC = () => {
  const { content, language } = useLanguage();
  const gov = content.governance;
  const isTamil = language === 'ta';

  return (
    <div className="w-full bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs">
      
      {/* Editorial Header */}
      <div className="max-w-2xl space-y-2">
        <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${isTamil ? 'font-tamil' : 'font-serif'}`}>
          {gov.badge}
        </span>
        <h3 className={`text-2xl sm:text-3xl font-bold text-[#2E4F2B] ${isTamil ? 'font-tamil' : 'font-serif-heading'}`}>
          {gov.heading}
        </h3>
        <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${isTamil ? 'font-tamil' : 'font-sans'}`}>
          {gov.subheading}
        </p>
      </div>

      {/* Structural Architectural Flowchart Diagram */}
      <div className="space-y-6">
        
        {/* Top Sacred Commons Boundary */}
        <div className="p-4 bg-[#ECE6D8] border border-[#D4C5A9] rounded-xl text-center space-y-1">
          <span className="text-[10px] font-serif uppercase tracking-widest text-[#8B5A2B] font-bold">
            The Sacred Land & Nature Commons • மேற்குத் தொடர்ச்சி மலை
          </span>
          <div className={`text-sm sm:text-base font-bold text-[#2E4F2B] ${isTamil ? 'font-tamil' : 'font-serif-heading'}`}>
            Perpetual Nature Sanctuary (Tenkasi District)
          </div>
        </div>

        {/* Dual Flow Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
          
          {/* Node 1: IYALVANAM Asset Trust */}
          <div className="p-6 sm:p-8 bg-[#FAF8F3] border-2 border-[#2E4F2B]/40 rounded-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#2E4F2B] font-bold">
                <Shield className="w-4 h-4 text-[#8B5A2B]" />
                <span>{gov.assetTrustBadge}</span>
              </div>
              <h4 className={`text-lg sm:text-xl font-bold text-[#2E4F2B] ${isTamil ? 'font-tamil' : 'font-serif-heading'}`}>
                {gov.assetTrustTitle}
              </h4>

              <ul className="space-y-2 text-xs text-[#241D17] pt-1">
                {gov.assetTrustPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B] mt-1.5 shrink-0" />
                    <span className={isTamil ? 'font-tamil' : 'font-sans'}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-3 bg-[#ECE6D8]/50 border-l-2 border-[#2E4F2B] rounded-r-lg text-xs text-[#5C5044] italic ${isTamil ? 'font-tamil' : 'font-serif'}`}>
              {gov.assetTrustQuote}
            </div>
          </div>

          {/* Node 2: SEYON Nature Life Foundation */}
          <div className="p-6 sm:p-8 bg-[#FAF8F3] border-2 border-[#8B5A2B]/40 rounded-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#8B5A2B] font-bold">
                <Sparkles className="w-4 h-4 text-[#2E4F2B]" />
                <span>{gov.operationalTrustBadge}</span>
              </div>
              <h4 className={`text-lg sm:text-xl font-bold text-[#8B5A2B] ${isTamil ? 'font-tamil' : 'font-serif-heading'}`}>
                {gov.operationalTrustTitle}
              </h4>

              <ul className="space-y-2 text-xs text-[#241D17] pt-1">
                {gov.operationalTrustPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B] mt-1.5 shrink-0" />
                    <span className={isTamil ? 'font-tamil' : 'font-sans'}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-3 bg-[#ECE6D8]/50 border-l-2 border-[#8B5A2B] rounded-r-lg text-xs text-[#5C5044] italic ${isTamil ? 'font-tamil' : 'font-serif'}`}>
              {gov.operationalTrustQuote}
            </div>
          </div>

        </div>

        {/* Central Foundation Node: The Consensus Circle */}
        <div className="p-6 sm:p-8 bg-[#2E4F2B] text-[#FAF8F3] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-[#D4C5A9]" />
              <h4 className={`text-base sm:text-lg font-bold text-[#FAF8F3] ${isTamil ? 'font-tamil' : 'font-serif-heading'}`}>
                {gov.consensusTitle}
              </h4>
            </div>
            <p className={`text-xs sm:text-sm text-[#F5F2EB]/80 leading-relaxed ${isTamil ? 'font-tamil' : 'font-sans'}`}>
              {gov.consensusDesc}
            </p>
          </div>

          <div className="shrink-0 px-4 py-2 bg-[#122210] text-[#D4C5A9] border border-[#D4C5A9]/30 rounded-lg text-xs font-serif font-bold uppercase tracking-wider">
            {gov.consensusBadge}
          </div>
        </div>

      </div>

    </div>
  );
};
