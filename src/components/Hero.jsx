import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      
      {/* 1. HERO-SPECIFIC SHINY RED GRID */}
      <div className="absolute inset-0 z-0 grid-red-shiny opacity-100"></div>

      {/* 2. MANAGER'S SHINY CORNER LIGHTS */}
      <div className="hero-corner-glow -top-20 -left-20"></div>
      <div className="hero-corner-glow -bottom-20 -right-20 opacity-60"></div>

      {/* 3. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070')] bg-cover bg-center grayscale opacity-10"
          style={{ filter: 'brightness(0.4)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* 4. CONTENT LAYER */}
      <div className="relative z-10 text-center max-w-4xl pt-10">
        
        {/* Military Grade Badge - Small & Professional */}
        <div className="inline-flex items-center gap-2 border border-[#ff3700]/30 px-4 py-1.5 mb-10 bg-black/80 backdrop-blur-md">
          <span className="text-[#ff3700] text-[10px]">🔒</span>
          <span className="text-zinc-300 font-mono text-[9px] tracking-[0.3em] uppercase">
            Military Grade Discreet Security
          </span>
        </div>

        {/* Headline - Big & Sharp (No Blur) */}
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-6 text-white antialiased">
          A New Standard <br />
          <span className="text-[#ff3700]">of Protection.</span>
        </h1>

        {/* Subtitle - High Contrast */}
        <p className="text-zinc-400 text-[11px] md:text-xs max-w-lg mx-auto mb-12 tracking-[0.2em] uppercase leading-relaxed font-medium">
          Exclusive access for <span className="text-white">verified executives</span> and <br />
          high-net-worth clients.
        </p>

        {/* CTA SECTION - Solid & Sharp Visibility */}
        <div className="flex flex-col md:flex-row max-w-md mx-auto border border-zinc-700 bg-zinc-900/90 shadow-2xl relative z-20">
          <input 
            type="email" 
            placeholder="ENTER EMAIL" 
            className="bg-transparent text-white px-6 py-4 outline-none flex-grow font-mono text-[11px] tracking-widest placeholder:text-zinc-600 min-w-0"
          />
          {/* RESTORED OLD STYLE BUTTON: Solid White, Black Text, No Blurs */}
          <button className="bg-white text-black font-black uppercase tracking-widest px-10 py-4 hover:bg-[#ff3700] hover:text-white transition-all duration-300 text-[11px] antialiased whitespace-nowrap">
            Request Early Access
          </button>
        </div>

        {/* Status Line Decor */}
        <div className="mt-14 flex justify-center items-center gap-4 opacity-50">
          <div className="h-[1px] w-10 bg-zinc-800"></div>
          <p className="text-[9px] text-[#ff3700] font-mono tracking-[0.4em] uppercase">
            Stealth Protocol Active
          </p>
          <div className="h-[1px] w-10 bg-zinc-800"></div>
        </div>
      </div>

      {/* Sharp Decorative Corner Brackets */}
      <div className="absolute left-10 top-1/4 w-4 h-4 border-l border-t border-[#ff3700]/40"></div>
      <div className="absolute right-10 bottom-1/4 w-4 h-4 border-r border-b border-[#ff3700]/40"></div>

    </section>
  );
};

export default Hero;