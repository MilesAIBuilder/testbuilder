import React from 'react';
import { Brain } from 'lucide-react';
import NavLinks from './NavLinks';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-[#4500F9]" />
          <span className="text-lg font-semibold text-white">sentrovo</span>
        </div>
        
        <NavLinks />

        <button className="px-4 py-1.5 rounded-full bg-[#4500F9] hover:bg-[#4500F9]/90 text-white text-sm transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navigation;