import React from 'react';
import { Target, Eye } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export const VisionMissionSection = () => {
  const { vision, mission } = siteContent.visionMission;

  return (
    <section className="section-padding section-bg-alt">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1.25rem, 3vw, 2rem)' }}>
          
          {/* Vision Card */}
          <div 
            className="glass-card"
            style={{
              position: 'relative',
              background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.8) 0%, rgba(13, 17, 24, 0.9) 100%)',
              border: '1px solid var(--color-border-gold)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.85rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '7px', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                <Eye size={18} />
              </div>
              <span className="eyebrow" style={{ margin: 0 }}>Strategic Foundation</span>
            </div>

            <h3 className="h2-title" style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: 'var(--color-text-primary)' }}>
              {vision.title}
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
              "{vision.text}"
            </p>
          </div>

          {/* Mission Card */}
          <div 
            className="glass-card"
            style={{
              position: 'relative',
              background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.8) 0%, rgba(13, 17, 24, 0.9) 100%)',
              border: '1px solid var(--color-border-gold)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.85rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '7px', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                <Target size={18} />
              </div>
              <span className="eyebrow" style={{ margin: 0 }}>Action & Purpose</span>
            </div>

            <h3 className="h2-title" style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: 'var(--color-text-primary)' }}>
              {mission.title}
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
              "{mission.text}"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
