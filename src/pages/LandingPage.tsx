import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Sprout, 
  Scale, 
  BookOpen, 
  Sliders, 
  Wheat, 
  Hammer, 
  Sun, 
  HeartPulse, 
  CheckCircle2, 
  XCircle, 
  Phone, 
  Mail, 
  MessageCircle, 
  Droplets, 
  Wind, 
  Flame, 
  Globe
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { PrinciplesAccordion } from '../components/PrinciplesAccordion';
import { SpiritualProgression } from '../components/SpiritualProgression';
import { TrustDiagram } from '../components/TrustDiagram';
import { MapSection } from '../components/MapSection';
import { useLanguage } from '../context/LanguageContext';

interface LandingPageProps {
  navigate: (path: string) => void;
  showToast?: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = () => {
  const { content, language } = useLanguage();

  useEffect(() => {
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

  const isTamil = language === 'ta';
  const headingFont = isTamil ? 'font-tamil-serif' : 'font-serif-heading';
  const bodyFont = isTamil ? 'font-tamil' : 'font-sans';
  const labelFont = isTamil ? 'font-tamil' : 'font-serif';

  // 8 pillar icons corresponding to the 8 pillars array
  const pillarIcons = [
    <Sprout key="0" className="w-5 h-5 text-[#2E4F2B]" />,
    <BookOpen key="1" className="w-5 h-5 text-[#8B5A2B]" />,
    <Sliders key="2" className="w-5 h-5 text-[#2E4F2B]" />,
    <Wheat key="3" className="w-5 h-5 text-[#8B5A2B]" />,
    <Hammer key="4" className="w-5 h-5 text-[#2E4F2B]" />,
    <Sun key="5" className="w-5 h-5 text-[#8B5A2B]" />,
    <HeartPulse key="6" className="w-5 h-5 text-[#2E4F2B]" />,
    <Scale key="7" className="w-5 h-5 text-[#8B5A2B]" />
  ];

  // Element icons corresponding to the 5 elements array
  const elementIcons = [
    <Globe key="0" className="w-4 h-4 text-[#D4C5A9]" />,
    <Wind key="1" className="w-4 h-4 text-[#D4C5A9]" />,
    <Flame key="2" className="w-4 h-4 text-[#D4C5A9]" />,
    <Droplets key="3" className="w-4 h-4 text-[#D4C5A9]" />,
    <Sprout key="4" className="w-4 h-4 text-[#D4C5A9]" />
  ];

  // Allocation percentages for minimal data-viz fund breakdown
  const fundPercentages = ['35%', '25%', '20%', '20%'];

  return (
    <div className={`bg-[#F5F2EB] text-[#241D17] space-y-20 sm:space-y-28 lg:space-y-36 pb-20 sm:pb-32 ${bodyFont} selection:bg-[#2E4F2B] selection:text-[#F5F2EB]`}>
      
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO (ATMOSPHERIC, EXPANSIVE OPENING)                        */}
      {/* ========================================================================= */}
      <section id="hero" className="pt-10 sm:pt-16 lg:pt-24">
        <Container>
          <div className="space-y-10 sm:space-y-14">
            
            {/* Header Group */}
            <div className="max-w-4xl space-y-6">
              <div className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#8B5A2B] font-bold ${labelFont}`}>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2E4F2B]" />
                  <span>{content.hero.locationBadge}</span>
                </span>
                <span>•</span>
                <span>{content.hero.subLocation}</span>
              </div>

              {/* Main Expressive Headline */}
              <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2E4F2B] tracking-tight leading-[1.08] break-words ${headingFont}`}>
                {content.hero.title}
              </h1>

              {/* Quiet Sacred Tagline Pause */}
              <div className="py-2 border-y border-[#D4C5A9]/60 max-w-2xl space-y-1">
                <p className={`text-base sm:text-lg lg:text-xl font-bold text-[#8B5A2B] ${headingFont}`}>
                  {content.hero.tagline}
                </p>
                <p className={`text-xs text-[#5C5044] uppercase tracking-wider font-semibold ${labelFont}`}>
                  {content.hero.trustsSubtitle}
                </p>
              </div>

              {/* Sub-headline */}
              <p className={`text-base sm:text-lg lg:text-xl text-[#5C5044] leading-relaxed max-w-2xl ${bodyFont}`}>
                {content.hero.description}
              </p>

              {/* Clear CTA Hierarchy */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://tinyurl.com/2zap33fy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-7 py-4 rounded-xl bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-sm font-semibold tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm ${labelFont}`}
                >
                  <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
                  <span>{content.hero.ctaJoin}</span>
                </a>

                <button
                  onClick={() => scrollToSection('vision')}
                  className={`px-6 py-4 rounded-xl border border-[#D4C5A9] hover:bg-[#FAF8F3] text-[#2E4F2B] text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer ${labelFont}`}
                >
                  <span>{content.hero.ctaExplore}</span>
                  <ArrowRight className="w-4 h-4 text-[#8B5A2B]" />
                </button>
              </div>
            </div>

            {/* Immersive Fine-Art Documentary Landscape Photograph */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl border border-[#D4C5A9] shadow-xs bg-[#ECE6D8]">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=85"
                alt="Western Ghats lush forest canopy and mountain sanctuary"
                className="w-full h-full object-cover filter contrast-[0.98] brightness-[0.96]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              <div className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[#FAF8F3] text-xs sm:text-sm max-w-lg drop-shadow-sm ${bodyFont}`}>
                <span className="font-semibold block">{content.hero.imageCaptionTitle}</span>
                <span className="text-[11px] opacity-90">{content.hero.imageCaptionSub}</span>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — ETYMOLOGY (EDITORIAL TYPOGRAPHIC SPREAD WITH SCULPTURAL GLYPHS) */}
      {/* ========================================================================= */}
      <section id="etymology" className="scroll-mt-24">
        <Container>
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.etymology.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.etymology.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                {content.etymology.subheading}
              </p>
            </div>

            {/* Editorial Typographic Spread (Giant Sculptural Tamil Anchors) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {content.etymology.cards.map((card, idx) => {
                const glyphs = ['இ', 'வ', 'கூ', 'மீ'];

                return (
                  <div 
                    key={idx}
                    className="p-7 rounded-2xl bg-[#FAF8F3] border border-[#D4C5A9]/70 relative overflow-hidden flex flex-col justify-between space-y-8 hover:border-[#2E4F2B]/40 transition-colors shadow-2xs"
                  >
                    {/* Sculptural Watermark Glyph */}
                    <div className="absolute -right-2 -top-4 text-7xl sm:text-8xl font-serif text-[#ECE6D8]/80 select-none pointer-events-none font-bold">
                      {glyphs[idx]}
                    </div>

                    <div className="space-y-3 relative z-10">
                      <span className="text-xs font-serif font-bold text-[#8B5A2B] tracking-widest uppercase block">
                        Part 0{idx + 1}
                      </span>
                      <h3 className={`text-2xl font-bold text-[#2E4F2B] ${headingFont}`}>
                        {card.title}
                      </h3>
                      <div className={`text-xs uppercase tracking-wider text-[#8B5A2B] font-bold ${labelFont}`}>
                        {card.subtitle}
                      </div>
                      <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed pt-2 ${bodyFont}`}>
                        {card.desc}
                      </p>
                    </div>

                    <div className={`pt-4 border-t border-[#D4C5A9]/50 text-xs text-[#8B5A2B] font-medium relative z-10 ${bodyFont}`}>
                      {card.footer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — PHILOSOPHY & FULL-BLEED PANCHA BHOOTAS IMMERSION BAND        */}
      {/* ========================================================================= */}
      <section id="philosophy" className="scroll-mt-24 space-y-16">
        
        {/* 5 Core Tenets Editorial Sequence */}
        <Container>
          <div className="space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.philosophy.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.philosophy.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                {content.philosophy.subheading}
              </p>
            </div>

            {/* Sequenced Editorial List with Hairline Dividers (Kills Card Fatigue) */}
            <div className="divide-y divide-[#D4C5A9]/60 border-y border-[#D4C5A9]/60">
              {content.philosophy.tenets.map((tenet, idx) => (
                <div 
                  key={idx} 
                  className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-[#FAF8F3]/40 transition-colors"
                >
                  <div className="md:col-span-1 text-xs font-serif font-bold text-[#8B5A2B] tracking-widest">
                    {tenet.num}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className={`text-lg sm:text-xl font-bold text-[#2E4F2B] ${headingFont}`}>
                      {tenet.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                      {tenet.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Full-Bleed Deep Forest Green Pancha Bhootas Immersion Band */}
        <div className="bg-[#1A3018] text-[#F5F2EB] py-16 sm:py-24 border-y border-[#D4C5A9]/20">
          <Container>
            <div className="space-y-12">
              <div className="max-w-2xl space-y-3">
                <span className={`text-xs uppercase tracking-widest text-[#D4C5A9] font-bold block ${labelFont}`}>
                  {content.philosophy.elementsBadge}
                </span>
                <h3 className={`text-2xl sm:text-4xl font-bold text-[#FAF8F3] ${headingFont}`}>
                  {content.philosophy.elementsHeading}
                </h3>
                <p className={`text-xs sm:text-sm text-[#F5F2EB]/80 leading-relaxed ${bodyFont}`}>
                  {content.philosophy.elementsSubheading}
                </p>
              </div>

              {/* Elements Spread */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
                {content.philosophy.elements.map((el, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 rounded-xl bg-[#122210]/60 border border-[#D4C5A9]/20 space-y-3 hover:border-[#D4C5A9]/40 transition-colors"
                  >
                    <div className={`flex items-center gap-2 text-xs font-bold text-[#D4C5A9] ${labelFont}`}>
                      <div className="w-8 h-8 rounded-lg bg-[#2E4F2B] flex items-center justify-center shrink-0">
                        {elementIcons[idx]}
                      </div>
                      <span>{el.name}</span>
                    </div>
                    <p className={`text-xs text-[#F5F2EB]/75 leading-relaxed pt-1 ${bodyFont}`}>
                      {el.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — VISION MANIFESTO (EMOTIONAL CENTERPIECE WITH WARM TINT)       */}
      {/* ========================================================================= */}
      <section id="vision" className="scroll-mt-24 bg-[#ECE6D8] border-y border-[#D4C5A9] py-20 sm:py-32">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10 text-center sm:text-left">
            <div className="space-y-4">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.vision.badge}
              </span>
              <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2E4F2B] leading-[1.12] tracking-tight ${headingFont}`}>
                {content.vision.heading}
              </h2>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-sm sm:text-base text-[#5C5044] leading-relaxed sm:leading-loose text-left pt-2 border-t border-[#D4C5A9] ${bodyFont}`}>
              <p>{content.vision.p1}</p>
              <p>{content.vision.p2}</p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D4C5A9]">
              <span className={`text-sm sm:text-base font-bold text-[#8B5A2B] italic ${headingFont}`}>
                {content.vision.footerQuote}
              </span>
              <span className="text-xs font-serif text-[#2E4F2B] font-bold tracking-widest uppercase">
                {content.vision.footerBrand}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — 8 PILLARS (ARCHITECTURAL 4x2 MATRIX GRID WITH DIVIDERS)      */}
      {/* ========================================================================= */}
      <section id="pillars" className="scroll-mt-24">
        <Container>
          <div className="space-y-12">
            <div className="max-w-3xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.pillars.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.pillars.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] ${bodyFont}`}>
                {content.pillars.subheading}
              </p>
            </div>

            {/* Architectural 4x2 Matrix Grid (No Floating Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#D4C5A9] bg-[#FAF8F3]">
              {content.pillars.items.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-7 border-r border-b border-[#D4C5A9] space-y-4 hover:bg-[#F5F2EB] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#ECE6D8] flex items-center justify-center">
                        {pillarIcons[idx]}
                      </div>
                      <span className="text-xs font-serif font-bold text-[#8B5A2B]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className={`font-bold text-base sm:text-lg text-[#2E4F2B] pt-1 ${headingFont}`}>
                      {pillar.title}
                    </h3>
                    <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
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
      {/* SECTION 06 — WHAT WE STAND FOR (EDITORIAL COVENANT CONTRAST)              */}
      {/* ========================================================================= */}
      <section id="stand-for" className="scroll-mt-24">
        <Container>
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.standFor.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.standFor.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] ${bodyFont}`}>
                {content.standFor.subheading}
              </p>
            </div>

            {/* Editorial Contrast Grid (Clean Typographic Separation) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-4 border-t border-[#D4C5A9]">
              
              {/* Column 1: Life Built On */}
              <div className="space-y-6">
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#2E4F2B]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#2E4F2B]" />
                  <h3 className={`font-bold text-xl sm:text-2xl text-[#2E4F2B] ${headingFont}`}>
                    {content.standFor.lifeBuiltOnTitle}
                  </h3>
                </div>

                <ul className={`space-y-4 text-xs sm:text-sm text-[#241D17] ${bodyFont}`}>
                  {content.standFor.lifeBuiltOnItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B] mt-2 shrink-0" />
                      <span><strong className="font-semibold text-[#2E4F2B]">{item.title}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: No Place Here For */}
              <div className="space-y-6">
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#8B5A2B]/30">
                  <XCircle className="w-5 h-5 text-[#8B5A2B]" />
                  <h3 className={`font-bold text-xl sm:text-2xl text-[#8B5A2B] ${headingFont}`}>
                    {content.standFor.noPlaceTitle}
                  </h3>
                </div>

                <ul className={`space-y-4 text-xs sm:text-sm text-[#241D17] ${bodyFont}`}>
                  {content.standFor.noPlaceItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B] mt-2 shrink-0" />
                      <span><strong className="font-semibold text-[#8B5A2B]">{item.title}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — CORE PRINCIPLES (MINIMALIST DISCLOSURE LIST)                 */}
      {/* ========================================================================= */}
      <section id="principles" className="scroll-mt-24">
        <Container>
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.principles.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.principles.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] ${bodyFont}`}>
                {content.principles.subheading}
              </p>
            </div>

            <PrinciplesAccordion />
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — SPIRITUAL FOUNDATION (CONNECTED TIMELINE STEPPER)            */}
      {/* ========================================================================= */}
      <section id="spiritual" className="scroll-mt-24 bg-[#FAF8F3] border-y border-[#D4C5A9] py-16 sm:py-24">
        <Container>
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.spiritual.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.spiritual.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] ${bodyFont}`}>
                {content.spiritual.subheading}
              </p>
            </div>

            <SpiritualProgression />
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — COMMUNITY ETHICS (STRUCTURED COVENANT DECLARATION)           */}
      {/* ========================================================================= */}
      <section id="ethics" className="scroll-mt-24">
        <Container>
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.ethics.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.ethics.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] ${bodyFont}`}>
                {content.ethics.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#D4C5A9] pt-8">
              {content.ethics.commitments.map((item, idx) => (
                <div key={idx} className="space-y-2.5 pb-6 border-b border-[#D4C5A9]/50">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-xs font-bold text-[#8B5A2B] tracking-widest">
                      0{idx + 1}
                    </span>
                    <h3 className={`font-bold text-lg text-[#2E4F2B] ${headingFont}`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed pl-7 ${bodyFont}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — LAND & LOCATION (ASYMMETRIC DESTINATION SHOWCASE)            */}
      {/* ========================================================================= */}
      <section id="land" className="scroll-mt-24">
        <Container>
          <MapSection />
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11 — GOVERNANCE & ASSET STRUCTURE (ARCHITECTURAL FLOWCHART)        */}
      {/* ========================================================================= */}
      <section id="governance" className="scroll-mt-24">
        <Container>
          <TrustDiagram />
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12 — COMMUNITY LIFE (3-PART GROUNDED SPREAD)                      */}
      {/* ========================================================================= */}
      <section id="community" className="scroll-mt-24">
        <Container>
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.community.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.community.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] ${bodyFont}`}>
                {content.community.subheading}
              </p>
            </div>

            {/* 3-Part Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#D4C5A9] pt-8">
              {content.community.columns.map((col, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ECE6D8] flex items-center justify-center text-[#2E4F2B]">
                    {idx === 0 ? <Wheat className="w-5 h-5" /> : idx === 1 ? <HeartPulse className="w-5 h-5 text-[#8B5A2B]" /> : <Hammer className="w-5 h-5" />}
                  </div>
                  <h3 className={`font-bold text-xl text-[#2E4F2B] ${headingFont}`}>
                    {col.title}
                  </h3>
                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                    {col.desc}
                  </p>
                  <ul className={`space-y-2 text-xs text-[#241D17] pt-2 ${bodyFont}`}>
                    {col.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 13 — ENTRY STEPPER & DATA-VIZ INFRASTRUCTURE FUND VISUALIZER       */}
      {/* ========================================================================= */}
      <section id="contribution" className="scroll-mt-24">
        <Container>
          <div className="space-y-16">
            
            {/* 3-Step Pathway Stepper */}
            <div className="space-y-10">
              <div className="max-w-2xl space-y-2">
                <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                  {content.contribution.badge}
                </span>
                <h2 className={`text-3xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                  {content.contribution.heading}
                </h2>
                <p className={`text-sm text-[#5C5044] ${bodyFont}`}>
                  {content.contribution.subheading}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#D4C5A9] pt-8">
                {content.contribution.steps.map((step, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-[#D4C5A9]/50">
                      <span className="font-serif font-bold text-[#8B5A2B]">{step.stepNumber}</span>
                      <span className="text-[#5C5044] font-medium">{step.stepType}</span>
                    </div>
                    <h3 className={`font-bold text-lg text-[#2E4F2B] ${headingFont}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimalist Data-Viz Infrastructure Fund Allocation Visualizer */}
            <div className="p-8 sm:p-12 bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl space-y-8">
              <div className="max-w-2xl space-y-2">
                <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                  {content.contribution.fundBadge}
                </span>
                <h3 className={`text-xl sm:text-2xl font-bold text-[#2E4F2B] ${headingFont}`}>
                  {content.contribution.fundHeading}
                </h3>
                <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                  {content.contribution.fundSubheading}
                </p>
              </div>

              {/* Proportional Segmented Progress Bar */}
              <div className="space-y-3">
                <div className="h-4 w-full rounded-full overflow-hidden flex bg-[#ECE6D8]">
                  <div style={{ width: '35%' }} className="bg-[#2E4F2B]" title="Open Wells: 35%" />
                  <div style={{ width: '25%' }} className="bg-[#8B5A2B]" title="Reforestation: 25%" />
                  <div style={{ width: '20%' }} className="bg-[#3D6739]" title="Community Kitchen: 20%" />
                  <div style={{ width: '20%' }} className="bg-[#C49A38]" title="Solar Micro-Grid: 20%" />
                </div>
              </div>

              {/* 4 Allocation Breakdown Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                {content.contribution.fundItems.map((fItem, idx) => (
                  <div key={idx} className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between font-bold text-[#2E4F2B]">
                      <span className={headingFont}>{fItem.title}</span>
                      <span className="font-mono text-[#8B5A2B]">{fundPercentages[idx]}</span>
                    </div>
                    <p className={`text-[#5C5044] leading-relaxed ${bodyFont}`}>
                      {fItem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 14 — FOUNDERS & STEWARDS (FINE-ART EDITORIAL BIO SPREAD)           */}
      {/* ========================================================================= */}
      <section id="founders" className="scroll-mt-24">
        <Container>
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.founders.badge}
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.founders.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] ${bodyFont}`}>
                {content.founders.subheading}
              </p>
            </div>

            {/* Two-Column Fine-Art Editorial Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 border-t border-[#D4C5A9] pt-10">
              
              {/* Founder 1: Rajesh */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#2E4F2B]/30 shrink-0 bg-[#ECE6D8] shadow-xs">
                      <img
                        src="/images/founder-emblem.jpg"
                        alt="Rajesh - Founder of Iyalvanam"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className={`text-2xl sm:text-3xl font-bold text-[#2E4F2B] ${headingFont}`}>
                        {content.founders.founderName}
                      </h3>
                      <div className={`text-xs font-bold text-[#8B5A2B] uppercase tracking-wider ${labelFont}`}>
                        {content.founders.founderRole}
                      </div>
                      <div className="text-[11px] text-[#5C5044] font-serif pt-1">
                        {content.founders.founderLocation}
                      </div>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                    {content.founders.founderBio1}
                  </p>

                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                    {content.founders.founderBio2}
                  </p>

                  <blockquote className={`p-4 bg-[#FAF8F3] border-l-3 border-[#2E4F2B] rounded-r-xl text-xs sm:text-sm italic text-[#241D17] ${headingFont}`}>
                    {content.founders.founderQuote}
                  </blockquote>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+919600756007"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2E4F2B] text-[#FAF8F3] text-xs font-semibold hover:bg-[#1A3018] transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>{content.founders.founderCallBtn}</span>
                  </a>
                </div>
              </div>

              {/* Founder 2: Shanmugavel */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#8B5A2B]/30 shrink-0 bg-[#ECE6D8] shadow-xs">
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
                      <h3 className={`text-2xl sm:text-3xl font-bold text-[#8B5A2B] ${headingFont}`}>
                        {content.founders.coFounderName}
                      </h3>
                      <div className={`text-xs font-bold text-[#2E4F2B] uppercase tracking-wider ${labelFont}`}>
                        {content.founders.coFounderRole}
                      </div>
                      <div className="text-[11px] text-[#5C5044] font-serif pt-1">
                        {content.founders.coFounderLocation}
                      </div>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                    {content.founders.coFounderBio1}
                  </p>

                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                    {content.founders.coFounderBio2}
                  </p>

                  <blockquote className={`p-4 bg-[#FAF8F3] border-l-3 border-[#8B5A2B] rounded-r-xl text-xs sm:text-sm italic text-[#241D17] ${headingFont}`}>
                    {content.founders.coFounderQuote}
                  </blockquote>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+919444098765"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B5A2B] text-[#FAF8F3] text-xs font-semibold hover:bg-[#66411E] transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>{content.founders.coFounderCallBtn}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 15 — CLOSING SANCTUARY (QUIET DIALOGUE & INVITATION)              */}
      {/* ========================================================================= */}
      <section id="contact" className="scroll-mt-24">
        <Container>
          <div className="p-10 sm:p-16 rounded-3xl bg-[#FAF8F3] border border-[#D4C5A9] text-center space-y-8 shadow-xs">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.closing.badge}
              </span>
              <h2 className={`text-3xl sm:text-5xl font-bold text-[#2E4F2B] leading-tight ${headingFont}`}>
                {content.closing.heading}
              </h2>
              <p className={`text-sm text-[#5C5044] leading-relaxed max-w-xl mx-auto ${bodyFont}`}>
                {content.closing.subheading}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://tinyurl.com/2zap33fy"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-xl bg-[#2E4F2B] hover:bg-[#1A3018] text-[#FAF8F3] text-sm font-semibold tracking-wide flex items-center gap-2.5 shadow-sm cursor-pointer ${labelFont}`}
              >
                <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
                <span>{content.closing.btnWhatsapp}</span>
              </a>

              <a
                href="mailto:contact@iyalvanam.org"
                className={`px-8 py-4 rounded-xl bg-[#FAF8F3] hover:bg-[#ECE6D8] text-[#241D17] border border-[#D4C5A9] text-sm font-semibold tracking-wide flex items-center gap-2.5 cursor-pointer transition-colors ${labelFont}`}
              >
                <Mail className="w-4 h-4 text-[#8B5A2B]" />
                <span>{content.closing.btnEmail}</span>
              </a>
            </div>

            <div className={`pt-4 text-xs text-[#8B5A2B] font-semibold ${headingFont}`}>
              {content.closing.footerBlessing}
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
