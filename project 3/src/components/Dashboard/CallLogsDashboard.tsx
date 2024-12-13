import React, { useEffect, useRef } from 'react';
import { LineChart, Phone, Users, Clock, Activity } from 'lucide-react';
import StatsCard from './StatsCard';
import CallLogsTable from './CallLogsTable';
import CallVolumeChart from './CallVolumeChart';

const CallLogsDashboard = () => {
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current) return;
      
      const rect = dashboardRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight / 2)));
      
      // Enhanced perspective and translation values for more dramatic effect
      const rotateX = 40 - (scrollProgress * 40); // Increased from 30 to 40
      const translateY = 150 - (scrollProgress * 150); // Increased from 100 to 150
      const scale = 0.95 + (scrollProgress * 0.05); // Added subtle scale effect
      
      dashboardRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        translateY(${translateY}px)
        scale(${scale})
      `;
      dashboardRef.current.style.opacity = Math.min(1, scrollProgress + 0.2).toString();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={dashboardRef}
      className="w-full max-w-6xl mx-auto mt-16 relative transition-all duration-700 ease-out"
      style={{ transformOrigin: 'center top' }}
    >
      <div className="bg-[#1F103B]/10 backdrop-blur-md rounded-2xl border border-[#ffffff0f] p-6 shadow-[0_0_50px_-12px_rgba(69,0,249,0.25)]">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatsCard icon={Phone} title="Total Calls" value="2,847" trend="+12.5%" />
          <StatsCard icon={Users} title="Active Users" value="1,249" trend="+8.2%" />
          <StatsCard icon={Clock} title="Avg. Duration" value="4m 32s" trend="-2.1%" />
          <StatsCard icon={Activity} title="Success Rate" value="98.3%" trend="+1.4%" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-[#131313]/30 rounded-xl p-4 border border-[#ffffff0f] shadow-[0_0_30px_-12px_rgba(69,0,249,0.15)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#CCAFFF] font-medium">Call Volume</h3>
              <select className="bg-[#1F103B]/30 text-[#CCAFFF] border border-[#ffffff0f] rounded-lg px-2 py-1 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <CallVolumeChart />
          </div>

          <div className="bg-[#131313]/30 rounded-xl p-4 border border-[#ffffff0f] shadow-[0_0_30px_-12px_rgba(69,0,249,0.15)]">
            <h3 className="text-[#CCAFFF] font-medium mb-4">Recent Calls</h3>
            <CallLogsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogsDashboard;