import React from 'react';

const SecurityVisual = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-transparent relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE: THE IMAGE (Restored to simple, sharp style) */}
        <div className="relative">
          {/* Simple Border Accent to frame the image */}
          <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-[#ff3700]"></div>

          <img
            src="image.jpg"
            alt="Security Interior"
            className="w-full grayscale contrast-125 brightness-75 border border-zinc-800"
          />

          {/* Bottom Accent */}
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-[#ff3700]"></div>
        </div>

        {/* RIGHT SIDE: TEXT & OLD STYLE BUTTON */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-white">
            REAL-TIME <br />
            <span className="text-[#ff3700]">THREAT</span> RESPONSE.
          </h2>

          <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-lg">
            The moment a breach is detected, SafeDecoy initiates a silent uplink.
            No sirens. No warnings. Just an immediate, encrypted alert to
            authorities and your private security detail.
          </p>

          {/* RESTORED OLD STYLE BUTTON: Solid White, Black Text, No Blurs */}
          {/* THE RESTORED OLD STYLE BUTTON */}
          <button className="bg-white text-black uppercase tracking-[0.2em] px-12 py-5 text-[14px] hover:bg-[#ff3700] hover:text-white transition-all duration-300 antialiased shadow-none border-none">
            System Overview
          </button>
        </div>

      </div>
    </section>
  );
};

export default SecurityVisual;