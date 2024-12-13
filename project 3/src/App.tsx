import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ConsultingSection from './components/ConsultingSection';
import AICapabilities from './components/AICapabilities';
import GridBackground from './components/GridBackground';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white font-sans antialiased">
      <GridBackground />
      <Navigation />
      <HeroSection />
      <ConsultingSection />
      <AICapabilities />
    </div>
  );
}

export default App;