import React from 'react';

export const CandelaLogo: React.FC<{ className?: string; layout?: 'horizontal' | 'vertical'; lightText?: boolean }> = ({
  className = "h-10",
  layout = 'horizontal',
  lightText = true
}) => {
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col items-center text-center' : 'items-center'} gap-3 group select-none`}>
      {/* Geometric Sloped Bar Mark */}
      <svg
        viewBox="0 0 120 100"
        className={`${className} w-auto transition-transform duration-300 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* Top Segment - Red (Thermal / Gas Flare) */}
        <path d="M35 15 L100 15 L90 29 L25 29 Z" fill="url(#redGradient)" />
        
        {/* Upper Middle Segment - Red */}
        <path d="M28 33 L105 33 L95 47 L18 47 Z" fill="url(#redGradient)" />

        {/* Center Segment - Orange (Power Generation) */}
        <path d="M22 51 L95 51 L85 65 L12 65 Z" fill="url(#orangeGradient)" />

        {/* Lower Segment - Blue (Grid Infrastructure & Trust) */}
        <path d="M15 69 L85 69 L75 83 L5 83 Z" fill="url(#blueGradient)" />
      </svg>

      {/* Corporate Typography */}
      <div className="flex flex-col">
        <div className={`text-xl sm:text-2xl tracking-tight font-extrabold leading-none ${lightText ? 'text-white' : 'text-slate-900'}`}>
          <span>CANDELA</span>
          <span className={lightText ? 'font-light text-slate-300 ml-1' : 'font-light text-slate-700 ml-1'}>ENERGY</span>
        </div>
        <span className={`text-[9px] font-bold tracking-[0.28em] uppercase mt-1 ${lightText ? 'text-slate-400' : 'text-slate-500'}`}>
        Nigeria Limited
        </span>
      </div>
    </div>
  );
};

export default CandelaLogo;
