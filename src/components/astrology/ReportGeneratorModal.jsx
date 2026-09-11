import React, { useEffect, useState } from 'react';
import { Compass, Sparkles, CheckCircle2, Loader2 } from 'lucide-react';

const GENERATION_STEPS = [
  'Initializing Ephemeris & Coordinate Engine...',
  'Calculating Planetary Longitudes & Nakshatra Padas...',
  'Constructing D1 Rashi, D9 Navamsa & D10 Dashamsha Charts...',
  'Calculating Vimshottari Dasha Timelines & Sub-periods...',
  'Synthesizing Yogas, Doshas & Predictive Recommendations...'
];

export const ReportGeneratorModal = ({ reportTitle, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < GENERATION_STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600);
          return prev;
        }
      });
    }, 700);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        backgroundColor: 'rgba(5, 7, 12, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 200ms ease-out'
      }}
    >
      <div 
        style={{
          background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.98) 0%, rgba(13, 17, 24, 0.99) 100%)',
          border: '1px solid var(--color-border-gold-strong)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '560px',
          width: '100%',
          padding: '2.5rem',
          textAlign: 'center',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          position: 'relative'
        }}
      >
        <div 
          style={{ 
            background: 'rgba(212, 175, 55, 0.15)', 
            border: '1px solid var(--color-border-gold)', 
            width: '72px', 
            height: '72px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginInline: 'auto', 
            marginBottom: '1.5rem', 
            color: 'var(--color-accent-gold)' 
          }}
        >
          <Compass size={38} className="animate-spin-slow" />
        </div>

        <span className="eyebrow" style={{ marginBottom: '0.4rem' }}>Calculating Vedic Ephemeris</span>
        <h2 className="h2-title" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
          Generating {reportTitle}
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Please wait while our astronomical calculation engine synthesizes birth chart data and Vimshottari Dasha cycles.
        </p>

        {/* Step Progress Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', background: 'rgba(0,0,0,0.4)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)', marginBottom: '1.5rem' }}>
          {GENERATION_STEPS.map((stepText, idx) => {
            const isDone = idx < currentStep;
            const isCurrent = idx === currentStep;

            return (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                {isDone ? (
                  <CheckCircle2 size={16} style={{ color: '#28A745', flexShrink: 0 }} />
                ) : isCurrent ? (
                  <Loader2 size={16} className="animate-spin" style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                ) : (
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid var(--color-text-muted)', flexShrink: 0 }} />
                )}
                <span style={{ color: isDone ? 'var(--color-text-secondary)' : isCurrent ? 'var(--color-accent-gold)' : 'var(--color-text-muted)', fontWeight: isCurrent ? '600' : 'normal' }}>
                  {stepText}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div 
            style={{ 
              height: '100%', 
              width: `${((currentStep + 1) / GENERATION_STEPS.length) * 100}%`, 
              background: 'linear-gradient(90deg, var(--color-accent-gold) 0%, var(--color-accent-bronze) 100%)',
              transition: 'width 400ms ease'
            }} 
          />
        </div>
      </div>
    </div>
  );
};
