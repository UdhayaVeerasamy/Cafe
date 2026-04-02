import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80" 
            alt="Barista making coffee" 
            style={{ borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{ left: 0, transform: 'none', textAlign: 'left', marginBottom: '2rem' }}>Our Story</h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-muted)' }} className="dark-mode-text">
            Founded in 2018, Masala Haven began with a simple mission: to bring the authentic taste of Indian street food and aromatic teas to our community. 
            We believe that every dish tells a story, from the vibrant markets of India to the skilled chefs who craft your meal.
          </p>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--color-text-muted)' }} className="dark-mode-text">
            Our interior is designed to be your second home—a place to work, relax, and connect over exceptional masala chai and traditional snacks prepared fresh daily.
          </p>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Coffee size={32} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ margin: 0 }}>Authentic Spices</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Award size={32} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ margin: 0 }}>Traditional Recipes</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Users size={32} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ margin: 0 }}>Community</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
