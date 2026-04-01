import React from 'react';

export default function TrustScore({ score = 85 }: { score?: number }) {
  // 0-40: Strict (Red), 41-75: Light (Amber), 76-100: Instant (Teal)
  let color = 'text-red stroke-red';
  let label = 'STRICT VALIDATION';
  if (score > 40 && score <= 75) {
    color = 'text-amber stroke-amber';
    label = 'LIGHT VERIFICATION';
  } else if (score > 75) {
    color = 'text-teal stroke-teal';
    label = 'INSTANT PAYOUTS';
  }

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flat-panel p-4 flex flex-col items-center gap-4">
      <h3 className="font-mono text-xs w-full text-left text-light/50 border-b border-border-dark pb-2">TRUST SCORE</h3>
      
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Background Ring */}
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle 
            cx="64" cy="64" r={radius} 
            stroke="currentColor" strokeWidth="6" fill="transparent" 
            className="text-border-dark"
          />
          {/* Progress Ring */}
          <circle 
            cx="64" cy="64" r={radius} 
            stroke="currentColor" strokeWidth="6" fill="transparent" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="square"
            className={`${color} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="flex flex-col items-center justify-center">
          <span className={`text-3xl font-bold font-mono ${color.split(' ')[0]}`}>{score}</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-1 text-center">
        <span className={`font-mono text-xs font-bold px-2 py-0.5 border ${
          score > 75 ? 'border-teal/30 bg-teal/10 text-teal' : 
          score > 40 ? 'border-amber/30 bg-amber/10 text-amber' : 
          'border-red/30 bg-red/10 text-red'
        }`}>
          [{label}]
        </span>
        <span className="text-[10px] font-mono text-light/40 mt-1">Increases with genuine activity</span>
      </div>
    </div>
  );
}
