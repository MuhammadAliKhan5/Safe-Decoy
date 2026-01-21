import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-auto md:min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden py-16 md:py-0">
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/bg-image.png"
          alt="Luxury House Background"
          className="w-full h-full object-cover brightness-75 md:brightness-98 contrast-110"
        />

        <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl w-full flex flex-col items-center">
        <div className="mb-6 md:mb-12">
          <img
            src="logo.png"
            alt="SafeDecoy Logo"
            className="h-8 md:h-20 w-auto object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tight leading-[1.1] md:leading-[0.9] mb-4 md:mb-6 text-white">
          A New Standard <br />
          <span className="text-[#4215bd]">of Protection.</span>
        </h1>

        <p className="text-white text-[10px] md:text-base max-w-[260px] md:max-w-lg mx-auto mb-8 md:mb-10 tracking-[0.15em] md:tracking-[0.25em] uppercase leading-relaxed font-bold opacity-80">
          Disguised as a familiar device. <br className="hidden md:block" />
          Powered by cutting-edge security.
        </p>

        <button className="w-full max-w-[220px] md:max-w-none md:w-auto bg-white text-black font-black uppercase tracking-[0.2em] px-6 py-3 md:px-10 md:py-5 hover:bg-[#4215bd] hover:text-white transition-all duration-300 text-[10px] md:text-sm border border-white">
          Get Notified First
        </button>
      </div>
    </section>
  );
};

export default Hero;