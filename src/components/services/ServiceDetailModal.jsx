import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';

export const ServiceDetailModal = ({ service, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!service) return null;

  const IconComponent = Icons[service.iconName] || Icons.Sparkles;

  const handleBookService = () => {
    onClose();
    navigate('/booking', { state: { selectedServiceId: service.id } });
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2rem)',
        animation: 'fadeIn 200ms ease-out'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.98) 0%, rgba(13, 17, 24, 0.99) 100%)',
          border: '1px solid var(--color-border-gold-strong)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          animation: 'fadeIn 250ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Banner */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }}>
          <img 
            src={service.imageUrl} 
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(22, 29, 43, 1) 0%, rgba(22, 29, 43, 0.3) 70%, transparent 100%)'
            }} 
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(11, 14, 20, 0.75)',
              border: '1px solid var(--color-border-gold)',
              color: 'var(--color-text-primary)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <Icons.X size={20} />
          </button>

          {/* Service Tag & Title Overlay */}
          <div style={{ position: 'absolute', bottom: '16px', left: '24px', right: '24px' }}>
            <span 
              style={{
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--color-accent-gold)',
                background: 'rgba(11, 14, 20, 0.85)',
                border: '1px solid var(--color-border-gold)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'inline-block',
                marginBottom: '8px'
              }}
            >
              {service.tag}
            </span>
            <h2 className="h2-title" style={{ fontSize: '1.85rem', color: '#fff', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <IconComponent size={24} style={{ color: 'var(--color-accent-gold)' }} />
              <span>{service.title}</span>
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '24px 28px 32px' }}>
          {/* Authentic Core Description */}
          <div style={{ background: 'rgba(212, 175, 55, 0.08)', borderLeft: '3px solid var(--color-accent-gold)', padding: '1rem 1.25rem', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', marginBottom: '1.75rem' }}>
            <p style={{ fontSize: '0.975rem', color: 'var(--color-text-primary)', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
              "{service.description}"
            </p>
          </div>

          {/* Cross Validation Methodology Pillars */}
          <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Analytical Cross-Validation Pillars for {service.title}:
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-gold)', fontWeight: '600', marginBottom: '6px', fontSize: '0.9rem' }}>
                <Icons.Hand size={16} />
                <span>Palmistry Analysis</span>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.5' }}>
                Palmar line topography, mount heights & markings corresponding to {service.title.toLowerCase()}.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-gold)', fontWeight: '600', marginBottom: '6px', fontSize: '0.9rem' }}>
                <Icons.Sun size={16} />
                <span>Horoscope Readings</span>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.5' }}>
                Precision Jyotish Dasha periods, Vargas divisional charts & planetary transits.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-gold)', fontWeight: '600', marginBottom: '6px', fontSize: '0.9rem' }}>
                <Icons.Hash size={16} />
                <span>Vedic Numerology</span>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.5' }}>
                Core personal date & sound frequency synchronizations.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-subtle)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Virtual & In-Person Meetings Available (Pune Office)
            </div>

            <button onClick={handleBookService} className="btn btn-primary" style={{ padding: '0.8rem 1.75rem' }}>
              <Icons.Calendar size={18} />
              <span>Book Appointment</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
