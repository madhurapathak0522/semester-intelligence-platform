import React, { useState } from 'react';

const CourseRecommendation = () => {
  const [selectedTrack, setSelectedTrack] = useState('vlsi');

  // B.Tech ECE Technical Electives Database
  const courseDatabase = {
    vlsi: [
      { id: 'DDVL', name: 'Digital Design using HDL', credits: 3, prereqs: 'DS / DSD', met: true, desc: 'Hardware description languages (Verilog/VHDL), logic synthesis, circuit simulation, and FPGA implementation.' },
      { id: 'LDIC', name: 'Linear & Digital Integrated Circuits', credits: 4, prereqs: 'EDC', met: true, desc: 'Operational amplifiers, active filters, 555 timers, phase-locked loops, and digital IC families.' },
      { id: 'VLSI Design', name: 'CMOS VLSI Design', credits: 3, prereqs: 'DDVL', met: false, desc: 'CMOS transistor layout, design rules, timing optimization, clock distribution, and semiconductor memories.' }
    ],
    dsp: [
      { id: 'DSP', name: 'Digital Signal Processing', credits: 4, prereqs: 'PTSP & Signals', met: false, desc: 'DFT, FFT algorithms, structures of IIR and FIR digital filters, and finite word-length effects.' },
      { id: 'DIP', name: 'Digital Image Processing', credits: 3, prereqs: 'DSP', met: false, desc: 'Image transforms, enhancements, spatial filtering, segmentation, and compression codecs.' },
      { id: 'FOC', name: 'Fiber Optic Communications', credits: 3, prereqs: 'ADC', met: false, desc: 'Optical fibers, wave propagation, optical sources/detectors, link budgets, and WDM systems.' }
    ],
    robotics: [
      { id: 'IOT', name: 'Internet of Things Elective', credits: 3, prereqs: 'DSD', met: true, desc: 'Microcontrollers, sensor interfaces, wireless standards, cloud logging, and active device nodes.' },
      { id: 'MPMC', name: 'Microprocessors & Microcontrollers', credits: 4, prereqs: 'DS', met: true, desc: '8086/8051 architectures, assembly coding, memory interfacing, interrupt structures, and peripheral chips.' },
      { id: 'Control Systems', name: 'Linear Control Theory', credits: 4, prereqs: 'MATH-3', met: true, desc: 'Transfer functions, block diagrams, stability indices, Routh-Hurwitz criteria, Nyquist/Bode plots.' }
    ],
    power: [
      { id: 'EMI', name: 'Electronic Measurements & Instrumentation', credits: 3, prereqs: 'EDC', met: true, desc: 'Galvanometers, bridges, digital voltmeters, oscilloscopes, transducers, and telemetry systems.' },
      { id: 'EMTL', name: 'Electromagnetic Fields & Transmission Lines', credits: 4, prereqs: 'Engineering Physics', met: true, desc: 'Coulomb\'s law, Maxwell\'s equations, electromagnetic wave equations, Poynting vector, and transmission lines.' }
    ]
  };

  const tracks = [
    { id: 'vlsi', label: 'VLSI & Digital' },
    { id: 'dsp', label: 'Signal Processing' },
    { id: 'robotics', label: 'Robotics & Controls' },
    { id: 'power', label: 'Power Systems' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Filters Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {tracks.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTrack(t.id)}
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                border: `1px solid ${selectedTrack === t.id ? 'var(--primary)' : 'var(--border-color)'}`,
                backgroundColor: selectedTrack === t.id ? 'rgba(47, 98, 255, 0.08)' : 'var(--bg-surface)',
                color: selectedTrack === t.id ? 'var(--primary)' : 'var(--text-secondary)'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Showing <strong>{courseDatabase[selectedTrack].length}</strong> recommended electives
        </div>
      </div>

      {/* Course List Card Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {courseDatabase[selectedTrack].map((course) => (
          <div 
            key={course.id} 
            className="dashboard-card" 
            style={{ 
              animation: 'none', 
              display: 'grid', 
              gridTemplateColumns: '120px 1fr 140px',
              gap: '24px',
              alignItems: 'center'
            }}
          >
            {/* Left Box: Code and Credits */}
            <div>
              <span className="badge" style={{ backgroundColor: 'var(--primary)', marginBottom: '8px', display: 'inline-block' }}>
                {course.id}
              </span>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                {course.credits} Credits
              </div>
            </div>

            {/* Middle Box: Description */}
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '6px', color: 'var(--text-primary)' }}>
                {course.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {course.desc}
              </p>
            </div>

            {/* Right Box: Prereq Clearance */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-end', 
              gap: '6px', 
              borderLeft: '1px solid var(--border-color)',
              paddingLeft: '20px'
            }}>
              <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--text-muted)' }}>PREREQUISITE</span>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', textAlign: 'right' }}>
                {course.prereqs}
              </span>
              
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                fontWeight: '700',
                color: course.met ? 'var(--tertiary)' : 'var(--primary)',
                backgroundColor: course.met ? 'rgba(16, 185, 129, 0.08)' : 'rgba(201, 76, 36, 0.08)',
                padding: '2px 8px',
                borderRadius: '3px',
                marginTop: '4px'
              }}>
                {course.met ? '✓ CLEARED' : '🔒 LOCKED'}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default CourseRecommendation;
