import React from 'react';
import { 
  Compass, FileSpreadsheet, Briefcase, TrendingUp, Heart, 
  GraduationCap, Activity, Building2, Globe, Clock, ShieldAlert, 
  Users, Sparkles, ArrowRight, CheckCircle2, FileText 
} from 'lucide-react';

const ICON_MAP = {
  Compass, FileSpreadsheet, Briefcase, TrendingUp, Heart, 
  GraduationCap, Activity, Building2, Globe, Clock, ShieldAlert, 
  Users, Sparkles
};

export const ReportCard = ({ report, onSelect }) => {
  const IconComponent = ICON_MAP[report.iconName] || Sparkles;

  return (
    <div 
      className="glass-card" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative',
        background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)',
        border: report.popular ? '1.5px solid var(--color-accent-gold)' : '1px solid var(--color-border-gold)',
        padding: '1.75rem 1.5rem',
        borderRadius: 'var(--radius-md)',
        boxShadow: report.popular ? '0 10px 30px rgba(212, 175, 55, 0.15)' : 'none',
        transition: 'transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease'
      }}
    >
      <div>
        {/* Header Tag & Popular Badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span 
            style={{
              fontSize: '0.725rem',
              fontWeight: '700',
              color: 'var(--color-accent-gold)',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid var(--color-border-gold)',
              padding: '3px 10px',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            {report.tag}
          </span>

          {report.popular && (
            <span style={{ fontSize: '0.7rem', fontWeight: '700', background: 'var(--color-accent-gold)', color: '#000', padding: '2px 8px', borderRadius: 'var(--radius-full)', textTransform: 'uppercase' }}>
              Most Popular
            </span>
          )}
        </div>

        {/* Title & Icon Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '0.85rem' }}>
          <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '10px', borderRadius: 'var(--radius-sm)', color: 'var(--color-accent-gold)', flexShrink: 0 }}>
            <IconComponent size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', margin: 0, fontFamily: 'var(--font-heading)', lineHeight: '1.3' }}>
              {report.title}
            </h3>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <FileText size={12} />
              <span>{report.estimatedPages}</span>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          {report.description}
        </p>

        {/* Highlights List */}
        <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--color-accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
            What is Included:
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {report.highlights.map((item, idx) => (
              <li key={idx} style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 size={14} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onSelect(report)}
        className="btn btn-primary"
        style={{ width: '100%', padding: '0.75rem 1.25rem', fontSize: '0.9rem', justifyContent: 'center' }}
      >
        <span>Generate {report.title}</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};
