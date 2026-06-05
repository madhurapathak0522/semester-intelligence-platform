import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onSubmit, onBackHome }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [university, setUniversity] = useState('');
  const [semester, setSemester] = useState('sem-3');
  const [track, setTrack] = useState('vlsi');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !rollNo.trim() || !university.trim()) {
      alert("Please fill in all details to configure your B.Tech syllabus.");
      return;
    }

    const userData = {
      name: name,
      rollNo: rollNo,
      university: university,
      semester: semester, // 'sem-3', 'sem-4', 'sem-5', 'sem-6'
      track: track,       // 'vlsi', 'dsp', 'robotics', 'power'
      cGpa: '8.5'         // Default baseline CGPA
    };

    onSubmit(userData);
  };

  return (
    <div className="login-page-container">
      <div className="login-card-frame">
        
        {/* Header Branding */}
        <div className="login-header">
          <div className="login-logo">
            <svg
              className="logo-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
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
          </div>
          <h2 className="login-title">B.Tech ECE Academic Portal</h2>
          <p className="login-subtitle">Configure your semester syllabus and prerequisite trackers</p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="login-form">
          
          {/* Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. Rahul Sharma" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* Roll Number */}
          <div className="form-group">
            <label className="form-label">College Roll Number / ID</label>
            <input 
              type="text" 
              placeholder="e.g. 22ECE1014" 
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* University Name */}
          <div className="form-group">
            <label className="form-label">University / College</label>
            <input 
              type="text" 
              placeholder="e.g. JNTU, AKTU, TIET" 
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* Double Column Selection */}
          <div className="form-row-split">
            {/* Active Semester */}
            <div className="form-group">
              <label className="form-label">Current Term</label>
              <select 
                value={semester} 
                onChange={(e) => setSemester(e.target.value)}
                className="form-select"
              >
                <option value="sem-3">2nd Year — Sem 3</option>
                <option value="sem-4">2nd Year — Sem 4</option>
                <option value="sem-5">3rd Year — Sem 5</option>
                <option value="sem-6">3rd Year — Sem 6</option>
              </select>
            </div>

            {/* Specialization Track */}
            <div className="form-group">
              <label className="form-label">ECE Specialization</label>
              <select 
                value={track} 
                onChange={(e) => setTrack(e.target.value)}
                className="form-select"
              >
                <option value="vlsi">Digital Systems & VLSI</option>
                <option value="dsp">Signal Processing</option>
                <option value="robotics">Robotics & Controls</option>
                <option value="power">Power Systems</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="btn-login-submit">
            Access Dashboard
          </button>
        </form>

        <button className="btn-login-back" onClick={onBackHome}>
          ← Return to Landing Page
        </button>

      </div>
    </div>
  );
};

export default Login;
