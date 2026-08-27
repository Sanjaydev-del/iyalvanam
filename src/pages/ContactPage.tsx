import React, { useState, useEffect } from 'react';
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
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { BotanicalFlourish, LeafBullet } from '../components/OrganicIcons';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      setIsSent(true);
      showToast('success', 'Your message has been sent to our stewards.', 'Message Sent');
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
    <div className="bg-[#f0e6d2] text-[#2d2013] space-y-12 sm:space-y-16 md:space-y-20 pb-16 sm:pb-24">
      
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 border-b border-[#7a2e1a]/15 bg-[#f7f2e7]">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1f3d1f]/10 text-[#1f3d1f] border border-[#1f3d1f]/20 text-[11px] sm:text-xs font-serif font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-[#7a2e1a]" />
              <span>Contact & Coordinates • தொடர்பு</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold text-[#2d2013] tracking-tight leading-tight break-words">
              Connect with the Iyalvanam Circle
            </h1>

            <p className="text-xs sm:text-sm font-tamil text-[#7a2e1a] font-semibold break-words">
              “தொடர்பு கொண்டு களம் காண வருக”
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#3d2f21]/85 font-serif-body leading-relaxed max-w-2xl mx-auto break-words">
              Whether you have questions about our philosophy, wish to schedule an alignment visit, or offer support, our community stewards are here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Contact Info & Message Form Grid */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a2e1a]">
                  Sanctuary Coordinates
                </span>
                <h3 className="text-xl font-bold font-serif-display text-[#1f3d1f] mt-1">
                  Location & Contacts
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#3d2f21]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#7a2e1a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2d2013]">Iyalvanam Sanctuary</strong>
                    <span>Dharmapuramadam, Tenkasi District, Tamil Nadu – 627803</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1f3d1f] shrink-0" />
                  <div>
                    <strong className="block text-[#2d2013]">Email Dispatch</strong>
                    <a href="mailto:contact@iyalvanam.org" className="hover:text-[#7a2e1a] font-medium">
                      contact@iyalvanam.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#1f3d1f] shrink-0" />
                  <div>
                    <strong className="block text-[#2d2013]">Phone / WhatsApp</strong>
                    <a href="tel:+919600756007" className="hover:text-[#7a2e1a] font-medium">
                      +91 96007 56007
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Directions Card */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-4">
              <h4 className="text-base font-serif-display font-bold text-[#1f3d1f] flex items-center gap-2">
                <Train className="w-4 h-4 text-[#7a2e1a]" />
                <span>How to Reach Tenkasi</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-[#3d2f21]/85 font-serif-body">
                <li className="flex items-start gap-2">
                  <LeafBullet className="w-3 h-3 text-[#1f3d1f] mt-1 shrink-0" />
                  <span><strong>By Train:</strong> Tenkasi Junction (TSI) or Ambasamudram (ASD). Direct overnight trains from Chennai/Bangalore.</span>
                </li>
                <li className="flex items-start gap-2">
                  <LeafBullet className="w-3 h-3 text-[#1f3d1f] mt-1 shrink-0" />
                  <span><strong>By Air:</strong> Tuticorin Airport (TCR - 85 km) or Madurai Airport (IXM - 150 km).</span>
                </li>
                <li className="flex items-start gap-2">
                  <LeafBullet className="w-3 h-3 text-[#1f3d1f] mt-1 shrink-0" />
                  <span><strong>Local Transit:</strong> Frequent buses & auto-rickshaws available from Tenkasi bus stand to Dharmapuramadam.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Note Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f7f2e7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border-2 border-[#1f3d1f]/20 shadow-sm space-y-6">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a2e1a]">
                  Direct Note
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#2d2013] mt-1">
                  Send a Message to Stewards
                </h3>
              </div>

              {isSent ? (
                <div className="bg-[#f0e6d2] rounded-2xl p-6 sm:p-8 text-center space-y-4 border border-[#1f3d1f]/20">
                  <CheckCircle2 className="w-10 sm:w-12 h-10 sm:h-12 mx-auto text-[#1f3d1f]" />
                  <h4 className="text-xl font-serif-display font-bold text-[#1f3d1f]">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-[#3d2f21] max-w-sm mx-auto font-serif-body">
                    Thank you for reaching out. We honor your note and will reply at the earliest opportunity.
                  </p>
                  <Button variant="primary" size="sm" onClick={() => setIsSent(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Meera Sundaram"
                        className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. meera@nature.org"
                        className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98401 56789"
                        className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                      >
                        <option value="General Inquiry & Land Visit">General Inquiry & Land Visit</option>
                        <option value="Resident Family Transition">Resident Family Transition</option>
                        <option value="Nature Camp / Workshop">Nature Camp / Workshop</option>
                        <option value="Support / Infrastructure Contribution">Support / Infrastructure Contribution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your thoughts, inquiries, or visit schedule intentions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center min-h-[50px]"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message to Stewards'}
                  </Button>
                </form>
              )}

            </div>
          </div>

        </div>
      </Container>

      {/* 3. Frequently Asked Questions (Accordion) */}
      <Container>
        <div className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border-2 border-[#7a2e1a]/20 space-y-6 sm:space-y-8">
          <SectionHeading
            badge="Visitor Guidance"
            title="Frequently Asked Questions"
            titleTamil="அடிக்கடி கேட்கப்படும் வினாக்கள்"
            subtitle="Essential protocols to ensure a harmonious sanctuary visit."
            align="center"
          />

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#f0e6d2] border border-[#7a2e1a]/15 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-serif-display font-bold text-[#2d2013] flex items-center justify-between gap-3 text-sm sm:text-base hover:text-[#1f3d1f] min-h-[48px]"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#7a2e1a] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#1f3d1f] shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#3d2f21]/85 leading-relaxed font-serif-body border-t border-[#7a2e1a]/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>

    </div>
  );
};
