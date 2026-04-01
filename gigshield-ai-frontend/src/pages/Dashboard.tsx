import { useState, useEffect } from 'react';
import { User, AlertTriangle } from 'lucide-react';
import TriggerEngine from '../components/TriggerEngine';
import RiskMap from '../components/RiskMap';
import ClaimsFlow from '../components/ClaimsFlow';
import FraudStatus from '../components/FraudStatus';
import TrustScore from '../components/TrustScore';
import PremiumFormula from '../components/PremiumFormula';

type DashboardData = {
  worker: any;
  disruptions: any[];
  claims: any[];
};

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [coverageActive, setCoverageActive] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview'|'risk'|'claims'>('overview');

  useEffect(() => {
    // Mock user load
    const loadData = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8080';
        const [wRes, dRes, cRes] = await Promise.all([
          fetch(`${apiBase}/workers?id=W1001`),
          fetch(`${apiBase}/disruptions`),
          fetch(`${apiBase}/claims?worker_id=W1001`)
        ]);
        const wData = await wRes.json();
        const dData = await dRes.json();
        const cData = await cRes.json();
        
        setData({
          worker: wData[0],
          disruptions: dData,
          claims: cData
        });
      } catch (err) {
        console.error('Data load failed', err);
        // Fallback mock
        setData({
          worker: { id: "W1001", name: "Ravi Kumar", tier: 3, zone: "Bengaluru", premium: 25, trust_score: 85 },
          disruptions: [{ type: "Heavy Rain", triggered: true, value: "45mm" }],
          claims: [{ amount: 300, status: "APPROVED", disruption_type: "Heavy Rain", timestamp: new Date(), ccss_score: 25 }]
        });
      }
    };
    loadData();
  }, []);

  if (!data) return <div className="p-8 font-mono text-center text-light flex items-center justify-center animate-pulse tracking-widest">[LOADING CORE SYSTEM]</div>;

  const { worker, disruptions, claims } = data;
  const activeDisruption = disruptions?.find(d => d.triggered);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      
      {/* Top Bar */}
      <header className="flex justify-between items-center border-b border-border-dark pb-3">
        <div className="flex gap-3 items-center">
          <div className="bg-border-dark p-2 rounded-full"><User className="w-5 h-5 text-teal" /></div>
          <div className="flex flex-col">
            <span className="font-sans font-bold leading-none">{worker?.name || 'Worker'}</span>
            <span className="font-mono text-xs text-light/50">ID: {worker?.id}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="font-mono text-xs text-light/50">ZONE {worker?.zone}</span>
          <span className="text-[10px] font-bold px-2 py-0.5 border border-amber text-amber bg-amber/10 tracking-widest uppercase">
            TIER {worker?.tier || 3}
          </span>
        </div>
      </header>

      {/* Disruption Banner */}
      {activeDisruption && (
        <div className="flat-panel border-teal bg-teal/10 p-3 flex gap-3 items-center">
          <AlertTriangle className="text-teal w-6 h-6 shrink-0 animate-pulse" />
          <div className="flex flex-col gap-1">
            <span className="text-teal font-sans text-sm font-bold">
              {activeDisruption.type} Detected ({activeDisruption.value})
            </span>
            <span className="font-mono text-[10px] text-teal/80">
              Auto-claim processing in background...
            </span>
          </div>
        </div>
      )}

      {/* Stat Blocks */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flat-panel p-3 flex flex-col gap-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-border-dark"></div>
          <span className="text-xs font-mono text-light/50 pl-2">WEEKLY PREMIUM</span>
          <div className="flex items-end gap-1 pl-2">
            <span className="text-xl data-mono font-bold">₹{worker?.premium}</span>
            <span className="text-[10px] text-light/50 mb-1">/ wk</span>
          </div>
        </div>

        <div className={`flat-panel p-3 flex flex-col gap-2 relative 
          ${coverageActive ? 'border-teal/50 bg-teal/5' : 'border-red/50 bg-red/5'}`}>
          <div className={`absolute top-0 left-0 w-1 h-full ${coverageActive ? 'bg-teal' : 'bg-red'}`}></div>
          <div className="flex justify-between items-center pl-2">
            <span className="text-xs font-mono text-light/50">COVERAGE</span>
            <button 
              onClick={() => setCoverageActive(!coverageActive)}
              className="font-mono text-[10px] px-2 py-1 border border-border-dark bg-dark uppercase hover:bg-border-dark transition-colors"
            >
              Toggle
            </button>
          </div>
          <span className={`text-sm tracking-widest pl-2 font-bold font-mono ${coverageActive ? 'text-teal' : 'text-red'}`}>
            {coverageActive ? '[ACTIVE]' : '[PAUSED]'}
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex mt-2 mb-2 p-1 bg-border-dark/30 font-mono text-[10px] rounded-sm select-none">
        {['overview', 'risk', 'claims'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex-1 py-2 text-center transition-colors uppercase tracking-widest ${
              activeTab === tab ? 'bg-dark text-teal outline outline-1 outline-teal shadow-none' : 'text-light/50 hover:text-light'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {activeTab === 'overview' && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="text-sm text-light/80 bg-border-dark/20 p-3 rounded border border-border-dark">
              <strong>Overview Dashboard:</strong> Your Trust Score determines your Weekly Premium. Maintain a high score (via good ratings and safe behavior) to lower your coverage costs.
            </div>
            <TrustScore score={worker?.trust_score} />
            <PremiumFormula />
          </div>
        )}

        {activeTab === 'risk' && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="text-sm text-light/80 bg-border-dark/20 p-3 rounded border border-border-dark">
              <strong>Live Risk Radar:</strong> We monitor real-time weather and civic APIs for your zone. If severe conditions like heavy rain hit the threshold, your payout triggers automatically. No manual claims required.
            </div>
            <TriggerEngine zone="560001" />
            <RiskMap />
          </div>
        )}

        {activeTab === 'claims' && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <div className="text-sm text-light/80 bg-border-dark/20 p-3 rounded border border-border-dark">
              <strong>Payouts & Fraud Detection:</strong> Every auto-claim is verified against your live GPS and job history (CCSS Score) to prevent fraud. Approved claims are paid instantly to your wallet.
            </div>
            <FraudStatus ccssScore={claims?.[0]?.ccss_score || 25} />
            <ClaimsFlow />
            
            {/* Recent list inside claims tab */}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border-dark">
              <h3 className="font-mono text-xs tracking-widest text-light/50 mb-1">HISTORY</h3>
              {claims?.map((claim, idx) => (
                <div key={idx} className={`p-3 border border-border-dark flex justify-between items-center font-mono text-xs
                  ${claim.status === 'APPROVED' ? 'bg-teal/5' : ''}`}>
                  <div className="flex flex-col gap-1">
                    <span className="text-light/50">{new Date(claim.timestamp).toLocaleDateString()}</span>
                    <span className="text-light">{claim.disruption_type} Trigger</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-teal font-bold data-mono text-sm">+₹{claim.amount}</span>
                    <span className={`text-[10px] px-1 border tracking-wide uppercase ${
                      claim.status === 'APPROVED' ? 'border-teal/30 text-teal' : 'border-amber/30 text-amber'}`}>
                      [{claim.status}]
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
