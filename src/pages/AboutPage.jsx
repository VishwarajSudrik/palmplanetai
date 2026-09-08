import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { siteContent } from '../data/siteContent';
import { 
  Cpu, BookOpen, Award, Sparkles, Target, Eye, ArrowRight, ShieldCheck, 
  CheckCircle2, Calendar, Compass, Layers, Binary, Sun, Hand, Hash, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const { about, founder, visionMission } = siteContent;
  const [activeTab, setActiveTab] = useState('astrology');

  const disciplineDetails = {
    astrology: {
      title: 'Vedic Astrology (Jyotish)',
      icon: Sun,
      subtitle: 'Precision Planetary Mechanics & Dasha Timing',
      desc: 'Precision natal chart calculation, planetary Dasha period analysis, divisional Vargas, and transit (Gochara) timing for lifecycle decision clarity.',
      highlights: ['Planetary Dasha Cycles', 'Divisional Vargas Charts', 'Transit (Gochara) Timing']
    },
    palmistry: {
      title: 'Palmistry (Palmar Topology)',
      icon: Hand,
      subtitle: 'Physical Markings & Mount Topography',
      desc: 'Comprehensive palmar line geometry (Life, Head, Heart, Fate), secondary markings, and mount heights (Jupiter, Saturn, Sun, Mercury, Venus, Mars, Moon) for empirical cross-validation.',
      highlights: ['Line Topography & Geometry', 'Mount Elevation Analysis', 'Cross-Validation Markers']
    },
    facereading: {
      title: 'Face Reading (Physiognomy)',
      icon: Eye,
      subtitle: 'Structural Features & Archetypal Temperaments',
      desc: 'Analytic evaluation of facial structural features and expressions to cross-verify psychological archetypes and innate temperaments.',
      highlights: ['Facial Contour Mapping', 'Innate Temperament Tracing', 'Behavioral Archetypes']
    },
    gemology: {
      title: 'Gemology & Elemental Alignment',
      icon: Sparkles,
      subtitle: 'Frequency Resonance & Subtle Energy Balancing',
      desc: 'Scientific gem recommendation based on planetary elemental resonance to balance subtle energy frequencies without superstitious dogma.',
      highlights: ['Elemental Resonance', 'Refractive Index Science', 'Custom Planetary Balancing']
    }
  };

  const ActiveIcon = disciplineDetails[activeTab].icon;

  return (
    <>
      <SEOHead 
        title="About Prashant Moholkar & Palm Planet Research Centre"
        description="Learn about Prashant Moholkar, Mechanical Design Engineer (25+ yrs FEA) and Vedic Astrologer (12+ yrs), blending calculated precision with ancient wisdom."
        canonical="https://palmplanetai.in/about-us"
      />

      {/* Hero Showcase Section with Founder Portrait */}
      <section 
        style={{
          position: 'relative',
          paddingTop: 'clamp(1.25rem, 2.5vw, 2.25rem)',
          paddingBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
          background: 'radial-gradient(circle at 75% 25%, rgba(212, 175, 55, 0.15) 0%, rgba(17, 22, 34, 0.95) 50%, rgba(11, 14, 20, 1) 100%)',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border-subtle)'
        }}
      >
        {/* Background Ambient Glow Circles */}
        <div style={{ position: 'absolute', top: '-10%', right: '5%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(197, 160, 89, 0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left: Text Details */}
            <div className="animate-fade-in">
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid var(--color-border-gold)',
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.825rem',
                  color: 'var(--color-accent-gold)',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem'
                }}
              >
                <Cpu size={15} />
                <span>Founder & Principal Researcher</span>
              </div>

              <h1 className="display-title" style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
                {founder.name}
              </h1>

              <div style={{ fontSize: '1.05rem', color: 'var(--color-accent-gold-hover)', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} />
                <span>Mechanical Design Engineer (25+ Yrs FEA) & Vedic Astrologer (12+ Yrs)</span>
              </div>
              
              <p className="lead-text" style={{ marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                {founder.intro}
              </p>

              {/* Stat Metric Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div 
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)', 
                    border: '1px solid var(--color-border-gold)', 
                    padding: '1.25rem', 
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    transition: 'transform 200ms ease'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-gold)', fontWeight: '700', lineHeight: 1 }}>
                    25+ Years
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)', fontWeight: '600', marginTop: '6px' }}>
                    Mechanical Design & FEA
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    Finite Element Analysis Rigor
                  </div>
                </div>

                <div 
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(22, 29, 43, 0.9) 0%, rgba(13, 17, 24, 0.95) 100%)', 
                    border: '1px solid var(--color-border-gold)', 
                    padding: '1.25rem', 
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    transition: 'transform 200ms ease'
                  }}
                >
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent-gold)', fontWeight: '700', lineHeight: 1 }}>
                    12+ Years
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)', fontWeight: '600', marginTop: '6px' }}>
                    Vedic Astrology Research
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    Occult Cross-Validation
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/booking" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                  <Calendar size={18} />
                  <span>Book Predictive Consultation</span>
                </Link>
                <a href="#empirical-philosophy" className="btn btn-outline" style={{ padding: '0.9rem 1.75rem', fontSize: '0.95rem' }}>
                  <span>Read Empirical Story</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right: Modern Animated Portrait Card */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              
              {/* Glowing Outer Frame Container */}
              <div 
                style={{
                  position: 'relative',
                  width: 'clamp(300px, 38vw, 440px)',
                  height: 'clamp(350px, 44vw, 500px)',
                  background: 'linear-gradient(145deg, rgba(212, 175, 55, 0.22) 0%, rgba(22, 29, 43, 0.85) 60%, rgba(11, 14, 20, 0.95) 100%)',
                  borderRadius: '24px',
                  border: '1px solid var(--color-border-gold-strong)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.15)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                {/* Gold Radial Halo Light behind Portrait */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '15%',
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }} 
                />

                {/* Prashant Moholkar Portrait */}
                <img 
                  src="/Prashant_Moholkar1.1-removebg-preview.webp" 
                  alt="Prashant Moholkar — Founder & Principal Researcher" 
                  style={{
                    width: '92%',
                    maxHeight: '96%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.75))',
                    zIndex: 2,
                    animation: 'floatSlow 6s ease-in-out infinite'
                  }}
                />

                {/* Glassmorphic Badge Tag */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(11, 14, 20, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid var(--color-border-gold)',
                    padding: '12px 18px',
                    borderRadius: 'var(--radius-md)',
                    zIndex: 3,
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff', fontWeight: '700', letterSpacing: '-0.01em' }}>
                    Prashant Moholkar
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '600', marginTop: '2px' }}>
                    Calculated Precision + Ancient Wisdom
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Empirical Philosophy & Story */}
      <section id="empirical-philosophy" className="section-padding">
        <div className="container">
          <SectionHeader
            eyebrow="Spiritual & Professional Journey"
            title="Bridging Finite Element Analysis with Vedic Destiny"
            description="How 25+ years of mechanical engineering rigor inform an empirical, calculated approach to Vedic Astrology and occult sciences."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Story Card 1 */}
            <div 
              className="glass-card" 
              style={{ 
                background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.85) 0%, rgba(13, 17, 24, 0.95) 100%)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-accent-gold)', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '10px', borderRadius: '50%' }}>
                    <BookOpen size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                    Sacred Texts & Vedic Practice
                  </h3>
                </div>

                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                  {founder.story}
                </p>
              </div>

              <div style={{ paddingTop: '1.25rem', marginTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)', fontSize: '0.85rem', color: 'var(--color-accent-gold)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                <CheckCircle2 size={16} />
                <span>Studied Ancient Texts Under Recognized Lineages</span>
              </div>
            </div>

            {/* Story Card 2 */}
            <div 
              className="glass-card" 
              style={{ 
                background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.85) 0%, rgba(13, 17, 24, 0.95) 100%)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-accent-gold)', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '10px', borderRadius: '50%' }}>
                    <Award size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                    Empowerment & Client Intention
                  </h3>
                </div>

                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                  {founder.empowerment}
                </p>
              </div>

              <div style={{ paddingTop: '1.25rem', marginTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)', fontSize: '0.85rem', color: 'var(--color-accent-gold)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                <ShieldCheck size={16} />
                <span>Transparent & Non-Superstitious Ethics</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Interactive 4 Allied Disciplines Showcase */}
      <section className="section-padding section-bg-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Holistic Research Methodology"
            title="4 Allied Occult Disciplines"
            description="We synthesize multiple analytical frameworks to achieve maximum predictive accuracy."
          />

          {/* Interactive Tab Switcher */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '12px', 
              justifyContent: 'center', 
              marginBottom: '3rem' 
            }}
          >
            {[
              { id: 'astrology', label: 'Vedic Astrology', icon: Sun },
              { id: 'palmistry', label: 'Palmistry', icon: Hand },
              { id: 'facereading', label: 'Face Reading', icon: Eye },
              { id: 'gemology', label: 'Gemology', icon: Sparkles }
            ].map(tab => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--color-accent-gold)' : 'var(--color-border-subtle)',
                    background: isSelected ? 'linear-gradient(135deg, var(--color-accent-gold) 0%, var(--color-accent-bronze) 100%)' : 'rgba(255, 255, 255, 0.03)',
                    color: isSelected ? '#0B0E14' : 'var(--color-text-secondary)',
                    fontWeight: '700',
                    fontSize: '0.925rem',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    boxShadow: isSelected ? '0 6px 20px rgba(212, 175, 55, 0.3)' : 'none'
                  }}
                >
                  <TabIcon size={17} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Discipline Content Panel */}
          <div 
            className="glass-card animate-fade-in" 
            style={{ 
              maxWidth: '860px', 
              marginInline: 'auto', 
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              border: '1px solid var(--color-border-gold-strong)',
              background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.95) 0%, rgba(13, 17, 24, 0.98) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div 
                style={{ 
                  background: 'rgba(212, 175, 55, 0.15)', 
                  border: '1px solid var(--color-border-gold)',
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--color-accent-gold)',
                  flexShrink: 0 
                }}
              >
                <ActiveIcon size={30} />
              </div>

              <div>
                <span className="eyebrow" style={{ marginBottom: '2px' }}>{disciplineDetails[activeTab].subtitle}</span>
                <h3 className="h2-title" style={{ fontSize: '1.85rem', margin: 0, color: 'var(--color-text-primary)' }}>
                  {disciplineDetails[activeTab].title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              {disciplineDetails[activeTab].desc}
            </p>

            {/* Sub-highlights List */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-accent-gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Key Analytical Indicators:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                {disciplineDetails[activeTab].highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/services" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                <span>Explore Associated Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Vision & Mission Cards */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            eyebrow="Institutional Foundation"
            title="Our Vision & Strategic Mission"
            description="Pioneering analytical standards in occult sciences through empirical research and client confidentiality."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Vision Card */}
            <div 
              className="glass-card"
              style={{
                background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.88) 0%, rgba(13, 17, 24, 0.98) 100%)',
                border: '1px solid var(--color-border-gold)',
                padding: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '12px', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                  <Eye size={24} />
                </div>
                <span className="eyebrow" style={{ margin: 0 }}>Long-Term Vision</span>
              </div>

              <h3 className="h2-title" style={{ fontSize: '1.85rem', marginBottom: '1.25rem' }}>
                {visionMission.vision.title}
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.8', fontStyle: 'italic' }}>
                "{visionMission.vision.text}"
              </p>
            </div>

            {/* Mission Card */}
            <div 
              className="glass-card"
              style={{
                background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.88) 0%, rgba(13, 17, 24, 0.98) 100%)',
                border: '1px solid var(--color-border-gold)',
                padding: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '12px', borderRadius: '50%', color: 'var(--color-accent-gold)' }}>
                  <Target size={24} />
                </div>
                <span className="eyebrow" style={{ margin: 0 }}>Action & Purpose</span>
              </div>

              <h3 className="h2-title" style={{ fontSize: '1.85rem', marginBottom: '1.25rem' }}>
                {visionMission.mission.title}
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.8', fontStyle: 'italic' }}>
                "{visionMission.mission.text}"
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Bottom CTA Banner */}
      <section className="section-padding section-bg-alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div 
            className="glass-card" 
            style={{ 
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              border: '1px solid var(--color-border-gold-strong)',
              background: 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.18) 0%, rgba(22, 29, 43, 0.95) 70%)' 
            }}
          >
            <span className="eyebrow">Ready for Calculated Clarity?</span>
            <h2 className="h2-title" style={{ marginTop: '0.4rem', marginBottom: '1rem' }}>
              Schedule Your Predictive Consultation
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
              Experience empirical cross-validation through Palmistry, Horoscope, and Vedic Numerology. Available via Virtual Meetings or In-Person at our Pune Office.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/booking" className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                <Calendar size={18} />
                <span>Book Appointment Now</span>
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '0.9rem 1.75rem', fontSize: '0.95rem' }}>
                <MessageSquare size={16} />
                <span>Contact Research Centre</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Keyframe CSS */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
};

