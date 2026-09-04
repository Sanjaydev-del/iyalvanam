import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { IyalvanamEmblem, SeyonEmblem } from './OrganicIcons';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (target: string) => {
    if (target.startsWith('#')) {
      const el = document.getElementById(target.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(target.substring(1));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      navigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1E351C] text-[#F5F2EB] border-t border-[#D4C5A9]/20">
      
      {/* Top Prominent Closing & WhatsApp CTA Banner */}
      <div className="bg-[#2E4F2B] border-b border-[#D4C5A9]/20 py-10 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-serif uppercase tracking-widest text-[#D4C5A9] font-semibold block">
              இயன்ற வரை இயற்கைக்கு திரும்புவோம் • RETURN TO NATURE
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#F5F2EB]">
              Step into the living community at Western Ghats foothills
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F2EB]/80 font-sans max-w-xl">
              Connect directly with our founders, visit our experiential nature camps, or join the community dialogue.
            </p>
          </div>

          <a
            href="https://tinyurl.com/2zap33fy"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#8B5A2B] hover:bg-[#66411E] text-[#FAF8F3] text-sm font-serif font-semibold tracking-wide flex items-center gap-2.5 transition-all shadow-md cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-[#D4C5A9]" />
            <span>Join WhatsApp Community</span>
          </a>
        </div>
      </div>

      {/* Main Footer Content Grid */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#D4C5A9]/15 text-xs font-serif">
        
        {/* Brand & Mission Statement */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <IyalvanamEmblem size={30} className="w-7.5 h-7.5 text-[#D4C5A9]" />
            <SeyonEmblem size={30} className="w-7.5 h-7.5 text-[#D4C5A9]" />
            <div>
              <span className="font-serif-heading font-bold tracking-tight block text-sm text-[#FAF8F3]">
                IYALVANAM & SEYON
              </span>
              <span className="text-[11px] font-tamil text-[#D4C5A9] block">
                இயல்வனம் இயற்கை வாழ்வியல் கூடம்
              </span>
            </div>
          </div>
          <p className="text-xs text-[#F5F2EB]/80 font-sans leading-relaxed">
            A sacred land initiative dedicated to perpetual forest preservation, non-artificial living, and intergenerational self-reliance at the foothills of the Western Ghats.
          </p>
          <div className="text-[11px] text-[#D4C5A9] space-y-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4C5A9]" />
              <span>Dharmapuramadam / Sivasailam</span>
            </div>
            <div className="pl-5 text-[#F5F2EB]/70">Tenkasi District, Tamil Nadu — 627803</div>
          </div>
        </div>

        {/* Quick Anchors */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4C5A9] block">
            Sanctuary Sections
          </span>
          <ul className="space-y-2 text-[#F5F2EB]/85">
            <li><button onClick={() => handleNav('#hero')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">Vision & Tagline</button></li>
            <li><button onClick={() => handleNav('#etymology')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">Etymology (Iyal • Vanam • Koodam)</button></li>
            <li><button onClick={() => handleNav('#philosophy')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">5 Core Tenets & Elements</button></li>
            <li><button onClick={() => handleNav('#pillars')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">8 Pillars of Living</button></li>
            <li><button onClick={() => handleNav('#principles')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">Core Principles Disclosure</button></li>
            <li><button onClick={() => handleNav('#land')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">Land & Tenkasi Map</button></li>
          </ul>
        </div>

        {/* Leadership & Direct Phone Links */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4C5A9] block">
            Founders & Stewards
          </span>
          <div className="space-y-3 text-[#F5F2EB]/85 font-sans">
            <div className="p-3 bg-[#2E4F2B]/60 rounded-lg border border-[#D4C5A9]/20 space-y-1">
              <div className="font-serif font-bold text-xs text-[#FAF8F3]">Rajesh</div>
              <div className="text-[11px] text-[#D4C5A9]">Founder & Vision Steward</div>
              <a href="tel:+919600756007" className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F3] hover:text-[#D4C5A9] pt-1">
                <Phone className="w-3 h-3 text-[#D4C5A9]" />
                <span>+91 96007 56007</span>
              </a>
            </div>

            <div className="p-3 bg-[#2E4F2B]/60 rounded-lg border border-[#D4C5A9]/20 space-y-1">
              <div className="font-serif font-bold text-xs text-[#FAF8F3]">Shanmugavel</div>
              <div className="text-[11px] text-[#D4C5A9]">Co-Founder & Operational Steward</div>
              <a href="tel:+919444098765" className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F3] hover:text-[#D4C5A9] pt-1">
                <Phone className="w-3 h-3 text-[#D4C5A9]" />
                <span>+91 94440 98765</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dual Trust Legal Framework */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4C5A9] block">
            Trust Structure
          </span>
          <div className="space-y-2 text-[#F5F2EB]/85 font-sans text-xs">
            <div>
              <strong className="font-serif text-[#FAF8F3] block">1. IYALVANAM Asset Trust</strong>
              <p className="text-[11px] text-[#F5F2EB]/70 leading-snug">
                Permanent custodian holding sanctuary land in non-alienable trust for nature.
              </p>
            </div>
            <div className="pt-1">
              <strong className="font-serif text-[#FAF8F3] block">2. SEYON Nature Life Foundation</strong>
              <p className="text-[11px] text-[#F5F2EB]/70 leading-snug">
                Operational body stewarding 50+ experiential camps, natural food research, and community living.
              </p>
            </div>
            <div className="pt-2">
              <a 
                href="mailto:contact@iyalvanam.org" 
                className="inline-flex items-center gap-1.5 text-xs text-[#D4C5A9] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contact@iyalvanam.org</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 text-xs text-[#F5F2EB]/60 font-serif flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} IYALVANAM Asset Trust & SEYON Nature Life Foundation. All rights reserved.</span>
        <span className="font-tamil text-[11px] text-[#D4C5A9]/80">இயன்ற வரை இயற்கைக்கு திரும்புவோம் • சிவசைலம், தென்காசி</span>
      </div>

    </footer>
  );
};
