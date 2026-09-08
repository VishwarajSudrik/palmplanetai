import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { siteContent } from '../data/siteContent';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
  return (
    <>
      <SEOHead 
        title="Predictive Consultation Services | Palm Planet Research Centre"
        description="Explore 16 specialized predictive service domains cross-validated through Palmistry, Horoscope, and Vedic Numerology."
        canonical="https://palmplanetai.in/services"
      />

      {/* Page Header */}
      <section className="section-padding section-bg-alt" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Services & Domains</span>
          <h1 className="h1-title" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Empirical Cross-Validation Consultation Services
          </h1>
          <p className="lead-text" style={{ maxWidth: '780px', marginInline: 'auto' }}>
            We use Palmistry, Horoscope, and Vedic Numerology. These methods are used for cross validation so that higher accuracy can be achieved.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      {/* Requirements Protocol Highlight */}
      <section className="section-padding section-bg-alt">
        <div className="container">
          <div 
            className="glass-card" 
            style={{ 
              maxWidth: '900px', 
              marginInline: 'auto',
              border: '1px solid var(--color-border-gold)' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>
              <ShieldCheck size={24} />
              <h2 className="h3-title" style={{ margin: 0, color: 'var(--color-text-primary)' }}>
                Required Consultation Information
              </h2>
            </div>
            
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.65' }}>
              {siteContent.about.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Required 1 day before Virtual or Personal Meeting for detailed analysis.
              </div>
              <Link to="/booking" className="btn btn-primary">
                <Calendar size={16} />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
