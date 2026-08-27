import React, { useEffect } from 'react';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f4eedb] text-[#261a12] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Statement */}
      <section className="pt-10 sm:pt-16 pb-8 border-b border-[#6b2816]/12 bg-[#faf6eb]">
        <Container>
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-serif uppercase tracking-widest text-[#6b2816] font-semibold block">
              About Iyalvanam & Seyon • எங்களை பற்றி
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#1b331b] tracking-tight leading-tight">
              A Living Return to Natural Laws
            </h1>
            <p className="text-sm font-tamil text-[#6b2816] font-medium">
              “இயன்ற வரை இயற்கைக்கு திரும்புவோம்”
            </p>
            <p className="text-base sm:text-lg text-[#574637] font-serif-body leading-relaxed pt-1">
              We do not seek to reinvent human life through technology or complex theories. We simply return to the ecological truths that have sustained life for millennia.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Foundational Vision & Purpose */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
              Vision & Calling
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#1b331b]">
              Why We Gather at Tenkasi
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#574637] font-serif-body text-base sm:text-lg leading-relaxed">
            <blockquote className="border-l-2 border-[#6b2816] pl-4 italic text-lg sm:text-xl text-[#261a12] font-serif">
              “To co-create a self-reliant, conscious nature community in the Western Ghats where human beings live in total harmony with natural laws, ancestral wisdom, and the forest ecosystem, free from artificial constructs, fostering inner liberation, collective abundance, and ecological regeneration.”
            </blockquote>

            <p className="text-sm font-tamil text-[#6b2816]">
              நோக்கம்: செயற்கையான வாழ்க்கை முறையிலிருந்து விடுபட்டு, இயற்கையின் விதிகளுக்கு ஏற்ப மனித மனம், உடல், சமூகம் மற்றும் பூமி ஆகியவற்றை ஒருங்கிணைத்து முழுமையான அமைதியோடும் தற்சார்போடும் வாழ்வதே இயல்வனத்தின் இலக்கு.
            </p>

            <p>
              Located at Dharmapuramadam at the base of the Agastiyar Malai Biosphere in Tenkasi District, our sanctuary spans 4.5+ acres of mineral-rich red loam soil fed by mountain aquifers and dual monsoons.
            </p>
          </div>

        </div>
      </Container>

      {/* 3. The Dual Trust Structure */}
      <section className="bg-[#faf6eb] py-16 border-t border-b border-[#6b2816]/12">
        <Container>
          <div className="space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                Legal & Spiritual Harmony
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#1b331b]">
                Two Trusts. One Unified Sanctuary.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#6b2816]/12 pt-8">
              
              <div className="space-y-3">
                <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#1b331b]">
                  01 / Perpetual Asset Trust
                </span>
                <h3 className="text-xl font-serif-display font-bold text-[#1b331b]">
                  IYALVANAM Asset Trust
                </h3>
                <p className="text-sm text-[#574637] font-serif-body leading-relaxed">
                  Safeguards the sanctuary commons. Under strict legal covenants, land, trees, and water bodies can never be divided, mortgaged, sold, or commercially exploited.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#6b2816]">
                  02 / Experiential Platform
                </span>
                <h3 className="text-xl font-serif-display font-bold text-[#6b2816]">
                  SEYON Nature Life Foundation
                </h3>
                <p className="text-sm text-[#574637] font-serif-body leading-relaxed">
                  Conducts hands-on nature camps, raw food workshops (coconut, banana), children's ecological stays, and orientations for seeking families.
                </p>
              </div>

            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-[#6b2816]/12">
              <Button variant="primary" size="md" showArrow onClick={() => navigate('/leadership')}>
                Meet the Leadership
              </Button>
              <Button variant="outline" size="md" onClick={() => navigate('/land')}>
                View Land Projects
              </Button>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};
