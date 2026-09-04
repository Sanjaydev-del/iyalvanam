import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  Quote, 
  TreePine, 
  Sprout, 
  Compass, 
  HeartHandshake, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { LeadershipProfile } from '../types';
import { api } from '../services/api';

interface LeadershipPageProps {
  navigate: (path: string) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ navigate }) => {
  const [profiles, setProfiles] = useState<LeadershipProfile[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getLeadershipProfiles().then((data) => {
      if (data && data.length > 0) setProfiles(data);
    }).catch(() => {});
  }, []);

  const shanmugavel = {
    displayName: 'Shanmugavel',
    phone: '+91 96007 56007',
    roleTitle: 'Co-Founder & Operational Steward (SEYON Nature Life Foundation)',
    roleTitleTamil: 'இணை நிறுவனர் & கள ஒருங்கிணைப்பாளர்',
    profileImage: '/images/co-founder-emblem.jpg',
    quote: '“Let us live happily together with nature, as much as possible.”',
    fullBiography: `Shanmugavel, from Coimbatore, is a designer and researcher in mechanical engineering whose life took an unexpected turn after spending 45 days in intensive care during the COVID-19 pandemic.

His journey toward recovery led him to explore health, natural food and a simpler way of living. During six months of travel and research, he discovered the remarkable simplicity of foods such as coconut and banana and began experiencing profound changes in his own well-being.

His search eventually brought him to Sivasailam, at the foothills of Pothigai, where the experience of natural surroundings deeply influenced his understanding of life. It inspired him to move closer to nature and share his experiences of natural food and natural living with others.

SEYON Nature Life Foundation was created in the post-COVID period with a simple purpose—to help people experience natural living rather than merely hear about it. Through monthly nature camps, SEYON has so far conducted 50+ camps, giving 1,000+ people an opportunity to experience nature, natural food and a simpler way of life. Today, Shanmugavel continues to explore, learn and share this journey, hoping to create a bridge for those who wish to reconnect with nature.`
  };

  const rajesh = {
    displayName: 'Rajesh Vijendran',
    phone: '+91 98412 79234',
    roleTitle: 'Founder & Vision Steward (IYALVANAM Center for Natural Living)',
    roleTitleTamil: 'நிறுவனர் & தொலைநோக்கு வழிகாட்டி',
    profileImage: '/images/founder-emblem.jpg',
    quote: '“He doesn’t claim to have all the answers. He is simply exploring, learning and creating a small space where people can come together and discover a more natural way of living.”',
    fullBiography: `Rajesh comes from a corporate banking background, but over the years he began questioning the way modern life is structured and the distance it has created between people, nature and a simple way of living.

He stepped away from the corporate world, explored farming, travelled, and spent time looking for a more connected way of life. These experiences gradually shaped his understanding of what he feels is truly important—living closer to nature, having meaningful relationships, sharing with others, and finding greater simplicity in everyday life.

Today, he is part of the journey behind IYALVANAM – Center for Natural Living and SEYON, working alongside others who share a similar curiosity and aspiration.

He doesn't claim to have all the answers. He is simply exploring, learning and trying to create a small space where people can come together, question what we have taken for granted, and discover a more natural and meaningful way of living.`
  };

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Statement (Slide 24) */}
      <section className="pt-12 sm:pt-20 pb-12 border-b border-[#E3DDD2] bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
              Founders & Stewards • வழிகாட்டிகள்
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              Founders of Iyalvanam & Seyon
            </h1>
            <p className="text-sm text-[#8B5A2B] font-medium">
              “இயற்கை வழியே இயல்பு வழி • இயன்ற வரை இயற்கைக்கு திரும்புவோம்”
            </p>
            <p className="text-base sm:text-lg text-[#5A5046] leading-relaxed pt-1">
              Meet the stewards behind IYALVANAM – Center for Natural Living and SEYON Nature Life Foundation.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Founders Grid (Slide 24) */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Shanmugavel Card */}
          <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-[#E3DDD2] pb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#8B5A2B] shrink-0 bg-[#ECE6D8]">
                <img
                  src={shanmugavel.profileImage}
                  alt={shanmugavel.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-[#241D17]">
                  {shanmugavel.displayName}
                </h2>
                <p className="text-xs font-semibold text-[#8B5A2B]">
                  {shanmugavel.roleTitle}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#5A5046] pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#2E4F2B]" />
                  <a href={`tel:${shanmugavel.phone}`} className="hover:text-[#2E4F2B] font-mono font-medium">
                    {shanmugavel.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#5A5046] leading-relaxed">
              {shanmugavel.fullBiography.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <blockquote className="border-l-3 border-[#8B5A2B] pl-4 italic text-xs sm:text-sm text-[#241D17] bg-[#F5F2EB] py-3 pr-3">
              {shanmugavel.quote}
            </blockquote>
          </div>

          {/* Rajesh Vijendran Card */}
          <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-[#E3DDD2] pb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#2E4F2B] shrink-0 bg-[#ECE6D8]">
                <img
                  src={rajesh.profileImage}
                  alt={rajesh.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-[#241D17]">
                  {rajesh.displayName}
                </h2>
                <p className="text-xs font-semibold text-[#2E4F2B]">
                  {rajesh.roleTitle}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#5A5046] pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#2E4F2B]" />
                  <a href={`tel:${rajesh.phone}`} className="hover:text-[#2E4F2B] font-mono font-medium">
                    {rajesh.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#5A5046] leading-relaxed">
              {rajesh.fullBiography.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <blockquote className="border-l-3 border-[#2E4F2B] pl-4 italic text-xs sm:text-sm text-[#241D17] bg-[#F5F2EB] py-3 pr-3">
              {rajesh.quote}
            </blockquote>
          </div>

        </div>
      </Container>

      {/* 3. Official WhatsApp Community Call (Slide 25) */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-t border-[#E3DDD2]">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              Stay Connected (இணைந்திருங்கள்)
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
              Join the Official WhatsApp Community
            </h3>
            <p className="text-sm text-[#5A5046]">
              Receive monthly camp notices, seed exchange updates, and community dialogues directly from our founders.
            </p>
            <div className="pt-2">
              <a
                href="https://tinyurl.com/2zap33fy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Official WhatsApp Group</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
