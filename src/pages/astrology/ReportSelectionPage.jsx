import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { SEOHead } from '../../components/common/SEOHead';
import { REPORT_CATEGORIES, reportTypesList } from '../../data/reportTypesConfig';
import { ReportCard } from '../../components/astrology/ReportCard';
import { ReportGeneratorModal } from '../../components/astrology/ReportGeneratorModal';
import { generateAstrologyReport } from '../../services/astrologyService';
import { Sparkles, Edit3, Compass, CheckCircle2 } from 'lucide-react';

export const ReportSelectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialCat = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [generatingReport, setGeneratingReport] = useState(null);

  const birthDetails = location.state?.birthDetails || null;
  const autoSelectReportId = location.state?.autoSelectReportId;

  useEffect(() => {
    if (autoSelectReportId && birthDetails) {
      const targetReport = reportTypesList.find(r => r.id === autoSelectReportId);
      if (targetReport) {
        setGeneratingReport(targetReport);
      }
    }
  }, [autoSelectReportId, birthDetails]);

  const filteredReports = activeCategory === 'all' 
    ? reportTypesList 
    : reportTypesList.filter(r => r.category === activeCategory);

  const handleReportClick = (report) => {
    if (!birthDetails) {
      // User hasn't entered birth details yet! Redirect to Birth Details form first
      navigate(`/astrology/birth-details?report=${report.id}`);
      return;
    }
    setGeneratingReport(report);
  };

  const handleGenerationComplete = async () => {
    if (!generatingReport || !birthDetails) return;
    const generated = await generateAstrologyReport(generatingReport.id, birthDetails);
    setGeneratingReport(null);
    navigate(`/astrology/reports/${generated.id}`);
  };

  return (
    <>
      <SEOHead 
        title="Select Astrology Report | Palm Planet Research Centre"
        description="Choose from 13 comprehensive Vedic Astrology reports including Kundli birth chart, Career forecast, Wealth analysis, and Vimshottari Dasha timeline."
        canonical="https://palmplanetai.in/astrology/select-report"
      />

      {/* Header Banner */}
      <section className="section-bg-alt" style={{ paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
            <div>
              <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} />
                Step 2 of 2 — Select Report Type
              </span>
              <h1 className="h1-title" style={{ marginTop: '0.3rem', marginBottom: '0.5rem' }}>
                Available Vedic Astrology Reports
              </h1>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                {birthDetails ? (
                  <>Calculations initialized for <strong>{birthDetails.fullName}</strong> ({birthDetails.birthDate}, {birthDetails.birthPlace}).</>
                ) : (
                  <>Select any report below to enter your mandatory birth details and generate your personalized report.</>
                )}
              </p>
            </div>

            {/* Birth Details Status Badge */}
            {birthDetails ? (
              <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid var(--color-border-gold)', padding: '10px 16px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ fontSize: '0.825rem' }}>
                  <div style={{ color: 'var(--color-accent-gold)', fontWeight: '600' }}>Active Birth Parameters</div>
                  <div style={{ color: 'var(--color-text-secondary)' }}>{birthDetails.fullName} • {birthDetails.birthDate}</div>
                </div>
                <button 
                  onClick={() => navigate('/astrology/birth-details', { state: { initialValues: birthDetails } })}
                  className="btn btn-outline"
                  style={{ padding: '4px 10px', fontSize: '0.78rem', gap: '4px' }}
                >
                  <Edit3 size={12} />
                  <span>Edit</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/astrology/birth-details')}
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
              >
                <Compass size={16} />
                <span>Enter Birth Details First</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Report Selection Section */}
      <section className="section-padding">
        <div className="container">
          
          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2.5rem', justifyContent: 'center' }}>
            {REPORT_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: activeCategory === cat.id ? 'var(--color-accent-gold)' : 'var(--color-border-subtle)',
                  background: activeCategory === cat.id ? 'var(--color-accent-gold)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeCategory === cat.id ? '#000' : 'var(--color-text-secondary)',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 200ms ease'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Report Cards Grid */}
          <div className="grid-3">
            {filteredReports.map(report => (
              <ReportCard 
                key={report.id} 
                report={report} 
                onSelect={handleReportClick} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* Calculation Loading Modal Overlay */}
      {generatingReport && (
        <ReportGeneratorModal 
          reportTitle={generatingReport.title}
          onComplete={handleGenerationComplete}
        />
      )}
    </>
  );
};
