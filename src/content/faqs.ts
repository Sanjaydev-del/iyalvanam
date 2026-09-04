export interface FAQItem {
  id: number;
  category: 'vision' | 'joining' | 'lifestyle' | 'finances';
  categoryLabel: string;
  categoryLabelTamil: string;
  question: string;
  questionTamil?: string;
  answer: string;
  bulletPoints?: string[];
  note?: string;
}

export const communityFAQs: FAQItem[] = [
  {
    id: 1,
    category: 'vision',
    categoryLabel: 'Vision & Nature',
    categoryLabelTamil: 'நோக்கம் & தத்துவம்',
    question: 'What is IYALVANAM?',
    questionTamil: 'இயல்வனம் என்றால் என்ன?',
    answer: 'IYALVANAM is a land-based community being built to live in alignment with nature and its laws. It is not a project or retreat. It is a way of living.',
  },
  {
    id: 2,
    category: 'vision',
    categoryLabel: 'Vision & Nature',
    categoryLabelTamil: 'நோக்கம் & தத்துவம்',
    question: 'What is SEYON?',
    questionTamil: 'சேயோன் என்றால் என்ன?',
    answer: 'SEYON – Natural Life Foundation is the operational trust that manages community life and programs.',
    bulletPoints: [
      'It manages people, activities, and finances',
      'It is the interface with the external world',
      'IYALVANAM holds the land. SEYON runs the community.'
    ],
  },
  {
    id: 3,
    category: 'joining',
    categoryLabel: 'Joining & Alignment',
    categoryLabelTamil: 'இணைதல் & இயைபு',
    question: 'Who can join this community?',
    questionTamil: 'யார் இந்த சமூகத்தில் இணையலாம்?',
    answer: 'Only those who clearly see that current systems are not aligned with human life, want to step out of it, and are ready to build a different way of living.',
    bulletPoints: [
      'Clearly see that current systems are not aligned with human life',
      'Want to step out of the artificial construct',
      'Are ready to actively build a different way of living'
    ],
    note: 'This is not for casual interest.'
  },
  {
    id: 4,
    category: 'vision',
    categoryLabel: 'Vision & Nature',
    categoryLabelTamil: 'நோக்கம் & தத்துவம்',
    question: 'Is this a retreat or temporary stay?',
    questionTamil: 'இது ஒரு தற்காலிக விடுதியா அல்லது சுற்றுலாத் தளமா?',
    answer: 'No. This is not a retreat, not a program, not an experience. It is for people looking for a long-term shift in how they live.',
  },
  {
    id: 5,
    category: 'joining',
    categoryLabel: 'Joining & Alignment',
    categoryLabelTamil: 'இணைதல் & இயைபு',
    question: 'Do I need to leave my current life completely?',
    questionTamil: 'எனது தற்போதைய வாழ்க்கை முறையை முழுமையாக கைவிட வேண்டுமா?',
    answer: 'Yes. This requires a full commitment. Partial involvement while staying dependent on the current system will not work.',
  },
  {
    id: 6,
    category: 'lifestyle',
    categoryLabel: 'Life & Housing',
    categoryLabelTamil: 'வாழ்வியல் & உழைப்பு',
    question: 'What kind of lifestyle can I expect?',
    questionTamil: 'இங்கு எத்தகைய வாழ்க்கை முறையை எதிர்பார்க்கலாம்?',
    answer: 'A life grounded in natural rhythm, physical work, and community responsibility.',
    bulletPoints: [
      'Simple living',
      'Physical work (farming, natural building, maintenance)',
      'Shared responsibilities and collective kitchen',
      'Minimal dependence on external systems'
    ],
    note: 'Comfort and convenience are not priorities.'
  },
  {
    id: 7,
    category: 'joining',
    categoryLabel: 'Joining & Alignment',
    categoryLabelTamil: 'இணைதல் & இயைபு',
    question: 'Is prior experience required?',
    questionTamil: 'முன் அனுபவம் ஏதேனும் தேவையா?',
    answer: 'No. Mindset matters more than experience.',
    bulletPoints: [
      'Willing to learn',
      'Open to daily physical work',
      'Ready to adapt to natural cycles'
    ],
    note: 'Mindset matters more than experience.'
  },
  {
    id: 8,
    category: 'finances',
    categoryLabel: 'Finances & Contributions',
    categoryLabelTamil: 'பொருளாதாரம் & பங்களிப்பு',
    question: 'Is money required to join?',
    questionTamil: 'இணைவதற்கு பணம் முக்கிய அளவுகோலா?',
    answer: 'Money is not the deciding factor. Alignment is. However, financial contribution is required to build the community infrastructure.',
  },
  {
    id: 9,
    category: 'finances',
    categoryLabel: 'Finances & Contributions',
    categoryLabelTamil: 'பொருளாதாரம் & பங்களிப்பு',
    question: 'What is the joining contribution?',
    questionTamil: 'இணைவதற்கான ஆரம்ப பங்களிப்பு எவ்வளவு?',
    answer: '₹1,00,000 for a family of up to 3 members, and ₹25,000 for each additional member.',
    bulletPoints: [
      '₹1,00,000 for a family of up to 3 members',
      '₹25,000 for each additional member',
      'Non-refundable',
      'Dedicated 100% to permanent trust commons & setup'
    ],
  },
  {
    id: 10,
    category: 'finances',
    categoryLabel: 'Finances & Contributions',
    categoryLabelTamil: 'பொருளாதாரம் & பங்களிப்பு',
    question: 'Are there any other financial contributions?',
    questionTamil: 'வேறு ஏதேனும் நிதிப் பங்களிப்புகள் உண்டா?',
    answer: 'Yes, but they are voluntary and based on individual capacity. Those committed contribute as much as they can.',
    note: 'Members must have enough funds to manage their personal expenses for at least 2 years.'
  },
  {
    id: 11,
    category: 'lifestyle',
    categoryLabel: 'Life & Housing',
    categoryLabelTamil: 'வாழ்வியல் & உழைப்பு',
    question: 'Do I get ownership of land or property?',
    questionTamil: 'எனக்கு நிலம் அல்லது சொத்துரிமை கிடைக்குமா?',
    answer: 'No individual ownership of any land or property is permitted.',
    bulletPoints: [
      'No private ownership',
      'No shareholding',
      'No personal claim on sanctuary assets'
    ],
    note: 'All assets are held perpetually under IYALVANAM Trust.'
  },
  {
    id: 12,
    category: 'lifestyle',
    categoryLabel: 'Life & Housing',
    categoryLabelTamil: 'வாழ்வியல் & உழைப்பு',
    question: 'Can I build my own house?',
    questionTamil: 'நான் எனக்கான தனி வீட்டைக் கட்டிக்கொள்ளலாமா?',
    answer: 'You may participate in building living spaces using natural earthen materials, but nothing is privately owned. All structures remain part of the community commons.',
  },
  {
    id: 13,
    category: 'finances',
    categoryLabel: 'Finances & Contributions',
    categoryLabelTamil: 'பொருளாதாரம் & பங்களிப்பு',
    question: 'How is money handled?',
    questionTamil: 'நிதி எவ்வாறு நிர்வகிக்கப்படுகிறது?',
    answer: 'All finances are managed transparently through SEYON Nature Life Foundation exclusively for community development and functioning.',
  },
  {
    id: 14,
    category: 'joining',
    categoryLabel: 'Joining & Alignment',
    categoryLabelTamil: 'இணைதல் & இயைபு',
    question: 'How do I join?',
    questionTamil: 'நான் எவ்வாறு இணைவது?',
    answer: 'Connect with the core team through SEYON, have direct dialogue and living interaction. If there is mutual alignment, you are invited to join. There is no formal corporate application process.',
  },
  {
    id: 15,
    category: 'finances',
    categoryLabel: 'Finances & Contributions',
    categoryLabelTamil: 'பொருளாதாரம் & பங்களிப்பு',
    question: 'What if I join and later want to leave?',
    questionTamil: 'இணைந்த பிறகு நான் வெளியேற விரும்பினால் என்ன நடக்கும்?',
    answer: 'You are free to leave with dignity and mutual blessing at any time.',
    bulletPoints: [
      'Joining contribution is non-refundable',
      'Voluntary contributions may be refunded without interest, based on availability of funds and with sufficient notice'
    ],
  },
  {
    id: 16,
    category: 'finances',
    categoryLabel: 'Finances & Contributions',
    categoryLabelTamil: 'பொருளாதாரம் & பங்களிப்பு',
    question: 'Can I take back anything I contributed?',
    questionTamil: 'நான் வழங்கிய பங்களிப்பை திரும்பப் பெற முடியுமா?',
    answer: 'No claims on land, infrastructure, or community assets. Only voluntary financial contributions may be returned subject to fund availability and notice conditions.',
  },
  {
    id: 17,
    category: 'lifestyle',
    categoryLabel: 'Life & Housing',
    categoryLabelTamil: 'வாழ்வியல் & உழைப்பு',
    question: 'What happens if someone doesn’t follow the principles?',
    questionTamil: 'யாரேனும் விழுமியங்களைப் பின்பற்றாவிட்டால் என்ன நடக்கும்?',
    answer: 'The issue is addressed directly in circle dialogue. If misalignment continues, the person may be asked to leave. This is necessary to protect the sanctity and stability of the community.',
  },
  {
    id: 18,
    category: 'lifestyle',
    categoryLabel: 'Life & Housing',
    categoryLabelTamil: 'வாழ்வியல் & உழைப்பு',
    question: 'Is there any leadership or hierarchy?',
    questionTamil: 'இங்கு அதிகார படிநிலை அல்லது தலைமை அமைப்பு உண்டா?',
    answer: 'There is no traditional hierarchy.',
    bulletPoints: [
      'Responsibility is shared equally',
      'Decisions are made collectively through open circle consensus'
    ],
  },
  {
    id: 19,
    category: 'vision',
    categoryLabel: 'Vision & Nature',
    categoryLabelTamil: 'நோக்கம் & தத்துவம்',
    question: 'Will this community grow large?',
    questionTamil: 'இந்த சமூகம் மிகப்பெரிய அளவில் விரிவாக்கம் செய்யப்படுமா?',
    answer: 'No. The focus is not on scaling one place, but on creating multiple independent, self-reliant nature communities over time.',
  },
  {
    id: 20,
    category: 'finances',
    categoryLabel: 'Finances & Contributions',
    categoryLabelTamil: 'பொருளாதாரம் & பங்களிப்பு',
    question: 'Why is the joining contribution non-refundable?',
    questionTamil: 'இணைவு பங்களிப்பு ஏன் திரும்பப் பெற முடியாததாக உள்ளது?',
    answer: 'To ensure deep commitment, community stability, and eliminate short-term or casual participation, protecting the community from instability.',
  },
  {
    id: 21,
    category: 'vision',
    categoryLabel: 'Vision & Nature',
    categoryLabelTamil: 'நோக்கம் & தத்துவம்',
    question: 'What makes this different from other communities?',
    questionTamil: 'மற்ற சமூகங்களிலிருந்து இயல்வனம் எவ்வாறு வேறுபடுகிறது?',
    answer: 'A pure return to natural laws without commercial compromise.',
    bulletPoints: [
      'No ownership structure (held in perpetual trust)',
      'No dependency on artificial systems',
      'No identity-based divisions (caste, religion, race, wealth)',
      'Built from the ground up with full human self-responsibility'
    ],
  },
  {
    id: 22,
    category: 'joining',
    categoryLabel: 'Joining & Alignment',
    categoryLabelTamil: 'இணைதல் & இயைபு',
    question: 'What is expected from me after joining?',
    questionTamil: 'இணைந்த பிறகு என்னிடம் என்ன எதிர்பார்க்கப்படுகிறது?',
    answer: 'Daily active contribution through work and shared responsibility, active participation in community life, and alignment with natural living principles. This is not a passive space.',
  },
  {
    id: 23,
    category: 'joining',
    categoryLabel: 'Joining & Alignment',
    categoryLabelTamil: 'இணைதல் & இயைபு',
    question: 'Can families join?',
    questionTamil: 'குடும்பங்கள் இணையலாமா?',
    answer: 'Yes. But all members of the family must be aligned with the natural way of living.',
  },
  {
    id: 24,
    category: 'joining',
    categoryLabel: 'Joining & Alignment',
    categoryLabelTamil: 'இணைதல் & இயைபு',
    question: 'Is this suitable for children?',
    questionTamil: 'இது குழந்தைகளுக்கு ஏற்ற சூழலா?',
    answer: 'Yes — if the family is fully committed. Children grow through real-life learning, nature-based immersion, and a supportive community environment without artificial pressures.',
  },
  {
    id: 25,
    category: 'vision',
    categoryLabel: 'Vision & Nature',
    categoryLabelTamil: 'நோக்கம் & தத்துவம்',
    question: 'What is the long-term goal?',
    questionTamil: 'நீண்டகால இலக்கு என்ன?',
    answer: 'To create a self-sustaining, nature-aligned way of living, and enable similar sovereign nature communities to emerge elsewhere.',
    note: 'Closing Note: This is not for everyone. If you are clear, ready, and committed — you will know.'
  }
];
