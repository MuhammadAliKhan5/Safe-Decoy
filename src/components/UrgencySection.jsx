import React from 'react';

export const UrgencySection = () => (
  <section className="py-24 px-6 text-center border-t border-zinc-900 bg-black relative">
    {/* Subtle Glow - Much smaller and tighter */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff3700]/10 blur-[80px] pointer-events-none"></div>

    <div className="max-w-3xl mx-auto relative z-10">
      {/* Refined Heading */}
      <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase italic">
        COMING <span className="text-[#ff3700]">SOON</span>
      </h2>

      {/* Clean Date Section */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] w-8 bg-zinc-800"></div>
        <span className="text-xl md:text-2xl font-mono font-bold text-zinc-400">Q3 2026</span>
        <div className="h-[1px] w-8 bg-zinc-800"></div>
      </div>

      <p className="text-zinc-500 text-sm md:text-base uppercase tracking-[0.2em] mb-12 max-w-lg mx-auto leading-relaxed">
        Exclusive access for <span className="text-zinc-300">verified executives</span> and high-net-worth clients.
      </p>

      {/* Compact Sharp Button */}
      <div className="relative inline-block group">
        {/* Subtle corner accents */}
        <div className="absolute -top-2 -left-2 w-3 h-3 border-t border-l border-[#ff3700]"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b border-r border-[#ff3700]"></div>

        <button className="relative px-10 py-4 bg-transparent border border-zinc-700 overflow-hidden transition-all duration-300 hover:border-[#ff3700]">
          <span className="relative z-10 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
            Request Early Access
          </span>
          
          {/* Fill effect - Sleeker transition */}
          <div className="absolute bottom-0 left-0 w-full h-0 bg-[#ff3700] group-hover:h-full transition-all duration-300 ease-in-out"></div>
        </button>
      </div>
    </div>
  </section>
);