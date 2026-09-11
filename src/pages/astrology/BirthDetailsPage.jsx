import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { SEOHead } from '../../components/common/SEOHead';
import { BirthDetailsForm } from '../../components/astrology/BirthDetailsForm';
import { reportTypesList } from '../../data/reportTypesConfig';

export const BirthDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const preselectedReportId = location.state?.selectedReportId || searchParams.get('report');
  const selectedReport = reportTypesList.find(r => r.id === preselectedReportId || r.slug === preselectedReportId);

  const handleFormSubmit = (birthDetailsData) => {
    if (selectedReport) {
      navigate(`/astrology/select-report`, {
        state: { birthDetails: birthDetailsData, autoSelectReportId: selectedReport.id }
      });
    } else {
      navigate('/astrology/select-report', {
        state: { birthDetails: birthDetailsData }
      });
    }
  };

  return (
    <>
      <SEOHead 
        title="Enter Birth Details | Palm Planet Research Centre"
        description="Submit birth parameters (Date, exact Time, City) for precision Vedic Astrological calculations, Kundli generation, and life forecasts."
        canonical="https://palmplanetai.in/astrology/birth-details"
      />

      <section className="section-bg-alt" style={{ paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Step 1 of 2</span>
          <h1 className="h1-title" style={{ marginTop: '0.4rem', marginBottom: '0.5rem' }}>
            Enter Birth Parameters
          </h1>
          {selectedReport ? (
            <div style={{ display: 'inline-block', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '4px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', color: 'var(--color-accent-gold)', fontWeight: '600' }}>
              Target Report: <strong>{selectedReport.title}</strong>
            </div>
          ) : (
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', maxWidth: '640px', marginInline: 'auto' }}>
              Enter birth details once and choose from any of our 13 specialized astrology reports.
            </p>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <BirthDetailsForm 
            selectedReport={selectedReport}
            onSubmit={handleFormSubmit}
            submitButtonText={selectedReport ? `Proceed to Generate ${selectedReport.title}` : "Save Details & Choose Report"}
          />
        </div>
      </section>
    </>
  );
};
