import React from 'react';

const NavLinks = () => {
  return (
    <div className="bg-[#131313]/30 backdrop-blur-md rounded-full px-6 py-2 border border-[#ffffff0f]">
      <div className="flex items-center gap-8 text-sm">
        <a href="#" className="text-[#CCAFFF] hover:text-white transition-colors">Overview</a>
        <a href="#" className="text-[#CCAFFF] hover:text-white transition-colors">Technology</a>
        <a href="#" className="text-[#CCAFFF] hover:text-white transition-colors">Solutions</a>
        <a href="#" className="text-[#CCAFFF] hover:text-white transition-colors">Resources</a>
      </div>
    </div>
  );
};

export default NavLinks;