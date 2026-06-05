import React from 'react';
import '../styles/Hero.css';

const Hero = ({ onStart }) => {
  return (
    <section className="hero-section">
      <div className="hero-container container">
        
        {/* Left Column: Headline and Project Scope */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            ECE Academic Assistant
          </div>
          
          <h1 className="hero-title">
            Plan Your ECE Semesters. <br />
            <span className="gradient-text">With Academic Guidance.</span>
          </h1>
          
          <p className="hero-subtitle">
            An interactive course planner tailored for Electrical & Computer Engineering. Map out your prerequisites, visualize semester workloads, and ensure you meet all graduation requirements without the stress.
          </p>
          
          <div className="hero-cta-group">
            <a 
              href="#planner" 
              className="btn-hero-primary"
              onClick={(e) => {
                if (onStart) {
                  e.preventDefault();
                  onStart('dashboard');
                }
              }}
            >
              Open AI Planner
              <svg 
                className="cta-arrow" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a 
              href="#features" 
              className="btn-hero-secondary"
              onClick={(e) => {
                if (onStart) {
                  e.preventDefault();
                  onStart('dashboard');
                }
              }}
            >
              View Planner Features
            </a>
          </div>
        </div>

        {/* Right Column: Tactile Dashboard Mockup (Visual preview of the planned features) */}
        <div className="hero-visual">
          <div className="dashboard-wrapper">
            
            {/* Main Dashboard Frame */}
            <div className="dashboard-frame">
              <div className="frame-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="window-title">Academic Planner — Dashboard View</div>
              </div>
              
              <div className="frame-body">
                {/* Card 1: AI Recommendation Card (Visualizing the planner feature) */}
                <div className="dashboard-card card-ai-recommend" style={{ '--delay': '0s' }}>
                  <div className="card-label">PLANNER RECOMMENDATION</div>
                  <h3 className="card-title">DDVL: Digital Design using HDL</h3>
                  <div className="card-tags">
                    <span className="tag tag-vlsi">VLSI Specialization</span>
                    <span className="tag tag-ai">Sem 5 Core</span>
                  </div>
                  <div className="match-bar-container">
                    <div className="match-info">
                      <span>Prerequisites Completed</span>
                      <span className="match-pct">Match Details</span>
                    </div>
                    <div className="match-progress">
                      <div className="match-fill" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Core Paths / Curriculum Node Map */}
                <div className="dashboard-card card-nodes" style={{ '--delay': '1.5s' }}>
                  <div className="card-label">PREREQUISITE CHAIN VISUALIZATION</div>
                  <div className="nodes-container">
                    <div className="node completed">
                      <span className="node-icon">✓</span>
                      <div className="node-info">
                        <span className="node-name">PTSP</span>
                        <span className="node-desc">Probability Theory (Cleared)</span>
                      </div>
                    </div>
                    
                    <div className="node-connector active"></div>
                    
                    <div className="node current">
                      <span className="node-icon">⚡</span>
                      <div className="node-info">
                        <span className="node-name">DSD</span>
                        <span className="node-desc">Digital System Design (Current)</span>
                      </div>
                    </div>
                    
                    <div className="node-connector planned"></div>
                    
                    <div className="node locked">
                      <span className="node-icon">🔒</span>
                      <div className="node-info">
                        <span className="node-name">DDVL</span>
                        <span className="node-desc">Digital Design HDL (Locked - Prereq DSD)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Semester Load Forecast */}
                <div className="dashboard-card card-load" style={{ '--delay': '3s' }}>
                  <div className="card-label">SEMESTER CREDIT & WORKLOAD LOAD</div>
                  <div className="load-stats">
                    <div className="stat-box">
                      <span className="stat-value">16</span>
                      <span className="stat-lbl">Planned Credits</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-value red">Balanced</span>
                      <span className="stat-lbl">Workload Status</span>
                    </div>
                  </div>
                  
                  {/* Dynamic simulated chart bars representing workload distribution */}
                  <div className="chart-container">
                    <div className="chart-bar" style={{ '--h': '60%' }}><span>Mon</span></div>
                    <div className="chart-bar" style={{ '--h': '80%' }}><span>Wed</span></div>
                    <div className="chart-bar active" style={{ '--h': '70%' }}><span>Fri</span></div>
                    <div className="chart-bar" style={{ '--h': '30%' }}><span>Sun</span></div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
