import React from 'react';
import { Compass, Train, Plane, Navigation, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MapSection: React.FC = () => {
  const { content, language } = useLanguage();
  const land = content.land;
  const isTamil = language === 'ta';

  return (
    <div className="w-full space-y-8">
      
      {/* Editorial Destination Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D4C5A9]">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B5A2B] font-bold">
            <Compass className="w-4 h-4 text-[#2E4F2B]" />
            <span>{land.badge}</span>
          </div>
          <h3 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] leading-tight ${isTamil ? 'font-tamil' : 'font-serif-heading'}`}>
            {land.heading}
          </h3>
          <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${isTamil ? 'font-tamil' : 'font-sans'}`}>
            {land.subheading}
          </p>
        </div>

        <div className="shrink-0 p-4 bg-[#ECE6D8] border border-[#D4C5A9] rounded-xl text-xs space-y-1">
          <div className="font-serif font-bold text-[#2E4F2B]">{land.coordinatesLabel}</div>
          <div className="font-mono text-sm text-[#8B5A2B] font-bold">8.7055° N, 77.3468° E</div>
          <div className={`text-[11px] text-[#5C5044] ${isTamil ? 'font-tamil' : 'font-serif'}`}>{land.coordinatesDistrict}</div>
        </div>
      </div>

      {/* Asymmetric Showcase: Western Ghats Landscape Photo + Interactive Map Embed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Landscape Photo Atmosphere */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#D4C5A9] shadow-xs min-h-[280px] lg:min-h-full bg-[#ECE6D8]">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80"
            alt="Sivasailam Western Ghats mountain river and foothills"
            className="w-full h-full object-cover filter contrast-[0.97]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F3] space-y-1">
            <span className="text-xs font-serif font-bold tracking-wider uppercase text-[#D4C5A9] block">
              Western Ghats Foothills
            </span>
            <p className="text-xs text-[#F5F2EB]/90 leading-snug">
              Gadananathi river basin • Forest aquifers fed directly by Agasthiyarmalai rains.
            </p>
          </div>
        </div>

        {/* Real Interactive Map */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D4C5A9] shadow-xs bg-[#ECE6D8] min-h-[320px] lg:min-h-[420px]">
          <iframe
            title="Iyalvanam Sanctuary Location - Sivasailam, Tenkasi"
            src="https://maps.google.com/maps?q=Sivasailam,%20Tenkasi,%20Tamil%20Nadu&t=&z=12&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '320px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter contrast-[0.95] opacity-95 hover:opacity-100 transition-opacity"
          />
        </div>

      </div>

      {/* Travel Logistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs">
        
        <div className="p-5 bg-[#FAF8F3] border border-[#D4C5A9]/70 rounded-xl space-y-2">
          <div className={`flex items-center gap-2 font-bold text-[#2E4F2B] text-sm ${isTamil ? 'font-tamil' : 'font-serif'}`}>
            <Train className="w-4 h-4 text-[#8B5A2B]" />
            <span>{land.railTitle}</span>
          </div>
          <p className={`text-[#5C5044] leading-relaxed ${isTamil ? 'font-tamil' : 'font-sans'}`}>
            {land.railDesc}
          </p>
        </div>

        <div className="p-5 bg-[#FAF8F3] border border-[#D4C5A9]/70 rounded-xl space-y-2">
          <div className={`flex items-center gap-2 font-bold text-[#2E4F2B] text-sm ${isTamil ? 'font-tamil' : 'font-serif'}`}>
            <Plane className="w-4 h-4 text-[#8B5A2B]" />
            <span>{land.airTitle}</span>
          </div>
          <p className={`text-[#5C5044] leading-relaxed ${isTamil ? 'font-tamil' : 'font-sans'}`}>
            {land.airDesc}
          </p>
        </div>

        <div className="p-5 bg-[#FAF8F3] border border-[#D4C5A9]/70 rounded-xl space-y-2">
          <div className={`flex items-center gap-2 font-bold text-[#2E4F2B] text-sm ${isTamil ? 'font-tamil' : 'font-serif'}`}>
            <Navigation className="w-4 h-4 text-[#8B5A2B]" />
            <span>{land.ecoTitle}</span>
          </div>
          <p className={`text-[#5C5044] leading-relaxed ${isTamil ? 'font-tamil' : 'font-sans'}`}>
            {land.ecoDesc}
          </p>
        </div>

      </div>

    </div>
  );
};
