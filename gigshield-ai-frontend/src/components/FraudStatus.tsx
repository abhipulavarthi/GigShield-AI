import React from 'react';
import { Check, Clock } from 'lucide-react';

export default function FraudStatus({ ccssScore = 45 }: { ccssScore?: number }) {
  let label = 'AUTO APPROVED';
  let color = 'text-teal';
  let barColor = 'bg-teal';
  
  if (ccssScore > 30 && ccssScore <= 70) {
    label = 'SOFT LOCK - RE-VALIDATION';
    color = 'text-amber';
    barColor = 'bg-amber';
  } else if (ccssScore > 70) {
    label = 'INVESTIGATIVE QUARANTINE';
    color = 'text-red';
    barColor = 'bg-red';
  }

  const checks = [
    { name: 'GPS Validated', status: 'pass' },
    { name: 'Barometer Sync', status: 'pass' },
    { name: 'Network Check', status: 'pass' },
    { name: 'Behavior Profile', status: 'pass' },
    { name: 'Delivery Platform Sync', status: 'pass' },
    { name: 'Acoustic Check', status: 'pending' },
  ];

  return (
    <div className="flat-panel p-4 flex flex-col gap-4">
      <h3 className="font-mono text-xs w-full text-left text-light/50 border-b border-border-dark pb-2 text-wrap">CCSS CONFIDENCE SCORE</h3>
      
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-baseline font-mono text-xs">
          <span className="text-light/70 uppercase">Risk Level</span>
          <span className={`font-bold ${color}`}>[{label}]</span>
        </div>
        
        {/* Progress Bar Monochrome style but with minimal color cue */}
        <div className="h-2 w-full bg-border-dark relative overflow-hidden">
          <div 
            className={`absolute top-0 left-0 h-full ${barColor} transition-all duration-1000`}
            style={{ width: `${ccssScore}%` }}
          />
        </div>
        <span className="text-right font-mono data-mono text-[10px] text-light/50">{ccssScore} / 100</span>
      </div>

      <div className="flex flex-col gap-1 border-t border-border-dark pt-3">
        <span className="text-[10px] font-mono text-light/50 mb-1 tracking-widest uppercase">System Checks</span>
        {checks.map((check, idx) => (
          <div key={idx} className="flex items-center gap-2 font-mono text-xs text-light/80">
            {check.status === 'pass' ? (
              <Check className="w-3 h-3 text-teal" />
            ) : (
              <Clock className="w-3 h-3 text-amber animate-spin" />
            )}
            <span>{check.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
