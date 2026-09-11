import React, { useState } from 'react';
import { CITY_PRESETS, searchCities, getDefaultLocation } from '../../services/geocodingService';
import { User, Calendar, Clock, MapPin, AlertCircle, Sparkles, ArrowRight, HelpCircle, Check, Briefcase, TrendingUp, Heart, GraduationCap, Activity, Building2, Globe, ShieldAlert, Layers } from 'lucide-react';

export const BirthDetailsForm = ({ selectedReport, initialValues = {}, onSubmit, submitButtonText = "Save & Continue to Report Selection" }) => {
  const defaultLoc = getDefaultLocation();

  const [formData, setFormData] = useState({
    fullName: initialValues.fullName || '',
    gender: initialValues.gender || '',
    birthDate: initialValues.birthDate || '',
    birthTime: initialValues.birthTime || '',
    birthTimeUnknown: initialValues.birthTimeUnknown || false,
    birthPlace: initialValues.birthPlace || '',
    lat: initialValues.lat || defaultLoc.lat,
    lng: initialValues.lng || defaultLoc.lng,
    timezone: initialValues.timezone || defaultLoc.timezone
  });

  const [modulePrefs, setModulePrefs] = useState({
    occupation: initialValues.modulePreferences?.occupation || 'Employed',
    industry: initialValues.modulePreferences?.industry || 'IT & Software / Tech',
    careerFocus: initialValues.modulePreferences?.careerFocus || 'Job Switch Timing',
    incomeSource: initialValues.modulePreferences?.incomeSource || 'Monthly Salary',
    wealthFocus: initialValues.modulePreferences?.wealthFocus || 'Wealth Accumulation & Growth',
    relationshipStatus: initialValues.modulePreferences?.relationshipStatus || 'Single (Looking for Marriage)',
    marriageFocus: initialValues.modulePreferences?.marriageFocus || 'Marriage Timing Window',
    academicLevel: initialValues.modulePreferences?.academicLevel || 'Undergraduate (B.E/B.Tech/B.Sc/B.Com)',
    academicStream: initialValues.modulePreferences?.academicStream || 'Engineering & Technology',
    healthFocus: initialValues.modulePreferences?.healthFocus || 'General Preventative Vitality',
    businessSector: initialValues.modulePreferences?.businessSector || 'Tech / Software / AI',
    businessObjective: initialValues.modulePreferences?.businessObjective || 'New Business Launch',
    targetCountry: initialValues.modulePreferences?.targetCountry || 'United States & Canada',
    travelPurpose: initialValues.modulePreferences?.travelPurpose || 'Work Visa & Overseas Job',
    dashaWindow: initialValues.modulePreferences?.dashaWindow || 'Next 3 Years (Key Milestones)',
    doshaFocus: initialValues.modulePreferences?.doshaFocus || 'Manglik / Kuja Dosha',
    chartStyle: initialValues.modulePreferences?.chartStyle || 'North Indian (Diamond Format)'
  });

  const [searchQuery, setSearchQuery] = useState(initialValues.birthPlace || '');
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMsg('');
  };

  const handlePrefChange = (e) => {
    const { name, value } = e.target;
    setModulePrefs(prev => ({ ...prev, [name]: value }));
  };

  const handleCitySearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setFormData(prev => ({ ...prev, birthPlace: val }));
    const matches = searchCities(val);
    setCitySuggestions(matches);
    setShowSuggestions(true);
    setErrorMsg('');
  };

  const selectCity = (cityObj) => {
    const placeStr = `${cityObj.city}, ${cityObj.state}, ${cityObj.country}`;
    setSearchQuery(placeStr);
    setFormData(prev => ({
      ...prev,
      birthPlace: placeStr,
      lat: cityObj.lat,
      lng: cityObj.lng,
      timezone: cityObj.timezone
    }));
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMsg('Full Legal Name is mandatory to generate your report.');
      return;
    }

    if (!formData.gender) {
      setErrorMsg('Please select your Gender (mandatory).');
      return;
    }

    if (!formData.birthDate) {
      setErrorMsg('Date of Birth is mandatory to calculate planetary positions.');
      return;
    }

    const selectedDate = new Date(formData.birthDate);
    const today = new Date();
    if (selectedDate > today) {
      setErrorMsg('Date of birth cannot be in the future.');
      return;
    }

    if (!formData.birthTimeUnknown && !formData.birthTime) {
      setErrorMsg('Exact Birth Time is mandatory (or check "Birth time unknown").');
      return;
    }

    if (!formData.birthPlace.trim()) {
      setErrorMsg('Place of Birth (City/Location) is mandatory for house cusp calculation.');
      return;
    }

    onSubmit({ ...formData, modulePreferences: modulePrefs });
  };

  const reportId = selectedReport?.id || '';

  return (
    <div 
      className="glass-card animate-fade-in" 
      style={{
        maxWidth: '840px',
        marginInline: 'auto',
        background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.95) 0%, rgba(13, 17, 24, 0.98) 100%)',
        border: '1px solid var(--color-border-gold)',
        padding: 'clamp(1.5rem, 4vw, 2.75rem)'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1.25rem' }}>
        <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} />
          Mandatory Birth Parameters
        </span>
        <h2 className="h2-title" style={{ marginTop: '0.4rem', marginBottom: '0.5rem' }}>
          {selectedReport ? `Customized Form for ${selectedReport.title}` : 'Enter Your Required Birth Details'}
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', maxWidth: '640px', marginInline: 'auto' }}>
          All details below are mandatory. Your exact information guarantees accurate calculations of planetary longitudes, Ascendant house, and Vimshottari Dasha cycles.
        </p>
      </div>

      {errorMsg && (
        <div style={{ background: 'rgba(220, 53, 69, 0.15)', border: '1px solid var(--color-error)', color: '#FF6B6B', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '600' }}>
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        
        {/* Section 1: Core Mandatory Birth Details */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '6px' }}>
            Section 1: Core Birth Details (Mandatory)
          </div>

          {/* Full Name & Gender */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="fullName" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={15} style={{ color: 'var(--color-accent-gold)' }} />
                <span>Full Legal Name *</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full legal name..."
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gender">Gender *</label>
              <select
                id="gender"
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="form-select"
              >
                <option value="" style={{ background: '#161D2B' }}>-- Select Gender * --</option>
                <option value="Male" style={{ background: '#161D2B' }}>Male</option>
                <option value="Female" style={{ background: '#161D2B' }}>Female</option>
                <option value="Other" style={{ background: '#161D2B' }}>Other</option>
              </select>
            </div>
          </div>

          {/* Date of Birth & Time of Birth */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="birthDate" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={15} style={{ color: 'var(--color-accent-gold)' }} />
                <span>Date of Birth *</span>
              </label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                required
                value={formData.birthDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="birthTime" style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={15} style={{ color: 'var(--color-accent-gold)' }} />
                  <span>Exact Time of Birth *</span>
                </span>
              </label>
              <input
                id="birthTime"
                name="birthTime"
                type="time"
                disabled={formData.birthTimeUnknown}
                value={formData.birthTime}
                onChange={handleChange}
                className="form-input"
                style={{ opacity: formData.birthTimeUnknown ? 0.5 : 1 }}
              />
            </div>
          </div>

          {/* Birth Time Unknown Toggle Workflow */}
          <div style={{ background: 'rgba(212, 175, 55, 0.06)', border: '1px solid var(--color-border-gold)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--color-text-primary)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="birthTimeUnknown"
                checked={formData.birthTimeUnknown}
                onChange={handleChange}
                style={{ accentColor: 'var(--color-accent-gold)', width: '16px', height: '16px' }}
              />
              <span style={{ fontWeight: '600' }}>Birth time is unknown or approximate</span>
            </label>
            {formData.birthTimeUnknown ? (
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HelpCircle size={14} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                <span>Solar Noon (12:00 PM) baseline will be used for Moon sign and planetary placements. House ascendants will be approximate.</span>
              </div>
            ) : (
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                ℹ️ Exact birth time is essential for precision Ascendant (Lagna) and 12 House cusp positions.
              </div>
            )}
          </div>

          {/* Birth Place Auto-Suggest */}
          <div className="form-group" style={{ position: 'relative', marginBottom: 0 }}>
            <label className="form-label" htmlFor="birthPlace" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={15} style={{ color: 'var(--color-accent-gold)' }} />
              <span>Place of Birth (City, State, Country) *</span>
            </label>
            <input
              id="birthPlace"
              name="birthPlace"
              type="text"
              required
              value={searchQuery}
              onChange={handleCitySearchChange}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Type city name (e.g. Pune, Mumbai, Delhi, London)..."
              className="form-input"
              autoComplete="off"
            />

            {showSuggestions && citySuggestions.length > 0 && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#161D2B', border: '1px solid var(--color-border-gold)', borderRadius: 'var(--radius-sm)', zIndex: 100, maxHeight: '200px', overflowY: 'auto', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
                {citySuggestions.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => selectCity(item)}
                    style={{ padding: '10px 14px', borderBottom: '1px solid var(--color-border-subtle)', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--color-text-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.12)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div>
                      <strong>{item.city}</strong>, {item.state}, {item.country}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-gold)' }}>
                      Lat {item.lat}°, Lng {item.lng}° ({item.timezone})
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '4px', display: 'flex', gap: '12px' }}>
              <span>Selected Coordinates: {formData.lat}° N, {formData.lng}° E</span>
              <span>Timezone: UTC {formData.timezone}</span>
            </div>
          </div>
        </div>

        {/* Section 2: Customized Module-Specific Parameters */}
        {selectedReport && (
          <div style={{ marginBottom: '2rem', background: 'rgba(212, 175, 55, 0.04)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-gold)' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', borderBottom: '1px solid var(--color-border-gold)', paddingBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} />
              <span>Section 2: Customized {selectedReport.title} Parameters</span>
            </div>

            {/* CAREER MODULE FIELDS */}
            {reportId === 'career' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Current Employment Status *</label>
                  <select name="occupation" value={modulePrefs.occupation} onChange={handlePrefChange} className="form-select">
                    <option value="Employed" style={{ background: '#161D2B', color: '#FFFFFF' }}>Employed (Salaried Job)</option>
                    <option value="Business / Self-Employed" style={{ background: '#161D2B', color: '#FFFFFF' }}>Business / Self-Employed</option>
                    <option value="Student / Fresher" style={{ background: '#161D2B', color: '#FFFFFF' }}>Student / Fresher</option>
                    <option value="Job Seeker / Transitioning" style={{ background: '#161D2B', color: '#FFFFFF' }}>Job Seeker / In Transition</option>
                    <option value="Freelancer" style={{ background: '#161D2B', color: '#FFFFFF' }}>Freelancer / Independent Professional</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Industry Sector *</label>
                  <select name="industry" value={modulePrefs.industry} onChange={handlePrefChange} className="form-select">
                    <option value="IT & Software / Tech" style={{ background: '#161D2B', color: '#FFFFFF' }}>IT & Software / Technology</option>
                    <option value="Banking & Finance" style={{ background: '#161D2B', color: '#FFFFFF' }}>Banking, Finance & Insurance</option>
                    <option value="Government / Public Sector" style={{ background: '#161D2B', color: '#FFFFFF' }}>Government & Administrative Services</option>
                    <option value="Healthcare & Medicine" style={{ background: '#161D2B', color: '#FFFFFF' }}>Healthcare, Pharmaceuticals & Medicine</option>
                    <option value="Mechanical / Core Engineering" style={{ background: '#161D2B', color: '#FFFFFF' }}>Mechanical & Core Engineering</option>
                    <option value="Media / Arts / Creative" style={{ background: '#161D2B', color: '#FFFFFF' }}>Media, Arts, Marketing & Creative</option>
                    <option value="Management & Operations" style={{ background: '#161D2B', color: '#FFFFFF' }}>Management & Business Operations</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Primary Career Focus *</label>
                  <select name="careerFocus" value={modulePrefs.careerFocus} onChange={handlePrefChange} className="form-select">
                    <option value="Job Switch Timing" style={{ background: '#161D2B', color: '#FFFFFF' }}>Optimal Job Switch & Transition Timing</option>
                    <option value="Promotion & Hike" style={{ background: '#161D2B', color: '#FFFFFF' }}>Promotion, Appraisal & Hierarchy Growth</option>
                    <option value="Starting New Business" style={{ background: '#161D2B', color: '#FFFFFF' }}>Transitioning from Job to Business</option>
                    <option value="Overseas Career" style={{ background: '#161D2B', color: '#FFFFFF' }}>Overseas Job Opportunities & PR</option>
                    <option value="Workplace Conflict" style={{ background: '#161D2B', color: '#FFFFFF' }}>Mitigating Workplace Conflict / Stress</option>
                  </select>
                </div>
              </div>
            )}

            {/* FINANCE MODULE FIELDS */}
            {reportId === 'finance' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Primary Income Source *</label>
                  <select name="incomeSource" value={modulePrefs.incomeSource} onChange={handlePrefChange} className="form-select">
                    <option value="Monthly Salary" style={{ background: '#161D2B', color: '#FFFFFF' }}>Monthly Salary / Corporate Pay</option>
                    <option value="Business Profits" style={{ background: '#161D2B', color: '#FFFFFF' }}>Business Profits & Trade Revenues</option>
                    <option value="Investments / Equity" style={{ background: '#161D2B', color: '#FFFFFF' }}>Investments, Equities & Stocks</option>
                    <option value="Rental & Real Estate" style={{ background: '#161D2B', color: '#FFFFFF' }}>Real Estate & Rental Income</option>
                    <option value="Multiple Streams" style={{ background: '#161D2B', color: '#FFFFFF' }}>Multiple Income Streams</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Main Financial Priority *</label>
                  <select name="wealthFocus" value={modulePrefs.wealthFocus} onChange={handlePrefChange} className="form-select">
                    <option value="Wealth Accumulation & Growth" style={{ background: '#161D2B', color: '#FFFFFF' }}>Dhana Yoga Wealth Accumulation</option>
                    <option value="Debt Relief & Loan Repayment" style={{ background: '#161D2B', color: '#FFFFFF' }}>Debt Elimination & Debt Management</option>
                    <option value="Property & Real Estate Purchase" style={{ background: '#161D2B', color: '#FFFFFF' }}>Real Estate & Asset Acquisition</option>
                    <option value="Stock Market & Speculation" style={{ background: '#161D2B', color: '#FFFFFF' }}>Stock Market & Investment Timing</option>
                    <option value="Inheritance & Family Assets" style={{ background: '#161D2B', color: '#FFFFFF' }}>Family Inheritance & Asset Preservation</option>
                  </select>
                </div>
              </div>
            )}

            {/* MARRIAGE MODULE FIELDS */}
            {reportId === 'marriage' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Current Relationship Status *</label>
                  <select name="relationshipStatus" value={modulePrefs.relationshipStatus} onChange={handlePrefChange} className="form-select">
                    <option value="Single (Looking for Marriage)" style={{ background: '#161D2B', color: '#FFFFFF' }}>Single (Looking for Marriage)</option>
                    <option value="Engaged" style={{ background: '#161D2B', color: '#FFFFFF' }}>Engaged / Marriage Fixed</option>
                    <option value="Married" style={{ background: '#161D2B', color: '#FFFFFF' }}>Married</option>
                    <option value="In a Relationship" style={{ background: '#161D2B', color: '#FFFFFF' }}>In a Relationship</option>
                    <option value="Separated / Divorced" style={{ background: '#161D2B', color: '#FFFFFF' }}>Separated / Divorced</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Primary Marriage Query *</label>
                  <select name="marriageFocus" value={modulePrefs.marriageFocus} onChange={handlePrefChange} className="form-select">
                    <option value="Marriage Timing Window" style={{ background: '#161D2B', color: '#FFFFFF' }}>Promising Marriage Timing Window</option>
                    <option value="Spouse Characteristics & Background" style={{ background: '#161D2B', color: '#FFFFFF' }}>Spouse Nature & Directional Origin</option>
                    <option value="Marital Harmony & Understanding" style={{ background: '#161D2B', color: '#FFFFFF' }}>Marital Harmony & Understanding</option>
                    <option value="Remarriage Outlook" style={{ background: '#161D2B', color: '#FFFFFF' }}>Remarriage & Second Phase Outlook</option>
                    <option value="Family Compatibility" style={{ background: '#161D2B', color: '#FFFFFF' }}>Family Harmony & Progeny Timing</option>
                  </select>
                </div>
              </div>
            )}

            {/* EDUCATION MODULE FIELDS */}
            {reportId === 'education' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Current Education Level *</label>
                  <select name="academicLevel" value={modulePrefs.academicLevel} onChange={handlePrefChange} className="form-select">
                    <option value="Undergraduate (B.E/B.Tech/B.Sc/B.Com)" style={{ background: '#161D2B', color: '#FFFFFF' }}>Undergraduate Level</option>
                    <option value="High School (10th/12th)" style={{ background: '#161D2B', color: '#FFFFFF' }}>High School Level</option>
                    <option value="Postgraduate (M.Tech/MBA/M.D)" style={{ background: '#161D2B', color: '#FFFFFF' }}>Postgraduate Level</option>
                    <option value="Competitive Exam Aspirant (UPSC/GATE/GRE)" style={{ background: '#161D2B', color: '#FFFFFF' }}>Competitive Exam Aspirant (UPSC/GATE/GRE)</option>
                    <option value="Research Scholar / Ph.D" style={{ background: '#161D2B', color: '#FFFFFF' }}>Research Scholar / Ph.D</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Target Field / Stream *</label>
                  <select name="academicStream" value={modulePrefs.academicStream} onChange={handlePrefChange} className="form-select">
                    <option value="Engineering & Technology" style={{ background: '#161D2B', color: '#FFFFFF' }}>Engineering & Technology</option>
                    <option value="Medical & Bio-Sciences" style={{ background: '#161D2B', color: '#FFFFFF' }}>Medical & Biological Sciences</option>
                    <option value="Commerce & Finance" style={{ background: '#161D2B', color: '#FFFFFF' }}>Commerce, Finance & Economics</option>
                    <option value="Law & Humanities" style={{ background: '#161D2B', color: '#FFFFFF' }}>Law, Humanities & Civil Services</option>
                    <option value="Foreign University Studies" style={{ background: '#161D2B', color: '#FFFFFF' }}>Higher Studies in Foreign Universities</option>
                  </select>
                </div>
              </div>
            )}

            {/* HEALTH MODULE FIELDS */}
            {reportId === 'health' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Primary Health Focus Area *</label>
                  <select name="healthFocus" value={modulePrefs.healthFocus} onChange={handlePrefChange} className="form-select">
                    <option value="General Preventative Vitality" style={{ background: '#161D2B', color: '#FFFFFF' }}>General Preventative Vitality & Energy</option>
                    <option value="Stress & Mental Peace" style={{ background: '#161D2B', color: '#FFFFFF' }}>Stress, Anxiety & Emotional Balance</option>
                    <option value="Digestive & Metabolic Balance" style={{ background: '#161D2B', color: '#FFFFFF' }}>Digestive, Liver & Metabolic Care</option>
                    <option value="Joints & Musculoskeletal Care" style={{ background: '#161D2B', color: '#FFFFFF' }}>Joints, Bones & Musculoskeletal Health</option>
                    <option value="Chronic Condition Relief" style={{ background: '#161D2B', color: '#FFFFFF' }}>Planetary Dasha Cycles for Chronic Recovery</option>
                  </select>
                </div>
              </div>
            )}

            {/* BUSINESS MODULE FIELDS */}
            {reportId === 'business' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Venture Industry Sector *</label>
                  <select name="businessSector" value={modulePrefs.businessSector} onChange={handlePrefChange} className="form-select">
                    <option value="Tech / Software / AI" style={{ background: '#161D2B', color: '#FFFFFF' }}>Tech, Software & Digital Services</option>
                    <option value="Retail & Trading" style={{ background: '#161D2B', color: '#FFFFFF' }}>Retail, Wholesale & Trading</option>
                    <option value="Manufacturing & Industrial" style={{ background: '#161D2B', color: '#FFFFFF' }}>Manufacturing, Production & Core Industry</option>
                    <option value="Consulting & Professional Services" style={{ background: '#161D2B', color: '#FFFFFF' }}>Consulting & Professional Advisory</option>
                    <option value="Real Estate & Construction" style={{ background: '#161D2B', color: '#FFFFFF' }}>Real Estate & Construction Development</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Business Objective *</label>
                  <select name="businessObjective" value={modulePrefs.businessObjective} onChange={handlePrefChange} className="form-select">
                    <option value="New Business Launch" style={{ background: '#161D2B', color: '#FFFFFF' }}>Launch Timing & Feasibility</option>
                    <option value="Partnership Evaluation" style={{ background: '#161D2B', color: '#FFFFFF' }}>Partnership Astrological Compatibility</option>
                    <option value="Scaling & Capital Expansion" style={{ background: '#161D2B', color: '#FFFFFF' }}>Capital Expansion & Investment Timing</option>
                    <option value="Risk Mitigation" style={{ background: '#161D2B', color: '#FFFFFF' }}>Risk Mitigation & Financial Security</option>
                  </select>
                </div>
              </div>
            )}

            {/* FOREIGN TRAVEL MODULE FIELDS */}
            {reportId === 'foreign-settlement' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Target Destination Region *</label>
                  <select name="targetCountry" value={modulePrefs.targetCountry} onChange={handlePrefChange} className="form-select">
                    <option value="United States & Canada" style={{ background: '#161D2B', color: '#FFFFFF' }}>United States & Canada</option>
                    <option value="United Kingdom & Europe" style={{ background: '#161D2B', color: '#FFFFFF' }}>United Kingdom & Europe</option>
                    <option value="Australia & New Zealand" style={{ background: '#161D2B', color: '#FFFFFF' }}>Australia & New Zealand</option>
                    <option value="Dubai & Gulf Region" style={{ background: '#161D2B', color: '#FFFFFF' }}>Dubai & Gulf Region (Middle East)</option>
                    <option value="Singapore & East Asia" style={{ background: '#161D2B', color: '#FFFFFF' }}>Singapore & East Asia</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Primary Relocation Purpose *</label>
                  <select name="travelPurpose" value={modulePrefs.travelPurpose} onChange={handlePrefChange} className="form-select">
                    <option value="Work Visa & Overseas Job" style={{ background: '#161D2B', color: '#FFFFFF' }}>Work Visa & Overseas Employment</option>
                    <option value="Higher Education Abroad" style={{ background: '#161D2B', color: '#FFFFFF' }}>Higher Education Overseas</option>
                    <option value="Permanent Residency (PR)" style={{ background: '#161D2B', color: '#FFFFFF' }}>Permanent Settlement & PR Status</option>
                    <option value="Short-term Business Trip" style={{ background: '#161D2B', color: '#FFFFFF' }}>Short-term Business & Travel Opportunities</option>
                  </select>
                </div>
              </div>
            )}

            {/* DASHA & PREDICTIONS FIELDS */}
            {reportId === 'dasha' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Timeline Forecast Horizon *</label>
                  <select name="dashaWindow" value={modulePrefs.dashaWindow} onChange={handlePrefChange} className="form-select">
                    <option value="Next 3 Years (Key Milestones)" style={{ background: '#161D2B', color: '#FFFFFF' }}>Next 3 Years (Key Milestones & Opportunities)</option>
                    <option value="Next 1 Year (Detailed Monthly)" style={{ background: '#161D2B', color: '#FFFFFF' }}>Next 1 Year (Detailed Monthly Analysis)</option>
                    <option value="Next 5 Years (Long-Term Strategy)" style={{ background: '#161D2B', color: '#FFFFFF' }}>Next 5 Years (Strategic Decision Planning)</option>
                  </select>
                </div>
              </div>
            )}

            {/* DOSHA & REMEDIES FIELDS */}
            {reportId === 'dosha' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Primary Affliction Focus *</label>
                  <select name="doshaFocus" value={modulePrefs.doshaFocus} onChange={handlePrefChange} className="form-select">
                    <option value="Manglik / Kuja Dosha" style={{ background: '#161D2B', color: '#FFFFFF' }}>Manglik / Kuja Placement Evaluation</option>
                    <option value="Kaal Sarp Dosha" style={{ background: '#161D2B', color: '#FFFFFF' }}>Kaal Sarp Axis Diagnostic</option>
                    <option value="Saturn Sade Sati" style={{ background: '#161D2B', color: '#FFFFFF' }}>Saturn Sade Sati & Dhaiya Phase</option>
                    <option value="Rahu-Ketu Transit Phase" style={{ background: '#161D2B', color: '#FFFFFF' }}>Rahu-Ketu Nadi Transit Balance</option>
                  </select>
                </div>
              </div>
            )}

            {/* DEFAULT CHART STYLE SELECTION (FOR KUNDLI & COMPLETE REPORT) */}
            {(reportId === 'kundli' || reportId === 'complete-astrology' || !reportId) && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Preferred Chart Format *</label>
                  <select name="chartStyle" value={modulePrefs.chartStyle} onChange={handlePrefChange} className="form-select">
                    <option value="North Indian (Diamond Format)" style={{ background: '#161D2B', color: '#FFFFFF' }}>North Indian Format (Diamond Chart)</option>
                    <option value="South Indian (Square Grid Format)" style={{ background: '#161D2B', color: '#FFFFFF' }}>South Indian Format (Fixed Sign Grid)</option>
                  </select>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Submit Action Button */}
        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1rem', justifyContent: 'center' }}>
          <span>{submitButtonText}</span>
          <ArrowRight size={18} />
        </button>

      </form>
    </div>
  );
};
