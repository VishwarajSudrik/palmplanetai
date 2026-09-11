import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../components/common/SEOHead';
import { getReportById, generateAstrologyReport } from '../../services/astrologyService';
import { ChartRenderer } from '../../components/astrology/ChartRenderer';
import { PlanetaryTable } from '../../components/astrology/PlanetaryTable';
import { ReportPdfExport } from '../../components/astrology/ReportPdfExport';
import { siteContent } from '../../data/siteContent';
import { contactInfo } from '../../data/navigationData';
import { 
  Compass, Calendar, Clock, MapPin, User, FileText, 
  Sparkles, ShieldCheck, CheckCircle2, AlertTriangle, 
  ArrowLeft, Award, HelpCircle 
} from 'lucide-react';

export const ReportViewerPage = () => {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReport = () => {
      let found = getReportById(reportId);
      setReport(found || null);
      setLoading(false);
    };

    fetchReport();
  }, [reportId]);

  if (loading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--color-accent-gold)' }}>
        <Compass size={36} className="animate-spin" style={{ marginInline: 'auto', marginBottom: '1rem' }} />
        <div>Loading Astrology Report...</div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="container" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
          Report Reference Not Found
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '560px', marginInline: 'auto', lineHeight: '1.7' }}>
          Astrology reports are generated uniquely using your mandatory birth parameters (Full Name, Gender, Date of Birth, Birth Time, and Birth Location).
        </p>
        <Link to="/astrology/birth-details" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
          <Compass size={18} />
          <span>Enter Your Birth Details to Generate Report</span>
        </Link>
      </div>
    );
  }

  const { clientDetails, chartData, numerology } = report;

  return (
    <>
      <SEOHead 
        title={`${report.title} — ${clientDetails.fullName} | Palm Planet Research Centre`}
        description={`Empirical Vedic Astrology Report generated for ${clientDetails.fullName} (${report.id}).`}
        canonical={`https://palmplanetai.in/astrology/reports/${report.id}`}
      />

      {/* Top Action Bar */}
      <section className="section-bg-alt no-print" style={{ paddingBlock: '1rem', borderBottom: '1px solid var(--color-border-gold)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <Link to="/astrology/reports" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent-gold)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
            <ArrowLeft size={16} />
            <span>Back to Saved Reports</span>
          </Link>

          <ReportPdfExport reportTitle={report.title} reportId={report.id} />
        </div>
      </section>

      {/* Main Report Container */}
      <section className="section-padding" style={{ background: 'var(--color-bg-main)' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          
          {/* Printable Report Document Card */}
          <div 
            id="printable-report-document"
            style={{
              background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.95) 0%, rgba(13, 17, 24, 0.98) 100%)',
              border: '1px solid var(--color-border-gold-strong)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 5vw, 3.5rem)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* 1. REPORT BRANDING COVER HEADER */}
            <div style={{ borderBottom: '2px solid var(--color-border-gold)', paddingBottom: '1.75rem', marginBottom: '2.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img 
                    src={siteContent.brand.logoUrl} 
                    alt="Palm Planet Logo" 
                    style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--color-accent-gold)' }} 
                  />
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#FFF', fontWeight: '700', margin: 0, lineHeight: 1.1 }}>
                      Palm Planet
                    </h2>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: '700' }}>
                      Research Centre • Pune, India
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'inline-block', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--color-border-gold)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', color: 'var(--color-accent-gold)', fontWeight: '700', marginBottom: '4px' }}>
                    REF ID: {report.id}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    Generated: {new Date(report.generatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px dashed var(--color-border-subtle)' }}>
                <span className="eyebrow" style={{ fontSize: '0.75rem' }}>Empirical Vedic Jyotish Report</span>
                <h1 className="h1-title" style={{ fontSize: '2rem', marginTop: '0.2rem', marginBottom: '0.4rem', color: 'var(--color-text-primary)' }}>
                  {report.title}
                </h1>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-accent-gold)', fontWeight: '600' }}>
                  Prepared Exclusively for {clientDetails.fullName}
                </div>
              </div>
            </div>

            {/* 2. CLIENT & BIRTH PARAMETERS GRID */}
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={15} />
                <span>Natal Birth Parameters & Coordinates</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '0.875rem' }}>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Full Name:</span> <strong style={{ color: '#FFF' }}>{clientDetails.fullName}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Gender:</span> <strong style={{ color: '#FFF' }}>{clientDetails.gender}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Date of Birth:</span> <strong style={{ color: '#FFF' }}>{clientDetails.birthDate}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Exact Time:</span> <strong style={{ color: '#FFF' }}>{clientDetails.birthTime}</strong>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Birth Location:</span> <strong style={{ color: '#FFF' }}>{clientDetails.birthPlace} ({clientDetails.lat}° N, {clientDetails.lng}° E, UTC {clientDetails.timezone})</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Ascendant Sign:</span> <strong style={{ color: 'var(--color-accent-gold)' }}>{chartData.ascendant.sign} ({chartData.ascendant.sanskritSign})</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Moon Sign (Rashi):</span> <strong style={{ color: 'var(--color-accent-gold)' }}>{chartData.moon.sign} ({chartData.moon.sanskritSign})</strong>
                </div>
              </div>
            </div>

            {/* 3. EXECUTIVE SUMMARY SECTION */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)', marginBottom: '0.85rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.5rem' }}>
                1. Executive Analytical Summary
              </h3>
              <div style={{ background: 'rgba(212, 175, 55, 0.06)', borderLeft: '4px solid var(--color-accent-gold)', padding: '1.25rem', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', lineHeight: '1.75', fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                Client <strong>{clientDetails.fullName}</strong> exhibits a <strong>{chartData.ascendant.sign} Ascendant</strong> with natal Moon situated in <strong>{chartData.moon.sign} ({chartData.moon.nakshatra} Nakshatra)</strong>. The primary life trajectory is driven by <strong>{chartData.ascendant.ruler}</strong> (Lagna Lord) and active Vimshottari Mahadasha cycles. This empirical analysis outlines key strengths, timing of opportunities, and planetary mitigation strategies.
              </div>
            </div>

            {/* 4. ASTROLOGICAL CHARTS (NORTH & SOUTH INDIAN, D1, D9, D10) */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.5rem' }}>
                2. Divisional Natal Charts (Vargas)
              </h3>
              <ChartRenderer chartData={chartData} title={`${report.title} Charts`} />
            </div>

            {/* 5. PLANETARY POSITIONS TABLE */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.5rem' }}>
                3. Planetary Longitudes & Nakshatra Padas
              </h3>
              <PlanetaryTable planets={chartData.planets} />
            </div>

            {/* 6. VIMSHOTTARI DASHA TIMELINE */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.5rem' }}>
                4. Vimshottari Dasha Timelines
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {chartData.dashaTimeline.map((dasha, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      background: dasha.isCurrent ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid',
                      borderColor: dasha.isCurrent ? 'var(--color-accent-gold)' : 'var(--color-border-subtle)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-gold)', fontWeight: '700', textTransform: 'uppercase' }}>
                        {dasha.mahadasha} Mahadasha
                      </span>
                      {dasha.isCurrent && (
                        <span style={{ fontSize: '0.7rem', background: 'var(--color-accent-gold)', color: '#000', padding: '2px 6px', borderRadius: 'var(--radius-full)', fontWeight: '700' }}>
                          Active Phase
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFF' }}>
                      {dasha.startYear} – {dasha.endYear} ({dasha.years} Yrs)
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                      Sub-period: {dasha.antardasha}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. YOGAS & DOSHAS DIAGNOSTICS */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.5rem' }}>
                5. Major Yogas & Planetary Doshas Diagnostic
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                {chartData.yogas.map((yoga, idx) => (
                  <div key={idx} style={{ background: 'rgba(40, 167, 69, 0.08)', border: '1px solid var(--color-success)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#28A745', fontWeight: '700', marginBottom: '6px', fontSize: '0.925rem' }}>
                      <CheckCircle2 size={16} />
                      <span>{yoga.name}</span>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: '1.5' }}>
                      {yoga.description}
                    </p>
                  </div>
                ))}

                {chartData.doshas.map((dosha, idx) => (
                  <div key={idx} style={{ background: dosha.present ? 'rgba(220, 53, 69, 0.08)' : 'rgba(255, 255, 255, 0.02)', border: '1px solid', borderColor: dosha.present ? '#DC3545' : 'var(--color-border-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontWeight: '700', color: dosha.present ? '#FF6B6B' : 'var(--color-text-primary)', fontSize: '0.925rem' }}>
                        {dosha.name}
                      </span>
                      <span style={{ fontSize: '0.725rem', color: dosha.present ? '#FF6B6B' : 'var(--color-text-muted)', fontWeight: '600' }}>
                        {dosha.severity}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: '1.5' }}>
                      {dosha.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. VEDIC NUMEROLOGY SYNC */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.5rem' }}>
                6. Vedic Numerology Frequencies
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--color-border-gold)', padding: '1rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-gold)', fontWeight: '700', lineHeight: 1 }}>
                    {numerology.lifePathNumber}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#FFF', fontWeight: '600', marginTop: '4px' }}>Life Path Number</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Ruler: {numerology.ruler}</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)', fontWeight: '700', lineHeight: 1 }}>
                    {numerology.expressionNumber}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#FFF', fontWeight: '600', marginTop: '4px' }}>Expression / Destiny</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Full Name Vibration</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)', fontWeight: '700', lineHeight: 1 }}>
                    {numerology.soulUrgeNumber}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#FFF', fontWeight: '600', marginTop: '4px' }}>Soul Urge Number</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Inner Desire</div>
                </div>
              </div>
            </div>

            {/* 9. REMEDIES & GEMSTONE RECOMMENDATIONS */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.5rem' }}>
                7. Recommended Remedial & Gemstone Guidance
              </h3>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <strong style={{ color: 'var(--color-accent-gold)', display: 'block', marginBottom: '4px' }}>Resonance Gemstone:</strong>
                    <span style={{ fontSize: '0.9rem', color: '#FFF' }}>{numerology.gemstone} (Set in Gold / Silver)</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-accent-gold)', display: 'block', marginBottom: '4px' }}>Favorable Frequencies & Colors:</strong>
                    <span style={{ fontSize: '0.9rem', color: '#FFF' }}>{numerology.luckyColors}</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-accent-gold)', display: 'block', marginBottom: '4px' }}>Auspicious Days:</strong>
                    <span style={{ fontSize: '0.9rem', color: '#FFF' }}>{numerology.luckyDays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. INSTITUTIONAL SIGN-OFF & DISCLAIMER */}
            <div style={{ borderTop: '2px solid var(--color-border-gold)', paddingTop: '1.5rem', marginTop: '3rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Palm Planet Research Centre</strong><br />
                  {contactInfo.address}<br />
                  Phone: {contactInfo.phone} | Email: {contactInfo.emails[0]}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ color: 'var(--color-accent-gold)' }}>Prashant Moholkar</strong><br />
                  Mechanical Design Engineer & Vedic Astrologer
                </div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
                <strong>Confidential Notice:</strong> This document contains proprietary analytical findings calculated specifically for the recipient. Reproduction or public dissemination without prior consent from Palm Planet Research Centre is prohibited.
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
