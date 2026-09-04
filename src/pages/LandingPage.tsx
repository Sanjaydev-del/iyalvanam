import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Compass, 
  TreePine, 
  Sprout, 
  Scale, 
  Mountain, 
  BookOpen, 
  Sliders, 
  Wheat, 
  Hammer, 
  Sun, 
  HeartPulse, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Mail, 
  MessageCircle, 
  Heart, 
  Users, 
  Droplets, 
  Wind, 
  Flame, 
  Globe
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { IyalvanamEmblem, SeyonEmblem } from '../components/OrganicIcons';
import { PrinciplesAccordion } from '../components/PrinciplesAccordion';
import { SpiritualProgression } from '../components/SpiritualProgression';
import { TrustDiagram } from '../components/TrustDiagram';
import { MapSection } from '../components/MapSection';

interface LandingPageProps {
  navigate: (path: string) => void;
  showToast?: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ navigate }) => {
  useEffect(() => {
    // Check if there is an anchor in the hash
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 lg:space-y-32 pb-20 sm:pb-32 font-sans selection:bg-[#2E4F2B] selection:text-[#F5F2EB]">
      
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO (BILINGUAL OPENING & SACRED PURPOSE)                   */}
      {/* ========================================================================= */}
      <section id="hero" className="pt-8 sm:pt-14 lg:pt-20">
        <Container>
          <div className="space-y-8 sm:space-y-12">
            
            {/* Bilingual Header Group */}
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2E4F2B]" />
                  <span>Dharmapuramadam & Sivasailam</span>
                </span>
                <span>•</span>
                <span>Tenkasi District, Western Ghats</span>
              </div>

              {/* Main Titles */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif-heading font-bold text-[#2E4F2B] tracking-tight leading-[1.1] break-words">
                  Iyalvanam Iyarkai Vazhviyal Koodam
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-tamil-serif font-bold text-[#8B5A2B]">
                  இயல்வனம் இயற்கை வாழ்வியல் கூடம்
                </h2>
              </div>

              {/* Taglines */}
              <div className="p-3.5 sm:p-4 bg-[#FAF8F3] border-l-4 border-[#2E4F2B] rounded-r-xl border border-[#D4C5A9]/60 space-y-1">
                <p className="text-sm sm:text-base font-tamil font-semibold text-[#2E4F2B]">
                  “இயன்ற வரை இயற்கைக்கு திரும்புவோம்”
                </p>
                <p className="text-xs sm:text-sm font-serif text-[#8B5A2B] uppercase tracking-wider font-semibold">
                  Two Trusts. One Sovereign Vision — Return to Nature
                </p>
              </div>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg lg:text-xl text-[#5C5044] leading-relaxed max-w-2xl font-sans">
                A conscious land sanctuary in Tamil Nadu dedicated to non-artificial living, ancestral ecology, pristine open-well water, and intergenerational self-reliance.
              </p>

              {/* Two CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToSection('vision')}
                  className="px-6 py-3.5 rounded-xl bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-sm font-serif font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <span>Explore the Vision</span>
                  <ArrowRight className="w-4 h-4 text-[#D4C5A9]" />
                </button>

                <a
                  href="https://tinyurl.com/2zap33fy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#8B5A2B] hover:bg-[#66411E] text-[#FAF8F3] text-sm font-serif font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
                  <span>Join the Community (WhatsApp)</span>
                </a>
              </div>
            </div>

            {/* Grounded Documentary Photo of Western Ghats Forest Canopy */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl border border-[#D4C5A9] shadow-xs bg-[#ECE6D8]">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=80"
                alt="Western Ghats lush forest canopy and mountain sanctuary"
                className="w-full h-full object-cover filter contrast-[0.98] brightness-[0.97]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[#FAF8F3] text-xs sm:text-sm font-serif max-w-lg drop-shadow-sm">
                <span className="font-semibold block">Western Ghats Foothills Sanctuary</span>
                <span className="text-[11px] opacity-90">Agasthiyarmalai Biosphere Reserve perimeter • Tenkasi District</span>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — ETYMOLOGY (4-CARD SEMANTIC GRID)                             */}
      {/* ========================================================================= */}
      <section id="etymology" className="scroll-mt-20">
        <Container>
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                The Sacred Roots of Our Name • பெயர்க் காரணம்
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                Understanding the Sacred Name: Iyal-Vanam-Koodam
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                Every syllable of our identity is rooted in classical Tamil ecological wisdom and respect for natural laws.
              </p>
            </div>

            {/* 4-Card Etymology Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              
              {/* Card 1: IYAL */}
              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-[#2E4F2B]/50 transition-colors">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#ECE6D8] flex items-center justify-center text-[#2E4F2B] font-serif font-bold text-lg">
                    இ
                  </div>
                  <h3 className="text-xl font-serif-heading font-bold text-[#2E4F2B]">
                    Iyal (இயல்)
                  </h3>
                  <div className="text-xs font-serif uppercase tracking-wider text-[#8B5A2B] font-semibold">
                    The Natural State
                  </div>
                  <p className="text-xs text-[#5C5044] leading-relaxed pt-1">
                    That which is inherent, spontaneous, unforced, and true. Living in strict alignment with the natural design of the human body and mind.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D4C5A9]/40 text-[11px] font-tamil text-[#8B5A2B]">
                  செயற்கையற்ற தூய இயற்கை நெறி
                </div>
              </div>

              {/* Card 2: VANAM */}
              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-[#2E4F2B]/50 transition-colors">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#ECE6D8] flex items-center justify-center text-[#2E4F2B] font-serif font-bold text-lg">
                    வ
                  </div>
                  <h3 className="text-xl font-serif-heading font-bold text-[#2E4F2B]">
                    Vanam (வனம்)
                  </h3>
                  <div className="text-xs font-serif uppercase tracking-wider text-[#8B5A2B] font-semibold">
                    The Living Forest
                  </div>
                  <p className="text-xs text-[#5C5044] leading-relaxed pt-1">
                    The ancient multi-layered forest canopy, the sacred grove, and the shelter of living soil, birds, waters, and wild biodiversity.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D4C5A9]/40 text-[11px] font-tamil text-[#8B5A2B]">
                  உயிர் சூழல் காக்கும் பசுமைப் பெருவனம்
                </div>
              </div>

              {/* Card 3: KOODAM */}
              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-[#2E4F2B]/50 transition-colors">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#ECE6D8] flex items-center justify-center text-[#2E4F2B] font-serif font-bold text-lg">
                    கூ
                  </div>
                  <h3 className="text-xl font-serif-heading font-bold text-[#2E4F2B]">
                    Koodam (கூடம்)
                  </h3>
                  <div className="text-xs font-serif uppercase tracking-wider text-[#8B5A2B] font-semibold">
                    The Assembly Sanctuary
                  </div>
                  <p className="text-xs text-[#5C5044] leading-relaxed pt-1">
                    The community hall, the circle of seekers, and the shared space where families gather to work, learn, cook, and dwell without hierarchy.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D4C5A9]/40 text-[11px] font-tamil text-[#8B5A2B]">
                  கற்றலும் பகிர்தலும் நிகழும் பொதுக்கூடம்
                </div>
              </div>

              {/* Card 4: THE RETURN */}
              <div className="bg-[#ECE6D8] border-2 border-[#2E4F2B]/40 rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#2E4F2B] flex items-center justify-center text-[#FAF8F3] font-serif font-bold text-lg">
                    மீ
                  </div>
                  <h3 className="text-xl font-serif-heading font-bold text-[#2E4F2B]">
                    The Return (மீள்தல்)
                  </h3>
                  <div className="text-xs font-serif uppercase tracking-wider text-[#8B5A2B] font-semibold">
                    “இயன்ற வரை இயற்கைக்கு”
                  </div>
                  <p className="text-xs text-[#241D17] leading-relaxed pt-1">
                    We do not need to invent complex artificial systems. We merely need to return, step by step, to the natural way that supported life for eons.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D4C5A9] text-[11px] font-serif italic text-[#5C5044]">
                  Returning to what is fundamental: freedom, soil, connection.
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — PHILOSOPHY & 5 ELEMENTS (PANCHA BHOOTAS)                     */}
      {/* ========================================================================= */}
      <section id="philosophy" className="scroll-mt-20">
        <Container>
          <div className="space-y-12">
            
            {/* Top Description */}
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Foundational Philosophy • தத்துவ அடித்தளம்
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                Five Core Tenets of Natural Living
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                Health, sanity, and sovereignty emerge effortlessly when we cease violating natural laws and re-align our daily habits with the universe.
              </p>
            </div>

            {/* 5 Core Tenets List */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  num: '01',
                  title: 'Non-Artificial Living',
                  tamil: 'செயற்கையற்ற வாழ்வியல்',
                  desc: 'Eliminating synthetic chemicals, ultra-processed food, toxic medicine, and artificial dependencies from daily life.'
                },
                {
                  num: '02',
                  title: 'Perpetual Nature Commons',
                  tamil: 'பொது நிலப் பாதுகாப்பு',
                  desc: 'Holding land permanently in trust for ecology. Land is not a financial asset to be bought, sold, or fragmented.'
                },
                {
                  num: '03',
                  title: 'Living Food Sovereignty',
                  tamil: 'உணவுத் தற்சார்பு',
                  desc: 'Consuming heirloom seeds, native millets, tender coconut, bananas, and living produce harvested straight from the branch.'
                },
                {
                  num: '04',
                  title: 'Autonomous Circles',
                  tamil: 'அதிகாரமற்ற தன்னாட்சி',
                  desc: 'Replacing bureaucratic hierarchies and coercion with patient consensus circles rooted in truth and trust.'
                },
                {
                  num: '05',
                  title: 'Intergenerational Ecology',
                  tamil: 'தலைமுறை கடந்த அறம்',
                  desc: 'Ensuring children inherit uncontaminated water tables, rich forest loam, and living reverence for all beings.'
                }
              ].map((tenet, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-[#2E4F2B]/40 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-serif font-bold text-[#8B5A2B]">
                      {tenet.num}
                    </span>
                    <h4 className="font-serif-heading font-bold text-sm text-[#2E4F2B] leading-snug">
                      {tenet.title}
                    </h4>
                    <div className="text-[11px] font-tamil text-[#8B5A2B]">
                      {tenet.tamil}
                    </div>
                    <p className="text-xs text-[#5C5044] font-sans leading-relaxed pt-1">
                      {tenet.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 5 Elements (Pancha Bhootas) Callout Banner */}
            <div className="bg-[#2E4F2B] text-[#FAF8F3] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-serif uppercase tracking-widest text-[#D4C5A9] font-semibold block">
                  Pancha Bhootas • ஐம்பூதங்களின் மருத்துவம்
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#FAF8F3]">
                  The Living Medicine of the Five Elements
                </h3>
                <p className="text-xs sm:text-sm text-[#F5F2EB]/80 font-sans leading-relaxed">
                  We don’t create a new health system. We return to the five elements that created the human body over millions of years.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-2">
                
                <div className="p-4 rounded-xl bg-[#1E351C] border border-[#D4C5A9]/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#D4C5A9]">
                    <Globe className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>Space (ஆகாயம்)</span>
                  </div>
                  <p className="text-[11px] text-[#F5F2EB]/75 leading-relaxed">
                    Mental stillness, digital detox, spaciousness, and unhurried time under the open mountain sky.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1E351C] border border-[#D4C5A9]/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#D4C5A9]">
                    <Wind className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>Air (வாயு)</span>
                  </div>
                  <p className="text-[11px] text-[#F5F2EB]/75 leading-relaxed">
                    Pristine mountain forest air, rich in negative ions, oxygenating blood cells effortlessly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1E351C] border border-[#D4C5A9]/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#D4C5A9]">
                    <Flame className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>Fire / Sun (அக்னி)</span>
                  </div>
                  <p className="text-[11px] text-[#F5F2EB]/75 leading-relaxed">
                    Surya Upasana, daily morning sunlight absorption, circadian synchronization, and natural vitality.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1E351C] border border-[#D4C5A9]/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#D4C5A9]">
                    <Droplets className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>Rain / Water (அப்பு)</span>
                  </div>
                  <p className="text-[11px] text-[#F5F2EB]/75 leading-relaxed">
                    Living, unchlorinated open-well water and mountain monsoon showers rich in natural minerals.
                  </p>
                </div>

                <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-[#1E351C] border border-[#D4C5A9]/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#D4C5A9]">
                    <Mountain className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>Earth (பிருத்வி)</span>
                  </div>
                  <p className="text-[11px] text-[#F5F2EB]/75 leading-relaxed">
                    Barefoot earthing on forest loam, living organic mulch, and breathable mud-stone architecture.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — VISION (PROMINENT FULL-WIDTH STATEMENT BLOCK)                */}
      {/* ========================================================================= */}
      <section id="vision" className="scroll-mt-20 bg-[#FAF8F3] border-y border-[#D4C5A9] py-16 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 text-center sm:text-left">
            <div className="space-y-3">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-bold block">
                The Sovereign Vision • தொலைநோக்குப் பிரகடனம்
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#2E4F2B] leading-tight">
                To liberate human life from artificial systems and restore our sacred connection with the earth.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#5C5044] leading-relaxed text-left pt-4">
              <p>
                Modern society has organized human existence around artificial metrics: corporate cubicles, toxic processed food, debt slavery, synthetic pharmaceuticals, and screen addiction. In doing so, we have traded away our physical health, our mental peace, and our children’s future.
              </p>
              <p>
                <strong>Iyalvanam & SEYON</strong> exist as a real, tangible alternative. In Tenkasi, at the feet of the Western Ghats, we are proving that multi-generational families can live with radiant health, complete food sovereignty, zero chemical pollution, and profound spiritual tranquility.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D4C5A9]/50">
              <span className="text-xs font-tamil text-[#8B5A2B] font-semibold">
                “மனிதன் வாழ்வதற்காகவே படைக்கப்பட்டான், ஓடுவதற்காக அல்ல.”
              </span>
              <span className="text-xs font-serif text-[#2E4F2B] font-bold">
                IYALVANAM & SEYON COMMONS
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — 8 PILLARS (CONSISTENT LUCIDE ICON GRID)                      */}
      {/* ========================================================================= */}
      <section id="pillars" className="scroll-mt-20">
        <Container>
          <div className="space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                The Architecture of Wholeness • எட்டுத் தூண்கள்
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                8 Pillars of Conscious Community Living
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                A comprehensive framework covering every aspect of regenerative human society.
              </p>
            </div>

            {/* 8-Pillars Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {[
                {
                  icon: <Sprout className="w-6 h-6 text-[#2E4F2B]" />,
                  title: '1. Regenerative Living',
                  tamil: 'மறுசீரமைப்பு வாழ்வியல்',
                  desc: 'Soil building, multi-tier food forest agroforestry, and leaving every square meter of earth richer than we found it.'
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-[#8B5A2B]" />,
                  title: '2. Conscious Education',
                  tamil: 'இயற்கைவழிக் கல்வி',
                  desc: 'Hands-in-soil learning for children, free from competitive exams, emphasizing craft, botany, wisdom, and emotional balance.'
                },
                {
                  icon: <Sliders className="w-6 h-6 text-[#2E4F2B]" />,
                  title: '3. Conscious Technology',
                  tamil: 'பயனுறு தொழில்நுட்பம்',
                  desc: 'Appropriate, non-addictive tech: decentralized solar power, gravity water pumps, and zero digital invasion of sacred family spaces.'
                },
                {
                  icon: <Wheat className="w-6 h-6 text-[#8B5A2B]" />,
                  title: '4. Food Sovereignty',
                  tamil: 'உணவுத் தற்சார்பு',
                  desc: 'Saving traditional heirloom seeds, unpolished millets, mountain bananas, and zero dependency on commercial supermarket chains.'
                },
                {
                  icon: <Hammer className="w-6 h-6 text-[#2E4F2B]" />,
                  title: '5. Skill-Based Economy',
                  tamil: 'திறன்சார் பொருளாதாரம்',
                  desc: 'Carpentry, natural earthen building, seed preservation, natural textile weaving, and cooperative barter trade.'
                },
                {
                  icon: <Sun className="w-6 h-6 text-[#8B5A2B]" />,
                  title: '6. Conscious Evolution',
                  tamil: 'உள்முகப் பரிணாமம்',
                  desc: 'Daily meditation, inner quietude, gratitude circles, and moving past the modern ego obsession toward oneness.'
                },
                {
                  icon: <HeartPulse className="w-6 h-6 text-[#2E4F2B]" />,
                  title: '7. Holistic Health',
                  tamil: 'முழுமையான நல்வாழ்வு',
                  desc: 'Healing through fasting, sunlight, open-well mineral water, circadian rest, and direct resonance with the Pancha Bhootas.'
                },
                {
                  icon: <Scale className="w-6 h-6 text-[#8B5A2B]" />,
                  title: '8. Consensus Governance',
                  tamil: 'ஒருமித்த தன்னாட்சி',
                  desc: 'Equal voice in communal decision circles. No political factions, no corporate hierarchy, and no coercion.'
                }
              ].map((pillar, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-[#2E4F2B]/50 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#ECE6D8] flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className="font-serif-heading font-bold text-base text-[#2E4F2B]">
                      {pillar.title}
                    </h3>
                    <div className="text-[11px] font-tamil text-[#8B5A2B] font-medium">
                      {pillar.tamil}
                    </div>
                    <p className="text-xs text-[#5C5044] leading-relaxed pt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — WHAT WE STAND FOR (TWO-COLUMN CONTRAST BLOCK)               */}
      {/* ========================================================================= */}
      <section id="stand-for" className="scroll-mt-20">
        <Container>
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Clarity of Purpose • எமது தெளிவான நிலைப்பாடு
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                What We Stand For & What Has No Place Here
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                A community is defined as much by what it rejects as by what it creates.
              </p>
            </div>

            {/* Two-Column Contrast Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Column 1: Life Built On */}
              <div className="bg-[#FAF8F3] border-2 border-[#2E4F2B]/30 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-[#D4C5A9]/50">
                  <CheckCircle2 className="w-5 h-5 text-[#2E4F2B]" />
                  <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#2E4F2B]">
                    Life Built On (நாங்கள் முன்வைப்பது)
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#241D17]">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#2E4F2B] mt-2 shrink-0" />
                    <span><strong>Living Soil & Heirloom Crops:</strong> Regenerating the Western Ghats ecology through native biodiversity and multi-layer food forests.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#2E4F2B] mt-2 shrink-0" />
                    <span><strong>Intergenerational Community:</strong> Extended families, elders, and children living together with mutual care and shared laughter.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#2E4F2B] mt-2 shrink-0" />
                    <span><strong>Seasonal Rhythms & Circadian Flow:</strong> Waking with the sunrise, working with hands in soil, and retiring in peaceful darkness.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#2E4F2B] mt-2 shrink-0" />
                    <span><strong>Decentralized Autonomy:</strong> Self-sufficiency in clean water, solar energy, food, and low-cost earthen construction.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#2E4F2B] mt-2 shrink-0" />
                    <span><strong>Truth & Direct Dialogue:</strong> Solving community tensions face-to-face in open circle councils under the banyan tree.</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: No Place Here For */}
              <div className="bg-[#FAF8F3] border-2 border-[#8B5A2B]/30 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-[#D4C5A9]/50">
                  <XCircle className="w-5 h-5 text-[#8B5A2B]" />
                  <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#8B5A2B]">
                    No Place Here For (இங்கு இடமில்லை)
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#241D17]">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#8B5A2B] mt-2 shrink-0" />
                    <span><strong>Toxic Agrochemicals & GMOs:</strong> Chemical pesticides, synthetic weedkillers, and monoculture cash crop exploitation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#8B5A2B] mt-2 shrink-0" />
                    <span><strong>Real Estate Speculation & Greed:</strong> Flipping land for private financial profit, partitioning sanctuary soil, or landlordism.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#8B5A2B] mt-2 shrink-0" />
                    <span><strong>Hierarchical Domination & Power Play:</strong> Centralized autocrats, political parties, or religious dogma imposed on others.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#8B5A2B] mt-2 shrink-0" />
                    <span><strong>Ultra-Processed Factory Commodities:</strong> Refined sugars, synthetic palm oils, and plastic-wrapped factory foods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#8B5A2B] mt-2 shrink-0" />
                    <span><strong>Compulsive Screen Addiction:</strong> Devices dominating meals, conversations, or childhood natural development.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — CORE PRINCIPLES (ACCESSIBLE DISCLOSURE / ACCORDION)           */}
      {/* ========================================================================= */}
      <section id="principles" className="scroll-mt-20">
        <Container>
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Guiding Declarations • அடிப்படை வாழ்வியல் கோட்பாடுகள்
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                8 Core Principles of the Commons
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                Click on any principle to inspect its foundational meaning and community implementation.
              </p>
            </div>

            {/* Interactive, Keyboard-Accessible Disclosure Widget */}
            <PrinciplesAccordion />
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — SPIRITUAL FOUNDATION (VISUAL PROGRESSION)                     */}
      {/* ========================================================================= */}
      <section id="spiritual" className="scroll-mt-20">
        <Container>
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Inner Evolution • ஆன்மீகப் பரிணாமம்
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                The Three Consciousness Shifts
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                Our spiritual foundation is non-sectarian and grounded in experiential reality. We move intentionally through three deep developmental progressions:
              </p>
            </div>

            {/* Visual Progression Component */}
            <SpiritualProgression />
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — COMMUNITY ETHICS (SEMANTIC BULLET LIST)                       */}
      {/* ========================================================================= */}
      <section id="ethics" className="scroll-mt-20">
        <Container>
          <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-10 space-y-8 shadow-xs">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Living In Sacred Covenant • சமூக அறநெறிகள்
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#2E4F2B]">
                Ethical Commitments of Every Steward
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                Members and resident families uphold these non-negotiable ethical guidelines to protect the harmony of the sanctuary:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm text-[#241D17]">
              
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#ECE6D8]/50 border border-[#D4C5A9]/50">
                <ShieldCheck className="w-5 h-5 text-[#2E4F2B] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="font-serif text-[#2E4F2B] block text-sm">
                    Ahimsa (Reverence & Non-Injury)
                  </strong>
                  <p className="text-[#5C5044] leading-relaxed">
                    Zero poisoning of soil, air, or water. We protect wildlife corridors and co-exist peacefully with native flora and fauna.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#ECE6D8]/50 border border-[#D4C5A9]/50">
                <ShieldCheck className="w-5 h-5 text-[#8B5A2B] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="font-serif text-[#8B5A2B] block text-sm">
                    Radical Simplicity (ஆடம்பரமற்ற வாழ்வு)
                  </strong>
                  <p className="text-[#5C5044] leading-relaxed">
                    Rejecting consumer showmanship. Valuing durable handmade tools, repairable natural items, and clean spaces over cluttered possessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#ECE6D8]/50 border border-[#D4C5A9]/50">
                <ShieldCheck className="w-5 h-5 text-[#2E4F2B] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="font-serif text-[#2E4F2B] block text-sm">
                    Transparent Financial Accountability
                  </strong>
                  <p className="text-[#5C5044] leading-relaxed">
                    All contributions, infrastructure expenditures, and trust accounts are open to review by all stewards and community members.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#ECE6D8]/50 border border-[#D4C5A9]/50">
                <ShieldCheck className="w-5 h-5 text-[#8B5A2B] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="font-serif text-[#8B5A2B] block text-sm">
                    Intergenerational Respect (மூத்தோர் மற்றும் சிறுவர் போற்றுதல்)
                  </strong>
                  <p className="text-[#5C5044] leading-relaxed">
                    Honoring the practical wisdom of elders and safeguarding children’s natural psychological and emotional development.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — LAND & LOCATION (INTERACTIVE MAP PINNED NEAR SIVASAILAM)    */}
      {/* ========================================================================= */}
      <section id="land" className="scroll-mt-20">
        <Container>
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Sanctuary Soil & Access • புனித நிலமும் அமைவிடமும்
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                Located at Sivasailam, Tenkasi District
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                A protected ecological pocket nestled right against the Western Ghats range in southern Tamil Nadu.
              </p>
            </div>

            {/* Real Interactive Map Component */}
            <MapSection />
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11 — GOVERNANCE & ASSET STRUCTURE (SVG FLOW DIAGRAM)               */}
      {/* ========================================================================= */}
      <section id="governance" className="scroll-mt-20">
        <Container>
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Legal Architecture & Circles • சட்ட மற்றும் நிர்வாகக் கட்டமைப்பு
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                Dual-Trust Governance Architecture
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                How we protect the land in perpetuity while fostering vibrant community action without bureaucracy.
              </p>
            </div>

            {/* Custom SVG / Flow Diagram Component */}
            <TrustDiagram />
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12 — COMMUNITY LIFE (3-COLUMN SECTION: FOOD / HEALTH / WORK)      */}
      {/* ========================================================================= */}
      <section id="community" className="scroll-mt-20">
        <Container>
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Daily Rhythms & Harmony • அன்றாட வாழ்வியல் முறை
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                Community Life in the Sanctuary
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                Life in Iyalvanam is structured around the harmonious integration of food, biological health, and joyful physical craft.
              </p>
            </div>

            {/* 3-Column Community Life Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Column 1: Food */}
              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ECE6D8] flex items-center justify-center text-[#2E4F2B]">
                    <Wheat className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-heading font-bold text-lg text-[#2E4F2B]">
                    Natural Food (இயற்கை உணவு)
                  </h3>
                  <p className="text-xs text-[#5C5044] leading-relaxed">
                    Meals are prepared in our shared earthen kitchen using pure well water, freshly grated coconut, seasonal mountain bananas, unpolished traditional millets, and wild herbs gathered from the land.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#241D17] pt-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B]" />
                      <span>Zero refined white sugar or factory oils</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B]" />
                      <span>Heirloom paddy varieties (Mappillai Samba, Karuppu Kavuni)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B]" />
                      <span>Cold-pressed sesame, coconut, and groundnut oils</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 2: Health */}
              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ECE6D8] flex items-center justify-center text-[#8B5A2B]">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-heading font-bold text-lg text-[#8B5A2B]">
                    Living Health (மெய்யான நலம்)
                  </h3>
                  <p className="text-xs text-[#5C5044] leading-relaxed">
                    Health is the body's natural baseline when unimpeded by toxins. We wake with dawn, absorb early morning solar rays, walk barefoot on living loam, and sleep under natural darkness.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#241D17] pt-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]" />
                      <span>Circadian sleep rhythms (early sleep, early dawn)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]" />
                      <span>Deep open-well water rich in natural minerals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]" />
                      <span>Barefoot earthing and therapeutic river bathing</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Work */}
              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ECE6D8] flex items-center justify-center text-[#2E4F2B]">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-heading font-bold text-lg text-[#2E4F2B]">
                    Sacred Work & Craft (உடலுழைப்பும் கைவினைத்திறனும்)
                  </h3>
                  <p className="text-xs text-[#5C5044] leading-relaxed">
                    Physical labor is not viewed as drudgery, but as vital meditation and joy. Planting native saplings, mixing lime and mud mortar, crafting bamboo shelters, and caring for seeds.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#241D17] pt-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B]" />
                      <span>Daily 3–4 hours of collective physical stewardship</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B]" />
                      <span>Traditional earthen block making and wood carpentry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B]" />
                      <span>Heirloom seed collection, sorting, and free sharing</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 13 — ENTRY & STEWARDSHIP (TIMELINE PATHWAY & FUND BREAKDOWN)      */}
      {/* ========================================================================= */}
      <section id="contribution" className="scroll-mt-20">
        <Container>
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Pathway to Community • இணைவதற்கான வழிமுறை
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                How to Join & Support the Sanctuary
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                Joining Iyalvanam is an unhurried, experiential process based on mutual cultural resonance, not financial purchase.
              </p>
            </div>

            {/* 3-Step Pathway Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              
              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-xs text-[#8B5A2B] bg-[#ECE6D8] px-2.5 py-1 rounded-md border border-[#D4C5A9]">
                    Step 01
                  </span>
                  <span className="text-xs font-serif text-[#5C5044]">First Immersion</span>
                </div>
                <h3 className="font-serif-heading font-bold text-base text-[#2E4F2B]">
                  Attend a SEYON Nature Camp
                </h3>
                <p className="text-xs text-[#5C5044] leading-relaxed">
                  Join our 3-day monthly experiential living camp in Sivasailam. Sleep under mud roofs, eat simple natural food, bathe in mountain streams, and meet the founders.
                </p>
                <div className="text-[11px] font-tamil text-[#8B5A2B]">
                  இயற்கை முகாமில் நேரில் பங்கேற்றல்
                </div>
              </div>

              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-xs text-[#8B5A2B] bg-[#ECE6D8] px-2.5 py-1 rounded-md border border-[#D4C5A9]">
                    Step 02
                  </span>
                  <span className="text-xs font-serif text-[#5C5044]">Trial Period</span>
                </div>
                <h3 className="font-serif-heading font-bold text-base text-[#2E4F2B]">
                  Trial Living & Shared Rhythm
                </h3>
                <p className="text-xs text-[#5C5044] leading-relaxed">
                  Spend 1 to 3 months dwelling with the community. Participate in farming, child-rearing, and consensus circles to ensure mutual harmony.
                </p>
                <div className="text-[11px] font-tamil text-[#8B5A2B]">
                  கூட்டு வாழ்வில் களப் பரிசோதனை
                </div>
              </div>

              <div className="bg-[#ECE6D8] border-2 border-[#2E4F2B]/40 rounded-2xl p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-xs text-[#2E4F2B] bg-[#2E4F2B] text-[#FAF8F3] px-2.5 py-1 rounded-md">
                    Step 03
                  </span>
                  <span className="text-xs font-serif text-[#2E4F2B] font-bold">Lifetime Commitment</span>
                </div>
                <h3 className="font-serif-heading font-bold text-base text-[#2E4F2B]">
                  Resident Family Stewardship
                </h3>
                <p className="text-xs text-[#241D17] leading-relaxed">
                  Consensus integration as a resident family. Contributing to shared infrastructure funds and receiving perpetual rights to dwell and steward the commons.
                </p>
                <div className="text-[11px] font-tamil text-[#8B5A2B] font-semibold">
                  முழுமையான குடும்ப உறுப்பினர் ஏற்பு
                </div>
              </div>

            </div>

            {/* Infrastructure Fund Breakdown Visual */}
            <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="max-w-2xl space-y-1">
                <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                  Transparent Infrastructure Fund • உள்கட்டமைப்பு நிதி
                </span>
                <h3 className="text-lg sm:text-xl font-serif-heading font-bold text-[#2E4F2B]">
                  Where Sanctuary Contributions Are Invested
                </h3>
                <p className="text-xs text-[#5C5044]">
                  100% of community contributions go directly into tangible eco-infrastructure. No corporate salaries or administrative overheads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-4 bg-[#ECE6D8]/60 rounded-xl border border-[#D4C5A9]/50 space-y-2">
                  <div className="text-xs font-serif font-bold text-[#2E4F2B]">1. Open Wells & Water</div>
                  <p className="text-[11px] text-[#5C5044] leading-relaxed">Deepening traditional stone open wells, desilting ponds, and laying gravity water flow lines.</p>
                </div>
                <div className="p-4 bg-[#ECE6D8]/60 rounded-xl border border-[#D4C5A9]/50 space-y-2">
                  <div className="text-xs font-serif font-bold text-[#8B5A2B]">2. Reforestation</div>
                  <p className="text-[11px] text-[#5C5044] leading-relaxed">Nurturing 2,000+ native Western Ghats forest saplings and establishing multi-tier agroforestry.</p>
                </div>
                <div className="p-4 bg-[#ECE6D8]/60 rounded-xl border border-[#D4C5A9]/50 space-y-2">
                  <div className="text-xs font-serif font-bold text-[#2E4F2B]">3. Community Kitchen</div>
                  <p className="text-[11px] text-[#5C5044] leading-relaxed">Earthen kitchen, heirloom grain seed bank, library shelter, and compost sanitation facilities.</p>
                </div>
                <div className="p-4 bg-[#ECE6D8]/60 rounded-xl border border-[#D4C5A9]/50 space-y-2">
                  <div className="text-xs font-serif font-bold text-[#8B5A2B]">4. Decentralized Solar</div>
                  <p className="text-[11px] text-[#5C5044] leading-relaxed">Off-grid solar micro-grids for essential water pumping and low-voltage communal reading lights.</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 14 — FOUNDERS & STEWARDS (TWO-COLUMN BIOS WITH PORTRAITS & TEL)   */}
      {/* ========================================================================= */}
      <section id="founders" className="scroll-mt-20">
        <Container>
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-semibold block">
                Founders & Vision Stewards • நிறுவனர்கள்
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                Stewards of the Vision
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044]">
                Founded by practitioners who chose to question artificial societal constructs and demonstrate a grounded way of living.
              </p>
            </div>

            {/* Two-Column Founder Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Founder 1: Rajesh */}
              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#2E4F2B]/30 shrink-0 bg-[#ECE6D8]">
                      <img
                        src="/images/founder-emblem.jpg"
                        alt="Rajesh - Founder of Iyalvanam"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to stylized emblem if image path fails
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#2E4F2B]">
                        Rajesh
                      </h3>
                      <div className="text-xs font-serif font-semibold text-[#8B5A2B] uppercase tracking-wider">
                        Founder & Vision Steward
                      </div>
                      <div className="text-[11px] font-tamil text-[#5C5044]">
                        நிறுவனர் & தொலைநோக்கு வழிகாட்டி
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5044] font-sans leading-relaxed">
                    Rajesh is a former banker who chose to step away from the corporate world and question the way modern society defines life, success, and freedom.
                  </p>

                  <p className="text-xs sm:text-sm text-[#5C5044] font-sans leading-relaxed">
                    His journey took him through farming, travel, and a search for communities where people could live with greater simplicity. Along the way, he saw a deep disconnect between humans and nature. Through <strong>IYALVANAM</strong>, he is turning that realization into an enduring sanctuary.
                  </p>

                  <blockquote className="p-3.5 bg-[#ECE6D8]/60 border-l-3 border-[#2E4F2B] rounded-r-lg text-xs font-serif italic text-[#241D17]">
                    “For us, this is not just a project. It is a journey back to what is fundamental—freedom, nature, connection and a meaningful way of living.”
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#D4C5A9]/50 flex flex-wrap items-center justify-between gap-3 text-xs font-serif">
                  <a
                    href="tel:+919600756007"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2E4F2B] text-[#FAF8F3] hover:bg-[#1E351C] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>Call: +91 96007 56007</span>
                  </a>
                  <span className="text-[11px] text-[#5C5044]">Dharmapuramadam, Tenkasi</span>
                </div>
              </div>

              {/* Founder 2: Shanmugavel */}
              <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#8B5A2B]/30 shrink-0 bg-[#ECE6D8]">
                      <img
                        src="/images/co-founder-emblem.jpg"
                        alt="Shanmugavel - Co-Founder of SEYON"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#8B5A2B]">
                        Shanmugavel
                      </h3>
                      <div className="text-xs font-serif font-semibold text-[#2E4F2B] uppercase tracking-wider">
                        Co-Founder & Operational Steward
                      </div>
                      <div className="text-[11px] font-tamil text-[#5C5044]">
                        இணை நிறுவனர் & கள ஒருங்கிணைப்பாளர்
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5044] font-sans leading-relaxed">
                    Shanmugavel, from Coimbatore, is a designer and mechanical engineering researcher whose life changed profoundly after spending 45 days in intensive care during the COVID pandemic.
                  </p>

                  <p className="text-xs sm:text-sm text-[#5C5044] font-sans leading-relaxed">
                    His journey toward recovery led him to explore natural foods and living. Arriving at Sivasailam, he founded <strong>SEYON Nature Life Foundation</strong> to help people directly experience natural living. SEYON has conducted <strong>50+ monthly nature camps</strong> for over 1,000+ seekers.
                  </p>

                  <blockquote className="p-3.5 bg-[#ECE6D8]/60 border-l-3 border-[#8B5A2B] rounded-r-lg text-xs font-serif italic text-[#241D17]">
                    “Let us live happily together with nature, as much as possible.”
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#D4C5A9]/50 flex flex-wrap items-center justify-between gap-3 text-xs font-serif">
                  <a
                    href="tel:+919444098765"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#8B5A2B] text-[#FAF8F3] hover:bg-[#66411E] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>Call: +91 94440 98765</span>
                  </a>
                  <span className="text-[11px] text-[#5C5044]">Sivasailam, Tenkasi</span>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 15 — CLOSING STATEMENT & COMMUNITY LINKAGE                        */}
      {/* ========================================================================= */}
      <section id="contact" className="scroll-mt-20">
        <Container>
          <div className="bg-[#FAF8F3] border-2 border-[#2E4F2B]/30 rounded-2xl p-8 sm:p-12 space-y-6 text-center shadow-xs">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-serif uppercase tracking-widest text-[#8B5A2B] font-bold block">
                The Sacred Circle Awaits You
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B]">
                Ready to Experience Life Guided by Natural Principles?
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                Whether you wish to attend an upcoming SEYON experiential camp, contribute traditional heirloom seeds, or explore living in the sanctuary, our door is open.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://tinyurl.com/2zap33fy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-sm font-serif font-semibold tracking-wide flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
                <span>Join WhatsApp Community Group</span>
              </a>

              <a
                href="mailto:contact@iyalvanam.org"
                className="px-6 py-3.5 rounded-xl bg-[#FAF8F3] hover:bg-[#ECE6D8] text-[#241D17] border border-[#D4C5A9] text-sm font-serif font-semibold tracking-wide flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8B5A2B]" />
                <span>contact@iyalvanam.org</span>
              </a>
            </div>

            <div className="pt-4 text-xs font-tamil text-[#8B5A2B]">
              “இயற்கையை நேசிக்கும் ஒவ்வொரு உள்ளத்திற்கும் எமது நல்வரவு.”
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
