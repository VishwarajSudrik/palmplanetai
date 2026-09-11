import React, { useState } from 'react';
import { LayoutGrid, Compass, Layers } from 'lucide-react';

export const ChartRenderer = ({ chartData, defaultChartType = 'D1', title = "Vedic Natal Kundli" }) => {
  const [chartStyle, setChartStyle] = useState('North'); // 'North' or 'South'
  const [chartType, setChartType] = useState(defaultChartType); // 'D1', 'D9', 'D10'

  if (!chartData) return null;

  const currentChartHouses = chartType === 'D9' 
    ? chartData.d9Chart 
    : chartType === 'D10' 
    ? chartData.d10Chart 
    : chartData.d1Chart;

  const getPlanetAbbr = (name) => {
    switch (name) {
      case 'Ascendant': return 'Lagna';
      case 'Sun': return 'Su';
      case 'Moon': return 'Mo';
      case 'Mars': return 'Ma';
      case 'Mercury': return 'Me';
      case 'Jupiter': return 'Ju';
      case 'Venus': return 'Ve';
      case 'Saturn': return 'Sa';
      case 'Rahu': return 'Ra';
      case 'Ketu': return 'Ke';
      default: return name.substring(0, 2);
    }
  };

  // Helper to format house contents for North Indian diamond positions
  const getHouseData = (houseNum) => {
    return currentChartHouses.find(h => h.house === houseNum) || { signId: houseNum, planets: [] };
  };

  return (
    <div className="glass-card" style={{ background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)', border: '1px solid var(--color-border-gold)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
      {/* Controls Bar: North/South Toggler + D1/D9/D10 Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.85rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', margin: 0, fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={18} style={{ color: 'var(--color-accent-gold)' }} />
            <span>{title} ({chartType} Chart)</span>
          </h3>
          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
            {chartStyle} Indian Format • {chartType === 'D1' ? 'Main Rashi Chart' : chartType === 'D9' ? 'Navamsa (D9) Chart' : 'Dashamsha (D10) Career Chart'}
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          {/* Chart Type Tabs */}
          <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.04)', padding: '3px', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border-subtle)' }}>
            {['D1', 'D9', 'D10'].map(type => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: chartType === type ? 'var(--color-accent-gold)' : 'transparent',
                  color: chartType === type ? '#000' : 'var(--color-text-muted)',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 150ms ease'
                }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* North vs South Style Toggler */}
          <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.04)', padding: '3px', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border-subtle)' }}>
            {['North', 'South'].map(style => (
              <button
                key={style}
                onClick={() => setChartStyle(style)}
                style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: chartStyle === style ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                  color: chartStyle === style ? 'var(--color-accent-gold)' : 'var(--color-text-muted)',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 150ms ease'
                }}
              >
                {style} Indian
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Render North Indian Diamond SVG Chart */}
      {chartStyle === 'North' ? (
        <div style={{ position: 'relative', width: '100%', maxWidth: '480px', marginInline: 'auto', aspectRatio: '1/1', background: 'rgba(11, 14, 20, 0.9)', border: '2px solid var(--color-border-gold)', borderRadius: 'var(--radius-md)', padding: '8px', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)' }}>
          <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
            {/* Outer Square */}
            <rect x="10" y="10" width="380" height="380" fill="none" stroke="var(--color-border-gold)" strokeWidth="2" />
            
            {/* Main Inner Diamonds */}
            <line x1="200" y1="10" x2="390" y2="200" stroke="var(--color-border-gold)" strokeWidth="1.5" />
            <line x1="390" y1="200" x2="200" y2="390" stroke="var(--color-border-gold)" strokeWidth="1.5" />
            <line x1="200" y1="390" x2="10" y2="200" stroke="var(--color-border-gold)" strokeWidth="1.5" />
            <line x1="10" y1="200" x2="200" y2="10" stroke="var(--color-border-gold)" strokeWidth="1.5" />

            {/* Inner Diagonals */}
            <line x1="10" y1="10" x2="390" y2="390" stroke="var(--color-border-gold)" strokeWidth="1.5" />
            <line x1="390" y1="10" x2="10" y2="390" stroke="var(--color-border-gold)" strokeWidth="1.5" />

            {/* House Numbers & Planets Labels */}
            {/* House 1 (Top Center Diamond) */}
            <text x="200" y="65" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="13" fontWeight="bold">
              {getHouseData(1).signId} (1st)
            </text>
            <text x="200" y="90" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="600">
              {getHouseData(1).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 2 (Top Left Triangle) */}
            <text x="95" y="45" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="12">
              {getHouseData(2).signId}
            </text>
            <text x="95" y="65" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(2).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 3 (Left Top Triangle) */}
            <text x="45" y="95" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="12">
              {getHouseData(3).signId}
            </text>
            <text x="45" y="115" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(3).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 4 (Left Center Diamond) */}
            <text x="65" y="200" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="13" fontWeight="bold">
              {getHouseData(4).signId}
            </text>
            <text x="90" y="200" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(4).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 5 (Left Bottom Triangle) */}
            <text x="45" y="305" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="12">
              {getHouseData(5).signId}
            </text>
            <text x="45" y="325" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(5).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 6 (Bottom Left Triangle) */}
            <text x="95" y="355" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="12">
              {getHouseData(6).signId}
            </text>
            <text x="95" y="375" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(6).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 7 (Bottom Center Diamond) */}
            <text x="200" y="335" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="13" fontWeight="bold">
              {getHouseData(7).signId}
            </text>
            <text x="200" y="310" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(7).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 8 (Bottom Right Triangle) */}
            <text x="305" y="355" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="12">
              {getHouseData(8).signId}
            </text>
            <text x="305" y="375" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(8).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 9 (Right Bottom Triangle) */}
            <text x="355" y="305" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="12">
              {getHouseData(9).signId}
            </text>
            <text x="355" y="325" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(9).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 10 (Right Center Diamond) */}
            <text x="335" y="200" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="13" fontWeight="bold">
              {getHouseData(10).signId}
            </text>
            <text x="310" y="200" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(10).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 11 (Right Top Triangle) */}
            <text x="355" y="95" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="12">
              {getHouseData(11).signId}
            </text>
            <text x="355" y="115" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(11).planets.map(getPlanetAbbr).join(', ')}
            </text>

            {/* House 12 (Top Right Triangle) */}
            <text x="305" y="45" textAnchor="middle" fill="var(--color-accent-gold)" fontSize="12">
              {getHouseData(12).signId}
            </text>
            <text x="305" y="65" textAnchor="middle" fill="#FFF" fontSize="11">
              {getHouseData(12).planets.map(getPlanetAbbr).join(', ')}
            </text>

          </svg>
        </div>
      ) : (
        /* Render South Indian Fixed 4x4 Grid Format */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', maxWidth: '480px', marginInline: 'auto', background: 'var(--color-border-gold)', padding: '4px', borderRadius: 'var(--radius-md)' }}>
          {[
            { sign: 'Pisces (12)', idx: 12 }, { sign: 'Aries (1)', idx: 1 }, { sign: 'Taurus (2)', idx: 2 }, { sign: 'Gemini (3)', idx: 3 },
            { sign: 'Aquarius (11)', idx: 11 }, { center: true, span: 2, rowSpan: 2 }, { sign: 'Cancer (4)', idx: 4 },
            { sign: 'Capricorn (10)', idx: 10 }, { sign: 'Leo (5)', idx: 5 },
            { sign: 'Sagittarius (9)', idx: 9 }, { sign: 'Scorpio (8)', idx: 8 }, { sign: 'Libra (7)', idx: 7 }, { sign: 'Virgo (6)', idx: 6 }
          ].map((box, i) => {
            if (box.center) {
              return (
                <div key={i} style={{ gridColumn: 'span 2', gridRow: 'span 2', background: '#0B0E14', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)', border: '1px solid var(--color-border-gold)', borderRadius: 'var(--radius-sm)', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700' }}>South Indian {chartType}</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--color-text-muted)' }}>Fixed Signs Layout</div>
                </div>
              );
            }

            const hData = currentChartHouses.find(h => h.signId === box.idx) || { planets: [] };
            return (
              <div key={i} style={{ background: 'rgba(11, 14, 20, 0.95)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '8px', minHeight: '90px', borderRadius: 'var(--radius-sm)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-accent-gold)', fontWeight: '700' }}>{box.sign}</div>
                <div style={{ fontSize: '0.8rem', color: '#FFF', fontWeight: '600' }}>
                  {hData.planets.map(getPlanetAbbr).join(', ') || '-'}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Legend Note */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '1.25rem', fontSize: '0.78rem', color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.75rem' }}>
        <span><strong>Su:</strong> Sun</span>
        <span><strong>Mo:</strong> Moon</span>
        <span><strong>Ma:</strong> Mars</span>
        <span><strong>Me:</strong> Mercury</span>
        <span><strong>Ju:</strong> Jupiter</span>
        <span><strong>Ve:</strong> Venus</span>
        <span><strong>Sa:</strong> Saturn</span>
        <span><strong>Ra:</strong> Rahu</span>
        <span><strong>Ke:</strong> Ketu</span>
        <span><strong>Lagna:</strong> Ascendant</span>
      </div>
    </div>
  );
};
