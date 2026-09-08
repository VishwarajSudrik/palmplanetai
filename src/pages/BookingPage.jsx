import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { AppointmentForm } from '../components/booking/AppointmentForm';
import { siteContent } from '../data/siteContent';
import { ShieldCheck, Video, MapPin, Clock, Calendar } from 'lucide-react';
import { contactInfo } from '../data/navigationData';

export const BookingPage = () => {
  return (
    <>
      <SEOHead 
        title="Book Appointment & Submit Details | Palm Planet Research Centre"
        description="Book your virtual or personal astrological reading with Palm Planet Research Centre. Submit birth details and palm photo specifications."
        canonical="https://palmplanetai.in/booking"
      />

      {/* Page Header with Tightened Spacing */}
      <section 
        className="section-bg-alt" 
        style={{ 
          paddingTop: 'clamp(1.5rem, 3.5vw, 2.75rem)',
          paddingBottom: 'clamp(2rem, 4vw, 3.5rem)',
          textAlign: 'center' 
        }}
      >
        <div className="container">
          <span className="eyebrow">Consultation Scheduling</span>
          <h1 className="h1-title" style={{ marginTop: '0.4rem', marginBottom: '0.85rem' }}>
            Book Your Predictive Consultation
          </h1>
          <p className="lead-text" style={{ maxWidth: '740px', marginInline: 'auto', marginBottom: '1.75rem' }}>
            {siteContent.consultationProtocol.subtitle}
          </p>

          {/* Quick Info Badges */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '1.25rem', 
              fontSize: '0.875rem', 
              color: 'var(--color-text-muted)' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '6px 16px', borderRadius: 'var(--radius-full)' }}>
              <Video size={15} style={{ color: 'var(--color-accent-gold)' }} />
              <span>Virtual Meetings (Zoom / Meet)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '6px 16px', borderRadius: 'var(--radius-full)' }}>
              <MapPin size={15} style={{ color: 'var(--color-accent-gold)' }} />
              <span>Pune Office (By Appointment)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '6px 16px', borderRadius: 'var(--radius-full)' }}>
              <ShieldCheck size={15} style={{ color: 'var(--color-accent-gold)' }} />
              <span>Empirical Cross-Validation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Booking Form Section */}
      <section className="section-padding">
        <div className="container">
          <AppointmentForm />
        </div>
      </section>
    </>
  );
};
