import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductTease from './components/ProductTease';
import Features from './components/Features';
import SecurityVisual from './components/SecurityVisual';
import { UrgencySection } from './components/UrgencySection';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#ff3700] overflow-x-hidden">
      
      {/* 1. CURSOR ALWAYS STAYS ON TOP */}
      <CustomCursor />

      {/* 2. NAVIGATION */}
      <Navbar />

      {/* 3. MAIN CONTENT */}
      <main className="relative">
        {/* GRIDS ONLY LIVE INSIDE THIS HERO COMPONENT */}
        <Hero /> 

        {/* REST OF PAGE IS CLEAN BLACK */}
        <ProductTease />
        <Features />
        <SecurityVisual />
        <UrgencySection />
      </main>

      <Footer />
    </div>
  );
};

export default App;