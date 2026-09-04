import React, { useEffect } from 'react';
import { ArrowRight, Leaf, Sparkles, Heart, Sun, Droplets, ShieldCheck, Layers, BookOpen, Users } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const etymology = [
    {
      word: 'இயல் (Iyal)',
      meaning: 'Nature • Original Essence • Inherent State',
      tamilMeaning: 'இயற்கை, உண்மை நிலை, மாறாத விதி',
      desc: 'That which exists by its own intrinsic truth, without artificial manipulation or synthetic intrusion.',
    },
    {
      word: 'வனம் (Vanam)',
      meaning: 'Living Forest • Sacred Sanctuary • Ecosystem',
      tamilMeaning: 'காடு, தஞ்சம், பல்லுயிர் வளம்',
      desc: 'A dense, perennial forest canopy where birds, trees, soil microbes, and humans dwell in mutual nourishment.',
    },
    {
      word: 'கூடம் (Koodam)',
      meaning: 'Open Hall • Gathering Space • Living Hub',
      tamilMeaning: 'ஒன்றுகூடும் இடம், சபை, வாழ்வியல் கூடம்',
      desc: 'A sacred circle where families and seekers gather to exchange ancestral wisdom, share meals, and live freely.',
    },
  ];

  const pillars = [
    {
      num: '01',
      title: 'Living Soil & Native Food Forests',
      tamil: 'உயிர்ப்புள்ள மண் & கனி வனம்',
      desc: 'Non-chemical, unplowed regenerative agriculture nurturing indigenous grains, millets, and wild fruit forests.',
      path: '/food',
    },
    {
      num: '02',
      title: 'Circadian Biology & Vital Health',
      tamil: 'இயற்கை நல்வாழ்வு & உயிராற்றல்',
      desc: 'Living well water, solar contact, barefoot earthing, unpolished living nutrition, and rhythmic resting cycles.',
      path: '/health',
    },
    {
      num: '03',
      title: 'Earthen Architecture & Sacred Craft',
      tamil: 'மண் கட்டடக் கலை & கைவினை',
      desc: 'Cob, rammed earth, bamboo, and lime masonry built with hand tools, leaving zero toxic footprint on mother earth.',
      path: '/craft',
    },
    {
      num: '04',
      title: 'Mountain Commons & Pure Water',
      tamil: 'மலைச் சாரல் நிலம் & ஊற்று நீர்',
      desc: '4.5+ acres at Dharmapuramadam, Tenkasi, sustained by natural aquifers and protected under perpetual non-commercial trust.',
      path: '/sanctuary',
    },
    {
      num: '05',
      title: 'Ancestral Wisdom & Children’s Learning',
      tamil: 'மரபு வழிக் கல்வி & வாழ்நாள் கற்றல்',
      desc: 'Open ecological learning grounded in daily practical life—seeds, carpentry, native medicine, and quiet reflection.',
      path: '/blog',
    },
    {
      num: '06',
      title: 'Universal Natural Laws & Sovereignty',
      tamil: 'மாறாத இயற்கை விதிகள்',
      desc: 'Rooted in interconnectedness, cause and effect, ahimsa, and self-responsibility for personal and community wellbeing.',
      path: '/principles',
    },
    {
      num: '07',
      title: 'Consensus Governance & Shared Life',
      tamil: 'ஒருமித்த வாழ்வியல் & கூட்டுறவு',
      desc: 'Circle meetings, shared labor (shramadaan), and mutual respect replacing authoritarian hierarchy.',
      path: '/community-life',
    },
    {
      num: '08',
      title: 'Dual Trust Perpetual Safeguard',
      tamil: 'இரு அறக்கட்டளை பாதுகாப்பு',
      desc: 'Unbreakable legal covenants preventing commercial exploitation, subdivision, or privatization of the sacred land.',
      path: '/leadership',
    },
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Statement */}
      <section className="pt-12 sm:pt-20 pb-12 border-b border-[#E3DDD2] bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
              About Iyalvanam & Seyon • எங்களை பற்றி
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              A Living Return to Natural Laws
            </h1>
            <p className="text-sm text-[#8B5A2B] font-medium">
              “இயன்ற வரை இயற்கைக்கு திரும்புவோம்”
            </p>
            <p className="text-base sm:text-lg text-[#5A5046] leading-relaxed pt-1">
              We do not seek to reinvent human life through technology or complex theories. We simply return to the ecological truths that have sustained life and human joy for millennia.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Etymology Section */}
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              The Sacred Name
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
              Etymology of Iyal • Vanam • Koodam
            </h2>
            <p className="text-sm text-[#5A5046]">
              Understanding our identity through the ancient roots of the Tamil tongue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {etymology.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-8 rounded-sm space-y-4 hover:border-[#8B5A2B]/40 transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-[#2E4F2B]">
                    {item.word}
                  </h3>
                  <p className="text-xs font-medium text-[#8B5A2B]">
                    {item.tamilMeaning}
                  </p>
                </div>
                <p className="text-sm font-semibold text-[#241D17]">
                  {item.meaning}
                </p>
                <p className="text-sm text-[#5A5046] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 3. Foundational Vision & Purpose */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-t border-[#E3DDD2] pt-16">
          
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              Vision & Calling
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
              Why We Gather at Tenkasi
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#5A5046] text-base sm:text-lg leading-relaxed">
            <blockquote className="border-l-3 border-[#8B5A2B] pl-5 italic text-lg sm:text-xl text-[#241D17] bg-[#FAF8F3] py-4 pr-4">
              “To co-create a self-reliant, conscious nature community in the Western Ghats where human beings live in total harmony with natural laws, ancestral wisdom, and the forest ecosystem, free from artificial constructs, fostering inner liberation, collective abundance, and ecological regeneration.”
            </blockquote>

            <p className="text-sm text-[#8B5A2B]">
              நோக்கம்: செயற்கையான வாழ்க்கை முறையிலிருந்து விடுபட்டு, இயற்கையின் விதிகளுக்கு ஏற்ப மனித மனம், உடல், சமூகம் மற்றும் பூமி ஆகியவற்றை ஒருங்கிணைத்து முழுமையான அமைதியோடும் தற்சார்போடும் வாழ்வதே இயல்வனத்தின் இலக்கு.
            </p>

            <p>
              Located at Dharmapuramadam at the base of the Agastiyar Malai Biosphere in Tenkasi District, our sanctuary spans 4.5+ acres of mineral-rich red loam soil fed by mountain aquifers and dual monsoons.
            </p>
          </div>

        </div>
      </Container>

      {/* 4. Eight Pillars of Natural Life */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-t border-b border-[#E3DDD2]">
        <Container>
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Living Framework
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                The Eight Pillars of Natural Living
              </h2>
              <p className="text-sm text-[#5A5046]">
                Every dimension of community existence is aligned with ecological regeneration and self-reliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(pillar.path)}
                  className="group bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-3 cursor-pointer hover:border-[#2E4F2B] hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#8B5A2B]">
                      {pillar.num}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#8B5A2B] group-hover:text-[#2E4F2B] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-base font-bold text-[#2E4F2B] group-hover:text-[#241D17] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#8B5A2B] font-medium">
                    {pillar.tamil}
                  </p>
                  <p className="text-xs text-[#5A5046] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. The Dual Trust Structure */}
      <Container>
        <div className="space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              Legal & Spiritual Harmony
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
              Two Trusts. One Unified Sanctuary.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#E3DDD2] pt-8">
            
            <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-8 rounded-sm space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2E4F2B] block">
                01 / Perpetual Asset Trust
              </span>
              <h3 className="text-2xl font-bold text-[#2E4F2B]">
                IYALVANAM Asset Trust
              </h3>
              <p className="text-sm text-[#5A5046] leading-relaxed">
                Safeguards the sanctuary commons. Under strict legal covenants, land, trees, and water bodies can never be divided, mortgaged, sold, or commercially exploited.
              </p>
              <div className="pt-2">
                <Button variant="outline" size="sm" onClick={() => navigate('/sanctuary')}>
                  Explore Sanctuary Land
                </Button>
              </div>
            </div>

            <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-8 rounded-sm space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
                02 / Experiential Platform
              </span>
              <h3 className="text-2xl font-bold text-[#8B5A2B]">
                SEYON Nature Life Foundation
              </h3>
              <p className="text-sm text-[#5A5046] leading-relaxed">
                Conducts hands-on nature camps, raw food workshops (coconut, banana), children's ecological stays, and orientations for seeking families.
              </p>
              <div className="pt-2">
                <Button variant="outline" size="sm" onClick={() => navigate('/leadership')}>
                  Meet Stewards & Founders
                </Button>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-[#E3DDD2]">
            <Button variant="primary" size="md" showArrow onClick={() => navigate('/join')}>
              Learn How to Join
            </Button>
            <Button variant="secondary" size="md" onClick={() => navigate('/contact')}>
              Plan a Sanctuary Visit
            </Button>
          </div>

        </div>
      </Container>

    </div>
  );
};

