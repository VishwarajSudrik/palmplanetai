import React from 'react';
import { Target, Eye } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export const VisionMissionSection = () => {
  const { vision, mission } = siteContent.visionMission;

  return (
    <section className="section-padding section-bg-alt">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          
          {/* Vision Card */}
          <div 
            className="glass-card"
            style={{
              position: 'relative',
              background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.8) 0%, rgba(13, 17, 24, 0.9) 100%)',
              border: '1px solid var(--color-border-gold)',
              padding: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '10px', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                <Eye size={22} />
              </div>
              <span className="eyebrow" style={{ margin: 0 }}>Strategic Foundation</span>
            </div>

            <h2 className="h2-title" style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
              {vision.title}
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
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
              padding: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '10px', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                <Target size={22} />
              </div>
              <span className="eyebrow" style={{ margin: 0 }}>Action & Purpose</span>
            </div>

            <h2 className="h2-title" style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
              {mission.title}
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
              "{mission.text}"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
