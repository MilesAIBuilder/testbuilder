import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  trend: string;
}

const StatsCard = ({ icon: Icon, title, value, trend }: StatsCardProps) => {
  const isPositive = trend.startsWith('+');
  
  return (
    <div className="bg-[#131313]/30 rounded-xl p-4 border border-[#ffffff0f]">
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-5 h-5 text-[#4500F9]" />
        <span className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {trend}
        </span>
      </div>
      <p className="text-[#CCAFFF] text-sm mb-1">{title}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
};

export default StatsCard;