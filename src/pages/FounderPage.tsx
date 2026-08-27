import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Compass, 
  Mountain 
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { LeadershipProfile } from '../types';
import { api } from '../services/api';

interface FounderPageProps {
  navigate: (path: string) => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ navigate }) => {
  const [profile, setProfile] = useState<LeadershipProfile | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getLeadershipProfile('founder')
      .then((data) => setProfile(data))
      .catch(() => {});
  }, []);

  const founder: LeadershipProfile = profile || {
    id: 'lead-01',
    designation: 'FOUNDER',
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
    visionStatement: 'To create spaces where people can step away from the noise of modern life, reconnect with nature, rediscover community, and explore a life guided by natural principles rather than imposed systems.',
    philosophy: 'Life was designed to be lived in freedom and effortless connection with nature, not constrained by artificial corporate and economic constructs.',
    quote: '“For us, this is not just a project. It is a journey back to what is fundamental—freedom, nature, connection and a meaningful way of living.”',
    displayOrder: 1,
    isPublished: true,
    projects: [
      'IYALVANAM – Center for Natural Living Foundation',
      'Dharmapuramadam Sanctuary Land Stewardship',
      'Non-Artificial Living Philosophy & Study',
      'Dual-Trust Collective Community Architecture'
    ],
    socialLinks: {
      email: 'rajesh@iyalvanam.org',
      phone: '+91 96007 56007',
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
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-serif font-bold text-[#1b331b] hover:text-[#6b2816] transition-colors py-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Leadership</span>
            </button>
            <span className="text-[11px] uppercase tracking-widest font-serif text-[#6b2816] font-semibold">
              Founder Profile
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
                  src={founder.profileImage}
                  alt={founder.displayName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 rounded-xl bg-[#faf6eb] border border-[#6b2816]/12 space-y-3">
                <span className="text-[10px] font-serif uppercase tracking-widest font-bold text-[#6b2816] block">
                  Steward Location & Contact
                </span>
                <div className="space-y-2 text-xs text-[#574637]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#1b331b] shrink-0 mt-0.5" />
                    <span>Dharmapuramadam, Tenkasi District, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#1b331b] shrink-0" />
                    <a href="mailto:rajesh@iyalvanam.org" className="hover:text-[#6b2816] font-medium">
                      rajesh@iyalvanam.org
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#1b331b] shrink-0" />
                    <a href="tel:+919600756007" className="hover:text-[#6b2816] font-medium">
                      +91 96007 56007
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Vision */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-widest text-[#6b2816] font-semibold">
                  Founder & Vision Steward
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#1b331b]">
                  {founder.displayName}
                </h1>
                <p className="text-xs sm:text-sm font-tamil text-[#6b2816]">
                  {founder.roleTitleTamil}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-[#261a12] border-b border-[#6b2816]/12 pb-2">
                  About Rajesh
                </h2>
                <div className="text-sm sm:text-base text-[#574637] font-serif-body leading-relaxed space-y-4 whitespace-pre-line">
                  {founder.fullBiography}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-xl bg-[#faf6eb] border border-[#6b2816]/12 space-y-2">
                  <span className="text-[10px] font-serif uppercase font-bold tracking-wider text-[#1b331b] block">Core Vision</span>
                  <p className="text-xs sm:text-sm text-[#574637] font-serif-body leading-relaxed">
                    {founder.visionStatement}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#faf6eb] border border-[#6b2816]/12 space-y-2">
                  <span className="text-[10px] font-serif uppercase font-bold tracking-wider text-[#6b2816] block">Living Philosophy</span>
                  <p className="text-xs sm:text-sm text-[#574637] font-serif-body leading-relaxed">
                    {founder.philosophy}
                  </p>
                </div>
              </div>

              <blockquote className="border-l-2 border-[#6b2816] pl-4 italic text-sm sm:text-base text-[#6b2816] font-serif">
                {founder.quote}
              </blockquote>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="md" showArrow onClick={() => navigate('/contact')}>
                  Connect with Rajesh
                </Button>
                <Button variant="outline" size="md" onClick={() => navigate('/leadership/co-founder')}>
                  View Co-Founder Profile (Shanmugavel)
                </Button>
              </div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};
