import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container container">
        
        {/* Left Column: Brand & Description */}
        <div className="footer-brand-column">
          <a href="#" className="footer-logo">
            <svg
              className="logo-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2.5" />
              <line x1="12" y1="4" x2="12" y2="20" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <circle cx="12" cy="12" r="3" fill="var(--secondary)" stroke="var(--secondary)" />
              <circle cx="8" cy="8" r="0.75" fill="currentColor" stroke="none" />
              <circle cx="16" cy="8" r="0.75" fill="currentColor" stroke="none" />
              <circle cx="8" cy="16" r="0.75" fill="currentColor" stroke="none" />
              <circle cx="16" cy="16" r="0.75" fill="currentColor" stroke="none" />
            </svg>
            <span className="logo-text">Silicon<span className="gradient-text">Path</span></span>
          </a>
          <p className="footer-desc">
            An open-source academic planning platform helping Electrical & Computer Engineering students chart their prerequisite chains and optimize term schedules.
          </p>
        </div>

        {/* Right Columns: Realistic Links */}
        <div className="footer-links-grid">
          
          {/* Column 1: Academic Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Academic Resources</h4>
            <ul className="footer-links">
              <li><a href="#catalog" className="footer-link">Department Catalog</a></li>
              <li><a href="#prereqs" className="footer-link">ECE Flowchart Map</a></li>
              <li><a href="#syllabus" className="footer-link">Syllabus Archive</a></li>
              <li><a href="#advising" className="footer-link">Advising Checklist</a></li>
            </ul>
          </div>

          {/* Column 2: Planner Tools */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Planner Platform</h4>
            <ul className="footer-links">
              <li><a href="#features" className="footer-link">Feature List</a></li>
              <li><a href="#planner" className="footer-link">Interactive Planner</a></li>
              <li><a href="#signin" className="footer-link">Portal Login</a></li>
              <li><a href="#register" className="footer-link">Create Account</a></li>
            </ul>
          </div>

          {/* Column 3: Repository / Open Source */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Project Code</h4>
            <ul className="footer-links">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub Repository</a></li>
              <li><a href="#docs" className="footer-link">Developer Docs</a></li>
              <li><a href="#contributors" className="footer-link">Contributors</a></li>
              <li><a href="#changelog" className="footer-link">Changelog</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} SiliconPath Project. Created for ECE Academic Excellence.
          </p>
          <div className="footer-legal-links">
            <a href="#license" className="footer-legal-link">MIT License</a>
            <span className="separator">&bull;</span>
            <a href="#terms" className="footer-legal-link">Project Scope</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
