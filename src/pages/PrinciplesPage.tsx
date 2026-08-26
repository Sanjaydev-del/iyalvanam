import React from 'react';
import { 
  Scale, 
  RefreshCw, 
  HeartHandshake, 
  Eye, 
  Feather, 
  ShieldAlert, 
  Sun, 
  Users, 
  Sparkles, 
  XCircle, 
  CheckCircle2,
  VolumeX,
  Smile,
  Compass,
  ArrowRight
} from 'lucide-react';

interface PrinciplesPageProps {
  navigate: (path: string) => void;
}

export const PrinciplesPage: React.FC<PrinciplesPageProps> = ({ navigate }) => {
  const naturalLaws = [
    {
      title: '1. Interconnectedness (ஒன்றிணைவு)',
      desc: 'All living and non-living elements in the universe form a seamless, unified web. An action impacting a single blade of grass or water drop creates ripples across the entire ecosystem.',
      icon: <Sparkles className="w-5 h-5 text-[#B35C44]" />,
    },
    {
      title: '2. Cause & Effect (காரண காரியம்)',
      desc: 'Every choice carries inevitable ecological and karmic consequences. Degraded soil yields sickness; nurtured living earth yields vitality, pure spring water, and perennial peace.',
      icon: <RefreshCw className="w-5 h-5 text-[#5A5A40]" />,
    },
    {
      title: '3. Balance (சமநிலை)',
      desc: 'Nature continuously balances extreme forces through cycles of day and night, drought and monsoon, activity and deep rest. Our lives must mirror this dynamic equilibrium.',
      icon: <Scale className="w-5 h-5 text-[#4A3728]" />,
    },
    {
      title: '4. Self-Responsibility (சுய பொறுப்புணர்வு)',
      desc: 'We do not blame governments, corporations, or past generations. Each resident takes radical responsibility for their thoughts, waste, nourishment, and energy footprint.',
      icon: <Eye className="w-5 h-5 text-[#B35C44]" />,
    },
    {
      title: '5. Regeneration (மீளுருவாக்கம்)',
      desc: 'Human presence on earth should not merely be "sustainable" (neutral); it must be actively regenerative—leaving soil richer, forests denser, and water tables higher than we found them.',
      icon: <Feather className="w-5 h-5 text-[#5A5A40]" />,
    },
    {
      title: '6. Non-Harm (அகிம்சை / இன்னா செய்யாமை)',
      desc: 'Reverence for life requires that we cause no unnecessary suffering or destruction to soil organisms, wildlife, insects, domestic animals, or our fellow humans.',
      icon: <HeartHandshake className="w-5 h-5 text-[#B35C44]" />,
    },
    {
      title: '7. Abundance through Cooperation (கூட்டுறவின் வளம்)',
      desc: 'Scarcity is created by hoarding and competition. Nature generates endless abundance when sunlight, seeds, labor, water, and knowledge are shared freely in common stewardship.',
      icon: <Users className="w-5 h-5 text-[#4A3728]" />,
    },
  ];

  const guidingValues = [
    {
      name: 'Unity in Diversity',
      tamil: 'பன்முகத்தன்மையில் ஒருமைப்பாடு',
      desc: 'Honoring distinct skills, backgrounds, languages, and unique expressions while uniting under one common love for nature.',
    },
    {
      name: 'Simplicity & Sufficiency',
      tamil: 'எளிமையும் போதுமென்ற மனமும்',
      desc: 'Cultivating the art of living with what is genuinely necessary, finding joyful contentment without consumerist accumulation.',
    },
    {
      name: 'Learning as a Way of Life',
      tamil: 'வாழ்நாள் வழியே கற்றல்',
      desc: 'Freeing learning from rigid classrooms; embracing experiential learning through soil, carpentry, cooking, weaving, and quiet reflection.',
    },
    {
      name: 'Harmony with Nature',
      tamil: 'இயற்கையோடு இயைந்திருத்தல்',
      desc: 'Aligning our sleep with the sun, our food with the seasons, and our architectural materials with local geology.',
    },
    {
      name: 'Conscious Use of Money',
      tamil: 'பணத்தின் விழிப்புணர்வு பயன்பாடு',
      desc: 'Viewing financial resources solely as a temporary tool for collective infrastructure and land stewardship, not as a measure of personal worth.',
    },
    {
      name: 'Collective Ownership',
      tamil: 'கூட்டு உடைமை',
      desc: 'Holding the sanctuary land under Iyalvanam Asset Trust in perpetuity so that no individual may buy, sell, or exploit the earth.',
    },
    {
      name: 'Truth & Transparency',
      tamil: 'வாய்மையும் வெளிப்படைத்தன்மையும்',
      desc: 'Uncompromising transparency in consensus decisions, financial accounting, personal interactions, and community communication.',
    },
  ];

  const dailyPractices = [
    {
      title: 'Silence (மௌனம் / Silence)',
      desc: 'Designated morning and evening hours of silence to calm the nervous system, quiet the ego, and attune our ears to forest sounds.',
      icon: <VolumeX className="w-6 h-6 text-[#5A5A40]" />,
    },
    {
      title: 'Gratitude (நன்றி உணர்வு / Gratitude)',
      desc: 'Daily heartfelt pauses before meals and work to thank the sun, soil, pollinators, ancestors, and fellow contributors for their gifts.',
      icon: <Smile className="w-6 h-6 text-[#B35C44]" />,
    },
    {
      title: 'Living with Nature (இயற்கையோடு வாழ்தல்)',
      desc: 'Barefoot walking on natural earth, bathing in unpolluted spring water, sunbathing at dawn, and working with hands in living soil.',
      icon: <Sun className="w-6 h-6 text-[#4A3728]" />,
    },
    {
      title: 'Mindful Communication (நல்-உரையாடல்)',
      desc: 'Speaking without aggression, listening with full attention in consensus circles, and resolving interpersonal friction promptly through compassion.',
      icon: <HeartHandshake className="w-6 h-6 text-[#5A5A40]" />,
    },
  ];

  const bannedConcepts = [
    {
      title: 'Private Land Ownership (தனிநபர் நில உரிமை)',
      desc: 'The earth belongs to itself and future generations. No individual holds private title or proprietary control over Iyalvanam land parcels.',
    },
    {
      title: 'Religious Dogma & Sectarianism (மதவாத பிரிவினைகள்)',
      desc: 'We are bound by universal natural laws, not rigid sectarian dogmas, religious hierarchies, or ritual compulsions.',
    },
    {
      title: 'Caste Discrimination & Hierarchies (சாதிய படிநிலைகள்)',
      desc: 'Any manifestation of caste hierarchy, untouchability, or ancestral social prejudice is strictly prohibited and antithetical to natural law.',
    },
    {
      title: 'Racial / Regional Superiority (இன / மொழி மேலாதிக்கம்)',
      desc: 'Every human being is welcomed with equal dignity, mutual reverence, and common kinship regardless of origin or language.',
    },
    {
      title: 'Money as Personal Identity (பணமே அந்தஸ்து என்ற எண்ணம்)',
      desc: 'Financial net worth confers zero hierarchy, voting dominance, or preferential treatment in our consensus circle.',
    },
    {
      title: 'Artificial Labeling & Ideological Tribalism (செயற்கை அடையாளங்கள்)',
      desc: 'We leave behind modern political party affiliations, corporate ranks, consumerist status symbols, and rigid ideological labels.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Header Banner */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
          Principles & Values • கோட்பாடுகள்
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A3728]">
          Living by Natural Law & Guiding Values
        </h1>
        <p className="text-lg text-[#4A3728]/80 max-w-3xl mx-auto leading-relaxed">
          Nature operates by fundamental cosmic principles that cannot be bypassed by human convenience. At Iyalvanam, we anchor all our individual actions, community governance, and ecological stewardship in these immutable truths.
        </p>
      </section>

      {/* 7 Natural Law Principles */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Cosmic Order
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            The Seven Natural Law Principles
          </h2>
          <p className="text-sm text-[#5A5A40]">
            These principles guide our agriculture, decision-making circles, personal hygiene, and ecological integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {naturalLaws.map((law, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-3 hover:border-[#5A5A40] transition-all hover:shadow-xs ${
                idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#F5F5F0] flex items-center justify-center shadow-xs">
                {law.icon}
              </div>
              <h3 className="text-lg font-bold text-[#4A3728] font-serif">
                {law.title}
              </h3>
              <p className="text-xs text-[#4A3728]/80 leading-relaxed">
                {law.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guiding Values */}
      <section className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Community Ethics
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            Our Seven Guiding Values
          </h2>
          <p className="text-sm text-[#5A5A40]">
            The foundational ethos practiced daily by all resident families, long-term volunteers, and community trustees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidingValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-2 shadow-xs"
            >
              <h3 className="text-lg font-bold text-[#4A3728] font-serif">
                {val.name}
              </h3>
              <div className="text-xs font-semibold text-[#5A5A40] font-tamil">
                {val.tamil}
              </div>
              <p className="text-xs text-[#4A3728]/80 leading-relaxed pt-1">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Practices */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Rhythms & Routines
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            Daily Spiritual & Physical Practices
          </h2>
          <p className="text-sm text-[#5A5A40]">
            How we anchor our inner peace and physical vitality from sunrise to sunset.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dailyPractices.map((prac, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-3 hover:border-[#5A5A40] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#F5F5F0] flex items-center justify-center shadow-xs">
                {prac.icon}
              </div>
              <h3 className="text-lg font-bold text-[#4A3728] font-serif">
                {prac.title}
              </h3>
              <p className="text-xs text-[#4A3728]/80 leading-relaxed">
                {prac.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT HAS NO PLACE HERE - Critical Section from PDF */}
      <section className="bg-[#3B2C20] text-[#F5F5F0] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/30 space-y-8 shadow-xl">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#B35C44]/20 text-[#EBEBE3] text-xs font-bold uppercase tracking-widest border border-[#B35C44]/40">
            <XCircle className="w-4 h-4 text-[#B35C44]" /> Essential Boundaries
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            What Has No Place Here (இங்கு இடமில்லாதவை)
          </h2>
          <p className="text-xs sm:text-sm text-[#EBEBE3]/80 leading-relaxed">
            To preserve the sacred purity, psychological safety, and egalitarian balance of Iyalvanam, the following conventional constructs are strictly absent:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bannedConcepts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#4A3728] border border-[#5A5A40]/40 space-y-2"
            >
              <div className="flex items-center gap-2 text-[#EBEBE3] font-bold text-sm font-serif">
                <XCircle className="w-4 h-4 text-[#B35C44] shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-[#EBEBE3]/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#2C1F16] rounded-2xl border border-[#5A5A40]/30 text-center text-xs text-[#EBEBE3]/80 max-w-2xl mx-auto">
          <p>
            By joining or supporting Iyalvanam, all members unconditionally agree to transcend these artificial divisions and relate purely as conscious stewards of the living earth.
          </p>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="text-center space-y-4 pt-4">
        <h3 className="text-2xl font-serif font-bold text-[#4A3728]">
          Experience Community Life
        </h3>
        <p className="text-sm text-[#5A5A40] max-w-xl mx-auto">
          See how our daily food, health practices, children's education, and consensus governance operate on the land.
        </p>
        <div className="pt-2">
          <button
            onClick={() => navigate('/community-life')}
            className="px-8 py-3.5 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest shadow-sm shadow-[#B35C44]/20 transition-all inline-flex items-center gap-2"
          >
            <span>Explore Community Life & Governance</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
