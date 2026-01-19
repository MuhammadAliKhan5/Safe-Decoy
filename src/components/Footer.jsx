import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative z-20 py-24 border-t border-[#ff3700]/20 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Decorative Top Branding - NOW "CONTACT INFO" */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#bd3c1b]"></div>
          <div className="w-2 h-2 bg-[#bd3c1b] rotate-45 shadow-[0_0_10px_#ff3700]"></div>
          <div className="w-[120px] h-[1px] bg-gradient-to-r from-transparent via-[#bd3c1b] to-transparent"></div>
          <div className="text-[14px] font-mono tracking-[0.4em] text-[#ef4019] uppercase opacity-80">CONTACT INFO</div>
          <div className="w-[120px] h-[1px] bg-gradient-to-l from-transparent via-[#bd3c1b] to-transparent"></div>
          <div className="w-2 h-2 bg-[#bd3c1b] rotate-45 shadow-[0_0_10px_#ff3700]"></div>
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#bd3c1b]"></div>
        </div>

        {/* Contact Email - SAME */}
        <div className="text-center space-y-4 mb-24">
          <a 
            href="mailto:inquiries@safedecoy.com" 
            className="block font-black text-3xl md:text-5xl tracking-tighter text-white hover:text-[#bd3c1b] transition-all duration-500 uppercase italic antialiased"
          >
            inquiries@safedecoy.com
          </a>
        </div>

        {/* SIMPLE CENTERED COPYRIGHT */}
        <div className="text-center">
          <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-zinc-500">
            @Copyright 2026 Safe-decoy
          </p>
        </div>
      </div>
    </footer>
  );
};
