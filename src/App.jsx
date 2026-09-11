import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BookingPage } from './pages/BookingPage';
import { AstroBlogPage } from './pages/AstroBlogPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AstrologyDashboardPage } from './pages/astrology/AstrologyDashboardPage';
import { BirthDetailsPage } from './pages/astrology/BirthDetailsPage';
import { ReportSelectionPage } from './pages/astrology/ReportSelectionPage';
import { ReportViewerPage } from './pages/astrology/ReportViewerPage';
import { ReportHistoryPage } from './pages/astrology/ReportHistoryPage';
import { KundliMatchingPage } from './pages/astrology/KundliMatchingPage';
import { NumerologyPage } from './pages/astrology/NumerologyPage';
import { contactInfo } from './data/navigationData';

export default function App() {
  const schemaOrgJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Palm Planet Research Centre",
    "alternateName": "Palm Planet AI",
    "url": "https://palmplanetai.in/",
    "logo": "https://palmplanetai.in/wp-content/uploads/2025/05/Logo-Palmplanetai.webp",
    "telephone": contactInfo.phone,
    "email": contactInfo.emails[0],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "218/A, Manikjyoti Housing Society, Flat No 4, Parvatigaon",
      "addressLocality": "Pune",
      "postalCode": "411009",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Prashant Moholkar",
      "jobTitle": "Vedic Astrologer & Mechanical Design Engineer"
    },
    "description": "The Palm Planet Research Centre try to attain predictive accuracy through study & comparison of individual's horoscope with palm lines, mountains & Vedic Numerology analysis."
  };

  return (
    <Router>
      {/* Schema.org Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJson) }} 
      />

      <ScrollToTop />
      
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        
        <Navbar />
        
        <main id="main-content" style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/explore-services" element={<ServicesPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/astro-blog" element={<AstroBlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Astrology Report Generation Module Routes */}
            <Route path="/astrology" element={<AstrologyDashboardPage />} />
            <Route path="/astrology/birth-details" element={<BirthDetailsPage />} />
            <Route path="/astrology/select-report" element={<ReportSelectionPage />} />
            <Route path="/astrology/reports" element={<ReportHistoryPage />} />
            <Route path="/astrology/reports/:reportId" element={<ReportViewerPage />} />
            <Route path="/astrology/kundli-matching" element={<KundliMatchingPage />} />
            <Route path="/astrology/numerology" element={<NumerologyPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
