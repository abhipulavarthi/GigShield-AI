import React, { useState, useEffect } from 'react';
import { FileText, Cpu, CheckCircle2, IndianRupee, Send, AlertTriangle } from 'lucide-react';

export default function ClaimsFlow() {
  const [autoClaimState, setAutoClaimState] = useState<'running' | 'passed' | 'paid' | 'idle'>('idle');
  const [manualClaimMode, setManualClaimMode] = useState(false);

  // Simulate auto-claim on mount for demo
  useEffect(() => {
    setAutoClaimState('running');
    const t1 = setTimeout(() => setAutoClaimState('passed'), 2000);
    const t2 = setTimeout(() => setAutoClaimState('paid'), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (manualClaimMode) {
    return (
      <div className="flat-panel p-4 flex flex-col gap-4 animate-in slide-in-from-right duration-300">
        <h3 className="font-mono text-xs w-full text-light/50 border-b border-border-dark pb-2 flex items-center justify-between">
          <span>MANUAL CLAIM ENTRY</span>
          <button onClick={() => setManualClaimMode(false)} className="text-teal underline uppercase hover:text-light transition-colors">Back</button>
        </h3>
        
        <form className="flex flex-col gap-3 font-mono text-xs" onSubmit={(e) => { e.preventDefault(); setManualClaimMode(false); alert("Sent to fraud queue!"); }}>
          <label className="flex flex-col gap-1">
            <span className="text-light/50">Disruption Type</span>
            <select required className="flat-panel p-2 bg-dark text-light border-border-dark outline-none focus:border-teal">
              <optgroup className="bg-dark text-light font-mono">
                <option value="">Select Type...</option>
                <option value="rain">Heavy Rainfall</option>
                <option value="flood">Localized Flooding</option>
                <option value="curfew">Zone Curfew</option>
                <option value="traffic">Severe Traffic Halt</option>
              </optgroup>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-light/50">Duration (Minutes)</span>
            <input type="number" required placeholder="e.g. 120" className="flat-panel p-2 text-light bg-transparent outline-none focus:border-teal" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-light/50">Details / Proof Link</span>
            <textarea required rows={2} placeholder="Description..." className="flat-panel p-2 text-light bg-transparent outline-none focus:border-teal"></textarea>
          </label>
          
          <button type="submit" className="mt-2 bg-border-dark text-light p-3 flex items-center justify-center gap-2 hover:bg-border-dark/80 transition-colors uppercase font-bold tracking-widest font-sans">
            <Send className="w-4 h-4" /> Submit Report
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Auto Claim Active Screen */}
      <div className="flat-panel p-4 flex flex-col gap-4 border-l-4 border-l-teal">
        <div className="flex justify-between items-start border-b border-border-dark pb-3">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-teal tracking-widest uppercase">Target Detected</span>
            <h3 className="text-lg font-sans font-bold flex gap-2 items-center text-light">
              <AlertTriangle className="w-5 h-5 text-amber" />
              Heavy Rain &gt; 40mm
            </h3>
          </div>
          <span className="data-mono text-xs text-light/50 uppercase">Claim #C2041</span>
        </div>
        
        <div className="flex flex-col gap-2 font-mono text-xs">
          {/* Status Steps */}
          <div className="flex items-center gap-3 w-full">
            <span className={`flex-shrink-0 flex items-center gap-2 w-1/3 ${autoClaimState === 'running' ? 'text-teal animate-pulse font-bold' : 'text-light/30'}`}>
              {autoClaimState === 'running' ? <Cpu className="w-4 h-4" /> : <span className="w-4"></span>}
              [RUNNING]
            </span>
            <span className={`flex-shrink-0 flex items-center gap-2 w-1/3 ${autoClaimState === 'passed' ? 'text-teal font-bold' : 'text-light/30'}`}>
              {autoClaimState === 'passed' ? <CheckCircle2 className="w-4 h-4" /> : <span className="w-4"></span>}
              [PASSED]
            </span>
            <span className={`flex-shrink-0 flex items-center gap-2 w-1/3 justify-end ${autoClaimState === 'paid' ? 'text-teal font-bold animate-pulse' : 'text-light/30'}`}>
              {autoClaimState === 'paid' ? <IndianRupee className="w-4 h-4" /> : <span className="w-4"></span>}
              [SENT]
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-1 w-full bg-border-dark relative mt-2 mb-2">
            <div className={`absolute top-0 left-0 h-full bg-teal transition-all duration-1000 ${
              autoClaimState === 'running' ? 'w-1/3' :
              autoClaimState === 'passed' ? 'w-2/3' : 'w-full'
            }`} />
          </div>

          {/* Amount Paid Confirmation */}
          {autoClaimState === 'paid' && (
            <div className="text-center w-full p-2 bg-teal/10 border border-teal/20 text-teal uppercase tracking-widest mt-2 animate-in slide-in-from-bottom-2 flex items-center justify-center gap-2 font-bold font-sans">
              <CheckCircle2 className="w-4 h-4" /> ₹300 CREDITED
            </div>
          )}
        </div>
      </div>
      
      {/* Manual Fallback */}
      <button 
        onClick={() => setManualClaimMode(true)}
        className="flat-panel p-3 text-center text-[10px] font-mono text-light/50 uppercase hover:bg-border-dark transition-colors flex items-center justify-center gap-2"
      >
        <FileText className="w-3 h-3" /> Report Uncaptured Disruption
      </button>
    </div>
  );
}
