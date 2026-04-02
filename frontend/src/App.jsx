import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Map from './components/Map';
import Contact from './components/Contact';
import BookingForm from './components/BookingForm';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <Testimonials />
        <div style={{ display: 'flex', flexWrap: 'wrap', background: 'var(--color-bg-light)' }} className="dark-mode-bg">
          <div style={{ flex: '1 1 500px' }}>
            <BookingForm />
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <Contact />
            <Map />
          </div>
        </div>
      </main>
      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--color-primary-dark)', color: '#fff' }}>
        <p>© {new Date().getFullYear()} MasalaHaven Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
