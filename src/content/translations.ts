export interface TranslationContent {
  nav: {
    hero: string;
    etymology: string;
    philosophy: string;
    pillars: string;
    principles: string;
    spiritual: string;
    land: string;
    governance: string;
    community: string;
    founders: string;
    journal: string;
    subTitle: string;
    locationBadge: string;
    tagline: string;
    joinCommunity: string;
    callFounder: string;
    callCoFounder: string;
    foundersContactHeader: string;
  };
  hero: {
    locationBadge: string;
    subLocation: string;
    title: string;
    tagline: string;
    trustsSubtitle: string;
    description: string;
    ctaExplore: string;
    ctaJoin: string;
    imageCaptionTitle: string;
    imageCaptionSub: string;
  };
  etymology: {
    badge: string;
    heading: string;
    subheading: string;
    cards: Array<{
      letter: string;
      title: string;
      subtitle: string;
      desc: string;
      footer: string;
    }>;
  };
  philosophy: {
    badge: string;
    heading: string;
    subheading: string;
    tenets: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
    elementsBadge: string;
    elementsHeading: string;
    elementsSubheading: string;
    elements: Array<{
      name: string;
      desc: string;
    }>;
  };
  vision: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    footerQuote: string;
    footerBrand: string;
  };
  pillars: {
    badge: string;
    heading: string;
    subheading: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  standFor: {
    badge: string;
    heading: string;
    subheading: string;
    lifeBuiltOnTitle: string;
    lifeBuiltOnItems: Array<{
      title: string;
      desc: string;
    }>;
    noPlaceTitle: string;
    noPlaceItems: Array<{
      title: string;
      desc: string;
    }>;
  };
  principles: {
    badge: string;
    heading: string;
    subheading: string;
    items: Array<{
      id: string;
      number: string;
      title: string;
      summary: string;
      details: string;
    }>;
  };
  spiritual: {
    badge: string;
    heading: string;
    subheading: string;
    shifts: Array<{
      stage: string;
      from: string;
      to: string;
      desc: string;
    }>;
  };
  ethics: {
    badge: string;
    heading: string;
    subheading: string;
    commitments: Array<{
      title: string;
      desc: string;
    }>;
  };
  land: {
    badge: string;
    heading: string;
    subheading: string;
    coordinatesLabel: string;
    coordinatesDistrict: string;
    railTitle: string;
    railDesc: string;
    airTitle: string;
    airDesc: string;
    ecoTitle: string;
    ecoDesc: string;
  };
  governance: {
    badge: string;
    heading: string;
    subheading: string;
    assetTrustBadge: string;
    assetTrustTitle: string;
    assetTrustPoints: string[];
    assetTrustQuote: string;
    operationalTrustBadge: string;
    operationalTrustTitle: string;
    operationalTrustPoints: string[];
    operationalTrustQuote: string;
    consensusTitle: string;
    consensusDesc: string;
    consensusBadge: string;
  };
  community: {
    badge: string;
    heading: string;
    subheading: string;
    columns: Array<{
      title: string;
      desc: string;
      points: string[];
    }>;
  };
  contribution: {
    badge: string;
    heading: string;
    subheading: string;
    steps: Array<{
      stepNumber: string;
      stepType: string;
      title: string;
      desc: string;
    }>;
    fundBadge: string;
    fundHeading: string;
    fundSubheading: string;
    fundItems: Array<{
      title: string;
      desc: string;
    }>;
  };
  founders: {
    badge: string;
    heading: string;
    subheading: string;
    founderName: string;
    founderRole: string;
    founderBio1: string;
    founderBio2: string;
    founderQuote: string;
    founderCallBtn: string;
    founderLocation: string;
    coFounderName: string;
    coFounderRole: string;
    coFounderBio1: string;
    coFounderBio2: string;
    coFounderQuote: string;
    coFounderCallBtn: string;
    coFounderLocation: string;
  };
  closing: {
    badge: string;
    heading: string;
    subheading: string;
    btnWhatsapp: string;
    btnEmail: string;
    footerBlessing: string;
  };
  footer: {
    bannerTagline: string;
    bannerHeading: string;
    bannerSub: string;
    bannerBtn: string;
    brandDesc: string;
    sanctuaryAddress: string;
    districtState: string;
    sectionsTitle: string;
    navHero: string;
    navEtymology: string;
    navPhilosophy: string;
    navPillars: string;
    navPrinciples: string;
    navLand: string;
    stewardsTitle: string;
    founderTitle: string;
    coFounderTitle: string;
    trustStructureTitle: string;
    assetTrustDesc: string;
    operationalTrustDesc: string;
    copyright: string;
    bottomTagline: string;
  };
}

