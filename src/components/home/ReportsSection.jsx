import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SectionHeader } from '../common/SectionHeader';
import { reportTypesList } from '../../data/reportTypesConfig';
import { getSavedReportsFromHistory } from '../../services/astrologyService';
import { 
  Compass, FileSpreadsheet, Briefcase, TrendingUp, Heart, 
  GraduationCap, Activity, Building2, Globe, Clock, ShieldAlert, 
  Users, Sparkles, ArrowRight, CheckCircle2, FileText, FolderClock, PlusCircle 
} from 'lucide-react';

const ICON_MAP = {
  Compass, FileSpreadsheet, Briefcase, TrendingUp, Heart, 
  GraduationCap, Activity, Building2, Globe, Clock, ShieldAlert, 
  Users, Sparkles
};

export const ReportsSection = () => {
  const navigate = useNavigate();
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const saved = getSavedReportsFromHistory();
    setSavedCount(saved.length);
  }, []);

  // Select top popular reports for homepage display
  const featuredReports = reportTypesList.filter(r => r.popular).slice(0, 6);

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Saved Reports Banner Notice if user has past generated reports */}
        {savedCount > 0 && (
          <div 
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(22, 29, 43, 0.8) 100%)',
              border: '1px solid var(--color-border-gold)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 20px',
              marginBottom: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FolderClock size={20} style={{ color: 'var(--color-accent-gold)' }} />
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', fontWeight: '600' }}>
                You have {savedCount} saved {savedCount === 1 ? 'astrology report' : 'astrology reports'} in your archive.
              </span>
            </div>
            <Link 
              to="/astrology/reports" 
              className="btn btn-outline"
              style={{ padding: '6px 14px', fontSize: '0.825rem' }}
            >
              <span>View My Reports</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        )}

        <SectionHeader
          eyebrow="Calculated Vedic Analysis"
          title="Personalized Astrology & Life Reports"
          description="Generate instant, research-backed Vedic reports covering Kundli natal chart, planetary Dashas, career, wealth, and relationship compatibility."
        />

        {/* Featured Reports Grid */}
        <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
          {featuredReports.map((report) => {
            const IconComponent = ICON_MAP[report.iconName] || Sparkles;

            return (
              <div 
                key={report.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)',
                  border: report.popular ? '1.5px solid var(--color-border-gold-strong)' : '1px solid var(--color-border-gold)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 250ms ease'
                }}
              >
                <div>
                  {/* Top Category Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span 
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        color: 'var(--color-accent-gold)',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid var(--color-border-gold)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em'
                      }}
                    >
                      {report.tag}
                    </span>

                    <span style={{ fontSize: '0.73rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FileText size={12} />
                      <span>{report.estimatedPages}</span>
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '0.75rem' }}>
                    <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '8px', borderRadius: 'var(--radius-sm)', color: 'var(--color-accent-gold)', flexShrink: 0 }}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', margin: 0, fontFamily: 'var(--font-heading)', lineHeight: '1.3' }}>
                        {report.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.55', marginBottom: '1rem' }}>
                    {report.description}
                  </p>
                </div>

                {/* Card Button Action */}
                <button
                  onClick={() => navigate(`/astrology/birth-details?report=${report.id}`)}
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem', justifyContent: 'center' }}
                >
                  <span>Generate Report</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Group */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }} className="responsive-btn-group">
          <Link to="/astrology/select-report" className="btn btn-primary">
            <Sparkles size={16} />
            <span>Explore All 13 Report Types</span>
          </Link>
          <Link to="/astrology/reports" className="btn btn-outline">
            <FolderClock size={16} />
            <span>My Saved Reports Archive</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
