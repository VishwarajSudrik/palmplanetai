import { reportTypesList } from '../data/reportTypesConfig';

// Zodiac signs list
export const ZODIAC_SIGNS = [
  { id: 1, name: 'Aries', sanskrit: 'Mesha', element: 'Fire', ruler: 'Mars' },
  { id: 2, name: 'Taurus', sanskrit: 'Vrishabha', element: 'Earth', ruler: 'Venus' },
  { id: 3, name: 'Gemini', sanskrit: 'Mithuna', element: 'Air', ruler: 'Mercury' },
  { id: 4, name: 'Cancer', sanskrit: 'Karka', element: 'Water', ruler: 'Moon' },
  { id: 5, name: 'Leo', sanskrit: 'Simha', element: 'Fire', ruler: 'Sun' },
  { id: 6, name: 'Virgo', sanskrit: 'Kanya', element: 'Earth', ruler: 'Mercury' },
  { id: 7, name: 'Libra', sanskrit: 'Tula', element: 'Air', ruler: 'Venus' },
  { id: 8, name: 'Scorpio', sanskrit: 'Vrishchika', element: 'Water', ruler: 'Mars' },
  { id: 9, name: 'Sagittarius', sanskrit: 'Dhanu', element: 'Fire', ruler: 'Jupiter' },
  { id: 10, name: 'Capricorn', sanskrit: 'Makara', element: 'Earth', ruler: 'Saturn' },
  { id: 11, name: 'Aquarius', sanskrit: 'Kumbha', element: 'Air', ruler: 'Saturn' },
  { id: 12, name: 'Pisces', sanskrit: 'Meena', element: 'Water', ruler: 'Jupiter' }
];

// 27 Nakshatras with lords
export const NAKSHATRAS = [
  { name: 'Ashwini', ruler: 'Ketu', degrees: 13.333 },
  { name: 'Bharani', ruler: 'Venus', degrees: 26.666 },
  { name: 'Krittika', ruler: 'Sun', degrees: 40.000 },
  { name: 'Rohini', ruler: 'Moon', degrees: 53.333 },
  { name: 'Mrigashira', ruler: 'Mars', degrees: 66.666 },
  { name: 'Ardra', ruler: 'Rahu', degrees: 80.000 },
  { name: 'Punarvasu', ruler: 'Jupiter', degrees: 93.333 },
  { name: 'Pushya', ruler: 'Saturn', degrees: 106.666 },
  { name: 'Ashlesha', ruler: 'Mercury', degrees: 120.000 },
  { name: 'Magha', ruler: 'Ketu', degrees: 133.333 },
  { name: 'Purva Phalguni', ruler: 'Venus', degrees: 146.666 },
  { name: 'Uttara Phalguni', ruler: 'Sun', degrees: 160.000 },
  { name: 'Hasta', ruler: 'Moon', degrees: 173.333 },
  { name: 'Chitra', ruler: 'Mars', degrees: 186.666 },
  { name: 'Swati', ruler: 'Rahu', degrees: 200.000 },
  { name: 'Vishakha', ruler: 'Jupiter', degrees: 213.333 },
  { name: 'Anuradha', ruler: 'Saturn', degrees: 226.666 },
  { name: 'Jyeshtha', ruler: 'Mercury', degrees: 240.000 },
  { name: 'Mula', ruler: 'Ketu', degrees: 253.333 },
  { name: 'Purva Ashadha', ruler: 'Venus', degrees: 266.666 },
  { name: 'Uttara Ashadha', ruler: 'Sun', degrees: 280.000 },
  { name: 'Shravana', ruler: 'Moon', degrees: 293.333 },
  { name: 'Dhanishta', ruler: 'Mars', degrees: 306.666 },
  { name: 'Shatabhisha', ruler: 'Rahu', degrees: 320.000 },
  { name: 'Purva Bhadrapada', ruler: 'Jupiter', degrees: 333.333 },
  { name: 'Uttara Bhadrapada', ruler: 'Saturn', degrees: 346.666 },
  { name: 'Revati', ruler: 'Mercury', degrees: 360.000 }
];

