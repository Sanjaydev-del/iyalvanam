import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  Scale, 
  Leaf, 
  Sparkles, 
  Heart, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Sun, 
  Droplets, 
  Eye, 
  MessageSquare, 
  Feather, 
  Layers, 
  Compass 
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { LeafBullet } from '../components/OrganicIcons';

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
      statement: 'All beings are part of one living whole — what affects one, affects all.',
      desc: 'An action impacting a single blade of grass, droplet of spring water, or organism creates ripples across the living whole. We organize our thoughts and community structures to honor this sacred web.',
    },
    {
      num: '02',
      title: 'Cause & Effect',
      tamil: 'காரண காரியம்',
      statement: 'Every thought and action generates results. Awareness of consequence shapes integrity.',
      desc: 'Degraded, poisoned soil yields sickness and dependence. Nurtured, living chemical-free soil yields perennial health, clean water, and sustained community peace.',
    },
    {
      num: '03',
      title: 'Balance & Harmony',
      tamil: 'சமநிலை',
      statement: 'Life thrives where balance is maintained — between giving and receiving, human and nature.',
      desc: 'Sunlight and darkness, monsoon and drought, physical soil labor and quiet stillness. Daily life synchronizes with these ancient rhythms.',
    },
    {
      num: '04',
      title: 'Self-Responsibility',
      tamil: 'சுய பொறுப்புணர்வு',
      statement: 'True freedom arises when individuals act consciously and own their impact.',
      desc: 'Each resident takes direct responsibility for their nutrition, energy, waste, presence, and carbon footprint without blaming external corporations or systems.',
    },
    {
      num: '05',
      title: 'Regeneration',
      tamil: 'மீளுருவாக்கம்',
      statement: 'Every process should restore, not deplete — build life, not exploit it.',
      desc: 'We practice active regeneration: building deep organic topsoil, planting native diverse food forests, and recharging mountain aquifers.',
    },
    {
      num: '06',
      title: 'Non-Harm (Ahimsa)',
      tamil: 'இன்னா செய்யாமை (அஹிம்சை)',
      statement: 'Deep respect for all life forms and natural systems.',
      desc: 'Causing no unnecessary harm to soil organisms, pollinating insects, indigenous fauna, domestic animals, or fellow humans walking beside us.',
    },
    {
      num: '07',
      title: 'Abundance through Cooperation',
      tamil: 'கூட்டுறவின் வளம்',
      statement: 'Nature demonstrates that collaboration creates richness and diversity.',
      desc: 'When land, water, seeds, labor, and wisdom are held in common stewardship rather than speculative ownership, nature provides endless abundance for all.',
    },
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Banner (Slide 9 & 15) */}
      <section className="pt-12 sm:pt-20 pb-12 border-b border-[#E3DDD2] bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
              Manifesto & Immutable Principles • விழுமியங்கள்
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              Natural Law, Spiritual Awakening & Ethical Conduct
            </h1>
            <p className="text-sm text-[#8B5A2B] font-medium">
              “விழுமியங்களும் மாறாத இயற்கை விதிகளும்”
            </p>
            <p className="text-base sm:text-lg text-[#5A5046] leading-relaxed pt-1">
              Natural Law is the universal order governing all life — the inherent intelligence within nature that maintains balance, rhythm, and harmony. Iyalvanam seeks to live in resonance with these laws, not impose artificial systems upon them.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. CORE PRINCIPLES · PART I (Slide 9) */}
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              Core Principles · Part I
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
              Unity, Learning & Simplicity
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-lg font-bold text-[#2E4F2B]">
                  Unity in Diversity
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Every being is an expression of the same consciousness. No discrimination based on religion, caste, gender, wealth, or nationality. Diversity is celebrated; unity is lived through shared purpose and compassion.
                </p>
              </div>

              <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-lg font-bold text-[#2E4F2B]">
                  Learning as a Way of Life
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Education is natural, continuous, and experiential. Children and adults learn through living — observing nature, creating, and serving. The goal is not credentials, but awareness, creativity, and self-mastery.
                </p>
              </div>

              <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-lg font-bold text-[#2E4F2B]">
                  Simplicity & Sufficiency
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Simple living and high thinking. Life guided by natural rhythms — not consumption or competition. Members use only what is needed, honoring balance, beauty, and sustainability.
                </p>
              </div>

            </div>

            <div className="lg:col-span-5 space-y-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#E3DDD2] bg-[#ECE6D8]">
                <img
                  src="/images/banyan-river-forest.jpg"
                  alt="Ancient banyan tree and forest canopy over rushing river stream"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-[#8B5A2B] text-center font-medium">
                Living Forest Stream — Dharmapuramadam Sanctuary
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* 3. CORE PRINCIPLES · PART II & III (Slide 10 & 11) */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-t border-b border-[#E3DDD2]">
        <Container>
          <div className="space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Core Principles · Part II & III
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                Harmony, Ownership, Governance & Truth
              </h2>
              <p className="text-sm text-[#5A5046]">
                These principles form the structural foundation of community life — guiding how we relate to land, resources, each other, and the world beyond our gates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-base font-bold text-[#2E4F2B]">
                  Harmony with Nature
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Farming, architecture, energy, and waste follow regenerative principles. Humans are co-creators within nature, not above it.
                </p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-base font-bold text-[#2E4F2B]">
                  Collective Ownership
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  All land, infrastructure, and resources belong to the collective. Every member holds equal rights and responsibilities as a steward.
                </p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-base font-bold text-[#2E4F2B]">
                  Conscious Use of Money
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Money serves setup and external interactions. Within the community, value flows through skills, service, and contribution.
                </p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-base font-bold text-[#2E4F2B]">
                  Truth & Transparency
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  All systems operate in honesty and openness. Integrity is non-negotiable — the spiritual foundation of trust.
                </p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-base font-bold text-[#2E4F2B]">
                  Decentralized Governance
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Authority is shared, not imposed. Decisions arise from dialogue, wisdom, and consensus. Every member co-creates the community's direction.
                </p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-base font-bold text-[#2E4F2B]">
                  Conscious Evolution
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Every facet of life supports the evolution of consciousness — from fear to love, separation to unity. Spiritual growth is woven into daily living.
                </p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-base font-bold text-[#2E4F2B]">
                  Service & Contribution
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Each member contributes through unique talents. Work is sacred — a joyful act of creativity. Worth is measured not by wealth, but by willingness to serve.
                </p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-2">
                <h3 className="text-base font-bold text-[#2E4F2B]">
                  Non-Affiliation
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  The community aligns with no external political, religious, or corporate entities. It remains autonomous, self-reliant, and free from external control.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* 4. SPIRITUAL PRINCIPLES: THE INNER FOUNDATION (Slide 12 & 13) */}
      <Container>
        <div className="space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#E3DDD2] bg-[#ECE6D8]">
                <img
                  src="/images/meditating-boy-river.jpg"
                  alt="Young child meditating in lotus posture on a river stone with mountain backdrop"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-[#8B5A2B] text-center font-medium">
                Inner Stillness • River Meditations at Agastiyar Malai
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Spiritual Principles
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                The Inner Foundation
              </h2>
              <p className="text-sm text-[#5A5046] leading-relaxed">
                The community rests on the awakening of inner consciousness. Spirituality here is not religious or ritualistic — it is living in awareness, compassion, and harmony with all beings. Each member is free to connect with truth in their own way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-4 rounded-sm space-y-1">
                  <span className="text-xs font-bold text-[#8B5A2B]">
                    Fear → Love
                  </span>
                  <p className="text-xs text-[#5A5046]">
                    Modern systems condition humans to live in fear. We invite a shift toward love, trust, and creation.
                  </p>
                </div>

                <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-4 rounded-sm space-y-1">
                  <span className="text-xs font-bold text-[#8B5A2B]">
                    Separation → Unity
                  </span>
                  <p className="text-xs text-[#5A5046]">
                    Taking ownership for our choices — recognizing we are one with nature and all existence.
                  </p>
                </div>

                <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-4 rounded-sm space-y-1">
                  <span className="text-xs font-bold text-[#8B5A2B]">
                    Survival → Creation
                  </span>
                  <p className="text-xs text-[#5A5046]">
                    Inner transformation: living consciously, lovingly, and simply — not merely enduring, but creating.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Living the Practice (Slide 13) */}
          <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-8 rounded-sm space-y-6">
            <div className="max-w-2xl space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Spiritual Principles · Part II
              </span>
              <h3 className="text-xl font-bold text-[#2E4F2B]">
                Living the Daily Practice
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-1">
                <strong className="text-sm text-[#241D17] block">• Silence & Meditation</strong>
                <p className="text-xs text-[#5A5046]">Moments of stillness to connect with inner being.</p>
              </div>

              <div className="space-y-1">
                <strong className="text-sm text-[#241D17] block">• Gratitude & Service</strong>
                <p className="text-xs text-[#5A5046]">Simple acts that nurture awareness and humility.</p>
              </div>

              <div className="space-y-1">
                <strong className="text-sm text-[#241D17] block">• Living with Nature</strong>
                <p className="text-xs text-[#5A5046]">Working and resting in rhythm with the Earth.</p>
              </div>

              <div className="space-y-1">
                <strong className="text-sm text-[#241D17] block">• Mindful Communication</strong>
                <p className="text-xs text-[#5A5046]">Speaking and listening from quiet awareness.</p>
              </div>
            </div>

            <div className="border-t border-[#E3DDD2] pt-4 text-center">
              <p className="text-base sm:text-lg font-serif italic text-[#8B5A2B] font-semibold">
                “Be aware. Be kind. Be truthful. Be free. Be love.”
              </p>
            </div>
          </div>

        </div>
      </Container>

      {/* 5. ETHICAL PRINCIPLES: FOUNDATION OF CONDUCT (Slide 14) */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-t border-b border-[#E3DDD2]">
        <Container>
          <div className="space-y-10">
            
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Ethical Principles
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                Foundation of Conduct
              </h2>
              <p className="text-sm text-[#5A5046] leading-relaxed">
                Ethics within Iyalvanam are not imposed laws, but expressions of awareness and integrity. They guide members toward harmony, trust, and right relationship with one another and with nature. Every action is measured by its alignment with truth, non-harm, and collective well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-5 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-[#241D17]">Equality and Respect</h4>
                <p className="text-xs text-[#5A5046]">All beings are equal in essence; no hierarchy, caste, or privilege.</p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-5 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-[#241D17]">Accountability</h4>
                <p className="text-xs text-[#5A5046]">Every member is responsible for their actions and impact on the whole.</p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-5 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-[#241D17]">Integrity & Transparency</h4>
                <p className="text-xs text-[#5A5046]">Honesty in word and deed; openness in communication and resource sharing.</p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-5 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-[#241D17]">Right Use of Resources</h4>
                <p className="text-xs text-[#5A5046]">Conscious, minimal, and regenerative use of natural and material goods.</p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-5 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-[#241D17]">Non-Harm (Ahimsa)</h4>
                <p className="text-xs text-[#5A5046]">Avoidance of harm in thought, word, and action toward life and Earth.</p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-5 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-[#241D17]">Truthful Communication</h4>
                <p className="text-xs text-[#5A5046]">Expressing with clarity and kindness; listening without judgment.</p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-5 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-[#241D17]">Cooperation over Competition</h4>
                <p className="text-xs text-[#5A5046]">Collective success valued above isolated personal gain.</p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-5 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-[#241D17]">Service and Compassion</h4>
                <p className="text-xs text-[#5A5046]">Helping others as a natural expression of unity and love.</p>
              </div>

            </div>

            <div className="text-center pt-2">
              <p className="text-sm font-semibold text-[#8B5A2B] italic">
                “Right thought, right word, right action — in service of truth and harmony.”
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 6. CORE PRINCIPLES OF NATURAL LAW - 7 LAWS (Slide 15 & 16) */}
      <Container>
        <div className="space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                The Universal Order
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                Core Principles of Natural Law
              </h2>
              <p className="text-sm text-[#5A5046]">
                These principles guide every decision — from food systems to governance — tested against one question: <em>Does this align with nature's intelligence and the well-being of all life?</em>
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-[#E3DDD2]">
                <img
                  src="/images/mountain-cascade.jpg"
                  alt="Mountain water cascade through lush rainforest"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {naturalLaws.map((law) => (
              <div
                key={law.num}
                className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-3 hover:border-[#2E4F2B]/40 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-[#E3DDD2] pb-2">
                  <span className="text-xs font-mono font-bold text-[#8B5A2B]">
                    {law.num}
                  </span>
                  <span className="text-xs font-bold text-[#2E4F2B]">
                    {law.tamil}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#241D17]">
                  {law.title}
                </h3>
                <p className="text-xs font-semibold text-[#8B5A2B]">
                  {law.statement}
                </p>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  {law.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#E3DDD2]">
            <div>
              <h4 className="text-base font-bold text-[#2E4F2B]">Ready to walk this path with us?</h4>
              <p className="text-xs text-[#5A5046]">Explore our stewardship pathways and join inquiry.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="primary" size="md" showArrow onClick={() => navigate('/join')}>
                Learn How to Join
              </Button>
              <Button variant="outline" size="md" onClick={() => navigate('/sanctuary')}>
                View Sanctuary Land
              </Button>
            </div>
          </div>

        </div>
      </Container>

    </div>
  );
};
