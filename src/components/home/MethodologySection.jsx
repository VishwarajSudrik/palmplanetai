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
          description="Cross-validating 3 complementary predictive sciences to eliminate analytical bias and achieve verified accuracy."
        />

        {/* 4 Cards in 1 Row Grid Container */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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
                justifyContent: 'space-between',
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)',
                border: '1px solid var(--color-border-gold)',
                padding: '1.5rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                transition: 'all 300ms ease'
              }}
            >
              <div>
                {/* Step Header: Badge & Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: 'var(--color-accent-gold)',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid var(--color-border-gold)',
                      width: '36px',
                      height: '36px',
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
                      padding: '8px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    {icons[index % icons.length]}
                  </div>
                </div>

                {/* Subtitle Tag */}
                <div 
                  style={{ 
                    fontSize: '0.72rem', 
                    color: 'var(--color-accent-gold)', 
                    fontWeight: '600', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    marginBottom: '0.4rem' 
                  }}
                >
                  {method.subtitle}
                </div>

                {/* Title */}
                <h3 
                  style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '0.6rem', 
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
                    fontSize: '0.85rem', 
                    color: 'var(--color-text-secondary)', 
                    lineHeight: '1.55',
                    margin: 0
                  }}
                >
                  {method.description}
                </p>
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
