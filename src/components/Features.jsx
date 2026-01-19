import React from 'react';
import { Shield, Bell, MapPin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-10 border border-zinc-500 bg-transparent hover:border-[#bd3c1b] transition-all">
    <Icon className="w-12 h-12 text-[#bd3c1b] mb-6" />
    <h3 className="text-xl font-black uppercase mb-3 text-white">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Features = () => (
  <section className="py-32 px-6 md:px-20 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto">

      <h2 className="text-5xl md:text-7xl font-black uppercase mb-20 text-white">
        Why <span className="text-[#bd3c1b]">SafeDecoy?</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
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

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-24">
        <div className="relative group">
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-3 h-3 border-t border-l border-[#bd3c1b]"></div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b border-r border-[#bd3c1b]"></div>

          <button
            className="
              px-12 py-4
              bg-white text-black
              font-black uppercase
              tracking-widest text-xs
              hover:bg-[#bd3c1b] hover:text-white
              transition-all duration-300
            "
          >
            Stay Informed – Get Early Access
          </button>
        </div>
      </div>

    </div>
  </section>
);

export default Features;