export const translations: Record<'en' | 'ta', TranslationContent> = {
  en: {
    nav: {
      hero: 'Vision & Hero',
      etymology: 'Etymology',
      philosophy: '5 Elements',
      pillars: '8 Pillars',
      principles: 'Principles',
      spiritual: 'Spiritual Path',
      land: 'Tenkasi Land & Map',
      governance: 'Trust Governance',
      community: 'Community Life',
      founders: 'Founders',
      journal: 'Sanctuary Journal',
      subTitle: 'Center for Natural Living',
      locationBadge: 'Sivasailam, Tenkasi',
      tagline: 'Two Trusts • One Sovereign Vision',
      joinCommunity: 'Join WhatsApp Community',
      callFounder: '+91 96007 56007',
      callCoFounder: '+91 94440 98765',
      foundersContactHeader: 'Founders Direct Contact',
    },
    hero: {
      locationBadge: 'Dharmapuramadam & Sivasailam',
      subLocation: 'Tenkasi District, Western Ghats',
      title: 'Iyalvanam Iyarkai Vazhviyal Koodam',
      tagline: '“Let us return to nature as much as possible”',
      trustsSubtitle: 'Two Trusts. One Sovereign Vision — Return to Nature',
      description: 'A conscious land sanctuary in Tamil Nadu dedicated to non-artificial living, ancestral ecology, pristine open-well water, and intergenerational self-reliance.',
      ctaExplore: 'Explore the Vision',
      ctaJoin: 'Join the Community (WhatsApp)',
      imageCaptionTitle: 'Western Ghats Foothills Sanctuary',
      imageCaptionSub: 'Agasthiyarmalai Biosphere Reserve perimeter • Tenkasi District',
    },
    etymology: {
      badge: 'The Sacred Roots of Our Name',
      heading: 'Understanding the Sacred Name: Iyal-Vanam-Koodam',
      subheading: 'Every syllable of our identity is rooted in classical Tamil ecological wisdom and respect for natural laws.',
      cards: [
        {
          letter: 'I',
          title: 'Iyal',
          subtitle: 'The Natural State',
          desc: 'That which is inherent, spontaneous, unforced, and true. Living in strict alignment with the natural design of the human body and mind.',
          footer: 'Pure, non-artificial natural law',
        },
        {
          letter: 'V',
          title: 'Vanam',
          subtitle: 'The Living Forest',
          desc: 'The ancient multi-layered forest canopy, the sacred grove, and the shelter of living soil, birds, waters, and wild biodiversity.',
          footer: 'Living green canopy safeguarding life',
        },
        {
          letter: 'K',
          title: 'Koodam',
          subtitle: 'The Assembly Sanctuary',
          desc: 'The community hall, the circle of seekers, and the shared space where families gather to work, learn, cook, and dwell without hierarchy.',
          footer: 'Sacred commons for learning and sharing',
        },
        {
          letter: 'R',
          title: 'The Return',
          subtitle: 'Returning to the Fundamental',
          desc: 'We do not need to invent complex artificial systems. We merely need to return, step by step, to the natural way that supported life for eons.',
          footer: 'Returning to what is fundamental: freedom, soil, connection.',
        },
      ],
    },
    philosophy: {
      badge: 'Foundational Philosophy',
      heading: 'Five Core Tenets of Natural Living',
      subheading: 'Health, sanity, and sovereignty emerge effortlessly when we cease violating natural laws and re-align our daily habits with the universe.',
      tenets: [
        {
          num: '01',
          title: 'Non-Artificial Living',
          desc: 'Eliminating synthetic chemicals, ultra-processed food, toxic medicine, and artificial dependencies from daily life.',
        },
        {
          num: '02',
          title: 'Perpetual Nature Commons',
          desc: 'Holding land permanently in trust for ecology. Land is not a financial asset to be bought, sold, or fragmented.',
        },
        {
          num: '03',
          title: 'Living Food Sovereignty',
          desc: 'Consuming heirloom seeds, native millets, tender coconut, bananas, and living produce harvested straight from the branch.',
        },
        {
          num: '04',
          title: 'Autonomous Circles',
          desc: 'Replacing bureaucratic hierarchies and coercion with patient consensus circles rooted in truth and trust.',
        },
        {
          num: '05',
          title: 'Intergenerational Ecology',
          desc: 'Ensuring children inherit uncontaminated water tables, rich forest loam, and living reverence for all beings.',
        },
      ],
      elementsBadge: 'Pancha Bhootas • Five Elements',
      elementsHeading: 'The Living Medicine of the Five Elements',
      elementsSubheading: 'We don’t create a new health system. We return to the five elements that created the human body over millions of years.',
      elements: [
        {
          name: 'Space (Sky)',
          desc: 'Mental stillness, digital detox, spaciousness, and unhurried time under the open mountain sky.',
        },
        {
          name: 'Air (Wind)',
          desc: 'Pristine mountain forest air, rich in negative ions, oxygenating blood cells effortlessly.',
        },
        {
          name: 'Fire (Sunlight)',
          desc: 'Surya Upasana, daily morning sunlight absorption, circadian synchronization, and natural vitality.',
        },
        {
          name: 'Water (Rain & Well)',
          desc: 'Living, unchlorinated open-well water and mountain monsoon showers rich in natural minerals.',
        },
        {
          name: 'Earth (Loam & Soil)',
          desc: 'Barefoot earthing on forest loam, living organic mulch, and breathable mud-stone architecture.',
        },
      ],
    },
    vision: {
      badge: 'The Sovereign Vision',
      heading: 'To liberate human life from artificial systems and restore our sacred connection with the earth.',
      p1: 'Modern society has organized human existence around artificial metrics: corporate cubicles, toxic processed food, debt slavery, synthetic pharmaceuticals, and screen addiction. In doing so, we have traded away our physical health, our mental peace, and our children’s future.',
      p2: 'Iyalvanam & SEYON exist as a real, tangible alternative. In Tenkasi, at the feet of the Western Ghats, we are proving that multi-generational families can live with radiant health, complete food sovereignty, zero chemical pollution, and profound spiritual tranquility.',
      footerQuote: '“Human beings were created to truly live, not merely to race.”',
      footerBrand: 'IYALVANAM & SEYON COMMONS',
    },
    pillars: {
      badge: 'The Architecture of Wholeness',
      heading: '8 Pillars of Conscious Community Living',
      subheading: 'A comprehensive framework covering every aspect of regenerative human society.',
      items: [
        {
          title: '1. Regenerative Living',
          desc: 'Soil building, multi-tier food forest agroforestry, and leaving every square meter of earth richer than we found it.',
        },
        {
          title: '2. Conscious Education',
          desc: 'Hands-in-soil learning for children, free from competitive exams, emphasizing craft, botany, wisdom, and emotional balance.',
        },
        {
          title: '3. Conscious Technology',
          desc: 'Appropriate, non-addictive tech: decentralized solar power, gravity water pumps, and zero digital invasion of sacred family spaces.',
        },
        {
          title: '4. Food Sovereignty',
          desc: 'Saving traditional heirloom seeds, unpolished millets, mountain bananas, and zero dependency on commercial supermarket chains.',
        },
        {
          title: '5. Skill-Based Economy',
          desc: 'Carpentry, natural earthen building, seed preservation, natural textile weaving, and cooperative barter trade.',
        },
        {
          title: '6. Conscious Evolution',
          desc: 'Daily meditation, inner quietude, gratitude circles, and moving past the modern ego obsession toward oneness.',
        },
        {
          title: '7. Holistic Health',
          desc: 'Healing through fasting, sunlight, open-well mineral water, circadian rest, and direct resonance with the Pancha Bhootas.',
        },
        {
          title: '8. Consensus Governance',
          desc: 'Equal voice in communal decision circles. No political factions, no corporate hierarchy, and no coercion.',
        },
      ],
    },
    standFor: {
      badge: 'Clarity of Purpose',
      heading: 'What We Stand For & What Has No Place Here',
      subheading: 'A community is defined as much by what it rejects as by what it creates.',
      lifeBuiltOnTitle: 'Life Built On',
      lifeBuiltOnItems: [
        {
          title: 'Living Soil & Heirloom Crops:',
          desc: 'Regenerating the Western Ghats ecology through native biodiversity and multi-layer food forests.',
        },
        {
          title: 'Intergenerational Community:',
          desc: 'Extended families, elders, and children living together with mutual care and shared laughter.',
        },
        {
          title: 'Seasonal Rhythms & Circadian Flow:',
          desc: 'Waking with the sunrise, working with hands in soil, and retiring in peaceful darkness.',
        },
        {
          title: 'Decentralized Autonomy:',
          desc: 'Self-sufficiency in clean water, solar energy, food, and low-cost earthen construction.',
        },
        {
          title: 'Truth & Direct Dialogue:',
          desc: 'Solving community tensions face-to-face in open circle councils under the banyan tree.',
        },
      ],
      noPlaceTitle: 'No Place Here For',
      noPlaceItems: [
        {
          title: 'Toxic Agrochemicals & GMOs:',
          desc: 'Chemical pesticides, synthetic weedkillers, and monoculture cash crop exploitation.',
        },
        {
          title: 'Real Estate Speculation & Greed:',
          desc: 'Flipping land for private financial profit, partitioning sanctuary soil, or landlordism.',
        },
        {
          title: 'Hierarchical Domination & Power Play:',
          desc: 'Centralized autocrats, political parties, or religious dogma imposed on others.',
        },
        {
          title: 'Ultra-Processed Factory Commodities:',
          desc: 'Refined sugars, synthetic palm oils, and plastic-wrapped factory foods.',
        },
        {
          title: 'Compulsive Screen Addiction:',
          desc: 'Devices dominating meals, conversations, or childhood natural development.',
        },
      ],
    },
    principles: {
      badge: 'Guiding Declarations',
      heading: '8 Core Principles of the Commons',
      subheading: 'Click on any principle to inspect its foundational meaning and community implementation.',
      items: [
        {
          id: 'principle-1',
          number: '01',
          title: 'The Primacy of Natural Law',
          summary: 'Human systems must adapt to ecological law, not force nature to bend to industrial convenience.',
          details: 'Everything in the sanctuary — from sleep cycles to waste management — honors the immutable laws of nature. We do not try to engineer synthetic shortcuts around biological realities.',
        },
        {
          id: 'principle-2',
          number: '02',
          title: 'Land as Sacred Commons, Never a Commodity',
          summary: 'Land cannot be owned as private speculative property. It is held in trust for generations to come.',
          details: 'By separating perpetual land ownership under Iyalvanam Asset Trust, we remove the corrupting incentives of real estate speculation, parcel fragmentation, and landlord exploitation.',
        },
        {
          id: 'principle-3',
          number: '03',
          title: 'Food as Living Medicine & Sovereignty',
          summary: 'We nourish our bodies strictly with non-artificial, heirloom, seasonal produce grown without chemicals.',
          details: 'Traditional millets, unpolished indigenous rice varieties, mountain bananas, fresh coconut, and native greens harvested at peak vitality form our daily sustenance. Health is the natural state of clean nourishment.',
        },
        {
          id: 'principle-4',
          number: '04',
          title: 'Low-Impact Earthen & Stone Architecture',
          summary: 'Structures built from local clay, lime, stone, bamboo, and terracotta that breathe with the climate.',
          details: 'Every home and communal shelter is built without toxic cement, artificial paints, or energy-intensive materials. When a dwelling has completed its generational purpose, it can dissolve gently back into the earth.',
        },
        {
          id: 'principle-5',
          number: '05',
          title: 'Consensus Decision Making Over Coercion',
          summary: 'We discard adversarial majority voting in favor of patience, deep listening, and unified consensus.',
          details: 'Decisions impacting the collective commons are discussed in open circles until every steward understands and consents. Disagreements are met with dialogue, not political domination.',
        },
        {
          id: 'principle-6',
          number: '06',
          title: 'Decentralized Energy & Clean Water Autonomy',
          summary: 'Self-reliance through solar micro-grids, open well rainwater harvesting, and dry compost systems.',
          details: 'We preserve every drop of pristine Western Ghats rain through deep open wells, mulching, and swales. Human waste is composted safely into microbial humus for agroforestry rather than polluting water bodies.',
        },
        {
          id: 'principle-7',
          number: '07',
          title: 'Intergenerational Wisdom & Natural Childhood',
          summary: 'Children learn in direct contact with forest, soil, animals, manual crafts, and elders.',
          details: 'Education is unhooked from stressful corporate competition and artificial rote memorization. Children develop physical vitality, emotional stability, problem-solving, and deep reverence for life.',
        },
        {
          id: 'principle-8',
          number: '08',
          title: 'Non-Injury and Conscious Simplicity (Ahimsa)',
          summary: 'Living lightly with minimal consumer possessions, radical honesty, and reverence for all living beings.',
          details: 'True wealth is measured not by accumulated commodities or bank accounts, but by the abundance of clean water, healthy soil, joyous relationships, peaceful minds, and natural freedom.',
        },
      ],
    },
    spiritual: {
      badge: 'Inner Evolution',
      heading: 'The Three Consciousness Shifts',
      subheading: 'Our spiritual foundation is non-sectarian and grounded in experiential reality. We move intentionally through three deep developmental progressions:',
      shifts: [
        {
          stage: 'Stage 01',
          from: 'Fear & Scarcity',
          to: 'Love & Trust',
          desc: 'Stepping out of modern survival anxieties and hoarding mindsets into deep experiential trust in the abundance of living nature.',
        },
        {
          stage: 'Stage 02',
          from: 'Separation & Isolation',
          to: 'Unity & Interconnectedness',
          desc: 'Dissolving the synthetic ego illusion that humans stand apart from trees, soil, waters, and fellow beings.',
        },
        {
          stage: 'Stage 03',
          from: 'Survival & Competition',
          to: 'Creation & Sacred Contribution',
          desc: 'Moving beyond exhausting consumer rat-races toward joyful collective service, regenerative crafting, and shared spiritual peace.',
        },
      ],
    },
    ethics: {
      badge: 'Living In Sacred Covenant',
      heading: 'Ethical Commitments of Every Steward',
      subheading: 'Members and resident families uphold these non-negotiable ethical guidelines to protect the harmony of the sanctuary:',
      commitments: [
        {
          title: 'Ahimsa (Reverence & Non-Injury)',
          desc: 'Zero poisoning of soil, air, or water. We protect wildlife corridors and co-exist peacefully with native flora and fauna.',
        },
        {
          title: 'Radical Simplicity',
          desc: 'Rejecting consumer showmanship. Valuing durable handmade tools, repairable natural items, and clean spaces over cluttered possessions.',
        },
        {
          title: 'Transparent Financial Accountability',
          desc: 'All contributions, infrastructure expenditures, and trust accounts are open to review by all stewards and community members.',
        },
        {
          title: 'Intergenerational Respect',
          desc: 'Honoring the practical wisdom of elders and safeguarding children’s natural psychological and emotional development.',
        },
      ],
    },
    land: {
      badge: 'Sanctuary Soil & Access',
      heading: 'Located at Sivasailam, Tenkasi District',
      subheading: 'A protected ecological pocket nestled right against the Western Ghats range in southern Tamil Nadu.',
      coordinatesLabel: 'Coordinates:',
      coordinatesDistrict: 'Tenkasi District, Tamil Nadu',
      railTitle: 'Railway Access',
      railDesc: 'Tenkasi Junction (approx. 25 km) or Tirunelveli Junction (approx. 50 km). Local passenger trains stop at Alwarkurichi / Ambasamudram.',
      airTitle: 'Air Connectivity',
      airDesc: 'Nearest domestic: Tuticorin Airport (approx. 85 km). International: Thiruvananthapuram (TRV) (approx. 110 km) or Madurai (IXM) (approx. 150 km).',
      ecoTitle: 'Ecosystem Note',
      ecoDesc: 'Fed by the Gadananathi and Thamirabarani basins with pure mountain aquifers. Visitors are requested to bring zero non-biodegradable plastic into the sanctuary.',
    },
    governance: {
      badge: 'Legal Architecture & Circles',
      heading: 'Dual-Trust Governance Architecture',
      subheading: 'How we protect the land in perpetuity while fostering vibrant community action without bureaucracy.',
      assetTrustBadge: 'Asset Holding Custodian',
      assetTrustTitle: 'IYALVANAM Asset Trust',
      assetTrustPoints: [
        'Holds sanctuary land in perpetual trust for nature and future generations.',
        'No private plots: Land cannot be partitioned, sold, mortgaged, or commercialized.',
        'Protects water sources, indigenous flora, and wildlife habitats unconditionally.',
      ],
      assetTrustQuote: '“The land belongs to nature. Humans are merely its grateful temporary stewards.”',
      operationalTrustBadge: 'Operational & Living Movement',
      operationalTrustTitle: 'SEYON Nature Life Foundation',
      operationalTrustPoints: [
        'Conducts monthly experiential nature camps (50+ completed, 1000+ seekers).',
        'Facilitates daily community rhythms: farming, natural meals, well water, and education.',
        'Researches natural healing food (coconut, mountain banana, non-artificial living).',
      ],
      operationalTrustQuote: '“To help people experience natural living rather than merely hear about it.”',
      consensusTitle: 'The Consensus Circle',
      consensusDesc: 'Major community decisions are made through non-hierarchical consensus circles under the trees. No simple majority voting that creates winners and losers — only transparent dialogue until collective harmony is achieved.',
      consensusBadge: 'Non-Hierarchical',
    },
    community: {
      badge: 'Daily Rhythms & Harmony',
      heading: 'Community Life in the Sanctuary',
      subheading: 'Life in Iyalvanam is structured around the harmonious integration of food, biological health, and joyful physical craft.',
      columns: [
        {
          title: 'Natural Food',
          desc: 'Meals are prepared in our shared earthen kitchen using pure well water, freshly grated coconut, seasonal mountain bananas, unpolished traditional millets, and wild herbs gathered from the land.',
          points: [
            'Zero refined white sugar or factory oils',
            'Heirloom paddy varieties (Mappillai Samba, Karuppu Kavuni)',
            'Cold-pressed sesame, coconut, and groundnut oils',
          ],
        },
        {
          title: 'Living Health',
          desc: 'Health is the body’s natural baseline when unimpeded by toxins. We wake with dawn, absorb early morning solar rays, walk barefoot on living loam, and sleep under natural darkness.',
          points: [
            'Circadian sleep rhythms (early sleep, early dawn)',
            'Deep open-well water rich in natural minerals',
            'Barefoot earthing and therapeutic river bathing',
          ],
        },
        {
          title: 'Sacred Work & Craft',
          desc: 'Physical labor is not viewed as drudgery, but as vital meditation and joy. Planting native saplings, mixing lime and mud mortar, crafting bamboo shelters, and caring for seeds.',
          points: [
            'Daily 3–4 hours of collective physical stewardship',
            'Traditional earthen block making and wood carpentry',
            'Heirloom seed collection, sorting, and free sharing',
          ],
        },
      ],
    },
    contribution: {
      badge: 'Pathway to Community',
      heading: 'How to Join & Support the Sanctuary',
      subheading: 'Joining Iyalvanam is an unhurried, experiential process based on mutual cultural resonance, not financial purchase.',
      steps: [
        {
          stepNumber: 'Step 01',
          stepType: 'First Immersion',
          title: 'Attend a SEYON Nature Camp',
          desc: 'Join our 3-day monthly experiential living camp in Sivasailam. Sleep under mud roofs, eat simple natural food, bathe in mountain streams, and meet the founders.',
        },
        {
          stepNumber: 'Step 02',
          stepType: 'Trial Period',
          title: 'Trial Living & Shared Rhythm',
          desc: 'Spend 1 to 3 months dwelling with the community. Participate in farming, child-rearing, and consensus circles to ensure mutual harmony.',
        },
        {
          stepNumber: 'Step 03',
          stepType: 'Lifetime Commitment',
          title: 'Resident Family Stewardship',
          desc: 'Consensus integration as a resident family. Contributing to shared infrastructure funds and receiving perpetual rights to dwell and steward the commons.',
        },
      ],
      fundBadge: 'Transparent Infrastructure Fund',
      fundHeading: 'Where Sanctuary Contributions Are Invested',
      fundSubheading: '100% of community contributions go directly into tangible eco-infrastructure. No corporate salaries or administrative overheads.',
      fundItems: [
        {
          title: '1. Open Wells & Water',
          desc: 'Deepening traditional stone open wells, desilting ponds, and laying gravity water flow lines.',
        },
        {
          title: '2. Reforestation',
          desc: 'Nurturing 2,000+ native Western Ghats forest saplings and establishing multi-tier agroforestry.',
        },
        {
          title: '3. Community Kitchen',
          desc: 'Earthen kitchen, heirloom grain seed bank, library shelter, and compost sanitation facilities.',
        },
        {
          title: '4. Decentralized Solar',
          desc: 'Off-grid solar micro-grids for essential water pumping and low-voltage communal reading lights.',
        },
      ],
    },
    founders: {
      badge: 'Founders & Vision Stewards',
      heading: 'Stewards of the Vision',
      subheading: 'Founded by practitioners who chose to question artificial societal constructs and demonstrate a grounded way of living.',
      founderName: 'Rajesh',
      founderRole: 'Founder & Vision Steward',
      founderBio1: 'Rajesh is a former banker who chose to step away from the corporate world and question the way modern society defines life, success, and freedom.',
      founderBio2: 'His journey took him through farming, travel, and a search for communities where people could live with greater simplicity. Along the way, he saw a deep disconnect between humans and nature. Through IYALVANAM, he is turning that realization into an enduring sanctuary.',
      founderQuote: '“For us, this is not just a project. It is a journey back to what is fundamental—freedom, nature, connection and a meaningful way of living.”',
      founderCallBtn: 'Call: +91 96007 56007',
      founderLocation: 'Dharmapuramadam, Tenkasi',
      coFounderName: 'Shanmugavel',
      coFounderRole: 'Co-Founder & Operational Steward',
      coFounderBio1: 'Shanmugavel, from Coimbatore, is a designer and mechanical engineering researcher whose life changed profoundly after spending 45 days in intensive care during the COVID pandemic.',
      coFounderBio2: 'His journey toward recovery led him to explore natural foods and living. Arriving at Sivasailam, he founded SEYON Nature Life Foundation to help people directly experience natural living. SEYON has conducted 50+ monthly nature camps for over 1,000+ seekers.',
      coFounderQuote: '“Let us live happily together with nature, as much as possible.”',
      coFounderCallBtn: 'Call: +91 94440 98765',
      coFounderLocation: 'Sivasailam, Tenkasi',
    },
    closing: {
      badge: 'The Sacred Circle Awaits You',
      heading: 'Ready to Experience Life Guided by Natural Principles?',
      subheading: 'Whether you wish to attend an upcoming SEYON experiential camp, contribute traditional heirloom seeds, or explore living in the sanctuary, our door is open.',
      btnWhatsapp: 'Join WhatsApp Community Group',
      btnEmail: 'contact@iyalvanam.org',
      footerBlessing: '“A warm welcome to every heart that reveres nature.”',
    },
    footer: {
      bannerTagline: 'RETURN TO NATURE • SIVASAILAM, TENKASI',
      bannerHeading: 'Step into the living community at Western Ghats foothills',
      bannerSub: 'Connect directly with our founders, visit our experiential nature camps, or join the community dialogue.',
      bannerBtn: 'Join WhatsApp Community',
      brandDesc: 'A sacred land initiative dedicated to perpetual forest preservation, non-artificial living, and intergenerational self-reliance at the foothills of the Western Ghats.',
      sanctuaryAddress: 'Dharmapuramadam / Sivasailam',
      districtState: 'Tenkasi District, Tamil Nadu — 627803',
      sectionsTitle: 'Sanctuary Sections',
      navHero: 'Vision & Tagline',
      navEtymology: 'Etymology (Iyal • Vanam • Koodam)',
      navPhilosophy: '5 Core Tenets & Elements',
      navPillars: '8 Pillars of Living',
      navPrinciples: 'Core Principles Disclosure',
      navLand: 'Land & Tenkasi Map',
      stewardsTitle: 'Founders & Stewards',
      founderTitle: 'Founder & Vision Steward',
      coFounderTitle: 'Co-Founder & Operational Steward',
      trustStructureTitle: 'Trust Structure',
      assetTrustDesc: 'Permanent custodian holding sanctuary land in non-alienable trust for nature.',
      operationalTrustDesc: 'Operational body stewarding 50+ experiential camps, natural food research, and community living.',
      copyright: '© 2026 IYALVANAM Asset Trust & SEYON Nature Life Foundation. All rights reserved.',
      bottomTagline: 'Perpetual Nature Commons • Dharmapuramadam, Tenkasi',
    },
  },
  ta: {
    nav: {
      hero: 'முகப்பு & நோக்கம்',
      etymology: 'பெயர்க் காரணம்',
      philosophy: 'ஐம்பூத வாழ்வியல்',
      pillars: 'எட்டுத் தூண்கள்',
      principles: 'கோட்பாடுகள்',
      spiritual: 'ஆன்மீகப் பாதை',
      land: 'புனித நிலம் & வரைபடம்',
      governance: 'அறக்கட்டளை அமைப்பு',
      community: 'அன்றாட வாழ்வியல்',
      founders: 'நிறுவனர்கள்',
      journal: 'களப் பதிவுகள்',
      subTitle: 'இயற்கை வாழ்வியல் கூடம்',
      locationBadge: 'சிவசைலம், தென்காசி',
      tagline: 'இரண்டு அறக்கட்டளைகள் • ஓர் உன்னத நோக்கம்',
      joinCommunity: 'வாட்ஸ்அப் குழுவில் இணையுங்கள்',
      callFounder: '+91 96007 56007',
      callCoFounder: '+91 94440 98765',
      foundersContactHeader: 'நிறுவனர்களின் நேரடித் தொடர்பு',
    },
    hero: {
      locationBadge: 'தர்மபுரமடம் & சிவசைலம்',
      subLocation: 'தென்காசி மாவட்டம், மேற்குத் தொடர்ச்சி மலை',
      title: 'இயல்வனம் இயற்கை வாழ்வியல் கூடம்',
      tagline: '“இயன்ற வரை இயற்கைக்கு திரும்புவோம்”',
      trustsSubtitle: 'இரண்டு அறக்கட்டளைகள் • ஓர் உன்னத நோக்கம் — இயற்கைக்கு திரும்புதல்',
      description: 'செயற்கையற்ற வாழ்வியல், பாரம்பரிய சூழலியல், தூய திறந்த கிணற்று நீர் மற்றும் தலைமுறை கடந்த தற்சார்பை நிலைநிறுத்தும் புனித நில வாழ்வியல் தளம்.',
      ctaExplore: 'தொலைநோக்கைக் காணுங்கள்',
      ctaJoin: 'வாட்ஸ்அப் குழுவில் இணையுங்கள்',
      imageCaptionTitle: 'மேற்குத் தொடர்ச்சி மலை அடிவார நிலம்',
      imageCaptionSub: 'அகத்தியர் மலை சூழல் காப்பக எல்லை • தென்காசி மாவட்டம்',
    },
    etymology: {
      badge: 'பெயர்க் காரணம் & மெய்ப்பொருள்',
      heading: 'புனிதப் பெயரின் பொருள்: இயல்-வனம்-கூடம்',
      subheading: 'எமது பெயரின் ஒவ்வொரு சொல்லும் பாரம்பரியத் தமிழ் சூழலியல் ஞானத்திலும் இயற்கை விதிகளின் போற்றுதலிலும் வேரூன்றியது.',
      cards: [
        {
          letter: 'இ',
          title: 'இயல்',
          subtitle: 'இயற்கை நெறி',
          desc: 'தன்னியல்பானது, உள்ளார்ந்தது, செயற்கையற்றது மற்றும் மெய்யானது. மனித உடல் மற்றும் மனதின் இயற்கை வடிவமைப்புடன் முழுமையாக இயைந்து வாழ்தல்.',
          footer: 'செயற்கையற்ற தூய இயற்கை நெறி',
        },
        {
          letter: 'வ',
          title: 'வனம்',
          subtitle: 'பெருவனம்',
          desc: 'பல அடுக்குக் காடுகள், மரங்கள், புனிதக் காவுகள், பறவைகள், விலங்குகள், மண் மற்றும் நீர்வளங்களைப் பாதுகாக்கும் பசுமைப் பெருவனம்.',
          footer: 'உயிர் சூழல் காக்கும் பசுமைப் பெருவனம்',
        },
        {
          letter: 'கூ',
          title: 'கூடம்',
          subtitle: 'பொதுக்கூடம்',
          desc: 'அதிகாரப் படிநிலைகளின்றி குடும்பங்கள் ஒன்று கூடி உழைக்கவும், கற்கவும், சமைக்கவும், வாழவும் அமைக்கப்பட்ட புனிதப் பொது அரங்கம்.',
          footer: 'கற்றலும் பகிர்தலும் நிகழும் பொதுக்கூடம்',
        },
        {
          letter: 'மீ',
          title: 'மீள்தல்',
          subtitle: 'இயன்ற வரை இயற்கைக்கு',
          desc: 'நாம் புதிய செயற்கை அமைப்புகளை உருவாக்க வேண்டியதில்லை. கோடிக்கணக்கான ஆண்டுகளாக உயிர்களைக் காத்த இயற்கை முறைக்கு படிப்படியாக மீண்டால் போதுமானது.',
          footer: 'அடிப்படைக்கு திரும்புதல்: விடுதலை, மண், மெய்யான தொடர்பு.',
        },
      ],
    },
    philosophy: {
      badge: 'தத்துவ அடித்தளம்',
      heading: 'இயற்கை வாழ்வியலின் ஐந்து அடிப்படைக் கோட்பாடுகள்',
      subheading: 'இயற்கை விதிகளை மீறுவதை நிறுத்தி, பிரபஞ்சத்தின் விதிகளுடன் அன்றாட வாழ்வை இணைக்கும் போது நலமும் விடுதலையும் இயல்பாகவே மலர்கின்றன.',
      tenets: [
        {
          num: '01',
          title: 'செயற்கையற்ற வாழ்வியல்',
          desc: 'ரசாயனங்கள், பதப்படுத்தப்பட்ட தொழிற்சாலை உணவுகள், நச்சு மருந்துகள் மற்றும் செயற்கைச் சார்புகளை அன்றாட வாழ்விலிருந்து நீக்குதல்.',
        },
        {
          num: '02',
          title: 'பொது நிலப் பாதுகாப்பு',
          desc: 'நிலத்தை இயற்கையின் பொது அறக்கட்டளையாகக் காத்தல். நிலம் விற்கவோ, வாங்கவோ அல்லது துண்டாடவோ கூடிய வணிகப் பொருளல்ல.',
        },
        {
          num: '03',
          title: 'உணவுத் தற்சார்பு',
          desc: 'மரபு விதைகள், பாரம்பரிய சிறுதானியங்கள், இளநீர், மலை வாழை மற்றும் மரத்திலிருந்து நேரடியாகப் பறிக்கப்பட்ட தூய உணவை உண்ணுதல்.',
        },
        {
          num: '04',
          title: 'அதிகாரமற்ற தன்னாட்சி',
          desc: 'அரசியல் படிநிலைகளையும் அதிகாரக் கட்டுப்பாடுகளையும் அகற்றி, உண்மை மற்றும் நம்பிக்கையின் அடிப்படையிலான ஒருமித்த கலந்தாய்வை அமைத்தல்.',
        },
        {
          num: '05',
          title: 'தலைமுறை கடந்த அறம்',
          desc: 'நஞ்சில்லா நீர்வளம், வளமான வன மண் மற்றும் சக உயிர்கள் மீதான ஆழமான மரியாதையை அடுத்த தலைமுறைக்கு விட்டுச் செல்லுதல்.',
        },
      ],
      elementsBadge: 'பஞ்சபூதங்கள் • ஐந்து பெருவெளிகள்',
      elementsHeading: 'ஐம்பூதங்களின் மெய்யான மருத்துவம்',
      elementsSubheading: 'நாங்கள் புதிய மருத்துவ முறையை உருவாக்கவில்லை. மனித உடலைப் படைத்த இயற்கையின் ஐந்து பூதங்களின் சமநிலைக்கு மீண்டும் திரும்புகிறோம்.',
      elements: [
        {
          name: 'ஆகாயம் (விண்வெளி)',
          desc: 'மன அமைதி, கணினி மற்றும் கைபேசித் திரைகளற்ற பெருவெளி, மலையடிவார விண்வெளியின் கீழ் நிதானமான வாழ்வு.',
        },
        {
          name: 'வாயு (தூய காற்று)',
          desc: 'எதிர்மறை அயனிகள் நிறைந்த மேற்குத் தொடர்ச்சி மலையின் மூலிகைக் காற்று, செல்களைப் புத்துணர்ச்சியூட்டும் மூச்சு.',
        },
        {
          name: 'அக்னி (சூரிய ஒளி)',
          desc: 'சூரிய உபாசனை, விடியற்காலை வெயில் குளியல், உடலின் இயற்கை உயிரியல் கடிகாரச் சீரமைப்பு மற்றும் மெய்யான சுறுசுறுப்பு.',
        },
        {
          name: 'அப்பு (தூய நீர்)',
          desc: 'குளோரின் கலக்காத ஆழ்துளை இல்லாத திறந்த கிணற்று நீர் மற்றும் மலையருவி மழைநீரின் இயற்கைத் தாதுக்கள்.',
        },
        {
          name: 'பிருத்வி (மண் & நிலம்)',
          desc: 'வன மண்ணில் வெறுங்காலுடன் நடத்தல், இயற்கைக் கம்போஸ்ட் உரம் மற்றும் சுவாசிக்கும் மண்-சுண்ணாம்பு-கல் வீடுகள்.',
        },
      ],
    },
    vision: {
      badge: 'தொலைநோக்குப் பிரகடனம்',
      heading: 'மனித வாழ்வை செயற்கை அமைப்புகளிலிருந்து விடுவித்து, மண்ணோடு புனிதத் தொடர்பை மீட்டெடுத்தல்.',
      p1: 'நவீன சமூகம் மனித வாழ்வை செயற்கையான அளவீடுகளுக்குள் முடக்கியுள்ளது: அலுவலகக் கூண்டுகள், நச்சு உணவு, கடன் சுமைகள், செயற்கை மருந்துகள் மற்றும் திரை அடிமைத்தனம். இதனால் நாம் நமது உடல்நலத்தையும் மன அமைதியையும் பிள்ளைகளின் எதிர்காலத்தையும் இழந்துவிட்டோம்.',
      p2: 'இயல்வனம் மற்றும் சேயோன் இதற்கான மெய்யான மாற்றுக் களமாகத் திகழ்கின்றன. தென்காசியில் மேற்குத் தொடர்ச்சி மலையடிவாரத்தில் பல தலைமுறைக் குடும்பங்கள் சிறந்த நலம், உணவுத் தற்சார்பு, நஞ்சில்லா வாழ்வு மற்றும் ஆன்மீக அமைதியுடன் வாழ முடியும் என்பதை மெய்ப்பிக்கிறோம்.',
      footerQuote: '“மனிதன் வாழ்வதற்காகவே படைக்கப்பட்டான், ஓடுவதற்காக அல்ல.”',
      footerBrand: 'இயல்வனம் & சேயோன் பொதுக்களம்',
    },
    pillars: {
      badge: 'முழுமை வாழ்வியலின் வரைபடம்',
      heading: 'இயற்கை வாழ்வியலின் எட்டுத் தூண்கள்',
      subheading: 'மறுசீரமைப்பு மனித சமுதாயத்தின் ஒவ்வொரு துறையையும் உள்ளடக்கிய முழுமையான வாழ்வியல் கட்டமைப்பு.',
      items: [
        {
          title: '1. மறுசீரமைப்பு வாழ்வியல்',
          desc: 'மண் வளம் பெருக்கல், பன்னடுக்கு உணவு வன வேளாண்மை மற்றும் ஒவ்வொரு சதுர அடி நிலத்தையும் நாம் கண்டதை விட வளமாக்குதல்.',
        },
        {
          title: '2. இயற்கைவழிக் கல்வி',
          desc: 'போட்டித் தேர்வுகளற்ற மண்ணோடிணைந்த கல்வி; கைவினைத்திறன், தாவரவியல், வாழ்வியல் ஞானம் மற்றும் உணர்வுச் சமநிலை கற்பித்தல்.',
        },
        {
          title: '3. பயனுறு தொழில்நுட்பம்',
          desc: 'அடிமைப்படுத்தாத எளிய தொழில்நுட்பம்: சூரிய மின்சாரம், புவியீர்ப்பு விசை நீர் பம்புகள், குடும்ப அமைதிக்குள் ஊடுருவாத கருவிகள்.',
        },
        {
          title: '4. உணவுத் தற்சார்பு',
          desc: 'பாரம்பரிய விதைகளைப் பாதுகாத்தல், தீட்டப்படாத சிறுதானியங்கள், மலை வாழை மற்றும் வணிகச் சந்தை சார்ந்திராமை.',
        },
        {
          title: '5. திறன்சார் பொருளாதாரம்',
          desc: 'மரம் இழைத்தல், இயற்கை மண் வீடுகள் கட்டுதல், விதை சேமிப்பு, இயற்கை நூல் நெசவு மற்றும் பரஸ்பர பண்டமாற்று பகிர்வு.',
        },
        {
          title: '6. உள்முகப் பரிணாமம்',
          desc: 'தினசரி தியானம், உள்முக அமைதி, நன்றி அறிதல் வட்டங்கள் மற்றும் அகந்தையைத் தாண்டிய ஒருமைப்பாட்டு உணர்வு.',
        },
        {
          title: '7. முழுமையான நல்வாழ்வு',
          desc: 'இயற்கை உண்ணாநோன்பு, சூரிய ஒளி, திறந்த கிணற்று நீர், இயற்கை உறக்கம் மற்றும் ஐம்பூதங்களின் நேரடி இசைவு வழி நலம்.',
        },
        {
          title: '8. ஒருமித்த தன்னாட்சி',
          desc: 'பொது முடிவுகளில் அனைவருக்கும் சமமான குரல்; அரசியல் கட்சிகளற்ற, நிறுவனப் படிநிலைகளற்ற ஒருமித்த கலந்தாய்வு நிர்வாகம்.',
        },
      ],
    },
    standFor: {
      badge: 'எமது தெளிவான நிலைப்பாடு',
      heading: 'நாங்கள் முன்வைப்பதும் இங்கு இடமில்லாததும்',
      subheading: 'ஒரு சமூகம் எதை உருவாக்குகிறது என்பதோடு எதை நிராகரிக்கிறது என்பதிலும் அதன் தூய்மை வெளிப்படுகிறது.',
      lifeBuiltOnTitle: 'நாங்கள் முன்வைப்பது',
      lifeBuiltOnItems: [
        {
          title: 'உயிர் மண் & பாரம்பரியப் பயிர்கள்:',
          desc: 'இயற்கை பல்லுயிர் வளம் மற்றும் பன்னடுக்கு உணவு வனங்கள் மூலம் மேற்குத் தொடர்ச்சி மலைச் சூழலை மீட்டெடுத்தல்.',
        },
        {
          title: 'தலைமுறை கடந்த கூட்டு வாழ்வு:',
          desc: 'முதியவர்கள், பெற்றோர்கள் மற்றும் குழந்தைகள் பரஸ்பர அன்புடனும் சிரிப்புடனும் ஒன்றாக வாழும் குடும்பக் கட்டமைப்பு.',
        },
        {
          title: 'இயற்கைச் சுழற்சி & விடியல் வாழ்வு:',
          desc: 'சூரிய உதயத்தில் எழுதல், மண்ணில் உடலுழைப்பு செய்தல், அமைதியான இரவில் இயற்கை உறக்கம் கொள்ளுதல்.',
        },
        {
          title: 'பரவலாக்கப்பட்ட தற்சார்பு:',
          desc: 'தூய நீர், சூரிய சக்தி, உணவு மற்றும் குறைவான செலவில் மண் கட்டிடங்கள் அமைப்பதில் முழுமையான தற்சார்பு.',
        },
        {
          title: 'உண்மை & நேரிடை உரையாடல்:',
          desc: 'சமூக முரண்களை ஆலமரத்தடியில் நேருக்கு நேர் அமர்ந்து திறந்த மனதுடன் பேசி அன்புடன் தீர்த்துக் கொள்ளுதல்.',
        },
      ],
      noPlaceTitle: 'இங்கு இடமில்லை',
      noPlaceItems: [
        {
          title: 'நச்சு ரசாயனங்கள் & மரபணு மாற்ற விதைகள்:',
          desc: 'பூச்சிக்கொல்லிகள், களைக்கொல்லிகள் மற்றும் மண்ணை மலடாக்கும் வணிகப் பணப்பயிர் சுரண்டல்கள்.',
        },
        {
          title: 'ரியல் எஸ்டேட் நில வணிகம் & பேராசை:',
          desc: 'நிலத்தை விற்று லாபம் பார்த்தல், புனித நிலத்தைத் துண்டாடுதல் அல்லது வாடகை வசூலிக்கும் நிலப்பிரபுத்துவம்.',
        },
        {
          title: 'அதிகாரப் படிநிலைகள் & ஆதிக்கம்:',
          desc: 'மத்திய அதிகாரவாதிகள், அரசியல் கட்சிகள் அல்லது பிறர் மீது திணிக்கப்படும் மதக் கட்டுப்பாடுகள்.',
        },
        {
          title: 'தொழிற்சாலைப் பதப்படுத்தப்பட்ட உணவுப் பண்டங்கள்:',
          desc: 'வெள்ளை சர்க்கரை, சுத்திகரிக்கப்பட்ட பாமாயில் மற்றும் நெகிழி உறைகளில் அடைக்கப்பட்ட தொழிற்சாலைப் பண்டங்கள்.',
        },
        {
          title: 'திரை அடிமைத்தனம் & கணினி போதை:',
          desc: 'உணவு, உரையாடல்கள் அல்லது குழந்தைகளின் இயற்கை வளர்ச்சியை ஆக்கிரமிக்கும் கைபேசித் திரை மோகம்.',
        },
      ],
    },
    principles: {
      badge: 'வழிகாட்டும் பிரகடனங்கள்',
      heading: 'இயல்வனத்தின் எட்டு அடிப்படைக் கோட்பாடுகள்',
      subheading: 'ஒவ்வொரு கோட்பாட்டையும் கிளிக் செய்து அதன் அடிப்படைக் கருத்தையும் நடைமுறை அமைப்பையும் அறிந்துகொள்ளுங்கள்.',
      items: [
        {
          id: 'principle-1',
          number: '01',
          title: 'இயற்கை விதிகளே முதன்மையானவை',
          summary: 'மனித அமைப்புகள் இயற்கை விதிகளுக்கு உட்பட வேண்டும்; இயற்கையை மனித வசதிக்காக வளைக்கக் கூடாது.',
          details: 'உறக்க நேரம் முதல் கழிவு மேலாண்மை வரை அனைத்தும் இயற்கையின் மாறாத விதிகளை மதிக்கின்றன. உயிரியல் உண்மைகளுக்குப் பதிலாக குறுக்குவழிகளை நாங்கள் கையாள்வதில்லை.',
        },
        {
          id: 'principle-2',
          number: '02',
          title: 'நிலம் விற்பனைப் பொருளல்ல • பொது அறம்',
          summary: 'நிலத்தை தனிநபர் சொத்தாக வைத்திருக்க முடியாது. அது வருங்காலத் தலைமுறைகளுக்கான பொது அறக்கட்டளையாகக் காக்கப்படுகிறது.',
          details: 'இயல்வனம் நிலப் பாதுகாப்பு அறக்கட்டளை மூலம் நிலத்தை தனித்தனியாகப் பிரித்து விற்பதையும், நிலத் தரகு பேராசையையும் அடியோடு அகற்றியுள்ளோம்.',
        },
        {
          id: 'principle-3',
          number: '03',
          title: 'உணவே மருந்து • நஞ்சில்லா விவசாயம்',
          summary: 'ரசாயன உரங்கள் மற்றும் விஷமற்ற பாரம்பரிய பருவ கால உணவை மட்டுமே உடலுக்கு வழங்குகிறோம்.',
          details: 'பாரம்பரிய சிறுதானியங்கள், மாப்பிள்ளை சம்பா, கவுனி போன்ற தீட்டப்படாத அரிசிகள், இளநீர், மலை வாழை ஆகியவை எமது தினசரி உணவாக அமைகின்றன.',
        },
        {
          id: 'principle-4',
          number: '04',
          title: 'சுற்றுச்சூழல் உகந்த மண் மற்றும் கல் வீடுகள்',
          summary: 'உள்ளூர் களிமண், சுண்ணாம்பு, கல், மூங்கில் மற்றும் செங்கல் கொண்டு சூழலுக்கு ஏற்ப சுவாசிக்கும் வீடுகள்.',
          details: 'சிமெண்ட் மற்றும் நச்சுப் பெயிண்டுகள் இன்றி கட்டப்படும் இந்த வீடுகள், தன் காலம் முடிந்ததும் மீண்டும் தாய் மண்ணோடு எவ்வித நஞ்சுமின்றி கலந்து விடுகின்றன.',
        },
        {
          id: 'principle-5',
          number: '05',
          title: 'ஒருமித்த கருத்தே எமது நிர்வாக நெறி',
          summary: 'தோல்வியாளர்களை உருவாக்கும் வாக்குப்பதிவுக்குப் பதிலாக பொறுமையான கலந்தாய்வு வழியே முடிவெடுத்தல்.',
          details: 'பொது விடயங்கள் அனைத்தும் திறந்த வட்டக் கலந்தாய்வில் பேசப்பட்டு, ஒவ்வொருவரின் மனமும் இசைந்த பிறகே முடிவுகள் ஒருமித்து எடுக்கப்படுகின்றன.',
        },
        {
          id: 'principle-6',
          number: '06',
          title: 'சூரிய ஆற்றல் & தூய திறந்த கிணற்று நீர்',
          summary: 'சூரிய மின்சாரம், திறந்த கிணற்று மழைநீர் சேகரிப்பு மற்றும் உலர் கழிப்பறை உர மேலாண்மையில் தற்சார்பு.',
          details: 'மேற்குத் தொடர்ச்சி மலை மழையின் ஒவ்வொரு துளியையும் சேமிக்கிறோம். மனிதக் கழிவுகள் பாதுகாப்பாக மக்க வைக்கப்பட்டு மரங்களுக்கான உரமாக மாற்றப்படுகின்றன.',
        },
        {
          id: 'principle-7',
          number: '07',
          title: 'இயற்கையோடு இணைந்த தலைமுறைக் கல்வி',
          summary: 'காடு, மண், விலங்குகள், கைவினைக் கலைகள் மற்றும் முதியோருடன் குழந்தைகள் நேரடியாகக் கற்கும் கல்வி.',
          details: 'மன அழுத்தப் பரீட்சைகளற்ற இந்தக் கல்வி முறையில் குழந்தைகள் உடல் உறுதி, மன அமைதி, சுயமாகச் சிந்திக்கும் ஆற்றல் மற்றும் உயிர்கள் மீதான நேசத்தைப் பெறுகின்றனர்.',
        },
        {
          id: 'principle-8',
          number: '08',
          title: 'அகிம்சை & எளிய வாழ்வியல் நெறி',
          summary: 'குறைந்த நுகர்வு, மெய்யான நேர்மை மற்றும் அனைத்து உயிர்கள் மீதும் அன்பு கொண்ட எளிய வாழ்வு.',
          details: 'உண்மையான செல்வம் என்பது வங்கிச் சேமிப்பல்ல; தூய நீர், வளமான மண், இனிமையான மனித உறவுகள், அமைதியான மனம் மற்றும் இயற்கையான விடுதலையே ஆகும்.',
        },
      ],
    },
    spiritual: {
      badge: 'உள்முகப் பரிணாமம்',
      heading: 'மூன்று ஆன்மீகப் பரிணாம நிலைகள்',
      subheading: 'எமது ஆன்மீக அடித்தளம் எவ்வித மதக் கோட்பாடுகளுக்கும் அப்பாற்பட்டது; அது நேரடி அனுபவ உண்மை சார்ந்தது:',
      shifts: [
        {
          stage: 'நிலை 01',
          from: 'பயமும் பற்றாக்குறையும்',
          to: 'அன்பும் நம்பிக்கையும்',
          desc: 'நாளைய கவலைகள் மற்றும் சேர்க்கும் பேராசையிலிருந்து விடுபட்டு, இயற்கையின் எல்லையற்ற கொடையை உணர்ந்து நம்பிக்கையோடு வாழ்தல்.',
        },
        {
          stage: 'நிலை 02',
          from: 'பிரிவும் தனிமையும்',
          to: 'ஒருமைப்பாடும் இயைபும்',
          desc: 'மனிதன் இயற்கையிலிருந்து வேறுபட்டவன் என்ற மாயையை உடைத்து, மரம், நீர், மண் மற்றும் சக உயிர்களோடு ஒன்றிணைந்து வாழ்தல்.',
        },
        {
          stage: 'நிலை 03',
          from: 'போராட்டமும் பிழைப்பும்',
          to: 'படைப்பாற்றலும் அறப்பணியும்',
          desc: 'வெறும் பிழைப்புக்கான நுகர்வுப் போட்டியை நிறுத்தி, நல்வாழ்விற்கான கூட்டுப் படைப்பிலும் அறப்பணியிலும் மகிழ்ச்சி காணுதல்.',
        },
      ],
    },
    ethics: {
      badge: 'சமூக அறநெறிகள்',
      heading: 'ஒவ்வொரு களப் பொறுப்பாளரின் அறக்கடமைகள்',
      subheading: 'இயல்வனத்தின் தூய்மையையும் அமைதியையும் காக்க அனைத்து உறுப்பினர்களும் குடும்பங்களும் பின்பற்றும் நெறிகள்:',
      commitments: [
        {
          title: 'அகிம்சை (உயிர்களுக்குத் தீங்கிழையாமை)',
          desc: 'மண், காற்று, நீருக்கு விஷமூட்டாமை. வனவிலங்குகளின் வழித்தடங்களைப் பாதுகாத்து மரங்கள் மற்றும் பறவைகளுடன் அமைதியாக இணைந்திருத்தல்.',
        },
        {
          title: 'ஆடம்பரமற்ற வாழ்வு (எளிமை)',
          desc: 'நுகர்வுக் கலாச்சாரப் பகட்டைத் தவிர்த்தல்; நீடித்து உழைக்கும் கைவினைப் பொருட்கள் மற்றும் தூய எளிய இடங்களை நேசித்தல்.',
        },
        {
          title: 'முழுமையான நிதி வெளிப்படைத்தன்மை',
          desc: 'அனைத்து நன்கொடைகள், கட்டுமானச் செலவுகள் மற்றும் அறக்கட்டளை வரவு-செலவுக் கணக்குகள் அனைவரும் அறியும் வண்ணம் வெளிப்படையானவை.',
        },
        {
          title: 'மூத்தோர் மற்றும் சிறுவர் போற்றுதல்',
          desc: 'முதியோரின் கள அனுபவ ஞானத்தை மதித்துப் போற்றுதல்; குழந்தைகளின் இயற்கை உணர்வு மற்றும் மனவளர்ச்சியைப் பாதுகாத்தல்.',
        },
      ],
    },
    land: {
      badge: 'புனித நிலமும் அமைவிடமும்',
      heading: 'சிவசைலம், தென்காசி மாவட்டத்தில் அமைந்துள்ளது',
      subheading: 'தென்தமிழகத்தில் மேற்குத் தொடர்ச்சி மலையின் மடியில் அமைந்துள்ள தூய இயற்கை நிலவளம்.',
      coordinatesLabel: 'அமைவிடம்:',
      coordinatesDistrict: 'தென்காசி மாவட்டம், தமிழ்நாடு',
      railTitle: 'தொடர்வண்டிப் போக்குவரத்து',
      railDesc: 'தென்காசி சந்திப்பு (சுமார் 25 கி.மீ) அல்லது திருநெல்வேலி சந்திப்பு (சுமார் 50 கி.மீ). உள்ளூர் பயணிகள் ரயில்கள் ஆழ்வார்குறிச்சி / அம்பாசமுத்திரத்தில் நிற்கும்.',
      airTitle: 'விமானப் போக்குவரத்து',
      airDesc: 'அருகிலுள்ள உள்நாட்டு விமான நிலையம்: தூத்துக்குடி (சுமார் 85 கி.மீ). பன்னாட்டு நிலையங்கள்: திருவனந்தபுரம் (சுமார் 110 கி.மீ), மதுரை (சுமார் 150 கி.மீ).',
      ecoTitle: 'சூழலியல் குறிப்பு',
      ecoDesc: 'கடனாநதி மற்றும் தாமிரபரணி படுகைகளின் தூய ஊற்றுநீரால் வளம்பெறும் பூமி. மக்காத பிளாஸ்டிக் பொருட்களை நிலத்திற்குள் கொண்டுவரக் கூடாது.',
    },
    governance: {
      badge: 'சட்ட மற்றும் நிர்வாகக் கட்டமைப்பு',
      heading: 'இரட்டை அறக்கட்டளை தன்னாட்சி அமைப்பு',
      subheading: 'அதிகாரப் படிநிலைகள் இன்றி நிலத்தை நிரந்தரமாகப் பாதுகாத்து, கூட்டுறவு வாழ்வை நடத்தும் கட்டமைப்பு.',
      assetTrustBadge: 'நிலப் பாதுகாப்பு அறக்கட்டளை',
      assetTrustTitle: 'இயல்வனம் நிலப் பாதுகாப்பு அறக்கட்டளை',
      assetTrustPoints: [
        'நிலத்தை இயற்கை மற்றும் எதிர்காலத் தலைமுறைகளுக்காக நிரந்தரமாகப் பாதுகாக்கிறது.',
        'தனிநபர் வீட்டுமனைகள் இல்லை: நிலத்தை விற்கவோ, அடமானம் வைக்கவோ, வணிகப்படுத்தவோ முடியாது.',
        'நீரூற்றுகள், மரங்கள் மற்றும் வனவிலங்கு வாழ்விடங்களை நிபந்தனையின்றிப் பாதுகாக்கிறது.',
      ],
      assetTrustQuote: '“நிலம் இயற்கைக்கு உரியது; மனிதர்கள் அதன் தற்காலிகக் காப்பாளர்களே.”',
      operationalTrustBadge: 'வாழ்வியல் & களப் பணி இயக்கம்',
      operationalTrustTitle: 'சேயோன் இயற்கை வாழ்வியல் அறக்கட்டளை',
      operationalTrustPoints: [
        'மாதந்தோறும் நேரடி இயற்கை முகாம்களை நடத்துகிறது (50+ முகாம்கள், 1000+ பங்கேற்பாளர்கள்).',
        'விவசாயம், இயற்கை உணவு, கிணற்று நீர் மற்றும் கல்வியுடன் கூடிய அன்றாட வாழ்வை ஒருங்கிணைக்கிறது.',
        'இயற்கை உணவுகள் (தேங்காய், வாழை, சமைக்காத உணவு) குறித்த கள ஆய்வுகளை மேற்கொள்கிறது.',
      ],
      operationalTrustQuote: '“இயற்கை வாழ்வியலை வெறும் பேச்சாக அல்லாமல் அனுபவமாக மக்களுக்கு வழங்குதல்.”',
      consensusTitle: 'ஒருமித்த கலந்தாய்வு வட்டம்',
      consensusDesc: 'முக்கியமான பொது முடிவுகள் அனைத்தும் மரத்தடியில் அமர்ந்து மேற்கொள்ளப்படும் ஒருமித்த கலந்தாய்வு மூலம் எடுக்கப்படுகின்றன. வெற்றி-தோல்வியை உருவாக்கும் எளிய வாக்குப்பதிவு முறை இங்கு கிடையாது.',
      consensusBadge: 'அதிகாரமற்ற தன்னாட்சி',
    },
    community: {
      badge: 'அன்றாட வாழ்வியல் முறை',
      heading: 'இயல்வனத்தின் கூட்டு வாழ்க்கை',
      subheading: 'இயற்கை உணவு, உடல் நலம் மற்றும் மகிழ்ச்சியான உடலுழைப்பு ஆகியவற்றின் ஒருங்கிணைந்த தூய வாழ்வு.',
      columns: [
        {
          title: 'இயற்கை உணவு',
          desc: 'திறந்த கிணற்று நீர், துருவிய தேங்காய், மலை வாழை, தீட்டப்படாத சிறுதானியங்கள் மற்றும் நிலத்தில் கிடைக்கும் மூலிகைகள் கொண்டு தயாரிக்கப்படும் உணவு.',
          points: [
            'வெள்ளை சர்க்கரை மற்றும் சுத்திகரிக்கப்பட்ட எண்ணெய்கள் முழுமையாகத் தவிர்ப்பு',
            'பாரம்பரிய மாப்பிள்ளை சம்பா, கருப்பு கவுனி போன்ற பாரம்பரிய நெல் வகைகள்',
            'மரச்செக்கு நல்லெண்ணெய், தேங்காய் எண்ணெய் மற்றும் கடலை எண்ணெய்',
          ],
        },
        {
          title: 'மெய்யான நலம்',
          desc: 'நச்சுகள் அற்ற சூழலில் உடல் நலம் என்பது மனிதனின் இயல்பான நிலை. விடியலில் எழுதல், சூரிய ஒளி பெறுதல் மற்றும் மண்ணில் வெறுங்காலுடன் நடத்தல்.',
          points: [
            'இயற்கை உறக்க சுழற்சி (அந்திசாயும் முன் உறக்கம், விடியலில் விழிப்பு)',
            'இயற்கைத் தாதுக்கள் நிறைந்த ஆழமான திறந்த கிணற்று ஊற்றுநீர்',
            'வெறுங்காலுடன் நடத்தல் மற்றும் ஆற்றுநீர்க் குளியல்',
          ],
        },
        {
          title: 'உடலுழைப்பும் கைவினைத்திறனும்',
          desc: 'உடலுழைப்பு என்பது சுமையல்ல; அது உடலுக்கும் மனதுக்குமான தூய தியானம். மரக்கன்றுகள் நடுதல், மண் குழைத்தல், மூங்கில் வேலைகள் செய்தல்.',
          points: [
            'தினசரி 3–4 மணி நேர மகிழ்ச்சியான கூட்டு உடலுழைப்பு',
            'பாரம்பரிய மண் செங்கல் உருவாக்குதல் மற்றும் மர வேலைகள்',
            'மரபு விதைகளைச் சேகரித்தல், தரம் பிரித்தல் மற்றும் இலவசப் பகிர்வு',
          ],
        },
      ],
    },
    contribution: {
      badge: 'இணைவதற்கான வழிமுறை',
      heading: 'இயல்வனத்தோடு இணையும் பாதை',
      subheading: 'பணத்தின் மூலம் நிலத்தை வாங்குவது அல்ல; பரஸ்பர பண்பாட்டு ஒத்திசைவு மற்றும் அனுபவத்தின் வழியே இணையும் தூய முறை.',
      steps: [
        {
          stepNumber: 'படி 01',
          stepType: 'முதல் அறிமுகம்',
          title: 'சேயோன் இயற்கை முகாமில் பங்கேற்றல்',
          desc: 'சிவசைலத்தில் நடைபெறும் 3-நாள் இயற்கை வாழ்வியல் முகாமில் பங்கேற்று, மண் வீடுகளில் தங்கி, எளிய இயற்கை உணவை உண்டு அறிதல்.',
        },
        {
          stepNumber: 'படி 02',
          stepType: 'பயிற்சிக் காலம்',
          title: 'களப் பரிசோதனை & வாழ்வு முறை',
          desc: '1 முதல் 3 மாதங்கள் சமூகத்தோடு தங்கி, விவசாயம் மற்றும் ஒருமித்த கலந்தாய்வுகளில் பங்கேற்று பரஸ்பர ஒத்திசைவை உறுதி செய்தல்.',
        },
        {
          stepNumber: 'படி 03',
          stepType: 'நிரந்தரப் பொறுப்பு',
          title: 'முழுமையான குடும்ப உறுப்பினர் ஏற்பு',
          desc: 'ஒருமித்த ஏற்போடு களக் குடும்பமாக இணைதல். பொது உள்கட்டமைப்பு வளர்ச்சிக்கு பங்களித்து நிரந்தர வாழும் உரிமையைப் பெறுதல்.',
        },
      ],
      fundBadge: 'வெளிப்படையான உள்கட்டமைப்பு நிதி',
      fundHeading: 'பங்களிப்புகள் பயன்படுத்தப்படும் விதம்',
      fundSubheading: '100% பங்களிப்புகளும் மண்ணின் உள்கட்டமைப்பிற்காக மட்டுமே செலவிடப்படுகின்றன. நிர்வாக ஊதியங்களோ இடைத்தரகர்களோ கிடையாது.',
      fundItems: [
        {
          title: '1. திறந்த கிணறுகளும் நீர்வளமும்',
          desc: 'பாரம்பரிய கருங்கல் திறந்த கிணறுகளை ஆழப்படுத்துதல் மற்றும் புவியீர்ப்பு விசை நீர்க்குழாய்கள் அமைத்தல்.',
        },
        {
          title: '2. காடு வளர்ப்பு & மரங்கள்',
          desc: '2,000+ மேற்குத் தொடர்ச்சி மலை நாட்டு மரக்கன்றுகளை வளர்த்தல் மற்றும் பன்னடுக்கு உணவு வனம் அமைத்தல்.',
        },
        {
          title: '3. பொது சமையலறையும் நூலகமும்',
          desc: 'மண் சமையற்கூடம், பாரம்பரிய விதை வங்கி, வாசிப்பு அரங்கம் மற்றும் உலர் உரக் கழிப்பறை வசதிகள்.',
        },
        {
          title: '4. பரவலாக்கப்பட்ட சூரிய மின்சாரம்',
          desc: 'அத்தியாவசிய குடிநீர் இறைப்பதற்கும் இரவு வாசிப்பு விளக்குகளுக்கும் சூரிய மின்சாரக் கட்டமைப்பு.',
        },
      ],
    },
    founders: {
      badge: 'நிறுவனர்கள் & வழிகாட்டிகள்',
      heading: 'தொலைநோக்கின் காப்பாளர்கள்',
      subheading: 'செயற்கையான சமுதாயக் கட்டமைப்புகளைக் கேள்விக்குட்படுத்தி, இயற்கை வழியில் வாழ்ந்து காட்டும் நடைமுறையாளர்கள்.',
      founderName: 'ராஜேஷ்',
      founderRole: 'நிறுவனர் & தொலைநோக்கு வழிகாட்டி',
      founderBio1: 'ராஜேஷ், வங்கிப் பணியிலிருந்து விலகி, நவீன சமூகம் வாழ்க்கை மற்றும் வெற்றியை வரையறுக்கும் முறையைக் கேள்விக்குட்படுத்தியவர்.',
      founderBio2: 'விவசாயம், பயணங்கள் மற்றும் எளிய மனிதர்களை நோக்கிய இவரது தேடலின் வழியே மனிதனுக்கும் இயற்கைக்குமான ஆழமான இடைவெளியைக் கண்டறிந்தார். இயல்வனம் மூலம் அந்த உணர்வை ஓர் நிலையான இயற்கைச் சரணாலயமாக மாற்ற உழைத்து வருகிறார்.',
      founderQuote: '“எங்களுக்கு இது வெறும் திட்டமல்ல; சுதந்திரம், இயற்கை, மனிதத் தொடர்பு மற்றும் அர்த்தமுள்ள வாழ்வை நோக்கிய ஒரு பயணம்.”',
      founderCallBtn: 'அழைக்க: +91 96007 56007',
      founderLocation: 'தர்மபுரமடம், தென்காசி',
      coFounderName: 'சண்முகவேல்',
      coFounderRole: 'இணை நிறுவனர் & கள ஒருங்கிணைப்பாளர்',
      coFounderBio1: 'கோயம்புத்தூரைச் சேர்ந்த சண்முகவேல், வடிவமைப்பு மற்றும் இயந்திரப் பொறியியல் ஆராய்ச்சியாளர். கோவிட் பெருந்தொற்றுக் காலத்தில் 45 நாட்கள் தீவிர சிகிச்சைப் பிரிவில் இருந்த பிறகு இவரது வாழ்வு மாறியது.',
      coFounderBio2: 'அவரது குணமடையும் பயணம் இயற்கை உணவு மற்றும் எளிய வாழ்வை நோக்கியதாக அமைந்தது. சிவசைலம் வந்தடைந்த அவர், சேயோன் அறக்கட்டளை மூலம் 50+ மாதாந்திர இயற்கை முகாம்களை நடத்தி 1,000-க்கும் மேற்பட்டோருக்கு இயற்கை வாழ்வை அறிமுகப்படுத்தியுள்ளார்.',
      coFounderQuote: '“இயன்ற வரை இயற்கையோடு இணைந்து மகிழ்வோடு வாழ்வோம்.”',
      coFounderCallBtn: 'அழைக்க: +91 94440 98765',
      coFounderLocation: 'சிவசைலம், தென்காசி',
    },
    closing: {
      badge: 'புனித களம் உங்களை வரவேற்கிறது',
      heading: 'இயற்கை நெறி வழி வாழ்வை அனுபவிக்கத் தயாரா?',
      subheading: 'சேயோன் இயற்கை முகாமில் பங்கேற்க விரும்பினாலும், பாரம்பரிய விதைகளைப் பகிர விரும்பினாலும், நிலத்தில் வாழ விரும்பினாலும் எமது கதவுகள் திறந்தே உள்ளன.',
      btnWhatsapp: 'வாட்ஸ்அப் சமூகக் குழுவில் இணையுங்கள்',
      btnEmail: 'contact@iyalvanam.org',
      footerBlessing: '“இயற்கையை நேசிக்கும் ஒவ்வொரு உள்ளத்திற்கும் எமது நல்வரவு.”',
    },
    footer: {
      bannerTagline: 'இயன்ற வரை இயற்கைக்கு திரும்புவோம் • சிவசைலம், தென்காசி',
      bannerHeading: 'மேற்குத் தொடர்ச்சி மலை மடியில் அமைந்துள்ள கூட்டு சமூகத்தில் இணையுங்கள்',
      bannerSub: 'நிறுவனர்களை நேரடியாகத் தொடர்பு கொள்ளுங்கள், இயற்கை முகாம்களுக்கு வாருங்கள் அல்லது உரையாடலில் இணையுங்கள்.',
      bannerBtn: 'வாட்ஸ்அப் குழுவில் இணையுங்கள்',
      brandDesc: 'மேற்குத் தொடர்ச்சி மலையடிவாரத்தில் நிரந்தரக் காடுகள் பாதுகாப்பு, செயற்கையற்ற வாழ்வியல் மற்றும் தலைமுறை தற்சார்பை நிலைநிறுத்தும் புனித நில இயக்கம்.',
      sanctuaryAddress: 'தர்மபுரமடம் / சிவசைலம்',
      districtState: 'தென்காசி மாவட்டம், தமிழ்நாடு — 627803',
      sectionsTitle: 'தளத்தின் பிரிவுகள்',
      navHero: 'முகப்பு & நோக்கம்',
      navEtymology: 'பெயர்க் காரணம் (இயல் • வனம் • கூடம்)',
      navPhilosophy: '5 அடிப்படைக் கோட்பாடுகள் & பூதங்கள்',
      navPillars: '8 வாழ்வியல் தூண்கள்',
      navPrinciples: 'அறக்கோட்பாடுகள்',
      navLand: 'நிலமும் தென்காசி வரைபடமும்',
      stewardsTitle: 'நிறுவனர்கள் & வழிகாட்டிகள்',
      founderTitle: 'நிறுவனர் & தொலைநோக்கு வழிகாட்டி',
      coFounderTitle: 'இணை நிறுவனர் & கள ஒருங்கிணைப்பாளர்',
      trustStructureTitle: 'அறக்கட்டளை அமைப்பு',
      assetTrustDesc: 'நிலத்தை இயற்கையின் பொது அறக்கட்டளையாக நிரந்தரமாகப் பாதுகாக்கும் காப்பாளர்.',
      operationalTrustDesc: '50+ முகாம்கள், இயற்கை உணவு ஆய்வு மற்றும் கூட்டு வாழ்வை நடத்தும் கள அமைப்பு.',
      copyright: '© 2026 இயல்வனம் நிலப் பாதுகாப்பு அறக்கட்டளை & சேயோன் இயற்கை வாழ்வியல் அறக்கட்டளை.',
      bottomTagline: 'பொது நிலக் களம் • தர்மபுரமடம், தென்காசி',
    },
  },
};
