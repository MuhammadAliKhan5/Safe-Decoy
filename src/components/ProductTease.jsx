import React from 'react';

const ProductTease = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-transparent border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white">
            SafeDecoy: <br />
            Where <span className="text-[#bd3c1b]">Security</span> Meets Innovation.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-zinc-800 pl-6">
            Unparalleled peace of mind with a deceptively simple design.
            The internal core is engineered to remain invisible until the moment protection is needed.
          </p>
        </div>

        {/* SHINY INTERNAL CORE DEVICE */}
        <div className="flex justify-center relative">
          <img 
            className='h-120 rounded-2xl border border-zinc-800 
                       transition-all duration-500 ease-in-out
                       hover:scale-105 hover:border-[#bd3c1b]/50 
                       hover:shadow-[0_0_40px_-10px_rgba(189,60,27,0.3)]
                       cursor-pointer' 
            src="secy.jpg" 
            alt="SafeDecoy internal core" 
          />
        </div>

      </div>
    </section>
  );
};

export default ProductTease;