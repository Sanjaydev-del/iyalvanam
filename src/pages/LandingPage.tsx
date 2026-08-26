import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  TreePine, 
  Heart, 
  Compass, 
  Users, 
  ArrowRight, 
  MapPin, 
  Droplets, 
  Sun, 
  Sparkles, 
  Feather, 
  CheckCircle2,
  Mountain,
  Leaf,
  ShieldCheck,
  Check,
  Clock,
  BookOpen,
  Send,
  ChevronDown,
  ChevronUp,
  Layers,
  Award,
  Phone,
  Mail,
  HelpCircle
} from 'lucide-react';
import { BlogPost, Donation } from '../types';
import { api } from '../services/api';

interface LandingPageProps {
  navigate: (path: string) => void;
  showToast?: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ navigate, showToast }) => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [selectedZone, setSelectedZone] = useState<number>(0);
  const [selectedComparisonTab, setSelectedComparisonTab] = useState<'daily' | 'food' | 'housing' | 'community'>('daily');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activePrincipleIndex, setActivePrincipleIndex] = useState<number>(0);
  
  // Quick Visit Booking Form State
  const [quickVisitForm, setQuickVisitForm] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: 'Sanctuary Day Visit & Orientation',
    preferredDate: '',
    numberOfVisitors: 1,
    notes: ''
  });
  const [isSubmittingQuickVisit, setIsSubmittingQuickVisit] = useState(false);
  const [quickVisitSubmitted, setQuickVisitSubmitted] = useState(false);

  // Live pledge stat
  const [totalPledged, setTotalPledged] = useState<number>(1480000);
  const targetGoal = 2500000;

  useEffect(() => {
    // Load blog posts
    api.getBlogPosts()
      .then((posts) => setRecentPosts(posts.slice(0, 3)))
      .catch((err) => console.error('Failed to load posts', err))
      .finally(() => setLoadingPosts(false));

    // Load donation stats
    api.getDonations()
      .then((records: Donation[]) => {
        const sum = records.reduce((acc, curr) => acc + (curr.amount || 0), 0);
        if (sum > 0) {
          setTotalPledged(sum);
        }
      })
      .catch(() => {});
  }, []);

  const handleQuickVisitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickVisitForm.name || !quickVisitForm.phone || !quickVisitForm.email) {
      if (showToast) showToast('error', 'Please provide your name, phone number, and email.');
      return;
    }

    setIsSubmittingQuickVisit(true);
    try {
      await api.submitJoinInquiry({
        name: quickVisitForm.name,
        email: quickVisitForm.email,
        phone: quickVisitForm.phone,
        numberOfMembers: Number(quickVisitForm.numberOfVisitors) || 1,
        areaOfContribution: quickVisitForm.purpose,
        skills: `Preferred Date: ${quickVisitForm.preferredDate || 'Flexible'}`,
        message: `[Landing Page Quick Booking] ${quickVisitForm.purpose}. Date: ${quickVisitForm.preferredDate}. Notes: ${quickVisitForm.notes}`
      });

      setQuickVisitSubmitted(true);
      if (showToast) {
        showToast('success', 'Your sanctuary visit request has been recorded. Our stewards will contact you shortly.', 'Request Received');
      }
    } catch (err) {
      if (showToast) {
        showToast('error', 'Unable to submit your visit request at this moment. Please try again.');
      }
    } finally {
      setIsSubmittingQuickVisit(false);
    }
  };

  const sanctuaryZones = [
    {
      id: 0,
      title: 'Food Forest & Heirloom Orchard',
      tamil: 'உணவுக் காடு & பாரம்பர்ய மரங்கள்',
      tag: 'Ecology & Permaculture',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
      description: 'A multi-tier food forest modeled after the Western Ghats climax ecosystems. Multi-canopy layers featuring native Jackfruit, Mango, Amla, Guava, Moringa, multi-year vegetables, and medicinal root crops nourished solely by living compost and bio-mulch.',
      features: ['Multi-tier agroforestry canopy', '100% Heirloom non-hybrid seeds', 'Zero chemical fertilizers & pesticides', 'Natural swales for soil moisture retention']
    },
    {
      id: 1,
      title: 'Traditional Mud & Lime Living Quarters',
      tamil: 'சுண்ணாம்பு-மண் வாழ்விடங்கள்',
      tag: 'Natural Architecture',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
      description: 'Living structures sculpted from native red clay, sand, unslaked lime, and plant juices. These breathable earthen walls remain 6–8°C cooler during blistering summer afternoons without air conditioning, harmonizing indoor air quality.',
      features: ['Local earth, lime & river sand', 'Natural thatched & country tile roofs', 'Zero toxic paints or chemical binders', 'Passive airflow & thermal comfort']
    },
    {
      id: 2,
      title: 'Sacred Mountain Well & Rainwater System',
      tamil: 'ஜீவ ஊற்று & மழைநீர் சேகரிப்பு',
      tag: 'Hydrology & Living Water',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
      description: 'Fed by subterranean aquifers filtering down from the Agastiyar mountain peaks. Supplemented by recharge swales, bunds, and silt traps that ensure 100% of monsoon rainwater is channeled into living groundwater reserves.',
      features: ['Heritage stone-lined open well', 'Subterranean mountain water recharge', 'Contour trenches & silt filtration', '100% Greywater bio-reed bed processing']
    },
    {
      id: 3,
      title: 'Community Koodam & Gathering Hall',
      tamil: 'சமூகக் கூடம் & கலந்தாய்வு மையம்',
      tag: 'Community Life',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80',
      description: 'The physical and spiritual heart of Iyalvanam. An open-air pavilion built of bamboo and timber where resident families gather for daily consensus circles, communal organic cooking, herbal medicine preparation, and cultural celebrations.',
      features: ['Open-air consensus circular seating', 'Wood-fired natural community kitchen', 'Heirloom seed library storage', 'Acoustic space for quiet introspection']
    },
    {
      id: 4,
      title: 'Agastiyar Sacred Silence & Meditation Grove',
      tamil: 'மௌனத் தோப்பு & தியான வெளி',
      tag: 'Spiritual Evolution',
      image: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1000&q=80',
      description: 'A designated quiet sanctuary on the western edge facing the towering silhouette of the Western Ghats. Reserved for morning contemplative silence, yoga, breathwork, and deep communion with universal nature.',
      features: ['Unbroken view of sacred mountain peaks', 'Strict digital & electronic silence', 'Medicinal tree grove (Neem, Peepal, Banyan)', 'Natural stone & grass seating']
    }
  ];

  const principles12 = [
    {
      num: '01',
      title: 'Non-Artificial Living',
      tamil: 'செயற்கையற்ற வாழ்வியல்',
      summary: 'Complete freedom from synthetic chemicals, processed food, plastic dependency, and industrial speed.',
      quote: 'Living in alignment with organic matter and natural elements.'
    },
    {
      num: '02',
      title: 'Interconnected Life',
      tamil: 'இணைந்த பெருவாழ்வு',
      summary: 'Recognizing humanity, soil, trees, water, and cosmic vibrations as one inseparable organism.',
      quote: 'When the soil thrives, human spirit thrives.'
    },
    {
      num: '03',
      title: 'Collective Existence',
      tamil: 'கூட்டு வாழ்வியல்',
      summary: 'Replacing competitive isolation with mutual aid, consensus circles, and shared abundance.',
      quote: 'We rise together through cooperation, not competition.'
    },
    {
      num: '04',
      title: 'Return to Natural State',
      tamil: 'இயல்பு நிலைக்கு திரும்புதல்',
      summary: 'Circadian rhythms, morning sunlight, bare earth connection, and pure spring water.',
      quote: 'Aligning bodily rhythms with the sun, moon, and seasons.'
    },
    {
      num: '05',
      title: 'Forest as a Model',
      tamil: 'காடே வழிகாட்டி',
      summary: 'Observing how unmanaged forests create boundless fertility without artificial fertilizers.',
      quote: 'The forest teaches effortless self-reliance and stability.'
    },
    {
      num: '06',
      title: 'Living Soil Stewardship',
      tamil: 'மண்ணே உயிர்',
      summary: 'Zero chemicals, heavy mulching, and honoring soil micro-organisms as sacred creators.',
      quote: 'We do not cultivate crops; we cultivate living soil.'
    },
    {
      num: '07',
      title: 'Conscious Simplicity',
      tamil: 'விழிப்புணர்வுடன் கூடிய எளிமை',
      summary: 'Reducing unneeded consumerism to create boundless space for inner joy and peace.',
      quote: 'True luxury is clean air, living water, and quiet minds.'
    },
    {
      num: '08',
      title: 'Consensus Governance',
      tamil: 'ஏகோபித்த முடிவெடுத்தல்',
      summary: 'All community decisions reached through deep dialogue, patience, and 100% circle agreement.',
      quote: 'No majority votes that leave minorities behind.'
    },
    {
      num: '09',
      title: 'Pure Food as Medicine',
      tamil: 'உணவே மருந்து',
      summary: 'Seasonal, unpolished millets, fresh native greens, cold-pressed oils, and sun-cooked meals.',
      quote: 'Let nutrition be the daily cure and spiritual fuel.'
    },
    {
      num: '10',
      title: 'Sacred Water Cycles',
      tamil: 'புனித நீர் பாதுகாப்பு',
      summary: '100% Rainwater harvesting, natural recharge swales, and zero chemical contamination.',
      quote: 'Every raindrop is retained and returned to Mother Earth.'
    },
    {
      num: '11',
      title: 'Gift & Abundance Economy',
      tamil: 'கொடை மற்றும் பகிர்தல்',
      summary: 'Transcendence of commercial greed through sharing excess harvests and skills.',
      quote: 'Nature gives freely; our community reflects that abundance.'
    },
    {
      num: '12',
      title: 'Spiritual Liberation',
      tamil: 'ஆன்ம விடுதலை',
      summary: 'Transcending ego, dogmas, and fear into universal love, inner quietude, and harmony.',
      quote: 'Sanctuary for the seeker’s ultimate inner realization.'
    }
  ];

  const comparisonData = {
    daily: {
      modern: {
        title: 'Modern Urban Lifestyle',
        items: [
          'Waking to artificial alarms in concrete high-rises',
          'Breathing air conditioned, recirculated smog',
          'Stuck in daily rush-hour traffic and digital screen fatigue',
          'Heavy sensory overload, anxiety, and fragmented sleep'
        ]
      },
      iyalvanam: {
        title: 'Iyalvanam Natural Living',
        items: [
          'Waking naturally to mountain birdsong and cool breeze',
          'Breathing pure oxygen filtered through Western Ghats forests',
          'Working in fertile soil, caring for trees, walking barefoot',
          'Circadian sunset wind-down, herbal tea, and restful deep sleep'
        ]
      }
    },
    food: {
      modern: {
        title: 'Industrial Food System',
        items: [
          'Chemically ripened fruits coated in synthetic wax',
          'Ultra-processed packaged snacks and refined white sugars',
          'High pesticide residue and loss of native seed diversity',
          'Chronic lifestyle diseases, gut dysbiosis, and fatigue'
        ]
      },
      iyalvanam: {
        title: 'Heirloom Food Forest',
        items: [
          'Harvesting unpolished heirloom millets and wild greens daily',
          'Rich organic fruits ripened naturally on parent branches',
          'Cold-pressed native sesame & coconut oils from local presses',
          'Digestive vitality, pure nourishment, and vibrant immunity'
        ]
      }
    },
    housing: {
      modern: {
        title: 'Concrete & Synthetic Dwellings',
        items: [
          'Reinforced concrete traps heat and causes heavy EMF radiation',
          'Toxic synthetic paints emitting volatile organic compounds',
          'Flush toilets wasting gallons of purified water to pollute rivers',
          'High monthly utility bills for artificial climate control'
        ]
      },
      iyalvanam: {
        title: 'Earth, Lime & Thatch Architecture',
        items: [
          'Hand-sculpted lime-mud walls breathing with atmospheric humidity',
          'Naturally 6–8°C cooler in summer without artificial cooling',
          'Waterless dry composting sanitation returning nutrients safely to earth',
          'Zero toxic materials, 100% biodegradable and zero maintenance debt'
        ]
      }
    },
    community: {
      modern: {
        title: 'Isolated Individualism',
        items: [
          'Neighbors living side-by-side without knowing each other’s names',
          'Individual financial strain, child-rearing fatigue, and loneliness',
          'Competitive workplace politics and scarcity mindset',
          'No shared sanctuary or generational safety net'
        ]
      },
      iyalvanam: {
        title: 'Consensus & Collective Circle',
        items: [
          'Children growing freely with nature, elders, and community guidance',
          'Shared cooking, festivals, collective harvests, and mutual care',
          'Consensus-based circular governance where every voice is heard',
          'Permanent land stewardship protected in perpetuity by Public Trusts'
        ]
      }
    }
  };

  const faqs = [
    {
      q: 'Where is Iyalvanam located and how can I visit?',
      a: 'Iyalvanam is situated in Dharmapuramadam village in the Tenkasi District of Tamil Nadu, right at the foothills of the Western Ghats adjoining the Agastiyar Malai Biosphere Reserve. Visitors must book an alignment visit in advance so our resident stewards can arrange a mindful orientation.'
    },
    {
      q: 'Who owns the land at Iyalvanam?',
      a: 'The land is held in perpetuity by the Iyalvanam Asset Trust (a public charitable trust) and managed operationally by the SEYON Operational Trust. No individual, developer, or corporation can buy, subdivide, or commercialize the sanctuary. It is protected forever for natural living.'
    },
    {
      q: 'What is the process for a family to join as full-time residents?',
      a: 'Residency follows a 4-step alignment pathway: initial discovery conversation, in-person day visit, 1-to-3 month transition stay to experience daily rhythms, and final mutual consensus welcoming by the community circle.'
    },
    {
      q: 'How is the ₹25 Lakhs infrastructure fund utilized?',
      a: '100% of donations and pledges directly fund permanent ecological assets: deepening the open heritage well, constructing the community hall (Koodam) using earth and bamboo, setting up solar micro-grids, and expanding our heirloom seed repository.'
    },
    {
      q: 'Is Iyalvanam connected to any political party or dogmatic religion?',
      a: 'No. Iyalvanam is strictly non-sectarian, non-political, and non-dogmatic. We welcome all truthful seekers, families, and stewards irrespective of background who resonate with Natural Law, reverence for Mother Earth, and peaceful co-existence.'
    },
    {
      q: 'What are the rules regarding plastic and modern electronics?',
      a: 'Iyalvanam is a strict Zero-Single-Use-Plastic Sanctuary. Modern communications are kept to functional designated areas, preserving our living areas and meditation groves for quiet mindfulness and natural connection.'
    }
  ];

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle warm backdrop glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[620px] bg-gradient-to-b from-[#EBEBE3] via-[#E6E6DC]/70 to-transparent rounded-3xl -z-10 opacity-80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#5A5A40]/10 border border-[#5A5A40]/20 text-[#5A5A40] text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B35C44] animate-ping" />
              <span>Dharmapuramadam, Tenkasi • Western Ghats Biosphere</span>
            </div>

            {/* Main Hero Headings */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-tamil text-[#5A5A40] leading-tight tracking-tight">
                “இயன்ற வரை இயற்கைக்கு திரும்புவோம்”
              </h2>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-[#4A3728] tracking-tight leading-[1.1]">
                Return to nature as much as possible.
              </h1>
            </div>

            {/* Supporting Concept */}
            <p className="text-lg sm:text-xl text-[#4A3728]/85 max-w-3xl mx-auto font-normal leading-relaxed">
              A sacred living sanctuary in the foothills of the Western Ghats, Tamil Nadu. Dedicated to regenerative agroforestry, chemical-free living, consensus community stewardship, and inner peace.
            </p>

            {/* Hero Direct CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                id="hero-visit-action"
                onClick={() => {
                  const el = document.getElementById('visit-booking-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-[#B35C44]/25 transition-all flex items-center gap-2 group"
              >
                <span>Schedule a Sanctuary Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-join-action"
                onClick={() => navigate('/join')}
                className="px-8 py-3.5 rounded-full bg-[#4A3728] hover:bg-[#3B2C20] text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-md transition-all flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-[#B35C44]" />
                <span>Join as Resident Family</span>
              </button>

              <button
                id="hero-support-action"
                onClick={() => navigate('/support')}
                className="px-8 py-3.5 rounded-full bg-[#EBEBE3] hover:bg-[#5A5A40] hover:text-white text-[#5A5A40] border border-[#5A5A40]/30 font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xs transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current opacity-80" />
                <span>Support ₹25L Goal</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#5A5A40]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B35C44]" />
                Protected by Public Asset Trust
              </span>
              <span className="flex items-center gap-1.5">
                <Sprout className="w-4 h-4 text-[#5A5A40]" />
                100% Zero-Chemical Sanctuary
              </span>
              <span className="flex items-center gap-1.5">
                <Mountain className="w-4 h-4 text-[#4A3728]" />
                Adjoining Agastiyar Biosphere
              </span>
            </div>
          </div>

          {/* Hero Tri-Card Showcase */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 sm:h-80 rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-md group border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                alt="Western Ghats sacred foothills"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728]/90 via-[#4A3728]/40 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#EBEBE3]">Sanctuary</span>
                <h3 className="text-xl font-bold font-serif">Western Ghats Foothills</h3>
                <p className="text-xs text-[#EBEBE3]/90 mt-1">Dharmapuramadam, Tenkasi District</p>
              </div>
            </div>

            <div className="relative h-72 sm:h-80 rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-md group border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                alt="Food forest and living permaculture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728]/90 via-[#4A3728]/40 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#EBEBE3]">Self-Reliance</span>
                <h3 className="text-xl font-bold font-serif">Food Forest & Permaculture</h3>
                <p className="text-xs text-[#EBEBE3]/90 mt-1">Heirloom seeds & zero-chemical living</p>
              </div>
            </div>

            <div className="relative h-72 sm:h-80 rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-md group border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
                alt="Conscious community circle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728]/90 via-[#4A3728]/40 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#EBEBE3]">Stewardship</span>
                <h3 className="text-xl font-bold font-serif">Consensus & Dual Trust</h3>
                <p className="text-xs text-[#EBEBE3]/90 mt-1">Iyalvanam Asset & SEYON Operational Trusts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVING METRICS & VITAL STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4A3728] text-[#F5F5F0] rounded-3xl p-8 sm:p-10 border border-[#5A5A40]/30 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#5A5A40]/30">
            
            <div className="space-y-1.5 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-white">
                4.5+
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B35C44]">
                Acres Protected
              </div>
              <p className="text-[11px] text-[#EBEBE3]/70">
                Western Ghats Foothills Sanctuary
              </p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-white">
                12
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B35C44]">
                Core Principles
              </div>
              <p className="text-[11px] text-[#EBEBE3]/70">
                Rooted in Immutable Natural Law
              </p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-white">
                100%
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B35C44]">
                Zero Chemical
              </div>
              <p className="text-[11px] text-[#EBEBE3]/70">
                Soil, Water, Food & Architecture
              </p>
            </div>

            <div className="space-y-1.5 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-white">
                ₹25 Lakhs
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B35C44]">
                Infrastructure Goal
              </div>
              <p className="text-[11px] text-[#EBEBE3]/70">
                ₹{(totalPledged).toLocaleString('en-IN')} Pledged so far
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE "WHY IYALVANAM?" COMPARISON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            The Fundamental Shift
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            Why We Choose to Return to Nature
          </h2>
          <p className="text-base text-[#5A5A40]">
            Comparing modern synthetic consumption with the restorative simplicity of natural communal living.
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {[
            { id: 'daily', label: 'Daily Rhythm & Health' },
            { id: 'food', label: 'Food & Nourishment' },
            { id: 'housing', label: 'Natural Architecture' },
            { id: 'community', label: 'Community & Culture' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedComparisonTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedComparisonTab === tab.id
                  ? 'bg-[#B35C44] text-white shadow-md shadow-[#B35C44]/20'
                  : 'bg-[#EBEBE3] text-[#4A3728] hover:bg-[#E0E0D6] border border-[#5A5A40]/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Modern City / Synthetic */}
          <div className="p-8 rounded-3xl bg-[#EBEBE3] border border-red-300/40 space-y-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#5A5A40]/15 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-700 bg-red-100 px-3 py-0.5 rounded-full">
                  Synthetic System
                </span>
                <h3 className="text-xl font-bold font-serif text-[#4A3728] mt-2">
                  {comparisonData[selectedComparisonTab].modern.title}
                </h3>
              </div>
            </div>
            <ul className="space-y-3.5">
              {comparisonData[selectedComparisonTab].modern.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A3728]/80 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Iyalvanam Natural Way */}
          <div className="p-8 rounded-3xl bg-[#EBEBE3] border-2 border-[#5A5A40] space-y-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A5A40]/10 rounded-full blur-2xl -z-0" />
            <div className="relative z-10 flex items-center justify-between border-b border-[#5A5A40]/20 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#5A5A40] px-3 py-0.5 rounded-full">
                  The Iyalvanam Way
                </span>
                <h3 className="text-xl font-bold font-serif text-[#4A3728] mt-2">
                  {comparisonData[selectedComparisonTab].iyalvanam.title}
                </h3>
              </div>
            </div>
            <ul className="relative z-10 space-y-3.5">
              {comparisonData[selectedComparisonTab].iyalvanam.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A3728] font-medium leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-[#5A5A40] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SANCTUARY TOUR & ZONE EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Virtual Land Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            Explore the Sanctuary Zones
          </h2>
          <p className="text-base text-[#5A5A40]">
            Click on any zone to discover how life, agriculture, water, and architecture function in harmony.
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 justify-start sm:justify-center">
          {sanctuaryZones.map((zone, idx) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedZone === idx
                  ? 'bg-[#4A3728] text-white shadow-md'
                  : 'bg-[#EBEBE3] text-[#4A3728] hover:bg-[#E0E0D6] border border-[#5A5A40]/15'
              }`}
            >
              <span>0{idx + 1}.</span>
              <span>{zone.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Zone Interactive Card */}
        <div className="bg-[#EBEBE3] rounded-3xl overflow-hidden border border-[#5A5A40]/15 shadow-md mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Image Showcase */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[440px]">
              <img
                src={sanctuaryZones[selectedZone].image}
                alt={sanctuaryZones[selectedZone].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1 rounded-full bg-[#4A3728]/90 backdrop-blur-xs text-[#F5F5F0] text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  {sanctuaryZones[selectedZone].tag}
                </span>
              </div>
            </div>

            {/* Zone Content & Details */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#B35C44] uppercase tracking-widest">
                  Zone 0{selectedZone + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A3728]">
                  {sanctuaryZones[selectedZone].title}
                </h3>
                <p className="text-sm font-tamil text-[#5A5A40] font-semibold">
                  {sanctuaryZones[selectedZone].tamil}
                </p>
                <p className="text-sm text-[#4A3728]/85 leading-relaxed pt-2">
                  {sanctuaryZones[selectedZone].description}
                </p>

                {/* Features Pill List */}
                <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {sanctuaryZones[selectedZone].features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5F5F0] text-xs text-[#4A3728] font-medium border border-[#5A5A40]/10">
                      <Check className="w-3.5 h-3.5 text-[#B35C44] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#5A5A40]/15 flex items-center justify-between">
                <button
                  onClick={() => navigate('/land')}
                  className="px-6 py-2.5 rounded-full bg-[#5A5A40] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#4A3728] transition-colors flex items-center gap-2"
                >
                  <span>Detailed Land Blueprints</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#5A5A40]">
                  Zone {selectedZone + 1} of 5
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. THE 12 CORE PRINCIPLES BENTO VISUALIZER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
              Foundational Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728] mt-2">
              The 12 Immutable Principles
            </h2>
          </div>
          <button
            onClick={() => navigate('/principles')}
            className="text-xs uppercase tracking-widest font-bold text-[#5A5A40] hover:text-[#4A3728] flex items-center gap-1.5"
          >
            <span>Read full philosophical breakdown</span>
            <ArrowRight className="w-4 h-4 text-[#B35C44]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {principles12.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 hover:border-[#5A5A40] hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-[#4A3728]/30 group-hover:text-[#B35C44] transition-colors">
                    {p.num}
                  </span>
                  <span className="text-[10px] font-bold text-[#5A5A40] font-tamil">
                    {p.tamil}
                  </span>
                </div>
                <h3 className="text-base font-bold font-serif text-[#4A3728]">
                  {p.title}
                </h3>
                <p className="text-xs text-[#4A3728]/80 leading-relaxed">
                  {p.summary}
                </p>
              </div>

              <blockquote className="pt-3 border-t border-[#5A5A40]/10 text-[11px] text-[#5A5A40] italic">
                “{p.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TRANSPARENT 4-STEP PATHWAY TO RESIDENCY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4A3728] text-[#F5F5F0] rounded-3xl p-8 sm:p-14 border border-[#5A5A40]/30 shadow-xl space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/20 px-4 py-1 rounded-full border border-[#B35C44]/30">
              Community Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              How a Family or Seeker Joins Iyalvanam
            </h2>
            <p className="text-sm text-[#EBEBE3]/80 leading-relaxed">
              We are not a commercial gated community or farm-plot seller. Joining is an intentional spiritual and life transition grounded in consensus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-[#3B2C20] p-6 rounded-2xl border border-[#5A5A40]/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#B35C44] text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold font-serif text-white">
                Initial Alignment
              </h3>
              <p className="text-xs text-[#EBEBE3]/80 leading-relaxed">
                Read our 12 Core Principles, reflect with your family, and submit the initial join inquiry form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#3B2C20] p-6 rounded-2xl border border-[#5A5A40]/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#5A5A40] text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold font-serif text-white">
                In-Person Day Visit
              </h3>
              <p className="text-xs text-[#EBEBE3]/80 leading-relaxed">
                Visit the sanctuary in Tenkasi, walk the living soil, share a natural meal, and converse with resident stewards.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#3B2C20] p-6 rounded-2xl border border-[#5A5A40]/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#5A5A40] text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold font-serif text-white">
                1–3 Month Immersion
              </h3>
              <p className="text-xs text-[#EBEBE3]/80 leading-relaxed">
                Stay as a transition seeker, participating in daily farm stewardship, cooking, and circular consensus rhythms.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#3B2C20] p-6 rounded-2xl border border-[#5A5A40]/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#B35C44] text-white flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="text-lg font-bold font-serif text-white">
                Consensus Welcoming
              </h3>
              <p className="text-xs text-[#EBEBE3]/80 leading-relaxed">
                The community circle reaches 100% consensus. The family is formally welcomed into permanent stewardship.
              </p>
            </div>

          </div>

          {/* CTA under steps */}
          <div className="text-center pt-4">
            <button
              onClick={() => navigate('/join')}
              className="px-8 py-3.5 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest transition-colors shadow-lg shadow-[#B35C44]/25"
            >
              Start Your Alignment Process →
            </button>
          </div>

        </div>
      </section>

      {/* 7. ₹25L INFRASTRUCTURE CAMPAIGN BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
                Crowdfunding & Infrastructure Goal
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
                Building the Ecological Foundation: ₹25,00,000
              </h2>
              <p className="text-sm text-[#4A3728]/80 leading-relaxed">
                All contributions are held in trust for the collective good. No funds go towards private profit or real estate speculation.
              </p>

              {/* Progress Bar */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-bold text-[#4A3728]">
                  <span>Pledged: ₹{(totalPledged).toLocaleString('en-IN')}</span>
                  <span>Goal: ₹{(targetGoal).toLocaleString('en-IN')}</span>
                </div>
                <div className="w-full h-3.5 bg-[#F5F5F0] rounded-full overflow-hidden border border-[#5A5A40]/20">
                  <div 
                    className="h-full bg-gradient-to-r from-[#5A5A40] to-[#B35C44] rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, Math.round((totalPledged / targetGoal) * 100))}%` }}
                  />
                </div>
                <div className="text-[11px] text-[#5A5A40] text-right font-semibold">
                  {Math.round((totalPledged / targetGoal) * 100)}% of target secured
                </div>
              </div>

              {/* Fund Allocations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-1">
                  <div className="font-bold text-xs text-[#4A3728]">Open Well & Stone Lining</div>
                  <div className="text-[11px] text-[#B35C44] font-semibold">₹5,00,000 Allocation</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-1">
                  <div className="font-bold text-xs text-[#4A3728]">Community Hall (Koodam)</div>
                  <div className="text-[11px] text-[#B35C44] font-semibold">₹10,00,000 Allocation</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-1">
                  <div className="font-bold text-xs text-[#4A3728]">Solar Micro-Grid & Rain Storage</div>
                  <div className="text-[11px] text-[#B35C44] font-semibold">₹6,00,000 Allocation</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-1">
                  <div className="font-bold text-xs text-[#4A3728]">Heirloom Seed Bank & Nursery</div>
                  <div className="text-[11px] text-[#B35C44] font-semibold">₹4,00,000 Allocation</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/support')}
                  className="px-6 py-3 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest transition-colors shadow-sm shadow-[#B35C44]/20"
                >
                  Pledge Support Online
                </button>
                <button
                  onClick={() => navigate('/support')}
                  className="px-6 py-3 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#4A3728] transition-colors"
                >
                  Offer Seeds / Non-Monetary Aid
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F5F5F0] p-8 rounded-3xl border border-[#5A5A40]/15 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#4A3728] text-white flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#B35C44]" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#4A3728]">
                Bank Account & Transparent Ledger
              </h3>
              <p className="text-xs text-[#5A5A40] leading-relaxed">
                All donations receive an official electronic receipt. Accounts are audited quarterly and published openly to our community circle.
              </p>
              
              <div className="p-4 bg-[#EBEBE3] rounded-2xl border border-[#5A5A40]/15 text-xs text-[#4A3728] space-y-1.5 font-mono">
                <div><strong>Account Name:</strong> SEYON OPERATIONAL TRUST</div>
                <div><strong>Account No:</strong> 50200088991234</div>
                <div><strong>IFSC Code:</strong> HDFC0001234</div>
                <div><strong>Branch:</strong> Tenkasi, Tamil Nadu</div>
              </div>

              <p className="text-[11px] text-[#5A5A40]">
                UPI: <code className="font-mono bg-[#EBEBE3] px-1.5 py-0.5 rounded border border-[#5A5A40]/15">seyon.trust@hdfcbank</code>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. QUICK INQUIRY & VISIT BOOKING FORM (DIRECT ON LANDING PAGE) */}
      <section id="visit-booking-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
                Plan Your Arrival
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#4A3728]">
                Schedule an Orientation & Day Visit
              </h2>
              <p className="text-sm text-[#4A3728]/80 leading-relaxed">
                Experience the living earth, taste fresh spring water, walk under native canopies, and speak directly with resident stewards.
              </p>

              <div className="space-y-3 text-xs text-[#4A3728]/85 pt-2">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B35C44] shrink-0" />
                  <span>Dharmapuramadam, Tenkasi District, Tamil Nadu – 627808</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#5A5A40] shrink-0" />
                  <span>Visitor Hours: 9:00 AM – 4:30 PM (Prior notice required)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#B35C44] shrink-0" />
                  <span>contact@iyalvanam.org</span>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-[#F5F5F0] p-6 sm:p-8 rounded-3xl border border-[#5A5A40]/15">
              {quickVisitSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#5A5A40]/15 text-[#5A5A40] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#4A3728]">
                    Visit Request Received
                  </h3>
                  <p className="text-xs text-[#5A5A40] max-w-md mx-auto leading-relaxed">
                    Thank you, {quickVisitForm.name}. A community steward will contact you via WhatsApp/Email within 24 hours to confirm your arrival date and provide travel guidelines.
                  </p>
                  <button
                    onClick={() => {
                      setQuickVisitSubmitted(false);
                      setQuickVisitForm({
                        name: '',
                        phone: '',
                        email: '',
                        purpose: 'Sanctuary Day Visit & Orientation',
                        preferredDate: '',
                        numberOfVisitors: 1,
                        notes: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-[#B35C44] text-white text-xs font-bold uppercase tracking-wider rounded-full"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickVisitSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#4A3728]">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={quickVisitForm.name}
                        onChange={(e) => setQuickVisitForm({ ...quickVisitForm, name: e.target.value })}
                        placeholder="e.g. S. Karthikeyan"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#EBEBE3]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#4A3728]">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={quickVisitForm.phone}
                        onChange={(e) => setQuickVisitForm({ ...quickVisitForm, phone: e.target.value })}
                        placeholder="e.g. +91 94440 12345"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#EBEBE3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#4A3728]">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={quickVisitForm.email}
                        onChange={(e) => setQuickVisitForm({ ...quickVisitForm, email: e.target.value })}
                        placeholder="e.g. karthi@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#EBEBE3]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#4A3728]">Number of People</label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={quickVisitForm.numberOfVisitors}
                        onChange={(e) => setQuickVisitForm({ ...quickVisitForm, numberOfVisitors: Number(e.target.value) })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#EBEBE3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#4A3728]">Preferred Date (Approx.)</label>
                      <input
                        type="date"
                        value={quickVisitForm.preferredDate}
                        onChange={(e) => setQuickVisitForm({ ...quickVisitForm, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#EBEBE3]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#4A3728]">Purpose of Visit</label>
                      <select
                        value={quickVisitForm.purpose}
                        onChange={(e) => setQuickVisitForm({ ...quickVisitForm, purpose: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#EBEBE3]"
                      >
                        <option value="Sanctuary Day Visit & Orientation">Sanctuary Day Visit & Orientation</option>
                        <option value="Exploring Full-Time Family Residency">Exploring Full-Time Family Residency</option>
                        <option value="Volunteer Farming / Tree Planting">Volunteer Farming / Tree Planting</option>
                        <option value="Natural Architecture & Seed Workshop">Natural Architecture & Seed Workshop</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#4A3728]">Notes / Questions</label>
                    <textarea
                      rows={3}
                      value={quickVisitForm.notes}
                      onChange={(e) => setQuickVisitForm({ ...quickVisitForm, notes: e.target.value })}
                      placeholder="Any specific questions or dietary requirements?"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#EBEBE3]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingQuickVisit}
                    className="w-full py-3.5 bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-colors shadow-sm shadow-[#B35C44]/20 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmittingQuickVisit ? <span>Submitting...</span> : <><span>Request Visit Confirmation</span> <Send className="w-3.5 h-3.5" /></>}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 9. LATEST CHRONICLES & FIELD DISPATCHES */}
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

      {/* 10. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Answers & Clarity
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#4A3728]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2 cursor-pointer transition-all"
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <div className="flex items-center justify-between font-bold text-sm text-[#4A3728] font-serif">
                <span>{faq.q}</span>
                {activeFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#B35C44]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#5A5A40]" />
                )}
              </div>
              {activeFaq === idx && (
                <p className="text-xs text-[#4A3728]/85 leading-relaxed pt-2 border-t border-[#5A5A40]/15 font-sans">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
