import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { WhoWeAreSection } from '../components/home/WhoWeAreSection';
import { MethodologySection } from '../components/home/MethodologySection';
import { ReportsSection } from '../components/home/ReportsSection';
import { ServiceCarousel } from '../components/services/ServiceCarousel';
import { FounderHighlight } from '../components/home/FounderHighlight';
import { VisionMissionSection } from '../components/home/VisionMissionSection';
import { SectionHeader } from '../components/common/SectionHeader';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/navigationData';

export const HomePage = () => {
  return (
    <>
      <SEOHead 
        title="Predictive Accuracy Through Horoscope, Palmistry & Vedic Numerology"
        description="The Palm Planet Research Centre try to attain predictive accuracy through study & comparison of individual's horoscope with palm lines, mountains & Vedic Numerology analysis."
        canonical="https://palmplanetai.in/"
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Who We Are Section */}
      <WhoWeAreSection />

      {/* 3. Methodology Section */}
      <MethodologySection />

      {/* 4. Astrological AI Reports Section ("My Reports") */}
      <ReportsSection />

      {/* 5. Sliding Services Overview Section */}
      <section className="section-padding section-bg-alt">
        <div className="container">
          <SectionHeader
            eyebrow="What We Do"
            title="Our 16 Predictive Service Categories"
            description="Specialized consultations combining Horoscope, Palmistry, and Vedic Numerology for cross-validated insights."
          />

          <ServiceCarousel />
        </div>
      </section>

      {/* 5. Founder Highlight */}
      <FounderHighlight />

      {/* 6. Vision & Mission */}
      <VisionMissionSection />

      {/* 7. Quick Contact Banner */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <div 
            className="glass-card responsive-center-banner"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.14) 0%, rgba(22, 29, 43, 0.95) 100%)',
              border: '1px solid var(--color-border-gold-strong)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
              padding: 'clamp(1.75rem, 4vw, 2.75rem)'
            }}
          >
            <div style={{ maxWidth: '580px' }} className="responsive-banner-text">
              <span className="eyebrow">Ready For Clarity?</span>
              <h2 className="h2-title" style={{ marginTop: '0.4rem', marginBottom: '0.5rem', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                Schedule Your Astrological Reading
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 0, lineHeight: '1.6', fontSize: '0.95rem' }}>
                Virtual & personal consultations backed by scientific cross-validation. Simple 24-hour prior submission protocol.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }} className="responsive-btn-group">
              <Link to="/booking" className="btn btn-primary">
                <Calendar size={17} />
                <span>Book Appointment</span>
              </Link>
              <a href={`tel:${contactInfo.phoneClean}`} className="btn btn-outline">
                <Phone size={15} />
                <span>Call +91-9665153661</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
