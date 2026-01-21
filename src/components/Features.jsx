import React from 'react';
import { Shield, Bell, MapPin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="
    p-6 md:p-10 border border-zinc-800 bg-zinc-950/50
    transition-all duration-500 ease-out
    cursor-pointer group
    hover:border-[#4215bd] 
    hover:-translate-y-2
    hover:shadow-[0_0_50px_-10px_rgba(66,21,189,0.6)]
    hover:bg-[#4215bd]/5
  ">
    <Icon
      className="
        w-8 h-8 md:w-12 md:h-12 text-[#4215bd] mb-4 md:mb-6 
        transition-all duration-500
        group-hover:drop-shadow-[0_0_15px_rgba(66,21,189,0.9)]
        group-hover:scale-110
      "
    />
    <h3 className="text-base md:text-xl font-black uppercase mb-2 md:mb-3 text-white group-hover:text-[#4215bd] transition-colors duration-500">
      {title}
    </h3>
    <p className="text-zinc-400 text-[13px] md:text-sm leading-relaxed group-hover:text-zinc-200 transition-colors duration-500">
      {desc}
    </p>
  </div>
);

const Features = () => (
  <section className="py-12 md:py-32 px-6 md:px-20 border-t border-zinc-900 bg-black">
    <div className="max-w-7xl mx-auto">

      <h2 className="text-3xl md:text-7xl font-black uppercase mb-8 md:mb-20 text-white leading-tight">
        Why <span className="text-[#4215bd] drop-shadow-[0_0_20px_rgba(66,21,189,0.4)]">SafeDecoy?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
        <FeatureCard
          icon={Shield}
          title="Discreet Design"
          desc="Looks just like a familiar device while silently protecting you."
        />
        <FeatureCard
          icon={Bell}
          title="Real-Time Alerts"
          desc="Instantly notifies authorities and your trusted contacts."
        />
        <FeatureCard
          icon={MapPin}
          title="Instant GPS Tracking"
          desc="Tracks the device’s location for a fast and precise response."
        />
      </div>
      <div className="mt-8 md:mt-20 flex justify-center">
        <button className="
          w-fit md:w-auto 
          bg-white text-black font-black uppercase tracking-[0.2em] 
          px-6 py-3 md:px-10 md:py-5 
          hover:bg-[#4215bd] hover:text-white 
          transition-all duration-300 
          text-[9px] md:text-sm 
          border border-white hover:border-[#4215bd] shadow-2xl
        ">
          Stay Informed – Get Early Access
        </button>
      </div>

    </div>
  </section>
);

export default Features;