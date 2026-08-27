import React, { useEffect } from 'react';
import { ArrowRight, Scale, Leaf } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

interface PrinciplesPageProps {
  navigate: (path: string) => void;
}

export const PrinciplesPage: React.FC<PrinciplesPageProps> = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const naturalLaws = [
    {
      num: '01',
      title: 'Interconnectedness',
      tamil: 'ஒன்றிணைவு',
      statement: 'All elements in existence form a seamless, indivisible whole.',
      desc: 'An action impacting a single blade of grass, droplet of spring water, or organism creates ripples across the living whole. We organize our thoughts and community structures to honor this sacred web.',
    },
    {
      num: '02',
      title: 'Cause & Effect (Karma of Soil)',
      tamil: 'காரண காரியம்',
      statement: 'Every ecological choice carries inescapable consequences.',
      desc: 'Degraded, poisoned soil yields sickness, tension, and economic dependence. Nurtured, chemical-free living soil yields perennial health, abundant clean water, and sustained community peace.',
    },
    {
      num: '03',
      title: 'Dynamic Balance & Equilibrium',
      tamil: 'சமநிலை',
      statement: 'Nature balances extreme polarities through effortless rhythm.',
      desc: 'Sunlight and darkness, drought and monsoon, intense physical work and meditative quiet stillness. Daily life at Iyalvanam synchronizes with these ancient natural cycles.',
    },
    {
      num: '04',
      title: 'Self-Responsibility & Sovereignty',
      tamil: 'சுய பொறுப்புணர்வு',
      statement: 'We do not outsource responsibility for our living needs.',
      desc: 'Each resident family takes conscious stewardship over their nutrition, energy, waste, emotional presence, and carbon footprint without blaming external corporations or state apparatuses.',
    },
    {
      num: '05',
      title: 'Active Ecological Regeneration',
      tamil: 'மீளுருவாக்கம்',
      statement: 'Human presence must leave the earth richer than we found it.',
      desc: 'Sustainability is not enough. We practice active regeneration: building deep topsoil organic matter, planting native diverse food forests, and recharging mountain aquifers.',
    },
    {
      num: '06',
      title: 'Reverence for Life (Ahimsa)',
      tamil: 'இன்னா செய்யாமை / பேரன்பு',
      statement: 'Causing no unnecessary harm to soil, plants, beasts, or fellows.',
      desc: 'We cultivate radical gentleness toward soil microbes, indigenous fauna, pollinating insects, domestic helpers, and fellow humans walking beside us.',
    },
    {
      num: '07',
      title: 'Abundance through Common Stewardship',
      tamil: 'கூட்டுறவின் வளம்',
      statement: 'Scarcity is an illusion born of hoarding; sharing generates life.',
      desc: 'When land, water, seeds, labor, and wisdom are held in common stewardship rather than speculative commercial ownership, nature provides endless abundance for all.',
    },
  ];

  const communityEthos = [
    {
      title: 'Simplicity & Sufficiency (போதுமென்ற மனம்)',
      desc: 'Finding joy in what is genuinely nourishing, freeing human energy from artificial consumerist accumulation and unnecessary material clutter.',
    },
    {
      title: 'Consensus Decision Making (ஒருமித்த கலந்தாய்வு)',
      desc: 'Decisions impacting the sanctuary land and residents are reached through open-circle consultation, mutual listening, and shared consent, rather than authoritarian decree.',
    },
    {
      title: 'Lifelong Living Learning (வாழ்நாள் வழியே கற்றல்)',
      desc: 'Education is integrated into daily life with soil, seeds, herbal medicine, carpentry, weaving, and quiet contemplative inquiry rather than competitive industrial exams.',
    },
    {
      title: 'Sovereign Health through Prana (தூய வாழ்வியல்)',
      desc: 'Health is nurtured through five primal elements: living spring water, direct solar contact, barefoot earthing, fresh mountain air, and unadulterated whole plant foods.',
    },
  ];

  return (
    <div className="bg-[#f4eedb] text-[#261a12] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-16 pb-8 border-b border-[#6b2816]/12 bg-[#faf6eb]">
        <Container>
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-serif uppercase tracking-widest text-[#6b2816] font-semibold block">
              Manifesto & Philosophical Foundation
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#1b331b] tracking-tight leading-tight">
              The Universal Natural Laws
            </h1>
            <p className="text-sm font-tamil text-[#6b2816] font-medium">
              “விழுமியங்களும் மாறாத இயற்கை விதிகளும்”
            </p>
            <p className="text-base sm:text-lg text-[#574637] font-serif-body leading-relaxed pt-1">
              Our principles are not arbitrary dogmas. They are the immutable laws observed in soil, water, forest ecosystems, and human consciousness.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Numbered Manifesto List */}
      <Container>
        <div className="space-y-12">
          
          <div className="border-t border-[#6b2816]/15 divide-y divide-[#6b2816]/15">
            {naturalLaws.map((law) => (
              <div key={law.num} className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                
                <div className="lg:col-span-2">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-[#6b2816]">
                    {law.num}
                  </span>
                </div>

                <div className="lg:col-span-4 space-y-1">
                  <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-[#1b331b]">
                    {law.title}
                  </h2>
                  <span className="text-xs font-tamil text-[#6b2816] block font-medium">
                    {law.tamil}
                  </span>
                  <p className="text-xs font-serif italic text-[#574637] pt-1">
                    “{law.statement}”
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed">
                    {law.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </Container>

      {/* 3. Community Ethos & Inviolate Lines */}
      <section className="bg-[#faf6eb] py-16 border-t border-b border-[#6b2816]/12">
        <Container>
          <div className="space-y-10">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                Community Ethos
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#1b331b]">
                Guiding Values in Daily Life
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#6b2816]/12 pt-8">
              {communityEthos.map((ethos, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-lg font-serif-display font-bold text-[#1b331b]">
                    {ethos.title}
                  </h3>
                  <p className="text-sm text-[#574637] font-serif-body leading-relaxed">
                    {ethos.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#6b2816]/12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs font-serif text-[#574637]">
                Ready to align your life with these immutable principles?
              </span>
              <Button variant="primary" size="md" showArrow onClick={() => navigate('/join')}>
                Express Alignment to Join
              </Button>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};
