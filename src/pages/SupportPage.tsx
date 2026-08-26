import React, { useState } from 'react';
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
  DollarSign
} from 'lucide-react';
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const supportTypes: { label: string; value: SupportType; icon: React.ReactNode; desc: string }[] = [
    {
      label: 'Monetary Support',
      value: 'Monetary support',
      icon: <DollarSign className="w-5 h-5 text-emerald-700" />,
      desc: 'Direct financial contributions towards infrastructure materials, solar, and well deepening.',
    },
    {
      label: 'Native Seeds',
      value: 'Seeds',
      icon: <Sprout className="w-5 h-5 text-emerald-600" />,
      desc: 'Indigenous heirloom paddy, millet, pulses, and rare vegetable varieties for our seed bank.',
    },
    {
      label: 'Forest Saplings',
      value: 'Saplings',
      icon: <TreePine className="w-5 h-5 text-emerald-800" />,
      desc: 'Western Ghats native tree saplings (Kadamba, Marudham, Wild Mango, Neem, Mahua, Bamboo).',
    },
    {
      label: 'Eco Tools & Equipment',
      value: 'Tools',
      icon: <Wrench className="w-5 h-5 text-amber-700" />,
      desc: 'Carpentry tools, spades, shovels, solar pumps, organic shredders, and earthen construction tools.',
    },
    {
      label: 'Books & Literature',
      value: 'Books',
      icon: <BookOpen className="w-5 h-5 text-indigo-700" />,
      desc: 'Books on ecology, permaculture, Siddha/Naturopathy, natural history, and Tamil literature.',
    },
    {
      label: 'Volunteer Contribution',
      value: 'Volunteer contribution',
      icon: <Users className="w-5 h-5 text-[#284f3e]" />,
      desc: 'Offering your physical labor, masonry, electrical, agricultural, or educational skills on site.',
    },
    {
      label: 'Infrastructure-Specific',
      value: 'Infrastructure-specific support',
      icon: <ShieldCheck className="w-5 h-5 text-[#c85a32]" />,
      desc: 'Sponsoring a specific asset: community kitchen hearth, rainwater pond, or solar array.',
    },
  ];

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
      const res = await api.submitDonation({
        donorName: formData.donorName,
        donorEmail: formData.donorEmail,
        amount: formData.amount ? Number(formData.amount) : undefined,
        type: formData.type,
        description: formData.description,
      });

      setSubmittedDonation(res.donation);
      showToast('success', 'Thank you! Your support pledge has been registered.', 'Pledge Recorded');
    } catch (err: any) {
      showToast('error', err.message || 'Failed to submit pledge. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
          Support & Giving • ஆதரவு & நற்கொடை
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A3728]">
          Support the Iyalvanam Infrastructure
        </h1>
        <p className="text-lg text-[#4A3728]/80 max-w-3xl mx-auto leading-relaxed">
          Help us establish a permanent ecological sanctuary and self-reliant nature school in Tenkasi District. Every seed, tool, tree, and rupee supports collective stewardship.
        </p>
      </section>

      {/* ₹25 Lakhs Infrastructure Goal Spotlight */}
      <section className="bg-[#4A3728] text-[#F5F5F0] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/30 shadow-xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#5A5A40]/30">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44]">
                Community Infrastructure Campaign
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-1 text-white">
                Target Funding: ₹25,00,000 (₹25 Lakhs)
              </h2>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#B35C44]/20 text-[#B35C44] border border-[#B35C44]/30 text-xs font-bold text-center uppercase tracking-wider">
              Held in Trust by Iyalvanam Asset Trust
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#EBEBE3]/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#3B2C20] border border-[#5A5A40]/30 space-y-2">
              <h4 className="font-bold text-base text-white font-serif">
                Founding Member Funding vs Community Infrastructure Fund
              </h4>
              <p>
                <strong>Founding Member Contributions (₹1 Lakh per family)</strong> are allocated to permanent land acquisition and basic living clusters. 
              </p>
              <p>
                <strong>The Community Infrastructure Fund (₹25 Lakhs)</strong> enables shared common assets: the central Koodam hall, open-well stone masonry, seed banks, solar energy grid, and community kitchen.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#3B2C20] border border-[#5A5A40]/30 space-y-2">
              <h4 className="font-bold text-base text-white font-serif">
                Transparent Allocation Breakdown
              </h4>
              <ul className="space-y-1.5 text-xs text-[#EBEBE3]/80">
                <li className="flex justify-between border-b border-[#5A5A40]/20 pb-1">
                  <span>Community Koodam Earthen Hall:</span>
                  <strong className="text-white font-serif">₹8,50,000</strong>
                </li>
                <li className="flex justify-between border-b border-[#5A5A40]/20 pb-1">
                  <span>Open Well Stone Masonry & Swales:</span>
                  <strong className="text-white font-serif">₹5,00,000</strong>
                </li>
                <li className="flex justify-between border-b border-[#5A5A40]/20 pb-1">
                  <span>Off-Grid Solar Micro-Grid & Pump:</span>
                  <strong className="text-white font-serif">₹6,00,000</strong>
                </li>
                <li className="flex justify-between border-b border-[#5A5A40]/20 pb-1">
                  <span>Communal Kitchen & Seed Bank Vault:</span>
                  <strong className="text-white font-serif">₹3,50,000</strong>
                </li>
                <li className="flex justify-between">
                  <span>Saplings, Tools & Native Live Fence:</span>
                  <strong className="text-white font-serif">₹2,00,000</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories Cards */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
            Diverse Avenues of Giving
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#4A3728]">
            How You Can Support Iyalvanam
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5A40]">
            Support comes in many forms beyond currency: living seeds, healthy saplings, hand tools, knowledge, and volunteer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportTypes.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                setFormData({ ...formData, type: item.value });
                const el = document.getElementById('donation-form-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-6 rounded-3xl bg-[#EBEBE3] border transition-all cursor-pointer space-y-3 hover:shadow-md ${
                formData.type === item.value
                  ? 'border-[#B35C44] ring-2 ring-[#B35C44]/20 bg-[#F5F5F0]'
                  : 'border-[#5A5A40]/15 hover:border-[#5A5A40]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F0] flex items-center justify-center shadow-xs">
                  {item.icon}
                </div>
                <span className="text-[11px] font-bold text-[#B35C44] uppercase tracking-wider hover:underline">
                  Select Type →
                </span>
              </div>
              <h3 className="text-base font-bold text-[#4A3728] font-serif">
                {item.label}
              </h3>
              <p className="text-xs text-[#4A3728]/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Support / Pledge Form */}
      <section id="donation-form-section" className="bg-[#EBEBE3] rounded-3xl p-8 sm:p-12 border border-[#5A5A40]/15">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
              Pledge Form
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#4A3728]">
              Submit Your Support Pledge
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5A40]">
              Record your pledge below. Our trust coordinators will follow up directly with you.
            </p>
          </div>

          {submittedDonation ? (
            <div className="bg-[#F5F5F0] rounded-3xl p-8 sm:p-10 border border-[#5A5A40]/20 text-center space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-[#5A5A40]/15 text-[#5A5A40] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-serif text-[#4A3728]">
                  Thank You for Your Generosity, {submittedDonation.donorName}!
                </h3>
                <p className="text-xs text-[#5A5A40]">
                  Pledge Reference ID: <span className="font-mono font-bold text-[#4A3728]">{submittedDonation.id}</span>
                </p>
              </div>
              <div className="p-4 bg-[#EBEBE3] rounded-2xl text-xs text-[#4A3728] space-y-2 max-w-lg mx-auto text-left">
                <div className="flex justify-between">
                  <span>Support Type:</span>
                  <strong className="text-[#4A3728]">{submittedDonation.type}</strong>
                </div>
                {submittedDonation.amount && (
                  <div className="flex justify-between">
                    <span>Pledged Amount:</span>
                    <strong className="text-[#B35C44] font-serif">₹{submittedDonation.amount.toLocaleString('en-IN')}</strong>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Pledge Status:</span>
                  <span className="font-bold text-[#B35C44] bg-[#B35C44]/10 px-3 py-0.5 rounded-full border border-[#B35C44]/20">
                    {submittedDonation.status} (Awaiting Direct Coordination)
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#5A5A40] max-w-md mx-auto leading-relaxed">
                A community trustee from SEYON Operational Trust will reach out to your email at <strong className="text-[#4A3728]">{submittedDonation.donorEmail}</strong> to share official trust banking information or coordinate sapling/seed drop-offs.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmittedDonation(null)}
                  className="px-6 py-2.5 rounded-full bg-[#B35C44] text-white text-xs font-bold hover:bg-[#9B4F3B] transition-colors uppercase tracking-wider shadow-sm shadow-[#B35C44]/20"
                >
                  Record Another Support Pledge
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#F5F5F0] rounded-3xl p-8 sm:p-10 border border-[#5A5A40]/15 space-y-6 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Donor Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#4A3728] flex items-center gap-1">
                    Your Name / Organization <span className="text-[#B35C44]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.donorName}
                    onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                    placeholder="e.g. S. Meenakshi"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.donorName ? 'border-red-400 bg-red-50/30' : 'border-[#5A5A40]/20'
                    } focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40`}
                  />
                  {errors.donorName && <p className="text-[11px] text-red-600">{errors.donorName}</p>}
                </div>

                {/* Donor Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#4A3728] flex items-center gap-1">
                    Email Address <span className="text-[#B35C44]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.donorEmail}
                    onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
                    placeholder="e.g. meenakshi@example.com"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.donorEmail ? 'border-red-400 bg-red-50/30' : 'border-[#5A5A40]/20'
                    } focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40`}
                  />
                  {errors.donorEmail && <p className="text-[11px] text-red-600">{errors.donorEmail}</p>}
                </div>

                {/* Support Type */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-[#4A3728]">
                    Support Type <span className="text-[#B35C44]">*</span>
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as SupportType })}
                    className="w-full px-4 py-3 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40"
                  >
                    {supportTypes.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amount (if monetary) */}
                {(formData.type === 'Monetary support' || formData.type === 'Infrastructure-specific support') && (
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-[#4A3728]">
                      Pledged Amount (INR ₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-sm font-bold text-[#5A5A40]">₹</span>
                      <input
                        type="number"
                        min="500"
                        step="500"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        placeholder="e.g. 10000"
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {['5000', '10000', '25000', '50000', '100000'].map((amt) => (
                        <button
                          type="button"
                          key={amt}
                          onClick={() => setFormData({ ...formData, amount: amt })}
                          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${
                            formData.amount === amt
                              ? 'bg-[#4A3728] text-white border-[#4A3728]'
                              : 'bg-[#EBEBE3]/60 text-[#4A3728] border-[#5A5A40]/20 hover:bg-[#EBEBE3]'
                          }`}
                        >
                          ₹{Number(amt).toLocaleString('en-IN')}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description & Details */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-[#4A3728]">
                    Details / Variety Description / Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="e.g. 20 kg traditional seeraga samba seeds, 50 native Kadamba saplings, or notes on infrastructure sponsorship..."
                    className="w-full px-4 py-3 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-sm bg-[#EBEBE3]/40"
                  />
                </div>
              </div>

              {/* Note on payment processing */}
              <div className="p-4 bg-[#EBEBE3] rounded-2xl border border-[#5A5A40]/15 text-xs text-[#4A3728]/80 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                <p>
                  <strong>Note on Transparency:</strong> In accordance with our non-commercial ethos, this form registers your support pledge. Direct bank transfers to the official Iyalvanam Asset Trust bank account will be coordinated personally with a formal receipt.
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest shadow-sm shadow-[#B35C44]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Pledge...</span>
                  ) : (
                    <>
                      <span>Record Support Pledge</span>
                      <Heart className="w-4 h-4 fill-current opacity-80" />
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
