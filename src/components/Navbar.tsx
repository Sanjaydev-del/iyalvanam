import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight,
  Wheat,
  HeartPulse,
  Hammer
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
  const [livingDropdownOpen, setLivingDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { content, language } = useLanguage();
  const isTamil = language === 'ta';
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLivingDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    setLivingDropdownOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLivingActive = currentPath === '/food' || currentPath === '/health' || currentPath === '/craft' || currentPath === '/community-life';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-xs border-b border-[#D4C5A9]/80 py-3'
          : 'bg-[#FAF8F3] border-b border-[#D4C5A9]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 1. Left Brand / Logo */}
          <div
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="flex items-center gap-1.5 shrink-0">
              <IyalvanamEmblem size={28} className="w-7 h-7 text-[#2E4F2B]" />
              <SeyonEmblem size={28} className="w-7 h-7 text-[#8B5A2B]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#2E4F2B] group-hover:text-[#1E351C] transition-colors leading-tight">
                IYALVANAM & SEYON
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#8B5A2B] font-medium leading-none mt-0.5">
                {content.nav.subTitle}
              </span>
            </div>
          </div>

          {/* 2. Center Navigation Links (Desktop lg+) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Home */}
            <button
              onClick={() => handleNav('/')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                currentPath === '/' || currentPath === '/home' || currentPath === '/landing'
                  ? 'text-[#2E4F2B] font-bold bg-[#ECE6D8]'
                  : 'text-[#241D17] hover:text-[#2E4F2B] hover:bg-[#ECE6D8]/60'
              }`}
            >
              {content.nav.home}
            </button>

            {/* About */}
            <button
              onClick={() => handleNav('/about')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                currentPath === '/about'
                  ? 'text-[#2E4F2B] font-bold bg-[#ECE6D8]'
                  : 'text-[#241D17] hover:text-[#2E4F2B] hover:bg-[#ECE6D8]/60'
              }`}
            >
              {content.nav.about}
            </button>

            {/* Living Dropdown Group */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLivingDropdownOpen(!livingDropdownOpen)}
                onMouseEnter={() => setLivingDropdownOpen(true)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors cursor-pointer inline-flex items-center gap-1 ${
                  isLivingActive
                    ? 'text-[#2E4F2B] font-bold bg-[#ECE6D8]'
                    : 'text-[#241D17] hover:text-[#2E4F2B] hover:bg-[#ECE6D8]/60'
                }`}
                aria-expanded={livingDropdownOpen}
              >
                <span>{content.nav.living}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${livingDropdownOpen ? 'rotate-180 text-[#2E4F2B]' : 'text-[#8B5A2B]'}`} />
              </button>

              {/* Dropdown Menu */}
              {livingDropdownOpen && (
                <div 
                  onMouseLeave={() => setLivingDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1.5 w-60 rounded-xl bg-[#FAF8F3] border border-[#D4C5A9] shadow-lg p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50"
                >
                  <button
                    onClick={() => handleNav('/food')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2.5 transition-colors cursor-pointer ${
                      currentPath === '/food' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-semibold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                    }`}
                  >
                    <Wheat className="w-4 h-4 text-[#8B5A2B] shrink-0" />
                    <div>
                      <div className="font-medium">{content.nav.food}</div>
                      <div className="text-[10px] text-[#5C5044] opacity-80">{isTamil ? 'பாரம்பரிய உணவு & விதைகள்' : 'Heirloom grains & unpolished diet'}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('/health')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2.5 transition-colors cursor-pointer ${
                      currentPath === '/health' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-semibold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                    }`}
                  >
                    <HeartPulse className="w-4 h-4 text-[#2E4F2B] shrink-0" />
                    <div>
                      <div className="font-medium">{content.nav.health}</div>
                      <div className="text-[10px] text-[#5C5044] opacity-80">{isTamil ? 'சூரிய வாழ்வியல் & கிணற்று நீர்' : 'Circadian rhythm & well hydration'}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNav('/craft')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2.5 transition-colors cursor-pointer ${
                      currentPath === '/craft' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-semibold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                    }`}
                  >
                    <Hammer className="w-4 h-4 text-[#8B5A2B] shrink-0" />
                    <div>
                      <div className="font-medium">{content.nav.craft}</div>
                      <div className="text-[10px] text-[#5C5044] opacity-80">{isTamil ? 'மண் கட்டுமானம் & மூங்கில்' : 'Earthen building & physical labor'}</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Sanctuary / Land */}
            <button
              onClick={() => handleNav('/sanctuary')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                currentPath === '/sanctuary' || currentPath === '/land'
                  ? 'text-[#2E4F2B] font-bold bg-[#ECE6D8]'
                  : 'text-[#241D17] hover:text-[#2E4F2B] hover:bg-[#ECE6D8]/60'
              }`}
            >
              {content.nav.sanctuary}
            </button>

            {/* Journal */}
            <button
              onClick={() => handleNav('/blog')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                currentPath.startsWith('/blog')
                  ? 'text-[#2E4F2B] font-bold bg-[#ECE6D8]'
                  : 'text-[#241D17] hover:text-[#2E4F2B] hover:bg-[#ECE6D8]/60'
              }`}
            >
              {content.nav.journal}
            </button>

            {/* Founders */}
            <button
              onClick={() => handleNav('/leadership')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                currentPath.startsWith('/leadership')
                  ? 'text-[#2E4F2B] font-bold bg-[#ECE6D8]'
                  : 'text-[#241D17] hover:text-[#2E4F2B] hover:bg-[#ECE6D8]/60'
              }`}
            >
              {content.nav.founders}
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNav('/contact')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                currentPath === '/contact'
                  ? 'text-[#2E4F2B] font-bold bg-[#ECE6D8]'
                  : 'text-[#241D17] hover:text-[#2E4F2B] hover:bg-[#ECE6D8]/60'
              }`}
            >
              {content.nav.contact}
            </button>
          </nav>

          {/* 3. Right Action Group: Language Selector + Primary Join Us CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle size="sm" />

            <button
              onClick={() => handleNav('/join')}
              className="px-4 py-2 rounded-lg bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span>{content.nav.joinUs}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4C5A9]" />
            </button>
          </div>

          {/* Mobile Right Controls (< lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageToggle size="sm" />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#241D17] hover:bg-[#ECE6D8] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#8B5A2B]" /> : <Menu className="w-5 h-5 text-[#2E4F2B]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation (< lg) */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[60px] z-50 bg-black/40 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-h-[calc(100vh-60px)] overflow-y-auto bg-[#FAF8F3] border-b border-[#D4C5A9] px-6 py-6 space-y-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-1 text-sm font-medium">
              <button
                onClick={() => handleNav('/')}
                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between ${
                  currentPath === '/' || currentPath === '/home' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                }`}
              >
                <span>{content.nav.home}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>

              <button
                onClick={() => handleNav('/about')}
                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between ${
                  currentPath === '/about' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                }`}
              >
                <span>{content.nav.about}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>

              {/* Living Section Group on Mobile */}
              <div className="pt-2 pb-1 px-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B5A2B] block">
                  {content.nav.living}
                </span>
              </div>

              <div className="pl-3 space-y-1 border-l-2 border-[#D4C5A9]/60 ml-3">
                <button
                  onClick={() => handleNav('/food')}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                    currentPath === '/food' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                  }`}
                >
                  <span>{content.nav.food}</span>
                  <Wheat className="w-3.5 h-3.5 opacity-60 text-[#8B5A2B]" />
                </button>

                <button
                  onClick={() => handleNav('/health')}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                    currentPath === '/health' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                  }`}
                >
                  <span>{content.nav.health}</span>
                  <HeartPulse className="w-3.5 h-3.5 opacity-60 text-[#2E4F2B]" />
                </button>

                <button
                  onClick={() => handleNav('/craft')}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                    currentPath === '/craft' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                  }`}
                >
                  <span>{content.nav.craft}</span>
                  <Hammer className="w-3.5 h-3.5 opacity-60 text-[#8B5A2B]" />
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('/sanctuary')}
                  className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between ${
                    currentPath === '/sanctuary' || currentPath === '/land' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                  }`}
                >
                  <span>{content.nav.sanctuary}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => handleNav('/blog')}
                  className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between ${
                    currentPath.startsWith('/blog') ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                  }`}
                >
                  <span>{content.nav.journal}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => handleNav('/leadership')}
                  className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between ${
                    currentPath.startsWith('/leadership') ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                  }`}
                >
                  <span>{content.nav.founders}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                <button
                  onClick={() => handleNav('/contact')}
                  className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between ${
                    currentPath === '/contact' ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                  }`}
                >
                  <span>{content.nav.contact}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>
            </nav>

            {/* Mobile Primary Join Button */}
            <div className="pt-4 border-t border-[#D4C5A9]/50">
              <button
                onClick={() => handleNav('/join')}
                className="w-full py-3.5 rounded-xl bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>{content.nav.joinUs}</span>
                <ArrowRight className="w-4 h-4 text-[#D4C5A9]" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
