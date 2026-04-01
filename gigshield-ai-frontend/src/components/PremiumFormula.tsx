import React from 'react';
import { Calculator } from 'lucide-react';

export default function PremiumFormula() {
  return (
    <div className="flat-panel p-4 flex flex-col gap-3">
      <h3 className="font-mono text-xs w-full text-light/50 border-b border-border-dark pb-2 flex items-center justify-between">
        <span>PREMIUM ENGINE LOGIC</span>
        <Calculator className="w-3 h-3 text-teal" />
      </h3>
      
      <div className="flex flex-col gap-2 font-mono text-xs text-light">
        {/* Row 1 */}
        <div className="flex justify-between p-2 bg-border-dark/30 border border-border-dark">
          <span className="text-light/70 uppercase">Base Fee</span>
          <span className="text-teal data-mono">₹10.00</span>
        </div>
        
        {/* Row 2 */}
        <div className="flex justify-between p-2 bg-border-dark/30 border border-border-dark">
          <div className="flex gap-2">
            <span className="text-light/70 uppercase">+ Zone Risk</span>
            <span className="text-[10px] text-amber">(₹25.00 × 1.2 AI)</span>
          </div>
          <span className="text-amber data-mono">₹30.00</span>
        </div>
        
        {/* Row 3 */}
        <div className="flex justify-between p-2 bg-border-dark/30 border border-border-dark items-center">
          <div className="flex flex-col">
            <span className="text-light/70 uppercase">- Safety Discount</span>
            <span className="text-[10px] text-teal border border-teal/30 px-1 inline-block mt-1 bg-teal/10">Active Valve</span>
          </div>
          <span className="text-teal data-mono">-₹15.00</span>
        </div>

        {/* Total */}
        <div className="flex justify-between pt-3 mt-1 border-t border-border-dark">
          <span className="text-light uppercase tracking-widest font-bold font-sans">Total Weekly</span>
          <span className="text-teal data-mono font-bold text-lg">₹25.00</span>
        </div>
      </div>
    </div>
  );
}
