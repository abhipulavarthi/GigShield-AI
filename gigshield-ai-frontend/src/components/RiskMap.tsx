import React, { useState } from 'react';
import { Map, Zap } from 'lucide-react';

const mockZones = [
  { id: 'Z1', pin: '560034', tier: 1, color: 'bg-green', probability: 10, disruptions: 0, premium: 15 },
  { id: 'Z2', pin: '560035', tier: 2, color: 'bg-light-green', probability: 25, disruptions: 0, premium: 20 },
  { id: 'Z3', pin: '560001', tier: 3, color: 'bg-amber', probability: 35, disruptions: 1, premium: 25 },
  { id: 'Z4', pin: '560025', tier: 4, color: 'bg-orange', probability: 60, disruptions: 2, premium: 30 },
  { id: 'Z5', pin: '560068', tier: 5, color: 'bg-red', probability: 80, disruptions: 3, premium: 35 },
];

export default function RiskMap() {
  const [selectedZone, setSelectedZone] = useState<any>(mockZones[2]); // Default preselect Z3

  return (
    <div className="flat-panel p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-border-dark pb-2">
        <h3 className="font-mono text-xs text-light/50 flex gap-2 items-center">
          <Map className="w-3 h-3 text-teal" />
          CITY RISK ZONES
        </h3>
      </div>
      
      {/* City Grid - minimal CSS representation */}
      <div className="grid grid-cols-3 gap-1 h-32 w-full p-2 border border-border-dark/50 bg-border-dark/10">
        {mockZones.concat([...mockZones]).slice(0, 9).map((z, i) => (
          <button
            key={i}
            onClick={() => setSelectedZone(z)}
            className={`${z.color} bg-opacity-80 hover:bg-opacity-100 transition-opacity flex items-center justify-center border border-dark
            ${selectedZone?.id === z.id ? 'ring-2 ring-light z-10' : ''}`}
            title={`Zone ${z.pin}`}
          >
            <span className="font-mono text-xs font-bold text-dark">{z.tier}</span>
          </button>
        ))}
      </div>

      {/* Selected Info */}
      {selectedZone && (
        <div className="p-3 border border-border-dark flex flex-col gap-2 font-mono text-xs text-light animate-in fade-in duration-300">
          <div className="flex justify-between items-center text-sm border-b border-border-dark/50 pb-2">
            <span className="text-light/50">TARGET: {selectedZone.pin}</span>
            <span className={`font-bold uppercase ${selectedZone.color.replace('bg-', 'text-')}`}>
              TIER {selectedZone.tier}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-1 pt-1">
            <span className="text-light/50">Base Prem:</span>
            <span className="text-right data-mono">₹{selectedZone.premium}/wk</span>
            
            <span className="text-light/50">Prob:</span>
            <span className="text-right data-mono text-teal">{selectedZone.probability}%</span>
            
            <span className="text-light/50">Disruptions:</span>
            <span className="text-right flex justify-end">
              {selectedZone.disruptions > 0 ? (
                <span className="text-amber flex items-center gap-1 data-mono">
                  <Zap className="w-3 h-3"/> {selectedZone.disruptions} ACTIVE
                </span>
              ) : (
                <span className="text-teal data-mono">0 CLEAR</span>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
