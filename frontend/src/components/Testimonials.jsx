import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Ravi', text: 'The best masala chai I\'ve ever had. The atmosphere is perfect for working or catching up with friends.', rating: 5 },
    { name: 'Priya ', text: 'Incredible biryani and the samosas are outstanding. My new daily spot!', rating: 5 },
    { name: 'Anjali', text: 'A hidden gem in the city. The staff is incredibly friendly and the authentic street food is always delicious.', rating: 5 }
  ];

  return (
    <section id="testimonials" className="section container">
      <h2 className="section-title">What Our Guests Say</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="glass-panel"
            style={{ flex: '1 1 300px', maxWidth: '400px', padding: '2rem', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
              {[...Array(review.rating)].map((_, i) => <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />)}
            </div>
            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', flex: 1, color: 'var(--color-text-muted)' }} className="dark-mode-text">
              "{review.text}"
            </p>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>- {review.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
