import React, { useEffect } from 'react';
import { 
  HeartPulse, 
  Sun, 
  Droplets, 
  Moon, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Flame
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';

interface HealthPageProps {
  navigate: (path: string) => void;
}

export const HealthPage: React.FC<HealthPageProps> = ({ navigate }) => {
  const { language } = useLanguage();
  const isTamil = language === 'ta';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const healthRhythms = [
    {
      title: isTamil ? 'சூரியக் கடிகார வாழ்வியல்' : 'Solar & Circadian Biology',
      subtitle: isTamil ? 'உயிரியல் கடிகாரத்துடன் ஒன்றிணைதல்' : 'Synchronizing with Natural Light Cycles',
      desc: isTamil
        ? 'சூரிய உதயத்தில் விழித்தெழுந்து, சூரிய ஒளியை உடலின் தோலில் ஏற்பதும், அந்தி சாயும் வேளையில் உணவை முடித்து இரவின் அமைதியில் ஆழ்ந்த தூக்கத்திற்கு செல்வதும் நோயற்ற வாழ்வின் அடிப்படை.'
        : 'Aligning wakefulness, eating, and metabolic repair with natural solar elevation. Harnessing early infrared/UV wavelengths, setting circadian hormone release, and eliminating night blue-light pollution.',
      points: isTamil
        ? ['பிரம்ம முகூர்த்த விழிப்பு மற்றும் அதிகாலை சூரியக் குளியல்', 'சூரிய அஸ்தமனத்திற்கு முன் இரவு உணவு நிறைவு', 'செயற்கை நீல ஒளி மற்றும் திரை பயன்பாடு குறைப்பு']
        : ['Dawn rising and morning infrared solar exposure', 'Evening meal before twilight for optimal digestion', 'Elimination of synthetic blue screen disturbance']
    },
    {
      title: isTamil ? 'தூய திறந்த கிணற்று நீர்' : 'Living Open-Well Hydration',
      subtitle: isTamil ? 'மலை ஊற்று நீரின் இயற்கை தாதுக்கள்' : 'Mineral-Rich Mountain Aquifer Water',
      desc: isTamil
        ? 'ஆர்.ஓ (RO) முறையில் சத்துக்கள் அழிக்கப்படாத, பிளாஸ்டிக் பாட்டில்களில் அடைக்கப்படாத, மேற்குத் தொடர்ச்சி மலை அடுக்கிலிருந்து ஊறும் மூலிகை தாதுக்கள் நிறைந்த திறந்த கிணற்று நீர்.'
        : 'Rejecting dead, demineralized RO filtration and microplastic bottles. Sourcing vital, structured groundwater filtered through granite mountain fissures and energized by open atmospheric contact.',
      points: isTamil
        ? ['தாமிர மற்றும் மண் பாண்டங்களில் நீர் சேமிப்பு', 'இயற்கையான காரத்தன்மை மற்றும் கனிமச் சமநிலை', 'தினசரி போதிய இயற்கை நீர் அருந்துதல்']
        : ['Terracotta and copper vessel storage', 'Natural alkaline pH and living electromagnetic vitality', 'Hydration timed between meals to protect digestive fire']
    },
    {
      title: isTamil ? 'வெறும் கால் பூமித் தொடர்பு' : 'Barefoot Earth Grounding',
      subtitle: isTamil ? 'பூமித்தாயின் மின்காந்த ஆற்றல்' : 'Direct Electron Exchange with Soil',
      desc: isTamil
        ? 'ரப்பர் காலணிகளை விடுத்து, மண், புல்வெளி மற்றும் ஈர நிலத்தில் வெறும் கால்களோடு நடப்பது உடலின் வீக்கங்களை (Inflammation) குறைத்து நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது.'
        : 'Walking barefoot on mineral loam, morning dew, and forest floors to conduct antioxidant terrestrial electrons into the bloodstream, resolving chronic inflammation and stabilizing autonomic tone.',
      points: isTamil
        ? ['தினசரி 45 நிமிட மண் நடைப் பயிற்சி', 'மண் குளியல் மற்றும் மூலிகை உறைவிட அனுபவம்', 'உடல் சோர்வு மற்றும் மன அழுத்த முழுமை நீக்கம்']
        : ['Daily barefoot walking along sanctuary forest trails', 'Traditional therapeutic mud packs and cooling wraps', 'Rapid reduction of cortisol and nervous system tension']
    }
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Banner */}
      <section className="pt-12 sm:pt-16 pb-12 border-b border-[#D4C5A9]/60 bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECE6D8] text-[#8B5A2B] text-xs font-semibold uppercase tracking-wider">
              <HeartPulse className="w-3.5 h-3.5 text-[#2E4F2B]" />
              <span>{isTamil ? 'வாழ்வியல் தூண் 02' : 'Pillar of Living 02'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              {isTamil ? 'இயற்கை நல்வாழ்வு & உடல் தற்சார்பு' : 'Living Health & Sovereign Immunity'}
            </h1>

            <p className="text-sm font-medium text-[#8B5A2B]">
              {isTamil ? '“மருந்தில்லா வாழ்வியல் — இயற்கையே மாபெரும் மருத்துவர்”' : '“Life Without Artificial Drugs — Nature is the Supreme Healer”'}
            </p>

            <p className="text-base sm:text-lg text-[#5C5044] leading-relaxed">
              {isTamil
                ? 'நோய்கள் என்பது உடலின் எதிரியல்ல; அவை உடலானது தவறான வாழ்க்கை முறையிலிருந்து தன்னைத்தானே தூய்மைப்படுத்திக் கொள்ளும் இயற்கை செயல்முறை. நாம் இயற்கையின் விதிகளுக்கு இணங்கும்போது உடல் இயல்பாகவே முழுமையான ஆரோக்கியத்தை அடைகிறது.'
                : 'True health cannot be manufactured in a laboratory. It is the spontaneous outcome of living in harmony with the sun, breathing unpolluted mountain air, drinking living groundwater, and allowing the human body to heal itself.'}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Rhythms Grid */}
      <Container>
        <div className="space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5A2B] block">
              {isTamil ? 'நல்வாழ்வு விதிகள்' : 'Natural Health Protocols'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
              {isTamil ? 'செயற்கையற்ற நல்வாழ்வின் 3 தூண்கள்' : '3 Fundamentals of Natural Well-Being'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {healthRhythms.map((rhythm, idx) => (
              <div 
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#D4C5A9] flex flex-col justify-between space-y-6 shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4C5A9]/50">
                    <span className="text-xs font-mono font-bold text-[#8B5A2B]">0{idx + 1}</span>
                    {idx === 0 ? <Sun className="w-5 h-5 text-[#8B5A2B]" /> : idx === 1 ? <Droplets className="w-5 h-5 text-[#2E4F2B]" /> : <HeartPulse className="w-5 h-5 text-[#8B5A2B]" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E4F2B] leading-snug">
                      {rhythm.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8B5A2B] mt-0.5">
                      {rhythm.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                    {rhythm.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D4C5A9]/40 space-y-2">
                  <span className="text-[11px] font-bold text-[#2E4F2B] uppercase tracking-wider block">
                    {isTamil ? 'தினசரி நடைமுறைகள்' : 'Daily Regenerative Rhythms'}
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#241D17]">
                    {rhythm.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E4F2B] shrink-0 mt-1.5" />
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

      {/* 3. Experiential Camps Highlight */}
      <section className="bg-[#FAF8F3] py-16 border-y border-[#D4C5A9]/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ECE6D8] text-[#2E4F2B] text-xs font-semibold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5" />
                <span>{isTamil ? 'கள அனுபவங்கள்' : 'SEYON Field Camps'}</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B] leading-tight">
                {isTamil ? '50+ இயற்கை நல்வாழ்வு முகாம்கள்' : '50+ Experiential Camps & 1,000+ Participants'}
              </h2>

              <p className="text-sm sm:text-base text-[#5C5044] leading-relaxed">
                {isTamil
                  ? 'சேயோன் இயற்கை வாழ்வியல் இயக்கம் மூலம் நடத்தப்படும் 3 நாள் முகாம்களில் பங்கேற்று, மக்கள் இரத்த அழுத்தம், சர்க்கரை மற்றும் உடல் பருமன் போன்ற நாள்பட்ட பிரச்சனைகளிலிருந்து இயற்கையாக விடுபடும் விழிப்புணர்வை பெறுகின்றனர்.'
                  : 'Through hands-on immersive weekends at Sivasailam, seekers step completely away from pharmaceutical dependency, corporate stress, and synthetic routines into direct somatic vitality.'}
              </p>

              <div className="pt-3 flex flex-wrap gap-4">
                <Button variant="primary" size="md" onClick={() => navigate('/leadership/co-founder')}>
                  {isTamil ? 'சண்முகவேல் அவர்களின் மீட்சி கதை' : 'Read Shanmugavel’s Story'}
                </Button>
                <Button variant="outline" size="md" onClick={() => navigate('/craft')}>
                  {isTamil ? 'கைவினை & உழைப்பு பகுதி →' : 'Explore Sacred Craft →'}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#ECE6D8]/60 border border-[#D4C5A9] space-y-4">
              <h3 className="font-bold text-base text-[#2E4F2B] border-b border-[#D4C5A9]/60 pb-2">
                {isTamil ? 'முகாம் அனுபவத்தின் சிறப்புகள்' : 'What Seekers Experience'}
              </h3>
              
              <div className="space-y-3 text-xs text-[#5C5044]">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'இயற்கை உணவு முறை:' : 'Living Raw Nutrition:'}</strong> {isTamil ? '3 நாட்கள் முழுமையான இயற்கை உணவு உண்ணும் முறை பயிற்சி.' : '100% whole living plant meals and herbal elixirs.'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'மலை நடைப்பயிற்சி:' : 'River & Forest Walks:'}</strong> {isTamil ? 'கடனா நதி மற்றும் அகத்தியர் மலை அடிவார இயற்கை நடை.' : 'Bathing in mountain streams and forest mindfulness.'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E4F2B] shrink-0 mt-0.5" />
                  <span><strong>{isTamil ? 'உரையாடலும் பகிர்வும்:' : 'Community Dialogue:'}</strong> {isTamil ? 'நல்வாழ்வு தத்துவங்கள் மற்றும் கள அனுபவ பகிர்வு.' : 'Deep unlearning of modern medical dogmas.'}</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};
