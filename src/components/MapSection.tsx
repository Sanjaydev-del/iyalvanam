import React from 'react';
import { Compass, Train, Plane, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MapSection: React.FC = () => {
  const { content, language } = useLanguage();
  const land = content.land;

  return (
    <div className="w-full bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl overflow-hidden shadow-xs">
      
      {/* Top Header */}
      <div className="p-6 sm:p-8 border-b border-[#D4C5A9]/50 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className={`flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
            <Compass className="w-3.5 h-3.5 text-[#2E4F2B]" />
            <span>{land.badge}</span>
          </div>
          <h3 className={`text-xl sm:text-2xl font-bold text-[#2E4F2B] ${language === 'ta' ? 'font-tamil' : 'font-serif-heading'}`}>
            {land.heading}
          </h3>
          <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${language === 'ta' ? 'font-tamil' : 'font-sans'}`}>
            {land.subheading}
          </p>
        </div>

        <div className="shrink-0 p-3 bg-[#ECE6D8] rounded-xl border border-[#D4C5A9] text-xs font-serif text-[#2E4F2B]">
          <div className="font-bold">{land.coordinatesLabel}</div>
          <div className="text-[11px] text-[#8B5A2B] font-mono">8.7055° N, 77.3468° E</div>
          <div className={`text-[10px] text-[#5C5044] ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>{land.coordinatesDistrict}</div>
        </div>
      </div>

      {/* Map Embed Container */}
      <div className="relative w-full h-80 sm:h-96 lg:h-[420px] bg-[#ECE6D8]">
        <iframe
          title="Iyalvanam Sanctuary Location - Sivasailam, Tenkasi"
          src="https://maps.google.com/maps?q=Sivasailam,%20Tenkasi,%20Tamil%20Nadu&t=&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter contrast-[0.95] opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Access Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#D4C5A9]/50 bg-[#FAF8F3] text-xs font-sans">
        
        <div className="p-5 space-y-2">
          <div className={`flex items-center gap-2 font-bold text-[#2E4F2B] ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
            <Train className="w-4 h-4 text-[#8B5A2B]" />
            <span>{land.railTitle}</span>
          </div>
          <p className={`text-[#5C5044] leading-relaxed ${language === 'ta' ? 'font-tamil' : 'font-sans'}`}>
            {land.railDesc}
          </p>
        </div>

        <div className="p-5 space-y-2">
          <div className={`flex items-center gap-2 font-bold text-[#2E4F2B] ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
            <Plane className="w-4 h-4 text-[#8B5A2B]" />
            <span>{land.airTitle}</span>
          </div>
          <p className={`text-[#5C5044] leading-relaxed ${language === 'ta' ? 'font-tamil' : 'font-sans'}`}>
            {land.airDesc}
          </p>
        </div>

        <div className="p-5 space-y-2">
          <div className={`flex items-center gap-2 font-bold text-[#2E4F2B] ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
            <Navigation className="w-4 h-4 text-[#8B5A2B]" />
            <span>{land.ecoTitle}</span>
          </div>
          <p className={`text-[#5C5044] leading-relaxed ${language === 'ta' ? 'font-tamil' : 'font-sans'}`}>
            {land.ecoDesc}
          </p>
        </div>

      </div>

    </div>
  );
};
