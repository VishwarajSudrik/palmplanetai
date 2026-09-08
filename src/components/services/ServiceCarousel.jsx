import React, { useState, useEffect, useRef } from 'react';
import { servicesList, serviceCategories } from '../../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export const ServiceCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalService, setActiveModalService] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const carouselRef = useRef(null);

  const filteredServices = selectedCategory === 'all'
    ? servicesList
    : servicesList.filter((s) => s.category === selectedCategory);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredServices.length - itemsPerPage);

  // Reset index when category changes
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Autoplay effect
  useEffect(() => {
    if (!isAutoplay || activeModalService) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoplay, maxIndex, activeModalService]);

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Category Filter Pills + Controls Bar */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          marginBottom: '2.25rem',
          textAlign: 'center'
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          <button
            onClick={() => handleCategoryChange('all')}
            style={{
              padding: '7px 18px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid',
              borderColor: selectedCategory === 'all' ? 'var(--color-accent-gold)' : 'var(--color-border-subtle)',
              background: selectedCategory === 'all' ? 'var(--color-accent-gold)' : 'rgba(255, 255, 255, 0.03)',
              color: selectedCategory === 'all' ? '#000' : 'var(--color-text-secondary)',
              fontWeight: '600',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 200ms ease'
            }}
          >
            All Services ({servicesList.length})
          </button>

          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              style={{
                padding: '7px 18px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? 'var(--color-accent-gold)' : 'var(--color-border-subtle)',
                background: selectedCategory === cat.id ? 'var(--color-accent-gold)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedCategory === cat.id ? '#000' : 'var(--color-text-secondary)',
                fontWeight: '600',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 200ms ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carousel Arrow Navigation Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            aria-label={isAutoplay ? "Pause slider autoplay" : "Start slider autoplay"}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-muted)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title={isAutoplay ? "Pause Autoplay" : "Enable Autoplay"}
          >
            {isAutoplay ? <Pause size={15} /> : <Play size={15} />}
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous services slide"
            style={{
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid var(--color-border-gold)',
              color: 'var(--color-accent-gold)',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-accent-gold)';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              e.currentTarget.style.color = 'var(--color-accent-gold)';
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next services slide"
            style={{
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid var(--color-border-gold)',
              color: 'var(--color-accent-gold)',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-accent-gold)';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              e.currentTarget.style.color = 'var(--color-accent-gold)';
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Sliding Cards Track Window */}
      <div 
        style={{ overflow: 'hidden', paddingBlock: '8px', marginInline: '-4px' }}
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
      >
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            transition: 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              style={{
                flex: `0 0 ${100 / itemsPerPage}%`,
                paddingInline: '8px',
                boxSizing: 'border-box'
              }}
            >
              <ServiceCard 
                service={service} 
                onSelect={(s) => setActiveModalService(s)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slide Dots Indicator Bar */}
      <div 
        style={{
          display: 'flex',
          justify: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '2rem'
        }}
      >
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: currentIndex === idx ? '28px' : '8px',
              height: '8px',
              borderRadius: 'var(--radius-full)',
              background: currentIndex === idx ? 'var(--color-accent-gold)' : 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 300ms ease'
            }}
          />
        ))}
      </div>

      {/* Interactive Detail Modal Trigger */}
      {activeModalService && (
        <ServiceDetailModal 
          service={activeModalService} 
          onClose={() => setActiveModalService(null)} 
        />
      )}
    </div>
  );
};
