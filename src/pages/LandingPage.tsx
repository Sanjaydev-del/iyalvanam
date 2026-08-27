import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Compass, 
  TreePine, 
  Sprout, 
  Scale, 
  Mountain, 
  Feather, 
  Clock, 
  CheckCircle2,
  Mail,
  Phone
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { LeafBullet } from '../components/OrganicIcons';
import { BlogPost, LeadershipProfile } from '../types';
import { api } from '../services/api';

interface LandingPageProps {
  navigate: (path: string) => void;
  showToast: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ navigate, showToast }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [founder, setFounder] = useState<LeadershipProfile | null>(null);
  const [coFounder, setCoFounder] = useState<LeadershipProfile | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getBlogPosts().then((data) => {
      if (data && data.length > 0) setBlogs(data.slice(0, 3));
    }).catch(() => {});

    api.getLeadershipProfiles().then((list) => {
      if (list && list.length > 0) {
        setFounder(list.find((l) => l.designation === 'FOUNDER') || null);
        setCoFounder(list.find((l) => l.designation === 'CO_FOUNDER') || null);
      }
    }).catch(() => {});
  }, []);

  return (
    <div className="bg-[#f4eedb] text-[#261a12] space-y-20 sm:space-y-28 lg:space-y-36 pb-20 sm:pb-32">
      
      {/* ========================================================================= */}
      {/* 01 — HERO (PUBLICATION OPENING)                                          */}
      {/* ========================================================================= */}
      <section className="pt-8 sm:pt-14 lg:pt-20">
        <Container>
          <div className="space-y-8 sm:space-y-12">
            
            {/* Header Text Group */}
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#6b2816] font-semibold">
                <span>Dharmapuramadam, Tenkasi</span>
                <span>•</span>
                <span>Western Ghats Foothills</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif-display font-bold text-[#1b331b] tracking-tight leading-[1.08] break-words">
                A Sacred Return to Forest, Soil & Community
              </h1>

              <p className="text-sm sm:text-base font-tamil text-[#6b2816] font-medium">
                “இயன்ற வரை இயற்கைக்கு திரும்புவோம்” — Two Trusts. One Sovereign Vision.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-[#574637] font-serif-body leading-relaxed max-w-2xl">
                A conscious land sanctuary in Tamil Nadu dedicated to non-artificial living, ancestral ecology, and intergenerational self-reliance.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  showArrow
                  onClick={() => navigate('/join')}
                >
                  Join as Resident Family
                </Button>

                <button
                  onClick={() => navigate('/about')}
                  className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816] hover:text-[#1b331b] transition-colors py-2 px-1 cursor-pointer"
                >
                  <span>Discover our story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Immersive Editorial Photograph (Real, documentary crop) */}
            <div className="relative aspect-[16/10] sm:aspect-[21/10] overflow-hidden rounded-xl sm:rounded-2xl border border-[#6b2816]/15 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=80"
                alt="Iyalvanam Tenkasi Western Ghats Foothills"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4 sm:p-6 text-[#faf6eb] flex items-end justify-between">
                <span className="text-xs font-serif opacity-90">
                  Dharmapuramadam sanctuary land under the morning mist of Agastiyar hills
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono opacity-70">
                  8.9592° N, 77.3152° E
                </span>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 02 — PURPOSE & INTRODUCTION (EDITORIAL ASYMMETRY)                         */}
      {/* ========================================================================= */}
      <section className="border-t border-b border-[#6b2816]/12 py-16 sm:py-24 bg-[#faf6eb]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                01 / The Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#1b331b]">
                Why We Chose to Step Away
              </h2>
              <p className="text-xs font-tamil text-[#6b2816]">
                செயற்கை கட்டமைப்புகளிலிருந்து விழிப்புணர்வு
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#574637] font-serif-body text-base sm:text-lg leading-relaxed">
              <p>
                Modern industrial society has created a deep disconnect—between humans and nature, between individuals and community, and between the way life was designed to be lived and the artificial systems built around it.
              </p>
              <p>
                At <strong className="text-[#1b331b] font-serif-display">Iyalvanam & Seyon</strong>, we do not seek to invent a complicated ideology. We simply return to first principles: pure spring water from living ground, natural foods grown in multi-tier forests, natural earthen shelter, and cooperative community circles governed by mutual consent.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/principles')}
                  className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#1b331b] hover:text-[#6b2816] transition-colors cursor-pointer"
                >
                  <span>Explore the 7 Natural Laws</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 03 — TWO TRUSTS. ONE UNIFIED SANCTUARY (EDITORIAL SPLIT)                  */}
      {/* ========================================================================= */}
      <section>
        <Container>
          <div className="space-y-12 sm:space-y-16">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                02 / Governance Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#1b331b]">
                Two Trusts. One Unified Sanctuary.
              </h2>
              <p className="text-xs font-tamil text-[#6b2816] font-medium">
                நிலப் பாதுகாப்பும் கள செயல்பாடும் இணைந்த இரட்டை கட்டமைப்பு
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 border-t border-[#6b2816]/15 pt-10">
              
              {/* Trust 1: Iyalvanam Asset Trust */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#6b2816]/10">
                  <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#1b331b]">
                    Perpetual Land Custodian
                  </span>
                  <span className="text-[11px] font-mono text-[#6b2816]">Trust #01</span>
                </div>
                <h3 className="text-2xl font-serif-display font-bold text-[#1b331b]">
                  IYALVANAM Asset Trust
                </h3>
                <p className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed">
                  Holds all physical land, wells, forests, and permanent infrastructure in irrevocable public commons. Under strict environmental covenants, trust land can never be mortgaged, subdivided, or commercially sold.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#261a12] pt-2">
                  <li className="flex items-center gap-2">
                    <LeafBullet className="w-3 h-3 text-[#1b331b]" />
                    <span>4.5+ Acres Sanctuary at Dharmapuramadam, Tenkasi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LeafBullet className="w-3 h-3 text-[#1b331b]" />
                    <span>Traditional stone open well & native heirloom seed vault</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LeafBullet className="w-3 h-3 text-[#1b331b]" />
                    <span>Consensus circle membership model</span>
                  </li>
                </ul>
              </div>

              {/* Trust 2: Seyon Operational Trust */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#6b2816]/10">
                  <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                    Experiential Living Platform
                  </span>
                  <span className="text-[11px] font-mono text-[#1b331b]">Trust #02</span>
                </div>
                <h3 className="text-2xl font-serif-display font-bold text-[#6b2816]">
                  SEYON Nature Life Foundation
                </h3>
                <p className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed">
                  The active educational and living arm pioneered by Shanmugavel. Conducting monthly nature camps, natural food workshops (coconut, banana), health immersions, and community orientations.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#261a12] pt-2">
                  <li className="flex items-center gap-2">
                    <LeafBullet className="w-3 h-3 text-[#6b2816]" />
                    <span>50+ Monthly Experiential Nature Camps conducted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LeafBullet className="w-3 h-3 text-[#6b2816]" />
                    <span>1,000+ Participants introduced to natural living</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LeafBullet className="w-3 h-3 text-[#6b2816]" />
                    <span>Sivasailam foothills natural food research</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 04 — PEOPLE & STEWARDS (AUTHENTIC EDITORIAL PROFILES)                     */}
      {/* ========================================================================= */}
      <section className="bg-[#faf6eb] py-16 sm:py-24 border-t border-b border-[#6b2816]/12">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                  03 / The Stewards
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#1b331b]">
                  Leadership Behind the Vision
                </h2>
                <p className="text-xs font-tamil text-[#6b2816]">
                  இயல்வனம் & சேயோன் வழிகாட்டிகள் – தத்துவமும் களப்பணியும்
                </p>
              </div>

              <button
                onClick={() => navigate('/leadership')}
                className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#1b331b] hover:text-[#6b2816] transition-colors cursor-pointer self-start sm:self-auto"
              >
                <span>View Leadership Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Profiles Editorial Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Founder Profile */}
              <div className="space-y-6">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-xl border border-[#6b2816]/15 bg-[#f4eedb]">
                  <img
                    src={founder?.profileImage || '/images/founder-emblem.jpg'}
                    alt="Rajesh — Founder"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-serif uppercase tracking-widest text-[#6b2816] font-semibold">
                    Founder & Vision Steward
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#1b331b]">
                    Rajesh
                  </h3>
                  <p className="text-xs font-tamil text-[#6b2816]">
                    நிறுவனர் & தொலைநோக்கு வழிகாட்டி
                  </p>
                  <p className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed pt-1">
                    A former banker who chose to step away from corporate constructs to question the way modern society defines life, success and freedom. Guiding the permanent sanctuary land in Tenkasi.
                  </p>
                  <blockquote className="border-l-2 border-[#6b2816] pl-4 italic text-xs sm:text-sm text-[#6b2816] font-serif pt-1">
                    “For us, this is not just a project. It is a journey back to what is fundamental—freedom, nature, connection and a meaningful way of living.”
                  </blockquote>
                  <div className="pt-2">
                    <button
                      onClick={() => navigate('/leadership/founder')}
                      className="text-xs font-serif font-bold uppercase tracking-wider text-[#1b331b] hover:text-[#6b2816] transition-colors cursor-pointer"
                    >
                      Read full profile of Rajesh →
                    </button>
                  </div>
                </div>
              </div>

              {/* Co-Founder Profile */}
              <div className="space-y-6">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-xl border border-[#6b2816]/15 bg-[#f4eedb]">
                  <img
                    src={coFounder?.profileImage || '/images/co-founder-emblem.jpg'}
                    alt="Shanmugavel — Co-Founder"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-serif uppercase tracking-widest text-[#1b331b] font-semibold">
                    Co-Founder & Operational Steward
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#6b2816]">
                    Shanmugavel
                  </h3>
                  <p className="text-xs font-tamil text-[#1b331b]">
                    இணை நிறுவனர் & கள ஒருங்கிணைப்பாளர்
                  </p>
                  <p className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed pt-1">
                    Designer and mechanical engineering researcher from Coimbatore whose 45-day recovery in ICU during COVID-19 inspired the SEYON Nature Life movement and 50+ experiential camps.
                  </p>
                  <blockquote className="border-l-2 border-[#1b331b] pl-4 italic text-xs sm:text-sm text-[#1b331b] font-serif pt-1">
                    “Let us live happily together with nature, as much as possible.”
                  </blockquote>
                  <div className="pt-2">
                    <button
                      onClick={() => navigate('/leadership/co-founder')}
                      className="text-xs font-serif font-bold uppercase tracking-wider text-[#6b2816] hover:text-[#1b331b] transition-colors cursor-pointer"
                    >
                      Read full profile of Shanmugavel →
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 05 — MANIFESTO & PRINCIPLES (NUMBERED EDITORIAL)                          */}
      {/* ========================================================================= */}
      <section>
        <Container>
          <div className="space-y-12 sm:space-y-16">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                04 / Manifesto & Ethics
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#1b331b]">
                The Natural Laws of Living
              </h2>
              <p className="text-xs font-tamil text-[#6b2816]">
                மாறாத இயற்கை விதிகள் – வாழ்வியல் வழிகாட்டி
              </p>
            </div>

            {/* Numbered Clean List (No 15 identical boxes) */}
            <div className="divide-y divide-[#6b2816]/15 border-t border-b border-[#6b2816]/15">
              
              <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <span className="md:col-span-2 font-mono text-2xl sm:text-3xl text-[#6b2816] font-bold">01</span>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-serif-display font-bold text-[#1b331b]">Interconnectedness</h3>
                  <span className="text-xs font-tamil text-[#6b2816]">ஒன்றிணைவு</span>
                </div>
                <p className="md:col-span-6 text-sm text-[#574637] font-serif-body leading-relaxed">
                  All living and non-living elements form a single seamless web. An action affecting a drop of water or blade of grass ripples across the entire ecosystem.
                </p>
              </div>

              <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <span className="md:col-span-2 font-mono text-2xl sm:text-3xl text-[#6b2816] font-bold">02</span>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-serif-display font-bold text-[#1b331b]">Cause & Effect</h3>
                  <span className="text-xs font-tamil text-[#6b2816]">காரண காரியம்</span>
                </div>
                <p className="md:col-span-6 text-sm text-[#574637] font-serif-body leading-relaxed">
                  Degraded soil yields sickness and friction; nurtured living earth yields vitality, pure spring water, and sustained community peace.
                </p>
              </div>

              <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <span className="md:col-span-2 font-mono text-2xl sm:text-3xl text-[#6b2816] font-bold">03</span>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-serif-display font-bold text-[#1b331b]">Self-Responsibility</h3>
                  <span className="text-xs font-tamil text-[#6b2816]">சுய பொறுப்புணர்வு</span>
                </div>
                <p className="md:col-span-6 text-sm text-[#574637] font-serif-body leading-relaxed">
                  Each resident takes radical stewardship over their consumption, waste, nourishment, daily thoughts, and ecological footprint.
                </p>
              </div>

              <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <span className="md:col-span-2 font-mono text-2xl sm:text-3xl text-[#6b2816] font-bold">04</span>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-serif-display font-bold text-[#1b331b]">Ecological Regeneration</h3>
                  <span className="text-xs font-tamil text-[#6b2816]">மீளுருவாக்கம்</span>
                </div>
                <p className="md:col-span-6 text-sm text-[#574637] font-serif-body leading-relaxed">
                  Human presence should not merely be neutral; it must leave topsoil richer, native forests denser, and groundwater aquifers higher.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('/principles')}
                className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#1b331b] hover:text-[#6b2816] transition-colors cursor-pointer"
              >
                <span>Read the Complete Principles & Guidelines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 06 — PROJECTS & PHYSICAL INFRASTRUCTURE                                   */}
      {/* ========================================================================= */}
      <section className="bg-[#faf6eb] py-16 sm:py-24 border-t border-b border-[#6b2816]/12">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                  05 / Real Work on the Land
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#1b331b]">
                  Sanctuary Infrastructure
                </h2>
                <p className="text-xs font-tamil text-[#6b2816]">
                  தர்மபுரமடம் களத்தில் நிலைபெறும் ஆக்கப்பணிகள்
                </p>
              </div>

              <button
                onClick={() => navigate('/land')}
                className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#1b331b] hover:text-[#6b2816] transition-colors cursor-pointer self-start sm:self-auto"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Featured Main Project + Secondary Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Featured Project */}
              <div className="lg:col-span-7 space-y-4">
                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-[#6b2816]/15 bg-[#f4eedb]">
                  <img
                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                    alt="Agroforestry and Well at Tenkasi"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-[#6b2816]">
                    <span>Water & Forestry</span>
                    <span>•</span>
                    <span className="text-emerald-800">Active Stewardship</span>
                  </div>
                  <h3 className="text-2xl font-serif-display font-bold text-[#1b331b]">
                    Deep Stone Open Well & Subterranean Spring
                  </h3>
                  <p className="text-sm text-[#574637] font-serif-body leading-relaxed">
                    Tapping into uncontaminated Western Ghats aquifer springs, feeding 200+ native saplings along bio-swales without electrical grid dependence.
                  </p>
                </div>
              </div>

              {/* Supporting Projects */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="p-6 rounded-xl bg-[#f4eedb] border border-[#6b2816]/12 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#6b2816]">Community Space</span>
                  <h4 className="text-lg font-serif-display font-bold text-[#1b331b]">
                    Earthen Community Hall (கூடம்)
                  </h4>
                  <p className="text-xs text-[#574637] font-serif-body leading-relaxed">
                    Octagonal bamboo and lime-plastered assembly space for daily consensus circles and cultural gatherings.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#f4eedb] border border-[#6b2816]/12 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#1b331b]">Biodiversity Vault</span>
                  <h4 className="text-lg font-serif-display font-bold text-[#6b2816]">
                    Heirloom Native Seed Bank
                  </h4>
                  <p className="text-xs text-[#574637] font-serif-body leading-relaxed">
                    Preserving indigenous non-hybrid paddy, millets, greens, and medicinal roots collected across Tamil Nadu.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#f4eedb] border border-[#6b2816]/12 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#6b2816]">Off-Grid Energy</span>
                  <h4 className="text-lg font-serif-display font-bold text-[#1b331b]">
                    Decentralized Solar Micro-Grid
                  </h4>
                  <p className="text-xs text-[#574637] font-serif-body leading-relaxed">
                    Powering clean water aeration, herbal extract preservation, and evening illumination with zero fossil fuels.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 07 — SANCTUARY JOURNAL (EDITORIAL PUBLICATION)                            */}
      {/* ========================================================================= */}
      {blogs.length > 0 && (
        <section>
          <Container>
            <div className="space-y-12">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-2 max-w-xl">
                  <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                    06 / Stories from the Ground
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#1b331b]">
                    Sanctuary Journal
                  </h2>
                  <p className="text-xs font-tamil text-[#6b2816]">
                    கள அனுபவங்களும் கட்டுரைகளும்
                  </p>
                </div>

                <button
                  onClick={() => navigate('/blog')}
                  className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#1b331b] hover:text-[#6b2816] transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <span>Read All Stories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                    className="cursor-pointer space-y-3 group"
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-xl border border-[#6b2816]/15 bg-[#faf6eb]">
                      <img
                        src={post.imageUrl || 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-serif uppercase tracking-widest text-[#6b2816] font-semibold">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-serif-display font-bold text-[#261a12] group-hover:text-[#1b331b] transition-colors leading-snug break-words">
                        {post.title}
                      </h3>
                      <p className="text-xs text-[#574637] font-serif-body line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Container>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 08 — PARTICIPATION & VISIT (QUIET INVITATION)                              */}
      {/* ========================================================================= */}
      <section className="bg-[#1b331b] text-[#faf6eb] py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-serif uppercase tracking-widest text-[#c49a38] font-bold block">
              07 / Fellowship & Orientation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold tracking-tight">
              Begin Your Alignment with the Land
            </h2>
            <p className="text-sm sm:text-base text-[#faf6eb]/85 font-serif-body leading-relaxed">
              We welcome aligned families and seekers to schedule a quiet orientation stay, participate in monthly SEYON nature camps, or join the sanctuary commons.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                showArrow
                onClick={() => navigate('/join')}
              >
                Express Alignment to Join
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-[#faf6eb] border-[#faf6eb]/40 hover:bg-[#faf6eb] hover:text-[#1b331b]"
                onClick={() => navigate('/contact')}
              >
                Schedule an On-Land Visit
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
