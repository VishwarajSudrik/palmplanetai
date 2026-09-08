import React, { useState } from 'react';
import { servicesList, serviceCategories } from '../../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailModal } from './ServiceDetailModal';

export const ServiceGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalService, setActiveModalService] = useState(null);

  const filteredServices = selectedCategory === 'all'
    ? servicesList
    : servicesList.filter((s) => s.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}
      >
        <button
          onClick={() => setSelectedCategory('all')}
          style={{
            padding: '8px 20px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid',
            borderColor: selectedCategory === 'all' ? 'var(--color-accent-gold)' : 'var(--color-border-subtle)',
            background: selectedCategory === 'all' ? 'var(--color-accent-gold)' : 'rgba(255, 255, 255, 0.03)',
            color: selectedCategory === 'all' ? '#000' : 'var(--color-text-secondary)',
            fontWeight: '600',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'all 200ms ease'
          }}
        >
          All 16 Service Areas ({servicesList.length})
        </button>

        {serviceCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid',
              borderColor: selectedCategory === cat.id ? 'var(--color-accent-gold)' : 'var(--color-border-subtle)',
              background: selectedCategory === cat.id ? 'var(--color-accent-gold)' : 'rgba(255, 255, 255, 0.03)',
              color: selectedCategory === cat.id ? '#000' : 'var(--color-text-secondary)',
              fontWeight: '600',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 200ms ease'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid-3">
        {filteredServices.map((service) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onSelect={(s) => setActiveModalService(s)} 
          />
        ))}
      </div>

      {/* Interactive Service Detail Modal */}
      {activeModalService && (
        <ServiceDetailModal 
          service={activeModalService} 
          onClose={() => setActiveModalService(null)} 
        />
      )}
    </div>
  );
};
