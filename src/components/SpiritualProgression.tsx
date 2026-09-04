import React from 'react';
import { ArrowRight, Heart, Sparkles, Sun } from 'lucide-react';

interface ProgressionStep {
  from: string;
  fromTamil: string;
  to: string;
  toTamil: string;
  icon: React.ReactNode;
  description: string;
  tamilDesc: string;
}

const shifts: ProgressionStep[] = [
  {
    from: 'Fear & Scarcity',
    fromTamil: 'பயமும் பற்றாக்குறையும்',
    to: 'Love & Trust',
    toTamil: 'அன்பும் நம்பிக்கையும்',
    icon: <Heart className="w-5 h-5 text-[#8B5A2B]" />,
    description: 'Stepping out of modern survival anxieties and hoarding mindsets into deep experiential trust in the abundance of living nature.',
    tamilDesc: 'நாளைய கவலைகளைத் துறந்து இயற்கையின் எல்லையற்ற கொடையை உணர்தல்.'
  },
  {
    from: 'Separation & Isolation',
    fromTamil: 'பிரிவும் தனிமையும்',
    to: 'Unity & Interconnectedness',
    toTamil: 'ஒருமைப்பாடும் இயைபும்',
    icon: <Sun className="w-5 h-5 text-[#2E4F2B]" />,
    description: 'Dissolving the synthetic ego illusion that humans stand apart from trees, soil, waters, and fellow beings.',
    tamilDesc: 'மனிதன் இயற்கையிலிருந்து வேறுபட்டவன் அல்ல, அதன் ஒரு பகுதியே என்பதை அறிதல்.'
  },
  {
    from: 'Survival & Competition',
    fromTamil: 'போராட்டமும் பிழைப்பும்',
    to: 'Creation & Sacred Contribution',
    toTamil: 'படைப்பாற்றலும் அறப்பணியும்',
    icon: <Sparkles className="w-5 h-5 text-[#8B5A2B]" />,
    description: 'Moving beyond exhausting consumer rat-races toward joyful collective service, regenerative crafting, and shared spiritual peace.',
    tamilDesc: 'வெறும் பிழைப்புக்கான ஓட்டத்தை நிறுத்தி, நல்வாழ்விற்கான கூட்டுப் படைப்பைத் தொடங்குதல்.'
  }
];

export const SpiritualProgression: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {shifts.map((shift, idx) => (
          <div
            key={idx}
            className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-xs hover:border-[#2E4F2B]/50 transition-colors"
          >
            {/* Visual Shift Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#8B5A2B] bg-[#ECE6D8] px-2.5 py-1 rounded-md border border-[#D4C5A9]">
                  Stage 0{idx + 1}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#ECE6D8] flex items-center justify-center">
                  {shift.icon}
                </div>
              </div>

              {/* Visual From -> To pill */}
              <div className="p-3 bg-[#ECE6D8]/50 rounded-xl border border-[#D4C5A9]/60 flex items-center justify-between text-xs font-serif">
                <div className="text-[#5C5044] line-through decoration-[#8B5A2B]/60">
                  <div className="font-semibold">{shift.from}</div>
                  <div className="text-[10px] font-tamil">{shift.fromTamil}</div>
                </div>

                <div className="px-2">
                  <ArrowRight className="w-4 h-4 text-[#2E4F2B]" />
                </div>

                <div className="text-[#2E4F2B] text-right font-bold">
                  <div>{shift.to}</div>
                  <div className="text-[10px] font-tamil text-[#8B5A2B]">{shift.toTamil}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5 text-xs text-[#5C5044] font-sans">
              <p className="leading-relaxed text-[#241D17]">
                {shift.description}
              </p>
              <p className="text-[11px] font-tamil text-[#8B5A2B] leading-relaxed">
                {shift.tamilDesc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
