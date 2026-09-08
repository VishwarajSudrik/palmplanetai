import React from 'react';

export const SectionHeader = ({ eyebrow, title, description, align = 'center', className = '' }) => {
  const alignmentClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <div className={`section-header ${alignmentClass} ${className}`} style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="h2-title" style={{ marginTop: '0.4rem', marginBottom: '0.75rem' }}>{title}</h2>}
      {description && (
        <p 
          className="lead-text" 
          style={{ 
            maxWidth: align === 'center' ? '720px' : '100%', 
            marginInline: align === 'center' ? 'auto' : '0' 
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};
