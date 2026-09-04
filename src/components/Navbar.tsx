import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight
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
  const { content, language } = useLanguage();
  const isTamil = language === 'ta';

  // Prevent background scrolling when mobile menu is open
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

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: content.nav.home, path: '/', match: (p: string) => p === '/' || p === '/home' || p === '/landing' },
    { label: content.nav.about, path: '/about', match: (p: string) => p === '/about' },
    { label: content.nav.sanctuary, path: '/sanctuary', match: (p: string) => p === '/sanctuary' || p === '/land' || p === '/projects' },
    { label: content.nav.food, path: '/food', match: (p: string) => p === '/food' || p === '/natural-food' },
    { label: content.nav.health, path: '/health', match: (p: string) => p === '/health' || p === '/living-health' },
    { label: content.nav.craft, path: '/craft', match: (p: string) => p === '/craft' || p === '/sacred-craft' || p === '/sacred-work' },
    { label: content.nav.journal, path: '/blog', match: (p: string) => p.startsWith('/blog') || p === '/journal' },
    { label: content.nav.founders, path: '/leadership', match: (p: string) => p.startsWith('/leadership') || p === '/founders' },
    { label: content.nav.faq, path: '/faq', match: (p: string) => p.startsWith('/faq') || p === '/community-faq' },
    { label: content.nav.contact, path: '/contact', match: (p: string) => p === '/contact' },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP LEFT SIDEBAR NAVIGATION (Visible on lg: screens >= 1024px)    */}
      {/* ========================================================================= */}
      <aside 
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 xl:w-72 bg-[#FAF8F3] border-r border-[#E3DDD2] z-40 flex-col justify-between p-6 xl:p-8 overflow-y-auto select-none"
        aria-label="Sidebar Navigation"
      >
        {/* Top: Brand & Emblem */}
        <div className="space-y-6">
          <div
            onClick={() => handleNav('/')}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
              <IyalvanamEmblem size={26} className="w-6.5 h-6.5 text-[#2E4F2B]" />
              <SeyonEmblem size={26} className="w-6.5 h-6.5 text-[#8B5A2B]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#2E4F2B] group-hover:text-[#1E351C] transition-colors leading-tight">
                IYALVANAM & SEYON
              </span>
              <span className="text-[11px] text-[#8B5A2B] font-medium leading-tight mt-1">
                {content.nav.subTitle}
              </span>
            </div>
          </div>

          <div className="h-px bg-[#E3DDD2] w-full" />

          {/* Navigation Links */}
          <nav className="space-y-1.5 xl:space-y-2">
            {navItems.map((item) => {
              const isActive = item.match(currentPath);
              return (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`w-full text-left py-2 px-3 rounded-md text-xs xl:text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'text-[#2E4F2B] font-bold bg-[#ECE6D8] border-l-3 border-[#2E4F2B]'
                      : 'text-[#5A5046] hover:text-[#2E4F2B] hover:bg-[#ECE6D8]/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#2E4F2B]" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Language Selector + Primary Join Us CTA */}
        <div className="space-y-4 pt-6 border-t border-[#E3DDD2]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-[#8B5A2B] uppercase tracking-wider">
              {isTamil ? 'மொழி' : 'Language'}
            </span>
            <LanguageToggle size="sm" />
          </div>

          <button
            onClick={() => handleNav('/join')}
            className="w-full py-2.5 px-4 rounded-md bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-xs xl:text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{content.nav.joinUs}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4C5A9]" />
          </button>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MOBILE TOP HEADER (Visible on screens < 1024px)                       */}
      {/* ========================================================================= */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E3DDD2] z-50 px-4 sm:px-6 flex items-center justify-between select-none">
        {/* Mobile Brand */}
        <div
          onClick={() => handleNav('/')}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="flex items-center gap-1 shrink-0">
            <IyalvanamEmblem size={24} className="w-6 h-6 text-[#2E4F2B]" />
            <SeyonEmblem size={24} className="w-6 h-6 text-[#8B5A2B]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-[#2E4F2B] leading-tight">
              IYALVANAM & SEYON
            </span>
            <span className="text-[10px] text-[#8B5A2B] font-medium leading-none mt-0.5">
              {isTamil ? 'இயற்கை வாழ்வியல் கூடம்' : 'Nature Life Sanctuary'}
            </span>
          </div>
        </div>

        {/* Mobile Controls: Language Switcher + Menu Button */}
        <div className="flex items-center gap-2">
          <LanguageToggle size="sm" />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-md text-[#241D17] hover:bg-[#ECE6D8] transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#8B5A2B]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2E4F2B]" />
            )}
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. MOBILE MENU DRAWER (Calm, full touch target mobile navigation)          */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-16 z-50 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#FAF8F3] border-b border-[#E3DDD2] px-6 py-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-1.5 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = item.match(currentPath);
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between min-h-[48px] transition-colors ${
                      isActive 
                        ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' 
                        : 'text-[#241D17] hover:bg-[#ECE6D8]'
                    }`}
                  >
                    <span className="text-sm">{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#FAF8F3]' : 'opacity-40'}`} />
                  </button>
                );
              })}

              <button
                onClick={() => handleNav('/contact')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between min-h-[48px] transition-colors ${
                  currentPath === '/contact' 
                    ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' 
                    : 'text-[#241D17] hover:bg-[#ECE6D8]'
                }`}
              >
                <span className="text-sm">{content.nav.contact}</span>
                <ChevronRight className={`w-4 h-4 ${currentPath === '/contact' ? 'text-[#FAF8F3]' : 'opacity-40'}`} />
              </button>
            </nav>

            {/* Mobile Primary Join CTA */}
            <div className="pt-4 border-t border-[#E3DDD2]">
              <button
                onClick={() => handleNav('/join')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-sm font-semibold text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer min-h-[48px]"
              >
                <span>{content.nav.joinUs}</span>
                <ArrowRight className="w-4 h-4 text-[#D4C5A9]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
