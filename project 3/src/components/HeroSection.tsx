import React from 'react';
import { ExternalLink } from 'lucide-react';
import ServiceLabel from './ServiceLabel';
import CallLogsDashboard from './Dashboard/CallLogsDashboard';

const HeroSection = () => {
  return (
    <div className="relative pt-44 pb-20"> {/* Increased from pt-32 to pt-44 */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <ServiceLabel />
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent">
            Automate with Intelligence
          </h1>
          <p className="text-xl text-[#CCAFFF] max-w-2xl mx-auto mb-8 font-light">
            Introducing Sentrovo's AI Automation Platform. Transforming business processes with next-generation artificial intelligence.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#4500F9] to-[#1F103B] rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2 mx-auto group">
            <span>Schedule Demo</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <CallLogsDashboard />
      </div>
    </div>
  );
};

export default HeroSection;