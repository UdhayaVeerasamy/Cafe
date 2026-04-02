import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const menuItems = [
    { name: 'Masala Chai', description: 'Authentic spiced milk tea', price: '₹70.00' },
    { name: 'Filter Coffee', description: 'Traditional South Indian frothy coffee', price: '₹50.00' },
    { name: 'Mango Lassi', description: 'Sweet and creamy yogurt-based mango drink', price: '₹150.00' },
    { name: 'Rose Milk', description: 'Refreshing milk sweetened with rose syrup', price: '₹120.00' },
    { name: 'Turmeric Latte', description: 'Golden milk with healing spices', price: '₹130.00' },
    { name: 'Nimbu Pani', description: 'Fresh Indian-style sparkling lemonade', price: '₹80.00' }
  ];

  const pastries = [
    { name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes and peas', price: '₹100.00' },
    { name: 'Vada Pav', description: 'Spicy potato dumpling in a soft bun', price: '₹120.00' },
    { name: 'Paneer Tikka Sandwich', description: 'Grilled sandwich with spiced cottage cheese', price: '₹200.00' },
    { name: 'Gulab Jamun', description: 'Sweet milk solids balls soaked in rose syrup', price: '₹150.00' }
  ];

  return (
    <section id="services" className="section container" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <h2 className="section-title">Our Menu</h2>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--color-text-muted)' }} className="dark-mode-text">
        Authentic Indian beverages and delicious street food snacks to satisfy your cravings.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{ padding: '2rem' }}
        >
          <h3 style={{ borderBottom: '1px solid var(--color-primary-light)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Desi Drinks & Chai</h3>
          {menuItems.map((item, index) => (
            <div key={index} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{item.name}</h4>
                <div style={{ height: '1px', flex: 1, borderBottom: '1px dashed var(--color-text-muted)', margin: '0 1rem', opacity: 0.5 }}></div>
                <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{item.price}</span>
              </div>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }} className="dark-mode-text">{item.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel"
          style={{ padding: '2rem' }}
        >
          <h3 style={{ borderBottom: '1px solid var(--color-primary-light)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Street Food & Sweets</h3>
          {pastries.map((item, index) => (
            <div key={index} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{item.name}</h4>
                <div style={{ height: '1px', flex: 1, borderBottom: '1px dashed var(--color-text-muted)', margin: '0 1rem', opacity: 0.5 }}></div>
                <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{item.price}</span>
              </div>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }} className="dark-mode-text">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
