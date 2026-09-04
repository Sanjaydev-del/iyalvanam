import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Wheat, 
  HeartPulse, 
  Hammer, 
  Sprout, 
  TreePine, 
  MessageCircle, 
  Sparkles,
  Feather,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';
import { BlogPost } from '../types';
import { api } from '../services/api';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { content, language } = useLanguage();
  const isTamil = language === 'ta';
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getBlogPosts()
      .then((posts) => setRecentPosts(posts.slice(0, 3)))
      .catch(() => {});
  }, []);

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 lg:space-y-32 pb-20 sm:pb-32">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="pt-10 sm:pt-16 lg:pt-20">
        <Container>
          <div className="space-y-10 sm:space-y-12">
            
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECE6D8] text-[#8B5A2B] text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#2E4F2B]" />
                <span>{content.hero.locationBadge} • {content.hero.subLocation}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2E4F2B] tracking-tight leading-[1.12]">
                {content.hero.title}
              </h1>

              <div className="py-2 border-y border-[#D4C5A9]/60 max-w-2xl space-y-1">
                <p className="text-base sm:text-lg font-bold text-[#8B5A2B]">
                  {content.hero.tagline}
                </p>
                <p className="text-xs text-[#5C5044] uppercase tracking-wider font-semibold">
                  {content.hero.trustsSubtitle}
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#5C5044] leading-relaxed max-w-2xl">
                {content.hero.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigate('/join')}
                  className="px-6 py-3.5 rounded-xl bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <span>{content.nav.joinUs}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4C5A9]" />
                </button>

                <button
                  onClick={() => navigate('/about')}
                  className="px-6 py-3.5 rounded-xl border border-[#D4C5A9] hover:bg-[#FAF8F3] text-[#2E4F2B] text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{content.hero.ctaExplore}</span>
                  <ArrowRight className="w-4 h-4 text-[#8B5A2B]" />
                </button>
              </div>
            </div>

            {/* Softly Framed Documentary Photograph */}
            <div className="space-y-3 pt-2">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl border border-[#D4C5A9] shadow-xs bg-[#ECE6D8]">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=85"
                  alt="Western Ghats lush forest canopy and mountain sanctuary"
                  className="w-full h-full object-cover filter contrast-[0.98] brightness-[0.96]"
                  loading="eager"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 px-2 text-xs text-[#5C5044] border-b border-[#D4C5A9]/50 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2E4F2B]" />
                  <span className="font-semibold text-[#241D17]">{content.hero.imageCaptionTitle}</span>
                  <span className="text-[#8B5A2B] hidden sm:inline">•</span>
                  <span className="text-[11px] text-[#5C5044]">{content.hero.imageCaptionSub}</span>
                </div>
                <span className="text-[10px] font-mono text-[#8B5A2B] uppercase tracking-wider">
                  8.96° N, 77.31° E • Dharmapuramadam
                </span>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE PILLARS OF LIVING (FOOD • HEALTH • CRAFT)                        */}
      {/* ========================================================================= */}
      <section>
        <Container>
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D4C5A9]/60 pb-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8B5A2B] block">
                  {isTamil ? 'அன்றாட வாழ்வியல் தூண்கள்' : 'The Three Pillars of Living'}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                  {isTamil ? 'உணவு • நல்வாழ்வு • கைவினை' : 'Food • Health • Sacred Craft'}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5C5044] max-w-md">
                {isTamil
                  ? 'செயற்கையற்ற வாழ்வியலை சாத்தியமாக்கும் 3 அடிப்படை களங்கள்.'
                  : 'Three dedicated dimensions bringing non-artificial living from philosophy into daily practice.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Card 1: Natural Food */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#D4C5A9] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#2E4F2B]/40 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4C5A9]/50">
                    <span className="text-xs font-mono font-bold text-[#8B5A2B]">01</span>
                    <Wheat className="w-5 h-5 text-[#8B5A2B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2E4F2B]">
                    {isTamil ? 'இயற்கை உணவு' : 'Natural Food'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                    {isTamil
                      ? 'பாரம்பரிய நாட்டின தானியங்கள், தீட்டப்படாத இயற்கை உணவு, மற்றும் ரசாயனமற்ற சமூக சமையலறை.'
                      : 'Preserving native heritage grains, unpolished raw whole nutrition, and communal woodfire hearth dining.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D4C5A9]/40">
                  <button
                    onClick={() => navigate('/food')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E4F2B] hover:text-[#1E351C] transition-colors cursor-pointer group"
                  >
                    <span>{isTamil ? 'முழு விவரம் காண்க' : 'Explore Natural Food'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 2: Living Health */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#D4C5A9] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#2E4F2B]/40 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4C5A9]/50">
                    <span className="text-xs font-mono font-bold text-[#8B5A2B]">02</span>
                    <HeartPulse className="w-5 h-5 text-[#2E4F2B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2E4F2B]">
                    {isTamil ? 'இயற்கை நல்வாழ்வு' : 'Living Health'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                    {isTamil
                      ? 'சூரியக் கடிகார வாழ்வியல், தூய திறந்த கிணற்று நீர் பாசனம், மற்றும் வெறும் கால் பூமித் தொடர்பு.'
                      : 'Circadian solar biology, vital mountain well water hydration, barefoot earthing, and sovereign immunity.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D4C5A9]/40">
                  <button
                    onClick={() => navigate('/health')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E4F2B] hover:text-[#1E351C] transition-colors cursor-pointer group"
                  >
                    <span>{isTamil ? 'முழு விவரம் காண்க' : 'Explore Living Health'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Card 3: Sacred Craft */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#D4C5A9] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#2E4F2B]/40 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4C5A9]/50">
                    <span className="text-xs font-mono font-bold text-[#8B5A2B]">03</span>
                    <Hammer className="w-5 h-5 text-[#8B5A2B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2E4F2B]">
                    {isTamil ? 'புனிதக் கைவினை & உழைப்பு' : 'Sacred Work & Craft'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                    {isTamil
                      ? 'சுண்ணாம்பு மற்றும் மண் கட்டுமானம், மூங்கில் மர வேலைப்பாடு, மற்றும் உழைப்பின் மேன்மை.'
                      : 'Non-toxic rammed earth masonry, bamboo carpentry, shramadaan collective labor, and sovereign craftsmanship.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D4C5A9]/40">
                  <button
                    onClick={() => navigate('/craft')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E4F2B] hover:text-[#1E351C] transition-colors cursor-pointer group"
                  >
                    <span>{isTamil ? 'முழு விவரம் காண்க' : 'Explore Sacred Craft'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. SANCTUARY LAND DESTINATION HIGHLIGHT                                   */}
      {/* ========================================================================= */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-y border-[#D4C5A9]/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECE6D8] text-[#8B5A2B] text-xs font-semibold uppercase tracking-wider">
                <TreePine className="w-3.5 h-3.5 text-[#2E4F2B]" />
                <span>{isTamil ? 'புனித பூமி' : 'Western Ghats Sanctuary'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B] leading-tight">
                {isTamil ? 'சிவசைலம் & தர்மபுரமடம் இயற்கை சரணாலயம்' : 'Dharmapuramadam Sanctuary: 4.5+ Acres of Perpetual Commons'}
              </h2>

              <p className="text-sm sm:text-base text-[#5C5044] leading-relaxed">
                {isTamil
                  ? 'மேற்குத் தொடர்ச்சி மலை அடிவாரத்தில் அமைந்துள்ள இயற்கை சரணாலயம். இது எவராலும் விற்கவோ, பிரிக்கவோ முடியாத வண்ணம் நிரந்தர இயற்கை அறக்கட்டளையின் கீழ் பாதுகாக்கப்படுகிறது.'
                  : 'Nestled at the base of the Agastiyar Malai Biosphere in Tenkasi District. Safeguarded under strict legal covenants where land, trees, and water bodies can never be divided, sold, or commercially exploited.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="primary" size="md" onClick={() => navigate('/sanctuary')}>
                  {isTamil ? 'நிலம் & வரைபடம் காண்க' : 'View Sanctuary Land & Map'}
                </Button>
                <Button variant="outline" size="md" onClick={() => navigate('/about')}>
                  {isTamil ? 'அறக்கட்டளை அமைப்பு →' : 'Read Trust Charter →'}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4C5A9] shadow-xs bg-[#ECE6D8]">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                alt="Iyalvanam Sanctuary Land at Tenkasi Western Ghats"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. RECENT JOURNAL REFLECTIONS                                            */}
      {/* ========================================================================= */}
      {recentPosts.length > 0 && (
        <section>
          <Container>
            <div className="space-y-10">
              <div className="flex items-center justify-between border-b border-[#D4C5A9]/60 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8B5A2B] block">
                    {isTamil ? 'பதிவுகள்' : 'Sanctuary Journal'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
                    {isTamil ? 'கள அனுபவங்களும் சிந்தனைகளும்' : 'Chronicles & Living Reflections'}
                  </h2>
                </div>

                <button
                  onClick={() => navigate('/blog')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2E4F2B] hover:text-[#1E351C] transition-colors cursor-pointer"
                >
                  <span>{isTamil ? 'அனைத்தும் காண்க' : 'View All'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                    className="rounded-2xl overflow-hidden bg-[#FAF8F3] border border-[#D4C5A9]/80 shadow-xs hover:border-[#2E4F2B]/50 transition-all flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE6D8] border-b border-[#D4C5A9]/50">
                        <img
                          src={post.imageUrl || 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-6 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-bold text-[#8B5A2B]">
                          <span>{post.category}</span>
                          <span className="text-[#5C5044] font-normal lowercase">{post.readTime}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#2E4F2B] group-hover:text-[#1E351C] transition-colors leading-snug break-words">
                          {post.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#5C5044] line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-[#D4C5A9]/40 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#2E4F2B]">
                      <span>{isTamil ? 'படிக்க' : 'Read Chronicle'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. CLOSING INVITATION                                                    */}
      {/* ========================================================================= */}
      <section>
        <Container>
          <div className="p-8 sm:p-14 rounded-3xl bg-[#FAF8F3] border border-[#D4C5A9] text-center space-y-6 shadow-xs">
            <span className="text-xs uppercase tracking-widest text-[#8B5A2B] font-bold block">
              {content.closing.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B] max-w-2xl mx-auto leading-tight">
              {content.closing.heading}
            </h2>
            <p className="text-sm text-[#5C5044] leading-relaxed max-w-xl mx-auto">
              {content.closing.subheading}
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate('/join')}
                className="px-8 py-3.5 rounded-xl bg-[#2E4F2B] hover:bg-[#1E351C] text-[#FAF8F3] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer flex items-center gap-2"
              >
                <span>{content.nav.joinUs}</span>
                <ArrowRight className="w-4 h-4 text-[#D4C5A9]" />
              </button>

              <a
                href="https://tinyurl.com/2zap33fy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#FAF8F3] hover:bg-[#ECE6D8] text-[#241D17] border border-[#D4C5A9] text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#8B5A2B]" />
                <span>{content.closing.btnWhatsapp}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
