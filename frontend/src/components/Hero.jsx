import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    color: '#fff',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <section id="home" style={heroStyle}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '4rem', marginBottom: '1rem', color: '#fff' }}
        >
          Experience Authentic Indian Flavors
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}
        >
          Aromatic spices, freshly brewed masala chai, and rich Indian flavors. Your culinary journey awaits at Masala Haven.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          <a href="#services" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>View Menu</a>
          <a href="#booking" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', color: '#fff', borderColor: '#fff' }}>Book a Table</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
