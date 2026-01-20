import React from 'react';
import { Shield, Bell, MapPin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="
    p-10 border border-zinc-600 bg-zinc-950/50
    transition-all duration-500 ease-out
    cursor-pointer
    group
    hover:border-[#4215bd] 
    hover:-translate-y-3
    hover:shadow-[0_0_60px_-10px_rgba(66,21,189,0.8)]
  ">
    <Icon className="w-12 h-12 text-[#4215bd] mb-6 group-hover:drop-shadow-[0_0_10px_rgba(189,60,27,0.8)]" />
    <h3 className="text-xl font-black uppercase mb-3 text-white">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Features = () => (
  <section className="py-32 px-6 md:px-20 border-t border-zinc-900 bg-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-20 text-white">
        Why <span className="text-[#4215bd]">SafeDecoy?</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <FeatureCard icon={Shield} title="Discreet Design" desc="Looks just like a familiar device while silently protecting you." />
        <FeatureCard icon={Bell} title="Real-Time Alerts" desc="Instantly notifies authorities and your trusted contacts." />
        <FeatureCard icon={MapPin} title="Instant GPS Tracking" desc="Tracks the device’s location for a fast and precise response." />
      </div>
    </div>
  </section>
);

export default Features;