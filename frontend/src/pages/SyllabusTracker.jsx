import React, { useState, useEffect } from 'react';
import '../styles/SyllabusTracker.css';

// Complete Syllabus Database for Semesters 3, 4, 5, and 6 (B.Tech ECE)
const SYLLABUS_DB = {
  'sem-3': {
    'PTSP': ['Probability Distributions', 'Expectations & Moments', 'Joint Densities', 'Autocorrelation Functions', 'Power Spectral Densities'],
    'DS': ['K-Maps & Logic Minimization', 'Decoders & Multiplexers', 'Flip-Flops & Latches', 'Counters & Registers', 'Finite State Machines'],
    'EMI': ['Errors in Measurement', 'Galvanometers & Bridges', 'Transducers & Sensors', 'Digital Voltmeters', 'Telemetry Systems'],
    'EDC': ['PN Junction Diode Circuits', 'BJT Biasing & Amplifiers', 'JFET & MOSFET Characteristics', 'Feedback Amplifiers', 'Sinusoidal Oscillators']
  },
  'sem-4': {
    'ADC': ['Amplitude Modulation Schemes', 'Frequency Modulation', 'Sampling & Quantization', 'PCM & Delta Modulation', 'ASK / FSK / PSK Schemes'],
    'EMTL': ['Electrostatic Fields', 'Maxwell\'s Equations', 'Poynting Theorem', 'Transmission Line Equations', 'Standing Wave Ratios (SWR)'],
    'VCCA': ['Vector Calculus Integrals', 'Fourier Series Expansion', 'Complex Differentiation', 'Cauchy-Riemann Equations', 'Residue Theorem'],
    'IOT': ['Microcontroller Architecture', 'Sensor Interfacing', 'Wireless IoT Standards', 'Cloud Logging', 'Edge Computing Nodes']
  },
  'sem-5': {
    'LDIC': ['Op-Amp Configurations', 'Active Filters', '555 Timer Applications', 'Phase-Locked Loops (PLL)', 'ADC and DAC Circuits'],
    'MPMC': ['8086 CPU Architecture', '8086 Assembly Instructions', '8086 Memory Interfacing', '8255 Programmable Port', '8051 Microcontroller Core'],
    'DDVL': ['Verilog Logic Operators', 'Behavioral Modeling', 'FPGA Block RAM', 'CMOS Inverter Sizing', 'CMOS Logic Families'],
    'OPPS': ['Classes and Objects', 'Inheritance & Polymorphism', 'Exception Handling', 'Java Multi-threading', 'File I/O Streams']
  },
  'sem-6': {
    'DSP': ['Discrete Fourier Transform', 'FFT Butterfly Algorithms', 'IIR Filter Approximation', 'FIR Window Designs', 'Multi-rate Interpolation'],
    'AWP': ['Radiation Patterns & Gain', 'Dipole Antennas', 'Antenna Arrays', 'Yagi-Uda Designs', 'Wave Propagation Modes'],
    'DIP': ['Image Transforms', 'Histogram Equalization', 'Spatial Noise Filters', 'Edge Detection Operators', 'JPEG Compression'],
    'FOC': ['Optical Fiber Attenuation', 'Fiber Dispersion Modes', 'Laser Diodes & LEDs', 'PIN & APD Photodetectors', 'WDM Networking']
  }
};

