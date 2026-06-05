import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Select Your ECE Specialization",
      description: "Choose your focus area, such as Digital Systems, Signal Processing, or Semiconductor Devices. The planner immediately loads core department pathways."
    },
    {
      number: "02",
      title: "Log Completed Prerequisites",
      description: "Declare the core coursework you have already cleared. The system will audit your eligibility for higher-level labs and advanced electives."
    },
    {
      number: "03",
      title: "Deploy Balanced Schedule",
      description: "Instantly generate your customized semester-by-semester timeline. Preview your workload weights and make adjustments before registration."
    }
  ];

  return (
    <section id="how-it-works" className="how-section">
      <div className="how-container container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">How it works</span>
          <h2 className="section-title">Sequence Your Coursework in Seconds</h2>
          <p className="section-desc">
            A structured, analytical approach to planning graduation timelines and ensuring prerequisite chains align.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="steps-timeline">
          {/* Connector Line in Background */}
          <div className="timeline-connector-line"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-step">
              <div className="step-number-box">
                <span className="step-num">{step.number}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
