import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b-2 border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        
        {/* LOGO SECTION - Forced Scaling */}
        <div className="flex items-center">
          <div className="relative">
            <img 
              src="logo.png" 
              alt="SafeDecoy Logo" 
              className="h-20 w-auto scale-[2.0] md:scale-[2.5] origin-left object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300"
            />
          </div>
        </div>

        {/* INQUIRIES BUTTON - Sharp & Bold */}
        <button className="px-10 py-3 border-2 font-bold border-[#ff3700] text-[#ff3700] uppercase tracking-[0.2em] text-sm hover:bg-[#be5639] hover:text-black hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300">
          Inquiries
        </button>
      </div>
    </nav>
  );
};

export default Navbar;