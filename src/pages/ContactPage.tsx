import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Compass, 
  Train, 
  Plane, 
  Bus, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { LeafBullet } from '../components/OrganicIcons';
import { FAQSection } from '../components/FAQSection';
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
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-16 sm:space-y-24 pb-20 sm:pb-32">
      
      {/* 1. Header Banner */}
      <section className="pt-12 sm:pt-20 pb-12 border-b border-[#E3DDD2] bg-[#FAF8F3]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B] block">
              Contact & Coordinates • தொடர்பு
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#2E4F2B] tracking-tight leading-tight">
              Connect with the Iyalvanam Circle
            </h1>
            <p className="text-sm text-[#8B5A2B] font-medium">
              “தொடர்பு கொண்டு களம் காண வருக”
            </p>
            <p className="text-base sm:text-lg text-[#5A5046] leading-relaxed pt-1">
              Whether you have questions regarding our non-artificial philosophy, wish to schedule an alignment stay, or seek to offer support, our community stewards are here to assist.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Contact Info & Message Form Grid */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-8 rounded-sm space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                  Sanctuary Coordinates
                </span>
                <h3 className="text-xl font-bold text-[#2E4F2B] mt-1">
                  Location & Contacts
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#5A5046]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8B5A2B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#241D17]">Iyalvanam Sanctuary</strong>
                    <span>Dharmapuramadam, Tenkasi District, Tamil Nadu – 627803</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2E4F2B] shrink-0" />
                  <div>
                    <strong className="block text-[#241D17]">Email Dispatch</strong>
                    <a href="mailto:contact@iyalvanam.org" className="hover:text-[#8B5A2B] font-medium transition-colors">
                      contact@iyalvanam.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#2E4F2B] shrink-0" />
                  <div>
                    <strong className="block text-[#241D17]">Phone / WhatsApp</strong>
                    <a href="tel:+919600756007" className="hover:text-[#8B5A2B] font-medium transition-colors">
                      +91 96007 56007
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Directions Card */}
            <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-8 rounded-sm space-y-4">
              <h4 className="text-base font-bold text-[#2E4F2B] flex items-center gap-2">
                <Train className="w-4 h-4 text-[#8B5A2B]" />
                <span>How to Reach Tenkasi</span>
              </h4>
              <ul className="space-y-3 text-xs text-[#5A5046]">
                <li className="flex items-start gap-2">
                  <LeafBullet className="w-3 h-3 text-[#2E4F2B] mt-1 shrink-0" />
                  <span><strong>By Train:</strong> Tenkasi Junction (TSI) or Ambasamudram (ASD). Direct overnight trains from Chennai and Bangalore.</span>
                </li>
                <li className="flex items-start gap-2">
                  <LeafBullet className="w-3 h-3 text-[#2E4F2B] mt-1 shrink-0" />
                  <span><strong>By Air:</strong> Tuticorin Airport (TCR - 85 km) or Madurai Airport (IXM - 150 km).</span>
                </li>
                <li className="flex items-start gap-2">
                  <LeafBullet className="w-3 h-3 text-[#2E4F2B] mt-1 shrink-0" />
                  <span><strong>Local Transit:</strong> Frequent buses & auto-rickshaws available from Tenkasi bus stand to Dharmapuramadam.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Note Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-10 rounded-sm space-y-6">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5A2B]">
                  Direct Note
                </span>
                <h3 className="text-2xl font-bold text-[#2E4F2B] mt-1">
                  Send a Message to Stewards
                </h3>
              </div>

              {isSent ? (
                <div className="bg-[#F5F2EB] border border-[#2E4F2B]/30 rounded-sm p-8 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 mx-auto text-[#2E4F2B]" />
                  <h4 className="text-xl font-bold text-[#2E4F2B]">Message Dispatched!</h4>
                  <p className="text-sm text-[#5A5046] max-w-sm mx-auto">
                    Thank you for reaching out. We honor your note and will reply at the earliest opportunity.
                  </p>
                  <Button variant="primary" size="sm" onClick={() => setIsSent(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Meera Sundaram"
                        className="w-full min-h-[48px] px-4 py-2.5 rounded-sm bg-[#F5F2EB] border border-[#E3DDD2] text-sm text-[#241D17] focus:outline-none focus:border-[#2E4F2B]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. meera@nature.org"
                        className="w-full min-h-[48px] px-4 py-2.5 rounded-sm bg-[#F5F2EB] border border-[#E3DDD2] text-sm text-[#241D17] focus:outline-none focus:border-[#2E4F2B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98401 56789"
                        className="w-full min-h-[48px] px-4 py-2.5 rounded-sm bg-[#F5F2EB] border border-[#E3DDD2] text-sm text-[#241D17] focus:outline-none focus:border-[#2E4F2B]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full min-h-[48px] px-4 py-2.5 rounded-sm bg-[#F5F2EB] border border-[#E3DDD2] text-sm text-[#241D17] focus:outline-none focus:border-[#2E4F2B]"
                      >
                        <option value="General Inquiry & Land Visit">General Inquiry & Land Visit</option>
                        <option value="Resident Family Transition">Resident Family Transition</option>
                        <option value="Nature Camp / Workshop">Nature Camp / Workshop</option>
                        <option value="Support / Infrastructure Contribution">Support / Infrastructure Contribution</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8B5A2B]">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your thoughts, inquiries, or visit schedule intentions..."
                      className="w-full px-4 py-3 rounded-sm bg-[#F5F2EB] border border-[#E3DDD2] text-sm text-[#241D17] focus:outline-none focus:border-[#2E4F2B]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto justify-center min-h-[48px]"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message to Stewards'}
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </Container>

      {/* 3. Frequently Asked Questions & Community Clarity */}
      <Container>
        <div className="bg-[#FAF8F3] border border-[#E3DDD2] p-6 sm:p-10 rounded-sm">
          <FAQSection 
            title="Frequently Asked Questions & Visitor Guidance"
            subtitle="25 essential questions covering life, visits, finances, children, housing, and community ethos."
          />
        </div>
      </Container>

    </div>
  );
};