const SyllabusTracker = ({ userSemester = 'sem-3' }) => {
  // Grab active subjects based on the semester selected
  const activeSyllabus = SYLLABUS_DB[userSemester] || SYLLABUS_DB['sem-3'];
  const subjects = Object.keys(activeSyllabus);

  // Initialize topic checklist completion state (Default to some checked for demo)
  const [completedTopics, setCompletedTopics] = useState(() => {
    const initialState = {};
    Object.entries(SYLLABUS_DB).forEach(([semId, semData]) => {
      Object.entries(semData).forEach(([subCode, topics]) => {
        initialState[subCode] = {};
        topics.forEach((topic, idx) => {
          // Pre-check some items for visual completeness metrics
          initialState[subCode][topic] = idx < 2; 
        });
      });
    });
    return initialState;
  });

  const toggleTopic = (subCode, topic) => {
    setCompletedTopics(prev => ({
      ...prev,
      [subCode]: {
        ...prev[subCode],
        [topic]: !prev[subCode][topic]
      }
    }));
  };

  // Helper: Calculate progress percentage for a subject
  const getSubjectProgress = (subCode) => {
    const topics = activeSyllabus[subCode] || [];
    if (topics.length === 0) return 0;
    
    const completed = topics.filter(t => completedTopics[subCode]?.[t]).length;
    return Math.round((completed / topics.length) * 100);
  };

  // Helper: Extract all weak topics (subjects where progress < 50%, returns unchecked topics)
  const getWeakTopics = () => {
    const weakList = [];
    subjects.forEach(sub => {
      const progress = getSubjectProgress(sub);
      if (progress < 50) {
        const topics = activeSyllabus[sub] || [];
        topics.forEach(t => {
          if (!completedTopics[sub]?.[t]) {
            weakList.push({ subject: sub, topic: t });
          }
        });
      }
    });
    return weakList;
  };

  const weakTopics = getWeakTopics();

  // Dynamic revision planner mapping
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const getRevisionSchedule = () => {
    const schedule = {};
    daysOfWeek.forEach(day => {
      schedule[day] = [];
    });

    weakTopics.forEach((item, idx) => {
      const targetDay = daysOfWeek[idx % daysOfWeek.length];
      schedule[targetDay].push(item);
    });

    return schedule;
  };

  const revisionSchedule = getRevisionSchedule();

  return (
    <div className="syllabus-tracker-layout">
      
      {/* Left Column: Progress Checklists */}
      <div className="syllabus-main-section">
        <div className="dashboard-card" style={{ animation: 'none' }}>
          <div className="card-label">B.TECH SYLLABUS PROGRESS TRACKER</div>
          <h2 className="section-title-tracker">Subject Competency Maps</h2>
          <p className="section-desc-tracker">
            Track syllabus topics checked in your Semester profile. If a subject drops below 50% completion, it triggers a weak-topic warning.
          </p>

          <div className="subject-checklists-wrapper">
            {subjects.map(subCode => {
              const progress = getSubjectProgress(subCode);
              const isWeak = progress < 50;

              return (
                <div key={subCode} className="subject-checklist-box">
                  
                  {/* Subject Title & Bar */}
                  <div className="subject-list-header">
                    <div>
                      <span className="subject-code-tag">{subCode}</span>
                      <span className={`status-flag-tag ${isWeak ? 'weak-flag' : 'ready-flag'}`}>
                        {isWeak ? '⚠️ WEAK UNIT' : '✓ ON TRACK'}
                      </span>
                    </div>
                    <span className="progress-number">{progress}% Complete</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="progress-bar-container">
                    <div 
                      className={`progress-bar-fill ${isWeak ? 'fill-weak' : 'fill-ready'}`} 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  {/* Topics Checklist */}
                  <div className="topics-checklist-grid">
                    {activeSyllabus[subCode].map(topic => (
                      <label key={topic} className="topic-checkbox-label">
                        <input 
                          type="checkbox"
                          checked={!!completedTopics[subCode]?.[topic]}
                          onChange={() => toggleTopic(subCode, topic)}
                          className="topic-checkbox-input"
                        />
                        <span className="topic-checkbox-text">{topic}</span>
                      </label>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Right Column: Weak Topic Alarms & Revision Planner */}
      <div className="syllabus-aside-section">
        
        {/* Weak Topic Alarm Box */}
        <div className="dashboard-card" style={{ animation: 'none' }}>
          <div className="card-label">WEAK TOPIC DETECTOR</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Flagged Revision Backlog</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Flagged items from units with less than 50% clearance.
          </p>

          {weakTopics.length === 0 ? (
            <div className="alarm-success-state">
              <span>✓ All subjects checked are above 50% clearance. Excellent standing!</span>
            </div>
          ) : (
            <div className="weak-topics-list">
              {weakTopics.map((item, idx) => (
                <div key={idx} className="weak-topic-row">
                  <span className="weak-topic-sub">{item.subject}</span>
                  <span className="weak-topic-name">{item.topic}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Study Revision Planner */}
        <div className="dashboard-card" style={{ animation: 'none', backgroundColor: 'var(--bg-surface-hover)' }}>
          <div className="card-label">DYNAMIC REVISION PLANNER</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Weekly Study Slots</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Suggested daily revision slots mapped directly to your weak topics.
          </p>

          {weakTopics.length === 0 ? (
            <div className="planner-empty-state">
              No weak topics detected. Enjoy your study balance!
            </div>
          ) : (
            <div className="revision-schedule-grid">
              {daysOfWeek.map(day => (
                <div key={day} className="schedule-day-row">
                  <div className="schedule-day-name">{day}</div>
                  <div className="schedule-day-slots">
                    {revisionSchedule[day].length === 0 ? (
                      <span className="free-slot-lbl">Free Slot (Rest / Catch-up)</span>
                    ) : (
                      revisionSchedule[day].map((item, idx) => (
                        <div key={idx} className="study-slot-badge">
                          <strong>{item.subject}</strong>: {item.topic}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default SyllabusTracker;
