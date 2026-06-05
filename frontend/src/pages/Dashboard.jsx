import React, { useState } from 'react';
import SemesterPlanner from './SemesterPlanner.jsx';
import CourseRecommendation from './CourseRecommendation.jsx';
import AIChat from './AIChat.jsx';
import Profile from './Profile.jsx';
import SyllabusTracker from './SyllabusTracker.jsx'; // Import the new B.Tech Tracker
import '../styles/Dashboard.css';

const Dashboard = ({ user, onUpdateUser, onBackHome }) => {
  const [activeTab, setActiveTab] = useState('planner');

  // Sidebar Menu Config
  const menuItems = [
    { id: 'planner', label: 'Semester Planner', icon: '⚡' },
    { id: 'tracker', label: 'Syllabus Tracker', icon: '📋' },
    { id: 'matches', label: 'Course Recommender', icon: '🔌' },
    { id: 'chat', label: 'AI Advising Bot', icon: '💬' },
    { id: 'profile', label: 'Student Profile', icon: '👤' }
  ];

  // Helper: Get Track Name label
  const getTrackLabel = (trackId) => {
    switch (trackId) {
      case 'vlsi': return 'Digital Systems & VLSI';
      case 'dsp': return 'Signal Processing';
      case 'robotics': return 'Robotics & Controls';
      case 'power': return 'Power Systems';
      default: return 'ECE B.Tech';
    }
  };

  // Helper: Get Semester Name label
  const getSemLabel = (semId) => {
    switch (semId) {
      case 'sem-3': return '2nd Year — Sem 3';
      case 'sem-4': return '2nd Year — Sem 4';
      case 'sem-5': return '3rd Year — Sem 5';
      case 'sem-6': return '3rd Year — Sem 6';
      default: return 'ECE B.Tech';
    }
  };

  // Render sub-page based on active tab
  const renderActiveView = () => {
    switch (activeTab) {
      case 'planner':
        return <SemesterPlanner />;
      case 'tracker':
        return <SyllabusTracker userSemester={user.semester} />;
      case 'matches':
        return <CourseRecommendation />;
      case 'chat':
        return <AIChat />;
      case 'profile':
        // Pass the user state and update callback down to Profile
        return <Profile user={user} onUpdateUser={onUpdateUser} />;
      default:
        return <SemesterPlanner />;
    }
  };

  return (
    <div className="dashboard-app-frame">
      
      {/* 1. Sidebar Panel */}
      <aside className="dashboard-sidebar">
        
        {/* Sidebar Logo */}
        <div className="sidebar-brand">
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

        {/* Sidebar Menu Links */}
        <nav className="sidebar-menu-list">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar-menu-btn ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Exit back to landing page */}
        <div className="sidebar-footer">
          <button className="btn-exit-home" onClick={onBackHome}>
            <span className="menu-icon">←</span>
            <span>Back to Home</span>
          </button>
        </div>
      </aside>

      {/* 2. Main Canvas Body */}
      <main className="dashboard-canvas">
        
        {/* App Header Bar - Dynamic with actual student data */}
        <header className="canvas-header">
          <div className="header-meta-left">
            <h1 className="canvas-title">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h1>
            <p className="canvas-subtitle">Welcome, {user.name} ({user.university})</p>
          </div>
          
          {/* Dynamic Student Status Info */}
          <div className="header-meta-right">
            <div className="status-pill">
              <span className="pill-lbl">Track:</span>
              <span className="pill-val">{getTrackLabel(user.track).split(' & ')[0]}</span>
            </div>
            <div className="status-pill">
              <span className="pill-lbl">Term:</span>
              <span className="pill-val">{getSemLabel(user.semester).split(' — ')[1]}</span>
            </div>
          </div>
        </header>

        {/* Dynamic Inner Component Panel */}
        <div className="canvas-content-pane">
          {renderActiveView()}
        </div>

      </main>

    </div>
  );
};

export default Dashboard;
