import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Footer from '../components/Footer.jsx';

const Home = ({ onStart }) => {
  return (
    <div className="Home-Page">
      {/* 
        Custom Header. 
        We pass an action to override the default href anchors so clicking "Get Started" or "Sign In" 
        routes the user directly to the dashboard state.
      */}
      <Navbar onStart={onStart} />
      
      <main>
        {/* We override the Hero CTA to route directly to the dashboard */}
        <Hero onStart={onStart} />
        <Features />
        <HowItWorks />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
