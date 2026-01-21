import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative z-20 py-24 border-t border-[#4215bd]/20 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-6 mb-12">
          <div className="hidden md:block w-24 h-[1px] bg-gradient-to-r from-transparent to-[#4215bd]/50"></div>

          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#4215bd] rotate-45 shadow-[0_0_12px_#4215bd]"></div>

            <span className="text-[12px] md:text-[14px] font-mono font-bold tracking-[0.2em] text-[#8b63ff] uppercase antialiased">
              Contact Info
            </span>

            <div className="w-1.5 h-1.5 bg-[#4215bd] rotate-45 shadow-[0_0_12px_#4215bd]"></div>
          </div>

          <div className="hidden md:block w-24 h-[1px] bg-gradient-to-l from-transparent to-[#4215bd]/50"></div>
        </div>

        <div className="text-center space-y-4 mb-10">
          <a
            href="mailto:inquiries@safedecoy.com"
            className="group block font-black text-2xl md:text-4xl tracking-tight text-white transition-all duration-500 uppercase antialiased hover:text-[#4215bd]"
          >
            <span className="text-zinc-400 text-sm md:text-lg leading-relaxed font-medium group-hover:text-[#4215bd] transition-colors duration-500">
              inquiries@safedecoy.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};