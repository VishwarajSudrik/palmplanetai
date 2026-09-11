import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export const WhoWeAreSection = () => {
  const { title, subtitle, description } = siteContent.about;

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div 
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)',
            border: '1px solid var(--color-border-gold)',
            padding: 'clamp(1.75rem, 4vw, 3rem)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem, 3.5vw, 2.5rem)', alignItems: 'center' }}>
            
            {/* Left Side: Headline & Content */}
            <div>
              <span className="eyebrow">About Palm Planet</span>
              <h2 className="h2-title" style={{ marginTop: '0.4rem', marginBottom: '1rem', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                {title}
              </h2>

              <p className="lead-text" style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                {description}
              </p>

              <div className="responsive-btn-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
                <Link to="/about-us" className="btn btn-primary">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/booking" className="btn btn-outline">
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Key Pillars / Protocol Visual Box */}
            <div 
              style={{
                background: 'rgba(11, 14, 20, 0.7)',
                border: '1px solid var(--color-border-gold-strong)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>
                <Sparkles size={20} />
                <h3 style={{ fontSize: '1.15rem', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                  Consultation Protocol
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>Virtual & In-Person Meetings</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Seamless global consultations via Zoom, Meet, or Pune office.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>24-Hour Pre-Analysis</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Birth data & hand photos submitted 1 day prior for chart preparation.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>Triple Cross-Validation</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Horoscope, Palmistry & Vedic Numerology synced for verified accuracy.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
