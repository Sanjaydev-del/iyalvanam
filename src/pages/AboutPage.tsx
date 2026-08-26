import React from 'react';
import { 
  Sprout, 
  TreePine, 
  Heart, 
  Compass, 
  Sun, 
  Droplets, 
  Users, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Leaf
} from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Header Banner */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
          About Iyalvanam • எங்களை பற்றி
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A3728]">
          A Sacred Return to Harmony, Forest & Community
        </h1>
        <p className="text-lg text-[#4A3728]/80 max-w-3xl mx-auto leading-relaxed">
          “இயன்ற வரை இயற்கைக்கு திரும்புவோம்” – We do not seek to reinvent life through technology or complex ideologies; we simply return to the natural laws that have sustained living ecosystems for millennia.
        </p>
      </section>

      {/* Vision & Mission Card */}
      <section className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 shadow-xs">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 text-[#4A3728]">
            <Compass className="w-8 h-8 text-[#B35C44]" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Our Foundational Vision
            </h2>
          </div>
          <blockquote className="p-6 sm:p-8 bg-[#F5F5F0] rounded-2xl border-l-4 border-[#B35C44] text-lg sm:text-xl font-serif text-[#4A3728] leading-relaxed shadow-xs">
            “To co-create a self-reliant, conscious nature community in the Western Ghats where human beings live in total harmony with natural laws, ancestral wisdom, and the forest ecosystem, free from artificial constructs, fostering inner liberation, collective abundance, and ecological regeneration.”
          </blockquote>
          <div className="text-sm text-[#5A5A40] leading-relaxed space-y-3 font-tamil">
            <p className="font-semibold text-base text-[#4A3728]">
              நோக்கம்: செயற்கையான வாழ்க்கை முறையிலிருந்து விடுபட்டு, இயற்கையின் விதிகளுக்கு ஏற்ப மனித மனம், உடல், சமூகம் மற்றும் பூமி ஆகியவற்றை ஒருங்கிணைத்து முழுமையான அமைதியோடும் தற்சார்போடும் வாழ்வதே இயல்வனத்தின் இலக்கு.
            </p>
          </div>
        </div>
      </section>

      {/* Meaning of the Name */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Etymology & Sacred Roots
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            The Meaning of Iyalvanam
          </h2>
          <p className="text-base text-[#5A5A40]">
            Every word in our name carries deep philosophical, linguistic, and ecological resonance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-3 hover:border-[#5A5A40] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F5F0] text-[#4A3728] flex items-center justify-center font-bold font-serif text-xl shadow-xs">
              இயல்
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#4A3728] font-serif">Iyal (இயல்)</h3>
              <p className="text-xs font-semibold text-[#5A5A40]">Natural Essence & Spontaneity</p>
            </div>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Refers to intrinsic nature, innate truth, that which is unmodified, effortless, and fundamentally aligned with cosmic order (இயல்பு).
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-3 hover:border-[#5A5A40] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F5F0] text-[#4A3728] flex items-center justify-center font-bold font-serif text-xl shadow-xs">
              வனம்
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#4A3728] font-serif">Vanam (வனம்)</h3>
              <p className="text-xs font-semibold text-[#5A5A40]">Living Forest & Canopy</p>
            </div>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              The forest as the greatest living temple, teacher, and shelter. An ecosystem of infinite species thriving without human manipulation.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-3 hover:border-[#5A5A40] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F5F0] text-[#4A3728] flex items-center justify-center font-bold font-serif text-xl shadow-xs">
              வாழ்வு
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#4A3728] font-serif">Iyarkai Vazhviyal</h3>
              <p className="text-xs font-semibold text-[#5A5A40]">Conscious Natural Living</p>
            </div>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Not just intellectual theory, but living practice: organic nourishment, clean breathing, circadian sleep, and non-toxic dwellings.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-3 hover:border-[#5A5A40] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F5F0] text-[#4A3728] flex items-center justify-center font-bold font-serif text-xl shadow-xs">
              கூடம்
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#4A3728] font-serif">Koodam (கூடம்)</h3>
              <p className="text-xs font-semibold text-[#5A5A40]">Sacred Space of Gathering</p>
            </div>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              A community hearth where collective consensus, collaborative farming, learning, and celebration unite kindred hearts.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles: The Five Foundations */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Five Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A3728]">
            The Five Foundations of Iyalvanam
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            {
              title: '1. Non-Artificial Living (செயற்கையற்ற வாழ்வியல்)',
              desc: 'We minimize synthetic dependencies across all dimensions: constructing breathable earthen shelters from local mud, stones, and lime; avoiding chemical fertilizers or pesticides; eating unadulterated fresh seasonal produce; and eliminating unnecessary electronic and psychological noise.',
            },
            {
              title: '2. Interconnected Life (இணைந்த பெருவாழ்வு)',
              desc: 'No organism exists in isolation. Our well-being is directly tied to the health of the soil microbes, the purity of Western Ghats mountain groundwater, the birds and pollinators in the forest canopy, and the mutual support of our fellow community members.',
            },
            {
              title: '3. Collective Existence (கூட்டு வாழ்வியல்)',
              desc: 'Shifting from competitive, private consumerism toward shared resources, communal cooking, collective childcare, shared tool sheds, and joint stewardship of the land without private individual ownership.',
            },
            {
              title: '4. Return to Natural State (இயல்பு நிலைக்கு திரும்புதல்)',
              desc: 'Restoring our biological and mental health through daily direct contact with the five elements (Pancha Bhootas): morning sun absorption, barefoot grounding on living earth, drinking clean unchlorinated well water, and periods of silence.',
            },
            {
              title: '5. Forest as a Model (காடே வழிகாட்டி)',
              desc: 'Natural climax forests require no plowing, chemical spraying, or artificial energy to produce abundant fruit, timber, clean air, and water. By modeling our agricultural systems and community structures on forest ecology, we achieve perennial resilience and regenerative abundance.',
            },
          ].map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2">
              <h3 className="text-lg font-bold text-[#4A3728] font-serif">{f.title}</h3>
              <p className="text-sm text-[#4A3728]/80 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spiritual Evolution & Ethics */}
      <section className="bg-[#4A3728] text-[#F5F5F0] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/30 space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EBEBE3] bg-[#B35C44]/30 px-4 py-1 rounded-full border border-[#B35C44]/40">
            Conscious Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            The Spiritual Foundation of Our Transition
          </h2>
          <p className="text-[#EBEBE3]/90 text-sm leading-relaxed">
            The movement from conventional modern society to Iyalvanam is fundamentally a spiritual and psychological evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#3B2C20] border border-[#5A5A40]/40 space-y-3 text-center">
            <div className="text-[#B35C44] font-bold text-base">Fear → Love</div>
            <div className="text-xs font-tamil text-[#EBEBE3]">பயம் → அன்பு</div>
            <p className="text-xs text-[#EBEBE3]/80 leading-relaxed">
              Moving beyond anxiety about scarcity, financial survival, and social prestige into trust, generosity, and loving connection with all life.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#3B2C20] border border-[#5A5A40]/40 space-y-3 text-center">
            <div className="text-[#B35C44] font-bold text-base">Separation → Unity</div>
            <div className="text-xs font-tamil text-[#EBEBE3]">பிரிவு → ஒருமைப்பாடு</div>
            <p className="text-xs text-[#EBEBE3]/80 leading-relaxed">
              Dissolving the illusion that humans are separate from or superior to the earth, recognizing that harm to nature is direct harm to ourselves.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#3B2C20] border border-[#5A5A40]/40 space-y-3 text-center">
            <div className="text-[#B35C44] font-bold text-base">Survival → Creation</div>
            <div className="text-xs font-tamil text-[#EBEBE3]">உயிர்வாழ்தல் → படைப்பு</div>
            <p className="text-xs text-[#EBEBE3]/80 leading-relaxed">
              Shifting from mechanical, unfulfilling employment to expressing our unique innate skills in service of art, soil, community, and joy.
            </p>
          </div>
        </div>

        {/* Foundation of Conduct */}
        <div className="pt-6 border-t border-[#5A5A40]/30 max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-bold font-serif text-center text-[#EBEBE3]">
            Foundation of Conduct & Community Ethics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#EBEBE3]/90">
            <div className="flex items-start gap-2 p-3 bg-[#3B2C20] rounded-xl border border-[#5A5A40]/40">
              <ShieldCheck className="w-4 h-4 text-[#B35C44] shrink-0 mt-0.5" />
              <span><strong>Ahimsa (Non-Harm)</strong>: Total non-violence towards all sentient beings, soil fauna, and fellow community members.</span>
            </div>
            <div className="flex items-start gap-2 p-3 bg-[#3B2C20] rounded-xl border border-[#5A5A40]/40">
              <ShieldCheck className="w-4 h-4 text-[#B35C44] shrink-0 mt-0.5" />
              <span><strong>Satya (Truth & Transparency)</strong>: Absolute honesty in communication, trust governance, and financial stewardship.</span>
            </div>
            <div className="flex items-start gap-2 p-3 bg-[#3B2C20] rounded-xl border border-[#5A5A40]/40">
              <ShieldCheck className="w-4 h-4 text-[#B35C44] shrink-0 mt-0.5" />
              <span><strong>Aparigraha (Non-Possession)</strong>: No individual land ownership; all community assets held in trust for future generations.</span>
            </div>
            <div className="flex items-start gap-2 p-3 bg-[#3B2C20] rounded-xl border border-[#5A5A40]/40">
              <ShieldCheck className="w-4 h-4 text-[#B35C44] shrink-0 mt-0.5" />
              <span><strong>Mindful Speech & Silence</strong>: Honoring designated periods of collective silence, gratitude, and mindful listening.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="text-center pt-6 space-y-4">
        <h3 className="text-2xl font-serif font-bold text-[#4A3728]">
          Ready to Walk This Path with Us?
        </h3>
        <p className="text-sm text-[#5A5A40] max-w-xl mx-auto">
          Explore our guiding principles or begin your alignment journey with our community circle.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button
            onClick={() => navigate('/principles')}
            className="px-8 py-3.5 rounded-full bg-[#5A5A40] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#4A3728] transition-colors"
          >
            Explore Guiding Principles
          </button>
          <button
            onClick={() => navigate('/join')}
            className="px-8 py-3.5 rounded-full bg-[#B35C44] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#9B4F3B] transition-colors shadow-sm shadow-[#B35C44]/20"
          >
            How to Join Iyalvanam
          </button>
        </div>
      </section>
    </div>
  );
};
