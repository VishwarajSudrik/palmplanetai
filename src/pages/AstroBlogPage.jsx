import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { BookOpen, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AstroBlogPage = () => {
  return (
    <>
      <SEOHead 
        title="Astro Blog & Research Insights | Palm Planet Research Centre"
        description="Empirical research articles, Vedic Astrology chart comparisons, and Palmistry line studies from Palm Planet Research Centre."
        canonical="https://palmplanetai.in/astro-blog"
      />

      <section className="section-padding section-bg-alt" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Research Publications</span>
          <h1 className="h1-title" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Astro Blog & Empirical Studies
          </h1>
          <p className="lead-text" style={{ maxWidth: '720px', marginInline: 'auto' }}>
            Our ongoing research papers on Vedic Astrology, Palmar Mounts, Dasha timing accuracy, and Vedic Numerology.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass-card" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.12)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginInline: 'auto', marginBottom: '1.5rem', color: 'var(--color-accent-gold)' }}>
              <BookOpen size={30} />
            </div>

            <h2 className="h2-title" style={{ marginBottom: '1rem' }}>
              Research Publications & Articles
            </h2>

            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.75' }}>
              The Palm Planet Research Centre is compiling empirical case studies demonstrating cross-validation between palmar lines/mounts and horoscopic Dasha periods. Research insights and articles will be published here.
            </p>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--color-accent-gold)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                Upcoming Research Areas:
              </h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                <li>Comparative Study of Palmar Mount Heights & Planetary Strengths (Shadbala)</li>
                <li>Empirical Accuracy in Career Transitions via Dasha & Head Line Markings</li>
                <li>Vedic Numerology Frequencies in Name Harmony for Business Ventures</li>
              </ul>
            </div>

            <Link to="/booking" className="btn btn-primary">
              <Sparkles size={16} />
              <span>Book Consultation for Personal Analysis</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
