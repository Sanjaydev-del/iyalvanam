import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  HelpCircle, 
  Send, 
  HeartHandshake, 
  Sparkles,
  Info,
  Calendar,
  Lock
} from 'lucide-react';
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
      setSubmittedInquiry(res.inquiry);
      showToast('success', 'Your inquiry has been received! Our circle will connect with you soon.', 'Inquiry Submitted');
    } catch (err: any) {
      showToast('error', err.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
          Join Us • இணைவோம்
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A3728]">
          Becoming a Member of Iyalvanam
        </h1>
        <p className="text-lg text-[#4A3728]/80 max-w-3xl mx-auto leading-relaxed">
          Iyalvanam is not a gated commercial estate or speculative resort; it is a sacred fellowship of families and individuals choosing non-artificial living, ancestral ecology, and consensus stewardship.
        </p>
      </section>

      {/* 4-Step Joining Process from Proposal */}
      <section className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            The Pathway
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A3728]">
            Alignment → Direct Interaction → Mutual Understanding → Invitation
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5A40]">
            Our process is built on mutual energetic resonance and genuine on-land compatibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#5A5A40] text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-[#4A3728] font-serif text-base">
              Alignment (இயைபு)
            </h3>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Read the proposal, understand the five foundations, natural law principles, and ethics of consensus living.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#5A5A40] text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-[#4A3728] font-serif text-base">
              Direct Interaction (நேரடி தொடர்பு)
            </h3>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Submit your inquiry below, have an introductory dialogue with community coordinators, and attend a weekend orientation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#5A5A40] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-[#4A3728] font-serif text-base">
              Mutual Understanding (1–3 மாத வாழ்வியல்)
            </h3>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Undertake a 1 to 3 month living stay on the land to experience the daily food, physical labor, silence, and consensus dynamics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/15 space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#B35C44] text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-[#4A3728] font-serif text-base">
              Invitation (ஒருமித்த அழைப்பு)
            </h3>
            <p className="text-xs text-[#4A3728]/80 leading-relaxed">
              Consensus circle dialogue and formal invitation to join as a full resident family, contributing to the asset trust.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Structure, Preparedness & Exit Policy */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Joining Contribution */}
        <div className="p-8 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-4 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-3 py-1 rounded-full">
            Contribution
          </span>
          <h3 className="text-xl font-bold font-serif text-[#4A3728]">
            Joining Contribution Structure
          </h3>
          <div className="p-4 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/15 space-y-2">
            <div className="text-2xl font-bold text-[#4A3728] font-serif">
              ₹1,00,000
            </div>
            <div className="text-xs text-[#5A5A40]">For up to 3 family members</div>
            <div className="text-xs font-semibold text-[#B35C44] pt-1">
              + ₹25,000 for each additional member
            </div>
          </div>
          <p className="text-xs text-[#4A3728]/80 leading-relaxed">
            <strong>Non-refundable:</strong> This contribution is dedicated 100% to irrevocable community land purchase, open well construction, agroforestry, and permanent infrastructure held in trust.
          </p>
        </div>

        {/* Personal Preparedness */}
        <div className="p-8 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-4 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] bg-[#5A5A40]/10 px-3 py-1 rounded-full">
            Self-Reliance
          </span>
          <h3 className="text-xl font-bold font-serif text-[#4A3728]">
            Personal Preparedness
          </h3>
          <p className="text-xs text-[#4A3728]/80 leading-relaxed">
            Joining members must maintain adequate financial preparedness to support their personal, medical, clothing, and travel expenses during the transition period.
          </p>
          <ul className="space-y-2 text-xs text-[#4A3728]/80 pt-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B35C44]" />
              <span>Independent emergency fund for personal needs.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A5A40]" />
              <span>Willingness to participate daily in physical soil work.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A3728]" />
              <span>Respect for simplicity and minimal material possessions.</span>
            </li>
          </ul>
        </div>

        {/* Exit Policy */}
        <div className="p-8 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-4 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-3 py-1 rounded-full">
            Transparency
          </span>
          <h3 className="text-xl font-bold font-serif text-[#4A3728]">
            Voluntary Exit Policy
          </h3>
          <p className="text-xs text-[#4A3728]/80 leading-relaxed">
            Members may choose to leave the community voluntarily at any time with complete dignity, peace, and mutual blessing.
          </p>
          <div className="p-3 bg-[#F5F5F0] rounded-xl border border-[#B35C44]/30 text-[11px] text-[#4A3728]/90 space-y-1">
            <p>• Joining contribution is non-refundable.</p>
            <p>• No individual claims on community trust land or permanent infrastructure.</p>
            <p>• Personal tools and movable belongings remain the individual's property.</p>
          </div>
        </div>
      </section>

      {/* Interactive Join Us Form Section */}
      <section id="join-form-section" className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15 shadow-sm">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
              Inquiry Form
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#4A3728]">
              Express Your Alignment to Join
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5A40]">
              Please share a few details about you, your family, and your motivation to walk this path.
            </p>
          </div>

          {submittedInquiry ? (
            <div className="bg-[#F5F5F0] rounded-3xl p-8 sm:p-10 border border-[#5A5A40]/20 text-center space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-[#5A5A40]/15 text-[#5A5A40] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-serif text-[#4A3728]">
                  Thank You, {submittedInquiry.name}!
                </h3>
                <p className="text-xs text-[#5A5A40]">
                  Inquiry Reference ID: <span className="font-mono font-bold text-[#4A3728]">{submittedInquiry.id}</span>
                </p>
              </div>
              <p className="text-sm text-[#4A3728]/80 max-w-md mx-auto leading-relaxed">
                We have registered your inquiry in our community database. Our circle will review your message and contact you at <strong className="text-[#4A3728]">{submittedInquiry.email}</strong> or <strong className="text-[#4A3728]">{submittedInquiry.phone}</strong> to coordinate next steps and orientation.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setSubmittedInquiry(null)}
                  className="px-6 py-2.5 rounded-full border border-[#5A5A40] text-[#4A3728] text-xs font-bold hover:bg-[#5A5A40]/10 transition-colors uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
                <button
                  onClick={() => navigate('/community-life')}
                  className="px-6 py-2.5 rounded-full bg-[#B35C44] text-white text-xs font-bold hover:bg-[#9B4F3B] transition-colors uppercase tracking-wider shadow-sm shadow-[#B35C44]/20"
                >
                  Read Community Life
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#F5F5F0] rounded-3xl p-8 sm:p-10 border border-[#5A5A40]/15 space-y-6 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#4A3728] flex items-center gap-1">
                    Full Name <span className="text-[#B35C44]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anandha Krishnan"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#5A5A40]/20'
                    } focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40`}
                  />
                  {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#4A3728] flex items-center gap-1">
                    Email Address <span className="text-[#B35C44]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. anand@example.com"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? 'border-red-400 bg-red-50/30' : 'border-[#5A5A40]/20'
                    } focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#4A3728] flex items-center gap-1">
                    Phone / WhatsApp <span className="text-[#B35C44]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98400 12345"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-red-400 bg-red-50/30' : 'border-[#5A5A40]/20'
                    } focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                </div>

                {/* Number of Members */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#4A3728]">
                    Number of Members Joining
                  </label>
                  <select
                    value={formData.numberOfMembers}
                    onChange={(e) => setFormData({ ...formData, numberOfMembers: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40"
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
                  <label className="text-xs font-bold text-[#4A3728]">
                    Skills & Experience
                  </label>
                  <input
                    type="text"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="e.g. Farming, Permaculture, Natural building, Siddha/Ayurveda, Solar, Carpentry..."
                    className="w-full px-4 py-3 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40"
                  />
                </div>

                {/* Primary Area of Contribution */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#4A3728]">
                    Primary Area of Contribution
                  </label>
                  <select
                    value={formData.areaOfContribution}
                    onChange={(e) => setFormData({ ...formData, areaOfContribution: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40"
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
                  <label className="text-xs font-bold text-[#4A3728]">
                    Preferred Interaction
                  </label>
                  <select
                    value={formData.preferredInteractionMethod}
                    onChange={(e) => setFormData({ ...formData, preferredInteractionMethod: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40"
                  >
                    <option value="In-person visit & stay">In-person visit & weekend stay</option>
                    <option value="Phone / Video orientation call">Phone / Video orientation call</option>
                    <option value="Upcoming community gathering">Upcoming community gathering</option>
                  </select>
                </div>

                {/* Message / Motivation */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-[#4A3728] flex items-center gap-1">
                    Your Story & Motivation <span className="text-[#B35C44]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your background, why you wish to return to nature, and how you resonate with Iyalvanam's philosophy..."
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-[#5A5A40]/20'
                    } focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600">{errors.message}</p>}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest shadow-sm shadow-[#B35C44]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Join Us Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
