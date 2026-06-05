import React, { useState } from 'react';

const SemesterPlanner = () => {
  // Pre-load your B.Tech ECE subjects extracted from the Google Drive folder
  const [semesters, setSemesters] = useState([
    {
      id: 'sem-3',
      name: '2nd Year — Semester 3',
      courses: [
        { code: 'PTSP', name: 'Probability Theory & Stochastic Processes', credits: 3 },
        { code: 'DS', name: 'Digital System Design', credits: 4 },
        { code: 'EMI', name: 'Electronic Measurements & Instrumentation', credits: 3 },
        { code: 'EDC', name: 'Electronic Devices & Circuits', credits: 4 },
        { code: 'MATH-3', name: 'Engineering Mathematics III', credits: 3 }
      ]
    },
    {
      id: 'sem-4',
      name: '2nd Year — Semester 4',
      courses: [
        { code: 'ADC', name: 'Analog & Digital Communications', credits: 4 },
        { code: 'EMTL', name: 'Electromagnetic Fields & Transmission Lines', credits: 4 },
        { code: 'VCCA', name: 'Vector Calculus & Complex Analysis', credits: 3 },
        { code: 'IOT', name: 'Internet of Things Elective', credits: 3 },
        { code: 'DSD', name: 'Digital Electronics Lab', credits: 2 }
      ]
    },
    {
      id: 'sem-5',
      name: '3rd Year — Semester 5',
      courses: [
        { code: 'LDIC', name: 'Linear & Digital Integrated Circuits', credits: 4 },
        { code: 'MPMC', name: 'Microprocessors & Microcontrollers', credits: 4 },
        { code: 'DDVL', name: 'Digital Design using HDL', credits: 3 },
        { code: 'OPPS', name: 'Object Oriented Programming Structure', credits: 3 },
        { code: 'QNX', name: 'Real-Time Operating Systems Lab', credits: 2 }
      ]
    },
    {
      id: 'sem-6',
      name: '3rd Year — Semester 6',
      courses: [
        { code: 'DSP', name: 'Digital Signal Processing', credits: 4 },
        { code: 'AWP', name: 'Antennas & Wave Propagation', credits: 4 },
        { code: 'DIP', name: 'Digital Image Processing', credits: 3 },
        { code: 'FOC', name: 'Fiber Optic Communications', credits: 3 },
        { code: 'BPP', name: 'Biomedical Signal Processing', credits: 3 }
      ]
    }
  ]);

  const [newCode, setNewCode] = useState('');
  const [newName, setNewName] = useState('');
  const [newCredits, setNewCredits] = useState(4);
  const [targetSemester, setTargetSemester] = useState('sem-3');

  const getSemesterCredits = (courses) => {
    return courses.reduce((acc, current) => acc + parseInt(current.credits || 0, 10), 0);
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCode.trim() || !newName.trim()) return;

    const newCourseObj = {
      code: newCode.toUpperCase(),
      name: newName,
      credits: parseInt(newCredits, 10)
    };

    setSemesters(prevSem => 
      prevSem.map(sem => {
        if (sem.id === targetSemester) {
          return {
            ...sem,
            courses: [...sem.courses, newCourseObj]
          };
        }
        return sem;
      })
    );

    setNewCode('');
    setNewName('');
  };

  const handleRemoveCourse = (semesterId, courseIndex) => {
    setSemesters(prevSem =>
      prevSem.map(sem => {
        if (sem.id === semesterId) {
          const updatedCourses = sem.courses.filter((_, idx) => idx !== courseIndex);
          return {
            ...sem,
            courses: updatedCourses
          };
        }
        return sem;
      })
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* 1. Academic Load Status Board */}
      <div className="dashboard-card" style={{ animation: 'none', display: 'flex', flexWrap: 'wrap', gap: '32px', padding: '20px' }}>
        <div style={{ flex: '1', minWidth: '150px' }}>
          <span className="card-label">TOTAL PLANNER CREDITS</span>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>
            {semesters.reduce((acc, sem) => acc + getSemesterCredits(sem.courses), 0)} Hrs
          </h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Target Syllabus Load (Sem 3-6)</span>
        </div>
        
        <div style={{ flex: '1', minWidth: '180px', borderLeft: '1px solid var(--border-color)', paddingLeft: '24px' }}>
          <span className="card-label">SYLLABUS STATUS</span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginTop: '6px' }}>Curriculum Map</h3>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: 'var(--tertiary)',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            padding: '2px 8px',
            borderRadius: '3px',
            marginTop: '6px'
          }}>
            ✓ B.TECH ECE PREREQUISITES CLEARED
          </span>
        </div>
      </div>

      {/* 2. B.Tech Semester Planner Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        {semesters.map((sem) => {
          const semCredits = getSemesterCredits(sem.courses);
          const isOverloaded = semCredits > 20; // B.Tech semesters frequently carry higher credits (up to 20-22)
          const isUnderloaded = semCredits < 12;

          return (
            <div 
              key={sem.id} 
              className="dashboard-card" 
              style={{ 
                animation: 'none', 
                backgroundColor: 'var(--bg-surface)', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px' 
              }}
            >
              {/* Semester Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)' }}>{sem.name}</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: isOverloaded ? 'var(--primary)' : isUnderloaded ? 'var(--secondary)' : 'var(--text-secondary)' }}>
                    {semCredits} Credits
                  </span>
                  
                  {isOverloaded && (
                    <span className="badge" style={{ backgroundColor: 'var(--primary)', fontSize: '0.6rem' }}>OVERLOAD</span>
                  )}
                  {isUnderloaded && (
                    <span className="badge" style={{ backgroundColor: 'var(--secondary)', fontSize: '0.6rem' }}>UNDERLOAD</span>
                  )}
                </div>
              </div>

              {/* Semester Course Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                {sem.courses.map((course, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '10px 14px', 
                      backgroundColor: 'var(--bg-surface-hover)', 
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      position: 'relative'
                    }}
                    className="planner-course-item"
                  >
                    <div>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginRight: '8px' }}>{course.code}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{course.name}</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                        {course.credits} Cr
                      </span>
                      <button 
                        onClick={() => handleRemoveCourse(sem.id, idx)}
                        style={{ 
                          color: 'var(--text-muted)', 
                          fontSize: '0.85rem', 
                          fontWeight: 'bold',
                          padding: '2px' 
                        }}
                        title="Remove Subject"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Class Addition Console */}
      <div className="dashboard-card" style={{ animation: 'none' }}>
        <div className="card-label">PLANNER CONSOLE</div>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px' }}>Schedule B.Tech Subject</h2>
        
        <form onSubmit={handleAddCourse} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 80px 180px 100px', gap: '12px', alignItems: 'end' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>SUBJECT CODE</label>
            <input 
              type="text" 
              placeholder="DSP" 
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
              style={{
                padding: '10px',
                backgroundColor: 'var(--bg-dark)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none'
              }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>SUBJECT NAME</label>
            <input 
              type="text" 
              placeholder="Digital Signal Processing" 
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{
                padding: '10px',
                backgroundColor: 'var(--bg-dark)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none'
              }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>CREDITS</label>
            <input 
              type="number" 
              min="1" 
              max="6" 
              value={newCredits}
              onChange={(e) => setNewCredits(e.target.value)}
              style={{
                padding: '10px',
                backgroundColor: 'var(--bg-dark)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none'
              }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>TARGET SEMESTER</label>
            <select 
              value={targetSemester}
              onChange={(e) => setTargetSemester(e.target.value)}
              style={{
                padding: '10px',
                backgroundColor: 'var(--bg-dark)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            >
              {semesters.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            style={{
              height: '38px',
              backgroundColor: 'var(--primary)',
              color: 'white',
              borderRadius: 'var(--radius-sm)',
              fontWeight: '700',
              fontSize: '0.85rem'
            }}
          >
            Add
          </button>

        </form>
      </div>

    </div>
  );
};

export default SemesterPlanner;
