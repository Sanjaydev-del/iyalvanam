import React, { useState, useEffect } from 'react';
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
  Shield,
  Sprout
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { BotanicalFlourish, LeafBullet } from '../components/OrganicIcons';

interface LandPageProps {
  navigate: (path: string) => void;
}

export const LandPage: React.FC<LandPageProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'in_progress' | 'planned'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const infrastructureList = [
    {
      id: 'infra-1',
      title: 'Deep Open Well & Mountain Aquifer',
      tamil: 'பாரம்பரிய திறந்தவெளி கிணறு',
      category: 'Water',
      status: 'completed',
      statusLabel: 'Active & Pure',
      icon: <Droplets className="w-5 h-5 text-[#1f3d1f]" />,
      desc: 'Traditional open stone well tapping into pure Western Ghats subterranean springs. Tested zero heavy metals or chemical runoff.',
    },
    {
      id: 'infra-2',
      title: 'Native Sapling & Fruit Forest',
      tamil: 'நாட்டு மரங்கள் & கனி வனம்',
      category: 'Agroforestry',
      status: 'in_progress',
      statusLabel: 'Phase 1 Planted',
      icon: <TreePine className="w-5 h-5 text-[#1f3d1f]" />,
      desc: 'Over 200 native species including Kadamba, Marudham, Wild Guava, Mango, Amla, and medicinal shrubs along contour swales.',
    },
    {
      id: 'infra-3',
      title: 'Community Hall (இயல்வனம் கூடம்)',
      tamil: 'மத்திய ஒன்றுகூடல் கூடம்',
      category: 'Community',
      status: 'in_progress',
      statusLabel: 'Foundation & Framing',
      icon: <Home className="w-5 h-5 text-[#7a2e1a]" />,
      desc: 'Spacious octagonal earthen hall with bamboo rafters, lime flooring, and terracotta roof for daily circle meetings and cultural gatherings.',
    },
    {
      id: 'infra-4',
      title: 'Communal Kitchen & Wood Hearth',
      tamil: 'கூட்டு சமையலறை & பாரம்பரிய அடுப்பு',
      category: 'Food',
      status: 'in_progress',
      statusLabel: 'In Construction',
      icon: <Utensils className="w-5 h-5 text-[#7a2e1a]" />,
      desc: 'Smokeless high-efficiency earthen chulhas, solar cooking stations, and large storage for organic heirloom grains.',
    },
    {
      id: 'infra-5',
      title: 'Waterless Dry Compost Toilets',
      tamil: 'உலர் உரக் கழிவறைகள்',
      category: 'Sanitation',
      status: 'completed',
      statusLabel: 'Functional Prototype',
      icon: <Layers className="w-5 h-5 text-[#1f3d1f]" />,
      desc: 'Aerobic composting toilets using dry sawdust and rice husk. Conserves 100% water and safely enriches agroforestry soil after maturation.',
    },
    {
      id: 'infra-6',
      title: 'Heirloom Seed Bank & Library',
      tamil: 'பாரம்பரிய விதை வங்கி & நூலகம்',
      category: 'Knowledge',
      status: 'planned',
      statusLabel: 'Design Approved',
      icon: <BookOpen className="w-5 h-5 text-[#7a2e1a]" />,
      desc: 'Cool earthen vault storing indigenous non-hybrid seeds of paddy, millets, greens, and medicinal roots collected across Tamil Nadu.',
    },
    {
      id: 'infra-7',
      title: 'Decentralized Solar Micro-Grid',
      tamil: 'தற்சார்பு சூரிய மின்சாரம்',
      category: 'Energy',
      status: 'in_progress',
      statusLabel: '5kW Panels Installed',
      icon: <Sun className="w-5 h-5 text-[#d4af37]" />,
      desc: 'Off-grid solar generation powering water pumping, refrigeration for herbal extracts, community lighting, and communication devices.',
    },
    {
      id: 'infra-8',
      title: 'Resident Family Earthen Cottages',
      tamil: 'குடிமக்கள் இயற்கை வாழ்விடங்கள்',
      category: 'Housing',
      status: 'planned',
      statusLabel: 'Phase 2 Blueprint',
      icon: <Home className="w-5 h-5 text-[#1f3d1f]" />,
      desc: 'Modular adobe and cob dwellings for resident families, built using earth dug on site, river sand, and unslaked lime.',
    },
  ];

  const filteredInfra = infrastructureList.filter((item) => {
    if (activeTab === 'all') return true;
    return item.status === activeTab;
  });

  return (
    <div className="bg-[#f0e6d2] text-[#2d2013] space-y-12 sm:space-y-16 md:space-y-20 pb-16 sm:pb-24">
      
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 border-b border-[#7a2e1a]/15 bg-[#f7f2e7]">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1f3d1f]/10 text-[#1f3d1f] border border-[#1f3d1f]/20 text-[11px] sm:text-xs font-serif font-bold uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#7a2e1a]" />
              <span>Sacred Land • நிலமும் திட்டங்களும்</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold text-[#2d2013] tracking-tight leading-tight break-words">
              Tenkasi Sanctuary & Ecological Infrastructure
            </h1>

            <p className="text-xs sm:text-sm font-tamil text-[#7a2e1a] font-semibold break-words">
              “தர்மபுரமடம் – மேற்குத் தொடர்ச்சி மலையடிவாரத்தில் மலரும் எழில்வனம்”
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#3d2f21]/85 font-serif-body leading-relaxed max-w-2xl mx-auto break-words">
              Our 4.5+ acres in Dharmapuramadam, Tenkasi District, nestled at the base of the Agastiyar Malai Biosphere Reserve, is developing as a living model of non-artificial community infrastructure.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Geography & Bio-Region */}
      <Container>
        <section className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border-2 border-[#1f3d1f]/20 shadow-sm space-y-6 sm:space-y-8">
          <SectionHeading
            badge="Geographic Context"
            title="Dharmapuramadam Sanctuary Highlights"
            titleTamil="நில அமைப்பும் இயற்கை வளமும்"
            subtitle="An extraordinary microclimate fed by both Southwest and Northeast monsoons."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#f0e6d2] border border-[#7a2e1a]/15 space-y-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7a2e1a]">Location</span>
              <h4 className="text-lg sm:text-xl font-serif-display font-bold text-[#1f3d1f] break-words">Dharmapuramadam</h4>
              <p className="text-xs text-[#3d2f21]/80 font-serif-body">Tenkasi District, Tamil Nadu (Western Ghats Foothills)</p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#f0e6d2] border border-[#7a2e1a]/15 space-y-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7a2e1a]">Sanctuary Area</span>
              <h4 className="text-lg sm:text-xl font-serif-display font-bold text-[#1f3d1f] break-words">4.5+ Acres</h4>
              <p className="text-xs text-[#3d2f21]/80 font-serif-body">Held collectively in public trust perpetuity</p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#f0e6d2] border border-[#7a2e1a]/15 space-y-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7a2e1a]">Water Source</span>
              <h4 className="text-lg sm:text-xl font-serif-display font-bold text-[#1f3d1f] break-words">Agastiyar Aquifer</h4>
              <p className="text-xs text-[#3d2f21]/80 font-serif-body">Traditional stone open well + rain catchment swales</p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#f0e6d2] border border-[#7a2e1a]/15 space-y-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7a2e1a]">Soil Classification</span>
              <h4 className="text-lg sm:text-xl font-serif-display font-bold text-[#1f3d1f] break-words">Red Loam & Clay</h4>
              <p className="text-xs text-[#3d2f21]/80 font-serif-body">Rich in natural minerals, ideal for mud architecture</p>
            </div>
          </div>
        </section>
      </Container>

      {/* 3. Infrastructure Filter & Grid */}
      <Container>
        <div className="space-y-6 sm:space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeading
              badge="Master Plan"
              title="Infrastructure & Physical Assets"
              titleTamil="கள உள்கட்டமைப்பு திட்டங்கள்"
              subtitle="Living systems designed to leave zero toxic residue on the earth."
              align="left"
            />

            {/* Filter Tabs (Responsive Wrap) */}
            <div className="flex flex-wrap bg-[#f7f2e7] p-1.5 rounded-2xl sm:rounded-full border border-[#7a2e1a]/20 text-xs font-serif font-bold uppercase tracking-wider self-start md:self-auto gap-1">
              {(['all', 'completed', 'in_progress', 'planned'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`min-h-[36px] px-3.5 py-1.5 rounded-full transition-colors ${
                    activeTab === tab
                      ? 'bg-[#1f3d1f] text-[#f7f2e7]'
                      : 'text-[#2d2013]/70 hover:text-[#7a2e1a]'
                  }`}
                >
                  {tab.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredInfra.map((infra) => (
              <div
                key={infra.id}
                className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 hover:border-[#1f3d1f] shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-[#f0e6d2] flex items-center justify-center shadow-xs">
                      {infra.icon}
                    </div>
                    <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-serif font-bold uppercase tracking-wider ${
                      infra.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                      infra.status === 'in_progress' ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-700'
                    }`}>
                      {infra.statusLabel}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif-display font-bold text-[#2d2013] break-words">
                    {infra.title}
                  </h3>
                  <p className="text-xs font-tamil text-[#7a2e1a] font-medium break-words">
                    {infra.tamil}
                  </p>
                  <p className="text-xs sm:text-sm text-[#3d2f21]/80 leading-relaxed font-serif-body break-words">
                    {infra.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#7a2e1a]/10 flex items-center justify-between text-[11px] text-[#1f3d1f] font-serif font-bold">
                  <span>Category: {infra.category}</span>
                  <LeafBullet className="w-3 h-3 text-[#7a2e1a]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>

      {/* 4. Support & Visit CTA */}
      <Container>
        <div className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-[#1f3d1f] text-[#f7f2e7] text-center space-y-5 sm:space-y-6">
          <BotanicalFlourish className="w-28 sm:w-36 h-4 sm:h-5 mx-auto text-[#d4af37]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-[#f7f2e7] break-words">
            Support Our ₹25L Infrastructure Goal
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#f0e6d2]/85 max-w-xl mx-auto font-serif-body leading-relaxed break-words">
            Help complete our community hall, heirloom seed vault, and open-well water recharge before the upcoming monsoon.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="gold"
              size="lg"
              showArrow
              className="w-full sm:w-auto"
              onClick={() => navigate('/support')}
            >
              Support Infrastructure Fund
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-[#f7f2e7] border-[#f7f2e7]/40 hover:bg-[#f7f2e7] hover:text-[#1f3d1f]"
              onClick={() => navigate('/contact')}
            >
              Schedule an On-Site Visit
            </Button>
          </div>
        </div>
      </Container>

    </div>
  );
};
