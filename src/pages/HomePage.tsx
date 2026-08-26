import React, { useEffect, useState } from 'react';
import { 
  Sprout, 
  TreePine, 
  Heart, 
  Compass, 
  Shield, 
  Users, 
  ArrowRight, 
  MapPin, 
  Droplets, 
  Sun, 
  Sparkles, 
  Feather, 
  Calendar, 
  CheckCircle2,
  Mountain,
  Leaf
} from 'lucide-react';
import { BlogPost } from '../types';
import { api } from '../services/api';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    api.getBlogPosts()
      .then((posts) => setRecentPosts(posts.slice(0, 3)))
      .catch((err) => console.error('Failed to load posts', err))
      .finally(() => setLoadingPosts(false));
  }, []);

  const foundations = [
    {
      number: '01',
      title: 'Non-Artificial Living',
      tamil: 'செயற்கையற்ற வாழ்வியல்',
      desc: 'Freeing ourselves from synthetic dependencies, toxic chemicals, processed inputs, and unnatural lifestyle patterns.',
      icon: <Sprout className="w-6 h-6 text-[#2d5a43]" />,
    },
    {
      number: '02',
      title: 'Interconnected Life',
      tamil: 'இணைந்த பெருவாழ்வு',
      desc: 'Recognizing the inseparable unity between human beings, soil, water, forest flora, fauna, and cosmic energies.',
      icon: <Droplets className="w-6 h-6 text-[#356859]" />,
    },
    {
      number: '03',
      title: 'Collective Existence',
      tamil: 'கூட்டு வாழ்வியல்',
      desc: 'Moving from isolated hyper-individualism to consensus-driven, cooperative stewardship and mutual care.',
      icon: <Users className="w-6 h-6 text-[#735338]" />,
    },
    {
      number: '04',
      title: 'Return to Natural State',
      tamil: 'இயல்பு நிலைக்கு திரும்புதல்',
      desc: 'Honoring natural circadian rhythms, barefoot earthing, sun exposure, living water, and organic nourishment.',
      icon: <Sun className="w-6 h-6 text-[#c85a32]" />,
    },
    {
      number: '05',
      title: 'Forest as a Model',
      tamil: 'காடே வழிகாட்டி',
      desc: 'Observing how ancient self-sustaining forests manage fertility, biodiversity, water retention, and endless abundance without external force.',
      icon: <TreePine className="w-6 h-6 text-[#1e3d2f]" />,
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Background gradient blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-[#EBEBE3] via-[#E6E6DC]/60 to-transparent rounded-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#5A5A40]/10 border border-[#5A5A40]/20 text-[#5A5A40] text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B35C44] animate-ping" />
              <span>Dharmapuramadam, Tenkasi • Western Ghats Biosphere</span>
            </div>

            {/* Main Hero Headings */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-tamil text-[#5A5A40] leading-tight tracking-tight">
                “இயன்ற வரை இயற்கைக்கு திரும்புவோம்”
              </h2>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-[#1A1A1A] tracking-tight leading-[1.1]">
                Return to nature as much as possible.
              </h1>
            </div>

            {/* Supporting Concept */}
            <p className="text-lg sm:text-xl text-[#4A3728]/80 max-w-3xl mx-auto font-normal leading-relaxed">
              A living blueprint for conscious human living, collective self-reliance, and spiritual evolution in harmony with natural laws.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                id="hero-join-cta"
                onClick={() => navigate('/join')}
                className="px-8 py-3.5 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-[#B35C44]/20 transition-all flex items-center gap-2 group"
              >
                <span>Join the Community</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-support-cta"
                onClick={() => navigate('/support')}
                className="px-8 py-3.5 rounded-full bg-[#EBEBE3] hover:bg-[#5A5A40] hover:text-white text-[#5A5A40] border border-[#5A5A40]/30 font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xs transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current opacity-80" />
                <span>Support Our ₹25L Goal</span>
              </button>

              <button
                id="hero-learn-cta"
                onClick={() => navigate('/about')}
                className="px-6 py-3.5 rounded-full text-[#5A5A40] hover:text-[#4A3728] hover:bg-[#EBEBE3] font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Visual Card Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 sm:h-80 rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-md group border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                alt="Western Ghats forest and sacred land"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#EBEBE3]">Sanctuary</span>
                <h3 className="text-xl font-bold font-serif">Western Ghats Foothills</h3>
                <p className="text-xs text-gray-200 mt-1">Dharmapuramadam, Tenkasi District</p>
              </div>
            </div>

            <div className="relative h-72 sm:h-80 rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-md group border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                alt="Organic farming and food forest"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#EBEBE3]">Self-Reliance</span>
                <h3 className="text-xl font-bold font-serif">Food Forest & Permaculture</h3>
                <p className="text-xs text-gray-200 mt-1">Heirloom seeds & zero-chemical living</p>
              </div>
            </div>

            <div className="relative h-72 sm:h-80 rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-md group border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
                alt="Community living circle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#EBEBE3]">Stewardship</span>
                <h3 className="text-xl font-bold font-serif">Consensus & Dual Trust</h3>
                <p className="text-xs text-gray-200 mt-1">Iyalvanam Asset & SEYON Operational Trusts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meaning & Core Philosophy Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] text-xs font-bold uppercase tracking-widest">
                <Leaf className="w-3.5 h-3.5 text-[#B35C44]" /> What is Iyalvanam?
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
                “We don’t create a new system — we return to the natural one.”
              </h2>
              <p className="text-base text-[#4A3728]/80 leading-relaxed">
                In modern society, humans have created artificial structures of ownership, competition, sensory overload, and ecological exploitation. <strong>Iyalvanam (இயல்வனம்)</strong> is not an escapist retreat or an artificial eco-resort; it is an intentional community sanctuary where families and seekers live, work, cultivate, and heal according to timeless Natural Law.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15">
                  <div className="font-bold text-[#4A3728] text-sm">இயல் (Iyal)</div>
                  <div className="text-xs text-[#5A5A40]">Nature / Essence</div>
                </div>
                <div className="p-3 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15">
                  <div className="font-bold text-[#4A3728] text-sm">வனம் (Vanam)</div>
                  <div className="text-xs text-[#5A5A40]">Living Forest</div>
                </div>
                <div className="p-3 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15">
                  <div className="font-bold text-[#4A3728] text-sm">இயற்கை வாழ்வியல்</div>
                  <div className="text-xs text-[#5A5A40]">Natural Living</div>
                </div>
                <div className="p-3 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15">
                  <div className="font-bold text-[#4A3728] text-sm">கூடம் (Koodam)</div>
                  <div className="text-xs text-[#5A5A40]">Sacred Gathering</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F5F5F0] p-6 sm:p-8 rounded-3xl border border-[#5A5A40]/15 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-[#4A3728] font-serif flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B35C44]" />
                Spiritual & Human Evolution
              </h3>
              <p className="text-sm text-[#5A5A40] leading-relaxed">
                The shift required for humanity is not merely technological; it is an inner transformation of consciousness:
              </p>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#EBEBE3] text-xs font-semibold text-[#4A3728]">
                  <span>Fear (பயம்)</span>
                  <ArrowRight className="w-4 h-4 text-[#B35C44]" />
                  <span className="text-[#5A5A40] font-bold">Love (அன்பு)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#EBEBE3] text-xs font-semibold text-[#4A3728]">
                  <span>Separation (பிரிவு)</span>
                  <ArrowRight className="w-4 h-4 text-[#B35C44]" />
                  <span className="text-[#5A5A40] font-bold">Unity (ஒருமைப்பாடு)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#EBEBE3] text-xs font-semibold text-[#4A3728]">
                  <span>Survival (உயிர்வாழ்தல்)</span>
                  <ArrowRight className="w-4 h-4 text-[#B35C44]" />
                  <span className="text-[#5A5A40] font-bold">Creation (படைப்பு)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Foundations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            The Five Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            Foundational Pillars of Iyalvanam
          </h2>
          <p className="text-base text-[#5A5A40]">
            Our way of life stands upon five immutable ecological and philosophical principles from our founding blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundations.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 hover:border-[#5A5A40] hover:shadow-md transition-all space-y-4 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F0] flex items-center justify-center shadow-xs">
                  {item.icon}
                </div>
                <span className="text-3xl font-bold font-serif text-[#4A3728]/30">
                  {item.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#4A3728] font-serif">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#5A5A40] font-tamil mt-0.5">
                  {item.tamil}
                </div>
              </div>
              <p className="text-sm text-[#4A3728]/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Quick link card */}
          <div className="p-7 rounded-3xl bg-[#5A5A40] text-[#F5F5F0] flex flex-col justify-between space-y-6 shadow-md border border-[#5A5A40]/40">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#EBEBE3]">
                Explore Everything
              </span>
              <h3 className="text-2xl font-bold font-serif mt-2 text-white">
                Deep Dive into Our Principles & Ethics
              </h3>
              <p className="text-sm text-[#EBEBE3]/90 mt-2 leading-relaxed">
                Discover the 7 Natural Laws, 7 Guiding Values, Daily Practices, and what holds no place in our community.
              </p>
            </div>
            <button
              onClick={() => navigate('/principles')}
              className="px-6 py-3 rounded-full bg-[#F5F5F0] text-[#4A3728] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-between shadow-xs"
            >
              <span>Read Full Principles</span>
              <ArrowRight className="w-4 h-4 text-[#B35C44]" />
            </button>
          </div>
        </div>
      </section>

      {/* Community Life & Land Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Land */}
          <div className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-10 border border-[#5A5A40]/15 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] text-xs font-bold uppercase tracking-widest">
                <Mountain className="w-3.5 h-3.5 text-[#B35C44]" /> Land & Sanctuary
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A3728]">
                Dharmapuramadam, Tenkasi District
              </h3>
              <p className="text-sm text-[#4A3728]/80 leading-relaxed">
                Nestled directly in the foothills of the Western Ghats, adjoining the Agastiyar Malai Biosphere Reserve and Kalakad-Mundanthurai Tiger Reserve. Rich red soil, clean perennial groundwater, fresh mountain breezes, and rich ecological biodiversity.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15">
                  <span className="font-semibold text-[#4A3728] block">Open Well & Rainwater</span>
                  <span className="text-[#5A5A40]">Pristine mountain aquifer</span>
                </div>
                <div className="p-3 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15">
                  <span className="font-semibold text-[#4A3728] block">Eco Infrastructure</span>
                  <span className="text-[#5A5A40]">Lime-mud homes & dry toilets</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate('/land')}
              className="w-fit px-6 py-2.5 rounded-full bg-[#5A5A40] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#4A3728] transition-colors flex items-center gap-2"
            >
              <span>Explore Land & Maps</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Joining Process */}
          <div className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-10 border border-[#5A5A40]/15 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B35C44]/15 text-[#B35C44] text-xs font-bold uppercase tracking-widest">
                <Users className="w-3.5 h-3.5" /> Joining Process
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A3728]">
                Alignment → Interaction → Understanding → Invitation
              </h3>
              <p className="text-sm text-[#4A3728]/80 leading-relaxed">
                Iyalvanam is not a commercial real estate scheme. Joining happens through mutual philosophical resonance, direct on-land interaction, a 1–3 month transition stay, and final consensus invitation.
              </p>
              <div className="p-4 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15 space-y-2 text-xs text-[#4A3728]/80">
                <div className="flex items-center justify-between font-semibold text-[#4A3728]">
                  <span>Joining Contribution (Non-refundable)</span>
                  <span className="text-[#B35C44] font-bold">₹1,00,000 (up to 3 members)</span>
                </div>
                <p className="text-[11px] text-[#5A5A40]">
                  + ₹25,000 per additional family member. Funds community infrastructure in perpetuity under Iyalvanam Asset Trust.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/join')}
              className="w-fit px-6 py-2.5 rounded-full bg-[#B35C44] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#9B4F3B] transition-colors flex items-center gap-2 shadow-sm shadow-[#B35C44]/20"
            >
              <span>View Joining Details & Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Support / ₹25L Goal Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4A3728] text-[#F5F5F0] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/30 relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B35C44]/20 text-[#EBEBE3] text-xs font-bold uppercase tracking-widest border border-[#B35C44]/30">
              <Heart className="w-3.5 h-3.5 fill-current text-[#B35C44]" /> Community Support Campaign
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Infrastructure Funding Goal: ₹25 Lakhs
            </h2>
            <p className="text-base text-[#EBEBE3]/90 leading-relaxed">
              We are establishing the core community hall, open well deepening, solar micro-grid, heirloom seed repository, and native fruit forest. We welcome monetary support, seeds, saplings, eco-construction tools, and volunteer craftsmanship.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/support')}
                className="px-6 py-3 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest transition-colors shadow-sm shadow-[#B35C44]/20"
              >
                Submit Support Pledge
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 rounded-full bg-[#5A5A40] hover:bg-[#3B2C20] text-[#F5F5F0] font-bold text-xs uppercase tracking-widest transition-colors border border-[#5A5A40]/40"
              >
                Contact Community Circle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog / Chronicles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
              Field Updates & Articles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728] mt-2">
              Community Chronicles
            </h2>
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="text-xs uppercase tracking-widest font-bold text-[#5A5A40] hover:text-[#4A3728] flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4 text-[#B35C44]" />
          </button>
        </div>

        {loadingPosts ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-80 rounded-3xl bg-[#EBEBE3] animate-pulse" />
            ))}
          </div>
        ) : recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                className="bg-[#EBEBE3] rounded-3xl overflow-hidden border border-[#5A5A40]/15 hover:border-[#5A5A40] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-[#4A3728]/90 backdrop-blur-xs text-[#F5F5F0] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-2.5">
                    {post.titleTamil && (
                      <p className="text-xs font-semibold text-[#5A5A40] font-tamil line-clamp-1">
                        {post.titleTamil}
                      </p>
                    )}
                    <h3 className="text-lg font-bold text-[#4A3728] font-serif line-clamp-2 group-hover:text-[#B35C44] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#4A3728]/80 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#5A5A40]/10 flex items-center justify-between text-xs text-[#5A5A40]">
                  <span>{post.readTime}</span>
                  <span className="font-bold uppercase tracking-wider text-[#B35C44] group-hover:underline flex items-center gap-1">
                    Read Post <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-[#EBEBE3] rounded-3xl border border-[#5A5A40]/15 text-[#5A5A40]">
            No blog posts published yet.
          </div>
        )}
      </section>
    </div>
  );
};
