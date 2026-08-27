import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  HeartHandshake 
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { LeadershipProfile } from '../types';
import { api } from '../services/api';

interface CoFounderPageProps {
  navigate: (path: string) => void;
}

export const CoFounderPage: React.FC<CoFounderPageProps> = ({ navigate }) => {
  const [profile, setProfile] = useState<LeadershipProfile | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getLeadershipProfile('co-founder')
      .then((data) => setProfile(data))
      .catch(() => {});
  }, []);

  const coFounder: LeadershipProfile = profile || {
    id: 'lead-02',
    designation: 'CO_FOUNDER',
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
    visionStatement: 'To help people directly experience natural living, natural food, and holistic well-being rather than merely hear about it.',
    philosophy: 'True health emerges from the simplicity of natural foods and immersion in pristine mountain surroundings.',
    quote: '“Let us live happily together with nature, as much as possible.”',
    displayOrder: 2,
    isPublished: true,
    projects: [
      'SEYON Nature Life Foundation',
      '50+ Monthly Experiential Nature Living Camps (1,000+ Participants)',
      'Sivasailam Foothills Natural Food Research',
      'Community Onboarding & Nature Living Immersion'
    ],
    socialLinks: {
      email: 'shanmugavel@iyalvanam.org',
      phone: '+91 94440 98765',
    }
  };

  return (
    <div className="bg-[#f4eedb] text-[#261a12] pb-20 sm:pb-32">
      
      {/* Top Header */}
      <section className="pt-6 pb-6 border-b border-[#6b2816]/12 bg-[#faf6eb]">
        <Container>
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/leadership')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-serif font-bold text-[#6b2816] hover:text-[#1b331b] transition-colors py-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Leadership</span>
            </button>
            <span className="text-[11px] uppercase tracking-widest font-serif text-[#1b331b] font-semibold">
              Co-Founder Profile
            </span>
          </div>
        </Container>
      </section>

      {/* Main Profile */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Portrait & Details */}
            <div className="lg:col-span-5 space-y-6 max-w-[380px] lg:max-w-none mx-auto lg:mx-0 w-full">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border border-[#6b2816]/15 bg-[#faf6eb]">
                <img
                  src={coFounder.profileImage}
                  alt={coFounder.displayName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 rounded-xl bg-[#faf6eb] border border-[#6b2816]/12 space-y-3">
                <span className="text-[10px] font-serif uppercase tracking-widest font-bold text-[#1b331b] block">
                  Steward Location & Contact
                </span>
                <div className="space-y-2 text-xs text-[#574637]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#6b2816] shrink-0 mt-0.5" />
                    <span>Sivasailam / Tenkasi District, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#6b2816] shrink-0" />
                    <a href="mailto:shanmugavel@iyalvanam.org" className="hover:text-[#1b331b] font-medium">
                      shanmugavel@iyalvanam.org
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#6b2816] shrink-0" />
                    <a href="tel:+919444098765" className="hover:text-[#1b331b] font-medium">
                      +91 94440 98765
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Story */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-widest text-[#1b331b] font-semibold">
                  Co-Founder & Operational Steward
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#6b2816]">
                  {coFounder.displayName}
                </h1>
                <p className="text-xs sm:text-sm font-tamil text-[#1b331b]">
                  {coFounder.roleTitleTamil}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-[#261a12] border-b border-[#6b2816]/12 pb-2">
                  About Shanmugavel
                </h2>
                <div className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed space-y-4 whitespace-pre-line">
                  {coFounder.fullBiography}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-xl bg-[#faf6eb] border border-[#6b2816]/12 space-y-2">
                  <span className="text-[10px] font-serif uppercase font-bold tracking-wider text-[#6b2816] block">Experiential Mission</span>
                  <p className="text-xs sm:text-sm text-[#574637] font-serif-body leading-relaxed">
                    {coFounder.visionStatement}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#faf6eb] border border-[#6b2816]/12 space-y-2">
                  <span className="text-[10px] font-serif uppercase font-bold tracking-wider text-[#1b331b] block">Natural Health Recovery</span>
                  <p className="text-xs sm:text-sm text-[#574637] font-serif-body leading-relaxed">
                    {coFounder.philosophy}
                  </p>
                </div>
              </div>

              <blockquote className="border-l-2 border-[#1b331b] pl-4 italic text-sm sm:text-base text-[#1b331b] font-serif">
                {coFounder.quote}
              </blockquote>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="md" showArrow onClick={() => navigate('/contact')}>
                  Join Next Nature Camp
                </Button>
                <Button variant="outline" size="md" onClick={() => navigate('/leadership/founder')}>
                  View Founder Profile (Rajesh)
                </Button>
              </div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};
