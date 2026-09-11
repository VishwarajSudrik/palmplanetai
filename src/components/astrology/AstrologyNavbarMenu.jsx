import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Sparkles, ChevronDown, Compass, FileSpreadsheet, Briefcase, 
  TrendingUp, Heart, GraduationCap, Activity, Building2, 
  Globe, Clock, ShieldAlert, Users, FolderClock 
} from 'lucide-react';

export const astrologyNavGroups = [
  {
    category: 'Core Reports',
    links: [
      { name: 'Kundli / Birth Chart', path: '/astrology/birth-details?report=kundli', icon: Compass, desc: 'D1 Rashi, D9 Navamsa' },
      { name: 'Complete Report', path: '/astrology/birth-details?report=complete-astrology', icon: FileSpreadsheet, desc: '360° Lifelong Forecast' }
    ]
  },
  {
    category: 'Life Domains',
    links: [
      { name: 'Career & Profession', path: '/astrology/birth-details?report=career', icon: Briefcase, desc: '10th House & D10 Dashamsha' },
      { name: 'Finance & Wealth', path: '/astrology/birth-details?report=finance', icon: TrendingUp, desc: '2nd, 11th House & Dhana Yogas' },
      { name: 'Marriage & Relation', path: '/astrology/birth-details?report=marriage', icon: Heart, desc: '7th House & Spouse Nature' },
      { name: 'Education & Studies', path: '/astrology/birth-details?report=education', icon: GraduationCap, desc: 'Intellect & Academic Streams' },
      { name: 'Health & Wellness', path: '/astrology/birth-details?report=health', icon: Activity, desc: 'Vitality & Preventative Care' },
      { name: 'Business Enterprise', path: '/astrology/birth-details?report=business', icon: Building2, desc: 'Trade & Entrepreneurial Path' }
    ]
  },
  {
    category: 'Specialized Analysis',
    links: [
      { name: 'Foreign Travel', path: '/astrology/birth-details?report=foreign-settlement', icon: Globe, desc: '9th & 12th House Relocation' },
      { name: 'Dasha & Predictions', path: '/astrology/birth-details?report=dasha', icon: Clock, desc: 'Vimshottari Dasha Cycles' },
      { name: 'Dosha & Remedies', path: '/astrology/birth-details?report=dosha', icon: ShieldAlert, desc: 'Manglik, Kaal Sarp & Sade Sati' }
    ]
  },
  {
    category: 'Matching & History',
    links: [
      { name: 'Kundli Matching (36 Guna)', path: '/astrology/kundli-matching', icon: Users, desc: 'Two-Person Ashtakoota Match' },
      { name: 'Vedic Numerology', path: '/astrology/numerology', icon: Sparkles, desc: 'Life Path & Sound Vibrations' },
      { name: 'Saved Reports History', path: '/astrology/reports', icon: FolderClock, desc: 'View & Download Saved PDFs' }
    ]
  }
];

export const AstrologyNavbarMenu = ({ isMobile = false, onItemClick, label = "MYReport" }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-primary)',
            fontSize: '1.35rem',
            fontFamily: 'var(--font-heading)',
            paddingBlock: '8px',
            borderBottom: '1px solid var(--color-border-subtle)',
            cursor: 'pointer',
            textAlign: 'left'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} style={{ color: 'var(--color-accent-gold)' }} />
            <span>{label}</span>
          </span>
          <ChevronDown 
            size={18} 
            style={{ 
              color: 'var(--color-accent-gold)', 
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
              transition: 'transform 200ms ease' 
            }} 
          />
        </button>

        {isOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingLeft: '1rem', paddingTop: '0.85rem', paddingBottom: '0.85rem', borderLeft: '2px solid var(--color-border-gold)' }}>
            <NavLink
              to="/astrology"
              onClick={onItemClick}
              style={{ color: 'var(--color-accent-gold)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '600' }}
            >
              ★ Astrology Dashboard
            </NavLink>
            {astrologyNavGroups.map(group => (
              <div key={group.category}>
                <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent-gold)', marginBottom: '4px', fontWeight: '700' }}>
                  {group.category}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {group.links.map(link => {
                    const Icon = link.icon;
                    return (
                      <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={onItemClick}
                        style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <Icon size={14} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                        <span>{link.name}</span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Single-View Compact Desktop Mega Menu
  return (
    <div 
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        to="/astrology"
        style={({ isActive }) => ({
          color: isActive || isOpen ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
          textDecoration: 'none',
          fontSize: '0.925rem',
          fontWeight: isActive || isOpen ? '600' : '500',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          paddingBlock: '6px',
          transition: 'color var(--transition-fast)'
        })}
      >
        <Sparkles size={15} style={{ color: 'var(--color-accent-gold)' }} />
        <span>{label}</span>
        <ChevronDown 
          size={14} 
          style={{ 
            color: 'var(--color-accent-gold)', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 200ms ease' 
          }} 
        />
      </NavLink>

      {/* Single-View 4-Column Dropdown Mega Menu Panel */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '-260px',
            width: '920px',
            background: 'linear-gradient(145deg, rgba(17, 22, 34, 0.98) 0%, rgba(11, 14, 20, 0.99) 100%)',
            border: '1px solid var(--color-border-gold-strong)',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
            padding: '1rem 1.25rem',
            zIndex: 2000,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            animation: 'fadeIn 200ms ease-out'
          }}
        >
          {astrologyNavGroups.map((group) => (
            <div key={group.category} style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.725rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent-gold)', marginBottom: '8px', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '4px' }}>
                {group.category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                {group.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        textDecoration: 'none',
                        color: isActive ? 'var(--color-accent-gold-hover)' : 'var(--color-text-primary)',
                        padding: '4px 6px',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'all 150ms ease',
                        backgroundColor: 'transparent'
                      })}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.12)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Icon size={14} style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '3px' }} />
                      <div>
                        <div style={{ fontSize: '0.825rem', fontWeight: '600', lineHeight: '1.2' }}>{link.name}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '1px' }}>{link.desc}</div>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Single-View Bottom Quick Strip */}
          <div style={{ gridColumn: 'span 4', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
            <span>Empirical Vedic Astrological Calculation Engine</span>
            <NavLink to="/astrology" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-accent-gold)', fontWeight: '600', textDecoration: 'none' }}>
              Explore Astrology Dashboard →
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
