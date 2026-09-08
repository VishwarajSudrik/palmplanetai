import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, Mail } from 'lucide-react';
import { navLinks, contactInfo } from '../../data/navigationData';
import { siteContent } from '../../data/siteContent';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(11, 14, 20, 0.92)' : 'rgba(11, 14, 20, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid var(--color-border-gold)' : '1px solid var(--color-border-subtle)',
          transition: 'all 300ms ease'
        }}
      >
        {/* Top Info Bar */}
        <div 
          style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            paddingBlock: '6px',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            display: 'block'
          }}
        >
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={13} style={{ color: 'var(--color-accent-gold)' }} />
                <a href={`tel:${contactInfo.phoneClean}`} style={{ color: 'inherit', textDecoration: 'none' }}>{contactInfo.phone}</a>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="mobile-hide">
                <Mail size={13} style={{ color: 'var(--color-accent-gold)' }} />
                <a href={`mailto:${contactInfo.emails[0]}`} style={{ color: 'inherit', textDecoration: 'none' }}>{contactInfo.emails[0]}</a>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem' }}>
              <span style={{ color: 'var(--color-accent-gold)', fontWeight: '600' }}>Virtual & In-Person Consultations</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo & Brand Title */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <img 
              src={siteContent.brand.logoUrl} 
              alt="Palm Planet Research Centre Logo" 
              style={{ 
                width: '58px', 
                height: '58px', 
                borderRadius: '50%', 
                objectFit: 'cover', 
                border: '2px solid var(--color-accent-gold)',
                boxShadow: '0 0 14px rgba(212, 175, 55, 0.4)',
                transition: 'transform 200ms ease'
              }} 
            />
            <div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: '700', color: 'var(--color-text-primary)', display: 'block', lineHeight: 1.1 }}>
                Palm Planet
              </span>
              <span style={{ fontSize: '0.725rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', fontWeight: '700', marginTop: '2px' }}>
                Research Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-only">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.925rem',
                  fontWeight: isActive ? '600' : '500',
                  position: 'relative',
                  paddingBlock: '6px',
                  transition: 'color var(--transition-fast)'
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span 
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: 'var(--color-accent-gold)',
                          borderRadius: '2px'
                        }} 
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="desktop-only">
            <Link to="/booking" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
              <Calendar size={15} />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              padding: '8px'
            }}
            className="mobile-toggle-btn"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1001,
            backgroundColor: 'rgba(11, 14, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            animation: 'fadeIn 250ms ease-out'
          }}
        >
          {/* Header in Drawer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img 
                src={siteContent.brand.logoUrl} 
                alt="Logo" 
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  border: '2px solid var(--color-accent-gold)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)' 
                }} 
              />
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-text-primary)', fontWeight: '700', display: 'block', lineHeight: 1.1 }}>
                  Palm Planet
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '600' }}>
                  Research Centre
                </span>
              </div>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{ background: 'none', border: 'none', color: 'var(--color-text-primary)', padding: '8px' }}
            >
              <X size={28} />
            </button>
          </div>

          {/* Drawer Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--color-accent-gold)' : 'var(--color-text-primary)',
                  fontSize: '1.35rem',
                  fontFamily: 'var(--font-heading)',
                  textDecoration: 'none',
                  paddingBlock: '8px',
                  borderBottom: '1px solid var(--color-border-subtle)'
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Drawer Footer Cta */}
          <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
              <Calendar size={18} />
              Book Appointment
            </Link>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
              {contactInfo.phone} | {contactInfo.emails[0]}
            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles Injection */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
        @media (max-width: 640px) {
          .mobile-hide { display: none !important; }
        }
      `}</style>
    </>
  );
};
