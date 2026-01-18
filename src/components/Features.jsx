import React from 'react';
import { Shield, Bell, MapPin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="relative p-12 border-2 border-zinc-800 bg-black group hover:border-[#ff3700] transition-all duration-500">
    {/* Sharp Corner Accents */}
    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#ff3700] opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#ff3700] opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    {/* ENLARGED ICON CONTAINER */}
    <div className="mb-10 inline-block p-6 bg-zinc-900/50 border border-zinc-700 group-hover:border-[#ff3700]/50 transition-colors">
        {/* Increased icon size to w-14 h-14 */}
        <Icon className="w-14 h-14 text-[#ff3700] stroke-[1.5px]" />
    </div>
    
    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">{title}</h3>
    <p className="text-zinc-300 text-sm font-semibold leading-relaxed uppercase tracking-wider font-light">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 md:px-20 bg-transparent relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* HEALINE: Removed italic, kept font-black and uppercase */}
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-20 text-white">
          WHY <span className="text-[#ff3700]">SAFE DECOY?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard 
            icon={Shield}
            title="Discreet Design"
            desc="Looks just like a familiar device—only it’s working to protect you silently."
          />
          <FeatureCard 
            icon={Bell}
            title="Real-Time Alerts"
            desc="Instantly notifies authorities and your trusted contacts the second a threat is detected."
          />
          <FeatureCard 
            icon={MapPin}
            title="GPS Tracking"
            desc="Tracks the device’s location for a fast response from elite security teams."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;