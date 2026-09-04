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
  Sprout,
  Users,
  Wheat,
  HeartPulse,
  Hammer
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { LeafBullet } from '../components/OrganicIcons';

interface LandPageProps {
  navigate: (path: string) => void;
}

export const LandPage: React.FC<LandPageProps> = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const infrastructureList = [
    {
      title: 'Community Hall (இயல்வனம் கூடம்)',
      tamil: 'ஒன்றுகூடல் கூடம்',
      desc: 'Spacious octagonal earthen hall with bamboo rafters, lime flooring, and terracotta roof for daily circle meetings and cultural gatherings.',
      icon: <Home className="w-5 h-5 text-[#8B5A2B]" />,
    },
    {
      title: 'Communal Kitchen & Wood Hearth',
      tamil: 'கூட்டு சமையலறை',
      desc: 'Smokeless high-efficiency earthen chulhas, solar cooking stations, and large storage for organic heirloom grains, fruits, coconuts, and bananas.',
      icon: <Utensils className="w-5 h-5 text-[#2E4F2B]" />,
    },
    {
      title: 'Deep Open Well & Mountain Aquifer',
      tamil: 'பாரம்பரிய திறந்தவெளி கிணறு',
      desc: 'Traditional open stone well tapping into pure Western Ghats subterranean springs. Tested zero heavy metals or chemical runoff.',
      icon: <Droplets className="w-5 h-5 text-[#8B5A2B]" />,
    },
    {
      title: 'Vegetable Gardens & Native Fruit Forest',
      tamil: 'கனி வனம் & மூலிகை தோட்டம்',
      desc: 'Over 200 native species including Kadamba, Marudham, Wild Guava, Mango, Amla, and medicinal shrubs along contour swales.',
      icon: <TreePine className="w-5 h-5 text-[#2E4F2B]" />,
    },
    {
      title: 'Waterless Dry Compost Toilets',
      tamil: 'உலர் உரக் கழிவறைகள்',
      desc: 'Aerobic composting toilets using dry sawdust and rice husk. Conserves 100% water and safely enriches agroforestry soil after maturation.',
      icon: <Layers className="w-5 h-5 text-[#8B5A2B]" />,
    },
    {
      title: 'Natural Bio-Fencing & Green Corridors',
      tamil: 'உயிர் வேலி & பசுமை பாதை',
      desc: 'Living thorny hedges, agave, vetiver, and native bamboo protecting the sanctuary perimeter without concrete barriers.',
      icon: <Shield className="w-5 h-5 text-[#2E4F2B]" />,
    },
    {
      title: 'Rainwater Harvesting Swales & Ponds',
      tamil: 'மழைநீர் சேகரிப்பு & குட்டைகள்',
      desc: 'Contour bunds, percolation ponds, and rock check-dams capturing mountain runoff to elevate the groundwater table.',
      icon: <Droplets className="w-5 h-5 text-[#8B5A2B]" />,
    },
    {
      title: 'Decentralized Solar-Powered Earthen Homes',
      tamil: 'சூரிய சக்தி மண் இல்லங்கள்',
      desc: '5 natural cob & rammed earth cluster units for resident families, built entirely with local earth, stone, and lime.',
      icon: <Sun className="w-5 h-5 text-[#2E4F2B]" />,
    },
  ];

  const fundingBreakdown = [
    { label: 'Houses (5 Natural Units)', amount: '₹10 Lakhs', percent: 40, width: 'w-2/5' },
    { label: 'Community Hall & Kitchen', amount: '₹6 Lakhs', percent: 24, width: 'w-1/4' },
    { label: 'Open Stone Well & Water', amount: '₹3 Lakhs', percent: 12, width: 'w-2/12' },
    { label: 'Land Cleaning & Contour Setup', amount: '₹2 Lakhs', percent: 8, width: 'w-1/12' },
    { label: 'Natural Bio-Fencing', amount: '₹2 Lakhs', percent: 8, width: 'w-1/12' },
    { label: 'Solar, Rainwater & Seed Vault', amount: '₹2 Lakhs', percent: 8, width: 'w-1/12' },
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Banner (Slide 18) */}
      <section className="pt-12 sm:pt-20 pb-12 border-b border-[#E3DDD2] bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
              Land & Commons • களம்
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              Land, Ecology & Living Infrastructure
            </h1>
            <p className="text-sm text-[#8B5A2B] font-medium">
              “சுத்தமான காற்று, மலை ஊற்று நீர், வளமான செம்மண் நிலம்”
            </p>
            <p className="text-base sm:text-lg text-[#5A5046] leading-relaxed pt-1">
              12 acres land secured near Sivasailam in Dharmapuramadam village, Tenkasi District, South India — nestled between the Illupai River and a natural mountain stream at the foothills of the Western Ghats within the Agastiyar Malai Biosphere.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Land Overview & Geography Cards (Slide 18) */}
      <Container>
        <div className="space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-5 rounded-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#8B5A2B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8B5A2B]">
                      Community House
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#241D17]">
                    Temporary Base (2 km Away)
                  </h3>
                  <p className="text-xs text-[#5A5046] leading-relaxed">
                    A nearby village home accommodates 30 people as a temporary setup until the sanctuary land construction is ready.
                  </p>
                </div>

                <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-5 rounded-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#2E4F2B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2E4F2B]">
                      Land Capacity
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#241D17]">
                    20 Families (~60 People)
                  </h3>
                  <p className="text-xs text-[#5A5046] leading-relaxed">
                    Growth is gradual and conscious — 2 acres donated to the trust to begin, with 12 acres total secured.
                  </p>
                </div>

              </div>

              <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
                  Geographical Coordinates
                </span>
                <p className="text-sm font-bold text-[#2E4F2B]">
                  Dharmapuramadam Village, Near Sivasailam, Tenkasi District
                </p>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Located between the perennial Illupai River and fresh mountain stream. Bordering the Kalakad-Mundanthurai Tiger Reserve buffer corridor with rich red loam soil and dual southwest & northeast monsoons.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#E3DDD2] bg-[#ECE6D8]">
                <img
                  src="/images/illupai-river-dam.jpg"
                  alt="Illupai River waterfall and check-dam near Sivasailam"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-[#8B5A2B] text-center font-medium">
                Illupai River Check-Dam & Mountain Stream — Sivasailam
              </p>
            </div>

          </div>

        </div>
      </Container>

      {/* 3. LIFE AT IYALVANAM (Slide 19) */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-t border-b border-[#E3DDD2]">
        <Container>
          <div className="space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Daily Living Rhythm (வாழ்வியல் முறை)
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                Life at Iyalvanam
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                
                {/* Food Pillar */}
                <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <Wheat className="w-5 h-5 text-[#8B5A2B]" />
                    <h3 className="text-base font-bold text-[#241D17]">
                      Natural Food & Fruitarian Rhythm
                    </h3>
                  </div>
                  <ul className="text-xs text-[#5A5046] space-y-1.5 pt-1">
                    <li>• Natural raw food is primary, with one cooked VEGAN meal daily.</li>
                    <li>• Fruitarian staples: Coconut, banana, and seasonal fruits available always.</li>
                    <li>• Zero animal products consumed on the land.</li>
                    <li>• Self-sufficiency through home vegetable gardens and food forests — no commercial monoculture farming.</li>
                  </ul>
                </div>

                {/* Health Pillar */}
                <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-[#2E4F2B]" />
                    <h3 className="text-base font-bold text-[#241D17]">
                      Self-Healing Living Health
                    </h3>
                  </div>
                  <ul className="text-xs text-[#5A5046] space-y-1.5 pt-1">
                    <li>• The human body is inherently a self-healing biological system.</li>
                    <li>• Fresh air, pure well water, direct sunlight, grounding, and a peaceful mind are the foundations.</li>
                    <li>• Holistic well-being across physical, emotional, mental, and spiritual planes.</li>
                  </ul>
                </div>

                {/* Work Pillar */}
                <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <Hammer className="w-5 h-5 text-[#8B5A2B]" />
                    <h3 className="text-base font-bold text-[#241D17]">
                      Sacred Work & Uniqueness
                    </h3>
                  </div>
                  <ul className="text-xs text-[#5A5046] space-y-1.5 pt-1">
                    <li>• Work is not for commercial money — it is the expression of each individual's uniqueness.</li>
                    <li>• People do what brings them joy, creativity, and contributes to the whole.</li>
                  </ul>
                </div>

              </div>

              <div className="lg:col-span-5 space-y-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#E3DDD2] bg-[#ECE6D8]">
                  <img
                    src="/images/sanctuary-landscape.jpg"
                    alt="Sanctuary land clearing with palm trees and mountain background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-[#8B5A2B] text-center font-medium">
                  Sanctuary Landscape & Foothill View — Tenkasi
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* 4. NATURAL INFRASTRUCTURE MATRIX (Slide 18) */}
      <Container>
        <div className="space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              Ecological Design
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
              Natural Infrastructure Elements
            </h2>
            <p className="text-sm text-[#5A5046]">
              Every structure is crafted with hand tools using cob, rammed earth, bamboo, and lime masonry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureList.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-3"
              >
                <div className="p-2 bg-[#F5F2EB] rounded-xs w-fit border border-[#E3DDD2]">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-[#241D17]">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-[#8B5A2B]">
                  {item.tamil}
                </p>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>

      {/* 5. FUNDING REQUIREMENTS & BREAKDOWN (Slide 23) */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-t border-[#E3DDD2]">
        <Container>
          <div className="space-y-12">
            
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Resource Mobilization (Slide 23)
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                Infrastructure Funding Requirements
              </h2>
              <p className="text-sm text-[#5A5046] leading-relaxed">
                The founding member is sourcing the 12-acre land through personal funding. To develop the community and host 50+ people for events, camps, and permanent living, <strong>₹25 Lakhs</strong> in infrastructure funding is needed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Breakdown Bar Chart */}
              <div className="lg:col-span-7 bg-[#F5F2EB] border border-[#E3DDD2] p-6 sm:p-8 rounded-sm space-y-5">
                <div className="flex items-center justify-between border-b border-[#E3DDD2] pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B5A2B]">
                    Item / Allocation
                  </span>
                  <span className="text-xs font-bold text-[#2E4F2B]">
                    Total Need: ₹25 Lakhs
                  </span>
                </div>

                <div className="space-y-4">
                  {fundingBreakdown.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-[#241D17]">{item.label}</span>
                        <span className="font-bold text-[#8B5A2B]">{item.amount}</span>
                      </div>
                      <div className="h-3 bg-[#E3DDD2] rounded-xs overflow-hidden">
                        <div
                          className="h-full bg-[#2E4F2B] rounded-xs"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donation Methods Info Box */}
              <div className="lg:col-span-5 bg-[#F5F2EB] border border-[#E3DDD2] p-6 sm:p-8 rounded-sm space-y-4">
                <h3 className="text-base font-bold text-[#2E4F2B]">
                  Diverse Forms of Contribution
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Donations can take many forms — seeds, saplings, tools, books, volunteer time, or direct funding of specific infrastructure like a house or community hall.
                </p>
                <div className="p-4 bg-[#FAF8F3] border border-[#E3DDD2] rounded-xs space-y-2">
                  <p className="text-xs font-semibold text-[#8B5A2B]">
                    Transparent Stewardship:
                  </p>
                  <p className="text-[11px] text-[#5A5046] leading-relaxed">
                    All funds flow through SEYON Nature Life Foundation. All permanent land assets remain safeguarded with IYALVANAM Asset Trust.
                  </p>
                </div>
                <div className="pt-2">
                  <Button variant="primary" size="md" showArrow onClick={() => navigate('/join')}>
                    Express Your Support
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};
