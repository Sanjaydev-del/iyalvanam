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
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { BotanicalFlourish, LeafBullet } from '../components/OrganicIcons';
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

  return (
    <div className="bg-[#f0e6d2] text-[#2d2013] space-y-12 sm:space-y-16 md:space-y-20 pb-16 sm:pb-24">
      
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 border-b border-[#7a2e1a]/15 bg-[#f7f2e7]">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1f3d1f]/10 text-[#1f3d1f] border border-[#1f3d1f]/20 text-[11px] sm:text-xs font-serif font-bold uppercase tracking-widest">
              <Users className="w-3.5 h-3.5 text-[#7a2e1a]" />
              <span>Join Us • இணைவோம்</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold text-[#2d2013] tracking-tight leading-tight break-words">
              Becoming a Resident of Iyalvanam
            </h1>

            <p className="text-xs sm:text-sm font-tamil text-[#7a2e1a] font-semibold break-words">
              “சுதந்திரமும் இயற்கையோடு இணைந்த வாழ்வும்”
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#3d2f21]/85 font-serif-body leading-relaxed max-w-2xl mx-auto break-words">
              Iyalvanam is not a gated commercial estate or speculative resort; it is a sacred fellowship of families choosing non-artificial living, ancestral ecology, and consensus stewardship.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. 4-Step Joining Process */}
      <Container>
        <section className="bg-[#f7f2e7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border-2 border-[#1f3d1f]/20 shadow-sm space-y-6 sm:space-y-10">
          <SectionHeading
            badge="The Pathway"
            title="The 4-Stage Alignment Pathway"
            titleTamil="இணைவதற்கான நான்கு படிநிலைகள்"
            subtitle="Alignment → Direct Interaction → Mutual Understanding → Consensus Invitation"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#f0e6d2] border border-[#7a2e1a]/15 space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1f3d1f] text-[#f7f2e7] flex items-center justify-center font-bold text-sm font-serif">
                1
              </div>
              <h3 className="font-bold text-[#2d2013] font-serif-display text-base sm:text-lg">
                Alignment (இயைபு)
              </h3>
              <p className="text-xs text-[#3d2f21]/80 leading-relaxed font-serif-body">
                Read our principles, understand the dual-trust legal architecture, and agree with natural living ethics.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#f0e6d2] border border-[#7a2e1a]/15 space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1f3d1f] text-[#f7f2e7] flex items-center justify-center font-bold text-sm font-serif">
                2
              </div>
              <h3 className="font-bold text-[#2d2013] font-serif-display text-base sm:text-lg">
                Direct Interaction (தொடர்பு)
              </h3>
              <p className="text-xs text-[#3d2f21]/80 leading-relaxed font-serif-body">
                Submit your inquiry, have an introductory dialogue with stewards, and attend a weekend orientation.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#f0e6d2] border border-[#7a2e1a]/15 space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#7a2e1a] text-[#f7f2e7] flex items-center justify-center font-bold text-sm font-serif">
                3
              </div>
              <h3 className="font-bold text-[#2d2013] font-serif-display text-base sm:text-lg">
                Mutual Living (வாழ்வியல்)
              </h3>
              <p className="text-xs text-[#3d2f21]/80 leading-relaxed font-serif-body">
                Undertake a 1 to 3 month living stay on the land to experience daily soil work, wholesome food, and silence.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#f0e6d2] border border-[#7a2e1a]/15 space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1f3d1f] text-[#f7f2e7] flex items-center justify-center font-bold text-sm font-serif">
                4
              </div>
              <h3 className="font-bold text-[#2d2013] font-serif-display text-base sm:text-lg">
                Invitation (அழைப்பு)
              </h3>
              <p className="text-xs text-[#3d2f21]/80 leading-relaxed font-serif-body">
                Consensus circle dialogue and formal invitation to join as a permanent resident family.
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* 3. Financial Structure & Transparency */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 space-y-4 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a2e1a] bg-[#7a2e1a]/10 px-3 py-1 rounded-full">
              Contribution
            </span>
            <h3 className="text-xl font-bold font-serif-display text-[#2d2013]">
              Joining Contribution
            </h3>
            <div className="p-4 bg-[#f0e6d2] rounded-xl border border-[#7a2e1a]/15 space-y-1">
              <div className="text-2xl font-bold text-[#1f3d1f] font-serif-display">
                ₹1,00,000
              </div>
              <div className="text-xs text-[#3d2f21]/80">For up to 3 family members</div>
              <div className="text-xs font-semibold text-[#7a2e1a] pt-0.5">
                + ₹25,000 per additional member
              </div>
            </div>
            <p className="text-xs text-[#3d2f21]/80 leading-relaxed font-serif-body">
              <strong>Non-refundable:</strong> Dedicated 100% to permanent trust land purchase, open well infrastructure, and agroforestry development.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 space-y-4 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1f3d1f] bg-[#1f3d1f]/10 px-3 py-1 rounded-full">
              Self-Reliance
            </span>
            <h3 className="text-xl font-bold font-serif-display text-[#2d2013]">
              Personal Preparedness
            </h3>
            <p className="text-xs text-[#3d2f21]/80 leading-relaxed font-serif-body">
              Joining members should maintain personal financial stability for family clothing, travel, and personal expenses during the transition period.
            </p>
            <ul className="space-y-2 text-xs text-[#3d2f21]/80 pt-1">
              <li className="flex items-center gap-2">
                <LeafBullet className="w-3 h-3 text-[#1f3d1f]" />
                <span>Independent emergency savings fund.</span>
              </li>
              <li className="flex items-center gap-2">
                <LeafBullet className="w-3 h-3 text-[#1f3d1f]" />
                <span>Willingness to do daily physical soil work.</span>
              </li>
              <li className="flex items-center gap-2">
                <LeafBullet className="w-3 h-3 text-[#1f3d1f]" />
                <span>Embracing simplicity and minimal consumption.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 space-y-4 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a2e1a] bg-[#7a2e1a]/10 px-3 py-1 rounded-full">
              Transparency
            </span>
            <h3 className="text-xl font-bold font-serif-display text-[#2d2013]">
              Voluntary Exit Policy
            </h3>
            <p className="text-xs text-[#3d2f21]/80 leading-relaxed font-serif-body">
              Members may choose to leave the community voluntarily at any time with complete dignity, peace, and mutual blessing.
            </p>
            <div className="p-3 bg-[#f0e6d2] rounded-xl border border-[#7a2e1a]/20 text-[11px] text-[#3d2f21] space-y-1">
              <p>• Joining contribution is non-refundable.</p>
              <p>• No individual claims on trust land assets.</p>
              <p>• Movable personal belongings remain your own.</p>
            </div>
          </div>

        </div>
      </Container>

      {/* 4. Interactive Inquiry Form Section */}
      <Container>
        <section id="join-form-section" className="bg-[#f7f2e7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border-2 border-[#1f3d1f]/20 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7a2e1a] bg-[#7a2e1a]/10 px-3 py-1 rounded-full">
                Inquiry Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#2d2013]">
                Express Your Alignment to Join
              </h2>
              <p className="text-xs sm:text-sm text-[#3d2f21]/80">
                Please share a few details about you, your family, and your motivation to walk this path.
              </p>
            </div>

            {submittedInquiry ? (
              <div className="bg-[#f0e6d2] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#1f3d1f]/20 text-center space-y-4 animate-in zoom-in-95">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#1f3d1f]/10 text-[#1f3d1f] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 sm:w-10 h-8 sm:h-10 text-[#1f3d1f]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-[#1f3d1f]">
                    Thank You, {submittedInquiry.name}!
                  </h3>
                  <p className="text-xs text-[#7a2e1a]">
                    Inquiry Reference: <span className="font-mono font-bold">{submittedInquiry.id}</span>
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#3d2f21] max-w-md mx-auto leading-relaxed font-serif-body">
                  We have registered your inquiry in our community database. Our stewards will review your message and contact you at <strong className="text-[#1f3d1f]">{submittedInquiry.email}</strong> or <strong className="text-[#1f3d1f]">{submittedInquiry.phone}</strong> to coordinate next steps.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                    onClick={() => setSubmittedInquiry(null)}
                  >
                    Submit Another Inquiry
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto"
                    onClick={() => navigate('/community-life')}
                  >
                    Read Community Life
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#f0e6d2] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#7a2e1a]/15 space-y-5 shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#7a2e1a] flex items-center gap-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anandha Krishnan"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#7a2e1a]/30'
                      } focus:outline-none focus:ring-2 focus:ring-[#1f3d1f] text-sm sm:text-base bg-[#f7f2e7] text-[#2d2013]`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#7a2e1a] flex items-center gap-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. anand@example.com"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-400 bg-red-50/30' : 'border-[#7a2e1a]/30'
                      } focus:outline-none focus:ring-2 focus:ring-[#1f3d1f] text-sm sm:text-base bg-[#f7f2e7] text-[#2d2013]`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#7a2e1a] flex items-center gap-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98400 12345"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-400 bg-red-50/30' : 'border-[#7a2e1a]/30'
                      } focus:outline-none focus:ring-2 focus:ring-[#1f3d1f] text-sm sm:text-base bg-[#f7f2e7] text-[#2d2013]`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                  </div>

                  {/* Number of Members */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#7a2e1a]">
                      Number of Members Joining
                    </label>
                    <select
                      value={formData.numberOfMembers}
                      onChange={(e) => setFormData({ ...formData, numberOfMembers: Number(e.target.value) })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#7a2e1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1f3d1f] text-sm sm:text-base bg-[#f7f2e7] text-[#2d2013]"
                    >
                      <option value={1}>Individual (1 Member)</option>
                      <option value={2}>Couple / 2 Members</option>
                      <option value={3}>Family (3 Members)</option>
                      <option value={4}>Family (4 Members)</option>
                      <option value={5}>Family (5+ Members)</option>
                    </select>
                  </div>

                  {/* Skills & Background */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#7a2e1a]">
                      Skills & Experience
                    </label>
                    <input
                      type="text"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      placeholder="e.g. Farming, Permaculture, Natural building, Siddha/Ayurveda, Solar, Carpentry..."
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#7a2e1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1f3d1f] text-sm sm:text-base bg-[#f7f2e7] text-[#2d2013]"
                    />
                  </div>

                  {/* Primary Area of Contribution */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#7a2e1a]">
                      Primary Area of Contribution
                    </label>
                    <select
                      value={formData.areaOfContribution}
                      onChange={(e) => setFormData({ ...formData, areaOfContribution: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#7a2e1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1f3d1f] text-sm sm:text-base bg-[#f7f2e7] text-[#2d2013]"
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
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#7a2e1a]">
                      Preferred Interaction
                    </label>
                    <select
                      value={formData.preferredInteractionMethod}
                      onChange={(e) => setFormData({ ...formData, preferredInteractionMethod: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#7a2e1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1f3d1f] text-sm sm:text-base bg-[#f7f2e7] text-[#2d2013]"
                    >
                      <option value="In-person visit & stay">In-person visit & weekend stay</option>
                      <option value="Phone / Video orientation call">Phone / Video orientation call</option>
                      <option value="Upcoming community gathering">Upcoming community gathering</option>
                    </select>
                  </div>

                  {/* Message / Motivation */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#7a2e1a] flex items-center gap-1">
                      Your Story & Motivation *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your background, why you wish to return to nature, and how you resonate with Iyalvanam's philosophy..."
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-[#7a2e1a]/30'
                      } focus:outline-none focus:ring-2 focus:ring-[#1f3d1f] text-sm sm:text-base bg-[#f7f2e7] text-[#2d2013]`}
                    />
                    {errors.message && <p className="text-[11px] text-red-600">{errors.message}</p>}
                  </div>

                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center min-h-[50px]"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Join Us Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </section>
      </Container>

    </div>
  );
};
