import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUpRight 
} from 'lucide-react';
import { IyalvanamEmblem, SeyonEmblem } from './OrganicIcons';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1b331b] text-[#faf6eb] border-t border-[#6b2816]/30">
      
      {/* Top Quiet Statement */}
      <div className="border-b border-[#faf6eb]/10 py-8 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-baseline justify-between gap-4 text-xs font-serif">
          <span className="text-[#c49a38] uppercase tracking-widest font-bold">
            IYALVANAM HOLDS THE LAND • SEYON BRINGS THE VISION TO LIFE
          </span>
          <span className="font-tamil opacity-75">
            “இயன்ற வரை இயற்கைக்கு திரும்புவோம்”
          </span>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#faf6eb]/10 text-xs font-serif">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <IyalvanamEmblem size={28} className="w-7 h-7" />
            <SeyonEmblem size={28} className="w-7 h-7" />
            <div>
              <span className="font-bold tracking-tight block text-sm">IYALVANAM & SEYON</span>
              <span className="text-[10px] text-[#c49a38] uppercase tracking-widest block">Two Trusts. One Vision.</span>
            </div>
          </div>
          <p className="text-xs text-[#faf6eb]/75 font-serif-body leading-relaxed">
            A sacred land sanctuary at the foothills of the Western Ghats, Tamil Nadu. Rooted in Natural Law and collective stewardship.
          </p>
          <div className="text-[11px] text-[#faf6eb]/70 space-y-1">
            <div>Dharmapuramadam, Tenkasi District</div>
            <div>Tamil Nadu, India — 627803</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c49a38] block">
            Navigation
          </span>
          <ul className="space-y-2 text-[#faf6eb]/85">
            <li><button onClick={() => handleNav('/')} className="hover:text-[#c49a38] transition-colors cursor-pointer">Home</button></li>
            <li><button onClick={() => handleNav('/about')} className="hover:text-[#c49a38] transition-colors cursor-pointer">About the Trusts</button></li>
            <li><button onClick={() => handleNav('/land')} className="hover:text-[#c49a38] transition-colors cursor-pointer">Sacred Land & Projects</button></li>
            <li><button onClick={() => handleNav('/principles')} className="hover:text-[#c49a38] transition-colors cursor-pointer">Natural Principles</button></li>
            <li><button onClick={() => handleNav('/community-life')} className="hover:text-[#c49a38] transition-colors cursor-pointer">Community Life</button></li>
          </ul>
        </div>

        {/* Leadership & Stewards */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c49a38] block">
            Leadership
          </span>
          <ul className="space-y-2 text-[#faf6eb]/85">
            <li><button onClick={() => handleNav('/leadership')} className="hover:text-[#c49a38] transition-colors cursor-pointer">Leadership Overview</button></li>
            <li><button onClick={() => handleNav('/leadership/founder')} className="hover:text-[#c49a38] transition-colors cursor-pointer">Founder — Rajesh</button></li>
            <li><button onClick={() => handleNav('/leadership/co-founder')} className="hover:text-[#c49a38] transition-colors cursor-pointer">Co-Founder — Shanmugavel</button></li>
            <li><button onClick={() => handleNav('/blog')} className="hover:text-[#c49a38] transition-colors cursor-pointer">Sanctuary Journal</button></li>
            <li><button onClick={() => handleNav('/support')} className="hover:text-[#c49a38] transition-colors cursor-pointer">Infrastructure Fund</button></li>
          </ul>
        </div>

        {/* Contact & Dispatch */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c49a38] block">
            Contact & Visits
          </span>
          <div className="space-y-2 text-[#faf6eb]/85">
            <div>
              <a href="mailto:contact@iyalvanam.org" className="hover:text-[#c49a38] transition-colors block">
                contact@iyalvanam.org
              </a>
            </div>
            <div>
              <a href="tel:+919600756007" className="hover:text-[#c49a38] transition-colors block">
                +91 96007 56007
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleNav('/join')}
                className="text-xs uppercase tracking-widest text-[#c49a38] font-bold hover:underline cursor-pointer"
              >
                Join as Resident Family →
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 text-xs text-[#faf6eb]/60 font-serif flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} IYALVANAM Asset Trust & SEYON Nature Life Foundation.</span>
        <span>Perpetual Nature Commons • Dharmapuramadam, Tenkasi</span>
      </div>

    </footer>
  );
};
