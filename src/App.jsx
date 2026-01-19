import React from 'react';
import Hero from './components/Hero';
import ProductTease from './components/ProductTease';
import Features from './components/Features';
import { UrgencySection } from './components/UrgencySection';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">

      {/* 2. Hero Section (no neon bg) */}
      <Hero />

      {/* 3. Neon Background Container (8 particles) */}
      <div className="neon-bg-container">
        {/* 8 Neon particles */}
        <div className="neon-particles" />
        <div className="neon-particle-bottom-left" style={{bottom: '15%', left: '12%'}} />
        <div className="neon-particle-bottom-right" style={{bottom: '10%', right: '10%'}} />
        <div className="neon-particle-center" />
        <div className="neon-particle-top-center" style={{top: '15%', left: '50%', transform: 'translateX(-50%)'}} />
        <div className="neon-particle-mid-left" style={{top: '40%', left: '8%'}} />
        <div className="neon-particle-mid-right" style={{top: '45%', right: '8%'}} />
        <div className="neon-particle-bottom-center" style={{bottom: '20%', left: '50%', transform: 'translateX(-50%)'}} />
        <div className="neon-particle-upper-right" style={{top: '25%', right: '15%'}} />
        
        {/* Content layer */}
        <main className="relative z-10 w-full">
          <ProductTease />
          <Features />
          <UrgencySection />
        </main>
      </div>

      {/* 4. Footer (no neon bg) */}
      <Footer />

      {/* 5. NEON FRAME (top layer) */}
      <div className="neon-frame" />
    </div>
  );
};

export default App;
