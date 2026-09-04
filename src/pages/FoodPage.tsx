import React, { useEffect } from 'react';
import { 
  Wheat, 
  Sprout, 
  UtensilsCrossed, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Leaf,
  HeartPulse,
  Sun
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';

interface FoodPageProps {
  navigate: (path: string) => void;
}

export const FoodPage: React.FC<FoodPageProps> = ({ navigate }) => {
  const { language } = useLanguage();
  const isTamil = language === 'ta';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const foodPillars = [
    {
      title: isTamil ? 'பாரம்பரிய நாட்டின தானியங்கள்' : 'Heirloom & Native Grains',
      subtitle: isTamil ? 'உயர் மருத்துவ குணம் கொண்ட நாட்டு அரிசி ரகங்கள்' : 'Ancient Heritage Rices & Millets',
      desc: isTamil 
        ? 'மாப்பிள்ளை சம்பா, கருங்குருவை, பூங்கார், தூயமல்லி போன்ற மரபு அரிசிகளும், சிறுதானியங்களும் மண்ணின் ஊட்டச்சத்தையும் உடலின் நோய் எதிர்ப்பு சக்தியையும் இயற்கையாக மீட்கின்றன.'
        : 'Cultivating native paddy varieties such as Mappillai Samba, Karunkuruvai, and Poongar alongside hardy drought-tolerant millets that revitalize gut microbiome and natural immunity without synthetic fertilizers.',
      points: isTamil
        ? ['பூச்சிக்கொல்லி மற்றும் ரசாயன உரங்கள் முற்றிலும் தவிர்ப்பு', 'மரபணு மாற்றப்படாத நாட்டின விதை சேகரிப்பு', 'மழைநீர் மற்றும் மலை ஊற்று நீர் பாசனம்']
        : ['100% free from synthetic agrochemicals', 'Non-GMO heritage open-pollinated seed preservation', 'Irrigated purely with mineral mountain runoff and rain']
    },
    {
      title: isTamil ? 'தீட்டப்படாத இயற்கை உணவு' : 'Unpolished & Raw Living Diet',
      subtitle: isTamil ? 'இயற்கையான தாதுக்கள் மற்றும் சத்துக்களின் முழுமை' : 'Whole Nutrition in Its Unaltered State',
      desc: isTamil
        ? 'இயற்கை தரும் உணவை அதிக வெப்பத்திலோ அல்லது செயற்கை வேதியியல் முறைகளிலோ அழிக்காமல், அதன் முழு ஆற்றலோடு உட்கொள்ளும் வாழ்க்கை முறை.'
        : 'Consuming food with minimal thermal degradation and zero chemical processing. Preserving vital enzymes, dietary fiber, trace minerals, and living bio-energy.',
      points: isTamil
        ? ['தேங்காய், வாழைப்பழம் மற்றும் பருவகால பழங்கள்', 'முளைகட்டிய பயறுகள் மற்றும் பாரம்பரிய கடுக்காய்/நெல்லிக்காய்', 'சுத்திகரிக்கப்படாத நாட்டு சர்க்கரை & கல் உப்பு']
        : ['Fresh coconut, indigenous bananas, and seasonal orchard fruits', 'Sprouted legumes and indigenous rasayanas (amla, haritaki)', 'Unrefined whole jaggery and sun-dried sea salt']
    },
    {
      title: isTamil ? 'சமூக இயற்கை சமையலறை' : 'Sanctuary Community Kitchen',
      subtitle: isTamil ? 'மண் பாண்டங்கள் மற்றும் விறகு அடுப்பு' : 'Earthen Cookware & Woodfire Cooking',
      desc: isTamil
        ? 'அலுமினியம், பிளாஸ்டிக் மற்றும் டெஃப்ளான் உபகரணங்களை முற்றிலும் தவிர்த்து, பாரம்பரிய சுடுமண் பாண்டங்கள் மற்றும் பித்தளை பாத்திரங்களில் தூய மலை நீரில் உணவு சமைக்கப்படுகிறது.'
        : 'Zero aluminum, Teflon, or plastics. Food is mindfully prepared in seasoned terracotta pots, cast iron, and soapstone stoves over slow woodfire embers.',
      points: isTamil
        ? ['இயற்கை முறையில் சமைக்கப்பட்ட எளிய சத்துணவு', 'கூட்டு சமையல் மற்றும் பகிர்வு கலாச்சாரம்', 'கழிவு நீர் மறுசுழற்சி மற்றும் வாழை இலை பயன்பாடு']
        : ['Wholesome plant-based seasonal community meals', 'Collective preparation and mindful dining circles', 'Biodegradable banana leaf dining and compost cycles']
    }
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Banner */}
      <section className="pt-12 sm:pt-16 pb-12 border-b border-[#D4C5A9]/60 bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECE6D8] text-[#8B5A2B] text-xs font-semibold uppercase tracking-wider">
              <Wheat className="w-3.5 h-3.5 text-[#2E4F2B]" />
              <span>{isTamil ? 'வாழ்வியல் தூண் 01' : 'Pillar of Living 01'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              {isTamil ? 'இயற்கை உணவு & விதை இறையாண்மை' : 'Natural Food & Seed Sovereignty'}
            </h1>

            <p className="text-sm font-medium text-[#8B5A2B]">
              {isTamil ? '“உணவே மருந்து — மண்ணின் சுவையே உடலின் நலம்”' : '“Food is Medicine — The Soil’s Vitality is Our Living Strength”'}
            </p>

            <p className="text-base sm:text-lg text-[#5C5044] leading-relaxed">
              {isTamil
                ? 'இயல்வனத்தின் உணவு தத்துவம் செயற்கையான பாக்கெட் உணவுகளையும், ரசாயன சாகுபடியையும் முற்றிலும் துறந்து, பூமித்தாய் தரும் இயற்கையான விளைச்சலை அதன் முழு தூய்மையோடு ஏற்பதாகும்.'
                : 'At Iyalvanam & Seyon, food is not a commodity—it is living communion with the earth. We cultivate, prepare, and share nourishment strictly aligned with ancestral agricultural laws and non-artificial living.'}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Three Food Dimensions */}
      <Container>
        <div className="space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5A2B] block">
              {isTamil ? 'உணவு முறைகள்' : 'Core Nourishment Principles'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
              {isTamil ? 'மண்ணிலிருந்து உடலுக்கு: 3 அடிப்படை கூறுகள்' : 'From Sacred Soil to Body: 3 Grounded Practices'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {foodPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#D4C5A9] flex flex-col justify-between space-y-6 shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4C5A9]/50">
                    <span className="text-xs font-mono font-bold text-[#8B5A2B]">0{idx + 1}</span>
                    <Wheat className="w-5 h-5 text-[#2E4F2B]" />
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
                    {isTamil ? 'நடைமுறை செயல்பாடுகள்' : 'Active Field Practices'}
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

      {/* 3. Community Kitchen & Seasonal Calendar */}
      <section className="bg-[#FAF8F3] py-16 border-y border-[#D4C5A9]/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECE6D8] text-[#2E4F2B] text-xs font-semibold uppercase tracking-wider">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>{isTamil ? 'சமையலறை ஒழுங்கு' : 'Kitchen Stewardship'}</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B] leading-tight">
                {isTamil ? 'இயற்கை அன்னதானமும் கூட்டு உணவும்' : 'Nourishment as Offering: The Sacred Hearth'}
              </h2>

              <p className="text-sm sm:text-base text-[#5C5044] leading-relaxed">
                {isTamil
                  ? 'தென்காசி சிவசைலம் மற்றும் தர்மபுரமடம் மையங்களில் நடைபெறும் மாதந்திர முகாம்களில் அனைவரும் ஒன்றாக அமர்ந்து இயற்கை உணவை உண்டு அதன் ஆழமான மாற்றத்தை உணர்கின்றனர்.'
                  : 'During SEYON nature camps, participants experience the simplicity of banana-leaf dining, cold-pressed oils, native coconut water, and wild greens collected straight from the sanctuary hedgerows.'}
              </p>

              <div className="pt-3 flex flex-wrap gap-4">
                <Button variant="primary" size="md" onClick={() => navigate('/join')}>
                  {isTamil ? 'முகாம்களில் இணையுங்கள்' : 'Experience in Camps'}
                </Button>
                <Button variant="outline" size="md" onClick={() => navigate('/health')}>
                  {isTamil ? 'இயற்கை நல்வாழ்வு பகுதி →' : 'Explore Living Health →'}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#ECE6D8]/60 border border-[#D4C5A9] space-y-4">
              <h3 className="font-bold text-base text-[#2E4F2B] border-b border-[#D4C5A9]/60 pb-2">
                {isTamil ? 'இயற்கை உணவின் 4 நன்மைகள்' : '4 Pillars of the Natural Diet'}
              </h3>
              
              <div className="space-y-3 text-xs text-[#5C5044]">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'குடல் நலம்:' : 'Microbiome Health:'}</strong> {isTamil ? 'செரிமான உறுப்புகளுக்கு எவ்வித சுமையுமின்றி சீரான இயக்கம்.' : 'Zero digestive strain and rapid cell regeneration.'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'மன அமைதி:' : 'Mental Clarity:'}</strong> {isTamil ? 'உணவு முறையில் ஏற்படும் தூய்மை ஆழ்ந்த தூக்கத்தையும் அமைதியையும் தருகிறது.' : 'Sattvic living food creates deep nervous system calmness.'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'நோய் எதிர்ப்பு:' : 'Natural Immunity:'}</strong> {isTamil ? 'மண்ணின் இயற்கையான சத்துக்கள் நோய்களை வேரிலிருந்து குணப்படுத்துகின்றன.' : 'Rich phytonutrients that foster genuine long-term resilience.'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'சுற்றுச்சூழல் தற்சார்பு:' : 'Ecological Harmony:'}</strong> {isTamil ? 'குறைந்த நீர்த் தேவை மற்றும் கழிவற்ற இயற்கை சுழற்சி.' : 'Zero packaging waste, zero synthetic inputs, localized sovereignty.'}</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};
