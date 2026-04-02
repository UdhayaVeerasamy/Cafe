import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      title: 'Chai Subscription',
      price: '1000/mo',
      features: ['2 boxes of premium premium tea leaves per month', 'Free daily masala chai', '10% off all Indian sweets', 'Early access to new menus', 'Members only events']
    },
    {
      title: 'Desi Work Pass',
      price: '100/day',
      features: ['Unlimited masala chai or filter coffee', 'High-speed reserved WiFi', 'Access to meeting pods', '1 complimentary samosa', 'Printing services']
    }
  ];

  return (
    <section id="pricing" className="section container">
      <h2 className="section-title">Packages & Memberships</h2>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--color-text-muted)' }} className="dark-mode-text">
        Join our community with these exclusive plans designed for chai lovers and remote workers.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="glass-panel"
            style={{ flex: '1 1 300px', maxWidth: '400px', padding: '2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
          >
            {idx === 0 && (
              <div style={{ position: 'absolute', top: '1rem', right: '-2rem', backgroundColor: 'var(--color-accent)', color: '#fff', padding: '0.25rem 3rem', transform: 'rotate(45deg)', fontSize: '0.8rem', fontWeight: 600 }}>
                POPULAR
              </div>
            )}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{pkg.title}</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)', margin: '1rem 0' }}>{pkg.price}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', textAlign: 'left' }}>
              {pkg.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-text-muted)' }} className="dark-mode-text">
                  <Check size={18} color="var(--color-primary)" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={idx === 0 ? "btn btn-primary" : "btn btn-outline"} style={{ width: '100%' }}>Select Plan</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
