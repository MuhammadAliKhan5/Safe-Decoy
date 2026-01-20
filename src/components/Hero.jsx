import React from 'react';

const Hero = () => {
  return (
    // Added w-screen and min-h-screen to force the section to fill the entire monitor
    <section className="relative w-screen min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/bg-real.png"
          alt="Luxury House Background"
          // w-full h-full + object-cover ensures it stretches and crops to fill every pixel
          className="w-full h-full object-cover brightness-98 contrast-110"
        />

        {/* OVERLAY: This darkens it just enough so your text stays readable */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* VIGNETTE: Darkens only the top and bottom to focus the eyes on the center */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center max-w-4xl w-full flex flex-col items-center">

        {/* LOGO */}
        <div className="mb-12">
          <img
            src="reallogo.png"
            alt="SafeDecoy Logo"
            className="h-32 md:h-40 w-auto object-contain drop-shadow-[0_0_30px_rgba(66,21,189,0.5)]"
          />
        </div>

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-white drop-shadow-2xl">
          A New Standard <br />
          <span className="text-[#4215bd]">of Protection.</span>
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-white text-sm md:text-base max-w-lg mx-auto mb-10 tracking-[0.25em] uppercase leading-relaxed font-bold drop-shadow-lg">
          Disguised as a familiar device. <br />
          Powered by cutting-edge security.
        </p>

        {/* SINGLE BUTTON CTA */}
        <button className="bg-white text-black font-black uppercase tracking-widest px-10 py-5 hover:bg-[#4215bd] hover:text-white transition-all duration-300 text-sm border border-white hover:border-[#4215bd] shadow-2xl">
          Get Notified First
        </button>
      </div>
    </section>
  );
};

export default Hero;