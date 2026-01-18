import React from 'react';

const ProductTease = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-black border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#ff3700]"></div>
            <span className="text-[#ff3700] font-mono text-xs tracking-widest uppercase">Product Architecture</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
            SafeDecoy: <br />
            <span className="text-[#ff3700]">Stealth</span> Logic.
          </h2>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-10 border-l-2 border-zinc-800 pl-6">
            Developed for high-net-worth individuals and executives, SafeDecoy offers 
            unparalleled peace of mind with a <span className="text-white font-bold">deceptively simple design</span>.
          </p>
        </div>

        {/* RIGHT CARD - THE BOLD VISUAL */}
        <div className="relative flex justify-center items-center">
          {/* Large Background Glow to make the card visible */}
          <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

          <div className="relative w-72 h-[450px] bg-zinc-900 border-2 border-[#ff3700] shadow-[0_0_40px_rgba(6,182,212,0.2)] group transition-all duration-500 hover:border-[#ff3700]">
            
            {/* Top Security Bar */}
            <div className="w-full h-12 border-b border-zinc-800 flex items-center px-4 justify-between bg-black/50">
                <div className="flex gap-1">
                    <div className="w-1 h-1 bg-[#ff3700] animate-pulse"></div>
                    <div className="w-1 h-1 bg-[#ff3700]"></div>
                    <div className="w-1 h-1 bg-[#ff3700]"></div>
                </div>
                <span className="text-[8px] font-mono text-[#ff3700] tracking-widest uppercase italic">Encrypted_Link</span>
            </div>

            {/* Inner Device Graphic */}
            <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                {/* The "Wallet" Shape */}
                <div className="w-40 h-60 bg-gradient-to-b from-zinc-800 to-black border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Reflective Highlight */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
                    
                    {/* Scanning Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#ff3700] shadow-[0_0_15px_#06b6d4] animate-[scan_3s_linear_infinite]"></div>
                </div>

                <div className="mt-8">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1 font-bold">Visual Aid</p>
                    <p className="text-[10px] text-[#ff3700] italic">Stealth Protocol Active</p>
                </div>
            </div>

            {/* Sharp Corner Brackets - External */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#ff3700]"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#ff3700]"></div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      ` }} />
    </section>
  );
};

export default ProductTease;