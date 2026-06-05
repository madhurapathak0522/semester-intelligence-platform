import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onStart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect to trigger glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (e, page) => {
    if (onStart) {
      e.preventDefault();
      closeMenu();
      onStart(page);
    } else {
      closeMenu();
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Brand Logo - Updated to SiliconPath Silicon Die Logo */}
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <svg
            className="logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outer Silicon Die */}
            <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2.5" />
            {/* Silicon Trace Crossings */}
            <line x1="12" y1="4" x2="12" y2="20" />
            <line x1="4" y1="12" x2="20" y2="12" />
            {/* Central Active Node Junction in Tangerine Orange */}
            <circle cx="12" cy="12" r="3" fill="var(--secondary)" stroke="var(--secondary)" />
            {/* Silicon Micro Pins */}
            <circle cx="8" cy="8" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="16" cy="8" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="8" cy="16" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="16" cy="16" r="0.75" fill="currentColor" stroke="none" />
          </svg>
          <span className="logo-text">Silicon<span className="gradient-text">Path</span></span>
        </a>

        {/* Navigation Menu */}
        <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#features" className="navbar-link" onClick={closeMenu}>Features</a>
          <a href="#how-it-works" className="navbar-link" onClick={closeMenu}>How It Works</a>
          <a href="#planner" className="navbar-link" onClick={(e) => handleNavClick(e, 'dashboard')}>
            AI Planner
            <span className="badge">New</span>
          </a>
          <a href="#about" className="navbar-link" onClick={closeMenu}>About</a>

          <div className="navbar-mobile-actions">
            <a href="#signin" className="btn-signin" onClick={(e) => handleNavClick(e, 'dashboard')}>Sign In</a>
            <a href="#getstarted" className="btn-cta" onClick={(e) => handleNavClick(e, 'dashboard')}>Get Started</a>
          </div>
        </nav>

        <div className="navbar-actions">
          <a href="#signin" className="btn-signin" onClick={(e) => handleNavClick(e, 'dashboard')}>Sign In</a>
          <a href="#getstarted" className="btn-cta" onClick={(e) => handleNavClick(e, 'dashboard')}>Get Started</a>
        </div>


        <button 
          className={`navbar-hamburger ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
