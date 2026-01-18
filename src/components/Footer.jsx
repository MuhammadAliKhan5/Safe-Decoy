export const Footer = () => (
  <footer className="relative z-20 py-24 border-t border-[#ff3700]/20 bg-transparent backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
      
      {/* 1. TOP BRANDING ELEMENT - Increased Spacing */}
      <div className="flex items-center gap-4 mb-16">
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#ff3700]"></div>
        <div className="w-2 h-2 bg-[#ff3700] rotate-45 shadow-[0_0_10px_#ff3700]"></div>
        <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#ff3700]"></div>
      </div>

      {/* 2. MAIN EMAIL SECTION - Bigger & Bolder */}
      <div className="text-center space-y-4 mb-16">
        <p className="font-mono text-[10px] tracking-[0.4em] text-[#ff3700] uppercase opacity-80">
          Direct Communications Portal
        </p>
        <a 
          href="mailto:inquiries@safedecoy.com" 
          className="block font-black text-3xl md:text-5xl tracking-tighter text-white hover:text-[#ff3700] transition-all duration-500 uppercase italic antialiased"
        >
          inquiries@safedecoy.com
        </a>
      </div>

      {/* 3. COPYRIGHT & SYSTEM INFO - Enhanced Spacing */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
        
        {/* Left Side: Rights */}
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500">
          &copy; 2026 SafeDecoy <span className="mx-2 text-zinc-800">|</span> Stealth Protocol v.1.0
        </p>

        {/* Right Side: Status Indicators */}
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-3 group">
            <div className="w-1.5 h-1.5 bg-[#ff3700] animate-pulse shadow-[0_0_8px_#ff3700]"></div>
            <span className="text-[9px] text-white font-mono tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
              Connection: Encrypted
            </span>
          </div>
          <div className="flex items-center gap-3 group">
            <div className="w-1.5 h-1.5 bg-[#ff3700] animate-pulse shadow-[0_0_8px_#ff3700]"></div>
            <span className="text-[9px] text-white font-mono tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
              Location: Verified_Node
            </span>
          </div>
        </div>
      </div>
      
    </div>
  </footer>
);