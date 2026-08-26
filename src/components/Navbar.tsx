import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Menu, 
  X, 
  Heart, 
  Compass, 
  BookOpen, 
  Users, 
  MapPin, 
  Send, 
  UserCheck, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', tamil: 'முகப்பு' },
    { name: 'About Us', path: '/about', tamil: 'எங்களை பற்றி' },
    { name: 'Principles', path: '/principles', tamil: 'கோட்பாடுகள்' },
    { name: 'Community Life', path: '/community-life', tamil: 'சமூக வாழ்வியல்' },
    { name: 'Land', path: '/land', tamil: 'நிலம் & உள்கட்டமைப்பு' },
    { name: 'Blog', path: '/blog', tamil: 'செய்திகள்' },
    { name: 'Contact', path: '/contact', tamil: 'தொடர்பு' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F5F0]/95 backdrop-blur-md shadow-xs border-b border-[#5A5A40]/15'
          : 'bg-[#F5F5F0] border-b border-[#5A5A40]/10'
      }`}
    >
      {/* Top micro banner */}
      <div className="bg-[#4A3728] text-[#F5F5F0] px-4 py-1.5 text-xs text-center flex items-center justify-between font-tamil font-medium tracking-wide">
        <div className="hidden sm:block text-left text-[#EBEBE3]/80 text-[11px] uppercase tracking-wider">
          📍 Dharmapuramadam, Tenkasi District, Western Ghats
        </div>
        <div className="mx-auto sm:mx-0 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#B35C44] animate-pulse"></span>
          <span className="text-xs sm:text-sm">“இயன்ற வரை இயற்கைக்கு திரும்புவோம்” – Return to nature as much as possible</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-2 text-[#EBEBE3] text-xs">
              <span>Admin: {user?.username}</span>
              <button
                onClick={() => handleNav('/admin')}
                className="underline hover:text-white transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={logout}
                className="text-[#B35C44] hover:text-white transition-colors ml-2 font-bold"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleNav('/admin/login')}
              className="text-[#EBEBE3]/70 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-semibold"
            >
              Admin Portal
            </button>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Bilingual Brand */}
          <div
            id="brand-logo"
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-full bg-[#5A5A40] text-[#F5F5F0] flex items-center justify-center shadow-sm group-hover:bg-[#4A3728] transition-colors duration-200">
              <Sprout className="w-6 h-6 text-[#F5F5F0]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <h1 className="text-2xl font-serif font-bold text-[#4A3728] tracking-tight">
                  IYALVANAM
                </h1>
                <span className="text-sm text-[#5A5A40] font-medium font-tamil">
                  இயல்வனம்
                </span>
              </div>
              <p className="text-[10px] text-[#5A5A40]/80 uppercase tracking-widest font-semibold">
                Iyarkai Vazhviyal Koodam
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold text-[#5A5A40]">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`transition-all duration-150 py-1 ${
                    isActive
                      ? 'border-b-2 border-[#5A5A40] text-[#4A3728] font-bold'
                      : 'hover:text-[#4A3728] hover:opacity-75'
                  }`}
                >
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-support-btn"
              onClick={() => handleNav('/support')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-xs flex items-center gap-1.5 ${
                currentPath === '/support'
                  ? 'bg-[#B35C44] text-white shadow-md'
                  : 'bg-[#B35C44] text-white hover:bg-[#9B4F3B] shadow-[#B35C44]/20'
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-current opacity-90" />
              <span>Support</span>
            </button>
            <button
              id="nav-join-btn"
              onClick={() => handleNav('/join')}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-xs flex items-center gap-1.5 ${
                currentPath === '/join'
                  ? 'bg-[#4A3728] text-white ring-2 ring-[#5A5A40]'
                  : 'bg-[#5A5A40] text-white hover:bg-[#4A3728]'
              }`}
            >
              <span>Join Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              id="mobile-join-shortcut"
              onClick={() => handleNav('/join')}
              className="sm:hidden px-3.5 py-1.5 bg-[#5A5A40] text-white rounded-full text-xs uppercase tracking-wider font-bold"
            >
              Join Us
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#4A3728] hover:bg-[#EBEBE3] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden bg-[#F5F5F0] border-b border-[#5A5A40]/10 px-6 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-xs uppercase tracking-widest font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-[#5A5A40] text-white font-bold'
                      : 'text-[#4A3728] hover:bg-[#EBEBE3]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className={`text-xs ${isActive ? 'text-[#EBEBE3]' : 'text-[#5A5A40]'} font-tamil normal-case font-medium`}>
                    {link.tamil}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#5A5A40]/10 grid grid-cols-2 gap-2">
            <button
              onClick={() => handleNav('/support')}
              className="w-full py-3 px-4 rounded-full text-xs uppercase tracking-widest font-bold text-white bg-[#B35C44] text-center flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Support</span>
            </button>
            <button
              onClick={() => handleNav('/join')}
              className="w-full py-3 px-4 rounded-full text-xs uppercase tracking-widest font-bold text-white bg-[#5A5A40] text-center flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Join Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {isAuthenticated ? (
            <div className="pt-2 flex items-center justify-between px-2 text-xs text-[#5A5A40]">
              <span>Logged in as Admin</span>
              <div className="flex gap-3">
                <button
                  onClick={() => handleNav('/admin')}
                  className="font-semibold text-[#4A3728] underline"
                >
                  Admin Panel
                </button>
                <button onClick={logout} className="text-[#B35C44] font-semibold">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-2 text-center">
              <button
                onClick={() => handleNav('/admin/login')}
                className="text-xs uppercase tracking-widest text-[#5A5A40] hover:text-[#4A3728] underline font-semibold"
              >
                Admin Management Portal
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
