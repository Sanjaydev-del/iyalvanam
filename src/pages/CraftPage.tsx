import React, { useEffect } from 'react';
import { 
  Hammer, 
  Sprout, 
  Home, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  TreePine,
  Feather
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';

interface CraftPageProps {
  navigate: (path: string) => void;
}

export const CraftPage: React.FC<CraftPageProps> = ({ navigate }) => {
  const { language } = useLanguage();
  const isTamil = language === 'ta';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const craftPillars = [
    {
      title: isTamil ? 'மண் & சுண்ணக் கட்டுமானம்' : 'Cob, Rammed Earth & Lime Masonry',
      subtitle: isTamil ? 'சுவாசிக்கும் இயற்கை வீடுகள்' : 'Breathable, Non-Toxic Architecture',
      desc: isTamil
        ? 'சிமெண்ட் மற்றும் கான்கிரீட் இல்லாத, உள்ளூர் களிமண், மணல், வைக்கோல் மற்றும் பாரம்பரிய நீற்றுச்சுண்ணாம்பு கொண்டு கட்டப்படும் இயற்கை வீடுகள் காலநிலைக்கு ஏற்ப வெப்பத்தைத் தணித்து குளுமை தருகின்றன.'
        : 'Building without industrial Portland cement. Utilizing local unbaked earth, straw binders, and hydraulic lime plaster to craft thermally self-regulating homes that breathe with the seasons and return to earth with zero environmental debt.',
      points: isTamil
        ? ['உள்ளூர் மண் மற்றும் பாரம்பரிய கட்டுமானப் பொருட்கள்', 'சுண்ணாம்பு பூச்சு மூலம் பூஞ்சை மற்றும் கிருமித் தடுப்பு', 'பூஜ்ஜிய கார்பன் உமிழ்வு மற்றும் மிகக் குறைந்த மின்சாரத் தேவை']
        : ['100% biodegradable and non-toxic materials', 'Natural indoor temperature buffering in summer/monsoon', 'Zero chemical off-gassing and electromagnetic grounding']
    },
    {
      title: isTamil ? 'மூங்கில் & மரக் கைவினை' : 'Bamboo Carpentry & Timber Joinery',
      subtitle: isTamil ? 'மீள்தன்மை கொண்ட இயற்கை மூலப்பொருட்கள்' : 'Regenerative Structural Materials',
      desc: isTamil
        ? 'விரைவாக வளரும் நாட்டின மூங்கில் மற்றும் விழுந்த மரங்களைக் கொண்டு கூரைகள், நிழல் கூடங்கள், மற்றும் தளபாடங்களை உருவாக்கும் கைவினை கலை.'
        : 'Crafting lightweight pergolas, roofs, furniture, and living pavilions using treated native bamboo and salvaged local hardwoods, honoring ancient interlocking timber carpentry.',
      points: isTamil
        ? ['இயற்கை முறையில் பூச்சி வண்டுகள் அணுகா வண்ணம் மூங்கில் பதப்படுத்துதல்', 'ஆணி இல்லா பாரம்பரிய மர இணைப்புகள்', 'நீடித்து உழைக்கும் எளிய கைவினை வடிவமைப்பு']
        : ['Natural borax/salt preservation treatments', 'Traditional interlocking joinery without excess metal fasteners', 'Long-lasting, repairable, locally sovereign design']
    },
    {
      title: isTamil ? 'உழைப்பின் புனிதம் & தற்சார்பு' : 'Labor as Sacred Offering & Sovereignty',
      subtitle: isTamil ? 'உடல் உழைப்பின் மேன்மை' : 'Reclaiming Physical Dignity',
      desc: isTamil
        ? 'உழைப்பை கூலிக்கான சுமையாகப் பார்க்காமல், உடலையும் மனதையும் செப்பனிடும் ஆன்மீகச் செயல்பாடாகவும், தன்னிறைவடைந்த கிராமப் பொருளாதாரத்தின் தூணாகவும் போற்றுதல்.'
        : 'Rejecting alienated wage labor in favor of joyful, purposeful collective sweat. Engaging hands and spine in direct physical creation—gardening, hauling, weaving, crafting, and building.',
      points: isTamil
        ? ['கூட்டு உழைப்பு (Shramadaan) மற்றும் சமூகப் பகிர்வு', 'கைவினைஞர்களுக்கான மரியாதை மற்றும் வாழ்வாதார பாதுகாப்பு', 'இயற்கையோடு இணைந்த தற்சார்புப் பொருளாதாரம்']
        : ['Shramadaan (sacred collective physical work circles)', 'Revival of indigenous weaving, pottery, and blacksmithing', 'Grounded dignity outside the corporate cubicle']
    }
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Banner */}
      <section className="pt-12 sm:pt-16 pb-12 border-b border-[#D4C5A9]/60 bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECE6D8] text-[#8B5A2B] text-xs font-semibold uppercase tracking-wider">
              <Hammer className="w-3.5 h-3.5 text-[#2E4F2B]" />
              <span>{isTamil ? 'வாழ்வியல் தூண் 03' : 'Pillar of Living 03'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              {isTamil ? 'புனித உழைப்பு, கைவினை & இயற்கைக் கட்டுமானம்' : 'Sacred Work, Craft & Natural Architecture'}
            </h1>

            <p className="text-sm font-medium text-[#8B5A2B]">
              {isTamil ? '“உழைப்பே தவம் — கைகளால் படைக்கப்படும் வாழ்வியல்”' : '“Work is Devotion — A Life Crafted by Real Hands and Honest Sweat”'}
            </p>

            <p className="text-base sm:text-lg text-[#5C5044] leading-relaxed">
              {isTamil
                ? 'இயல்வனத்தில் நாம் நுகர்வோராக மட்டும் வாழ்வதில்லை; படைப்பாளர்களாக மாறுகிறோம். நம் வீடுகளை நாமே மண்ணால் கட்டுகிறோம், நம் உணவை நாமே பயிரிடுகிறோம், நம் கைவினைகளால் தற்சார்பு வாழ்வை உருவாக்குகிறோம்.'
                : 'In a world dominated by synthetic factories and screen-bound isolation, we reclaim the sacred dignity of physical labor. Through earthen masonry, bamboo construction, and artisanal crafts, we build sovereign infrastructure that lasts generations.'}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Three Craft Pillars */}
      <Container>
        <div className="space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5A2B] block">
              {isTamil ? 'கட்டுமானக் கோட்பாடுகள்' : 'Architectural & Craft Protocols'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
              {isTamil ? 'இயற்கையோடு இணைந்த 3 கைவினைத் தூண்கள்' : '3 Pillars of Grounded Craftsmanship'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {craftPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#D4C5A9] flex flex-col justify-between space-y-6 shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4C5A9]/50">
                    <span className="text-xs font-mono font-bold text-[#8B5A2B]">0{idx + 1}</span>
                    {idx === 0 ? <Home className="w-5 h-5 text-[#8B5A2B]" /> : idx === 1 ? <Layers className="w-5 h-5 text-[#2E4F2B]" /> : <Hammer className="w-5 h-5 text-[#8B5A2B]" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E4F2B] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8B5A2B] mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D4C5A9]/40 space-y-2">
                  <span className="text-[11px] font-bold text-[#2E4F2B] uppercase tracking-wider block">
                    {isTamil ? 'முக்கிய சிறப்புகள்' : 'Field Characteristics'}
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#241D17]">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B] shrink-0 mt-1.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 3. Sanctuary Workshops & Learning */}
      <section className="bg-[#FAF8F3] py-16 border-y border-[#D4C5A9]/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECE6D8] text-[#2E4F2B] text-xs font-semibold uppercase tracking-wider">
                <Home className="w-3.5 h-3.5" />
                <span>{isTamil ? 'களப் பட்டறைகள்' : 'Hands-On Workshops'}</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B] leading-tight">
                {isTamil ? 'மண் வீடுகளையும் மூங்கில் கூடங்களையும் ஒன்றாகக் கட்டுவோம்' : 'Learn by Doing: Natural Building Apprenticeships'}
              </h2>

              <p className="text-sm sm:text-base text-[#5C5044] leading-relaxed">
                {isTamil
                  ? 'தென்காசி மையத்தில் நடைபெறும் பயிற்சிகளில் நீங்களும் பங்கேற்று உங்கள் கைகளால் மண்ணைப் பிசைந்து, சுண்ணாம்பு குழைத்து, மூங்கில் பின்னி இயற்கை வீடு கட்டும் கலையை நேரடியாகக் கற்கலாம்.'
                  : 'Join practical workshops at Dharmapuramadam and Sivasailam. Learn soil testing, adobe brickmaking, bamboo harvesting, and earthen flooring from experienced traditional guild builders.'}
              </p>

              <div className="pt-3 flex flex-wrap gap-4">
                <Button variant="primary" size="md" onClick={() => navigate('/join')}>
                  {isTamil ? 'பயிற்சிகளில் இணையுங்கள்' : 'Join a Workshop'}
                </Button>
                <Button variant="outline" size="md" onClick={() => navigate('/sanctuary')}>
                  {isTamil ? 'புனித நிலம் & வரைபடம் →' : 'View Sanctuary Land →'}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#ECE6D8]/60 border border-[#D4C5A9] space-y-4">
              <h3 className="font-bold text-base text-[#2E4F2B] border-b border-[#D4C5A9]/60 pb-2">
                {isTamil ? 'இயற்கைக் கட்டுமானத்தின் 4 மேன்மைகள்' : 'Why Build with Earth & Bamboo'}
              </h3>
              
              <div className="space-y-3 text-xs text-[#5C5044]">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'இயற்கை குளுமை:' : 'Thermal Comfort:'}</strong> {isTamil ? 'கோடையில் குளிர்ச்சியாகவும் மழைக் காலத்தில் இதமாகவும் இருக்கும்.' : 'Stays naturally 5-7°C cooler in tropical summer heat.'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'நச்சுத்தன்மை இல்லாமை:' : 'Zero Toxicity:'}</strong> {isTamil ? 'செயற்கை வண்ணப்பூச்சுகள் மற்றும் ரசாயனங்கள் அற்ற சுவாசிக்கும் சுவர்கள்.' : 'No synthetic paints, volatile organic compounds, or toxic glues.'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'தலைமுறை தற்சார்பு:' : 'Local Empowerment:'}</strong> {isTamil ? 'பணச் சுமையின்றி உள்ளூர் மூலப்பொருட்களோடு சுயசார்பு உருவாக்கம்.' : 'Relies on local earth and ancestral community skillsets.'}</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};
