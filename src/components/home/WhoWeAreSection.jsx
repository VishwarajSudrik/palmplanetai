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
            padding: 'clamp(2rem, 5vw, 4rem)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center' }}>
            
            {/* Left Side: Headline & Content */}
            <div>
              <span className="eyebrow">About Palmplanetai</span>
              <h2 className="h2-title" style={{ marginTop: '0.4rem', marginBottom: '1.25rem' }}>
                {title}
              </h2>

              <p className="lead-text" style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                {description}
              </p>

              <div className="responsive-btn-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <Link to="/about-us" className="btn btn-primary">
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/booking" className="btn btn-outline">
                  <span>Schedule Virtual Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Key Pillars / Protocol Visual Box */}
            <div 
              style={{
                background: 'rgba(11, 14, 20, 0.7)',
                border: '1px solid var(--color-border-gold-strong)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(1.25rem, 3.5vw, 2rem)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent-gold)', marginBottom: '1.25rem' }}>
                <Sparkles size={22} />
                <h3 style={{ fontSize: '1.25rem', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                  Virtual & Personal Reading Protocol
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.925rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>No Physical Presence Required</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Detailed readings conducted seamlessly via virtual consultation tools.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.925rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>Required Info 1 Day Prior</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Submit birth parameters and 4-point hand photos 24h before meeting.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.925rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>Multi-System Cross Validation</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Synchronizing Horoscope, Palmistry & Vedic Numerology for accuracy.</div>
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
