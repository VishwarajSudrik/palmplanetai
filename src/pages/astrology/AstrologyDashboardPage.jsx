import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../components/common/SEOHead';
import { reportTypesList } from '../../data/reportTypesConfig';
import { ReportCard } from '../../components/astrology/ReportCard';
import { getSavedReportsFromHistory } from '../../services/astrologyService';
import { 
  Sparkles, Compass, FileSpreadsheet, Heart, Briefcase, 
  TrendingUp, Users, ArrowRight, ShieldCheck, Clock, Award, FolderClock 
} from 'lucide-react';

export const AstrologyDashboardPage = () => {
  const navigate = useNavigate();
  const popularReports = reportTypesList.filter(r => r.popular);
  const savedReports = getSavedReportsFromHistory();

  const handleSelectReport = (report) => {
    navigate('/astrology/birth-details', { state: { selectedReportId: report.id } });
  };

  return (
    <>
      <SEOHead 
        title="Astrology Report Generation Module | Palm Planet Research Centre"
        description="Generate personalized Vedic Astrology reports, Kundli birth charts, Career forecasts, Wealth analysis, Kundli Matching (36 Guna), and Vedic Numerology."
        canonical="https://palmplanetai.in/astrology"
      />

      {/* Hero Section */}
      <section 
        style={{
          position: 'relative',
          paddingTop: 'clamp(2rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.12) 0%, rgba(11, 14, 20, 1) 75%)',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border-subtle)'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '860px', marginInline: 'auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} />
              Empirical Vedic Analytics Platform
            </span>
            <h1 className="display-title" style={{ marginTop: '0.6rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
              Astrology Report Generation Engine
            </h1>
            <p className="lead-text" style={{ marginBottom: '2.25rem', fontSize: '1.1rem' }}>
              Synthesizing astronomical Ephemeris calculations, Vimshottari Dasha timelines, divisional Vargas charts, and Vedic Numerology for comprehensive life clarity.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <Link to="/astrology/birth-details" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                <Compass size={18} />
                <span>Enter Birth Details & Generate Report</span>
              </Link>
              <Link to="/astrology/select-report" className="btn btn-outline" style={{ padding: '0.9rem 1.75rem', fontSize: '1rem' }}>
                <span>Browse All 13 Reports</span>
              </Link>
            </div>

            {/* Feature Highlights Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-accent-gold)' }} />
                <span>High-Precision Astronomical Ephemeris</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={16} style={{ color: 'var(--color-accent-gold)' }} />
                <span>North & South Indian Chart Styles</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={16} style={{ color: 'var(--color-accent-gold)' }} />
                <span>Downloadable Branded PDF Reports</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Categories Grid */}
      <section className="section-padding section-bg-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow">Quick Navigation</span>
            <h2 className="h2-title" style={{ marginTop: '0.3rem' }}>Core Astrology Modules</h2>
          </div>

          <div className="grid-3">
            {[
              { title: 'Kundli / Birth Chart', desc: 'D1 Rashi, D9 Navamsa, Ascendant & Lagna calculations.', path: '/astrology/birth-details?report=kundli', icon: Compass },
              { title: 'Complete Life Report', desc: 'All-inclusive 360° forecast across career, wealth & relationships.', path: '/astrology/birth-details?report=complete-astrology', icon: FileSpreadsheet },
              { title: 'Career & Profession', desc: '10th House analysis, Saturn positions & D10 Dashamsha.', path: '/astrology/birth-details?report=career', icon: Briefcase },
              { title: 'Finance & Wealth', desc: 'Dhana Yogas, 2nd & 11th houses, property & gains.', path: '/astrology/birth-details?report=finance', icon: TrendingUp },
              { title: 'Kundli Matching (36 Guna)', desc: 'Two-person Ashtakoota compatibility scoring & Manglik check.', path: '/astrology/kundli-matching', icon: Users },
              { title: 'Vedic Numerology', desc: 'Life Path, Expression, Soul Urge & Name vibration sync.', path: '/astrology/numerology', icon: Sparkles }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={idx} 
                  to={item.path}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    textDecoration: 'none',
                    padding: '1.5rem',
                    transition: 'all 250ms ease'
                  }}
                >
                  <div>
                    <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>
                      <Icon size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', color: 'var(--color-accent-gold)', fontWeight: '600' }}>
                    <span>Launch Module</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Reports Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="eyebrow">Featured Offerings</span>
              <h2 className="h2-title" style={{ marginTop: '0.3rem' }}>Popular Astrology Reports</h2>
            </div>
            <Link to="/astrology/select-report" className="btn btn-outline" style={{ fontSize: '0.875rem' }}>
              View All 13 Reports →
            </Link>
          </div>

          <div className="grid-3">
            {popularReports.map(report => (
              <ReportCard key={report.id} report={report} onSelect={handleSelectReport} />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Generated / Saved Reports Section */}
      {savedReports.length > 0 && (
        <section className="section-padding section-bg-alt">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FolderClock size={22} style={{ color: 'var(--color-accent-gold)' }} />
                <h2 className="h2-title" style={{ fontSize: '1.5rem', margin: 0 }}>Your Saved Reports</h2>
              </div>
              <Link to="/astrology/reports" style={{ color: 'var(--color-accent-gold)', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none' }}>
                View History ({savedReports.length}) →
              </Link>
            </div>

            <div className="grid-3">
              {savedReports.slice(0, 3).map(rep => (
                <div key={rep.id} className="glass-card" style={{ padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-gold)', fontWeight: '700', marginBottom: '4px' }}>
                    {rep.id} • {new Date(rep.generatedAt).toLocaleDateString()}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                    {rep.title}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                    Client: <strong>{rep.clientDetails.fullName}</strong>
                  </div>
                  <Link to={`/astrology/reports/${rep.id}`} className="btn btn-outline" style={{ width: '100%', padding: '6px 12px', fontSize: '0.8rem', justifyContent: 'center' }}>
                    View & Download PDF
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Methodology & Disclaimer Section */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(22, 29, 43, 0.95) 100%)', border: '1px solid var(--color-border-gold-strong)', padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
              Empirical Research Protocol & Disclaimer
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              At <strong>Palm Planet Research Centre</strong>, our astrological calculations combine calculated planetary ephemeris data, Vimshottari Dasha mechanics, and cross-validation with palmar line geometry and Vedic Numerology frequencies.
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem' }}>
              <strong>Institutional Disclaimer:</strong> Astrology reports generated by this module provide guidance based on traditional Vedic Jyotish principles. Reports are intended for personal self-discovery and decision support. They do not constitute legal, medical, or financial investment advice.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
