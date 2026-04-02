import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem',
    transition: 'all 0.3s ease',
    backgroundColor: isScrolled ? (isDarkMode ? 'rgba(30, 26, 29, 0.95)' : 'rgba(255, 255, 255, 0.95)') : 'transparent',
    boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const linkStyle = {
    marginLeft: '2rem',
    fontWeight: 500,
    fontSize: '1rem',
    color: isScrolled ? (isDarkMode ? '#fff' : 'var(--color-text-main)') : '#fff'
  };

  return (
    <nav style={navStyles}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isScrolled ? 'var(--color-primary)' : '#fff' }}>
        <Coffee size={28} />
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700 }}>Masala Haven</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' } }}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#services" style={linkStyle}>Menu</a>
          <a href="#booking" style={{...linkStyle, padding: '0.5rem 1rem'}} className="btn btn-primary">Book</a>
        </div>
        <button onClick={toggleTheme} style={{ background: 'none', border: 'none', marginLeft: '1.5rem', cursor: 'pointer', color: linkStyle.color }}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
