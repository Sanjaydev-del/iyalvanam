import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Wheat, 
  HeartPulse, 
  Hammer, 
  Sprout, 
  TreePine, 
  MessageCircle, 
  Sparkles,
  Feather,
  Sun,
  Droplets,
  Layers,
  Compass,
  Users,
  Shield,
  CheckCircle2,
  BookOpen,
  Cpu,
  Heart
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';
import { BlogPost } from '../types';
import { api } from '../services/api';
import { IyalvanamEmblem, SeyonEmblem, LeafBullet } from '../components/OrganicIcons';
import { FAQSection } from '../components/FAQSection';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { content, language } = useLanguage();
  const isTamil = language === 'ta';
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getBlogPosts()
      .then((posts) => setRecentPosts(posts.slice(0, 3)))
      .catch(() => {});
  }, []);

  const namePrinciples = [
    {
      num: '01',
      title: 'Non-Artificial Living',
      tamil: 'செயற்கையற்ற வாழ்வியல்',
      desc: 'Move away from modern artificial lifestyles, toxic materials, and synthetic dependencies.',
    },
    {
      num: '02',
      title: 'Interconnected Life',
      tamil: 'ஒன்றிணைந்த வாழ்க்கை',
      desc: 'Humans are an integral part of nature, not separate or superior to it.',
    },
    {
      num: '03',
      title: 'Collective Existence',
      tamil: 'கூட்டு வாழ்வியல்',
      desc: 'Shared stewardship and community living over isolated hyper-individualism.',
    },
    {
      num: '04',
      title: 'Return to Natural State',
      tamil: 'இயல்பு நிலைக்கு திரும்புதல்',
      desc: '“Iyal” signifies returning to the original, uncorrupted essence of human consciousness.',
    },
    {
      num: '05',
      title: 'Forest as a Living Model',
      tamil: 'வனமே மாதிரி',
      desc: 'Embodying natural diversity, perennial balance, and self-sustaining closed-loop systems.',
    },
  ];

  const seyonElements = [
    {
      letter: 'S',
      title: 'Sun (வெப்பம்)',
      desc: 'Solar energy, circadian daylight rhythm, and vital thermal prana.',
      icon: <Sun className="w-5 h-5 text-[#8B5A2B]" />,
    },
    {
      letter: 'E',
      title: 'Electro-magnetic / Earth / Ecology (மண் / மின் காந்தம்)',
      desc: 'Barefoot grounding, living mineral soil, and harmonious ecosystem design.',
      icon: <Layers className="w-5 h-5 text-[#2E4F2B]" />,
    },
    {
      letter: 'Y',
      title: 'skY (ஆகாயம் / சிந்தனை வெளி)',
      desc: 'Cosmic space energy, mental clarity, silence, and conscious awareness.',
      icon: <Sparkles className="w-5 h-5 text-[#8B5A2B]" />,
    },
    {
      letter: 'O',
      title: 'Oxygen (உயிர் காற்று)',
      desc: 'Pure Western Ghats mountain air, mindful breathing, and respiratory vitality.',
      icon: <Feather className="w-5 h-5 text-[#2E4F2B]" />,
    },
    {
      letter: 'N',
      title: 'raiN (மழை - உயிர் நீர்)',
      desc: 'Mountain aquifer well water, living hydration, and seasonal monsoon cycles.',
      icon: <Droplets className="w-5 h-5 text-[#8B5A2B]" />,
    },
  ];

  const missionPillars = [
    {
      title: 'Regenerative Living',
      tamil: 'மீளுருவாக்க வாழ்வியல்',
      desc: 'Build a self-sustaining community based on cooperation and ecological balance.',
      icon: <TreePine className="w-5 h-5 text-[#2E4F2B]" />,
      path: '/sanctuary',
    },
    {
      title: 'Food Sovereignty',
      tamil: 'உணவு தற்சார்பு',
      desc: 'Practice organic raw & vegan food production, ensuring nourishment and independence for all.',
      icon: <Wheat className="w-5 h-5 text-[#8B5A2B]" />,
      path: '/food',
    },
    {
      title: 'Holistic Health',
      tamil: 'முழுமையான நல்வாழ்வு',
      desc: 'Promote self-healing and natural living through awareness and balanced circadian lifestyle.',
      icon: <HeartPulse className="w-5 h-5 text-[#2E4F2B]" />,
      path: '/health',
    },
    {
      title: 'Conscious Education',
      tamil: 'விழிப்புணர்வு கல்வி',
      desc: 'Redefine learning to nurture creativity, emotional intelligence, and natural self-awareness.',
      icon: <BookOpen className="w-5 h-5 text-[#8B5A2B]" />,
      path: '/blog',
    },
    {
      title: 'Skill-Based Economy',
      tamil: 'கைவினை & திறன் பொருளாதாரம்',
      desc: 'Establish direct production and skill exchange, promoting contribution over consumption.',
      icon: <Hammer className="w-5 h-5 text-[#2E4F2B]" />,
      path: '/craft',
    },
    {
      title: 'Consensus Governance',
      tamil: 'ஒருமித்த நிர்வாகம்',
      desc: 'Implement decentralized, consensus-based decision-making with equal participation.',
      icon: <Users className="w-5 h-5 text-[#8B5A2B]" />,
      path: '/principles',
    },
    {
      title: 'Conscious Technology',
      tamil: 'விழிப்புணர்வு தொழில்நுட்பம்',
      desc: 'Use technology for communication and learning — never for control or distraction.',
      icon: <Cpu className="w-5 h-5 text-[#2E4F2B]" />,
      path: '/principles',
    },
    {
      title: 'Conscious Evolution',
      tamil: 'உள்முக பரிணாமம்',
      desc: 'Foster conscious evolution, unity, and equality through daily life and shared purpose.',
      icon: <Heart className="w-5 h-5 text-[#8B5A2B]" />,
      path: '/principles',
    },
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 lg:space-y-32 pb-20 sm:pb-32">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Slide 1)                                                 */}
      {/* ========================================================================= */}
      <section className="pt-10 sm:pt-16 lg:pt-20">
        <Container>
          <div className="space-y-10 sm:space-y-12">
            
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#ECE6D8] text-[#8B5A2B] text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#2E4F2B]" />
                <span>Community Living • கூட்டு வாழ்வியல் • Tenkasi</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2E4F2B] tracking-tight leading-[1.12]">
                A Living Blueprint for Conscious Human Living & Evolution in Harmony with Nature
              </h1>

              {/* Dual Trust Badges & Taglines */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 border-y border-[#E3DDD2]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <IyalvanamEmblem size={20} className="w-5 h-5 text-[#2E4F2B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2E4F2B]">
                      IYALVANAM IYARKAI VAZHVIYAL KOODAM
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#8B5A2B]">
                    “Nature’s way is the natural way” • இயற்கை வழியே இயல்பு வழி
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <SeyonEmblem size={20} className="w-5 h-5 text-[#8B5A2B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8B5A2B]">
                      SEYON NATURE LIFE FOUNDATION
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#2E4F2B]">
                    “Return to Nature as much as possible” • இயன்ற வரை இயற்கைக்கு திரும்புவோம்
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#5A5046] leading-relaxed max-w-3xl">
                Iyalvanam is a nature-based community sanctuary at the foothills of the Western Ghats where individuals and families gather to live simply, consciously, and in alignment with natural laws, ancestral wisdom, and the living forest ecosystem.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button variant="primary" size="lg" showArrow onClick={() => navigate('/join')}>
                  Join the Community
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/about')}>
                  Explore Our Foundations
                </Button>
              </div>
            </div>

            {/* Slide 1 Image: Sunrise over Western Ghats Mountains */}
            <div className="space-y-2">
              <div className="overflow-hidden rounded-sm border border-[#E3DDD2] bg-[#FAF8F3]">
                <img
                  src="/images/cover-mountain-sun.jpg"
                  alt="Misty morning sun rising over palm trees and Western Ghats mountain ridges at Dharmapuramadam"
                  className="w-full h-auto object-contain block"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/images/western-ghats-fields.jpg');
                  }}
                />
              </div>
              <p className="text-xs text-[#8B5A2B] text-center font-medium">
                Dharmapuramadam, Sivasailam, Tenkasi District — Agastiyar Malai Biosphere Foothills
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. ETYMOLOGY & PHILOSOPHY (Slide 2 & 3)                                    */}
      {/* ========================================================================= */}
      <Container>
        <div className="space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                The Sacred Identity (பெயர்க் காரணம்)
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                Iyalvanam Iyarkai Vazhviyal Koodam
              </h2>
              <p className="text-sm font-semibold text-[#8B5A2B]">
                இயல்வனம் இயற்கை வாழ்வியல் கூடம்
              </p>
              <p className="text-sm text-[#5A5046] leading-relaxed">
                “We don't create a new system — we return to the natural one.”
              </p>

              {/* Meditating Yogi Tree Illustration (Slide 2) */}
              <div className="pt-4 max-w-xs mx-auto lg:mx-0">
                <div className="p-4 bg-[#FAF8F3] border border-[#E3DDD2] rounded-sm text-center space-y-2">
                  <img
                    src="/images/iyalvanam-tree-yogi.jpg"
                    alt="Meditating Yogi Tree Roots Emblem"
                    className="w-48 h-48 mx-auto object-contain"
                  />
                  <p className="text-[11px] font-medium text-[#8B5A2B]">
                    Rooted in Earth • Reaching for Sky • Meditative Balance
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Root Words Grid */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-5 rounded-sm space-y-2">
                  <h3 className="text-lg font-bold text-[#2E4F2B]">
                    இயல் (Iyal)
                  </h3>
                  <p className="text-xs font-semibold text-[#8B5A2B]">
                    Natural • Inherent Nature
                  </p>
                  <ul className="text-xs text-[#5A5046] space-y-1">
                    <li>• That which exists in its original state.</li>
                    <li>• Not modified, not artificial.</li>
                  </ul>
                </div>

                <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-5 rounded-sm space-y-2">
                  <h3 className="text-lg font-bold text-[#2E4F2B]">
                    வனம் (Vanam)
                  </h3>
                  <p className="text-xs font-semibold text-[#8B5A2B]">
                    Forest • Living Ecosystem
                  </p>
                  <ul className="text-xs text-[#5A5046] space-y-1">
                    <li>• A space where all life co-exists.</li>
                    <li>• Not just trees, but a complete living system.</li>
                  </ul>
                </div>

                <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-5 rounded-sm space-y-2">
                  <h3 className="text-lg font-bold text-[#2E4F2B]">
                    இயற்கை வாழ்வியல் (Iyarkai Vazhviyal)
                  </h3>
                  <p className="text-xs font-semibold text-[#8B5A2B]">
                    Natural Way of Living
                  </p>
                  <ul className="text-xs text-[#5A5046] space-y-1">
                    <li>• Life aligned with nature’s immutable laws.</li>
                    <li>• Living as humans were meant to live.</li>
                  </ul>
                </div>

                <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-5 rounded-sm space-y-2">
                  <h3 className="text-lg font-bold text-[#2E4F2B]">
                    கூடம் (Koodam)
                  </h3>
                  <p className="text-xs font-semibold text-[#8B5A2B]">
                    Gathering Space • Collective
                  </p>
                  <ul className="text-xs text-[#5A5046] space-y-1">
                    <li>• A place where people come together freely.</li>
                    <li>• An open circle of mutual nourishment.</li>
                  </ul>
                </div>

              </div>

              {/* Philosophical Essence Block */}
              <div className="bg-[#FAF8F3] border-l-3 border-[#8B5A2B] p-5 rounded-sm space-y-2">
                <p className="text-sm font-semibold text-[#241D17] italic">
                  “Not a place of ownership, but a space of belonging — where land is not possessed, but protected, and life is not controlled, but lived in alignment with nature.”
                </p>
                <p className="text-xs text-[#8B5A2B] font-medium">
                  Essence: “இயல்பான இயற்கை வாழ்வை வாழும் மக்கள் ஒன்றுகூடும் உயிர் மண்டலம்”
                </p>
              </div>
            </div>

          </div>

          {/* 5 Core Principles Embedded in the Name (Slide 3) */}
          <div className="space-y-6 pt-6 border-t border-[#E3DDD2]">
            <div className="max-w-2xl space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Core Principles Encoded in the Name
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2E4F2B]">
                The System Encoded in the Word
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {namePrinciples.map((p) => (
                <div key={p.num} className="bg-[#FAF8F3] border border-[#E3DDD2] p-4 rounded-sm space-y-2">
                  <span className="text-xs font-mono font-bold text-[#8B5A2B] block">
                    {p.num}
                  </span>
                  <h4 className="text-sm font-bold text-[#241D17]">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-[#8B5A2B] font-medium">
                    {p.tamil}
                  </p>
                  <p className="text-xs text-[#5A5046] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 3. SEYON 5-ELEMENTS ENERGY MATRIX (Slide 4)                               */}
      {/* ========================================================================= */}
      <section className="bg-[#FAF8F3] py-16 sm:py-24 border-t border-b border-[#E3DDD2]">
        <Container>
          <div className="space-y-12">
            
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                SEYON Nature Life Foundation • ஐந்து இயற்கை ஆற்றல்கள்
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                The Five Fundamental Energies of Nature
              </h2>
              <p className="text-sm text-[#8B5A2B] font-medium">
                “இயற்கை ஆற்றல்களின் அடிப்படை தன்மையைப் பற்றின புரிதலை உருவாக்குவது”
              </p>
              <p className="text-sm text-[#5A5046]">
                Human vitality is not sustained by artificial stimulants or pharmaceuticals, but through the full spectrum assimilation of nature's primal forces.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* SEYON Elements Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {seyonElements.map((el) => (
                  <div key={el.letter} className="bg-[#F5F2EB] border border-[#E3DDD2] p-5 rounded-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#8B5A2B] font-mono">
                        {el.letter}
                      </span>
                      {el.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[#241D17]">
                      {el.title}
                    </h3>
                    <p className="text-xs text-[#5A5046] leading-relaxed">
                      {el.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Energy Assimilation Diagram (Slide 4) */}
              <div className="lg:col-span-5 bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm text-center space-y-3">
                <h3 className="text-sm font-bold text-[#2E4F2B] uppercase tracking-wider">
                  Full Spectrum of Energy Assimilation
                </h3>
                <div className="overflow-hidden rounded-sm border border-[#E3DDD2] bg-[#FAF8F3] p-2">
                  <img
                    src="/images/seyon-energy-diagram.jpg"
                    alt="Full spectrum of energy assimilation diagram showing sunlight, breath, cosmic energy, and electro-magnetic grounding"
                    className="w-full max-h-72 object-contain mx-auto"
                  />
                </div>
                <p className="text-[11px] text-[#5A5046] leading-relaxed">
                  Sunlight • Direct Cosmic Energy • Pure Breath • Living Raw Food • Earth Magnetism
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE GRAND VISION (Slide 5)                                             */}
      {/* ========================================================================= */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              The Vision (நோக்கம்)
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B] leading-tight">
              A Civilization Rooted in Truth, Cooperation & Natural Law
            </h2>
            <blockquote className="border-l-3 border-[#8B5A2B] pl-4 text-base sm:text-lg text-[#241D17] italic bg-[#FAF8F3] py-4 pr-4">
              “A thriving human community living in harmony with nature — nurturing consciousness, equality, simplicity, and love. A self-sustaining, replicable model where individuals evolve spiritually, socially, and practically — free from dependency on artificial systems. Demonstrating that conscious living is not a dream, but a way of being.”
            </blockquote>
            <p className="text-xs text-[#8B5A2B] font-medium">
              IYALVANAM - SEYON • Western Ghats Living Sanctuary
            </p>
          </div>

          <div className="lg:col-span-6 space-y-2">
            <div className="overflow-hidden rounded-sm border border-[#E3DDD2] bg-[#FAF8F3]">
              <img
                src="/images/western-ghats-fields.jpg"
                alt="Western Ghats mountain ridge panorama over vibrant green paddy fields"
                className="w-full h-auto object-contain block"
              />
            </div>
            <p className="text-xs text-[#8B5A2B] text-center font-medium">
              View of the sacred Agastiyar Malai Biosphere mountain ranges from Tenkasi
            </p>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 5. EIGHT FOUNDATION PILLARS (Slide 6)                                     */}
      {/* ========================================================================= */}
      <section className="bg-[#FAF8F3] py-16 sm:py-24 border-t border-b border-[#E3DDD2]">
        <Container>
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Our Mission (செயல் திட்டம்)
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                Building the Foundation
              </h2>
              <p className="text-sm text-[#5A5046]">
                Every action we take is aligned with natural law — recognizing nature as the guiding intelligence of life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {missionPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(pillar.path)}
                  className="group bg-[#F5F2EB] border border-[#E3DDD2] p-6 rounded-sm space-y-3 cursor-pointer hover:border-[#2E4F2B] hover:shadow-xs transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-[#FAF8F3] rounded-xs border border-[#E3DDD2]">
                      {pillar.icon}
                    </div>
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

      {/* ========================================================================= */}
      {/* 6. PURPOSE & WHO THIS IS FOR (Slide 7 & 8)                                */}
      {/* ========================================================================= */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Purpose of the Community (Slide 7) */}
          <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Core Purpose (களத்தின் நோக்கம்)
              </span>
              <h3 className="text-2xl font-bold text-[#2E4F2B]">
                Purpose of the Community
              </h3>
              <p className="text-xs text-[#5A5046] leading-relaxed">
                This proposal is for building a community that lives in alignment with nature and its laws — not man-made systems.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#F5F2EB] border border-[#E3DDD2] rounded-xs space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  No Place Here For:
                </span>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Ownership, religion, caste, race, money as identity, or any form of artificial labeling.
                </p>
              </div>

              <div className="p-4 bg-[#F5F2EB] border border-[#E3DDD2] rounded-xs space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2E4F2B]">
                  Life Built On What Is Real:
                </span>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Land, food, natural systems, human self-responsibility, and conscious peaceful living.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-sm border border-[#E3DDD2] bg-[#FAF8F3]">
              <img
                src="/images/sivasailam-valley.jpg"
                alt="Sivasailam river valley and dramatic mountain clouds"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

          {/* Who This Is For (Slide 8) */}
          <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Eligibility (யார் இணையலாம்)
              </span>
              <h3 className="text-2xl font-bold text-[#2E4F2B]">
                For Those Who See Clearly
              </h3>
              <p className="text-xs text-[#5A5046] leading-relaxed">
                This is for people who recognize that the current way of living is not aligned with nature's design for humans — that dependency on modern systems is not sustainable, and continuing within it is not the path forward.
              </p>
            </div>

            <div className="p-4 bg-[#F5F2EB] border border-[#E3DDD2] rounded-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E4F2B]">
                Individual Preparation (Everyone Contributes):
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#5A5046]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E4F2B]" />
                  <span>Knowledge</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E4F2B]" />
                  <span>Practical Skills</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E4F2B]" />
                  <span>Physical Soil Work</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E4F2B]" />
                  <span>Financial Support</span>
                </div>
              </div>
              <p className="text-[11px] text-[#8B5A2B] font-medium pt-1">
                “This is not a place for passive participation. Everyone contributes.”
              </p>
            </div>

            <div className="overflow-hidden rounded-sm border border-[#E3DDD2] bg-[#FAF8F3]">
              <img
                src="/images/zen-pebbles-stream.jpg"
                alt="Balanced zen pebbles in running mountain stream"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 7. RECENT JOURNAL REFLECTIONS                                             */}
      {/* ========================================================================= */}
      {recentPosts.length > 0 && (
        <Container>
          <div className="space-y-8">
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                  Sanctuary Chronicles
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
                  Reflections from the Soil
                </h2>
              </div>
              <Button variant="outline" size="sm" onClick={() => navigate('/blog')}>
                View All Journal Entries
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                  className="group bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-3 cursor-pointer hover:border-[#2E4F2B] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-[#8B5A2B]">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <h3 className="text-base font-bold text-[#241D17] group-hover:text-[#2E4F2B] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#5A5046] line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-[#8B5A2B] group-hover:text-[#2E4F2B]">
                    <span>Read Reflection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      )}

      {/* ========================================================================= */}
      {/* 7.5. COMMUNITY FAQ & FOUNDATIONAL CLARITY (25 Q&As)                       */}
      {/* ========================================================================= */}
      <section className="bg-[#FAF8F3] py-16 sm:py-24 border-t border-[#E3DDD2]">
        <Container>
          <div className="bg-[#FAF8F3] border border-[#E3DDD2] rounded-md p-6 sm:p-10 lg:p-12 shadow-xs">
            <FAQSection 
              title="Community FAQ & Foundational Clarity"
              subtitle="25 foundational answers regarding life, land stewardship, finances, and governance at Iyalvanam & Seyon."
            />
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. CLOSING CALL TO ACTION & WHATSAPP (Slide 25)                           */}
      {/* ========================================================================= */}
      <section className="bg-[#FAF8F3] py-16 sm:py-24 border-t border-[#E3DDD2]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              Let the Journey Begin • பயணம் தொடங்குவோம்
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              Return to Nature • Live Consciously • Build Civilization on Love, Trust & Cooperation
            </h2>
            <p className="text-base text-[#5A5046] max-w-xl mx-auto leading-relaxed">
              Step out of the artificial construct and join hands with like-minded seeking families in the Western Ghats.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" showArrow onClick={() => navigate('/join')}>
                Begin Your Alignment
              </Button>
              <a
                href="https://tinyurl.com/2zap33fy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Official WhatsApp Group</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
