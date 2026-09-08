import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { WhoWeAreSection } from '../components/home/WhoWeAreSection';
import { MethodologySection } from '../components/home/MethodologySection';
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

      {/* 4. Sliding Services Overview Section */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            eyebrow="What We Do"
            title="Our 16 Predictive Service Categories"
            description="We use Palmistry, Horoscope, and Vedic Numerology. These methods are being used for cross validation so that higher accuracy can be achieved."
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
              gap: '2rem',
              padding: 'clamp(2rem, 4vw, 3.5rem)'
            }}
          >
            <div style={{ maxWidth: '600px' }} className="responsive-banner-text">
              <span className="eyebrow">Virtual & Personal Consultations</span>
              <h2 className="h2-title" style={{ marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                Schedule Your Detailed Astrological Reading
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 0, lineHeight: '1.65' }}>
                Detailed readings provided without physical presence via virtual tools. Required information requested 1 day before Virtual/Personal Meeting for detailed & better analysis.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }} className="responsive-btn-group">
              <Link to="/booking" className="btn btn-primary">
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>
              <a href={`tel:${contactInfo.phoneClean}`} className="btn btn-outline">
                <Phone size={16} />
                <span>Call +91-9665153661</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
