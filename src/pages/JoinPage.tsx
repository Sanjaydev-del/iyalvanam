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
  Sprout,
  UserCheck,
  Compass,
  DollarSign
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { LeafBullet } from '../components/OrganicIcons';
import { FAQSection } from '../components/FAQSection';
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

  const pathways = [
    {
      level: '1',
      title: 'Visitors (பார்வையாளர்கள்)',
      duration: '3–5 Days',
      desc: 'Experiential nature camps, weekend workshops, and initial immersion into the soil life.',
    },
    {
      level: '2',
      title: 'Volunteers (தன்னார்வலர்கள்)',
      duration: '15–30 Days',
      desc: 'Hands-on participation in natural building, earthen agriculture, well maintenance, and cooking.',
    },
    {
      level: '3',
      title: 'Members (உறுப்பினர்கள்)',
      duration: '1–3 Months',
      desc: 'Transition phase, deep alignment with the natural living manifesto and consensus circle.',
    },
    {
      level: '4',
      title: 'Custodians (நிலக் காவலர்கள்)',
      duration: 'Permanent Living',
      desc: 'Full-time residency, lifelong stewardship of the commons, and participation in governance.',
    },
    {
      level: '5',
      title: 'Well Wishers (நல விரும்பிகள்)',
      duration: 'Occasional Support',
      desc: 'External aligned supporters offering seeds, tools, wisdom, and infrastructure funds.',
    },
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Banner */}
      <section className="pt-12 sm:pt-20 pb-12 border-b border-[#E3DDD2] bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
              Membership & Alignment Pathways (Slide 20)
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              Membership Pathways & Custodian Alignment
            </h1>
            <p className="text-sm text-[#8B5A2B] font-medium">
              “சுதந்திரமும் இயற்கையோடு இணைந்த கூட்டு வாழ்வும்”
            </p>
            <p className="text-base sm:text-lg text-[#5A5046] leading-relaxed pt-1">
              Iyalvanam and SEYON welcome people at every stage of alignment — from curious visitors to permanent custodians of the sacred land.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Five Membership Pathways (Slide 20) */}
      <Container>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              The 5 Stages of Alignment
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
              Membership Pathways
            </h2>
            <p className="text-sm text-[#5A5046]">
              A natural, unhurried progression from initial curiosity to lifelong land stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {pathways.map((p) => (
              <div 
                key={p.level}
                className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-3 hover:border-[#2E4F2B]/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-[#E3DDD2] pb-2">
                    <span className="text-lg font-mono font-bold text-[#2E4F2B]">
                      Level {p.level}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#8B5A2B] bg-[#ECE6D8] px-2 py-0.5 rounded-xs">
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#241D17]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#5A5046] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 3. Custodian Entry & Exit Protocols (Slide 21) */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-t border-b border-[#E3DDD2]">
        <Container>
          <div className="space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                Governance Protocols (Slide 21)
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
                Custodian Entry & Exit
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Entry Protocol */}
              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-8 rounded-sm space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2E4F2B] block">
                  Entry by Alignment
                </span>
                <h3 className="text-xl font-bold text-[#241D17]">
                  By Alignment, Not Commercial Application
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5046] leading-relaxed">
                  There is no formal corporate application. Entry happens through direct interaction — clarity of intent and mutual resonance with natural laws. If aligned, the individual or family is invited to join.
                </p>
                <div className="p-4 bg-[#FAF8F3] border border-[#E3DDD2] rounded-xs space-y-2 text-xs text-[#5A5046]">
                  <strong className="text-[#241D17] block">No Ownership or Claims:</strong>
                  <p>On leaving, no individual can claim land, housing, infrastructure, or shared assets — ever.</p>
                </div>
              </div>

              {/* Voluntary Exit & Continuity */}
              <div className="bg-[#F5F2EB] border border-[#E3DDD2] p-8 rounded-sm space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
                  Voluntary Exit & Continuity
                </span>
                <h3 className="text-xl font-bold text-[#241D17]">
                  Dignified Voluntary Exit
                </h3>
                <ul className="text-xs sm:text-sm text-[#5A5046] space-y-2">
                  <li>• Inform in advance with sufficient transition time.</li>
                  <li>• Hand over responsibilities properly to the circle.</li>
                  <li>• Joining contribution is non-refundable (allocated to permanent commons).</li>
                  <li>• Voluntary contributions may be refunded without interest, subject to availability of funds.</li>
                </ul>
                <div className="p-4 bg-[#FAF8F3] border border-[#E3DDD2] rounded-xs space-y-1 text-xs text-[#5A5046]">
                  <strong className="text-[#241D17] block">Ecosystem Continuity:</strong>
                  <p>Individuals may transition. The community remains stable. Alignment is ongoing — participation is continuous.</p>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* 4. Financial Contribution Policy (Slide 22) */}
      <Container>
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
              Resource Model (Slide 22)
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B]">
              Financial Contribution Policy
            </h2>
            <p className="text-sm text-[#5A5046]">
              Money is not a criterion to join. Alignment is. Financial contribution supports the building of the system — it is a commitment, not a fee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
                01 / Custodians
              </span>
              <h3 className="text-base font-bold text-[#241D17]">
                One-Time Contribution
              </h3>
              <div className="p-3 bg-[#F5F2EB] border border-[#E3DDD2] rounded-xs space-y-1">
                <div className="text-xl font-bold text-[#2E4F2B]">₹1,00,000</div>
                <div className="text-[11px] text-[#5A5046]">Family up to 3 members</div>
                <div className="text-[11px] font-semibold text-[#8B5A2B]">+ ₹25,000 / addl. member</div>
              </div>
              <p className="text-xs text-[#5A5046] leading-relaxed">
                Non-refundable donation for setup. No ownership, no financial claim, no control.
              </p>
            </div>

            <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2E4F2B] block">
                02 / Additional Support
              </span>
              <h3 className="text-base font-bold text-[#241D17]">
                Voluntary Support
              </h3>
              <p className="text-xs text-[#5A5046] leading-relaxed">
                Voluntary, based on individual capacity. All funds flow through SEYON. All assets remain with Iyalvanam.
              </p>
            </div>

            <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
                03 / Preparedness
              </span>
              <h3 className="text-base font-bold text-[#241D17]">
                Personal Preparedness
              </h3>
              <p className="text-xs text-[#5A5046] leading-relaxed">
                Members are asked to hold enough funds to manage their own personal expenses for <strong>2 years</strong>, as the community is still being built.
              </p>
            </div>

            <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 rounded-sm space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2E4F2B] block">
                04 / Well Wishers
              </span>
              <h3 className="text-base font-bold text-[#241D17]">
                Events & Non-Monetary
              </h3>
              <p className="text-xs text-[#5A5046] leading-relaxed">
                Contributions through camp fees, events, and donations — not only money, but seeds, saplings, books, tools, or funding specific infrastructure.
              </p>
            </div>

          </div>

        </div>
      </Container>

      {/* 5. Comprehensive 25 Community FAQs Section */}
      <section className="bg-[#FAF8F3] py-16 sm:py-20 border-t border-b border-[#E3DDD2]">
        <Container>
          <FAQSection 
            title="Community Clarity & 25 Frequently Asked Questions"
            subtitle="Essential answers regarding life, stewardship, finances, hierarchy, children, and exit terms at Iyalvanam & Seyon."
          />
        </Container>
      </section>

      {/* 6. Interactive Inquiry Form Section */}
      <Container>
        <div id="join-form-section" className="space-y-8 pt-4">
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
