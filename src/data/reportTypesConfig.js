export const REPORT_CATEGORIES = [
  { id: 'all', name: 'All Reports' },
  { id: 'general', name: 'Complete & Kundli' },
  { id: 'life-aspects', name: 'Career & Finance' },
  { id: 'relationships', name: 'Marriage & Family' },
  { id: 'specialized', name: 'Dasha, Dosha & Travel' },
  { id: 'matching-numerology', name: 'Matching & Numerology' }
];

export const reportTypesList = [
  {
    id: 'complete-astrology',
    slug: 'complete-astrology',
    title: 'Complete Astrology Report',
    category: 'general',
    tag: 'All-Inclusive Life Guide',
    iconName: 'FileSpreadsheet',
    description: 'Comprehensive 360-degree Vedic analysis covering birth chart, planetary positions, Dasha timelines, Yogas, Doshas, and lifelong predictions across all domains.',
    estimatedPages: '15-20 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'charts-d1-d9-d10',
      'planetary-positions',
      'house-analysis',
      'nakshatra-details',
      'yogas-doshas',
      'vimshottari-dasha',
      'career-finance-summary',
      'marriage-relationship-summary',
      'health-wellness-summary',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      'Detailed D1, D9, and D10 Divisional Charts',
      'Complete Vimshottari Dasha timeline predictions',
      'Major & Minor Yogas identification',
      'Custom gemstone & mantra recommendations'
    ],
    popular: true,
    enabled: true
  },
  {
    id: 'kundli',
    slug: 'kundli',
    title: 'Kundli / Birth Chart Report',
    category: 'general',
    tag: 'Natal Foundation',
    iconName: 'Compass',
    description: 'Precise natal chart calculation including Ascendant (Lagna), planetary longitudes, Nakshatra padas, house cusps, and divisional charts.',
    estimatedPages: '8-10 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'charts-d1-d9-d10',
      'planetary-positions',
      'house-analysis',
      'nakshatra-details',
      'disclaimer'
    ],
    highlights: [
      'North Indian & South Indian Chart view formats',
      'Rashi, Navamsa & Dashamsha charts',
      'Ascendant & Moon sign detailed analysis',
      'Planetary dignities & retrograde status'
    ],
    popular: true,
    enabled: true
  },
  {
    id: 'career',
    slug: 'career',
    title: 'Career & Profession Report',
    category: 'life-aspects',
    tag: 'Enterprise & Ambition',
    iconName: 'Briefcase',
    description: 'In-depth analysis of 10th house, Saturn, Sun, and Mercury positions to guide career choices, job changes, promotions, and entrepreneurial success.',
    estimatedPages: '10-12 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'charts-d1-d10',
      'career-10th-house',
      'saturn-sun-analysis',
      'favorable-career-fields',
      'career-dasha-timeline',
      'business-vs-job',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      '10th House lord analysis & D10 Dashamsha breakdown',
      'Optimal timing for job switches and promotions',
      'Job vs Business aptitude analysis',
      'Career growth Dasha periods'
    ],
    popular: true,
    enabled: true
  },
  {
    id: 'finance',
    slug: 'finance',
    title: 'Finance & Wealth Report',
    category: 'life-aspects',
    tag: 'Prosperity & Assets',
    iconName: 'TrendingUp',
    description: 'Evaluation of 2nd (accumulated wealth), 11th (gains), and 9th (fortune) houses along with Dhana Yogas for investment decisions and financial stability.',
    estimatedPages: '10-12 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'wealth-houses-analysis',
      'dhana-yogas',
      'income-sources',
      'financial-dasha-periods',
      'property-investments',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      'Dhana Yogas (Wealth-producing combinations) check',
      'Property, real estate & equity investment indicators',
      'Favorable money influx Dasha periods',
      'Debt management & risk mitigation strategies'
    ],
    popular: true,
    enabled: true
  },
  {
    id: 'marriage',
    slug: 'marriage',
    title: 'Marriage & Relationship Report',
    category: 'relationships',
    tag: 'Partnership & Harmony',
    iconName: 'Heart',
    description: 'Detailed assessment of the 7th house, Venus, Jupiter, and Navamsa chart to understand spouse characteristics, marriage timing, and relationship harmony.',
    estimatedPages: '10-12 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      '7th-house-analysis',
      'venus-jupiter-evaluation',
      'spouse-characteristics',
      'marriage-timing-dasha',
      'manglik-dosha-check',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      'Spouse nature, background & physical attributes',
      'Promising marriage timing windows via Dasha & transits',
      '7th House & D9 Navamsa harmony check',
      'Relationship enhancement remedies'
    ],
    popular: true,
    enabled: true
  },
  {
    id: 'education',
    slug: 'education',
    title: 'Education & Academic Focus',
    category: 'life-aspects',
    tag: 'Intellect & Higher Learning',
    iconName: 'GraduationCap',
    description: 'Analysis of 4th and 5th houses, Mercury, and Jupiter to guide higher studies, competitive exams, streams of learning, and research fields.',
    estimatedPages: '8-10 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'intellect-houses-4th-5th',
      'mercury-jupiter-influence',
      'suitable-educational-streams',
      'competitive-exam-timing',
      'higher-studies-abroad',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      'Recommended academic streams (STEM, Humanities, Business, Medical)',
      'Aptitude for competitive exams and certifications',
      'Favorable Dasha periods for academic excellence',
      'Memory & focus enhancing remedies'
    ],
    popular: false,
    enabled: true
  },
  {
    id: 'health',
    slug: 'health',
    title: 'Health & Wellness Report',
    category: 'life-aspects',
    tag: 'Vitality & Balance',
    iconName: 'Activity',
    description: 'Empirical review of 6th, 8th, and 12th houses, Sun, Moon, and Ascendant lord to maintain physical vitality, emotional stability, and preventative wellness.',
    estimatedPages: '8-10 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'ascendant-sun-moon-vitality',
      '6th-8th-12th-houses-review',
      'elemental-dosha-balance',
      'sensitive-body-areas',
      'wellness-dasha-periods',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      'Vedic elemental balance (Vata, Pitta, Kapha) overview',
      'Sensitive anatomical areas requiring care',
      'Planetary Dasha periods for health vigilance',
      'Customized holistic wellness routines'
    ],
    popular: false,
    enabled: true
  },
  {
    id: 'business',
    slug: 'business',
    title: 'Business & Enterprise Report',
    category: 'life-aspects',
    tag: 'Venture & Strategy',
    iconName: 'Building2',
    description: 'Strategic analysis for entrepreneurs evaluating 7th, 3rd, 10th, and 11th houses, Mercury (trade), and business partnership compatibility.',
    estimatedPages: '10-12 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'entrepreneurial-strength',
      'trade-mercury-analysis',
      'ideal-business-sectors',
      'partnership-vs-solo',
      'expansion-timing-dasha',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      'Entrepreneurial drive & risk tolerance profile',
      'Solo business vs strategic partnership indicators',
      'Lucrative business sectors aligned with birth chart',
      'Ideal launch and expansion dates'
    ],
    popular: false,
    enabled: true
  },
  {
    id: 'foreign-settlement',
    slug: 'foreign-settlement',
    title: 'Foreign Travel & Settlement',
    category: 'specialized',
    tag: 'Relocation & Global Path',
    iconName: 'Globe',
    description: 'Evaluation of 9th (long journeys), 12th (foreign lands), and 4th (homeland) houses to forecast visa opportunities, international education, and permanent relocation.',
    estimatedPages: '8-10 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      '9th-12th-houses-travel-check',
      'foreign-settlement-indicators',
      'reasons-for-travel',
      'promising-travel-dasha',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      'Permanent settlement vs short-term foreign stay indicators',
      'Primary purpose: Education, Work, or Marriage abroad',
      'Favorable travel Dasha periods and Rahu/Rahu-transit timing',
      'Visa and relocation enhancement remedies'
    ],
    popular: false,
    enabled: true
  },
  {
    id: 'dasha',
    slug: 'dasha',
    title: 'Dasha & Predictions Report',
    category: 'specialized',
    tag: 'Time-Flow & Cycles',
    iconName: 'Clock',
    description: 'Comprehensive timeline of Vimshottari Mahadasha, Antardasha, and Paryantardasha periods detailing upcoming opportunities, milestones, and cautionary phases.',
    estimatedPages: '12-15 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'current-mahadasha-analysis',
      'antardasha-breakdown',
      'upcoming-5-year-forecast',
      'major-life-milestones',
      'planetary-transits-gochara',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      'Detailed breakdown of active Mahadasha & Antardasha',
      '5-Year strategic timeline forecast across key life areas',
      'Major planetary transits (Saturn Sade Sati, Jupiter transits)',
      'Phase-wise guidance & spiritual remedies'
    ],
    popular: true,
    enabled: true
  },
  {
    id: 'dosha',
    slug: 'dosha',
    title: 'Dosha & Remedies Analysis',
    category: 'specialized',
    tag: 'Affliction & Mitigation',
    iconName: 'ShieldAlert',
    description: 'In-depth diagnostic check for major astrological afflictions including Manglik Dosha, Kaal Sarp Dosha, Pitra Dosha, Rahu-Ketu axis, and Sade Sati with classical remedies.',
    estimatedPages: '10-12 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'manglik-dosha-diagnostic',
      'kaal-sarp-dosha-diagnostic',
      'pitra-dosha-check',
      'sade-sati-status',
      'planetary-combustion-retrograde',
      'remedial-measures-rituals',
      'gemstone-recommendation',
      'disclaimer'
    ],
    highlights: [
      'Rigorous diagnostic check for 5 major planetary afflictions',
      'Cancellation (Neechbhanga / Bhanga) factor identification',
      'Empirical, non-superstitious remedial guidance',
      'Gemstone resonance & elemental balancing'
    ],
    popular: false,
    enabled: true
  },
  {
    id: 'kundli-matching',
    slug: 'kundli-matching',
    title: 'Kundli Matching & Compatibility',
    category: 'matching-numerology',
    tag: 'Ashtakoota 36 Guna Score',
    iconName: 'Users',
    description: 'Two-person birth chart synchronization analyzing Ashtakoota 36 Gunas, Nadi Dosha, Bhakoot, Manglik alignment, and overall marital longevity.',
    estimatedPages: '10-12 Pages',
    sections: [
      'executive-summary',
      'couple-details',
      'ashtakoota-guna-table',
      'category-breakdown',
      'manglik-compatibility',
      'emotional-mental-sync',
      'family-longevity-progeny',
      'compatibility-summary-verdict',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      '36 Guna Ashtakoota score with detailed category breakdown',
      'Nadi Dosha and Bhakoot Dosha cancellation verification',
      'Two-way Manglik compatibility check',
      'Relationship harmony and longevity summary'
    ],
    popular: true,
    enabled: true
  },
  {
    id: 'numerology',
    slug: 'numerology',
    title: 'Vedic Numerology Report',
    category: 'matching-numerology',
    tag: 'Vibrational Frequencies',
    iconName: 'Sparkles',
    description: 'Vibrational analysis combining Full Name and Birth Date to discover Life Path, Expression/Destiny, Soul Urge, and Personality numbers along with lucky days and colors.',
    estimatedPages: '8-10 Pages',
    sections: [
      'executive-summary',
      'birth-details',
      'life-path-number',
      'expression-destiny-number',
      'soul-urge-number',
      'personality-number',
      'name-spelling-harmony',
      'lucky-numbers-days-colors',
      'remedies-gemstones',
      'disclaimer'
    ],
    highlights: [
      'Core 4 Numerology parameters calculated',
      'Name vibration sync with Date of Birth',
      'Lucky dates, days, gemstones & color frequencies',
      'Personal Year cycle predictions'
    ],
    popular: true,
    enabled: true
  }
];
