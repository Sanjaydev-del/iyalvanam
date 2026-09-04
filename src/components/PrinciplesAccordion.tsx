import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface PrincipleItem {
  id: string;
  number: string;
  title: string;
  titleTamil: string;
  summary: string;
  details: string;
}

const principles: PrincipleItem[] = [
  {
    id: 'principle-1',
    number: '01',
    title: 'The Primacy of Natural Law',
    titleTamil: 'இயற்கை விதிகளே முதன்மையானவை',
    summary: 'Human systems must adapt to ecological law, not force nature to bend to industrial convenience.',
    details: 'Everything in the sanctuary — from sleep cycles to waste management — honors the immutable laws of nature. We do not try to engineer synthetic shortcuts around biological realities.'
  },
  {
    id: 'principle-2',
    number: '02',
    title: 'Land as Sacred Commons, Never a Commodity',
    titleTamil: 'நிலம் விற்பனைப் பொருளல்ல • பொது அறம்',
    summary: 'Land cannot be owned as private speculative property. It is held in trust for generations to come.',
    details: 'By separating perpetual land ownership under Iyalvanam Asset Trust, we remove the corrupting incentives of real estate speculation, parcel fragmentation, and landlord exploitation.'
  },
  {
    id: 'principle-3',
    number: '03',
    title: 'Food as Living Medicine & Sovereignty',
    titleTamil: 'உணவே மருந்து • நஞ்சில்லா விவசாயம்',
    summary: 'We nourish our bodies strictly with non-artificial, heirloom, seasonal produce grown without chemicals.',
    details: 'Traditional millets, unpolished indigenous rice varieties, mountain bananas, fresh coconut, and native greens harvested at peak vitality form our daily sustenance. Health is the natural state of clean nourishment.'
  },
  {
    id: 'principle-4',
    number: '04',
    title: 'Low-Impact Earthen & Stone Architecture',
    titleTamil: 'சுற்றுச்சூழல் உகந்த மண் மற்றும் கல் வீடுகள்',
    summary: 'Structures built from local clay, lime, stone, bamboo, and terracotta that breathe with the climate.',
    details: 'Every home and communal shelter is built without toxic cement, artificial paints, or energy-intensive materials. When a dwelling has completed its generational purpose, it can dissolve gently back into the earth.'
  },
  {
    id: 'principle-5',
    number: '05',
    title: 'Consensus Decision Making Over Coercion',
    titleTamil: 'ஒருமித்த கருத்தே எமது நிர்வாக நெறி',
    summary: 'We discard adversarial majority voting in favor of patience, deep listening, and unified consensus.',
    details: 'Decisions impacting the collective commons are discussed in open circles until every steward understands and consents. Disagreements are met with dialogue, not political domination.'
  },
  {
    id: 'principle-6',
    number: '06',
    title: 'Decentralized Energy & Clean Water Autonomy',
    titleTamil: 'சூரிய ஆற்றல் & தூய திறந்த கிணற்று நீர்',
    summary: 'Self-reliance through solar micro-grids, open well rainwater harvesting, and dry compost systems.',
    details: 'We preserve every drop of pristine Western Ghats rain through deep open wells, mulching, and swales. Human waste is composted safely into microbial humus for agroforestry rather than polluting water bodies.'
  },
  {
    id: 'principle-7',
    number: '07',
    title: 'Intergenerational Wisdom & Natural Childhood',
    titleTamil: 'இயற்கையோடு இணைந்த தலைமுறைக் கல்வி',
    summary: 'Children learn in direct contact with forest, soil, animals, manual crafts, and elders.',
    details: 'Education is unhooked from stressful corporate competition and artificial rote memorization. Children develop physical vitality, emotional stability, problem-solving, and deep reverence for life.'
  },
  {
    id: 'principle-8',
    number: '08',
    title: 'Non-Injury and Conscious Simplicity (Ahimsa)',
    titleTamil: 'அகிம்சை & எளிய வாழ்வியல் நெறி',
    summary: 'Living lightly with minimal consumer possessions, radical honesty, and reverence for all living beings.',
    details: 'True wealth is measured not by accumulated commodities or bank accounts, but by the abundance of clean water, healthy soil, joyous relationships, peaceful minds, and natural freedom.'
  }
];

export const PrinciplesAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['principle-1']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full space-y-3" role="region" aria-label="Core Principles of Iyalvanam">
      {principles.map((item) => {
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
                  <h4 className="font-serif-heading font-bold text-sm sm:text-base text-[#2E4F2B]">
                    {item.title}
                  </h4>
                  <span className="text-[11px] font-tamil text-[#8B5A2B] font-medium block">
                    {item.titleTamil}
                  </span>
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
                className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C5044] font-sans border-t border-[#D4C5A9]/40 space-y-2 bg-[#FAF8F3]"
              >
                <p className="font-medium text-[#241D17]">
                  {item.summary}
                </p>
                <p className="leading-relaxed text-[#5C5044]">
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
