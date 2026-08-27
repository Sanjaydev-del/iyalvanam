import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { IyalvanamEmblem, SeyonEmblem } from './OrganicIcons';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/', tamil: 'முகப்பு' },
    { name: 'About', path: '/about', tamil: 'எங்களை பற்றி' },
    { name: 'Projects', path: '/land', tamil: 'திட்டங்கள்' },
    { name: 'Principles', path: '/principles', tamil: 'அறக்கோட்பாடுகள்' },
    { name: 'Leadership', path: '/leadership', tamil: 'தலைமைத்துவம்' },
    { name: 'Blog', path: '/blog', tamil: 'பதிவுகள்' },
    { name: 'Contact', path: '/contact', tamil: 'தொடர்பு' },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP & LAPTOP LEFT SIDEBAR NAVBAR (lg: >= 1024px)                  */}
      {/* ========================================================================= */}
      <aside
        id="desktop-sidebar-nav"
        className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-72 xl:w-80 bg-[#faf6eb] border-r border-[#6b2816]/12 z-40 select-none justify-between"
      >
        {/* Top Branding Section */}
        <div className="p-7 space-y-4">
          <div 
            onClick={() => handleNav('/')}
            className="cursor-pointer group space-y-3"
          >
            <div className="flex items-center gap-2">
              <IyalvanamEmblem size={32} className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity" />
              <SeyonEmblem size={32} className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="space-y-0.5">
              <span className="text-base xl:text-lg font-serif-display font-bold text-[#1b331b] tracking-tight block">
                IYALVANAM & SEYON
              </span>
              <span className="text-[10px] text-[#6b2816] font-serif uppercase tracking-widest font-semibold block">
                Two Trusts. One Vision.
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#6b2816]/10 flex items-center justify-between text-[11px] text-[#574637] font-serif">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#6b2816]" />
              <span>Tenkasi Sanctuary</span>
            </span>
            <span className="font-tamil text-[10px] text-[#6b2816]/90">இயல்வனம்</span>
          </div>
        </div>

        {/* Main Clean Navigation Links */}
        <nav className="flex-1 px-5 py-2 space-y-1">
          {navLinks.map((item) => {
            const isActive = item.path === '/' ? currentPath === '/' : currentPath.startsWith(item.path);

            return (
              <button
                key={item.name}
                onClick={() => handleNav(item.path)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-serif font-semibold tracking-wide transition-all flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-[#1b331b] text-[#faf6eb]'
                    : 'text-[#261a12] hover:bg-[#ede6d4] hover:text-[#6b2816]'
                }`}
              >
                <span>{item.name}</span>
                <span className={`text-[10px] font-tamil transition-opacity ${isActive ? 'text-[#faf6eb]/80' : 'text-[#6b2816]/70'}`}>
                  {item.tamil}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-6 border-t border-[#6b2816]/10 space-y-3">
          <button
            onClick={() => handleNav('/join')}
            className="w-full py-3 px-4 rounded-xl bg-[#6b2816] hover:bg-[#501d0f] text-[#faf6eb] text-xs font-serif font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Join the Sanctuary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <p className="text-[10px] text-center font-serif text-[#574637]/75">
            Dharmapuramadam, Tenkasi
          </p>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MOBILE & TABLET HEADER (lg:hidden < 1024px)                            */}
      {/* ========================================================================= */}
      <header
        id="mobile-header"
        className="lg:hidden sticky top-0 z-50 bg-[#faf6eb]/98 backdrop-blur-md border-b border-[#6b2816]/12 px-4 py-3 flex items-center justify-between"
      >
        <div
          onClick={() => handleNav('/')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="flex items-center gap-1 shrink-0">
            <IyalvanamEmblem size={26} className="w-6.5 h-6.5" />
            <SeyonEmblem size={26} className="w-6.5 h-6.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold font-serif-display text-[#1b331b] tracking-tight leading-none">
              IYALVANAM & SEYON
            </span>
            <span className="text-[9px] text-[#6b2816] font-serif uppercase tracking-wider font-semibold">
              Two Trusts. One Vision.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNav('/join')}
            className="min-h-[36px] px-3.5 py-1 bg-[#1b331b] text-[#faf6eb] rounded-lg text-[11px] font-serif uppercase tracking-wider font-bold cursor-pointer"
          >
            Join Us
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#261a12] hover:bg-black/5 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#6b2816]" /> : <Menu className="w-6 h-6 text-[#1b331b]" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[60px] z-50 bg-black/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-full max-h-[calc(100vh-60px)] overflow-y-auto bg-[#faf6eb] border-b border-[#6b2816]/20 px-6 py-6 space-y-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((item) => {
                  const isActive = item.path === '/' ? currentPath === '/' : currentPath.startsWith(item.path);
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNav(item.path)}
                      className={`w-full text-left px-4 py-3 min-h-[46px] rounded-lg text-xs font-serif font-bold uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
                        isActive ? 'bg-[#1b331b] text-[#faf6eb]' : 'text-[#261a12] hover:bg-[#ede6d4]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="text-[11px] font-tamil font-normal opacity-80">{item.tamil}</span>
                    </button>
                  );
                })}
              </div>

              {/* Leadership sub-links in drawer */}
              <div className="p-3 bg-[#f4eedb] rounded-xl border border-[#6b2816]/10 space-y-2">
                <span className="text-[10px] font-serif uppercase tracking-widest text-[#6b2816] font-bold block">
                  Stewards & Leadership
                </span>
                <div className="flex flex-col gap-1.5 text-xs font-serif">
                  <button
                    onClick={() => handleNav('/leadership/founder')}
                    className="text-left py-1 text-[#261a12] hover:text-[#6b2816] flex items-center justify-between cursor-pointer"
                  >
                    <span>• Founder — Rajesh</span>
                    <ChevronRight className="w-3 h-3 opacity-50" />
                  </button>
                  <button
                    onClick={() => handleNav('/leadership/co-founder')}
                    className="text-left py-1 text-[#261a12] hover:text-[#6b2816] flex items-center justify-between cursor-pointer"
                  >
                    <span>• Co-Founder — Shanmugavel</span>
                    <ChevronRight className="w-3 h-3 opacity-50" />
                  </button>
                </div>
              </div>

              {/* Mobile Drawer Footer CTA */}
              <div className="pt-2 border-t border-[#6b2816]/10 space-y-2">
                <button
                  onClick={() => handleNav('/join')}
                  className="w-full py-3.5 rounded-xl bg-[#6b2816] text-[#faf6eb] text-xs font-serif uppercase tracking-widest font-bold text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Join the Sanctuary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
