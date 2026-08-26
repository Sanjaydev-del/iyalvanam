import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Train, 
  Plane, 
  Bus, 
  Clock, 
  ShieldAlert,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { api } from '../services/api';

interface ContactPageProps {
  navigate: (path: string) => void;
  showToast: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate, showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry & Land Visit',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('error', 'Please fill in name, email, and your message.');
      return;
    }

    setIsSubmitting(true);
    try {
      await api.submitJoinInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        skills: 'Contact Message',
        areaOfContribution: formData.subject,
        numberOfMembers: 1,
        preferredInteractionMethod: 'Email/Contact form',
        message: `Subject: ${formData.subject}\n\n${formData.message}`,
      });

      setIsSent(true);
      showToast('success', 'Your message has been sent. We will respond soon!', 'Message Sent');
    } catch (err: any) {
      showToast('error', err.message || 'Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'Can I visit Iyalvanam without prior appointment?',
      a: 'To preserve the peaceful rhythm, daily silence, and agricultural focus of resident families, we require all visitors to schedule visits in advance through our contact form or join inquiry.',
    },
    {
      q: 'What should I pack for an on-land stay or weekend orientation?',
      a: 'Modest cotton clothing, natural biodegradable toiletries (soap nuts / shikakai), a reusable stainless steel water bottle, a torch/flashlight, and slip-on footwear suitable for walking on earthen trails.',
    },
    {
      q: 'Are children and elders welcome?',
      a: 'Wholeheartedly! Iyalvanam is designed as an intergenerational sanctuary where elders share ancestral wisdom and children explore nature freely without artificial pressure.',
    },
    {
      q: 'What is strictly prohibited on the land?',
      a: 'Single-use plastic, alcohol, narcotics, cigarettes/tobacco, commercial packaged junk foods, and any forms of caste/religious discrimination or aggressive ideological conflict.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
          Contact & Coordinates • தொடர்பு
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A3728]">
          Connect with the Iyalvanam Circle
        </h1>
        <p className="text-lg text-[#4A3728]/80 max-w-3xl mx-auto leading-relaxed">
          Whether you have questions about our philosophy, wish to schedule an alignment visit, or offer support, our community stewards are here to help.
        </p>
      </section>

      {/* Grid: Contact Form & Geography / Transport */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form */}
        <div className="lg:col-span-7 bg-[#EBEBE3] rounded-3xl p-8 sm:p-10 border border-[#5A5A40]/15 shadow-xs space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#4A3728]">
              Send Us a Message
            </h2>
            <p className="text-xs text-[#5A5A40] mt-1">
              Fill out this form and a community volunteer will reply within 24–48 hours.
            </p>
          </div>

          {isSent ? (
            <div className="p-8 bg-[#F5F5F0] rounded-2xl border border-[#5A5A40]/20 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#5A5A40] mx-auto" />
              <h3 className="text-xl font-bold font-serif text-[#4A3728]">
                Message Received in Good Order
              </h3>
              <p className="text-xs text-[#5A5A40]">
                Thank you for reaching out. We look forward to connecting with you soon.
              </p>
              <button
                onClick={() => {
                  setIsSent(false);
                  setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry & Land Visit', message: '' });
                }}
                className="px-6 py-2.5 bg-[#B35C44] text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#9B4F3B] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#4A3728]">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. S. Karthikeyan"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#F5F5F0]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#4A3728]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. karthi@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#F5F5F0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#4A3728]">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 94440 98765"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#F5F5F0]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#4A3728]">Subject / Purpose</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#F5F5F0]"
                  >
                    <option value="General Inquiry & Land Visit">General Inquiry & Land Visit</option>
                    <option value="Joining as Resident Family">Joining as Resident Family</option>
                    <option value="Volunteering & Seed Exchange">Volunteering & Seed Exchange</option>
                    <option value="Support & Infrastructure Donation">Support & Infrastructure Donation</option>
                    <option value="Media & Research Inquiry">Media & Research Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4A3728]">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How may our community assist you?"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#F5F5F0]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-colors shadow-sm shadow-[#B35C44]/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? <span>Sending...</span> : <><span>Send Message</span> <Send className="w-3.5 h-3.5" /></>}
              </button>
            </form>
          )}
        </div>

        {/* Location & Transport Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Sanctuary Location Box */}
          <div className="bg-[#EBEBE3] rounded-3xl p-6 sm:p-8 border border-[#5A5A40]/15 space-y-4">
            <div className="flex items-center gap-3 text-[#4A3728]">
              <MapPin className="w-6 h-6 text-[#B35C44]" />
              <h3 className="text-xl font-bold font-serif text-[#4A3728]">
                Sanctuary Coordinates
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-[#4A3728]/85 space-y-1 leading-relaxed">
              <p className="font-bold text-[#4A3728]">Iyalvanam Iyarkai Vazhviyal Koodam</p>
              <p>Dharmapuramadam, Tenkasi District</p>
              <p>Tamil Nadu – 627808, India</p>
              <p className="text-[11px] text-[#5A5A40] pt-1">
                Western Ghats Foothills • Agastiyar Malai Biosphere Buffer Zone
              </p>
            </div>
            <div className="pt-2 border-t border-[#5A5A40]/15 text-xs text-[#5A5A40] space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B35C44] shrink-0" />
                <a href="mailto:contact@iyalvanam.org" className="hover:text-[#B35C44] transition-colors">
                  contact@iyalvanam.org
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B35C44] shrink-0" />
                <a href="tel:+919600756007" className="font-bold text-[#4A3728] hover:text-[#B35C44] transition-colors text-sm">
                  +91 96007 56007
                </a>
                <span className="text-[11px] text-[#5A5A40]">(Call / WhatsApp)</span>
              </p>
            </div>
          </div>

          {/* How to Reach */}
          <div className="bg-[#EBEBE3] rounded-3xl p-6 sm:p-8 border border-[#5A5A40]/15 space-y-4">
            <h3 className="text-lg font-bold font-serif text-[#4A3728] flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#B35C44]" /> How to Reach
            </h3>
            <div className="space-y-3 text-xs text-[#4A3728]/85">
              <div className="flex items-start gap-2.5">
                <Train className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4A3728]">By Train:</strong> Tenkasi Junction (TSI) or Sengottai (SCT) stations are 15–20 minutes by local auto/bus.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Bus className="w-4 h-4 text-[#B35C44] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4A3728]">By Bus:</strong> Frequent buses connect from Madurai, Tirunelveli, and Courtallam to Tenkasi.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Plane className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4A3728]">By Air:</strong> Tuticorin Airport (TCR ~85km) or Trivandrum International (TRV ~105km).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Guidelines */}
      <section className="bg-[#4A3728] text-[#F5F5F0] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/30 space-y-6 shadow-xl">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44]">
            Sanctuary Etiquette
          </span>
          <h2 className="text-3xl font-serif font-bold text-white">
            Essential Visitor Guidelines (வருகையாளர் வழிகாட்டுதல்கள்)
          </h2>
          <p className="text-xs sm:text-sm text-[#EBEBE3]/80">
            Please review these mindful practices before planning your arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-xs text-[#EBEBE3]/90">
          <div className="p-5 rounded-2xl bg-[#3B2C20] border border-[#5A5A40]/30 space-y-1.5">
            <strong className="text-white font-serif block text-sm">Prior Notice Required</strong>
            <p className="text-[#EBEBE3]/80">Unannounced drop-ins disrupt our daily soil work and quiet rhythms. Please book your visit in advance.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#3B2C20] border border-[#5A5A40]/30 space-y-1.5">
            <strong className="text-white font-serif block text-sm">Zero Plastic Zone</strong>
            <p className="text-[#EBEBE3]/80">Please do not bring disposable plastics, plastic bottles, or non-biodegradable food packaging.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#3B2C20] border border-[#5A5A40]/30 space-y-1.5">
            <strong className="text-white font-serif block text-sm">Natural Attire</strong>
            <p className="text-[#EBEBE3]/80">Wear modest, breathable cotton attire suitable for walking on living earth and outdoor tasks.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#3B2C20] border border-[#5A5A40]/30 space-y-1.5">
            <strong className="text-white font-serif block text-sm">Honor Sacred Silence</strong>
            <p className="text-[#EBEBE3]/80">Respect our designated morning and evening quiet hours by avoiding loud ringtones and audio devices.</p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#4A3728]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2 cursor-pointer transition-all"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="flex items-center justify-between font-bold text-sm text-[#4A3728] font-serif">
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#B35C44]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#5A5A40]" />
                )}
              </div>
              {openFaq === idx && (
                <p className="text-xs text-[#4A3728]/80 leading-relaxed pt-2 border-t border-[#5A5A40]/15 font-sans">
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
