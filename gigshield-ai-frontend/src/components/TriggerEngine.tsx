import React, { useState, useEffect } from 'react';
import { Activity, RefreshCw } from 'lucide-react';

export default function TriggerEngine({ zone = '560001' }: { zone?: string }) {
  const [data, setData] = useState<{ type: string, value: string, threshold: string, triggered: boolean }[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  // Poll mock API
  const fetchData = async () => {
    setRefreshing(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const res = await fetch(`${apiBase}/disruptions?zone=${zone}`);
      const d = await res.json();
      if(d && d.length > 0) setData(d);
    } catch (e) {
      console.error(e);
      // Fallback
      setData([
        { type: "Heavy Rain", value: "45mm", threshold: "> 40mm", triggered: true },
        { type: "Heatwave", value: "38°C", threshold: "> 42°C", triggered: false },
        { type: "AQI", value: "150", threshold: "> 350", triggered: false },
        { type: "Traffic", value: "8 km/h", threshold: "< 10 km/h", triggered: true }
      ]);
    }
    setTimeout(() => setRefreshing(false), 500);
  };

  useEffect(() => {
    fetchData();
    const int = setInterval(fetchData, 300000); // 5 minutes
    return () => clearInterval(int);
  }, [zone]);

  return (
    <div className="flat-panel p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-border-dark pb-2">
        <h3 className="font-mono text-xs text-light/50 flex gap-2 items-center">
          <Activity className="w-3 h-3 text-teal" />
          PARAMETRIC FEED
        </h3>
        <button onClick={fetchData} className={refreshing ? "animate-spin" : ""}>
          <RefreshCw className="w-3 h-3 text-light/30 hover:text-light transition-colors" />
        </button>
      </div>
      
      <div className="flex flex-col gap-3 font-mono text-xs">
        {data.length === 0 ? (
          <div className="text-light/30 uppercase text-center py-2 animate-pulse">[ AWAITING TELEMETRY ]</div>
        ) : (
          data.map((item, idx) => (
            <div key={idx} className={`flex justify-between p-2 items-center border 
              ${item.triggered ? 'bg-amber/10 border-amber/30' : 'bg-transparent border-border-dark'}`}>
              <div className="flex flex-col gap-1 w-1/2">
                <span className={`uppercase font-sans font-bold tracking-tight ${item.triggered ? 'text-amber' : 'text-light'}`}>
                  {item.type}
                </span>
                <span className="data-mono text-[10px] text-light/50">Curr: {item.value}</span>
              </div>
              <div className="flex flex-col gap-1 items-end w-1/2 text-right">
                <span className="text-[10px] text-light/40 uppercase tracking-widest leading-none">TH {item.threshold}</span>
                <span className={`font-bold px-1 uppercase ${item.triggered ? 'text-amber outline outline-1 outline-amber mt-1 bg-amber/5' : 'text-teal'}`}>
                  {item.triggered ? '[TRIGGERED]' : '[CLEAR]'}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
