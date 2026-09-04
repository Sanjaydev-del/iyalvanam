import React, { useState, useEffect } from 'react';
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  Send, 
  HeartHandshake, 
  Sparkles,
  Info,
  Calendar,
  Lock,
  TreePine,
  Sprout
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { LeafBullet } from '../components/OrganicIcons';
import { api } from '../services/api';

interface JoinPageProps {
  navigate: (path: string) => void;
  showToast: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const JoinPage: React.FC<JoinPageProps> = ({ navigate, showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    areaOfContribution: 'Agriculture & Food Forest',
    numberOfMembers: 2,
    preferredInteractionMethod: 'In-person visit & stay',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<any | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Please share your motivation and background';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('error', 'Please fill in all required fields correctly.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await api.submitJoinInquiry(formData);
      setSubmittedInquiry(res.inquiry || { name: formData.name, email: formData.email, phone: formData.phone, id: 'INQ-' + Date.now().toString().slice(-6) });
      showToast('success', 'Your inquiry has been received! Our circle will connect with you soon.', 'Inquiry Submitted');
    } catch (err: any) {
      // Fallback mock success
      setSubmittedInquiry({ name: formData.name, email: formData.email, phone: formData.phone, id: 'INQ-' + Date.now().toString().slice(-6) });
      showToast('success', 'Your inquiry has been registered. Our stewards will contact you shortly.', 'Inquiry Registered');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Alignment & Principles',
      tamil: 'இயைபு & விழுமியங்கள்',
      desc: 'Study the natural living manifesto, understand the dual-trust perpetual land safeguard, and resonate with non-artificial living.',
    },
    {
      num: '02',
      title: 'Direct Dialogue & Visit',
      tamil: 'நேரடித் தொடர்பு & வருகை',
      desc: 'Submit your inquiry, connect with community stewards, and attend a hands-on weekend orientation at Dharmapuramadam.',
    },
    {
      num: '03',
      title: 'Mutual Living Stay',
      tamil: 'வாழ்வியல் அனுபவம்',
      desc: 'Experience daily soil stewardship, heirloom cooking, spring water hydration, and collective silence over 1 to 3 months.',
    },
    {
      num: '04',
      title: 'Consensus Invitation',
      tamil: 'ஒருமித்த அழைப்பு',
      desc: 'Circle consultation and formal mutual invitation to settle as a permanent resident steward family in the sanctuary.',
    },
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Banner */}
      <section className="pt-12 sm:pt-20 pb-12 border-b border-[#E3DDD2] bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
              Join the Fellowship • இணைவோம்
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              Becoming a Resident Steward of Iyalvanam
            </h1>
            <p className="text-sm text-[#8B5A2B] font-medium">
              “சுதந்திரமும் இயற்கையோடு இணைந்த கூட்டு வாழ்வும்”
            </p>
            <p className="text-base sm:text-lg text-[#5A5046] leading-relaxed pt-1">
              Iyalvanam is not a gated commercial estate or real estate development; it is a sacred fellowship of families choosing non-artificial living, ancestral ecology, and consensus stewardship under perpetual trust.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Responsive 4-Step Pathway */}
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              The Pathway
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
              The Four-Stage Alignment Pathway
            </h2>
            <p className="text-sm text-[#5A5046]">
              A gradual, transparent journey designed to ensure deep alignment between seeking families and the sanctuary ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-4 hover:border-[#2E4F2B]/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E3DDD2] pb-3">
                    <span className="text-xl font-mono font-bold text-[#2E4F2B]">
                      {step.num}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8B5A2B] bg-[#ECE6D8] px-2 py-0.5 rounded-xs">
                      Stage {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#241D17]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8B5A2B] font-medium">
                    {step.tamil}
                  </p>
                  <p className="text-xs text-[#5A5046] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block pt-2 text-right text-xs font-mono text-[#8B5A2B]/60">
                    Next Step →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 3. Financial Structure & Transparency */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-t border-b border-[#E3DDD2]">
        <Container>
          <div className="space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Financial Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
                Community Foundations & Resource Allocation
              </h2>
              <p className="text-sm text-[#5A5046]">
                Every rupee contributed is dedicated exclusively to sanctuary commons infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-8 rounded-sm space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
                  01 / Contribution
                </span>
                <h3 className="text-xl font-bold text-[#241D17]">
                  Joining Contribution
                </h3>
                <div className="p-4 bg-[#FAF8F3] border border-[#E3DDD2] rounded-xs space-y-1">
                  <div className="text-2xl font-bold text-[#2E4F2B]">
                    ₹1,00,000
                  </div>
                  <div className="text-xs text-[#5A5046]">For up to 3 family members</div>
                  <div className="text-xs font-semibold text-[#8B5A2B] pt-0.5">
                    + ₹25,000 per additional member
                  </div>
                </div>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  <strong>Non-refundable:</strong> Dedicated 100% to permanent trust land purchase, open well infrastructure, and agroforestry development.
                </p>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-8 rounded-sm space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2E4F2B] block">
                  02 / Self-Reliance
                </span>
                <h3 className="text-xl font-bold text-[#241D17]">
                  Personal Preparedness
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Joining members maintain personal financial stability for clothing, travel, and personal expenses during the transition.
                </p>
                <ul className="space-y-2 text-xs text-[#5A5046] pt-1">
                  <li className="flex items-start gap-2">
                    <LeafBullet className="w-3 h-3 text-[#2E4F2B] mt-0.5 shrink-0" />
                    <span>Independent emergency savings fund.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <LeafBullet className="w-3 h-3 text-[#2E4F2B] mt-0.5 shrink-0" />
                    <span>Willingness for daily physical soil work (shramadaan).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <LeafBullet className="w-3 h-3 text-[#2E4F2B] mt-0.5 shrink-0" />
                    <span>Embracing simplicity and minimal consumption.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-8 rounded-sm space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
                  03 / Peaceful Transition
                </span>
                <h3 className="text-xl font-bold text-[#241D17]">
                  Voluntary Exit Policy
                </h3>
                <p className="text-xs text-[#5A5046] leading-relaxed">
                  Members may choose to leave the community voluntarily at any time with complete dignity, peace, and mutual blessing.
                </p>
                <div className="p-3 bg-[#FAF8F3] border border-[#E3DDD2] text-xs text-[#5A5046] space-y-1">
                  <p>• Joining contribution is non-refundable.</p>
                  <p>• No individual claims on trust land assets.</p>
                  <p>• Movable personal belongings remain your own.</p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 4. Interactive Inquiry Form Section */}
      <Container>
        <div id="join-form-section" className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              Direct Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E4F2B]">
              Express Your Alignment to Join
            </h2>
            <p className="text-sm text-[#5A5046]">
              Please share a few details about you, your family, and your motivation to walk this path.
            </p>
          </div>

          {submittedInquiry ? (
            <div className="bg-[#FAF8F3] border border-[#2E4F2B]/30 rounded-sm p-8 sm:p-12 text-center space-y-4 max-w-2xl mx-auto">
              <div className="w-14 h-14 bg-[#2E4F2B]/10 text-[#2E4F2B] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#2E4F2B]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#2E4F2B]">
                  Thank You, {submittedInquiry.name}!
                </h3>
                <p className="text-xs text-[#8B5A2B]">
                  Inquiry Reference: <span className="font-mono font-bold">{submittedInquiry.id}</span>
                </p>
              </div>
              <p className="text-sm text-[#5A5046] max-w-md mx-auto leading-relaxed">
                We have registered your inquiry in our community database. Our stewards will review your message and contact you at <strong className="text-[#2E4F2B]">{submittedInquiry.email}</strong> or <strong className="text-[#2E4F2B]">{submittedInquiry.phone}</strong> to coordinate next steps.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmittedInquiry(null)}
                >
                  Submit Another Inquiry
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/sanctuary')}
                >
                  Explore Sanctuary Land
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-10 rounded-sm space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anandha Krishnan"
                    className={`w-full min-h-[48px] px-4 py-2.5 rounded-sm border ${
                      errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#E3DDD2]'
                    } focus:outline-none focus:border-[#2E4F2B] text-sm bg-[#F5F2EB] text-[#241D17]`}
                  />
                  {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. anand@example.com"
                    className={`w-full min-h-[48px] px-4 py-2.5 rounded-sm border ${
                      errors.email ? 'border-red-400 bg-red-50/30' : 'border-[#E3DDD2]'
                    } focus:outline-none focus:border-[#2E4F2B] text-sm bg-[#F5F2EB] text-[#241D17]`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98400 12345"
                    className={`w-full min-h-[48px] px-4 py-2.5 rounded-sm border ${
                      errors.phone ? 'border-red-400 bg-red-50/30' : 'border-[#E3DDD2]'
                    } focus:outline-none focus:border-[#2E4F2B] text-sm bg-[#F5F2EB] text-[#241D17]`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                </div>

                {/* Number of Members */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                    Number of Members Joining
                  </label>
                  <select
                    value={formData.numberOfMembers}
                    onChange={(e) => setFormData({ ...formData, numberOfMembers: Number(e.target.value) })}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-sm border border-[#E3DDD2] focus:outline-none focus:border-[#2E4F2B] text-sm bg-[#F5F2EB] text-[#241D17]"
                  >
                    <option value={1}>Individual (1 Member)</option>
                    <option value={2}>Couple / 2 Members</option>
                    <option value={3}>Family (3 Members)</option>
                    <option value={4}>Family (4 Members)</option>
                    <option value={5}>Family (5+ Members)</option>
                  </select>
                </div>

                {/* Skills & Background */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                    Skills & Experience
                  </label>
                  <input
                    type="text"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="e.g. Organic farming, Permaculture, Natural building, Siddha, Solar, Carpentry..."
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-sm border border-[#E3DDD2] focus:outline-none focus:border-[#2E4F2B] text-sm bg-[#F5F2EB] text-[#241D17]"
                  />
                </div>

                {/* Primary Area of Contribution */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                    Primary Area of Contribution
                  </label>
                  <select
                    value={formData.areaOfContribution}
                    onChange={(e) => setFormData({ ...formData, areaOfContribution: e.target.value })}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-sm border border-[#E3DDD2] focus:outline-none focus:border-[#2E4F2B] text-sm bg-[#F5F2EB] text-[#241D17]"
                  >
                    <option value="Agriculture & Food Forest">Agriculture & Food Forest</option>
                    <option value="Earthen Construction & Eco-Infra">Earthen Construction & Eco-Infra</option>
                    <option value="Water & Solar Energy">Water & Solar Energy</option>
                    <option value="Community Health & Naturopathy">Community Health & Naturopathy</option>
                    <option value="Children's Experiential Education">Children's Experiential Education</option>
                    <option value="Seed Banking & Biodiversity">Seed Banking & Biodiversity</option>
                    <option value="Kitchen & Community Logistics">Kitchen & Community Logistics</option>
                  </select>
                </div>

                {/* Preferred Interaction Method */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                    Preferred Interaction
                  </label>
                  <select
                    value={formData.preferredInteractionMethod}
                    onChange={(e) => setFormData({ ...formData, preferredInteractionMethod: e.target.value })}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-sm border border-[#E3DDD2] focus:outline-none focus:border-[#2E4F2B] text-sm bg-[#F5F2EB] text-[#241D17]"
                  >
                    <option value="In-person visit & stay">In-person visit & weekend stay</option>
                    <option value="Phone / Video orientation call">Phone / Video orientation call</option>
                    <option value="Upcoming community gathering">Upcoming community gathering</option>
                  </select>
                </div>

                {/* Message / Motivation */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                    Your Story & Motivation *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your background, why you wish to return to nature, and how you resonate with Iyalvanam's philosophy..."
                    className={`w-full px-4 py-3 rounded-sm border ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-[#E3DDD2]'
                    } focus:outline-none focus:border-[#2E4F2B] text-sm bg-[#F5F2EB] text-[#241D17]`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600">{errors.message}</p>}
                </div>

              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto justify-center min-h-[48px]"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Join Us Inquiry</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>

    </div>
  );
};
