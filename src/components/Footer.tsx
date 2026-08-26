import React from 'react';
import { Sprout, MapPin, Mail, Phone, Heart, Compass, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#4A3728] text-[#F5F5F0] pt-16 pb-12 border-t border-[#5A5A40]/30">
      {/* Top Banner Quote */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#5A5A40] rounded-3xl p-8 sm:p-10 border border-[#5A5A40]/40 relative overflow-hidden shadow-md">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B35C44]/20 text-[#EBEBE3] text-xs font-bold uppercase tracking-widest mb-4 border border-[#B35C44]/30">
              <Sprout className="w-3.5 h-3.5 text-[#B35C44]" /> Living Philosophy • வாழ்வியல் தத்துவம்
            </span>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-[#F5F5F0] leading-snug mb-3">
              “இயன்ற வரை இயற்கைக்கு திரும்புவோம்”
            </blockquote>
            <p className="text-base sm:text-lg text-[#EBEBE3] font-normal mb-6 leading-relaxed">
              “Return to nature as much as possible — A living blueprint for conscious human living and evolution in harmony with nature.”
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleNav('/join')}
                className="px-6 py-3 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-[#B35C44]/20"
              >
                <span>Join the Community</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNav('/about')}
                className="px-6 py-3 rounded-full bg-[#4A3728] hover:bg-[#3B2C20] text-[#F5F5F0] font-bold text-xs uppercase tracking-widest transition-all border border-[#5A5A40]"
              >
                Read the Vision
              </button>
            </div>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute right-0 -bottom-10 opacity-10 pointer-events-none">
            <Sprout className="w-96 h-96 text-[#F5F5F0]" />
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#5A5A40]/30">
        {/* Brand column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#5A5A40] text-[#F5F5F0] flex items-center justify-center shadow-xs">
              <Sprout className="w-6 h-6 text-[#F5F5F0]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif text-[#F5F5F0] tracking-tight">
                IYALVANAM • இயல்வனம்
              </h3>
              <p className="text-xs text-[#EBEBE3]/80 uppercase tracking-widest font-semibold">
                Iyarkai Vazhviyal Koodam
              </p>
            </div>
          </div>
          <p className="text-sm text-[#EBEBE3]/80 leading-relaxed pr-6">
            A self-reliant, nature-integrated sanctuary and intentional community at the foothills of the Western Ghats. Committed to natural law, decentralized consensus governance, and ancestral ecological balance.
          </p>
          <div className="space-y-2 pt-2 text-xs text-[#EBEBE3]/80">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#B35C44] shrink-0 mt-0.5" />
              <span>Dharmapuramadam, Tenkasi District, Western Ghats, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#B35C44] shrink-0" />
              <a href="mailto:contact@iyalvanam.org" className="hover:text-white transition-colors">
                contact@iyalvanam.org
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#B35C44] shrink-0" />
              <a href="tel:+919600756007" className="hover:text-white transition-colors font-medium">
                +91 96007 56007
              </a>
            </div>
          </div>
        </div>

        {/* Column 1: Philosophy & Community */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#B35C44] font-sans">
            Philosophy
          </h4>
          <ul className="space-y-2 text-xs uppercase tracking-wider text-[#EBEBE3]/80 font-medium">
            <li>
              <button onClick={() => handleNav('/about')} className="hover:text-white transition-colors">
                About Iyalvanam
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/principles')} className="hover:text-white transition-colors">
                Natural Law & Values
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/principles')} className="hover:text-white transition-colors">
                What Has No Place Here
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/community-life')} className="hover:text-white transition-colors">
                Food & Self-Healing
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/community-life')} className="hover:text-white transition-colors">
                Consensus Governance
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2: Participation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#B35C44] font-sans">
            Participation
          </h4>
          <ul className="space-y-2 text-xs uppercase tracking-wider text-[#EBEBE3]/80 font-medium">
            <li>
              <button onClick={() => handleNav('/land')} className="hover:text-white transition-colors">
                Western Ghats Land
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/land')} className="hover:text-white transition-colors">
                Eco Infrastructure
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/join')} className="hover:text-white transition-colors text-white font-bold">
                Joining & Contribution
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/join')} className="hover:text-white transition-colors">
                Preparedness & Exit
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/support')} className="hover:text-white transition-colors text-[#B35C44] font-bold">
                ₹25L Infrastructure Goal
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Updates & Governance */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#B35C44] font-sans">
            Trust & Portal
          </h4>
          <ul className="space-y-2 text-xs uppercase tracking-wider text-[#EBEBE3]/80 font-medium">
            <li>
              <button onClick={() => handleNav('/blog')} className="hover:text-white transition-colors">
                Community Chronicles
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors">
                Contact & Visiting
              </button>
            </li>
            <li>
              <span className="text-[11px] text-[#EBEBE3]/60 block mt-2 leading-relaxed normal-case">
                Governed by Iyalvanam Asset Trust & SEYON Operational Trust
              </span>
            </li>
            <li className="pt-2">
              <button
                onClick={() => handleNav('/admin/login')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5A5A40] text-xs uppercase tracking-widest font-bold text-white hover:bg-[#B35C44] transition-colors border border-[#5A5A40]/40"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Portal</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EBEBE3]/60 gap-4">
        <p>
          © {new Date().getFullYear()} Iyalvanam Iyarkai Vazhviyal Koodam. All rights dedicated to nature and collective stewardship.
        </p>
        <p className="font-tamil text-[#EBEBE3]/80 font-medium">
          அனைத்து உயிர்களும் இன்புற்று வாழ்க • May All Beings Live in Joy
        </p>
      </div>
    </footer>
  );
};