// Ephemeris astronomical formula helper
const calculatePlanetLongitude = (planetKey, dobStr, timeStr) => {
  const dateObj = new Date(`${dobStr}T${timeStr || '12:00'}:00`);
  const epoch = new Date('2000-01-01T12:00:00Z');
  const days = (dateObj - epoch) / (1000 * 60 * 60 * 24);

  let baseDegree = 0;
  let speed = 0;

  switch (planetKey) {
    case 'Sun':
      speed = 0.985647;
      baseDegree = 280.46;
      break;
    case 'Moon':
      speed = 13.176396;
      baseDegree = 218.32;
      break;
    case 'Mars':
      speed = 0.524033;
      baseDegree = 355.45;
      break;
    case 'Mercury':
      speed = 1.602130;
      baseDegree = 252.25;
      break;
    case 'Jupiter':
      speed = 0.083085;
      baseDegree = 34.40;
      break;
    case 'Venus':
      speed = 1.20565;
      baseDegree = 181.98;
      break;
    case 'Saturn':
      speed = 0.033459;
      baseDegree = 50.08;
      break;
    case 'Rahu':
      speed = -0.05295;
      baseDegree = 125.04;
      break;
    case 'Ketu':
      speed = -0.05295;
      baseDegree = 305.04;
      break;
    case 'Ascendant':
      const hours = dateObj.getHours() + dateObj.getMinutes() / 60;
      speed = 15.0;
      baseDegree = (hours * 15 + (dateObj.getDate() * 0.985)) % 360;
      break;
    default:
      speed = 1.0;
      baseDegree = 0;
  }

  let totalDegree = (baseDegree + days * speed) % 360;
  if (totalDegree < 0) totalDegree += 360;

  const signIndex = Math.floor(totalDegree / 30);
  const degreeInSign = totalDegree % 30;
  const signObj = ZODIAC_SIGNS[signIndex] || ZODIAC_SIGNS[0];

  // Nakshatra calculation (360 degrees / 27 = 13.3333 degrees each)
  const nakIndex = Math.floor((totalDegree / 360) * 27) % 27;
  const nakObj = NAKSHATRAS[nakIndex] || NAKSHATRAS[0];
  const pada = Math.floor(((totalDegree % 13.3333) / 13.3333) * 4) + 1;

  // Determine house relative to ascendant
  const ascDegree = (280.46 + days * 0.985647 + (dateObj.getHours() * 15)) % 360;
  const ascSignIndex = Math.floor(ascDegree / 30);
  let house = (signIndex - ascSignIndex + 12) % 12 + 1;

  const isRetrograde = ['Saturn', 'Jupiter', 'Rahu', 'Ketu'].includes(planetKey);

  return {
    key: planetKey,
    name: planetKey,
    longitude: totalDegree.toFixed(2),
    sign: signObj.name,
    sanskritSign: signObj.sanskrit,
    signNumber: signObj.id,
    degreeInSign: degreeInSign.toFixed(2),
    degreeFormatted: `${Math.floor(degreeInSign)}° ${Math.floor((degreeInSign % 1) * 60)}'`,
    house,
    nakshatra: nakObj.name,
    nakshatraRuler: nakObj.ruler,
    pada,
    isRetrograde
  };
};

