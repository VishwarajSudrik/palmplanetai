import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { contactInfo } from '../data/navigationData';
import { MapPin, Mail, Phone, Clock, Calendar, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage = () => {
  return (
    <>
      <SEOHead 
        title="Contact Us | Palm Planet Research Centre"
        description="Get in touch with Palm Planet Research Centre in Pune. Phone: +91-9665153661, Email: future@palmplanetai.in."
        canonical="https://palmplanetai.in/contact"
      />

      <section className="section-padding section-bg-alt" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Connect With Us</span>
          <h1 className="h1-title" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Official Contact Information
          </h1>
          <p className="lead-text" style={{ maxWidth: '720px', marginInline: 'auto' }}>
            Reach out for virtual or in-person consultation appointments at our Pune office.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Contact Cards Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Address */}
              <div className="glass-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '12px', borderRadius: 'var(--radius-md)', color: 'var(--color-accent-gold)', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>
                      Research Centre Address
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: 0 }}>
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '12px', borderRadius: 'var(--radius-md)', color: 'var(--color-accent-gold)', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>
                      Phone & WhatsApp
                    </h3>
                    <a 
                      href={`tel:${contactInfo.phoneClean}`}
                      style={{ fontSize: '1.1rem', color: 'var(--color-accent-gold)', fontWeight: '600', textDecoration: 'none', display: 'block', marginBottom: '4px' }}
                    >
                      {contactInfo.phone}
                    </a>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      Available for phone inquiries & WhatsApp booking.
                    </div>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="glass-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '12px', borderRadius: 'var(--radius-md)', color: 'var(--color-accent-gold)', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>
                      Official Email Channels
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {contactInfo.emails.map(email => (
                        <a 
                          key={email}
                          href={`mailto:${email}`}
                          style={{ fontSize: '0.95rem', color: 'var(--color-accent-gold)', textDecoration: 'none', fontWeight: '500' }}
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Booking CTA Right */}
            <div>
              <div 
                className="glass-card" 
                style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justify: 'center', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)',
                  border: '1px solid var(--color-border-gold-strong)',
                  padding: '3rem 2rem' 
                }}
              >
                <div style={{ background: 'rgba(212, 175, 55, 0.15)', padding: '16px', borderRadius: '50%', color: 'var(--color-accent-gold)', marginBottom: '1.5rem' }}>
                  <Calendar size={32} />
                </div>

                <h3 className="h2-title" style={{ marginBottom: '1rem' }}>
                  Schedule Your Consultation
                </h3>

                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.7', maxWidth: '440px' }}>
                  We provide detailed astrological readings without physical presence. Meetings can be conducted via virtual tools or in-person by prior appointment.
                </p>

                <Link to="/booking" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                  <span>Go to Booking Form</span>
                  <Send size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
