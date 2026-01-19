import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND HOUSE IMAGE */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 
               bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d')] 
               bg-cover bg-center grayscale-[10%] contrast-110 brightness-70 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* HERO CONTENT: Centered */}
      <div className="relative z-10 text-center max-w-4xl w-full flex flex-col items-center">
        
        {/* LOGO: Centered Above Headline */}
        <div className="mb-12">
          <img
            src="logo.png"
            alt="SafeDecoy Logo"
            className="h-38 md:h-47 w-auto object-contain drop-shadow-[0_0_40px_rgba(255,55,0,0.6)]"
          />
        </div>

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-white">
          A New Standard <br />
          <span className="text-[#bd3c1b]">of Protection.</span>
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-zinc-200 text-sm md:text-sm max-w-lg mx-auto mb-6 tracking-[0.25em] uppercase leading-relaxed">
          Disguised as a familiar device. <br />
          Powered by cutting-edge security.
        </p>

        {/* SINGLE BUTTON CTA */}
        <button className="bg-white text-black font-black uppercase tracking-widest px-12 py-5 hover:bg-[#bd3c1b] hover:text-white transition-all duration-300 text-sm border border-white hover:border-[#bd3c1b]">
          Get Notified First – Join the List
        </button>
      </div>
    </section>
  );
};

export default Hero;