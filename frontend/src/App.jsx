import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  const [view, setView] = useState('home'); // 'home', 'login', or 'dashboard'
  const [user, setUser] = useState(null);   // Holds current student data

  // Navigation controller with page offset resets
  const navigateTo = (targetView) => {
    // Auth Guard: Redirect to login if trying to access dashboard without credentials
    if (targetView === 'dashboard' && !user) {
      setView('login');
    } else {
      setView(targetView);
    }
    window.scrollTo(0, 0); // Reset scroll position
  };

  const handleLoginSubmit = (userData) => {
    setUser(userData);
    navigateTo('dashboard');
  };

  const handleUserUpdate = (updatedUserData) => {
    setUser(updatedUserData);
  };

  return (
    <div className="App">
      {view === 'home' && (
        <Home onStart={(target) => navigateTo(target || (user ? 'dashboard' : 'login'))} />
      )}
      
      {view === 'login' && (
        <Login 
          onSubmit={handleLoginSubmit} 
          onBackHome={() => navigateTo('home')} 
        />
      )}
      
      {view === 'dashboard' && user && (
        <Dashboard 
          user={user} 
          onUpdateUser={handleUserUpdate} 
          onBackHome={() => navigateTo('home')} 
        />
      )}
    </div>
  );
}

export default App;