import React from 'react';
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
  Apple
} from 'lucide-react';

interface CommunityLifePageProps {
  navigate: (path: string) => void;
}

export const CommunityLifePage: React.FC<CommunityLifePageProps> = ({ navigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
          Community Life • சமூக வாழ்வியல்
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A3728]">
          Living, Healing, Learning & Growing Together
        </h1>
        <p className="text-lg text-[#4A3728]/80 max-w-3xl mx-auto leading-relaxed">
          Daily life at Iyalvanam is an organic, joyful synthesis of self-reliance, shared meals, natural health, experiential learning, and consensus governance.
        </p>
      </section>

      {/* Food & Nutrition Philosophy */}
      <section className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A5A40]/10 text-[#4A3728] text-xs font-bold">
              <Utensils className="w-4 h-4 text-[#B35C44]" /> Food Philosophy • உணவு முறை
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
              Sacred Nourishment from Living Earth
            </h2>
            <p className="text-sm text-[#4A3728]/80 leading-relaxed">
              We view food not as a commercial commodity or sensory addiction, but as direct sunlight and soil vitality transformed into human life energy (Prana).
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#4A3728]/80">
              <div className="flex items-start gap-3 p-4 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15">
                <Apple className="w-5 h-5 text-[#5A5A40] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4A3728] block">Whole, Plant-Rich & Heirloom Produce</strong>
                  Grown on-site in our multi-tier food forest and organic vegetable garden using zero synthetic chemicals, hybrid seeds, or artificial ripening agents.
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15">
                <Utensils className="w-5 h-5 text-[#B35C44] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4A3728] block">Communal Cooking & Gratitude</strong>
                  Meals are lovingly prepared in our community kitchen on fuel-efficient earthen stoves, shared together in mindful community gatherings.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md border border-[#5A5A40]/20">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
              alt="Organic farm produce"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F16]/90 via-transparent to-transparent flex items-end p-6 text-white text-xs">
              Fresh harvest from Tenkasi native vegetable gardens
            </div>
          </div>
        </div>
      </section>

      {/* Health & Self-Healing Philosophy */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Natural Health & Vitality
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            The Five Pillars of Natural Health
          </h2>
          <p className="text-sm text-[#5A5A40]">
            Our self-healing philosophy rests on direct alignment with the natural elements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#4A3728] font-bold shadow-xs">
              💨
            </div>
            <h3 className="font-bold text-[#4A3728] font-serif text-base">Fresh Mountain Air</h3>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Unfiltered, oxygen-rich air descending from the Western Ghats forest canopy.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#4A3728] font-bold shadow-xs">
              💧
            </div>
            <h3 className="font-bold text-[#4A3728] font-serif text-base">Living Well Water</h3>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Unchlorinated groundwater from our deep open well, rich in natural minerals.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#4A3728] font-bold shadow-xs">
              ☀️
            </div>
            <h3 className="font-bold text-[#4A3728] font-serif text-base">Dawn Sunlight</h3>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Daily morning sunbathing for natural circadian reset and deep cellular vitality.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#4A3728] font-bold shadow-xs">
              🌱
            </div>
            <h3 className="font-bold text-[#4A3728] font-serif text-base">Barefoot Grounding</h3>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Direct physical contact with living soil to reduce systemic inflammation.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#4A3728] font-bold shadow-xs">
              🌿
            </div>
            <h3 className="font-bold text-[#4A3728] font-serif text-base">Self-Healing Mindset</h3>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Trusting the human body's intrinsic restorative power through rest and clean living.
            </p>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="p-4 rounded-2xl bg-[#EBEBE3] border border-[#5A5A40]/20 text-xs text-[#4A3728]/90 flex items-start gap-3 max-w-4xl mx-auto">
          <AlertTriangle className="w-5 h-5 text-[#B35C44] shrink-0 mt-0.5" />
          <p>
            <strong>Philosophical Context Disclaimer:</strong> The health approaches at Iyalvanam reflect our community's lifestyle philosophy of living in harmony with nature. They are experiential lifestyle choices and are not offered as licensed medical diagnoses, pharmacological treatments, or guaranteed clinical cures.
          </p>
        </div>
      </section>

      {/* Work, Contribution & Education */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Work & Contribution */}
        <div className="p-8 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#5A5A40] shadow-xs">
            <Hammer className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-serif text-[#4A3728]">
            Work as Unique Expression & Service
          </h3>
          <p className="text-sm text-[#4A3728]/80 leading-relaxed">
            In conventional economic systems, work is often an alienating transaction for monetary survival. At Iyalvanam, work is transformed into a voluntary, joyful expression of each member's unique talents and mutual service.
          </p>
          <ul className="space-y-2 text-xs text-[#4A3728]/80 pt-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B35C44]" />
              <span><strong>Natural Construction</strong>: Earthen walls, bamboo roofing, stone pathways.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A5A40]" />
              <span><strong>Agroforestry & Seed Banking</strong>: Planting native saplings, conserving rare heirloom varieties.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A3728]" />
              <span><strong>Culinary & Community Care</strong>: Nourishing children, elders, and collective spaces.</span>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="p-8 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#B35C44] shadow-xs">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-serif text-[#4A3728]">
            Experiential Learning & Life-Long Inquiry
          </h3>
          <p className="text-sm text-[#4A3728]/80 leading-relaxed">
            Education is not confined to artificial desks or competitive exams. Children and adults learn directly from the natural living environment, exploring real-world arts, ecology, language, carpentry, music, and philosophical inquiry.
          </p>
          <ul className="space-y-2 text-xs text-[#4A3728]/80 pt-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B35C44]" />
              <span><strong>Direct Immersion</strong>: Learning botany by cultivating plants, physics by harvesting water.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A5A40]" />
              <span><strong>Freedom from Fear</strong>: Fostering natural curiosity without arbitrary grades or ranking.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A3728]" />
              <span><strong>Community Mentorship</strong>: Learning diverse crafts directly from practicing elders and artisans.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Governance & Dual Trust Structure */}
      <section className="bg-[#4A3728] text-[#F5F5F0] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/30 space-y-8 shadow-xl">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/20 px-4 py-1 rounded-full border border-[#B35C44]/30">
            Decentralized Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Consensus Decision-Making & Dual Trust Structure
          </h2>
          <p className="text-[#EBEBE3]/80 text-sm leading-relaxed">
            How we protect the land for future generations while running daily logistical operations without centralized hierarchy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Iyalvanam Asset Trust */}
          <div className="p-7 rounded-3xl bg-[#3B2C20] border border-[#5A5A40]/30 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-serif text-white">
                1. Iyalvanam Asset Trust
              </h3>
              <span className="text-xs px-3 py-1 rounded-full bg-[#5A5A40]/30 text-[#EBEBE3] font-semibold">
                Perpetual Land
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#EBEBE3]/80 leading-relaxed">
              Holds legal ownership of the sanctuary land and permanent physical structures in trust. No individual member can sell, partition, mortgage, or commercially exploit this sacred land. It belongs to nature and collective stewardship in perpetuity.
            </p>
          </div>

          {/* SEYON Operational Trust */}
          <div className="p-7 rounded-3xl bg-[#3B2C20] border border-[#5A5A40]/30 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-serif text-white">
                2. SEYON Operational Trust
              </h3>
              <span className="text-xs px-3 py-1 rounded-full bg-[#B35C44]/30 text-[#EBEBE3] font-semibold">
                Daily Logistics
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#EBEBE3]/80 leading-relaxed">
              Manages daily community activities, shared energy systems, open well water distribution, tool maintenance, seed exchanges, visitor protocols, and community financial accounting with full transparency.
            </p>
          </div>
        </div>

        <div className="p-6 bg-[#2C1F16] rounded-2xl border border-[#5A5A40]/30 text-center max-w-3xl mx-auto space-y-2">
          <h4 className="text-base font-bold font-serif text-[#B35C44]">
            The Power of Consensus Circles
          </h4>
          <p className="text-xs text-[#EBEBE3]/80 leading-relaxed">
            We avoid majoritarian voting where 51% overrules 49%. All major decisions are processed in open circles until every perspective is heard, refined, and consensus is reached with mutual respect.
          </p>
        </div>
      </section>

      {/* Daily Rhythm & 1-3 Month Transition Phase */}
      <section className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Daily Rhythm & Immersion
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            A Day in the Life & Transition Phase
          </h2>
          <p className="text-sm text-[#5A5A40]">
            Natural synchronization with sun cycles and our 1 to 3 month orientation period.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-2 text-center">
            <span className="text-xs font-bold text-[#B35C44] block">05:30 AM – 07:00 AM</span>
            <h4 className="font-bold text-[#4A3728] font-serif">Brahma Muhurtham & Sun</h4>
            <p className="text-xs text-[#5A5A40]">Silence, yoga, morning sunbathing, and fresh herbal water.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-2 text-center">
            <span className="text-xs font-bold text-[#B35C44] block">07:00 AM – 11:30 AM</span>
            <h4 className="font-bold text-[#4A3728] font-serif">Soil & Community Work</h4>
            <p className="text-xs text-[#5A5A40]">Food forest care, natural building, and communal breakfast.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-2 text-center">
            <span className="text-xs font-bold text-[#B35C44] block">12:00 PM – 04:30 PM</span>
            <h4 className="font-bold text-[#4A3728] font-serif">Study, Arts & Rest</h4>
            <p className="text-xs text-[#5A5A40]">Midday nourishment, reading, artisan crafts, and children's mentoring.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-2 text-center">
            <span className="text-xs font-bold text-[#B35C44] block">05:00 PM – 08:30 PM</span>
            <h4 className="font-bold text-[#4A3728] font-serif">Sunset & Circle</h4>
            <p className="text-xs text-[#5A5A40]">Sunset gratitude, light dinner, consensus sharing, and early sleep.</p>
          </div>
        </div>

        {/* Transition period card */}
        <div className="p-6 bg-[#F5F5F0] rounded-2xl border-l-4 border-[#B35C44] shadow-xs space-y-2">
          <h4 className="text-base font-bold text-[#4A3728] font-serif">
            The 1–3 Month Transition Phase for New Members
          </h4>
          <p className="text-xs text-[#4A3728]/80 leading-relaxed">
            Transitioning from urban consumer habits to nature-based living requires real physiological and psychological unlearning. Prospective members undertake a 1 to 3 month living immersion on the land before making final commitments, allowing both the individual and the community to establish deep mutual resonance.
          </p>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="text-center space-y-4">
        <h3 className="text-2xl font-serif font-bold text-[#4A3728]">
          Ready to Visit and Experience the Land?
        </h3>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button
            onClick={() => navigate('/land')}
            className="px-8 py-3.5 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#4A4A35] transition-all"
          >
            Explore Land & Infrastructure
          </button>
          <button
            onClick={() => navigate('/join')}
            className="px-8 py-3.5 rounded-full bg-[#B35C44] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#9B4F3B] transition-all shadow-sm shadow-[#B35C44]/20"
          >
            Learn How to Join
          </button>
        </div>
      </section>
    </div>
  );
};
