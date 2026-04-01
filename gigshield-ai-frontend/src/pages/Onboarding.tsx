import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Activity, MapPin } from 'lucide-react';

const MOCK_ZONES: Record<string, { tier: number, risk: number, color: string, badge: string }> = {
  '560034': { tier: 1, risk: 15, color: 'text-green border-green', badge: 'bg-green/10 text-green' },
  '560001': { tier: 3, risk: 25, color: 'text-amber border-amber', badge: 'bg-amber/10 text-amber' },
  '560068': { tier: 5, risk: 35, color: 'text-red border-red', badge: 'bg-red/10 text-red' }
};

export default function Onboarding() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Bengaluru',
    pincode: '',
    earnings: ''
  });

  const [zoneData, setZoneData] = useState<any>(null);

  useEffect(() => {
    if (formData.pincode.length === 6) {
      const zone = MOCK_ZONES[formData.pincode] || MOCK_ZONES['560001'];
      setZoneData(zone);
    } else {
      setZoneData(null);
    }
  }, [formData.pincode]);

  const earningsVal = parseInt(formData.earnings) || 0;
  const safetyValveActive = earningsVal > 0 && earningsVal < 2000;
  
  // Premium Calculation
  const baseFee = 10;
  const zoneRisk = zoneData ? zoneData.risk : 0;
  const discount = safetyValveActive ? 15 : 0; // Simple flat discount mock
  const premium = baseFee + zoneRisk - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zoneData) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <header className="flex items-center gap-3 border-b border-border-dark pb-4">
        <ShieldCheck className="w-8 h-8 text-teal" />
        <div>
          <h1 className="text-xl font-sans tracking-tight text-light">GigShield <span className="text-teal">AI</span></h1>
          <p className="text-xs font-mono text-light/50">SMART PARAMETRIC COVERAGE</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-xs font-mono text-light/70 uppercase">Full Name</span>
            <input 
              type="text" 
              required
              className="flat-panel p-3 text-light focus:outline-none focus:border-teal transition-colors"
              placeholder="e.g. Ravi Kumar"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-mono text-light/70 uppercase">Phone Number</span>
            <input 
              type="tel" 
              required
              className="flat-panel p-3 data-mono focus:outline-none focus:border-teal transition-colors"
              placeholder="9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-xs font-mono text-light/70 uppercase">City</span>
              <input 
                type="text" 
                disabled
                className="flat-panel p-3 text-light/50 bg-border-dark/20 cursor-not-allowed"
                value={formData.city}
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-xs font-mono text-light/70 uppercase">Pin Code</span>
              <input 
                type="text" 
                required
                maxLength={6}
                className="flat-panel p-3 data-mono text-amber focus:outline-none focus:border-amber transition-colors"
                placeholder="560001"
                value={formData.pincode}
                onChange={(e) => setFormData({...formData, pincode: e.target.value.replace(/\D/g,'')})}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-mono text-light/70 uppercase">Avg. Weekly Earnings (₹)</span>
            <input 
              type="number" 
              required
              className="flat-panel p-3 data-mono focus:outline-none focus:border-teal transition-colors"
              placeholder="e.g. 2500"
              value={formData.earnings}
              onChange={(e) => setFormData({...formData, earnings: e.target.value})}
            />
          </label>
        </div>

        {zoneData && (
          <div className="flat-panel p-4 flex flex-col gap-4 border-l-4 border-l-teal animate-in fade-in slide-in-from-bottom-2">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-light/50">DETECTED RISK TIER</span>
                <div className={`text-lg font-bold flex items-center gap-2 ${zoneData.color}`}>
                  <Activity className="w-5 h-5" /> TIER {zoneData.tier}
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-xs font-mono text-light/50">WEEKLY PREMIUM</span>
                <div className="text-xl data-mono text-teal">₹{premium}</div>
              </div>
            </div>

            {safetyValveActive && (
              <div className="flat-panel border-teal border-dashed bg-teal/5 p-3 flex justify-between items-center text-sm">
                <span className="text-teal font-mono">SAFETY VALVE ACTIVE</span>
                <span className="text-teal font-bold">-₹15 DISCOUNT</span>
              </div>
            )}
          </div>
        )}

        <button 
          type="submit" 
          disabled={!zoneData}
          className={`mt-4 p-4 flex items-center justify-center gap-2 font-bold font-sans transition-all w-full
            ${zoneData ? 'bg-teal text-dark hover:bg-teal/90' : 'bg-border-dark text-light/30 cursor-not-allowed'}`}
        >
          ACTIVATE COVERAGE <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
