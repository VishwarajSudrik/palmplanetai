import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <>
      <SEOHead title="404 — Page Not Found" description="The requested page could not be found." />
      
      <section className="section-padding" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="glass-card">
            <div style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-gold)', lineHeight: 1, marginBottom: '1rem' }}>
              404
            </div>
            <h1 className="h2-title" style={{ marginBottom: '1rem' }}>
              Page Not Found
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
              The page or resource you are looking for does not exist or has been moved.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-primary">
                <Home size={16} />
                <span>Return to Home</span>
              </Link>
              <Link to="/services" className="btn btn-outline">
                <Compass size={16} />
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
