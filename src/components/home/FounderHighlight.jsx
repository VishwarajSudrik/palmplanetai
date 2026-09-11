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
            padding: 'clamp(1.75rem, 4vw, 3rem)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.5rem, 3.5vw, 2.5rem)', alignItems: 'center' }}>
            
            {/* Left Column: Bio Details */}
            <div>
              <span className="eyebrow">Leadership & Research</span>
              <h2 className="h2-title" style={{ marginTop: '0.4rem', marginBottom: '0.3rem', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                {name}
              </h2>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-accent-gold)', fontWeight: '600', marginBottom: '1rem' }}>
                {role} | {credential}
              </div>
              <p className="lead-text" style={{ fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.65' }}>
                {intro}
              </p>

              {/* Engineering + Astrology Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent-gold)', fontWeight: '600', fontSize: '0.85rem' }}>
                    <Cpu size={15} />
                    <span>25+ Yrs FEA Design</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent-gold)', fontWeight: '600', fontSize: '0.85rem' }}>
                    <BookOpen size={15} />
                    <span>12+ Yrs Vedic Research</span>
                  </div>
                </div>
              </div>

              <Link to="/about-us" className="btn btn-outline" style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}>
                <span>Read Full Biography</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right Column: Disciplines Grid */}
            <div style={{ background: 'rgba(11, 14, 20, 0.6)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>
                Predictive Disciplines
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {disciplines.map((d, i) => (
                  <div 
                    key={i} 
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--color-border-subtle)',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--color-accent-gold)', marginBottom: '2px' }}>{d.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{d.desc}</div>
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
