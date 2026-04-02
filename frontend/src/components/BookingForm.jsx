import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', guests: 2, message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      // Connect to the actual backend API
      const res = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Thanks! Your booking is confirmed.');
        setFormData({ name: '', email: '', phone: '', date: '', guests: 2, message: '' });
      } else {
        setStatus('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Server error. Could not connect to API.');
    }
  };

  const inputStyle = {
    width: '100%', padding: '0.75rem', marginBottom: '1rem',
    borderRadius: '8px', border: '1px solid #ccc',
    fontFamily: 'inherit', fontSize: '1rem'
  };

  return (
    <section id="booking" style={{ padding: '3rem 2rem', backgroundColor: 'var(--color-secondary)' }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      >
        <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1.5rem', fontSize: '2rem' }}>Book a Table</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input style={inputStyle} type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input style={inputStyle} type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input style={inputStyle} type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <input style={inputStyle} type="number" name="guests" min="1" max="20" placeholder="Guests" value={formData.guests} onChange={handleChange} required />
          </div>
          <input style={inputStyle} type="date" name="date" value={formData.date} onChange={handleChange} required />
          <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} name="message" placeholder="Special Requests or Message" value={formData.message} onChange={handleChange}></textarea>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>Submit Booking</button>
          {status && <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 600, color: 'var(--color-primary-dark)' }}>{status}</p>}
        </form>
      </motion.div>
    </section>
  );
};

export default BookingForm;
