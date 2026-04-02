import React from 'react';
import { ShieldAlert, Users, IndianRupee, Activity, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="flex flex-col gap-6 animate-in slide-in-from-right duration-500">
      
      <header className="flex justify-between items-center border-b border-border-dark pb-4">
        <div className="flex gap-2 items-center">
          <ShieldAlert className="w-8 h-8 text-amber" />
          <div className="flex flex-col">
            <h1 className="text-xl font-sans tracking-tight text-light">Admin <span className="text-amber">Console</span></h1>
            <p className="text-xs font-mono text-light/50 uppercase tracking-widest">Network Overview</p>
          </div>
        </div>
        <Link to="/" className="text-xs font-mono text-teal uppercase border border-teal/30 px-3 py-1 bg-teal/5">Exit</Link>
      </header>

      {/* Top Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flat-panel p-3 border-l-4 border-l-light-green">
          <span className="text-[10px] font-mono text-light/50 uppercase tracking-widest flex items-center gap-1">
            <Users className="w-3 h-3"/> Workers
          </span>
          <div className="text-xl data-mono font-bold mt-1">12,402</div>
        </div>
        <div className="flat-panel p-3 border-l-4 border-l-amber">
          <span className="text-[10px] font-mono text-light/50 uppercase tracking-widest flex items-center gap-1">
            <Activity className="w-3 h-3"/> Active Claims
          </span>
          <div className="text-xl data-mono text-amber font-bold mt-1">345</div>
        </div>
        <div className="flat-panel p-3 border-l-4 border-l-red">
          <span className="text-[10px] font-mono text-light/50 uppercase tracking-widest flex items-center gap-1">
            <AlertTriangle className="w-3 h-3"/> Fraud Flags
          </span>
          <div className="text-xl data-mono text-red font-bold mt-1">87</div>
        </div>
        <div className="flat-panel p-3 border-l-4 border-l-teal">
          <span className="text-[10px] font-mono text-light/50 uppercase tracking-widest flex items-center gap-1">
            <IndianRupee className="w-3 h-3"/> Pool Bal.
          </span>
          <div className="text-xl data-mono text-teal font-bold mt-1">1.2M</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        
        {/* Risk Analytics Table */}
        <div className="flat-panel p-4 flex flex-col gap-3">
          <h3 className="font-mono text-xs w-full text-light/50 border-b border-border-dark pb-2 uppercase tracking-widest">Risk Analytics</h3>
          <div className="overflow-x-auto text-xs font-mono">
            <table className="w-full text-left">
              <thead>
                <tr className="text-light/50 border-b border-border-dark/50">
                  <th className="pb-2 font-normal">ZONE</th>
                  <th className="pb-2 font-normal">TIER</th>
                  <th className="pb-2 font-normal text-amber">DSRP</th>
                  <th className="pb-2 font-normal">CLAIMS</th>
                  <th className="pb-2 font-normal text-right">PAYOUT</th>
                </tr>
              </thead>
              <tbody className="text-light data-mono">
                <tr className="border-b border-border-dark/20">
                  <td className="py-2">560001</td>
                  <td className="py-2"><span className="text-amber">T3</span></td>
                  <td className="py-2">2</td>
                  <td className="py-2">120</td>
                  <td className="py-2 text-right">₹36K</td>
                </tr>
                <tr className="border-b border-border-dark/20">
                  <td className="py-2">560068</td>
                  <td className="py-2"><span className="text-red">T5</span></td>
                  <td className="py-2">1</td>
                  <td className="py-2">80</td>
                  <td className="py-2 text-right">₹24K</td>
                </tr>
                <tr>
                  <td className="py-2">560034</td>
                  <td className="py-2"><span className="text-green">T1</span></td>
                  <td className="py-2">0</td>
                  <td className="py-2">2</td>
                  <td className="py-2 text-right">₹600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fraud Alert Feed */}
        <div className="flat-panel flex flex-col gap-3">
          <h3 className="font-mono text-xs p-4 pb-2 text-red border-b border-border-dark flex items-center gap-2 uppercase tracking-widest">
            <AlertTriangle className="w-4 h-4"/> Fraud Alerts
          </h3>
          <div className="flex flex-col text-xs font-mono pb-2 px-2">
            <div className="flex justify-between items-center p-2 border-b border-border-dark/30 hover:bg-red/5">
              <div className="flex flex-col gap-0.5">
                <span className="text-light/80 data-mono">W2049</span>
                <span className="text-light/40 uppercase text-[10px]">WIFI CLUSTER MATCH</span>
              </div>
              <span className="text-amber border border-amber/30 bg-amber/10 px-1 uppercase text-[10px]">Quarantined</span>
            </div>
            <div className="flex justify-between items-center p-2 border-b border-border-dark/30 hover:bg-red/5">
              <div className="flex flex-col gap-0.5">
                <span className="text-light/80 data-mono">W9322</span>
                <span className="text-light/40 uppercase text-[10px]">GPS SPOOF DETECTED</span>
              </div>
              <span className="text-red border border-red/30 bg-red/10 px-1 uppercase text-[10px]">Banned</span>
            </div>
            <button className="text-[10px] uppercase tracking-widest text-light/40 hover:text-light p-2 text-center w-full mt-2">View All (87)</button>
          </div>
        </div>

        {/* Disruption Log */}
        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs w-full text-teal flex gap-2 items-center uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Trigger Events
          </h3>
          <div className="flex flex-col text-[10px] font-mono data-mono border-l border-teal/30 ml-2 pl-3 gap-4">
            <div className="flex flex-col gap-1 relative">
              <div className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-amber"></div>
              <span className="text-light/40">TODAY 14:30:00</span>
              <span className="text-amber text-sm font-sans font-bold uppercase tracking-tight">Heavy Rain &gt; 40mm</span>
              <span className="text-light/70 uppercase">Zones: 560001, 560025</span>
              <span className="text-teal uppercase font-bold bg-teal/10 px-1 inline-block w-fit mt-1">45 Auto-Claims Gen.</span>
            </div>
            
            <div className="flex flex-col gap-1 relative opacity-70">
              <div className="absolute -left-[17px] top-1 w-2 h-2 rounded-full bg-border-dark"></div>
              <span className="text-light/40">YEST. 09:15:00</span>
              <span className="text-light text-sm font-sans font-bold uppercase tracking-tight">Traffic &lt; 10 km/h</span>
              <span className="text-light/70 uppercase">Zones: 560068</span>
              <span className="text-teal uppercase font-bold bg-teal/10 px-1 inline-block w-fit mt-1">12 Auto-Claims Gen.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
