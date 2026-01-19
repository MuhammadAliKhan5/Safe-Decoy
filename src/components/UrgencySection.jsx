import React from 'react';

export const UrgencySection = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-transparent border-t border-zinc-900 relative">

      {/* Subtle Glow for Neon Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff3700]/10 blur-[80px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center space-y-12">

        {/* Coming Soon Text */}
        <h2 className="text-4xl md:text-6xl font-black uppercase text-white">
          COMING <span className="text-[#bd3c1b]">SOON</span>
        </h2>


        {/* Subtext */}
        <p className="text-zinc-400 text-sm md:text-base uppercase tracking-[0.2em] leading-relaxed">
          SafeDecoy is currently in development and will be available in a few months.
          Be the first to know when we launch.
        </p>

        {/* Email Subscribe Section */}
        <div className="space-y-6">
          {/* Title */}
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
            Get Early Access & Exclusive Updates
          </h3>

          {/* Copy */}
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Be among the first to know when SafeDecoy launches. Sign up to receive updates and special offers.
          </p>

          {/* Form */}
          <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-zinc-900/80 border border-zinc-700 px-6 py-4 text-white text-sm w-full md:flex-1 rounded outline-none placeholder:text-zinc-500"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#bd3c1b] text-white uppercase font-black text-sm rounded hover:bg-white hover:text-black transition-all duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
