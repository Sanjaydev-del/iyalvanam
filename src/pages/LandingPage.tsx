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
  ShieldCheck, 
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
    <Sprout key="0" className="w-6 h-6 text-[#2E4F2B]" />,
    <BookOpen key="1" className="w-6 h-6 text-[#8B5A2B]" />,
    <Sliders key="2" className="w-6 h-6 text-[#2E4F2B]" />,
    <Wheat key="3" className="w-6 h-6 text-[#8B5A2B]" />,
    <Hammer key="4" className="w-6 h-6 text-[#2E4F2B]" />,
    <Sun key="5" className="w-6 h-6 text-[#8B5A2B]" />,
    <HeartPulse key="6" className="w-6 h-6 text-[#2E4F2B]" />,
    <Scale key="7" className="w-6 h-6 text-[#8B5A2B]" />
  ];

  // Element icons corresponding to the 5 elements array
  const elementIcons = [
    <Globe key="0" className="w-3.5 h-3.5 text-[#D4C5A9]" />,
    <Wind key="1" className="w-3.5 h-3.5 text-[#D4C5A9]" />,
    <Flame key="2" className="w-3.5 h-3.5 text-[#D4C5A9]" />,
    <Droplets key="3" className="w-3.5 h-3.5 text-[#D4C5A9]" />,
    <Sprout key="4" className="w-3.5 h-3.5 text-[#D4C5A9]" />
  ];

  return (
    <div className={`bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 lg:space-y-32 pb-20 sm:pb-32 ${bodyFont} selection:bg-[#2E4F2B] selection:text-[#F5F2EB]`}>
      
      {/* ========================================================================= */}
      {/* SECTION 01 — HERO (SINGLE ACTIVE LANGUAGE DISPLAY)                        */}
      {/* ========================================================================= */}
      <section id="hero" className="pt-8 sm:pt-14 lg:pt-20">
        <Container>
          <div className="space-y-8 sm:space-y-12">
            
            {/* Header Group */}
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              <div className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold ${labelFont}`}>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#2E4F2B]" />
                  <span>{content.hero.locationBadge}</span>
                </span>
                <span>•</span>
                <span>{content.hero.subLocation}</span>
              </div>

              {/* Main Title (One Language at a time) */}
              <div className="space-y-2">
                <h1 className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2E4F2B] tracking-tight leading-[1.1] break-words ${headingFont}`}>
                  {content.hero.title}
                </h1>
              </div>

              {/* Taglines */}
              <div className="p-3.5 sm:p-4 bg-[#FAF8F3] border-l-4 border-[#2E4F2B] rounded-r-xl border border-[#D4C5A9]/60 space-y-1">
                <p className={`text-sm sm:text-base font-semibold text-[#2E4F2B] ${headingFont}`}>
                  {content.hero.tagline}
                </p>
                <p className={`text-xs sm:text-sm text-[#8B5A2B] uppercase tracking-wider font-semibold ${labelFont}`}>
                  {content.hero.trustsSubtitle}
                </p>
              </div>

              {/* Sub-headline */}
              <p className={`text-base sm:text-lg lg:text-xl text-[#5C5044] leading-relaxed max-w-2xl ${bodyFont}`}>
                {content.hero.description}
              </p>

              {/* Two CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToSection('vision')}
                  className={`px-6 py-3.5 rounded-xl bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${labelFont}`}
                >
                  <span>{content.hero.ctaExplore}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4C5A9]" />
                </button>

                <a
                  href="https://tinyurl.com/2zap33fy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3.5 rounded-xl bg-[#8B5A2B] hover:bg-[#66411E] text-[#FAF8F3] text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${labelFont}`}
                >
                  <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
                  <span>{content.hero.ctaJoin}</span>
                </a>
              </div>
            </div>

            {/* Western Ghats Forest Canopy Photo */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl border border-[#D4C5A9] shadow-xs bg-[#ECE6D8]">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=80"
                alt="Western Ghats lush forest canopy and mountain sanctuary"
                className="w-full h-full object-cover filter contrast-[0.98] brightness-[0.97]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[#FAF8F3] text-xs sm:text-sm max-w-lg drop-shadow-sm ${bodyFont}`}>
                <span className="font-semibold block">{content.hero.imageCaptionTitle}</span>
                <span className="text-[11px] opacity-90">{content.hero.imageCaptionSub}</span>
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
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.etymology.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.etymology.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                {content.etymology.subheading}
              </p>
            </div>

            {/* 4-Card Etymology Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {content.etymology.cards.map((card, idx) => {
                const isSpecial = idx === 3;

                return (
                  <div 
                    key={idx}
                    className={`rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between transition-colors ${
                      isSpecial 
                        ? 'bg-[#ECE6D8] border-2 border-[#2E4F2B]/40' 
                        : 'bg-[#FAF8F3] border border-[#D4C5A9] hover:border-[#2E4F2B]/50'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
                        isSpecial ? 'bg-[#2E4F2B] text-[#FAF8F3]' : 'bg-[#ECE6D8] text-[#2E4F2B]'
                      }`}>
                        {card.letter}
                      </div>
                      <h3 className={`text-xl font-bold text-[#2E4F2B] ${headingFont}`}>
                        {card.title}
                      </h3>
                      <div className={`text-xs uppercase tracking-wider text-[#8B5A2B] font-semibold ${labelFont}`}>
                        {card.subtitle}
                      </div>
                      <p className={`text-xs text-[#5C5044] leading-relaxed pt-1 ${bodyFont}`}>
                        {card.desc}
                      </p>
                    </div>
                    <div className={`pt-3 border-t border-[#D4C5A9]/50 text-[11px] text-[#8B5A2B] font-medium ${bodyFont}`}>
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
      {/* SECTION 03 — PHILOSOPHY & 5 ELEMENTS (PANCHA BHOOTAS)                     */}
      {/* ========================================================================= */}
      <section id="philosophy" className="scroll-mt-20">
        <Container>
          <div className="space-y-12">
            
            {/* Top Description */}
            <div className="max-w-3xl space-y-3">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.philosophy.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.philosophy.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                {content.philosophy.subheading}
              </p>
            </div>

            {/* 5 Core Tenets List */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {content.philosophy.tenets.map((tenet, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-[#2E4F2B]/40 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-serif font-bold text-[#8B5A2B]">
                      {tenet.num}
                    </span>
                    <h4 className={`font-bold text-sm text-[#2E4F2B] leading-snug ${headingFont}`}>
                      {tenet.title}
                    </h4>
                    <p className={`text-xs text-[#5C5044] leading-relaxed pt-1 ${bodyFont}`}>
                      {tenet.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 5 Elements (Pancha Bhootas) Callout Banner */}
            <div className="bg-[#2E4F2B] text-[#FAF8F3] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
              <div className="max-w-2xl space-y-2">
                <span className={`text-xs uppercase tracking-widest text-[#D4C5A9] font-semibold block ${labelFont}`}>
                  {content.philosophy.elementsBadge}
                </span>
                <h3 className={`text-xl sm:text-2xl font-bold text-[#FAF8F3] ${headingFont}`}>
                  {content.philosophy.elementsHeading}
                </h3>
                <p className={`text-xs sm:text-sm text-[#F5F2EB]/80 leading-relaxed ${bodyFont}`}>
                  {content.philosophy.elementsSubheading}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-2">
                {content.philosophy.elements.map((el, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 rounded-xl bg-[#1E351C] border border-[#D4C5A9]/20 space-y-2 ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                  >
                    <div className={`flex items-center gap-1.5 text-xs font-bold text-[#D4C5A9] ${labelFont}`}>
                      {elementIcons[idx]}
                      <span>{el.name}</span>
                    </div>
                    <p className={`text-[11px] text-[#F5F2EB]/75 leading-relaxed ${bodyFont}`}>
                      {el.desc}
                    </p>
                  </div>
                ))}
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
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.vision.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2E4F2B] leading-tight ${headingFont}`}>
                {content.vision.heading}
              </h2>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#5C5044] leading-relaxed text-left pt-4 ${bodyFont}`}>
              <p>{content.vision.p1}</p>
              <p>{content.vision.p2}</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D4C5A9]/50">
              <span className={`text-xs font-semibold text-[#8B5A2B] ${headingFont}`}>
                {content.vision.footerQuote}
              </span>
              <span className="text-xs font-serif text-[#2E4F2B] font-bold">
                {content.vision.footerBrand}
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
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.pillars.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.pillars.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                {content.pillars.subheading}
              </p>
            </div>

            {/* 8-Pillars Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {content.pillars.items.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-[#2E4F2B]/50 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#ECE6D8] flex items-center justify-center">
                      {pillarIcons[idx]}
                    </div>
                    <h3 className={`font-bold text-base text-[#2E4F2B] ${headingFont}`}>
                      {pillar.title}
                    </h3>
                    <p className={`text-xs text-[#5C5044] leading-relaxed pt-1 ${bodyFont}`}>
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
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.standFor.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.standFor.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                {content.standFor.subheading}
              </p>
            </div>

            {/* Two-Column Contrast Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Column 1: Life Built On */}
              <div className="bg-[#FAF8F3] border-2 border-[#2E4F2B]/30 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-[#D4C5A9]/50">
                  <CheckCircle2 className="w-5 h-5 text-[#2E4F2B]" />
                  <h3 className={`font-bold text-lg sm:text-xl text-[#2E4F2B] ${headingFont}`}>
                    {content.standFor.lifeBuiltOnTitle}
                  </h3>
                </div>

                <ul className={`space-y-3.5 text-xs sm:text-sm text-[#241D17] ${bodyFont}`}>
                  {content.standFor.lifeBuiltOnItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#2E4F2B] mt-2 shrink-0" />
                      <span><strong>{item.title}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: No Place Here For */}
              <div className="bg-[#FAF8F3] border-2 border-[#8B5A2B]/30 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-[#D4C5A9]/50">
                  <XCircle className="w-5 h-5 text-[#8B5A2B]" />
                  <h3 className={`font-bold text-lg sm:text-xl text-[#8B5A2B] ${headingFont}`}>
                    {content.standFor.noPlaceTitle}
                  </h3>
                </div>

                <ul className={`space-y-3.5 text-xs sm:text-sm text-[#241D17] ${bodyFont}`}>
                  {content.standFor.noPlaceItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#8B5A2B] mt-2 shrink-0" />
                      <span><strong>{item.title}</strong> {item.desc}</span>
                    </li>
                  ))}
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
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.principles.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.principles.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                {content.principles.subheading}
              </p>
            </div>

            {/* Principles Accordion */}
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
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.spiritual.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.spiritual.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                {content.spiritual.subheading}
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
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.ethics.badge}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.ethics.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                {content.ethics.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm text-[#241D17]">
              {content.ethics.commitments.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#ECE6D8]/50 border border-[#D4C5A9]/50">
                  <ShieldCheck className={`w-5 h-5 shrink-0 mt-0.5 ${idx % 2 === 0 ? 'text-[#2E4F2B]' : 'text-[#8B5A2B]'}`} />
                  <div className="space-y-1">
                    <strong className={`block text-sm ${idx % 2 === 0 ? 'text-[#2E4F2B]' : 'text-[#8B5A2B]'} ${headingFont}`}>
                      {item.title}
                    </strong>
                    <p className={`text-[#5C5044] leading-relaxed ${bodyFont}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — LAND & LOCATION (INTERACTIVE MAP PINNED NEAR SIVASAILAM)    */}
      {/* ========================================================================= */}
      <section id="land" className="scroll-mt-20">
        <Container>
          <MapSection />
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11 — GOVERNANCE & ASSET STRUCTURE (SVG FLOW DIAGRAM)               */}
      {/* ========================================================================= */}
      <section id="governance" className="scroll-mt-20">
        <Container>
          <TrustDiagram />
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12 — COMMUNITY LIFE (3-COLUMN SECTION: FOOD / HEALTH / WORK)      */}
      {/* ========================================================================= */}
      <section id="community" className="scroll-mt-20">
        <Container>
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.community.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.community.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                {content.community.subheading}
              </p>
            </div>

            {/* 3-Column Community Life Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.community.columns.map((col, idx) => (
                <div key={idx} className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ECE6D8] flex items-center justify-center text-[#2E4F2B]">
                      {idx === 0 ? <Wheat className="w-5 h-5" /> : idx === 1 ? <HeartPulse className="w-5 h-5 text-[#8B5A2B]" /> : <Hammer className="w-5 h-5" />}
                    </div>
                    <h3 className={`font-bold text-lg text-[#2E4F2B] ${headingFont}`}>
                      {col.title}
                    </h3>
                    <p className={`text-xs text-[#5C5044] leading-relaxed ${bodyFont}`}>
                      {col.desc}
                    </p>
                    <ul className={`space-y-1.5 text-xs text-[#241D17] pt-2 ${bodyFont}`}>
                      {col.points.map((pt, ptIdx) => (
                        <li key={ptIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.contribution.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.contribution.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                {content.contribution.subheading}
              </p>
            </div>

            {/* 3-Step Pathway Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {content.contribution.steps.map((step, idx) => {
                const isFinal = idx === 2;
                return (
                  <div 
                    key={idx}
                    className={`rounded-2xl p-6 space-y-4 shadow-xs ${
                      isFinal ? 'bg-[#ECE6D8] border-2 border-[#2E4F2B]/40' : 'bg-[#FAF8F3] border border-[#D4C5A9]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-bold text-xs px-2.5 py-1 rounded-md ${
                        isFinal ? 'bg-[#2E4F2B] text-[#FAF8F3]' : 'bg-[#ECE6D8] text-[#8B5A2B] border border-[#D4C5A9]'
                      } ${labelFont}`}>
                        {step.stepNumber}
                      </span>
                      <span className={`text-xs text-[#5C5044] ${labelFont}`}>{step.stepType}</span>
                    </div>
                    <h3 className={`font-bold text-base text-[#2E4F2B] ${headingFont}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs text-[#5C5044] leading-relaxed ${bodyFont}`}>
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Infrastructure Fund Breakdown Visual */}
            <div className="bg-[#FAF8F3] border border-[#D4C5A9] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="max-w-2xl space-y-1">
                <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                  {content.contribution.fundBadge}
                </span>
                <h3 className={`text-lg sm:text-xl font-bold text-[#2E4F2B] ${headingFont}`}>
                  {content.contribution.fundHeading}
                </h3>
                <p className={`text-xs text-[#5C5044] ${bodyFont}`}>
                  {content.contribution.fundSubheading}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {content.contribution.fundItems.map((fItem, idx) => (
                  <div key={idx} className="p-4 bg-[#ECE6D8]/60 rounded-xl border border-[#D4C5A9]/50 space-y-2">
                    <div className={`text-xs font-bold ${idx % 2 === 0 ? 'text-[#2E4F2B]' : 'text-[#8B5A2B]'} ${headingFont}`}>
                      {fItem.title}
                    </div>
                    <p className={`text-[11px] text-[#5C5044] leading-relaxed ${bodyFont}`}>
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
      {/* SECTION 14 — FOUNDERS & STEWARDS (TWO-COLUMN BIOS WITH PORTRAITS & TEL)   */}
      {/* ========================================================================= */}
      <section id="founders" className="scroll-mt-20">
        <Container>
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold block ${labelFont}`}>
                {content.founders.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.founders.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] ${bodyFont}`}>
                {content.founders.subheading}
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
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold text-[#2E4F2B] ${headingFont}`}>
                        {content.founders.founderName}
                      </h3>
                      <div className={`text-xs font-semibold text-[#8B5A2B] uppercase tracking-wider ${labelFont}`}>
                        {content.founders.founderRole}
                      </div>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                    {content.founders.founderBio1}
                  </p>

                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                    {content.founders.founderBio2}
                  </p>

                  <blockquote className={`p-3.5 bg-[#ECE6D8]/60 border-l-3 border-[#2E4F2B] rounded-r-lg text-xs italic text-[#241D17] ${headingFont}`}>
                    {content.founders.founderQuote}
                  </blockquote>
                </div>

                <div className={`pt-4 border-t border-[#D4C5A9]/50 flex flex-wrap items-center justify-between gap-3 text-xs ${labelFont}`}>
                  <a
                    href="tel:+919600756007"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2E4F2B] text-[#FAF8F3] hover:bg-[#1E351C] transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>{content.founders.founderCallBtn}</span>
                  </a>
                  <span className="text-[11px] text-[#5C5044]">{content.founders.founderLocation}</span>
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
                      <h3 className={`text-xl sm:text-2xl font-bold text-[#8B5A2B] ${headingFont}`}>
                        {content.founders.coFounderName}
                      </h3>
                      <div className={`text-xs font-semibold text-[#2E4F2B] uppercase tracking-wider ${labelFont}`}>
                        {content.founders.coFounderRole}
                      </div>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                    {content.founders.coFounderBio1}
                  </p>

                  <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                    {content.founders.coFounderBio2}
                  </p>

                  <blockquote className={`p-3.5 bg-[#ECE6D8]/60 border-l-3 border-[#8B5A2B] rounded-r-lg text-xs italic text-[#241D17] ${headingFont}`}>
                    {content.founders.coFounderQuote}
                  </blockquote>
                </div>

                <div className={`pt-4 border-t border-[#D4C5A9]/50 flex flex-wrap items-center justify-between gap-3 text-xs ${labelFont}`}>
                  <a
                    href="tel:+919444098765"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#8B5A2B] text-[#FAF8F3] hover:bg-[#66411E] transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4C5A9]" />
                    <span>{content.founders.coFounderCallBtn}</span>
                  </a>
                  <span className="text-[11px] text-[#5C5044]">{content.founders.coFounderLocation}</span>
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
              <span className={`text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block ${labelFont}`}>
                {content.closing.badge}
              </span>
              <h2 className={`text-2xl sm:text-4xl font-bold text-[#2E4F2B] ${headingFont}`}>
                {content.closing.heading}
              </h2>
              <p className={`text-xs sm:text-sm text-[#5C5044] leading-relaxed ${bodyFont}`}>
                {content.closing.subheading}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://tinyurl.com/2zap33fy"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3.5 rounded-xl bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-sm font-semibold tracking-wide flex items-center gap-2 shadow-xs cursor-pointer ${labelFont}`}
              >
                <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
                <span>{content.closing.btnWhatsapp}</span>
              </a>

              <a
                href="mailto:contact@iyalvanam.org"
                className={`px-6 py-3.5 rounded-xl bg-[#FAF8F3] hover:bg-[#ECE6D8] text-[#241D17] border border-[#D4C5A9] text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer transition-colors ${labelFont}`}
              >
                <Mail className="w-4 h-4 text-[#8B5A2B]" />
                <span>{content.closing.btnEmail}</span>
              </a>
            </div>

            <div className={`pt-4 text-xs text-[#8B5A2B] font-medium ${headingFont}`}>
              {content.closing.footerBlessing}
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
