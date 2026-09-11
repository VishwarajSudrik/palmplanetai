import React, { useState } from 'react';
import { SEOHead } from '../../components/common/SEOHead';
import { calculateNumerology } from '../../services/astrologyService';
import { Sparkles, User, Calendar, Award, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const NumerologyPage = () => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !birthDate) {
      setErrorMsg('Both Full Legal Name and Date of Birth are mandatory.');
      return;
    }
    setErrorMsg('');
    setResult(calculateNumerology(fullName, birthDate));
  };

  return (
    <>
      <SEOHead 
        title="Vedic Numerology Calculator & Analysis | Palm Planet Research Centre"
        description="Discover your Life Path Number, Expression/Destiny Number, Soul Urge, and Name sound vibrations."
        canonical="https://palmplanetai.in/astrology/numerology"
      />

      <section className="section-bg-alt" style={{ paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} />
            Sound Vibration & Numerical Frequencies
          </span>
          <h1 className="h1-title" style={{ marginTop: '0.3rem', marginBottom: '0.5rem' }}>
            Vedic Numerology Calculator
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', maxWidth: '680px', marginInline: 'auto' }}>
            Combine Full Legal Name and Date of Birth to reveal Life Path, Expression, Soul Urge, and lucky gemstone frequencies.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          
          <form onSubmit={handleCalculate} className="glass-card" style={{ maxWidth: '680px', marginInline: 'auto', marginBottom: '3rem', padding: '1.75rem' }}>
            {errorMsg && (
              <div style={{ background: 'rgba(220, 53, 69, 0.15)', border: '1px solid var(--color-error)', color: '#FF6B6B', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '600' }}>
                <AlertCircle size={18} style={{ flexShrink: 0 }} />
                <span>{errorMsg}</span>
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <User size={15} style={{ color: 'var(--color-accent-gold)' }} />
                  <span>Full Legal Name *</span>
                </label>
                <input 
                  type="text" 
                  required 
                  value={fullName} 
                  onChange={e => setFullName(e.target.value)} 
                  className="form-input" 
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={15} style={{ color: 'var(--color-accent-gold)' }} />
                  <span>Date of Birth *</span>
                </label>
                <input 
                  type="date" 
                  required 
                  value={birthDate} 
                  onChange={e => setBirthDate(e.target.value)} 
                  className="form-input" 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', justifyContent: 'center' }}>
              <Sparkles size={18} />
              <span>Calculate Numerology Profile</span>
            </button>
          </form>

          {/* NUMEROLOGY RESULTS DISPLAY */}
          {result && (
            <div className="glass-card animate-fade-in" style={{ maxWidth: '880px', marginInline: 'auto', padding: 'clamp(1.5rem, 4vw, 2.75rem)', background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.95) 0%, rgba(13, 17, 24, 0.98) 100%)', border: '1.5px solid var(--color-accent-gold)' }}>
              
              <div style={{ textAlign: 'center', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
                <span className="eyebrow">Calculated Profile for {result.fullName}</span>
                <h2 className="h2-title" style={{ fontSize: '2rem', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
                  Vedic Ank Jyotish (Numerology) Profile
                </h2>
                <div style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', maxWidth: '600px', marginInline: 'auto' }}>
                  Birth Date: <strong>{result.birthDate}</strong> • Ruling Lord: <strong>{result.bhagyankLord}</strong>
                </div>
              </div>

              {/* VEDIC MULANK & BHAGYANK FEATURED CARDS */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={16} />
                  <span>Primary Vedic Indicators: Mulank & Bhagyank</span>
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {/* MULANK CARD */}
                  <div style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)', border: '1.5px solid var(--color-accent-gold)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>
                          Root / Driver Number
                        </span>
                        <h4 style={{ fontSize: '1.35rem', color: '#FFF', margin: '4px 0', fontFamily: 'var(--font-heading)' }}>
                          Mulank (मूलांक): {result.mulank}
                        </h4>
                      </div>
                      <div style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-gold)', fontWeight: '700', lineHeight: 1 }}>
                        {result.mulank}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '8px', borderTop: '1px dashed var(--color-border-gold)', paddingTop: '8px' }}>
                      <strong>Ruling Planet:</strong> {result.mulankLord}<br />
                      <strong>Core Trait:</strong> {result.mulankTrait}
                    </div>
                  </div>

                  {/* BHAGYANK CARD */}
                  <div style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1.5px solid var(--color-border-gold)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>
                          Destiny / Conductor Number
                        </span>
                        <h4 style={{ fontSize: '1.35rem', color: '#FFF', margin: '4px 0', fontFamily: 'var(--font-heading)' }}>
                          Bhagyank (भाग्यांक): {result.bhagyank}
                        </h4>
                      </div>
                      <div style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', color: '#FFF', fontWeight: '700', lineHeight: 1 }}>
                        {result.bhagyank}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '8px', borderTop: '1px dashed var(--color-border-subtle)', paddingTop: '8px' }}>
                      <strong>Destiny Lord:</strong> {result.bhagyankLord}<br />
                      <strong>Life Trajectory:</strong> {result.bhagyankTrait}
                    </div>
                  </div>
                </div>
              </div>

              {/* CORE NUMBERS GRID */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                  Complete Numerological Frequencies:
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-gold)', fontWeight: '700', lineHeight: 1 }}>
                      {result.mulank}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: '700', marginTop: '6px' }}>Mulank (Root)</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>Day of Birth Sum</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-gold)', fontWeight: '700', lineHeight: 1 }}>
                      {result.bhagyank}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: '700', marginTop: '6px' }}>Bhagyank (Destiny)</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>Full DOB Sum</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: '#FFF', fontWeight: '700', lineHeight: 1 }}>
                      {result.expressionNumber}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: '700', marginTop: '6px' }}>Expression Number</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>Full Name Value</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: '#FFF', fontWeight: '700', lineHeight: 1 }}>
                      {result.soulUrgeNumber}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: '700', marginTop: '6px' }}>Soul Urge Number</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>Name Vowels Sum</div>
                  </div>
                </div>
              </div>

              {/* LUCK & RESONANCE PARAMETERS */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border-subtle)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                  Numerical Vibrational Resonance:
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.9rem' }}>
                  <div>
                    <span style={{ color: 'var(--color-text-muted)' }}>Resonance Gemstone:</span><br />
                    <strong style={{ color: '#FFF' }}>{result.gemstone}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-text-muted)' }}>Favorable Colors:</span><br />
                    <strong style={{ color: '#FFF' }}>{result.luckyColors}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-text-muted)' }}>Auspicious Days:</span><br />
                    <strong style={{ color: '#FFF' }}>{result.luckyDays}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-text-muted)' }}>Lucky Harmonious Numbers:</span><br />
                    <strong style={{ color: 'var(--color-accent-gold)' }}>{result.luckyNumbers.join(', ')}</strong>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>
    </>
  );
};