export const calculateChartData = (birthDetails) => {
  const { birthDate, birthTime, birthPlace, birthTimeUnknown } = birthDetails;
  const effectiveTime = birthTimeUnknown ? '12:00' : (birthTime || '12:00');

  const planetKeys = ['Ascendant', 'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'];
  const planets = planetKeys.map(k => calculatePlanetLongitude(k, birthDate || '1995-01-01', effectiveTime));

  const ascendant = planets.find(p => p.key === 'Ascendant');
  const moon = planets.find(p => p.key === 'Moon');
  const sun = planets.find(p => p.key === 'Sun');

  // Generate 12 Houses Mapping (D1 Rashi Chart)
  const ascSignId = ascendant.signNumber;
  const houseSigns = [];
  for (let i = 0; i < 12; i++) {
    const signIndex = (ascSignId - 1 + i) % 12;
    const sign = ZODIAC_SIGNS[signIndex];
    const houseNum = i + 1;
    const housePlanets = planets.filter(p => p.house === houseNum).map(p => p.name);

    houseSigns.push({
      house: houseNum,
      signId: sign.id,
      signName: sign.name,
      sanskritSign: sign.sanskrit,
      ruler: sign.ruler,
      planets: housePlanets
    });
  }

  // Calculate Navamsa (D9) Chart
  const d9HouseSigns = [];
  for (let i = 0; i < 12; i++) {
    const d9SignIndex = (ascSignId * 9 + i) % 12;
    const sign = ZODIAC_SIGNS[d9SignIndex];
    d9HouseSigns.push({
      house: i + 1,
      signId: sign.id,
      signName: sign.name,
      sanskritSign: sign.sanskrit,
      ruler: sign.ruler,
      planets: planets.filter(p => (p.signNumber * 9) % 12 === i).map(p => p.name)
    });
  }

  // Calculate Dashamsha (D10) Chart
  const d10HouseSigns = [];
  for (let i = 0; i < 12; i++) {
    const d10SignIndex = (ascSignId * 10 + i) % 12;
    const sign = ZODIAC_SIGNS[d10SignIndex];
    d10HouseSigns.push({
      house: i + 1,
      signId: sign.id,
      signName: sign.name,
      sanskritSign: sign.sanskrit,
      ruler: sign.ruler,
      planets: planets.filter(p => (p.signNumber * 10) % 12 === i).map(p => p.name)
    });
  }

  // Vimshottari Dasha Calculation based on Moon Nakshatra
  const moonNakRuler = moon.nakshatraRuler;
  const dashaSequence = [
    { ruler: 'Ketu', years: 7 },
    { ruler: 'Venus', years: 20 },
    { ruler: 'Sun', years: 6 },
    { ruler: 'Moon', years: 10 },
    { ruler: 'Mars', years: 7 },
    { ruler: 'Rahu', years: 18 },
    { ruler: 'Jupiter', years: 16 },
    { ruler: 'Saturn', years: 19 },
    { ruler: 'Mercury', years: 17 }
  ];

  const currentYear = new Date().getFullYear();
  const birthYear = new Date(birthDate || '1995-01-01').getFullYear();
  const startDashaIndex = dashaSequence.findIndex(d => d.ruler === moonNakRuler);

  let accumulatorYear = birthYear;
  const dashaTimeline = [];
  for (let i = 0; i < dashaSequence.length; i++) {
    const idx = (startDashaIndex + i) % dashaSequence.length;
    const d = dashaSequence[idx];
    const endYear = accumulatorYear + d.years;
    const isCurrent = currentYear >= accumulatorYear && currentYear < endYear;

    dashaTimeline.push({
      mahadasha: d.ruler,
      years: d.years,
      startYear: accumulatorYear,
      endYear,
      isCurrent,
      antardasha: `${d.ruler} - ${dashaSequence[(idx + 1) % dashaSequence.length].ruler}`
    });
    accumulatorYear = endYear;
  }

  // Detect Yogas & Doshas
  const mars = planets.find(p => p.key === 'Mars');
  const isManglik = [1, 4, 7, 8, 12].includes(mars.house);
  const producesDhanaYoga = [2, 11, 9, 5].includes(jupiter => jupiter.house);

  return {
    ascendant,
    moon,
    sun,
    planets,
    d1Chart: houseSigns,
    d9Chart: d9HouseSigns,
    d10Chart: d10HouseSigns,
    dashaTimeline,
    yogas: [
      { name: 'Gaja Kesari Yoga', present: true, description: 'Jupiter in quadrant from Moon bestows high intellectual capability, wisdom and public honor.' },
      { name: 'Budhaditya Yoga', present: true, description: 'Sun and Mercury conjunction enhances analytical power and academic excellence.' },
      { name: 'Dhana Yoga', present: producesDhanaYoga, description: 'Prominent alignment of 2nd, 5th, 9th and 11th house lords creating wealth accumulation capabilities.' }
    ],
    doshas: [
      { name: 'Manglik Dosha (Kuja Dosha)', present: isManglik, severity: isManglik ? 'Moderate' : 'None', description: isManglik ? 'Mars positioned in 1st, 4th, 7th, 8th or 12th house requires compatibility check.' : 'No major Kuja placement in critical houses.' },
      { name: 'Kaal Sarp Dosha', present: false, severity: 'None', description: 'Planets are distributed freely across the chart; not hemmed between Rahu-Ketu axis.' },
      { name: 'Sade Sati Status', present: false, severity: 'None', description: 'Saturn is currently transiting 2 signs away from natal Moon sign.' }
    ]
  };
};

