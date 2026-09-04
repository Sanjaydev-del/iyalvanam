import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Filter, 
  CheckCircle2, 
  Info,
  Sparkles
} from 'lucide-react';
import { communityFAQs, FAQItem } from '../content/faqs';
import { useLanguage } from '../context/LanguageContext';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  initialCategory?: string;
  compact?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Questions & Clarity',
  subtitle = '25 foundational answers regarding life, stewardship, finances, and governance at Iyalvanam & Seyon.',
  initialCategory = 'all',
  compact = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<number | null>(1);
  const { language } = useLanguage();
  const isTamil = language === 'ta';

  const categories = [
    { id: 'all', label: 'All 25 Questions', tamil: 'அனைத்து 25 வினாக்கள்' },
    { id: 'vision', label: 'Vision & Nature', tamil: 'நோக்கம் & தத்துவம்' },
    { id: 'joining', label: 'Joining & Alignment', tamil: 'இணைதல் & இயைபு' },
    { id: 'lifestyle', label: 'Life & Housing', tamil: 'வாழ்வியல் & உழைப்பு' },
    { id: 'finances', label: 'Finances & Funds', tamil: 'பொருளாதாரம் & பங்களிப்பு' },
  ];

  const filteredFAQs = communityFAQs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.questionTamil && faq.questionTamil.includes(searchQuery)) ||
      (faq.bulletPoints && faq.bulletPoints.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#ECE6D8] text-[#8B5A2B] text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-[#2E4F2B]" />
          <span>Community FAQ • பொது வினா விடைகள்</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#2E4F2B] tracking-tight">
          {isTamil ? 'அடிக்கடி கேட்கப்படும் வினாக்களும் விளக்கங்களும்' : title}
        </h2>
        <p className="text-sm text-[#5A5046] leading-relaxed">
          {isTamil ? 'இயல்வனம் மற்றும் சேயோன் பற்றிய 25 தெளிவான விளக்கங்கள்.' : subtitle}
        </p>
      </div>

      {/* Controls: Search & Category Filter */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#8B5A2B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isTamil ? 'கேள்விகளைத் தேடுக...' : 'Search questions, keywords (e.g. land, house, children, fee)...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-[#FAF8F3] border border-[#E3DDD2] text-xs sm:text-sm text-[#241D17] focus:outline-none focus:border-[#2E4F2B]"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#2E4F2B] text-[#FAF8F3] font-bold shadow-xs'
                  : 'bg-[#FAF8F3] border border-[#E3DDD2] text-[#5A5046] hover:text-[#2E4F2B] hover:bg-[#ECE6D8]'
              }`}
            >
              {isTamil ? cat.tamil : cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-3">
        {filteredFAQs.length === 0 ? (
          <div className="p-8 text-center bg-[#FAF8F3] border border-[#E3DDD2] rounded-sm text-xs text-[#5A5046]">
            No matching questions found for "{searchQuery}". Try selecting another category or clear the search.
          </div>
        ) : (
          filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#FAF8F3] border border-[#E3DDD2] rounded-sm overflow-hidden transition-colors hover:border-[#2E4F2B]/40"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#8B5A2B] pt-0.5 shrink-0">
                      {String(faq.id).padStart(2, '0')}.
                    </span>
                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-[#241D17] leading-snug">
                        {faq.question}
                      </h3>
                      {faq.questionTamil && (
                        <p className="text-xs text-[#8B5A2B] font-medium">
                          {faq.questionTamil}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-1 rounded-xs bg-[#F5F2EB] text-[#2E4F2B] shrink-0 mt-0.5">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#8B5A2B]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#2E4F2B]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 border-t border-[#E3DDD2] text-xs sm:text-sm text-[#5A5046] space-y-3 bg-[#FAF8F3]/50">
                    <p className="leading-relaxed font-medium text-[#241D17]">
                      {faq.answer}
                    </p>

                    {faq.bulletPoints && faq.bulletPoints.length > 0 && (
                      <ul className="space-y-1.5 pl-2 border-l-2 border-[#8B5A2B]/40 my-2">
                        {faq.bulletPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#2E4F2B] font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {faq.note && (
                      <div className="p-3 bg-[#F5F2EB] rounded-xs border border-[#E3DDD2] text-[11px] sm:text-xs text-[#8B5A2B] font-semibold italic">
                        {faq.note}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Closing Note Banner (Slide 25 / FAQ closing) */}
      <div className="p-6 bg-[#FAF8F3] border-l-3 border-[#2E4F2B] border-y border-r border-[#E3DDD2] rounded-sm space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E4F2B]">
          <Sparkles className="w-4 h-4 text-[#8B5A2B]" />
          <span>A Word on Discernment & Readiness</span>
        </div>
        <p className="text-sm font-serif italic text-[#241D17]">
          “This is not for everyone. If you are clear, ready, and committed — you will know.”
        </p>
        <p className="text-xs text-[#5A5046]">
          Take your time to reflect upon these questions. If you feel mutual alignment, we invite you to start a direct dialogue with our stewards.
        </p>
      </div>
    </div>
  );
};
