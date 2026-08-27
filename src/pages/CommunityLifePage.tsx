import React, { useEffect } from 'react';
import { 
  Utensils, 
  HeartPulse, 
  Hammer, 
  GraduationCap, 
  Scale, 
  Clock, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Apple,
  Droplets,
  Heart,
  Feather
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { BotanicalFlourish, LeafBullet } from '../components/OrganicIcons';

interface CommunityLifePageProps {
  navigate: (path: string) => void;
}

export const CommunityLifePage: React.FC<CommunityLifePageProps> = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const healthPillars = [
    { title: 'Pure Water', tamil: 'தூய நீர்', desc: 'Living mineral open-well water tested free from chlorine, fluorides, or plastic packaging.', icon: <Droplets className="w-5 h-5 text-[#1f3d1f]" /> },
    { title: 'Solar Vitality', tamil: 'சூரிய ஒளி', desc: 'Direct morning sunlight immersion for circadian alignment, vitamin D, and natural cellular vitality.', icon: <Sun className="w-5 h-5 text-[#d4af37]" /> },
    { title: 'Barefoot Grounding', tamil: 'மண் தொடுதல்', desc: 'Walking barefoot on living soil and clay floors to discharge synthetic electromagnetic static.', icon: <Feather className="w-5 h-5 text-[#7a2e1a]" /> },
    { title: 'Fresh Living Air', tamil: 'தூய காற்று', desc: 'Unfiltered oxygen enriched by 200+ native forest species and Western Ghats mountain breezes.', icon: <Sparkles className="w-5 h-5 text-[#1f3d1f]" /> },
    { title: 'Peaceful Rest', tamil: 'ஆழ்ந்த உறக்கம்', desc: 'Natural soundscapes, zero light pollution, and restorative deep sleep guided by solar rhythms.', icon: <Moon className="w-5 h-5 text-[#7a2e1a]" /> },
  ];

  return (
    <div className="bg-[#f0e6d2] text-[#2d2013] space-y-12 sm:space-y-16 md:space-y-20 pb-16 sm:pb-24">
      
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 border-b border-[#7a2e1a]/15 bg-[#f7f2e7]">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1f3d1f]/10 text-[#1f3d1f] border border-[#1f3d1f]/20 text-[11px] sm:text-xs font-serif font-bold uppercase tracking-widest">
              <Users className="w-3.5 h-3.5 text-[#7a2e1a]" />
              <span>Community Life • சமூக வாழ்வியல்</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold text-[#2d2013] tracking-tight leading-tight break-words">
              Living, Healing, Learning & Coexisting
            </h1>

            <p className="text-xs sm:text-sm font-tamil text-[#7a2e1a] font-semibold break-words">
              “சுதந்திரமான கூட்டு வாழ்வின் நடைமுறைகள்”
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#3d2f21]/85 font-serif-body leading-relaxed max-w-2xl mx-auto break-words">
              Daily life at Iyalvanam & Seyon is an organic, joyful synthesis of self-reliance, shared organic meals, natural health, experiential learning, and consensus circles.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Food & Nutrition Philosophy */}
      <Container>
        <section className="bg-[#f7f2e7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border-2 border-[#1f3d1f]/20 shadow-sm space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f3d1f]/10 text-[#1f3d1f] text-xs font-serif font-bold uppercase tracking-wider">
                <Utensils className="w-4 h-4 text-[#7a2e1a]" />
                <span>Food Philosophy • இயற்கை உணவு</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-[#2d2013] break-words">
                Sacred Nourishment from Living Earth
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#3d2f21]/85 leading-relaxed font-serif-body">
                We view food not as a commercial commodity or sensory addiction, but as direct sunlight and soil vitality transformed into human life energy (Prana).
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 bg-[#f0e6d2] rounded-2xl border border-[#7a2e1a]/15">
                  <Apple className="w-5 h-5 text-[#1f3d1f] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#3d2f21]">
                    <strong className="text-[#2d2013] block font-serif-display text-sm sm:text-base">Whole, Plant-Rich & Heirloom Produce</strong>
                    Grown in our multi-tier food forest and organic garden using zero synthetic chemicals, hybrid seeds, or artificial ripening agents.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#f0e6d2] rounded-2xl border border-[#7a2e1a]/15">
                  <Utensils className="w-5 h-5 text-[#7a2e1a] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#3d2f21]">
                    <strong className="text-[#2d2013] block font-serif-display text-sm sm:text-base">Communal Cooking & Gratitude</strong>
                    Wholesome meals prepared in our community kitchen on fuel-efficient earthen hearths, shared together in mindful community circles.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-[#1f3d1f]/30 bg-[#f0e6d2]">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                alt="Organic farm produce"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-6 text-[#f7f2e7] text-xs font-serif">
                Fresh harvest from Tenkasi native vegetable food forest
              </div>
            </div>

          </div>
        </section>
      </Container>

      {/* 3. Five Pillars of Natural Health */}
      <Container>
        <div className="space-y-8 sm:space-y-12">
          <SectionHeading
            badge="Health & Sovereignty"
            title="The 5 Pillars of Self-Healing & Vitality"
            titleTamil="இயற்கை நலவாழ்வின் ஐந்து தூண்கள்"
            subtitle="Health is the spontaneous consequence of living in direct harmony with the five primal elements."
            align="center"
            showFlourish
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {healthPillars.map((hp, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 text-center space-y-2.5 flex flex-col justify-between hover:border-[#1f3d1f] transition-colors"
              >
                <div className="space-y-2">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-[#f0e6d2] mx-auto flex items-center justify-center shadow-xs">
                    {hp.icon}
                  </div>
                  <h4 className="font-bold text-[#2d2013] font-serif-display text-base sm:text-lg break-words">
                    {hp.title}
                  </h4>
                  <p className="text-xs font-tamil text-[#7a2e1a] font-semibold">
                    {hp.tamil}
                  </p>
                  <p className="text-xs text-[#3d2f21]/80 leading-relaxed font-serif-body">
                    {hp.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#7a2e1a]/10 text-[10px] text-[#1f3d1f] font-serif font-bold">
                  Pillar #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 4. Experience SEYON Camps CTA */}
      <Container>
        <div className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-[#1f3d1f] text-[#f7f2e7] text-center space-y-5 sm:space-y-6">
          <BotanicalFlourish className="w-28 sm:w-36 h-4 sm:h-5 mx-auto text-[#d4af37]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-[#f7f2e7] break-words">
            Experience Our Monthly Nature Camps
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#f0e6d2]/85 max-w-xl mx-auto font-serif-body leading-relaxed break-words">
            Conducted by Shanmugavel & SEYON team—join 1,000+ seekers who have experienced the healing simplicity of raw natural foods and mountain stillness.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="gold"
              size="lg"
              showArrow
              className="w-full sm:w-auto"
              onClick={() => navigate('/leadership/co-founder')}
            >
              Learn About SEYON Camps
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-[#f7f2e7] border-[#f7f2e7]/40 hover:bg-[#f7f2e7] hover:text-[#1f3d1f]"
              onClick={() => navigate('/contact')}
            >
              Register for Next Camp
            </Button>
          </div>
        </div>
      </Container>

    </div>
  );
};
