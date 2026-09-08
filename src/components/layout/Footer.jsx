import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowUp, Compass } from 'lucide-react';
import { navLinks, contactInfo } from '../../data/navigationData';
import { siteContent } from '../../data/siteContent';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border-gold)',
        paddingTop: 'clamp(3rem, 5vw, 5rem)',
        paddingBottom: '2rem',
        color: 'var(--color-text-secondary)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Footer Top Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <img 
                src={siteContent.brand.logoUrl} 
                alt="Logo" 
                style={{ 
                  width: '58px', 
                  height: '58px', 
                  borderRadius: '50%', 
                  border: '2px solid var(--color-accent-gold)',
                  boxShadow: '0 0 12px rgba(212, 175, 55, 0.35)' 
                }} 
              />
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-text-primary)', fontWeight: '700', display: 'block', lineHeight: 1.1 }}>
                  Palm Planet
                </span>
                <span style={{ fontSize: '0.725rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: '700', marginTop: '2px' }}>
                  Research Centre
                </span>
              </div>
            </Link>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              Attaining predictive accuracy through comparative study of individual horoscopes with palm lines, mountains & Vedic Numerology.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-accent-gold)' }}>
              <Compass size={16} />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Quick Navigation
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 150ms' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-gold)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Analytical Methods */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Analytical Methods
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              <li>Palmistry Readings (Lines & Mounts)</li>
              <li>Horoscope Readings (Vedic Jyotish)</li>
              <li>Vedic Numerology Analysis</li>
              <li>Empirical Cross-Validation</li>
              <li>Face Reading & Gemology</li>
            </ul>
          </div>

          {/* Column 4: Official Contact */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Official Contact
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>{contactInfo.address}</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                <a href={`tel:${contactInfo.phoneClean}`} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                  {contactInfo.phone}
                </a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Mail size={16} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '3px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {contactInfo.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            paddingTop: '1.75rem',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)'
          }}
        >
          <div>{contactInfo.copyright}</div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            style={{
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid var(--color-border-gold)',
              color: 'var(--color-accent-gold)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-accent-gold)';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              e.currentTarget.style.color = 'var(--color-accent-gold)';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
