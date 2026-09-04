import React, { useEffect } from 'react';
import { HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { FAQSection } from '../components/FAQSection';
import { useLanguage } from '../context/LanguageContext';

interface FAQPageProps {
  navigate: (path: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ navigate }) => {
  const { language } = useLanguage();
  const isTamil = language === 'ta';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Page Hero Banner */}
      <section className="bg-[#FAF8F3] border-b border-[#E3DDD2] py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#ECE6D8] text-[#8B5A2B] text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-[#2E4F2B]" />
              <span>{isTamil ? 'அனைத்து கேள்விகளும் விளக்கங்களும்' : 'Foundational Answers & Policies'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              {isTamil 
                ? 'இயல்வனம் & சேயோன் பொது வினா விடைகள்' 
                : 'IYALVANAM & SEYON Community FAQ'}
            </h1>

            <p className="text-base sm:text-lg text-[#5A5046] leading-relaxed">
              {isTamil
                ? 'இயற்கை வழி வாழ்வியல், சேயோன் அறக்கட்டளை, நில உரிமை, குழந்தைகளுக்கான சூழல், உழைப்பு மற்றும் நிதி பங்களிப்புகள் பற்றிய 25 தெளிவான விளக்கங்கள்.'
                : '25 complete questions and answers on land stewardship, living principles, voluntary contributions, building guidelines, family commitment, and collective governance.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button variant="primary" size="md" onClick={() => navigate('/join')} showArrow>
                {isTamil ? 'இணைதல் பக்கம்' : 'Explore How to Join'}
              </Button>
              <Button variant="outline" size="md" onClick={() => navigate('/contact')}>
                {isTamil ? 'தொடர்பு கொள்க' : 'Contact Core Team'}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Main 25 FAQs Section with Category Filter & Instant Search */}
      <Container>
        <div className="bg-[#FAF8F3] border border-[#E3DDD2] rounded-md p-6 sm:p-10 lg:p-12 shadow-xs">
          <FAQSection 
            title="Complete 25 Community Questions & Answers"
            subtitle="Explore each question below or use the search bar to find specific topics like finances, housing, and family life."
          />
        </div>
      </Container>

      {/* 3. Closing Note & Next Steps */}
      <section className="bg-[#FAF8F3] py-16 border-t border-b border-[#E3DDD2]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              {isTamil ? 'அடுத்த கட்டம்' : 'Next Steps'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B] tracking-tight">
              {isTamil 
                ? 'இயைபு இருப்பின் எங்களோடு கைகோருங்கள்' 
                : 'Ready to Step Into a Sovereign, Nature-Aligned Life?'}
            </h2>
            <p className="text-sm sm:text-base text-[#5A5046] max-w-xl mx-auto leading-relaxed">
              {isTamil
                ? 'இயல்வனம் ஒரு திட்டமோ அல்லது தற்காலிக விடுதியோ அல்ல. இது இயற்கையோடு ஒன்றிணைந்து வாழும் ஓர் உன்னத வாழ்வியல் பாதை.'
                : 'IYALVANAM is a land-based community being built to live in alignment with nature and its laws. It is not a project or retreat. It is a way of living.'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" showArrow onClick={() => navigate('/join')}>
                {isTamil ? 'இணைதலுக்கான படிவம்' : 'Begin Your Alignment (Join Page)'}
              </Button>
              <a
                href="https://tinyurl.com/2zap33fy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isTamil ? 'வாட்ஸ்அப் குழுவில் சேர' : 'Join WhatsApp Group'}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
