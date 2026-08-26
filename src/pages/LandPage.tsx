import React, { useState } from 'react';
import { 
  MapPin, 
  Mountain, 
  TreePine, 
  Droplets, 
  Sun, 
  Home, 
  BookOpen, 
  Utensils, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Compass,
  ArrowRight,
  Shield
} from 'lucide-react';

interface LandPageProps {
  navigate: (path: string) => void;
}

export const LandPage: React.FC<LandPageProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'in_progress' | 'planned'>('all');

  const infrastructureList = [
    {
      id: 'infra-1',
      title: 'Deep Open Well & Mountain Aquifer',
      tamil: 'பாரம்பரிய திறந்தவெளி கிணறு',
      category: 'Water',
      status: 'completed',
      statusLabel: 'Active & Pure',
      icon: <Droplets className="w-5 h-5 text-blue-600" />,
      desc: 'Traditional open stone well tapping into pure Western Ghats subterranean springs. Tested zero heavy metals or chemical runoff.',
    },
    {
      id: 'infra-2',
      title: 'Native Sapling & Fruit Forest',
      tamil: 'நாட்டு மரங்கள் & கனி வனம்',
      category: 'Agroforestry',
      status: 'in_progress',
      statusLabel: 'Phase 1 Planted',
      icon: <TreePine className="w-5 h-5 text-emerald-600" />,
      desc: 'Over 200 native species including Kadamba, Marudham, Wild Guava, Mango, Amla, and medicinal shrubs along contour swales.',
    },
    {
      id: 'infra-3',
      title: 'Community Hall (இயல்வனம் கூடம்)',
      tamil: 'மத்திய ஒன்றுகூடல் கூடம்',
      category: 'Community',
      status: 'in_progress',
      statusLabel: 'Foundation & Framing',
      icon: <Home className="w-5 h-5 text-[#c85a32]" />,
      desc: 'Spacious octagonal earthen hall with bamboo rafters, lime flooring, and terracotta roof for daily circle meetings and cultural gatherings.',
    },
    {
      id: 'infra-4',
      title: 'Communal Kitchen & Wood Hearth',
      tamil: 'கூட்டு சமையலறை & பாரம்பரிய அடுப்பு',
      category: 'Food',
      status: 'in_progress',
      statusLabel: 'In Construction',
      icon: <Utensils className="w-5 h-5 text-amber-600" />,
      desc: 'Smokeless high-efficiency earthen chulhas, solar cooking stations, and large storage for organic heirloom grains.',
    },
    {
      id: 'infra-5',
      title: 'Waterless Dry Compost Toilets',
      tamil: 'உலர் உரக் கழிவறைகள்',
      category: 'Sanitation',
      status: 'completed',
      statusLabel: 'Functional Prototype',
      icon: <Layers className="w-5 h-5 text-[#284f3e]" />,
      desc: 'Aerobic composting toilets using dry sawdust and rice husk. Conserves 100% water and safely enriches agroforestry soil after maturation.',
    },
    {
      id: 'infra-6',
      title: 'Heirloom Seed Bank & Library',
      tamil: 'பாரம்பரிய விதை வங்கி & நூலகம்',
      category: 'Education',
      status: 'planned',
      statusLabel: 'Planned (₹25L Goal)',
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      desc: 'Cool earthen vault storing indigenous Tamil Nadu paddy, millet, pulses, and vegetable varieties, alongside nature study literature.',
    },
    {
      id: 'infra-7',
      title: 'Decentralized Solar Micro-Grid',
      tamil: 'சூரிய சக்தி மைக்ரோ கிரிட்',
      category: 'Energy',
      status: 'planned',
      statusLabel: 'Planned (₹25L Goal)',
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      desc: 'Off-grid rooftop solar array and battery storage powering water pumping, lighting, communication, and essential workshop tools.',
    },
    {
      id: 'infra-8',
      title: 'Rainwater Harvesting Swales & Ponds',
      tamil: 'மழைநீர் சேகரிப்பு குளங்கள்',
      category: 'Water',
      status: 'in_progress',
      statusLabel: 'Earth Swales Dug',
      icon: <Droplets className="w-5 h-5 text-blue-500" />,
      desc: 'Interconnected contour trenches and percolation ponds designed to capture 100% of seasonal monsoon runoff and recharge groundwater.',
    },
    {
      id: 'infra-9',
      title: 'Living Bio-Fencing & Bamboo Borders',
      tamil: 'உயிரோட்டமான இயற்கை வேலி',
      category: 'Ecology',
      status: 'completed',
      statusLabel: 'Growing Border',
      icon: <Shield className="w-5 h-5 text-[#284f3e]" />,
      desc: 'Native thorny cacti, agave, murraya, and thorny bamboo preventing wild animal intrusion while creating wildlife corridors.',
    },
  ];

  const filteredInfra = infrastructureList.filter((item) => {
    if (activeTab === 'all') return true;
    return item.status === activeTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
          Land & Ecology • நிலம் & உள்கட்டமைப்பு
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A3728]">
          Dharmapuramadam Sanctuary & Infrastructure
        </h1>
        <p className="text-lg text-[#4A3728]/80 max-w-3xl mx-auto leading-relaxed">
          Situated in Tenkasi District, Tamil Nadu, directly adjoining the sacred Western Ghats. A living sanctuary designed for regenerative human dwelling and wildlife coexistence.
        </p>
      </section>

      {/* Geographic Location & Biosphere Highlights */}
      <section className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 space-y-8 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A5A40]/10 text-[#4A3728] text-xs font-bold">
              <MapPin className="w-4 h-4 text-[#B35C44]" /> Sacred Geography
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
              Western Ghats & Agastiyar Malai Biosphere
            </h2>
            <p className="text-sm text-[#4A3728]/80 leading-relaxed">
              Our land in <strong>Dharmapuramadam, Tenkasi District</strong> is privileged to be in the immediate microclimate of the Agastiyar Malai Biosphere and the Kalakad-Mundanthurai Tiger Reserve (KMTR).
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#4A3728]/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B35C44]" />
                <span><strong>Soil Type</strong>: Fertile red loam with rich natural organic microbial matter.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5A5A40]" />
                <span><strong>Water Source</strong>: Pristine open-well fed by mountain aquifers and seasonal rainfall.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4A3728]" />
                <span><strong>Climate</strong>: Tropical mountain foothills with southwest and northeast monsoon cycles.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B35C44]" />
                <span><strong>Community Capacity</strong>: Designed for 15–25 resident families to preserve ecological carrying capacity.</span>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual Placeholder */}
          <div className="lg:col-span-6 bg-[#F5F5F0] rounded-3xl p-6 border border-[#5A5A40]/15 shadow-inner space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#5A5A40]/15">
              <span className="text-xs font-bold text-[#4A3728] flex items-center gap-1.5 font-serif">
                <Compass className="w-4 h-4 text-[#5A5A40]" /> Sanctuary Zoning Layout
              </span>
              <span className="text-[11px] text-[#5A5A40] font-tamil">தென்காசி • தர்மபுரமடம்</span>
            </div>

            {/* Custom Interactive Sanctuary Layout Schematic */}
            <div className="relative h-64 sm:h-72 rounded-2xl bg-[#EBEBE3] border-2 border-dashed border-[#5A5A40]/30 p-4 flex flex-col justify-between overflow-hidden">
              {/* Foothill mountain background line */}
              <div className="absolute top-0 right-0 left-0 h-16 bg-[#5A5A40]/10 flex items-center justify-center text-[11px] font-bold text-[#4A3728] tracking-widest uppercase">
                ▲ Western Ghats / Agastiyar Mountain Ridge (North-West) ▲
              </div>

              {/* Grid zones */}
              <div className="mt-16 grid grid-cols-3 gap-2 h-full z-10 text-[11px]">
                <div className="bg-[#F5F5F0] rounded-xl p-2.5 border border-[#5A5A40]/15 flex flex-col justify-center items-center text-center shadow-xs">
                  <TreePine className="w-5 h-5 text-[#5A5A40] mb-1" />
                  <span className="font-bold text-[#4A3728]">Native Food Forest</span>
                  <span className="text-[9px] text-[#5A5A40]">Multi-Tier Agroforestry</span>
                </div>

                <div className="bg-[#F5F5F0] rounded-xl p-2.5 border border-[#5A5A40]/15 flex flex-col justify-center items-center text-center shadow-xs">
                  <Home className="w-5 h-5 text-[#B35C44] mb-1" />
                  <span className="font-bold text-[#4A3728]">Community Koodam</span>
                  <span className="text-[9px] text-[#5A5A40]">Kitchen & Library</span>
                </div>

                <div className="bg-[#F5F5F0] rounded-xl p-2.5 border border-[#5A5A40]/15 flex flex-col justify-center items-center text-center shadow-xs">
                  <Droplets className="w-5 h-5 text-[#4A3728] mb-1" />
                  <span className="font-bold text-[#4A3728]">Open Well & Swales</span>
                  <span className="text-[9px] text-[#5A5A40]">Perennial Aquifer</span>
                </div>

                <div className="bg-[#F5F5F0] rounded-xl p-2.5 border border-[#5A5A40]/15 flex flex-col justify-center items-center text-center shadow-xs">
                  <Sun className="w-5 h-5 text-[#B35C44] mb-1" />
                  <span className="font-bold text-[#4A3728]">Solar Microgrid</span>
                  <span className="text-[9px] text-[#5A5A40]">Off-Grid Energy</span>
                </div>

                <div className="bg-[#F5F5F0] rounded-xl p-2.5 border border-[#5A5A40]/15 flex flex-col justify-center items-center text-center shadow-xs">
                  <Layers className="w-5 h-5 text-[#5A5A40] mb-1" />
                  <span className="font-bold text-[#4A3728]">Family Earthen Homes</span>
                  <span className="text-[9px] text-[#5A5A40]">15-25 Clusters</span>
                </div>

                <div className="bg-[#F5F5F0] rounded-xl p-2.5 border border-[#5A5A40]/15 flex flex-col justify-center items-center text-center shadow-xs">
                  <Shield className="w-5 h-5 text-[#4A3728] mb-1" />
                  <span className="font-bold text-[#4A3728]">Living Bio-Fence</span>
                  <span className="text-[9px] text-[#5A5A40]">Wildlife Buffer</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#5A5A40] text-center italic">
              Coordinates: Dharmapuramadam, Tenkasi District, Tamil Nadu • 8.96° N, 77.31° E
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Directory */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
              Ecological Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728] mt-2">
              Infrastructure & Sustainability Initiatives
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#EBEBE3] rounded-full border border-[#5A5A40]/15 self-start sm:self-auto">
            {[
              { key: 'all', label: 'All (9)' },
              { key: 'completed', label: 'Completed' },
              { key: 'in_progress', label: 'In Progress' },
              { key: 'planned', label: 'Planned' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab.key
                    ? 'bg-[#4A3728] text-white shadow-xs'
                    : 'text-[#4A3728]/70 hover:text-[#4A3728]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInfra.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-4 hover:border-[#5A5A40] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F0] flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                      item.status === 'completed'
                        ? 'bg-[#5A5A40]/15 text-[#4A3728] border border-[#5A5A40]/30'
                        : item.status === 'in_progress'
                        ? 'bg-[#B35C44]/15 text-[#B35C44] border border-[#B35C44]/30'
                        : 'bg-[#F5F5F0] text-[#5A5A40] border border-[#5A5A40]/20'
                    }`}
                  >
                    {item.statusLabel}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#4A3728] font-serif">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#5A5A40] font-tamil mt-0.5">
                    {item.tamil}
                  </div>
                </div>

                <p className="text-xs text-[#4A3728]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-[#5A5A40] font-medium border-t border-[#5A5A40]/15">
                Category: {item.category}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support our Land CTA */}
      <section className="bg-[#4A3728] text-[#F5F5F0] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Help Build Our Permanent Eco-Infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-[#EBEBE3]/80 leading-relaxed">
            Support the ₹25 Lakhs infrastructure fund or contribute seeds, tools, saplings, and skilled volunteer craftsmanship for our upcoming build cycle.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={() => navigate('/support')}
            className="px-8 py-3.5 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-sm shadow-[#B35C44]/20"
          >
            Support ₹25L Goal
          </button>
          <button
            onClick={() => navigate('/join')}
            className="px-8 py-3.5 rounded-full bg-[#3B2C20] hover:bg-[#2C1F16] text-[#EBEBE3] font-bold text-xs uppercase tracking-widest transition-all border border-[#5A5A40]/30"
          >
            Join as Resident
          </button>
        </div>
      </section>
    </div>
  );
};
