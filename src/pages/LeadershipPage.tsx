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
  HeartHandshake
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

  const founder = profiles.find((p) => p.designation === 'FOUNDER') || {
    displayName: 'Rajesh',
    roleTitle: 'Founder & Vision Steward',
    roleTitleTamil: 'நிறுவனர் & தொலைநோக்கு வழிகாட்டி',
    shortBio: 'A former banker who chose to step away from the corporate world and question the way modern society defines life, success and freedom.',
    fullBiography: `Rajesh is a former banker who chose to step away from the corporate world and question the way modern society defines life, success and freedom.

His journey took him through farming, travel and a search for communities where people could live with greater simplicity, freedom and connection. Along the way, he began to see a deeper disconnect—between humans and nature, between people and each other, and between the way life was designed to be lived and the systems built around it.

Today, Rajesh is working to turn that realization into something tangible through IYALVANAM – Center for Natural Living and SEYON.

His vision is simple yet profound: to create spaces where people can step away from the noise of modern life, reconnect with nature, rediscover community, and explore a life guided by natural principles rather than imposed systems.

For Rajesh, this is not just a project. It is a journey back to what is fundamental—freedom, nature, connection and a meaningful way of living.`,
    profileImage: '/images/founder-emblem.jpg',
    quote: '“For us, this is not just a project. It is a journey back to what is fundamental—freedom, nature, connection and a meaningful way of living.”',
  };

  const coFounder = profiles.find((p) => p.designation === 'CO_FOUNDER') || {
    displayName: 'Shanmugavel',
    roleTitle: 'Co-Founder & Operational Steward',
    roleTitleTamil: 'இணை நிறுவனர் & கள ஒருங்கிணைப்பாளர்',
    shortBio: 'Designer and mechanical engineering researcher from Coimbatore whose 45-day ICU recovery inspired the SEYON Nature Life movement and 50+ experiential camps.',
    fullBiography: `Shanmugavel, from Coimbatore, is a designer and researcher in mechanical engineering whose life took an unexpected turn after spending 45 days in intensive care during the COVID-19 pandemic.

His journey toward recovery led him to explore health, natural food and a simpler way of living. During six months of travel and research, he discovered the remarkable simplicity of foods such as coconut and banana and began experiencing profound changes in his own well-being.

His search eventually brought him to Sivasailam, at the foothills of Pothigai, where the experience of natural surroundings deeply influenced his understanding of life. It inspired him to move closer to nature and share his experiences of natural food and natural living with others.

SEYON Nature Life Foundation was created in the post-COVID period with a simple purpose—to help people experience natural living rather than merely hear about it. Through monthly nature camps, SEYON has so far conducted 50+ camps, giving 1,000+ people an opportunity to experience nature, natural food and a simpler way of life.

Today, Shanmugavel continues to explore, learn and share this journey, hoping to create a bridge for those who wish to reconnect with nature.`,
    profileImage: '/images/co-founder-emblem.jpg',
    quote: '“Let us live happily together with nature, as much as possible.”',
  };

  return (
    <div className="bg-[#f4eedb] text-[#261a12] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Statement */}
      <section className="pt-10 sm:pt-16 pb-8 border-b border-[#6b2816]/12 bg-[#faf6eb]">
        <Container>
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-serif uppercase tracking-widest text-[#6b2816] font-semibold block">
              Our People & Stewards
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#1b331b] tracking-tight leading-tight">
              Our Leadership
            </h1>
            <p className="text-sm font-tamil text-[#6b2816] font-medium">
              இயல்வனம் & சேயோன் வழிகாட்டிகள் – தத்துவமும் செயல்பாடும்
            </p>
            <p className="text-base sm:text-lg text-[#574637] font-serif-body leading-relaxed pt-1">
              Meet the people behind the vision of Iyalvanam & Seyon—dedicated to simple, sovereign, and nature-aligned living.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Founder Section (Rajesh) */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border border-[#6b2816]/15 bg-[#faf6eb]">
                <img
                  src={founder.profileImage}
                  alt={founder.displayName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-xs text-[#574637] font-serif flex items-center justify-between border-t border-[#6b2816]/10 pt-3">
                <span>Dharmapuramadam Sanctuary</span>
                <span className="font-semibold text-[#1b331b]">Founder</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-widest text-[#6b2816] font-semibold">
                  Founder & Vision Steward
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#1b331b]">
                  {founder.displayName}
                </h2>
                <p className="text-xs font-tamil text-[#6b2816]">
                  {founder.roleTitleTamil}
                </p>
              </div>

              <div className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed space-y-4 whitespace-pre-line">
                {founder.fullBiography}
              </div>

              <blockquote className="border-l-2 border-[#6b2816] pl-4 italic text-sm text-[#6b2816] font-serif">
                {founder.quote}
              </blockquote>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  showArrow
                  onClick={() => navigate('/leadership/founder')}
                >
                  View Founder Profile (Rajesh)
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. Co-Founder Section (Shanmugavel) */}
      <section className="bg-[#faf6eb] py-16 sm:py-24 border-t border-b border-[#6b2816]/12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-widest text-[#1b331b] font-semibold">
                  Co-Founder & Operational Steward
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#6b2816]">
                  {coFounder.displayName}
                </h2>
                <p className="text-xs font-tamil text-[#1b331b]">
                  {coFounder.roleTitleTamil}
                </p>
              </div>

              <div className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed space-y-4 whitespace-pre-line">
                {coFounder.fullBiography}
              </div>

              <blockquote className="border-l-2 border-[#1b331b] pl-4 italic text-sm text-[#1b331b] font-serif">
                {coFounder.quote}
              </blockquote>

              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  showArrow
                  onClick={() => navigate('/leadership/co-founder')}
                >
                  View Co-Founder Profile (Shanmugavel)
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border border-[#6b2816]/15 bg-[#f4eedb]">
                <img
                  src={coFounder.profileImage}
                  alt={coFounder.displayName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-xs text-[#574637] font-serif flex items-center justify-between border-t border-[#6b2816]/10 pt-3">
                <span>50+ Nature Camps • 1,000+ Participants</span>
                <span className="font-semibold text-[#6b2816]">Co-Founder</span>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. Shared Vision Statement */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#1b331b]">
              Shared Purpose & Collective Stewardship
            </h3>
            <p className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed">
              Rajesh and Shanmugavel bring together deep philosophical clarity and hands-on operational discipline. Together, they guide the Iyalvanam Asset Trust and SEYON Nature Life Foundation to create a safe haven for future generations.
            </p>
            <div className="pt-2">
              <Button variant="outline" size="md" onClick={() => navigate('/contact')}>
                Connect with the Stewards
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
