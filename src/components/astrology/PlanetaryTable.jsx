import React from 'react';
import { Table, Sparkles } from 'lucide-react';

export const PlanetaryTable = ({ planets = [] }) => {
  if (!planets || planets.length === 0) return null;

  return (
    <div className="glass-card" style={{ background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)', border: '1px solid var(--color-border-gold)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
        <Table size={18} style={{ color: 'var(--color-accent-gold)' }} />
        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>
          Planetary Positions & Nakshatra Padas
        </h3>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-gold)', background: 'rgba(212, 175, 55, 0.08)', color: 'var(--color-accent-gold)' }}>
              <th style={{ padding: '10px 12px' }}>Celestial Body</th>
              <th style={{ padding: '10px 12px' }}>Sign (Rashi)</th>
              <th style={{ padding: '10px 12px' }}>Degree in Sign</th>
              <th style={{ padding: '10px 12px' }}>Nakshatra</th>
              <th style={{ padding: '10px 12px' }}>Pada</th>
              <th style={{ padding: '10px 12px' }}>House (Bhava)</th>
              <th style={{ padding: '10px 12px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((p, idx) => (
              <tr 
                key={p.key || idx} 
                style={{ borderBottom: '1px solid var(--color-border-subtle)', transition: 'background-color 150ms ease' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ padding: '10px 12px', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                  {p.name} {p.key === 'Ascendant' && <span style={{ fontSize: '0.725rem', color: 'var(--color-accent-gold)', marginLeft: '4px' }}>(Lagna)</span>}
                </td>
                <td style={{ padding: '10px 12px', color: 'var(--color-text-secondary)' }}>
                  {p.sign} <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>({p.sanskritSign})</span>
                </td>
                <td style={{ padding: '10px 12px', color: 'var(--color-accent-gold-hover)', fontFamily: 'monospace' }}>
                  {p.degreeFormatted}
                </td>
                <td style={{ padding: '10px 12px', color: 'var(--color-text-secondary)' }}>
                  {p.nakshatra}
                </td>
                <td style={{ padding: '10px 12px', color: 'var(--color-text-muted)' }}>
                  Pada {p.pada}
                </td>
                <td style={{ padding: '10px 12px', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                  {p.house}th House
                </td>
                <td style={{ padding: '10px 12px' }}>
                  {p.isRetrograde ? (
                    <span style={{ fontSize: '0.725rem', background: 'rgba(220, 53, 69, 0.2)', border: '1px solid #DC3545', color: '#FF6B6B', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                      Retrograde (R)
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.725rem', background: 'rgba(40, 167, 69, 0.15)', border: '1px solid #28A745', color: '#28A745', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                      Direct (D)
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
