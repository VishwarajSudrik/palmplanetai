import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { siteContent } from '../../data/siteContent';
import { Hand, Sun, Hash, Layers, ArrowRight } from 'lucide-react';

export const MethodologySection = () => {
  const { title, subtitle, methodologies } = siteContent.about;

  const icons = [
    <Hand size={24} style={{ color: 'var(--color-accent-gold)' }} />,
    <Sun size={24} style={{ color: 'var(--color-accent-gold)' }} />,
    <Hash size={24} style={{ color: 'var(--color-accent-gold)' }} />,
    <Layers size={24} style={{ color: 'var(--color-accent-gold)' }} />
  ];

  return (
    <section className="section-padding section-bg-alt" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Scientific Approach"
          title="Empirical Cross-Validation Methodology"
          description="We study and compare an individual’s horoscope with palm lines, palmar mounts, and Vedic Numerology to achieve verified predictive accuracy."
        />

        {/* 4 Cards in 1 Row Grid Container */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.25rem',
            position: 'relative'
          }}
          className="methodology-grid"
        >
          {methodologies.map((method, index) => (
            <div 
              key={method.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)',
                border: '1px solid var(--color-border-gold)',
                padding: '1.75rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                transition: 'all 300ms ease'
              }}
            >
              <div>
                {/* Step Header: Badge & Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'var(--color-accent-gold)',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid var(--color-border-gold)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    0{index + 1}
                  </span>

                  <div 
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--color-border-subtle)',
                      padding: '10px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    {icons[index % icons.length]}
                  </div>
                </div>

                {/* Subtitle Tag */}
                <div 
                  style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--color-accent-gold)', 
                    fontWeight: '600', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.12em', 
                    marginBottom: '0.5rem' 
                  }}
                >
                  {method.subtitle}
                </div>

                {/* Title */}
                <h3 
                  style={{ 
                    fontSize: '1.2rem', 
                    marginBottom: '0.75rem', 
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: '1.3'
                  }}
                >
                  {method.title}
                </h3>

                {/* Description */}
                <p 
                  style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--color-text-secondary)', 
                    lineHeight: '1.65',
                    margin: 0
                  }}
                >
                  {method.description}
                </p>
              </div>

              {/* Step Process Footer Indicator */}
              <div 
                style={{ 
                  marginTop: '1.5rem', 
                  paddingTop: '0.85rem', 
                  borderTop: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: 'var(--color-text-muted)',
                  fontWeight: '500'
                }}
              >
                <span>Phase 0{index + 1} Protocol</span>
                {index < methodologies.length - 1 && <ArrowRight size={13} style={{ color: 'var(--color-accent-gold)' }} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .methodology-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
