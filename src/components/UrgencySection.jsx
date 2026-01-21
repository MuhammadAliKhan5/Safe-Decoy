import React from 'react';

export const UrgencySection = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-transparent border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4215bd]/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white">
            COMING <span className="text-[#4215bd]">SOON</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto">
            SafeDecoy is currently in development and will be available in a few months.
            Be the first to know when we launch.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Get Early Access & <br /> Exclusive Updates
              </h3>
              <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Be among the first to know when SafeDecoy launches. Sign up to receive updates and special offers.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="bg-zinc-900/80 border border-zinc-700 px-6 py-4 text-white text-sm w-full rounded outline-none focus:border-[#4215bd] transition-colors placeholder:text-zinc-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#4215bd] text-white uppercase font-black text-sm rounded hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex-1 w-full">
            <div className="relative group">
              <img
                src="final2.png"
                alt="SafeDecoy Preview"
                className="w-full h-auto object-cover rounded-2xl border 
                       transition-all duration-500 ease-in-out
                       hover:scale-105 hover:border-[#4215bd] 
                       hover:shadow-[0_0_40px_-10px_rgba(189,60,27,0.3)]
                       cursor-pointer"
              />
              <div className="absolute inset-0 bg-[#4215bd]/5 -z-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};