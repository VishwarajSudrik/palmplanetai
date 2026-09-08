import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export const FounderHighlight = () => {
  const { name, role, credential, intro, disciplines } = siteContent.founder;

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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Column: Bio Details */}
            <div>
              <span className="eyebrow">Leadership & Research</span>
              <h2 className="h2-title" style={{ marginTop: '0.4rem', marginBottom: '0.5rem' }}>
                {name}
              </h2>
              <div style={{ fontSize: '0.95rem', color: 'var(--color-accent-gold)', fontWeight: '600', marginBottom: '1.25rem' }}>
                {role} | {credential}
              </div>
              <p className="lead-text" style={{ fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                {intro}
              </p>

              {/* Engineering + Astrology Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '12px 16px', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-gold)', fontWeight: '600', marginBottom: '4px', fontSize: '0.9rem' }}>
                    <Cpu size={16} />
                    <span>25+ Years Engineering</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>FEA & Mechanical Design Services</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '12px 16px', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-gold)', fontWeight: '600', marginBottom: '4px', fontSize: '0.9rem' }}>
                    <BookOpen size={16} />
                    <span>12+ Years Vedic Research</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Vedic Astrology & Puranic Sciences</div>
                </div>
              </div>

              <Link to="/about-us" className="btn btn-outline">
                <span>Read Full Biography</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Column: Disciplines Grid */}
            <div style={{ background: 'rgba(11, 14, 20, 0.6)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>
                Holistic Predictive Disciplines
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {disciplines.map((d, i) => (
                  <div 
                    key={i} 
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      paddingBottom: i < disciplines.length - 1 ? '1rem' : 0,
                      borderBottom: i < disciplines.length - 1 ? '1px solid var(--color-border-subtle)' : 'none'
                    }}
                  >
                    <Sparkles size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>{d.name}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{d.desc}</div>
                    </div>
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
