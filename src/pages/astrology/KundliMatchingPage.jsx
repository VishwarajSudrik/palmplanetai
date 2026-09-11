import React, { useState } from 'react';
import { SEOHead } from '../../components/common/SEOHead';
import { calculateKundliMatching, saveReportToHistory } from '../../services/astrologyService';
import { Users, Heart, Sparkles, CheckCircle2, AlertCircle, ArrowRight, Award } from 'lucide-react';

export const KundliMatchingPage = () => {
  const [personA, setPersonA] = useState({
    fullName: '',
    gender: 'Male',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });

  const [personB, setPersonB] = useState({
    fullName: '',
    gender: 'Female',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });

  const [matchingResult, setMatchingResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!personA.fullName.trim() || !personA.birthDate || !personA.birthTime || !personA.birthPlace.trim()) {
      setErrorMsg('All birth parameters for Partner A are mandatory.');
      return;
    }

    if (!personB.fullName.trim() || !personB.birthDate || !personB.birthTime || !personB.birthPlace.trim()) {
      setErrorMsg('All birth parameters for Partner B are mandatory.');
      return;
    }

    setErrorMsg('');
    const result = calculateKundliMatching(personA, personB);
    setMatchingResult(result);

    // Save as report to history
    saveReportToHistory({
      id: 'MATCH-' + Date.now().toString(36).toUpperCase(),
      reportTypeId: 'kundli-matching',
      title: `Kundli Matching (${personA.fullName} & ${personB.fullName})`,
      category: 'matching-numerology',
      generatedAt: new Date().toISOString(),
      clientDetails: {
        fullName: `${personA.fullName} & ${personB.fullName}`,
        gender: 'Couple',
        birthDate: `${personA.birthDate} / ${personB.birthDate}`,
        birthTime: `${personA.birthTime} / ${personB.birthTime}`,
        birthPlace: `${personA.birthPlace} & ${personB.birthPlace}`
      },
      chartData: result.chartA,
      numerology: { lifePathNumber: 7 },
      sections: ['ashtakoota-guna-table', 'manglik-compatibility'],
      status: 'Completed'
    });
  };

  return (
    <>
      <SEOHead 
        title="Kundli Matching & 36 Guna Compatibility | Palm Planet Research Centre"
        description="Two-person birth chart synchronization calculating Ashtakoota 36 Gunas, Nadi Dosha, Bhakoot, and Manglik alignment."
        canonical="https://palmplanetai.in/astrology/kundli-matching"
      />

      <section className="section-bg-alt" style={{ paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Heart size={14} />
            Marital Compatibility Synchronization
          </span>
          <h1 className="h1-title" style={{ marginTop: '0.3rem', marginBottom: '0.5rem' }}>
            Kundli Matching & Ashtakoota 36 Guna Calculator
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', maxWidth: '680px', marginInline: 'auto' }}>
            Enter birth parameters for both partners to evaluate Ashtakoota Guna scores, Nadi & Bhakoot status, and Manglik compatibility.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          
          <form onSubmit={handleCalculate} style={{ maxWidth: '920px', marginInline: 'auto', marginBottom: '3rem' }}>
            {errorMsg && (
              <div style={{ background: 'rgba(220, 53, 69, 0.15)', border: '1px solid var(--color-error)', color: '#FF6B6B', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '600' }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{errorMsg}</span>
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              
              {/* PERSON A INPUT CARD */}
              <div className="glass-card" style={{ padding: '1.75rem', background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.95) 0%, rgba(13, 17, 24, 0.98) 100%)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent-gold)', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Users size={18} />
                  <span>Partner A Details</span>
                </h3>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={personA.fullName} 
                    onChange={e => setPersonA({ ...personA, fullName: e.target.value })} 
                    className="form-input" 
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div className="form-group">
                    <label className="form-label">Date of Birth *</label>
                    <input 
                      type="date" 
                      required 
                      value={personA.birthDate} 
                      onChange={e => setPersonA({ ...personA, birthDate: e.target.value })} 
                      className="form-input" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Time of Birth *</label>
                    <input 
                      type="time" 
                      required 
                      value={personA.birthTime} 
                      onChange={e => setPersonA({ ...personA, birthTime: e.target.value })} 
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Place of Birth *</label>
                  <input 
                    type="text" 
                    required 
                    value={personA.birthPlace} 
                    onChange={e => setPersonA({ ...personA, birthPlace: e.target.value })} 
                    className="form-input" 
                  />
                </div>
              </div>

              {/* PERSON B INPUT CARD */}
              <div className="glass-card" style={{ padding: '1.75rem', background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.95) 0%, rgba(13, 17, 24, 0.98) 100%)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent-gold)', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Heart size={18} />
                  <span>Partner B Details</span>
                </h3>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={personB.fullName} 
                    onChange={e => setPersonB({ ...personB, fullName: e.target.value })} 
                    className="form-input" 
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div className="form-group">
                    <label className="form-label">Date of Birth *</label>
                    <input 
                      type="date" 
                      required 
                      value={personB.birthDate} 
                      onChange={e => setPersonB({ ...personB, birthDate: e.target.value })} 
                      className="form-input" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Time of Birth *</label>
                    <input 
                      type="time" 
                      required 
                      value={personB.birthTime} 
                      onChange={e => setPersonB({ ...personB, birthTime: e.target.value })} 
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Place of Birth *</label>
                  <input 
                    type="text" 
                    required 
                    value={personB.birthPlace} 
                    onChange={e => setPersonB({ ...personB, birthPlace: e.target.value })} 
                    className="form-input" 
                  />
                </div>
              </div>

            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', justifyContent: 'center' }}>
              <Sparkles size={18} />
              <span>Calculate Ashtakoota 36 Guna Score</span>
            </button>
          </form>

          {/* DISPLAY MATCHING RESULTS */}
          {matchingResult && (
            <div className="glass-card animate-fade-in" style={{ maxWidth: '920px', marginInline: 'auto', padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.95) 0%, rgba(13, 17, 24, 0.98) 100%)', border: '1.5px solid var(--color-accent-gold)' }}>
              
              {/* SCORE BANNER */}
              <div style={{ textAlign: 'center', paddingBottom: '1.75rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border-subtle)' }}>
                <span className="eyebrow">Compatibility Score Verdict</span>
                <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-gold)', fontWeight: '700', lineHeight: 1.1, marginBlock: '0.4rem' }}>
                  {matchingResult.totalScore} / {matchingResult.maxScore} Gunas
                </div>
                <p style={{ fontSize: '1.05rem', color: '#FFF', fontWeight: '600', maxWidth: '640px', marginInline: 'auto', margin: 0 }}>
                  {matchingResult.recommendation}
                </p>
              </div>

              {/* ASHTAKOOTA 8 CATEGORIES TABLE */}
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                Ashtakoota 8 Category Breakdown:
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {matchingResult.categories.map((cat, idx) => (
                  <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{cat.name}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-accent-gold)', marginTop: '4px' }}>
                      {cat.score} / {cat.max} Points
                    </div>
                  </div>
                ))}
              </div>

              {/* MANGLIK ALIGNMENT */}
              <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid var(--color-border-gold)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-accent-gold)', marginBottom: '6px' }}>
                  Manglik Dosha Synchronization:
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Partner A ({personA.fullName}): <strong>{matchingResult.manglikCheck.personAManglik ? 'Manglik Present' : 'Non-Manglik'}</strong><br />
                  Partner B ({personB.fullName}): <strong>{matchingResult.manglikCheck.personBManglik ? 'Manglik Present' : 'Non-Manglik'}</strong><br />
                  <span style={{ color: '#28A745', fontWeight: '600' }}>Status: {matchingResult.manglikCheck.status}</span>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>
    </>
  );
};
