import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export const HeroSection = () => {
  const { eyebrow, headline, subheadline, primaryCta, secondaryCta } = siteContent.hero;

  return (
    <section 
      style={{
        position: 'relative',
        paddingTop: 'clamp(1.25rem, 3.5vw, 2.75rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(11, 14, 20, 1) 70%)'
      }}
    >
      {/* Background Graphic Accents */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center' }}>
          
          {/* Hero Left Content */}
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="display-title" style={{ marginTop: '0.6rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
              {headline}
            </h1>
            <p className="lead-text" style={{ marginBottom: '2rem' }}>
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group responsive-btn-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.25rem' }}>
              <Link to="/services" className="btn btn-primary">
                <span>{primaryCta}</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/booking" className="btn btn-outline">
                <span>{secondaryCta}</span>
              </Link>
            </div>

            {/* Feature Highlights */}
            <div 
              className="responsive-feature-highlights"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-border-subtle)',
                fontSize: '0.875rem',
                color: 'var(--color-text-muted)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                <span>Virtual & Physical Consultations</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                <span>Empirical Cross-Validation</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Presentation Card */}
          <div style={{ position: 'relative' }}>
            <div 
              className="glass-card" 
              style={{
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.85) 0%, rgba(17, 22, 34, 0.95) 100%)',
                border: '1px solid var(--color-border-gold-strong)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                overflow: 'hidden'
              }}
            >
              {/* Badge */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid var(--color-border-gold)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  color: 'var(--color-accent-gold)',
                  marginBottom: '1.5rem',
                  fontWeight: '600'
                }}
              >
                <Compass size={14} className="animate-spin-slow" />
                <span>Triple-Method Cross Validation</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                Precision Predictive Research
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                Combining Horoscope charts with Palm line markings, palmar mounts, and Vedic Numerology frequencies to achieve verified accuracy for life decision planning.
              </p>

              {/* Method Matrix Pill List */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  { name: 'Horoscope', detail: 'Jyotish Dasha & Vargas' },
                  { name: 'Palmistry', detail: 'Lines & Palmar Mounts' },
                  { name: 'Numerology', detail: 'Vedic Name & Date Sync' },
                  { name: 'Gemology', detail: 'Resonance Guidance' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--color-border-subtle)',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-accent-gold)' }}>{item.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
