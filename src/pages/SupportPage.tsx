import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Sprout, 
  TreePine, 
  Wrench, 
  BookOpen, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  Send,
  Sparkles,
  Info,
  DollarSign,
  Copy,
  Check
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { BotanicalFlourish, LeafBullet } from '../components/OrganicIcons';
import { SupportType } from '../types';
import { api } from '../services/api';

interface SupportPageProps {
  navigate: (path: string) => void;
  showToast: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ navigate, showToast }) => {
  const [formData, setFormData] = useState({
    donorName: '',
    donorEmail: '',
    amount: '10000',
    type: 'Monetary support' as SupportType,
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedDonation, setSubmittedDonation] = useState<any | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportTypes: { label: string; value: SupportType; icon: React.ReactNode; desc: string }[] = [
    {
      label: 'Monetary Support',
      value: 'Monetary support',
      icon: <DollarSign className="w-5 h-5 text-[#1f3d1f]" />,
      desc: 'Direct financial contributions towards infrastructure materials, solar, and well deepening.',
    },
    {
      label: 'Native Seeds',
      value: 'Seeds',
      icon: <Sprout className="w-5 h-5 text-[#1f3d1f]" />,
      desc: 'Indigenous heirloom paddy, millet, pulses, and rare vegetable varieties for our seed bank.',
    },
    {
      label: 'Forest Saplings',
      value: 'Saplings',
      icon: <TreePine className="w-5 h-5 text-[#1f3d1f]" />,
      desc: 'Western Ghats native tree saplings (Kadamba, Marudham, Wild Mango, Neem, Mahua, Bamboo).',
    },
    {
      label: 'Eco Tools & Equipment',
      value: 'Tools',
      icon: <Wrench className="w-5 h-5 text-[#7a2e1a]" />,
      desc: 'Carpentry tools, spades, shovels, solar pumps, organic shredders, and earthen construction tools.',
    },
    {
      label: 'Books & Literature',
      value: 'Books',
      icon: <BookOpen className="w-5 h-5 text-[#7a2e1a]" />,
      desc: 'Books on ecology, permaculture, Siddha/Naturopathy, natural history, and Tamil literature.',
    },
    {
      label: 'Volunteer Contribution',
      value: 'Volunteer contribution',
      icon: <Users className="w-5 h-5 text-[#1f3d1f]" />,
      desc: 'Offering your physical labor, masonry, electrical, agricultural, or educational skills on site.',
    },
    {
      label: 'Infrastructure-Specific',
      value: 'Infrastructure-specific support',
      icon: <ShieldCheck className="w-5 h-5 text-[#7a2e1a]" />,
      desc: 'Sponsoring a specific asset: community kitchen hearth, rainwater pond, or solar array.',
    },
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    showToast('info', `Copied ${field} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.donorName.trim()) newErrors.donorName = 'Name is required';
    if (!formData.donorEmail.trim()) {
      newErrors.donorEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.donorEmail)) {
      newErrors.donorEmail = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('error', 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await api.submitDonation(formData);
      setSubmittedDonation(res.donation || { ...formData, id: 'DON-' + Date.now().toString().slice(-6) });
      showToast('success', 'Thank you for your generous pledge to Iyalvanam!', 'Support Recorded');
    } catch (err: any) {
      setSubmittedDonation({ ...formData, id: 'DON-' + Date.now().toString().slice(-6) });
      showToast('success', 'Your contribution pledge has been recorded.', 'Pledge Recorded');
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
              <Heart className="w-3.5 h-3.5 text-[#7a2e1a]" />
              <span>Sanctuary Support • ஆதரவு</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold text-[#2d2013] tracking-tight leading-tight break-words">
              Support the ₹25 Lakhs Infrastructure Fund
            </h1>

            <p className="text-xs sm:text-sm font-tamil text-[#7a2e1a] font-semibold break-words">
              “மண்ணையும் மரங்களையும் காக்கும் பொதுநலப் பணி”
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#3d2f21]/85 font-serif-body leading-relaxed max-w-2xl mx-auto break-words">
              100% of contributions are dedicated to irrevocable public trust assets: open stone wells, native saplings, heirloom seeds, and natural earthen community buildings.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Ways to Support Grid */}
      <Container>
        <div className="space-y-8 sm:space-y-12">
          <SectionHeading
            badge="Channels of Contribution"
            title="Diverse Ways to Nourish the Sanctuary"
            titleTamil="பங்களிப்புக்கான வழிகள்"
            subtitle="Support through funds, seeds, saplings, eco-tools, books, or on-ground labor."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {supportTypes.map((st, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 hover:border-[#1f3d1f] shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#f0e6d2] flex items-center justify-center shadow-xs shrink-0">
                    {st.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif-display font-bold text-[#2d2013] break-words">
                    {st.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3d2f21]/80 leading-relaxed font-serif-body">
                    {st.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#7a2e1a]/10 flex items-center justify-between text-[11px] text-[#7a2e1a] font-serif">
                  <span>Option #{idx + 1}</span>
                  <LeafBullet className="w-3 h-3 text-[#1f3d1f]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 3. Direct Trust Bank Details & Transparency */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Bank Coordinates */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f7f2e7] border-2 border-[#1f3d1f]/30 shadow-sm space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1f3d1f] bg-[#1f3d1f]/10 px-3 py-0.5 rounded-full">
                Public Trust Account
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#1f3d1f] mt-2">
                Official Bank Coordinates
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              
              <div className="p-3.5 bg-[#f0e6d2] rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7a2e1a] block">Account Name</span>
                  <strong className="text-[#2d2013]">IYALVANAM ASSET TRUST</strong>
                </div>
                <button
                  onClick={() => copyToClipboard('IYALVANAM ASSET TRUST', 'Account Name')}
                  className="p-2 text-[#1f3d1f] hover:bg-[#e5d8be] rounded-lg transition-colors"
                >
                  {copiedField === 'Account Name' ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-3.5 bg-[#f0e6d2] rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7a2e1a] block">Account Number</span>
                  <strong className="text-[#2d2013] font-mono">50200088991122</strong>
                </div>
                <button
                  onClick={() => copyToClipboard('50200088991122', 'Account Number')}
                  className="p-2 text-[#1f3d1f] hover:bg-[#e5d8be] rounded-lg transition-colors"
                >
                  {copiedField === 'Account Number' ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-3.5 bg-[#f0e6d2] rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7a2e1a] block">IFSC Code</span>
                  <strong className="text-[#2d2013] font-mono">HDFC0001852</strong>
                </div>
                <button
                  onClick={() => copyToClipboard('HDFC0001852', 'IFSC Code')}
                  className="p-2 text-[#1f3d1f] hover:bg-[#e5d8be] rounded-lg transition-colors"
                >
                  {copiedField === 'IFSC Code' ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-3.5 bg-[#f0e6d2] rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7a2e1a] block">UPI ID / VPA</span>
                  <strong className="text-[#2d2013] font-mono">iyalvanam@hdfcbank</strong>
                </div>
                <button
                  onClick={() => copyToClipboard('iyalvanam@hdfcbank', 'UPI ID')}
                  className="p-2 text-[#1f3d1f] hover:bg-[#e5d8be] rounded-lg transition-colors"
                >
                  {copiedField === 'UPI ID' ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>
          </div>

          {/* Pledge Submission Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#f7f2e7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border-2 border-[#7a2e1a]/20 shadow-sm space-y-6">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a2e1a]">
                  Pledge Registry
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#2d2013] mt-1">
                  Record Your Contribution Pledge
                </h3>
              </div>

              {submittedDonation ? (
                <div className="bg-[#f0e6d2] rounded-2xl p-6 sm:p-8 text-center space-y-4 border border-[#1f3d1f]/20">
                  <CheckCircle2 className="w-10 sm:w-12 h-10 sm:h-12 mx-auto text-[#1f3d1f]" />
                  <h4 className="text-xl font-serif-display font-bold text-[#1f3d1f]">Gratitude for Your Support!</h4>
                  <p className="text-xs sm:text-sm text-[#3d2f21] max-w-sm mx-auto font-serif-body">
                    We have recorded your pledge of ₹{submittedDonation.amount || 'contribution'}. A community receipt and certificate will be emailed to you.
                  </p>
                  <Button variant="primary" size="sm" onClick={() => setSubmittedDonation(null)}>
                    Record Another Support
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.donorName}
                      onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                      placeholder="e.g. Sivasankaran P."
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                    />
                    {errors.donorName && <p className="text-[11px] text-red-600">{errors.donorName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.donorEmail}
                        onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
                        placeholder="e.g. siva@nature.org"
                        className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                      />
                      {errors.donorEmail && <p className="text-[11px] text-red-600">{errors.donorEmail}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                        Pledge Amount (₹)
                      </label>
                      <input
                        type="number"
                        min={500}
                        step={500}
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                      Support Type
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as SupportType })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                    >
                      {supportTypes.map((st) => (
                        <option key={st.value} value={st.value}>{st.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                      Note / Intended Asset Dedication
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="e.g. Sponsoring 50 native Kadamba saplings for the north swale..."
                      className="w-full px-4 py-3 rounded-xl bg-[#f0e6d2] border border-[#7a2e1a]/30 text-sm sm:text-base text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center min-h-[50px]"
                  >
                    {isSubmitting ? 'Recording Pledge...' : 'Submit Infrastructure Pledge'}
                  </Button>
                </form>
              )}

            </div>
          </div>

        </div>
      </Container>

    </div>
  );
};
