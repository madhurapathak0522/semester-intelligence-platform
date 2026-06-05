import React from 'react';
import FeatureCard from './FeatureCard.jsx';
import '../styles/Features.css';

const Features = () => {
  const featuresList = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Logic Gate Schematic symbol */}
          <path d="M14 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h6a6 6 0 0 0 0-12z" />
          <line x1="2" y1="9" x2="4" y2="9" />
          <line x1="2" y1="15" x2="4" y2="15" />
          <line x1="20" y1="12" x2="22" y2="12" />
        </svg>
      ),
      title: "AI Course Recommendations",
      description: "Discover advanced electives matched directly to your career interests (VLSI, DSP, Controls) with automated warning alerts for missing prerequisite chains.",
      tags: ["Prereq Mapping", "Specialization Tracks"]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Timeline Planner Grid */}
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h2v2H8z" />
          <path d="M14 14h2v2h-2z" />
        </svg>
      ),
      title: "Workload Semester Planner",
      description: "Map your upcoming terms on a visual schedule layout. Instantly calculate credit load balances and forecast weekly lab hours to prevent burnout.",
      tags: ["Workload Audit", "Credit Forecasting"]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Progress node metric */}
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 20h18" />
        </svg>
      ),
      title: "Academic Graduation Insights",
      description: "Audit your degree progress against department curriculum checklists. Track core residency requirements and specialization elective splits in real-time.",
      tags: ["Degree Checklist", "Elective Spanning"]
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Core Features</span>
          <h2 className="section-title">Engineered to Map Your ECE Pathway</h2>
          <p className="section-desc">
            A targeted suite of curriculum planning tools built to solve course registration bottlenecks and coordinate prerequisite chains.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {featuresList.map((feat, index) => (
            <FeatureCard
              key={index}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              tags={feat.tags}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
