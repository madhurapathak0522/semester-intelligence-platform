import React, { useState } from 'react';

const Profile = ({ user, onUpdateUser }) => {
  // Use global user state or fallbacks
  const track = user?.track || 'vlsi';
  const cGpa = user?.cGpa || '8.5';
  const gradTerm = user?.gradTerm || 'Semester 8';
  const semester = user?.semester || 'sem-3';

  // Keep course checklist local for now (or could be raised later)
  const [completedCourses, setCompletedCourses] = useState({
    'MATH-3': true,
    'DS': true,
    'EMI': true,
    'EDC': true,
    'PTSP': false,
    'ADC': false,
    'EMTL': false,
    'VCCA': false,
  });

  const toggleCourse = (id) => {
    setCompletedCourses(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleTrackChange = (newTrack) => {
    onUpdateUser({
      ...user,
      track: newTrack
    });
  };

  const handleCgpaChange = (newCgpa) => {
    onUpdateUser({
      ...user,
      cGpa: newCgpa
    });
  };

  const handleGradTermChange = (newGradTerm) => {
    onUpdateUser({
      ...user,
      gradTerm: newGradTerm
    });
  };

  const handleSemesterChange = (newSemester) => {
    onUpdateUser({
      ...user,
      semester: newSemester
    });
  };

  const tracks = [
    { id: 'vlsi', name: 'Digital Systems & VLSI', desc: 'Focuses on chip designs, microprocessor architectures (MPMC), and HDL modeling (DDVL).' },
    { id: 'dsp', name: 'Signal Processing & Communication', desc: 'Focuses on analog & digital systems (ADC), digital filtering (DSP), and optical networks (FOC).' },
    { id: 'robotics', name: 'Robotics & Control Systems', desc: 'Focuses on automation, sensor arrays, feedback loops, and IoT nodes.' },
    { id: 'power', name: 'Power & Energy Systems', desc: 'Focuses on smart grids, high-voltage transmissions, and electrical machinery (EMI).' }
  ];

  return (
    <div className="profile-layout" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px' }}>
      
      {/* Left Column: Track Settings & Course Checklists */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Track Selection Card */}
        <div className="dashboard-card" style={{ animation: 'none' }}>
          <div className="card-label">B.TECH SPECIALIZATION TRACK</div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '16px' }}>Select Specialization Path</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tracks.map(t => (
              <label 
                key={t.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px', 
                  padding: '12px', 
                  border: `1px solid ${track === t.id ? 'var(--primary)' : 'var(--border-color)'}`,
                  backgroundColor: track === t.id ? 'var(--bg-surface-hover)' : 'transparent',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer'
                }}
              >
                <input 
                  type="radio" 
                  name="track" 
                  checked={track === t.id} 
                  onChange={() => handleTrackChange(t.id)} 
                  style={{ marginTop: '4px', accentColor: 'var(--primary)' }} 
                />
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{t.desc}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Completed Course Auditor */}
        <div className="dashboard-card" style={{ animation: 'none' }}>
          <div className="card-label">COMPLETED SUBJECTS CLEARANCE</div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px' }}>Syllabus Audit</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Check the Semester 3 & 4 foundational subjects you have already cleared. Clearances unlock advanced electives.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {Object.keys(completedCourses).map((courseId) => (
              <button
                key={courseId}
                onClick={() => toggleCourse(courseId)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: completedCourses[courseId] ? 'rgba(16, 185, 129, 0.06)' : 'transparent',
                  borderColor: completedCourses[courseId] ? 'var(--tertiary)' : 'var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'left',
                  fontSize: '0.85rem'
                }}
              >
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-primary)' }}>{courseId}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {courseId === 'MATH-3' || courseId === 'VCCA' ? 'Mathematics Core' : 'ECE B.Tech Core'}
                  </span>
                </div>
                <span style={{ 
                  color: completedCourses[courseId] ? 'var(--tertiary)' : 'var(--text-muted)',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}>
                  {completedCourses[courseId] ? '✓' : '○'}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Right Column: Goal Settings and Graduation Summary */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Targets configuration */}
        <div className="dashboard-card" style={{ animation: 'none' }}>
          <div className="card-label">ACADEMIC TARGETS</div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '16px' }}>Target Configuration</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            {/* Active Term Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>ACTIVE ACADEMIC TERM</label>
              <select 
                value={semester}
                onChange={(e) => handleSemesterChange(e.target.value)}
                style={{
                  padding: '10px',
                  backgroundColor: 'var(--bg-dark)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              >
                <option value="sem-3">2nd Year — Sem 3</option>
                <option value="sem-4">2nd Year — Sem 4</option>
                <option value="sem-5">3rd Year — Sem 5</option>
                <option value="sem-6">3rd Year — Sem 6</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>TARGET CGPA (10.0 SCALE)</label>
              <input 
                type="number" 
                min="5.0" 
                max="10.0" 
                step="0.1" 
                value={cGpa}
                onChange={(e) => handleCgpaChange(e.target.value)}
                style={{
                  padding: '10px',
                  backgroundColor: 'var(--bg-dark)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>PLANNING HORIZON END</label>
              <select 
                value={gradTerm}
                onChange={(e) => handleGradTermChange(e.target.value)}
                style={{
                  padding: '10px',
                  backgroundColor: 'var(--bg-dark)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              >
                <option>Semester 6</option>
                <option>Semester 7</option>
                <option>Semester 8</option>
              </select>
            </div>
          </div>
        </div>

        {/* Audit Statistics */}
        <div className="dashboard-card" style={{ animation: 'none', backgroundColor: 'var(--bg-surface-hover)' }}>
          <div className="card-label">SILICONPATH AUDIT PROFILE</div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '12px' }}>Clearance Statistics</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-color)', paddingBottom: '6px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Target Track:</span>
              <strong style={{ color: 'var(--primary)' }}>
                {tracks.find(t => t.id === track)?.name.split(' & ')[0]}
              </strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-color)', paddingBottom: '6px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Clearances Logged:</span>
              <strong style={{ color: 'var(--text-primary)' }}>
                {Object.values(completedCourses).filter(Boolean).length} / {Object.keys(completedCourses).length} Subjects
              </strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-color)', paddingBottom: '6px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Target CGPA:</span>
              <strong style={{ color: 'var(--text-primary)' }}>{cGpa} / 10.00</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>End Term:</span>
              <strong style={{ color: 'var(--text-primary)' }}>{gradTerm}</strong>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Profile;
