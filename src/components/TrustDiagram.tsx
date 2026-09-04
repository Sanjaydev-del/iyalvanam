import React from 'react';
import { Shield, Sparkles, Users, ArrowDown, ArrowRight } from 'lucide-react';

export const TrustDiagram: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8 shadow-xs">
      {/* Header explanation */}
      <div className="max-w-2xl space-y-2">
        <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
          Dual Trust Structure • இரட்டை அறக்கட்டளை கட்டமைப்பு
        </span>
        <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#2E4F2B]">
          Separating Perpetual Ownership from Operational Stewardship
        </h3>
        <p className="text-xs sm:text-sm text-[#5C5044] font-sans leading-relaxed">
          To prevent commercial exploitation, speculative resale, and centralized power, Iyalvanam is architected under two legally independent trusts that balance and protect each other.
        </p>
      </div>

      {/* Visual Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch relative">
        
        {/* Trust 1: Iyalvanam Asset Trust */}
        <div className="bg-[#ECE6D8]/50 border-2 border-[#2E4F2B]/30 rounded-xl p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2E4F2B] text-[#FAF8F3] rounded-md text-[11px] font-serif uppercase tracking-wider font-semibold">
              <Shield className="w-3.5 h-3.5 text-[#D4C5A9]" />
              <span>Asset Holding Custodian</span>
            </div>

            <h4 className="text-lg sm:text-xl font-serif-heading font-bold text-[#2E4F2B]">
              IYALVANAM Asset Trust
            </h4>
            <p className="text-xs font-tamil text-[#8B5A2B] font-medium">
              இயல்வனம் நிலப் பாதுகாப்பு அறக்கட்டளை
            </p>

            <ul className="space-y-2 text-xs text-[#241D17] font-sans pt-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B] mt-1.5 shrink-0" />
                <span>Holds sanctuary land in <strong>perpetual trust</strong> for nature and future generations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B] mt-1.5 shrink-0" />
                <span><strong>No private plots:</strong> Land cannot be partitioned, sold, mortgaged, or commercialized.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B] mt-1.5 shrink-0" />
                <span>Protects water sources, indigenous flora, and wildlife habitats unconditionally.</span>
              </li>
            </ul>
          </div>

          <div className="p-3 bg-[#FAF8F3] rounded-lg border border-[#D4C5A9]/50 text-[11px] text-[#5C5044] font-serif italic">
            "The land belongs to nature. Humans are merely its grateful temporary stewards."
          </div>
        </div>

        {/* Trust 2: SEYON Nature Life Foundation */}
        <div className="bg-[#ECE6D8]/50 border-2 border-[#8B5A2B]/30 rounded-xl p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B5A2B] text-[#FAF8F3] rounded-md text-[11px] font-serif uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4C5A9]" />
              <span>Operational & Living Movement</span>
            </div>

            <h4 className="text-lg sm:text-xl font-serif-heading font-bold text-[#8B5A2B]">
              SEYON Nature Life Foundation
            </h4>
            <p className="text-xs font-tamil text-[#2E4F2B] font-medium">
              சேயோன் இயற்கை வாழ்வியல் அறக்கட்டளை
            </p>

            <ul className="space-y-2 text-xs text-[#241D17] font-sans pt-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B] mt-1.5 shrink-0" />
                <span>Conducts <strong>monthly experiential nature camps</strong> (50+ completed, 1000+ seekers).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B] mt-1.5 shrink-0" />
                <span>Facilitates daily community rhythms: farming, natural meals, well water, and education.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B] mt-1.5 shrink-0" />
                <span>Researches natural healing food (coconut, mountain banana, non-artificial living).</span>
              </li>
            </ul>
          </div>

          <div className="p-3 bg-[#FAF8F3] rounded-lg border border-[#D4C5A9]/50 text-[11px] text-[#5C5044] font-serif italic">
            "To help people experience natural living rather than merely hear about it."
          </div>
        </div>

      </div>

      {/* Consensus Governance Foundation */}
      <div className="bg-[#2E4F2B] text-[#FAF8F3] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#D4C5A9]" />
            <span className="font-serif-heading font-bold text-sm sm:text-base">
              The Consensus Circle (ஒருமித்த கலந்தாய்வு)
            </span>
          </div>
          <p className="text-xs text-[#F5F2EB]/80 font-sans max-w-2xl">
            Major community decisions are made through non-hierarchical consensus circles under the trees. No simple majority voting that creates winners and losers — only transparent dialogue until collective harmony is achieved.
          </p>
        </div>
        <div className="shrink-0 text-xs font-serif font-semibold text-[#D4C5A9] border border-[#D4C5A9]/30 rounded-lg px-3 py-1.5 bg-[#1E351C]">
          Non-Hierarchical
        </div>
      </div>
    </div>
  );
};
