import React from 'react';
import * as Icons from 'lucide-react';

export const ServiceCard = ({ service, onSelect }) => {
  const IconComponent = Icons[service.iconName] || Icons.Sparkles;

  return (
    <div 
      className="glass-card"
      onClick={() => onSelect && onSelect(service)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justify: 'space-between',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        padding: 0,
        transition: 'transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease'
      }}
    >
      {/* Top Small Service Image Thumbnail Header */}
      <div style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 400ms ease'
          }}
          className="service-card-img"
        />
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(22, 29, 43, 0.98) 0%, rgba(22, 29, 43, 0.4) 60%, rgba(0,0,0,0.2) 100%)'
          }} 
        />

        {/* Tag Pill & Icon Badge Overlay */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span 
            style={{
              fontSize: '0.7rem',
              fontWeight: '600',
              color: 'var(--color-accent-gold)',
              background: 'rgba(11, 14, 20, 0.85)',
              border: '1px solid var(--color-border-gold)',
              padding: '3px 10px',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              backdropFilter: 'blur(4px)'
            }}
          >
            {service.tag}
          </span>
          
          <div 
            style={{
              background: 'rgba(11, 14, 20, 0.85)',
              border: '1px solid var(--color-border-gold)',
              padding: '6px',
              borderRadius: '50%',
              color: 'var(--color-accent-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)'
            }}
          >
            <IconComponent size={16} />
          </div>
        </div>
      </div>

      {/* Card Text Content */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-primary)',
              marginBottom: '0.6rem',
              lineHeight: '1.35',
              fontFamily: 'var(--font-heading)'
            }}
          >
            {service.title}
          </h3>

          <p 
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1.25rem'
            }}
          >
            {service.description}
          </p>
        </div>

        {/* Interactive Click Indicator */}
        <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-gold)', fontWeight: '600' }}>
            View Cross Validation Details
          </span>
          <Icons.ExternalLink size={14} style={{ color: 'var(--color-accent-gold)' }} />
        </div>
      </div>

      <style>{`
        .glass-card:hover .service-card-img {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
};
