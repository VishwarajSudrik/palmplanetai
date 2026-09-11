import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/common/SEOHead';
import { getSavedReportsFromHistory, deleteReportFromHistory } from '../../services/astrologyService';
import { REPORT_CATEGORIES } from '../../data/reportTypesConfig';
import { FolderClock, Search, Trash2, Eye, Download, PlusCircle, Compass } from 'lucide-react';

export const ReportHistoryPage = () => {
  const [reports, setReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setReports(getSavedReportsFromHistory());
  }, []);

  const handleDelete = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this saved report from history?')) {
      const updated = deleteReportFromHistory(id);
      setReports(updated);
    }
  };

  const filteredReports = reports.filter(rep => {
    const matchesSearch = rep.clientDetails.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rep.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || rep.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <SEOHead 
        title="Saved Astrology Reports | Palm Planet Research Centre"
        description="View and download previously generated Vedic Astrology reports, Kundli birth charts, and Numerology analysis."
        canonical="https://palmplanetai.in/astrology/reports"
      />

      <section className="section-bg-alt" style={{ paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
            <div>
              <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <FolderClock size={14} />
                User Archive & History
              </span>
              <h1 className="h1-title" style={{ marginTop: '0.3rem', marginBottom: '0.5rem' }}>
                Saved Astrology Reports
              </h1>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Access, view online, or download PDF versions of your generated reports.
              </p>
            </div>

            <Link to="/astrology/birth-details" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
              <PlusCircle size={16} />
              <span>Generate New Report</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          
          {/* Controls Bar: Search & Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
              <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client name or report title..."
                className="form-input"
                style={{ paddingLeft: '40px' }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {REPORT_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: selectedCategory === cat.id ? 'var(--color-accent-gold)' : 'var(--color-border-subtle)',
                    background: selectedCategory === cat.id ? 'var(--color-accent-gold)' : 'rgba(255, 255, 255, 0.03)',
                    color: selectedCategory === cat.id ? '#000' : 'var(--color-text-secondary)',
                    fontWeight: '600',
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Reports History List / Grid */}
          {filteredReports.length === 0 ? (
            <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
              <Compass size={42} style={{ color: 'var(--color-accent-gold)', opacity: 0.6, marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No Reports Found</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                {reports.length === 0 ? 'You have not generated any astrology reports yet.' : 'No reports match your current filter parameters.'}
              </p>
              <Link to="/astrology/birth-details" className="btn btn-primary">
                Generate Your First Report
              </Link>
            </div>
          ) : (
            <div className="grid-3">
              {filteredReports.map(rep => (
                <div 
                  key={rep.id} 
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    padding: '1.5rem',
                    position: 'relative'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.725rem', color: 'var(--color-accent-gold)', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: '700' }}>
                        {rep.id}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {new Date(rep.generatedAt).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                      {rep.title}
                    </h3>

                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                      Client: <strong style={{ color: '#FFF' }}>{rep.clientDetails.fullName}</strong> ({rep.clientDetails.birthPlace})
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                    <Link to={`/astrology/reports/${rep.id}`} className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '0.8rem', flex: 1, justifyContent: 'center' }}>
                      <Eye size={14} />
                      <span>View Report</span>
                    </Link>

                    <button 
                      onClick={(e) => handleDelete(rep.id, e)}
                      aria-label="Delete report"
                      style={{ background: 'rgba(220, 53, 69, 0.15)', border: '1px solid #DC3545', color: '#FF6B6B', padding: '7px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex' }}
                      title="Delete Report"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
};
