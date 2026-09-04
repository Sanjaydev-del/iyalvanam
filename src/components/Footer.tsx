import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { IyalvanamEmblem, SeyonEmblem } from './OrganicIcons';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const { content, language } = useLanguage();
  const ftr = content.footer;
  const isTamil = language === 'ta';

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
    <footer id="main-footer" className="bg-[#122210] text-[#F5F2EB] border-t border-[#D4C5A9]/20">
      
      {/* Full-Bleed Deep Forest Green Closing Pause & WhatsApp Connection */}
      <div className="bg-[#1A3018] py-16 sm:py-24 px-6 sm:px-12 border-b border-[#D4C5A9]/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className={`text-xs uppercase tracking-widest text-[#D4C5A9] font-bold block ${isTamil ? 'font-tamil' : 'font-serif'}`}>
              {ftr.bannerTagline}
            </span>
            <h3 className={`text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F3] leading-tight max-w-3xl mx-auto ${isTamil ? 'font-tamil' : 'font-serif-heading'}`}>
              {ftr.bannerHeading}
            </h3>
            <p className={`text-sm sm:text-base text-[#F5F2EB]/80 max-w-2xl mx-auto leading-relaxed pt-2 ${isTamil ? 'font-tamil' : 'font-sans'}`}>
              {ftr.bannerSub}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center">
            <a
              href="https://tinyurl.com/2zap33fy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 rounded-xl bg-[#8B5A2B] hover:bg-[#66411E] text-[#FAF8F3] text-sm font-semibold tracking-wide flex items-center gap-3 transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-[#D4C5A9]" />
              <span className={isTamil ? 'font-tamil' : 'font-serif'}>{ftr.bannerBtn}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Footer Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 sm:py-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#D4C5A9]/15 text-xs">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <IyalvanamEmblem size={32} className="w-8 h-8 text-[#D4C5A9]" />
            <SeyonEmblem size={32} className="w-8 h-8 text-[#D4C5A9]" />
            <div>
              <span className="font-serif-heading font-bold tracking-tight block text-sm text-[#FAF8F3]">
                IYALVANAM & SEYON
              </span>
              <span className={`text-[11px] text-[#D4C5A9] block ${isTamil ? 'font-tamil' : 'font-serif'}`}>
                {content.nav.subTitle}
              </span>
            </div>
          </div>
          <p className={`text-xs text-[#F5F2EB]/80 leading-relaxed ${isTamil ? 'font-tamil' : 'font-sans'}`}>
            {ftr.brandDesc}
          </p>
          <div className="text-[11px] text-[#D4C5A9] space-y-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4C5A9]" />
              <span className={isTamil ? 'font-tamil' : 'font-serif'}>{ftr.sanctuaryAddress}</span>
            </div>
            <div className={`pl-5 text-[#F5F2EB]/70 ${isTamil ? 'font-tamil' : 'font-serif'}`}>{ftr.districtState}</div>
          </div>
        </div>

        {/* Section Anchors */}
        <div className="space-y-3">
          <span className={`text-[10px] font-bold uppercase tracking-widest text-[#D4C5A9] block ${isTamil ? 'font-tamil' : 'font-serif'}`}>
            {ftr.sectionsTitle}
          </span>
          <ul className={`space-y-2 text-[#F5F2EB]/85 ${isTamil ? 'font-tamil' : 'font-serif'}`}>
            <li><button onClick={() => handleNav('#hero')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">{ftr.navHero}</button></li>
            <li><button onClick={() => handleNav('#etymology')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">{ftr.navEtymology}</button></li>
            <li><button onClick={() => handleNav('#philosophy')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">{ftr.navPhilosophy}</button></li>
            <li><button onClick={() => handleNav('#pillars')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">{ftr.navPillars}</button></li>
            <li><button onClick={() => handleNav('#principles')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">{ftr.navPrinciples}</button></li>
            <li><button onClick={() => handleNav('#land')} className="hover:text-[#D4C5A9] transition-colors cursor-pointer">{ftr.navLand}</button></li>
          </ul>
        </div>

        {/* Founders Direct Contacts */}
        <div className="space-y-3">
          <span className={`text-[10px] font-bold uppercase tracking-widest text-[#D4C5A9] block ${isTamil ? 'font-tamil' : 'font-serif'}`}>
            {ftr.stewardsTitle}
          </span>
          <div className="space-y-3 text-[#F5F2EB]/85 font-sans">
            <div className="p-3.5 bg-[#1A3018] rounded-xl border border-[#D4C5A9]/20 space-y-1">
              <div className="flex items-center justify-between">
                <div className={`font-bold text-xs text-[#FAF8F3] ${isTamil ? 'font-tamil' : 'font-serif'}`}>
                  {content.founders.founderName}
                </div>
                <button
                  onClick={() => navigate('/leadership/founder')}
                  className="text-[10px] text-[#D4C5A9] hover:text-[#FAF8F3] underline cursor-pointer"
                >
                  Profile →
                </button>
              </div>
              <div className={`text-[11px] text-[#D4C5A9] ${isTamil ? 'font-tamil' : 'font-serif'}`}>
                {ftr.founderTitle}
              </div>
              <a href="tel:+919600756007" className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F3] hover:text-[#D4C5A9] pt-1">
                <Phone className="w-3 h-3 text-[#D4C5A9]" />
                <span>+91 96007 56007</span>
              </a>
            </div>

            <div className="p-3.5 bg-[#1A3018] rounded-xl border border-[#D4C5A9]/20 space-y-1">
              <div className="flex items-center justify-between">
                <div className={`font-bold text-xs text-[#FAF8F3] ${isTamil ? 'font-tamil' : 'font-serif'}`}>
                  {content.founders.coFounderName}
                </div>
                <button
                  onClick={() => navigate('/leadership/co-founder')}
                  className="text-[10px] text-[#D4C5A9] hover:text-[#FAF8F3] underline cursor-pointer"
                >
                  Profile →
                </button>
              </div>
              <div className={`text-[11px] text-[#D4C5A9] ${isTamil ? 'font-tamil' : 'font-serif'}`}>
                {ftr.coFounderTitle}
              </div>
              <a href="tel:+919444098765" className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F3] hover:text-[#D4C5A9] pt-1">
                <Phone className="w-3 h-3 text-[#D4C5A9]" />
                <span>+91 94440 98765</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dual Trust Structure */}
        <div className="space-y-3">
          <span className={`text-[10px] font-bold uppercase tracking-widest text-[#D4C5A9] block ${isTamil ? 'font-tamil' : 'font-serif'}`}>
            {ftr.trustStructureTitle}
          </span>
          <div className="space-y-2 text-[#F5F2EB]/85 text-xs">
            <div>
              <strong className={`block text-[#FAF8F3] ${isTamil ? 'font-tamil' : 'font-serif'}`}>
                1. IYALVANAM Asset Trust
              </strong>
              <p className={`text-[11px] text-[#F5F2EB]/70 leading-snug ${isTamil ? 'font-tamil' : 'font-sans'}`}>
                {ftr.assetTrustDesc}
              </p>
            </div>
            <div className="pt-1">
              <strong className={`block text-[#FAF8F3] ${isTamil ? 'font-tamil' : 'font-serif'}`}>
                2. SEYON Nature Life Foundation
              </strong>
              <p className={`text-[11px] text-[#F5F2EB]/70 leading-snug ${isTamil ? 'font-tamil' : 'font-sans'}`}>
                {ftr.operationalTrustDesc}
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
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 text-xs text-[#F5F2EB]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className={isTamil ? 'font-tamil' : 'font-serif'}>{ftr.copyright}</span>
        <span className={`text-[11px] text-[#D4C5A9]/80 ${isTamil ? 'font-tamil' : 'font-serif'}`}>
          {ftr.bottomTagline}
        </span>
      </div>

    </footer>
  );
};