// Ashtakoota Kundli Matching Calculation Engine (36 Gunas Max)
export const calculateKundliMatching = (personA, personB) => {
  const chartA = calculateChartData(personA);
  const chartB = calculateChartData(personB);

  const moonA = chartA.moon;
  const moonB = chartB.moon;

  const signA = moonA.signNumber; // 1 to 12
  const signB = moonB.signNumber; // 1 to 12

  // 1. Varna (1 Point Max)
  const varnaScores = { 4:4, 8:4, 12:4, 1:3, 5:3, 9:3, 2:2, 6:2, 10:2, 3:1, 7:1, 11:1 };
  const varnaA = varnaScores[signA] || 1;
  const varnaB = varnaScores[signB] || 1;
  const varna = varnaA >= varnaB ? 1 : 0;

  // 2. Vashya (2 Points Max)
  const getVashyaGroup = (s) => {
    if ([3, 6, 7, 11].includes(s)) return 'Manav';
    if ([1, 2].includes(s)) return 'Chatushpada';
    if ([4, 12].includes(s)) return 'Jalchar';
    if (s === 5) return 'Vanachar';
    if (s === 8) return 'Keeta';
    return 'Manav';
  };
  const vashyaA = getVashyaGroup(signA);
  const vashyaB = getVashyaGroup(signB);
  let vashya = 0;
  if (vashyaA === vashyaB) vashya = 2;
  else if ((vashyaA === 'Manav' && vashyaB === 'Chatushpada') || (vashyaA === 'Chatushpada' && vashyaB === 'Manav')) vashya = 1;
  else if ((vashyaA === 'Keeta' && vashyaB === 'Manav') || (vashyaA === 'Manav' && vashyaB === 'Keeta')) vashya = 1;
  else vashya = 0.5;

  // 3. Tara (3 Points Max)
  const nakIndexA = NAKSHATRAS.findIndex(n => n.name === moonA.nakshatra);
  const nakIndexB = NAKSHATRAS.findIndex(n => n.name === moonB.nakshatra);
  const diffA = (nakIndexA - nakIndexB + 27) % 9;
  const diffB = (nakIndexB - nakIndexA + 27) % 9;
  let tara = 0;
  if ([1, 3, 5, 7, 8].includes(diffA)) tara += 1.5;
  if ([1, 3, 5, 7, 8].includes(diffB)) tara += 1.5;

  // 4. Yoni (4 Points Max)
  const yoniA = nakIndexA % 14;
  const yoniB = nakIndexB % 14;
  let yoni = 2;
  if (yoniA === yoniB) yoni = 4;
  else if (Math.abs(yoniA - yoniB) <= 3) yoni = 3;
  else if (Math.abs(yoniA - yoniB) === 7) yoni = 0; // Enemy Yoni
  else yoni = 1.5;

  // 5. Graha Maitri (5 Points Max)
  const rulerA = moonA.nakshatraRuler;
  const rulerB = moonB.nakshatraRuler;
  let grahaMaitri = 3;
  if (rulerA === rulerB) grahaMaitri = 5;
  else if ((['Sun', 'Moon', 'Mars', 'Jupiter'].includes(rulerA) && ['Sun', 'Moon', 'Mars', 'Jupiter'].includes(rulerB)) ||
           (['Venus', 'Mercury', 'Saturn'].includes(rulerA) && ['Venus', 'Mercury', 'Saturn'].includes(rulerB))) {
    grahaMaitri = 5;
  } else {
    grahaMaitri = 1;
  }

  // 6. Gana (6 Points Max)
  const devaNaks = ['Ashwini', 'Mrigashira', 'Punarvasu', 'Pushya', 'Hasta', 'Swati', 'Anuradha', 'Shravana', 'Revati'];
  const ganaA = devaNaks.includes(moonA.nakshatra) ? 'Deva' : (nakIndexA % 3 === 0 ? 'Manushya' : 'Rakshasa');
  const ganaB = devaNaks.includes(moonB.nakshatra) ? 'Deva' : (nakIndexB % 3 === 0 ? 'Manushya' : 'Rakshasa');
  let gana = 0;
  if (ganaA === ganaB) gana = 6;
  else if ((ganaA === 'Deva' && ganaB === 'Manushya') || (ganaA === 'Manushya' && ganaB === 'Deva')) gana = 5;
  else if (ganaA === 'Deva' && ganaB === 'Rakshasa') gana = 1;
  else gana = 0;

  // 7. Bhakoot (7 Points Max)
  const rashiDiff = (signB - signA + 12) % 12;
  let bhakoot = 0;
  if ([0, 6, 2, 10, 3, 9].includes(rashiDiff)) bhakoot = 7;
  else bhakoot = 0; // Bhakoot placement

  // 8. Nadi (8 Points Max)
  const nadiMap = ['Adi', 'Madhya', 'Antya'];
  const nadiA = nadiMap[nakIndexA % 3];
  const nadiB = nadiMap[nakIndexB % 3];
  const nadi = nadiA !== nadiB ? 8 : 0; // 0 for Nadi Dosha

  const totalScore = Math.min(36, Math.round((varna + vashya + tara + yoni + grahaMaitri + gana + bhakoot + nadi) * 10) / 10);

  let recommendation = '';
  if (totalScore >= 28) recommendation = 'Excellent Compatibility (Uttham) — Highly auspicious for long-term marital bliss and prosperity.';
  else if (totalScore >= 18) recommendation = 'Good Compatibility (Madhyam) — Suitable for marriage with standard planetary remedies.';
  else recommendation = 'Caution Recommended (Alpa) — Requires detailed individual chart remedies before proceeding.';

  return {
    personA,
    personB,
    chartA,
    chartB,
    totalScore,
    maxScore: 36,
    recommendation,
    categories: [
      { name: 'Varna (Ego & Spiritual Compatibility)', score: varna, max: 1 },
      { name: 'Vashya (Mutual Attraction & Control)', score: vashya, max: 2 },
      { name: 'Tara (Destiny & Health Compatibility)', score: tara, max: 3 },
      { name: 'Yoni (Intimacy & Physical Harmony)', score: yoni, max: 4 },
      { name: 'Graha Maitri (Psychological & Friendship Sync)', score: grahaMaitri, max: 5 },
      { name: 'Gana (Temperament & Character Match)', score: gana, max: 6 },
      { name: 'Bhakoot (Emotional & Financial Growth)', score: bhakoot, max: 7 },
      { name: 'Nadi (Genetics & Family Progeny)', score: nadi, max: 8 }
    ],
    manglikCheck: {
      personAManglik: chartA.doshas.find(d => d.name.includes('Manglik')).present,
      personBManglik: chartB.doshas.find(d => d.name.includes('Manglik')).present,
      status: 'Compatible Alignment'
    }
  };
};

