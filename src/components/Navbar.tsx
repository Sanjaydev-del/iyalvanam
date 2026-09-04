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

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

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
    { name: 'Vision & Hero', path: '#hero', tamil: 'முகப்பு & நோக்கம்' },
    { name: 'Etymology', path: '#etymology', tamil: 'பெயர்க் காரணம்' },
    { name: '5 Elements', path: '#philosophy', tamil: 'ஐம்பூத வாழ்வியல்' },
    { name: '8 Pillars', path: '#pillars', tamil: 'எட்டுத் தூண்கள்' },
    { name: 'Principles', path: '#principles', tamil: 'கோட்பாடுகள்' },
    { name: 'Spiritual Path', path: '#spiritual', tamil: 'ஆன்மீகப் பாதை' },
    { name: 'Tenkasi Land & Map', path: '#land', tamil: 'புனித நிலம் & வரைபடம்' },
    { name: 'Trust Governance', path: '#governance', tamil: 'அறக்கட்டளை அமைப்பு' },
    { name: 'Community Life', path: '#community', tamil: 'அன்றாட வாழ்வியல்' },
    { name: 'Founders', path: '#founders', tamil: 'நிறுவனர்கள்' },
    { name: 'Journal & Stories', path: '/blog', tamil: 'பதிவுகள்' },
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
        {/* Top Branding Section */}
        <div className="p-6 xl:p-7 space-y-4 border-b border-[#D4C5A9]/40">
          <div 
            onClick={() => handleNav('#hero')}
            className="cursor-pointer group space-y-2.5"
          >
            <div className="flex items-center gap-2.5">
              <IyalvanamEmblem size={34} className="w-8.5 h-8.5 text-[#2E4F2B]" />
              <SeyonEmblem size={34} className="w-8.5 h-8.5 text-[#8B5A2B]" />
            </div>

            <div className="space-y-0.5">
              <span className="text-base xl:text-lg font-serif-heading font-bold text-[#2E4F2B] tracking-tight block leading-snug">
                IYALVANAM & SEYON
              </span>
              <span className="text-[11px] font-tamil-serif text-[#8B5A2B] block font-medium">
                இயல்வனம் இயற்கை வாழ்வியல் கூடம்
              </span>
              <span className="text-[10px] text-[#5C5044] font-serif uppercase tracking-wider block">
                Two Trusts • One Sovereign Vision
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#D4C5A9]/30 flex items-center justify-between text-[11px] text-[#5C5044]">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#8B5A2B] shrink-0" />
              <span>Sivasailam, Tenkasi</span>
            </span>
            <span className="font-tamil text-[10px] text-[#2E4F2B] font-semibold">மேற்குத் தொடர்ச்சி மலை</span>
          </div>
        </div>

        {/* Navigation Jump Links */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isAnchor = item.path.startsWith('#');
            const targetId = isAnchor ? item.path.substring(1) : '';
            const isActive = isAnchor
              ? activeSection === targetId && (currentPath === '/' || currentPath === '/landing')
              : currentPath.startsWith(item.path);

            return (
              <button
                key={item.name}
                onClick={() => handleNav(item.path)}
                className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-serif font-medium tracking-wide transition-all flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-[#2E4F2B] text-[#FAF8F3] font-semibold shadow-xs'
                    : 'text-[#241D17] hover:bg-[#ECE6D8] hover:text-[#2E4F2B]'
                }`}
              >
                <span>{item.name}</span>
                <span className={`text-[10px] font-tamil transition-opacity ${isActive ? 'text-[#FAF8F3]/90' : 'text-[#8B5A2B]'}`}>
                  {item.tamil}
                </span>
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
            className="w-full py-2.5 px-3 rounded-lg bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-xs font-serif font-semibold text-center flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
            <span>Join WhatsApp Community</span>
          </a>

          <div className="pt-2 flex items-center justify-between text-[11px] text-[#5C5044] font-serif">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#8B5A2B]" />
              <a href="tel:+919600756007" className="hover:text-[#2E4F2B] hover:underline">
                +91 96007 56007
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
        className="lg:hidden sticky top-0 z-50 bg-[#FAF8F3]/98 backdrop-blur-md border-b border-[#D4C5A9]/60 px-4 py-3 flex items-center justify-between"
      >
        <div
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="flex items-center gap-1 shrink-0">
            <IyalvanamEmblem size={26} className="w-6.5 h-6.5 text-[#2E4F2B]" />
            <SeyonEmblem size={26} className="w-6.5 h-6.5 text-[#8B5A2B]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold font-serif-heading text-[#2E4F2B] tracking-tight leading-none">
              IYALVANAM & SEYON
            </span>
            <span className="text-[10px] font-tamil text-[#8B5A2B] font-medium leading-tight">
              இயல்வனம் இயற்கை வாழ்வியல் கூடம்
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://tinyurl.com/2zap33fy"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[36px] px-3 py-1 bg-[#2E4F2B] text-[#FAF8F3] rounded-lg text-xs font-serif font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#D4C5A9]" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-[#241D17] hover:bg-black/5 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#8B5A2B]" /> : <Menu className="w-6 h-6 text-[#2E4F2B]" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[57px] z-50 bg-black/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-full max-h-[calc(100vh-57px)] overflow-y-auto bg-[#FAF8F3] border-b border-[#D4C5A9] px-5 py-5 space-y-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item) => {
                  const isAnchor = item.path.startsWith('#');
                  const targetId = isAnchor ? item.path.substring(1) : '';
                  const isActive = isAnchor
                    ? activeSection === targetId && (currentPath === '/' || currentPath === '/landing')
                    : currentPath.startsWith(item.path);

                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNav(item.path)}
                      className={`w-full text-left px-3.5 py-2.5 min-h-[44px] rounded-lg text-xs font-serif font-medium tracking-wide transition-colors flex items-center justify-between cursor-pointer ${
                        isActive ? 'bg-[#2E4F2B] text-[#FAF8F3] font-semibold' : 'text-[#241D17] hover:bg-[#ECE6D8]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className={`text-[11px] font-tamil ${isActive ? 'text-[#FAF8F3]/90' : 'text-[#8B5A2B]'}`}>{item.tamil}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Drawer Direct Phone Numbers */}
              <div className="p-3.5 bg-[#ECE6D8]/60 rounded-xl border border-[#D4C5A9]/60 space-y-2">
                <span className="text-[10px] font-serif uppercase tracking-wider text-[#8B5A2B] font-bold block">
                  Founders & Stewards Direct Contact
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
                  className="w-full py-3 rounded-xl bg-[#2E4F2B] text-[#FAF8F3] text-xs font-serif font-semibold text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4C5A9]" />
                  <span>Join WhatsApp Community</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
