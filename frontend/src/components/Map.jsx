import React from 'react';

const Map = () => {
  return (
    <div style={{ width: '100%', height: '300px', backgroundColor: '#e0e0e0' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0673400613203!2d-122.404286184682!3d37.78851457975765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808605d3b64b%3A0xeebd0950346edbb9!2sUnion%20Square!5e0!3m2!1sen!2sus!4v1655385637213!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Cafe Location"
      ></iframe>
    </div>
  );
};

export default Map;
