import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { servicesList } from '../../data/servicesData';
import { contactInfo } from '../../data/navigationData';
import { 
  Calendar, Clock, MapPin, Camera, CheckCircle, Info, Send, User, Mail, Phone, 
  FileText, ShieldCheck, Sparkles, MessageSquare, Upload, X, FileImage, Check 
} from 'lucide-react';

export const AppointmentForm = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceId: location.state?.selectedServiceId || servicesList[0].id,
    meetingType: 'Virtual (Zoom / Google Meet)',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    ruralAreaDetails: '',
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM',
    notes: '',
    handPhotoStatus: false
  });

  // Separate file upload state for each of the 4 required hand photo slots
  const [photoSlots, setPhotoSlots] = useState({
    slot1: null, // Left Hand — Front
    slot2: null, // Right Hand — Front
    slot3: null, // Left Hand — Back
    slot4: null  // Right Hand — Back
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (location.state?.selectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: location.state.selectedServiceId }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSlotFileUpload = (slotKey, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileData = {
      name: file.name,
      size: (file.size / 1024).toFixed(1) + ' KB',
      preview: URL.createObjectURL(file)
    };

    setPhotoSlots(prev => {
      const updated = { ...prev, [slotKey]: fileData };
      setFormData(f => ({ ...f, handPhotoStatus: true }));
      return updated;
    });
  };

  const handleRemoveSlotFile = (slotKey) => {
    setPhotoSlots(prev => ({ ...prev, [slotKey]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'PPRC-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
  };

  const selectedService = servicesList.find(s => s.id === formData.serviceId) || servicesList[0];

  const uploadedCount = Object.values(photoSlots).filter(Boolean).length;

  // Pre-filled WhatsApp message URL
  const whatsappMessage = encodeURIComponent(
    `Hello Palm Planet Research Centre,\n\nI have submitted a consultation request.\n` +
    `Ref ID: ${refId}\n` +
    `Name: ${formData.fullName}\n` +
    `Service: ${selectedService.title}\n` +
    `Date: ${formData.preferredDate}\n` +
    `Format: ${formData.meetingType}\n` +
    `Hand Photos Uploaded: ${uploadedCount}/4 slots filled`
  );

  const whatsappUrl = `https://wa.me/919665153661?text=${whatsappMessage}`;

  const slotDefinitions = [
    { key: 'slot1', num: '1', title: 'Left Hand — Front', detail: 'Palms & Wrist lines clearly visible' },
    { key: 'slot2', num: '2', title: 'Right Hand — Front', detail: 'Palms & Wrist lines clearly visible' },
    { key: 'slot3', num: '3', title: 'Left Hand — Back', detail: 'Back view & finger knuckles' },
    { key: 'slot4', num: '4', title: 'Right Hand — Back', detail: 'Back view & finger knuckles' }
  ];

  if (submitted) {
    return (
      <div 
        className="glass-card animate-fade-in" 
        style={{ 
          maxWidth: '740px', 
          marginInline: 'auto', 
          textAlign: 'center', 
          padding: 'clamp(1.5rem, 5vw, 3.5rem)',
          border: '1px solid var(--color-accent-gold)',
          background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.95) 0%, rgba(13, 17, 24, 0.98) 100%)'
        }}
      >
        <div 
          style={{ 
            background: 'rgba(212, 175, 55, 0.15)', 
            border: '1px solid var(--color-border-gold)',
            width: '68px', 
            height: '68px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginInline: 'auto', 
            marginBottom: '1.25rem', 
            color: 'var(--color-accent-gold)' 
          }}
        >
          <CheckCircle size={38} />
        </div>

        <span className="eyebrow" style={{ marginBottom: '0.4rem' }}>Booking Request Confirmed</span>
        <h2 className="h2-title" style={{ marginBottom: '0.75rem' }}>
          Consultation Request Submitted
        </h2>

        <div style={{ display: 'inline-block', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--color-border-gold)', padding: '6px 18px', borderRadius: 'var(--radius-full)', fontSize: '0.9rem', color: 'var(--color-accent-gold)', fontWeight: '700', marginBottom: '1.5rem' }}>
          Reference ID: {refId}
        </div>

        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.75rem', lineHeight: '1.7', maxWidth: '600px', marginInline: 'auto' }}>
          Thank you, <strong>{formData.fullName}</strong>. Your consultation request for <strong>{selectedService.title}</strong> on <strong>{formData.preferredDate}</strong> has been logged.
        </p>

        {/* Uploaded Separate Slots Summary */}
        <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid var(--color-border-gold)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', textAlign: 'left' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-accent-gold)', marginBottom: '10px' }}>
            Separate Hand Photo Slot Submissions ({uploadedCount}/4 Uploaded):
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
            {slotDefinitions.map(slot => (
              <div key={slot.key} style={{ background: 'rgba(0,0,0,0.4)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                <div style={{ color: 'var(--color-accent-gold)', fontWeight: '600' }}>Photo 0{slot.num}: {slot.title}</div>
                {photoSlots[slot.key] ? (
                  <div style={{ color: '#28A745', marginTop: '2px', fontWeight: '500' }}>✓ {photoSlots[slot.key].name}</div>
                ) : (
                  <div style={{ color: 'var(--color-text-muted)', marginTop: '2px' }}>Pending email/WhatsApp send</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Options */}
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border-subtle)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--color-accent-gold)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Camera size={18} />
            <span>Consultation Preparation Checklist:</span>
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            Our research team will review your birth parameters and hand photos prior to the consultation.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <MessageSquare size={15} />
              <span>Send Ref via WhatsApp</span>
            </a>

            <a 
              href={`mailto:${contactInfo.emails[0]}?subject=Consultation%20Ref%20${refId}%20-${encodeURIComponent(formData.fullName)}`} 
              className="btn btn-outline"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <Mail size={15} />
              <span>Email {contactInfo.emails[0]}</span>
            </a>
          </div>
        </div>

        <button onClick={() => { setSubmitted(false); setPhotoSlots({ slot1: null, slot2: null, slot3: null, slot4: null }); }} className="btn btn-outline" style={{ opacity: 0.8 }}>
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div 
      className="glass-card animate-fade-in" 
      style={{ 
        maxWidth: '920px', 
        marginInline: 'auto',
        background: 'linear-gradient(145deg, rgba(22, 29, 43, 0.92) 0%, rgba(13, 17, 24, 0.97) 100%)',
        border: '1px solid var(--color-border-gold)',
        padding: 'clamp(1.25rem, 4vw, 2.75rem)'
      }}
    >
      {/* Form Header */}
      <div style={{ borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1.25rem', marginBottom: '2rem', textAlign: 'center' }}>
        <span className="eyebrow">Predictive Consultation Form</span>
        <h2 className="h2-title" style={{ marginTop: '0.3rem', marginBottom: '0.5rem' }}>
          Consultation Booking & Data Submission
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', maxWidth: '640px', marginInline: 'auto' }}>
          Provide birth parameters for Horoscope charts and upload separate hand photos for Palmistry cross-validation.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        
        {/* Step 1: Personal & Contact Information */}
        <div style={{ marginBottom: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: '700', color: '#000', background: 'var(--color-accent-gold)', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              01
            </span>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>
              Personal & Contact Information
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Full Legal Name *</label>
              <input 
                id="fullName" 
                name="fullName" 
                type="text" 
                required 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="e.g. Rahul Sharma"
                className="form-input" 
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="name@example.com"
                className="form-input" 
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
              <input 
                id="phone" 
                name="phone" 
                type="tel" 
                required 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+91 9876543210"
                className="form-input" 
              />
            </div>
          </div>
        </div>

        {/* Step 2: Horoscope Birth Parameters */}
        <div 
          style={{ 
            marginBottom: '2.25rem', 
            background: 'rgba(255, 255, 255, 0.02)', 
            padding: '1.25rem', 
            borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--color-border-subtle)' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: '700', color: '#000', background: 'var(--color-accent-gold)', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              02
            </span>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                Birth Details (For Horoscope Analysis)
              </h3>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                Required to calculate planetary Dasha periods & divisional charts.
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="birthDate">Date of Birth *</label>
              <input 
                id="birthDate" 
                name="birthDate" 
                type="date" 
                required 
                value={formData.birthDate} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="birthTime">Time of Birth *</label>
              <input 
                id="birthTime" 
                name="birthTime" 
                type="time" 
                required 
                value={formData.birthTime} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="birthPlace">Place of Birth (City / Town) *</label>
              <input 
                id="birthPlace" 
                name="birthPlace" 
                type="text" 
                required 
                value={formData.birthPlace} 
                onChange={handleChange} 
                placeholder="e.g. Pune, Maharashtra"
                className="form-input" 
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="ruralAreaDetails">
              If born in a Rural Area, specify nearest prominent city/district
            </label>
            <input 
              id="ruralAreaDetails" 
              name="ruralAreaDetails" 
              type="text" 
              value={formData.ruralAreaDetails} 
              onChange={handleChange} 
              placeholder="e.g. Village X, near Satara district"
              className="form-input" 
            />
          </div>
        </div>

        {/* Step 3: 4 SEPARATE File Upload Choosers in 2x2 Grid (2 Above, 2 Below) */}
        <div 
          style={{ 
            marginBottom: '2.25rem', 
            background: 'rgba(212, 175, 55, 0.05)', 
            padding: '1.25rem', 
            borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--color-border-gold)' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: '700', color: '#000', background: 'var(--color-accent-gold)', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              03
            </span>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                Separate Hand Photo Upload Options (Palmistry)
              </h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginTop: '2px', marginBottom: 0 }}>
                Upload an individual high-resolution photo for each of the 4 required hand views (2 above, 2 below).
              </p>
            </div>
          </div>

          {/* 2x2 Grid Container (2 Options Above, 2 Options Below) */}
          <div className="photo-slots-grid-2x2">
            {slotDefinitions.map(slot => {
              const fileData = photoSlots[slot.key];
              return (
                <div 
                  key={slot.key} 
                  style={{ 
                    background: fileData ? 'rgba(40, 167, 69, 0.08)' : 'rgba(11, 14, 20, 0.8)', 
                    border: '1px solid', 
                    borderColor: fileData ? 'var(--color-success)' : 'var(--color-border-gold)', 
                    padding: '14px', 
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    position: 'relative',
                    transition: 'all 200ms ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.725rem', color: 'var(--color-accent-gold)', fontWeight: '700', textTransform: 'uppercase' }}>
                        Photo 0{slot.num}
                      </span>
                      {fileData && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#28A745', fontWeight: '600' }}>
                          <Check size={14} />
                          Uploaded
                        </span>
                      )}
                    </div>

                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                      {slot.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                      {slot.detail}
                    </div>
                  </div>

                  {/* File Chooser Input for this Slot */}
                  {fileData ? (
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '8px 10px', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden' }}>
                        <FileImage size={14} style={{ color: '#28A745', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.78rem', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {fileData.name}
                        </span>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => handleRemoveSlotFile(slot.key)}
                        aria-label={`Remove photo for ${slot.title}`}
                        style={{ background: 'none', border: 'none', color: '#DC3545', cursor: 'pointer', display: 'flex', padding: '2px' }}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="file" 
                        id={`file-${slot.key}`} 
                        accept="image/*" 
                        onChange={(e) => handleSlotFileUpload(slot.key, e)} 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          opacity: 0,
                          cursor: 'pointer',
                          width: '100%',
                          height: '100%',
                          zIndex: 5
                        }}
                      />
                      <button 
                        type="button" 
                        className="btn btn-outline" 
                        style={{ width: '100%', padding: '7px 12px', fontSize: '0.8rem', gap: '6px', justifyContent: 'center' }}
                      >
                        <Upload size={14} />
                        <span>Choose Photo 0{slot.num}</span>
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--color-text-primary)', cursor: 'pointer', background: 'rgba(0,0,0,0.3)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
            <input 
              type="checkbox" 
              name="handPhotoStatus" 
              required
              checked={formData.handPhotoStatus} 
              onChange={handleChange} 
              style={{ accentColor: 'var(--color-accent-gold)', width: '16px', height: '16px', cursor: 'pointer' }}
            />
            <span>I acknowledge that I must upload or send these 4 separate hand photos 24h prior to the meeting. *</span>
          </label>
        </div>

        {/* Step 4: Service & Meeting Schedule Selection */}
        <div style={{ marginBottom: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: '700', color: '#000', background: 'var(--color-accent-gold)', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              04
            </span>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>
              Consultation Service & Preferences
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="serviceId">Select Primary Service Focus *</label>
              <select 
                id="serviceId" 
                name="serviceId" 
                value={formData.serviceId} 
                onChange={handleChange} 
                className="form-select"
              >
                {servicesList.map(s => (
                  <option key={s.id} value={s.id} style={{ background: '#161D2B', color: '#fff' }}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="meetingType">Preferred Meeting Format *</label>
              <select 
                id="meetingType" 
                name="meetingType" 
                value={formData.meetingType} 
                onChange={handleChange} 
                className="form-select"
              >
                <option value="Virtual (Zoom / Google Meet)" style={{ background: '#161D2B', color: '#fff' }}>Virtual Meeting (Zoom / Meet)</option>
                <option value="Personal Meeting (Pune Office)" style={{ background: '#161D2B', color: '#fff' }}>In-Person Meeting (Pune Office)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="preferredDate">Preferred Appointment Date *</label>
              <input 
                id="preferredDate" 
                name="preferredDate" 
                type="date" 
                required 
                value={formData.preferredDate} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
          <Send size={18} />
          <span>Submit Consultation Request</span>
        </button>

      </form>

      {/* 2x2 Grid CSS Styles */}
      <style>{`
        .photo-slots-grid-2x2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 1.25rem;
        }
        @media (max-width: 580px) {
          .photo-slots-grid-2x2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
