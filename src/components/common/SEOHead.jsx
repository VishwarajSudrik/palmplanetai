import { useEffect } from 'react';

export const SEOHead = ({ title, description, canonical }) => {
  useEffect(() => {
    // Update Title
    const fullTitle = title 
      ? `${title} | Palm Planet Research Centre`
      : 'Palm Planet Research Centre | Empirical Astrology & Palmistry';
    document.title = fullTitle;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content', 
        description || "Palm Planet Research Centre combines Vedic Astrology, Palmistry (lines & mounts), and Vedic Numerology for predictive cross-validation and empirical research insights."
      );
    }

    // Update Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical || 'https://palmplanetai.in/');
    }
  }, [title, description, canonical]);

  return null;
};
