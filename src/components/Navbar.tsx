import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone
} from 'lucide-react';
import { IyalvanamEmblem, SeyonEmblem } from './OrganicIcons';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { content, language } = useLanguage();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track scroll position for active section highlights
  useEffect(() => {
    if (currentPath !== '/' && currentPath !== '/landing' && currentPath !== '/home') return;

    const sections = [
      'hero', 'etymology', 'philosophy', 'vision', 'pillars', 
      'stand-for', 'principles', 'spiritual', 'ethics', 
      'land', 'governance', 'community', 'contribution', 'founders', 'contact'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPath]);

  const handleNav = (target: string) => {
    setMobileMenuOpen(false);
    if (target.startsWith('#')) {
      if (currentPath !== '/' && currentPath !== '/landing' && currentPath !== '/home') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(target.substring(1));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(target.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(target.substring(1));
        }
      }
    } else {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: content.nav.hero, path: '#hero' },
    { name: content.nav.etymology, path: '#etymology' },
    { name: content.nav.philosophy, path: '#philosophy' },
    { name: content.nav.pillars, path: '#pillars' },
    { name: content.nav.principles, path: '#principles' },
    { name: content.nav.spiritual, path: '#spiritual' },
    { name: content.nav.land, path: '#land' },
    { name: content.nav.governance, path: '#governance' },
    { name: content.nav.community, path: '#community' },
    { name: content.nav.founders, path: '#founders' },
    { name: content.nav.journal, path: '/blog' },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP & LAPTOP LEFT SIDEBAR NAVBAR (lg: >= 1024px)                  */}
      {/* ========================================================================= */}
      <aside
        id="desktop-sidebar-nav"
        className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-72 xl:w-80 bg-[#FAF8F3] border-r border-[#D4C5A9]/50 z-40 select-none justify-between overflow-y-auto"
      >
        {/* Top Branding Section + Language Switcher */}
        <div className="p-6 xl:p-7 space-y-4 border-b border-[#D4C5A9]/40">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <IyalvanamEmblem size={30} className="w-7.5 h-7.5 text-[#2E4F2B]" />
              <SeyonEmblem size={30} className="w-7.5 h-7.5 text-[#8B5A2B]" />
            </div>
            {/* Desktop Language Switcher */}
            <LanguageToggle size="sm" />
          </div>

          <div 
            onClick={() => handleNav('#hero')}
            className="cursor-pointer group space-y-1"
          >
            <span className="text-base xl:text-lg font-serif-heading font-bold text-[#2E4F2B] tracking-tight block leading-snug">
              IYALVANAM & SEYON
            </span>
            <span className={`text-[11px] block font-medium ${language === 'ta' ? 'font-tamil text-[#2E4F2B]' : 'text-[#8B5A2B] font-serif'}`}>
              {content.nav.subTitle}
            </span>
            <span className="text-[10px] text-[#5C5044] font-serif uppercase tracking-wider block">
              {content.nav.tagline}
            </span>
          </div>

          <div className="pt-2 border-t border-[#D4C5A9]/30 flex items-center justify-between text-[11px] text-[#5C5044]">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#8B5A2B] shrink-0" />
              <span>{content.nav.locationBadge}</span>
            </span>
            <span className={`text-[10px] ${language === 'ta' ? 'font-tamil text-[#2E4F2B] font-semibold' : 'text-[#8B5A2B]'}`}>
              Western Ghats
            </span>
          </div>
        </div>

        {/* Navigation Jump Links (Single Active Language) */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isAnchor = item.path.startsWith('#');
            const targetId = isAnchor ? item.path.substring(1) : '';
            const isActive = isAnchor
              ? activeSection === targetId && (currentPath === '/' || currentPath === '/landing')
              : currentPath.startsWith(item.path);

            return (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-medium tracking-wide transition-all flex items-center justify-between group cursor-pointer ${
                  language === 'ta' ? 'font-tamil' : 'font-serif'
                } ${
                  isActive
                    ? 'bg-[#2E4F2B] text-[#FAF8F3] font-semibold shadow-xs'
                    : 'text-[#241D17] hover:bg-[#ECE6D8] hover:text-[#2E4F2B]'
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-opacity ${isActive ? 'opacity-100' : 'opacity-30 group-hover:opacity-70'}`} />
              </button>
            );
          })}
        </nav>

        {/* Bottom Actions & WhatsApp */}
        <div className="p-5 xl:p-6 border-t border-[#D4C5A9]/40 space-y-3 bg-[#FAF8F3]">
          <a
            href="https://tinyurl.com/2zap33fy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-lg bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-xs font-semibold text-center flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
            <span className={language === 'ta' ? 'font-tamil' : 'font-serif'}>{content.nav.joinCommunity}</span>
          </a>

          <div className="pt-2 flex items-center justify-between text-[11px] text-[#5C5044] font-serif">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#8B5A2B]" />
              <a href="tel:+919600756007" className="hover:text-[#2E4F2B] hover:underline">
                {content.nav.callFounder}
              </a>
            </span>
            <span className="text-[10px] text-[#8B5A2B]">Rajesh (Founder)</span>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MOBILE & TABLET HEADER (lg:hidden < 1024px)                            */}
      {/* ========================================================================= */}
      <header
        id="mobile-header"
        className="lg:hidden sticky top-0 z-50 bg-[#FAF8F3]/98 backdrop-blur-md border-b border-[#D4C5A9]/60 px-3 sm:px-4 py-2.5 flex items-center justify-between"
      >
        {/* Left Branding */}
        <div
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="flex items-center gap-1 shrink-0">
            <IyalvanamEmblem size={24} className="w-6 h-6 text-[#2E4F2B]" />
            <SeyonEmblem size={24} className="w-6 h-6 text-[#8B5A2B]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold font-serif-heading text-[#2E4F2B] tracking-tight leading-none">
              IYALVANAM & SEYON
            </span>
            <span className={`text-[9px] sm:text-[10px] text-[#8B5A2B] font-medium leading-tight ${language === 'ta' ? 'font-tamil' : 'font-serif'}`}>
              {content.nav.subTitle}
            </span>
          </div>
        </div>

        {/* Right Action Group: Persistent Language Switcher + WhatsApp + Hamburger Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Always-visible Language Toggle */}
          <LanguageToggle size="sm" />

          {/* Quick WhatsApp Icon/Link */}
          <a
            href="https://tinyurl.com/2zap33fy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Community"
            className="min-h-[32px] px-2 sm:px-2.5 py-1 bg-[#2E4F2B] text-[#FAF8F3] rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#D4C5A9]" />
            <span className="hidden sm:inline text-[11px]">WhatsApp</span>
          </a>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-[#241D17] hover:bg-black/5 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#8B5A2B]" /> : <Menu className="w-5 h-5 text-[#2E4F2B]" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[53px] z-50 bg-black/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-full max-h-[calc(100vh-53px)] overflow-y-auto bg-[#FAF8F3] border-b border-[#D4C5A9] px-5 py-5 space-y-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Language Switcher Row in Drawer */}
              <div className="pb-3 border-b border-[#D4C5A9]/40 flex items-center justify-between">
                <span className="text-xs font-medium text-[#5C5044]">Language / மொழி:</span>
                <LanguageToggle size="sm" />
              </div>

              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item) => {
                  const isAnchor = item.path.startsWith('#');
                  const targetId = isAnchor ? item.path.substring(1) : '';
                  const isActive = isAnchor
                    ? activeSection === targetId && (currentPath === '/' || currentPath === '/landing')
                    : currentPath.startsWith(item.path);

                  return (
                    <button
                      key={item.path}
                      onClick={() => handleNav(item.path)}
                      className={`w-full text-left px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs font-medium tracking-wide transition-colors flex items-center justify-between cursor-pointer ${
                        language === 'ta' ? 'font-tamil' : 'font-serif'
                      } ${
                        isActive ? 'bg-[#2E4F2B] text-[#FAF8F3] font-semibold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  );
                })}
              </div>

              {/* Mobile Drawer Direct Phone Numbers */}
              <div className="p-3.5 bg-[#ECE6D8]/60 rounded-xl border border-[#D4C5A9]/60 space-y-2">
                <span className="text-[10px] font-serif uppercase tracking-wider text-[#8B5A2B] font-bold block">
                  {content.nav.foundersContactHeader}
                </span>
                <div className="flex flex-col gap-1.5 text-xs font-serif text-[#241D17]">
                  <a href="tel:+919600756007" className="flex items-center justify-between hover:text-[#2E4F2B]">
                    <span>• Rajesh (Founder):</span>
                    <span className="font-semibold">+91 96007 56007</span>
                  </a>
                  <a href="tel:+919444098765" className="flex items-center justify-between hover:text-[#2E4F2B]">
                    <span>• Shanmugavel (Co-Founder):</span>
                    <span className="font-semibold">+91 94440 98765</span>
                  </a>
                </div>
              </div>

              {/* Mobile Drawer WhatsApp Button */}
              <div className="pt-2 border-t border-[#D4C5A9]/40">
                <a
                  href="https://tinyurl.com/2zap33fy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#2E4F2B] text-[#FAF8F3] text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
                  <span className={language === 'ta' ? 'font-tamil' : 'font-serif'}>{content.nav.joinCommunity}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
