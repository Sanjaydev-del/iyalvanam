import React from 'react';
import { MapPin, Navigation, Train, Plane, Compass } from 'lucide-react';

export const MapSection: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl overflow-hidden shadow-xs">
      
      {/* Top Header */}
      <div className="p-6 sm:p-8 border-b border-[#D4C5A9]/50 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#2E4F2B]" />
            <span>Western Ghats Foothills • Agasthiyarmalai Biosphere</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#2E4F2B]">
            Sacred Land at Dharmapuramadam & Sivasailam
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5044] font-sans leading-relaxed">
            Nestled in Tenkasi District, Tamil Nadu, where pristine river waters flow directly from the mountains. An unpolluted sanctuary shielded from industrial noise and chemical agriculture.
          </p>
        </div>

        <div className="shrink-0 p-3 bg-[#ECE6D8] rounded-xl border border-[#D4C5A9] text-xs font-serif text-[#2E4F2B]">
          <div className="font-bold">Coordinates:</div>
          <div className="text-[11px] text-[#8B5A2B] font-mono">8.7055° N, 77.3468° E</div>
          <div className="text-[10px] text-[#5C5044]">Tenkasi District, TN</div>
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
          <div className="flex items-center gap-2 font-serif font-bold text-[#2E4F2B]">
            <Train className="w-4 h-4 text-[#8B5A2B]" />
            <span>Railway Access</span>
          </div>
          <p className="text-[#5C5044] leading-relaxed">
            <strong>Tenkasi Junction</strong> (approx. 25 km) or <strong>Tirunelveli Junction</strong> (approx. 50 km). Local passenger trains stop at Alwarkurichi / Ambasamudram.
          </p>
        </div>

        <div className="p-5 space-y-2">
          <div className="flex items-center gap-2 font-serif font-bold text-[#2E4F2B]">
            <Plane className="w-4 h-4 text-[#8B5A2B]" />
            <span>Air Connectivity</span>
          </div>
          <p className="text-[#5C5044] leading-relaxed">
            Nearest domestic: <strong>Tuticorin Airport</strong> (approx. 85 km). International: <strong>Thiruvananthapuram (TRV)</strong> (approx. 110 km) or <strong>Madurai (IXM)</strong> (approx. 150 km).
          </p>
        </div>

        <div className="p-5 space-y-2">
          <div className="flex items-center gap-2 font-serif font-bold text-[#2E4F2B]">
            <Navigation className="w-4 h-4 text-[#8B5A2B]" />
            <span>Ecosystem Note</span>
          </div>
          <p className="text-[#5C5044] leading-relaxed">
            Fed by the Gadananathi and Thamirabarani basins with pure mountain aquifers. Visitors are requested to bring zero non-biodegradable plastic into the sanctuary.
          </p>
        </div>

      </div>

    </div>
  );
};
