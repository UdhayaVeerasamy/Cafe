import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '3rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <h2 className="section-title" style={{ left: 0, transform: 'none', textAlign: 'left', marginBottom: '2rem' }}>Visit Us</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <MapPin size={24} color="var(--color-primary)" style={{ marginTop: '4px' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem 0' }}>Location</h4>
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }} className="dark-mode-text">123 Spice Lane, Coimbatore, Tamil Nadu</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <Phone size={24} color="var(--color-primary)" style={{ marginTop: '4px' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem 0' }}>Phone</h4>
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }} className="dark-mode-text">+91 9876543210</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <Mail size={24} color="var(--color-primary)" style={{ marginTop: '4px' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem 0' }}>Email</h4>
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }} className="dark-mode-text">hello@masalahaven.com</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <Clock size={24} color="var(--color-primary)" style={{ marginTop: '4px' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem 0' }}>Hours</h4>
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }} className="dark-mode-text">Mon - Fri: 7am - 7pm<br/>Sat - Sun: 8am - 8pm</p>
            </div>
          </div>
        </div>

        <a 
          href="https://wa.me/15551234567?text=Hi!%20I'd%20like%20to%20make%20an%20enquiry." 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
          style={{ backgroundColor: '#25D366', color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Chat on WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
