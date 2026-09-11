import React from 'react';
import { Download, Printer, Share2 } from 'lucide-react';

export const ReportPdfExport = ({ reportTitle, reportId }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${reportTitle} — Palm Planet Research Centre`,
        text: `Check out my generated astrology report (${reportId}) from Palm Planet Research Centre.`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Report link copied to clipboard!');
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }} className="no-print">
      <button 
        onClick={handlePrint}
        className="btn btn-primary"
        style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
      >
        <Download size={16} />
        <span>Download PDF</span>
      </button>

      <button 
        onClick={handlePrint}
        className="btn btn-outline"
        style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
      >
        <Printer size={16} />
        <span>Print Report</span>
      </button>

      <button 
        onClick={handleShare}
        className="btn btn-outline"
        style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
      >
        <Share2 size={16} />
        <span>Share</span>
      </button>
    </div>
  );
};