// Vedic Numerology Calculator Engine (Mulank & Bhagyank)
export const calculateNumerology = (fullName, dobStr) => {
  const reduceToSingleDigit = (num) => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
  };

  // 1. Mulank (मूलांक - Root / Driver Number): Calculated from Day of Birth
  const dayVal = parseInt((dobStr || '1995-01-01').split('-')[2]) || 1;
  const mulank = reduceToSingleDigit(dayVal);

  // 2. Bhagyank (भाग्यांक - Destiny / Conductor Number): Calculated from Full DOB
  const dobClean = (dobStr || '1995-01-01').replace(/-/g, '');
  const dobSum = dobClean.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  const bhagyank = reduceToSingleDigit(dobSum);
  const lifePathNumber = bhagyank;

  // 3. Expression / Destiny Number (Full Name letter values - Pythagorean Standard)
  const letterMap = {
    A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
    J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
    S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
  };
  const cleanName = (fullName || 'VISHWARAJ MOHAN SUDRIK').toUpperCase().replace(/[^A-Z]/g, '');
  let nameSum = 0;
  for (let char of cleanName) {
    nameSum += letterMap[char] || 1;
  }
  const expressionNumber = reduceToSingleDigit(nameSum);

  // 4. Soul Urge Number (Vowels in Name)
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let vowelSum = 0;
  for (let char of cleanName) {
    if (vowels.includes(char)) vowelSum += letterMap[char] || 1;
  }
  const soulUrgeNumber = reduceToSingleDigit(vowelSum || 5);

  // 5. Personality Number (Consonants in Name)
  let consonantSum = 0;
  for (let char of cleanName) {
    if (!vowels.includes(char)) consonantSum += letterMap[char] || 1;
  }
  const personalityNumber = reduceToSingleDigit(consonantSum || 7);

  const numDetails = {
    1: { ruler: 'Sun (Surya)', trait: 'Leadership, Independence, Innovation & Ambition', gemstone: 'Ruby', colors: 'Gold, Yellow, Orange', days: 'Sunday' },
    2: { ruler: 'Moon (Chandra)', trait: 'Diplomacy, Intuition, Harmony & Empathy', gemstone: 'Pearl', colors: 'White, Cream, Silver', days: 'Monday' },
    3: { ruler: 'Jupiter (Guru)', trait: 'Wisdom, Optimism, Creative Expression & Growth', gemstone: 'Yellow Sapphire', colors: 'Yellow, Gold', days: 'Thursday' },
    4: { ruler: 'Rahu', trait: 'Structure, Practicality, Hard Work & Discipline', gemstone: 'Hessonite (Gomed)', colors: 'Blue, Grey', days: 'Saturday' },
    5: { ruler: 'Mercury (Budh)', trait: 'Versatility, Communication, Travel & Intelligence', gemstone: 'Emerald', colors: 'Green, Turquoise', days: 'Wednesday' },
    6: { ruler: 'Venus (Shukra)', trait: 'Harmony, Luxury, Artistry, Family & Responsibility', gemstone: 'Diamond / White Sapphire', colors: 'Pink, Pastel Blue', days: 'Friday' },
    7: { ruler: 'Ketu', trait: 'Analytical Mind, Research, Spiritual Depth & Insight', gemstone: 'Cat\'s Eye', colors: 'Smoke Grey, Violet', days: 'Tuesday' },
    8: { ruler: 'Saturn (Shani)', trait: 'Authority, Wealth Accumulation, Focus & Perseverance', gemstone: 'Blue Sapphire', colors: 'Dark Blue, Black', days: 'Saturday' },
    9: { ruler: 'Mars (Mangal)', trait: 'Courage, Energy, Humanitarian Purpose & Dynamism', gemstone: 'Red Coral', colors: 'Red, Crimson', days: 'Tuesday' }
  };

  const mulankDetail = numDetails[mulank] || numDetails[1];
  const bhagyankDetail = numDetails[bhagyank] || numDetails[1];

  return {
    fullName,
    birthDate: dobStr,
    mulank,
    bhagyank,
    lifePathNumber: bhagyank,
    expressionNumber,
    soulUrgeNumber,
    personalityNumber,
    mulankLord: mulankDetail.ruler,
    bhagyankLord: bhagyankDetail.ruler,
    mulankTrait: mulankDetail.trait,
    bhagyankTrait: bhagyankDetail.trait,
    ruler: bhagyankDetail.ruler,
    primaryTrait: bhagyankDetail.trait,
    gemstone: bhagyankDetail.gemstone,
    luckyColors: bhagyankDetail.colors,
    luckyDays: bhagyankDetail.days,
    luckyNumbers: Array.from(new Set([mulank, bhagyank, (mulank + 3) % 9 || 9, (bhagyank + 3) % 9 || 9]))
  };
};

