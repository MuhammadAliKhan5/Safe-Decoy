import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative z-20 py-24 border-t border-[#4215bd]/20 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Decorative Top Branding - UPDATED FOR READABILITY */}
        <div className="flex items-center gap-6 mb-12">
          {/* Subtle line on the left */}
          <div className="hidden md:block w-24 h-[1px] bg-gradient-to-r from-transparent to-[#4215bd]/50"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#4215bd] rotate-45 shadow-[0_0_12px_#4215bd]"></div>
            
            {/* 1. Changed text color to a lighter blue/white mix for contrast 
                2. Reduced tracking from 0.4em to 0.2em for better word recognition
                3. Added font-bold
            */}
            <span className="text-[12px] md:text-[14px] font-mono font-bold tracking-[0.2em] text-[#8b63ff] uppercase antialiased">
              Contact Info
            </span>
            
            <div className="w-1.5 h-1.5 bg-[#4215bd] rotate-45 shadow-[0_0_12px_#4215bd]"></div>
          </div>

          {/* Subtle line on the right */}
          <div className="hidden md:block w-24 h-[1px] bg-gradient-to-l from-transparent to-[#4215bd]/50"></div>
        </div>

        {/* Contact Email */}
        <div className="text-center space-y-4 mb-10">
          <a 
            href="mailto:inquiries@safedecoy.com" 
            className="group block font-black text-2xl md:text-4xl tracking-tight text-white transition-all duration-500 uppercase italic antialiased"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-[#4215bd] to-[#4215bd] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 pb-1">
              inquiries@safedecoy.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};