import { Link } from 'react-router-dom';
import { 
  ArrowLeft, AlertTriangle,
  CloudRain, Car, Sun, Wind, ShieldCheck
} from 'lucide-react';

export default function Dashboard() {
  const earningsData = [
    { week: 'W1', value: 2600, percentage: 65 },
    { week: 'W2', value: 2100, percentage: 52 },
    { week: 'W3', value: 3200, percentage: 80 },
    { week: 'W4', value: 2450, percentage: 61 },
    { week: 'W5', value: 3200, percentage: 80 },
    { week: 'W6', value: 3840, percentage: 95 }
  ];

  const coverage = [
    { name: 'Heavy rain', status: 'Active', color: 'text-green-400' },
    { name: 'Heatwave', status: 'Active', color: 'text-green-400' },
    { name: 'Pollution (AQI)', status: 'Active', color: 'text-green-400' },
    { name: 'Traffic jam', status: 'Active', color: 'text-green-400' },
    { name: 'Curfew / shutdown', status: 'Upgrade to Pro', color: 'text-white/30' },
    { name: 'Flash flood', status: 'Max only', color: 'text-white/30' }
  ];

  const payouts = [
    { title: 'Heavy rain trigger', time: 'Today, 6:42 PM · 68mm rainfall detected', amount: '+₹350', status: 'Paid', icon: <CloudRain className="w-5 h-5" /> },
    { title: 'Traffic congestion', time: 'Yesterday, 8:15 AM · Avg speed 6 km/h', amount: '+₹350', status: 'Paid', icon: <Car className="w-5 h-5" /> },
    { title: 'Heatwave trigger', time: 'Mar 30 · 44°C recorded in zone', amount: '+₹350', status: 'Paid', icon: <Sun className="w-5 h-5" /> },
    { title: 'Pollution alert', time: 'Mar 28 · AQI 381 in Chennai South', amount: '+₹350', status: 'Paid', icon: <Wind className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-white selection:text-[#000000] p-4 lg:p-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-2">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div />
        </header>

        {/* Top Profile Bar */}
        <header className="flex flex-wrap justify-between items-center bg-white/[0.03] border border-white/25 rounded-2xl p-4 lg:p-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xl">
              AK
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight">Arjun Kumar</h1>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <p className="text-sm opacity-50">Zomato · Chennai · Member since Jan 2025</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              ShieldPlus
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs opacity-80 font-mono">
              Zone 3 · Medium risk
            </div>
          </div>
        </header>


        {/* Dynamic Alert Banner */}
        <div className="bg-amber-950/20 border border-amber-900/30 rounded-2xl p-5 flex gap-4 items-start relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
          <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-amber-500 tracking-tight">
               Heavy rain alert — Chennai North zone
            </h3>
            <p className="text-sm opacity-80 leading-relaxed text-amber-200/70">
              Rainfall forecast 62mm tonight. Trigger threshold (40mm) likely to be crossed. Payout will be auto-credited to your wallet.
            </p>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'THIS WEEK\'S EARNINGS', value: '₹3,840', sub: '↑ vs ₹3,200 last week', color: 'text-white' },
            { label: 'PAYOUTS RECEIVED', value: '₹1,050', sub: '3 triggers this week', color: 'text-green-400' },
            { label: 'PREMIUM DUE', value: '₹25', sub: 'Auto-deducted Sunday', color: 'text-amber-400', hasAction: true },
            { label: 'TRUST SCORE', value: '82', sub: 'High · fast payouts', color: 'text-blue-400' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/25 rounded-2xl p-5 flex flex-col gap-2 relative group md:hover:bg-white/[0.05] transition-all">
               <span className="text-[9px] font-bold opacity-40 tracking-widest uppercase">{stat.label}</span>
               <div className="flex items-center justify-between">
                 <span className={`text-2xl font-black tracking-tight ${stat.color}`}>{stat.value}</span>
                 {stat.hasAction && (
                   <button className="text-[11px] font-bold bg-amber-400 text-black px-4 py-1.5 rounded-full hover:bg-amber-300 transition-colors">
                     Pay now
                   </button>
                 )}
               </div>
               <span className="text-[10px] opacity-40 font-mono">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Main Visuals Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Earnings Chart Card */}
          <div className="bg-white/[0.03] border border-white/25 rounded-3xl p-8 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm tracking-widest opacity-40 uppercase">WEEKLY EARNINGS (LAST 6 WEEKS)</h3>
            </div>
            <div className="flex flex-col gap-5">
              {earningsData.map((d) => (
                <div key={d.week} className="flex items-center gap-4 group">
                  <span className="text-xs font-mono opacity-40 w-6">{d.week}</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500/40 group-last:bg-blue-500 group-last:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-1000" 
                      style={{ width: `${d.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono opacity-80 w-12 text-right">₹{d.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Score Card */}
          <div className="bg-white/[0.03] border border-white/25 rounded-3xl p-8 flex flex-col gap-6">
            <h3 className="font-bold text-sm tracking-widest opacity-40 uppercase">TRUST SCORE BREAKDOWN</h3>
            <div className="flex items-start gap-6">
              <span className="text-6xl font-black text-green-400 tracking-tighter leading-none">82</span>
              <div className="flex flex-col gap-1 py-1">
                <span className="font-bold">High trust</span>
                <p className="text-sm opacity-50 italic text-white/50">Instant payouts enabled</p>
              </div>
            </div>
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mt-4">
              <div className="w-[82%] h-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
               {[
                 { label: 'GPS verified', active: true },
                 { label: 'No fraud flags', active: true },
                 { label: '6 wk streak', active: true },
                 { label: 'Sensor consistent', active: false },
                 { label: 'Real movement', active: false }
               ].map((tag) => (
                 <span key={tag.label} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border 
                   ${tag.active ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-white/5 border-white/10 opacity-30'}`}>
                   {tag.label}
                 </span>
               ))}
            </div>
          </div>

          {/* Coverage Active Card */}
          <div className="bg-white/[0.03] border border-white/25 rounded-3xl p-8 flex flex-col gap-6">
            <h3 className="font-bold text-sm tracking-widest opacity-40 uppercase">COVERAGE ACTIVE</h3>
            <div className="flex flex-col gap-4">
               {coverage.map((item) => (
                 <div key={item.name} className="flex justify-between items-center border-b border-white/5 pb-2">
                   <div className="flex items-center gap-3">
                     <div className={`w-2 h-2 rounded-full ${item.status === 'Active' ? 'bg-green-500' : 'bg-white/20'}`}></div>
                     <span className={`text-sm ${item.status === 'Active' ? '' : 'opacity-40'}`}>{item.name}</span>
                   </div>
                   <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${item.color}`}>
                     {item.status === 'Active' ? '✓ Active' : item.status}
                   </span>
                 </div>
               ))}
            </div>
          </div>

          {/* Premium Details Card */}
          <div className="bg-white/[0.03] border border-white/25 rounded-3xl p-8 flex flex-col gap-6">
            <h3 className="font-bold text-sm tracking-widest opacity-40 uppercase">PREMIUM DETAILS</h3>
            <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between opacity-80">
                  <span className="opacity-50">Base plan</span>
                  <span className="font-bold">ShieldPlus</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-50">Weekly rate</span>
                  <span className="font-bold font-mono">₹25</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-50">Zone multiplier</span>
                  <span className="font-bold font-mono text-white/80">×1.2 (Zone 3)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="opacity-50">AI adjustment</span>
                  <span className="font-bold font-mono text-blue-400">+₹3 (monsoon)</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-50 italic">Safety valve</span>
                  <span className="font-bold text-green-400/60 font-mono">Not triggered</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="font-bold opacity-80 uppercase tracking-widest text-[11px]">Final premium</span>
                  <span className="text-xl font-black font-mono">₹25</span>
                </div>
                <div className="flex justify-between items-center mt-4 p-4 bg-white/5 rounded-2xl">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Next due</span>
                    <span className="font-bold">Sunday, Apr 6</span>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-green-400 opacity-60" />
                </div>
            </div>
          </div>

        </div>

        {/* Payout History Section */}
        <div className="bg-white/[0.03] border border-white/25 rounded-3xl p-8 flex flex-col gap-8 mb-12">
          <h3 className="font-bold text-sm tracking-widest opacity-40 uppercase">RECENT PAYOUT HISTORY</h3>
          <div className="flex flex-col gap-6">
             {payouts.map((p, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-white/[0.02] p-4 -m-4 rounded-2xl transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center opacity-80">
                      {p.icon}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="font-bold text-lg">{p.title}</h4>
                      <p className="text-xs opacity-40 font-mono">{p.time}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-green-400 font-black text-xl tracking-tight">{p.amount}</span>
                    <span className="text-[12px] font-bold tracking-widest uppercase bg-green-500/10 text-green-500 border border-green-500/20 px-2.5 py-0.5 rounded-full">
                      {p.status}
                    </span>
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* Navigation Footer */}
        <footer className="py-12 border-t border-white/10 flex justify-between items-center">
            <div />
            <h1 className="text-2xl font-bold tracking-tighter">GigShield</h1>
        </footer>
      </div>
    </div>
  );
}