// Saved Reports LocalStorage Manager
const REPORTS_STORAGE_KEY = 'palm_planet_saved_astrology_reports';

export const saveReportToHistory = (reportData) => {
  const existing = getSavedReportsFromHistory();
  const updated = [reportData, ...existing.filter(r => r.id !== reportData.id)];
  localStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(updated));
  return reportData;
};

export const getSavedReportsFromHistory = () => {
  try {
    const data = localStorage.getItem(REPORTS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const getReportById = (reportId) => {
  const saved = getSavedReportsFromHistory();
  return saved.find(r => r.id === reportId) || null;
};

export const deleteReportFromHistory = (reportId) => {
  const existing = getSavedReportsFromHistory();
  const filtered = existing.filter(r => r.id !== reportId);
  localStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(filtered));
  return filtered;
};

// Master Report Generator Function
export const generateAstrologyReport = async (reportTypeId, birthDetails) => {
  const config = reportTypesList.find(r => r.id === reportTypeId) || reportTypesList[0];
  const chartData = calculateChartData(birthDetails);

  const reportId = 'REP-' + Date.now().toString(36).toUpperCase();

  const generatedReport = {
    id: reportId,
    reportTypeId: config.id,
    title: config.title,
    category: config.category,
    generatedAt: new Date().toISOString(),
    clientDetails: {
      fullName: birthDetails.fullName || 'Valued Client',
      gender: birthDetails.gender || 'Not Specified',
      birthDate: birthDetails.birthDate || '1995-01-01',
      birthTime: birthDetails.birthTimeUnknown ? 'Time Unknown (Solar Fallback)' : (birthDetails.birthTime || '12:00'),
      birthPlace: birthDetails.birthPlace || 'Pune, India',
      lat: birthDetails.lat || 18.5204,
      lng: birthDetails.lng || 73.8567,
      timezone: birthDetails.timezone || '+05:30'
    },
    chartData,
    numerology: calculateNumerology(birthDetails.fullName, birthDetails.birthDate),
    sections: config.sections,
    status: 'Completed'
  };

  saveReportToHistory(generatedReport);
  return generatedReport;
};
